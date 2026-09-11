import { useState } from 'react';
import { Users, User, UserCheck, HeartHandshake, Search, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function BeneficiariesTab() {
  const { isMarathi } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const kpis = [
    {
      title: isMarathi ? 'एकूण लाभार्थी' : 'Total Beneficiaries',
      value: '12.4 Lakh',
      change: '+ 12%',
      icon: Users,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'पुरुष' : 'Male',
      value: '7.6 Lakh',
      sub: '(61.3%)',
      icon: User,
      color: '#2563EB',
      bg: '#EFF6FF',
    },
    {
      title: isMarathi ? 'महिला' : 'Female',
      value: '4.8 Lakh',
      sub: '(38.7%)',
      icon: UserCheck,
      color: '#DC2626',
      bg: '#FEF2F2',
    },
    {
      title: isMarathi ? 'दिव्यांग लाभार्थी' : 'Divyang Beneficiaries',
      value: '36,200',
      change: '+ 10%',
      icon: HeartHandshake,
      color: '#D97706',
      bg: '#FEF3C7',
    },
  ];

  const recentBeneficiaries = [
    {
      name: isMarathi ? 'रोहित शिंदे' : 'Rohit Shinde',
      programme: isMarathi ? 'एआय आणि डेटा ॲनालिटिक्स' : 'AI & Data Analytics',
      district: isMarathi ? 'पुणे' : 'Pune',
      date: '12 Sep 2025',
      status: isMarathi ? 'पूर्ण झाले' : 'Completed',
      statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      name: isMarathi ? 'पूजा पाटील' : 'Pooja Patil',
      programme: isMarathi ? 'आरोग्य सहाय्यक' : 'Healthcare Assistant',
      district: isMarathi ? 'नाशिक' : 'Nashik',
      date: '11 Sep 2025',
      status: isMarathi ? 'नियुक्त (Placed)' : 'Placed',
      statusClass: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      name: isMarathi ? 'सौरभ जाधव' : 'Saurabh Jadhav',
      programme: isMarathi ? 'ईव्ही तंत्रज्ञ' : 'EV Technician',
      district: isMarathi ? 'नागपूर' : 'Nagpur',
      date: '10 Sep 2025',
      status: isMarathi ? 'प्रशिक्षणात' : 'In-Training',
      statusClass: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      name: isMarathi ? 'मोहित पवार' : 'Mohit Pawar',
      programme: isMarathi ? 'सौर व्यवस्थापन' : 'Solar Management',
      district: isMarathi ? 'ठाणे' : 'Thane',
      date: '8 Sep 2025',
      status: isMarathi ? 'नियुक्त (Placed)' : 'Placed',
      statusClass: 'bg-blue-100 text-blue-800 border-blue-200',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'लाभार्थी' : 'Beneficiaries'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'सर्व कार्यक्रमांमधील प्रशिक्षणार्थींचे तपशील पहा आणि व्यवस्थापित करा.'
            : 'View and manage trainee details across programmes.'}
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
                  {kpi.change && (
                    <span className="text-[10px] font-bold text-emerald-600">
                      ↑ {kpi.change}
                    </span>
                  )}
                  {kpi.sub && (
                    <span className="text-[10px] font-semibold text-slate-400">
                      {kpi.sub}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter Row: Selectors + Search + Export */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व कार्यक्रम' : 'All Programmes'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व जिल्हे' : 'All Districts'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व प्रवर्ग' : 'All Categories'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isMarathi ? 'नाव, ओळख क्रमांक किंवा मोबाईलने शोधा...' : 'Search by name, ID, mobile...'}
              className="h-7 pl-8 pr-3 bg-white border border-[#E2E8F0] rounded-lg text-[11px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#C2410C] w-48 sm:w-60 shadow-2xs"
            />
          </div>
          <button className="flex items-center gap-1.5 h-7 px-3 bg-[#7B2400] text-white rounded-lg text-xs font-semibold hover:bg-[#601C00] shadow-xs cursor-pointer transition-colors">
            <Download size={13} />
            <span>{isMarathi ? 'निर्यात' : 'Export'}</span>
          </button>
        </div>
      </div>

      {/* Visual Analytics Row: 3 Equal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5 mb-2.5 flex-1 min-h-0">
        {/* Card 1: Beneficiaries by Gender (Donut Chart) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'लिंगानुसार लाभार्थी' : 'Beneficiaries by Gender'}
          </h3>
          <div className="flex items-center justify-around my-auto">
            {/* SVG Donut */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#EFF6FF"
                  strokeWidth="4.2"
                />
                {/* Male arc 61.3% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="4.2"
                  strokeDasharray="61.3, 100"
                />
                {/* Female arc 38.7% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E11D48"
                  strokeWidth="4.2"
                  strokeDasharray="38.7, 100"
                  strokeDashoffset="-61.3"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[11px] font-bold text-slate-900 leading-tight">12.4 Lakh</span>
                <span className="text-[9px] text-slate-400 font-medium">Total</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <span className="text-slate-600 font-medium">{isMarathi ? 'पुरुष' : 'Male'}</span>
                <span className="font-bold text-slate-900">61.3%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
                <span className="text-slate-600 font-medium">{isMarathi ? 'महिला' : 'Female'}</span>
                <span className="font-bold text-slate-900">38.7%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Beneficiaries by Age Group (Bar Chart) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'वयोगटानुसार लाभार्थी' : 'Beneficiaries by Age Group'}
          </h3>
          <div className="flex items-end justify-between gap-2 h-24 pt-2 px-2">
            {[
              { label: '< 18', height: '25%', value: '6%' },
              { label: '18-25', height: '85%', value: '52%', active: true },
              { label: '26-35', height: '60%', value: '31%' },
              { label: '36-45', height: '35%', value: '18%' },
              { label: '> 45', height: '15%', value: '3%' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <span className="text-[9px] font-bold text-slate-600">{bar.value}</span>
                <div
                  className="w-full rounded-t transition-all duration-300"
                  style={{
                    height: bar.height,
                    backgroundColor: bar.active ? '#C2410C' : '#FDBA74',
                  }}
                />
                <span className="text-[9px] font-medium text-slate-500 whitespace-nowrap">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Beneficiaries by Category (Donut Chart) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'प्रवर्गानुसार लाभार्थी' : 'Beneficiaries by Category'}
          </h3>
          <div className="flex items-center justify-around my-auto">
            {/* SVG Donut */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F8FAFC"
                  strokeWidth="4.2"
                />
                {/* General 52% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="4.2"
                  strokeDasharray="52, 100"
                />
                {/* OBC 28% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#C2410C"
                  strokeWidth="4.2"
                  strokeDasharray="28, 100"
                  strokeDashoffset="-52"
                />
                {/* SC 14% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#78350F"
                  strokeWidth="4.2"
                  strokeDasharray="14, 100"
                  strokeDashoffset="-80"
                />
                {/* ST 6% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="4.2"
                  strokeDasharray="6, 100"
                  strokeDashoffset="-94"
                />
              </svg>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                <span className="text-slate-600">General</span>
                <span className="font-bold text-slate-800">52%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C2410C]" />
                <span className="text-slate-600">OBC</span>
                <span className="font-bold text-slate-800">28%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#78350F]" />
                <span className="text-slate-600">SC</span>
                <span className="font-bold text-slate-800">14%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-slate-600">ST</span>
                <span className="font-bold text-slate-800">6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Beneficiaries Table */}
      <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'अलीकडील लाभार्थी' : 'Recent Beneficiaries'}
          </h3>
          <a
            href="#all-beneficiaries"
            className="text-xs font-semibold text-[#C2410C] hover:underline flex items-center gap-1 cursor-pointer"
          >
            {isMarathi ? 'सर्व लाभार्थी पहा' : 'View All Beneficiaries'} <ArrowRight size={13} />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F1E5D8] text-[11px] font-bold text-slate-600">
                <th className="pb-1.5 font-bold">{isMarathi ? 'नाव' : 'Name'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'कार्यक्रम' : 'Programme'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'जिल्हा' : 'District'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'नोंदणी तारीख' : 'Enrolment Date'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'स्थिती' : 'Status'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6EFE9] text-xs">
              {recentBeneficiaries.map((b, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="py-2 font-semibold text-slate-800">{b.name}</td>
                  <td className="py-2 text-slate-600">{b.programme}</td>
                  <td className="py-2 text-slate-600">{b.district}</td>
                  <td className="py-2 text-slate-500">{b.date}</td>
                  <td className="py-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${b.statusClass}`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
