
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCarousel from "@/components/FeatureCarousel";
import { isAuthenticated } from "@/utils/storage";

const Index: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already registered
    if (isAuthenticated()) {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-vault-light">
      <FeatureCarousel />
    </div>
  );
};

export default Index;
