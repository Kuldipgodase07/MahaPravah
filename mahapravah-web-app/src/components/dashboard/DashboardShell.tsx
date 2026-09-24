import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  Globe,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Check,
  Headphones,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useRole, ROLE_DEFINITIONS } from '../../context/RoleContext';
import type { UserRole } from '../../context/RoleContext';
import DashboardFooter from './DashboardFooter';

export interface NavItemConfig {
  id: string;
  labelEn: string;
  labelMr: string;
  icon: React.ElementType;
}

interface DashboardShellProps {
  role: UserRole;
  roleNavItems: NavItemConfig[];
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onNavigateHome?: () => void;
  children: ReactNode;
}

export default function DashboardShell({
  role,
  roleNavItems,
  activeTab,
  onSelectTab,
  onNavigateHome,
  children,
}: DashboardShellProps) {
  const { lang, setLang, isMarathi } = useLanguage();
  const { currentRole, setRole, allRoles } = useRole();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  const activeMeta = ROLE_DEFINITIONS[role] || ROLE_DEFINITIONS[currentRole];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (roleRef.current && !roleRef.current.contains(event.target as Node)) {
        setRoleDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectRole = (newRole: UserRole) => {
    setRole(newRole);
    setRoleDropdownOpen(false);
  };

  const handleLogout = () => {
    window.location.hash = '#login';
  };

  const renderNavList = (collapsed: boolean) => (
    <div className="flex flex-col justify-between h-full">
      {/* Upper Navigation: Role-Specific Items */}
      <nav className="space-y-1 w-full overflow-y-auto max-h-[calc(100vh-270px)] pr-1 scrollbar-thin">
        {roleNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const displayLabel = isMarathi ? item.labelMr : item.labelEn;

          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileOpen(false);
              }}
              title={collapsed ? displayLabel : undefined}
              className={`w-full flex items-center transition-all duration-200 text-left rounded-xl cursor-pointer ${
                collapsed
                  ? 'justify-center p-2'
                  : 'gap-2.5 px-3 py-1.5 sm:py-2 text-[12.5px] xl:text-[13px] font-medium'
              } ${
                isActive
                  ? 'bg-[#7B2400] text-white font-bold shadow-xs'
                  : 'text-[#3B281C] hover:bg-[#FBEFDF]/80 hover:text-[#7B2400]'
              }`}
            >
              <Icon
                size={16}
                className={
                  isActive
                    ? 'text-white shrink-0'
                    : 'text-[#614535] shrink-0'
                }
              />
              {!collapsed && <span className="truncate">{displayLabel}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Common Shell Items & Support Card */}
      <div className="pt-2 border-t border-[#DFC7B2]/70 space-y-2 shrink-0">
        {!collapsed && (
          <div className="p-2.5 rounded-xl bg-[#FFF8F3] border border-[#F1E5D8] flex flex-col gap-1.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FFEADA] text-[#E35314] flex items-center justify-center shrink-0">
                <Headphones size={13} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight">
                  {isMarathi ? 'मदत हवी आहे?' : 'Need Help?'}
                </p>
                <p className="text-[9px] text-slate-500 leading-tight">
                  {isMarathi ? 'आमच्या सहाय्यकांशी संपर्क साधा' : 'Contact our support assistants'}
                </p>
              </div>
            </div>
            <button
              onClick={() => alert('Support helpline: 1800-120-8040 / support@mahapravah.gov.in')}
              className="w-full py-1 rounded-md border border-[#E35314] text-[#E35314] text-[10px] font-bold hover:bg-[#FFEFE5] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>{isMarathi ? 'संपर्क करा' : 'Contact Us'}</span>
              <span>→</span>
            </button>
          </div>
        )}

        <button
          onClick={handleLogout}
          title={collapsed ? (isMarathi ? 'बाहेर पडा' : 'Sign Out') : undefined}
          className={`w-full flex items-center text-left rounded-lg text-[#8C3310] hover:bg-[#FEE4E2]/60 hover:text-red-700 transition-colors cursor-pointer ${
            collapsed ? 'justify-center p-2' : 'gap-2 px-3 py-1 text-xs font-semibold'
          }`}
        >
          <LogOut size={14} className="shrink-0" />
          {!collapsed && <span>{isMarathi ? 'बाहेर पडा' : 'Sign Out'}</span>}
        </button>

        {!collapsed && (
          <div className="flex justify-center opacity-40 pt-1 pointer-events-none">
            <img src="/sidebar-bottom-quote-monument.png" alt="" className="h-9 w-auto object-contain" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full text-[#241309] relative flex flex-row font-sans overflow-hidden bg-[#FAF7F2]">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 rounded-full bg-[#7B2400] text-white shadow-lg flex items-center justify-center hover:bg-[#601C00] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Left Sidebar (Master Style Continuous Column) ── */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 relative z-40 border-r border-[#DFC7B2] transition-all duration-300 ease-in-out shadow-[1px_0_4px_rgba(0,0,0,0.02)] h-screen max-h-screen overflow-visible ${
          isCollapsed ? 'w-[64px]' : 'w-[220px] xl:w-[230px]'
        }`}
        style={{
          backgroundImage: `url('/sidebar-bg.png')`,
          backgroundSize: isCollapsed ? '230px 100%' : '100% 100%',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#FAF7F2',
        }}
      >
        {/* Minimize / Maximize Edge Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3.5 top-[84px] sm:top-[88px] lg:top-[90px] -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-[#DFCEBD] shadow-md flex items-center justify-center text-[#7B2400] hover:bg-[#FAF7F2] hover:scale-110 active:scale-95 transition-all z-50 cursor-pointer"
          title={isCollapsed ? 'Maximize Sidebar' : 'Minimize Sidebar'}
          aria-label={isCollapsed ? 'Maximize Sidebar' : 'Minimize Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={14} strokeWidth={2.5} /> : <ChevronLeft size={14} strokeWidth={2.5} />}
        </button>

        {/* Top Brand Box */}
        <div className="h-[84px] sm:h-[88px] lg:h-[90px] flex items-center justify-center px-3 select-none shrink-0 transition-all duration-300 bg-transparent">
          <button
            onClick={onNavigateHome}
            className={`flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 text-left hover:opacity-90 transition-opacity ${
              isCollapsed ? 'justify-center w-full' : ''
            }`}
            title="Government of Maharashtra"
          >
            <img
              src="/maharashtra-govt-logo.png"
              alt="महाराष्ट्र शासन"
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain drop-shadow-2xs shrink-0"
            />
            {!isCollapsed && (
              <div className="hidden md:flex flex-col leading-tight whitespace-nowrap overflow-hidden transition-all duration-200">
                <span className="font-devanagari font-bold text-[12.5px] sm:text-[13px] text-[#2C1A0E]">
                  महाराष्ट्र शासन
                </span>
                <span className="text-[9.5px] sm:text-[10px] font-semibold text-[#4A2614] tracking-tight">
                  Government of Maharashtra
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Navigation list */}
        <div
          className={`flex-1 flex flex-col pt-3 pb-2 select-none overflow-hidden transition-all duration-300 bg-transparent ${
            isCollapsed ? 'px-1.5 items-center' : 'px-2.5'
          }`}
        >
          {renderNavList(isCollapsed)}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-[250px] max-w-[85vw] h-full bg-[#FAF7F2] shadow-2xl z-50 overflow-y-auto p-3 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#DFC7B2]">
              <div className="flex items-center gap-2">
                <img
                  src="/maharashtra-govt-logo.png"
                  alt="महाराष्ट्र शासन"
                  className="h-9 w-auto object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-devanagari font-bold text-[12px] text-[#2C1A0E]">
                    महाराष्ट्र शासन
                  </span>
                  <span className="text-[9.5px] font-semibold text-[#4A2614]">
                    Government of Maharashtra
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#6B351B] p-1 rounded-md hover:bg-stone-200"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 pt-3">
              {renderNavList(false)}
            </div>
          </div>
        </div>
      )}

      {/* ── Right Column: Top Header + Main Content Canvas ── */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header Bar */}
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
                  <span className="text-[8.5px] sm:text-[9px] text-[#632E14] font-semibold leading-tight mt-0.5 max-w-[220px] truncate hidden md:block">
                    {isMarathi ? 'कौशल्यातून समृद्ध महाराष्ट्र' : 'Skills for a Brighter Maharashtra'}
                  </span>
                </div>
              </button>
            </div>

            {/* ── Right Actions: Search, Language, Role Switcher, Bell & Profile Lockup ── */}
            <div className="absolute right-3 sm:right-4 lg:right-5 bottom-0 translate-y-1/2 flex items-center gap-1.5 sm:gap-2 z-40">
              {/* Search Input Box */}
              <div className="relative w-[130px] sm:w-[170px] md:w-[210px]">
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
                      className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-xl border border-stone-200 p-1 z-50 overflow-hidden"
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

              {/* ── Profile Pill + Role Switcher Dropdown ── */}
              <div ref={roleRef} className="relative">
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="flex items-center gap-1.5 sm:gap-2 h-[30px] sm:h-[32px] px-2 sm:px-2.5 bg-white border border-[#DFCEBD] rounded-lg shadow-2xs hover:shadow-xs hover:bg-[#FAF7F2] transition-all cursor-pointer shrink-0"
                  aria-label="Switch role"
                  title="Switch Dashboard Role"
                >
                  <img
                    src={activeMeta.avatar}
                    alt={activeMeta.userNameEn}
                    className="w-5 h-5 rounded-full object-cover border border-[#DFCEBD] shrink-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-bold text-[#1E1008] leading-tight truncate max-w-[85px] sm:max-w-[120px]">
                      {isMarathi ? activeMeta.userNameMr : activeMeta.userNameEn}
                    </span>
                    <span className="text-[8.5px] font-medium text-[#7A5B4C] leading-none hidden sm:block truncate max-w-[120px]">
                      {isMarathi ? activeMeta.labelMr : activeMeta.labelEn}
                    </span>
                  </div>
                  <ChevronDown
                    size={11}
                    className={`text-[#8C6D58] ml-0.5 transition-transform duration-200 ${roleDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Role Switcher Dropdown Panel */}
                <AnimatePresence>
                  {roleDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute right-0 mt-1.5 w-[240px] bg-white rounded-xl shadow-2xl border border-[#EAE3D6] overflow-hidden z-50"
                    >
                      {/* Dropdown Header */}
                      <div className="px-3 py-2 bg-[#FAF7F2] border-b border-[#EAE3D6]">
                        <p className="text-[9.5px] font-bold uppercase tracking-wider text-[#8C3310]">
                          {isMarathi ? 'भूमिका बदला' : 'Switch Role / Dashboard'}
                        </p>
                        <p className="text-[9px] text-stone-500 mt-0.5">
                          {isMarathi ? '८ भूमिका उपलब्ध' : '8 roles available'}
                        </p>
                      </div>

                      {/* Role List */}
                      <div className="py-1 max-h-[320px] overflow-y-auto">
                        {allRoles.map((r) => {
                          const isActive = currentRole === r.id;
                          return (
                            <button
                              key={r.id}
                              onClick={() => handleSelectRole(r.id)}
                              className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors cursor-pointer ${
                                isActive
                                  ? 'bg-[#FFF3E8] text-[#8C3310]'
                                  : 'hover:bg-stone-50 text-stone-800'
                              }`}
                            >
                              {/* Avatar */}
                              <div className="relative shrink-0">
                                <img
                                  src={r.avatar}
                                  alt={r.userNameEn}
                                  className="w-7 h-7 rounded-full object-cover border border-[#DFCEBD]"
                                  onError={(e) => {
                                    const el = e.currentTarget as HTMLImageElement;
                                    el.style.display = 'none';
                                    const next = el.nextElementSibling as HTMLElement | null;
                                    if (next) next.style.display = 'flex';
                                  }}
                                />
                                <div
                                  className="w-7 h-7 rounded-full bg-[#F56600]/20 border border-[#DFCEBD] items-center justify-center text-[#8C3310] text-[9px] font-bold hidden"
                                  aria-hidden="true"
                                >
                                  {r.userNameEn.charAt(0)}
                                </div>
                              </div>

                              {/* Name & Role Title */}
                              <div className="flex-1 min-w-0">
                                <p className={`text-[11px] font-bold leading-tight truncate ${
                                  isActive ? 'text-[#5C1D08]' : 'text-stone-800'
                                }`}>
                                  {isMarathi ? r.userNameMr : r.userNameEn}
                                </p>
                                <p className={`text-[9px] leading-tight truncate mt-0.5 ${
                                  isActive ? 'text-[#8C3310]' : 'text-stone-500'
                                }`}>
                                  {isMarathi ? r.labelMr : r.labelEn}
                                </p>
                              </div>

                              {/* Active indicator */}
                              {isActive && (
                                <Check size={13} className="text-[#F56600] shrink-0" strokeWidth={2.5} />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Sign Out */}
                      <div className="border-t border-[#EAE3D6]">
                        <button
                          onClick={() => {
                            setRoleDropdownOpen(false);
                            window.location.hash = '';
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-red-50 transition-colors cursor-pointer group"
                        >
                          <div className="w-7 h-7 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                            <LogOut size={12} className="text-red-500" />
                          </div>
                          <div className="flex-1">
                            <p className="text-[11px] font-bold text-red-600 leading-tight">
                              {isMarathi ? 'बाहेर पडा' : 'Sign Out'}
                            </p>
                            <p className="text-[9px] text-red-400 leading-tight mt-0.5">
                              {isMarathi ? 'लॉगिन पृष्ठावर परत जा' : 'Return to login page'}
                            </p>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Dashboard Area */}
        <main
          className="flex-1 px-2.5 sm:px-3 lg:px-3.5 py-1.5 sm:py-2 flex flex-col justify-between min-h-0 overflow-y-auto min-w-0 transition-all duration-300"
          style={{
            backgroundImage: `url('/main-canvas-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FAF7F2',
          }}
        >
          <div className="flex-1 flex flex-col min-h-0">
            {children}
          </div>
          <DashboardFooter />
        </main>
      </div>
    </div>
  );
}
