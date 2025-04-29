
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { getUser, saveCard } from "@/utils/storage";
import { CardProvider, CardType, Bank, CreditCard } from "@/utils/types";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { 
  getBanksByCountry, 
  getCardProviders, 
  getCardTypesByBank, 
  getMonths, 
  getYears 
} from "@/utils/cardData";
import { 
  validateCardNumber, 
  validateCVV, 
  formatCardNumber
} from "@/utils/validation";

const AddCard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState<CardProvider | "">("");
  const [bankId, setBankId] = useState("");
  const [cardTypeId, setCardTypeId] = useState("");
  const [customCardName, setCustomCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validThruMonth, setValidThruMonth] = useState("");
  const [validThruYear, setValidThruYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [banks, setBanks] = useState<Bank[]>([]);
  const [cardTypes, setCardTypes] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [customBankName, setCustomBankName] = useState("");
  
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate("/");
      return;
    }
    
    // Set banks based on user's country
    setBanks(getBanksByCountry(user.country));
  }, [navigate]);

  useEffect(() => {
    // Update card types when bank changes
    if (bankId) {
      setCardTypes(getCardTypesByBank(bankId));
      setCardTypeId("");
    }
  }, [bankId]);

  const handleProviderChange = (value: string) => {
    setProvider(value as CardProvider);
    // Reset subsequent fields
    setBankId("");
    setCardTypeId("");
  };

  const handleBankChange = (value: string) => {
    setBankId(value);
    if (value === "custom") {
      setCustomBankName("");
    }
  };

  const handleCardTypeChange = (value: string) => {
    setCardTypeId(value);
    
    if (value === "custom_card") {
      setCustomCardName("");
      return;
    }
    
    // Find selected card type
    const selectedCardType = cardTypes.find(ct => ct.id === value);
    if (selectedCardType) {
      setProvider(selectedCardType.provider);
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCardNumber(value);
    
    if (provider && value) {
      const isValid = validateCardNumber(value, provider as CardProvider);
      setCardNumberError(isValid ? "" : "Invalid card number for this provider");
    } else {
      setCardNumberError("");
    }
  };

  const handleValidateCardNumber = () => {
    if (!cardNumber) {
      setCardNumberError("Card number is required");
      return false;
    }
    
    if (provider && !validateCardNumber(cardNumber, provider as CardProvider)) {
      setCardNumberError("Invalid card number for this provider");
      return false;
    }
    
    return true;
  };

  const handleValidateCVV = () => {
    if (cvv && provider && !validateCVV(cvv, provider as CardProvider)) {
      setCvvError("Invalid CVV");
      return false;
    }
    
    setCvvError("");
    return true;
  };

  const handleNext = () => {
    switch (step) {
      case 1:
        if (!provider) {
          toast({
            title: "Error",
            description: "Please select a card provider",
            variant: "destructive",
          });
          return;
        }
        setStep(2);
        break;
      case 2:
        if (!bankId) {
          toast({
            title: "Error",
            description: "Please select a bank",
            variant: "destructive",
          });
          return;
        }
        if (bankId === "custom" && !customBankName.trim()) {
          toast({
            title: "Error",
            description: "Please enter bank name",
            variant: "destructive",
          });
          return;
        }
        setStep(3);
        break;
      case 3:
        if (!cardTypeId) {
          toast({
            title: "Error",
            description: "Please select a card type",
            variant: "destructive",
          });
          return;
        }
        if (cardTypeId === "custom_card" && !customCardName.trim()) {
          toast({
            title: "Error",
            description: "Please enter card name",
            variant: "destructive",
          });
          return;
        }
        setStep(4);
        break;
      case 4:
        if (!handleValidateCardNumber()) {
          return;
        }
        setStep(5);
        break;
      case 5:
        if (!validThruMonth || !validThruYear) {
          toast({
            title: "Error",
            description: "Please select expiry month and year",
            variant: "destructive",
          });
          return;
        }
        setStep(6);
        break;
      case 6:
        handleSubmit();
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handleSubmit = () => {
    if (!handleValidateCVV()) {
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      // Get selected card type and bank
      const selectedCardType = cardTypes.find(ct => ct.id === cardTypeId);
      const selectedBank = banks.find(b => b.id === bankId);
      
      // Create a new card object
      const newCard: CreditCard = {
        id: Date.now().toString(),
        cardNumber,
        validFrom: {
          month: "01", // Default value since we're not collecting this anymore
          year: new Date().getFullYear().toString()
        },
        validThru: {
          month: validThruMonth,
          year: validThruYear
        },
        cvv,
        cardType: cardTypeId,
        provider: provider as CardProvider,
        bank: bankId === "custom" ? customBankName : (selectedBank ? selectedBank.name : "Unknown Bank"),
        cardName: cardTypeId === "custom_card" ? customCardName : (selectedCardType ? selectedCardType.name : "Unknown Card")
      };
      
      // Save the card
      saveCard(newCard);
      
      // Show success message
      toast({
        title: "Card added",
        description: "Your card has been added successfully",
      });
      
      // Navigate to dashboard
      navigate("/dashboard");
      
      setIsLoading(false);
    }, 800); // Simulate a delay
  };

  // Render step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-vault-secondary">Select Card Provider</h2>
            <div>
              <Label htmlFor="provider">Card Provider</Label>
              <Select value={provider} onValueChange={handleProviderChange}>
                <SelectTrigger id="provider" className="w-full p-4 mt-2">
                  <SelectValue placeholder="Select card provider" />
                </SelectTrigger>
                <SelectContent>
                  {getCardProviders().map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-vault-secondary">Select Bank</h2>
            <div>
              <Label htmlFor="bank">Issuing Bank</Label>
              <Select value={bankId} onValueChange={handleBankChange}>
                <SelectTrigger id="bank" className="w-full p-4 mt-2">
                  <SelectValue placeholder="Select issuing bank" />
                </SelectTrigger>
                <SelectContent>
                  {banks.map((bank) => (
                    <SelectItem key={bank.id} value={bank.id}>
                      {bank.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {bankId === "custom" && (
                <div className="mt-4">
                  <Label htmlFor="customBank">Bank Name</Label>
                  <Input
                    id="customBank"
                    placeholder="Enter bank name"
                    className="w-full p-4 mt-2"
                    value={customBankName}
                    onChange={(e) => setCustomBankName(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-vault-secondary">Select Card Type</h2>
            <div>
              <Label htmlFor="cardType">Card Type</Label>
              <Select value={cardTypeId} onValueChange={handleCardTypeChange}>
                <SelectTrigger id="cardType" className="w-full p-4 mt-2">
                  <SelectValue placeholder="Select card type" />
                </SelectTrigger>
                <SelectContent>
                  {cardTypes.map((cardType) => (
                    <SelectItem key={cardType.id} value={cardType.id}>
                      {cardType.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {cardTypeId === "custom_card" && (
                <div className="mt-4">
                  <Label htmlFor="customCardName">Card Name</Label>
                  <Input
                    id="customCardName"
                    placeholder="Enter card name"
                    className="w-full p-4 mt-2"
                    value={customCardName}
                    onChange={(e) => setCustomCardName(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-vault-secondary">Enter Card Number</h2>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                placeholder="Enter card number"
                className={`w-full p-4 mt-2 ${cardNumberError ? "border-red-500" : ""}`}
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
              {cardNumberError && (
                <p className="text-red-500 text-sm mt-1">{cardNumberError}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                For {provider} cards, enter {provider === "American Express" 
                  ? "15" 
                  : provider === "Diners Club" 
                    ? "14" 
                    : "16"}-digit number
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-vault-secondary">Enter Card Expiry</h2>
            
            <div>
              <Label>Valid Thru</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <Select value={validThruMonth} onValueChange={setValidThruMonth}>
                    <SelectTrigger className="w-full p-4">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {getMonths().map((month) => (
                        <SelectItem key={`thru-month-${month}`} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={validThruYear} onValueChange={setValidThruYear}>
                    <SelectTrigger className="w-full p-4">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {getYears().map((year) => (
                        <SelectItem key={`thru-year-${year}`} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-vault-secondary">Enter CVV (Optional)</h2>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                type="password"
                inputMode="numeric"
                placeholder="Enter CVV (optional)"
                className={`w-full p-4 mt-2 ${cvvError ? "border-red-500" : ""}`}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                maxLength={provider === "American Express" ? 4 : 3}
              />
              {cvvError && (
                <p className="text-red-500 text-sm mt-1">{cvvError}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                For {provider} cards, CVV is {provider === "American Express" ? "4" : "3"} digits
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-vault-light">
      <div className="mb-8 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-2" 
          onClick={handleBack}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-vault-secondary">Add New Card</h1>
      </div>
      
      <div className="flex-grow">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {renderStepContent()}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">Step {step} of 6</div>
          <div className="flex gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`h-1 w-6 rounded-full ${
                  i < step ? "bg-vault-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        
        <Button 
          onClick={handleNext}
          className="w-full py-6 bg-vault-primary hover:bg-vault-primary/90"
          disabled={isLoading}
        >
          {step === 6 ? (isLoading ? "Saving..." : "Save Card") : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default AddCard;
