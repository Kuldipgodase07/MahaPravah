import { useState } from 'react';
import {
  Briefcase,
  Users,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Plus,
  Send,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function EmployerDashboard() {
  const { isMarathi } = useLanguage();
  const [selectedSubTab, setSelectedSubTab] = useState<'overview' | 'matching' | 'jobs' | 'pipeline' | 'location'>('overview');
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);

  const kpis = [
    {
      id: 'openings',
      label: isMarathi ? 'खुल्या जागा' : 'Open Positions',
      value: '48',
      trend: isMarathi ? '+8 नवीन' : '+8 New this week',
      subtext: isMarathi ? '६ सक्रिय मोहिमा' : 'Across 6 job roles',
      icon: Briefcase,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'matched',
      label: isMarathi ? 'जुळलेले उमेदवार' : 'Candidates Matched',
      value: '1,240',
      trend: '88% Avg Match',
      subtext: isMarathi ? 'महाराष्ट्र डेटाबेस' : 'From State Talent Pool',
      icon: Users,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'interviews',
      label: isMarathi ? 'मुलाखती' : 'Interviews Held',
      value: '186',
      trend: isMarathi ? '२४ या आठवड्यात' : '24 this week',
      subtext: isMarathi ? 'तांत्रिक व एचआर' : 'Technical & HR rounds',
      icon: Calendar,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'offers',
      label: isMarathi ? 'ऑफर जारी' : 'Offers Extended',
      value: '64',
      trend: '78% Acceptance',
      subtext: isMarathi ? 'स्वीकृती प्रमाण' : 'Acceptance rate',
      icon: Send,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'placements',
      label: isMarathi ? 'उमेदवार रुजू' : 'Candidates Joined',
      value: '52',
      trend: '+18 vs Q1',
      subtext: isMarathi ? 'यशस्वी भरती' : 'Verified joining',
      icon: CheckCircle2,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'demand',
      label: isMarathi ? 'कौशल्य मागणी निर्देशांक' : 'Skill Demand Index',
      value: '94 / 100',
      trend: 'High Need',
      subtext: isMarathi ? 'ईव्ही व ऑटोमेशन' : 'EV & Automation',
      icon: TrendingUp,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  const candidates = [
    {
      id: 'C-881',
      name: 'Priya Sharma',
      role: 'Junior Data Analyst',
      location: 'Pune (Shivajinagar)',
      matchPct: 92,
      techMatch: 94,
      softMatch: 88,
      expMatch: 87,
      skills: ['Python', 'SQL Optimization', 'Power BI', 'Pandas'],
      experience: '6-Mo Apprenticeship at TechSol',
      education: 'B.Sc. Computer Science',
      status: 'Ready for Interview',
    },
    {
      id: 'C-882',
      name: 'Aditya Deshpande',
      role: 'EV Powertrain Engineer',
      location: 'Pune (Bhosari / Pimpri)',
      matchPct: 89,
      techMatch: 91,
      softMatch: 86,
      expMatch: 88,
      skills: ['Battery Management', 'CAN Bus', 'PLC', 'AutoCAD'],
      experience: '1 Year Apprentice at Bajaj Auto',
      education: 'Diploma in Automobile Engg',
      status: 'Shortlisted',
    },
    {
      id: 'C-883',
      name: 'Sneha Shinde',
      role: 'Cloud Operations Specialist',
      location: 'Navi Mumbai',
      matchPct: 86,
      techMatch: 88,
      softMatch: 84,
      expMatch: 85,
      skills: ['AWS Cloud', 'Linux Admin', 'Docker', 'Networking'],
      experience: 'Fresh Graduate (MSSDS Certified)',
      education: 'B.Tech IT',
      status: 'Screening',
    },
    {
      id: 'C-884',
      name: 'Kunal Patil',
      role: 'Industrial Automation Associate',
      location: 'Nashik (Ambad MIDC)',
      matchPct: 83,
      techMatch: 85,
      softMatch: 80,
      expMatch: 82,
      skills: ['Siemens PLC', 'SCADA', 'Sensor Calibration'],
      experience: '6-Mo Apprentice at Bosch',
      education: 'ITI Electrical + Adv Diploma',
      status: 'Ready for Interview',
    },
  ];

  const jobsList = [
    {
      id: 'J-1',
      title: 'Junior Data Analyst',
      dept: 'Business Intelligence Group',
      location: 'Pune Tech Center',
      openings: 12,
      applicants: 184,
      matched: 42,
      status: 'Active',
      ctc: '₹4.5 - 6.0 LPA',
    },
    {
      id: 'J-2',
      title: 'EV Battery Pack Assembly Specialist',
      dept: 'Electric Mobility Plant',
      location: 'Chakan MIDC, Pune',
      openings: 20,
      applicants: 290,
      matched: 68,
      status: 'Active',
      ctc: '₹3.6 - 4.8 LPA',
    },
    {
      id: 'J-3',
      title: 'PLC & Robotics Maintenance Tech',
      dept: 'Manufacturing Automation',
      location: 'Bhosari Industrial Estate',
      openings: 8,
      applicants: 110,
      matched: 24,
      status: 'Active',
      ctc: '₹3.8 - 5.0 LPA',
    },
    {
      id: 'J-4',
      title: 'Cloud Systems Administrator',
      dept: 'IT Infrastructure',
      location: 'Mumbai Vikhroli Campus',
      openings: 8,
      applicants: 145,
      matched: 31,
      status: 'Active',
      ctc: '₹5.0 - 7.2 LPA',
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Header Controls Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'नियोक्ता डॅशबोर्ड — टाटा ऑटोकॉम्प सिस्टीम्स' : 'Industry Recruitment Intelligence — Tata AutoComp Systems Ltd.'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'महाराष्ट्र शासन कौशल्य विकास महामंडळ थेट उद्योग भागीदार (नोंदणी क्र. MP-EMP-4018)'
              : 'Direct Maharashtra State Skill Partner (ID: MP-EMP-4018) • Chakan & Hinjawadi Operations'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowCreateJobModal(true)}
            className="flex items-center gap-1.5 h-[28px] px-3 bg-[#F56600] text-white rounded-lg text-xs font-bold shadow-2xs hover:bg-[#D94E00] cursor-pointer"
          >
            <Plus size={13} />
            <span>{isMarathi ? 'नवीन नोकरी पोस्ट करा' : 'Post New Job Requirement'}</span>
          </button>
        </div>
      </div>

      {/* ── Sub-navigation Pills ── */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0">
        {[
          { id: 'overview', en: 'Talent Acquisition Overview', mr: 'भरती आढावा' },
          { id: 'matching', en: 'AI Talent Matcher', mr: 'एआय उमेदवार जुळणी' },
          { id: 'jobs', en: 'Active Job Postings', mr: 'सक्रिय नोकरी जाहिराती' },
          { id: 'pipeline', en: 'Recruitment Pipeline', mr: 'भरती प्रक्रिया फनेल' },
          { id: 'location', en: 'District Talent Pool Map', mr: 'जिल्हानिहाय मनुष्यबळ नकाशा' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedSubTab(tab.id as typeof selectedSubTab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedSubTab === tab.id
                ? 'bg-[#7B2400] text-white shadow-xs'
                : 'bg-white border border-[#E8D4C2] text-slate-700 hover:bg-[#FAF7F2]'
            }`}
          >
            {isMarathi ? tab.mr : tab.en}
          </button>
        ))}
      </div>

      {/* ── 6 Top KPI Metrics Cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 shrink-0">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.id}
              className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between h-[64px] hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-5 h-5 rounded-full ${kpi.iconBg} ${kpi.iconColor} flex items-center justify-center shrink-0`}>
                  <Icon size={12} strokeWidth={2.2} />
                </div>
                <span className="text-[10.5px] font-medium text-slate-600 truncate">
                  {kpi.label}
                </span>
              </div>
              <div className="flex items-end justify-between gap-1">
                <span className="text-[9px] font-bold text-emerald-600 truncate">
                  {kpi.trend}
                </span>
                <span className="text-[16px] font-bold text-slate-900 leading-none">
                  {kpi.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Tab Views ── */}
      {selectedSubTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 flex-1 min-h-0 overflow-y-auto">
          {/* Left Column: Top Matched Candidates & AI Radar (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {/* AI Talent Matching Card */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#F56600]" />
                  <h3 className="text-xs font-bold text-[#8C3310]">
                    {isMarathi ? 'एआय कौशल्य आधारित सर्वोच्च उमेदवार' : 'AI-Recommended Top Candidates'}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  92% Max Alignment
                </span>
              </div>

              <div className="space-y-2">
                {candidates.slice(0, 3).map((c) => (
                  <div
                    key={c.id}
                    className="p-2.5 rounded-lg border border-stone-200 bg-[#FAF7F2] hover:border-[#F56600]/40 transition-all flex flex-col gap-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[11.5px] font-bold text-slate-900">{c.name}</h4>
                          <span className="text-[9.5px] px-1.5 py-0.2 rounded bg-white text-slate-600 border border-stone-200">
                            {c.id}
                          </span>
                        </div>
                        <span className="text-[10.5px] text-[#6B351B] font-semibold">{c.role}</span>
                        <div className="text-[9.5px] text-slate-500 mt-0.5 flex items-center gap-2">
                          <span>{c.education}</span>
                          <span>•</span>
                          <span>{c.location}</span>
                        </div>
                      </div>

                      {/* Match Badge */}
                      <div className="text-right shrink-0">
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-[#FFEADB] text-[#B44200]">
                          {c.matchPct}% Match
                        </span>
                        <span className="block text-[8.5px] text-slate-400 mt-0.5">Govt. Verified</span>
                      </div>
                    </div>

                    {/* Breakdown bars */}
                    <div className="grid grid-cols-3 gap-1.5 text-[9.5px] bg-white p-1.5 rounded-md border border-stone-100">
                      <div>
                        <span className="text-slate-400">Technical:</span>{' '}
                        <strong className="text-emerald-700">{c.techMatch}%</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Soft Skills:</span>{' '}
                        <strong className="text-blue-700">{c.softMatch}%</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Experience:</span>{' '}
                        <strong className="text-amber-700">{c.expMatch}%</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex gap-1 flex-wrap">
                        {c.skills.slice(0, 3).map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 text-[9px]">
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => alert(`Interview invite dispatched to ${c.name}`)}
                          className="px-2 py-1 rounded bg-[#F56600] text-white text-[10px] font-bold hover:bg-[#D94E00] cursor-pointer"
                        >
                          Schedule Interview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruitment Pipeline Funnel */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'सक्रिय भरती प्रक्रिया टप्पे' : 'Hiring Funnel Progression'}
                </h3>
                <span className="text-[10px] text-slate-500">Live Cycle (Avg Time-to-Hire: 14 Days)</span>
              </div>

              <div className="grid grid-cols-5 gap-1.5 text-center">
                {[
                  { stage: 'Applications', count: '1,240', pct: '100%', bg: 'bg-[#7B2400]' },
                  { stage: 'Shortlisted', count: '410', pct: '33.1%', bg: 'bg-[#C2410C]' },
                  { stage: 'Interviewed', count: '186', pct: '15.0%', bg: 'bg-[#F56600]' },
                  { stage: 'Offered', count: '64', pct: '5.2%', bg: 'bg-emerald-600' },
                  { stage: 'Joined', count: '52', pct: '4.2%', bg: 'bg-emerald-700' },
                ].map((s) => (
                  <div key={s.stage} className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex flex-col items-center">
                    <span className="text-sm font-black text-slate-900">{s.count}</span>
                    <span className="text-[9.5px] font-bold text-[#8C3310] leading-tight mt-0.5">{s.stage}</span>
                    <span className="text-[8.5px] text-slate-400 mt-0.5">{s.pct} conversion</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Active Job Postings & Skill Demands (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* Active Job Postings */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'सक्रिय भरती मोहिमा (Job Roles)' : 'Active Requisitions'}
                </h3>
                <span className="text-[10px] font-bold text-[#F56600]">4 Active Roles</span>
              </div>

              <div className="space-y-1.5">
                {jobsList.map((j) => (
                  <div key={j.id} className="p-2 rounded-lg border border-stone-200 flex flex-col gap-1 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-900">{j.title}</span>
                      <span className="text-[10px] font-bold text-emerald-700">{j.openings} Openings</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>{j.location}</span>
                      <span className="font-semibold text-slate-700">{j.ctc}</span>
                    </div>
                    <div className="flex justify-between text-[9.5px] text-slate-400 pt-0.5 border-t border-stone-100">
                      <span>{j.applicants} Applicants ({j.matched} Pre-Matched)</span>
                      <button
                        onClick={() => setSelectedSubTab('matching')}
                        className="text-[#F56600] font-bold hover:underline cursor-pointer"
                      >
                        View Matches →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emerging vs Demanded Skills Radar */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <h3 className="text-xs font-bold text-[#8C3310] mb-1.5">
                {isMarathi ? 'उद्योगातील कौशल्य मागणी कल' : 'Regional Labor Market Skill Shifts'}
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center p-1.5 rounded bg-emerald-50 text-emerald-900">
                  <span className="font-semibold">🔥 High Demand: EV Powertrain & Battery Ops</span>
                  <span className="font-bold">+38% YoY</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-blue-50 text-blue-900">
                  <span className="font-semibold">⚡ Growing: Industrial Robotics & PLC</span>
                  <span className="font-bold">+26% YoY</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-stone-100 text-stone-700">
                  <span className="font-semibold">📉 Declining: Traditional Manual Drafting</span>
                  <span className="font-bold">-18% YoY</span>
                </div>
              </div>
              <div className="pt-2 border-t border-stone-100 text-[10px] text-slate-500 mt-2">
                Talent mapped across Chakan, Talegaon, and Hinjawadi industrial corridors.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: AI Talent Matching */}
      {selectedSubTab === 'matching' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'एआय कौशल्य जुळणी इंजिन (AI Talent Matching Engine)' : 'AI Candidate Matching & Talent Ranking'}
            </h2>
            <span className="text-xs text-slate-500">1,240 Candidates Analyzed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {candidates.map((c) => (
              <div key={c.id} className="p-3 rounded-xl border border-[#E8D4C2] bg-white space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{c.name}</h3>
                    <span className="text-[11px] text-[#6B351B] font-semibold">{c.role}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-[#FFEADB] text-[#B44200]">
                    {c.matchPct}% Match
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">{c.education} • {c.experience}</p>
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[10.5px] space-y-1">
                  <div className="flex justify-between"><span>Technical Alignment:</span> <strong>{c.techMatch}%</strong></div>
                  <div className="flex justify-between"><span>Soft Skills:</span> <strong>{c.softMatch}%</strong></div>
                  <div className="flex justify-between"><span>Location Distance:</span> <strong>Pune MIDC (Within 12 km)</strong></div>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {c.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-medium">
                      ✓ {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => alert(`Direct offer / interview link generated for ${c.name}`)}
                  className="w-full py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00] cursor-pointer"
                >
                  Schedule Technical Interview
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Jobs */}
      {selectedSubTab === 'jobs' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'सर्व पोस्ट केलेल्या नोकऱ्या' : 'Active Requisition Management'}
            </h2>
            <button
              onClick={() => setShowCreateJobModal(true)}
              className="px-3 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00] flex items-center gap-1 cursor-pointer"
            >
              <Plus size={13} />
              <span>Create New Posting</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {jobsList.map((j) => (
              <div key={j.id} className="p-3 rounded-xl border border-stone-200 bg-white space-y-1.5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xs font-bold text-slate-900">{j.title}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">{j.status}</span>
                </div>
                <div className="text-[11px] text-slate-600">{j.dept} • {j.location}</div>
                <div className="text-xs font-semibold text-slate-800">Package: {j.ctc}</div>
                <div className="flex justify-between text-[11px] text-slate-500 pt-2 border-t border-stone-100">
                  <span>Openings: {j.openings}</span>
                  <span>Applicants: {j.applicants}</span>
                  <span>Pre-Matched: {j.matched}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Pipeline */}
      {selectedSubTab === 'pipeline' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'संपूर्ण भरती फनेल ट्रॅकर' : 'End-to-End Enterprise Candidate Pipeline'}
          </h2>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] text-xs text-slate-700 leading-relaxed">
            MahaPravah direct integration enables paperless onboarding with DigiLocker educational credential verification, reducing employer hiring cycle time by 48%. 52 candidates successfully joined in Q2.
          </div>
        </div>
      )}

      {/* SubTab: Location Pool */}
      {selectedSubTab === 'location' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'जिल्हानिहाय कुशल मनुष्यबळ उपलब्धता' : 'District-Wise Skilled Talent Pool Concentration'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-slate-500 block text-[10px]">Pune & Pimpri</span>
              <strong className="text-base text-slate-900 block">42,800</strong>
              <span className="text-[9.5px] text-emerald-700 font-bold">EV, Auto, IT</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-slate-500 block text-[10px]">Thane & Navi Mumbai</span>
              <strong className="text-base text-slate-900 block">34,100</strong>
              <span className="text-[9.5px] text-blue-700 font-bold">Cloud, Logistics</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-slate-500 block text-[10px]">Nashik Ambad</span>
              <strong className="text-base text-slate-900 block">18,400</strong>
              <span className="text-[9.5px] text-amber-700 font-bold">Robotics, Precision</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-slate-500 block text-[10px]">Nagpur MIHAN</span>
              <strong className="text-base text-slate-900 block">16,200</strong>
              <span className="text-[9.5px] text-purple-700 font-bold">Aerospace, IT</span>
            </div>
          </div>
        </div>
      )}

      {/* Create Job Modal */}
      {showCreateJobModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 border border-[#E8D4C2] shadow-2xl space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <h3 className="text-sm font-bold text-[#8C3310]">Create New Job Requirement</h3>
              <button onClick={() => setShowCreateJobModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Job Designation</label>
                <input type="text" placeholder="e.g. EV Powertrain Specialist" className="w-full p-2 border border-stone-300 rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">District Location</label>
                  <select className="w-full p-2 border border-stone-300 rounded-lg">
                    <option>Pune (Chakan MIDC)</option>
                    <option>Mumbai Suburban</option>
                    <option>Nashik</option>
                    <option>Nagpur</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Salary Range (LPA)</label>
                  <input type="text" placeholder="e.g. ₹4.0 - 5.5 LPA" className="w-full p-2 border border-stone-300 rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Mandatory Technical Skills</label>
                <input type="text" placeholder="e.g. Battery Management, CAN Bus, PLC" className="w-full p-2 border border-stone-300 rounded-lg" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-stone-200">
              <button onClick={() => setShowCreateJobModal(false)} className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold">Cancel</button>
              <button
                onClick={() => {
                  alert('Job created and instant candidate matching initiated!');
                  setShowCreateJobModal(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00]"
              >
                Publish Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
