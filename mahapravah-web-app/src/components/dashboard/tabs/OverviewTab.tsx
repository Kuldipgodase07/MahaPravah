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
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      {/* Header Controls Bar: Greeting, Region/FY Selectors */}
      <DashboardControlsBar />

      {/* Row 1: 6 Top KPI Summary Cards */}
      <DashboardMetricsGrid />

      {/* Row 2: Core Interactive Analytics Grid (3 Equal Columns) */}
      <div className="flex-[1.25] min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-1.5">
        {/* Col 1: Maharashtra District Overview Map */}
        <MaharashtraDistrictMap />

        {/* Col 2: Skill to Employment Funnel */}
        <EmploymentFunnel />

        {/* Col 3: Top Sectors by Employment */}
        <TopSectorsCard />
      </div>

      {/* Row 3: Actionable Intelligence & Interventions (3 Cards) */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* Card 1: Skill Gap Insights Table */}
        <SkillGapTable />

        {/* Card 2: Recent Alerts & Interventions */}
        <AlertsInterventionsCard />

        {/* Card 3: Recommended Actions */}
        <RecommendedActionsCard />
      </div>
    </div>
  );
}
