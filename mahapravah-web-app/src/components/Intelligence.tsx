import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Lightbulb, BarChart3, MapPin, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Intelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { isMarathi } = useLanguage();

  const cards = [
    {
      id: 'trends',
      icon: TrendingUp,
      stat: '+24%',
      titleMr: 'कौशल्य ट्रेंड्स',
      titleEn: 'Skill Trends',
      descMr: 'उद्योग जगतातील वाढत्या कौशल्यांचे रिअल-टाइम विश्लेषण',
      descEn: 'Real-time tracking of in-demand skills across industries',
      actionMr: '+ नवीन कौशल्यांचे विश्लेषण वाचा',
      actionEn: '+ Read Skill Trends Analysis',
      link: '#trends',
    },
    {
      id: 'recommendations',
      icon: Lightbulb,
      stat: '87%',
      titleMr: 'स्मार्ट शिफारणी',
      titleEn: 'Smart Recommendations',
      descMr: 'नागरिकांच्या क्षमतेनुसार AI-आधारित योग्य नोकरी शिफारणी',
      descEn: 'AI-driven job matching based on individual candidate competency',
      actionMr: '+ अधिक शिफारणी पहा',
      actionEn: '+ View More Recommendations',
      link: '#recommendations',
    },
    {
      id: 'growth',
      icon: BarChart3,
      stat: '3.2x',
      titleMr: 'करिअर प्रगती',
      titleEn: 'Career Progression',
      descMr: 'डेटा-आधारित करिअर नियोजन आणि प्रगती ट्रॅकिंग',
      descEn: 'Data-driven career trajectory planning and milestone tracking',
      actionMr: '+ तुमची प्रगती ट्रॅक करा',
      actionEn: '+ Track Your Progress',
      link: '#growth',
    },
    {
      id: 'district',
      icon: MapPin,
      stat: '36',
      titleMr: 'जिल्हास्तरीय डेटा',
      titleEn: 'District-Level Data',
      descMr: '३६ जिल्ह्यांतील स्थानिक कौशल्य गरजा आणि रोजगार संधी',
      descEn: 'District-wise local skill demands and verified regional opportunities',
      actionMr: '+ जिल्हे तपशील पहा',
      actionEn: '+ View District Details',
      link: '#district',
    },
  ];

  const checklistItems = [
    { mr: 'एआय करिअर असिस्टंट', en: 'AI Career Assistant' },
    { mr: 'कौशल्य तफावत विश्लेषण', en: 'Skill Gap Analysis' },
    { mr: 'उद्योग-आधारित शिफारसी', en: 'Industry-Driven Recommendations' },
  ];

  return (
    <section
      id="intelligence"
      ref={ref}
      className={`relative w-full py-16 md:py-20 overflow-hidden select-none ${
        isMarathi ? 'font-poppins' : ''
      }`}
      style={{
        backgroundImage: "url('/intelligence-bg-art.png?v=v3')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundColor: '#1C0D06',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ═══════════════════════════════════════════════════
              LEFT COLUMN — Headline, Description & Checklist
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Small Orange Badge */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-4 h-0.5 bg-[#EA580C]" />
              <span
                className="text-[#EA580C] font-bold text-xs sm:text-[13px] tracking-wide uppercase"
                style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
              >
                {isMarathi ? 'स्मार्ट तंत्रज्ञान' : 'Smart Technology'}
              </span>
            </div>

            {/* 3-Line Authority Headline */}
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.45rem] font-extrabold tracking-tight mb-4 flex flex-col gap-1 sm:gap-1.5"
              style={{
                lineHeight: isMarathi ? 1.32 : 1.18,
              }}
            >
              <span
                className="block text-white whitespace-normal sm:whitespace-nowrap"
                style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
              >
                {isMarathi ? 'आमचा प्रभाव, तुमचा विकास!' : 'Our Impact, Your Growth!'}
              </span>
              <span
                className="block text-white"
                style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
              >
                {isMarathi ? 'भविष्यातील कौशल्ये,' : 'Future-Ready Skills,'}
              </span>
              <span
                className="block text-[#EA580C]"
                style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
              >
                {isMarathi ? 'आधुनिक तंत्रज्ञानाची साथ.' : 'Powered by Modern Tech.'}
              </span>
            </h2>

            {/* Orange Accent Indicator Line */}
            <div className="w-14 h-1.5 rounded-full bg-[#EA580C] mb-5" />

            {/* Descriptive Paragraph */}
            <p
              className="text-stone-300 text-sm sm:text-[15px] leading-relaxed mb-7 max-w-[500px]"
              style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
            >
              {isMarathi
                ? 'आर्टिफिशिअल इंटेलिजन्स आणि डेटा सायन्सच्या सहाय्याने महाराष्ट्रातील तरुणांना जागतिक पातळीवरील कौशल्यांसाठी तयार करत आहोत.'
                : 'Empowering Maharashtra’s youth with global-standard skills through Artificial Intelligence and Data Science.'}
            </p>

            {/* 3 Checklist Items */}
            <div className="flex flex-col gap-3 mb-8 w-full">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EA580C]/20 border border-[#EA580C] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(234,88,12,0.3)]">
                    <Check size={12} className="text-[#EA580C] stroke-[3]" />
                  </div>
                  <span
                    className="text-white/95 text-sm sm:text-[15px] font-medium"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                  >
                    {isMarathi ? item.mr : item.en}
                  </span>
                </div>
              ))}
            </div>

            {/* Solid Pill CTA Button */}
            <a
              href="#explore"
              id="intelligence-explore-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-white font-bold text-sm sm:text-[15px] shadow-[0_4px_22px_rgba(245,102,0,0.38)] transition-all duration-200 hover:scale-105 active:scale-95 group"
              style={{
                background: 'linear-gradient(135deg, #F56600 0%, #EA580C 100%)',
                fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif",
              }}
            >
              <span>{isMarathi ? 'प्लॅटफॉर्म एक्सप्लोर करा' : 'Explore Platform'}</span>
              <ArrowRight
                size={16}
                className="transform transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* ═══════════════════════════════════════════════════
              RIGHT COLUMN — 2x2 Glassmorphic Intelligence Cards
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -4, borderColor: 'rgba(245, 102, 0, 0.48)' }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200"
                  style={{
                    background: 'rgba(38, 17, 8, 0.68)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1.2px solid rgba(245, 102, 0, 0.22)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.28)',
                  }}
                >
                  {/* Top Row: Icon on left, Bold Metric on right */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon Container Disc */}
                    <div className="w-12 h-12 rounded-full bg-[#4A2414]/90 border border-[#F56600]/30 flex items-center justify-center flex-shrink-0 shadow-[0_2px_12px_rgba(245,102,0,0.18)]">
                      <Icon size={22} className="text-[#EA580C]" />
                    </div>

                    {/* Bold Orange Metric */}
                    <span
                      className="text-2xl sm:text-3xl font-extrabold text-[#EA580C] tracking-tight"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {card.stat}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="text-lg sm:text-[19px] font-bold text-white mb-2"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
                  >
                    {isMarathi ? card.titleMr : card.titleEn}
                  </h3>

                  {/* Card Description */}
                  <p
                    className="text-xs sm:text-[13px] text-stone-300 leading-relaxed mb-5 line-clamp-2"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                  >
                    {isMarathi ? card.descMr : card.descEn}
                  </p>

                  {/* Footer Action Link */}
                  <a
                    href={card.link}
                    className="text-xs sm:text-[12.5px] font-semibold text-[#EA580C] hover:text-[#FF7A1A] transition-colors inline-flex items-center gap-1"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
                  >
                    {isMarathi ? card.actionMr : card.actionEn}
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
