import { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Briefcase,
  Calendar,
  Award,
  ArrowRight,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface StudentDashboardProps {
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
}

export default function StudentDashboard({ activeTab = 'dashboard', onSelectTab }: StudentDashboardProps) {
  const { isMarathi } = useLanguage();
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({ 'job-1': true });
  const [profileMissingCompleted, setProfileMissingCompleted] = useState(false);

  // Map sidebar activeTab to current view
  const currentTab = (() => {
    if (!activeTab || activeTab === 'dashboard' || activeTab === 'overview') return 'overview';
    if (activeTab === 'ai-career' || activeTab === 'ai') return 'ai';
    if (activeTab === 'training') return 'training';
    if (activeTab === 'jobs') return 'jobs';
    if (activeTab === 'profile') return 'profile';
    if (activeTab === 'placement') return 'placement';
    return activeTab;
  })();

  const handleTabChange = (target: string) => {
    if (onSelectTab) {
      onSelectTab(target);
    }
  };

  const kpis = [
    {
      id: 'training',
      label: isMarathi ? 'प्रशिक्षण प्रगती' : 'Training Progress',
      value: '82%',
      trend: isMarathi ? '+14% हा महिना' : '+14% this month',
      subtext: isMarathi ? 'अभ्यासक्रम पूर्णत्वाकडे' : 'Course on track',
      icon: BookOpen,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'skills',
      label: isMarathi ? 'प्राप्त कौशल्ये' : 'Skills Acquired',
      value: '14',
      trend: isMarathi ? '४ सत्यापित' : '4 Verified Badges',
      subtext: isMarathi ? 'कौशल्य चाचणी उत्तीर्ण' : 'Skill tests passed',
      icon: Award,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'certs',
      label: isMarathi ? 'प्रमाणपत्रे' : 'Certifications',
      value: '3',
      trend: isMarathi ? '१ प्रगतीपथावर' : '1 In Progress',
      subtext: isMarathi ? 'महाराष्ट्र शासन मान्यताप्राप्त' : 'Govt. recognized',
      icon: ShieldCheck,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'apps',
      label: isMarathi ? 'नोकरी अर्ज' : 'Applications',
      value: '8',
      trend: isMarathi ? '५ शॉर्टलिस्ट' : '5 Shortlisted',
      subtext: isMarathi ? 'सक्रिय भरती प्रक्रिया' : 'Active pipelines',
      icon: Send,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'interviews',
      label: isMarathi ? 'मुलाखती' : 'Interviews',
      value: '3',
      trend: isMarathi ? 'पुढील: उद्या' : 'Next: Tomorrow',
      subtext: isMarathi ? 'तांत्रिक फेरी' : 'Technical rounds',
      icon: Calendar,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'placement',
      label: isMarathi ? 'प्लेसमेंट स्थिती' : 'Placement Status',
      value: isMarathi ? 'ऑफर प्राप्त' : 'Offered',
      trend: isMarathi ? '₹४.८ लाख/वर्ष' : '₹4.8 LPA Package',
      subtext: isMarathi ? 'स्वीकृती प्रलंबित' : 'Acceptance pending',
      icon: Briefcase,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  const jobs = [
    {
      id: 'job-1',
      title: isMarathi ? 'कनिष्ठ डेटा विश्लेषक' : 'Junior Data Analyst',
      company: 'Persistent Systems Ltd.',
      location: 'Pune (Hinjawadi IT Park)',
      match: 92,
      salary: '₹4.5 - ₹6.2 LPA',
      exp: isMarathi ? '० - १ वर्ष अनुभव' : '0 - 1 Years Exp',
      skills: ['Python', 'SQL Optimization', 'Power BI'],
    },
    {
      id: 'job-2',
      title: isMarathi ? 'बिझनेस इंटेलिजेंस असोसिएट' : 'Business Intelligence Associate',
      company: 'Tata Motors Limited',
      location: 'Pune (Pimpri-Chinchwad)',
      match: 87,
      salary: '₹4.8 - ₹6.5 LPA',
      exp: isMarathi ? '० - २ वर्षे अनुभव' : '0 - 2 Years Exp',
      skills: ['SQL', 'Tableau', 'Excel Analytics'],
    },
    {
      id: 'job-3',
      title: isMarathi ? 'डेटा इंजिनीअर ट्रेनी' : 'Data Engineer Trainee',
      company: 'LTI Mindtree',
      location: 'Navi Mumbai (Airoli)',
      match: 81,
      salary: '₹4.2 - ₹5.8 LPA',
      exp: isMarathi ? 'नवीन पदवीधर' : 'Freshers Welcome',
      skills: ['Python', 'Azure Basics', 'Database Design'],
    },
    {
      id: 'job-4',
      title: isMarathi ? 'एआय ऑपरेशन्स असोसिएट' : 'AI Operations Associate',
      company: 'Tech Mahindra',
      location: 'Nagpur (MIHAN SEZ)',
      match: 78,
      salary: '₹4.0 - ₹5.4 LPA',
      exp: isMarathi ? 'नवीन पदवीधर' : 'Freshers Welcome',
      skills: ['Prompt Eng.', 'Python', 'Data Labeling'],
    },
  ];

  const handleApply = (id: string) => {
    setAppliedJobs((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Hero Card: Welcome + Career Readiness Gauge + Profile Completion ── */}
      <div className="bg-gradient-to-r from-white via-[#FFF9F3] to-[#FFF0E4] rounded-xl border border-[#E8D4C2] p-3 sm:p-4 shadow-2xs shrink-0">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Welcome Text */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
                alt="Priya Sharma"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#F56600] shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-[#2C1A0E] tracking-tight">
                  {isMarathi ? 'स्वागत आहे, प्रिया शर्मा!' : 'Welcome back, Priya Sharma!'}
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFEADB] text-[#B44200]">
                  {isMarathi ? 'नोकरी इच्छुक' : 'Job Seeker'}
                </span>
              </div>
              <p className="text-[11.5px] text-[#6B351B] mt-0.5">
                {isMarathi
                  ? 'तुमचा कौशल्य प्रवास चांगल्या प्रगतीवर आहे. आज ३ नवीन नोकरी संधी उपलब्ध आहेत.'
                  : 'Your skill pathway is performing strong. 3 new high-match opportunities are ready today.'}
              </p>
            </div>
          </div>

          {/* Quick Metrics: Career Readiness Score & Profile Completion */}
          <div className="flex items-center gap-3 self-start lg:self-center">
            {/* Career Readiness Score Badge */}
            <div className="flex items-center gap-2.5 px-3 py-2 bg-white rounded-xl border border-[#DFCEBD] shadow-2xs">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-stone-200"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#F56600]"
                    strokeDasharray="78, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[11px] font-extrabold text-[#2C1A0E]">78</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-slate-500 uppercase">
                  {isMarathi ? 'करिअर सज्जता गुण' : 'Career Readiness'}
                </span>
                <span className="text-xs font-bold text-emerald-700">
                  {isMarathi ? '७८ / १०० (उच्च)' : '78 / 100 (Tier 1)'}
                </span>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-[#DFCEBD] shadow-2xs">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-3 text-[10.5px]">
                  <span className="text-slate-500 font-medium">
                    {isMarathi ? 'प्रोफाइल पूर्णत्व' : 'Profile Completion'}
                  </span>
                  <span className="font-bold text-[#F56600]">
                    {profileMissingCompleted ? '100%' : '85%'}
                  </span>
                </div>
                <div className="w-28 h-1.5 bg-stone-200 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-[#F56600] rounded-full transition-all duration-500"
                    style={{ width: profileMissingCompleted ? '100%' : '85%' }}
                  />
                </div>
                {!profileMissingCompleted && (
                  <button
                    onClick={() => setProfileMissingCompleted(true)}
                    className="text-[9.5px] font-bold text-[#C2410C] hover:underline text-left mt-1 cursor-pointer"
                  >
                    {isMarathi ? '+ आधार ई-केवायसी जोडा' : '+ Complete Aadhaar e-KYC'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
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
      {currentTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 flex-1 min-h-0 overflow-y-auto">
          {/* Left Column: AI Recommendations & Placement Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {/* AI Career Recommendations Card (Explainable Intelligence) */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#FFF0E6] text-[#F56600] flex items-center justify-center">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-[13px] font-bold text-[#8C3310]">
                      {isMarathi ? 'एआय करिअर बुद्धिमत्ता व शिफारसी' : 'AI Career Recommendations'}
                    </h2>
                    <span className="text-[9.5px] text-slate-400">
                      {isMarathi ? 'उद्योगांच्या मागणीवर आधारित विश्लेषण' : 'Based on 8,420 active Maharashtra job postings'}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  94% Match Confidence
                </span>
              </div>

              {/* Explainable Skill Gap Block */}
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#2C1A0E]">
                    {isMarathi ? 'लक्ष्य भूमिका: कनिष्ठ डेटा विश्लेषक' : 'Target Role: Junior Data Analyst'}
                  </span>
                  <span className="text-slate-500">
                    {isMarathi ? 'सरासरी वेतन: ₹४.५ - ६.० लाख' : 'Avg Package: ₹4.5 - 6.0 LPA'}
                  </span>
                </div>

                <div className="space-y-1.5 text-[10.5px]">
                  <div>
                    <span className="text-slate-500 font-medium">
                      {isMarathi ? 'कौशल्य तूट (Skill Gaps):' : 'Identified Skill Gaps:'}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold text-[10px]">
                        SQL Query Optimization
                      </span>
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold text-[10px]">
                        Power BI DAX Formulas
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold text-[10px]">
                        Azure Cloud Fundamentals
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 font-medium">
                      {isMarathi ? 'शिफारस केलेला अध्ययन मार्ग:' : 'Recommended Learning Pathway:'}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold text-[#8C3310] flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#FFEADB]">SQL Advanced</span>
                      <ChevronRight size={12} className="text-slate-400" />
                      <span className="px-2 py-0.5 rounded bg-[#FFEADB]">Power BI Mastery</span>
                      <ChevronRight size={12} className="text-slate-400" />
                      <span className="px-2 py-0.5 rounded bg-[#FFEADB]">Azure AI-900</span>
                    </div>
                  </div>
                </div>

                {/* Why it Matters & Action */}
                <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-[10px] text-slate-600">
                    {isMarathi
                      ? '💡 ही कौशल्ये आत्मसात केल्यास प्लेसमेंट संधी ३२% नी वाढते.'
                      : '💡 Acquiring these 3 skills increases candidate interview shortlisting by 32%.'}
                  </span>
                  <button
                    onClick={() => handleTabChange('ai-career')}
                    className="text-[10.5px] font-bold text-[#F56600] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isMarathi ? 'मार्ग पहा' : 'View Pathway'}</span>
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>

              {/* Placement Tracking Pipeline */}
              <div className="pt-1">
                <span className="text-[11px] font-bold text-slate-700 block mb-2">
                  {isMarathi ? 'सक्रिय प्लेसमेंट प्रगती ट्रॅकर (Tata Motors)' : 'Active Application Pipeline (Tata Motors Ltd)'}
                </span>
                <div className="grid grid-cols-5 gap-1 text-center">
                  {[
                    { step: isMarathi ? 'अर्ज केला' : 'Applied', done: true, date: '10 Aug' },
                    { step: isMarathi ? 'शॉर्टलिस्ट' : 'Shortlisted', done: true, date: '18 Aug' },
                    { step: isMarathi ? 'मुलाखत' : 'Interview', done: true, date: '28 Aug' },
                    { step: isMarathi ? 'निवड झाली' : 'Selected', done: true, date: '04 Sep' },
                    { step: isMarathi ? 'हजर होणे' : 'Joined', done: false, date: '01 Oct' },
                  ].map((s, idx) => (
                    <div key={s.step} className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          s.done
                            ? 'bg-emerald-600 text-white'
                            : 'bg-stone-200 text-stone-500 border border-stone-300'
                        }`}
                      >
                        {s.done ? '✓' : idx + 1}
                      </div>
                      <span className="text-[9.5px] font-bold text-slate-800 mt-1 leading-tight">{s.step}</span>
                      <span className="text-[8.5px] text-slate-400">{s.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enrolled Courses Card */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'सध्या सुरू असलेले प्रशिक्षण' : 'Active Enrolled Training'}
                </h3>
                <span className="text-[10px] text-slate-500">
                  {isMarathi ? 'हजेरी: ९४%' : 'Avg Attendance: 94%'}
                </span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex items-center justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-800">
                        Advanced Data Analytics & Business Intelligence
                      </span>
                      <span className="text-[10px] font-bold text-[#F56600]">82% Completed</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-200 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#F56600] rounded-full" style={{ width: '82%' }} />
                    </div>
                    <div className="flex items-center gap-3 text-[9.5px] text-slate-500 mt-1">
                      <span>{isMarathi ? 'संस्था: सीडॅक पुणे' : 'Center: C-DAC Pune'}</span>
                      <span>•</span>
                      <span>{isMarathi ? 'पुढील चाचणी: २६ सप्टेंबर' : 'Next Exam: 26 Sep'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Match Jobs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-[#F56600]" />
                    <h3 className="text-xs font-bold text-[#8C3310]">
                      {isMarathi ? 'तुमच्यासाठी शिफारस केलेल्या नोकऱ्या' : 'Intelligent Job Recommendations'}
                    </h3>
                  </div>
                  <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    4 High Matches
                  </span>
                </div>

                <div className="space-y-2">
                  {jobs.map((job) => {
                    const isApplied = appliedJobs[job.id];
                    return (
                      <div
                        key={job.id}
                        className="p-2.5 rounded-lg border border-stone-200 hover:border-[#F56600]/40 transition-colors bg-white flex flex-col gap-1.5"
                      >
                        <div className="flex items-start justify-between gap-1">
                          <div>
                            <h4 className="text-[11.5px] font-bold text-slate-900 leading-tight">
                              {job.title}
                            </h4>
                            <span className="text-[10px] text-slate-600 block">{job.company}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFF0E6] text-[#F56600] shrink-0">
                            {job.match}% {isMarathi ? 'जुळणी' : 'Match'}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-[9.5px] text-slate-500">
                          <span className="flex items-center gap-0.5">
                            <MapPin size={10} /> {job.location}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700">{job.salary}</span>
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                          <div className="flex gap-1 flex-wrap">
                            {job.skills.slice(0, 2).map((s) => (
                              <span key={s} className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 text-[9px]">
                                {s}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => handleApply(job.id)}
                            disabled={isApplied}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                              isApplied
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-[#F56600] text-white hover:bg-[#D94E00]'
                            }`}
                          >
                            {isApplied ? (isMarathi ? 'अर्ज पाठवला ✓' : 'Applied ✓') : (isMarathi ? '१-क्लिक अर्ज' : 'Apply Now')}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => handleTabChange('jobs')}
                className="w-full mt-2 py-1.5 text-center text-xs font-bold text-[#F56600] hover:bg-[#FFF0E6] rounded-lg transition-colors cursor-pointer"
              >
                {isMarathi ? 'सर्व उपलब्ध नोकऱ्या पहा (२८) →' : 'Explore All 28 Matched Jobs →'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: AI Career Intelligence Deep-Dive */}
      {currentTab === 'ai' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
                {isMarathi ? 'कौशल्य बुद्धिमत्ता व स्पष्टीकरणात्मक विश्लेषण' : 'Explainable Skill Gap & Career Roadmap'}
              </h2>
              <p className="text-xs text-slate-500">
                {isMarathi ? 'तुमच्या प्रोफाइल आणि महाराष्ट्र रोजगाराच्या आकडेवारीवर आधारित एआय मार्गदर्शन.' : 'Transparent AI reasoning based on live Maharashtra labor market intelligence.'}
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              Confidence: 94.2%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="text-xs font-bold text-[#8C3310] block mb-1">
                1. What is Happening?
              </span>
              <p className="text-[11.5px] text-slate-600">
                You have mastered core Python and Data Wrangling (Top 15% tier in Pune). However, employers currently prioritize candidates with production SQL and interactive BI dashboarding skills.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="text-xs font-bold text-[#8C3310] block mb-1">
                2. Why it Matters?
              </span>
              <p className="text-[11.5px] text-slate-600">
                Candidates with Power BI + SQL earn an average of ₹5.4 LPA vs ₹3.6 LPA for basic Python developers, with 3.2x more interview call-backs across Chakan and Hinjawadi industrial clusters.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="text-xs font-bold text-[#8C3310] block mb-1">
                3. Actionable Next Step
              </span>
              <p className="text-[11.5px] text-slate-600">
                Enroll in the free 3-week Government-certified &quot;SQL Optimization & Power BI Masterclass&quot; offered by MahaKaushalya Academy.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Training & Courses */}
      {currentTab === 'training' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'माझे नोंदणीकृत अभ्यासक्रम आणि आगामी सत्रे' : 'Enrolled Courses & Upcoming Sessions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">Advanced Data Analytics & BI</span>
              <p className="text-[11px] text-slate-500">Instructor: Dr. Vinay Joshi • Center: Pune Central</p>
              <div className="flex justify-between text-xs font-semibold">
                <span>Progress</span>
                <span className="text-[#F56600]">82%</span>
              </div>
              <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#F56600]" style={{ width: '82%' }} />
              </div>
              <span className="text-[10.5px] text-emerald-700 font-bold block">Attendance: 94% (Eligible for Govt Stipend)</span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-slate-800">Cloud Fundamentals & DevOps Primer</span>
              <p className="text-[11px] text-slate-500">Instructor: Snehal Deshmukh • Online Hybrid</p>
              <div className="flex justify-between text-xs font-semibold">
                <span>Progress</span>
                <span className="text-[#F56600]">45%</span>
              </div>
              <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#F56600]" style={{ width: '45%' }} />
              </div>
              <span className="text-[10.5px] text-emerald-700 font-bold block">Attendance: 88%</span>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Jobs */}
      {currentTab === 'jobs' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'सक्रिय नोकरी संधी (कौशल्य जुळणीनुसार)' : 'Smart Matched Vacancies (Ranked by Skill Match)'}
            </h2>
            <span className="text-xs font-bold text-slate-500">Showing 4 of 28 vacancies</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {jobs.map((job) => (
              <div key={job.id} className="p-3 rounded-xl border border-[#E8D4C2] bg-white flex flex-col justify-between gap-2">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xs font-bold text-slate-900">{job.title}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFEADB] text-[#B44200]">
                      {job.match}% Match
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-600">{job.company}</span>
                  <div className="text-[11px] text-slate-500 mt-1">{job.location} • {job.salary}</div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <span className="text-[10px] text-slate-500">{job.exp}</span>
                  <button
                    onClick={() => handleApply(job.id)}
                    className="px-3 py-1 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00] cursor-pointer"
                  >
                    {appliedJobs[job.id] ? 'Applied ✓' : '1-Click Apply'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Career Profile */}
      {currentTab === 'profile' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
              alt="Priya"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#F56600]"
            />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">Priya Sharma</h2>
              <p className="text-xs text-slate-500">B.Sc. Computer Science • Savitribai Phule Pune University (2024)</p>
              <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">
                Verified DigiLocker Candidate
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="font-bold text-[#8C3310] block mb-1">Verified Skills:</span>
              <div className="flex flex-wrap gap-1">
                {['Python', 'SQL', 'React', 'Data Wrangling', 'Power BI', 'Statistics', 'Git', 'Pandas'].map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700 text-[10.5px]">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="font-bold text-[#8C3310] block mb-1">Preferences:</span>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                <strong>Preferred Roles:</strong> Junior Data Analyst, BI Associate<br />
                <strong>Preferred Locations:</strong> Pune, Pimpri-Chinchwad, Mumbai<br />
                <strong>Expected CTC:</strong> ₹4.2 - ₹6.0 LPA
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Placement Tracking */}
      {currentTab === 'placement' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
                {isMarathi ? 'सक्रिय प्लेसमेंट प्रगती ट्रॅकर व टप्पे' : 'Active Placement Pipeline & Milestones'}
              </h2>
              <p className="text-xs text-slate-500">
                {isMarathi ? 'टाटा ऑटोकॉम्प सिस्टीम्स लिमिटेड - कनिष्ठ डेटा विश्लेषक भरती प्रगती' : 'Tata AutoComp Systems Ltd • Junior Data Analyst candidate pipeline'}
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              Stage: Selected (Final Offer Released)
            </span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
            <div className="grid grid-cols-5 gap-2 text-center py-2">
              {[
                { step: isMarathi ? 'अर्ज दाखल' : 'Applied', done: true, date: '10 Aug 2025' },
                { step: isMarathi ? 'शॉर्टलिस्ट' : 'Shortlisted', done: true, date: '18 Aug 2025' },
                { step: isMarathi ? 'तांत्रिक मुलाखत' : 'Interview', done: true, date: '28 Aug 2025' },
                { step: isMarathi ? 'निवड झाली' : 'Selected', done: true, date: '04 Sep 2025' },
                { step: isMarathi ? 'हजर होणे' : 'Joining Date', done: false, date: '01 Oct 2025' },
              ].map((s, idx) => (
                <div key={s.step} className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                      s.done
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-stone-200 text-stone-500 border border-stone-300'
                    }`}
                  >
                    {s.done ? '✓' : idx + 1}
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 mt-2 leading-tight">{s.step}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">{s.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
