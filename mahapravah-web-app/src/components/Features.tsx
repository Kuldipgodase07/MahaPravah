import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ============================================================================
// EXACT CUSTOM ICONS (Pixel-matched to the reference mockup)
// ============================================================================

// Card 1: User Profile Icon
function ExactUserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4.2" />
      <path d="M5.5 20.5c0-4 3-6 6.5-6s6.5 2 6.5 6" />
    </svg>
  );
}

// Card 2: Graduation Mortarboard Cap Icon
function ExactCapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10.5L12 5 2 10.5l10 5.5 10-5.5z" />
      <path d="M6 13v4.5c0 2 3 3.5 6 3.5s6-1.5 6-3.5V13" />
      <path d="M20 12v6" />
    </svg>
  );
}

// Card 3: AI Brain with Central Divider and Convoluted Lobes
function ExactBrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v16" strokeWidth="2.4" />
      <path d="M12 11h2.5" strokeWidth="2.2" />
      <path d="M12 4.5c-2.4 0-4.2 1.4-4.2 3.2 0 .5.2.9.4 1.3-1.4.3-2.4 1.4-2.4 2.8 0 1.1.6 2 1.6 2.5-.4.5-.6 1.2-.6 1.8 0 1.7 1.6 3.1 3.7 3.1.5 0 1-.1 1.5-.3" />
      <path d="M12 4.5c2.4 0 4.2 1.4 4.2 3.2 0 .5-.2.9-.4 1.3 1.4.3 2.4 1.4 2.4 2.8 0 1.1-.6 2-1.6 2.5.4.5.6 1.2.6 1.8 0 1.7-1.6 3.1-3.7 3.1-.5 0-1-.1-1.5-.3" />
    </svg>
  );
}

// Card 4: Pin-to-Pin Route with Horizontal Connector (Exactly as in reference)
function ExactJourneyPinIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Bottom left pin */}
      <path
        d="M6 21c-2.2-2.8-3-4.4-3-6a4 4 0 0 1 8 0c0 1.6-.8 3.2-3 6l-1 1z"
        fill="#EA580C"
      />
      <circle cx="7" cy="15" r="1.4" fill="#FFF3EA" />
      {/* Horizontal connecting bar */}
      <path d="M11 15h3.5" stroke="#EA580C" strokeWidth="2.5" />
      {/* Top right pin */}
      <path
        d="M17.5 12c-1.8-2.2-2.5-3.5-2.5-4.8a3.2 3.2 0 0 1 6.4 0c0 1.3-.7 2.6-2.5 4.8l-.7.8z"
        fill="#EA580C"
      />
      <circle cx="18.2" cy="7.2" r="1.1" fill="#FFF3EA" />
    </svg>
  );
}

// Card 5: Classical Institution with 3 Pillars & Pediment (Exactly as in reference)
function ExactBuildingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Triangular Roof Pediment */}
      <path d="M3 9.5L12 4l9 5.5H3z" fill="#EA580C" />
      {/* Horizontal Architrave */}
      <path d="M4 11h16" />
      {/* 3 Columns */}
      <path d="M7 11v7M12 11v7M17 11v7" strokeWidth="2.6" />
      {/* Base Plinth */}
      <path d="M3 19.5h18" strokeWidth="2.4" />
    </svg>
  );
}

// Card 6: 3-Person Group (Center hollow, sides with solid heads)
function ExactGroupIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Center person */}
      <circle cx="12" cy="8" r="3.2" />
      <path d="M7 20.5v-1a5 5 0 0 1 10 0v1" />
      {/* Left person */}
      <circle cx="5.5" cy="10.5" r="2.2" fill="#EA580C" />
      <path d="M2.5 20.5v-.5a3.8 3.8 0 0 1 3.5-3.5" />
      {/* Right person */}
      <circle cx="18.5" cy="10.5" r="2.2" fill="#EA580C" />
      <path d="M18 16.5a3.8 3.8 0 0 1 3.5 3.5v.5" />
    </svg>
  );
}

// ============================================================================
// EXACT WATERMARK VECTOR ARTWORKS (Soft peach silhouettes matching reference)
// ============================================================================

