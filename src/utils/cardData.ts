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
  { id: "in11", name: "RBL Bank", country: "India" },
  { id: "in12", name: "IndusInd Bank", country: "India" },
  { id: "in13", name: "Federal Bank", country: "India" },
  
  // International Banks operating in both
  { id: "both1", name: "HSBC", country: "Both" },
  { id: "both2", name: "Standard Chartered", country: "Both" },
  { id: "both3", name: "Deutsche Bank", country: "Both" },
  { id: "both4", name: "Citibank", country: "Both" },
  { id: "both5", name: "American Express", country: "Both" },
  
  // Other/Custom option
  { id: "custom", name: "Other Bank", country: "Both" }
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
  { id: "in1_6", name: "SBI Card ELITE", bankId: "in1", provider: "Visa" },
  { id: "in1_7", name: "SBI Card Unnati", bankId: "in1", provider: "RuPay" },
  { id: "in1_8", name: "SBI Card IRCTC Platinum", bankId: "in1", provider: "RuPay" },
  { id: "in1_9", name: "SBI Card BPCL", bankId: "in1", provider: "Visa" },
  { id: "in1_10", name: "SBI Card Air India Signature", bankId: "in1", provider: "Visa" },
  { id: "in1_11", name: "SBI Card Air India Platinum", bankId: "in1", provider: "Visa" },
  { id: "in1_12", name: "SBI Card Etihad Guest", bankId: "in1", provider: "Visa" },
  { id: "in1_13", name: "SBI Card Ola Money", bankId: "in1", provider: "Visa" },
  { id: "in1_14", name: "SBI Card Paytm", bankId: "in1", provider: "RuPay" },
  { id: "in1_15", name: "SBI Card FBB STYLEUP", bankId: "in1", provider: "Visa" },
  { id: "in1_16", name: "SBI Card Apollo", bankId: "in1", provider: "Visa" },
  { id: "in1_17", name: "SBI Card Yatra", bankId: "in1", provider: "Visa" },
  
  // HDFC Cards (India)
  { id: "in2_1", name: "HDFC Diners Club Black", bankId: "in2", provider: "Diners Club" },
  { id: "in2_2", name: "HDFC Regalia", bankId: "in2", provider: "Visa" },
  { id: "in2_3", name: "HDFC Millennia", bankId: "in2", provider: "Mastercard" },
  { id: "in2_4", name: "HDFC MoneyBack", bankId: "in2", provider: "Mastercard" },
  { id: "in2_5", name: "HDFC Freedom", bankId: "in2", provider: "RuPay" },
  { id: "in2_6", name: "HDFC Pixel", bankId: "in2", provider: "Visa" },
  { id: "in2_7", name: "HDFC Infinia", bankId: "in2", provider: "Visa" },
  { id: "in2_8", name: "HDFC Business MoneyBack", bankId: "in2", provider: "Mastercard" },
  { id: "in2_9", name: "HDFC LIC", bankId: "in2", provider: "RuPay" },
  { id: "in2_10", name: "HDFC Infinia Metal Edition", bankId: "in2", provider: "Visa" },
  { id: "in2_11", name: "HDFC Regalia Gold", bankId: "in2", provider: "Visa" },
  { id: "in2_12", name: "HDFC MoneyBack+", bankId: "in2", provider: "Visa" },
  { id: "in2_13", name: "HDFC Titanium Times", bankId: "in2", provider: "Visa" },
  { id: "in2_14", name: "HDFC Platinum Times", bankId: "in2", provider: "Visa" },
  { id: "in2_15", name: "HDFC Bharat Cashback", bankId: "in2", provider: "RuPay" },
  { id: "in2_16", name: "HDFC Solitaire", bankId: "in2", provider: "Visa" },
  { id: "in2_17", name: "HDFC Diners ClubMiles", bankId: "in2", provider: "Diners Club" },
  { id: "in2_18", name: "HDFC Diners Club Premium", bankId: "in2", provider: "Diners Club" },
  { id: "in2_19", name: "HDFC Business Regalia", bankId: "in2", provider: "Visa" },
  { id: "in2_20", name: "HDFC Business Platinum", bankId: "in2", provider: "Visa" },
  
  // ICICI Cards (India)
  { id: "in3_1", name: "ICICI Coral", bankId: "in3", provider: "Mastercard" },
  { id: "in3_2", name: "ICICI Platinum", bankId: "in3", provider: "Mastercard" },
  { id: "in3_3", name: "ICICI Amazon Pay", bankId: "in3", provider: "Visa" },
  { id: "in3_4", name: "ICICI Rubyx", bankId: "in3", provider: "Visa" },
  { id: "in3_5", name: "ICICI HPCL", bankId: "in3", provider: "RuPay" },
  { id: "in3_6", name: "ICICI Sapphiro", bankId: "in3", provider: "Visa" },
  { id: "in3_7", name: "ICICI Platinum Chip", bankId: "in3", provider: "Mastercard" },
  { id: "in3_8", name: "ICICI HPCL Coral", bankId: "in3", provider: "Visa" },
  { id: "in3_9", name: "ICICI Manchester United", bankId: "in3", provider: "Visa" },
  { id: "in3_10", name: "ICICI Ferrari Signature", bankId: "in3", provider: "Visa" },
  { id: "in3_11", name: "ICICI MakeMyTrip Signature", bankId: "in3", provider: "Visa" },
  { id: "in3_12", name: "ICICI Expressions", bankId: "in3", provider: "Mastercard" },
  
  // Axis Cards (India)
  { id: "in4_1", name: "Axis Flipkart", bankId: "in4", provider: "Visa" },
  { id: "in4_2", name: "Axis My Zone", bankId: "in4", provider: "RuPay" },
  { id: "in4_3", name: "Axis Neo", bankId: "in4", provider: "Mastercard" },
  { id: "in4_4", name: "Axis Privilege", bankId: "in4", provider: "Visa" },
  { id: "in4_5", name: "Axis Magnus", bankId: "in4", provider: "Visa" },
  { id: "in4_6", name: "Axis Select", bankId: "in4", provider: "Visa" },
  { id: "in4_7", name: "Axis Freecharge", bankId: "in4", provider: "Visa" },
  { id: "in4_8", name: "Axis Buzz", bankId: "in4", provider: "Visa" },
  { id: "in4_9", name: "Axis Vistara Infinite", bankId: "in4", provider: "Visa" },
  { id: "in4_10", name: "Axis Vistara Signature", bankId: "in4", provider: "Visa" },
  { id: "in4_11", name: "Axis Vistara Platinum", bankId: "in4", provider: "Visa" },
  
  // Kotak Mahindra Bank Cards (India)
  { id: "in5_1", name: "Kotak Royale Signature", bankId: "in5", provider: "Visa" },
  { id: "in5_2", name: "Kotak Privy League Signature", bankId: "in5", provider: "Visa" },
  { id: "in5_3", name: "Kotak League Platinum", bankId: "in5", provider: "Mastercard" },
  { id: "in5_4", name: "Kotak Essentia Platinum", bankId: "in5", provider: "Mastercard" },
  { id: "in5_5", name: "Kotak NRI Royale Signature", bankId: "in5", provider: "Visa" },
  { id: "in5_6", name: "Kotak PVR Platinum", bankId: "in5", provider: "Visa" },
  { id: "in5_7", name: "Kotak PVR Gold", bankId: "in5", provider: "Visa" },
  { id: "in5_8", name: "Kotak Urbane Gold", bankId: "in5", provider: "Visa" },
  { id: "in5_9", name: "Kotak Fortune Gold", bankId: "in5", provider: "Visa" },
  { id: "in5_10", name: "Kotak Aqua Gold", bankId: "in5", provider: "Visa" },
  { id: "in5_11", name: "Kotak Trump Gold", bankId: "in5", provider: "Visa" },
  
  // IndusInd Bank (India)
  { id: "in12_1", name: "IndusInd Bank Pinnacle", bankId: "in12", provider: "Visa" },
  { id: "in12_2", name: "IndusInd Bank Legend", bankId: "in12", provider: "Visa" },
  { id: "in12_3", name: "IndusInd Bank Iconia", bankId: "in12", provider: "Visa" },
  { id: "in12_4", name: "IndusInd Bank Platinum Aura", bankId: "in12", provider: "Mastercard" },
  { id: "in12_5", name: "IndusInd Bank Platinum Select", bankId: "in12", provider: "Mastercard" },
  { id: "in12_6", name: "IndusInd Bank Platinum", bankId: "in12", provider: "Visa" },
  { id: "in12_7", name: "IndusInd Bank Duo", bankId: "in12", provider: "Visa" },
  { id: "in12_8", name: "IndusInd Bank Nexxt", bankId: "in12", provider: "Mastercard" },
  { id: "in12_9", name: "IndusInd Bank Celesta", bankId: "in12", provider: "Visa" },
  { id: "in12_10", name: "IndusInd Bank Signature Legend", bankId: "in12", provider: "Visa" },
  
  // RBL Bank (India)
  { id: "in11_1", name: "RBL Platinum Maxima Plus", bankId: "in11", provider: "Visa" },
  { id: "in11_2", name: "RBL Platinum Maxima", bankId: "in11", provider: "Visa" },
  { id: "in11_3", name: "RBL Platinum Delight", bankId: "in11", provider: "Visa" },
  { id: "in11_4", name: "RBL Shoprite", bankId: "in11", provider: "Mastercard" },
  { id: "in11_5", name: "RBL Cookies", bankId: "in11", provider: "Visa" },
  { id: "in11_6", name: "RBL Icon", bankId: "in11", provider: "Visa" },
  { id: "in11_7", name: "RBL World Safari", bankId: "in11", provider: "Visa" },
  { id: "in11_8", name: "RBL iGlobe", bankId: "in11", provider: "Visa" },
  { id: "in11_9", name: "RBL Play", bankId: "in11", provider: "Visa" },
  { id: "in11_10", name: "RBL Novio", bankId: "in11", provider: "Mastercard" },
  { id: "in11_11", name: "RBL Paisabazaar Duet Plus", bankId: "in11", provider: "Visa" },
  { id: "in11_12", name: "RBL LazyPay", bankId: "in11", provider: "Visa" },
  { id: "in11_13", name: "RBL Insignia Preferred Banking", bankId: "in11", provider: "Visa" },
  { id: "in11_14", name: "RBL Monthly Treats", bankId: "in11", provider: "Mastercard" },
  { id: "in11_15", name: "RBL Popcorn", bankId: "in11", provider: "Visa" },
  { id: "in11_16", name: "RBL Movies and More", bankId: "in11", provider: "Visa" },
  { id: "in11_17", name: "RBL Blockbuster", bankId: "in11", provider: "Mastercard" },
  { id: "in11_18", name: "RBL Titanium Delight", bankId: "in11", provider: "Visa" },
  { id: "in11_19", name: "RBL vCard", bankId: "in11", provider: "Visa" },
  { id: "in11_20", name: "RBL Fun+", bankId: "in11", provider: "Visa" },
  { id: "in11_21", name: "RBL World Prime", bankId: "in11", provider: "Visa" },
  { id: "in11_22", name: "RBL Platinum TravelEasy", bankId: "in11", provider: "Visa" },
  { id: "in11_23", name: "RBL Platinum ShopSmart", bankId: "in11", provider: "Visa" },
  { id: "in11_24", name: "RBL Platinum ValuePlus", bankId: "in11", provider: "Mastercard" },
  { id: "in11_25", name: "RBL Platinum Max", bankId: "in11", provider: "Visa" },
  
  // Yes Bank (India)
  { id: "in10_1", name: "YES Prosperity Edge", bankId: "in10", provider: "Mastercard" },
  { id: "in10_2", name: "YES Prosperity Rewards Plus", bankId: "in10", provider: "Mastercard" },
  { id: "in10_3", name: "YES Prosperity Rewards", bankId: "in10", provider: "Mastercard" },
  { id: "in10_4", name: "YES Prosperity Cashback Plus", bankId: "in10", provider: "Visa" },
  { id: "in10_5", name: "YES First Preferred", bankId: "in10", provider: "Mastercard" },
  { id: "in10_6", name: "YES First Exclusive", bankId: "in10", provider: "Mastercard" },
  
  // Federal Bank (India)
  { id: "in13_1", name: "Federal Bank RuPay Signet", bankId: "in13", provider: "RuPay" },
  { id: "in13_2", name: "Federal Bank Visa Imperio", bankId: "in13", provider: "Visa" },
  { id: "in13_3", name: "Federal Bank Visa Celesta", bankId: "in13", provider: "Visa" },
  { id: "in13_4", name: "Federal Bank RuPay Wave", bankId: "in13", provider: "RuPay" },
  { id: "in13_5", name: "Federal Bank Scapia", bankId: "in13", provider: "Visa" },
  { id: "in13_6", name: "Federal Bank OneCard", bankId: "in13", provider: "Visa" },
  
  // HSBC Cards (Both)
  { id: "both1_1", name: "HSBC Cash Back", bankId: "both1", provider: "Visa" },
  { id: "both1_2", name: "HSBC Platinum", bankId: "both1", provider: "Visa" },
  { id: "both1_3", name: "HSBC Premier", bankId: "both1", provider: "Mastercard" },
  { id: "both1_4", name: "HSBC Smart Value", bankId: "both1", provider: "Visa" },
  { id: "both1_5", name: "HSBC Advance", bankId: "both1", provider: "Mastercard" },
  { id: "both1_6", name: "HSBC Taj", bankId: "both1", provider: "Visa" },
  { id: "both1_7", name: "HSBC TravelOne", bankId: "both1", provider: "Visa" },
  { id: "both1_8", name: "HSBC Live+", bankId: "both1", provider: "Mastercard" },
  
  // Standard Chartered Cards (Both)
  { id: "both2_1", name: "Standard Chartered Manhattan", bankId: "both2", provider: "Mastercard" },
  { id: "both2_2", name: "Standard Chartered Ultimate", bankId: "both2", provider: "Visa" },
  { id: "both2_3", name: "Standard Chartered Platinum Rewards", bankId: "both2", provider: "Visa" },
  { id: "both2_4", name: "Standard Chartered DigiSmart", bankId: "both2", provider: "Mastercard" },
  { id: "both2_5", name: "Standard Chartered Emirates", bankId: "both2", provider: "Visa" },
  { id: "both2_6", name: "Standard Chartered EaseMyTrip", bankId: "both2", provider: "Visa" },
  { id: "both2_7", name: "Standard Chartered Rewards", bankId: "both2", provider: "Visa" },
  { id: "both2_8", name: "Standard Chartered Smart", bankId: "both2", provider: "Visa" },
  { id: "both2_9", name: "Standard Chartered Super Value Titanium", bankId: "both2", provider: "Mastercard" },
  { id: "both2_10", name: "Standard Chartered Visa Infinite", bankId: "both2", provider: "Visa" },
  
  // Deutsche Bank Cards (Both)
  { id: "both3_1", name: "Deutsche Bank Global", bankId: "both3", provider: "Mastercard" },
  { id: "both3_2", name: "Deutsche Bank Platinum", bankId: "both3", provider: "Visa" },
  { id: "both3_3", name: "Deutsche Bank Miles & More", bankId: "both3", provider: "Mastercard" },
  { id: "both3_4", name: "Deutsche Bank Wealth", bankId: "both3", provider: "Visa" },
  { id: "both3_5", name: "Deutsche Bank Mastercard Standard", bankId: "both3", provider: "Mastercard" },
  { id: "both3_6", name: "Deutsche Bank Mastercard Gold", bankId: "both3", provider: "Mastercard" },
  
  // Citibank (Both)
  { id: "both4_1", name: "Citi Prestige", bankId: "both4", provider: "Mastercard" },
  { id: "both4_2", name: "Citi PremierMiles", bankId: "both4", provider: "Visa" },
  { id: "both4_3", name: "Citi Rewards", bankId: "both4", provider: "Mastercard" },
  { id: "both4_4", name: "Citi Cashback", bankId: "both4", provider: "Mastercard" },
  { id: "both4_5", name: "Citi IndianOil", bankId: "both4", provider: "Visa" },
  
  // American Express (Both)
  { id: "both5_1", name: "American Express Platinum Card", bankId: "both5", provider: "American Express" },
  { id: "both5_2", name: "American Express Platinum Reserve", bankId: "both5", provider: "American Express" },
  { id: "both5_3", name: "American Express Platinum Travel", bankId: "both5", provider: "American Express" },
  { id: "both5_4", name: "American Express Membership Rewards", bankId: "both5", provider: "American Express" },
  { id: "both5_5", name: "American Express SmartEarn", bankId: "both5", provider: "American Express" },
  
  // Custom Card (for any bank)
  { id: "custom_card", name: "Other Card Type", bankId: "custom", provider: "Custom" }
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
