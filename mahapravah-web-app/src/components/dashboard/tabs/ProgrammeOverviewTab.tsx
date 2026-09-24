import { useState } from 'react';
import { 
  Layers, 
  Users, 
  UserCheck, 
  FileCheck, 
  Briefcase, 
  TrendingUp, 
  Search, 
  Upload, 
  ChevronDown, 
  Info, 
  ArrowRight,
  Cpu,
  Car,
  HeartPulse,
  Factory,
  Building,
  HardHat,
  Sprout,
  Hotel,
  Target
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ProgrammeOverviewTab() {
  const { isMarathi } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('scheme');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedEnrolmentFilter] = useState('Enrolment');
  const [selectedTrendPeriod] = useState('Last 6 Months');

  // KPI Data
  const kpis = [
    {
      title: isMarathi ? 'एकूण कार्यक्रम' : 'Total Programmes',
      value: '482',
      change: '12% vs last year',
      icon: Layers,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सक्रिय कार्यक्रम' : 'Active Programmes',
      value: '418',
      change: '8.6% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एकूण नोंदणीकृत' : 'Total Enrolled',
      value: '12.4 Lakh',
      change: '12.3% vs last year',
      icon: UserCheck,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एकूण पूर्ण' : 'Total Completed',
      value: '10.8 Lakh',
      change: '11.5% vs last year',
      icon: FileCheck,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एकूण रोजगार' : 'Total Placed',
      value: '6.4 Lakh',
      change: '14.2% vs last year',
      icon: Briefcase,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एकूण रोजगार दर' : 'Overall Employment Rate',
      value: '68.4%',
      change: '6.2% vs last year',
      icon: TrendingUp,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Programme distribution data for Donut Chart
  const distribution = [
    { name: isMarathi ? 'राज्य शासन' : 'State Government', share: '42%', count: '202', color: '#8B2500' },
    { name: isMarathi ? 'केंद्र पुरस्कृत' : 'Centrally Sponsored', share: '28%', count: '135', color: '#E65100' },
    { name: isMarathi ? 'सार्वजनिक खाजगी भागीदारी' : 'Public Private Partnership', share: '15%', count: '72', color: '#C85A17' },
    { name: isMarathi ? 'सीएसआर / उद्योग प्रणीत' : 'CSR / Industry Led', share: '9%', count: '43', color: '#F5A25D' },
    { name: isMarathi ? 'इतर' : 'Others', share: '6%', count: '30', color: '#FBE3CB' },
  ];

  // Enrolment trend months
  const trendMonths = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  // Top Programmes Table Data
  const topProgrammes = [
    {
      id: 1,
      name: 'Maharashtra Skill University (Various Courses)',
      agency: 'MSDE',
      enrolled: '2,48,000',
      completed: '1,98,400',
      rate: '72%',
    },
    {
      id: 2,
      name: 'PMKVY 4.0',
      agency: 'MSDE',
      enrolled: '1,92,000',
      completed: '1,46,000',
      rate: '68%',
    },
    {
      id: 3,
      name: 'CM Yuva Skill Programme',
      agency: 'GoM',
      enrolled: '1,46,000',
      completed: '1,24,100',
      rate: '73%',
    },
    {
      id: 4,
      name: 'Mahila Kaushalya Vikas',
      agency: 'GoM',
      enrolled: '1,12,000',
      completed: '90,200',
      rate: '66%',
    },
    {
      id: 5,
      name: 'Apprenticeship Promotion',
      agency: 'GoM',
      enrolled: '98,000',
      completed: '77,800',
      rate: '62%',
    },
  ];

  // Sector-wise distribution data
  const sectorData = [
    { name: 'IT & ITES', icon: Cpu, barWidth: '80%', share: '19%' },
    { name: 'Automotive', icon: Car, barWidth: '60%', share: '13%' },
    { name: 'Healthcare', icon: HeartPulse, barWidth: '55%', share: '12%' },
    { name: 'Manufacturing', icon: Factory, barWidth: '50%', share: '11%' },
    { name: 'Retail & BFSI', icon: Building, barWidth: '45%', share: '10%' },
    { name: 'Construction', icon: HardHat, barWidth: '35%', share: '7%' },
    { name: 'Agriculture & Allied', icon: Sprout, barWidth: '35%', share: '7%' },
    { name: 'Hospitality & Tourism', icon: Hotel, barWidth: '30%', share: '6%' },
    { name: 'Others', icon: Target, barWidth: '65%', share: '15%' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Page Title Bar + Top Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'कार्यक्रम विहंगावलोकन' : 'Programme Overview'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'महाराष्ट्रातील सर्व सरकारी कौशल्य विकास कार्यक्रमांचे अन्वेषण आणि विश्लेषण करा.'
              : 'Explore and analyze government skill development programmes across Maharashtra.'}
          </p>
        </div>

        {/* Global Filters & Timestamp lockup */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Dropdown 1: State Filter */}
          <div className="relative">
            <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
              <span>{selectedState}</span>
              <ChevronDown size={12} className="text-slate-400" />
            </button>
          </div>

          {/* Dropdown 2: Fiscal Year Filter */}
          <div className="relative">
            <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] cursor-pointer">
              <span>{selectedFY}</span>
              <ChevronDown size={12} className="text-slate-400" />
            </button>
          </div>

          {/* Last Updated badge */}
          <div className="text-[10px] text-slate-500 font-medium bg-white/80 px-2.5 py-1 rounded-md border border-[#F0E4D8]">
            <span className="text-slate-400">Last Updated</span> <br />
            <strong className="text-slate-700">12 Sep 2025, 10:30 AM</strong>
          </div>
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

      {/* Filter Tabs Bar + Search & Export Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
        {/* Left Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            { id: 'scheme', label: isMarathi ? 'योजनेनुसार' : 'By Scheme' },
            { id: 'sector', label: isMarathi ? 'क्षेत्रानुसार' : 'By Sector' },
            { id: 'agency', label: isMarathi ? 'अमलबजावणी एजन्सीनुसार' : 'By Implementing Agency' },
            { id: 'district', label: isMarathi ? 'जिल्ह्यानुसार' : 'By District' },
            { id: 'group', label: isMarathi ? 'लक्ष्य गटानुसार' : 'By Target Group' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'bg-white border border-[#EADBCC] text-slate-700 hover:bg-[#FAF7F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Search & Export */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative w-full sm:w-[220px]">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={isMarathi ? "कार्यक्रम शोधा..." : "Search programmes..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-2.5 text-xs bg-white border border-[#DFCEBD] rounded-lg shadow-2xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#8B2500]"
            />
          </div>

          <button className="flex items-center gap-1.5 h-8 px-4 bg-[#8B2500] hover:bg-[#721E00] text-white font-semibold text-xs rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0">
            <Upload size={13} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Middle Row Analytics Grid (3 Equal Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 shrink-0">
        
        {/* Box 1: Programme Distribution */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[270px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'कार्यक्रम वितरण' : 'Programme Distribution'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#8B2500" strokeWidth="10" strokeDasharray="100.2 138.5" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="66.8 171.9" strokeDashoffset="-100.2" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C85A17" strokeWidth="10" strokeDasharray="35.8 202.9" strokeDashoffset="-167" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F5A25D" strokeWidth="10" strokeDasharray="21.5 217.2" strokeDashoffset="-202.8" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FBE3CB" strokeWidth="10" strokeDasharray="14.3 224.4" strokeDashoffset="-224.3" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black text-slate-900 leading-none">482</span>
                <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Programmes</span>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="flex-1 space-y-1.5 text-xs">
              {distribution.map((item, idx) => (
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

        {/* Box 2: Enrolment Trend */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[270px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'नोंदणी कल' : 'Enrolment Trend'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedTrendPeriod}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-end gap-3 text-[10.5px] font-semibold mb-1">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
              <span className="text-slate-600">Enrolled</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B2500]" />
              <span className="text-slate-600">Completed</span>
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 24, 48, 72, 96].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">250K</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">200K</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">150K</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">100K</text>
              <text x="0" y="101" className="text-[8px] fill-slate-400 font-semibold">50K</text>
              <text x="8" y="118" className="text-[8px] fill-slate-400 font-semibold">0K</text>

              <path d="M 35 75 L 85 55 L 135 45 L 185 30 L 235 20 L 285 10" fill="none" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 95 L 85 75 L 135 65 L 185 55 L 235 45 L 285 35" fill="none" stroke="#8B2500" strokeWidth="2.5" strokeLinecap="round" />

              {[
                { x: 35, y1: 75, y2: 95 },
                { x: 85, y1: 55, y2: 75 },
                { x: 135, y1: 45, y2: 65 },
                { x: 185, y1: 30, y2: 55 },
                { x: 235, y1: 20, y2: 45 },
                { x: 285, y1: 10, y2: 35 },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.x} cy={pt.y1} r="3.5" fill="#E65100" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx={pt.x} cy={pt.y2} r="3.5" fill="#8B2500" stroke="#FFFFFF" strokeWidth="1.5" />
                </g>
              ))}
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {trendMonths.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 3: Programme Reach by District */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[270px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'जिल्ह्यानुसार कार्यक्रम पोहोच' : 'Programme Reach by District'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedEnrolmentFilter}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center">
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
                { color: '#5C1D06', label: '≥ 80K' },
                { color: '#9E3808', label: '60K - 80K' },
                { color: '#DF6B20', label: '40K - 60K' },
                { color: '#F3AF6B', label: '20K - 40K' },
                { color: '#FDE0BD', label: '< 20K' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row Grid (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Left Column (7/12): Top Programmes by Enrolment Table */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'नोंदणीनुसार सर्वोच्च कार्यक्रम' : 'Top Programmes by Enrolment'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#programmes" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1 w-6">#</th>
                    <th className="pb-2">Programme Name</th>
                    <th className="pb-2">Implementing Agency</th>
                    <th className="pb-2 text-right">Enrolled</th>
                    <th className="pb-2 text-right">Completed</th>
                    <th className="pb-2 text-right pr-1">Placement Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {topProgrammes.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2.5 pl-1 font-bold text-slate-400">{p.id}</td>
                      <td className="py-2.5 font-semibold text-slate-900 pr-2">{p.name}</td>
                      <td className="py-2.5 text-slate-600">{p.agency}</td>
                      <td className="py-2.5 text-right font-bold text-slate-800">{p.enrolled}</td>
                      <td className="py-2.5 text-right font-semibold text-slate-700">{p.completed}</td>
                      <td className="py-2.5 text-right pr-1 font-bold text-[#8B2500]">{p.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-2.5 mt-2 border-t border-slate-100 text-center">
            <a href="#programmes" className="text-xs font-bold text-[#8B2500] hover:underline inline-flex items-center gap-1">
              View All Programmes <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Right Column (5/12): Sector-wise Programme Distribution */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'क्षेत्रनिहाय कार्यक्रम वितरण' : 'Sector-wise Programme Distribution'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#sectors" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="flex items-center justify-between text-[10.5px] font-bold text-slate-500 border-b border-[#F1E5D8] pb-1.5 mb-2 uppercase tracking-wider">
              <span>Sector</span>
              <span className="pr-12">Programmes</span>
              <span>% Share</span>
            </div>

            <div className="space-y-2.5">
              {sectorData.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div key={idx} className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 w-[140px] shrink-0 truncate">
                      <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#EADBCC] flex items-center justify-center shrink-0 text-[#8B2500]">
                        <Icon size={11} />
                      </div>
                      <span className="font-semibold text-slate-800 truncate">{sec.name}</span>
                    </div>

                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full transition-all duration-500"
                        style={{ width: sec.barWidth }}
                      />
                    </div>

                    <span className="font-bold text-slate-900 text-right w-10 shrink-0">
                      {sec.share}
                    </span>
                  </div>
                );
              })}
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
