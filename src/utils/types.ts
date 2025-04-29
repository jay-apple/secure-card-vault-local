
export interface User {
  name: string;
  country: "India" | "United States";
}

export type CardProvider = 
  | "Visa" 
  | "Mastercard" 
  | "American Express" 
  | "Discover" 
  | "RuPay" 
  | "Diners Club" 
  | "JCB" 
  | "Custom";

export interface Bank {
  id: string;
  name: string;
  country: "India" | "United States" | "Both";
}

export interface CardType {
  id: string;
  name: string;
  bankId: string;
  provider: CardProvider;
}

export interface CreditCard {
  id: string;
  cardNumber: string;
  validFrom: {
    month: string;
    year: string;
  };
  validThru: {
    month: string;
    year: string;
  };
  cvv?: string;
  cardType: string;
  provider: CardProvider;
  bank: string;
  cardName: string;
}
