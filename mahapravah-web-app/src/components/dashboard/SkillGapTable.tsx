import { Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SkillGapItem {
  skill: string;
  skillMr: string;
  demand: string;
  demandMr: string;
  supply: string;
  supplyMr: string;
  gap: string;
  gapMr: string;
}

const skillGapData: SkillGapItem[] = [
  { skill: 'Data Analytics', skillMr: 'डेटा अ‍ॅनालिटिक्स', demand: '82,400', demandMr: '८२,४००', supply: '41,200', supplyMr: '४१,२००', gap: '-41,200', gapMr: '-४१,२००' },
  { skill: 'Cloud Computing', skillMr: 'क्लाउड कम्प्यूटिंग', demand: '54,800', demandMr: '५४,८००', supply: '26,400', supplyMr: '२६,४००', gap: '-28,400', gapMr: '-२८,४००' },
  { skill: 'EV Technology', skillMr: 'ईव्ही तंत्रज्ञान', demand: '38,700', demandMr: '३८,७००', supply: '17,900', supplyMr: '१७,९००', gap: '-20,800', gapMr: '-२०,८००' },
  { skill: 'Cybersecurity', skillMr: 'सायबर सुरक्षा', demand: '31,200', demandMr: '३१,२००', supply: '15,600', supplyMr: '१५,६००', gap: '-15,600', gapMr: '-१५,६००' },
  { skill: 'Industrial Automation', skillMr: 'औद्योगिक ऑटोमेशन', demand: '29,800', demandMr: '२९,८००', supply: '18,400', supplyMr: '१८,४००', gap: '-11,400', gapMr: '-११,४००' },
];

export default function SkillGapTable() {
  const { isMarathi } = useLanguage();

  return (
    <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between select-none h-full min-h-0 overflow-hidden">
      
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
        <div className="flex items-center gap-1.5">
          <h2 className="text-[13px] sm:text-[14px] font-bold text-[#8C3310] tracking-tight">
            {isMarathi ? 'कौशल्य तूट विश्लेषण' : 'Skill Gap Insights'}
          </h2>
          <button
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            title={isMarathi ? "उद्योग मागणी विरुद्ध प्रशिक्षित मनुष्यबळ तूट" : "Industry demand vs trained workforce deficit"}
          >
            <Info size={12} />
          </button>
        </div>

        <a
          href="#skill-gap"
          className="text-[10.5px] font-semibold text-[#C2410C] hover:underline"
        >
          {isMarathi ? 'तपशील पहा →' : 'View Details →'}
        </a>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 text-[10px] font-medium text-slate-500 border-b border-slate-100 pb-0.5 mb-0.5 px-0.5 shrink-0">
        <div className="col-span-4">{isMarathi ? 'कौशल्य' : 'Skill'}</div>
        <div className="col-span-3 text-right">{isMarathi ? 'उद्योग मागणी' : 'Industry Demand'}</div>
        <div className="col-span-3 text-right">{isMarathi ? 'प्रशिक्षित पुरवठा' : 'Trained Supply'}</div>
        <div className="col-span-2 text-right">{isMarathi ? 'तूट' : 'Gap'}</div>
      </div>

      {/* Table Rows */}
      <div className="flex-1 flex flex-col justify-between py-0 min-h-0">
        {skillGapData.map((row) => (
          <div
            key={row.skill}
            className="grid grid-cols-12 items-center text-[10.5px] py-0 hover:bg-[#FAF7F2] rounded px-0.5 transition-colors"
          >
            <div className="col-span-4 text-[10.5px] font-medium text-slate-800 truncate">
              {isMarathi ? row.skillMr : row.skill}
            </div>
            <div className="col-span-3 text-right text-[10.5px] font-medium text-slate-600">
              {isMarathi ? row.demandMr : row.demand}
            </div>
            <div className="col-span-3 text-right text-[10.5px] font-medium text-slate-600">
              {isMarathi ? row.supplyMr : row.supply}
            </div>
            <div className="col-span-2 text-right text-[10.5px] font-bold text-red-600">
              {isMarathi ? row.gapMr : row.gap}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
