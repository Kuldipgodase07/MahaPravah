import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import SocialProof from '../components/SocialProof';
import Ecosystem from '../components/Ecosystem';
import Features from '../components/Features';
import MaharashtraSection from '../components/MaharashtraSection';
import Intelligence from '../components/Intelligence';
import Footer from '../components/Footer';

import { useLanguage } from '../context/LanguageContext';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const { isMarathi } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={isMarathi ? 'font-poppins' : ''}
    >
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Ecosystem />
        <Journey />
        <SocialProof />
        <Features />
        <Intelligence />
        <MaharashtraSection />
      </main>
      <Footer />
    </motion.div>
  );
}
