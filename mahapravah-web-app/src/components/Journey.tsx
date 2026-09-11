import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ── 100% Exact Match SVG Icons for 5 Journey Steps ──

// Step 1: Register (User with plus badge)
const RegisterIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="currentColor">
    <circle cx="16" cy="9" r="5" fill="#3D1F0A" />
    <path
      d="M6.5 27.5c0-5.2 4.2-8.5 9.5-8.5 2 0 3.8.5 5.2 1.4-1.2 1.4-1.9 3.2-1.9 5.1 0 1.2.3 2.3.8 3.3l-13.6-1.3z"
      fill="#3D1F0A"
    />
    <circle cx="26" cy="25" r="5.5" fill="#3D1F0A" />
    <path
      d="M26 22.2v5.6M23.2 25h5.6"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Step 2: Explore (Open book with page stripes)
const ExploreIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="currentColor">
    <path
      d="M17 11.2c-3-1.8-8-1.8-11.5-.2v14.4c3.5-1.6 8.5-1.6 11.5.2V11.2z"
      fill="#3D1F0A"
    />
    <path
      d="M19 11.2c3-1.8 8-1.8 11.5-.2v14.4c-3.5-1.6-8.5-1.6-11.5.2V11.2z"
      fill="#3D1F0A"
    />
    <path
      d="M8.5 14.5c2.3-.7 5.2-.7 7 .2M8.5 18c2.3-.7 5.2-.7 7 .2M8.5 21.5c2.3-.7 5.2-.7 7 .2"
      stroke="#FFFFFF"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M27.5 14.5c-2.3-.7-5.2-.7-7 .2M27.5 18c-2.3-.7-5.2-.7-7 .2M27.5 21.5c-2.3-.7-5.2-.7-7 .2"
      stroke="#FFFFFF"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

// Step 3: Learn & Upskill (Target bullseye with arrow)
const LearnIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
    <circle cx="16.5" cy="19.5" r="11" stroke="#3D1F0A" strokeWidth="2.4" />
    <circle cx="16.5" cy="19.5" r="6.6" stroke="#3D1F0A" strokeWidth="2.2" />
    <circle cx="16.5" cy="19.5" r="2.8" fill="#3D1F0A" />
    <path d="M29.5 6.5L18 18" stroke="#3D1F0A" strokeWidth="2.2" strokeLinecap="round" />
    <path
      d="M18 18l3.6-1m-3.6 1l1-3.6"
      stroke="#3D1F0A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.5 6.5l-3.2.3M29.5 6.5l-.3 3.2M27 4l2.5 2.5"
      stroke="#3D1F0A"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Step 4: Apply (Briefcase with handle and center buckle)
const ApplyIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="currentColor">
    <path
      d="M14 11v-2.2a1.8 1.8 0 0 1 1.8-1.8h4.4a1.8 1.8 0 0 1 1.8 1.8V11"
      fill="none"
      stroke="#3D1F0A"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <rect x="5.5" y="11" width="25" height="17" rx="3.5" fill="#3D1F0A" />
    <line x1="5.5" y1="18.5" x2="30.5" y2="18.5" stroke="#FFFFFF" strokeWidth="1.4" />
    <rect x="15.5" y="16.2" width="5" height="5.2" rx="1" fill="#3D1F0A" stroke="#FFFFFF" strokeWidth="1.2" />
  </svg>
);

// Step 5: Grow & Succeed (Ascending bars, trend arrow, and star)
const GrowIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="currentColor">
    <rect x="7" y="21.5" width="3.6" height="6.5" rx="0.8" fill="#3D1F0A" />
    <rect x="13" y="17" width="3.6" height="11" rx="0.8" fill="#3D1F0A" />
    <rect x="19" y="12.5" width="3.6" height="15.5" rx="0.8" fill="#3D1F0A" />
    <path
      d="M7 18.5l5.5-4.5 5 2.5 6-6.5"
      fill="none"
      stroke="#3D1F0A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 10h3.5v3.5"
      fill="none"
      stroke="#3D1F0A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.5 4.5l1 2.2 2.4.3-1.8 1.7.4 2.4-2-1.1-2 1.1.4-2.4-1.8-1.7 2.4-.3z"
      fill="#3D1F0A"
    />
  </svg>
);


