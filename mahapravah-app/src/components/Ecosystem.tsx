import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const rawNodes = [
  { id: 'citizens', labelEn: 'Citizens', labelMr: 'नागरिक', color: '#F56600', angle: 270 },
  { id: 'training', labelEn: 'Training Institutes', labelMr: 'प्रशिक्षण संस्था', color: '#EA580C', angle: 330 },
  { id: 'employers', labelEn: 'Employers', labelMr: 'नियोक्ते', color: '#6B351B', angle: 30 },
  { id: 'govt', labelEn: 'Govt. Depts', labelMr: 'शासकीय विभाग', color: '#542A16', angle: 90 },
  { id: 'skills', labelEn: 'Skill Courses', labelMr: 'कौशल्य वर्ग', color: '#F56600', angle: 150 },
  { id: 'careers', labelEn: 'Career Growth', labelMr: 'करिअर संधी', color: '#EA580C', angle: 210 },
];

function polarToXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

const CX = 250, CY = 250, R = 170;

export default function Ecosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t, isMarathi } = useLanguage();

  return (
    <section className={`py-20 md:py-28 ${isMarathi ? 'font-poppins' : ''}`} style={{ background: '#FFF9F3' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">{t.ecosystem.sectionLabel}</p>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
            style={{ color: '#1C1917' }}
          >
            {t.ecosystem.headline}
          </h2>
          <p
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: '#4A2414', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
          >
            {t.ecosystem.titlePart1}{' '}
            <span style={{ color: '#F56600' }}>{t.ecosystem.titlePart2}</span>
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 rounded-full" style={{ background: '#F56600' }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SVG Ecosystem Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <svg
              viewBox="0 0 500 500"
              className="w-full max-w-sm md:max-w-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection lines */}
              {rawNodes.map((node, i) => {
                const pos = polarToXY(node.angle, R, CX, CY);
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={CX} y1={CY}
                    x2={pos.x} y2={pos.y}
                    stroke={node.color}
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 0.35 } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                );
              })}

              {/* Center hub */}
              <motion.circle
                cx={CX} cy={CY} r={55}
                fill="white"
                stroke="#F56600"
                strokeWidth="2.5"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, type: 'spring' }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />
              <motion.circle
                cx={CX} cy={CY} r={65}
                fill="none"
                stroke="rgba(245,102,0,0.15)"
                strokeWidth="2"
                strokeDasharray="8 5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1, rotate: 360 } : {}}
                transition={{ opacity: { duration: 0.5, delay: 0.5 }, rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />
              <text x={CX} y={CY - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill="#4A2414" fontFamily={isMarathi ? 'Poppins, sans-serif' : 'Manrope, Inter'}>MahaPravah</text>
              <text x={CX} y={CY + 8} textAnchor="middle" fontSize="9" fill="#6B351B" fontFamily={isMarathi ? 'Poppins, sans-serif' : 'Inter'}>{isMarathi ? 'प्लॅटफॉर्म' : 'Platform'}</text>

              {/* Outer nodes */}
              {rawNodes.map((node, i) => {
                const pos = polarToXY(node.angle, R, CX, CY);
                const label = isMarathi ? node.labelMr : node.labelEn;
                return (
                  <motion.g
                    key={`node-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                  >
                    <circle cx={pos.x} cy={pos.y} r={38} fill="white" stroke={node.color} strokeWidth="1.5" opacity="0.9"
                      style={{ filter: 'drop-shadow(0 2px 6px rgba(107,53,27,0.10))' }}
                    />
                    <circle cx={pos.x} cy={pos.y} r={48} fill="none" stroke={node.color} strokeWidth="1" opacity="0.12" />
                    <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="9" fill={node.color} fontWeight="600" fontFamily={isMarathi ? 'Poppins, sans-serif' : 'Inter'}>
                      {label.split(' ').map((word, wi) => (
                        <tspan key={wi} x={pos.x} dy={wi === 0 ? (label.split(' ').length > 1 ? '-6' : '0') : '11'}>
                          {word}
                        </tspan>
                      ))}
                    </text>
                  </motion.g>
                );
              })}

              {/* Outer orbit ring */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(245,102,0,0.08)" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Right: About content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label mb-3">ABOUT MAHAPRAVAH</p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#1C1917', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
            >
              {isMarathi ? 'एकच मंच, अनेक संधी' : 'One Platform, Endless Opportunities'}
            </h3>
            <h3
              className={`text-2xl md:text-3xl font-bold mb-4 ${isMarathi ? 'font-poppins' : 'devanagari-text'}`}
              style={{ color: '#F56600' }}
            >
              {isMarathi ? 'तुमच्या यशाची नवी दिशा.' : 'The New Direction for Your Success.'}
            </h3>
            <div className="w-10 h-1 rounded-full mb-5" style={{ background: '#F56600' }} />
            <p className="text-stone-600 leading-relaxed mb-6">
              {t.ecosystem.desc}
            </p>

            {/* Partner logos row */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: isMarathi ? 'कौशल्य विकास महाराष्ट्र' : 'Skill Development Maharashtra', abbr: 'SDM', color: '#F56600' },
                { name: 'MahaIT', abbr: 'MahaIT', color: '#4A2414' },
                { name: 'MSDM', abbr: 'MSDM', color: '#F56600' },
                { name: isMarathi ? 'महाराष्ट्र शासन' : 'Government of Maharashtra', abbr: 'GoM', color: '#542A16' },
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl border bg-white hover:shadow-card transition-all duration-200"
                  style={{ borderColor: 'rgba(107,53,27,0.10)' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: partner.color }}
                  >
                    {partner.abbr.slice(0, 1)}
                  </div>
                  <div className="text-xs font-medium text-stone-700">{partner.name}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#partners"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold"
              style={{ color: '#F56600', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.common.viewAll} →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
