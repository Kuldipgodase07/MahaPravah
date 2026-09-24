import React from 'react';
import { Users, Briefcase, ShieldCheck, BarChart3, Coins, Database } from 'lucide-react';
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
    valueMr: '12.4 लाख',
    trend: '↑ 12%',
    trendMr: '↑ 12%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: Users,
  },
  {
    id: 'employment-rate',
    label: 'Employment Rate',
    labelMr: 'रोजगार दर',
    value: '68.4%',
    valueMr: '68.4%',
    trend: '↑ 6.2%',
    trendMr: '↑ 6.2%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: Briefcase,
  },
  {
    id: 'verified-employment',
    label: 'Verified Employment',
    labelMr: 'सत्यापित रोजगार',
    value: '54.8%',
    valueMr: '54.8%',
    trend: '↑ 8.1%',
    trendMr: '↑ 8.1%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: ShieldCheck,
  },
  {
    id: 'retention',
    label: '12-Month Retention',
    labelMr: '12-महिने टिकून राहणे',
    value: '72.1%',
    valueMr: '72.1%',
    trend: '↑ 5.6%',
    trendMr: '↑ 5.6%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: BarChart3,
  },
  {
    id: 'wage-growth',
    label: 'Median Wage Growth',
    labelMr: 'सरासरी वेतन वाढ',
    value: '+18.6%',
    valueMr: '+18.6%',
    trend: '↑ 4.3%',
    trendMr: '↑ 4.3%',
    subtext: 'vs last year',
    subtextMr: 'मागील वर्षाच्या तुलनेत',
    icon: Coins,
  },
  {
    id: 'coverage',
    label: 'Outcome Data Coverage',
    labelMr: 'डेटा व्याप्ती',
    value: '81.4%',
    valueMr: '81.4%',
    trend: '↑ 9.3%',
    trendMr: '↑ 9.3%',
    subtext: 'vs 2024',
    subtextMr: '2024 च्या तुलनेत',
    icon: Database,
  },
];

export default function DashboardMetricsGrid() {
  const { isMarathi } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 shrink-0">
      {metricsData.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="bg-white/95 backdrop-blur-xs rounded-xl p-3.5 border border-[#DFC7B2]/70 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500 line-clamp-1">
                {isMarathi ? item.labelMr : item.label}
              </span>
              <div className="p-1.5 rounded-lg bg-orange-100/70 text-[#C0392B]">
                <Icon size={16} />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tracking-tight">
                {isMarathi ? item.valueMr : item.value}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs">
                <span className="text-emerald-600 font-semibold">
                  {isMarathi ? item.trendMr : item.trend}
                </span>
                <span className="text-slate-400 text-[10px]">
                  {isMarathi ? item.subtextMr : item.subtext}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
