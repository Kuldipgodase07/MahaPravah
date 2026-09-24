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
    traineesMr: '1,42,400',
    employmentRate: '74.2%',
    employmentRateMr: '74.2%',
    retentionRate: '79.1%',
    retentionRateMr: '79.1%',
    wageGrowth: '+21.4%',
    wageGrowthMr: '+21.4%',
    rateVal: 74.2,
  },
  Mumbai: {
    name: 'Mumbai Suburban',
    nameMr: 'मुंबई उपनगर',
    trainees: '1,86,500',
    traineesMr: '1,86,500',
    employmentRate: '78.5%',
    employmentRateMr: '78.5%',
    retentionRate: '82.4%',
    retentionRateMr: '82.4%',
    wageGrowth: '+24.1%',
    wageGrowthMr: '+24.1%',
    rateVal: 78.5,
  },
  Nagpur: {
    name: 'Nagpur District',
    nameMr: 'नागपूर जिल्हा',
    trainees: '94,200',
    traineesMr: '94,200',
    employmentRate: '68.1%',
    employmentRateMr: '68.1%',
    retentionRate: '71.5%',
    retentionRateMr: '71.5%',
    wageGrowth: '+16.8%',
    wageGrowthMr: '+16.8%',
    rateVal: 68.1,
  },
  Nashik: {
    name: 'Nashik District',
    nameMr: 'नाशिक जिल्हा',
    trainees: '88,600',
    traineesMr: '88,600',
    employmentRate: '65.4%',
    employmentRateMr: '65.4%',
    retentionRate: '69.8%',
    retentionRateMr: '69.8%',
    wageGrowth: '+15.2%',
    wageGrowthMr: '+15.2%',
    rateVal: 65.4,
  },
  Aurangabad: {
    name: 'Chhatrapati Sambhajinagar',
    nameMr: 'छत्रपती संभाजीनगर',
    trainees: '76,100',
    traineesMr: '76,100',
    employmentRate: '62.8%',
    employmentRateMr: '62.8%',
    retentionRate: '66.4%',
    retentionRateMr: '66.4%',
    wageGrowth: '+14.1%',
    wageGrowthMr: '+14.1%',
    rateVal: 62.8,
  },
};

export default function MaharashtraDistrictMap() {
  const { isMarathi } = useLanguage();
  const [selectedDistrictKey] = useState<string>('Pune');

  const selectedData = districtData[selectedDistrictKey] || districtData.Pune;

  return (
    <div className="bg-white/95 backdrop-blur-xs rounded-xl p-4 border border-[#DFC7B2]/70 shadow-2xs flex flex-col justify-between select-none">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            {isMarathi ? 'महाराष्ट्र जिल्हा आढावा' : 'Maharashtra District Overview'}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {isMarathi ? 'रोजगार दर (%)' : 'Employment Rate (%)'}
          </p>
        </div>

        <button className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
          <span>{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</span>
          <ChevronDown size={12} className="text-slate-400" />
        </button>
      </div>

      {/* Map & District Info Split */}
      <div className="grid grid-cols-12 gap-3 items-center py-2">
        {/* Left Map Image Vector representation */}
        <div className="col-span-7 flex flex-col items-center justify-center relative min-h-[190px]">
          <img
            src="/maharashtra-district-map.png"
            alt={isMarathi ? 'महाराष्ट्र नकाशा' : 'Maharashtra Map'}
            className="w-full h-44 object-contain filter drop-shadow-xs"
          />

          {/* Map Legend */}
          <div className="flex items-center gap-3 text-[10px] text-slate-500 mt-2">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-[#7B2400]" />
              <span>≥ 70%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-[#C0392B]" />
              <span>60% - 70%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-[#E67E22]" />
              <span>40% - 60%</span>
            </div>
          </div>
        </div>

        {/* Right District Info Box */}
        <div className="col-span-5 bg-slate-50/70 p-3 rounded-xl border border-slate-200/80 space-y-2">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="font-bold text-xs text-slate-900">{isMarathi ? selectedData.nameMr : selectedData.name}</span>
            <button className="text-[11px] font-semibold text-[#C0392B] hover:underline flex items-center gap-0.5">
              {isMarathi ? 'तपशील →' : 'Details →'}
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">{isMarathi ? 'प्रशिक्षणार्थी' : 'Trainees'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? selectedData.traineesMr : selectedData.trainees}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? selectedData.employmentRateMr : selectedData.employmentRate}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">{isMarathi ? 'टिकून दर' : 'Retention Rate'}</span>
              <span className="font-bold text-slate-900">{isMarathi ? selectedData.retentionRateMr : selectedData.retentionRate}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">{isMarathi ? 'वेतन वाढ' : 'Wage Growth'}</span>
              <span className="font-bold text-emerald-600">{isMarathi ? selectedData.wageGrowthMr : selectedData.wageGrowth}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
