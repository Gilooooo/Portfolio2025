"use client";
import { useState, useEffect } from "react";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorter delay for mobile devices
    const isMobile = window.innerWidth < 768;
    const delay = isMobile ? 300 : 1000;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
        <main className="h-screen flex justify-center items-center bg-black">
            <span className="animate-pulse">Angelo Sabornido</span>
        </main>
    );
  }

  return children;
}