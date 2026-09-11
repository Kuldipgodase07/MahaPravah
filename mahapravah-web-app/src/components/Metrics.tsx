import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { Users, Building2, Briefcase, BookOpen, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MetricItem {
  icon: React.ElementType;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
}

function useCounter(target: number, suffix: string, isActive: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isActive, target, duration]);

  return `${count}${suffix}`;
}

function MetricCard({ metric, isActive, isMarathi }: { metric: MetricItem; isActive: boolean; isMarathi: boolean }) {
  const displayValue = useCounter(metric.numericValue, metric.suffix, isActive);

  return (
    <div className={`flex flex-col items-center text-center py-6 px-4 ${isMarathi ? 'font-poppins' : ''}`}>
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ background: 'rgba(245,102,0,0.12)' }}
      >
        <metric.icon size={24} style={{ color: '#F56600' }} />
      </div>
      <div
        className="text-3xl md:text-4xl font-bold mb-1"
        style={{ color: '#F56600', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, Inter, sans-serif' }}
      >
        {displayValue}
      </div>
      <div
        className="text-sm font-semibold mb-1"
        style={{ color: '#1C1917', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
      >
        {metric.label}
      </div>
      <div className="text-xs text-stone-500">{metric.sublabel}</div>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  const metrics: MetricItem[] = [
    { icon: Users, value: '10L+', numericValue: 10, suffix: isMarathi ? ' लाख+' : 'L+', label: t.metrics.students, sublabel: t.metrics.studentsSub },
    { icon: Building2, value: '1000+', numericValue: 1000, suffix: '+', label: t.metrics.institutions, sublabel: t.metrics.institutionsSub },
    { icon: Briefcase, value: '50K+', numericValue: 50, suffix: isMarathi ? ' हजार+' : 'K+', label: t.metrics.opportunities, sublabel: t.metrics.opportunitiesSub },
    { icon: BookOpen, value: '5000+', numericValue: 5000, suffix: '+', label: t.metrics.courses, sublabel: t.metrics.coursesSub },
    { icon: Shield, value: '1', numericValue: 1, suffix: '', label: t.metrics.unifiedPlatform, sublabel: t.metrics.unifiedPlatformSub },
  ];

  return (
    <section id="impact" className={`py-12 md:py-16 ${isMarathi ? 'font-poppins' : ''}`} ref={ref}>
      {/* Top stats strip - white card style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="section-label">{t.metrics.title}</p>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">{t.metrics.subtitle}</p>
        </div>

        <div
          className="rounded-2xl border bg-white shadow-premium overflow-hidden"
          style={{ borderColor: 'rgba(107,53,27,0.10)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0"
            style={{ '--tw-divide-opacity': '0.12' } as React.CSSProperties}
          >
            {metrics.map((metric, i) => (
              <MetricCard key={i} metric={metric} isActive={inView} isMarathi={isMarathi} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
