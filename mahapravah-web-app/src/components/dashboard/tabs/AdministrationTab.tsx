import { useState } from 'react';
import {
  Users,
  UserCheck,
  Building2,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Search,
  MapPin,
  Calendar,
  Plus,
  Info,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  Filter,
  Server,
  Database,
  Code2,
  HardDrive,
  UserPlus,
  Key,
  Settings
} from 'lucide-react';

export default function AdministrationTab() {
  const [selectedRoleTab, setSelectedRoleTab] = useState('All Users (2,860)');
  const [searchQuery, setSearchQuery] = useState('');

  // Top KPI Metrics Data
  const kpiMetrics = [
    {
      title: 'Total Users',
      value: '2,860',
      change: '↑ 12.4%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: Users,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Active Users',
      value: '2,410',
      change: '↑ 18.6%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: UserCheck,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Departments Onboarded',
      value: '48',
      change: '↑ 4.3%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: Building2,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Roles Configured',
      value: '18',
      change: '↑ 12.5%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: ShieldCheck,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Login Attempts (30 Days)',
      value: '42.6K',
      change: '↑ 16.8%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: FileText,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Security Alerts',
      value: '12',
      change: '↓ 25.0%',
      changeType: 'down',
      subtitle: 'vs last month',
      icon: AlertTriangle,
      iconBg: 'bg-red-100 text-red-600'
    }
  ];

  // User Management Tabs
  const roleTabs = [
    { name: 'All Users (2,860)', count: '2,860' },
    { name: 'State (156)', count: '156' },
    { name: 'District (620)', count: '620' },
    { name: 'Provider (1,248)', count: '1,248' },
    { name: 'Others (836)', count: '836' }
  ];

  // Table Data
  const usersList = [
    {
      id: 1,
      name: 'Dr. A. Deshmukh',
      role: 'State Skill Officer',
      dept: 'Skill Development Dept.',
      status: 'Active',
      lastLogin: '12 Sep 2025',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Sneha Patil',
      role: 'District Nodal Officer',
      dept: 'Pune',
      status: 'Active',
      lastLogin: '12 Sep 2025',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Rahul Jadhav',
      role: 'Training Provider',
      dept: 'TechSkills Institute',
      status: 'Active',
      lastLogin: '11 Sep 2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Pooja More',
      role: 'Programme Manager',
      dept: 'Employment Dept.',
      status: 'Inactive',
      lastLogin: '10 Sep 2025',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'Imran Shaikh',
      role: 'Data Analyst',
      dept: 'MahaPravah PMU',
      status: 'Active',
      lastLogin: '12 Sep 2025',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
    }
  ];

  // Role-wise User Distribution
  const roleDistribution = [
    { role: 'State Admin', percentage: '8%', count: '228', color: '#9A2A06' },
    { role: 'District Admin', percentage: '22%', count: '620', color: '#C0392B' },
    { role: 'Training Provider', percentage: '44%', count: '1,248', color: '#E67E22' },
    { role: 'Department User', percentage: '18%', count: '512', color: '#F39C12' },
    { role: 'Read-only User', percentage: '6%', count: '172', color: '#F8C471' },
    { role: 'Other', percentage: '2%', count: '80', color: '#FADBD8' }
  ];

  // Department-wise user count
  const departmentCounts = [
    { dept: 'Skill Development', count: 620, width: '100%' },
    { dept: 'Employment', count: 512, width: '82.5%' },
    { dept: 'Higher & Technical Education', count: 420, width: '67.7%' },
    { dept: 'Labour', count: 310, width: '50%' },
    { dept: 'Industries', count: 268, width: '43.2%' },
    { dept: 'Social Justice', count: 184, width: '29.6%' },
    { dept: 'Other', count: 546, width: '88%' }
  ];

  // Recent Activity Logs
  const activityLogs = [
    { id: 1, activity: 'New user created', user: 'Sneha Patil', time: '12 Sep, 10:24 AM', icon: UserPlus, iconBg: 'text-[#8B2500] bg-[#FFF7ED]' },
    { id: 2, activity: 'Role updated', user: 'Rahul Jadhav', time: '12 Sep, 09:18 AM', icon: ShieldCheck, iconBg: 'text-amber-600 bg-amber-50' },
    { id: 3, activity: 'Login attempt (failed)', user: 'Imran Shaikh', time: '11 Sep, 06:42 AM', icon: AlertTriangle, iconBg: 'text-red-600 bg-red-50' },
    { id: 4, activity: 'Department added', user: 'Dr. A. Deshmukh', time: '11 Sep, 04:15 PM', icon: Building2, iconBg: 'text-emerald-600 bg-emerald-50' },
    { id: 5, activity: 'Permissions changed', user: 'Pooja More', time: '11 Sep, 11:30 AM', icon: Key, iconBg: 'text-purple-600 bg-purple-50' }
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none font-sans text-slate-800 pb-6 pr-1">
      
      {/* Standard Header Section Matching All Other Dashboards */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            Administration
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Manage users, roles, permissions and platform configurations efficiently.
          </p>
        </div>

        {/* Global Filter Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] transition-colors cursor-pointer">
            <MapPin size={13} className="text-[#C0392B]" />
            <span>Maharashtra (State)</span>
            <ChevronDown size={12} className="text-slate-400 ml-0.5" />
          </button>

          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] transition-colors cursor-pointer">
            <Calendar size={13} className="text-slate-400" />
            <span>FY 2025-26</span>
            <ChevronDown size={12} className="text-slate-400 ml-0.5" />
          </button>

          <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white border border-[#DFCEBD] shadow-2xs text-[11px] font-semibold text-slate-700 hover:bg-[#FAF7F2] transition-colors cursor-pointer">
            <span>All Programmes</span>
            <ChevronDown size={12} className="text-slate-400 ml-0.5" />
          </button>
        </div>
      </div>

      {/* Top 6 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 shrink-0">
        {kpiMetrics.map((kpi, idx) => {
          const IconComp = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-xs rounded-xl p-3.5 border border-[#DFC7B2]/70 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500 line-clamp-1">{kpi.title}</span>
                <div className={'p-1.5 rounded-lg ' + kpi.iconBg}>
                  <IconComp className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 tracking-tight">{kpi.value}</div>
                <div className="flex items-center gap-1 mt-1 text-xs">
                  <span className={kpi.changeType === 'up' ? 'text-emerald-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {kpi.change}
                  </span>
                  <span className="text-slate-400 text-[10px]">{kpi.subtitle}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Row 1: User Management (Table) & Role-wise User Distribution (Donut Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Col (8 Cols): User Management */}
        <div className="lg:col-span-8 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Table Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="text-base font-bold text-slate-900">User Management</h2>
              
              <div className="flex items-center gap-2">
                {/* Search in user management */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search users..."
                    className="pl-8 pr-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
                  />
                </div>

                {/* Add User Button */}
                <button className="flex items-center gap-1.5 px-3 py-1 bg-[#C0392B] hover:bg-[#A93226] text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add User</span>
                </button>

                {/* Filter Button */}
                <button className="flex items-center gap-1 px-3 py-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                  <Filter className="w-3.5 h-3.5 text-slate-500" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none]">
              {roleTabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setSelectedRoleTab(tab.name)}
                  className={'px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ' + (
                    selectedRoleTab === tab.name
                      ? 'bg-[#C0392B] text-white shadow-2xs'
                      : 'bg-[#FFF7ED]/70 text-slate-700 hover:bg-[#FFEDD5]/60'
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* User Data Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-100">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50/80 text-slate-500 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 w-8 text-center">#</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Department / Organisation</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Last Login</th>
                    <th className="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usersList.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 px-3 text-center text-slate-400 font-medium">{user.id}</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-6 h-6 rounded-full object-cover border border-slate-200"
                          />
                          <span className="font-semibold text-slate-900">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">{user.role}</td>
                      <td className="py-2.5 px-3 text-slate-600">{user.dept}</td>
                      <td className="py-2.5 px-3">
                        <span
                          className={'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ' + (
                            user.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                          )}
                        >
                          <span
                            className={'w-1.5 h-1.5 rounded-full ' + (
                              user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'
                            )}
                          />
                          {user.status}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-500">{user.lastLogin}</td>
                      <td className="py-2.5 px-3 text-center">
                        <button className="p-0.5 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100 transition-colors">
                          <MoreVertical className="w-3.5 h-3.5 mx-auto" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Col (4 Cols): Role-wise User Distribution */}
        <div className="lg:col-span-4 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-bold text-slate-900">Role-wise User Distribution</h2>
              <Info className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>
          </div>

          {/* Donut Chart & Legend layout */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 py-1">
            
            {/* Custom SVG Donut Chart */}
            <div className="relative w-40 h-40 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#9A2A06" strokeWidth="18" strokeDasharray="19.1 219.66" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C0392B" strokeWidth="18" strokeDasharray="52.5 186.26" strokeDashoffset="-19.1" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#E67E22" strokeWidth="18" strokeDasharray="105.0 133.76" strokeDashoffset="-71.6" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F39C12" strokeWidth="18" strokeDasharray="42.9 195.86" strokeDashoffset="-176.6" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F8C471" strokeWidth="18" strokeDasharray="14.3 224.46" strokeDashoffset="-219.5" />
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FADBD8" strokeWidth="18" strokeDasharray="4.8 233.96" strokeDashoffset="-233.8" />
              </svg>
              
              {/* Inner Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-xl font-extrabold text-slate-900">2,860</span>
                <span className="text-[11px] font-medium text-slate-500">Total Users</span>
              </div>
            </div>

            {/* Legend List */}
            <div className="w-full space-y-1.5 text-xs">
              {roleDistribution.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600 font-medium">{item.role}</span>
                  </div>
                  <div className="font-bold text-slate-800">
                    {item.percentage} <span className="text-slate-400 font-normal">({item.count})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Main Row 2: User Growth Trend, Department-wise User Count, Recent Activity Logs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* User Growth Trend (Line Chart) */}
        <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-slate-900">User Growth Trend</h3>
              <Info className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#9A2A06]" />
                <span className="text-slate-600">Total Users</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
                <span className="text-slate-600">Active Users</span>
              </div>
            </div>
          </div>

          {/* SVG Multi-Line Chart Representation */}
          <div className="relative w-full h-48 pt-3">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 border-b border-slate-200">
              <div className="border-b border-slate-100 flex justify-between"><span>4K</span></div>
              <div className="border-b border-slate-100 flex justify-between"><span>3K</span></div>
              <div className="border-b border-slate-100 flex justify-between"><span>2K</span></div>
              <div className="border-b border-slate-100 flex justify-between"><span>1K</span></div>
              <div className="flex justify-between"><span>0</span></div>
            </div>

            <svg className="w-full h-36 overflow-visible relative z-10" viewBox="0 0 300 120">
              <polyline
                fill="none"
                stroke="#9A2A06"
                strokeWidth="2.5"
                points="15,80 70,72 125,62 180,52 235,42 290,32"
              />
              <circle cx="15" cy="80" r="3.5" fill="#9A2A06" />
              <text x="15" y="72" textAnchor="middle" fill="#9A2A06" fontSize="8" fontWeight="bold">2,100</text>
              
              <circle cx="70" cy="72" r="3.5" fill="#9A2A06" />
              <text x="70" y="64" textAnchor="middle" fill="#9A2A06" fontSize="8" fontWeight="bold">2,250</text>

              <circle cx="125" cy="62" r="3.5" fill="#9A2A06" />
              <text x="125" y="54" textAnchor="middle" fill="#9A2A06" fontSize="8" fontWeight="bold">2,420</text>

              <circle cx="180" cy="52" r="3.5" fill="#9A2A06" />
              <text x="180" y="44" textAnchor="middle" fill="#9A2A06" fontSize="8" fontWeight="bold">2,580</text>

              <circle cx="235" cy="42" r="3.5" fill="#9A2A06" />
              <text x="235" y="34" textAnchor="middle" fill="#9A2A06" fontSize="8" fontWeight="bold">2,720</text>

              <circle cx="290" cy="32" r="3.5" fill="#9A2A06" />
              <text x="290" y="24" textAnchor="middle" fill="#9A2A06" fontSize="8" fontWeight="bold">2,860</text>

              <polyline
                fill="none"
                stroke="#E67E22"
                strokeWidth="2.5"
                points="15,98 70,90 125,80 180,70 235,62 290,56"
              />
              <circle cx="15" cy="98" r="3.5" fill="#E67E22" />
              <text x="15" y="110" textAnchor="middle" fill="#E67E22" fontSize="8" fontWeight="bold">1,720</text>

              <circle cx="70" cy="90" r="3.5" fill="#E67E22" />
              <text x="70" y="102" textAnchor="middle" fill="#E67E22" fontSize="8" fontWeight="bold">1,850</text>

              <circle cx="125" cy="80" r="3.5" fill="#E67E22" />
              <text x="125" y="92" textAnchor="middle" fill="#E67E22" fontSize="8" fontWeight="bold">2,010</text>

              <circle cx="180" cy="70" r="3.5" fill="#E67E22" />
              <text x="180" y="82" textAnchor="middle" fill="#E67E22" fontSize="8" fontWeight="bold">2,220</text>

              <circle cx="235" cy="62" r="3.5" fill="#E67E22" />
              <text x="235" y="74" textAnchor="middle" fill="#E67E22" fontSize="8" fontWeight="bold">2,350</text>

              <circle cx="290" cy="56" r="3.5" fill="#E67E22" />
              <text x="290" y="68" textAnchor="middle" fill="#E67E22" fontSize="8" fontWeight="bold">2,410</text>
            </svg>

            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1 px-1">
              <span>Apr 2025</span>
              <span>May 2025</span>
              <span>Jun 2025</span>
              <span>Jul 2025</span>
              <span>Aug 2025</span>
              <span>Sep 2025</span>
            </div>
          </div>
        </div>

        {/* Department-wise User Count (Horizontal Progress Bars) */}
        <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <h3 className="text-base font-bold text-slate-900">Department-wise User Count</h3>
          
          <div className="space-y-3">
            {departmentCounts.map((dept, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium truncate max-w-[180px]">{dept.dept}</span>
                  <span className="font-bold text-slate-900">{dept.count}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-[#C0392B] rounded-full transition-all duration-500"
                    style={{ width: dept.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Logs */}
        <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Recent Activity Logs</h3>
            <button className="text-xs font-semibold text-[#C0392B] hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {activityLogs.map((log) => {
              const LogIcon = log.icon;
              return (
                <div key={log.id} className="py-2 flex items-center justify-between gap-2 hover:bg-slate-50/60 transition-colors px-1 rounded-lg">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-slate-400 font-medium text-[11px] w-3.5">{log.id}</span>
                    <div className={'p-1.5 rounded-lg flex-shrink-0 ' + log.iconBg}>
                      <LogIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800 truncate text-[11px]">{log.activity}</div>
                      <div className="text-[10px] text-slate-500 truncate">{log.user}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium whitespace-nowrap text-right">
                    {log.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Main Row 3: Platform Settings & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left (7 Cols): Platform Settings */}
        <div className="lg:col-span-7 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-bold text-slate-900">Platform Settings</h3>
            <Info className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* General Settings */}
            <div className="p-3 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-start justify-between bg-slate-50/50">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">General Settings</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Manage platform configurations</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all mt-0.5" />
            </div>

            {/* User Roles & Permissions */}
            <div className="p-3 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-start justify-between bg-slate-50/50">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">User Roles & Permissions</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Configure roles and access controls</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all mt-0.5" />
            </div>

            {/* Department Management */}
            <div className="p-3 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-start justify-between bg-slate-50/50">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Department Management</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Manage departments and hierarchies</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all mt-0.5" />
            </div>

            {/* Notification Settings */}
            <div className="p-3 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-start justify-between bg-slate-50/50">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Notification Settings</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Email, SMS and in-app notifications</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all mt-0.5" />
            </div>
          </div>
        </div>

        {/* Right (5 Cols): System Health */}
        <div className="lg:col-span-5 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <h3 className="text-base font-bold text-slate-900">System Health</h3>

          {/* 4 Stat Box Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Server Status */}
            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Server Status</span>
                <Server className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="mt-1.5">
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Healthy
                </div>
                <div className="text-[9.5px] text-slate-500 mt-0.5">All systems operational</div>
              </div>
            </div>

            {/* Database */}
            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Database</span>
                <Database className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="mt-1.5">
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </div>
                <div className="text-[9.5px] text-slate-500 mt-0.5">Response time: 42 ms</div>
              </div>
            </div>

            {/* API Services */}
            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">API Services</span>
                <Code2 className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="mt-1.5">
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Operational
                </div>
                <div className="text-[9.5px] text-slate-500 mt-0.5">99.9% uptime</div>
              </div>
            </div>

            {/* Storage Usage */}
            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Storage Usage</span>
                <HardDrive className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="mt-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-0.5">
                  <span>68%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C0392B] rounded-full" style={{ width: '68%' }} />
                </div>
                <div className="text-[9.5px] text-slate-500 mt-0.5">342 GB of 500 GB</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="pt-3 border-t border-[#DFC7B2]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          © 2025 MahaPravah. Government of Maharashtra. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:text-slate-800 transition-colors">Terms of Use</a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:text-slate-800 transition-colors">Help & Support</a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:text-slate-800 transition-colors">Contact Us</a>
        </div>
      </footer>

    </div>
  );
}
