import { Users, Briefcase, ShieldCheck, BarChart3, Coins, Database, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MetricItem {
  id: string;
  label: string;
  labelMr: string;
  value: string;
  valueMr: string;
  trend: string;
  trendMr: string;
  subtext: string;
  subtextMr: string;
  icon: React.ElementType;
}

const metricsData: MetricItem[] = [
  {
    id: 'trainees',
    label: 'Total Trainees',
    labelMr: 'एकूण प्रशिक्षणार्थी',
    value: '12.4 Lakh',
    valueMr: '१२.४ लाख',
    trend: '12%',
    trendMr: '१२%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: Users,
  },
  {
    id: 'employment-rate',
    label: 'Employment Rate',
    labelMr: 'रोजगार दर',
    value: '68.4%',
    valueMr: '६८.४%',
    trend: '6.2%',
    trendMr: '६.२%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: Briefcase,
  },
  {
    id: 'verified-employment',
    label: 'Verified Employment',
    labelMr: 'सत्यापित रोजगार',
    value: '54.8%',
    valueMr: '५४.८%',
    trend: '8.1%',
    trendMr: '८.१%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: ShieldCheck,
  },
  {
    id: 'retention',
    label: '12-Month Retention',
    labelMr: '१२-महिने टिकून राहणे',
    value: '72.1%',
    valueMr: '७२.१%',
    trend: '5.6%',
    trendMr: '५.६%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: BarChart3,
  },
  {
    id: 'wage-growth',
    label: 'Median Wage Growth',
    labelMr: 'सरासरी वेतन वाढ',
    value: '+18.6%',
    valueMr: '+१८.६%',
    trend: '4.3%',
    trendMr: '४.३%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: Coins,
  },
  {
    id: 'coverage',
    label: 'Outcome Data Coverage',
    labelMr: 'डेटा व्याप्ती',
    value: '81.4%',
    valueMr: '८१.४%',
    trend: '9.3%',
    trendMr: '९.३%',
    subtext: 'vs 2024',
    subtextMr: '२०२४ च्या तुलनेत',
    icon: Database,
  },
];

export default function DashboardMetricsGrid() {
  const { isMarathi } = useLanguage();

  const renderCard = (item: MetricItem) => {
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className="bg-white rounded-xl p-2 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between h-[60px] sm:h-[62px] hover:shadow-xs transition-shadow min-w-0"
      >
        {/* Top: Circular Icon Badge + Label */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-6 h-6 rounded-full bg-[#FFF0E6] text-[#D95B00] flex items-center justify-center shrink-0">
            <Icon size={13} strokeWidth={2.2} />
          </div>
          <span className="text-[11px] font-medium text-slate-600 leading-tight truncate">
            {isMarathi ? item.labelMr : item.label}
          </span>
        </div>

        {/* Bottom: Left Trend + Right Value */}
        <div className="flex items-end justify-between gap-1 min-w-0">
          <div className="flex flex-col leading-none shrink-0">
            <span className="inline-flex items-center text-[10px] font-bold text-emerald-600">
              <TrendingUp size={10} className="mr-0.5 shrink-0" /> {isMarathi ? item.trendMr : item.trend}
            </span>
            <span className="text-[9px] text-slate-400 font-normal mt-0.5 whitespace-nowrap">
              {isMarathi ? item.subtextMr : item.subtext}
            </span>
          </div>
          <span className="text-[16px] xl:text-[18px] font-bold text-slate-900 whitespace-nowrap tracking-tight leading-none text-right shrink-0">
            {isMarathi ? item.valueMr : item.value}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-1.5 select-none shrink-0">
      {/* ── Pair 1: Total Trainees & Employment Rate ── */}
      <div className="grid grid-cols-2 gap-2">
        {renderCard(metricsData[0])}
        {renderCard(metricsData[1])}
      </div>

      {/* ── Pair 2: Verified Employment & 12-Month Retention ── */}
      <div className="grid grid-cols-2 gap-2">
        {renderCard(metricsData[2])}
        {renderCard(metricsData[3])}
      </div>

      {/* ── Pair 3: Median Wage Growth & Outcome Data Coverage ── */}
      <div className="grid grid-cols-2 gap-2">
        {renderCard(metricsData[4])}
        {renderCard(metricsData[5])}
      </div>
    </div>
  );
}
