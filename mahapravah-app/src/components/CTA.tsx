import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  return (
    <section className={`relative overflow-hidden ${isMarathi ? 'font-poppins' : ''}`} ref={ref}>
      {/* Newsletter & Map Section */}
      <div className="py-14" style={{ background: '#FFF9F3', borderTop: '1px solid rgba(245,102,0,0.12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Newsletter */}
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,102,0,0.12), rgba(249,115,22,0.15))' }}
              >
                <span className="text-2xl">✉</span>
              </div>
              <div>
                <h3
                  className={`text-lg font-bold mb-1 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
                  style={{ color: '#1C1917' }}
                >
                  {t.cta.newsletterTitle1}
                </h3>
                <h3
                  className={`text-base font-bold mb-2 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
                  style={{ color: '#F56600' }}
                >
                  {t.cta.newsletterTitle2}
                </h3>
                <p className="text-xs text-stone-500">{t.cta.newsletterSub}</p>
              </div>
            </div>

            {/* Email input */}
            <div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t.common.enterEmail}
                  className="flex-1 px-4 py-2.5 rounded-lg border text-sm outline-none focus:border-saffron-500 transition-colors"
                  style={{ borderColor: 'rgba(107,53,27,0.15)', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                />
                <button
                  className="px-4 py-2.5 rounded-lg text-white text-sm font-semibold whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #F56600, #EA580C)', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                >
                  {t.common.subscribe}
                </button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-xs text-stone-500">{t.common.followUs}</span>
                {['f', 'X', 'in', '📷', '▶'].map((icon, i) => (
                  <button
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs border hover:border-saffron-500 transition-colors"
                    style={{ borderColor: 'rgba(107,53,27,0.15)', color: '#6B351B' }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Maharashtra map with city dots */}
            <div className="text-right">
              <p
                className={`text-sm font-semibold mb-3 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
                style={{ color: '#4A2414' }}
              >
                {isMarathi ? 'महाराष्ट्राच्या प्रत्येक जिल्ह्यात,' : 'In Every District of Maharashtra,'}<br />
                <span style={{ color: '#F56600' }}>{isMarathi ? 'महाप्रवाह तुमच्या सोबत!' : 'MahaPravah is with You!'}</span>
              </p>
              <svg viewBox="0 0 200 160" className="w-40 h-28 ml-auto" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20,50 L30,35 L50,28 L80,22 L110,18 L135,22 L155,33 L168,48 L172,65 L168,82 L158,98 L142,110 L120,118 L98,122 L76,118 L55,108 L37,95 L24,78 L18,62 Z"
                  fill="rgba(245,102,0,0.10)"
                  stroke="rgba(245,102,0,0.35)"
                  strokeWidth="1.5"
                />
                {[
                  { x: 38, y: 95, label: isMarathi ? 'मुंबई' : 'Mumbai' },
                  { x: 80, y: 55, label: isMarathi ? 'नाशिक' : 'Nashik' },
                  { x: 110, y: 80, label: isMarathi ? 'छ. संभाजीनगर' : 'Chh. Sambhajinagar' },
                  { x: 72, y: 95, label: isMarathi ? 'पुणे' : 'Pune' },
                  { x: 135, y: 100, label: isMarathi ? 'सोलापूर' : 'Solapur' },
                  { x: 40, y: 70, label: isMarathi ? 'कोल्हापूर' : 'Kolhapur' },
                ].map((city, i) => (
                  <g key={i}>
                    <circle cx={city.x} cy={city.y} r="3" fill="#F56600" opacity="0.7" />
                    <text x={city.x + 5} y={city.y + 3} fontSize="7" fill="rgba(107,53,27,0.6)" fontFamily={isMarathi ? 'Poppins, sans-serif' : 'Inter'}>{city.label}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main CTA Banner */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F56600 0%, #EA580C 60%, #C2410C 100%)' }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-2 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
            >
              {t.cta.readyTitle}
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t.cta.readySub}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white font-semibold text-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ color: '#F56600', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
              >
                {t.cta.buttonText} <ArrowRight size={16} />
              </a>
              <a
                href="#explore"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-all duration-200"
                style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
              >
                {t.common.explorePlatform} <ArrowRight size={16} />
              </a>
            </div>

            {/* App Download */}
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                {isMarathi ? 'MahaPravah मोबाईल ॲप डाउनलोड करा' : 'Download the MahaPravah App'}
              </p>
              <div className="flex gap-3 justify-center">
                {[
                  { label: 'GET IT ON', store: 'Google Play', icon: '▶' },
                  { label: 'Download on the', store: 'App Store', icon: '🍎' },
                ].map((app, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 hover:border-white transition-all duration-200"
                    style={{ background: 'rgba(0,0,0,0.20)' }}
                  >
                    <span className="text-white text-sm">{app.icon}</span>
                    <div className="text-left">
                      <div className="text-white/70 text-xs">{app.label}</div>
                      <div className="text-white text-xs font-semibold">{app.store}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
