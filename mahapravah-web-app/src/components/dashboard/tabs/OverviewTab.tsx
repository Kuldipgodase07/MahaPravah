import DashboardControlsBar from '../DashboardControlsBar';
import DashboardMetricsGrid from '../DashboardMetricsGrid';
import MaharashtraDistrictMap from '../MaharashtraDistrictMap';
import EmploymentFunnel from '../EmploymentFunnel';
import TopSectorsCard from '../TopSectorsCard';
import SkillGapTable from '../SkillGapTable';
import AlertsInterventionsCard from '../AlertsInterventionsCard';
import RecommendedActionsCard from '../RecommendedActionsCard';

export default function OverviewTab() {
  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-sans text-slate-800 pb-6 pr-1 bg-transparent">
      {/* Header Controls Bar: Greeting, Region/FY Selectors */}
      <DashboardControlsBar />

      {/* Row 1: 6 Top KPI Summary Cards */}
      <DashboardMetricsGrid />

      {/* Row 2: Core Interactive Analytics Grid (3 Equal Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shrink-0">
        {/* Col 1: Maharashtra District Overview Map */}
        <MaharashtraDistrictMap />

        {/* Col 2: Skill to Employment Funnel */}
        <EmploymentFunnel />

        {/* Col 3: Top Sectors by Employment */}
        <TopSectorsCard />
      </div>

      {/* Row 3: Actionable Intelligence & Interventions (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shrink-0">
        {/* Card 1: Skill Gap Insights Table */}
        <SkillGapTable />

        {/* Card 2: Recent Alerts & Interventions */}
        <AlertsInterventionsCard />

        {/* Card 3: Recommended Actions */}
        <RecommendedActionsCard />
      </div>

      {/* Footer Bar */}
      <footer className="pt-3 border-t border-[#DFC7B2]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 mt-2 shrink-0">
        <div>
          © 2025 MahaPravah. Government of Maharashtra. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          <span className="text-slate-300">|</span>
          <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Use</a>
          <span className="text-slate-300">|</span>
          <a href="#help" className="hover:text-slate-800 transition-colors">Help & Support</a>
          <span className="text-slate-300">|</span>
          <a href="#contact" className="hover:text-slate-800 transition-colors">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
