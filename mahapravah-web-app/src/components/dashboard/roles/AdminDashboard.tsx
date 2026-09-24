import { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Building2,
  Activity,
  Download,
  Plus,
  Database,
  Globe,
} from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function AdminDashboard() {
  const { isMarathi } = useLanguage();
  const [selectedSubTab, setSelectedSubTab] = useState<'overview' | 'users' | 'orgs' | 'health' | 'audit'>('overview');
  const [userSearch, setUserSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);

  const kpis = [
    {
      id: 'users',
      label: isMarathi ? 'एकूण वापरकर्ते' : 'Total Registered Users',
      value: '1.42 M',
      trend: '+24k this month',
      subtext: isMarathi ? '३८४k सक्रिय वापरकर्ते' : '384k Monthly Active',
      icon: Users,
      iconBg: 'bg-[#FFF0E6]',
      iconColor: 'text-[#D95B00]',
    },
    {
      id: 'providers',
      label: isMarathi ? 'प्रशिक्षण संस्था' : 'Training Providers',
      value: '412',
      trend: '18 Pending Review',
      subtext: isMarathi ? 'मान्यताप्राप्त केंद्रे' : 'State Empaneled',
      icon: Building2,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'employers',
      label: isMarathi ? 'नोंदणीकृत उद्योग' : 'Active Employers',
      value: '1,850',
      trend: '+45 this week',
      subtext: isMarathi ? 'कंपन्या व कॉर्पोरेट्स' : 'Verified Companies',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'colleges',
      label: isMarathi ? 'महाविद्यालये' : 'Colleges & Institutes',
      value: '540',
      trend: '100% Onboarded',
      subtext: isMarathi ? 'अभियांत्रिकी व तंत्रनिकेतन' : 'Engg & Polytechnics',
      icon: Globe,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'apis',
      label: isMarathi ? 'सरकारी एकत्रीकरण (APIs)' : 'API Integrations',
      value: '48',
      trend: '100% Operational',
      subtext: isMarathi ? 'डिजीलॉकर, आधार, ईपीएफओ' : 'DigiLocker, UIDAI, EPFO',
      icon: Database,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'health',
      label: isMarathi ? 'प्रणाली आरोग्य' : 'System Health Score',
      value: '99.98%',
      trend: '24ms Latency',
      subtext: isMarathi ? 'शून्य अनपेक्षित डाऊनटाइम' : 'Zero Unplanned Downtime',
      icon: Activity,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
  ];

  const userRegistry = [
    {
      id: 'USR-9021',
      name: 'Dr. A. Deshmukh',
      role: 'State Skill Officer',
      org: 'Govt. of Maharashtra',
      status: 'Active',
      lastLogin: '10 mins ago',
      ip: '10.24.8.12 (Govt WAN)',
    },
    {
      id: 'USR-9022',
      name: 'Sneha Patil, IAS',
      role: 'District Skill Officer',
      org: 'Pune Collectorate',
      status: 'Active',
      lastLogin: '1 hour ago',
      ip: '10.28.4.15',
    },
    {
      id: 'USR-9023',
      name: 'Rajesh Kadam',
      role: 'Training Provider',
      org: 'MahaKaushalya Skills',
      status: 'Active',
      lastLogin: '2 hours ago',
      ip: '103.21.14.88',
    },
    {
      id: 'USR-9024',
      name: 'Vikram Joshi',
      role: 'Employer / Industry',
      org: 'Tata AutoComp Ltd.',
      status: 'Active',
      lastLogin: '3 hours ago',
      ip: '115.112.42.10',
    },
    {
      id: 'USR-9025',
      name: 'Prof. Suresh Gaikwad',
      role: 'Institution / College',
      org: 'COEP Tech University',
      status: 'Active',
      lastLogin: 'Yesterday',
      ip: '14.139.122.5',
    },
    {
      id: 'USR-9026',
      name: 'Ramesh Tawde',
      role: 'Training Provider',
      org: 'Vidarbha IT Skills Hub',
      status: 'Pending Verification',
      lastLogin: 'Never',
      ip: '103.45.12.8',
    },
  ];

  const auditEvents = [
    {
      time: '12 Sep 2025, 10:28 AM',
      actor: 'MahaPravah Admin',
      action: 'Approved Training Center ID #TP-2024-884 for Advanced EV Certification',
      severity: 'Normal',
      ip: '10.12.0.4',
    },
    {
      time: '12 Sep 2025, 09:44 AM',
      actor: 'System Automation',
      action: 'Periodic DigiLocker Aadhaar e-KYC bulk credential sync completed (24,800 records)',
      severity: 'Info',
      ip: 'Internal Cron',
    },
    {
      time: '12 Sep 2025, 08:15 AM',
      actor: 'District Officer - Pune',
      action: 'Created New Skill Intervention: Chakan EV Upskilling Cluster (Sanction ₹1.2 Cr)',
      severity: 'Important',
      ip: '10.28.4.15',
    },
    {
      time: '11 Sep 2025, 18:30 PM',
      actor: 'Security Daemon',
      action: 'Blocked 4 unauthorized API attempts from unlisted IP range (Geo-fenced)',
      severity: 'Warning',
      ip: '194.26.29.12',
    },
  ];

  const filteredUsers = userRegistry.filter((u) => {
    const matches = u.name.toLowerCase().includes(userSearch.toLowerCase()) || u.org.toLowerCase().includes(userSearch.toLowerCase());
    if (roleFilter === 'all') return matches;
    return matches && u.role.toLowerCase().includes(roleFilter.toLowerCase());
  });

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-0 select-none pt-2">
      {/* ── Top Header Controls Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            {isMarathi ? 'प्लॅटफॉर्म प्रशासक नियंत्रण केंद्र — महाप्रवाह' : 'Platform Administration & System Ecosystem Governance'}
          </h1>
          <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
            {isMarathi
              ? 'महाआयटी (MahaIT) व महाराष्ट्र राज्य कौशल्य विकास सोसायटी • सुरक्षित एंटरप्राइज प्रशासन'
              : 'MahaIT & Maharashtra State Skill Innovation Society • Unified RBAC, Data Integrity & API Gateways'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowCreateUserModal(true)}
            className="flex items-center gap-1.5 h-[28px] px-3 bg-[#F56600] text-white rounded-lg text-xs font-bold shadow-2xs hover:bg-[#D94E00] cursor-pointer"
          >
            <Plus size={13} />
            <span>{isMarathi ? 'नवीन वापरकर्ता / संस्था जोडा' : 'Add User / Organization'}</span>
          </button>
        </div>
      </div>

      {/* ── Sub-navigation Pills ── */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0">
        {[
          { id: 'overview', en: 'Platform Overview', mr: 'प्रणाली आढावा' },
          { id: 'users', en: 'User Management & RBAC', mr: 'वापरकर्ता व भूमिका व्यवस्थापन' },
          { id: 'orgs', en: 'Organization Approvals', mr: 'संस्था पडताळणी' },
          { id: 'health', en: 'Service Health & APIs', mr: 'सेवा आरोग्य व एपीआय' },
          { id: 'audit', en: 'Immutable Audit Log', mr: 'ऑडिट लॉग' },
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
          {/* Left Column: User Management Table Snapshot & Data Quality (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {/* User Registry Preview */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'सक्रिय वापरकर्ते व आरबीएसी नियंत्रण' : 'Active Personnel & Role Access Registry'}
                </h3>
                <button
                  onClick={() => setSelectedSubTab('users')}
                  className="text-[10.5px] font-bold text-[#F56600] hover:underline"
                >
                  Manage All →
                </button>
              </div>

              <div className="space-y-1.5">
                {userRegistry.slice(0, 4).map((u) => (
                  <div key={u.id} className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-900">{u.name}</strong>
                        <span className="text-[9.5px] px-1.5 py-0.2 rounded bg-white text-slate-600 border border-stone-200">
                          {u.role}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">{u.org} • Last Login: {u.lastLogin}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {u.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Quality & Integrity Monitor */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'डेटा गुणवत्ता व अखंडता तपासणी' : 'Data Quality, Deduplication & Aadhaar Hygiene'}
                </h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  99.8% Hygiene Score
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] text-center">
                  <span className="text-[10px] text-slate-500 block">Missing Records</span>
                  <strong className="text-emerald-700 text-sm block">0.02%</strong>
                  <span className="text-[8.5px] text-slate-400">Under Tolerance</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] text-center">
                  <span className="text-[10px] text-slate-500 block">Duplicates Resolved</span>
                  <strong className="text-slate-900 text-sm block">1,410</strong>
                  <span className="text-[8.5px] text-slate-400">Automated Merge</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] text-center">
                  <span className="text-[10px] text-slate-500 block">Invalid Aadhaar</span>
                  <strong className="text-emerald-700 text-sm block">0</strong>
                  <span className="text-[8.5px] text-slate-400">UIDAI Verified</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#F1E5D8] text-center">
                  <span className="text-[10px] text-slate-500 block">Data Freshness</span>
                  <strong className="text-slate-900 text-sm block">&lt; 3 mins</strong>
                  <span className="text-[8.5px] text-slate-400">Real-time sync</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Service Health & Security Audit Stream (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* Live Infrastructure Health */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#8C3310]">
                  {isMarathi ? 'थेट सेवा स्थिती व विलंबता (Latency)' : 'Microservice Health & Latency'}
                </h3>
                <span className="text-[10px] font-bold text-emerald-700">All Operational</span>
              </div>

              <div className="space-y-1 text-xs">
                {[
                  { name: 'MahaPravah Core API Gateway', latency: '18ms', status: 'Operational' },
                  { name: 'AI Skill Recommendation Engine', latency: '42ms', status: 'Operational' },
                  { name: 'DigiLocker / Aadhaar Auth Bridge', latency: '110ms', status: 'Operational' },
                  { name: 'PostgreSQL Enterprise Cluster', latency: '6ms', status: 'Operational' },
                  { name: 'EPFO & Tax Verification Service', latency: '85ms', status: 'Operational' },
                ].map((s) => (
                  <div key={s.name} className="flex justify-between items-center p-1.5 rounded hover:bg-stone-50">
                    <span className="text-slate-800 text-[11px] font-medium">{s.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-400">{s.latency}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Security Audit Log Stream */}
            <div className="bg-white rounded-xl p-3 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-[#8C3310] mb-2">
                  {isMarathi ? 'अलिकडील सुरक्षा व प्रशासकीय नोंदी' : 'Recent Administrative Audit Trail'}
                </h3>
                <div className="space-y-1.5 text-xs">
                  {auditEvents.slice(0, 3).map((e, idx) => (
                    <div key={idx} className="p-2 rounded-lg border border-stone-200 bg-white">
                      <div className="flex justify-between font-bold text-slate-800 text-[10.5px]">
                        <span>{e.actor}</span>
                        <span className="text-slate-400 font-normal text-[9.5px]">{e.time}</span>
                      </div>
                      <p className="text-[10px] text-slate-600 mt-0.5">{e.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedSubTab('audit')}
                className="w-full mt-2 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#DFCEBD] text-slate-800 text-xs font-bold hover:bg-stone-100 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Full Immutable Audit Log →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Users */}
      {selectedSubTab === 'users' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 flex flex-col min-h-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'वापरकर्ता व भूमिका व्यवस्थापन (RBAC Master)' : 'Enterprise User & Role-Based Access Control (RBAC)'}
            </h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search user / org..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                className="pl-3 pr-2 py-1 text-xs border border-stone-300 rounded-lg w-40"
              />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-2 py-1 text-xs border border-stone-300 rounded-lg bg-white text-slate-700"
              >
                <option value="all">All Roles</option>
                <option value="officer">Officer</option>
                <option value="provider">Provider</option>
                <option value="employer">Employer</option>
                <option value="college">College</option>
              </select>
              <button
                onClick={() => setShowCreateUserModal(true)}
                className="px-3 py-1 bg-[#F56600] text-white text-xs font-bold rounded-lg hover:bg-[#D94E00] flex items-center gap-1 cursor-pointer"
              >
                <Plus size={12} />
                <span>Create User</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto min-h-0">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF7F2] border-b border-[#E8D4C2] text-slate-600 font-bold">
                <tr>
                  <th className="p-2">Name & ID</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Organization</th>
                  <th className="p-2">Last Login</th>
                  <th className="p-2">Status</th>
                  <th className="p-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-stone-50">
                    <td className="p-2 font-bold text-slate-900">
                      <div>{u.name}</div>
                      <span className="text-[10px] text-slate-400 font-normal">{u.id}</span>
                    </td>
                    <td className="p-2 font-semibold text-slate-700">{u.role}</td>
                    <td className="p-2 text-slate-600">{u.org}</td>
                    <td className="p-2 text-slate-500">{u.lastLogin}</td>
                    <td className="p-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {u.status}
                      </span>
                    </td>
                    <td className="p-2 text-right">
                      <button
                        onClick={() => alert(`Editing permissions for ${u.name}`)}
                        className="text-[#F56600] font-bold hover:underline cursor-pointer"
                      >
                        Edit Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SubTab: Orgs */}
      {selectedSubTab === 'orgs' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'संस्था पडताळणी रांग (Verification Queue)' : 'Institutional Accreditation & Corporate Onboarding Queue'}
          </h2>
          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#F1E5D8] text-xs space-y-2 text-slate-700">
            18 Training Providers and 34 Corporate Employers currently in pending state verification. Automated GST and MCA incorporation checks passed.
          </div>
        </div>
      )}

      {/* SubTab: Health */}
      {selectedSubTab === 'health' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
            {isMarathi ? 'तपशीलवार प्रणाली व एपीआय कामगिरी' : 'Detailed Microservice Diagnostics & Rate Limiting'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 space-y-1">
              <span className="font-bold text-slate-900 block">Database Cluster Health</span>
              <p className="text-[11px] text-slate-500">PostgreSQL Primary + 3 Read Replicas • 12% Avg CPU</p>
              <span className="text-emerald-700 font-bold block">100% Replication Synced</span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 space-y-1">
              <span className="font-bold text-slate-900 block">AI Inference Gateway</span>
              <p className="text-[11px] text-slate-500">TensorFlow Serving • GPU Acceleration Cluster</p>
              <span className="text-emerald-700 font-bold block">42ms Median Response Time</span>
            </div>
          </div>
        </div>
      )}

      {/* SubTab: Audit */}
      {selectedSubTab === 'audit' && (
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E8D4C2] shadow-2xs flex-1 overflow-y-auto space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-sm sm:text-base font-bold text-[#8C3310]">
              {isMarathi ? 'अपरिवर्तनीय सुरक्षा व ऑडिट नोंदी' : 'Cryptographically Verifiable Government Audit Registry'}
            </h2>
            <button
              onClick={() => alert('Exporting full regulatory audit trail...')}
              className="px-3 py-1 bg-[#FAF7F2] border border-[#DFCEBD] rounded-lg text-xs font-bold hover:bg-stone-100 flex items-center gap-1 cursor-pointer"
            >
              <Download size={12} />
              <span>Export Audit Ledger</span>
            </button>
          </div>

          <div className="space-y-2">
            {auditEvents.map((e, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-stone-200 bg-white text-xs space-y-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{e.actor}</span>
                  <span className="text-slate-400 font-normal">{e.time}</span>
                </div>
                <p className="text-slate-700">{e.action}</p>
                <div className="flex justify-between text-[10px] text-slate-400 pt-1 border-t border-stone-100">
                  <span>IP: {e.ip}</span>
                  <span className="font-semibold text-emerald-700">Integrity Signed ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create User Modal */}
      {showCreateUserModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 border border-[#E8D4C2] shadow-2xl space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <h3 className="text-sm font-bold text-[#8C3310]">Provision New Platform User</h3>
              <button onClick={() => setShowCreateUserModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
                <input type="text" placeholder="e.g. Ramesh Kadam" className="w-full p-2 border border-stone-300 rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Assigned Role</label>
                  <select className="w-full p-2 border border-stone-300 rounded-lg">
                    <option>District Skill Officer</option>
                    <option>Training Provider</option>
                    <option>Employer / Industry</option>
                    <option>Institution / College</option>
                    <option>Policy Officer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Official Organization</label>
                  <input type="text" placeholder="e.g. Govt ITI / Company" className="w-full p-2 border border-stone-300 rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Govt Email / Mobile ID</label>
                <input type="email" placeholder="officer@maharashtra.gov.in" className="w-full p-2 border border-stone-300 rounded-lg" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-stone-200">
              <button onClick={() => setShowCreateUserModal(false)} className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold">Cancel</button>
              <button
                onClick={() => {
                  alert('User provisioned with cryptographic credentials!');
                  setShowCreateUserModal(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#F56600] text-white text-xs font-bold hover:bg-[#D94E00]"
              >
                Provision User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
