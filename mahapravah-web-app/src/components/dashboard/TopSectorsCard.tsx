import {
  Info,
  Laptop,
  Car,
  HeartPulse,
  Factory,
  ShoppingBag,
  HardHat,
  Wheat,
  Coffee
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SectorItem {
  id: string;
  name: string;
  nameMr: string;
  rate: number;
  rateLabel: string;
  rateLabelMr: string;
  trainees: string;
  traineesMr: string;
  color: string;
  icon: React.ElementType;
}

const sectorData: SectorItem[] = [
  { id: 'it', name: 'IT & ITES', nameMr: 'माहिती तंत्रज्ञान व आयटीईएस', rate: 82, rateLabel: '82%', rateLabelMr: '८२%', trainees: '2.1 L', traineesMr: '२.१ लाख', color: '#5A0E00', icon: Laptop },
  { id: 'auto', name: 'Automotive', nameMr: 'ऑटोमोटिव्ह', rate: 76, rateLabel: '76%', rateLabelMr: '७६%', trainees: '1.8 L', traineesMr: '१.८ लाख', color: '#6E1700', icon: Car },
  { id: 'health', name: 'Healthcare', nameMr: 'आरोग्य सेवा', rate: 71, rateLabel: '71%', rateLabelMr: '७१%', trainees: '1.6 L', traineesMr: '१.६ लाख', color: '#9E2500', icon: HeartPulse },
  { id: 'mfg', name: 'Manufacturing', nameMr: 'उत्पादन (मॅन्युफॅक्चरिंग)', rate: 68, rateLabel: '68%', rateLabelMr: '६८%', trainees: '1.5 L', traineesMr: '१.५ लाख', color: '#C23800', icon: Factory },
  { id: 'retail', name: 'Retail & BFSI', nameMr: 'किरकोळ व बँकिंग (BFSI)', rate: 62, rateLabel: '62%', rateLabelMr: '६२%', trainees: '1.2 L', traineesMr: '१.२ लाख', color: '#E25200', icon: ShoppingBag },
  { id: 'construction', name: 'Construction', nameMr: 'बांधकाम', rate: 58, rateLabel: '58%', rateLabelMr: '५८%', trainees: '0.9 L', traineesMr: '०.९ लाख', color: '#F57A18', icon: HardHat },
  { id: 'agri', name: 'Agriculture & Allied', nameMr: 'कृषी व संलग्न', rate: 54, rateLabel: '54%', rateLabelMr: '५४%', trainees: '0.8 L', traineesMr: '०.८ लाख', color: '#FA9A3E', icon: Wheat },
  { id: 'hospitality', name: 'Hospitality & Tourism', nameMr: 'आतिथ्य व पर्यटन', rate: 51, rateLabel: '51%', rateLabelMr: '५१%', trainees: '0.7 L', traineesMr: '०.७ लाख', color: '#FCBF78', icon: Coffee },
];

export default function TopSectorsCard() {
  const { isMarathi } = useLanguage();

  return (
    <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between select-none h-full min-h-0 overflow-hidden">
      
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
        <div className="flex items-center gap-1.5">
          <h2 className="text-[13px] sm:text-[14px] font-bold text-[#8C3310] tracking-tight">
            {isMarathi ? 'रोजगारानुसार अव्वल क्षेत्रे' : 'Top Sectors by Employment'}
          </h2>
          <button 
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            title={isMarathi ? "क्षेत्रनिहाय रोजगार वितरण व प्रशिक्षणार्थी संख्या" : "Sectoral employment distribution and trainee output"}
          >
            <Info size={12} />
          </button>
        </div>
      </div>

      {/* Table Subheaders */}
      <div className="grid grid-cols-12 text-[10px] font-medium text-slate-500 border-b border-slate-100 pb-0.5 mb-0.5 px-0.5 shrink-0">
        <div className="col-span-4">{isMarathi ? 'क्षेत्र' : 'Sector'}</div>
        <div className="col-span-6 text-center">{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</div>
        <div className="col-span-2 text-right">{isMarathi ? 'प्रशिक्षणार्थी' : 'Trainees'}</div>
      </div>

      {/* Sector Data Rows */}
      <div className="flex-1 flex flex-col justify-between py-0 min-h-0">
        {sectorData.map((s) => {
          const Icon = s.icon;

          return (
            <div
              key={s.id}
              className="grid grid-cols-12 items-center gap-1 text-[10.5px] py-0 hover:bg-[#FAF7F2] rounded px-0.5 transition-colors"
            >
              {/* Sector Name + Icon */}
              <div className="col-span-4 flex items-center gap-1 truncate">
                <Icon size={11} className="text-[#8C3310] shrink-0" />
                <span className="text-[10.5px] font-medium text-slate-800 truncate">
                  {isMarathi ? s.nameMr : s.name}
                </span>
              </div>

              {/* Progress Bar + Percentage */}
              <div className="col-span-6 flex items-center gap-1.5">
                <div className="flex-1 h-1.5 bg-[#F3E7D8] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${s.rate}%`,
                      backgroundColor: s.color,
                    }}
                  />
                </div>
                <span className="text-[10.5px] font-medium text-slate-600 w-6 text-right shrink-0">
                  {isMarathi ? s.rateLabelMr : s.rateLabel}
                </span>
              </div>

              {/* Trainees Count */}
              <div className="col-span-2 text-right text-[10.5px] font-medium text-slate-700">
                {isMarathi ? s.traineesMr : s.trainees}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Link */}
      <div className="pt-0.5 text-right border-t border-slate-100 mt-0.5 shrink-0">
        <a
          href="#sectors"
          className="text-[10.5px] font-semibold text-[#C2410C] hover:underline inline-block"
        >
          {isMarathi ? 'सर्व क्षेत्रे पहा →' : 'View All Sectors →'}
        </a>
      </div>

    </div>
  );
}
