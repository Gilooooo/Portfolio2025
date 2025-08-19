"use client";
import { useState, useEffect } from "react";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
        <main className="h-screen flex justify-center items-center bg-black fadeout">
            <span className="animate-pulse">Angelo Sabornido</span>
        </main>
    );
  }

  return children;
}