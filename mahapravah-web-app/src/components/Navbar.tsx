import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { lang, setLang, t, isMarathi } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { key: 'Home', label: t.nav.home, href: '#home' },
    { key: 'About', label: t.nav.aboutUs, href: '#about' },
    { key: 'Students', label: t.nav.forStudents, href: '#students', hasDropdown: true },
    { key: 'Institutions', label: t.nav.forInstitutions, href: '#institutions' },
    { key: 'Employers', label: t.nav.forEmployers, href: '#employers' },
    { key: 'Resources', label: t.nav.resources, href: '#resources', hasDropdown: true },
    { key: 'Dashboard', label: t.nav.dashboard, href: '#dashboard' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? 'rgba(255, 255, 255, 0.98)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(44,26,14,0.13)' : 'none',
        transition: 'background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 2.2vw, 36px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* ── Government Partner Branding Block ── */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            title="महाराष्ट्र शासन | MahaPravah"
          >
            {/* Maharashtra Government Section */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img
                src="/maharashtra-govt-logo.png"
                alt="महाराष्ट्र शासन | Government of Maharashtra"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
                className="h-[38px] sm:h-[46px]"
              />
            </div>

            {/* Vertical Separator */}
            <div
              style={{
                width: '1px',
                height: '28px',
                backgroundColor: '#2C1A0E',
                opacity: 0.45,
                flexShrink: 0,
                borderRadius: '1px',
              }}
              aria-hidden="true"
            />

            {/* Mahapravah Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <img
                src="/mahapravah-logo.png"
                alt="MahaPravah"
                style={{ objectFit: 'contain' }}
                className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px]"
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: '20px',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                  }}
                >
                  <span style={{ color: '#2C1A0E' }}>Maha</span>
                  <span style={{ color: '#F56600' }}>Pravah</span>
                </span>
                <span
                  className={`devanagari-text hidden sm:block ${isMarathi ? 'font-poppins' : ''}`}
                  style={{ fontSize: '9.5px', color: '#6B351B', lineHeight: '1.3', letterSpacing: '0.1px' }}
                  id="nav-subtitle"
                >
                  {t.nav.brandSlogan}
                </span>
              </div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setActiveLink(link.key)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '6px 11px',
                  fontSize: '13.5px',
                  fontWeight: activeLink === link.key ? 700 : 500,
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  color: activeLink === link.key ? '#F56600' : '#3D2010',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  position: 'relative',
                  transition: 'color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F56600')}
                onMouseLeave={e => (e.currentTarget.style.color = activeLink === link.key ? '#F56600' : '#3D2010')}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={13} style={{ marginTop: '1px', opacity: 0.7 }} />}
                {activeLink === link.key && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '2.5px',
                    background: '#F56600',
                    borderRadius: '9999px',
                  }} />
                )}
              </a>
            ))}
          </nav>

          {/* ── Right Actions: Language Switcher + Login Button ── */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* ── Globe Icon Language Dropdown ── */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
                style={{
                  background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255, 255, 255, 0.92)',
                  borderColor: 'rgba(107, 53, 27, 0.18)',
                  backdropFilter: 'blur(8px)',
                  color: '#2C1A0E',
                }}
                aria-expanded={langDropdownOpen}
                aria-label="Select language"
              >
                <Globe size={16} className="text-[#F56600]" strokeWidth={2.2} />
                <span className={`text-xs font-bold ${isMarathi ? 'font-poppins' : ''}`}>
                  {lang === 'mr' ? 'मराठी' : 'English'}
                </span>
                <ChevronDown
                  size={13}
                  className="text-stone-500 transition-transform duration-200"
                  style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-stone-200/80 p-1.5 z-50 overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        setLang('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                        lang === 'en'
                          ? 'bg-[#F56600]/10 text-[#F56600]'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span>English</span>
                      {lang === 'en' && <span className="text-xs font-bold">✓</span>}
                    </button>
                    <button
                      onClick={() => {
                        setLang('mr');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold font-poppins transition-colors duration-150 cursor-pointer ${
                        lang === 'mr'
                          ? 'bg-[#F56600]/10 text-[#F56600]'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span>मराठी</span>
                      {lang === 'mr' && <span className="text-xs font-bold">✓</span>}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Login / Register Button ── */}
            <a
              href="#login"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #F56600 0%, #D94E00 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(245,102,0,0.35)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(245,102,0,0.50)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(245,102,0,0.35)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <User size={15} />
              {t.common.loginRegister}
            </a>
          </div>

          {/* ── Mobile Action Items ── */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border text-xs font-bold text-stone-800 bg-white/90 shadow-sm"
              style={{
                borderColor: 'rgba(107, 53, 27, 0.2)',
                fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
              }}
              title="Change Language"
            >
              <Globe size={13} className="text-[#F56600]" />
              <span>{lang === 'mr' ? 'EN' : 'मराठी'}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                padding: '8px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: '#4A2414',
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{
              background: 'white',
              borderTop: '1px solid rgba(107,53,27,0.08)',
              boxShadow: '0 8px 24px rgba(44,26,14,0.10)',
              padding: '16px 20px 24px',
            }}
            className="lg:hidden"
          >
            {/* Mobile Language Selector inside Drawer */}
            <div className="mb-4 pb-3 border-b flex items-center justify-between" style={{ borderColor: 'rgba(107,53,27,0.08)' }}>
              <span className="text-xs font-semibold text-stone-500 flex items-center gap-1.5">
                <Globe size={13} className="text-[#F56600]" /> {t.common.language}
              </span>
              <div className="flex items-center p-0.5 rounded-full bg-stone-100 border border-stone-200">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    lang === 'en' ? 'bg-[#F56600] text-white shadow-sm' : 'text-stone-600'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('mr')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold font-poppins ${
                    lang === 'mr' ? 'bg-[#F56600] text-white shadow-sm' : 'text-stone-600'
                  }`}
                >
                  मराठी
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => { setActiveLink(link.key); setMobileOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '11px 14px',
                  color: activeLink === link.key ? '#F56600' : '#3D2010',
                  fontWeight: 500,
                  fontSize: '14px',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  textDecoration: 'none',
                  borderRadius: '8px',
                }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(107,53,27,0.08)' }}>
              <a
                href="#login"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #F56600, #D94E00)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  textDecoration: 'none',
                }}
              >
                <User size={15} />
                {t.common.loginRegister}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
