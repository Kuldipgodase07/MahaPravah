import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DistrictStat {
  name: string;
  nameMr: string;
  trainees: string;
  traineesMr: string;
  employmentRate: string;
  employmentRateMr: string;
  retentionRate: string;
  retentionRateMr: string;
  wageGrowth: string;
  wageGrowthMr: string;
  rateVal: number;
}

const districtData: Record<string, DistrictStat> = {
  Pune: {
    name: 'Pune District',
    nameMr: 'पुणे जिल्हा',
    trainees: '1,42,400',
    traineesMr: '१,४२,४००',
    employmentRate: '74.2%',
    employmentRateMr: '७४.२%',
    retentionRate: '79.1%',
    retentionRateMr: '७९.१%',
    wageGrowth: '+21.4%',
    wageGrowthMr: '+२१.४%',
    rateVal: 74.2,
  },
  Mumbai: {
    name: 'Mumbai Suburban',
    nameMr: 'मुंबई उपनगर',
    trainees: '1,88,200',
    traineesMr: '१,८८,२००',
    employmentRate: '82.5%',
    employmentRateMr: '८२.५%',
    retentionRate: '83.4%',
    retentionRateMr: '८३.४%',
    wageGrowth: '+24.1%',
    wageGrowthMr: '+२४.१%',
    rateVal: 82.5,
  },
  Thane: {
    name: 'Thane District',
    nameMr: 'ठाणे जिल्हा',
    trainees: '98,600',
    traineesMr: '९८,६००',
    employmentRate: '71.0%',
    employmentRateMr: '७१.०%',
    retentionRate: '75.3%',
    retentionRateMr: '७५.३%',
    wageGrowth: '+19.8%',
    wageGrowthMr: '+१९.८%',
    rateVal: 71.0,
  },
  Nagpur: {
    name: 'Nagpur District',
    nameMr: 'नागपूर जिल्हा',
    trainees: '86,400',
    traineesMr: '८६,४००',
    employmentRate: '68.6%',
    employmentRateMr: '६८.६%',
    retentionRate: '72.0%',
    retentionRateMr: '७२.०%',
    wageGrowth: '+17.5%',
    wageGrowthMr: '+१७.५%',
    rateVal: 68.6,
  },
  Nashik: {
    name: 'Nashik District',
    nameMr: 'नाशिक जिल्हा',
    trainees: '74,200',
    traineesMr: '७४,२००',
    employmentRate: '64.8%',
    employmentRateMr: '६४.८%',
    retentionRate: '68.5%',
    retentionRateMr: '६८.५%',
    wageGrowth: '+16.2%',
    wageGrowthMr: '+१६.२%',
    rateVal: 64.8,
  },
};

export default function MaharashtraDistrictMap() {
  const { isMarathi } = useLanguage();
  const [selectedId] = useState<string>('Pune');

  // Get data for selected district
  const activeStat = (() => {
    if (districtData[selectedId]) return districtData[selectedId];
    return districtData['Pune'];
  })();

  return (
    <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E8D4C2] shadow-2xs flex flex-col select-none relative h-full min-h-0 overflow-hidden">

      {/* Card Header */}
      <div className="flex items-start justify-between gap-2 mb-1 shrink-0">
        <div>
          <h2 className="text-[13px] sm:text-[14px] font-bold text-[#8C3310] tracking-tight leading-tight">
            {isMarathi ? 'महाराष्ट्र जिल्हा आढावा' : 'Maharashtra District Overview'}
          </h2>
          <span className="text-[10.5px] text-[#64748B] font-normal block mt-0.5 leading-none">
            {isMarathi ? 'रोजगार दर (%)' : 'Employment Rate (%)'}
          </span>
        </div>
        <button className="flex items-center gap-1 h-[24px] px-2 bg-white border border-[#E2E8F0] rounded-md text-[10.5px] font-medium text-[#334155] shadow-2xs hover:bg-[#F8FAFC] transition-colors cursor-pointer whitespace-nowrap shrink-0">
          <span>{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</span>
          <ChevronDown size={11} className="text-[#64748B]" />
        </button>
      </div>

      {/* Map area with overlaid info card - relative container */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden">

        {/* Maharashtra District Map Image - aligned top */}
        <div className="absolute inset-0 flex items-start justify-center pt-0 pointer-events-none">
          <img
            src="/maharashtra-district-map.png"
            alt="Maharashtra District Map"
            className="w-full h-full max-h-[220px] object-contain object-top drop-shadow-xs select-none"
          />
        </div>

        {/* Legend - positioned in bottom center gap without white container */}
        <div className="absolute left-[30%] sm:left-[33%] bottom-0.5 z-10 pointer-events-none">
          <div className="flex flex-col gap-0.5 text-[8.5px] font-medium text-[#64748B]">
            {[
              { color: '#5C1D06', label: '≥ 80%' },
              { color: '#9E3808', label: '60% – 80%' },
              { color: '#DF6B20', label: '40% – 60%' },
              { color: '#F3AF6B', label: '20% – 40%' },
              { color: '#FDE0BD', label: '< 20%' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1">
                <span
                  className="w-2 h-2 rounded-[2px] shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="whitespace-nowrap leading-none">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* District Stats Card - positioned in bottom right cove */}
        <div className="absolute right-0 bottom-0 w-[140px] sm:w-[148px] bg-white/95 backdrop-blur-xs rounded-lg border border-slate-200 shadow-sm z-20 p-2">
          {/* District name + link */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-900 leading-tight">
              {isMarathi ? activeStat.nameMr : activeStat.name}
            </span>
            <a
              href="#district"
              className="text-[9.5px] font-semibold text-[#C2410C] hover:underline shrink-0 ml-1 whitespace-nowrap"
            >
              {isMarathi ? 'तपशील →' : 'Details →'}
            </a>
          </div>

          {/* Stats */}
          <div className="space-y-1 text-[9.5px]">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">{isMarathi ? 'प्रशिक्षणार्थी' : 'Trainees'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? activeStat.traineesMr : activeStat.trainees}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? activeStat.employmentRateMr : activeStat.employmentRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">{isMarathi ? 'टिकाव दर' : 'Retention Rate'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? activeStat.retentionRateMr : activeStat.retentionRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">{isMarathi ? 'वेतन वाढ' : 'Median Wage'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? activeStat.wageGrowthMr : activeStat.wageGrowth}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
