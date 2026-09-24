import { useState } from 'react';
import { 
  Users, 
  User, 
  UserCheck, 
  GraduationCap, 
  ChevronDown, 
  Info, 
  ArrowRight,
  TrendingUp,
  Star,
  BarChart2,
  Filter
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function BeneficiariesTab() {
  const { isMarathi } = useLanguage();

  // State for filter dropdowns
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedProgramme] = useState('All Programmes');
  const [selectedDistrict] = useState('All Districts');
  const [selectedCategory] = useState('All Categories');
  const [selectedGender] = useState('All Genders');

  // Top 7 KPI Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण लाभार्थी' : 'Total Beneficiaries',
      value: '12.4 Lakh',
      change: '12% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'पुरुष लाभार्थी' : 'Male Beneficiaries',
      value: '7.6 Lakh',
      change: '8.3% vs last year',
      icon: GraduationCap,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'महिला लाभार्थी' : 'Female Beneficiaries',
      value: '4.8 Lakh',
      change: '18.7% vs last year',
      icon: UserCheck,
      bg: '#FDF2F8',
      color: '#DB2777',
    },
    {
      title: isMarathi ? 'एससी लाभार्थी' : 'SC Beneficiaries',
      value: '2.1 Lakh',
      change: '14.2% vs last year',
      icon: User,
      bg: '#FEF3C7',
      color: '#D97706',
    },
    {
      title: isMarathi ? 'एसटी लाभार्थी' : 'ST Beneficiaries',
      value: '1.3 Lakh',
      change: '16.5% vs last year',
      icon: User,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'ओबीसी लाभार्थी' : 'OBC Beneficiaries',
      value: '5.2 Lakh',
      change: '10.1% vs last year',
      icon: User,
      bg: '#FFF7ED',
      color: '#C2410C',
    },
    {
      title: isMarathi ? 'इतर' : 'Others',
      value: '1.7 Lakh',
      change: '9.4% vs last year',
      icon: User,
      bg: '#FAF7F2',
      color: '#78350F',
    },
  ];

  // Age group breakdown
  const ageGroups = [
    { label: '< 18', pct: 12, height: '35%' },
    { label: '18–25', pct: 28, height: '75%' },
    { label: '26–35', pct: 34, height: '90%' },
    { label: '36–45', pct: 18, height: '50%' },
    { label: '> 45', pct: 8, height: '25%' },
  ];

  // Category distribution
  const categoryData = [
    { name: 'General', pct: '28%', color: '#FCE4D6' },
    { name: 'OBC', pct: '42%', color: '#E65100' },
    { name: 'SC', pct: '17%', color: '#5C1D06' },
    { name: 'ST', pct: '10%', color: '#A03808' },
    { name: 'Others', pct: '3%', color: '#F0D6C2' },
  ];

  // Top 10 Districts
  const topDistricts = [
    { id: 1, name: 'Pune', count: '1,42,400' },
    { id: 2, name: 'Nashik', count: '98,200' },
    { id: 3, name: 'Nagpur', count: '92,600' },
    { id: 4, name: 'Thane', count: '88,400' },
    { id: 5, name: 'Aurangabad', count: '76,800' },
    { id: 6, name: 'Kolhapur', count: '62,300' },
    { id: 7, name: 'Solapur', count: '58,400' },
    { id: 8, name: 'Ahmednagar', count: '52,100' },
    { id: 9, name: 'Satara', count: '48,600' },
    { id: 10, name: 'Amravati', count: '46,900' },
  ];

  // Programme Types List
  const programmeTypes = [
    { name: 'Short-Term Training', count: '4.8 Lakh', barWidth: '85%' },
    { name: 'Long-Term Training', count: '2.9 Lakh', barWidth: '55%' },
    { name: 'Apprenticeship', count: '1.8 Lakh', barWidth: '35%' },
    { name: 'Recognition of Prior Learning', count: '1.2 Lakh', barWidth: '25%' },
    { name: 'Entrepreneurship', count: '0.9 Lakh', barWidth: '18%' },
    { name: 'Others', count: '0.8 Lakh', barWidth: '15%' },
  ];

  // Recent Enrolments Table
  const recentEnrolments = [
    { id: 1, name: 'Rohit Patil', programme: 'Data Analytics', district: 'Pune', date: '12 Sep 2025', category: 'OBC', gender: 'Male' },
    { id: 2, name: 'Sneha Jadhav', programme: 'EV Technology', district: 'Nashik', date: '12 Sep 2025', category: 'Open', gender: 'Female' },
    { id: 3, name: 'Aakash Shinde', programme: 'Industrial Automation', district: 'Nagpur', date: '11 Sep 2025', category: 'SC', gender: 'Male' },
    { id: 4, name: 'Pooja More', programme: 'Healthcare Support', district: 'Thane', date: '11 Sep 2025', category: 'OBC', gender: 'Female' },
    { id: 5, name: 'Aditya Pawar', programme: 'Cybersecurity', district: 'Kolhapur', date: '10 Sep 2025', category: 'ST', gender: 'Male' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Subtitle */}
      <div className="flex items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'लाभार्थी' : 'Beneficiaries'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'सर्व कौशल्य विकास कार्यक्रमांमधील प्रशिक्षणार्थी आणि लाभार्थी तपशील पहा आणि विश्लेषित करा.'
              : 'View and analyze trainee and beneficiary details across all skill development programmes.'}
          </p>
        </div>
      </div>

      {/* Filter Bar (6 Dropdowns + Apply Button) */}
      <div className="flex items-center justify-between gap-2 flex-wrap shrink-0">
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
            <span>{selectedProgramme}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>

          {/* Dropdown 4 */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
            <span>{selectedDistrict}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>

          {/* Dropdown 5 */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
            <span>{selectedCategory}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>

          {/* Dropdown 6 */}
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
            <span>{selectedGender}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>
        </div>

        {/* Apply Button */}
        <button className="flex items-center gap-1.5 h-8 px-4 bg-[#8B2500] hover:bg-[#721E00] text-white font-semibold text-xs rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0">
          <Filter size={12} />
          <span>Apply</span>
        </button>
      </div>

      {/* 7 Key Performance Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 shrink-0">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#F1E5D8] p-2.5 shadow-2xs flex flex-col justify-between transition-all hover:shadow-xs"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: kpi.bg, color: kpi.color }}
                >
                  <Icon size={15} />
                </div>
                <span className="text-[10.5px] font-medium text-slate-500 leading-tight truncate">
                  {kpi.title}
                </span>
              </div>
              <div>
                <div className="text-lg font-black text-slate-900 leading-tight">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-0.5 text-[9.5px] font-bold text-emerald-600 mt-0.5">
                  <span>↑</span>
                  <span>{kpi.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Row 1 Grid (4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 shrink-0">
        
        {/* Box 1: Beneficiaries by Gender */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'लिंगानुसार लाभार्थी' : 'Beneficiaries by Gender'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#5C1D06" strokeWidth="10" strokeDasharray="146.4 92.4" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="92.4 146.4" strokeDashoffset="-146.4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-black tracking-tight text-slate-900 leading-none">12.4 Lakh</span>
                <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Total</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5C1D06]" />
                  <span className="text-slate-600 font-medium">Male</span>
                </div>
                <div className="text-right shrink-0 whitespace-nowrap"><span className="font-bold text-slate-900 text-[11px]">61.3%</span> <span className="font-normal text-slate-400 text-[10px]">(7.6 Lakh)</span></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
                  <span className="text-slate-600 font-medium">Female</span>
                </div>
                <div className="text-right shrink-0 whitespace-nowrap"><span className="font-bold text-slate-900 text-[11px]">38.7%</span> <span className="font-normal text-slate-400 text-[10px]">(4.8 Lakh)</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Beneficiaries by Age Group */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'वयोगटानुसार लाभार्थी' : 'Beneficiaries by Age Group'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* Histogram Chart */}
          <div className="flex-1 flex items-end justify-between gap-2 pt-6 pb-1 px-1 border-b border-slate-100 min-h-[140px]">
            {ageGroups.map((ag, i) => (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                <span className="text-[10px] font-bold text-slate-700 mb-1">{ag.pct}%</span>
                <div className="w-full max-w-[28px] bg-slate-100 rounded-t-sm overflow-hidden flex items-end" style={{ height: ag.height }}>
                  <div className="w-full bg-gradient-to-t from-[#E65100] to-[#F5A25D] rounded-t-sm h-full" />
                </div>
                <span className="text-[10px] font-semibold text-slate-500 mt-2">{ag.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Box 3: Beneficiaries by Category */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'प्रवर्गानुसार लाभार्थी' : 'Beneficiaries by Category'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="100.2 138.5" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FCE4D6" strokeWidth="10" strokeDasharray="66.8 171.9" strokeDashoffset="-100.2" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#5C1D06" strokeWidth="10" strokeDasharray="40.6 198.1" strokeDashoffset="-167" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#A03808" strokeWidth="10" strokeDasharray="23.8 214.9" strokeDashoffset="-207.6" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F0D6C2" strokeWidth="10" strokeDasharray="7.1 231.6" strokeDashoffset="-231.4" />
              </svg>
            </div>

            {/* Category Legend */}
            <div className="flex-1 space-y-1.5 text-xs">
              {categoryData.map((cat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cat.color }} />
                    <span className="text-slate-600 font-medium">{cat.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{cat.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 4: Top 10 Districts by Beneficiaries */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'सर्वोच्च १० जिल्हे' : 'Top 10 Districts by Beneficiaries'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-1 text-xs">
              {topDistricts.map((d) => (
                <div key={d.id} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-400 w-4">{d.id}</span>
                    <span className="font-semibold text-slate-800">{d.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{d.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-right pt-2 mt-2 border-t border-slate-100">
            <a href="#districts" className="text-xs font-bold text-[#8B2500] hover:underline inline-flex items-center gap-1">
              View All Districts <ArrowRight size={12} />
            </a>
          </div>
        </div>

      </div>

      {/* Middle Row 2 Grid (2 Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 shrink-0">
        
        {/* Box 1: Beneficiaries Trend */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'लाभार्थी कल' : 'Beneficiaries Trend'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C1D06]" />
                <span className="text-slate-600">Male</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
                <span className="text-slate-600">Female</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B2500]" />
                <span className="text-slate-600">Total</span>
              </div>
            </div>
          </div>

          {/* SVG Trend Chart */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
              {[0, 30, 60, 90].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">300K</text>
              <text x="0" y="35" className="text-[8px] fill-slate-400 font-semibold">200K</text>
              <text x="0" y="65" className="text-[8px] fill-slate-400 font-semibold">100K</text>
              <text x="8" y="95" className="text-[8px] fill-slate-400 font-semibold">0K</text>

              <path d="M 30 75 L 60 65 L 90 58 L 120 50 L 150 42 L 180 35 L 210 30 L 240 22 L 270 15" fill="none" stroke="#8B2500" strokeWidth="2.5" />
              <path d="M 30 85 L 60 78 L 90 70 L 120 62 L 150 55 L 180 48 L 210 42 L 240 35 L 270 28" fill="none" stroke="#5C1D06" strokeWidth="2.5" />
              <path d="M 30 92 L 60 88 L 90 82 L 120 76 L 150 70 L 180 64 L 210 58 L 240 50 L 270 44" fill="none" stroke="#E65100" strokeWidth="2.5" />
            </svg>
            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2: Beneficiaries by Programme Type */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'कार्यक्रम प्रकारानुसार लाभार्थी' : 'Beneficiaries by Programme Type'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-3">
              {programmeTypes.map((pt, i) => (
                <div key={i} className="flex items-center justify-between gap-3 text-xs">
                  <span className="w-160px font-semibold text-slate-800 truncate">{pt.name}</span>
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full" style={{ width: pt.barWidth }} />
                  </div>
                  <span className="font-bold text-slate-900 w-16 text-right">{pt.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row 3 Grid (Recent Enrolments & Insights) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Recent Enrolments Table (7/12) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'अलीकडील नोंदणी' : 'Recent Enrolments'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#enrolments" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All Enrolments <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1 w-6">#</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Programme</th>
                    <th className="pb-2">District</th>
                    <th className="pb-2">Enrolment Date</th>
                    <th className="pb-2">Category</th>
                    <th className="pb-2 pr-1">Gender</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {recentEnrolments.map((re) => (
                    <tr key={re.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2 pl-1 font-bold text-slate-400">{re.id}</td>
                      <td className="py-2 font-semibold text-slate-900">{re.name}</td>
                      <td className="py-2 text-slate-600">{re.programme}</td>
                      <td className="py-2 text-slate-600">{re.district}</td>
                      <td className="py-2 text-slate-500">{re.date}</td>
                      <td className="py-2 font-semibold text-slate-700">{re.category}</td>
                      <td className="py-2 pr-1 font-medium text-slate-600">{re.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Beneficiary Insights Card (5/12) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'लाभार्थी इनसाइट्स' : 'Beneficiary Insights'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            {/* Insights badges list */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-700 block text-xs">18.7%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Female enrolment increased significantly.</span>
                </div>
              </div>

              <div className="bg-[#FFF1F2] border border-[#FFE4E6] p-2.5 rounded-lg flex items-center gap-2">
                <Users size={16} className="text-pink-600 shrink-0" />
                <div>
                  <strong className="text-pink-700 block text-xs">34%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Highest participation age group 26–35.</span>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-2.5 rounded-lg flex items-center gap-2">
                <BarChart2 size={16} className="text-amber-600 shrink-0" />
                <div>
                  <strong className="text-amber-700 block text-xs">42%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Majority belong to OBC category.</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EADBCC] p-2.5 rounded-lg flex items-center gap-2">
                <Star size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <strong className="text-[#8B2500] block text-xs">Pune</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Highest beneficiaries (1.42 Lakh).</span>
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
