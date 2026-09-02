import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashPage from './pages/SplashPage';
import LandingPage from './pages/LandingPage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {!splashDone && (
          <SplashPage key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      {splashDone && <LandingPage />}
    </LanguageProvider>
  );
}
