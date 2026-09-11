import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashPage from './pages/SplashPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import OfficerDashboardPage from './pages/OfficerDashboardPage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHome = useCallback(() => {
    window.location.hash = '';
    setCurrentHash('');
  }, []);

  const isLoginPage = currentHash === '#login';
  const isDashboardPage = currentHash === '#dashboard' || currentHash === '#officer-dashboard';

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {!splashDone && !isLoginPage && !isDashboardPage && (
          <SplashPage key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      {(splashDone || isLoginPage || isDashboardPage) && (
        isLoginPage ? (
          <LoginPage onNavigateHome={handleNavigateHome} />
        ) : isDashboardPage ? (
          <OfficerDashboardPage onNavigateHome={handleNavigateHome} />
        ) : (
          <LandingPage />
        )
      )}
    </LanguageProvider>
  );
}

