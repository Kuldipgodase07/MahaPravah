import { TrendingUp, ShieldCheck, Users, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ImpactAnalyticsTab() {
  const { isMarathi } = useLanguage();

  const kpis = [
    {
      title: isMarathi ? 'उत्पन्न वाढ' : 'Income Increase',
      value: '+38%',
      icon: TrendingUp,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'दारिद्र्य निर्मूलन' : 'Poverty Reduction',
      value: '12.6%',
      icon: ShieldCheck,
      color: '#C2410C',
      bg: '#FFEDD5',
    },
    {
      title: isMarathi ? 'महिला रोजगार' : 'Women Employment',
      value: '41.2%',
      icon: Users,
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      title: isMarathi ? 'ग्रामीण रोजगार' : 'Rural Employment',
      value: '36.8%',
      icon: MapPin,
      color: '#D97706',
      bg: '#FEF3C7',
    },
  ];

  const socialMetrics = [
    {
      count: '12.4 Lakh',
      label: isMarathi ? 'प्रभावित जीवन' : 'Lives Impacted',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-700',
    },
    {
      count: '4.8 Lakh',
      label: isMarathi ? 'सक्षम महिला' : 'Women Empowered',
      color: 'bg-amber-500',
      textColor: 'text-amber-700',
    },
    {
      count: '3.2 Lakh',
      label: isMarathi ? 'ग्रामीण युवक' : 'Rural Youth',
      color: 'bg-orange-600',
      textColor: 'text-orange-700',
    },
    {
      count: '36,200',
      label: isMarathi ? 'दिव्यांग लाभार्थी' : 'Divyang Beneficiaries',
      color: 'bg-rose-500',
      textColor: 'text-rose-700',
    },
  ];

  const stories = [
    {
      name: isMarathi ? 'ऋतुजा पाटील' : 'Rutuja Patil',
      role: isMarathi ? 'डेटा ॲनालिस्ट, टीसीएस' : 'Data Analyst, TCS',
      location: isMarathi ? 'पुणे' : 'Pune',
      quote: isMarathi
        ? 'प्रशिक्षणार्थी ते टीसीएसमध्ये डेटा ॲनालिस्ट. यामुळे माझे आयुष्य पूर्णपणे बदलले आहे.'
        : 'From trainee to data analyst at TCS. My life has changed completely.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: isMarathi ? 'सागर जाधव' : 'Sagar Jadhav',
      role: isMarathi ? 'ईव्ही तंत्रज्ञ, टाटा मोटर्स' : 'EV Technician, Tata Motors',
      location: isMarathi ? 'नाशिक' : 'Nashik',
      quote: isMarathi
        ? 'ईव्ही तंत्रज्ञ अभ्यासक्रम पूर्ण केला आणि आता टाटा मोटर्समध्ये कार्यरत आहे.'
        : 'Completed EV technician course and now working at Tata Motors.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'प्रभाव विश्लेषण' : 'Impact Analytics'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'कौशल्य उपक्रमांचा दीर्घकालीन प्रभाव मोजा.'
            : 'Measure the long-term impact of skilling initiatives.'}
        </p>
      </div>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 mb-2.5">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#F1E5D8] px-3 py-2 sm:py-2.5 shadow-2xs flex items-center gap-3 transition-all hover:shadow-xs"
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: kpi.bg, color: kpi.color }}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10.5px] font-medium text-slate-500 block truncate">
                  {kpi.title}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 leading-none mt-0.5 block">
                  {kpi.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Analytics Row: 3 Proportional Cards */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-2.5 min-h-0">
        {/* Col 1: Income Growth Trend (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between min-h-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800">
              {isMarathi ? 'उत्पन्न वाढ कल' : 'Income Growth Trend'}
            </h3>
            <div className="flex items-center gap-2 text-[10px]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#78350F]" />
                <span className="text-slate-500">Pre-Training</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span className="text-slate-500">Post-Training</span>
              </div>
            </div>
          </div>

          <div className="relative h-44 my-auto pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 320 120">
              {/* Grid Lines */}
              <line x1="30" y1="20" x2="310" y2="20" stroke="#F1E5D8" strokeDasharray="3 3" />
              <line x1="30" y1="50" x2="310" y2="50" stroke="#F1E5D8" strokeDasharray="3 3" />
              <line x1="30" y1="80" x2="310" y2="80" stroke="#F1E5D8" strokeDasharray="3 3" />
              <line x1="30" y1="110" x2="310" y2="110" stroke="#F1E5D8" />

              {/* Y Axis Labels */}
              <text x="5" y="24" fontSize="9" fill="#94A3B8">40K</text>
              <text x="5" y="54" fontSize="9" fill="#94A3B8">30K</text>
              <text x="5" y="84" fontSize="9" fill="#94A3B8">20K</text>
              <text x="5" y="113" fontSize="9" fill="#94A3B8">10K</text>

              {/* Post-Training Line (Orange) */}
              <polyline
                fill="none"
                stroke="#EA580C"
                strokeWidth="2.5"
                points="45,105 110,85 175,68 240,48 305,25"
              />
              {[
                [45, 105], [110, 85], [175, 68], [240, 48], [305, 25],
              ].map(([cx, cy], i) => (
                <circle key={`post-${i}`} cx={cx} cy={cy} r="3" fill="#EA580C" />
              ))}

              {/* Pre-Training Line (Brown) */}
              <polyline
                fill="none"
                stroke="#78350F"
                strokeWidth="2.5"
                points="45,110 110,102 175,92 240,78 305,65"
              />
              {[
                [45, 110], [110, 102], [175, 92], [240, 78], [305, 65],
              ].map(([cx, cy], i) => (
                <circle key={`pre-${i}`} cx={cx} cy={cy} r="3" fill="#78350F" />
              ))}
            </svg>
            <div className="flex justify-between pl-8 pr-2 text-[9px] text-slate-400 mt-1 font-medium">
              <span>0</span><span>6M</span><span>12M</span><span>18M</span><span>24M</span>
            </div>
          </div>
        </div>

        {/* Col 2: Social Impact (3.5 cols) */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between min-h-0">
          <h3 className="text-xs font-bold text-slate-800 mb-1">
            {isMarathi ? 'सामाजिक प्रभाव' : 'Social Impact'}
          </h3>

          <div className="space-y-2.5 my-auto">
            {socialMetrics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 rounded-lg bg-[#FAF7F2]/80 border border-[#F1E5D8]"
              >
                <div className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    {item.count}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block truncate">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Impact Stories (3.5 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col justify-between min-h-0">
          <h3 className="text-xs font-bold text-slate-800 mb-1">
            {isMarathi ? 'प्रभाव यशोगाथा' : 'Impact Stories'}
          </h3>

          <div className="space-y-2.5 my-auto">
            {stories.map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-[#FAF7F2]/90 border border-[#F1E5D8] flex gap-2.5 text-xs"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#EADCCF]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-xs">{s.name}</span>
                    <span className="text-[9.5px] text-slate-400">{s.location}</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 italic mt-0.5 line-clamp-2">
                    "{s.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#more-stories"
            className="text-xs font-semibold text-[#C2410C] hover:underline flex items-center justify-end gap-1 mt-1 cursor-pointer"
          >
            {isMarathi ? 'अधिक कथा पहा' : 'View More Stories'} <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
