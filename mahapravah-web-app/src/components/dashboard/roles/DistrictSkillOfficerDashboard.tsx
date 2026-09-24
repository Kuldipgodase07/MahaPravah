import { useState } from 'react';
import {
  Users,
  BookOpen,
  Award,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  Plus,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import MaharashtraDistrictMap from '../MaharashtraDistrictMap';

export default function DistrictSkillOfficerDashboard() {
  const { isMarathi } = useLanguage();
  const [selectedSubTab, setSelectedSubTab] = useState<'overview' | 'map' | 'comparison' | 'skillgap' | 'interventions'>('overview');
  const [showInterventionModal, setShowInterventionModal] = useState(false);

  const kpis = [
    {
      id: 'beneficiaries',
      label: isMarathi ? 'नोंदणीकृत लाभार्थी' : 'Registered Beneficiaries',
      value: '84,200',
      trend: '+14% vs Target',
      subtext: isMarathi ? 'पुणे जिल्हा' : 'Pune District Total',
      icon: Users,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'enrollment',
      label: isMarathi ? 'प्रशिक्षण नोंदणी' : 'Training Enrollment',
      value: '62,400',
      trend: '74% Capacity',
      subtext: isMarathi ? '८२ शासकीय व खाजगी केंद्रे' : '82 Empaneled Centers',
      icon: BookOpen,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'completion',
      label: isMarathi ? 'पूर्णता दर' : 'Completion Rate',
      value: '78.6%',
      trend: '+4.8% YoY',
      subtext: isMarathi ? 'उत्तीर्ण प्रमाणपत्रे' : 'Certified candidates',
      icon: Award,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'placement',
      label: isMarathi ? 'प्लेसमेंट दर' : 'Placement Rate',
      value: '66.2%',
      trend: '+6.4% YoY',
      subtext: isMarathi ? 'सत्यापित रोजगार' : 'Verified EPFO linked',
      icon: Briefcase,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'jobseekers',
      label: isMarathi ? 'नोकरी इच्छुक लोकसंख्या' : 'Job-Seeking Population',
      value: '28,500',
      trend: '-8.2% Unemployed',
      subtext: isMarathi ? 'सक्रिय उमेदवार' : 'Active registrants',
      icon: TrendingUp,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'skillgap',
      label: isMarathi ? 'कौशल्य तूट निर्देशांक' : 'Skill Gap Index',
      value: '7.4 / 10',
      trend: 'Moderate Deficit',
      subtext: isMarathi ? 'क्लाउड व ऑटोमेशन' : 'Cloud & Automation',
      icon: AlertTriangle,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  const interventions = [
    {
      id: 'INT-2025-01',
      title: 'Cloud & AI/ML Capacity Expansion in Chakan ITI',
      dept: 'MSSDS & Directorate of Vocational Education',
      target: '1,200 Trainees',
      deadline: '30 Nov 2025',
      progress: 68,
      status: 'On Track',
      impact: '+35% Supply of Cloud Techs',
    },
    {
      id: 'INT-2025-02',
      title: 'Baramati Precision CNC & Robotics Upskilling Drive',
      dept: 'District Skill Development Office & Bharat Forge',
      target: '850 Trainees',
      deadline: '15 Oct 2025',
      progress: 84,
      status: 'Near Completion',
      impact: '78% Pre-Placement Commitments',
    },
    {
      id: 'INT-2025-03',
      title: 'Shirur Rural Youth Automotive Retention Program',
      dept: 'District Employment Exchange & ITI Shirur',
      target: '600 Trainees',
      deadline: '15 Dec 2025',
      progress: 35,
      status: 'Needs Acceleration',
      impact: 'Remedial Attendance Coaching',
    },
  ];

  const talukaData = [
    { name: 'Haveli (Pune Urban)', demand: '38,400', supply: '28,200', gap: '-10,200', rate: '74.2%' },
    { name: 'Khed (Chakan Auto Hub)', demand: '24,600', supply: '14,800', gap: '-9,800', rate: '71.5%' },
    { name: 'Baramati (Agri & Precision)', demand: '12,200', supply: '9,400', gap: '-2,800', rate: '68.0%' },
    { name: 'Shirur (MIDC Cluster)', demand: '14,100', supply: '8,200', gap: '-5,900', rate: '58.4%' },
    { name: 'Mulshi (Hinjawadi IT Corridor)', demand: '29,800', supply: '18,500', gap: '-11,300', rate: '79.1%' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Header Controls Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'जिल्हा कौशल्य अधिकारी डॅशबोर्ड — पुणे जिल्हा' : 'District Skill Officer Intelligence — Pune District'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'महाराष्ट्र शासन कौशल्य विकास, रोजगार व उद्योजकता आयुक्तालय • पुणे विभाग'
              : 'Commissionerate of Skill Development, Employment & Entrepreneurship • Govt. of Maharashtra'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowInterventionModal(true)}
            className="flex items-center gap-1.5 h-[28px] px-3 bg-[#F56600] text-white rounded-lg text-xs font-bold shadow-2xs hover:bg-[#D94E00] cursor-pointer"
          >
            <Plus size={13} />
            <span>{isMarathi ? 'नवीन हस्तक्षेप तयार करा' : 'Create District Intervention'}</span>
          </button>
        </div>
      </div>

      {/* ── Sub-navigation Pills ── */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0">
        {[
          { id: 'overview', en: 'District Intelligence Overview', mr: 'जिल्हा बुद्धिमत्ता आढावा' },
          { id: 'map', en: 'Division & Taluka Drilldown', mr: 'विभाग व तालुका विश्लेषण' },
          { id: 'comparison', en: 'Historical Performance Comparisons', mr: 'तुलनात्मक कामगिरी' },
          { id: 'skillgap', en: 'Skill Gap & Interventions', mr: 'कौशल्य तूट व हस्तक्षेप' },
          { id: 'interventions', en: 'Active Interventions Tracker', mr: 'हस्तक्षेप ट्रॅकर' },
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
          {/* Left Column: District Map & Taluka Breakdown (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            <div className="h-[240px] shrink-0">
              <MaharashtraDistrictMap />
            </div>

            {/* Taluka Data Table */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'तालुकानिहाय कौशल्य मागणी व पुरवठा (पुणे जिल्हा)' : 'Taluka-Level Demand vs Trained Supply Balance'}
                </h3>
                <span className="text-[10px] text-slate-500">5 Key Industrial Talukas</span>
              </div>

              <div className="space-y-1.5">
                {talukaData.map((t) => (
                  <div key={t.name} className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 leading-tight block">{t.name}</span>
                      <span className="text-[10px] text-slate-500">
                        Demand: {t.demand} • Supply: {t.supply}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-red-600 block text-[11px]">Gap: {t.gap}</span>
                      <span className="text-[9.5px] font-semibold text-emerald-700">Placement: {t.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Recommended Interventions & District Alerts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* AI Skill Gap Recommendation Card */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#F56600]" />
                  <h3 className="text-xs font-bold text-[#8C3310]">
                    {isMarathi ? 'एआय जिल्हा कौशल्य हस्तक्षेप शिफारस' : 'AI-Assisted District Intervention Plan'}
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Evidence-Backed
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#FFF9F3] border border-[#F1E5D8] space-y-1.5 text-xs">
                <div className="font-bold text-[#2C1A0E]">
                  District: Pune (Chakan & Hinjawadi Clusters)
                </div>
                <div className="text-[11px] text-slate-600">
                  <strong>High Demand:</strong> AI/ML, Cloud Architecture, Industrial IoT<br />
                  <strong>Low Supply:</strong> Cloud Infrastructure Technicians (-3,200 Deficit)<br />
                  <strong>Recommended Action:</strong> Increase Cloud training capacity by 35% across Government ITI Aundh and Pimpri centers.
                </div>
                <button
                  onClick={() => setShowInterventionModal(true)}
                  className="w-full py-1 mt-1 bg-[#F56600] text-white rounded font-bold text-[11px] hover:bg-[#D94E00] cursor-pointer"
                >
                  Adopt & Launch Intervention
                </button>
              </div>
            </div>

            {/* District Operational Alerts */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-[#8C3310] mb-2">
                  {isMarathi ? 'जिल्हास्तरीय अलर्ट व तातडीच्या बाबी' : 'District Operational Alerts'}
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-1.5">
                    <AlertTriangle size={13} className="shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <span className="font-bold block text-[11px]">Low Placement Alert: Shirur Rural</span>
                      <span className="text-[10px] text-red-800">38% placement rate vs district baseline of 66.2%.</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-1.5">
                    <ShieldAlert size={13} className="shrink-0 mt-0.5 text-amber-600" />
                    <div>
                      <span className="font-bold block text-[11px]">Employer Demand Spike: EV Techs</span>
                      <span className="text-[10px] text-amber-800">850 EV technicians requested by Chakan auto corridor.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[10px] text-slate-500">
                Directly connected to District Collectorate Skill Committee dashboard.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Map Drilldown */}
      {selectedSubTab === 'map' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'महाराष्ट्र → विभाग → जिल्हा → तालुका सखोल विश्लेषण' : 'Maharashtra State → Division → District → Taluka Interactive Drilldown'}
          </h2>
          <div className="h-[280px]">
            <MaharashtraDistrictMap />
          </div>
        </div>
      )}

      {/* SubTab: Comparison */}
      {selectedSubTab === 'comparison' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'मागील वर्षाच्या तुलनेत प्रगती विश्लेषण' : 'Period-over-Period Performance Comparison (FY 2024-25 vs FY 2025-26)'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="text-slate-500 block">Enrollment Growth</span>
              <span className="text-lg font-bold text-slate-900">+14.2%</span>
              <p className="text-[11px] text-slate-500 mt-1">62,400 vs 54,600 last FY</p>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="text-slate-500 block">Placement Rate Surge</span>
              <span className="text-lg font-bold text-emerald-700">+6.4%</span>
              <p className="text-[11px] text-slate-500 mt-1">66.2% vs 59.8% baseline</p>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8]">
              <span className="text-slate-500 block">Median Wage Progression</span>
              <span className="text-lg font-bold text-[#F56600]">+19.4%</span>
              <p className="text-[11px] text-slate-500 mt-1">Avg ₹24,500/month initial wage</p>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Interventions Tracker */}
      {selectedSubTab === 'interventions' || selectedSubTab === 'skillgap' ? (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'सक्रिय जिल्हा हस्तक्षेप कृती आराखडा' : 'Active District Skill Interventions Registry'}
            </h2>
            <button
              onClick={() => setShowInterventionModal(true)}
              className="px-3 py-1.5 bg-[#F56600] text-white text-xs font-bold rounded-lg hover:bg-[#D94E00] flex items-center gap-1 cursor-pointer"
            >
              <Plus size={13} />
              <span>Create Intervention</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {interventions.map((inv) => (
              <div key={inv.id} className="p-3 rounded-xl border border-stone-200 bg-white space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-[12.5px]">{inv.title}</h3>
                    <span className="text-[10px] text-slate-500">{inv.dept} • Target: {inv.target}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {inv.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>Progress: {inv.progress}%</span>
                  <span className="text-slate-500">Deadline: {inv.deadline}</span>
                </div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F56600] rounded-full" style={{ width: `${inv.progress}%` }} />
                </div>
                <span className="text-[10.5px] text-slate-600 block">Expected Impact: {inv.impact}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Create Intervention Modal */}
      {showInterventionModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 border border-[#E8D4C2] shadow-2xl space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <h3 className="text-sm font-bold text-[#8C3310]">Create District Skill Intervention</h3>
              <button onClick={() => setShowInterventionModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Intervention Title</label>
                <input type="text" placeholder="e.g. Electric Vehicle Upskilling Batch in Chakan" className="w-full p-2 border border-stone-300 rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Assigned Center / Provider</label>
                  <select className="w-full p-2 border border-stone-300 rounded-lg">
                    <option>Govt. ITI Aundh, Pune</option>
                    <option>MahaKaushalya Skills Academy</option>
                    <option>C-DAC Pune</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Target Trainee Count</label>
                  <input type="number" placeholder="e.g. 500" className="w-full p-2 border border-stone-300 rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Completion Deadline</label>
                <input type="date" className="w-full p-2 border border-stone-300 rounded-lg" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-stone-200">
              <button onClick={() => setShowInterventionModal(false)} className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold">Cancel</button>
              <button
                onClick={() => {
                  alert('District intervention officially sanctioned and assigned!');
                  setShowInterventionModal(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00]"
              >
                Sanction Intervention
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
