import { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  CheckCircle2, 
  TrendingUp, 
  Coins, 
  ChevronDown, 
  Info, 
  ArrowRight,
  Download,
  GraduationCap,
  FileCheck,
  Building,
  Heart,
  MapPin,
  Home,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ImpactAnalyticsTab() {
  const { isMarathi } = useLanguage();

  // Filter states
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedProgramme] = useState('All Programmes');
  const [selectedMapMetric] = useState('Impact Score');

  // Top 6 KPI Metric Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण प्रशिक्षित' : 'Total Trained',
      value: '12.4 Lakh',
      change: '12% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'एकूण नोकरीवर' : 'Total Employed',
      value: '8.5 Lakh',
      change: '14.6% vs last year',
      icon: Briefcase,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सत्यापित रोजगार' : 'Verified Employment',
      value: '6.8 Lakh',
      change: '18.2% vs last year',
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
      title: isMarathi ? 'मध्यक वेतन वाढ' : 'Median Wage Increase',
      value: '+18.6%',
      change: '4.3% vs last year',
      icon: Coins,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'प्रभावित जीवन (कुटुंब सदस्य)' : 'Lives Impacted (Family Members)',
      value: '34.2 Lakh',
      change: '13.1% vs last year',
      icon: Heart,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Journey Steps Data
  const journeySteps = [
    { name: 'Enrolled', val: '12.4 Lakh', pct: '100%', icon: GraduationCap },
    { name: 'Completed', val: '10.8 Lakh', pct: '87%', icon: Briefcase },
    { name: 'Certified', val: '9.8 Lakh', pct: '79%', icon: FileCheck },
    { name: 'Placed', val: '8.5 Lakh', pct: '68%', icon: Briefcase },
    { name: 'Retained', val: '6.1 Lakh', pct: '49%', icon: Users },
  ];

  // Socio-Economic Impact List
  const socioEconomicMetrics = [
    { title: 'Estimated Annual Income Generated', val: '₹ 1,842 Crore', change: '↑ 21%', icon: Building },
    { title: 'Average Monthly Wage (Placed)', val: '₹ 18,250', change: '↑ 18.6%', icon: Coins },
    { title: 'Self-Employment / Entrepreneurship', val: '9.8%', change: '↑ 3.2%', icon: UserCheck },
    { title: 'Women Employment Rate', val: '38.7%', change: '↑ 6.8%', icon: Users },
    { title: 'Placement in Non-Metro Districts', val: '46.2%', change: '↑ 11.4%', icon: MapPin },
    { title: 'Reduction in Migration (Est.)', val: '12.5%', change: '↑ 4.1%', icon: Home },
  ];

  // Impact by Programme Type
  const programmeTypeImpact = [
    { name: 'Short-Term Training', barWidth: '72%', pct: '72%' },
    { name: 'Long-Term Training', barWidth: '66%', pct: '66%' },
    { name: 'Apprenticeship', barWidth: '78%', pct: '78%' },
    { name: 'Recognition of Prior Learning', barWidth: '62%', pct: '62%' },
    { name: 'Entrepreneurship', barWidth: '54%', pct: '54%' },
    { name: 'Others', barWidth: '49%', pct: '49%' },
  ];

  // Impact by Beneficiary Category
  const categoryImpact = [
    { name: 'General', barWidth: '68%', pct: '68%' },
    { name: 'OBC', barWidth: '71%', pct: '71%' },
    { name: 'SC', barWidth: '62%', pct: '62%' },
    { name: 'ST', barWidth: '58%', pct: '58%' },
    { name: 'Minority', barWidth: '66%', pct: '66%' },
    { name: 'Women', barWidth: '69%', pct: '69%' },
    { name: 'Divyang', barWidth: '56%', pct: '56%' },
  ];

  // Recommended Actions
  const recommendedActions = [
    'Scale successful programmes from high-impact districts (Pune, Nashik, Satara).',
    'Increase focus on sectors with higher wage growth (IT & ITES, Automotive).',
    'Launch targeted interventions for low-impact districts (Gadchiroli, Nandurbar).',
    'Strengthen industry partnerships for better placement and retention.',
    'Promote women-centric and rural skilling initiatives.',
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'प्रभाव विश्लेषण' : 'Impact Analysis'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'रोजगार, उपजीविका आणि महाराष्ट्राच्या विकासावर कौशल्याचा वास्तविक प्रभाव मोजा.'
              : "Measure the real impact of skilling on employment, livelihoods and Maharashtra's development."}
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

          {/* Action Button */}
          <button className="flex items-center gap-1.5 h-8 px-4 bg-[#8B2500] hover:bg-[#721E00] text-white font-semibold text-xs rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0">
            <Download size={13} />
            <span>Export Report</span>
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
        
        {/* Box 1 (4/12): District-wise Impact Score Map */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'जिल्हानिहाय प्रभाव गुण' : 'District-wise Impact Score'}
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
                { color: '#5C1D06', label: '≥ 80' },
                { color: '#9E3808', label: '60 – 80' },
                { color: '#DF6B20', label: '40 – 60' },
                { color: '#F3AF6B', label: '20 – 40' },
                { color: '#FDE0BD', label: '< 20' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Impact Across the Journey */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'प्रवासातील प्रभाव' : 'Impact Across the Journey'}
            </h3>
          </div>

          {/* Linear Flow Step Nodes */}
          <div className="flex-1 flex items-center justify-between my-auto py-2">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-center flex-1">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#8B2500] mb-1.5 shadow-2xs">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10.5px] font-medium text-slate-500">{step.name}</span>
                    <span className="text-xs font-bold text-slate-900 leading-tight mt-0.5">{step.val}</span>
                    <span className="text-[10px] font-bold text-[#8B2500] mt-0.5">{step.pct}</span>
                  </div>

                  {idx < journeySteps.length - 1 && (
                    <span className="text-slate-300 font-bold text-sm mx-1">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Box 3 (4/12): Socio-Economic Impact */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'सामाजिक-आर्थिक प्रभाव' : 'Socio-Economic Impact'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              {socioEconomicMetrics.map((sem, idx) => {
                const Icon = sem.icon;
                return (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#EADBCC] flex items-center justify-center shrink-0 text-[#8B2500]">
                        <Icon size={11} />
                      </div>
                      <span className="font-semibold text-slate-800 truncate">{sem.title}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-slate-900">{sem.val}</span>
                      <span className="font-bold text-emerald-600 text-[11px]">{sem.change}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Employment Rate Trend Line Chart */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'रोजगार दर कल' : 'Employment Rate Trend'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 text-[10px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B2500]" />
                <span className="text-slate-600">Employment Rate</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C1D06]" />
                <span className="text-slate-600">Retention Rate (12M)</span>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">100%</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">80%</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">60%</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">40%</text>
              <text x="0" y="101" className="text-[8px] fill-slate-400 font-semibold">20%</text>
              <text x="8" y="118" className="text-[8px] fill-slate-400 font-semibold">0%</text>

              {/* Employment Rate Line (Dark Rust) */}
              <path d="M 35 60 L 95 50 L 155 40 L 215 35 L 275 28" fill="none" stroke="#8B2500" strokeWidth="2.5" strokeLinecap="round" />
              {/* Retention Rate Line (Dark Brown) */}
              <path d="M 35 80 L 95 72 L 155 62 L 215 55 L 275 45" fill="none" stroke="#5C1D06" strokeWidth="2.5" strokeLinecap="round" />

              {/* Points */}
              {[
                { x: 35, y1: 60, y2: 80, t1: '52%', t2: '38%' },
                { x: 95, y1: 50, y2: 72, t1: '58%', t2: '43%' },
                { x: 155, y1: 40, y2: 62, t1: '64%', t2: '49%' },
                { x: 215, y1: 35, y2: 55, t1: '68%', t2: '54%' },
                { x: 275, y1: 28, y2: 45, t1: '72%', t2: '61%' },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.x} cy={pt.y1} r="3" fill="#8B2500" stroke="#FFFFFF" strokeWidth="1" />
                  <text x={pt.x} y={pt.y1 - 6} textAnchor="middle" className="text-[7.5px] fill-slate-800 font-bold">{pt.t1}</text>

                  <circle cx={pt.x} cy={pt.y2} r="3" fill="#5C1D06" stroke="#FFFFFF" strokeWidth="1" />
                  <text x={pt.x} y={pt.y2 + 10} textAnchor="middle" className="text-[7.5px] fill-slate-800 font-bold">{pt.t2}</text>
                </g>
              ))}
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {['2021-22', '2022-23', '2023-24', '2024-25', '2025-26'].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Impact by Programme Type */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'कार्यक्रम प्रकारानुसार प्रभाव' : 'Impact by Programme Type'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-2">
              {programmeTypeImpact.map((pt, i) => (
                <div key={i} className="flex items-center justify-between gap-3 text-xs">
                  <span className="w-160px font-semibold text-slate-800 truncate">{pt.name}</span>
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full" style={{ width: pt.barWidth }} />
                  </div>
                  <span className="font-bold text-slate-900 w-10 text-right">{pt.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Impact by Beneficiary Category */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'लाभार्थी वर्गानुसार प्रभाव' : 'Impact by Beneficiary Category'}
              </h3>
            </div>

            <div className="space-y-1.5">
              {categoryImpact.map((cat, i) => (
                <div key={i} className="flex items-center justify-between gap-3 text-xs">
                  <span className="w-120px font-semibold text-slate-800 truncate">{cat.name}</span>
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full" style={{ width: cat.barWidth }} />
                  </div>
                  <span className="font-bold text-slate-900 w-10 text-right">{cat.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (Success Stories, Key Indicators & Recommended Actions) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Success Stories (5/12) */}
        <div className="md:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'यशोगाथा' : 'Success Stories'}
              </h3>
              <a href="#stories" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            {/* 2 Testimonial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {/* Card 1 */}
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#F0E4D8] flex flex-col justify-between space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#8B2500] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    RJ
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Rohit Jadhav</h4>
                    <span className="text-[10px] text-slate-500 font-medium">From Nanded</span>
                  </div>
                </div>
                <p className="text-[10.5px] text-slate-600 italic leading-snug">
                  “Completed EV Technology training and now working at Tata Motors, Pune. My family's life has changed.”
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <div>
                    <span className="text-[9.5px] text-slate-400 block">Annual Income</span>
                    <strong className="text-slate-800 text-xs">₹ 3.6 Lakh</strong>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 rounded-md border border-emerald-200">
                    Placed
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#F0E4D8] flex flex-col justify-between space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E65100] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Sneha More</h4>
                    <span className="text-[10px] text-slate-500 font-medium">From Satara</span>
                  </div>
                </div>
                <p className="text-[10.5px] text-slate-600 italic leading-snug">
                  “Healthcare training gave me a stable career. I am now a certified nurse at Apollo Hospitals.”
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <div>
                    <span className="text-[9.5px] text-slate-400 block">Annual Income</span>
                    <strong className="text-slate-800 text-xs">₹ 2.8 Lakh</strong>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 rounded-md border border-emerald-200">
                    Placed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Impact Indicators (3/12) */}
        <div className="md:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'महत्त्वाचे प्रभाव निर्देशक' : 'Key Impact Indicators'}
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-700 block text-xs">72.1%</strong>
                  <span className="text-slate-600 leading-tight block text-[10px]">12-month retention shows long-term impact.</span>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-2 rounded-lg flex items-center gap-2">
                <Coins size={16} className="text-amber-600 shrink-0" />
                <div>
                  <strong className="text-amber-800 block text-xs">18.6%</strong>
                  <span className="text-slate-600 leading-tight block text-[10px]">Median wage increased, indicating better livelihoods.</span>
                </div>
              </div>

              <div className="bg-[#FFF1F2] border border-[#FFE4E6] p-2 rounded-lg flex items-center gap-2">
                <Users size={16} className="text-pink-600 shrink-0" />
                <div>
                  <strong className="text-pink-700 block text-xs">38.7%</strong>
                  <span className="text-slate-600 leading-tight block text-[10px]">Women's participation is creating inclusive growth.</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EADBCC] p-2 rounded-lg flex items-center gap-2">
                <Home size={16} className="text-[#8B2500] shrink-0" />
                <div>
                  <strong className="text-[#8B2500] block text-xs">12.5%</strong>
                  <span className="text-slate-600 leading-tight block text-[10px]">Estimated reduction in migration from rural areas.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Actions (4/12) */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  🎯 {isMarathi ? 'शिफारस केलेल्या कृती' : 'Recommended Actions'}
                </h3>
              </div>
              <a href="#actions" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-1.5 text-xs">
              {recommendedActions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2 p-1.5 rounded-lg bg-[#FAF7F2] border border-[#F0E4D8] hover:bg-[#F6ECE0] transition-colors cursor-pointer group">
                  <span className="w-4 h-4 rounded-full bg-[#8B2500] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-slate-700 leading-tight flex-1">{action}</span>
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
