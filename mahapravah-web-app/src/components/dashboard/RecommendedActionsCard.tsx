import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ActionItem {
  number: number;
  text: string;
  textMr: string;
}

const actionItems: ActionItem[] = [
  {
    number: 1,
    text: 'Increase Data Analytics training capacity in Pune, Nashik and Nagpur.',
    textMr: 'पुणे, नाशिक व नागपूरमध्ये डेटा अ‍ॅनालिटिक्स प्रशिक्षण क्षमता वाढवा.',
  },
  {
    number: 3,
    text: 'Review performance of 12 underperforming providers.',
    textMr: '१२ कमी कामगिरी करणाऱ्या प्रशिक्षण संस्थांच्या कामगिरीचा आढावा घ्या.',
  },
  {
    number: 4,
    text: 'Initiate employer engagement for EV Technology and Industrial Automation.',
    textMr: 'ईव्ही तंत्रज्ञान व औद्योगिक ऑटोमेशनसाठी उद्योग सहभाग सुरू करा.',
  },
  {
    number: 5,
    text: 'Launch targeted follow-up campaign for pending graduates.',
    textMr: 'प्रलंबित पदवीधरांसाठी विशेष फॉलो-अप मोहीम सुरू करा.',
  },
];

export default function RecommendedActionsCard() {
  const { isMarathi } = useLanguage();

  return (
    <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between select-none h-full min-h-0 overflow-hidden">
      
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
          <h2 className="text-[13px] sm:text-[14px] font-bold text-[#8C3310] tracking-tight">
            {isMarathi ? 'शिफारस केलेल्या कृती' : 'Recommended Actions'}
          </h2>
        </div>

        <a
          href="#actions"
          className="text-[10.5px] font-semibold text-[#C2410C] hover:underline"
        >
          {isMarathi ? 'सर्व पहा →' : 'View All →'}
        </a>
      </div>

      {/* Action Items List */}
      <div className="flex-1 flex flex-col justify-between py-0 min-h-0">
        {actionItems.map((item) => (
          <div
            key={item.number}
            className="flex items-center justify-between gap-1.5 p-0.5 rounded-lg hover:bg-[#FAF7F2] cursor-pointer transition-colors group"
          >
            {/* Number Badge */}
            <div className="w-4.5 h-4.5 rounded-full bg-[#FDF0E6] text-[#C2410C] font-bold text-[10px] flex items-center justify-center shrink-0">
              {item.number}
            </div>

            {/* Action Text */}
            <div className="flex-1 text-[10.5px] font-medium text-slate-700 leading-tight">
              {isMarathi ? item.textMr : item.text}
            </div>

            {/* Chevron Right */}
            <ChevronRight
              size={12}
              className="text-slate-400 group-hover:text-[#C2410C] group-hover:translate-x-0.5 transition-all shrink-0"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
