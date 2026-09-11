import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ── Node Definitions ──
interface NodeItem {
  id: string;
  angleDeg: number;
  color: string;
  glowColor: string;
  iconPath: string;
  iconViewBox: string;
  titleMr: string[];
  titleEn: string[];
  roleMr: string;
  roleEn: string;
  metricMr: string;
  metricEn: string;
}

const CX = 270;
const CY = 270;
const R_ORBIT = 188;
const R_CENTER = 62;
const R_NODE = 43;

// 6 symmetric nodes at 60° intervals with strictly alternating Orange & Dark Brown colors:
const NODES: NodeItem[] = [
  {
    id: 'education',
    angleDeg: -120, // Top-Left (~10:00) -> 1. ORANGE
    color: '#EA580C',
    glowColor: 'rgba(234, 88, 12, 0.35)',
    iconPath: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4.82c0 1.66 3.13 3 7 3s7-1.34 7-3v-4.82l-7 3.82-7-3.82z',
    iconViewBox: '0 0 24 24',
    titleMr: ['शैक्षणिक', 'संस्था'],
    titleEn: ['Educational', 'Institutions'],
    roleMr: 'अभ्यासक्रम & संस्था जोडणी',
    roleEn: 'Curriculum & University Network',
    metricMr: '१,२००+ संस्था सक्रिय',
    metricEn: '1,200+ Institutes Connected',
  },
  {
    id: 'employer',
    angleDeg: -60, // Top-Right (~2:00) -> 2. DARK BROWN
    color: '#4A2414',
    glowColor: 'rgba(74, 36, 20, 0.35)',
    iconPath: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z',
    iconViewBox: '0 0 24 24',
    titleMr: ['नियोक्ता'],
    titleEn: ['Employers'],
    roleMr: 'उद्योग & रोजगार संधी',
    roleEn: 'Hiring & Industry Apprenticeships',
    metricMr: '५,०००+ नोकऱ्या उपलब्ध',
    metricEn: '5,000+ Verified Openings',
  },
  {
    id: 'govt',
    angleDeg: 0, // Right (~3:00) -> 3. ORANGE
    color: '#EA580C',
    glowColor: 'rgba(234, 88, 12, 0.35)',
    iconPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    iconViewBox: '0 0 24 24',
    titleMr: ['शासकीय', 'विभाग'],
    titleEn: ['Govt.', 'Depts'],
    roleMr: 'शासकीय योजना & शिष्यवृत्ती',
    roleEn: 'State Policies & Subsidies',
    metricMr: '३६ जिल्हे समाविष्ट',
    metricEn: '36 Districts Integrated',
  },
  {
    id: 'skills',
    angleDeg: 60, // Bottom-Right (~4:00) -> 4. DARK BROWN
    color: '#4A2414',
    glowColor: 'rgba(74, 36, 20, 0.35)',
    iconPath: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z M19 18h2v3h-2zm-5 0h2v3h-2zm-5 0h2v3H9zm-5 0h2v3H4z',
    iconViewBox: '0 0 24 24',
    titleMr: ['कौशल्य', 'वर्ग'],
    titleEn: ['Skill', 'Courses'],
    roleMr: 'प्रमाणित कौशल्य प्रशिक्षण',
    roleEn: 'Industry Certified Modules',
    metricMr: '४५०+ कोर्सेस',
    metricEn: '450+ Certified Tracks',
  },
  {
    id: 'assess',
    angleDeg: 120, // Bottom-Left (~8:00) -> 5. ORANGE
    color: '#EA580C',
    glowColor: 'rgba(234, 88, 12, 0.35)',
    iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V18z',
    iconViewBox: '0 0 24 24',
    titleMr: ['कौशल्य', 'तपासणी'],
    titleEn: ['Skill', 'Assessment'],
    roleMr: 'क्षमता मूल्यमापन & प्रमाणपत्र',
    roleEn: 'Aptitude & Competency Testing',
    metricMr: 'डिजिटल प्रमाणपत्रे',
    metricEn: 'Verified Credentials',
  },
  {
    id: 'youth',
    angleDeg: 180, // Left (~9:00) -> 6. DARK BROWN
    color: '#4A2414',
    glowColor: 'rgba(74, 36, 20, 0.35)',
    iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    iconViewBox: '0 0 24 24',
    titleMr: ['युवक'],
    titleEn: ['Youth'],
    roleMr: 'करिअर मार्गदर्शन & प्रगती',
    roleEn: 'Direct Opportunity Gateway',
    metricMr: '१० लाख+ विद्यार्थी',
    metricEn: '10 Lakh+ Students Registered',
  },
];

