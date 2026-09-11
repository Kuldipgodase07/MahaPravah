import { Flame, AlertTriangle, Briefcase, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AlertItem {
  id: string;
  badge: string;
  badgeMr: string;
  description: string;
  descriptionMr: string;
  date: string;
  dateMr: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: React.ElementType;
}

const alertsData: AlertItem[] = [
  {
    id: '1',
    badge: 'High Attrition',
    badgeMr: 'उच्च गळती',
    description: 'Automotive trainees in Nashik showing high attrition after 6 months',
    descriptionMr: 'नाशिकमधील ऑटोमोटिव्ह प्रशिक्षणार्थींमध्ये ६ महिन्यांनंतर उच्च गळती',
    date: '12 Sep 2025',
    dateMr: '१२ सप्टें २०२५',
    badgeBg: 'bg-[#FEE4E2]',
    badgeText: 'text-[#B42318]',
    badgeBorder: 'border-[#FECDCA]',
    icon: Flame,
  },
  {
    id: '2',
    badge: 'Low Verification',
    badgeMr: 'कमी पडताळणी',
    description: '3 providers with low employment verification rate (< 50%)',
    descriptionMr: '३ संस्थांमध्ये कमी रोजगार पडताळणी दर (< ५०%)',
    date: '11 Sep 2025',
    dateMr: '११ सप्टें २०२५',
    badgeBg: 'bg-[#FEF0C7]',
    badgeText: 'text-[#B54708]',
    badgeBorder: 'border-[#FEDF89]',
    icon: AlertTriangle,
  },
  {
    id: '3',
    badge: 'Skill Gap',
    badgeMr: 'कौशल्य तूट',
    description: 'High demand for Data Analytics in Pune, Nagpur, Nashik',
    descriptionMr: 'पुणे, नागपूर, नाशिकमध्ये डेटा अ‍ॅनालिटिक्सला उच्च मागणी',
    date: '10 Sep 2025',
    dateMr: '१० सप्टें २०२५',
    badgeBg: 'bg-[#FFEDD5]',
    badgeText: 'text-[#C2410C]',
    badgeBorder: 'border-[#FDBA74]',
    icon: Briefcase,
  },
  {
    id: '4',
    badge: 'Follow-up Pending',
    badgeMr: 'फॉलो-अप प्रलंबित',
    description: '12,430 graduates pending 6-month follow-up',
    descriptionMr: '१२,४३० पदवीधरांचे ६ महिन्यांचे फॉलो-अप प्रलंबित',
    date: '9 Sep 2025',
    dateMr: '९ सप्टें २०२५',
    badgeBg: 'bg-[#E0F2FE]',
    badgeText: 'text-[#0369A1]',
    badgeBorder: 'border-[#BAE6FD]',
    icon: Clock,
  },
];

export default function AlertsInterventionsCard() {
  const { isMarathi } = useLanguage();

  return (
    <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between select-none h-full min-h-0 overflow-hidden">
      
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 mb-1 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
          <h2 className="text-[13px] sm:text-[14px] font-bold text-[#8C3310] tracking-tight">
            {isMarathi ? 'अलीकडील सूचना व हस्तक्षेप' : 'Recent Alerts & Interventions'}
          </h2>
        </div>

        <a
          href="#alerts"
          className="text-[10.5px] font-semibold text-[#C2410C] hover:underline"
        >
          {isMarathi ? 'सर्व पहा →' : 'View All →'}
        </a>
      </div>

      {/* Alert List */}
      <div className="flex-1 flex flex-col justify-between py-0 min-h-0">
        {alertsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-1.5 text-[10.5px] py-0 hover:bg-[#FAF7F2] rounded px-0.5 transition-colors"
            >
              {/* Left Badge */}
              <div className="flex items-center gap-1 shrink-0">
                <span
                  className={`inline-flex items-center gap-1 px-1.5 py-0 rounded-full text-[9px] font-bold border ${item.badgeBg} ${item.badgeText} ${item.badgeBorder}`}
                >
                  <Icon size={10} strokeWidth={2.2} />
                  <span>{isMarathi ? item.badgeMr : item.badge}</span>
                </span>
              </div>

              {/* Middle Description */}
              <div className="flex-1 text-[10.5px] font-medium text-slate-600 truncate px-1">
                {isMarathi ? item.descriptionMr : item.description}
              </div>

              {/* Right Date */}
              <div className="text-[10px] font-medium text-slate-400 shrink-0">
                {isMarathi ? item.dateMr : item.date}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
