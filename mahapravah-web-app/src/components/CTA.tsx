import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Official Google Play 4-Color Logo
const GooglePlayLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" aria-hidden="true">
    <path d="M3.18 23.5c-.39-.22-.68-.63-.68-1.17V1.67c0-.54.29-.95.68-1.17l12.1 11.5L3.18 23.5z" fill="#4CAF50" />
    <path d="M19.82 12L15.28 7.5 3.18 23.5l16.64-11.5z" fill="#F44336" />
    <path d="M3.18.5L15.28 7.5l4.54-4.5L3.18.5z" fill="#2196F3" />
    <path d="M15.28 16.5l4.54 4.5L3.18 23.5l12.1-7z" fill="#FFEB3B" />
  </svg>
);

// Official Apple Store Logo
const AppleLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="flex-shrink-0" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const { isMarathi } = useLanguage();

  return (
    <div ref={ref} className="w-full mt-7 sm:mt-9 lg:mt-11 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#481E06]/60"
        style={{
          boxShadow: '0 12px 36px -4px rgba(45, 18, 5, 0.32), 0 4px 14px rgba(245, 102, 0, 0.10)',
        }}
      >
        {/* ── High-Resolution Composite Background: Full students, laptop & India Gate visible ── */}
        <div className="relative w-full min-h-[195px] sm:min-h-[210px] md:min-h-[225px] lg:min-h-[235px] xl:min-h-[245px] flex items-center">
          <img
            src="/cta-banner-bg.png"
            alt="MahaPravah - Empowering Students & Opportunities"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
          />

          {/* Desktop Layout: Precise 4-zone positioning matching the mockup exactly */}
          <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-7 py-4 sm:py-5">
            
            {/* ── ZONE 2 (15% to 47%): Headline + Action Buttons ── */}
            <div className="w-full lg:w-auto lg:ml-[15%] xl:ml-[15.5%] max-w-full lg:max-w-[360px] xl:max-w-[420px] text-left mb-3 lg:mb-0">
              <h2
                className={`text-sm sm:text-base md:text-lg lg:text-[1.20rem] xl:text-[1.35rem] font-extrabold text-white leading-tight mb-2.5 sm:mb-3 ${
                  isMarathi ? 'font-poppins' : 'font-display'
                }`}
                style={{
                  fontFamily: isMarathi ? "'Poppins', sans-serif" : "'Manrope', 'Inter', sans-serif",
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)',
                }}
              >
                {isMarathi ? (
                  <>
                    आजच{' '}
                    <span
                      className="text-[#FF6600] font-black"
                      style={{ fontFamily: "'Manrope', 'Inter', sans-serif", letterSpacing: '-0.02em' }}
                    >
                      MahaPravah
                    </span>{' '}
                    सोबत जोडा आणि
                    <br />
                    तुमच्या उज्ज्वल भविष्यास सुरुवात करा!
                  </>
                ) : (
                  <>
                    Join{' '}
                    <span
                      className="text-[#FF6600] font-black"
                      style={{ fontFamily: "'Manrope', 'Inter', sans-serif", letterSpacing: '-0.02em' }}
                    >
                      MahaPravah
                    </span>{' '}
                    Today and
                    <br />
                    Start Your Bright Future!
                  </>
                )}
              </h2>

              {/* Action Buttons: Register Now (Orange) & Explore Opportunities (Outline) */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {/* Button 1: Register Now */}
                <a
                  href="#register"
                  id="cta-register-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-white font-semibold text-xs sm:text-[12.5px] transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #F56600 0%, #EA580C 100%)',
                    boxShadow: '0 3px 12px rgba(245, 102, 0, 0.45)',
                    fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  }}
                >
                  Register Now <ArrowRight size={13} />
                </a>

                {/* Button 2: Explore Opportunities */}
                <a
                  href="#explore"
                  id="cta-explore-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-white font-medium text-xs sm:text-[12.5px] border border-white/75 hover:border-white transition-all duration-200 hover:bg-white/15 hover:scale-105 active:scale-95 flex-shrink-0"
                  style={{
                    background: 'rgba(38, 16, 4, 0.50)',
                    backdropFilter: 'blur(4px)',
                    fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                  }}
                >
                  Explore Opportunities <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* ── ZONE 3 (47% to 82%): Students & Autumn Trees in background ── */}
            <div className="hidden lg:block flex-1 pointer-events-none" />

            {/* ── ZONE 4: Divider + Download App + Badges (Centered in right zone) ── */}
            <div className="w-full lg:w-auto flex items-center justify-start lg:justify-end gap-2.5 sm:gap-3 flex-shrink-0 pt-2 lg:pt-0 border-t border-white/15 lg:border-t-0 lg:mr-3.5 xl:mr-5">
              {/* Vertical Divider */}
              <div className="w-[1px] h-12 sm:h-14 lg:h-16 bg-white/35 hidden sm:block mr-0.5" />

              {/* App download block */}
              <div className="flex flex-col text-left">
                <div
                  className="text-white/90 text-[10.5px] sm:text-[11px] font-normal leading-tight"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Download the
                </div>
                <div
                  className="text-white text-[12px] sm:text-[13px] font-bold leading-tight mb-1.5"
                  style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
                >
                  MahaPravah App
                </div>

                {/* Store Badges Stack */}
                <div className="flex flex-row sm:flex-col gap-1.5">
                  {/* Google Play Badge */}
                  <a
                    href="#google-play"
                    id="cta-google-play-badge"
                    className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/90 hover:bg-black border border-white/25 hover:border-white/50 transition-all duration-200 shadow-md group"
                    style={{ minWidth: '122px' }}
                  >
                    <GooglePlayLogo />
                    <div className="flex flex-col text-left">
                      <span className="text-[7.5px] text-white/70 font-semibold tracking-wider uppercase leading-none">
                        GET IT ON
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-white leading-tight">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* Apple App Store Badge */}
                  <a
                    href="#app-store"
                    id="cta-app-store-badge"
                    className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/90 hover:bg-black border border-white/25 hover:border-white/50 transition-all duration-200 shadow-md group"
                    style={{ minWidth: '122px' }}
                  >
                    <AppleLogo />
                    <div className="flex flex-col text-left">
                      <span className="text-[7.5px] text-white/70 font-semibold leading-none">
                        Download on the
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-white leading-tight">
                        App Store
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

