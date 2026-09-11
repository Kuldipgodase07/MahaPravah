import { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface DashboardTopHeaderProps {
  onNavigateHome?: () => void;
}

export default function DashboardTopHeader({ onNavigateHome }: DashboardTopHeaderProps) {
  const { lang, setLang, isMarathi } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className="relative w-full h-[84px] sm:h-[88px] lg:h-[90px] shrink-0 select-none overflow-visible z-30 transition-all duration-300"
      style={{
        backgroundImage: `url('/top-right-header-bg.png')`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FDEED9',
      }}
    >
      {/* Header Content Container */}
      <div className="relative z-10 w-full h-full px-3 sm:px-4 lg:px-5 flex items-center justify-between gap-2 overflow-visible">
        
        {/* Left: MahaPravah Platform Logo & Tagline */}
        <div className="flex items-center shrink-0">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 text-left hover:opacity-90 transition-opacity"
            title="MahaPravah Dashboard"
          >
            <img
              src="/mahapravah-logo.png"
              alt="MahaPravah"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-2xs shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-[16px] sm:text-[18px] leading-none tracking-tight">
                <span className="text-[#1E1008]">Maha</span>
                <span className="text-[#F56600]">Pravah</span>
              </span>
              <span className="text-[8.5px] sm:text-[9px] text-[#632E14] font-semibold leading-tight mt-0.5 max-w-[200px] truncate hidden md:block">
                {isMarathi ? 'कौशल्यातून रोजगार सक्षमता' : 'Skill to Employment Intelligence'}
              </span>
            </div>
          </button>
        </div>

        {/* ── Right Actions: Search, Language, Bell & Profile Lockup (Sitting on the Bottom Edge) ── */}
        <div className="absolute right-3 sm:right-4 lg:right-5 bottom-0 translate-y-1/2 flex items-center gap-1.5 sm:gap-2 z-40">
          {/* Search Input Box */}
          <div className="relative w-[150px] sm:w-[200px] md:w-[240px]">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C6D58]"
            />
            <input
              type="text"
              placeholder={isMarathi ? "शोधा..." : "Search..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[30px] sm:h-[32px] pl-8 pr-2.5 text-[11px] bg-white border border-[#DFCEBD] rounded-lg shadow-2xs placeholder-[#9C7F6C] text-[#2C1A0E] focus:outline-none focus:ring-1 focus:ring-[#F56600] focus:border-[#F56600] transition-all"
            />
          </div>

          {/* ── Language Switcher Dropdown (Globe Icon) ── */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 h-[30px] sm:h-[32px] px-2 sm:px-2.5 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs hover:bg-[#FAF7F2] text-slate-800 text-[11px] font-bold transition-all cursor-pointer"
              title={isMarathi ? "भाषा बदला (Change Language)" : "Change Language"}
              aria-label="Select language"
            >
              <Globe size={13} className="text-[#F56600]" />
              <span className={isMarathi ? 'font-poppins' : ''}>
                {lang === 'mr' ? 'मराठी' : 'English'}
              </span>
              <ChevronDown
                size={11}
                className={`text-slate-500 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-1 w-30 bg-white rounded-lg shadow-xl border border-stone-200 p-1 z-50 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setLang('mr');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 text-xs rounded font-semibold font-poppins flex items-center justify-between cursor-pointer transition-colors ${
                      lang === 'mr' ? 'bg-[#F56600]/10 text-[#F56600]' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>मराठी</span>
                    {lang === 'mr' && <span className="text-xs font-bold">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 text-xs rounded font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                      lang === 'en' ? 'bg-[#F56600]/10 text-[#F56600]' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>English</span>
                    {lang === 'en' && <span className="text-xs font-bold">✓</span>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Notification Bell with Badge */}
          <div className="relative overflow-visible shrink-0">
            <button 
              className="h-[30px] sm:h-[32px] w-[30px] sm:w-[32px] rounded-lg bg-white border border-[#DFCEBD] shadow-2xs hover:bg-[#FAF7F2] text-[#5C3218] flex items-center justify-center transition-colors cursor-pointer"
              aria-label={isMarathi ? "३ सूचना" : "3 notifications"}
              title={isMarathi ? "सूचना" : "Notifications"}
            >
              <Bell size={14} />
            </button>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#E62E00] text-white text-[8.5px] font-bold rounded-full flex items-center justify-center shadow-xs z-50 pointer-events-none">
              3
            </span>
          </div>

          {/* Dr. A. Deshmukh Profile Pill */}
          <div className="flex items-center gap-1.5 sm:gap-2 h-[30px] sm:h-[32px] px-2 sm:px-2.5 bg-white border border-[#DFCEBD] rounded-lg shadow-2xs hover:shadow-xs transition-all cursor-pointer shrink-0">
            <img
              src="/dr-deshmukh-avatar.png"
              alt="Dr. A. Deshmukh"
              className="w-5 h-5 rounded-full object-cover border border-[#DFCEBD]"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-[#1E1008] leading-tight truncate max-w-[90px] sm:max-w-none">
                {isMarathi ? 'डॉ. ए. देशमुख' : 'Dr. A. Deshmukh'}
              </span>
              <span className="text-[8.5px] font-medium text-[#7A5B4C] leading-none hidden sm:block">
                {isMarathi ? 'राज्य कौशल्य अधिकारी' : 'State Skill Officer'}
              </span>
            </div>
            <ChevronDown size={11} className="text-[#8C6D58] ml-0.5" />
          </div>
        </div>
      </div>
    </header>
  );
}

