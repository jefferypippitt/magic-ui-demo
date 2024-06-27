import { useEffect, useState } from 'react';
import GaugeCircle from '@/components/magicui/gauge-circle';

const Loading: React.FC = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 10; // 10 steps to reach 100%
    const intervalTime = duration / steps; // Time per step in milliseconds
    const increment = 100 / steps; // Percentage increment per step

    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextValue;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <GaugeCircle
        max={100}
        min={0}
        value={Math.min(Math.round(loadingPercent), 100)} 
        gaugePrimaryColor="#16a34a" // Updated color
        gaugeSecondaryColor="#ccc"
        className=""
      />
    </div>
  );
};

export default Loading;
