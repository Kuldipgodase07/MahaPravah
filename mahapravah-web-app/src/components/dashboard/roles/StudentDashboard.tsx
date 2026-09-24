import { useState } from 'react';
import {
  Search,
  BookOpen,
  Award,
  Briefcase,
  BarChart3,
  GraduationCap,
  Clock,
  Globe,
  Users,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Settings,
  Pencil,
  Check,
  Mail,
  Phone,
  Calendar,
  Building2,
  Download,
  UploadCloud,
  Target,
  Trophy,
  Cpu,
  Cloud,
  Code2,
  Landmark,
  FileText,
  CreditCard,
  Plus,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface StudentDashboardProps {
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
}

export default function StudentDashboard({ activeTab = 'dashboard', onSelectTab }: StudentDashboardProps) {
  const { isMarathi } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [courseOffset, setCourseOffset] = useState(0);
  const [profileSubTab, setProfileSubTab] = useState('general');

  // Map sidebar activeTab to current view
  const currentTab = (() => {
    if (!activeTab || activeTab === 'dashboard' || activeTab === 'overview') return 'overview';
    return activeTab;
  })();

  const handleTabChange = (target: string) => {
    if (onSelectTab) {
      onSelectTab(target);
    }
  };

  // 5 Top KPI Metric Cards matching attached screenshot
  const kpiStats = [
    {
      id: 'enrolled',
      count: '12',
      labelEn: 'Enrolled Courses',
      labelMr: 'नोंदणीकृत अभ्यासक्रम',
      icon: GraduationCap,
      bg: 'bg-[#FFF0E6]',
      color: 'text-[#E35314]',
    },
    {
      id: 'completed',
      count: '8',
      labelEn: 'Completed Courses',
      labelMr: 'पूर्ण केलेले अभ्यासक्रम',
      icon: BookOpen,
      bg: 'bg-[#E0F2FE]',
      color: 'text-[#0284C7]',
    },
    {
      id: 'certificates',
      count: '3',
      labelEn: 'Certificates Earned',
      labelMr: 'मिळवलेली प्रमाणपत्रे',
      icon: Award,
      bg: 'bg-[#F3E8FF]',
      color: 'text-[#9333EA]',
    },
    {
      id: 'saved_jobs',
      count: '12',
      labelEn: 'Saved Job Opportunities',
      labelMr: 'जतन केलेल्या नोकरी संधी',
      icon: Briefcase,
      bg: 'bg-[#FFEDD5]',
      color: 'text-[#EA580C]',
    },
    {
      id: 'skill_progress',
      count: '85%',
      labelEn: 'Skill Growth Progress',
      labelMr: 'कौशल्य प्रगती',
      icon: BarChart3,
      bg: 'bg-[#E0F2FE]',
      color: 'text-[#0284C7]',
    },
  ];

  // Recommended Courses matching attached screenshot
  const recommendedCourses = [
    {
      id: 'c1',
      titleEn: 'Data Analytics Fundamentals',
      titleMr: 'डेटा ॲनालिटिक्स मूलभूत अभ्यासक्रम',
      badge: isMarathi ? 'लोकप्रिय' : 'Popular',
      badgeColor: 'bg-[#E35314] text-white',
      durationEn: '4 Weeks',
      durationMr: '४ आठवडे',
      lang: isMarathi ? 'मराठी + इंग्रजी' : 'Marathi + English',
      students: '25K+',
      image: '/course-analytics.jpg',
    },
    {
      id: 'c2',
      titleEn: 'Artificial Intelligence & Machine Learning',
      titleMr: 'आर्टिफिशियल इंटेलिजन्स आणि मशीन लर्निंग',
      badge: isMarathi ? 'नवीन' : 'New',
      badgeColor: 'bg-[#16A34A] text-white',
      durationEn: '8 Weeks',
      durationMr: '८ आठवडे',
      lang: isMarathi ? 'मराठी + इंग्रजी' : 'Marathi + English',
      students: '18K+',
      image: '/course-ai.jpg',
    },
    {
      id: 'c3',
      titleEn: 'Full-Stack Web Development',
      titleMr: 'वेब डेव्हलपमेंट (फुल स्टॅक)',
      badge: null,
      durationEn: '10 Weeks',
      durationMr: '१० आठवडे',
      lang: isMarathi ? 'मराठी + इंग्रजी' : 'Marathi + English',
      students: '32K+',
      image: '/course-webdev.jpg',
    },
  ];

  // Notifications matching attached screenshot
  const notifications = [
    {
      id: 'n1',
      titleEn: 'Chief Minister Skill Development Scheme 2026',
      titleMr: 'मुख्यमंत्री कौशल्य विकास योजना 2026',
      dateEn: 'Deadline: 30 September 2026',
      dateMr: 'अर्ज करण्याची अंतिम तारीख: 30 सप्टेंबर 2026',
      badge: isMarathi ? 'नवीन' : 'New',
      icon: GraduationCap,
      iconBg: 'bg-[#FFEADA]',
      iconColor: 'text-[#E35314]',
    },
    {
      id: 'n2',
      titleEn: 'TCS Internship Opportunity',
      titleMr: 'TCS मध्ये इंटर्नशिप संधी',
      dateEn: 'Deadline: 25 September 2026',
      dateMr: 'अर्ज करण्याची अंतिम तारीख: 25 सप्टेंबर 2026',
      badge: null,
      icon: Briefcase,
      iconBg: 'bg-[#FFEADA]',
      iconColor: 'text-[#E35314]',
    },
    {
      id: 'n3',
      titleEn: 'Your Skill Assessment Report is Ready',
      titleMr: 'तुमचा कौशल्य मूल्यांकन अहवाल तयार आहे',
      dateEn: 'Review your detailed scores and analytics',
      dateMr: 'आता तुमच्या निकालांची पाहणी करा',
      badge: null,
      icon: Settings,
      iconBg: 'bg-[#F3E8FF]',
      iconColor: 'text-[#9333EA]',
    },
    {
      id: 'n4',
      titleEn: 'New Courses Available',
      titleMr: 'नवीन अभ्यासक्रम उपलब्ध',
      dateEn: '5 new courses in AI and Data Science launched',
      dateMr: 'AI आणि डेटा सायन्स संबंधित 5 नवीन अभ्यासक्रम',
      badge: null,
      icon: BookOpen,
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
    },
  ];

  // My Skills matching attached screenshot
  const skills = [
    { name: 'Python', percentage: 85 },
    { name: 'Data Analysis', percentage: 70 },
    { name: 'Machine Learning', percentage: 60 },
    { name: 'Communication', percentage: 80 },
  ];

  // Career Opportunities matching attached screenshot
  const careerOpportunities = [
    {
      id: 'job-1',
      title: 'Data Analyst Intern',
      company: 'Tata Consultancy Services',
      location: isMarathi ? 'पुणे' : 'Pune',
      type: isMarathi ? 'इंटर्नशिप' : 'Internship',
      logoText: 'TATA',
      logoBg: 'bg-[#004B87] text-white',
    },
    {
      id: 'job-2',
      title: 'Software Developer Intern',
      company: 'Infosys',
      location: isMarathi ? 'पुणे' : 'Pune',
      type: isMarathi ? 'इंटर्नशिप' : 'Internship',
      logoText: 'Infosys',
      logoBg: 'bg-[#007CC3] text-white',
    },
    {
      id: 'job-3',
      title: 'AI/ML Trainee',
      company: 'Persistent Systems',
      location: isMarathi ? 'पुणे' : 'Pune',
      type: isMarathi ? 'फुल-टाइम' : 'Full-Time',
      logoText: 'PERSISTENT',
      logoBg: 'bg-[#E35314] text-white',
    },
  ];

  // Upcoming Events matching attached screenshot
  const upcomingEvents = [
    {
      id: 'e1',
      day: '25',
      month: isMarathi ? 'सप्टे' : 'SEP',
      titleEn: 'Career Guidance Webinar',
      titleMr: 'करिअर मार्गदर्शन वेबिनार',
      timeEn: '11:00 AM - 12:00 PM',
      timeMr: 'स. 11:00 - दु. 12:00',
      locationEn: 'Online',
      locationMr: 'ऑनलाईन',
    },
    {
      id: 'e2',
      day: '28',
      month: isMarathi ? 'सप्टे' : 'SEP',
      titleEn: 'Data Analytics Hands-on Workshop',
      titleMr: 'डेटा ॲनालिटिक्स कार्यशाळा',
      timeEn: '10:00 AM - 1:00 PM',
      timeMr: 'स. 10:00 - दु. 1:00',
      locationEn: 'Pune',
      locationMr: 'पुणे',
    },
    {
      id: 'e3',
      day: '05',
      month: isMarathi ? 'ऑक्टो' : 'OCT',
      titleEn: 'MahaKaushalya Job Fair 2026',
      titleMr: 'रोजगार मेळावा 2026',
      timeEn: '9:00 AM - 5:00 PM',
      timeMr: 'स. 9:00 - दु. 5:00',
      locationEn: 'Mumbai',
      locationMr: 'मुंबई',
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-3 min-h-0 select-none overflow-y-auto pr-1">
      {/* ─────────────────────────────────────────────────────────────
          1. MAIN DASHBOARD OVERVIEW TAB (100% MATCH WITH SCREENSHOT)
      ───────────────────────────────────────────────────────────── */}
      {currentTab === 'overview' && (
        <div className="flex flex-col gap-3.5">
          {/* ── Top Header Controls Bar: Greeting & Search ── */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                {isMarathi ? 'नमस्कार, कुलदीप ! 👋' : 'Hello, Kuldip ! 👋'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                {isMarathi
                  ? 'कौशल्य शिकू, संधी शोधू आणि उज्ज्वल भविष्य घडवू या!'
                  : "Let's learn skills, explore opportunities, and build a brighter future!"}
              </p>
            </div>

            <div className="relative w-full md:w-80 lg:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder={isMarathi ? 'अभ्यासक्रम, नोकरी किंवा कौशल्य शोधा...' : 'Search courses, jobs, or skills...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 bg-white border border-[#E8D4C2] rounded-xl text-xs sm:text-sm placeholder-slate-400 shadow-2xs focus:outline-none focus:ring-1 focus:ring-[#E35314] focus:border-[#E35314]"
              />
            </div>
          </div>

          {/* ── Hero Banner + "माझी प्रगती" Progress Card Row ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 shrink-0">
            {/* Hero Banner (8 cols / ~68%) */}
            <div
              className="lg:col-span-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-[#E8D4C2] shadow-2xs bg-[#F2E8DD]"
              style={{
                backgroundImage: `url('/student-hero-art.png')`,
                backgroundSize: 'auto 100%',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#F2E8DD',
                minHeight: '225px',
              }}
            >
              {/* Soft gradient wash to ensure smooth blending with typography */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2E8DD] via-[#F2E8DD]/90 to-transparent w-full md:w-[60%] pointer-events-none" />

              <div className="relative z-10 max-w-md p-6 sm:p-7 space-y-2 flex-1 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#261810] leading-tight">
                  {isMarathi ? (
                    <>
                      तुमच्या कौशल्यातून <br />
                      <span className="text-[#C84605]">सक्षम महाराष्ट्र घडवा.</span>
                    </>
                  ) : (
                    <>
                      Through Your Skills, <br />
                      <span className="text-[#C84605]">Build an Empowered Maharashtra.</span>
                    </>
                  )}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {isMarathi ? 'शिका • विकसित व्हा • नोकरी मिळवा' : 'Learn • Develop • Get Employed'}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleTabChange('search-courses')}
                    className="px-5 py-2.5 rounded-lg bg-[#D34005] hover:bg-[#B83200] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>{isMarathi ? 'अभ्यासक्रम शोधा' : 'Explore Courses'}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* "माझी प्रगती" (My Progress) Card (4 cols / ~32%) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  {isMarathi ? 'माझी प्रगती' : 'My Progress'}
                </h3>

                <div className="flex items-center gap-4">
                  {/* Circular Gauge */}
                  <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#0D9488]"
                        strokeDasharray="80, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-sm font-black text-slate-900">80%</span>
                  </div>

                  {/* Milestone Checklist */}
                  <div className="space-y-1 text-[11px] sm:text-xs">
                    <div className="flex items-center justify-between gap-3 text-slate-800">
                      <span>{isMarathi ? 'मूलभूत माहिती' : 'Basic Info'}</span>
                      <span className="text-[#0D9488] font-bold">✓</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-800">
                      <span>{isMarathi ? 'शैक्षणिक माहिती' : 'Education'}</span>
                      <span className="text-[#0D9488] font-bold">✓</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-800">
                      <span>{isMarathi ? 'कौशल्ये जोडा' : 'Add Skills'}</span>
                      <span className="text-[#0D9488] font-bold">✓</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-400">
                      <span>{isMarathi ? 'आवडीचे क्षेत्र' : 'Interests'}</span>
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block" />
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-400">
                      <span>{isMarathi ? 'करिअर उद्दिष्टे' : 'Career Goals'}</span>
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleTabChange('profile')}
                className="w-full mt-3 py-1.5 rounded-lg border border-[#E35314] text-[#E35314] font-bold text-xs hover:bg-[#FFF5EC] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{isMarathi ? 'प्रोफाइल पूर्ण करा' : 'Complete Profile'}</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* ── 5 Horizontal Stat Metric Cards ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 shrink-0">
            {kpiStats.map((kpi) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={kpi.id}
                  className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#E8D4C2] shadow-2xs flex items-center gap-3 hover:shadow-xs transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl ${kpi.bg} ${kpi.color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-lg sm:text-xl font-black text-slate-900 leading-tight block">
                      {kpi.count}
                    </span>
                    <span className="text-[11px] font-medium text-slate-600 truncate block">
                      {isMarathi ? kpi.labelMr : kpi.labelEn}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Middle Section: Recommended Courses (8 cols) + My Notifications (4 cols) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
            {/* Left: Recommended Courses (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {isMarathi ? 'शिफारस केलेले अभ्यासक्रम' : 'Recommended Courses'}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleTabChange('search-courses')}
                    className="text-xs font-bold text-[#E35314] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>{isMarathi ? 'सर्व पहा' : 'View All'}</span>
                    <span>→</span>
                  </button>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCourseOffset((prev) => (prev > 0 ? prev - 1 : recommendedCourses.length - 1))}
                      className="w-6 h-6 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-slate-600 cursor-pointer shadow-2xs"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      onClick={() => setCourseOffset((prev) => (prev + 1) % recommendedCourses.length)}
                      className="w-6 h-6 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-slate-600 cursor-pointer shadow-2xs"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Course Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[...recommendedCourses.slice(courseOffset), ...recommendedCourses.slice(0, courseOffset)].slice(0, 3).map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl border border-[#E8D4C2] shadow-2xs overflow-hidden flex flex-col justify-between hover:shadow-xs transition-all group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-900">
                        <img
                          src={course.image}
                          alt={course.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {course.badge && (
                          <span
                            className={`absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold ${course.badgeColor}`}
                          >
                            {course.badge}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-3 space-y-2">
                        <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug line-clamp-2">
                          {isMarathi ? course.titleMr : course.titleEn}
                        </h4>

                        <div className="space-y-1 text-[10.5px] text-slate-500">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1">
                              <Clock size={11} className="text-[#E35314]" />
                              {isMarathi ? course.durationMr : course.durationEn}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Globe size={11} className="text-slate-400" />
                              {course.lang}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-slate-600">
                            <Users size={11} className="text-slate-400" />
                            <span>
                              {course.students} {isMarathi ? 'विद्यार्थी' : 'Students'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 pt-0">
                      <button
                        onClick={() => handleTabChange('search-courses')}
                        className="w-full py-1.5 rounded-lg bg-[#E35314] hover:bg-[#C9430B] text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>{isMarathi ? 'कोर्स पहा' : 'View Course'}</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: My Notifications (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {isMarathi ? 'माझ्या सूचना' : 'My Announcements'}
                </h3>
                <button
                  onClick={() => handleTabChange('notifications')}
                  className="text-xs font-bold text-[#E35314] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>{isMarathi ? 'सर्व पहा' : 'View All'}</span>
                  <span>→</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl p-3.5 border border-[#E8D4C2] shadow-2xs space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {notifications.map((n) => {
                    const Icon = n.icon;
                    return (
                      <div key={n.id} className="flex items-start gap-2.5 pb-2.5 border-b border-stone-100 last:border-0 last:pb-0">
                        <div className={`w-8 h-8 rounded-full ${n.iconBg} ${n.iconColor} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Icon size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-xs font-bold text-slate-900 leading-tight truncate">
                              {isMarathi ? n.titleMr : n.titleEn}
                            </h4>
                            {n.badge && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-red-600 text-white shrink-0">
                                {n.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[10.5px] text-slate-500 leading-tight mt-0.5">
                            {isMarathi ? n.dateMr : n.dateEn}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Section: 3 Columns (Skills, Career Opportunities, Upcoming Events) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Col 1: My Skills */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'माझी कौशल्ये' : 'My Skills'}
                  </h3>
                  <button
                    onClick={() => handleTabChange('skill-assessment')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline cursor-pointer"
                  >
                    {isMarathi ? 'कौशल्ये व्यवस्थापित करा →' : 'Manage Skills →'}
                  </button>
                </div>

                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-800">
                        <span>{skill.name}</span>
                        <span className="text-slate-600">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#E35314] rounded-full transition-all duration-500"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 2: Career Opportunities */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'करिअरच्या संधी' : 'Career Opportunities'}
                  </h3>
                  <button
                    onClick={() => handleTabChange('jobs')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline cursor-pointer"
                  >
                    {isMarathi ? 'सर्व पहा →' : 'View All →'}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {careerOpportunities.map((job) => (
                    <div
                      key={job.id}
                      className="p-2.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between hover:bg-stone-50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg ${job.logoBg} font-black text-[9px] flex items-center justify-center shrink-0`}>
                          {job.logoText.slice(0, 4)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">{job.title}</h4>
                          <p className="text-[10px] text-slate-500">{job.company}</p>
                          <div className="flex items-center gap-1 text-[9.5px] text-slate-400 mt-0.5">
                            <MapPin size={10} />
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full border border-red-200 text-red-600 bg-red-50 text-[9.5px] font-bold">
                        {isMarathi ? 'नवीन' : 'New'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 3: Upcoming Events */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'येणारे कार्यक्रम' : 'Upcoming Events'}
                  </h3>
                  <button
                    onClick={() => alert('View all upcoming workshops')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline cursor-pointer"
                  >
                    {isMarathi ? 'सर्व पहा →' : 'View All →'}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {upcomingEvents.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-2.5 rounded-xl border border-stone-200 bg-white flex items-center gap-3 hover:bg-stone-50 transition-colors"
                    >
                      {/* Date Badge */}
                      <div className="w-11 h-11 rounded-xl bg-[#FFF2E8] border border-[#FCDCC9] flex flex-col items-center justify-center shrink-0">
                        <span className="text-sm font-black text-[#E35314] leading-none">{evt.day}</span>
                        <span className="text-[9px] font-bold text-slate-600 mt-0.5 leading-none">{evt.month}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 leading-tight truncate">
                          {isMarathi ? evt.titleMr : evt.titleEn}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock size={10} className="text-slate-400" />
                            {isMarathi ? evt.timeMr : evt.timeEn}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={10} className="text-slate-400" />
                            {isMarathi ? evt.locationMr : evt.locationEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. SIDEBAR TAB: MY PROFILE (माझे प्रोफाइल) - 100% SCREENSHOT MATCH
      ───────────────────────────────────────────────────────────── */}
      {currentTab === 'profile' && (
        <div className="flex flex-col gap-3.5">
          {/* ── Page Header: Title, Subtitle, Breadcrumb & Edit Button ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {isMarathi ? 'माझे प्रोफाइल' : 'My Profile'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {isMarathi
                  ? 'तुमच्या शिक्षण, कौशल्य आणि करिअर प्रवासाची सर्व माहिती एका ठिकाणी.'
                  : 'All your education, skills, and career pathway information in one unified view.'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs text-slate-400">
                {isMarathi ? 'मुख्यपृष्ठ > माझे प्रोफाइल' : 'Home > My Profile'}
              </span>
              <button
                onClick={() => alert('Opening Profile Editor...')}
                className="px-3.5 py-2 rounded-lg bg-[#E35314] hover:bg-[#C9430B] text-white text-xs font-bold shadow-2xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              >
                <Pencil size={13} />
                <span>{isMarathi ? 'प्रोफाइल संपादित करा' : 'Edit Profile'}</span>
              </button>
            </div>
          </div>

          {/* ── Hero Profile Card (3 Columns) ── */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8D4C2] shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              {/* Left Section: Photo, Name, Verified Badge, Contacts (4.5 cols) */}
              <div className="lg:col-span-5 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-stone-200 pb-4 lg:pb-0 lg:pr-4">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full shrink-0 p-1 bg-gradient-to-tr from-[#FFA500] to-[#E35314] shadow-md">
                  <img
                    src="/kuldip-godase.jpg"
                    alt="कुलदीप गोडसे"
                    className="w-full h-full object-cover rounded-full bg-[#FFF2E8]"
                  />
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 truncate">
                      {isMarathi ? 'कुलदीप गोडसे' : 'Kuldip Godase'}
                    </h2>
                    <div className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0" title="Verified Profile">
                      <Check size={11} strokeWidth={3} />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-500">
                    {isMarathi ? 'विद्यार्थी' : 'Student'}
                  </p>

                  <div className="space-y-0.5 pt-1 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5 truncate">
                      <Mail size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate">kuldip.godase@example.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} className="text-slate-400 shrink-0" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-slate-400 shrink-0" />
                      <span>{isMarathi ? 'पुणे, महाराष्ट्र' : 'Pune, Maharashtra'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section: College, Branch, Academic Year, Reg No (4 cols) */}
              <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-stone-200 pb-4 lg:pb-0 lg:pr-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <Building2 size={15} className="text-[#C2410C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                      {isMarathi ? 'महाविद्यालय' : 'Institution / College'}
                    </span>
                    <span className="font-bold text-slate-800 leading-tight block text-[11.5px]">
                      SKN सिंहगड कॉलेज ऑफ इंजिनिअरिंग, कोर्टी, पंढरपूर
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BookOpen size={15} className="text-[#C2410C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                      {isMarathi ? 'शैक्षणिक शाखा' : 'Discipline / Branch'}
                    </span>
                    <span className="font-bold text-slate-800 leading-tight block text-[11.5px]">
                      कंप्यूटर सायन्स आणि इंजिनिअरिंग (CSE)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar size={15} className="text-[#C2410C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                      {isMarathi ? 'शैक्षणिक वर्ष' : 'Academic Year'}
                    </span>
                    <span className="font-bold text-slate-800 leading-tight block text-[11.5px]">
                      {isMarathi ? 'तृतीय वर्ष (2027)' : 'Third Year (2027)'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CreditCard size={15} className="text-[#C2410C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                      {isMarathi ? 'नोंदणी क्रमांक' : 'Registration ID'}
                    </span>
                    <span className="font-bold text-slate-800 leading-tight block text-[11.5px]">
                      SSE/CSE/2024/0123
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section: Maharashtra Quote Card (3 cols) */}
              <div className="lg:col-span-3 h-full">
                <div
                  className="rounded-xl p-4 bg-gradient-to-br from-[#FFF9F3] via-[#FEEFE2] to-[#FED7AA]/30 border border-[#F3DEC9] flex flex-col justify-center h-full relative overflow-hidden"
                  style={{
                    backgroundImage: `url('/maharashtra-map.png')`,
                    backgroundSize: '110px auto',
                    backgroundPosition: 'right bottom',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <span className="text-2xl font-black text-[#E35314] leading-none mb-1">“</span>
                  <p className="text-xs font-bold text-slate-800 leading-relaxed z-10">
                    {isMarathi
                      ? 'कौशल्य, शिक्षण आणि संधी यांच्या माध्यमातून समृद्ध महाराष्ट्राचा विकास घडवूया !'
                      : 'Empowering Maharashtra through continuous skill development, education, and career opportunities!'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Profile Sub-Navigation Tabs / Pills ── */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0 scrollbar-none">
            {[
              { id: 'general', mr: 'सर्वसाधारण माहिती', en: 'General Information' },
              { id: 'education', mr: 'शैक्षणिक माहिती', en: 'Educational Details' },
              { id: 'skills', mr: 'कौशल्ये', en: 'Skills' },
              { id: 'courses', mr: 'अभ्यासक्रम', en: 'Courses' },
              { id: 'certificates', mr: 'प्रमाणपत्रे', en: 'Certificates' },
              { id: 'jobs', mr: 'नोकरी संधी', en: 'Job Opportunities' },
              { id: 'scholarships', mr: 'शिष्यवृत्ती', en: 'Scholarships' },
              { id: 'settings', mr: 'सेटिंग्ज', en: 'Settings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProfileSubTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  profileSubTab === tab.id
                    ? 'bg-[#E35314] text-white shadow-2xs'
                    : 'bg-white border border-[#E8D4C2] text-slate-700 hover:bg-[#FAF7F2]'
                }`}
              >
                {isMarathi ? tab.mr : tab.en}
              </button>
            ))}
          </div>

          {/* ── Row 1 of Profile Cards: Personal Info, Education, Skills ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Card 1: वैयक्तिक माहिती (Personal Information) */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'वैयक्तिक माहिती' : 'Personal Information'}
                  </h3>
                  <button
                    onClick={() => alert('Edit personal info')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Pencil size={11} />
                    <span>{isMarathi ? 'संपादित करा' : 'Edit'}</span>
                  </button>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-400 w-4 mt-0.5">👤</span>
                    <div className="flex-1 flex justify-between gap-1">
                      <span className="text-slate-500">{isMarathi ? 'पूर्ण नाव' : 'Full Name'}</span>
                      <span className="font-bold text-slate-900 text-right">कुलदीप गोडसे</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-400 w-4 mt-0.5">✉️</span>
                    <div className="flex-1 flex justify-between gap-1">
                      <span className="text-slate-500">{isMarathi ? 'ईमेल आयडी' : 'Email ID'}</span>
                      <span className="font-bold text-slate-900 text-right truncate max-w-[170px]">kuldip.godase@example.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-400 w-4 mt-0.5">📞</span>
                    <div className="flex-1 flex justify-between gap-1">
                      <span className="text-slate-500">{isMarathi ? 'मोबाईल क्रमांक' : 'Mobile Number'}</span>
                      <span className="font-bold text-slate-900 text-right">+91 98765 43210</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-400 w-4 mt-0.5">📅</span>
                    <div className="flex-1 flex justify-between gap-1">
                      <span className="text-slate-500">{isMarathi ? 'जन्मतारीख' : 'Date of Birth'}</span>
                      <span className="font-bold text-slate-900 text-right">15 ऑगस्ट 2005</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-400 w-4 mt-0.5">⚧️</span>
                    <div className="flex-1 flex justify-between gap-1">
                      <span className="text-slate-500">{isMarathi ? 'लिंग' : 'Gender'}</span>
                      <span className="font-bold text-slate-900 text-right">{isMarathi ? 'पुरुष' : 'Male'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-400 w-4 mt-0.5">📍</span>
                    <div className="flex-1 flex justify-between gap-1">
                      <span className="text-slate-500">{isMarathi ? 'पत्ता' : 'Address'}</span>
                      <span className="font-bold text-slate-900 text-right">{isMarathi ? 'पुणे, महाराष्ट्र, भारत' : 'Pune, Maharashtra, India'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: शैक्षणिक माहिती (Educational Details) */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'शैक्षणिक माहिती' : 'Educational Details'}
                  </h3>
                  <button
                    onClick={() => alert('Edit academic info')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Pencil size={11} />
                    <span>{isMarathi ? 'संपादित करा' : 'Edit'}</span>
                  </button>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Building2 size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-slate-500 block text-[10.5px]">{isMarathi ? 'महाविद्यालय' : 'Institution'}</span>
                      <span className="font-bold text-slate-900 block leading-tight">
                        SKN सिंहगड कॉलेज ऑफ इंजिनिअरिंग, कोर्टी, पंढरपूर
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <BookOpen size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-slate-500 block text-[10.5px]">{isMarathi ? 'शाखा' : 'Department'}</span>
                      <span className="font-bold text-slate-900 block leading-tight">
                        कंप्यूटर सायन्स आणि इंजिनिअरिंग (CSE)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Calendar size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="flex-1 flex justify-between">
                      <span className="text-slate-500">{isMarathi ? 'शैक्षणिक वर्ष' : 'Duration'}</span>
                      <span className="font-bold text-slate-900">{isMarathi ? 'तृतीय वर्ष (2024 - 2027)' : '3rd Year (2024 - 2027)'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CreditCard size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="flex-1 flex justify-between">
                      <span className="text-slate-500">{isMarathi ? 'नोंदणी क्रमांक' : 'Roll / Reg No'}</span>
                      <span className="font-bold text-slate-900">SSE/CSE/2024/0123</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <BarChart3 size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="flex-1 flex justify-between">
                      <span className="text-slate-500">CGPA</span>
                      <span className="font-black text-emerald-700">9.12 / 10</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <GraduationCap size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="flex-1 flex justify-between">
                      <span className="text-slate-500">{isMarathi ? 'शिक्षण पद्धती' : 'Degree'}</span>
                      <span className="font-bold text-slate-900">{isMarathi ? 'पदवी (B.Tech)' : 'Graduation (B.Tech)'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: कौशल्ये (Skills) */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'कौशल्ये (Skills)' : 'Skills Inventory'}
                  </h3>
                  <button
                    onClick={() => alert('Edit skills')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Pencil size={11} />
                    <span>{isMarathi ? 'संपादित करा' : 'Edit'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    { name: 'Python', primary: true },
                    { name: 'Java', primary: false },
                    { name: 'C++', primary: false },
                    { name: 'SQL', primary: false },
                    { name: 'Machine Learning', primary: true },
                    { name: 'Data Analysis', primary: false },
                    { name: 'Power BI', primary: true },
                    { name: 'Tableau', primary: false },
                    { name: 'React.js', primary: false },
                    { name: 'AWS', primary: true },
                    { name: 'Azure', primary: false },
                    { name: 'Figma', primary: false },
                  ].map((s) => (
                    <span
                      key={s.name}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                        s.primary
                          ? 'bg-[#FFF2E8] border border-[#FED7AA] text-[#C2410C]'
                          : 'bg-[#F1F5F9] border border-slate-200 text-slate-700'
                      }`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => alert('Opening Add New Skill modal...')}
                  className="w-full py-2 rounded-lg border border-dashed border-[#E35314] text-[#E35314] bg-[#FFF8F3] hover:bg-[#FFEFE5] text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Plus size={13} />
                  <span>{isMarathi ? 'नवे कौशल्य जोडा' : 'Add New Skill'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Row 2 of Profile Cards: Areas of Interest, Career Goals, Documents ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Card 4: स्वारस्य क्षेत्रे (Areas of Interest) */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'स्वारस्य क्षेत्रे (Areas of Interest)' : 'Areas of Interest'}
                  </h3>
                  <button
                    onClick={() => alert('Edit areas of interest')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Pencil size={11} />
                    <span>{isMarathi ? 'संपादित करा' : 'Edit'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { labelMr: 'डेटा सायन्स', labelEn: 'Data Science', icon: BarChart3, bg: 'bg-[#FFF6ED] border-[#FDE5D2]', color: 'text-[#C2410C]' },
                    { labelMr: 'आर्टिफिशियल इंटेलिजन्स', labelEn: 'Artificial Intelligence', icon: Cpu, bg: 'bg-[#F0F9FF] border-[#E0F2FE]', color: 'text-[#0284C7]' },
                    { labelMr: 'क्लाउड कॉम्प्युटिंग', labelEn: 'Cloud Computing', icon: Cloud, bg: 'bg-[#F0FDF4] border-[#DCFCE7]', color: 'text-[#16A34A]' },
                    { labelMr: 'वेब डेव्हलपमेंट', labelEn: 'Web Development', icon: Code2, bg: 'bg-[#FAF5FF] border-[#F3E8FF]', color: 'text-[#9333EA]' },
                    { labelMr: 'उद्योजकता', labelEn: 'Entrepreneurship', icon: Award, bg: 'bg-[#FFFBEB] border-[#FEF3C7]', color: 'text-[#D97706]' },
                    { labelMr: 'समाजसेवा / ग्रामीण विकास', labelEn: 'Rural Development', icon: Landmark, bg: 'bg-[#F0FDFA] border-[#CCFBF1]', color: 'text-[#0D9488]' },
                  ].map((interest) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={interest.labelEn}
                        className={`p-2.5 rounded-xl border ${interest.bg} flex flex-col items-center justify-center text-center gap-1.5 hover:scale-102 transition-transform cursor-pointer`}
                      >
                        <div className={`w-7 h-7 rounded-lg ${interest.color} flex items-center justify-center`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-800 leading-tight">
                          {isMarathi ? interest.labelMr : interest.labelEn}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Card 5: करिअर उद्दिष्टे (Career Goals) */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'करिअर उद्दिष्टे' : 'Career Goals'}
                  </h3>
                  <button
                    onClick={() => alert('Edit career goals')}
                    className="text-[11px] font-bold text-[#E35314] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Pencil size={11} />
                    <span>{isMarathi ? 'संपादित करा' : 'Edit'}</span>
                  </button>
                </div>

                <div className="space-y-3.5 text-xs">
                  {/* Short-Term Goals */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <Target size={14} className="text-[#E35314]" />
                      <h4 className="font-bold text-slate-900 text-xs">
                        {isMarathi ? 'लघुकालीन उद्दिष्टे (1-2 वर्षे)' : 'Short-Term Goals (1-2 Years)'}
                      </h4>
                    </div>
                    <ul className="space-y-1 pl-5 text-[11px] text-slate-600 list-disc">
                      <li>{isMarathi ? 'डेटा सायन्स / ML क्षेत्रात इंटर्नशिप मिळवणे' : 'Secure an internship in Data Science / ML'}</li>
                      <li>{isMarathi ? 'प्रत्यक्ष प्रोजेक्ट्सवर काम करून कौशल्य विकसित करणे' : 'Build industry skills through live capstone projects'}</li>
                      <li>{isMarathi ? 'उद्योगातील तज्ज्ञांकडून मार्गदर्शन मिळवणे' : 'Gain mentorship from senior tech practitioners'}</li>
                    </ul>
                  </div>

                  {/* Long-Term Goals */}
                  <div className="space-y-1.5 pt-1 border-t border-stone-100">
                    <div className="flex items-center gap-1.5">
                      <Trophy size={14} className="text-amber-500" />
                      <h4 className="font-bold text-slate-900 text-xs">
                        {isMarathi ? 'दीर्घकालीन उद्दिष्टे (3-5 वर्षे)' : 'Long-Term Goals (3-5 Years)'}
                      </h4>
                    </div>
                    <ul className="space-y-1 pl-5 text-[11px] text-slate-600 list-disc">
                      <li>{isMarathi ? 'डेटा सायन्स क्षेत्रात करिअर तयार करणे' : 'Establish career as Lead Data Scientist in Maharashtra'}</li>
                      <li>{isMarathi ? 'समाज हितासाठी तंत्रज्ञानाधारित समाधान विकसित करणे' : 'Deploy technology solutions for public welfare'}</li>
                      <li>{isMarathi ? 'महाराष्ट्राच्या विकासात योगदान देणे' : 'Contribute meaningfully to state economic growth'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: दस्तऐवज (Documents / DigiLocker) */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#E8D4C2] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {isMarathi ? 'दस्तऐवज' : 'Documents & Certificates'}
                  </h3>
                  <button
                    onClick={() => alert('Opening Document Upload modal...')}
                    className="px-2.5 py-1 rounded-lg bg-[#E35314] hover:bg-[#C9430B] text-white text-[10px] font-bold shadow-2xs flex items-center gap-1 cursor-pointer"
                  >
                    <UploadCloud size={12} />
                    <span>{isMarathi ? 'नवा दस्तऐवज अपलोड करा' : 'Upload Document'}</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    { titleMr: 'आधार कार्ड', titleEn: 'Aadhaar Card', date: '12 ऑगस्ट 2024', icon: CreditCard, color: 'text-rose-600 bg-rose-50' },
                    { titleMr: 'महाविद्यालय ओळखपत्र', titleEn: 'College Student ID', date: '15 ऑगस्ट 2024', icon: CreditCard, color: 'text-blue-600 bg-blue-50' },
                    { titleMr: '10 वी गुणपत्रिका', titleEn: '10th SSC Marksheet', date: '10 जुलै 2024', icon: FileText, color: 'text-emerald-600 bg-emerald-50' },
                    { titleMr: '12 वी गुणपत्रिका', titleEn: '12th HSC Marksheet', date: '10 जुलै 2024', icon: FileText, color: 'text-purple-600 bg-purple-50' },
                  ].map((doc) => {
                    const DocIcon = doc.icon;
                    return (
                      <div
                        key={doc.titleEn}
                        className="p-2 rounded-xl border border-stone-200 bg-[#FAF7F2] flex items-center justify-between hover:bg-stone-100 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg ${doc.color} flex items-center justify-center shrink-0`}>
                            <DocIcon size={14} />
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block text-xs leading-tight">
                              {isMarathi ? doc.titleMr : doc.titleEn}
                            </span>
                            <span className="text-[10px] text-slate-400 block leading-tight">
                              {isMarathi ? `अपलोड: ${doc.date}` : `Uploaded: ${doc.date}`}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => alert(`Downloading verified ${doc.titleEn}...`)}
                          className="w-7 h-7 rounded-lg bg-white border border-stone-200 hover:bg-[#FFEADA] text-slate-600 hover:text-[#E35314] flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
                          title="Download Document"
                        >
                          <Download size={13} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. SIDEBAR TAB: SEARCH COURSES & MY COURSES
      ───────────────────────────────────────────────────────────── */}
      {(currentTab === 'search-courses' || currentTab === 'my-courses') && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D4C2] shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#8C3310]">
                {currentTab === 'search-courses'
                  ? isMarathi ? 'अभ्यासक्रम शोधा व नोंदणी करा' : 'Explore Government-Empaneled Courses'
                  : isMarathi ? 'माझे नोंदणीकृत अभ्यासक्रम' : 'My Active Enrolled Courses'}
              </h2>
              <p className="text-xs text-slate-500">
                Industry-aligned NSQF Level 4-6 certification courses across Maharashtra.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {recommendedCourses.map((c) => (
              <div key={c.id} className="rounded-xl border border-stone-200 p-3 space-y-2">
                <img src={c.image} alt={c.titleEn} className="h-28 w-full object-cover rounded-lg" />
                <h4 className="font-bold text-slate-900 text-xs">{isMarathi ? c.titleMr : c.titleEn}</h4>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>{isMarathi ? c.durationMr : c.durationEn}</span>
                  <span>{c.students} Enrolled</span>
                </div>
                <button
                  onClick={() => alert(`Enrolling in ${c.titleEn}...`)}
                  className="w-full py-1.5 rounded-lg bg-[#E35314] text-white text-xs font-bold hover:bg-[#C9430B] cursor-pointer"
                >
                  {isMarathi ? 'सुरू करा' : 'Start Learning'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. SIDEBAR TAB: TRACK PROGRESS & SKILL ASSESSMENT
      ───────────────────────────────────────────────────────────── */}
      {(currentTab === 'track-progress' || currentTab === 'skill-assessment') && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D4C2] shadow-2xs space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-[#8C3310]">
            {isMarathi ? 'कौशल्य मूल्यांकन आणि प्रगती अहवाल' : 'AI Adaptive Skill Evaluation & Progress'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] space-y-2">
              <span className="font-bold text-slate-900 block">Overall Skill Readiness</span>
              <div className="text-2xl font-black text-emerald-700">85% Industry-Ready</div>
              <p className="text-xs text-slate-600">
                You rank in the top 10% of candidates in Pune district for Data Analytics and Python workflows.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] space-y-2">
              <span className="font-bold text-slate-900 block">Next Recommended Assessment</span>
              <div className="text-sm font-bold text-slate-800">Advanced SQL & Cloud Warehousing</div>
              <button
                onClick={() => alert('Starting 30-min AI proctored assessment...')}
                className="px-4 py-1.5 bg-[#E35314] text-white rounded-lg text-xs font-bold hover:bg-[#C9430B] cursor-pointer"
              >
                Take Assessment Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. SIDEBAR TAB: JOBS & CAREER OPPORTUNITIES
      ───────────────────────────────────────────────────────────── */}
      {currentTab === 'jobs' && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D4C2] shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#8C3310]">
                {isMarathi ? 'स्मार्ट नोकरी व इंटर्नशिप संधी' : 'Smart AI Job Opportunities & Vacancies'}
              </h2>
              <p className="text-xs text-slate-500">
                Verified corporate recruiters linked directly with Maharashtra Skill Development Board.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {careerOpportunities.map((job) => (
              <div key={job.id} className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-slate-900">{job.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">88% Match</span>
                </div>
                <p className="text-xs text-slate-600">{job.company} • {job.location}</p>
                <button
                  onClick={() => alert(`Applied to ${job.title} at ${job.company}!`)}
                  className="w-full py-1.5 bg-[#E35314] text-white text-xs font-bold rounded-lg hover:bg-[#C9430B] cursor-pointer"
                >
                  Quick Apply with DigiLocker
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. SIDEBAR TAB: SCHOLARSHIPS & SCHEMES
      ───────────────────────────────────────────────────────────── */}
      {currentTab === 'scholarships' && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D4C2] shadow-2xs space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-[#8C3310]">
            {isMarathi ? 'महाराष्ट्र शासन शिष्यवृत्ती व कौशल्य योजना' : 'Maharashtra State Skill Scholarships & Subsidies'}
          </h2>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-900 text-xs">Pramod Mahajan Kaushalya Udyojakta Abhiyan</h4>
                <p className="text-[11px] text-slate-600">100% tuition subsidy for NSQF Level 4-6 certification courses.</p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-lg">Eligible & Active</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-900 text-xs">Maharashtra Youth Apprenticeship Stipend</h4>
                <p className="text-[11px] text-slate-600">₹8,000 to ₹10,000/month government stipend during corporate internships.</p>
              </div>
              <button
                onClick={() => alert('Scholarship application submitted!')}
                className="px-3 py-1 bg-[#E35314] text-white font-bold text-xs rounded-lg hover:bg-[#C9430B] cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. SIDEBAR TAB: CERTIFICATES & SETTINGS & NOTIFICATIONS & CAREER ADVICE
      ───────────────────────────────────────────────────────────── */}
      {(currentTab === 'certificates' || currentTab === 'settings' || currentTab === 'notifications' || currentTab === 'career-advice') && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D4C2] shadow-2xs space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-[#8C3310]">
            {currentTab === 'certificates'
              ? isMarathi ? 'डिजिलॉकर सत्यापित प्रमाणपत्रे' : 'DigiLocker Verified State Certifications'
              : currentTab === 'notifications'
              ? isMarathi ? 'सूचना व अपडेट्स केंद्र' : 'All Notifications & Announcements'
              : currentTab === 'career-advice'
              ? isMarathi ? 'एआय करिअर सल्लागार' : 'AI Career Guidance Counselor'
              : isMarathi ? 'खाते व गोपनीयता सेटिंग्ज' : 'Student Account Settings'}
          </h2>
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] text-xs space-y-2 text-slate-700">
            <p>
              Connected to student ID <strong>SSE/CSE/2024/0123</strong>. All certifications are cryptographically stamped by Maharashtra State Skill University.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
