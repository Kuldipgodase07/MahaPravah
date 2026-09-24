import { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  Users, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  Info, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Lightbulb,
  ShieldAlert
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function AlertsInterventionsTab() {
  const { isMarathi } = useLanguage();

  // Filter states
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedSeverity] = useState('All Severity Levels');
  const [selectedMapFilter] = useState('Active Alerts');

  // Top 6 KPI Metric Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण सूचना' : 'Total Alerts',
      value: '1,248',
      change: '18.6% vs last month',
      icon: Bell,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'उच्च प्राधान्य सूचना' : 'High Priority Alerts',
      value: '286',
      change: '22.4% vs last month',
      icon: AlertTriangle,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'धोक्यात असलेले प्रशिक्षणार्थी' : 'At-Risk Trainees',
      value: '8,420',
      change: '12.1% vs last month',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सुरू केलेले हस्तक्षेप' : 'Interventions Initiated',
      value: '1,020',
      change: '35.8% vs last month',
      icon: ShieldAlert,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सोडवलेली प्रकरणे' : 'Resolved Cases',
      value: '768',
      change: '28.6% vs last month',
      icon: CheckCircle2,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सरासरी निराकरण वेळ' : 'Avg. Resolution Time',
      value: '4.8 days',
      change: '32.1% vs last month',
      icon: Clock,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Alerts by Category Donut
  const alertCategories = [
    { name: isMarathi ? 'उच्च ड्रॉपआउट धोका' : 'High Dropout Risk', share: '28%', count: '349', color: '#5C1D06' },
    { name: isMarathi ? 'कमी उपस्थिती' : 'Low Attendance', share: '24%', count: '299', color: '#E65100' },
    { name: isMarathi ? 'कमी मूल्यमापन गुण' : 'Low Assessment Score', share: '18%', count: '225', color: '#C85A17' },
    { name: isMarathi ? 'प्लेसमेंट विलंब' : 'Placement Delay', share: '12%', count: '150', color: '#F5A25D' },
    { name: isMarathi ? 'प्रदाता कामगिरी' : 'Provider Performance', share: '10%', count: '125', color: '#FBE3CB' },
    { name: isMarathi ? 'इतर' : 'Other', share: '8%', count: '100', color: '#FAF0E6' },
  ];

  // Recent Alerts
  const recentAlerts = [
    { id: 1, trainee: 'Sneha Jadhav', programme: 'Data Analytics', district: 'Pune', type: 'Low Attendance', severity: 'Critical', severityBg: 'bg-rose-500', date: '12 Sep 2025' },
    { id: 2, trainee: 'Rohit Patil', programme: 'EV Technology', district: 'Nashik', type: 'Low Assessment Score', severity: 'High', severityBg: 'bg-orange-500', date: '12 Sep 2025' },
    { id: 3, trainee: 'Aarti Shinde', programme: 'Healthcare Support', district: 'Nagpur', type: 'Dropout Risk', severity: 'High', severityBg: 'bg-orange-500', date: '11 Sep 2025' },
    { id: 4, trainee: 'Imran Shaikh', programme: 'Industrial Automation', district: 'Aurangabad', type: 'Placement Delay', severity: 'Medium', severityBg: 'bg-amber-500', date: '11 Sep 2025' },
    { id: 5, trainee: 'Pooja More', programme: 'Retail & BFSI', district: 'Thane', type: 'Low Attendance', severity: 'High', severityBg: 'bg-orange-500', date: '10 Sep 2025' },
  ];

  // Intervention Actions Table
  const interventionActions = [
    { id: 1, name: 'Counseling Session', initiated: 286, status: 'In Progress', statusBg: 'bg-[#FFEDD5] text-[#8B2500] border-[#FFEDD5]' },
    { id: 2, name: 'Academic Support', initiated: 198, status: 'In Progress', statusBg: 'bg-[#FFEDD5] text-[#8B2500] border-[#FFEDD5]' },
    { id: 3, name: 'Skill Refresher Module', initiated: 176, status: 'Scheduled', statusBg: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 4, name: 'Placement Assistance', initiated: 142, status: 'In Progress', statusBg: 'bg-[#FFEDD5] text-[#8B2500] border-[#FFEDD5]' },
    { id: 5, name: 'Provider Review', initiated: 96, status: 'Completed', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 6, name: 'Mentorship Program', initiated: 88, status: 'Scheduled', statusBg: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 7, name: 'Financial Support', initiated: 64, status: 'In Progress', statusBg: 'bg-[#FFEDD5] text-[#8B2500] border-[#FFEDD5]' },
    { id: 8, name: 'Family Outreach', initiated: 52, status: 'Completed', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  ];

  // Trainee Risk Profile List
  const riskProfile = [
    { level: 'High Risk', count: '2,860', barWidth: '45%', color: 'from-rose-500 to-red-600' },
    { level: 'Medium Risk', count: '3,420', barWidth: '55%', color: 'from-amber-500 to-orange-500' },
    { level: 'Low Risk', count: '5,120', barWidth: '70%', color: 'from-yellow-400 to-amber-500' },
    { level: 'No Risk', count: '12,400', barWidth: '100%', color: 'from-emerald-400 to-green-600' },
  ];

  // Recommended Interventions
  const recommendedInterventions = [
    'Initiate counselling for 286 high-risk trainees in Pune and Nashik.',
    'Deploy additional trainers for low-performing centres in Nagpur.',
    'Launch attendance tracking campaigns across IT & ITES programmes.',
    'Engage with training providers having > 10% dropout rate.',
    'Implement AI-based early warning system for at-risk candidates.',
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'सूचना आणि हस्तक्षेप' : 'Alerts & Interventions'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'धोके ओळखा, वेळेवर हस्तक्षेप सक्षम करा आणि कोणताही शिकणारा मागे राहणार नाही याची खात्री करा.'
              : 'Identify risks, enable timely interventions and ensure no learner is left behind.'}
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
            <span>{selectedSeverity}</span>
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

      {/* Row 1 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (4/12): Alert Distribution by District Map */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px] relative">
          <div className="flex items-center justify-between mb-2 z-10">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'जिल्ह्यानुसार सूचना वितरण' : 'Alert Distribution by District'}
              </h3>
              <span className="text-[10.5px] text-slate-500 font-normal">Number of active alerts</span>
            </div>

            <button className="flex items-center gap-1 h-6 px-2 text-[10.5px] font-semibold text-slate-600 border border-slate-200 rounded-md bg-white hover:bg-slate-50 cursor-pointer">
              <span>{selectedMapFilter}</span>
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
                { color: '#5C1D06', label: '≥ 100' },
                { color: '#9E3808', label: '61 – 100' },
                { color: '#DF6B20', label: '31 – 60' },
                { color: '#F3AF6B', label: '11 – 30' },
                { color: '#FDE0BD', label: '≤ 10' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Alerts by Category Donut */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'प्रकारानुसार सूचना' : 'Alerts by Category'}
            </h3>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#5C1D06" strokeWidth="10" strokeDasharray="66.8 171.9" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="57.3 181.4" strokeDashoffset="-66.8" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C85A17" strokeWidth="10" strokeDasharray="43 195.7" strokeDashoffset="-124.1" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F5A25D" strokeWidth="10" strokeDasharray="28.6 210.1" strokeDashoffset="-167.1" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FBE3CB" strokeWidth="10" strokeDasharray="23.8 214.9" strokeDashoffset="-195.7" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FAF0E6" strokeWidth="10" strokeDasharray="19.1 219.6" strokeDashoffset="-219.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black text-slate-900 leading-none">1,248</span>
                <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Total Alerts</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-1.5 text-xs">
              {alertCategories.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate pr-1">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600 font-medium truncate">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0 text-[11px]">
                    {item.share} <span className="font-normal text-slate-400">({item.count})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Box 3 (4/12): Alert Severity Breakdown */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[290px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'सूचना तीव्रता विभागणी' : 'Alert Severity Breakdown'}
            </h3>

            {/* Legend */}
            <div className="flex items-center gap-2 text-[9.5px] font-semibold">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FED7AA]" />Low</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FB923C]" />Medium</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#EA580C]" />High</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#7C2D12]" />Critical</span>
            </div>
          </div>

          {/* Vertical Bar Chart Visual */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">500</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">400</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">300</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">200</text>
              <text x="0" y="101" className="text-[8px] fill-slate-400 font-semibold">100</text>
              <text x="8" y="118" className="text-[8px] fill-slate-400 font-semibold">0</text>

              {/* Severity Bars */}
              {/* Low (412) */}
              <rect x="40" y="18" width="30" height="87" fill="#FED7AA" rx="2" />
              <text x="55" y="13" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">412</text>

              {/* Medium (350) */}
              <rect x="105" y="30" width="30" height="75" fill="#FB923C" rx="2" />
              <text x="120" y="25" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">350</text>

              {/* High (286) */}
              <rect x="170" y="44" width="30" height="61" fill="#EA580C" rx="2" />
              <text x="185" y="39" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">286</text>

              {/* Critical (200) */}
              <rect x="235" y="62" width="30" height="43" fill="#7C2D12" rx="2" />
              <text x="250" y="57" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">200</text>
            </svg>

            <div className="flex justify-between pl-8 pr-4 text-[10px] font-semibold text-slate-600 border-t border-slate-100 pt-1">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
              <span>Critical</span>
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Box 1 (5/12): Recent Alerts Table */}
        <div className="md:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'अलीकडील सूचना' : 'Recent Alerts'}
              </h3>
              <a href="#alerts" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-1 pl-1 w-4">#</th>
                    <th className="pb-1">Trainee / Programme</th>
                    <th className="pb-1">District</th>
                    <th className="pb-1">Alert Type</th>
                    <th className="pb-1">Severity</th>
                    <th className="pb-1 pr-1 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-[11px] font-medium">
                  {recentAlerts.map((ra) => (
                    <tr key={ra.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-1.5 pl-1 font-bold text-slate-400">{ra.id}</td>
                      <td className="py-1.5">
                        <div className="font-semibold text-slate-900 leading-tight">{ra.trainee}</div>
                        <div className="text-[9.5px] text-slate-500">{ra.programme}</div>
                      </td>
                      <td className="py-1.5 text-slate-600">{ra.district}</td>
                      <td className="py-1.5 font-medium text-slate-700">{ra.type}</td>
                      <td className="py-1.5">
                        <span className="flex items-center gap-1 font-semibold text-slate-800">
                          <span className={`w-2 h-2 rounded-full ${ra.severityBg}`} />
                          {ra.severity}
                        </span>
                      </td>
                      <td className="py-1.5 pr-1 text-right text-slate-500">{ra.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Intervention Actions Table */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'हस्तक्षेप कृती' : 'Intervention Actions'}
              </h3>
              <a href="#interventions" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-1 pl-1 w-4">#</th>
                    <th className="pb-1">Intervention</th>
                    <th className="pb-1 text-right">Initiated</th>
                    <th className="pb-1 pr-1 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-[11px] font-medium">
                  {interventionActions.map((ia) => (
                    <tr key={ia.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-1 pl-1 font-bold text-slate-400">{ia.id}</td>
                      <td className="py-1 font-semibold text-slate-900">{ia.name}</td>
                      <td className="py-1 text-right font-bold text-slate-800">{ia.initiated}</td>
                      <td className="py-1 pr-1 text-right">
                        <span className={`px-2 py-0.5 text-[9.5px] font-bold rounded border ${ia.statusBg}`}>
                          {ia.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Box 3 (3/12): Trainee Risk Profile Bars */}
        <div className="md:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'प्रशिक्षणार्थी धोका प्रोफाइल' : 'Trainee Risk Profile'}
              </h3>
              <a href="#risk" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-3.5 pt-1">
              {riskProfile.map((rp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{rp.level}</span>
                    <span className="font-bold text-slate-900">{rp.count}</span>
                  </div>
                  <div className="bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className={`bg-gradient-to-r ${rp.color} h-full rounded-full`} style={{ width: rp.barWidth }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (AI Insights & Recommended Interventions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
        
        {/* AI-Powered Insights (7/12) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <Sparkles size={16} className="text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isMarathi ? 'एआय-संचालित इनसाइट्स' : 'AI-Powered Insights'}
                </h3>
                <Info size={13} className="text-slate-400 cursor-pointer" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-xs">
              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-3 rounded-xl flex flex-col justify-between gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#F56600]/10 flex items-center justify-center text-[#F56600]">
                  <TrendingUp size={16} />
                </div>
                <p className="text-[11px] font-medium text-slate-700 leading-snug">
                  Dropout risk is <strong>2.3x higher</strong> in non-metro districts.
                </p>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-3 rounded-xl flex flex-col justify-between gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#F56600]/10 flex items-center justify-center text-[#F56600]">
                  <Users size={16} />
                </div>
                <p className="text-[11px] font-medium text-slate-700 leading-snug">
                  Healthcare and Automotive sectors have <strong>highest attendance issues</strong>.
                </p>
              </div>

              <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-3 rounded-xl flex flex-col justify-between gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#F56600]/10 flex items-center justify-center text-[#F56600]">
                  <Lightbulb size={16} />
                </div>
                <p className="text-[11px] font-medium text-slate-700 leading-snug">
                  Early intervention can <strong>reduce dropouts by 40%</strong> based on historical data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Interventions Card (5/12) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  🎯 {isMarathi ? 'शिफारस केलेले हस्तक्षेप' : 'Recommended Interventions'}
                </h3>
              </div>
              <a href="#interventions" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-1.5 text-xs">
              {recommendedInterventions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[#FAF7F2] border border-[#F0E4D8] hover:bg-[#F6ECE0] transition-colors cursor-pointer group">
                  <span className="w-4 h-4 rounded-full bg-[#8B2500] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-slate-700 leading-tight flex-1">{action}</span>
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
