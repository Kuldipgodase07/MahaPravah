import { useState } from 'react';
import { 
  Users, 
  Flame, 
  BarChart2, 
  Target, 
  Lightbulb, 
  ChevronDown, 
  Info, 
  ArrowRight,
  Download,
  TrendingUp,
  Settings,
  Sprout
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function SkillGapAnalysisTab() {
  const { isMarathi } = useLanguage();

  // Filter states
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedSector] = useState('All Sectors');
  const [selectedDistrictFilter] = useState('Top 10 Districts');
  const [selectedHeatmapMetric] = useState('Skill Gap (%)');

  // Top 6 KPI Metric Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण विश्लेषित कौशल्ये' : 'Total Skills Analysed',
      value: '248',
      change: '12% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'उच्च मागणी कौशल्ये' : 'High Demand Skills',
      value: '86',
      change: '18.4% vs last year',
      icon: Flame,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'कौशल्य फरक (एकूण)' : 'Skill Gap (Overall)',
      value: '28.6%',
      change: '6.2% vs last year',
      icon: BarChart2,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'अपुरा पुरवठा असलेली कौशल्ये' : 'Undersupplied Skills',
      value: '74',
      change: '14.1% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'प्राधान्य क्षेत्रे' : 'Priority Sectors',
      value: '8',
      change: '33.3% vs last year',
      icon: Target,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'शिफारस केलेल्या कृती' : 'Recommended Actions',
      value: '15',
      change: '25% vs last year',
      icon: Lightbulb,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Top Skills by Gap
  const topSkillsGap = [
    { id: 1, name: 'Data Analytics', demand: '82,400', supply: '41,200', gap: '41,200', barWidth: '95%' },
    { id: 2, name: 'Cloud Computing', demand: '54,800', supply: '26,400', gap: '28,400', barWidth: '70%' },
    { id: 3, name: 'EV Technology', demand: '38,700', supply: '17,900', gap: '20,800', barWidth: '55%' },
    { id: 4, name: 'Cybersecurity', demand: '31,200', supply: '15,600', gap: '15,600', barWidth: '45%' },
    { id: 5, name: 'AI / ML', demand: '28,400', supply: '14,200', gap: '14,200', barWidth: '40%' },
    { id: 6, name: 'Industrial Automation', demand: '29,800', supply: '18,400', gap: '11,400', barWidth: '35%' },
    { id: 7, name: 'Renewable Energy', demand: '24,600', supply: '13,500', gap: '11,100', barWidth: '32%' },
    { id: 8, name: 'Healthcare Support', demand: '62,100', supply: '35,400', gap: '26,700', barWidth: '65%' },
    { id: 9, name: 'Digital Marketing', demand: '27,300', supply: '16,800', gap: '10,500', barWidth: '30%' },
    { id: 10, name: 'Electrician (Advanced)', demand: '33,500', supply: '23,400', gap: '10,100', barWidth: '28%' },
  ];

  // Skill Gap by District
  const districtGap = [
    { id: 1, name: 'Pune', gap: '48,200', barWidth: '100%' },
    { id: 2, name: 'Nashik', gap: '32,600', barWidth: '70%' },
    { id: 3, name: 'Nagpur', gap: '28,400', barWidth: '60%' },
    { id: 4, name: 'Thane', gap: '26,100', barWidth: '55%' },
    { id: 5, name: 'Aurangabad', gap: '22,800', barWidth: '48%' },
    { id: 6, name: 'Kolhapur', gap: '18,400', barWidth: '40%' },
    { id: 7, name: 'Solapur', gap: '17,900', barWidth: '38%' },
    { id: 8, name: 'Ahmednagar', gap: '16,200', barWidth: '35%' },
    { id: 9, name: 'Satara', gap: '14,800', barWidth: '32%' },
    { id: 10, name: 'Amravati', gap: '13,600', barWidth: '30%' },
  ];

  // Skill Gap by Sector
  const sectorGap = [
    { name: 'IT & ITES', demand: '1,20,000', supply: '58,400', gap: '61,600', pct: '51%' },
    { name: 'Automotive', demand: '84,000', supply: '36,800', gap: '47,200', pct: '56%' },
    { name: 'Healthcare', demand: '72,000', supply: '41,200', gap: '30,800', pct: '43%' },
    { name: 'Manufacturing', demand: '68,000', supply: '39,600', gap: '28,400', pct: '42%' },
    { name: 'Retail & BFSI', demand: '46,000', supply: '26,300', gap: '19,700', pct: '43%' },
    { name: 'Construction', demand: '40,000', supply: '25,800', gap: '14,200', pct: '36%' },
    { name: 'Agriculture & Allied', demand: '32,000', supply: '21,600', gap: '10,400', pct: '33%' },
    { name: 'Hospitality & Tourism', demand: '28,000', supply: '18,400', gap: '9,600', pct: '34%' },
    { name: 'Green Jobs', demand: '22,000', supply: '11,800', gap: '10,200', pct: '46%' },
    { name: 'Others', demand: '18,000', supply: '12,600', gap: '5,400', pct: '30%' },
  ];

  // Emerging Skills (High Growth)
  const emergingSkills = [
    { id: 1, name: 'AI & Machine Learning', growth: '+220%' },
    { id: 2, name: 'Renewable Energy Systems', growth: '+180%' },
    { id: 3, name: 'Electric Vehicle Maintenance', growth: '+160%' },
    { id: 4, name: 'Cloud Infrastructure', growth: '+140%' },
    { id: 5, name: 'Drone Operations', growth: '+120%' },
    { id: 6, name: 'Industrial IoT', growth: '+110%' },
    { id: 7, name: 'Green Building Techniques', growth: '+95%' },
    { id: 8, name: 'Healthcare Assistive Tech', growth: '+85%' },
    { id: 9, name: 'Cyber Threat Analysis', growth: '+82%' },
    { id: 10, name: 'Data Engineering', growth: '+78%' },
  ];

  // Recommended Actions
  const recommendedActions = [
    'Increase training capacity for Data Analytics in Pune, Nashik and Nagpur.',
    'Launch industry-aligned programmes for EV and Green Energy skills.',
    'Strengthen trainer availability in high-demand sectors.',
    'Promote district-specific skilling initiatives in underperforming districts.',
    'Introduce industry partnerships for emerging technology skills.',
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'कौशल्य फरक विश्लेषण' : 'Skill Gap Analysis'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'महाराष्ट्रातील कौशल्य मागणी-पुरवठा फरक ओळखा आणि डेटा-आधारित कौशल्य उपक्रम सक्षम करा.'
              : 'Identify skill demand-supply gaps and enable data-driven skilling interventions across Maharashtra.'}
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
            <span>{selectedSector}</span>
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
        
        {/* Box 1 (4/12): Skill Demand vs Trained Supply */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[300px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'कौशल्य मागणी विरुद्ध प्रशिक्षण पुरवठा' : 'Skill Demand vs Trained Supply'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-3 text-[10px] font-semibold mb-2">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#8B2500]" />
              <span className="text-slate-600">Industry Demand (Jobs)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#F5A25D]" />
              <span className="text-slate-600">Trained Supply (Candidates)</span>
            </div>
          </div>

          {/* Paired Bar Chart */}
          <div className="flex-1 w-full min-h-[160px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">200K</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">150K</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">100K</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">50K</text>
              <text x="8" y="101" className="text-[8px] fill-slate-400 font-semibold">0</text>

              {/* Paired Bars for 5 Skills */}
              {[
                { x: 35, d: 82, s: 41, name: 'Data Analytics', dTxt: '82K', sTxt: '41K' },
                { x: 90, d: 54, s: 26, name: 'EV Tech', dTxt: '54K', sTxt: '26K' },
                { x: 145, d: 38, s: 18, name: 'Automation', dTxt: '38K', sTxt: '18K' },
                { x: 200, d: 62, s: 35, name: 'Healthcare', dTxt: '62K', sTxt: '35K' },
                { x: 255, d: 71, s: 28, name: 'Cybersecurity', dTxt: '71K', sTxt: '28K' },
              ].map((b, idx) => (
                <g key={idx}>
                  {/* Demand Bar */}
                  <rect x={b.x} y={100 - b.d * 0.9} width="16" height={b.d * 0.9} fill="#8B2500" rx="2" />
                  <text x={b.x + 8} y={94 - b.d * 0.9} textAnchor="middle" className="text-[7.5px] fill-slate-800 font-bold">{b.dTxt}</text>
                  {/* Supply Bar */}
                  <rect x={b.x + 18} y={100 - b.s * 0.9} width="16" height={b.s * 0.9} fill="#F5A25D" rx="2" />
                  <text x={b.x + 26} y={94 - b.s * 0.9} textAnchor="middle" className="text-[7.5px] fill-slate-800 font-bold">{b.sTxt}</text>
                </g>
              ))}
            </svg>

            <div className="flex justify-between pl-7 pr-1 text-[8.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              <span>Data Analytics</span>
              <span>EV Technology</span>
              <span>Industrial Automation</span>
              <span>Healthcare Support</span>
              <span>Cybersecurity</span>
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Top Skills by Gap Table */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'फरकानुसार सर्वोच्च कौशल्ये' : 'Top Skills by Gap'}
              </h3>
              <a href="#skills" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-1 pl-1 w-4">#</th>
                    <th className="pb-1">Skill</th>
                    <th className="pb-1 text-right">Industry Demand</th>
                    <th className="pb-1 text-right">Trained Supply</th>
                    <th className="pb-1 text-right pr-1">Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-[11px] font-medium">
                  {topSkillsGap.map((s) => (
                    <tr key={s.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-1 pl-1 font-bold text-slate-400">{s.id}</td>
                      <td className="py-1 font-semibold text-slate-900">{s.name}</td>
                      <td className="py-1 text-right text-slate-700">{s.demand}</td>
                      <td className="py-1 text-right text-slate-600">{s.supply}</td>
                      <td className="py-1 text-right pr-1 font-bold text-[#8B2500]">{s.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Skill Gap by District */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'जिल्ह्यानुसार कौशल्य फरक' : 'Skill Gap by District'}
              </h3>

              <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
                <span>{selectedDistrictFilter}</span>
                <ChevronDown size={11} className="text-slate-400" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 border-b border-[#F1E5D8] pb-1 mb-1 uppercase tracking-wider">
              <span>District</span>
              <span>Gap (Number of Candidates)</span>
            </div>

            <div className="space-y-1.5">
              {districtGap.map((dg) => (
                <div key={dg.id} className="flex items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 w-24 shrink-0">
                    <span className="font-bold text-slate-400 w-3">{dg.id}</span>
                    <span className="font-semibold text-slate-800 truncate">{dg.name}</span>
                  </div>

                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#E65100] to-[#8B2500] h-full rounded-full" style={{ width: dg.barWidth }} />
                  </div>

                  <span className="font-bold text-slate-900 w-12 text-right shrink-0">{dg.gap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Skill Gap Heatmap (Maharashtra) */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'कौशल्य फरक हीटमॅप (महाराष्ट्र)' : 'Skill Gap Heatmap (Maharashtra)'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedHeatmapMetric}</span>
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
                { color: '#5C1D06', label: '≥ 70%' },
                { color: '#9E3808', label: '50% – 70%' },
                { color: '#DF6B20', label: '30% – 50%' },
                { color: '#F3AF6B', label: '10% – 30%' },
                { color: '#FDE0BD', label: '< 10%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Skill Gap by Sector Table */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'क्षेत्रनिहाय कौशल्य फरक' : 'Skill Gap by Sector'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
              <a href="#sectors" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-1 pl-1">Sector</th>
                    <th className="pb-1 text-right">Demand (Jobs)</th>
                    <th className="pb-1 text-right">Supply (Trained)</th>
                    <th className="pb-1 text-right">Gap</th>
                    <th className="pb-1 text-right pr-1">Gap %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-[11px] font-medium">
                  {sectorGap.map((sec, i) => (
                    <tr key={i} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-1 pl-1 font-semibold text-slate-900">{sec.name}</td>
                      <td className="py-1 text-right text-slate-700">{sec.demand}</td>
                      <td className="py-1 text-right text-slate-600">{sec.supply}</td>
                      <td className="py-1 text-right font-bold text-[#8B2500]">{sec.gap}</td>
                      <td className="py-1 text-right pr-1 font-bold text-rose-600">{sec.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Emerging Skills (High Growth) */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'उदयोन्मुख कौशल्ये (उच्च वाढ)' : 'Emerging Skills (High Growth)'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 border-b border-[#F1E5D8] pb-1 mb-1 uppercase tracking-wider">
              <span>Skill</span>
              <span>Projected Demand Growth (2025–28)</span>
            </div>

            <div className="space-y-1.5">
              {emergingSkills.map((es) => (
                <div key={es.id} className="flex items-center justify-between gap-2 text-[11px] py-0.5 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="font-bold text-slate-400 w-3">{es.id}</span>
                    <span className="font-semibold text-slate-800 truncate">{es.name}</span>
                  </div>
                  <span className="font-black text-emerald-600 shrink-0">{es.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (Key Insights & Recommended Actions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Key Insights (7/12) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  📌 {isMarathi ? 'महत्त्वाच्या इनसाइट्स' : 'Key Insights'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            {/* 4 Insight badges */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-lg flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-700 block text-xs">28.6%</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">Overall skill gap reduced by 6.2% from last year.</span>
                </div>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-2.5 rounded-lg flex items-center gap-2">
                <Settings size={16} className="text-amber-600 shrink-0" />
                <div>
                  <strong className="text-amber-800 block text-xs">IT &amp; Automotive</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">have the highest skill gaps.</span>
                </div>
              </div>

              <div className="bg-[#FFF1F2] border border-[#FFE4E6] p-2.5 rounded-lg flex items-center gap-2">
                <Users size={16} className="text-pink-600 shrink-0" />
                <div>
                  <strong className="text-pink-700 block text-xs">74 skills</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">are undersupplied across Maharashtra.</span>
                </div>
              </div>

              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-lg flex items-center gap-2">
                <Sprout size={16} className="text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-emerald-800 block text-xs">Green skills</strong>
                  <span className="text-slate-600 leading-tight block text-[10.5px]">showing highest growth in demand (220%).</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Actions Card (5/12) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
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

            <div className="space-y-2 text-xs">
              {recommendedActions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2] border border-[#F0E4D8] hover:bg-[#F6ECE0] transition-colors cursor-pointer group">
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
