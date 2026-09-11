import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CTA from './CTA';

export default function MaharashtraSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { isMarathi } = useLanguage();

  const updates = [
    {
      id: 1,
      tag: isMarathi ? 'अभ्यासक्रम' : 'COURSE',
      title: isMarathi
        ? 'नवीन AI आणि डेटा सायन्स अभ्यासक्रम आता उपलब्ध!'
        : 'New AI & Data Science Courses Now Live!',
      desc: isMarathi
        ? 'उद्योग जगताशी सुसंगत आधुनिक कौशल्य अभ्यासक्रम.'
        : 'Industry-relevant courses to boost your skills and career.',
      date: isMarathi ? '२८ मे २०२४' : '28 May 2024',
      image: '/update-ai-course@2x.png',
      alt: 'AI & Data Science Courses',
    },
    {
      id: 2,
      tag: isMarathi ? 'संधी' : 'OPPORTUNITY',
      title: isMarathi
        ? '१०००+ नवीन इंटर्नशिप संधी जोडल्या'
        : '1000+ Internship Opportunities Added',
      desc: isMarathi
        ? 'महाराष्ट्रभरातील नामांकित कंपन्यांमध्ये इंटर्नशिपच्या संधी.'
        : 'Explore internships from top companies across Maharashtra.',
      date: isMarathi ? '२५ मे २०२४' : '25 May 2024',
      image: '/update-internship@2x.png',
      alt: 'Internship Opportunities',
    },
    {
      id: 3,
      tag: isMarathi ? 'घोषणा' : 'ANNOUNCEMENT',
      title: isMarathi
        ? 'महाप्रवाह विद्यार्थी चॅलेंज २०२४ सुरू'
        : 'MahaPravah Student Challenge 2024 Launched',
      desc: isMarathi
        ? 'तुमचे कौशल्य दाखवा आणि आकर्षक बक्षिसे जिंका!'
        : 'Showcase your skills and win exciting rewards!',
      date: isMarathi ? '२२ मे २०२४' : '22 May 2024',
      image: '/update-challenge@2x.png',
      alt: 'MahaPravah Student Challenge',
    },
  ];

  const events = [
    {
      id: 1,
      month: isMarathi ? 'जून' : 'JUN',
      day: isMarathi ? '०५' : '05',
      title: isMarathi ? 'वेबिनार: भविष्यातील कार्य आणि कौशल्ये' : 'Webinar: Future of Work & Skills',
      dateTime: isMarathi ? '०५ जून २०२४  •  ११:०० AM - १२:३० PM' : '05 June 2024  •  11:00 AM - 12:30 PM',
      location: isMarathi ? 'ऑनलाइन' : 'Online',
      isOnline: true,
    },
    {
      id: 2,
      month: isMarathi ? 'जून' : 'JUN',
      day: isMarathi ? '१२' : '12',
      title: isMarathi ? 'कॅम्पस कनेक्ट – पुणे' : 'Campus Connect – Pune',
      dateTime: isMarathi ? '१२ जून २०२४  •  १०:०० AM - ०२:०० PM' : '12 June 2024  •  10:00 AM - 02:00 PM',
      location: isMarathi ? 'पुणे, महाराष्ट्र' : 'Pune, Maharashtra',
      isOnline: false,
    },
    {
      id: 3,
      month: isMarathi ? 'जून' : 'JUN',
      day: isMarathi ? '१८' : '18',
      title: isMarathi ? 'रेझ्युमे बिल्डिंग कार्यशाळा' : 'Resume Building Workshop',
      dateTime: isMarathi ? '१८ जून २०२४  •  ०३:०० PM - ०५:०० PM' : '18 June 2024  •  03:00 PM - 05:00 PM',
      location: isMarathi ? 'ऑनलाइन' : 'Online',
      isOnline: true,
    },
    {
      id: 4,
      month: isMarathi ? 'जून' : 'JUN',
      day: isMarathi ? '२५' : '25',
      title: isMarathi ? 'रोजगारक्षमता कौशल्य बूटकॅम्प' : 'Employability Skills Bootcamp',
      dateTime: isMarathi ? '२५ जून २०२४  •  ११:०० AM - ०४:०० PM' : '25 June 2024  •  11:00 AM - 04:00 PM',
      location: isMarathi ? 'मुंबई, महाराष्ट्र' : 'Mumbai, Maharashtra',
      isOnline: false,
    },
  ];

  return (
    <section
      ref={ref}
      className={`relative py-14 md:py-20 overflow-hidden ${isMarathi ? 'font-poppins' : ''}`}
      style={{
        backgroundImage: "url('/maharashtra-section-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FFF8F2',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* ========================================================= */}
          {/* CARD 1: WHAT'S NEW (Left Highlight Card)                  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 xl:col-span-3 rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 md:p-7 transition-all duration-300"
            style={{
              background: 'linear-gradient(165deg, #FFF8F1 0%, #FFECD8 100%)',
              border: '1.5px solid #FCD4B6',
              boxShadow: '0 8px 30px rgba(74, 36, 20, 0.06)',
            }}
          >
            {/* Top Content */}
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C] mb-3">
                WHAT'S NEW
              </span>

              <h2
                className="text-[28px] sm:text-[32px] font-extrabold tracking-tight leading-[1.18] mb-1 font-poppins"
                style={{ color: '#2C1A0E' }}
              >
                {isMarathi ? 'नवीन संधी,' : 'नवीन संधी,'}
              </h2>
              <h2
                className="text-[28px] sm:text-[32px] font-extrabold tracking-tight leading-[1.18] mb-3.5 font-poppins"
                style={{ color: '#F56600' }}
              >
                {isMarathi ? 'नवीन दिशा!' : 'नवीन दिशा!'}
              </h2>

              {/* Accent Orange Underline */}
              <div className="w-8 h-[3.5px] rounded-full bg-[#F56600] mb-4" />

              <p className="text-[13px] text-[#61554D] leading-relaxed mb-6 font-medium max-w-[240px]">
                {isMarathi
                  ? 'नवीनतम अभ्यासक्रम, संधी, उपक्रम आणि घोषणांसह सतत जोडलेले राहा.'
                  : 'Stay updated with the latest courses, opportunities, initiatives and announcements.'}
              </p>

              <a
                href="#updates"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-bold shadow-sm transition-all duration-200 group"
                style={{
                  backgroundColor: '#E65100',
                  boxShadow: '0 3px 10px rgba(230, 81, 0, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D84315')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E65100')}
              >
                <span>{isMarathi ? 'सर्व अपडेट्स पहा' : 'View All Updates'}</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>

            {/* Megaphone Artwork positioned inside card at bottom right */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none select-none z-0">
              <img
                src="/megaphone-art@2x.png"
                alt="Megaphone illustration"
                className="w-full h-full object-contain object-bottom-right opacity-35"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 2: LATEST UPDATES (Center Bulletin Card)             */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 xl:col-span-5 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(175deg, #FFFDFB 0%, #FFF5EB 100%)',
              border: '1.5px solid #F8DFC8',
              boxShadow: '0 8px 30px rgba(74, 36, 20, 0.06)',
            }}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#F7E2CE]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FFEFE0] border border-[#FCD4B6] flex items-center justify-center text-[#EA580C]">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3h5v2h-5V6zm0 4h5v2h-5v-2zm-6-4h4v6H6V6zm13 13H5V5h1v14h13v0zm-1-2H6v-2h12v2zm0-3H6v-2h12v2z" />
                    </svg>
                  </div>
                  <h3
                    className="text-[14px] sm:text-[15px] font-extrabold uppercase tracking-wider font-poppins"
                    style={{ color: '#3A2012' }}
                  >
                    {isMarathi ? 'ताजी माहिती व सूचना' : 'LATEST UPDATES'}
                  </h3>
                </div>

                <a
                  href="#updates"
                  className="text-[12px] sm:text-[13px] font-bold text-[#F56600] hover:text-[#D84315] inline-flex items-center gap-1 transition-colors"
                >
                  <span>{isMarathi ? 'सर्व पहा' : 'View All'}</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              {/* 3 Updates Stack */}
              <div className="space-y-3">
                {updates.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-xl p-2.5 sm:p-3 border border-[#F5DEC9] bg-[#FFFBF7]/90 hover:bg-[#FFF5EB] hover:border-[#F56600] hover:shadow-[0_4px_18px_rgba(245,102,0,0.10)] transition-all duration-200 flex items-center gap-3.5 cursor-pointer"
                  >
                    {/* Thumbnail Image */}
                    <div className="w-[100px] h-[64px] sm:w-[108px] sm:h-[68px] rounded-lg overflow-hidden flex-shrink-0 bg-[#FFEFE0] border border-[#F2D2B8]/70">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="inline-block text-[9.5px] font-extrabold text-[#EA580C] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#F56600]/40 bg-[#FFEFE0]">
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-[#8C6D56] font-medium whitespace-nowrap">
                          <svg className="w-3 h-3 text-[#A87452]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <h4 className="text-[13px] sm:text-[13.5px] font-bold text-stone-900 leading-snug line-clamp-1 group-hover:text-[#F56600] transition-colors mb-0.5">
                        {item.title}
                      </h4>

                      <p className="text-[11px] text-stone-600 leading-snug line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 3: UPCOMING EVENTS (Right Calendar Card)             */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 xl:col-span-4 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(175deg, #FFFDFB 0%, #FFF5EB 100%)',
              border: '1.5px solid #F8DFC8',
              boxShadow: '0 8px 30px rgba(74, 36, 20, 0.06)',
            }}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#F7E2CE]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FFEFE0] border border-[#FCD4B6] flex items-center justify-center text-[#EA580C]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.9}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-[14px] sm:text-[15px] font-extrabold uppercase tracking-wider font-poppins"
                    style={{ color: '#3A2012' }}
                  >
                    {isMarathi ? 'आगामी कार्यक्रम' : 'UPCOMING EVENTS'}
                  </h3>
                </div>

                <a
                  href="#events"
                  className="text-[12px] sm:text-[13px] font-bold text-[#F56600] hover:text-[#D84315] inline-flex items-center gap-1 transition-colors"
                >
                  <span>{isMarathi ? 'सर्व पहा' : 'View All'}</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              {/* 4 Events Stack */}
              <div className="space-y-2.5">
                {events.map((ev) => (
                  <div
                    key={ev.id}
                    className="group rounded-xl p-2.5 sm:p-3 border border-[#F5DEC9] bg-[#FFFBF7]/90 hover:bg-[#FFF5EB] hover:border-[#F56600] hover:shadow-[0_4px_18px_rgba(245,102,0,0.10)] transition-all duration-200 flex items-center gap-3 cursor-pointer"
                  >
                    {/* Two-tone Date Badge */}
                    <div className="w-11 sm:w-12 rounded-lg overflow-hidden border border-[#EA580C]/40 flex flex-col flex-shrink-0 shadow-xs">
                      <div className="bg-[#EA580C] text-white text-[9.5px] font-extrabold text-center py-0.5 tracking-wider uppercase leading-tight">
                        {ev.month}
                      </div>
                      <div className="bg-[#FFF8F1] text-[#2C1A0E] font-extrabold text-[15px] sm:text-[16px] text-center py-1 leading-none">
                        {ev.day}
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-stone-900 leading-snug line-clamp-1 group-hover:text-[#F56600] transition-colors mb-0.5">
                        {ev.title}
                      </h4>

                      <div className="text-[11px] text-stone-600 font-medium leading-tight mb-0.5">
                        {ev.dateTime}
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                        {ev.isOnline ? (
                          <svg className="w-3.5 h-3.5 text-[#A87452] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-[#EA580C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.587a14.28 14.28 0 0 0 2.274 1.765 11.455 11.455 0 0 0 1.038.573l.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span>{ev.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Centered Link */}
            <div className="pt-3 text-center">
              <a
                href="#events"
                className="text-[12.5px] sm:text-[13px] font-bold text-[#F56600] hover:text-[#D84315] inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>{isMarathi ? 'संपूर्ण कॅलेंडर पहा' : 'View Full Calendar'}</span>
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* BANNER COMPONENT BELOW THE THREE CARDS                    */}
        {/* ========================================================= */}
        <CTA />

      </div>
    </section>
  );
}
