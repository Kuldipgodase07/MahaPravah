import { useState } from 'react';
import {
  Users,
  BookOpen,
  Award,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Download,
  Search,
  Star,
  Building2,
  Plus,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function TrainingProviderDashboard() {
  const { isMarathi } = useLanguage();
  const [selectedSubTab, setSelectedSubTab] = useState<'overview' | 'courses' | 'learners' | 'outcomes' | 'scorecard'>('overview');
  const [learnerSearch, setLearnerSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const kpis = [
    {
      id: 'learners',
      label: isMarathi ? 'सक्रिय प्रशिक्षणार्थी' : 'Active Learners',
      value: '3,420',
      trend: '+12%',
      subtext: isMarathi ? 'मागील तुकडीच्या तुलनेत' : 'vs last cohort',
      icon: Users,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'courses',
      label: isMarathi ? 'सक्रिय अभ्यासक्रम' : 'Active Courses',
      value: '24',
      trend: isMarathi ? '६ केंद्रे' : '6 State Centers',
      subtext: isMarathi ? 'पुणे, नाशिक, ठाणे' : 'Pune, Nashik, Thane',
      icon: BookOpen,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'completion',
      label: isMarathi ? 'अभ्यासक्रम पूर्णता दर' : 'Completion Rate',
      value: '86.4%',
      trend: '+4.2%',
      subtext: isMarathi ? 'उत्तीर्ण प्रमाण' : 'Pass benchmark',
      icon: CheckCircle2,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'certification',
      label: isMarathi ? 'प्रमाणीकरण दर' : 'Certification Rate',
      value: '79.2%',
      trend: '+5.8%',
      subtext: isMarathi ? 'शासन मान्यताप्राप्त' : 'Govt verified',
      icon: Award,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'placement',
      label: isMarathi ? 'प्लेसमेंट दर' : 'Placement Rate',
      value: '72.8%',
      trend: '+8.1%',
      subtext: isMarathi ? 'उद्योग संलग्न' : 'Industry tied',
      icon: Briefcase,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'dropout',
      label: isMarathi ? 'गळती दर (Dropout)' : 'Dropout Rate',
      value: '4.1%',
      trend: '-1.2%',
      subtext: isMarathi ? 'गळती कमी झाली' : 'Attrition reduction',
      icon: TrendingUp,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
  ];

  const courses = [
    {
      name: 'Advanced Data Analytics & BI',
      nameMr: 'अ‍ॅडव्हान्स्ड डेटा अ‍ॅनालिटिक्स व बीआय',
      sector: 'IT / ITeS',
      capacity: 120,
      enrolled: 118,
      faculty: 'Dr. Vinay Joshi',
      duration: '4 Months',
      status: 'Active',
      center: 'Pune Central (Shivajinagar)',
    },
    {
      name: 'Electric Vehicle Powertrain Specialist',
      nameMr: 'ईव्ही पॉवरट्रेन विशेषज्ञ',
      sector: 'Automotive & Clean Tech',
      capacity: 80,
      enrolled: 76,
      faculty: 'Er. Sachin Shinde',
      duration: '6 Months',
      status: 'Active',
      center: 'Pimpri-Chinchwad Hub',
    },
    {
      name: 'Cloud Infrastructure & DevOps Engineer',
      nameMr: 'क्लाउड इन्फ्रास्ट्रक्चर व डेव्हऑप्स',
      sector: 'Cloud & Cyber',
      capacity: 100,
      enrolled: 98,
      faculty: 'Sneha Deshmukh',
      duration: '4 Months',
      status: 'Active',
      center: 'Navi Mumbai Hub',
    },
    {
      name: 'Industrial Robotics & PLC Automation',
      nameMr: 'औद्योगिक रोबोटिक्स व पीएलसी ऑटोमेशन',
      sector: 'Manufacturing',
      capacity: 60,
      enrolled: 54,
      faculty: 'Prof. S. Rane',
      duration: '6 Months',
      status: 'Enrolling',
      center: 'Nashik Ambad Hub',
    },
  ];

  const learners = [
    {
      id: 'L-1021',
      name: 'Aditya Kulkarni',
      course: 'Advanced Data Analytics',
      attendance: 96,
      assessment: 92,
      progress: 88,
      status: 'Certified',
      placement: 'Placed (Persistent Systems)',
    },
    {
      id: 'L-1022',
      name: 'Pooja Jadhav',
      course: 'Electric Vehicle Powertrain',
      attendance: 92,
      assessment: 86,
      progress: 78,
      status: 'Active',
      placement: 'Interview Scheduled (Tata Motors)',
    },
    {
      id: 'L-1023',
      name: 'Rohan Deshmukh',
      course: 'Cloud Infrastructure & DevOps',
      attendance: 71,
      assessment: 64,
      progress: 60,
      status: 'Needs Attention',
      placement: 'Training Ongoing',
    },
    {
      id: 'L-1024',
      name: 'Snehal Patil',
      course: 'Industrial Robotics & PLC',
      attendance: 94,
      assessment: 89,
      progress: 92,
      status: 'Certified',
      placement: 'Placed (Bharat Forge)',
    },
    {
      id: 'L-1025',
      name: 'Amit Shinde',
      course: 'Advanced Data Analytics',
      attendance: 68,
      assessment: 58,
      progress: 52,
      status: 'Needs Attention',
      placement: 'Remedial Assigned',
    },
  ];

  const filteredLearners = learners.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(learnerSearch.toLowerCase()) || l.course.toLowerCase().includes(learnerSearch.toLowerCase());
    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && l.status.toLowerCase().includes(statusFilter.toLowerCase());
  });

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Header Controls Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'प्रशिक्षण प्रदाता डॅशबोर्ड — महाकौशल्य अकादमी' : 'Training Provider Operations — MahaKaushalya Academy'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'महाराष्ट्र कौशल्य विकास सोसायटी मान्यताप्राप्त वर्ग A+ संस्था (नोंदणी क्र. MP-TP-2024-884)'
              : 'MSSDS Empaneled Grade A+ Training Partner (ID: MP-TP-2024-884) • Pune Regional Cluster'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => alert('Exporting Provider Performance PDF report...')}
            className="flex items-center gap-1.5 h-[28px] px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-700 shadow-2xs hover:bg-[#FAF7F2] cursor-pointer"
          >
            <Download size={13} className="text-[#C2410C]" />
            <span>{isMarathi ? 'अहवाल डाऊनलोड' : 'Export Audit Report'}</span>
          </button>
        </div>
      </div>

      {/* ── Sub-navigation Tabs ── */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0">
        {[
          { id: 'overview', en: 'Operations Overview', mr: 'कार्यपद्धती आढावा' },
          { id: 'courses', en: 'Course Catalogue & Batches', mr: 'अभ्यासक्रम व तुकड्या' },
          { id: 'learners', en: 'Learner Management', mr: 'प्रशिक्षणार्थी व्यवस्थापन' },
          { id: 'outcomes', en: 'Outcome Funnel', mr: 'रोजगार निष्पत्ती फनेल' },
          { id: 'scorecard', en: 'Provider Quality Scorecard', mr: 'संस्था गुणवत्ता गुणपत्रिका' },
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
          {/* Left Column: Operational Alerts + Outcome Tracking (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {/* Actionable Operational Alerts */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle size={14} className="text-[#C2410C]" />
                  <h3 className="text-xs font-bold text-[#8C3310]">
                    {isMarathi ? 'सक्रिय कार्यचालन सूचना व हस्तक्षेप' : 'Operational Alerts & Required Actions'}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  3 Urgent Tasks
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-[#FEF3F2] border border-[#FECDCA] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span className="text-slate-800 font-medium text-[11px]">
                      12 learners in Hinjawadi Batch 4 have attendance below 75% threshold.
                    </span>
                  </div>
                  <button className="px-2 py-0.5 bg-red-600 text-white rounded text-[10px] font-bold shrink-0 hover:bg-red-700 cursor-pointer">
                    Send Notice
                  </button>
                </div>

                <div className="p-2 rounded-lg bg-[#FFF8E6] border border-[#FEDF89] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span className="text-slate-800 font-medium text-[11px]">
                      Placement verification data pending for 38 graduates from June cohort.
                    </span>
                  </div>
                  <button className="px-2 py-0.5 bg-amber-600 text-white rounded text-[10px] font-bold shrink-0 hover:bg-amber-700 cursor-pointer">
                    Upload Slips
                  </button>
                </div>

                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F56600] shrink-0" />
                    <span className="text-slate-800 font-medium text-[11px]">
                      Solar PV Technician batch completion rate decreased by 3.2% this month.
                    </span>
                  </div>
                  <button className="px-2 py-0.5 bg-stone-700 text-white rounded text-[10px] font-bold shrink-0 hover:bg-stone-800 cursor-pointer">
                    Audit Batch
                  </button>
                </div>
              </div>
            </div>

            {/* Outcome Retention Funnel */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'कौशल्य ते शाश्वत रोजगार निष्पत्ती फनेल' : 'Skill-to-Sustained Employment Funnel'}
                </h3>
                <span className="text-[10px] text-slate-500">FY 2025-26 Cohorts</span>
              </div>

              <div className="space-y-2">
                {[
                  { stage: 'Training Enrolled', val: '3,420', pct: 100, color: 'bg-[#7B2400]' },
                  { stage: 'Assessment Appeared', val: '3,110', pct: 90.9, color: 'bg-[#C2410C]' },
                  { stage: 'Govt. Certified', val: '2,710', pct: 79.2, color: 'bg-[#F56600]' },
                  { stage: 'Industry Placed', val: '2,490', pct: 72.8, color: 'bg-emerald-600' },
                  { stage: '12-Month Retention', val: '2,180', pct: 63.7, color: 'bg-emerald-700' },
                ].map((f) => (
                  <div key={f.stage} className="flex flex-col text-[11px]">
                    <div className="flex justify-between font-semibold text-slate-800 mb-0.5">
                      <span>{f.stage}</span>
                      <span>{f.val} ({f.pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className={`h-full ${f.color} rounded-full`} style={{ width: `${f.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scorecard & Quick Batches (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* Quality Scorecard */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'संस्था गुणवत्ता गुणपत्रिका' : 'State Accreditation Scorecard'}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                  Grade A+ (91.4 / 100)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8]">
                  <span className="text-[10px] text-slate-500 block">Learner Satisfaction</span>
                  <div className="flex items-center gap-1 font-bold text-slate-900 mt-0.5">
                    <Star size={13} className="text-amber-500 fill-amber-500" />
                    <span>4.8 / 5.0 (2,410 reviews)</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8]">
                  <span className="text-[10px] text-slate-500 block">Employer Rating</span>
                  <div className="flex items-center gap-1 font-bold text-slate-900 mt-0.5">
                    <Building2 size={13} className="text-[#C2410C]" />
                    <span>4.6 / 5.0 (84 employers)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[10.5px] text-slate-600">
                Qualifies for 15% state incentive bonus under Maharashtra Kaushalya Sanjeevani Scheme.
              </div>
            </div>

            {/* Active Batches Snapshot */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-[#8C3310]">
                    {isMarathi ? 'चालू तुकड्या (Active Batches)' : 'Active Batch Capacity'}
                  </h3>
                  <button
                    onClick={() => setSelectedSubTab('courses')}
                    className="text-[10.5px] font-bold text-[#F56600] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-2">
                  {courses.slice(0, 3).map((c) => (
                    <div key={c.name} className="p-2 rounded-lg border border-stone-200 text-xs flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-slate-800 leading-tight">{c.name}</span>
                        <span className="text-[9.5px] px-1.5 py-0.5 rounded font-bold bg-[#FFEADB] text-[#B44200]">
                          {c.enrolled} / {c.capacity}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">{c.center}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => alert('Opening Add Batch modal...')}
                className="w-full mt-2 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00] flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus size={13} />
                <span>Add New Course Batch</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Course Management */}
      {selectedSubTab === 'courses' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'अभ्यासक्रम व्यवस्थापन सूची' : 'Comprehensive Course Catalogue & Center Allocations'}
            </h2>
            <button
              onClick={() => alert('New Course modal')}
              className="px-3 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00] flex items-center gap-1 cursor-pointer"
            >
              <Plus size={13} />
              <span>Create New Course</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {courses.map((c) => (
              <div key={c.name} className="p-3 rounded-xl border border-[#E8D4C2] bg-white space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{c.name}</h3>
                    <span className="text-[10px] text-slate-500">{c.sector}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {c.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                  <div><strong>Capacity:</strong> {c.enrolled} / {c.capacity}</div>
                  <div><strong>Duration:</strong> {c.duration}</div>
                  <div><strong>Lead Faculty:</strong> {c.faculty}</div>
                  <div><strong>Center:</strong> {c.center}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Learner Management Table */}
      {selectedSubTab === 'learners' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col min-h-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'प्रशिक्षणार्थी डेटा व कामगिरी' : 'Learner Cohort & Outcome Registry'}
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative w-48">
                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search trainee..."
                  value={learnerSearch}
                  onChange={(e) => setLearnerSearch(e.target.value)}
                  className="w-full pl-7 pr-2 py-1 text-xs border border-stone-200 rounded-lg"
                />
              </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2 py-1 text-xs border border-stone-200 rounded-lg bg-white text-slate-700"
                >
                  <option value="all">All Statuses</option>
                  <option value="Certified">Certified</option>
                  <option value="Active">Active</option>
                  <option value="Needs Attention">Needs Attention</option>
                </select>
                <button
                  onClick={() => alert('Exporting Learner Registry CSV...')}
                  className="px-2.5 py-1 bg-[#FAF7F2] border border-[#DFCEBD] text-xs font-semibold rounded-lg hover:bg-stone-100 flex items-center gap-1 cursor-pointer"
                >
                  <Download size={12} />
                  <span>Export CSV</span>
                </button>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto min-h-0">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF7F2] border-b border-[#E8D4C2] text-slate-600 font-bold">
                <tr>
                  <th className="p-2">Learner ID & Name</th>
                  <th className="p-2">Course</th>
                  <th className="p-2 text-right">Attendance</th>
                  <th className="p-2 text-right">Score</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Placement Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredLearners.map((l) => (
                  <tr key={l.id} className="hover:bg-stone-50">
                    <td className="p-2 font-semibold text-slate-900">
                      <div>{l.name}</div>
                      <span className="text-[10px] text-slate-400">{l.id}</span>
                    </td>
                    <td className="p-2 text-slate-700">{l.course}</td>
                    <td className="p-2 text-right font-medium">{l.attendance}%</td>
                    <td className="p-2 text-right font-bold text-slate-800">{l.assessment}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          l.status === 'Certified'
                            ? 'bg-emerald-100 text-emerald-800'
                            : l.status === 'Needs Attention'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {l.status}
                      </span>
                    </td>
                    <td className="p-2 font-medium text-slate-700">{l.placement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SubTab: Outcomes */}
      {selectedSubTab === 'outcomes' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'प्रशिक्षण ते रोजगार टिकून राहणे विश्लेषण' : 'Training → Assessment → Placement → Retention Longitudinal Study'}
          </h2>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] text-xs space-y-2 text-slate-700">
            <p>
              Across our 6 centers in Western Maharashtra and Vidarbha, 86.4% completed their curriculum. Of the 2,490 candidates placed, 87.5% continued in the same job at the 6-month verification mark, qualifying our academy for the Tier-1 government performance subsidy.
            </p>
          </div>
        </div>
      )}

      {/* SubTab: Scorecard */}
      {selectedSubTab === 'scorecard' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'अधिकृत संस्था गुणवत्ता मूल्यांकन' : 'Official State Skill Quality Audit Breakdown'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200">
              <span className="font-bold text-slate-800 block mb-1">Curriculum Adherence</span>
              <span className="text-lg font-bold text-[#F56600]">94 / 100</span>
              <p className="text-[11px] text-slate-500 mt-1">100% aligned with NSQF Level 4-6</p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200">
              <span className="font-bold text-slate-800 block mb-1">Lab & Infrastructure</span>
              <span className="text-lg font-bold text-[#F56600]">92 / 100</span>
              <p className="text-[11px] text-slate-500 mt-1">Industrial grade workstations</p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200">
              <span className="font-bold text-slate-800 block mb-1">Placement Linkage</span>
              <span className="text-lg font-bold text-emerald-700">88 / 100</span>
              <p className="text-[11px] text-slate-500 mt-1">42 verified corporate MoUs</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
