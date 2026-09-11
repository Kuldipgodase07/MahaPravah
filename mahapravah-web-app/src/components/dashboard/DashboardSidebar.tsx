import { useState } from 'react';
import {
  Home,
  LayoutList,
  Users,
  Building2,
  CheckCircle2,
  MapPin,
  BarChart2,
  TrendingUp,
  AlertCircle,
  Download,
  Share2,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface NavItem {
  id: string;
  label: string;
  labelMr: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', labelMr: 'डॅशबोर्ड', icon: Home },
  { id: 'programme', label: 'Programme Overview', labelMr: 'कार्यक्रम आढावा', icon: LayoutList },
  { id: 'beneficiaries', label: 'Beneficiaries', labelMr: 'लाभार्थी', icon: Users },
  { id: 'providers', label: 'Training Providers', labelMr: 'प्रशिक्षण संस्था', icon: Building2 },
  { id: 'outcomes', label: 'Employment Outcomes', labelMr: 'रोजगार निष्पत्ती', icon: CheckCircle2 },
  { id: 'district', label: 'District Intelligence', labelMr: 'जिल्हा बुद्धिमत्ता', icon: MapPin },
  { id: 'skill-gap', label: 'Skill Gap Analysis', labelMr: 'कौशल्य तूट विश्लेषण', icon: BarChart2 },
  { id: 'impact', label: 'Impact Analytics', labelMr: 'प्रभाव विश्लेषण', icon: TrendingUp },
  { id: 'alerts', label: 'Alerts & Interventions', labelMr: 'सूचना व हस्तक्षेप', icon: AlertCircle },
  { id: 'reports', label: 'Reports & Downloads', labelMr: 'अहवाल व डाऊनलोड', icon: Download },
  { id: 'data', label: 'Data & Integrations', labelMr: 'डेटा व एकत्रीकरण', icon: Share2 },
  { id: 'admin', label: 'Administration', labelMr: 'प्रशासन', icon: Settings },
];

interface DashboardSidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onNavigateHome?: () => void;
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
}

export default function DashboardSidebar({
  isCollapsed: externalCollapsed,
  onToggleCollapse,
  onNavigateHome,
  activeTab: externalActiveTab,
  onSelectTab,
}: DashboardSidebarProps) {
  const { isMarathi } = useLanguage();
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [internalActiveTab, setInternalActiveTab] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCollapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const toggleCollapse = onToggleCollapse || (() => setInternalCollapsed(!internalCollapsed));
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  const handleSelectTab = (tabId: string) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
    setMobileOpen(false);
  };

  const renderNavList = (collapsed: boolean) => (
    <nav className="space-y-1 w-full">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        const displayLabel = isMarathi ? item.labelMr : item.label;

        return (
          <button
            key={item.id}
            onClick={() => handleSelectTab(item.id)}
            title={collapsed ? displayLabel : undefined}
            className={`w-full flex items-center transition-all duration-200 text-left rounded-lg ${
              collapsed
                ? 'justify-center p-2'
                : 'gap-2.5 px-3 py-1.5 sm:py-2 text-[12.5px] xl:text-[13px] font-medium'
            } ${
              isActive
                ? 'bg-[#7B2400] text-white font-bold shadow-xs'
                : 'text-[#3B281C] hover:bg-[#FBEFDF]/80 hover:text-[#7B2400]'
            }`}
          >
            <Icon size={16} className={isActive ? 'text-white' : 'text-[#614535] shrink-0'} />
            {!collapsed && <span className="truncate">{displayLabel}</span>}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 rounded-full bg-[#7B2400] text-white shadow-lg flex items-center justify-center hover:bg-[#601C00] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 
        Full-Height Unified Left Column:
        Single continuous vertical line (border-r border-[#DFC7B2]) from top of screen to bottom.
        Minimizes the entire sidebar including the upper emblem section as one unified straight column.
      */}
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
        {/* Minimize / Maximize Edge Toggle Button (Perfect circle centered on junction) */}
        <button
          onClick={toggleCollapse}
          className="absolute -right-3.5 top-[84px] sm:top-[88px] lg:top-[90px] -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-[#DFCEBD] shadow-md flex items-center justify-center text-[#7B2400] hover:bg-[#FAF7F2] hover:scale-110 active:scale-95 transition-all z-50 cursor-pointer"
          title={isCollapsed ? 'Maximize Sidebar (Expand)' : 'Minimize Sidebar (Collapse)'}
          aria-label={isCollapsed ? 'Maximize Sidebar' : 'Minimize Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={14} strokeWidth={2.5} /> : <ChevronLeft size={14} strokeWidth={2.5} />}
        </button>

        {/* ── Top Brand Box (Unified with Sidebar, Same Height as Header) ── */}
        <div
          className="h-[84px] sm:h-[88px] lg:h-[90px] flex items-center justify-center px-3 select-none shrink-0 transition-all duration-300 bg-transparent"
        >
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

        {/* ── Lower Navigation Section (Continuous Canvas, Starts Cleanly Below Button) ── */}
        <div
          className={`flex-1 flex flex-col pt-3 pb-2 select-none overflow-hidden transition-all duration-300 bg-transparent ${
            isCollapsed ? 'px-1.5 items-center' : 'px-2.5'
          }`}
        >
          {/* Navigation Items */}
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
          <div className="relative w-[240px] max-w-[85vw] h-full bg-[#FAF7F2] shadow-2xl z-50 overflow-y-auto p-3">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#DFC7B2]">
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
            {renderNavList(false)}
          </div>
        </div>
      )}
    </>
  );
}
