import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashPage from './pages/SplashPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RoleDashboardDispatcher from './pages/RoleDashboardDispatcher';
import { LanguageProvider } from './context/LanguageContext';
import { RoleProvider } from './context/RoleContext';

const DASHBOARD_HASHES = [
  '#dashboard',
  '#officer-dashboard',
  '#student-dashboard',
  '#provider-dashboard',
  '#employer-dashboard',
  '#district-dashboard',
  '#college-dashboard',
  '#policy-dashboard',
  '#admin-dashboard',
];

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
  const isDashboardPage = DASHBOARD_HASHES.includes(currentHash);

  return (
    <LanguageProvider>
      <RoleProvider>
        <AnimatePresence mode="wait">
          {!splashDone && !isLoginPage && !isDashboardPage && (
            <SplashPage key="splash" onComplete={handleSplashComplete} />
          )}
        </AnimatePresence>
        {(splashDone || isLoginPage || isDashboardPage) && (
          isLoginPage ? (
            <LoginPage onNavigateHome={handleNavigateHome} />
          ) : isDashboardPage ? (
            <RoleDashboardDispatcher onNavigateHome={handleNavigateHome} />
          ) : (
            <LandingPage />
          )
        )}
      </RoleProvider>
    </LanguageProvider>
  );
}

