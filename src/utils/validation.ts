
import { CardProvider } from "./types";

export const validateCardNumber = (cardNumber: string, provider: CardProvider): boolean => {
  // Remove spaces and dashes
  const normalized = cardNumber.replace(/[\s-]/g, "");
  
  // Check if it's a number
  if (!/^\d+$/.test(normalized)) {
    return false;
  }
  
  // Validate length based on provider
  switch(provider) {
    case "Visa":
      return normalized.length === 16 && normalized.startsWith("4");
    case "Mastercard":
      return normalized.length === 16 && /^5[1-5]/.test(normalized);
    case "American Express":
      return normalized.length === 15 && /^3[47]/.test(normalized);
    case "Discover":
      return normalized.length === 16 && /^6(?:011|5)/.test(normalized);
    case "RuPay":
      return normalized.length === 16 && /^6[0-9]/.test(normalized);
    case "Diners Club":
      return (normalized.length === 14 || normalized.length === 16) && /^3(?:0[0-5]|[68])/.test(normalized);
    case "JCB":
      return normalized.length === 16 && /^35/.test(normalized);
    case "Custom":
      return normalized.length >= 12 && normalized.length <= 19;
    default:
      return false;
  }
};

export const validateCVV = (cvv: string, provider: CardProvider): boolean => {
  if (!cvv) return true; // CVV is optional
  
  // Remove spaces and dashes
  const normalized = cvv.replace(/[\s-]/g, "");
  
  // Check if it's a number
  if (!/^\d+$/.test(normalized)) {
    return false;
  }
  
  // Validate length based on provider
  switch(provider) {
    case "American Express":
      return normalized.length === 4;
    default:
      return normalized.length === 3;
  }
};

export const formatCardNumber = (cardNumber: string, provider: CardProvider): string => {
  // Remove spaces and dashes
  const normalized = cardNumber.replace(/[\s-]/g, "");
  
  // Format based on provider
  switch(provider) {
    case "American Express":
      return normalized.replace(/(\d{4})(\d{6})(\d{5})/, "$1 $2 $3").trim();
    default:
      return normalized.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }
};

export const validateExpiryDate = (month: string, year: string): boolean => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() is 0-indexed
  
  const expiryYear = parseInt(year, 10);
  const expiryMonth = parseInt(month, 10);
  
  // Check if month is valid (1-12)
  if (expiryMonth < 1 || expiryMonth > 12) {
    return false;
  }
  
  // Check if year is valid (not in the past)
  if (expiryYear < currentYear) {
    return false;
  }
  
  // If year is current year, check if month is not in the past
  if (expiryYear === currentYear && expiryMonth < currentMonth) {
    return false;
  }
  
  return true;
};
