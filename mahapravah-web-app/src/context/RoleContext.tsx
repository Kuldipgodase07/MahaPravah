import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type UserRole =
  | 'student'
  | 'provider'
  | 'employer'
  | 'district'
  | 'college'
  | 'policy'
  | 'officer'
  | 'admin';

export interface RoleMetadata {
  id: UserRole;
  labelEn: string;
  labelMr: string;
  userTitleEn: string;
  userTitleMr: string;
  userNameEn: string;
  userNameMr: string;
  organizationEn: string;
  organizationMr: string;
  avatar: string;
  hash: string;
  badgeBg: string;
  badgeText: string;
}

export const ROLE_DEFINITIONS: Record<UserRole, RoleMetadata> = {
  officer: {
    id: 'officer',
    labelEn: 'State Skill Officer',
    labelMr: 'राज्य कौशल्य अधिकारी',
    userTitleEn: 'State Skill Officer',
    userTitleMr: 'राज्य कौशल्य अधिकारी',
    userNameEn: 'Dr. A. Deshmukh',
    userNameMr: 'डॉ. ए. देशमुख',
    organizationEn: 'Govt. of Maharashtra',
    organizationMr: 'महाराष्ट्र शासन',
    avatar: '/dr-deshmukh-avatar.png',
    hash: '#officer-dashboard',
    badgeBg: 'bg-[#FFE0C7]',
    badgeText: 'text-[#8C3310]',
  },
  student: {
    id: 'student',
    labelEn: 'Student / Job Seeker',
    labelMr: 'विद्यार्थी / नोकरी इच्छुक',
    userTitleEn: 'Beneficiary & Candidate',
    userTitleMr: 'लाभार्थी व उमेदवार',
    userNameEn: 'Priya Sharma',
    userNameMr: 'प्रिया शर्मा',
    organizationEn: 'Pune District',
    organizationMr: 'पुणे जिल्हा',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    hash: '#student-dashboard',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
  },
  provider: {
    id: 'provider',
    labelEn: 'Training Provider',
    labelMr: 'प्रशिक्षण संस्था',
    userTitleEn: 'Director of Training Operations',
    userTitleMr: 'प्रशिक्षण संचालन संचालक',
    userNameEn: 'Rajesh Kadam',
    userNameMr: 'राजेश कदम',
    organizationEn: 'MahaKaushalya Skills Academy',
    organizationMr: 'महाकौशल्य स्किल्स अकादमी',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    hash: '#provider-dashboard',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
  },
  employer: {
    id: 'employer',
    labelEn: 'Employer / Industry',
    labelMr: 'नियोक्ता / उद्योग',
    userTitleEn: 'Head of Talent Acquisition',
    userTitleMr: 'भरती विभाग प्रमुख',
    userNameEn: 'Vikram Joshi',
    userNameMr: 'विक्रम जोशी',
    organizationEn: 'Tata AutoComp Systems Ltd.',
    organizationMr: 'टाटा ऑटोकॉम्प सिस्टीम्स लि.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    hash: '#employer-dashboard',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
  },
  district: {
    id: 'district',
    labelEn: 'District Skill Officer',
    labelMr: 'जिल्हा कौशल्य अधिकारी',
    userTitleEn: 'District Skill Development Officer',
    userTitleMr: 'जिल्हा कौशल्य विकास अधिकारी',
    userNameEn: 'Sneha Patil, IAS',
    userNameMr: 'स्नेहा पाटील, भा.प्र.से.',
    organizationEn: 'Pune District Administration',
    organizationMr: 'पुणे जिल्हा प्रशासन',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    hash: '#district-dashboard',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-900',
  },
  college: {
    id: 'college',
    labelEn: 'Institution / College',
    labelMr: 'संस्था / महाविद्यालय',
    userTitleEn: 'Dean - Training & Placement',
    userTitleMr: 'डीन - प्रशिक्षण व प्लेसमेंट',
    userNameEn: 'Prof. Suresh Gaikwad',
    userNameMr: 'प्रा. सुरेश गायकवाड',
    organizationEn: 'Govt. College of Engineering, Pune',
    organizationMr: 'शासकीय अभियांत्रिकी महाविद्यालय, पुणे',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    hash: '#college-dashboard',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
  },
  policy: {
    id: 'policy',
    labelEn: 'Policy Officer / Dept',
    labelMr: 'धोरण अधिकारी / विभाग',
    userTitleEn: 'Principal Secretary (Skills)',
    userTitleMr: 'प्रधान सचिव (कौशल्य विकास)',
    userNameEn: 'Anand Shinde, IAS',
    userNameMr: 'आनंद शिंदे, भा.प्र.से.',
    organizationEn: 'Dept of Skill Development, GoM',
    organizationMr: 'कौशल्य विकास विभाग, म.शा.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    hash: '#policy-dashboard',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-900',
  },
  admin: {
    id: 'admin',
    labelEn: 'Platform Administrator',
    labelMr: 'प्लॅटफॉर्म प्रशासक',
    userTitleEn: 'Chief Enterprise Architect',
    userTitleMr: 'मुख्य एंटरप्राइज आर्किटेक्ट',
    userNameEn: 'MahaPravah Admin',
    userNameMr: 'महाप्रवाह प्रशासक',
    organizationEn: 'MahaIT / MSSDS State Cell',
    organizationMr: 'महाआयटी / एमएसएसडीएस सेल',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    hash: '#admin-dashboard',
    badgeBg: 'bg-stone-200',
    badgeText: 'text-stone-800',
  },
};

interface RoleContextType {
  currentRole: UserRole;
  setRole: (role: UserRole) => void;
  currentRoleMeta: RoleMetadata;
  allRoles: RoleMetadata[];
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRoleState] = useState<UserRole>(() => {
    try {
      const hash = window.location.hash;
      const matchingRole = (Object.keys(ROLE_DEFINITIONS) as UserRole[]).find(
        (key) => ROLE_DEFINITIONS[key].hash === hash
      );
      if (matchingRole) return matchingRole;
      if (hash === '#dashboard' || hash === '#officer-dashboard') return 'officer';

      const saved = localStorage.getItem('mahapravah_role') as UserRole;
      if (saved && ROLE_DEFINITIONS[saved]) return saved;
    } catch {
      // ignore
    }
    return 'officer';
  });

  const setRole = (role: UserRole) => {
    setCurrentRoleState(role);
    try {
      localStorage.setItem('mahapravah_role', role);
    } catch {
      // ignore
    }
    window.location.hash = ROLE_DEFINITIONS[role].hash;
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const matched = (Object.keys(ROLE_DEFINITIONS) as UserRole[]).find(
        (key) => ROLE_DEFINITIONS[key].hash === hash
      );
      if (matched && matched !== currentRole) {
        setCurrentRoleState(matched);
      } else if ((hash === '#dashboard' || hash === '#officer-dashboard') && currentRole !== 'officer') {
        setCurrentRoleState('officer');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentRole]);

  const value: RoleContextType = {
    currentRole,
    setRole,
    currentRoleMeta: ROLE_DEFINITIONS[currentRole],
    allRoles: Object.values(ROLE_DEFINITIONS),
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
