import { useState } from 'react';
import DashboardTopHeader from '../components/dashboard/DashboardTopHeader';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import OverviewTab from '../components/dashboard/tabs/OverviewTab';
import ProgrammeOverviewTab from '../components/dashboard/tabs/ProgrammeOverviewTab';
import BeneficiariesTab from '../components/dashboard/tabs/BeneficiariesTab';
import TrainingProvidersTab from '../components/dashboard/tabs/TrainingProvidersTab';
import EmploymentOutcomesTab from '../components/dashboard/tabs/EmploymentOutcomesTab';
import DistrictIntelligenceTab from '../components/dashboard/tabs/DistrictIntelligenceTab';
import SkillGapAnalysisTab from '../components/dashboard/tabs/SkillGapAnalysisTab';
import ImpactAnalyticsTab from '../components/dashboard/tabs/ImpactAnalyticsTab';
import AlertsInterventionsTab from '../components/dashboard/tabs/AlertsInterventionsTab';
import ReportsDownloadsTab from '../components/dashboard/tabs/ReportsDownloadsTab';
import DataIntegrationsTab from '../components/dashboard/tabs/DataIntegrationsTab';
import AdministrationTab from '../components/dashboard/tabs/AdministrationTab';

interface OfficerDashboardPageProps {
  onNavigateHome?: () => void;
}

export default function OfficerDashboardPage({ onNavigateHome }: OfficerDashboardPageProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('data');

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'programme':
        return <ProgrammeOverviewTab />;
      case 'beneficiaries':
        return <BeneficiariesTab />;
      case 'providers':
        return <TrainingProvidersTab />;
      case 'outcomes':
        return <EmploymentOutcomesTab />;
      case 'district':
        return <DistrictIntelligenceTab />;
      case 'skill-gap':
        return <SkillGapAnalysisTab />;
      case 'impact':
        return <ImpactAnalyticsTab />;
      case 'alerts':
        return <AlertsInterventionsTab />;
      case 'reports':
        return <ReportsDownloadsTab />;
      case 'data':
        return <DataIntegrationsTab />;
      case 'admin':
        return <AdministrationTab />;
      case 'dashboard':
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="h-screen w-full text-[#241309] relative flex flex-row font-sans overflow-hidden bg-[#FAF7F2]">
      
      {/* Left Column: Full-Height Unified Sidebar */}
      <DashboardSidebar 
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        onNavigateHome={onNavigateHome}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Right Column: Top Header + Main Content Canvas */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header Bar with MahaPravah Brand & Background Artwork */}
        <DashboardTopHeader onNavigateHome={onNavigateHome} />

        {/* Main Content Dashboard Area with invisible scroll */}
        <main 
          className="flex-1 px-3 sm:px-4 lg:px-5 py-2.5 flex flex-col min-h-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-w-0 transition-all duration-300"
          style={{
            backgroundImage: "url('/main-canvas-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FAF7F2',
          }}
        >
          {renderActiveTabContent()}
        </main>
      </div>

    </div>
  );
}
