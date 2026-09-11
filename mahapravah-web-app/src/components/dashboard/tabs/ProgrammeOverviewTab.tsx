import { useState } from 'react';
import { Layers, CheckCircle, Users, Award, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ProgrammeOverviewTab() {
  const { isMarathi } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'scheme' | 'sector' | 'agency'>('scheme');
  const [currentPage, setCurrentPage] = useState(1);

  const kpis = [
    {
      title: isMarathi ? 'एकूण कार्यक्रम' : 'Total Programmes',
      value: '482',
      change: '+ 10%',
      icon: Layers,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'सक्रिय कार्यक्रम' : 'Active Programmes',
      value: '418',
      change: '+ 8%',
      icon: CheckCircle,
      color: '#C2410C',
      bg: '#FFEDD5',
    },
    {
      title: isMarathi ? 'एकूण प्रशिक्षणार्थी' : 'Total Trainees',
      value: '12.4 Lakh',
      change: '+ 12%',
      icon: Users,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'सरासरी पूर्णता दर' : 'Avg. Completion Rate',
      value: '78.3%',
      change: '+ 5.6%',
      icon: Award,
      color: '#D97706',
      bg: '#FEF3C7',
    },
  ];

  const programmes = [
    {
      name: isMarathi ? 'महाराष्ट्र कौशल्य विद्यापीठ' : 'Maharashtra Skill University',
      sector: isMarathi ? 'बहु-क्षेत्रीय' : 'Multi-Sector',
      agency: 'MSDE',
      trainees: '2,48,000',
      completion: '82%',
      employment: '71%',
    },
    {
      name: 'PMKVY 4.0',
      sector: isMarathi ? 'बहु-क्षेत्रीय' : 'Multi-Sector',
      agency: 'MSDE',
      trainees: '1,92,000',
      completion: '79%',
      employment: '68%',
    },
    {
      name: isMarathi ? 'मुख्यमंत्री युवा कौशल्य कार्यक्रम' : 'CM Youth Skill Programme',
      sector: isMarathi ? 'उद्योन्मुख तंत्रज्ञान' : 'Emerging Tech',
      agency: 'GoM',
      trainees: '1,46,000',
      completion: '85%',
      employment: '73%',
    },
    {
      name: isMarathi ? 'महिला कौशल्य विकास' : 'Mahila Kaushalya Vikas',
      sector: isMarathi ? 'महिला सक्षमीकरण' : 'Women Empowerment',
      agency: 'GoM',
      trainees: '1,12,000',
      completion: '81%',
      employment: '66%',
    },
    {
      name: isMarathi ? 'शिकाऊ उमेदवारी प्रोत्साहन' : 'Apprenticeship Promotion',
      sector: isMarathi ? 'औद्योगिक' : 'Industrial',
      agency: 'GoM',
      trainees: '96,000',
      completion: '77%',
      employment: '62%',
    },
    {
      name: isMarathi ? 'ग्रामीण कौशल्य पुढाकार' : 'Rural Skill Initiative',
      sector: isMarathi ? 'ग्रामीण उपजीविका' : 'Rural Livelihood',
      agency: 'ZP/ORDDA',
      trainees: '84,000',
      completion: '76%',
      employment: '58%',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title & Subtitle Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'कार्यक्रम आढावा' : 'Programme Overview'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'महाराष्ट्रातील सर्व कौशल्य विकास कार्यक्रमांचा आढावा घ्या.'
            : 'Explore all skill development programmes across Maharashtra.'}
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
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-none">
                    {kpi.value}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                    ↑ {kpi.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Area: Scheme Filter Tabs + Data Table */}
      <div className="flex-1 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col min-h-0 overflow-hidden">
        {/* Filter Segment Tabs */}
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setActiveFilter('scheme')}
            className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
              activeFilter === 'scheme'
                ? 'bg-[#7B2400] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-slate-600 hover:bg-[#F3ECE4]'
            }`}
          >
            {isMarathi ? 'योजनेनुसार' : 'By Scheme'}
          </button>
          <button
            onClick={() => setActiveFilter('sector')}
            className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
              activeFilter === 'sector'
                ? 'bg-[#7B2400] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-slate-600 hover:bg-[#F3ECE4]'
            }`}
          >
            {isMarathi ? 'क्षेत्रानुसार' : 'By Sector'}
          </button>
          <button
            onClick={() => setActiveFilter('agency')}
            className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
              activeFilter === 'agency'
                ? 'bg-[#7B2400] text-white shadow-xs'
                : 'bg-[#FAF7F2] text-slate-600 hover:bg-[#F3ECE4]'
            }`}
          >
            {isMarathi ? 'अंमलबजावणी यंत्रणेनुसार' : 'By Implementing Agency'}
          </button>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-x-auto min-h-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F1E5D8] text-[11px] font-bold text-slate-600">
                <th className="pb-2 font-bold">{isMarathi ? 'कार्यक्रमाचे नाव' : 'Programme Name'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'क्षेत्र' : 'Sector'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'अंमलबजावणी यंत्रणा' : 'Implementing Agency'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'प्रशिक्षणार्थी' : 'Trainees'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'पूर्णता दर' : 'Completion Rate'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6EFE9] text-xs">
              {programmes.map((p, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="py-2.5 font-semibold text-slate-800">{p.name}</td>
                  <td className="py-2.5 text-slate-600">{p.sector}</td>
                  <td className="py-2.5 text-slate-600">{p.agency}</td>
                  <td className="py-2.5 font-medium text-slate-800">{p.trainees}</td>
                  <td className="py-2.5 font-medium text-slate-800">{p.completion}</td>
                  <td className="py-2.5 font-bold text-[#C2410C]">{p.employment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Controls: Page count, Pagination, View All Link */}
        <div className="pt-2 border-t border-[#F1E5D8] flex items-center justify-between text-xs text-slate-500 mt-auto">
          <span>
            {isMarathi ? '४८२ पैकी ६ कार्यक्रम दर्शवित आहे' : 'Showing 6 of 482 programmes'}
          </span>

          {/* Pagination */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="w-6 h-6 rounded flex items-center justify-center text-slate-500 hover:bg-[#FAF7F2] cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-6 h-6 rounded text-[11px] font-semibold flex items-center justify-center cursor-pointer transition-all ${
                  currentPage === page
                    ? 'bg-[#C2410C] text-white'
                    : 'text-slate-600 hover:bg-[#FAF7F2]'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-1 text-slate-400">...</span>
            <button
              onClick={() => setCurrentPage(81)}
              className="w-6 h-6 rounded text-[11px] font-semibold flex items-center justify-center text-slate-600 hover:bg-[#FAF7F2] cursor-pointer"
            >
              81
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(81, currentPage + 1))}
              className="w-6 h-6 rounded flex items-center justify-center text-slate-500 hover:bg-[#FAF7F2] cursor-pointer"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <a
            href="#view-all"
            className="text-[#C2410C] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
          >
            {isMarathi ? 'सर्व कार्यक्रम पहा' : 'View All Programmes'} <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
