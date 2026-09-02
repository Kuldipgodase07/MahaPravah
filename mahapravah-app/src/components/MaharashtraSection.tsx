import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#F56600' }}>★</span>
      ))}
    </div>
  );
}

export default function MaharashtraSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  const successStories = [
    {
      name: isMarathi ? 'रोहन पाटील' : 'Rohan Patil',
      role: isMarathi ? 'सॉफ्टवेअर इंजिनिअर, पुणे' : 'Software Engineer, Pune',
      quote: isMarathi
        ? '"महाप्रवाहने मला योग्य कौशल्याचा अभ्यासक्रम शोधण्यास मदत केली आणि आज मला माझे स्वप्नातील काम मिळाले आहे."'
        : '"MahaPravah helped me find the right course and now I have my dream job."',
      rating: 5,
    },
    {
      name: isMarathi ? 'स्नेहा देशमुख' : 'Sneha Deshmukh',
      role: isMarathi ? 'डेटा विश्लेषक, मुंबई' : 'Data Analyst, Mumbai',
      quote: isMarathi
        ? '"कौशल्य विकास कार्यक्रमांमुळे माझा आत्मविश्वास वाढला आणि उत्तम करिअर संधींचे दरवाजे उघडले."'
        : '"The skilling programs boosted my confidence and career opportunities."',
      rating: 5,
    },
    {
      name: isMarathi ? 'आकाश जाधव' : 'Akash Jadhav',
      role: isMarathi ? 'एचआर मॅनेजर, नाशिक' : 'HR Manager, Nashik',
      quote: isMarathi
        ? '"विद्यार्थी आणि उद्योजकांना एकत्र जोडून सक्षम भविष्य घडवणारे हे एक उत्कृष्ट व्यासपीठ आहे."'
        : '"A great platform for students and employers to connect and grow together."',
      rating: 5,
    },
  ];

  const updates = [
    {
      tag: isMarathi ? 'अभ्यासक्रम' : 'COURSE',
      tagColor: 'rgba(245,102,0,0.10)',
      tagTextColor: '#F56600',
      title: isMarathi ? 'नवीन AI आणि डेटा सायन्स अभ्यासक्रम आता उपलब्ध!' : 'New AI & Data Science Courses Now Live!',
      desc: isMarathi ? 'उद्योग जगताशी सुसंगत आधुनिक कौशल्य अभ्यासक्रम.' : 'Industry-relevant courses to boost your skills and career.',
      date: isMarathi ? '२८ मे २०२६' : '28 May 2026',
    },
    {
      tag: isMarathi ? 'संधी' : 'OPPORTUNITY',
      tagColor: 'rgba(107,53,27,0.08)',
      tagTextColor: '#6B351B',
      title: isMarathi ? '१०००+ नवीन इंटर्नशिप संधी जोडल्या' : '1000+ Internship Opportunities Added',
      desc: isMarathi ? 'महाराष्ट्रभरातील नामांकित कंपन्यांमध्ये इंटर्नशिपच्या संधी.' : 'Explore internships from top companies across Maharashtra.',
      date: isMarathi ? '२५ मे २०२६' : '25 May 2026',
    },
    {
      tag: isMarathi ? 'घोषणा' : 'ANNOUNCEMENT',
      tagColor: 'rgba(245,102,0,0.08)',
      tagTextColor: '#EA580C',
      title: isMarathi ? 'महाप्रवाह विद्यार्थी चॅलेंज २०२६ सुरू' : 'MahaPravah Student Challenge 2026 Launched',
      desc: isMarathi ? 'तुमचे कौशल्य दाखवा आणि आकर्षक बक्षिसे जिंका!' : 'Showcase your skills and win exciting rewards!',
      date: isMarathi ? '२२ मे २०२६' : '22 May 2026',
    },
  ];

  return (
    <section className={`py-0 ${isMarathi ? 'font-poppins' : ''}`} ref={ref}>
      {/* What's New / Updates Section */}
      <div className="py-16 md:py-20" style={{ background: '#FDFCFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: What's New */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-3">{isMarathi ? 'नवीन काय आहे' : "WHAT'S NEW"}</p>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-2 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
                style={{ color: '#1C1917' }}
              >
                {isMarathi ? 'नवीन संधी,' : 'New Opportunities,'}
              </h3>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-4 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
                style={{ color: '#F56600' }}
              >
                {isMarathi ? 'नवीन दिशा!' : 'New Directions!'}
              </h3>
              <div className="w-10 h-1 rounded-full mb-4" style={{ background: '#F56600' }} />
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {isMarathi
                  ? 'नवीनतम अभ्यासक्रम, रोजगार संधी आणि शासकीय उपक्रमांशी सतत जोडलेले राहा.'
                  : 'Stay updated with the latest courses, opportunities, initiatives and announcements.'}
              </p>
              <a
                href="#explore"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg, #F56600, #EA580C)' }}
              >
                {isMarathi ? 'सर्व अपडेट्स पहा →' : 'View All Updates →'}
              </a>
            </motion.div>

            {/* Center: Latest Updates */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-brown-800" style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}>
                  {isMarathi ? 'ताजी माहिती व सूचना' : 'Latest Updates & Notices'}
                </h4>
                <a href="#updates" className="text-xs font-semibold" style={{ color: '#F56600' }}>
                  {t.common.viewAll} →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {updates.map((update, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border bg-white hover:shadow-card transition-all duration-200 cursor-pointer flex flex-col justify-between"
                    style={{ borderColor: 'rgba(107,53,27,0.10)' }}
                  >
                    <div>
                      <span
                        className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md mb-2"
                        style={{ background: update.tagColor, color: update.tagTextColor }}
                      >
                        {update.tag}
                      </span>
                      <h5 className="font-bold text-sm text-stone-900 mb-1" style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}>
                        {update.title}
                      </h5>
                      <p className="text-xs text-stone-500 leading-relaxed mb-3">
                        {update.desc}
                      </p>
                    </div>
                    <span className="text-[11px] text-stone-400 font-medium">
                      {update.date}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials / Success Stories */}
      <div className="py-16 md:py-20" style={{ background: '#FFF9F3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Stories */}
            <div>
              <p className="section-label mb-2">{t.maharashtra.storiesLabel}</p>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-1 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
                style={{ color: '#1C1917' }}
              >
                {t.maharashtra.storiesTitle}
              </h3>
              <h4
                className="text-lg font-semibold mb-6"
                style={{ color: '#F56600', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
              >
                {isMarathi ? 'तुमच्या यशाची दिशा.' : 'The Direction to Your Success.'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {successStories.map((story, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-4 rounded-xl border bg-white hover:shadow-card transition-all duration-200"
                    style={{ borderColor: 'rgba(107,53,27,0.10)' }}
                  >
                    <StarRating count={story.rating} />
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed mb-3 italic">
                      {story.quote}
                    </p>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #F56600, #EA580C)' }}
                      >
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold" style={{ color: '#F56600' }}>{story.name}</p>
                        <p className="text-xs text-stone-400">{story.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Heritage and statewide coverage */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden p-8"
              style={{
                background: 'linear-gradient(135deg, #FFF9F3, #FFE8D0)',
                border: '1px solid rgba(245,102,0,0.15)',
                minHeight: '280px',
              }}
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: '#4A2414', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
              >
                {isMarathi ? 'महाराष्ट्राच्या मातीशी जोडलेले.' : 'Rooted in Maharashtra.'}
                <br />
                <span style={{ color: '#F56600' }}>{isMarathi ? 'उज्ज्वल भविष्यासाठी सज्ज.' : 'Built for the Future.'}</span>
              </h3>
              <div className="w-10 h-1 rounded-full mb-4" style={{ background: '#F56600' }} />
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {t.maharashtra.desc}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  isMarathi ? 'ऐतिहासिक गड-किल्ले' : 'Forts & Heritage',
                  isMarathi ? 'आधुनिक उद्योग क्षेत्र' : 'Modern Industry Hubs',
                  isMarathi ? '३६ जिल्हे जोडलेले' : '36 Districts Connected',
                  isMarathi ? 'ग्रामीण व शहरी सक्षमीकरण' : 'Rural & Urban Reach'
                ].map((label, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: '#6B351B' }}
                  >
                    <span style={{ color: '#F56600' }}>◆</span> {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
