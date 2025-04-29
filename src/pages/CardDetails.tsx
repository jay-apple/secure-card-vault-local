
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { getCards, deleteCard } from "@/utils/storage";
import { CreditCard } from "@/utils/types";
import { ChevronLeft, Trash2, Shield, Edit } from "lucide-react";
import { formatCardNumber } from "@/utils/validation";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

const CardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CreditCard | null>(null);
  const [showCVV, setShowCVV] = useState(false);
  const [showFullNumber, setShowFullNumber] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!id) {
      navigate("/dashboard");
      return;
    }

    // Get card details
    const cards = getCards();
    const foundCard = cards.find(c => c.id === id);
    
    if (!foundCard) {
      toast({
        title: "Card not found",
        description: "The requested card could not be found",
        variant: "destructive",
      });
      navigate("/dashboard");
      return;
    }
    
    setCard(foundCard);
  }, [id, navigate, toast]);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleDeleteCard = () => {
    if (!card) return;
    
    deleteCard(card.id);
    
    toast({
      title: "Card deleted",
      description: "Your card has been deleted successfully",
    });
    
    navigate("/dashboard");
  };

  const handleEditCard = () => {
    if (!card) return;
    navigate(`/edit-card/${card.id}`);
  };

  // Function to determine card CSS class based on provider
  const getCardClass = (provider: string) => {
    switch (provider) {
      case "Visa":
        return "card-visa";
      case "Mastercard":
        return "card-mastercard";
      case "American Express":
        return "card-amex";
      case "Discover":
        return "card-discover";
      case "RuPay":
        return "card-rupay";
      case "Diners Club":
        return "card-diners";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  if (!card) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

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
        <h1 className="text-2xl font-bold text-vault-secondary">Card Details</h1>
      </div>
      
      <div className="flex-grow">
        <div className={`credit-card ${getCardClass(card.provider)} mb-8`}>
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <div className="text-white/90 font-medium">{card.bank}</div>
              <div className="text-white font-bold">{card.provider}</div>
            </div>
            
            <div className="my-6">
              <div className="text-xl text-white/90 font-mono tracking-wider">
                {showFullNumber ? card.cardNumber : card.cardNumber.replace(/\d(?=\d{4})/g, "•")}
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <div className="text-white/70 text-xs mb-1">VALID THRU</div>
                <div className="text-white font-medium">
                  {card.validThru.month}/{card.validThru.year}
                </div>
              </div>
              <div>
                <div className="text-white/90 font-medium">{card.cardName}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-vault-secondary mb-4">Card Information</h2>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500">Card Number</div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">
                    {showFullNumber ? card.cardNumber : card.cardNumber.replace(/\d(?=\d{4})/g, "•")}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFullNumber(!showFullNumber)}
                  >
                    {showFullNumber ? "Hide" : "Show"}
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Card Provider</div>
                <div className="font-medium">{card.provider}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Bank</div>
                <div className="font-medium">{card.bank}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Card Name</div>
                <div className="font-medium">{card.cardName}</div>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-gray-500">Valid From</div>
                  <div className="font-medium">{card.validFrom.month}/{card.validFrom.year}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Valid Thru</div>
                  <div className="font-medium">{card.validThru.month}/{card.validThru.year}</div>
                </div>
              </div>
              
              {card.cvv && (
                <div>
                  <div className="text-sm text-gray-500">CVV</div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      {showCVV ? card.cvv : "•".repeat(card.cvv.length)}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowCVV(!showCVV)}
                    >
                      {showCVV ? "Hide" : "Show"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="pt-4">
            <div className="flex items-center justify-center bg-vault-light p-4 rounded-lg mb-6">
              <Shield className="h-5 w-5 text-vault-primary mr-2" />
              <span className="text-sm text-gray-600">Your card details are stored securely on your device</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleEditCard}
                className="w-full py-6 bg-vault-primary hover:bg-vault-primary/90 gap-2"
              >
                <Edit className="h-5 w-5" />
                Edit Card
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="outline"
                    className="w-full py-6 border-red-500 text-red-500 hover:bg-red-50 gap-2"
                  >
                    <Trash2 className="h-5 w-5" />
                    Delete Card
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Card</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this card? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleDeleteCard}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
