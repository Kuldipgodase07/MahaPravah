import { useState, useEffect } from 'react';
import {
  Home,
  Sparkles,
  BookOpen,
  Briefcase,
  CheckCircle2,
  User,
  Users,
  Award,
  AlertTriangle,
  Building2,
  MapPin,
  TrendingUp,
  BarChart3,
  Sliders,
  Landmark,
  Coins,
  ShieldCheck,
  Activity,
  Layers,
  Search,
  Compass,
  GraduationCap,
  Bell,
  Settings,
} from 'lucide-react';
import { useRole } from '../context/RoleContext';
import DashboardShell from '../components/dashboard/DashboardShell';
import type { NavItemConfig } from '../components/dashboard/DashboardShell';
import OfficerDashboardPage from './OfficerDashboardPage';
import StudentDashboard from '../components/dashboard/roles/StudentDashboard';
import TrainingProviderDashboard from '../components/dashboard/roles/TrainingProviderDashboard';
import EmployerDashboard from '../components/dashboard/roles/EmployerDashboard';
import DistrictSkillOfficerDashboard from '../components/dashboard/roles/DistrictSkillOfficerDashboard';
import InstitutionDashboard from '../components/dashboard/roles/InstitutionDashboard';
import PolicyOfficerDashboard from '../components/dashboard/roles/PolicyOfficerDashboard';
import AdminDashboard from '../components/dashboard/roles/AdminDashboard';

interface RoleDashboardDispatcherProps {
  onNavigateHome?: () => void;
}

