import { useState } from 'react';
import { Building2, CheckCircle, Landmark, Briefcase, Search, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function TrainingProvidersTab() {
  const { isMarathi } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const kpis = [
    {
      title: isMarathi ? 'एकूण प्रशिक्षण संस्था' : 'Total Providers',
      value: '1,842',
      change: '+ 8%',
      icon: Building2,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'सक्रिय संस्था' : 'Active Providers',
      value: '1,605',
      change: '+ 6%',
      icon: CheckCircle,
      color: '#C2410C',
      bg: '#FFEDD5',
    },
    {
      title: isMarathi ? 'शासकीय संस्था' : 'Government',
      value: '42%',
      sub: '(774)',
      icon: Landmark,
      color: '#D97706',
      bg: '#FEF3C7',
    },
    {
      title: isMarathi ? 'खाजगी संस्था' : 'Private',
      value: '58%',
      sub: '(1,068)',
      icon: Briefcase,
      color: '#2563EB',
      bg: '#EFF6FF',
    },
  ];

  const topProviders = [
    { name: 'ABC Skill Institute', count: '24,800', width: '100%' },
    { name: 'XYZ Training Center', count: '19,200', width: '77%' },
    { name: 'Govt ITI Pune', count: '15,600', width: '63%' },
    { name: 'SkillCraft Academy', count: '12,400', width: '50%' },
    { name: 'TechnoLearn Institute', count: '10,800', width: '43%' },
  ];

  const districtProviders = [
    { name: isMarathi ? 'पुणे' : 'Pune', count: 342 },
    { name: isMarathi ? 'मुंबई' : 'Mumbai', count: 286 },
    { name: isMarathi ? 'नागपूर' : 'Nagpur', count: 198 },
    { name: isMarathi ? 'नाशिक' : 'Nashik', count: 176 },
    { name: isMarathi ? 'छ. संभाजीनगर' : 'Aurangabad', count: 142 },
  ];

  const recentProviders = [
    {
      name: 'ABC Skill Institute',
      type: isMarathi ? 'खाजगी' : 'Private',
      district: isMarathi ? 'पुणे' : 'Pune',
      programmes: 12,
      trainees: '24,800',
      status: 'Active',
    },
    {
      name: 'XYZ Training Center',
      type: isMarathi ? 'खाजगी' : 'Private',
      district: isMarathi ? 'नाशिक' : 'Nashik',
      programmes: 9,
      trainees: '19,200',
      status: 'Active',
    },
    {
      name: 'Govt ITI Pune',
      type: isMarathi ? 'शासकीय' : 'Government',
      district: isMarathi ? 'पुणे' : 'Pune',
      programmes: 15,
      trainees: '15,600',
      status: 'Active',
    },
    {
      name: 'SkillCraft Academy',
      type: isMarathi ? 'खाजगी' : 'Private',
      district: isMarathi ? 'नागपूर' : 'Nagpur',
      programmes: 10,
      trainees: '12,400',
      status: 'Active',
    },
    {
      name: 'TechnoLearn Institute',
      type: isMarathi ? 'खाजगी' : 'Private',
      district: isMarathi ? 'ठाणे' : 'Thane',
      programmes: 9,
      trainees: '10,800',
      status: 'Active',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'प्रशिक्षण संस्था' : 'Training Providers'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'नोंदणीकृत प्रशिक्षण संस्थांचे अन्वेषण आणि निरीक्षण करा.'
            : 'Explore and monitor empanelled training providers.'}
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

      {/* Filter Row: Selectors + Search */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व जिल्हे' : 'All Districts'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व क्षेत्र' : 'All Sectors'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व संस्था प्रकार' : 'All Provider Types'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="relative">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isMarathi ? 'संस्थेचे नाव, आयडीने शोधा...' : 'Search by name, ID, mobile...'}
            className="h-7 pl-8 pr-3 bg-white border border-[#E2E8F0] rounded-lg text-[11px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#C2410C] w-52 sm:w-64 shadow-2xs"
          />
        </div>
      </div>

      {/* Visual Analytics Row: 3 Equal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5 mb-2.5 flex-1 min-h-0">
        {/* Card 1: Provider Distribution (Donut Chart) */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'संस्था वितरण' : 'Provider Distribution'}
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
                {/* Government 42% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="4.2"
                  strokeDasharray="42, 100"
                />
                {/* Private 58% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E11D48"
                  strokeWidth="4.2"
                  strokeDasharray="58, 100"
                  strokeDashoffset="-42"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[11px] font-bold text-slate-900 leading-tight">1,842</span>
                <span className="text-[9px] text-slate-400 font-medium">Total</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <span className="text-slate-600 font-medium">{isMarathi ? 'शासकीय' : 'Government'}</span>
                <span className="font-bold text-slate-900">42%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
                <span className="text-slate-600 font-medium">{isMarathi ? 'खाजगी' : 'Private'}</span>
                <span className="font-bold text-slate-900">58%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Top Providers by Trainees */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800 mb-1">
            {isMarathi ? 'प्रशिक्षणार्थींनुसार सर्वोच्च संस्था' : 'Top Providers by Trainees'}
          </h3>
          <div className="space-y-1.5 my-auto">
            {topProviders.map((p, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between text-[11px]">
                  <span className="font-medium text-slate-700 truncate max-w-[130px]">{p.name}</span>
                  <span className="font-bold text-slate-900">{p.count}</span>
                </div>
                <div className="w-full bg-[#F3ECE4] h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] rounded-full"
                    style={{ width: p.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Providers by District */}
        <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800 mb-1">
            {isMarathi ? 'जिल्ह्यानुसार संस्था' : 'Providers by District'}
          </h3>
          <div className="space-y-2 my-auto">
            {districtProviders.map((d, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 border-b border-[#F6EFE9] text-xs">
                <span className="font-medium text-slate-700">{d.name}</span>
                <span className="font-bold text-slate-900 bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EADCCF]">
                  {d.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Providers Table */}
      <div className="bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-800">
            {isMarathi ? 'अलीकडील प्रशिक्षण संस्था' : 'Recent Providers'}
          </h3>
          <a
            href="#all-providers"
            className="text-xs font-semibold text-[#C2410C] hover:underline flex items-center gap-1 cursor-pointer"
          >
            {isMarathi ? 'सर्व संस्था पहा' : 'View All Providers'} <ArrowRight size={13} />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F1E5D8] text-[11px] font-bold text-slate-600">
                <th className="pb-1.5 font-bold">{isMarathi ? 'संस्थेचे नाव' : 'Provider Name'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'प्रकार' : 'Type'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'जिल्हा' : 'District'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'कार्यक्रम' : 'Programmes'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'प्रशिक्षणार्थी' : 'Trainees'}</th>
                <th className="pb-1.5 font-bold">{isMarathi ? 'स्थिती' : 'Status'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6EFE9] text-xs">
              {recentProviders.map((p, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="py-2 font-semibold text-slate-800">{p.name}</td>
                  <td className="py-2 text-slate-600">{p.type}</td>
                  <td className="py-2 text-slate-600">{p.district}</td>
                  <td className="py-2 text-slate-600">{p.programmes}</td>
                  <td className="py-2 font-medium text-slate-800">{p.trainees}</td>
                  <td className="py-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {p.status}
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
