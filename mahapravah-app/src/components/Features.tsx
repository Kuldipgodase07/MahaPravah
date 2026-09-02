import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UserCircle, Search, Brain, Route,
  BarChart2, Globe, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const featureIcons = [UserCircle, Search, Brain, Route, BarChart2, Globe];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  return (
    <section id="features" className={`py-20 md:py-28 bg-white ${isMarathi ? 'font-poppins' : ''}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">{t.features.sectionLabel}</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#1C1917', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
          >
            {t.features.titleLine1}<br />
            <span style={{ color: '#F56600' }}>{t.features.titleLine2}</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-12 h-1 rounded-full" style={{ background: '#F56600' }} />
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border bg-white hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: 'rgba(107,53,27,0.10)' }}
              >
                {/* Tag */}
                <div
                  className="absolute top-4 right-4 text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(245,102,0,0.08)',
                    color: '#F56600',
                    fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  }}
                >
                  {feature.tag}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, rgba(245,102,0,0.10), rgba(249,115,22,0.14))' }}
                >
                  <Icon size={22} style={{ color: '#F56600' }} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: '#4A2414', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-500 leading-relaxed mb-4">
                  {feature.desc}
                </p>

                {/* Learn more */}
                <div
                  className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#F56600' }}
                >
                  {t.common.readMore} <ArrowRight size={12} />
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #F56600, #EA580C)' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
