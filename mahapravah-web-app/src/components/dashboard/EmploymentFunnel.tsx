import { useState } from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FunnelStage {
  id: string;
  stage: string;
  stageMr: string;
  count: string;
  countMr: string;
  percentage: string;
  percentageMr: string;
  color: string;
  topW: number;
  botW: number;
}

const funnelStages: FunnelStage[] = [
  { id: 'enrolled', stage: 'Enrolled', stageMr: 'नोंदणीकृत', count: '1,24,000', countMr: '1,24,000', percentage: '100%', percentageMr: '100%', color: '#FA5800', topW: 185, botW: 165 },
  { id: 'completed', stage: 'Completed', stageMr: 'पूर्ण केलेले', count: '1,08,200', countMr: '1,08,200', percentage: '87%', percentageMr: '87%', color: '#E84A00', topW: 162, botW: 145 },
  { id: 'certified', stage: 'Certified', stageMr: 'प्रमाणित', count: '98,200', countMr: '98,200', percentage: '79%', percentageMr: '79%', color: '#D63D00', topW: 142, botW: 125 },
  { id: 'placed', stage: 'Placed', stageMr: 'नियुक्त', count: '64,300', countMr: '64,300', percentage: '52%', percentageMr: '52%', color: '#BD3000', topW: 120, botW: 102 },
  { id: 'employed', stage: 'Employed', stageMr: 'रोजगारात', count: '53,800', countMr: '53,800', percentage: '43%', percentageMr: '43%', color: '#A02400', topW: 98, botW: 84 },
  { id: '6m-retained', stage: '6M Retained', stageMr: '6 महिने कार्यरत', count: '47,600', countMr: '47,600', percentage: '38%', percentageMr: '38%', color: '#801A00', topW: 82, botW: 70 },
  { id: '12m-retained', stage: '12M Retained', stageMr: '12 महिने कार्यरत', count: '40,200', countMr: '40,200', percentage: '32%', percentageMr: '32%', color: '#5A0E00', topW: 68, botW: 58 },
];

export default function EmploymentFunnel() {
  const { isMarathi } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white/95 backdrop-blur-xs rounded-xl p-4 border border-[#DFC7B2]/70 shadow-2xs flex flex-col justify-between select-none">
      
      {/* Card Header: Title + Info + View Details */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5">
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            {isMarathi ? 'कौशल्य ते रोजगार फनेल' : 'Skill to Employment Funnel'}
          </h2>
          <Info size={14} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
        </div>

        <button className="text-xs font-semibold text-[#C0392B] hover:underline flex items-center gap-0.5">
          {isMarathi ? 'तपशील पहा →' : 'View Details →'}
        </button>
      </div>

      {/* Main Funnel Stages Container */}
      <div className="space-y-2 py-1">
        {funnelStages.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-2 cursor-pointer transition-all duration-150 py-0.5"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left Column: Stage Label + Trainee Count */}
              <div className="w-28 text-left shrink-0">
                <div className="text-xs font-medium text-slate-700 leading-tight truncate">
                  {isMarathi ? item.stageMr : item.stage}
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  {isMarathi ? item.countMr : item.count}
                </div>
              </div>

              {/* Center Funnel: SVG Trapezoid Segment */}
              <div className="flex-1 flex justify-center items-center px-1">
                <svg
                  width={item.topW * 0.9}
                  height="16"
                  viewBox={'0 0 ' + item.topW + ' 18'}
                  className="transition-all duration-200 overflow-visible"
                  style={{
                    filter: isHovered
                      ? 'brightness(1.15) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                      : 'none',
                    transform: isHovered ? 'scale(1.03)' : 'none',
                  }}
                >
                  <polygon
                    points={'0,0 ' + item.topW + ',0 ' + ((item.topW + item.botW) / 2) + ',18 ' + ((item.topW - item.botW) / 2) + ',18'}
                    fill={item.color}
                  />
                </svg>
              </div>

              {/* Right Column: Percentage */}
              <div className="w-10 text-right shrink-0">
                <span className="text-xs font-bold text-slate-900">
                  {isMarathi ? item.percentageMr : item.percentage}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
