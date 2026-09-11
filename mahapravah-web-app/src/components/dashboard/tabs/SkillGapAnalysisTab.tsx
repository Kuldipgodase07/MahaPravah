import { BarChart2, AlertTriangle, Sparkles, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function SkillGapAnalysisTab() {
  const { isMarathi } = useLanguage();

  const kpis = [
    {
      title: isMarathi ? 'उच्च मागणी कौशल्ये' : 'High Demand Skills',
      value: '56',
      icon: BarChart2,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'कौशल्य तूट (Skill Gap)' : 'Skill Gap',
      value: '38%',
      icon: AlertTriangle,
      color: '#C2410C',
      bg: '#FFEDD5',
    },
    {
      title: isMarathi ? 'उद्योन्मुख कौशल्ये' : 'Emerging Skills',
      value: '24',
      icon: Sparkles,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'उद्योग भागीदार' : 'Industry Partners',
      value: '320',
      icon: Handshake,
      color: '#D97706',
      bg: '#FEF3C7',
    },
  ];

  const skillGaps = [
    {
      skill: isMarathi ? 'डेटा ॲनालिटिक्स' : 'Data Analytics',
      demand: '82,400',
      supply: '41,200',
      gap: '-41,200',
      demandNum: 82.4,
      supplyNum: 41.2,
    },
    {
      skill: isMarathi ? 'क्लाउड कॉम्प्युटिंग' : 'Cloud Computing',
      demand: '54,800',
      supply: '26,400',
      gap: '-28,400',
      demandNum: 54.8,
      supplyNum: 26.4,
    },
    {
      skill: isMarathi ? 'ईव्ही तंत्रज्ञान' : 'EV Technology',
      demand: '38,700',
      supply: '17,900',
      gap: '-20,800',
      demandNum: 38.7,
      supplyNum: 17.9,
    },
    {
      skill: isMarathi ? 'सायबर सुरक्षा' : 'Cybersecurity',
      demand: '31,200',
      supply: '15,600',
      gap: '-15,600',
      demandNum: 31.2,
      supplyNum: 15.6,
    },
    {
      skill: isMarathi ? 'औद्योगिक ऑटोमेशन' : 'Industrial Automation',
      demand: '29,800',
      supply: '18,400',
      gap: '-11,400',
      demandNum: 29.8,
      supplyNum: 18.4,
    },
  ];

  const emergingSkills = [
    { rank: 1, title: 'Generative AI', growth: '+142%' },
    { rank: 2, title: 'Green Hydrogen', growth: '+98%' },
    { rank: 3, title: 'Drone Technology', growth: '+85%' },
    { rank: 4, title: 'IoT & Embedded', growth: '+76%' },
    { rank: 5, title: 'Semiconductor Design', growth: '+64%' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'कौशल्य तूट विश्लेषण' : 'Skill Gap Analysis'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'उच्च-मागणी कौशल्ये आणि प्रशिक्षण अंतर ओळखा.'
            : 'Identify high-demand skills and training gaps.'}
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
                <span className="text-base sm:text-lg font-bold text-slate-900 leading-none mt-0.5 block">
                  {kpi.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Analytics Row: 3 Equal/Proportional Cards */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 min-h-0">
        {/* Col 1: Top Skill Gaps (Table) - 5 cols */}
        <div className="md:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800">
              {isMarathi ? 'प्रमुख कौशल्य तूट' : 'Top Skill Gaps'}
            </h3>
            <span className="text-[10px] text-slate-400">FY 2025-26</span>
          </div>

          <div className="overflow-x-auto flex-1 min-h-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#F1E5D8] text-[10.5px] font-bold text-slate-600">
                  <th className="pb-1.5 font-bold">{isMarathi ? 'कौशल्य' : 'Skills'}</th>
                  <th className="pb-1.5 font-bold">{isMarathi ? 'मागणी' : 'Industry Demand'}</th>
                  <th className="pb-1.5 font-bold">{isMarathi ? 'पुरवठा' : 'Trained Supply'}</th>
                  <th className="pb-1.5 font-bold text-right">{isMarathi ? 'तूट' : 'Gap'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F6EFE9] text-[11px]">
                {skillGaps.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="py-2 font-semibold text-slate-800">{item.skill}</td>
                    <td className="py-2 text-slate-600">{item.demand}</td>
                    <td className="py-2 text-slate-600">{item.supply}</td>
                    <td className="py-2 font-bold text-red-600 text-right">{item.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Col 2: Demand vs Supply (Grouped Bar Chart) - 4 cols */}
        <div className="md:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between min-h-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800">
              {isMarathi ? 'मागणी वि. पुरवठा' : 'Demand vs Supply'}
            </h3>
            <div className="flex items-center gap-2 text-[10px]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span className="text-slate-500">Industry Demand</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#78350F]" />
                <span className="text-slate-500">Trained Supply</span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 h-44 pt-3 px-2 my-auto">
            {skillGaps.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  {/* Demand Bar */}
                  <div
                    className="w-2.5 sm:w-3 rounded-t bg-[#EA580C] transition-all duration-300"
                    style={{ height: `${(item.demandNum / 90) * 100}%` }}
                    title={`Demand: ${item.demand}`}
                  />
                  {/* Supply Bar */}
                  <div
                    className="w-2.5 sm:w-3 rounded-t bg-[#78350F] transition-all duration-300"
                    style={{ height: `${(item.supplyNum / 90) * 100}%` }}
                    title={`Supply: ${item.supply}`}
                  />
                </div>
                <span className="text-[8.5px] font-medium text-slate-500 truncate max-w-[50px] text-center">
                  {item.skill.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Emerging Skills - 3 cols */}
        <div className="md:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between min-h-0">
          <h3 className="text-xs font-bold text-slate-800 mb-1">
            {isMarathi ? 'उद्योन्मुख कौशल्ये' : 'Emerging Skills'}
          </h3>

          <div className="space-y-1.5 my-auto">
            {emergingSkills.map((s) => (
              <div
                key={s.rank}
                className="flex items-center justify-between p-2 rounded-lg bg-[#FAF7F2]/90 border border-[#F1E5D8] text-xs hover:border-[#EA580C]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EA580C]/10 text-[#C2410C] font-bold text-[10px] flex items-center justify-center">
                    {s.rank}
                  </span>
                  <span className="font-semibold text-slate-800 text-[11.5px]">{s.title}</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  {s.growth}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#all-insights"
            className="text-xs font-semibold text-[#C2410C] hover:underline flex items-center justify-end gap-1 mt-2 cursor-pointer"
          >
            {isMarathi ? 'सर्व अंतर्दृष्टी पहा' : 'View All Insights'} <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
