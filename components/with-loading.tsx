import { useEffect, useState } from "react";
import Loading from "@/components/loading"; 

const WithInitialLoading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 4100);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default WithInitialLoading;
