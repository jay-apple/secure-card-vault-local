
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getCards, getUser } from "@/utils/storage";
import { CreditCard as CardType, User } from "@/utils/types";
import { useNavigate } from "react-router-dom";
import { PlusCircle, CreditCard } from "lucide-react";
import { formatCardNumber } from "@/utils/validation";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cards, setCards] = useState<CardType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user and cards data
    const userData = getUser();
    const cardsData = getCards();
    
    if (!userData) {
      // User not found, redirect to registration
      navigate("/");
      return;
    }
    
    setUser(userData);
    setCards(cardsData);
  }, [navigate]);

  const handleAddCard = () => {
    navigate("/add-card");
  };

  const handleCardClick = (cardId: string) => {
    navigate(`/card/${cardId}`);
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

  // Function to mask card number
  const maskCardNumber = (cardNumber: string) => {
    if (!cardNumber) return "";
    const lastFourDigits = cardNumber.slice(-4);
    return `•••• •••• •••• ${lastFourDigits}`;
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-vault-light">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-vault-secondary">My Cards</h1>
        {user && (
          <p className="text-gray-600">Welcome, {user.name}</p>
        )}
      </div>
      
      <div className="space-y-6 flex-grow">
        {cards.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-xl shadow-sm text-center">
            <CreditCard className="h-16 w-16 text-vault-primary mb-4" />
            <h2 className="text-xl font-semibold text-vault-secondary mb-2">No cards added yet</h2>
            <p className="text-gray-500 mb-6">Add your first card to get started</p>
            <Button 
              onClick={handleAddCard}
              className="bg-vault-primary hover:bg-vault-primary/90"
            >
              Add Your First Card
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card) => (
              <div 
                key={card.id}
                className={`credit-card ${getCardClass(card.provider)} cursor-pointer`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <div className="text-white/90 font-medium">{card.bank}</div>
                    <div className="text-white font-bold">{card.provider}</div>
                  </div>
                  
                  <div className="my-6">
                    <div className="text-xl text-white/90 font-mono tracking-wider">
                      {maskCardNumber(card.cardNumber)}
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
            ))}
          </div>
        )}
      </div>
      
      {cards.length > 0 && (
        <div className="mt-6">
          <Button 
            onClick={handleAddCard}
            className="w-full py-6 gap-2 bg-vault-primary hover:bg-vault-primary/90"
          >
            <PlusCircle className="h-5 w-5" />
            Add Another Card
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
