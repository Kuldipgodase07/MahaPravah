import { CheckCircle2, Briefcase, TrendingUp, IndianRupee, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function EmploymentOutcomesTab() {
  const { isMarathi } = useLanguage();

  const kpis = [
    {
      title: isMarathi ? 'प्लेसमेंट दर' : 'Placement Rate',
      value: '58.2%',
      change: '+ 7.4%',
      icon: CheckCircle2,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'रोजगार दर' : 'Employment Rate',
      value: '68.4%',
      change: '+ 6.2%',
      icon: Briefcase,
      color: '#C2410C',
      bg: '#FFEDD5',
    },
    {
      title: isMarathi ? '१२-महिने धारणा (Retention)' : '12-Month Retention',
      value: '72.1%',
      change: '+ 5.8%',
      icon: TrendingUp,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'सरासरी वेतन' : 'Average Salary',
      value: '₹3.6 LPA',
      change: '+ 11.4%',
      icon: IndianRupee,
      color: '#D97706',
      bg: '#FEF3C7',
    },
  ];

  const topEmployers = [
    {
      name: 'TCS',
      sector: 'IT & ITES',
      hired: '2,480',
      salary: '₹4.2 LPA',
      location: isMarathi ? 'पुणे' : 'Pune',
    },
    {
      name: 'Mahindra & Mahindra',
      sector: 'Automotive',
      hired: '1,860',
      salary: '₹3.8 LPA',
      location: isMarathi ? 'नाशिक' : 'Nashik',
    },
    {
      name: 'Apollo Hospitals',
      sector: 'Healthcare',
      hired: '1,620',
      salary: '₹3.1 LPA',
      location: isMarathi ? 'मुंबई' : 'Mumbai',
    },
    {
      name: 'Tata Motors',
      sector: 'Manufacturing',
      hired: '1,420',
      salary: '₹3.6 LPA',
      location: isMarathi ? 'पुणे' : 'Pune',
    },
    {
      name: 'Reliance Retail',
      sector: 'Retail',
      hired: '1,280',
      salary: '₹2.9 LPA',
      location: isMarathi ? 'ठाणे' : 'Thane',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'रोजगार निष्पत्ती' : 'Employment Outcomes'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'प्लेसमेंट, रोजगार आणि धारणा निष्पत्तीचा मागोवा घ्या.'
            : 'Track placement, employment and retention outcomes.'}
        </p>
      </div>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 mb-2.5">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#F1E5D8] px-3 py-2 sm:py-2.5 shadow-2xs flex items-center gap-3 transition-all hover:shadow-xs"
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: kpi.bg, color: kpi.color }}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10.5px] font-medium text-slate-500 block truncate">
                  {kpi.title}
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-none">
                    {kpi.value}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600">
                    ↑ {kpi.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व कार्यक्रम' : 'All Programmes'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व क्षेत्र' : 'All Sectors'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व जिल्हे' : 'All Districts'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
          <span>{isMarathi ? 'आ.व. २०२५-२६' : 'FY 2025-26'}</span>
          <ChevronDown size={12} className="text-slate-400" />
        </div>
      </div>

      {/* Visual Analytics Row: 3 Equal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5 mb-2.5 flex-1 min-h-0">
        {/* Card 1: Employment Trend (Multi-Line Chart) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800">
              {isMarathi ? 'रोजगार कल' : 'Employment Trend'}
            </h3>
            <div className="flex items-center gap-2 text-[10px]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span className="text-slate-500">Placement Rate</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="text-slate-500">Employment Rate</span>
              </div>
            </div>
          </div>

          <div className="relative h-24 my-auto pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
              {/* Grid Lines */}
              <line x1="20" y1="10" x2="290" y2="10" stroke="#F1E5D8" strokeDasharray="3 3" />
              <line x1="20" y1="40" x2="290" y2="40" stroke="#F1E5D8" strokeDasharray="3 3" />
              <line x1="20" y1="70" x2="290" y2="70" stroke="#F1E5D8" />

              {/* Y Axis Labels */}
              <text x="5" y="13" fontSize="8" fill="#94A3B8">100%</text>
              <text x="5" y="43" fontSize="8" fill="#94A3B8">50%</text>
              <text x="10" y="73" fontSize="8" fill="#94A3B8">0%</text>

              {/* Placement Rate Line (Orange) */}
              <polyline
                fill="none"
                stroke="#EA580C"
                strokeWidth="2"
                points="30,55 60,52 90,48 120,46 150,42 180,40 210,38 240,36 270,32"
              />
              {/* Points */}
              {[
                [30, 55], [60, 52], [90, 48], [120, 46], [150, 42], [180, 40], [210, 38], [240, 36], [270, 32],
              ].map(([cx, cy], i) => (
                <circle key={`p-${i}`} cx={cx} cy={cy} r="2.5" fill="#EA580C" />
              ))}

              {/* Employment Rate Line (Blue) */}
              <polyline
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                points="30,44 60,38 90,34 120,33 150,28 180,26 210,24 240,22 270,18"
              />
              {/* Points */}
              {[
                [30, 44], [60, 38], [90, 34], [120, 33], [150, 28], [180, 26], [210, 24], [240, 22], [270, 18],
              ].map(([cx, cy], i) => (
                <circle key={`e-${i}`} cx={cx} cy={cy} r="2.5" fill="#2563EB" />
              ))}
            </svg>
            <div className="flex justify-between pl-5 pr-2 text-[8.5px] text-slate-400 mt-1 font-medium">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>
          </div>
        </div>

        {/* Card 2: Employment by Sector */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'क्षेत्रानुसार रोजगार' : 'Employment by Sector'}
          </h3>
          <div className="flex items-center justify-around my-auto">
            {/* SVG Donut */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FAF7F2" strokeWidth="4.2" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2563EB" strokeWidth="4.2" strokeDasharray="32, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#EA580C" strokeWidth="4.2" strokeDasharray="18, 100" strokeDashoffset="-32" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#DC2626" strokeWidth="4.2" strokeDasharray="16, 100" strokeDashoffset="-50" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#78350F" strokeWidth="4.2" strokeDasharray="14, 100" strokeDashoffset="-66" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F59E0B" strokeWidth="4.2" strokeDasharray="20, 100" strokeDashoffset="-80" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[10px] font-bold text-slate-900 leading-tight">64.3K</span>
                <span className="text-[8px] text-slate-400 font-medium">Employed</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-1 text-[10.5px]">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2563EB]" /><span className="text-slate-600">IT & ITES</span><span className="font-bold ml-auto pl-2">32%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#EA580C]" /><span className="text-slate-600">Automotive</span><span className="font-bold ml-auto pl-2">18%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#DC2626]" /><span className="text-slate-600">Healthcare</span><span className="font-bold ml-auto pl-2">16%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#78350F]" /><span className="text-slate-600">Manufacturing</span><span className="font-bold ml-auto pl-2">14%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F59E0B]" /><span className="text-slate-600">Others</span><span className="font-bold ml-auto pl-2">20%</span></div>
            </div>
          </div>
        </div>

        {/* Card 3: Employment Type */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'रोजगार प्रकार' : 'Employment Type'}
          </h3>
          <div className="flex items-center justify-around my-auto">
            {/* SVG Donut */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FAF7F2" strokeWidth="4.2" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2563EB" strokeWidth="4.2" strokeDasharray="58, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#EA580C" strokeWidth="4.2" strokeDasharray="24, 100" strokeDashoffset="-58" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#78350F" strokeWidth="4.2" strokeDasharray="12, 100" strokeDashoffset="-82" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F59E0B" strokeWidth="4.2" strokeDasharray="6, 100" strokeDashoffset="-94" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[10px] font-bold text-slate-900 leading-tight">64.3K</span>
                <span className="text-[8px] text-slate-400 font-medium">Employed</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-1 text-[10.5px]">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2563EB]" /><span className="text-slate-600">Permanent</span><span className="font-bold ml-auto pl-2">58%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#EA580C]" /><span className="text-slate-600">Contract</span><span className="font-bold ml-auto pl-2">24%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#78350F]" /><span className="text-slate-600">Apprenticeship</span><span className="font-bold ml-auto pl-2">12%</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F59E0B]" /><span className="text-slate-600">Self-Employed</span><span className="font-bold ml-auto pl-2">6%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Employers Table */}
      <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'प्रमुख नियोक्ते' : 'Top Employers'}
          </h3>
          <a
            href="#all-employers"
            className="text-xs font-semibold text-[#C2410C] hover:underline flex items-center gap-1 cursor-pointer"
          >
            {isMarathi ? 'सर्व नियोक्ते पहा' : 'View All Employers'} <ArrowRight size={13} />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F1E5D8] text-[11px] font-bold text-slate-600">
                <th className="pb-1.5 font-bold">{isMarathi ? 'नियोक्त्याचे नाव' : 'Employer Name'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'क्षेत्र' : 'Sector'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'नियुक्त प्रशिक्षणार्थी' : 'Hired Trainees'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'सरासरी वेतन' : 'Avg. Salary'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'स्थान' : 'Location'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6EFE9] text-xs">
              {topEmployers.map((emp, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="py-2 font-semibold text-slate-800">{emp.name}</td>
                  <td className="py-2 text-slate-600">{emp.sector}</td>
                  <td className="py-2 font-medium text-slate-800">{emp.hired}</td>
                  <td className="py-2 font-medium text-slate-800">{emp.salary}</td>
                  <td className="py-2 font-medium text-slate-600">{emp.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
