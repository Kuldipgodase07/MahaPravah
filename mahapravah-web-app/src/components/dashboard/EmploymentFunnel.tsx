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
  { id: 'enrolled', stage: 'Enrolled', stageMr: 'नोंदणीकृत', count: '1,24,000', countMr: '१,२४,०००', percentage: '100%', percentageMr: '१००%', color: '#FA5800', topW: 185, botW: 165 },
  { id: 'completed', stage: 'Completed', stageMr: 'पूर्ण झालेले', count: '1,08,200', countMr: '१,०८,२००', percentage: '87%', percentageMr: '८७%', color: '#E84A00', topW: 162, botW: 145 },
  { id: 'certified', stage: 'Certified', stageMr: 'प्रमाणित', count: '98,200', countMr: '९८,२००', percentage: '79%', percentageMr: '७९%', color: '#D63D00', topW: 142, botW: 125 },
  { id: 'placed', stage: 'Placed', stageMr: 'नियुक्त', count: '71,500', countMr: '७१,५००', percentage: '58%', percentageMr: '५८%', color: '#BD3000', topW: 120, botW: 102 },
  { id: 'employed', stage: 'Employed', stageMr: 'रोजगारात', count: '64,300', countMr: '६४,३००', percentage: '52%', percentageMr: '५२%', color: '#A02400', topW: 98, botW: 84 },
  { id: '6m-retained', stage: '6M Retained', stageMr: '६ महिने कार्यरत', count: '53,800', countMr: '५३,८००', percentage: '43%', percentageMr: '४३%', color: '#801A00', topW: 82, botW: 70 },
  { id: '12m-retained', stage: '12M Retained', stageMr: '१२ महिने कार्यरत', count: '47,600', countMr: '४७,६००', percentage: '38%', percentageMr: '३८%', color: '#5A0E00', topW: 68, botW: 58 },
];

export default function EmploymentFunnel() {
  const { isMarathi } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between select-none h-full min-h-0 overflow-hidden">
      
      {/* Card Header: Title + Info + View Details */}
      <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
        <div className="flex items-center gap-1.5">
          <h2 className="text-[13px] sm:text-[14px] font-bold text-[#8C3310] tracking-tight">
            {isMarathi ? 'कौशल्य ते रोजगार फनेल' : 'Skill to Employment Funnel'}
          </h2>
          <button 
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            title={isMarathi ? "प्रशिक्षण टप्पे व टिकाव प्रमाण आढावा" : "Overview of training pipeline and retention conversion"}
          >
            <Info size={12} />
          </button>
        </div>

        <a
          href="#outcomes"
          className="text-[10.5px] font-semibold text-[#C2410C] hover:underline"
        >
          {isMarathi ? 'तपशील पहा →' : 'View Details →'}
        </a>
      </div>

      {/* Main Funnel Stages Container */}
      <div className="flex flex-col justify-between flex-1 py-0 min-h-0">
        {funnelStages.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-1.5 cursor-pointer transition-all duration-150 py-0"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left Column: Stage Label + Trainee Count */}
              <div className="w-[80px] sm:w-[88px] text-left shrink-0">
                <div className="text-[10px] sm:text-[10.5px] font-semibold text-slate-700 leading-tight truncate">
                  {isMarathi ? item.stageMr : item.stage}
                </div>
                <div className="text-[10px] sm:text-[10.5px] font-bold text-slate-900 leading-none">
                  {isMarathi ? item.countMr : item.count}
                </div>
              </div>

              {/* Center Funnel: SVG Trapezoid Segment */}
              <div className="flex-1 flex justify-center items-center px-1">
                <svg
                  width={item.topW * 0.9}
                  height="17"
                  viewBox={`0 0 ${item.topW} 18`}
                  className="transition-all duration-200 drop-shadow-2xs overflow-visible"
                  style={{
                    filter: isHovered
                      ? 'brightness(1.15) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                      : 'none',
                    transform: isHovered ? 'scale(1.03)' : 'none',
                  }}
                >
                  {/* Tapered trapezoid calculation: centered top edge to centered bottom edge */}
                  <polygon
                    points={`0,0 ${item.topW},0 ${(item.topW + item.botW) / 2},18 ${(item.topW - item.botW) / 2},18`}
                    fill={item.color}
                  />
                </svg>
              </div>

              {/* Right Column: Percentage */}
              <div className="w-[38px] text-right shrink-0">
                <span className="text-[10.5px] font-bold text-slate-900">
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