// ── 4 Partner Cards ──
const PARTNERS = [
  {
    id: 'sdm',
    image: '/emblem-sdm.png',
    titleMr: 'कौशल्य विकास महाराष्ट्र',
    subMr: 'कौशल्य, रोजगार, उद्योजकता',
    titleEn: 'Skill Development Maharashtra',
    subEn: 'Skills, Employment, Entrepreneurship',
  },
  {
    id: 'mahait',
    image: '/emblem-mahait.png',
    titleMr: 'MahaIT',
    subMr: 'तंत्रज्ञान, नवोन्मेष, डिजिटल प्रगती',
    titleEn: 'MahaIT',
    subEn: 'Technology, Innovation, Digital Progress',
  },
  {
    id: 'msdm',
    image: '/emblem-msdm.png',
    titleMr: 'MSDM',
    subMr: 'कौशल्य विकास, प्रशिक्षण, संधी',
    titleEn: 'MSDM',
    subEn: 'Skill Development, Training, Opportunities',
  },
  {
    id: 'govt',
    image: '/emblem-govt.png',
    titleMr: 'महाराष्ट्र शासन',
    subMr: 'आपले सरकार, आपल्या सेवेत',
    titleEn: 'Government of Maharashtra',
    subEn: 'Aaple Sarkar, In Your Service',
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { isMarathi } = useLanguage();
  
  // Live Simulation state: cycles automatically or follows user hover
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);

  // Auto-cycle active simulation node every 3 seconds if not user-hovered
  useEffect(() => {
    if (isUserHovering) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % NODES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isUserHovering]);

  const activeNode = NODES[activeNodeIndex];

  return (
    <section
      id="about"
      ref={ref}
      className={`relative w-full pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-10 sm:pb-12 md:pb-14 lg:pb-16 overflow-hidden ${
        isMarathi ? 'font-poppins' : ''
      }`}
      style={{
        backgroundImage: 'url(/about-ecosystem-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ═══════════════════════════════════════════════════
              LEFT COLUMN — Fully Vector-Locked Live Simulation SVG
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-center justify-center select-none"
          >
            {/* Live Simulation Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#F56600]/30 shadow-[0_2px_10px_rgba(245,102,0,0.10)] mb-3 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EA580C]"></span>
              </span>
              <span
                className="text-[11px] sm:text-xs font-bold text-[#4A2414] tracking-wide flex items-center gap-1.5"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                <Activity size={13} className="text-[#EA580C]" />
                {isMarathi ? 'थेट डिजिटल नेटवर्क सिम्युलेशन' : 'LIVE ECOSYSTEM SIMULATION'}
              </span>
            </div>

            {/* ── UNIFIED 100% VECTOR-LOCKED SVG CANVAS ── */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <svg
                viewBox="0 0 540 540"
                className="w-full h-full overflow-visible"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(44, 26, 14, 0.05))' }}
              >
                <defs>
                  {/* Glowing filter for pulses */}
                  <filter id="simGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Drop shadow for center card */}
                  <filter id="hubCenterShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#F56600" floodOpacity="0.25" />
                  </filter>

                  {/* Drop shadow for node bubbles */}
                  <filter id="nodeBubbleShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#3D1F0A" floodOpacity="0.12" />
                  </filter>

                  {/* Animated Circular Orbit Path for Orbit Particle */}
                  <path
                    id="orbitCircularPath"
                    d={`M ${CX} ${CY - R_ORBIT} A ${R_ORBIT} ${R_ORBIT} 0 1 1 ${CX - 0.01} ${CY - R_ORBIT}`}
                    fill="none"
                  />
                </defs>

                {/* ── 1. Radar Heartbeat Ripple Waves expanding from center ── */}
                <circle cx={CX} cy={CY} r={R_CENTER} fill="none" stroke="#EA580C" strokeWidth="1.5" opacity="0.5">
                  <animate attributeName="r" values={`${R_CENTER};${R_CENTER + 45}`} dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={CX} cy={CY} r={R_CENTER} fill="none" stroke="#F56600" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values={`${R_CENTER};${R_CENTER + 70}`} dur="3s" begin="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>

                {/* ── 2. Dashed Circular Orbit Ring ── */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R_ORBIT}
                  fill="none"
                  stroke="#E4D5C8"
                  strokeWidth="1.6"
                  strokeDasharray="5 5"
                />

                {/* ── 3. Orbit Energy Packet running in continuous loop ── */}
                <circle r="4.5" fill="#EA580C" filter="url(#simGlow)">
                  <animateMotion dur="14s" repeatCount="indefinite">
                    <mpath href="#orbitCircularPath" />
                  </animateMotion>
                </circle>

                {/* ── 4. Radial Spokes & Live Bidirectional Data Flow ── */}
                {NODES.map((node, i) => {
                  const rad = (node.angleDeg * Math.PI) / 180;
                  const spokeStartR = R_CENTER + 6;
                  const spokeEndR = R_ORBIT - R_NODE;
                  const x1 = CX + spokeStartR * Math.cos(rad);
                  const y1 = CY + spokeStartR * Math.sin(rad);
                  const x2 = CX + spokeEndR * Math.cos(rad);
                  const y2 = CY + spokeEndR * Math.sin(rad);
                  const isActive = activeNode.id === node.id;

                  return (
                    <g key={`spoke-group-${node.id}`}>
                      {/* Terminal dot at bezel junction */}
                      <circle cx={x1} cy={y1} r="2.5" fill={node.color} opacity="0.85" />

                      {/* Base Spoke Line */}
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={node.color}
                        strokeWidth={isActive ? '2.8' : '1.8'}
                        strokeOpacity={isActive ? '1.0' : '0.65'}
                        style={{ transition: 'stroke-width 0.3s, stroke-opacity 0.3s' }}
                      />

                      {/* Active Beam Glow when node is active in simulation */}
                      {isActive && (
                        <line
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#F56600"
                          strokeWidth="4.5"
                          strokeOpacity="0.45"
                          filter="url(#simGlow)"
                        />
                      )}

                      {/* Live Data Pulse 1: Outward (Center ➔ Stakeholder) */}
                      <circle r="3.2" fill={node.color} filter="url(#simGlow)">
                        <animate
                          attributeName="cx"
                          values={`${x1};${x2}`}
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin={`${i * 0.42}s`}
                        />
                        <animate
                          attributeName="cy"
                          values={`${y1};${y2}`}
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin={`${i * 0.42}s`}
                        />
                        <animate
                          attributeName="opacity"
                          values="0;1;1;0"
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin={`${i * 0.42}s`}
                        />
                      </circle>

                      {/* Live Data Pulse 2: Inward (Stakeholder ➔ Center) */}
                      <circle r="2.5" fill="#F56600" opacity="0.8">
                        <animate
                          attributeName="cx"
                          values={`${x2};${x1}`}
                          dur="3.0s"
                          repeatCount="indefinite"
                          begin={`${i * 0.5 + 1.2}s`}
                        />
                        <animate
                          attributeName="cy"
                          values={`${y2};${y1}`}
                          dur="3.0s"
                          repeatCount="indefinite"
                          begin={`${i * 0.5 + 1.2}s`}
                        />
                        <animate
                          attributeName="opacity"
                          values="0;0.9;0.9;0"
                          dur="3.0s"
                          repeatCount="indefinite"
                          begin={`${i * 0.5 + 1.2}s`}
                        />
                      </circle>
                    </g>
                  );
                })}

                {/* ── 5. Clean, Strong Precision Bezel Outer Edge (Industry Engineering Dial) ── */}
                {/* Concentric outer bezel rim */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R_CENTER + 6}
                  fill="none"
                  stroke="#EA580C"
                  strokeWidth="1.2"
                  strokeOpacity="0.35"
                />

                {/* 24 Clean Radial Precision Bezel Ticks */}
                {Array.from({ length: 24 }).map((_, idx) => {
                  const deg = idx * 15;
                  const rad = (deg * Math.PI) / 180;
                  const isMajor = deg % 60 === 0; // Aligned with the 6 spokes
                  const tickInner = R_CENTER + 1;
                  const tickOuter = R_CENTER + (isMajor ? 6.5 : 4.5);
                  return (
                    <line
                      key={`bezel-tick-${idx}`}
                      x1={CX + tickInner * Math.cos(rad)}
                      y1={CY + tickInner * Math.sin(rad)}
                      x2={CX + tickOuter * Math.cos(rad)}
                      y2={CY + tickOuter * Math.sin(rad)}
                      stroke="#EA580C"
                      strokeWidth={isMajor ? '2.0' : '1.0'}
                      strokeOpacity={isMajor ? '0.90' : '0.45'}
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* ── 6. Central MahaPravah Platform Hub (Crisp White + Clean 2.5px Border) ── */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R_CENTER}
                  fill="#FFFFFF"
                  stroke="#EA580C"
                  strokeWidth="2.8"
                  filter="url(#hubCenterShadow)"
                />

                {/* ── Official MahaPravah Emblem Properly Centered with Generous Breathing Room ── */}
                <image
                  href="/mahapravah-emblem-logo.png"
                  x={CX - 46}
                  y={CY - 46}
                  width="92"
                  height="92"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* ── 7. The 6 Stakeholder Orbit Nodes (Mathematically Exact Coordinates) ── */}
                {NODES.map((node, i) => {
                  const rad = (node.angleDeg * Math.PI) / 180;
                  const nx = CX + R_ORBIT * Math.cos(rad);
                  const ny = CY + R_ORBIT * Math.sin(rad);
                  const isActive = activeNode.id === node.id;
                  const titleLines = isMarathi ? node.titleMr : node.titleEn;

                  return (
                    <g
                      key={`node-${node.id}`}
                      className="cursor-pointer transition-transform duration-300"
                      onMouseEnter={() => {
                        setIsUserHovering(true);
                        setActiveNodeIndex(i);
                      }}
                      onMouseLeave={() => setIsUserHovering(false)}
                      onClick={() => {
                        setIsUserHovering(true);
                        setActiveNodeIndex(i);
                      }}
                    >
                      {/* Active Node Pulsing Halo */}
                      {isActive && (
                        <circle
                          cx={nx}
                          cy={ny}
                          r={R_NODE + 8}
                          fill="none"
                          stroke={node.color}
                          strokeWidth="2"
                          strokeDasharray="4 3"
                          opacity="0.75"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from={`0 ${nx} ${ny}`}
                            to={`360 ${nx} ${ny}`}
                            dur="8s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      {/* White Node Circle Body */}
                      <circle
                        cx={nx}
                        cy={ny}
                        r={R_NODE}
                        fill="#FFFFFF"
                        stroke={node.color}
                        strokeWidth={isActive ? '2.8' : '2.0'}
                        filter="url(#nodeBubbleShadow)"
                        style={{ transition: 'stroke-width 0.2s' }}
                      />

                      {/* Node Icon */}
                      <g transform={`translate(${nx - 13}, ${ny - 25})`}>
                        <svg width="26" height="26" viewBox={node.iconViewBox}>
                          <path d={node.iconPath} fill={node.color} />
                        </svg>
                      </g>

                      {/* Node Text Label (1 or 2 lines centered inside the circle) */}
                      {titleLines.length === 1 ? (
                        <text
                          x={nx}
                          y={ny + 14}
                          textAnchor="middle"
                          fill={node.color}
                          style={{
                            fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                            fontWeight: 700,
                            fontSize: '11px',
                          }}
                        >
                          {titleLines[0]}
                        </text>
                      ) : (
                        <>
                          <text
                            x={nx}
                            y={ny + 8}
                            textAnchor="middle"
                            fill={node.color}
                            style={{
                              fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                              fontWeight: 700,
                              fontSize: '10px',
                            }}
                          >
                            {titleLines[0]}
                          </text>
                          <text
                            x={nx}
                            y={ny + 20}
                            textAnchor="middle"
                            fill={node.color}
                            style={{
                              fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif',
                              fontWeight: 700,
                              fontSize: '10px',
                            }}
                          >
                            {titleLines[1]}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* ── Active Node Real-Time Telemetry Card ── */}
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 px-4 py-2.5 rounded-xl bg-white/90 border border-[#EFE5DC] shadow-[0_4px_16px_rgba(44,26,14,0.06)] flex items-center justify-between gap-4 max-w-[420px] w-full backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: activeNode.color }}
                />
                <div className="flex flex-col text-left truncate">
                  <span
                    className="text-xs font-bold text-[#1C1917] truncate"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
                  >
                    {isMarathi ? activeNode.titleMr.join(' ') : activeNode.titleEn.join(' ')}
                  </span>
                  <span className="text-[10px] text-[#6B5749] font-medium truncate">
                    {isMarathi ? activeNode.roleMr : activeNode.roleEn}
                  </span>
                </div>
              </div>
              <span
                className="text-[10.5px] font-bold text-[#EA580C] px-2 py-0.5 rounded-full bg-[#FFF3E8] border border-[#EA580C]/20 flex-shrink-0"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {isMarathi ? activeNode.metricMr : activeNode.metricEn}
              </span>
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════
              RIGHT COLUMN — About MahaPravah & Partner Cards
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Section Tag Badge */}
            <span
              className="text-[#EA580C] font-extrabold text-xs sm:text-[13px] tracking-[0.16em] uppercase mb-2.5 inline-block"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              ABOUT MAHAPRAVAH
            </span>

            {/* Main 2-Line Headline (Tight spacing, 1-line per heading) */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[2.15rem] xl:text-[2.4rem] font-extrabold tracking-tight mb-3 flex flex-col gap-0.5 sm:gap-1"
              style={{
                lineHeight: isMarathi ? 1.22 : 1.16,
              }}
            >
              <span
                className="block text-[#1C1917] whitespace-nowrap"
                style={{
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif",
                }}
              >
                {isMarathi ? 'एकच मंच, अनेक संधी' : 'One Platform, Endless Opportunities'}
              </span>
              <span
                className="block text-[#EA580C] whitespace-nowrap"
                style={{
                  fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif",
                }}
              >
                {isMarathi ? 'तुमच्या यशाची नवी दिशा.' : 'A New Direction for Your Success.'}
              </span>
            </h2>

            {/* Orange Accent Indicator Line */}
            <div className="w-14 h-1.5 rounded-full bg-[#EA580C] mb-4.5" />

            {/* Descriptive Paragraph */}
            <p
              className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 max-w-[560px]"
              style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
            >
              {isMarathi
                ? 'विद्यार्थी, शैक्षणिक संस्था, उद्योग आणि शासन यांना एकाच छताखाली आणून महाराष्ट्राच्या युवा शक्तीला सक्षम करणारे डिजिटल नेटवर्क.'
                : 'A digital network empowering the youth of Maharashtra by bringing students, educational institutions, industry, and government together under one roof.'}
            </p>

            {/* 2x2 Government / Institutional Partner Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {PARTNERS.map((partner) => {
                const title = isMarathi ? partner.titleMr : partner.titleEn;
                const subtitle = isMarathi ? partner.subMr : partner.subEn;

                return (
                  <motion.div
                    key={partner.id}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#EFE5DC] transition-all duration-200"
                    style={{
                      boxShadow: '0 4px 16px rgba(44, 26, 14, 0.05)',
                    }}
                  >
                    {/* Emblem Icon / Logo */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={partner.image}
                        alt={title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Card Text Content */}
                    <div className="flex flex-col text-left overflow-hidden">
                      <h4
                        className="text-xs sm:text-[13.5px] font-bold text-[#1C1917] leading-snug truncate"
                        style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
                      >
                        {title}
                      </h4>
                      <p
                        className="text-[10px] sm:text-[11px] text-[#6B5749] font-medium leading-tight mt-0.5 line-clamp-1"
                        style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                      >
                        {subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Link: सर्व पहा → (View All →) */}
            <a
              href="#partners"
              id="ecosystem-view-all-link"
              className="inline-flex items-center gap-2 text-[#EA580C] hover:text-[#C84500] font-bold text-sm sm:text-base group transition-colors duration-200"
              style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : "'Manrope', sans-serif" }}
            >
              <span>{isMarathi ? 'सर्व पहा' : 'View All'}</span>
              <ArrowRight
                size={16}
                className="transform transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
