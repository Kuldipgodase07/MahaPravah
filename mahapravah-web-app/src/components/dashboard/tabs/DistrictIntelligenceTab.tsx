import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import MaharashtraDistrictMap from '../MaharashtraDistrictMap';

export default function DistrictIntelligenceTab() {
  const { isMarathi } = useLanguage();
  const [selectedIndicator, setSelectedIndicator] = useState('All Indicators (Score)');
  const [indicatorOpen, setIndicatorOpen] = useState(false);

  const topDistricts = [
    { rank: 1, name: isMarathi ? 'पुणे' : 'Pune', rate: '74.2%' },
    { rank: 2, name: isMarathi ? 'मुंबई' : 'Mumbai', rate: '71.8%' },
    { rank: 3, name: isMarathi ? 'ठाणे' : 'Thane', rate: '68.0%' },
    { rank: 4, name: isMarathi ? 'नागपूर' : 'Nagpur', rate: '65.4%' },
    { rank: 5, name: isMarathi ? 'नाशिक' : 'Nashik', rate: '62.1%' },
  ];

  const needsAttention = [
    { rank: 1, name: isMarathi ? 'गडचिरोली' : 'Gadchiroli', rate: '28.4%' },
    { rank: 2, name: isMarathi ? 'नंदुरबार' : 'Nandurbar', rate: '32.1%' },
    { rank: 3, name: isMarathi ? 'हिंगोली' : 'Hingoli', rate: '33.7%' },
    { rank: 4, name: isMarathi ? 'वाशीम' : 'Washim', rate: '35.8%' },
    { rank: 5, name: isMarathi ? 'यवतमाळ' : 'Yavatmal', rate: '38.2%' },
  ];

  const comparisonData = [
    { district: isMarathi ? 'पुणे' : 'Pune', emp: 74, ret: 68 },
    { district: isMarathi ? 'मुंबई' : 'Mumbai', emp: 72, ret: 65 },
    { district: isMarathi ? 'नागपूर' : 'Nagpur', emp: 65, ret: 60 },
    { district: isMarathi ? 'नाशिक' : 'Nashik', emp: 62, ret: 58 },
    { district: isMarathi ? 'ठाणे' : 'Thane', emp: 68, ret: 62 },
    { district: isMarathi ? 'छ. संभाजीनगर' : 'Aurangabad', emp: 58, ret: 54 },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header with Indicator Dropdown on Right */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'जिल्हा बुद्धिमत्ता' : 'District Intelligence'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'जिल्हानिहाय कौशल्य आणि रोजगार निष्पत्तीची तुलना व विश्लेषण करा.'
              : 'Compare and analyze district-wise skill and employment outcomes.'}
          </p>
        </div>

        {/* Indicator Filter */}
        <div className="relative">
          <button
            onClick={() => setIndicatorOpen(!indicatorOpen)}
            className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer hover:bg-[#FAF7F2]"
          >
            <span>{selectedIndicator}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </button>
          {indicatorOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-[#E2E8F0] rounded-lg shadow-lg py-1 z-30 text-xs">
              {['All Indicators (Score)', 'Employment Rate', 'Retention Rate', 'Training Capacity'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setSelectedIndicator(item); setIndicatorOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#FDF0E6] text-slate-700 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Map & Chart (Left 2/3) + District Leaderboards (Right 1/3) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-2.5 min-h-0">
        {/* Left 2 Cols: Choropleth Map + District Comparison Bar Chart */}
        <div className="lg:col-span-2 flex flex-col gap-2 min-h-0">
          {/* Choropleth Map Component */}
          <div className="flex-[1.4] min-h-0">
            <MaharashtraDistrictMap />
          </div>

          {/* District Comparison Bar Chart */}
          <div className="flex-1 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between min-h-0">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-800">
                {isMarathi ? 'जिल्हा तुलना' : 'District Comparison'}
              </h3>
              <div className="flex items-center gap-3 text-[10px]">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2 rounded-xs bg-[#C2410C]" />
                  <span className="text-slate-600 font-medium">{isMarathi ? 'रोजगार दर' : 'Employment Rate'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2 rounded-xs bg-[#78350F]" />
                  <span className="text-slate-600 font-medium">{isMarathi ? 'धारणा दर' : 'Retention Rate'}</span>
                </div>
              </div>
            </div>

            {/* Grouped Bar Chart */}
            <div className="flex items-end justify-between gap-3 h-24 pt-2 px-3 my-auto">
              {comparisonData.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div className="flex items-end gap-1 w-full justify-center h-full">
                    {/* Employment Rate Bar */}
                    <div
                      className="w-3 rounded-t bg-[#C2410C] transition-all duration-300"
                      style={{ height: `${item.emp}%` }}
                      title={`Employment Rate: ${item.emp}%`}
                    />
                    {/* Retention Rate Bar */}
                    <div
                      className="w-3 rounded-t bg-[#78350F] transition-all duration-300"
                      style={{ height: `${item.ret}%` }}
                      title={`Retention Rate: ${item.ret}%`}
                    />
                  </div>
                  <span className="text-[9.5px] font-medium text-slate-600 truncate max-w-[60px]">
                    {item.district}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Top Performing & Needs Attention Leaderboards */}
        <div className="flex flex-col gap-2 min-h-0">
          {/* Card 1: Top Performing Districts */}
          <div className="flex-1 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col min-h-0">
            <h3 className="text-xs font-bold text-slate-800 mb-2">
              {isMarathi ? 'सर्वोत्कृष्ट कामगिरी करणारे जिल्हे' : 'Top Performing Districts'}
            </h3>
            <div className="space-y-1.5 flex-1 overflow-y-auto">
              {topDistricts.map((d) => (
                <div
                  key={d.rank}
                  className="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF7F2]/80 border border-[#F1E5D8] text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#EA580C]/10 text-[#C2410C] font-bold text-[10px] flex items-center justify-center">
                      {d.rank}
                    </span>
                    <span className="font-semibold text-slate-800">{d.name}</span>
                  </div>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                    {d.rate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Needs Attention Districts */}
          <div className="flex-1 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col min-h-0">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-xs font-bold text-red-800">
                {isMarathi ? 'विशेष लक्ष आवश्यक' : 'Needs Attention'}
              </h3>
            </div>
            <div className="space-y-1.5 flex-1 overflow-y-auto">
              {needsAttention.map((d) => (
                <div
                  key={d.rank}
                  className="flex items-center justify-between p-1.5 rounded-lg bg-red-50/50 border border-red-100 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-[10px] flex items-center justify-center">
                      {d.rank}
                    </span>
                    <span className="font-semibold text-slate-800">{d.name}</span>
                  </div>
                  <span className="font-bold text-red-700 bg-white px-2 py-0.5 rounded border border-red-200 text-[11px]">
                    {d.rate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
