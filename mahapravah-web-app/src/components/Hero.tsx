import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Rocket, Play, Briefcase, Building2, TrendingUp, Users, BookOpen, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.10 } } };

const SkillIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    <path d="M5 13.18v4.82c0 1.66 3.13 3 7 3s7-1.34 7-3v-4.82l-7 3.82-7-3.82z" />
  </svg>
);

const EmployabilityIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.8l.8 1.6 1.8.25-1.3 1.25.3 1.8-1.6-.85-1.6.85.3-1.8-1.3-1.25 1.8-.25L12 1.8z" />
    <path d="M6.5 3.5l.6 1.2 1.35.2-.95.95.25 1.35-1.25-.65-1.25.65.25-1.35-.95-.95 1.35-.2.6-1.2z" />
    <path d="M17.5 3.5l.6 1.2 1.35.2-.95.95.25 1.35-1.25-.65-1.25.65.25-1.35-.95-.95 1.35-.2.6-1.2z" />
    <circle cx="12" cy="11.2" r="2.8" />
    <path d="M12 15.2c-3.5 0-6.2 1.8-6.5 3.8h13c-.3-2-3-3.8-6.5-3.8z" />
  </svg>
);

const CareerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 3.5h6a1.5 1.5 0 0 1 1.5 1.5V6H7.5V5A1.5 1.5 0 0 1 9 3.5z" />
    <rect x="3" y="6" width="18" height="14" rx="2.5" />
    <path d="M3 11.5h18v1H3z" fill="#F56600" />
    <rect x="10.5" y="10" width="3" height="4" rx="0.5" fill="currentColor" />
  </svg>
);

const InstitutionIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7h20L12 2z" />
    <rect x="4" y="8" width="16" height="1.5" />
    <rect x="5" y="10.5" width="2.5" height="7.5" />
    <rect x="10.75" y="10.5" width="2.5" height="7.5" />
    <rect x="16.5" y="10.5" width="2.5" height="7.5" />
    <path d="M3 19h18v1.5H3zM2 21h20v1.5H2z" />
  </svg>
);

const cardIcons = [
  <SkillIcon />,
  <EmployabilityIcon />,
  <CareerIcon />,
  <InstitutionIcon />,
  <TrendingUp size={28} strokeWidth={2.2} />,
];

const statIcons = [
  <Users size={20} strokeWidth={1.8} />,
  <Building2 size={20} strokeWidth={1.8} />,
  <BookOpen size={20} strokeWidth={1.8} />,
  <Briefcase size={20} strokeWidth={1.8} />,
  <Shield size={20} strokeWidth={1.8} />,
];

// Devanagari digit map
const DEVA = ['०','१','२','३','४','५','६','७','८','९'];
function toDevanagari(n: number): string {
  return String(n).replace(/\d/g, d => DEVA[+d]);
}

// Stat definitions for count-up
interface StatTarget {
  target: number;
  formatMarathi: (n: number) => string;
  formatEnglish: (n: number) => string;
}

