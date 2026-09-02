import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Lightbulb, MapPin, BarChart3, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Intelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  const insights = [
    {
      icon: TrendingUp,
      label: isMarathi ? 'कौशल्य ट्रेंड्स' : 'Skill Trends',
      desc: isMarathi ? 'उद्योग जगतातील वाढत्या कौशल्यांचे रिअल-टाइम विश्लेषण' : 'Real-time tracking of in-demand skills across Maharashtra industries',
      value: '+२४%',
      change: isMarathi ? 'तांत्रिक कौशल्यांमध्ये वाढ' : 'growth in tech skills',
    },
    {
      icon: Lightbulb,
      label: isMarathi ? 'स्मार्ट जुळवणी' : 'Opportunity Insights',
      desc: isMarathi ? 'नागरिकांच्या क्षमतेनुसार AI-आधारित योग्य नोकरी शिफारसी' : 'AI-powered matching of citizens to relevant opportunities',
      value: '८७%',
      change: isMarathi ? 'अचूक जुळवणी दर' : 'match accuracy',
    },
    {
      icon: BarChart3,
      label: isMarathi ? 'करिअर प्रगती' : 'Career Growth',
      desc: isMarathi ? 'डेटा-आधारित करिअर नियोजन आणि ध्येयपूर्ती ट्रॅकिंग' : 'Data-driven career trajectory planning and progression tracking',
      value: '३.२x',
      change: isMarathi ? 'जलद करिअर वृद्धी' : 'faster career growth',
    },
    {
      icon: MapPin,
      label: isMarathi ? 'जिल्हास्तरीय डेटा' : 'Regional Intelligence',
      desc: isMarathi ? '३६ जिल्ह्यांतील स्थानिक कौशल्य गरजा आणि रोजगार मॅपिंग' : 'District-wise skill gaps and opportunity mapping across Maharashtra',
      value: '३६',
      change: isMarathi ? 'जिल्हे समाविष्ट' : 'districts covered',
    },
  ];

  return (
    <section className={`py-20 md:py-28 relative overflow-hidden ${isMarathi ? 'font-poppins' : ''}`} style={{ background: '#3A1A0E' }} ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F56600 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
        />
        {/* Grid dots */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ color: '#F56600' }}>
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#F56600', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
            >
              {t.intelligence.sectionLabel}
            </p>

            <h2
              className={`text-3xl md:text-4xl font-bold mb-3 text-white ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
            >
              {isMarathi ? 'आमचा प्रभाव, तुमचा विकास!' : 'Our Impact, Your Growth!'}
            </h2>

            <h2
              className="text-2xl md:text-3xl font-bold mb-5"
              style={{ color: 'white', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
            >
              {t.intelligence.titleLine1}
              <br />
              <span style={{ color: '#F56600' }}>{t.intelligence.titleLine2}</span>
            </h2>

            <div className="w-10 h-1 rounded-full mb-5" style={{ background: '#F56600' }} />

            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.70)' }}>
              {t.intelligence.desc}
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {[t.intelligence.tag1, t.intelligence.tag2, t.intelligence.tag3].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={17} style={{ color: '#F56600' }} />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: 'linear-gradient(135deg, #F56600, #EA580C)' }}
            >
              {t.common.explorePlatform} →
            </a>
          </motion.div>

          {/* Right: Insight cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {insights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl border"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(245,102,0,0.20)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(245,102,0,0.15)', color: '#F56600' }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="text-xl font-black" style={{ color: '#F56600' }}>
                      {item.value}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1" style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}>
                    {item.label}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <span className="text-[11px] font-semibold text-saffron-300">
                    ✦ {item.change}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