export default function RoleDashboardDispatcher({ onNavigateHome }: RoleDashboardDispatcherProps) {
  const { currentRole } = useRole();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Reset tab to dashboard overview when switching persona/role
  useEffect(() => {
    setActiveTab('dashboard');
  }, [currentRole]);

  // If State Skill Officer is selected, render the exact untouched existing State Skill Officer Dashboard
  if (currentRole === 'officer') {
    return <OfficerDashboardPage onNavigateHome={onNavigateHome} />;
  }

  // Define role navigation items conforming to the master sidebar structure
  const getNavItems = (): NavItemConfig[] => {
    switch (currentRole) {
      case 'student':
        return [
          { id: 'dashboard', labelEn: 'Dashboard', labelMr: 'डॅशबोर्ड', icon: Home },
          { id: 'profile', labelEn: 'My Profile', labelMr: 'माझे प्रोफाइल', icon: User },
          { id: 'search-courses', labelEn: 'Search Courses', labelMr: 'अभ्यासक्रम शोधा', icon: Search },
          { id: 'my-courses', labelEn: 'My Courses', labelMr: 'माझे अभ्यासक्रम', icon: BookOpen },
          { id: 'track-progress', labelEn: 'Track Progress', labelMr: 'प्रगतीचा मागोवा', icon: BarChart3 },
          { id: 'skill-assessment', labelEn: 'Skill Assessment', labelMr: 'कौशल्य मूल्यांकन', icon: TrendingUp },
          { id: 'jobs', labelEn: 'Job Opportunities', labelMr: 'नोकरी संधी', icon: Briefcase },
          { id: 'scholarships', labelEn: 'Scholarships & Schemes', labelMr: 'शिष्यवृत्ती व योजना', icon: GraduationCap },
          { id: 'career-advice', labelEn: 'Guidance & Career Advice', labelMr: 'मार्गदर्शन व करिअर सल्ला', icon: Compass },
          { id: 'notifications', labelEn: 'Notifications & Updates', labelMr: 'सूचना व अपडेट्स', icon: Bell },
          { id: 'certificates', labelEn: 'Certificates', labelMr: 'प्रमाणपत्रे', icon: Award },
          { id: 'settings', labelEn: 'Settings', labelMr: 'सेटिंग्ज', icon: Settings },
        ];
      case 'provider':
        return [
          { id: 'dashboard', labelEn: 'Operations Overview', labelMr: 'कार्यपद्धती आढावा', icon: Home },
          { id: 'courses', labelEn: 'Course Management', labelMr: 'अभ्यासक्रम व्यवस्थापन', icon: BookOpen },
          { id: 'learners', labelEn: 'Learner Management', labelMr: 'प्रशिक्षणार्थी व्यवस्थापन', icon: Users },
          { id: 'outcomes', labelEn: 'Outcome Tracking', labelMr: 'रोजगार निष्पत्ती फनेल', icon: CheckCircle2 },
          { id: 'scorecard', labelEn: 'Provider Quality Scorecard', labelMr: 'संस्था गुणवत्ता गुणपत्रिका', icon: Award },
          { id: 'alerts', labelEn: 'Operational Alerts', labelMr: 'कार्यचालन सूचना', icon: AlertTriangle },
        ];
      case 'employer':
        return [
          { id: 'dashboard', labelEn: 'Recruitment Overview', labelMr: 'भरती आढावा', icon: Home },
          { id: 'matching', labelEn: 'AI Talent Matching', labelMr: 'एआय उमेदवार जुळणी', icon: Sparkles },
          { id: 'jobs', labelEn: 'Job Management', labelMr: 'नोकरी जाहिराती', icon: Briefcase },
          { id: 'pipeline', labelEn: 'Recruitment Pipeline', labelMr: 'भरती प्रक्रिया फनेल', icon: Layers },
          { id: 'location', labelEn: 'District Talent Pool Map', labelMr: 'जिल्हानिहाय मनुष्यबळ नकाशा', icon: MapPin },
        ];
      case 'district':
        return [
          { id: 'dashboard', labelEn: 'District Intelligence', labelMr: 'जिल्हा बुद्धिमत्ता आढावा', icon: Home },
          { id: 'map', labelEn: 'Division & Taluka Drilldown', labelMr: 'विभाग व तालुका विश्लेषण', icon: MapPin },
          { id: 'comparison', labelEn: 'Performance Comparisons', labelMr: 'तुलनात्मक कामगिरी', icon: TrendingUp },
          { id: 'skillgap', labelEn: 'Skill Gap Analysis', labelMr: 'कौशल्य तूट विश्लेषण', icon: BarChart3 },
          { id: 'interventions', labelEn: 'Interventions Management', labelMr: 'हस्तक्षेप व्यवस्थापन', icon: Sliders },
        ];
      case 'college':
        return [
          { id: 'dashboard', labelEn: 'Employability Overview', labelMr: 'रोजगार सज्जता आढावा', icon: Home },
          { id: 'departments', labelEn: 'Department Distribution', labelMr: 'विभागनिहाय वाटप', icon: Building2 },
          { id: 'gap', labelEn: 'Academic vs Industry Gap', labelMr: 'अभ्यासक्रम तूट विश्लेषण', icon: BarChart3 },
          { id: 'partners', labelEn: 'Industry Linkages & Drives', labelMr: 'उद्योग भागीदारी व ड्राइव्ह', icon: Award },
          { id: 'reports', labelEn: 'Accreditation Reports', labelMr: 'मान्यता व अहवाल', icon: CheckCircle2 },
        ];
      case 'policy':
        return [
          { id: 'dashboard', labelEn: 'Executive State Overview', labelMr: 'राज्यव्यापी आढावा', icon: Home },
          { id: 'programs', labelEn: 'Flagship Schemes', labelMr: 'प्रमुख योजना कामगिरी', icon: Landmark },
          { id: 'intelligence', labelEn: 'AI Policy Intelligence', labelMr: 'एआय धोरण बुद्धिमत्ता', icon: Sparkles },
          { id: 'budget', labelEn: 'Resource Allocation', labelMr: 'निधी व अर्थसंकल्प वाटप', icon: Coins },
          { id: 'simulator', labelEn: 'Policy "What-If" Simulator', labelMr: 'धोरण परिस्थिती सिम्युलेटर', icon: Sliders },
        ];
      case 'admin':
        return [
          { id: 'dashboard', labelEn: 'Platform Overview', labelMr: 'प्रणाली आढावा', icon: Home },
          { id: 'users', labelEn: 'User Management & RBAC', labelMr: 'वापरकर्ता व भूमिका व्यवस्थापन', icon: Users },
          { id: 'orgs', labelEn: 'Organization Approvals', labelMr: 'संस्था पडताळणी', icon: Building2 },
          { id: 'health', labelEn: 'Service Health & APIs', labelMr: 'सेवा आरोग्य व एपीआय', icon: Activity },
          { id: 'audit', labelEn: 'Immutable Audit Log', labelMr: 'ऑडिट लॉग', icon: ShieldCheck },
        ];
      default:
        return [
          { id: 'dashboard', labelEn: 'Dashboard Overview', labelMr: 'डॅशबोर्ड आढावा', icon: Home },
        ];
    }
  };

  const renderRoleDashboard = () => {
    switch (currentRole) {
      case 'student':
        return <StudentDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      case 'provider':
        return <TrainingProviderDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      case 'employer':
        return <EmployerDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      case 'district':
        return <DistrictSkillOfficerDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      case 'college':
        return <InstitutionDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      case 'policy':
        return <PolicyOfficerDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      case 'admin':
        return <AdminDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
      default:
        return <StudentDashboard activeTab={activeTab} onSelectTab={setActiveTab} />;
    }
  };

  return (
    <DashboardShell
      role={currentRole}
      roleNavItems={getNavItems()}
      activeTab={activeTab}
      onSelectTab={setActiveTab}
      onNavigateHome={onNavigateHome}
    >
      {renderRoleDashboard()}
    </DashboardShell>
  );
}
