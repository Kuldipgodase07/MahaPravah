import { useState } from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const regionOptions = [
  { en: 'Maharashtra (State)', mr: 'महाराष्ट्र (राज्य)' },
  { en: 'Western Maharashtra', mr: 'पश्चिम महाराष्ट्र' },
  { en: 'Vidarbha', mr: 'विदर्भ' },
  { en: 'Marathwada', mr: 'मराठवाडा' },
  { en: 'Konkan', mr: 'कोकण' },
  { en: 'Khandesh', mr: 'खान्देश' },
];

const fyOptions = [
  { en: 'FY 2025-26', mr: 'आ.व. २०२५-२६' },
  { en: 'FY 2024-25', mr: 'आ.व. २०२४-२५' },
  { en: 'FY 2023-24', mr: 'आ.व. २०२३-२४' },
];

export default function DashboardControlsBar() {
  const { isMarathi } = useLanguage();
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedFYIndex, setSelectedFYIndex] = useState(0);
  const [stateOpen, setStateOpen] = useState(false);
  const [fyOpen, setFyOpen] = useState(false);

  return (
    <div className="w-full mb-1.5 select-none relative z-20 pt-4 sm:pt-5">
      {/* Controls Row: Welcome Heading on Left + Region/FY Filters on Right */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5">
        {/* Left: Greeting Title & Subtitle */}
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'स्वागत आहे, डॉ. ए. देशमुख' : 'Welcome, Dr. A. Deshmukh'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? "महाराष्ट्राच्या कौशल्य ते रोजगार प्रवासाचा संक्षिप्त आढावा."
              : "Here's an overview of Maharashtra's skill to employment journey."}
          </p>
        </div>

        {/* Right: State Selector, Financial Year Selector, Last Updated Tag */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* State Filter */}
          <div className="relative">
            <button
              onClick={() => { setStateOpen(!stateOpen); setFyOpen(false); }}
              className="flex items-center gap-1.5 h-[26px] sm:h-[28px] px-2 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs hover:bg-[#F8FAFC] transition-all cursor-pointer"
            >
              <MapPin size={12} className="text-[#C2410C]" />
              <span>{isMarathi ? regionOptions[selectedStateIndex].mr : regionOptions[selectedStateIndex].en}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>

            {stateOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-[#E2E8F0] rounded-lg shadow-lg py-1 z-30">
                {regionOptions.map((region, idx) => (
                  <button
                    key={region.en}
                    onClick={() => { setSelectedStateIndex(idx); setStateOpen(false); }}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-[#FDF0E6] text-slate-700 font-medium cursor-pointer"
                  >
                    {isMarathi ? region.mr : region.en}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Financial Year Filter */}
          <div className="relative">
            <button
              onClick={() => { setFyOpen(!fyOpen); setStateOpen(false); }}
              className="flex items-center gap-1.5 h-[26px] sm:h-[28px] px-2 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs hover:bg-[#F8FAFC] transition-all cursor-pointer"
            >
              <Calendar size={12} className="text-[#C2410C]" />
              <span>{isMarathi ? fyOptions[selectedFYIndex].mr : fyOptions[selectedFYIndex].en}</span>
              <ChevronDown size={11} className="text-slate-400" />
            </button>

            {fyOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-white border border-[#E2E8F0] rounded-lg shadow-lg py-1 z-30">
                {fyOptions.map((fy, idx) => (
                  <button
                    key={fy.en}
                    onClick={() => { setSelectedFYIndex(idx); setFyOpen(false); }}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-[#FDF0E6] text-slate-700 font-medium cursor-pointer"
                  >
                    {isMarathi ? fy.mr : fy.en}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Timestamp */}
          <div className="flex flex-col text-right pl-1 leading-tight">
            <span className="text-[10px] text-slate-400 font-medium leading-none">
              {isMarathi ? 'शेवटचे अपडेट' : 'Last Updated'}
            </span>
            <span className="text-[11px] font-semibold text-slate-700 leading-tight mt-0.5">
              {isMarathi ? '१२ सप्टें २०२५, १०:३० AM' : '12 Sep 2025, 10:30 AM'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

