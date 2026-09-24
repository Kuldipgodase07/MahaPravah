import { useState } from 'react';
import {
  Landmark,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  Coins,
  Sparkles,
  Sliders,
  Download,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import MaharashtraDistrictMap from '../MaharashtraDistrictMap';

interface PolicyOfficerDashboardProps {
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
}

export default function PolicyOfficerDashboard({ activeTab = 'dashboard', onSelectTab }: PolicyOfficerDashboardProps) {
  const { isMarathi } = useLanguage();
  const currentTab = (!activeTab || activeTab === 'dashboard' || activeTab === 'overview') ? 'overview' : activeTab;

  // Policy Simulator State
  const [capacityDelta, setCapacityDelta] = useState(25);
  const [partnerDelta, setPartnerDelta] = useState(30);

  const kpis = [
    {
      id: 'beneficiaries',
      label: isMarathi ? 'एकूण लाभार्थी' : 'Total Beneficiaries',
      value: '12.4 Lakh',
      trend: '+14.2% YoY',
      subtext: isMarathi ? 'सर्व ३६ जिल्हे' : 'Across 36 Districts',
      icon: Users,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'completion',
      label: isMarathi ? 'प्रशिक्षण पूर्णता दर' : 'Training Completion',
      value: '84.2%',
      trend: '+3.6% YoY',
      subtext: isMarathi ? '१०.४ लाख प्रमाणित' : '10.4 Lakh Certified',
      icon: Award,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'employment',
      label: isMarathi ? 'रोजगार दर' : 'Employment Rate',
      value: '68.4%',
      trend: '+6.2% YoY',
      subtext: isMarathi ? 'सत्यापित ईपीएफओ' : 'Verified EPFO Linkage',
      icon: Briefcase,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'placement',
      label: isMarathi ? 'थेट प्लेसमेंट दर' : 'Direct Placement Rate',
      value: '62.8%',
      trend: '+5.1% YoY',
      subtext: isMarathi ? 'उद्योग भरती' : 'Industry Absorbed',
      icon: Landmark,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'wage',
      label: isMarathi ? 'सरासरी वेतन वृद्धी' : 'Wage Progression',
      value: '+18.6%',
      trend: '₹22,400 Median',
      subtext: isMarathi ? 'मासिक उत्पन्न वाढ' : 'Avg entry monthly pay',
      icon: Coins,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'impact',
      label: isMarathi ? 'धोरण प्रभाव निर्देशांक' : 'Policy Impact Score',
      value: '8.8 / 10',
      trend: 'Tier-1 State',
      subtext: isMarathi ? 'नीती आयोग रँकिंग' : 'NITI Aayog Top 3',
      icon: TrendingUp,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  const programs = [
    {
      name: 'Pramod Mahajan Kaushalya Vikas Abhiyan (PMKVA)',
      target: '4,50,000',
      actual: '4,68,200',
      completion: '86.2%',
      placement: '71.4%',
      budget: '₹185 Cr',
      utilization: '92.4%',
    },
    {
      name: 'Chief Minister Youth Skill Training Scheme (CMSDS)',
      target: '3,80,000',
      actual: '3,92,400',
      completion: '84.8%',
      placement: '68.1%',
      budget: '₹140 Cr',
      utilization: '88.6%',
    },
    {
      name: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)',
      target: '1,80,000',
      actual: '1,72,100',
      completion: '78.4%',
      placement: '64.0%',
      budget: '₹75 Cr',
      utilization: '81.2%',
    },
    {
      name: 'Maharashtra State Innovation Society (MSInS) Start-up & Skill',
      target: '60,000',
      actual: '64,800',
      completion: '91.2%',
      placement: '82.5%',
      budget: '₹50 Cr',
      utilization: '94.0%',
    },
  ];

  // Calculated simulation forecasts
  const simulatedBeneficiaries = Math.round(1240000 * (1 + capacityDelta * 0.008));
  const simulatedPlacementIncrease = (capacityDelta * 0.18 + partnerDelta * 0.24).toFixed(1);
  const simulatedBudget = Math.round(450 * (1 + capacityDelta * 0.006 + partnerDelta * 0.003));

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Header Controls Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'धोरण अधिकारी व मंत्रालय डॅशबोर्ड — कौशल्य विकास विभाग' : 'Executive Policy & Program Governance — Ministry of Skill Development, GoM'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'महाराष्ट्र शासन • पुरावा-आधारित धोरण नियोजन, निधी वाटप व परिणाम मूल्यांकन व्यासपीठ'
              : 'Government of Maharashtra • Evidence-based policy planning, fiscal allocation & socioeconomic impact analysis'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => alert('Exporting Cabinet Policy Briefing Dossier...')}
            className="flex items-center gap-1.5 h-[28px] px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-700 shadow-2xs hover:bg-[#FAF7F2] cursor-pointer"
          >
            <Download size={13} className="text-[#C2410C]" />
            <span>{isMarathi ? 'मंत्रालय अहवाल डाऊनलोड' : 'Export Cabinet Policy Brief'}</span>
          </button>
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
          {/* Left Column: Maharashtra State Map & Flagship Schemes (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            <div className="h-[240px] shrink-0">
              <MaharashtraDistrictMap />
            </div>

            {/* Flagship Scheme Performance Card */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'प्रमुख राज्य कौशल्य योजनांची कामगिरी' : 'State Flagship Skill Schemes Evaluation'}
                </h3>
                <span className="text-[10px] text-slate-500">FY 2025-26 Year-to-Date</span>
              </div>

              <div className="space-y-1.5">
                {programs.map((p) => (
                  <div key={p.name} className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex flex-col gap-1 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-900 leading-tight">{p.name}</span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {p.placement} Placed
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-600">
                      <div>Target vs Actual: <strong>{p.target} / {p.actual}</strong></div>
                      <div>Completion: <strong>{p.completion}</strong></div>
                      <div>Budget: <strong>{p.budget} ({p.utilization} used)</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Policy Intelligence & Budget Allocation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* AI Policy Intelligence (Traceable & Evidence-Backed) */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#F56600]" />
                  <h3 className="text-xs font-bold text-[#8C3310]">
                    {isMarathi ? 'एआय पुरावा-आधारित धोरण शिफारस' : 'Evidence-Backed Policy Insight'}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  Traceable Evidence
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#FFF9F3] border border-[#F1E5D8] space-y-1.5 text-xs">
                <div className="font-bold text-[#2C1A0E]">
                  &quot;Placement outcomes rose +24% in districts where industry-linked training exceeded program baseline.&quot;
                </div>
                <div className="text-[10.5px] text-slate-600 leading-relaxed">
                  <strong>Supporting Data:</strong> Analyzed 142,400 candidates across Pune-Chakan, Aurangabad-Shendra, and Nagpur-MIHAN industrial belts.
                </div>
                <div className="text-[10.5px] text-slate-700 pt-1 border-t border-stone-200">
                  <strong>Recommended Policy Action:</strong> Expand mandatory dual-training and apprenticeship MoUs into Marathwada and Khandesh for FY 2026-27.
                </div>
              </div>
            </div>

            {/* Fiscal Budget & Resource Allocation */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-[#8C3310] mb-2">
                  {isMarathi ? 'राज्य अर्थसंकल्प व निधी वापर' : 'Fiscal Utilization & Outcome Efficiency'}
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-stone-50 border border-stone-200">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Total State Skill Budget</span>
                      <strong className="text-sm text-slate-900">₹450.00 Cr</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Utilized To-Date</span>
                      <strong className="text-sm text-emerald-700">₹382.40 Cr (85.0%)</strong>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] text-[10.5px] text-slate-600">
                    Average cost per verified placement: <strong>₹14,200</strong>, ranking lowest in Western India while maintaining Tier-1 wage growth.
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectTab?.('simulator')}
                className="w-full mt-2 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00] flex items-center justify-center gap-1 cursor-pointer"
              >
                <Sliders size={13} />
                <span>Launch &quot;What-If&quot; Scenario Simulator</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Programs */}
      {currentTab === 'programs' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'महाराष्ट्र राज्य प्रमुख योजना सखोल आढावा' : 'Detailed Flagship Schemes Performance Audit'}
          </h2>
          <div className="space-y-3">
            {programs.map((p) => (
              <div key={p.name} className="p-3 rounded-xl border border-stone-200 bg-white space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-sm">{p.name}</h3>
                  <span className="px-2.5 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800">{p.placement} Placed</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-600">
                  <div>Trainees Target: <strong>{p.target}</strong></div>
                  <div>Enrolled Actual: <strong>{p.actual}</strong></div>
                  <div>Certified Rate: <strong>{p.completion}</strong></div>
                  <div>Budget Spent: <strong>{p.budget} ({p.utilization})</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SubTab: Policy Scenarios Simulator */}
      {currentTab === 'simulator' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
                {isMarathi ? 'धोरण परिस्थिती सिम्युलेटर ("What-If" Analysis)' : 'Interactive Policy Scenario Simulator ("What-If" Forecasting)'}
              </h2>
              <p className="text-xs text-slate-500">
                Model the employment impact of adjusting regional training capacity and industry partnership mandates.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-stone-100 px-2.5 py-1 rounded-full">
              Predictive Macro Model v3.2
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Controls */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] space-y-4">
              <span className="text-xs font-bold text-slate-900 block">Scenario Parameters:</span>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Increase Technical Training Capacity in Marathwada & Vidarbha:</span>
                  <span className="text-[#F56600]">+{capacityDelta}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={capacityDelta}
                  onChange={(e) => setCapacityDelta(Number(e.target.value))}
                  className="w-full accent-[#F56600]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Expand Industry Apprenticeship MoUs:</span>
                  <span className="text-[#F56600]">+{partnerDelta}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={partnerDelta}
                  onChange={(e) => setPartnerDelta(Number(e.target.value))}
                  className="w-full accent-[#F56600]"
                />
              </div>
            </div>

            {/* Projected Outputs */}
            <div className="p-4 rounded-xl bg-white border border-[#E8D4C2] space-y-3">
              <span className="text-xs font-bold text-[#8C3310] block">Forecasted Policy Impact:</span>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8]">
                  <span className="text-[10px] text-slate-500 block">Beneficiaries</span>
                  <strong className="text-base text-slate-900 block">{simulatedBeneficiaries.toLocaleString()}</strong>
                  <span className="text-[9.5px] text-emerald-700 font-bold">+{capacityDelta}% Growth</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8]">
                  <span className="text-[10px] text-slate-500 block">Placement Rise</span>
                  <strong className="text-base text-emerald-700 block">+{simulatedPlacementIncrease}%</strong>
                  <span className="text-[9.5px] text-slate-500">EPFO-linked</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8]">
                  <span className="text-[10px] text-slate-500 block">Est. Budget</span>
                  <strong className="text-base text-[#F56600] block">₹{simulatedBudget} Cr</strong>
                  <span className="text-[9.5px] text-slate-500">Feasible</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                💡 <strong>Policy Projection:</strong> Expanding apprenticeships by {partnerDelta}% offsets training dropout by 4.2% across rural talukas with zero deadweight fiscal loss.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: AI Intelligence */}
      {currentTab === 'intelligence' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'मंत्रालय एआय पुरावा-आधारित धोरण विश्लेषक' : 'AI-Assisted Macroeconomic Labor Policy Intelligence'}
          </h2>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] text-xs text-slate-700 leading-relaxed space-y-2">
            <p>
              MahaPravah labor forecasting algorithms track job posting volumes across MIDC portals, Naukri, LinkedIn, and state employment exchanges. Regional wage analytics prove that multi-disciplinary skill programs in Konkan and Western Maharashtra yield a 3.4x return on public investment within 18 months of graduate deployment.
            </p>
          </div>
        </div>
      )}

      {/* SubTab: Budget */}
      {currentTab === 'budget' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'विभागनिहाय अर्थसंकल्प वाटप व खर्च' : 'Division-Wise Skill Budget Allocation & Expenditure'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            {['Pune Division (₹145 Cr)', 'Konkan & Mumbai (₹120 Cr)', 'Vidarbha Cluster (₹75 Cr)', 'Marathwada Cluster (₹60 Cr)', 'Khandesh & Nashik (₹50 Cr)'].map((b) => (
              <div key={b} className="p-3 rounded-xl border border-stone-200 bg-white">
                <span className="font-bold text-slate-900 block">{b}</span>
                <span className="text-[10px] text-emerald-700 font-semibold">88.4% Average Utilization</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
