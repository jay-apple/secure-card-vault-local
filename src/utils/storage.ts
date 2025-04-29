
import { User, CreditCard } from "./types";

// Simple encryption function (for demo purposes - in production, use a proper encryption library)
const encrypt = (data: string): string => {
  return btoa(data); // Base64 encoding (NOT secure, just for demo)
};

// Simple decryption function (for demo purposes)
const decrypt = (data: string): string => {
  return atob(data); // Base64 decoding
};

// Save user data to local storage
export const saveUser = (user: User): void => {
  localStorage.setItem("secure-vault-user", encrypt(JSON.stringify(user)));
};

// Get user data from local storage
export const getUser = (): User | null => {
  const userData = localStorage.getItem("secure-vault-user");
  if (!userData) return null;
  
  try {
    return JSON.parse(decrypt(userData));
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

// Save credit card to local storage
export const saveCard = (card: CreditCard): void => {
  // Get existing cards
  const cards = getCards();
  
  // Add new card
  cards.push(card);
  
  // Save back to local storage
  localStorage.setItem("secure-vault-cards", encrypt(JSON.stringify(cards)));
};

// Update existing credit card
export const updateCard = (updatedCard: CreditCard): void => {
  // Get existing cards
  const cards = getCards();
  
  // Find and update the card
  const updatedCards = cards.map(card => 
    card.id === updatedCard.id ? updatedCard : card
  );
  
  // Save back to local storage
  localStorage.setItem("secure-vault-cards", encrypt(JSON.stringify(updatedCards)));
};

// Delete credit card
export const deleteCard = (cardId: string): void => {
  // Get existing cards
  const cards = getCards();
  
  // Filter out the card to delete
  const updatedCards = cards.filter(card => card.id !== cardId);
  
  // Save back to local storage
  localStorage.setItem("secure-vault-cards", encrypt(JSON.stringify(updatedCards)));
};

// Get all credit cards from local storage
export const getCards = (): CreditCard[] => {
  const cardsData = localStorage.getItem("secure-vault-cards");
  if (!cardsData) return [];
  
  try {
    return JSON.parse(decrypt(cardsData));
  } catch (error) {
    console.error("Error parsing cards data:", error);
    return [];
  }
};

// Clear all local storage data
export const clearStorage = (): void => {
  localStorage.removeItem("secure-vault-user");
  localStorage.removeItem("secure-vault-cards");
};

// Check if authentication is set up
export const isAuthenticated = (): boolean => {
  return localStorage.getItem("secure-vault-user") !== null;
};