const STAT_CONFIGS: StatTarget[] = [
  {
    target: 1000000,
    formatMarathi: (n: number) => `${toDevanagari(Math.round(n / 100000))} लाख+`,
    formatEnglish: (n: number) => `${Math.round(n / 100000)} L+`,
  },
  {
    target: 1000,
    formatMarathi: (n: number) => `${toDevanagari(n)}+`,
    formatEnglish: (n: number) => `${n}+`,
  },
  {
    target: 5000,
    formatMarathi: (n: number) => `${toDevanagari(n)}+`,
    formatEnglish: (n: number) => `${n}+`,
  },
  {
    target: 50000,
    formatMarathi: (n: number) => {
      const devaStr = String(n).split('').map(d => DEVA[+d]).join('');
      return (devaStr.length === 5 ? devaStr.slice(0, 2) + ',' + devaStr.slice(2) : devaStr) + '+';
    },
    formatEnglish: (n: number) => `${n.toLocaleString('en-IN')}+`,
  },
  {
    target: 1,
    formatMarathi: (n: number) => `${toDevanagari(n)} व्यासपीठ`,
    formatEnglish: (n: number) => `${n} Platform`,
  },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

function AnimatedStat({
  statIndex,
  active,
  isMarathi,
}: {
  statIndex: number;
  active: boolean;
  isMarathi: boolean;
}) {
  const config = STAT_CONFIGS[statIndex] || STAT_CONFIGS[0];
  const count = useCountUp(config.target, active);
  const display = isMarathi ? config.formatMarathi(count) : config.formatEnglish(count);

  return (
    <div
      style={{
        color: 'white',
        fontWeight: 800,
        fontSize: '19px',
        fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
        lineHeight: 1.2,
      }}
    >
      {display}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const { t, isMarathi } = useLanguage();

  return (
    <div id="home" ref={ref} className={isMarathi ? 'font-poppins' : ''}>

      {/* ═══════════════════════════════════════════════════
          HERO — full-viewport, image covers everything
          including behind the fixed navbar
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* ── Background Image fills 100% of viewport ── */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        {/* ── Left-only gradient for text readability — stops before students ── */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(95deg,' +
              'rgba(255,248,242,1.00)  0%,' +
              'rgba(255,248,242,1.00) 26%,' +
              'rgba(255,248,242,0.70) 36%,' +
              'rgba(255,248,242,0.00) 47%)',
          }}
        />

        {/* ── Subtle top gradient so navbar text is readable ── */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            zIndex: 2,
            background: 'linear-gradient(180deg, rgba(255,248,242,0.55) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Content ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1440px',
            margin: '0 auto',
            width: '100%',
            padding: '0 20px',
            paddingLeft: 'clamp(16px, 2.2vw, 36px)',
            paddingTop: '120px',
            paddingBottom: '80px',
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ maxWidth: '580px' }}
          >

            {/* ── Government of Maharashtra Initiative Badge (Brand Color Theme - Shifted Further Upwards) ── */}
            <motion.div variants={fadeUp} style={{ marginBottom: '24px', marginTop: '-34px' }}>
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border shadow-sm transition-all duration-200 hover:shadow-md select-none"
                style={{
                  background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF8F2 100%)',
                  borderColor: 'rgba(245, 102, 0, 0.35)',
                  borderWidth: '1.5px',
                  boxShadow: '0 2px 10px rgba(245, 102, 0, 0.10)',
                }}
              >
                {/* Government Building Icon in Platform Saffron/Orange */}
                <span className="text-[#F56600] flex items-center justify-center flex-shrink-0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7h20L12 2z M4 8v9h2.5V8H4zm5 0v9h2.5V8H9zm5 0v9h2.5V8H14zm5 0v9h2.5V8H19z M2 19h20v3H2v-3z" />
                  </svg>
                </span>

                {/* Text in Brand Theme */}
                <span
                  className={`text-xs sm:text-[13px] font-bold text-[#2C1A0E] tracking-wide ${
                    isMarathi ? 'font-poppins' : 'font-display'
                  }`}
                >
                  {t.common.govtInitiative}
                </span>
              </div>
            </motion.div>

            {/* ── Headline ── */}
            <motion.div variants={fadeUp}>
              <h1
                className={isMarathi ? 'devanagari-text font-poppins' : 'font-display'}
                style={{
                  fontSize: 'clamp(1.6rem, 2.7vw, 2.85rem)',
                  fontWeight: 900,
                  lineHeight: isMarathi ? 1.34 : 1.2,
                  backgroundImage: 'linear-gradient(135deg, #1C120A 0%, #3D1F0A 40%, #7A3210 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  margin: 0,
                  marginTop: isMarathi ? '-0.06em' : 0,
                  marginBottom: isMarathi ? '-0.06em' : 0,
                  paddingTop: isMarathi ? '4px' : 0,
                  paddingBottom: isMarathi ? '2px' : 0,
                  paddingLeft: '2px',
                  paddingRight: '6px',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.hero.marathiHeadlineLine1}
              </h1>
              <h1
                className={isMarathi ? 'devanagari-text font-poppins' : 'font-display'}
                style={{
                  fontSize: 'clamp(1.6rem, 2.7vw, 2.85rem)',
                  fontWeight: 900,
                  lineHeight: isMarathi ? 1.34 : 1.2,
                  backgroundImage: 'linear-gradient(135deg, #FF5500 0%, #F56600 40%, #D94E00 75%, #B83A00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  margin: 0,
                  marginBottom: '16px',
                  paddingTop: isMarathi ? '4px' : 0,
                  paddingBottom: isMarathi ? '2px' : 0,
                  paddingLeft: '2px',
                  paddingRight: '6px',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.hero.marathiHeadlineLine2}
              </h1>
            </motion.div>

            {/* ── Orange accent line ── */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  width: '54px',
                  height: '4px',
                  background: '#F56600',
                  borderRadius: '9999px',
                  marginBottom: '20px',
                }}
              />
            </motion.div>

            {/* ── Description ── */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.72,
                color: '#3D2010',
                marginBottom: '32px',
                maxWidth: '430px',
              }}
            >
              {t.hero.description}{' '}
              <strong style={{ fontWeight: 700 }}>{t.hero.descriptionHighlight}</strong>
            </motion.p>

            {/* ── CTA Buttons ── */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}
            >
              {/* Get Started */}
              <a
                href="#explore"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #F56600 0%, #D94E00 100%)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '15px',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(245,102,0,0.45)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(245,102,0,0.55)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(245,102,0,0.45)';
                }}
              >
                <Rocket size={16} />
                {t.hero.getStarted}
              </a>

              {/* Watch Video */}
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  border: '2px solid #2C1A0E',
                  background: 'rgba(255,255,255,0.90)',
                  color: '#2C1A0E',
                  fontWeight: 700,
                  fontSize: '15px',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(44,26,14,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'rgba(44,26,14,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Play size={10} fill="#2C1A0E" color="#2C1A0E" />
                </span>
                {t.hero.watchVideo}
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION BELOW HERO: Starts at hero end with hero-stats-bg.png
      ═══════════════════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundImage: 'url(/hero-stats-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#FFF8F2',
          borderTop: '1px solid transparent',
          zIndex: 20,
        }}
      >
        {/* ═══════════════════════════════════════════════════
            FEATURE CARDS — floating card strip:
            Pulls up -72px so top half sits in hero image,
            bottom half sits in background image below.
        ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(16px, 2.2vw, 36px)',
            marginTop: '-72px',
            position: 'relative',
            zIndex: 20,
          }}
        >
          {/* Outer Warm-Orange Container — platform theme */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FFF5EE 0%, #FFF0E6 100%)',
              borderRadius: '12px',
              padding: '14px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
              border: '1px solid rgba(200,140,80,0.20)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '12px',
              }}
              className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            >
              {t.hero.cards.map((card, i) => {
                const isDark = i % 2 === 1;
                const badgeGradient = isDark
                  ? 'linear-gradient(135deg, #4A2414 0%, #3D1F0A 100%)'
                  : 'linear-gradient(135deg, #FF6B00 0%, #F56600 50%, #D95500 100%)';
                const badgeShadow = '0 2px 6px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.10)';

                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '26px 14px',
                      borderRadius: '8px',
                      background: 'linear-gradient(145deg, #FFFAF6 0%, #FFF5EE 100%)',
                      border: '1px solid rgba(200,140,80,0.18)',
                      cursor: 'pointer',
                      transition: 'all 0.22s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'linear-gradient(145deg, #FFF7F0 0%, #FFEEDD 100%)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,140,80,0.35)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'linear-gradient(145deg, #FFFAF6 0%, #FFF5EE 100%)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,140,80,0.18)';
                    }}
                  >
                    {/* Circular badge — Platform Orange/Brown Theme with White Ring Border */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: badgeGradient,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        flexShrink: 0,
                        border: '3px solid #FFFFFF',
                        boxShadow: badgeShadow,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }}
                    >
                      {cardIcons[i]}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '16.5px',
                        fontWeight: 700,
                        color: '#1C1917',
                        fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      style={{
                        fontSize: '12.5px',
                        color: '#525252',
                        fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                        lineHeight: 1.55,
                        margin: 0,
                        maxWidth: '210px',
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            STATS SECTION HEADING
        ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            textAlign: 'center',
            padding: '0 clamp(16px, 2.2vw, 36px)',
            marginTop: '48px',
            marginBottom: '16px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <p className="section-label mb-3">
            MAHARASHTRA'S SKILL IMPACT
          </p>
          <p className="section-subtitle">
            Numbers that demonstrate the transformation of youth across Maharashtra
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            STATS BAR — dark brown
        ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ background: 'transparent', marginTop: '0', marginBottom: '28px' }}
        >
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(16px, 2.2vw, 36px)',
          }}>
          <div
            style={{
              background: '#3D1F0A',
              borderRadius: '12px',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              boxShadow: '0 8px 30px rgba(61, 31, 10, 0.18)',
            }}
            className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          >
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 16px',
                  justifyContent: 'center',
                  borderRight: i < t.hero.stats.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                }}
              >
                <div style={{ color: '#F56600', flexShrink: 0 }}>{statIcons[i]}</div>
                <div>
                  <AnimatedStat statIndex={i} active={inView} isMarathi={isMarathi} />
                  <div
                    style={{
                      color: 'rgba(255,215,185,0.80)',
                      fontSize: '12px',
                      fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                      lineHeight: 1.3,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            TAGLINE
        ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            background: 'rgba(255, 248, 242, 0.75)',
            backdropFilter: 'blur(6px)',
            padding: '16px 24px',
            textAlign: 'center',
            borderTop: '1px solid rgba(107,53,27,0.08)',
            borderBottom: '1px solid rgba(107,53,27,0.08)',
          }}
        >
          <p
            className={isMarathi ? 'font-poppins' : 'devanagari-text'}
            style={{
              color: '#8B4513',
              fontWeight: 600,
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              margin: 0,
              fontFamily: isMarathi ? 'Poppins, sans-serif' : undefined,
            }}
          >
            {t.hero.tagline}
          </p>
        </motion.div>

      </div>

    </div>
  );
}