// 1. Profile ID Card Watermark
function ExactProfileWatermark() {
  return (
    <svg viewBox="0 0 80 56" className="w-full h-full" fill="none">
      <rect x="2" y="2" width="76" height="52" rx="7" fill="#FDE8D4" stroke="#E8935A" strokeWidth="1.8" />
      {/* Avatar portrait */}
      <circle cx="21" cy="20" r="7.5" fill="#ECA66A" />
      <path d="M11 40c0-6 20-6 20 0" fill="#ECA66A" />
      {/* 3 info lines */}
      <rect x="36" y="14" width="34" height="4.5" rx="2.2" fill="#F4B98A" />
      <rect x="36" y="24" width="28" height="4.5" rx="2.2" fill="#F4B98A" />
      <rect x="36" y="34" width="31" height="4.5" rx="2.2" fill="#F4B98A" />
    </svg>
  );
}

// 2. Discovery Open Book Watermark – Rich 3D Edition
function ExactBookWatermark() {
  return (
    <svg viewBox="0 0 96 72" className="w-full h-full" fill="none">
      {/* Book shadow / base */}
      <ellipse cx="48" cy="66" rx="34" ry="4" fill="#ECA66A" opacity="0.35" />

      {/* Left page – back layer (slightly shifted) */}
      <path d="M46 16C32 9 16 11 3 16v37c13-5 29-3 43 4V16z" fill="#F4B98A" stroke="#E8935A" strokeWidth="1.2" opacity="0.5" />

      {/* Right page – back layer */}
      <path d="M50 16C64 9 80 11 93 16v37c-13-5-29-3-43 4V16z" fill="#F4B98A" stroke="#E8935A" strokeWidth="1.2" opacity="0.5" />

      {/* Left page – front */}
      <path d="M48 14C33 7 17 9 4 14v38c13-5 30-3 44 4V14z" fill="#FDE8D4" stroke="#E07A40" strokeWidth="1.8" />
      {/* Right page – front */}
      <path d="M48 14C63 7 79 9 92 14v38c-13-5-30-3-44 4V14z" fill="#FDE8D4" stroke="#E07A40" strokeWidth="1.8" />

      {/* Spine crease */}
      <path d="M48 14v42" stroke="#E07A40" strokeWidth="2.2" strokeLinecap="round" />

      {/* Left text lines (3 rows) */}
      <path d="M12 23c5-1.5 14-1.5 21 0" stroke="#ECA66A" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 30c5-1.5 14-1.5 21 0" stroke="#ECA66A" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 37c5-1.5 10-1.5 16 0" stroke="#ECA66A" strokeWidth="2" strokeLinecap="round" />
      {/* Left short accent line */}
      <path d="M12 44c5-1 8-1 12 0" stroke="#E8935A" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />

      {/* Right text lines */}
      <path d="M55 23c5-1.5 16-1.5 25 0" stroke="#ECA66A" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 30c5-1.5 16-1.5 25 0" stroke="#ECA66A" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 37c5-1.5 12-1.5 18 0" stroke="#ECA66A" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 44c5-1 8-1 12 0" stroke="#E8935A" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />

      {/* Right page bookmark ribbon */}
      <path d="M84 9v16l-4-4-4 4V9z" fill="#E07A40" />

      {/* Star on right page (highlight) */}
      <path d="M70 22l1.5 4.5H76l-3.8 2.8 1.5 4.5L70 31l-3.7 2.8 1.5-4.5L64 26.5h4.5z" fill="#E8935A" />
    </svg>
  );
}

