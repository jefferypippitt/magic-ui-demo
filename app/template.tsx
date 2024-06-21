"use client";

import { useState, useEffect } from 'react';
import Loading from '@/components/loading';  // Ensure this path is correct
import Header from '@/components/header';    // Ensure this path is correct

export default function HomeTemplate({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 4100); // Slightly longer than 3 seconds to ensure full display of 100%

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
