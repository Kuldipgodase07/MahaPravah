import { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  CheckCircle2, 
  TrendingUp, 
  Coins, 
  Target, 
  ChevronDown, 
  Info, 
  ArrowRight,
  Upload,
  Sparkles,
  TrendingDown
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function DistrictIntelligenceTab() {
  const { isMarathi } = useLanguage();

  // Filter states
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedMapMetric] = useState('Employment Rate');
  const [selectedComparisonMetric] = useState('Employment Rate');
  const [selectedReachMetric] = useState('Total Trainees');
  const [selectedTrendDistrict] = useState('Pune');

  // Top 6 KPI Metric Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण प्रशिक्षणार्थी' : 'Total Trainees',
      value: '12.4 Lakh',
      change: '12% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'रोजगार दर' : 'Employment Rate',
      value: '68.4%',
      change: '6.2% vs last year',
      icon: Briefcase,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सत्यापित रोजगार' : 'Verified Employment',
      value: '54.8%',
      change: '8.1% vs last year',
      icon: CheckCircle2,
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
      title: isMarathi ? 'मध्यक वेतन (₹)' : 'Median Wage (₹)',
      value: '18,250',
      change: '18.6% vs last year',
      icon: Coins,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'निकाल डेटा व्याप्ती' : 'Outcome Data Coverage',
      value: '81.4%',
      change: '9.3% vs last year',
      icon: Target,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Top Performing Districts
  const topDistricts = [
    { id: 1, name: 'Pune', rate: '74.2%', trainees: '1,42,400', growth: '12%' },
    { id: 2, name: 'Nashik', rate: '71.8%', trainees: '98,200', growth: '10%' },
    { id: 3, name: 'Nagpur', rate: '68.6%', trainees: '92,600', growth: '14%' },
    { id: 4, name: 'Thane', rate: '66.4%', trainees: '88,400', growth: '11%' },
    { id: 5, name: 'Aurangabad', rate: '64.1%', trainees: '76,800', growth: '9%' },
  ];

  // District Comparison Bar Heights (Percentages out of 100)
  const comparisonDistricts = [
    { name: 'Pune', height: '74%' },
    { name: 'Nashik', height: '72%' },
    { name: 'Nagpur', height: '69%' },
    { name: 'Thane', height: '66%' },
    { name: 'Aurangabad', height: '64%' },
    { name: 'Solapur', height: '61%' },
  ];

  // Focus Districts (Need Attention)
  const focusDistricts = [
    { id: 1, name: 'Gadchiroli', rate: '28.4%', issue: 'Low enrolment', action: 'Plan Outreach' },
    { id: 2, name: 'Nandurbar', rate: '32.6%', issue: 'Low placement', action: 'Enhance Training' },
    { id: 3, name: 'Hingoli', rate: '35.1%', issue: 'High dropout', action: 'Mentorship' },
    { id: 4, name: 'Washim', rate: '36.8%', issue: 'Few employers', action: 'Industry Connect' },
    { id: 5, name: 'Yavatmal', rate: '38.2%', issue: 'Low retention', action: 'Follow-up' },
  ];

  // District-wise Programme Reach
  const districtReach = [
    { name: 'Pune', count: '1,42,400', barWidth: '100%', pct: '100%' },
    { name: 'Nashik', count: '98,200', barWidth: '69%', pct: '69%' },
    { name: 'Nagpur', count: '92,600', barWidth: '65%', pct: '65%' },
    { name: 'Thane', count: '88,400', barWidth: '62%', pct: '62%' },
    { name: 'Aurangabad', count: '76,800', barWidth: '54%', pct: '54%' },
    { name: 'Solapur', count: '58,400', barWidth: '41%', pct: '41%' },
  ];

  // Sector-wise Opportunity (Pune)
  const sectorOpportunity = [
    { sector: 'IT & ITES', demand: '18,400', supply: '12,600', gap: '-5,800' },
    { sector: 'Automotive', demand: '12,200', supply: '8,400', gap: '-3,800' },
    { sector: 'Healthcare', demand: '9,600', supply: '6,200', gap: '-3,400' },
    { sector: 'Manufacturing', demand: '8,800', supply: '5,600', gap: '-3,200' },
    { sector: 'Retail & BFSI', demand: '7,400', supply: '4,800', gap: '-2,600' },
  ];

  // AI Recommendations
  const aiRecommendations = [
    'Increase training capacity in Gadchiroli and Nandurbar districts.',
    'Focus on Automotive and Healthcare sectors in Pune.',
    'Launch district-specific employer outreach campaigns.',
    'Introduce retention incentives for high dropout districts.',
    'Monitor low-performing providers in Hingoli and Washim.',
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'जिल्हा बुद्धिमत्ता' : 'District Intelligence'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'महाराष्ट्रातील जिल्हानिहाय कौशल्य विकास आणि रोजगार निकालांची तुलना करा आणि विश्लेषण करा.'
              : 'Compare and analyze district-wise skill development and employment outcomes.'}
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

          {/* Export Action Button */}
          <button className="flex items-center gap-1.5 h-8 px-4 bg-[#8B2500] hover:bg-[#721E00] text-white font-semibold text-xs rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0">
            <Upload size={13} />
            <span>Export</span>
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

      {/* Row 1 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Maharashtra District Overview */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'महाराष्ट्र जिल्हा विहंगावलोकन' : 'Maharashtra District Overview'}
              </h3>
              <span className="text-[10.5px] text-slate-500 font-normal">Employment Rate (%)</span>
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

        {/* Box 2 (4/12): Top Performing Districts Table */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'सर्वोच्च कामगिरी करणारे जिल्हे' : 'Top Performing Districts'}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1 w-6">#</th>
                    <th className="pb-2">District</th>
                    <th className="pb-2">Employment Rate</th>
                    <th className="pb-2 text-right">Trainees</th>
                    <th className="pb-2 text-right pr-1">YoY Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {topDistricts.map((d) => (
                    <tr key={d.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2 pl-1 font-bold text-slate-400">{d.id}</td>
                      <td className="py-2 font-semibold text-slate-900">{d.name}</td>
                      <td className="py-2 font-bold text-[#8B2500]">{d.rate}</td>
                      <td className="py-2 text-right font-bold text-slate-800">{d.trainees}</td>
                      <td className="py-2 text-right pr-1 font-bold text-emerald-600">↑ {d.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-right">
            <a href="#districts" className="text-xs font-bold text-[#8B2500] hover:underline inline-flex items-center gap-1">
              View All Districts <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Box 3 (4/12): District Comparison Bar Chart */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'जिल्हा तुलना' : 'District Comparison'}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 font-semibold">Select Metric</span>
              <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
                <span>{selectedComparisonMetric}</span>
                <ChevronDown size={11} className="text-slate-400" />
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-3 text-[10px] font-semibold mb-1">
            <div className="flex items-center gap-1">
              <span className="w-3 border-t-2 border-dashed border-amber-600" />
              <span className="text-slate-600">Maharashtra Avg</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#E65100]" />
              <span className="text-slate-600">District</span>
            </div>
          </div>

          {/* Vertical Bar Chart Visual */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}

              {/* Dashed Maharashtra Avg Line */}
              <line x1="25" y1="35" x2="295" y2="35" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 3" />

              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">100%</text>
              <text x="0" y="30" className="text-[8px] fill-slate-400 font-semibold">75%</text>
              <text x="0" y="55" className="text-[8px] fill-slate-400 font-semibold">50%</text>
              <text x="0" y="80" className="text-[8px] fill-slate-400 font-semibold">25%</text>
              <text x="8" y="105" className="text-[8px] fill-slate-400 font-semibold">0%</text>

              {/* Vertical Bars */}
              {[
                { x: 35, h: 82 },
                { x: 75, h: 78 },
                { x: 115, h: 75 },
                { x: 155, h: 72 },
                { x: 195, h: 70 },
                { x: 235, h: 66 },
              ].map((b, idx) => (
                <rect key={idx} x={b.x} y={105 - b.h} width="22" height={b.h} fill="#E65100" rx="2" />
              ))}
            </svg>

            <div className="flex justify-between pl-6 pr-2 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {comparisonDistricts.map((cd, i) => (
                <span key={i}>{cd.name}</span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): District Insights */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'जिल्हा इनसाइट्स' : 'District Insights'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-700 block text-xs">↑ 5 Districts</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">have &gt; 70% employment rate</span>
                </div>
              </div>

              <div className="bg-[#FFF1F2] border border-[#FFE4E6] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingDown size={16} className="text-pink-600 shrink-0" />
                <div>
                  <strong className="text-pink-700 block text-xs">↓ 8 Districts</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">are below 50% employment rate</span>
                </div>
              </div>

              <div className="bg-[#EFF6FF] border border-[#DBEAFE] p-2.5 rounded-lg flex items-center gap-2">
                <Users size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <strong className="text-[#8B2500] block text-xs">Nagpur</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Highest number of trainees (92,600)</span>
                </div>
              </div>

              <div className="bg-[#FAF5FF] border border-[#F3E8FF] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-purple-600 shrink-0" />
                <div>
                  <strong className="text-purple-700 block text-xs">Pune</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Highest wage growth (+24.3%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Focus Districts (Need Attention) */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'लक्ष्य केंद्रित जिल्हे (लक्ष आवश्यक)' : 'Focus Districts (Need Attention)'}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1 w-5">#</th>
                    <th className="pb-2">District</th>
                    <th className="pb-2">Employment Rate</th>
                    <th className="pb-2">Key Issue</th>
                    <th className="pb-2 pr-1 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {focusDistricts.map((fd) => (
                    <tr key={fd.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2 pl-1 font-bold text-slate-400">{fd.id}</td>
                      <td className="py-2 font-semibold text-slate-900">{fd.name}</td>
                      <td className="py-2 font-bold text-rose-600">{fd.rate}</td>
                      <td className="py-2 text-slate-600">{fd.issue}</td>
                      <td className="py-2 pr-1 text-right">
                        <button className="px-2 py-0.5 text-[10.5px] font-semibold text-[#8B2500] bg-[#FFF7ED] border border-[#FFEDD5] rounded hover:bg-[#FFEDD5] cursor-pointer">
                          {fd.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): District-wise Programme Reach */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'जिल्हानिहाय कार्यक्रम पोहोच' : 'District-wise Programme Reach'}
              </h3>

              <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
                <span>{selectedReachMetric}</span>
                <ChevronDown size={11} className="text-slate-400" />
              </button>
            </div>

            <div className="space-y-2">
              {districtReach.map((dr, i) => (
                <div key={i} className="flex items-center justify-between gap-3 text-xs">
                  <span className="w-20 font-semibold text-slate-800 truncate">{dr.name}</span>
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full" style={{ width: dr.barWidth }} />
                  </div>
                  <span className="font-bold text-slate-900 w-16 text-right">{dr.count}</span>
                  <span className="font-semibold text-slate-500 w-9 text-right text-[11px]">{dr.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): District-wise Trend Multi-Line Chart */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'जिल्हानिहाय कल' : 'District-wise Trend'}
            </h3>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedTrendDistrict}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 text-[10px] font-semibold mb-1">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
              <span className="text-slate-600">Enrolled</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
              <span className="text-slate-600">Completed</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B2500]" />
              <span className="text-slate-600">Placed</span>
            </div>
          </div>

          {/* Multi Line Chart */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">40K</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">30K</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">20K</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">10K</text>
              <text x="8" y="101" className="text-[8px] fill-slate-400 font-semibold">0K</text>

              <path d="M 35 75 L 85 62 L 135 52 L 185 42 L 235 32 L 285 22" fill="none" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 88 L 85 76 L 135 68 L 185 58 L 235 48 L 285 40" fill="none" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 98 L 85 88 L 135 80 L 185 72 L 235 64 L 285 55" fill="none" stroke="#8B2500" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Sector-wise Opportunity (Pune) */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'क्षेत्रनिहाय संधी (पुणे)' : 'Sector-wise Opportunity (Pune)'}
              </h3>
              <a href="#opportunity" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-2 pl-1">Sector</th>
                    <th className="pb-2 text-right">Demand (Jobs)</th>
                    <th className="pb-2 text-right">Supply (Trained)</th>
                    <th className="pb-2 text-right pr-1">Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-xs font-medium">
                  {sectorOpportunity.map((so, i) => (
                    <tr key={i} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2 pl-1 font-semibold text-slate-900">{so.sector}</td>
                      <td className="py-2 text-right font-semibold text-slate-800">{so.demand}</td>
                      <td className="py-2 text-right text-slate-600">{so.supply}</td>
                      <td className="py-2 text-right pr-1 font-bold text-rose-600">{so.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): AI Recommendations */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <Sparkles size={16} className="text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'एआय शिफारसी' : 'AI Recommendations'}
                </h3>
              </div>
              <a href="#ai" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-2 text-xs">
              {aiRecommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2] border border-[#F0E4D8] hover:bg-[#F6ECE0] transition-colors cursor-pointer group">
                  <span className="w-4 h-4 rounded-full bg-[#8B2500] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-slate-700 leading-tight flex-1">{rec}</span>
                  <ArrowRight size={13} className="text-slate-400 group-hover:text-[#8B2500] transition-colors shrink-0 mt-0.5" />
                </div>
              ))}
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