// 3. AI-Powered Trend Watermark
function ExactTrendingWatermark() {
  return (
    <svg viewBox="0 0 84 64" className="w-full h-full" fill="none">
      {/* 4 ascending bars */}
      <rect x="4" y="48" width="13" height="16" rx="2.5" fill="#F4B98A" />
      <rect x="22" y="36" width="13" height="28" rx="2.5" fill="#ECA66A" />
      <rect x="40" y="24" width="13" height="40" rx="2.5" fill="#E8935A" />
      <rect x="58" y="12" width="13" height="52" rx="2.5" fill="#E07A40" />
      {/* Upward curved arrow */}
      <path d="M2 42C24 38 48 24 74 4" fill="none" stroke="#E07A40" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M60 4h15v15" fill="none" stroke="#E07A40" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 4. Tracking Roadmap Watermark – GPS Pin Route Edition
function ExactRoadmapWatermark() {
  return (
    <svg viewBox="0 0 96 72" className="w-full h-full" fill="none">
      {/* Curved route path */}
      <path
        d="M18 62 C22 50 32 44 42 36 C52 28 60 20 72 10"
        stroke="#F4B98A" strokeWidth="5" strokeLinecap="round" fill="none"
      />
      {/* Dashed overlay on route */}
      <path
        d="M18 62 C22 50 32 44 42 36 C52 28 60 20 72 10"
        stroke="#E07A40" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 4" fill="none"
      />

      {/* Milestone dots along path */}
      <circle cx="30" cy="50" r="3.5" fill="#ECA66A" stroke="#E07A40" strokeWidth="1.4" />
      <circle cx="48" cy="34" r="3.5" fill="#ECA66A" stroke="#E07A40" strokeWidth="1.4" />

      {/* Start pin – bottom left */}
      <path d="M18 62 C14 56 10 52 10 47.5 a8 8 0 1 1 16 0 C26 52 22 56 18 62z" fill="#ECA66A" stroke="#E07A40" strokeWidth="1.5" />
      <circle cx="18" cy="47.5" r="3" fill="#FDE8D4" />

      {/* End pin – top right */}
      <path d="M72 10 C68 4 64 0 64 -4.5 a8 8 0 1 1 16 0 C80 0 76 4 72 10z" fill="#E07A40" stroke="#C25E1A" strokeWidth="1.5" />
      <circle cx="72" cy="-4.5" r="3" fill="#FDE8D4" />

      {/* Destination flag / checkmark badge */}
      <rect x="76" y="2" width="18" height="12" rx="3" fill="#E07A40" />
      <path d="M80 8l3 3 5-5" stroke="#FDE8D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Shadow under start pin */}
      <ellipse cx="18" cy="64" rx="5" ry="2" fill="#E07A40" opacity="0.25" />
    </svg>
  );
}

// 5. Analytics Bar Columns Watermark
function ExactAnalyticsWatermark() {
  return (
    <svg viewBox="0 0 84 64" className="w-full h-full" fill="none">
      <rect x="6" y="48" width="13" height="16" rx="2.5" fill="#F4B98A" />
      <rect x="24" y="36" width="13" height="28" rx="2.5" fill="#ECA66A" />
      <rect x="42" y="24" width="13" height="40" rx="2.5" fill="#E8935A" />
      <rect x="60" y="12" width="13" height="52" rx="2.5" fill="#E07A40" />
    </svg>
  );
}

// 6. Inclusive Avatar Group Watermark
function ExactCommunityWatermark() {
  return (
    <svg viewBox="0 0 84 64" className="w-full h-full" fill="none">
      {/* Left person */}
      <circle cx="16" cy="28" r="9" fill="#F4B98A" />
      <path d="M4 52c0-9 22-9 22 0" fill="#F4B98A" />
      {/* Right person */}
      <circle cx="68" cy="28" r="9" fill="#F4B98A" />
      <path d="M56 52c0-9 22-9 22 0" fill="#F4B98A" />
      {/* Center person */}
      <circle cx="42" cy="20" r="12" fill="#E8935A" />
      <path d="M25 54c0-13 34-13 34 0" fill="#E8935A" />
    </svg>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { isMarathi } = useLanguage();

  const featurePillars = [
    {
      id: 1,
      tag: 'Profile',
      tagMr: 'प्रोफाइल',
      title: 'Unified Citizen Profile',
      titleMr: 'एकीकृत नागरिक प्रोफाइल',
      desc: 'Create one connected skill and career identity that travels with every citizen across all platforms.',
      descMr: 'सर्व प्लॅटफॉर्मवर नागरिकासोबत राहणारी एक जोडलेली कौशल्य आणि करिअर ओळख तयार करा.',
      cta: 'Explore Profile',
      ctaMr: 'प्रोफाइल एक्सप्लोर करा',
      icon: <ExactUserIcon />,
      watermark: <ExactProfileWatermark />,
    },
    {
      id: 2,
      tag: 'Discovery',
      tagMr: 'शोध',
      title: 'Skill & Training Discovery',
      titleMr: 'कौशल्य व प्रशिक्षण शोध',
      desc: 'Discover relevant training programs and courses aligned to career goals and market demand.',
      descMr: 'करिअर उद्दिष्टे आणि बाजारातील मागणीशी जुळणारे संबंधित प्रशिक्षण कार्यक्रम आणि अभ्यासक्रम शोधा.',
      cta: 'Explore Opportunities',
      ctaMr: 'संधी एक्सप्लोर करा',
      icon: <ExactCapIcon />,
      watermark: <ExactBookWatermark />,
    },
    {
      id: 3,
      tag: 'AI-Powered',
      tagMr: 'AI-आधारित',
      title: 'Employability Intelligence',
      titleMr: 'रोजगारक्षमता बुद्धिमत्ता',
      desc: 'Connect citizens with opportunities through smart AI matching based on competencies.',
      descMr: 'क्षमतेवर आधारित स्मार्ट AI मॅचिंगद्वारे नागरिकांना योग्य रोजगार संधींशी जोडा.',
      cta: 'See How It Works',
      ctaMr: 'हे कसे कार्य करते पहा',
      icon: <ExactBrainIcon />,
      watermark: <ExactTrendingWatermark />,
    },
    {
      id: 4,
      tag: 'Tracking',
      tagMr: 'ट्रॅकिंग',
      title: 'Career Journey',
      titleMr: 'करिअर प्रवास',
      desc: 'Track your complete roadmap from learning to placement with transparent milestones.',
      descMr: 'पारदर्शक टप्प्यांसह शिक्षणापासून नोकरी मिळण्यापर्यंतचा तुमचा संपूर्ण प्रवास ट्रॅक करा.',
      cta: 'Track Progress',
      ctaMr: 'प्रगती ट्रॅक करा',
      icon: <ExactJourneyPinIcon />,
      watermark: <ExactRoadmapWatermark />,
    },
    {
      id: 5,
      tag: 'Analytics',
      tagMr: 'अ‍ॅनालिटिक्स',
      title: 'Government Intelligence',
      titleMr: 'शासकीय बुद्धिमत्ता',
      desc: 'Provide data-driven insights and workforce analytics to support state policymaking.',
      descMr: 'राज्य धोरण निर्मितीला सहाय्य करण्यासाठी डेटा-आधारित इनसाइट्स आणि कार्यबल विश्लेषण प्रदान करा.',
      cta: 'View Insights',
      ctaMr: 'इनसाइट्स पहा',
      icon: <ExactBuildingIcon />,
      watermark: <ExactAnalyticsWatermark />,
    },
    {
      id: 6,
      tag: 'Inclusive',
      tagMr: 'सर्वसमावेशक',
      title: 'Inclusive Access',
      titleMr: 'सर्वसमावेशक प्रवेश',
      desc: 'Free, multilingual digital services designed for citizens from tribal areas to smart cities.',
      descMr: 'आदिवासी भागापासून ते स्मार्ट शहरांपर्यंतच्या नागरिकांसाठी मोफत, बहुभाषिक डिजिटल सेवा.',
      cta: 'Read More',
      ctaMr: 'अधिक वाचा',
      icon: <ExactGroupIcon />,
      watermark: <ExactCommunityWatermark />,
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className={`relative w-full py-16 md:py-20 overflow-hidden bg-[#FFF8F2] ${isMarathi ? 'font-poppins' : ''}`}
    >
      {/* Faint ambient background image to keep primary focus on the cards */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: "url('/features-section-bg.png?v=clean')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.38,
        }}
      />
      <div
        className="relative z-10"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(16px, 2.2vw, 36px)',
        }}
      >
        {/* ========================================================= */}
        {/* TOP HEADER: Left Headline & Subtitle                       */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start text-left mb-8 md:mb-10 max-w-[620px]"
        >
          {/* Top Label with Accent Bar */}
          <div className="mb-2">
            <span className="text-[13px] sm:text-[14px] font-bold text-[#EA580C] font-poppins">
              {isMarathi ? 'मुख्य वैशिष्ट्ये' : 'KEY FEATURES'}
            </span>
            <div className="w-8 h-[2.5px] bg-[#EA580C] rounded-full mt-1.5" />
          </div>

          {/* 2-Line Headline */}
          <h2 className={`flex flex-col gap-1.5 sm:gap-2 text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight ${isMarathi ? 'leading-[1.3]' : 'leading-[1.18]'} mt-2 mb-3.5`}>
            <span className="block text-[#1C1917]">
              {isMarathi ? 'सक्षम महाराष्ट्रासाठी' : 'Everything Needed For'}
            </span>
            <span className="block text-[#EA580C]">
              {isMarathi ? 'सर्वसमावेशक डिजिटल व्यासपीठ.' : 'A Skilled Maharashtra.'}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-600 text-sm sm:text-[15px] font-medium max-w-[500px] leading-relaxed">
            {isMarathi
              ? 'महाराष्ट्राच्या एकात्मिक कौशल्य आणि रोजगार परिसंस्थेला सक्षम करणारे सहा मुख्य स्तंभ.'
              : "Six core pillars powering Maharashtra's unified skill and employability ecosystem."}
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* SIX CORE PILLARS GRID (2 Rows x 3 Columns)                */}
        {/* 100% Visual and Structural Match to Reference Mockup       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 my-6 w-full">
          {featurePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="rounded-[20px] p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 group cursor-pointer"
              style={{
                background: 'linear-gradient(165deg, #FFF8F1 0%, #FFECD8 100%)',
                border: '1.5px solid #FCD4B6',
                boxShadow: '0 6px 24px rgba(74, 36, 20, 0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#EA580C';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 36px -4px rgba(234, 88, 12, 0.14), 0 4px 10px rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#FCD4B6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(74, 36, 20, 0.06)';
              }}
            >
              {/* Watermark Illustration Graphic */}
              <div className="absolute right-4 top-[78px] w-[88px] h-[60px] pointer-events-none select-none z-0 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                {pillar.watermark}
              </div>

              {/* Card Top: Icon & Category Tag */}
              <div className="flex items-center justify-between mb-3 relative z-20">
                <div className="w-12 h-12 rounded-[14px] bg-white/70 border border-[#F6C9A4] flex items-center justify-center text-[#EA580C] shadow-sm group-hover:scale-105 transition-transform duration-200">
                  {pillar.icon}
                </div>
                <span className="text-[12px] font-semibold tracking-normal px-3 py-1 rounded-full bg-white/70 border border-[#F6C9A4] text-[#EA580C]">
                  {isMarathi ? pillar.tagMr : pillar.tag}
                </span>
              </div>

              {/* Card Body: Title & Description */}
              <div className="relative z-10 mb-4">
                <h3
                  className="text-[17px] sm:text-[18px] font-bold text-[#2C1A0E] group-hover:text-[#EA580C] transition-colors mb-1.5 leading-snug tracking-tight"
                  style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
                >
                  {isMarathi ? pillar.titleMr : pillar.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#61554D] leading-[1.55] font-normal max-w-[280px]">
                  {isMarathi ? pillar.descMr : pillar.desc}
                </p>
              </div>

              {/* Card Bottom: CTA Link & Arrow Button */}
              <div className="flex items-center justify-between pt-3 relative z-10 mt-auto border-t border-[#F6C9A4]/60">
                <span className="text-[13px] sm:text-[13.5px] font-bold text-[#EA580C] group-hover:text-[#C2410C] transition-colors inline-flex items-center gap-1.5">
                  {isMarathi ? pillar.ctaMr : pillar.cta} →
                </span>
                <div className="w-9 h-9 rounded-full bg-white/70 border border-[#F6C9A4] text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white group-hover:border-[#EA580C] transition-all duration-200 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={15} strokeWidth={2.4} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
