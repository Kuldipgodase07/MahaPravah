import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashPageProps {
  onComplete: () => void;
}

/* ═══════════════════════════════════════════════════
   SPLASH PAGE  —  Clean centered layout
   Logo  →  English subtitle  →  Loading bar
═══════════════════════════════════════════════════ */
export default function SplashPage({ onComplete }: SplashPageProps) {
  const [progress, setProgress] = useState(0);
  const [done,     setDone]     = useState(false);

  /* Smooth progress fill over ~3.2 s */
  useEffect(() => {
    const TOTAL = 3200;
    const TICK  = 25;
    const steps = TOTAL / TICK;
    let step = 0;

    const id = setInterval(() => {
      step++;
      const t = step / steps;
      // ease-in-out cubic
      const eased = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(Math.min(eased * 100, 100));

      if (step >= steps) {
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 550);
        }, 250);
      }
    }, TICK);

    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* ── Full-screen background ── */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:    'url(/splash-bg.png)',
              backgroundSize:     'cover',
              backgroundPosition: 'center center',
              backgroundRepeat:   'no-repeat',
            }}
          />
          {/* Faint cream overlay so content is always the focus */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,249,243,0.72) 0%, rgba(255,247,237,0.62) 50%, rgba(255,249,243,0.80) 100%)',
            }}
          />

          {/* ── Perfectly centered content ── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

            {/* 1. MahaPravah Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.84, y: -16 }}
              animate={{ opacity: 1, scale: 1,    y: 0   }}
              transition={{ duration: 0.72, ease: 'easeOut' }}
              className="mb-5"
            >
              <img
                src="/mahapravah-logo.png"
                alt="MahaPravah"
                draggable={false}
                className="w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-md select-none"
              />
            </motion.div>

            {/* 2. English subtitle — single line */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.6, delay: 0.28 }}
              style={{
                color:      '#4A2414',
                fontFamily: 'Inter, sans-serif',
                fontSize:   'clamp(0.70rem, 1.55vw, 0.92rem)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
              }}
              className="mb-8"
            >
              Maharashtra's Unified Platform for Skills, Training, Employability &amp; Career Growth
            </motion.p>

            {/* 3. Loading bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.55, delay: 0.50 }}
              className="w-full max-w-xs md:max-w-sm"
            >
              {/* "Loading..." label */}
              <p
                className="text-center mb-2"
                style={{
                  color:         '#4A2414',
                  fontFamily:    'Inter, sans-serif',
                  fontSize:      '0.80rem',
                  fontWeight:    500,
                  letterSpacing: '0.015em',
                }}
              >
                Loading...
              </p>

              {/* Track */}
              <div
                className="relative h-2 rounded-full overflow-hidden"
                style={{ background: 'rgba(107, 53, 27, 0.15)' }}
              >
                {/* Brown → Saffron fill */}
                <div
                  style={{
                    width:        `${progress}%`,
                    background:   'linear-gradient(90deg, #4A2414 0%, #8B4513 40%, #F56600 78%, #EA580C 100%)',
                    boxShadow:    '0 0 8px rgba(245,102,0,0.40)',
                    transition:   'width 25ms linear',
                    position:     'absolute',
                    inset:        '0 auto 0 0',
                    borderRadius: '9999px',
                  }}
                />
              </div>

              {/* Sub-label */}
              <p
                className="text-center mt-2"
                style={{
                  color:      '#6B351B',
                  fontFamily: 'Inter, sans-serif',
                  fontSize:   '0.73rem',
                }}
              >
                Building a Skilled &amp; Empowered Maharashtra
              </p>
            </motion.div>

          </div>{/* end centered content */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
