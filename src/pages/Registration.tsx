
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { saveUser } from "@/utils/storage";
import { User } from "@/utils/types";
import { useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState<"India" | "United States" | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    
    if (!country) {
      toast({
        title: "Error",
        description: "Please select your country",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      // Save user data
      const user: User = {
        name: name.trim(),
        country: country as "India" | "United States",
      };
      
      saveUser(user);
      
      // Show success message
      toast({
        title: "Registration successful",
        description: "Your account has been created",
      });
      
      // Navigate to dashboard
      navigate("/dashboard");
      
      setIsLoading(false);
    }, 800); // Simulate a delay
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-vault-light">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-vault-secondary">Create Your Account</h1>
        <p className="text-gray-600">Please provide your information to get started</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text" 
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select value={country} onValueChange={(value) => setCountry(value as "India" | "United States")}>
            <SelectTrigger id="country" className="w-full p-4">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="United States">United States</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="pt-4">
          <p className="text-sm text-gray-500 mb-6">
            Your information will be stored locally on your device only. No data will be sent to any server.
          </p>
          
          <Button 
            type="submit" 
            className="w-full py-6 bg-vault-primary hover:bg-vault-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Setting up..." : "Create Account"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
