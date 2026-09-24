import { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Building2,
  Download,
  Users,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function InstitutionDashboard() {
  const { isMarathi } = useLanguage();
  const [selectedSubTab, setSelectedSubTab] = useState<'overview' | 'departments' | 'gap' | 'partners' | 'reports'>('overview');

  const kpis = [
    {
      id: 'students',
      label: isMarathi ? 'नोंदणीकृत विद्यार्थी' : 'Registered Students',
      value: '4,850',
      trend: '+12% Enrollment',
      subtext: isMarathi ? 'सर्व विभाग' : 'Across 6 departments',
      icon: GraduationCap,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'programs',
      label: isMarathi ? 'कौशल्य अभ्यासक्रम' : 'Skill Programs',
      value: '18',
      trend: isMarathi ? '६ उद्योग संलग्न' : '6 Industry Co-designed',
      subtext: isMarathi ? 'कौशल्य विद्यापीठ' : 'State Skill Univ credit',
      icon: BookOpen,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'certs',
      label: isMarathi ? 'प्राप्त प्रमाणपत्रे' : 'Certifications Earned',
      value: '3,120',
      trend: '78.4% Pass Rate',
      subtext: isMarathi ? 'एनएसक्यूएफ स्तर' : 'NSQF Level 5 & 6',
      icon: Award,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'internship',
      label: isMarathi ? 'इंटर्नशिप दर' : 'Internship Rate',
      value: '71.4%',
      trend: '+9.2% YoY',
      subtext: isMarathi ? '६ महिन्यांची इंटर्नशिप' : 'Mandatory semester',
      icon: Users,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'placement',
      label: isMarathi ? 'कॅम्पस प्लेसमेंट' : 'Placement Rate',
      value: '68.5%',
      trend: '+7.1% YoY',
      subtext: isMarathi ? 'सरासरी वेतन ₹४.८ लाख' : 'Avg CTC ₹4.8 LPA',
      icon: Briefcase,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'partners',
      label: isMarathi ? 'उद्योग सामंजस्य करार' : 'Industry Partnerships',
      value: '42',
      trend: '+8 New MoUs',
      subtext: isMarathi ? 'टाटा, इन्फोसिस, एल&टी' : 'Tata, Infosys, L&T',
      icon: Building2,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
  ];

  const deptData = [
    { name: 'Computer Engineering & IT', students: 1240, certified: 1080, placed: 86, ctc: '₹6.2 LPA' },
    { name: 'Mechanical & Auto Engineering', students: 1120, certified: 840, placed: 72, ctc: '₹4.6 LPA' },
    { name: 'Electronics & Telecommunication', students: 860, certified: 640, placed: 68, ctc: '₹5.1 LPA' },
    { name: 'Electrical Engineering', students: 780, certified: 510, placed: 61, ctc: '₹4.4 LPA' },
    { name: 'Civil & Environmental', students: 850, certified: 410, placed: 48, ctc: '₹3.9 LPA' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Header Controls Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'महाविद्यालय व संस्था डॅशबोर्ड — शासकीय अभियांत्रिकी महाविद्यालय' : 'Institution & College Employability Intelligence — COEP Technological University'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'महाराष्ट्र उच्च व तंत्रशिक्षण विभाग व कौशल्य विद्यापीठ संलग्नता • नॅक A++ मानांकन'
              : 'Affiliated with Maharashtra State Skill University & Directorate of Technical Education • NAAC A++'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => alert('Downloading NAAC / NBA Employability Audit Report...')}
            className="flex items-center gap-1.5 h-[28px] px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-700 shadow-2xs hover:bg-[#FAF7F2] cursor-pointer"
          >
            <Download size={13} className="text-[#C2410C]" />
            <span>{isMarathi ? 'एनबीए अहवाल डाऊनलोड' : 'NBA / NAAC Compliance PDF'}</span>
          </button>
        </div>
      </div>

      {/* ── Sub-navigation Pills ── */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0">
        {[
          { id: 'overview', en: 'Employability Overview', mr: 'रोजगार सज्जता आढावा' },
          { id: 'departments', en: 'Departmental Distribution', mr: 'विभागनिहाय वाटप' },
          { id: 'gap', en: 'Academic vs Industry Gap', mr: 'अभ्यासक्रम तूट विश्लेषण' },
          { id: 'partners', en: 'Industry Linkages & Drives', mr: 'उद्योग भागीदारी व ड्राइव्ह' },
          { id: 'reports', en: 'Accreditation Reports', mr: 'मान्यता व अहवाल' },
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
          {/* Left Column: Employability Pipeline & Department Benchmarking (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {/* Employability Funnel Card */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'विद्यार्थी रोजगार सज्जता फनेल (२०२४-२५ बॅच)' : 'Student Employability Progression Funnel'}
                </h3>
                <span className="text-[10px] text-slate-500">Class of 2025</span>
              </div>

              <div className="space-y-1.5 text-xs">
                {[
                  { stage: 'Eligible Students', count: '4,850', pct: 100, color: 'bg-[#7B2400]' },
                  { stage: 'Skill Trained in CoE', count: '4,120', pct: 84.9, color: 'bg-[#C2410C]' },
                  { stage: 'Industry Certified', count: '3,120', pct: 64.3, color: 'bg-[#F56600]' },
                  { stage: 'Interviewed in Drives', count: '2,840', pct: 58.5, color: 'bg-emerald-600' },
                  { stage: 'Campus Placed', count: '2,240', pct: 46.1, color: 'bg-emerald-700' },
                ].map((s) => (
                  <div key={s.stage} className="flex flex-col text-[11px]">
                    <div className="flex justify-between font-semibold text-slate-800 mb-0.5">
                      <span>{s.stage}</span>
                      <span>{s.count} ({s.pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Comparison Table */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'विभागनिहाय रोजगार कामगिरी तुलना' : 'Departmental Employability Benchmarking'}
                </h3>
                <span className="text-[10px] text-slate-500">5 Branches</span>
              </div>

              <div className="space-y-1.5">
                {deptData.map((d) => (
                  <div key={d.name} className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 leading-tight block">{d.name}</span>
                      <span className="text-[10px] text-slate-500">
                        {d.students} Students • {d.certified} Certified
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-emerald-700 block text-[11px]">{d.placed}% Placed</span>
                      <span className="text-[9.5px] font-semibold text-slate-600">Avg {d.ctc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic vs Industry Gap & Upcoming Job Drives (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* Academic vs Industry Skill Gap */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <h3 className="text-xs font-bold text-[#8C3310]">
                {isMarathi ? 'अभ्यासक्रम विरुद्ध उद्योग मागणी तूट' : 'Academic Curriculum vs Industry Need Matrix'}
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="p-2 rounded-lg border border-red-200 bg-red-50 text-red-950">
                  <span className="font-bold block text-[11px]">Computer Science Curriculum:</span>
                  <span className="text-[10px] text-red-800">Taught: Core Java & DBMS • Industry Demands: Cloud DevOps, CI/CD, React</span>
                </div>
                <div className="p-2 rounded-lg border border-amber-200 bg-amber-50 text-amber-950">
                  <span className="font-bold block text-[11px]">Mechanical Engineering:</span>
                  <span className="text-[10px] text-amber-800">Taught: Thermal Engines • Industry Demands: EV Powertrains & Battery BMS</span>
                </div>
              </div>
            </div>

            {/* Upcoming Campus Placement Drives */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-[#8C3310] mb-2">
                  {isMarathi ? 'आगामी कॅम्पस प्लेसमेंट ड्राइव्ह' : 'Upcoming Industry Drives'}
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg border border-stone-200 bg-white">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Tata Motors EV Division</span>
                      <span className="text-emerald-700 font-semibold">28 Sep 2025</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Bhosari Campus • 45 Openings for Mechanical & Electrical</span>
                  </div>
                  <div className="p-2 rounded-lg border border-stone-200 bg-white">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Infosys Technologies</span>
                      <span className="text-emerald-700 font-semibold">05 Oct 2025</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Virtual Drive • 80 Openings for CS & IT</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[10px] text-slate-500">
                Connected to Maharashtra State Employment & Placement Portal.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Departments */}
      {selectedSubTab === 'departments' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'विभागनिहाय सखोल कामगिरी आणि कौशल्य केंद्र' : 'Departmental Center of Excellence (CoE) Performance'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {deptData.map((d) => (
              <div key={d.name} className="p-3 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-slate-900 block text-xs">{d.name}</span>
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>Enrolled: {d.students}</span>
                  <span>Certified: {d.certified}</span>
                  <span className="font-bold text-emerald-700">{d.placed}% Placed</span>
                </div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${d.placed}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Academic vs Industry Gap */}
      {selectedSubTab === 'gap' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'उद्योग तूट भरून काढण्यासाठी शिफारस केलेले पूरक अभ्यासक्रम' : 'Bridge Courses Recommended to Eliminate Curriculum Gaps'}
          </h2>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] text-xs space-y-2 text-slate-700">
            <p>
              By offering 40-hour micro-credential certifications co-certified by Maharashtra State Skill University, student placement conversion rates improved by 22% in the 2024-25 cycle.
            </p>
          </div>
        </div>
      )}

      {/* SubTab: Partners */}
      {selectedSubTab === 'partners' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'अधिकृत उद्योग भागीदार आणि सामंजस्य करार (MoUs)' : 'Corporate Industry Partners & Active MoUs'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {['Tata Motors Ltd', 'Infosys Ltd', 'Larsen & Toubro', 'Bharat Forge Ltd', 'Tech Mahindra', 'Kirloskar Brothers', 'Bajaj Auto', 'Persistent Systems'].map((partner) => (
              <div key={partner} className="p-3 rounded-xl border border-stone-200 bg-white flex flex-col justify-between">
                <span className="font-bold text-slate-900">{partner}</span>
                <span className="text-[10px] text-emerald-700 font-semibold mt-1">Active MoU (2023-2026)</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Reports */}
      {selectedSubTab === 'reports' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'अधिकृत शैक्षणिक व रोजगार मान्यता अहवाल' : 'Official Higher Education Regulatory Submissions'}
          </h2>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg border border-stone-200 flex justify-between items-center">
              <div>
                <strong className="block text-slate-900">National Board of Accreditation (NBA) Placement Audit</strong>
                <span className="text-[10px] text-slate-500">Verified by State Government Directorate of Technical Education</span>
              </div>
              <button
                onClick={() => alert('Downloading NBA Compliance PDF...')}
                className="px-3 py-1 bg-[#F56600] text-white rounded font-bold hover:bg-[#D94E00] cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
