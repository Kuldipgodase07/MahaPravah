import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Rocket, Play, GraduationCap, Briefcase, Building2, TrendingUp, Users, BookOpen, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.10 } } };

const cardIcons = [
  <GraduationCap size={28} strokeWidth={1.7} />,
  <Users size={28} strokeWidth={1.7} />,
  <Briefcase size={28} strokeWidth={1.7} />,
  <Building2 size={28} strokeWidth={1.7} />,
  <TrendingUp size={28} strokeWidth={1.7} />,
];

const statIcons = [
  <Users size={20} strokeWidth={1.8} />,
  <Building2 size={20} strokeWidth={1.8} />,
  <BookOpen size={20} strokeWidth={1.8} />,
  <Briefcase size={20} strokeWidth={1.8} />,
  <Shield size={20} strokeWidth={1.8} />,
];

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
          FEATURE CARDS — floating card strip
      ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(16px, 2.2vw, 36px)',
          marginTop: '-2px',
          position: 'relative',
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            background: 'white',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(44,26,14,0.13)',
            border: '1px solid rgba(107,53,27,0.07)',
          }}
          className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {t.hero.cards.map((card, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '28px 18px',
                borderRight: i < t.hero.cards.length - 1 ? '1px solid rgba(107,53,27,0.09)' : 'none',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#FFF7F0')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'white')}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(245,102,0,0.10)',
                  color: '#F56600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  flexShrink: 0,
                }}
              >
                {cardIcons[i]}
              </div>
              <div
                style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: '#2C1A0E',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                  marginBottom: '7px',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#6B5040',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  lineHeight: 1.55,
                }}
              >
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          STATS BAR — dark brown
      ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ background: '#3D1F0A', marginTop: '0' }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(16px, 2.2vw, 36px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
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
                <div
                  style={{
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '19px',
                    fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
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
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          TAGLINE
      ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
        style={{
          background: '#FFF8F2',
          padding: '16px 24px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(107,53,27,0.07)',
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
  );
}
