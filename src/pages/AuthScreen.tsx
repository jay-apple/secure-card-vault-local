
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Fingerprint, Lock, Shield } from "lucide-react";
import { isAuthenticated } from "@/utils/storage";

const AuthScreen: React.FC = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already registered
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPin(value);
    setError("");
  };

  const handleUnlock = () => {
    if (pin.length < 4) {
      setError("PIN must be at least 4 digits");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate PIN verification
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleFingerprintAuth = () => {
    setIsLoading(true);
    
    // Simulate fingerprint verification
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-vault-light">
      <div className="w-full max-w-md space-y-10">
        <div className="text-center">
          <div className="rounded-full bg-vault-primary/10 p-6 inline-flex justify-center mb-6">
            <Shield className="h-16 w-16 text-vault-primary" />
          </div>
          <h1 className="text-2xl font-bold text-vault-secondary mb-2">Secure Card Vault</h1>
          <p className="text-gray-600">Authenticate to access your cards</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="password"
                placeholder="Enter PIN"
                className={`w-full p-4 text-center text-xl ${error ? "border-red-500" : ""}`}
                value={pin}
                onChange={handlePinChange}
                maxLength={6}
                inputMode="numeric"
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            
            <Button 
              onClick={handleUnlock}
              className="w-full py-6 bg-vault-primary hover:bg-vault-primary/90 gap-2"
              disabled={isLoading}
            >
              <Lock className="h-5 w-5" />
              {isLoading ? "Verifying..." : "Unlock with PIN"}
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full absolute"></div>
            <div className="bg-vault-light px-4 z-10 text-gray-500">or</div>
          </div>
          
          <Button 
            onClick={handleFingerprintAuth}
            className="w-full py-6 bg-vault-secondary hover:bg-vault-secondary/90 gap-2"
            disabled={isLoading}
          >
            <Fingerprint className="h-5 w-5" />
            {isLoading ? "Verifying..." : "Use Fingerprint"}
          </Button>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          Your information is stored locally and never leaves your device
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
