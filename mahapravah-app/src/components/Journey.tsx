import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserPlus, BookOpen, Target, Briefcase, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stepIcons = [UserPlus, BookOpen, Target, Briefcase, TrendingUp];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  return (
    <section id="vision" className={`py-20 md:py-28 ${isMarathi ? 'font-poppins' : ''}`} style={{ background: '#FDFCFB' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">{t.journey.sectionLabel}</p>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
            style={{ color: '#1C1917' }}
          >
            {t.journey.title}
          </h2>
          <p
            className="text-lg md:text-xl font-semibold"
            style={{ color: '#4A2414', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
          >
            {t.journey.subtitlePart1}{' '}
            <span style={{ color: '#F56600' }}>{t.journey.subtitlePart2}</span>
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-12 h-1 rounded-full" style={{ background: '#F56600' }} />
          </div>
        </motion.div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div className="absolute top-10 left-16 right-16 h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, rgba(245,102,0,0.15), #F56600, rgba(245,102,0,0.15))' }}
          >
            {/* Animated flow dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ background: '#F56600', boxShadow: '0 0 8px rgba(245,102,0,0.5)' }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-0 relative z-10">
            {t.journey.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center px-3"
                >
                  {/* Icon circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 relative z-10 hover:scale-105 transition-transform duration-200"
                    style={{
                      background: i === 2 ? 'linear-gradient(135deg, #F56600, #EA580C)' : 'white',
                      borderColor: i === 2 ? '#F56600' : 'rgba(245,102,0,0.25)',
                      boxShadow: i === 2 ? '0 4px 16px rgba(245,102,0,0.25)' : '0 2px 8px rgba(107,53,27,0.08)',
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: i === 2 ? 'white' : '#F56600' }}
                    />
                  </div>

                  {/* Step number */}
                  <div
                    className="text-xs font-bold mb-1"
                    style={{ color: '#F56600', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <div
                    className="text-sm font-bold mb-1"
                    style={{ color: '#4A2414', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
                  >
                    {step.title}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-0">
          {t.journey.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 pb-8 relative"
              >
                {/* Vertical connector */}
                {i < t.journey.steps.length - 1 && (
                  <div
                    className="absolute left-8 top-16 bottom-0 w-0.5"
                    style={{ background: 'linear-gradient(180deg, #F56600, rgba(245,102,0,0.2))' }}
                  />
                )}

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    background: i === 2 ? 'linear-gradient(135deg, #F56600, #EA580C)' : 'white',
                    borderColor: 'rgba(245,102,0,0.25)',
                    boxShadow: '0 2px 8px rgba(107,53,27,0.08)',
                  }}
                >
                  <Icon size={22} style={{ color: i === 2 ? 'white' : '#F56600' }} />
                </div>

                <div className="flex-1 pt-2">
                  <div
                    className="text-xs font-bold text-saffron-600 mb-0.5"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
                  >
                    {step.number}. {step.title}
                  </div>
                  <p className="text-xs text-stone-500">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
