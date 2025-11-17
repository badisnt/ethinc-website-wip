import { useEffect, useState } from "react";
import EthincIcon from "@/assets/ethinc_icon2.png";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start fade out after 2.8 seconds (before the full 3 seconds)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    // Call completion callback after fade animation
    const completeTimer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-card transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Pulsating Logo with custom animation */}
        <div className="relative">
          <img
            src={EthincIcon}
            alt="Ethinc"
            className="w-32 h-32 md:w-40 md:h-40 animate-pulse"
            style={{
              animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
              animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

