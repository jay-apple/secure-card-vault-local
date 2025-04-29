
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shield, Fingerprint, Lock, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FeatureSlide {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const features: FeatureSlide[] = [
    {
      title: "100% Local Storage",
      description: "Your card data never leaves your device. We don't use servers or cloud storage - everything is stored securely on your phone.",
      icon: <CreditCard className="h-16 w-16" />,
      color: "bg-vault-primary"
    },
    {
      title: "Works Offline",
      description: "No internet connection required. Access your card information anytime, anywhere, even without network coverage.",
      icon: <Shield className="h-16 w-16" />,
      color: "bg-vault-secondary"
    },
    {
      title: "Completely Secure",
      description: "Your data is encrypted and protected by your device's authentication. Only you can access your card information.",
      icon: <Lock className="h-16 w-16" />,
      color: "bg-vault-primary"
    },
    {
      title: "Smart Validation",
      description: "Intelligent card validation ensures your card details are correctly formatted and verified based on provider rules.",
      icon: <Fingerprint className="h-16 w-16" />,
      color: "bg-vault-secondary"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col h-full justify-between p-6">
      <div className="relative h-[70vh] overflow-hidden rounded-xl shadow-lg">
        <div 
          className="absolute flex transition-transform duration-500 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`min-w-full h-full flex flex-col items-center justify-center p-8 ${feature.color} text-white`}
            >
              <div className="rounded-full bg-white/20 p-6 mb-6">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">{feature.title}</h2>
              <p className="text-center text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {currentSlide > 0 && (
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        
        {currentSlide < features.length - 1 && (
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {features.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-8">
        {currentSlide === features.length - 1 ? (
          <Button 
            className="w-full py-6 text-lg bg-vault-primary hover:bg-vault-primary/90"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        ) : (
          <Button 
            className="w-full py-6 text-lg bg-vault-secondary hover:bg-vault-secondary/90"
            onClick={nextSlide}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default FeatureCarousel;
