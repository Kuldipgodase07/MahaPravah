import { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Coins, 
  Building2, 
  UserCheck, 
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
  Target,
  Settings,
  BarChart2,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function EmploymentOutcomesTab() {
  const { isMarathi } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('district');

  // Filter states
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedProgramme] = useState('All Programmes');
  const [selectedMapMetric] = useState('Employment Rate');

  // Top 6 KPI Metric Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण रोजगार प्राप्त' : 'Total Placed',
      value: '6.4 Lakh',
      change: '14.2% vs last year',
      icon: Briefcase,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सत्यापित रोजगार' : 'Verified Employment',
      value: '54.8%',
      change: '8.1% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? '१२-महिन्यांचे टिकून राहणे' : '12-Month Retention',
      value: '72.1%',
      change: '5.6% vs last year',
      icon: TrendingUp,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'मध्यक मासिक वेतन' : 'Median Monthly Wage',
      value: '₹18,250',
      change: '18.6% vs last year',
      icon: Coins,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'अनन्य नियोक्ते' : 'Unique Employers',
      value: '12,430',
      change: '21.4% vs last year',
      icon: Building2,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'स्वयं-रोजगार आणि उद्योजकता' : 'Self-Employment & Entrepreneurship',
      value: '9.8%',
      change: '3.2% vs last year',
      icon: UserCheck,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Funnel Stages Data
  const funnelStages = [
    { name: 'Enrolled', count: '12,4,000', pct: '100%', width: '100%', bg: '#FA5800' },
    { name: 'Completed', count: '10,8,200', pct: '87%', width: '87%', bg: '#E84A00' },
    { name: 'Certified', count: '9,8,200', pct: '79%', width: '79%', bg: '#D63D00' },
    { name: 'Placed', count: '6,4,300', pct: '52%', width: '65%', bg: '#BD3000' },
    { name: 'Employed', count: '5,3,800', pct: '43%', width: '52%', bg: '#A02400' },
    { name: '6M Retained', count: '4,7,600', pct: '38%', width: '42%', bg: '#801A00' },
    { name: '12M Retained', count: '4,0,200', pct: '32%', width: '34%', bg: '#5A0E00' },
  ];

  // Sector Employment Data
  const sectorData = [
    { name: 'IT & ITES', icon: Cpu, placed: '1.2 Lakh', barWidth: '82%', rate: '82%' },
    { name: 'Automotive', icon: Car, placed: '0.9 Lakh', barWidth: '76%', rate: '76%' },
    { name: 'Healthcare', icon: HeartPulse, placed: '0.7 Lakh', barWidth: '71%', rate: '71%' },
    { name: 'Manufacturing', icon: Factory, placed: '0.6 Lakh', barWidth: '68%', rate: '68%' },
    { name: 'Retail & BFSI', icon: Building, placed: '0.5 Lakh', barWidth: '62%', rate: '62%' },
    { name: 'Construction', icon: HardHat, placed: '0.4 Lakh', barWidth: '58%', rate: '58%' },
    { name: 'Agriculture & Allied', icon: Sprout, placed: '0.4 Lakh', barWidth: '54%', rate: '54%' },
    { name: 'Hospitality & Tourism', icon: Hotel, placed: '0.3 Lakh', barWidth: '51%', rate: '51%' },
    { name: 'Others', icon: Target, placed: '0.7 Lakh', barWidth: '49%', rate: '49%' },
  ];

  // Employment Type Donut Data
  const employmentTypes = [
    { name: isMarathi ? 'पगारी' : 'Salaried', share: '78%', color: '#5C1D06' },
    { name: isMarathi ? 'स्वयं-रोजगार' : 'Self-Employed', share: '9%', color: '#E65100' },
    { name: isMarathi ? 'प्रशिक्षणार्थी' : 'Apprenticeship', share: '7%', color: '#C85A17' },
    { name: isMarathi ? 'गिग / कंत्राटी' : 'Gig / Contract', share: '4%', color: '#F5A25D' },
    { name: isMarathi ? 'इतर' : 'Others', share: '2%', color: '#FBE3CB' },
  ];

  // Top Employers
  const topEmployers = [
    { id: 1, name: 'Tata Motors', sector: 'Automotive', hired: '24,800' },
    { id: 2, name: 'TCS', sector: 'IT & ITES', hired: '18,400' },
    { id: 3, name: 'Reliance Retail', sector: 'Retail', hired: '12,600' },
    { id: 4, name: 'Infosys', sector: 'IT & ITES', hired: '11,200' },
    { id: 5, name: 'HDFC Bank', sector: 'BFSI', hired: '10,800' },
  ];

  // Recent Placements
  const recentPlacements = [
    { id: 1, name: 'Sneha Jadhav', programme: 'Data Analytics', district: 'Pune', employer: 'TCS', date: '12 Sep 2025', type: 'Full-time' },
    { id: 2, name: 'Rohit Patil', programme: 'EV Technology', district: 'Nashik', employer: 'Tata Motors', date: '11 Sep 2025', type: 'Full-time' },
    { id: 3, name: 'Aakash Shinde', programme: 'Industrial Automation', district: 'Nagpur', employer: 'Mahindra', date: '10 Sep 2025', type: 'Apprenticeship' },
    { id: 4, name: 'Pooja More', programme: 'Healthcare Support', district: 'Thane', employer: 'Apollo Hospitals', date: '10 Sep 2025', type: 'Full-time' },
    { id: 5, name: 'Aditya Pawar', programme: 'Cybersecurity', district: 'Kolhapur', employer: 'HDFC Bank', date: '9 Sep 2025', type: 'Full-time' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'रोजगार निकाल' : 'Employment Outcomes'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'महाराष्ट्रातील प्लेसमेंट, रोजगार, टिकून राहणे आणि वेतनाच्या निकालांचा मागोवा घ्या.'
              : 'Track placement, employment, retention and wage outcomes across Maharashtra.'}
          </p>
        </div>

        {/* Global Filter Lockup */}
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
        </div>
      </div>

      {/* 6 Key Metric Cards Grid */}
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

      {/* Filter Segment Tabs Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[
          { id: 'district', label: isMarathi ? 'जिल्ह्यानुसार' : 'By District' },
          { id: 'sector', label: isMarathi ? 'क्षेत्रानुसार' : 'By Sector' },
          { id: 'programme', label: isMarathi ? 'कार्यक्रमानुसार' : 'By Programme' },
          { id: 'provider', label: isMarathi ? 'प्रदात्यानुसार' : 'By Provider' },
          { id: 'demographics', label: isMarathi ? 'लोकसंख्याशास्त्रानुसार' : 'By Demographics' },
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

      {/* Row 1 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Employment Rate by District */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'जिल्ह्यानुसार रोजगार दर' : 'Employment Rate by District'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedMapMetric}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center min-h-[180px]">
            <img
              src="/maharashtra-district-map.png"
              alt="Maharashtra District Map"
              className="w-full h-full max-h-[180px] object-contain select-none filter drop-shadow-xs"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />

            <div className="absolute right-0 bottom-0 bg-white/95 backdrop-blur-xs p-1.5 rounded-lg border border-slate-100 shadow-2xs text-[9px] space-y-1">
              {[
                { color: '#5C1D06', label: '≥ 80%' },
                { color: '#9E3808', label: '60% – 80%' },
                { color: '#DF6B20', label: '40% – 60%' },
                { color: '#F3AF6B', label: '20% – 40%' },
                { color: '#FDE0BD', label: '< 20%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Employment Funnel */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'रोजगार फनेल' : 'Employment Funnel'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* Inverted Funnel Chart Visual */}
          <div className="flex-1 flex flex-col justify-center gap-1 py-1">
            {funnelStages.map((stage, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 text-xs">
                <div className="w-[100px] text-right text-[11px] font-semibold text-slate-700 shrink-0 leading-none">
                  <div>{stage.name}</div>
                  <div className="text-[9.5px] font-bold text-slate-900">{stage.count}</div>
                </div>

                <div className="flex-1 flex justify-center">
                  <div
                    className="h-4 rounded-sm flex items-center justify-center text-white text-[9.5px] font-bold transition-all duration-300 shadow-2xs"
                    style={{ width: stage.width, backgroundColor: stage.bg }}
                  >
                    {stage.pct}
                  </div>
                </div>

                <span className="w-8 text-[10.5px] font-bold text-slate-600 shrink-0 text-left">
                  {stage.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Box 3 (4/12): Employment by Sector */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'क्षेत्रनिहाय रोजगार' : 'Employment by Sector'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#sectors" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="flex items-center justify-between text-[10.5px] font-bold text-slate-500 border-b border-[#F1E5D8] pb-1 mb-2 uppercase tracking-wider">
              <span>Sector</span>
              <span className="pr-12">Placed</span>
              <span>Employment Rate</span>
            </div>

            <div className="space-y-2">
              {sectorData.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div key={idx} className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 w-[120px] shrink-0 truncate">
                      <div className="w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#EADBCC] flex items-center justify-center shrink-0 text-[#8B2500]">
                        <Icon size={10} />
                      </div>
                      <span className="font-semibold text-slate-800 truncate">{sec.name}</span>
                    </div>

                    <span className="font-bold text-slate-700 w-14 text-center shrink-0 text-[11px]">{sec.placed}</span>

                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full transition-all duration-500"
                        style={{ width: sec.barWidth }}
                      />
                    </div>

                    <span className="font-bold text-slate-900 text-right w-9 shrink-0 text-[11px]">
                      {sec.rate}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (5/12): Employment Trend Multi-Line Chart */}
        <div className="md:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'रोजगार कल' : 'Employment Trend'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 text-[10.5px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B2500]" />
                <span className="text-slate-600">Placed</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C1D06]" />
                <span className="text-slate-600">Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
                <span className="text-slate-600">12M Retained</span>
              </div>
            </div>
          </div>

          {/* Multi line chart */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">200K</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">150K</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">100K</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">50K</text>
              <text x="8" y="101" className="text-[8px] fill-slate-400 font-semibold">0K</text>

              <path d="M 35 70 L 85 55 L 135 48 L 185 38 L 235 28 L 285 20" fill="none" stroke="#8B2500" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 82 L 85 70 L 135 62 L 185 52 L 235 45 L 285 36" fill="none" stroke="#5C1D06" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 92 L 85 82 L 135 75 L 185 68 L 235 60 L 285 52" fill="none" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (3/12): Employment Type Donut */}
        <div className="md:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'रोजगार प्रकार' : 'Employment Type'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#5C1D06" strokeWidth="10" strokeDasharray="186.3 52.4" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="21.5 217.2" strokeDashoffset="-186.3" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C85A17" strokeWidth="10" strokeDasharray="16.7 222" strokeDashoffset="-207.8" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F5A25D" strokeWidth="10" strokeDasharray="9.5 229.2" strokeDashoffset="-224.5" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FBE3CB" strokeWidth="10" strokeDasharray="4.8 233.9" strokeDashoffset="-234" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-lg font-black text-slate-900 leading-none">6.4 Lakh</span>
                <span className="text-[9.5px] font-semibold text-slate-500 mt-0.5">Placed</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-1.5 text-xs">
              {employmentTypes.map((et, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate pr-1">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: et.color }} />
                    <span className="text-slate-600 font-medium truncate">{et.name}</span>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">{et.share}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Top Employers */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'सर्वोच्च नियोक्ते (प्लेसमेंट्सद्वारे)' : 'Top Employers (by Placements)'}
              </h3>
              <a href="#employers" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-1.5 text-xs">
              {topEmployers.map((emp) => (
                <div key={emp.id} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-400 w-4">{emp.id}</span>
                    <div>
                      <div className="font-semibold text-slate-900">{emp.name}</div>
                      <div className="text-[10px] text-slate-500">{emp.sector}</div>
                    </div>
                  </div>
                  <span className="font-bold text-[#8B2500]">{emp.hired}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (Recent Placements & Key Insights) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Recent Placements (7/12) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'अलीकडील प्लेसमेंट्स' : 'Recent Placements'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#placements" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1 w-6">#</th>
                    <th className="pb-2">Trainee Name</th>
                    <th className="pb-2">Programme</th>
                    <th className="pb-2">District</th>
                    <th className="pb-2">Employer</th>
                    <th className="pb-2">Joining Date</th>
                    <th className="pb-2 pr-1">Employment Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {recentPlacements.map((rp) => (
                    <tr key={rp.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2.5 pl-1 font-bold text-slate-400">{rp.id}</td>
                      <td className="py-2.5 font-semibold text-slate-900">{rp.name}</td>
                      <td className="py-2.5 text-slate-600">{rp.programme}</td>
                      <td className="py-2.5 text-slate-600">{rp.district}</td>
                      <td className="py-2.5 font-semibold text-slate-800">{rp.employer}</td>
                      <td className="py-2.5 text-slate-500">{rp.date}</td>
                      <td className="py-2.5 pr-1 font-medium text-slate-700">{rp.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Insights Card (5/12) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'महत्त्वाच्या इनसाइट्स' : 'Key Insights'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            {/* 6 Insight Cards */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-700 block text-xs">18.6%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Median wage increased significantly this year.</span>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-2.5 rounded-lg flex items-center gap-2">
                <Settings size={16} className="text-amber-600 shrink-0" />
                <div>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">High demand in IT & ITES and Automotive sectors.</span>
                </div>
              </div>

              <div className="bg-[#FFF1F2] border border-[#FFE4E6] p-2.5 rounded-lg flex items-center gap-2">
                <Users size={16} className="text-pink-600 shrink-0" />
                <div>
                  <strong className="text-pink-700 block text-xs">72.1%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">12-month retention shows strong stability.</span>
                </div>
              </div>

              <div className="bg-[#EFF6FF] border border-[#DBEAFE] p-2.5 rounded-lg flex items-center gap-2">
                <BarChart2 size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Placement rate improved by 14.2% compared to last year.</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EADBCC] p-2.5 rounded-lg flex items-center gap-2">
                <Briefcase size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <strong className="text-[#8B2500] block text-xs">12,430</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Unique employers hired from our programmes.</span>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-2.5 rounded-lg flex items-center gap-2">
                <GraduationCap size={16} className="text-amber-700 shrink-0" />
                <div>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Self-employment opportunities growing (9.8%).</span>
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
