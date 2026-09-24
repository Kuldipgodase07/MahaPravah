import { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Users, 
  MapPin, 
  Home, 
  Star, 
  Plus, 
  ChevronDown, 
  Info, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function TrainingProvidersTab() {
  const { isMarathi } = useLanguage();

  // State for filter dropdowns
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedSector] = useState('All Sectors');
  const [selectedDistrictFilter] = useState('Number of Providers');

  // Top 6 KPI Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण प्रशिक्षण प्रदाते' : 'Total Training Providers',
      value: '1,842',
      change: '8.4% vs last year',
      icon: Building2,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एमपॅनेल केलेले प्रदाते' : 'Empanelled Providers',
      value: '1,620',
      change: '6.1% vs last year',
      icon: CheckCircle2,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सक्रिय प्रदाते' : 'Active Providers',
      value: '1,486',
      change: '9.3% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'आच्छादित जिल्हे' : 'Districts Covered',
      value: '36 / 36',
      change: '100% state coverage',
      icon: MapPin,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एकूण प्रशिक्षण केंद्रे' : 'Total Training Centres',
      value: '3,920',
      change: '11.2% vs last year',
      icon: Home,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सरासरी प्रदाता रेटिंग' : 'Average Provider Rating',
      value: '4.2 / 5',
      change: '0.3 vs last year',
      icon: Star,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Provider Types Donut Breakdown
  const providerTypes = [
    { name: isMarathi ? 'शासकीय' : 'Government', share: '28%', count: '515', color: '#5C1D06' },
    { name: isMarathi ? 'खाजगी' : 'Private', share: '46%', count: '847', color: '#E65100' },
    { name: isMarathi ? 'एनजीओ / सोसायटी' : 'NGO / Society', share: '12%', count: '221', color: '#C85A17' },
    { name: isMarathi ? 'उद्योग भागीदार' : 'Industry Partner', share: '8%', count: '147', color: '#F5A25D' },
    { name: isMarathi ? 'इतर' : 'Others', share: '6%', count: '112', color: '#FBE3CB' },
  ];

  // Top Providers by Enrolment
  const topProviders = [
    { id: 1, name: 'Maharashtra Skill University', enrolled: '2,48,000', rate: '82%' },
    { id: 2, name: 'Tata STRIVE', enrolled: '1,92,000', rate: '79%' },
    { id: 3, name: 'NIIT Foundation', enrolled: '1,46,000', rate: '85%' },
    { id: 4, name: 'Pratham Education', enrolled: '1,12,000', rate: '78%' },
    { id: 5, name: 'L&T Skill Training', enrolled: '98,000', rate: '76%' },
    { id: 6, name: 'Tech Mahindra Foundation', enrolled: '84,200', rate: '81%' },
    { id: 7, name: 'Mahindra Pride Classroom', enrolled: '76,400', rate: '74%' },
    { id: 8, name: 'Aptech Ltd.', enrolled: '68,200', rate: '80%' },
    { id: 9, name: 'PMKVY Training Centres', enrolled: '62,800', rate: '77%' },
    { id: 10, name: 'Rural Self Employment Tr. Inst.', enrolled: '58,400', rate: '73%' },
  ];

  // Providers by Sector
  const sectorProviders = [
    { name: 'IT & ITES', count: 420, barWidth: '85%' },
    { name: 'Automotive', count: 280, barWidth: '60%' },
    { name: 'Healthcare', count: 240, barWidth: '50%' },
    { name: 'Manufacturing', count: 210, barWidth: '45%' },
    { name: 'Retail & BFSI', count: 152, barWidth: '35%' },
    { name: 'Construction', count: 138, barWidth: '30%' },
    { name: 'Agriculture & Allied', count: 124, barWidth: '28%' },
    { name: 'Hospitality & Tourism', count: 98, barWidth: '22%' },
    { name: 'Others', count: 180, barWidth: '40%' },
  ];

  // Recently Added Providers
  const recentlyAdded = [
    { id: 1, name: 'SkillConnect Institute', type: 'Private', district: 'Pune', sector: 'IT & ITES', date: '12 Sep 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 2, name: 'Yash Skills Academy', type: 'NGO', district: 'Nashik', sector: 'Healthcare', date: '11 Sep 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 3, name: 'Gramin Kaushalya Kendra', type: 'Government', district: 'Nanded', sector: 'Agriculture', date: '10 Sep 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 4, name: 'FutureTech Institute', type: 'Private', district: 'Nagpur', sector: 'Automotive', date: '9 Sep 2025', status: 'Under Review', statusBg: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 5, name: 'Shree Sai Training Centre', type: 'Private', district: 'Thane', sector: 'Retail', date: '9 Sep 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Top Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'प्रशिक्षण प्रदाते' : 'Training Providers'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'महाराष्ट्रातील एमपॅनेल केलेल्या प्रशिक्षण प्रदात्यांचे अन्वेषण आणि निरीक्षण करा.'
              : 'Explore and monitor empanelled training providers across Maharashtra.'}
          </p>
        </div>

        {/* Global Filters & Add Provider Button */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Dropdown 1 */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
            <span>{selectedState}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>

          {/* Dropdown 2 */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
            <span>{selectedFY}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>

          {/* Dropdown 3 */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
            <span>{selectedSector}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>

          {/* Add Provider Action Button */}
          <button className="flex items-center gap-1.5 h-8 px-4 bg-[#8B2500] hover:bg-[#721E00] text-white font-semibold text-xs rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0">
            <Plus size={14} />
            <span>Add Provider</span>
          </button>
        </div>
      </div>

      {/* 6 Key Performance Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 shrink-0">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between transition-all hover:shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: kpi.bg, color: kpi.color }}
                >
                  <Icon size={18} />
                </div>
                <span className="text-[11px] font-medium text-slate-500 leading-tight">
                  {kpi.title}
                </span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1">
                  <span>↑</span>
                  <span>{kpi.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Row 1 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Training Providers by District Map */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'जिल्ह्यानुसार प्रशिक्षण प्रदाते' : 'Training Providers by District'}
            </h3>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedDistrictFilter}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center min-h-[180px]">
            <img
              src="/maharashtra-district-map.png"
              alt="Maharashtra District Map"
              className="w-full h-full max-h-[170px] object-contain select-none filter drop-shadow-xs"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />

            <div className="absolute right-0 bottom-0 bg-white/95 backdrop-blur-xs p-1.5 rounded-lg border border-slate-100 shadow-2xs text-[9px] space-y-1">
              {[
                { color: '#5C1D06', label: '≥ 100' },
                { color: '#9E3808', label: '61 - 100' },
                { color: '#DF6B20', label: '41 - 60' },
                { color: '#F3AF6B', label: '21 - 40' },
                { color: '#FDE0BD', label: '≤ 20' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Providers by Type Donut */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'प्रकारानुसार प्रदाते' : 'Providers by Type'}
            </h3>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#5C1D06" strokeWidth="10" strokeDasharray="66.8 171.9" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="109.8 128.9" strokeDashoffset="-66.8" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C85A17" strokeWidth="10" strokeDasharray="28.6 210.1" strokeDashoffset="-176.6" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F5A25D" strokeWidth="10" strokeDasharray="19.1 219.6" strokeDashoffset="-205.2" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FBE3CB" strokeWidth="10" strokeDasharray="14.3 224.4" strokeDashoffset="-224.3" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black text-slate-900 leading-none">1,842</span>
                <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Providers</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-1.5 text-xs">
              {providerTypes.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate pr-1">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600 font-medium truncate">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">
                    {item.share} <span className="font-normal text-slate-400">({item.count})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Top Providers by Enrolment Table */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'नोंदणीनुसार सर्वोच्च प्रदाते' : 'Top Providers by Enrolment'}
              </h3>
              <a href="#providers" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-1 text-xs">
              {topProviders.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span className="font-bold text-slate-400 w-4 shrink-0">{p.id}</span>
                    <span className="font-semibold text-slate-800 truncate">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 text-right">
                    <span className="font-bold text-slate-900">{p.enrolled}</span>
                    <span className="font-bold text-[#8B2500] w-9">{p.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Provider Onboarding Trend Histogram */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'प्रदाता ऑनबोर्डिंग कल' : 'Provider Onboarding Trend'}
            </h3>

            <div className="flex items-center gap-2 text-[10.5px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#5C1D06]" />
                <span className="text-slate-600">Empanelled</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#E65100]" />
                <span className="text-slate-600">Active</span>
              </div>
            </div>
          </div>

          {/* Dual Bar Chart */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">400</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">300</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">200</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">100</text>
              <text x="8" y="101" className="text-[8px] fill-slate-400 font-semibold">0</text>

              {/* Grouped bars for Jan-Sep */}
              {[
                { x: 32, h1: 30, h2: 22 },
                { x: 62, h1: 40, h2: 32 },
                { x: 92, h1: 50, h2: 42 },
                { x: 122, h1: 60, h2: 50 },
                { x: 152, h1: 70, h2: 60 },
                { x: 182, h1: 78, h2: 68 },
                { x: 212, h1: 85, h2: 75 },
                { x: 242, h1: 92, h2: 82 },
                { x: 272, h1: 100, h2: 90 },
              ].map((b, idx) => (
                <g key={idx}>
                  {/* Empanelled bar (Dark brown) */}
                  <rect x={b.x} y={100 - b.h1} width="10" height={b.h1} fill="#5C1D06" rx="1" />
                  {/* Active bar (Orange) */}
                  <rect x={b.x + 11} y={100 - b.h2} width="10" height={b.h2} fill="#E65100" rx="1" />
                </g>
              ))}
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Providers by Sector Horizontal Bars */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'क्षेत्रनिहाय प्रदाते' : 'Providers by Sector'}
              </h3>
              <a href="#sectors" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-2">
              {sectorProviders.map((sec, i) => (
                <div key={i} className="flex items-center justify-between gap-3 text-xs">
                  <span className="w-140px font-medium text-slate-700 truncate">{sec.name}</span>
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full" style={{ width: sec.barWidth }} />
                  </div>
                  <span className="font-bold text-slate-900 w-10 text-right">{sec.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Provider Status Donut */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'प्रदाता स्थिती' : 'Provider Status'}
            </h3>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                {/* Active 80.7% (Green) */}
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#10B981" strokeWidth="10" strokeDasharray="192.7 46" strokeDashoffset="0" />
                {/* Inactive 12.4% (Orange) */}
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F97316" strokeWidth="10" strokeDasharray="29.6 209.1" strokeDashoffset="-192.7" />
                {/* Under Review 4.6% (Red) */}
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#EF4444" strokeWidth="10" strokeDasharray="11 227.7" strokeDashoffset="-222.3" />
                {/* Not Empanelled 2.4% (Gray) */}
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#9CA3AF" strokeWidth="10" strokeDasharray="5.7 233" strokeDashoffset="-233.3" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-lg font-black text-slate-900 leading-none">1,842</span>
                <span className="text-[9.5px] font-semibold text-slate-500 mt-0.5">Providers</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="text-slate-600 font-medium">Active</span>
                </div>
                <span className="font-bold text-slate-900">1,486 <span className="font-normal text-slate-400">(80.7%)</span></span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                  <span className="text-slate-600 font-medium">Inactive</span>
                </div>
                <span className="font-bold text-slate-900">228 <span className="font-normal text-slate-400">(12.4%)</span></span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="text-slate-600 font-medium">Under Review</span>
                </div>
                <span className="font-bold text-slate-900">84 <span className="font-normal text-slate-400">(4.6%)</span></span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF]" />
                  <span className="text-slate-600 font-medium">Not Empanelled</span>
                </div>
                <span className="font-bold text-slate-900">44 <span className="font-normal text-slate-400">(2.4%)</span></span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (Recently Added & Provider Insights) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Recently Added Training Providers (7/12) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'अलीकडेच जोडलेले प्रशिक्षण प्रदाते' : 'Recently Added Training Providers'}
              </h3>
              <a href="#added" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1 w-6">#</th>
                    <th className="pb-2">Provider Name</th>
                    <th className="pb-2">Type</th>
                    <th className="pb-2">District</th>
                    <th className="pb-2">Sector</th>
                    <th className="pb-2">Empanelment Date</th>
                    <th className="pb-2 pr-1">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {recentlyAdded.map((ra) => (
                    <tr key={ra.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2.5 pl-1 font-bold text-slate-400">{ra.id}</td>
                      <td className="py-2.5 font-semibold text-slate-900">{ra.name}</td>
                      <td className="py-2.5 text-slate-600">{ra.type}</td>
                      <td className="py-2.5 text-slate-600">{ra.district}</td>
                      <td className="py-2.5 font-medium text-slate-700">{ra.sector}</td>
                      <td className="py-2.5 text-slate-500">{ra.date}</td>
                      <td className="py-2.5 pr-1">
                        <span className={`px-2 py-0.5 text-[10.5px] font-bold rounded-md border ${ra.statusBg}`}>
                          • {ra.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Provider Insights Card (5/12) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'प्रदाता इनसाइट्स' : 'Provider Insights'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#insights" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            {/* Insights badges grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-700 block text-xs">9.3%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Active providers increased compared to last year.</span>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-2.5 rounded-lg flex items-center gap-2">
                <Star size={16} className="text-amber-600 shrink-0" />
                <div>
                  <strong className="text-amber-700 block text-xs">4.2 / 5</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Average provider rating across all programmes.</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EADBCC] p-2.5 rounded-lg flex items-center gap-2">
                <Users size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <strong className="text-[#8B2500] block text-xs">62%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Providers offer future-ready skills (AI, EV, Green).</span>
                </div>
              </div>

              <div className="bg-[#EFF6FF] border border-[#DBEAFE] p-2.5 rounded-lg flex items-center gap-2">
                <Building2 size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <strong className="text-[#8B2500] block text-xs">18%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">New providers onboarded in FY 2025-26.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bar */}
      <footer className="pt-3 border-t border-[#EADBCC] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 mt-2 shrink-0">
        <div>
          © 2025 MahaPravah, Government of Maharashtra. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Use</a>
          <span>|</span>
          <a href="#help" className="hover:text-slate-800 transition-colors">Help & Support</a>
          <span>|</span>
          <a href="#contact" className="hover:text-slate-800 transition-colors">Contact Us</a>
        </div>
      </footer>

    </div>
  );
}
