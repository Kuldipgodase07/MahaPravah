import { useState } from 'react';
import { 
  FileText, 
  Download, 
  Users, 
  Database, 
  Settings, 
  Clock, 
  ChevronDown, 
  Info, 
  ArrowRight,
  BarChart2,
  FileSpreadsheet,
  Edit2
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ReportsDownloadsTab() {
  const { isMarathi } = useLanguage();

  // Filter states
  const [selectedState] = useState('Maharashtra (State)');
  const [selectedFY] = useState('FY 2025-26');
  const [selectedProgramme] = useState('All Programmes');

  // Top 6 KPI Metric Cards
  const kpis = [
    {
      title: isMarathi ? 'एकूण अहवाल' : 'Total Reports',
      value: '124',
      change: '18.1% vs last year',
      icon: FileText,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'मासिक डाउनलोड्स' : 'Monthly Downloads',
      value: '12,430',
      change: '26.8% vs last year',
      icon: Download,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'सक्रिय वापरकर्ते' : 'Active Users',
      value: '2,860',
      change: '14.2% vs last year',
      icon: Users,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'उपलब्ध डेटासेट्स' : 'Datasets Available',
      value: '48',
      change: '20.0% vs last year',
      icon: Database,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'कस्टम अहवाल' : 'Custom Reports',
      value: '32',
      change: '39.1% vs last year',
      icon: Settings,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
    {
      title: isMarathi ? 'अनुसूचित अहवाल' : 'Scheduled Reports',
      value: '18',
      change: '12.5% vs last year',
      icon: Clock,
      bg: '#FFF7ED',
      color: '#EA580C',
    },
  ];

  // Reports by Category Donut
  const reportCategories = [
    { name: isMarathi ? 'रोजगार निकाल' : 'Employment Outcomes', share: '28%', count: '35', color: '#5C1D06' },
    { name: isMarathi ? 'कौशल्य विकास' : 'Skill Development', share: '22%', count: '27', color: '#E65100' },
    { name: isMarathi ? 'लाभार्थी विश्लेषण' : 'Beneficiary Analysis', share: '16%', count: '20', color: '#C85A17' },
    { name: isMarathi ? 'जिल्हा बुद्धिमत्ता' : 'District Intelligence', share: '12%', count: '15', color: '#F5A25D' },
    { name: isMarathi ? 'प्रभाव विश्लेषण' : 'Impact Analysis', share: '10%', count: '12', color: '#FBE3CB' },
    { name: isMarathi ? 'प्रशिक्षण प्रदाते' : 'Training Providers', share: '8%', count: '10', color: '#FAF0E6' },
    { name: isMarathi ? 'इतर' : 'Others', share: '4%', count: '5', color: '#F5F5F5' },
  ];

  // Recent Reports Data Table
  const recentReports = [
    { id: 1, name: 'Maharashtra Skill Development Annual Report 2025', category: 'Programme Overview', date: '12 Sep 2025', downloads: '1,240' },
    { id: 2, name: 'District-wise Employment Outcomes (FY 2025-26)', category: 'Employment Outcomes', date: '11 Sep 2025', downloads: '980' },
    { id: 3, name: 'Sector Skill Gap Analysis Report', category: 'Skill Gap Analysis', date: '10 Sep 2025', downloads: '760' },
    { id: 4, name: 'Training Provider Performance Report', category: 'Training Providers', date: '9 Sep 2025', downloads: '640' },
    { id: 5, name: 'Impact Assessment Summary', category: 'Impact Analysis', date: '8 Sep 2025', downloads: '520' },
  ];

  // Scheduled Reports Data Table
  const scheduledReports = [
    { id: 1, name: 'Monthly Employment Dashboard', freq: 'Monthly', nextRun: '15 Sep 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 2, name: 'District Progress Report', freq: 'Monthly', nextRun: '20 Sep 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 3, name: 'Skill Gap Analysis Report', freq: 'Quarterly', nextRun: '1 Oct 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 4, name: 'Training Provider Summary', freq: 'Monthly', nextRun: '18 Sep 2025', status: 'Paused', statusBg: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 5, name: 'Impact Metrics Report', freq: 'Quarterly', nextRun: '5 Oct 2025', status: 'Active', statusBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  ];

  // Quick Downloads Cards
  const quickDownloads = [
    { name: 'State Summary Report', type: 'PDF', size: '2.4 MB', icon: FileText },
    { name: 'District-wise Report', type: 'PDF', size: '1.8 MB', icon: FileText },
    { name: 'Sector-wise Report', type: 'PDF', size: '2.1 MB', icon: FileText },
    { name: 'Raw Data Export (All Districts)', type: 'CSV', size: '12.6 MB', icon: FileSpreadsheet },
  ];

  // Popular Reports Links
  const popularReports = [
    'Maharashtra Skill Ecosystem Overview',
    'Top Performing Districts',
    'Women Employment Progress Report',
    'Sector-wise Demand vs Supply Analysis',
    'Scheme-wise Impact Assessment',
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Title Bar + Global Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            {isMarathi ? 'अहवाल आणि डाउनलोड्स' : 'Reports & Downloads'}
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            {isMarathi
              ? 'डेटा-आधारित निर्णय घेण्यास समर्थन देण्यासाठी सर्वसमावेशक अहवाल, डेटासेट्स आणि इनसाइट्स मिळवा.'
              : 'Access comprehensive reports, datasets and insights to support data-driven decision making.'}
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
        
        {/* Box 1 (5/12): Report Downloads Trend Dual Line Chart */}
        <div className="md:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'अहवाल डाउनलोड्स कल' : 'Report Downloads Trend'}
              </h3>
              <Info size={13} className="text-slate-400 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 text-[10.5px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
                <span className="text-slate-600">Report Downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C1D06]" />
                <span className="text-slate-600">Unique Users</span>
              </div>
            </div>
          </div>

          {/* SVG Multi Line Chart */}
          <div className="flex-1 w-full min-h-[160px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">20K</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">15K</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">10K</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">5K</text>
              <text x="8" y="101" className="text-[8px] fill-slate-400 font-semibold">0K</text>

              {/* Downloads Line (Orange) */}
              <path d="M 35 85 L 65 78 L 95 70 L 125 62 L 155 54 L 185 46 L 215 38 L 245 30 L 275 22" fill="none" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" />
              {/* Unique Users Line (Dark Brown) */}
              <path d="M 35 98 L 65 92 L 95 84 L 125 76 L 155 68 L 185 60 L 215 54 L 245 46 L 275 38" fill="none" stroke="#5C1D06" strokeWidth="2.5" strokeLinecap="round" />

              {/* Tooltip callout on Sep */}
              <g transform="translate(240, 0)">
                <rect x="-35" y="0" width="75" height="18" fill="#1E293B" rx="4" />
                <text x="2.5" y="12" textAnchor="middle" className="text-[7.5px] fill-white font-bold">12,430 Downloads (Sep 2025)</text>
              </g>
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[9.5px] font-semibold text-slate-500 border-t border-slate-100 pt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Box 2 (4/12): Reports by Category Donut */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'प्रकारानुसार अहवाल' : 'Reports by Category'}
            </h3>
          </div>

          <div className="flex items-center gap-3 my-auto">
            {/* SVG Donut Chart */}
            <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#5C1D06" strokeWidth="10" strokeDasharray="66.8 171.9" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E65100" strokeWidth="10" strokeDasharray="52.5 186.2" strokeDashoffset="-66.8" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C85A17" strokeWidth="10" strokeDasharray="38.2 200.5" strokeDashoffset="-119.3" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F5A25D" strokeWidth="10" strokeDasharray="28.6 210.1" strokeDashoffset="-157.5" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FBE3CB" strokeWidth="10" strokeDasharray="23.8 214.9" strokeDashoffset="-186.1" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FAF0E6" strokeWidth="10" strokeDasharray="19.1 219.6" strokeDashoffset="-209.9" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E5E7EB" strokeWidth="10" strokeDasharray="9.5 229.2" strokeDashoffset="-229" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black text-slate-900 leading-none">124</span>
                <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Total Reports</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-1.5 text-xs">
              {reportCategories.map((item, idx) => (
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

        {/* Box 3 (3/12): Report Type Distribution Bar Chart */}
        <div className="md:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900">
              {isMarathi ? 'अहवाल प्रकार वितरण' : 'Report Type Distribution'}
            </h3>
          </div>

          {/* Vertical Bar Chart Visual */}
          <div className="flex-1 w-full min-h-[140px] relative flex flex-col justify-end">
            <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map((yVal, i) => (
                <line key={i} x1="25" y1={yVal} x2="295" y2={yVal} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              <text x="0" y="5" className="text-[8px] fill-slate-400 font-semibold">50</text>
              <text x="0" y="29" className="text-[8px] fill-slate-400 font-semibold">40</text>
              <text x="0" y="53" className="text-[8px] fill-slate-400 font-semibold">30</text>
              <text x="0" y="77" className="text-[8px] fill-slate-400 font-semibold">20</text>
              <text x="0" y="101" className="text-[8px] fill-slate-400 font-semibold">10</text>
              <text x="8" y="118" className="text-[8px] fill-slate-400 font-semibold">0</text>

              {/* Bars */}
              <rect x="35" y="21" width="28" height="84" fill="#EA580C" rx="2" />
              <text x="49" y="16" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">42</text>

              <rect x="88" y="49" width="28" height="56" fill="#EA580C" rx="2" />
              <text x="102" y="44" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">28</text>

              <rect x="141" y="57" width="28" height="48" fill="#EA580C" rx="2" />
              <text x="155" y="52" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">24</text>

              <rect x="194" y="69" width="28" height="36" fill="#C2410C" rx="2" />
              <text x="208" y="64" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">18</text>

              <rect x="247" y="81" width="28" height="24" fill="#9A3412" rx="2" />
              <text x="261" y="76" textAnchor="middle" className="text-[8px] fill-slate-800 font-bold">12</text>
            </svg>

            <div className="flex justify-between pl-6 pr-1 text-[8.5px] font-semibold text-slate-600 border-t border-slate-100 pt-1 text-center">
              <span>Standard Reports</span>
              <span>Analytical Reports</span>
              <span>Custom Reports</span>
              <span>Data Exports</span>
              <span>API Datasets</span>
            </div>
          </div>
        </div>

      </div>

      {/* Row 2 Grid (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 shrink-0">
        
        {/* Recent Reports Table (6/12) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'अलीकडील अहवाल' : 'Recent Reports'}
              </h3>
              <a href="#reports" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-1 pl-1 w-4">#</th>
                    <th className="pb-1">Report Name</th>
                    <th className="pb-1">Category</th>
                    <th className="pb-1">Generated On</th>
                    <th className="pb-1 text-right">Downloads</th>
                    <th className="pb-1 pr-1 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-[11px] font-medium">
                  {recentReports.map((rr) => (
                    <tr key={rr.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2 pl-1 font-bold text-slate-400">{rr.id}</td>
                      <td className="py-2 font-semibold text-slate-900 pr-2 max-w-[200px] truncate">{rr.name}</td>
                      <td className="py-2 text-slate-600">{rr.category}</td>
                      <td className="py-2 text-slate-500">{rr.date}</td>
                      <td className="py-2 text-right font-bold text-slate-800">{rr.downloads}</td>
                      <td className="py-2 pr-1 text-right">
                        <button className="flex items-center gap-1 px-2.5 py-1 text-[10.5px] font-semibold text-[#8B2500] bg-[#FFF7ED] border border-[#FFEDD5] rounded-md hover:bg-[#FFEDD5] cursor-pointer ml-auto">
                          <Download size={11} />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Scheduled Reports Table (6/12) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'अनुसूचित अहवाल' : 'Scheduled Reports'}
              </h3>
              <a href="#scheduled" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1E5D8] text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-1 pl-1 w-4">#</th>
                    <th className="pb-1">Report Name</th>
                    <th className="pb-1">Frequency</th>
                    <th className="pb-1">Next Run</th>
                    <th className="pb-1">Status</th>
                    <th className="pb-1 pr-1 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F1EB] text-[11px] font-medium">
                  {scheduledReports.map((sr) => (
                    <tr key={sr.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-2 pl-1 font-bold text-slate-400">{sr.id}</td>
                      <td className="py-2 font-semibold text-slate-900 pr-2 max-w-[180px] truncate">{sr.name}</td>
                      <td className="py-2 text-slate-600">{sr.freq}</td>
                      <td className="py-2 text-slate-500">{sr.nextRun}</td>
                      <td className="py-2">
                        <span className={`px-2 py-0.5 text-[9.5px] font-bold rounded border ${sr.statusBg}`}>
                          • {sr.status}
                        </span>
                      </td>
                      <td className="py-2 pr-1 text-right">
                        <button className="flex items-center gap-1 px-2.5 py-1 text-[10.5px] font-semibold text-[#8B2500] bg-[#FFF7ED] border border-[#FFEDD5] rounded-md hover:bg-[#FFEDD5] cursor-pointer ml-auto">
                          <Edit2 size={11} />
                          <span>Edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      {/* Row 3 Grid (Quick Downloads, Custom Report Builder, Popular Reports) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 shrink-0">
        
        {/* Quick Downloads Cards (5/12) */}
        <div className="md:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3">
              {isMarathi ? 'जलद डाउनलोड्स' : 'Quick Downloads'}
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickDownloads.map((qd, idx) => {
                const Icon = qd.icon;
                return (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#F0E4D8] hover:bg-[#F6ECE0] transition-colors cursor-pointer flex flex-col justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#8B2500] shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="font-semibold text-slate-800 leading-tight truncate">{qd.name}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                      <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                        <Download size={11} />
                        {qd.type} | {qd.size}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Report Builder Card (4/12) */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between text-center items-center">
          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#8B2500] mb-2 shadow-2xs">
              <BarChart2 size={22} />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {isMarathi ? 'कस्टम अहवाल बिल्डर' : 'Custom Report Builder'}
            </h3>
            <p className="text-[11px] text-slate-500 max-w-[240px] leading-relaxed mb-3">
              Create customized reports with your preferred filters, metrics and time period.
            </p>

            <button className="flex items-center justify-center gap-1.5 h-8 px-4 bg-[#8B2500] hover:bg-[#721E00] text-white font-semibold text-xs rounded-lg shadow-2xs transition-colors cursor-pointer">
              <span>Create Custom Report</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Popular Reports List (3/12) */}
        <div className="md:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {isMarathi ? 'लोकप्रिय अहवाल' : 'Popular Reports'}
              </h3>
              <a href="#popular" className="text-xs font-semibold text-[#8B2500] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-2 text-xs">
              {popularReports.map((pr, idx) => (
                <div key={idx} className="flex items-center gap-2 py-0.5 border-b border-slate-100 last:border-0 hover:text-[#8B2500] cursor-pointer transition-colors">
                  <span className="font-bold text-slate-400 w-3 shrink-0">{idx + 1}</span>
                  <span className="font-medium text-slate-800 truncate">{pr}</span>
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
