
import { Bank, CardType } from "./types";

// Banks for both countries
export const banks: Bank[] = [
  // US Banks
  { id: "us1", name: "Chase", country: "United States" },
  { id: "us2", name: "Bank of America", country: "United States" },
  { id: "us3", name: "Wells Fargo", country: "United States" },
  { id: "us4", name: "Citibank", country: "United States" },
  { id: "us5", name: "Capital One", country: "United States" },
  { id: "us6", name: "American Express", country: "United States" },
  { id: "us7", name: "Discover", country: "United States" },
  { id: "us8", name: "US Bank", country: "United States" },
  { id: "us9", name: "PNC Bank", country: "United States" },
  { id: "us10", name: "TD Bank", country: "United States" },
  
  // Indian Banks
  { id: "in1", name: "State Bank of India", country: "India" },
  { id: "in2", name: "HDFC Bank", country: "India" },
  { id: "in3", name: "ICICI Bank", country: "India" },
  { id: "in4", name: "Axis Bank", country: "India" },
  { id: "in5", name: "Kotak Mahindra Bank", country: "India" },
  { id: "in6", name: "Bank of Baroda", country: "India" },
  { id: "in7", name: "Punjab National Bank", country: "India" },
  { id: "in8", name: "Canara Bank", country: "India" },
  { id: "in9", name: "Union Bank of India", country: "India" },
  { id: "in10", name: "Yes Bank", country: "India" },
  
  // International Banks operating in both
  { id: "both1", name: "HSBC", country: "Both" },
  { id: "both2", name: "Standard Chartered", country: "Both" },
  { id: "both3", name: "Deutsche Bank", country: "Both" },
];

// Credit card types by bank
export const cardTypes: CardType[] = [
  // Chase Cards (US)
  { id: "us1_1", name: "Chase Sapphire Preferred", bankId: "us1", provider: "Visa" },
  { id: "us1_2", name: "Chase Sapphire Reserve", bankId: "us1", provider: "Visa" },
  { id: "us1_3", name: "Chase Freedom Unlimited", bankId: "us1", provider: "Visa" },
  { id: "us1_4", name: "Chase Freedom Flex", bankId: "us1", provider: "Mastercard" },
  
  // Bank of America Cards (US)
  { id: "us2_1", name: "Bank of America Cash Rewards", bankId: "us2", provider: "Visa" },
  { id: "us2_2", name: "Bank of America Travel Rewards", bankId: "us2", provider: "Visa" },
  { id: "us2_3", name: "Bank of America Premium Rewards", bankId: "us2", provider: "Visa" },
  
  // Wells Fargo Cards (US)
  { id: "us3_1", name: "Wells Fargo Active Cash", bankId: "us3", provider: "Visa" },
  { id: "us3_2", name: "Wells Fargo Reflect", bankId: "us3", provider: "Visa" },
  
  // Citibank Cards (US)
  { id: "us4_1", name: "Citi Double Cash", bankId: "us4", provider: "Mastercard" },
  { id: "us4_2", name: "Citi Custom Cash", bankId: "us4", provider: "Mastercard" },
  { id: "us4_3", name: "Citi Premier", bankId: "us4", provider: "Mastercard" },
  
  // Capital One Cards (US)
  { id: "us5_1", name: "Capital One Venture", bankId: "us5", provider: "Visa" },
  { id: "us5_2", name: "Capital One Quicksilver", bankId: "us5", provider: "Mastercard" },
  { id: "us5_3", name: "Capital One SavorOne", bankId: "us5", provider: "Mastercard" },
  
  // American Express Cards (US)
  { id: "us6_1", name: "American Express Gold", bankId: "us6", provider: "American Express" },
  { id: "us6_2", name: "American Express Platinum", bankId: "us6", provider: "American Express" },
  { id: "us6_3", name: "American Express Green", bankId: "us6", provider: "American Express" },
  
  // Discover Cards (US)
  { id: "us7_1", name: "Discover it Cash Back", bankId: "us7", provider: "Discover" },
  { id: "us7_2", name: "Discover it Miles", bankId: "us7", provider: "Discover" },
  
  // SBI Cards (India)
  { id: "in1_1", name: "SBI SimplyCLICK", bankId: "in1", provider: "Visa" },
  { id: "in1_2", name: "SBI SimplySAVE", bankId: "in1", provider: "Visa" },
  { id: "in1_3", name: "SBI Prime", bankId: "in1", provider: "Mastercard" },
  { id: "in1_4", name: "SBI Elite", bankId: "in1", provider: "Visa" },
  { id: "in1_5", name: "SBI Card PRIME RuPay", bankId: "in1", provider: "RuPay" },
  
  // HDFC Cards (India)
  { id: "in2_1", name: "HDFC Diners Club Black", bankId: "in2", provider: "Diners Club" },
  { id: "in2_2", name: "HDFC Regalia", bankId: "in2", provider: "Visa" },
  { id: "in2_3", name: "HDFC Millennia", bankId: "in2", provider: "Mastercard" },
  { id: "in2_4", name: "HDFC MoneyBack", bankId: "in2", provider: "Mastercard" },
  { id: "in2_5", name: "HDFC Freedom", bankId: "in2", provider: "RuPay" },
  
  // ICICI Cards (India)
  { id: "in3_1", name: "ICICI Coral", bankId: "in3", provider: "Mastercard" },
  { id: "in3_2", name: "ICICI Platinum", bankId: "in3", provider: "Mastercard" },
  { id: "in3_3", name: "ICICI Amazon Pay", bankId: "in3", provider: "Visa" },
  { id: "in3_4", name: "ICICI Rubyx", bankId: "in3", provider: "Visa" },
  { id: "in3_5", name: "ICICI HPCL", bankId: "in3", provider: "RuPay" },
  
  // Axis Cards (India)
  { id: "in4_1", name: "Axis Flipkart", bankId: "in4", provider: "Visa" },
  { id: "in4_2", name: "Axis My Zone", bankId: "in4", provider: "RuPay" },
  { id: "in4_3", name: "Axis Neo", bankId: "in4", provider: "Mastercard" },
  { id: "in4_4", name: "Axis Privilege", bankId: "in4", provider: "Visa" },
  
  // HSBC Cards (Both)
  { id: "both1_1", name: "HSBC Cash Back", bankId: "both1", provider: "Visa" },
  { id: "both1_2", name: "HSBC Platinum", bankId: "both1", provider: "Visa" },
  { id: "both1_3", name: "HSBC Premier", bankId: "both1", provider: "Mastercard" },
];

export const getCardProviders = () => [
  "Visa", 
  "Mastercard", 
  "American Express", 
  "Discover", 
  "RuPay", 
  "Diners Club", 
  "JCB", 
  "Custom"
];

export const getBanksByCountry = (country: "India" | "United States"): Bank[] => {
  return banks.filter(bank => bank.country === country || bank.country === "Both");
};

export const getCardTypesByBank = (bankId: string): CardType[] => {
  return cardTypes.filter(card => card.bankId === bankId);
};

export const getCardTypesByProvider = (provider: string): CardType[] => {
  return cardTypes.filter(card => card.provider === provider);
};

export const getMonths = () => [
  "01", "02", "03", "04", "05", "06", 
  "07", "08", "09", "10", "11", "12"
];

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  
  // Get years from current year minus 10 to current year plus 20
  for (let i = currentYear - 10; i <= currentYear + 20; i++) {
    years.push(i.toString().substring(2)); // Get last 2 digits
  }
  
  return years;
};