// ── 5 Star Rating ──
function FiveStars() {
  return (
    <div className="flex items-center gap-1 mb-2.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: '#F56600', fontSize: '13px', lineHeight: 1 }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { isMarathi } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isStepHovered, setIsStepHovered] = useState(false);

  // Auto-advance 5-step journey simulation every 3.2s
  useEffect(() => {
    if (isStepHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(interval);
  }, [isStepHovered]);

  // 5 Steps Data
  const steps = [
    {
      Icon: RegisterIcon,
      title: isMarathi ? '१. नोंदणी करा' : '1. Register',
      desc: isMarathi
        ? 'काही सोप्या टप्प्यांत तुमचे मोफत अकाऊंट तयार करा.'
        : 'Create your free account in just a few steps.',
    },
    {
      Icon: ExploreIcon,
      title: isMarathi ? '२. शोधा' : '2. Explore',
      desc: isMarathi
        ? 'अभ्यासक्रम, प्रशिक्षण आणि करिअर संसाधने शोधा.'
        : 'Discover courses, training and career resources.',
    },
    {
      Icon: LearnIcon,
      title: isMarathi ? '३. शिका आणि कुशल व्हा' : '3. Learn & Upskill',
      desc: isMarathi
        ? 'दर्जेदार शिक्षण कार्यक्रमांसह तुमची कौशल्ये वाढवा.'
        : 'Enhance your skills with quality learning programs.',
    },
    {
      Icon: ApplyIcon,
      title: isMarathi ? '४. अर्ज करा' : '4. Apply',
      desc: isMarathi
        ? 'तुमच्यासाठी योग्य अशा इंटर्नशिप, नोकऱ्या आणि संधी शोधा.'
        : 'Find internships, jobs and opportunities that fit you.',
    },
    {
      Icon: GrowIcon,
      title: isMarathi ? '५. प्रगती करा आणि यशस्वी व्हा' : '5. Grow & Succeed',
      desc: isMarathi
        ? 'तुमची ध्येये साध्य करा आणि उज्ज्वल भविष्य घडवा.'
        : 'Achieve your goals and build a bright future.',
    },
  ];

  // Success Stories Data with real cropped profile photos
  const testimonials = [
    {
      name: isMarathi ? 'रोहन पाटील' : 'Rohan Patil',
      role: isMarathi ? 'सॉफ्टवेअर इंजिनिअर, पुणे' : 'Software Engineer, Pune',
      quote: isMarathi
        ? '“महाप्रवाहने मला योग्य कौशल्य अभ्यासक्रम शोधण्यास मदत केली आणि आज मला माझे स्वप्नातील काम मिळाले.”'
        : '“MahaPravah helped me find the right course and now I have my dream job.”',
      avatar: '/avatar-rohan.png',
    },
    {
      name: isMarathi ? 'स्नेहा देशमुख' : 'Sneha Deshmukh',
      role: isMarathi ? 'डेटा विश्लेषक, मुंबई' : 'Data Analyst, Mumbai',
      quote: isMarathi
        ? '“कौशल्य विकास कार्यक्रमांमुळे माझा आत्मविश्वास वाढला आणि उत्तम करिअर संधींचे दरवाजे उघडले.”'
        : '“The skilling programs boosted my confidence and career opportunities.”',
      avatar: '/avatar-sneha.png',
    },
    {
      name: isMarathi ? 'आकाश जाधव' : 'Akash Jadhav',
      role: isMarathi ? 'एचआर मॅनेजर, नाशिक' : 'HR Manager, Nashik',
      quote: isMarathi
        ? '“विद्यार्थी आणि उद्योजकांना एकत्र जोडून सक्षम भविष्य घडवणारे हे एक उत्कृष्ट व्यासपीठ आहे.”'
        : '“A great platform for students and employers to connect and grow together.”',
      avatar: '/avatar-akash.png',
    },
  ];

  // 4 Partners Data with real cropped emblems
  const partners = [
    {
      img: '/emblem-sdm.png',
      alt: 'Skill Development Maharashtra',
      label: isMarathi ? 'कौशल्य विकास\nमहाराष्ट्र' : 'Skill\nDevelopment\nMaharashtra',
      isWide: false,
    },
    {
      img: '/emblem-mahait.png',
      alt: 'MahaIT',
      label: 'MahaIT',
      isWide: true,
    },
    {
      img: '/emblem-msdm.png',
      alt: 'Maharashtra State Skill Development Mission',
      label: isMarathi ? 'महाराष्ट्र राज्य\nकौशल्य विकास मिशन' : 'Maharashtra State\nSkill Development\nMission',
      isWide: false,
    },
    {
      img: '/emblem-govt.png',
      alt: 'Government of Maharashtra',
      label: isMarathi ? 'महाराष्ट्र\nशासन' : 'Government\nof Maharashtra',
      isWide: false,
    },
  ];

  return (
    <section
      id="vision"
      ref={ref}
      className={`relative w-full overflow-hidden ${isMarathi ? 'font-poppins' : ''}`}
      style={{
        backgroundImage: 'url(/section-bg-art.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: '100% auto',
        backgroundColor: '#FFF8F2',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        className="relative z-10"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(16px, 2.2vw, 36px)',
        }}
      >

        {/* ═══════════════════════════════════════════════════
            TOP CARD — HOW MAHAPRAVAH WORKS (Platform Theme)
        ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="rounded-3xl py-10 px-4 sm:px-8 lg:px-12 text-center relative overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF8F2 100%)',
            border: '1.5px solid rgba(245, 102, 0, 0.18)',
            boxShadow: '0 4px 24px -2px rgba(107, 53, 27, 0.07), 0 2px 6px rgba(245, 102, 0, 0.04)',
          }}
        >
          {/* Section Label */}
          <p
            className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2"
            style={{
              color: '#F56600',
              fontFamily: 'Manrope, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            {isMarathi ? 'महाप्रवाह कार्यपद्धती' : 'HOW MAHAPRAVAH WORKS'}
          </p>

          {/* Section Heading: तुमच्या प्रवासाची सोपी सुरुवात */}
          <h2
            className={`text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold mb-10 sm:mb-12 ${
              isMarathi ? 'font-poppins' : 'devanagari-text font-poppins'
            }`}
            style={{
              color: '#2C1A0E',
              letterSpacing: '-0.01em',
            }}
          >
            तुमच्या प्रवासाची{' '}
            <span style={{ color: '#F56600' }}>सोपी सुरुवात</span>
          </h2>

          {/* 5 Steps horizontal flow with continuous behind-the-circle rail & interactive milestones */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0 max-w-[1180px] mx-auto w-full relative">
            
            {/* ── Continuous Clean Pipeline Rail (Behind All 5 Circles) ── */}
            <div className="hidden lg:block absolute left-[10%] right-[10%] top-[39px] -translate-y-1/2 z-0 pointer-events-none h-4">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* 1. Base dashed guide rail connecting behind all 5 circles */}
                <line
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#E8D7CA"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                />

                {/* 2. Active illuminated progress rail extending to current active step */}
                <line
                  x1="0%"
                  y1="50%"
                  x2={`${(activeStep / 4) * 100}%`}
                  y2="50%"
                  stroke="#F56600"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  style={{
                    transition: 'x2 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    filter: 'drop-shadow(0 0 5px rgba(245, 102, 0, 0.45))',
                  }}
                />
              </svg>
            </div>

            {steps.map((step, i) => {
              const isActive = activeStep === i;
              const isCompleted = activeStep > i;

              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center relative w-full px-2 cursor-pointer group select-none"
                  onMouseEnter={() => {
                    setIsStepHovered(true);
                    setActiveStep(i);
                  }}
                  onMouseLeave={() => setIsStepHovered(false)}
                  onClick={() => {
                    setIsStepHovered(true);
                    setActiveStep(i);
                  }}
                >
                  {/* Icon Badge: circular platform theme disc with orange border */}
                  <div className="relative flex items-center justify-center flex-shrink-0 z-10">
                    {/* Active Step Pulsing Rotating Halo Ring */}
                    {isActive && (
                      <div
                        className="absolute -inset-2 rounded-full border-2 border-[#EA580C] border-dashed animate-spin-slow opacity-85 pointer-events-none"
                        style={{ animationDuration: '8s' }}
                      />
                    )}

                    <div
                      className={`w-[78px] h-[78px] rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'scale-110 shadow-[0_6px_22px_rgba(245,102,0,0.30)]'
                          : 'hover:scale-105 shadow-[0_3px_12px_rgba(245,102,0,0.12)]'
                      }`}
                      style={{
                        background: isActive
                          ? 'linear-gradient(145deg, #FFFFFF 0%, #FFF2E6 100%)'
                          : 'linear-gradient(145deg, #FFFFFF 0%, #FFF7F0 100%)',
                        border: isActive ? '2.4px solid #EA580C' : '1.8px solid #F56600',
                      }}
                    >
                      <step.Icon />
                    </div>
                  </div>

                  {/* Clean, Authentic Dashed Connector Arrow between circles (Desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center absolute left-[calc(50%+42px)] right-[calc(-50%+42px)] top-[39px] -translate-y-1/2 z-0 pointer-events-none px-2">
                      <svg className="w-full max-w-[62px]" height="14" viewBox="0 0 62 14" fill="none">
                        <line
                          x1="2"
                          y1="7"
                          x2="52"
                          y2="7"
                          stroke={isCompleted ? '#EA580C' : '#F56600'}
                          strokeWidth={isCompleted ? '2.2' : '1.8'}
                          strokeDasharray="4 4"
                          strokeOpacity={isCompleted ? '1' : '0.8'}
                          style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                        />
                        <path
                          d="M48 3.5L55 7L48 10.5"
                          stroke={isCompleted ? '#EA580C' : '#F56600'}
                          strokeWidth={isCompleted ? '2.2' : '1.8'}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Step Title in vibrant orange */}
                  <h3
                    className={`text-[15px] sm:text-[16px] font-bold mt-4 mb-1.5 leading-snug transition-colors duration-200 ${
                      isActive ? 'text-[#EA580C]' : 'text-[#F56600]'
                    }`}
                    style={{
                      fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#525252]"
                    style={{
                      fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                      maxWidth: '185px',
                    }}
                  >
                    {step.desc}
                  </p>

                  {/* Active Step Indicator Pill */}
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#FFF3E8] border border-[#EA580C]/25 text-[#EA580C]"
                      style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
                      {isMarathi ? 'सक्रिय टप्पा' : 'Active Step'}
                    </motion.span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>


        {/* ═══════════════════════════════════════════════════
            BOTTOM GRID — SUCCESS STORIES & OUR PARTNERS
        ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* ── LEFT CARD: SUCCESS STORIES (Platform Theme) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF8F2 100%)',
              border: '1.5px solid rgba(245, 102, 0, 0.18)',
              boxShadow: '0 4px 24px -2px rgba(107, 53, 27, 0.07), 0 2px 6px rgba(245, 102, 0, 0.04)',
            }}
          >
            <div>
              {/* Overline */}
              <p
                className="text-xs font-bold tracking-widest uppercase mb-1.5"
                style={{ color: '#F56600', fontFamily: 'Manrope, sans-serif' }}
              >
                {isMarathi ? 'यशाच्या कहाण्या' : 'SUCCESS STORIES'}
              </p>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-extrabold mb-2"
                style={{
                  color: '#2C1A0E',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                }}
              >
                {isMarathi ? 'त्यांच्या यशाची प्रेरणा, तुमच्या यशाची दिशा.' : 'Their Success, Your Direction.'}
              </h3>

              {/* Orange Accent Bar */}
              <div
                style={{
                  width: '38px',
                  height: '3px',
                  background: '#F56600',
                  borderRadius: '9999px',
                  marginBottom: '22px',
                }}
              />

              {/* 3 Testimonial Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF9F3 100%)',
                      border: '1px solid rgba(215, 140, 75, 0.22)',
                      boxShadow: '0 2px 8px rgba(107, 53, 27, 0.04)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(245, 102, 0, 0.45)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 102, 0, 0.12)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(215, 140, 75, 0.22)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(107, 53, 27, 0.04)';
                    }}
                  >
                    <div>
                      <FiveStars />
                      <p
                        className="text-[11.5px] leading-relaxed mb-4 text-[#525252]"
                        style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                      >
                        {t.quote}
                      </p>
                    </div>

                    {/* Author info with real profile photo */}
                    <div className="flex items-center gap-2.5 pt-2 border-t border-orange-100/70">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                        style={{
                          border: '1.5px solid rgba(245, 102, 0, 0.45)',
                        }}
                      />
                      <div className="min-w-0">
                        <p
                          className="text-xs font-bold truncate leading-snug"
                          style={{
                            color: '#F56600',
                            fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-[10px] text-stone-500 truncate"
                          style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-2 pt-2">
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === activeSlide ? 26 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background: i === activeSlide ? '#F56600' : 'rgba(160, 140, 125, 0.35)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </motion.div>


          {/* ── RIGHT CARD: OUR PARTNERS (Platform Theme) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF8F2 100%)',
              border: '1.5px solid rgba(245, 102, 0, 0.18)',
              boxShadow: '0 4px 24px -2px rgba(107, 53, 27, 0.07), 0 2px 6px rgba(245, 102, 0, 0.04)',
            }}
          >
            <div>
              {/* Overline */}
              <p
                className="text-xs font-bold tracking-widest uppercase mb-1.5"
                style={{ color: '#F56600', fontFamily: 'Manrope, sans-serif' }}
              >
                {isMarathi ? 'आमचे भागीदार' : 'OUR PARTNERS'}
              </p>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-extrabold mb-2"
                style={{
                  color: '#2C1A0E',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                }}
              >
                {isMarathi ? 'एकत्र येऊन घडवूया सक्षम महाराष्ट्र.' : 'Together Building a Stronger Maharashtra.'}
              </h3>

              {/* Orange Accent Bar */}
              <div
                style={{
                  width: '38px',
                  height: '3px',
                  background: '#F56600',
                  borderRadius: '9999px',
                  marginBottom: '22px',
                }}
              />

              {/* 4 Partner Logo Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {partners.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                    style={{
                      background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF9F3 100%)',
                      border: '1px solid rgba(215, 140, 75, 0.22)',
                      boxShadow: '0 2px 8px rgba(107, 53, 27, 0.04)',
                      minHeight: '138px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(245, 102, 0, 0.45)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 102, 0, 0.12)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(215, 140, 75, 0.22)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(107, 53, 27, 0.04)';
                    }}
                  >
                    <div className="h-14 flex items-center justify-center mb-2 w-full">
                      <img
                        src={p.img}
                        alt={p.alt}
                        className={`max-h-12 object-contain ${p.isWide ? 'max-w-[86px]' : 'max-w-[50px]'}`}
                      />
                    </div>
                    <p
                      className="text-[10.5px] leading-tight font-semibold text-[#3D2010] whitespace-pre-line text-center"
                      style={{
                        fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                      }}
                    >
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Partners Button */}
            <div>
              <a
                href="#partners"
                id="view-all-partners-btn"
                className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: '10px 24px',
                  borderRadius: 9999,
                  border: '1.5px solid #F56600',
                  color: '#D94E00',
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif',
                  background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF5EB 100%)',
                  boxShadow: '0 2px 8px rgba(245, 102, 0, 0.10)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F56600 0%, #EA580C 100%)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(245, 102, 0, 0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(145deg, #FFFFFF 0%, #FFF5EB 100%)';
                  e.currentTarget.style.color = '#D94E00';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(245, 102, 0, 0.10)';
                }}
              >
                {isMarathi ? 'सर्व भागीदार पहा' : 'View All Partners'} <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
