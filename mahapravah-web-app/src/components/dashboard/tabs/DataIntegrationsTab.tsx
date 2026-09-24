import {
  Database,
  Link2,
  Clock,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  Plus,
  Info,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  RefreshCw,
  Terminal,
  Zap,
  Download,
  Box,
  Share2
} from 'lucide-react';

export default function DataIntegrationsTab() {

  // Top KPI Metrics
  const kpiMetrics = [
    {
      title: 'Total Data Sources',
      value: '24',
      change: '↑ 26.3%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: Database,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Active Integrations',
      value: '18',
      change: '↑ 20.0%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: Link2,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Daily Records Synced',
      value: '12.4 Lakh',
      change: '↑ 35.7%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: RefreshCw,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Average Sync Time',
      value: '4.2 mins',
      change: '↓ 28.6%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: Clock,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Data Quality Score',
      value: '96.8%',
      change: '↑ 4.1%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: CheckCircle2,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    },
    {
      title: 'Departments Connected',
      value: '12',
      change: '↑ 33.3%',
      changeType: 'up',
      subtitle: 'vs last year',
      icon: Building2,
      iconBg: 'bg-orange-100 text-[#C0392B]'
    }
  ];

  // Data Sources Diagram Elements
  const dataSources = [
    'Skill Development Dept.',
    'Education Dept.',
    'Labour Dept.',
    'Industry Partners',
    'External Portals',
    'Other Sources'
  ];

  const dataConsumers = [
    'Analytics & Reports',
    'Dashboards',
    'Policy Planning',
    'District Portals',
    'Research & Insights',
    'API Access'
  ];

  // Integration Status Breakdown
  const integrationStatuses = [
    { label: 'Active', count: '18', percentage: '75%', color: '#C0392B' },
    { label: 'Partial', count: '3', percentage: '12%', color: '#F39C12' },
    { label: 'Failed', count: '2', percentage: '8%', color: '#E74C3C' },
    { label: 'Not Configured', count: '1', percentage: '4%', color: '#95A5A6' }
  ];

  // Data Quality Metrics
  const qualityMetrics = [
    { title: 'Completeness', value: '98.2%', icon: CheckCircle2, iconColor: 'text-emerald-600 bg-emerald-50' },
    { title: 'Accuracy', value: '96.8%', icon: Zap, iconColor: 'text-amber-600 bg-amber-50' },
    { title: 'Timeliness', value: '94.5%', icon: Clock, iconColor: 'text-[#8B2500] bg-[#FFF7ED]' },
    { title: 'Consistency', value: '95.1%', icon: Database, iconColor: 'text-purple-600 bg-purple-50' }
  ];

  // Department sync percentages
  const departmentSyncData = [
    { dept: 'Skill Development', percentage: '42%', width: '100%' },
    { dept: 'Education', percentage: '18%', width: '43%' },
    { dept: 'Labour', percentage: '14%', width: '33%' },
    { dept: 'Industries', percentage: '10%', width: '24%' },
    { dept: 'Other', percentage: '16%', width: '38%' }
  ];

  // Table Data for Data Sources
  const dataSourcesTable = [
    {
      id: 1,
      name: 'MahaSkill Portal',
      dept: 'Skill Development',
      dataType: 'Trainees, Programmes',
      lastSync: '12 Sep 2025, 09:30',
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 2,
      name: 'Apprenticeship India',
      dept: 'Labour',
      dataType: 'Apprenticeship Data',
      lastSync: '12 Sep 2025, 08:45',
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 3,
      name: 'UDISE+',
      dept: 'Education',
      dataType: 'Institutional Data',
      lastSync: '11 Sep 2025, 21:20',
      status: 'Partial',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 4,
      name: 'Employer Registration',
      dept: 'Industries',
      dataType: 'Employer Data',
      lastSync: '11 Sep 2025, 18:10',
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 5,
      name: 'MahaDBT',
      dept: 'Finance',
      dataType: 'Beneficiary Data',
      lastSync: '11 Sep 2025, 14:35',
      status: 'Failed',
      statusColor: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      id: 6,
      name: 'NSDC Portal',
      dept: 'External',
      dataType: 'Sector & Course Data',
      lastSync: '11 Sep 2025, 11:50',
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  // Integration Logs Feed
  const integrationLogs = [
    { id: 1, text: 'Data sync completed - MahaSkill Portal', time: '12 Sep 2025, 09:30', dotColor: 'bg-emerald-500' },
    { id: 2, text: 'Partial sync - UDISE+', time: '12 Sep 2025, 08:45', dotColor: 'bg-amber-500' },
    { id: 3, text: 'Connection restored - MahaDBT', time: '12 Sep 2025, 07:20', dotColor: 'bg-[#E65100]' },
    { id: 4, text: 'New API key generated', time: '11 Sep 2025, 18:10', dotColor: 'bg-[#E65100]' },
    { id: 5, text: 'Sync failed - Employer Registration', time: '11 Sep 2025, 14:35', dotColor: 'bg-red-500' },
    { id: 6, text: 'Data validation completed', time: '11 Sep 2025, 12:20', dotColor: 'bg-emerald-500' }
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-sans text-slate-800 pb-6 pr-1 bg-transparent">
      
      {/* Standard Header Section Matching All Other Dashboards */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            Data & Integrations
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Connect, manage and synchronize data across departments, platforms and external systems.
          </p>
        </div>

        {/* Global Filter Buttons & Primary Action */}
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

          {/* + Add Integration Button */}
          <button className="flex items-center gap-1.5 h-8 px-3.5 rounded-lg bg-[#C0392B] hover:bg-[#A93226] text-white shadow-2xs text-xs font-bold transition-colors cursor-pointer">
            <Plus size={14} />
            <span>Add Integration</span>
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
                  <span className="text-emerald-600 font-semibold">{kpi.change}</span>
                  <span className="text-slate-400 text-[10px]">{kpi.subtitle}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Row 1: Data Flow Overview (Left) & Status/Quality/Sync/Department (Right 2 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column (5 Cols): Data Flow Overview */}
        <div className="lg:col-span-5 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-bold text-slate-900">Data Flow Overview</h2>
              <Info className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="relative py-2 px-1 flex items-center justify-between min-h-[320px]">
            {/* Left Box Column: Data Sources */}
            <div className="flex flex-col justify-between space-y-2.5 z-10 w-36">
              <span className="text-[11px] font-bold text-slate-500 mb-0.5 block">Data Sources</span>
              {dataSources.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1.5 bg-orange-50/80 border border-orange-200/80 rounded-lg text-[11px] font-semibold text-slate-700 shadow-2xs hover:border-[#C0392B] transition-colors truncate"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Central Badge Hub & Flow Paths */}
            <div className="relative flex-1 flex items-center justify-center px-3">
              {/* SVG Connecting Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0,10 C 35,10 35,50 50,50" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 0,26 C 35,26 35,50 50,50" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 0,42 C 35,42 35,50 50,50" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 0,58 C 35,58 35,50 50,50" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 0,74 C 35,74 35,50 50,50" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 0,90 C 35,90 35,50 50,50" fill="none" stroke="#FADBD8" strokeWidth="2.5" />

                <path d="M 50,50 C 65,50 65,10 100,10" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 50,50 C 65,50 65,26 100,26" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 50,50 C 65,50 65,42 100,42" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 50,50 C 65,50 65,58 100,58" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 50,50 C 65,50 65,74 100,74" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
                <path d="M 50,50 C 65,50 65,90 100,90" fill="none" stroke="#FADBD8" strokeWidth="2.5" />
              </svg>

              {/* Central Integration Layer Node */}
              <div className="z-20 bg-gradient-to-b from-[#C0392B] to-[#9A2A06] text-white p-2.5 rounded-xl shadow-sm border-2 border-white text-center max-w-[125px] flex flex-col items-center">
                <Database className="w-4 h-4 mb-1 text-orange-200" />
                <span className="text-[10px] font-extrabold leading-tight">MahaPravah Data Integration Layer</span>
              </div>
            </div>

            {/* Right Box Column: Data Consumers */}
            <div className="flex flex-col justify-between space-y-2.5 z-10 w-36">
              <span className="text-[11px] font-bold text-slate-500 mb-0.5 block text-right">Data Consumers</span>
              {dataConsumers.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1.5 bg-orange-50/80 border border-orange-200/80 rounded-lg text-[11px] font-semibold text-slate-700 shadow-2xs hover:border-[#C0392B] transition-colors truncate text-right"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column (3.5 Cols): Integration Status (Top) & Data Quality Overview (Bottom) */}
        <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
          
          {/* Integration Status Donut */}
          <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">Integration Status</h3>
                <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
              </div>
              <button className="text-xs font-semibold text-[#C0392B] hover:underline flex items-center gap-0.5">
                View All <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="flex items-center justify-between gap-3 py-1">
              {/* Custom SVG Donut */}
              <div className="relative w-26 h-26 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="36" fill="transparent" stroke="#C0392B" strokeWidth="10" strokeDasharray="169.6 56.59" strokeDashoffset="0" />
                  <circle cx="50" cy="50" r="36" fill="transparent" stroke="#F39C12" strokeWidth="10" strokeDasharray="27.1 199.09" strokeDashoffset="-169.6" />
                  <circle cx="50" cy="50" r="36" fill="transparent" stroke="#E74C3C" strokeWidth="10" strokeDasharray="18.1 208.09" strokeDashoffset="-196.7" />
                  <circle cx="50" cy="50" r="36" fill="transparent" stroke="#95A5A6" strokeWidth="10" strokeDasharray="9.0 217.19" strokeDashoffset="-214.8" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-base font-extrabold text-slate-900">24</span>
                  <span className="text-[9px] font-medium text-slate-500">Data Sources</span>
                </div>
              </div>

              {/* Legend List */}
              <div className="space-y-1 text-[11px] flex-1">
                {integrationStatuses.map((st, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: st.color }} />
                      <span className="text-slate-600 font-medium">{st.label}</span>
                    </div>
                    <span className="font-bold text-slate-800">{st.count} <span className="text-slate-400 font-normal">({st.percentage})</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Quality Overview Grid */}
          <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex-1 flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900">Data Quality Overview</h3>
            <div className="grid grid-cols-4 gap-2">
              {qualityMetrics.map((q, idx) => {
                const QIcon = q.icon;
                return (
                  <div key={idx} className="p-2 bg-slate-50/70 border border-slate-100 rounded-lg text-center flex flex-col items-center justify-between">
                    <div className={'p-1 rounded-full mb-1 ' + q.iconColor}>
                      <QIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium line-clamp-1">{q.title}</span>
                    <span className="text-xs font-extrabold text-slate-900 mt-0.5">{q.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column (3.5 Cols): Data Sync Trend (Top) & Data by Department (Bottom) */}
        <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
          
          {/* Data Sync Trend Bar Chart */}
          <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">Data Sync Trend</h3>
                <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
              </div>
              <button className="flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[11px] font-medium text-slate-600">
                <span>Records Synced</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>

            {/* Bar Chart Representation */}
            <div className="relative pt-5 pb-1">
              <div className="absolute right-2 top-0 bg-orange-100/70 text-[#C0392B] border border-orange-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                12.4 Lakh Records Synced
              </div>

              <div className="h-28 w-full flex items-end justify-between px-1 border-b border-slate-200 pt-3">
                {[
                  { month: 'Jan', val: 35 },
                  { month: 'Feb', val: 45 },
                  { month: 'Mar', val: 52 },
                  { month: 'Apr', val: 60 },
                  { month: 'May', val: 65 },
                  { month: 'Jun', val: 74 },
                  { month: 'Jul', val: 82 },
                  { month: 'Aug', val: 90 },
                  { month: 'Sep', val: 100 }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1 flex-1 group">
                    <div className="w-full max-w-[13px] bg-slate-100 rounded-t h-20 flex items-end overflow-hidden">
                      <div
                        className="w-full bg-[#C0392B] rounded-t transition-all duration-500 group-hover:bg-[#9A2A06]"
                        style={{ height: item.val + '%' }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-500 font-medium">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data by Department Progress Bars */}
          <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-2.5 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-slate-900">Data by Department</h3>
                <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
              </div>
              <button className="text-xs font-semibold text-[#C0392B] hover:underline flex items-center gap-0.5">
                View All <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {departmentSyncData.map((dept, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">{dept.dept}</span>
                    <span className="font-bold text-slate-900">{dept.percentage}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-[#C0392B] rounded-full transition-all duration-500"
                      style={{ width: dept.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Main Row 2: Integrated Data Sources Table (Left 6 Cols), API Services (Middle 3 Cols), Recent Integration Logs (Right 3 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column (6 Cols): Integrated Data Sources */}
        <div className="lg:col-span-6 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Integrated Data Sources</h2>
              <button className="text-xs font-semibold text-[#C0392B] hover:underline flex items-center gap-0.5">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-100">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50/80 text-slate-500 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-2.5 w-7 text-center">#</th>
                    <th className="py-2 px-2.5">Source Name</th>
                    <th className="py-2 px-2.5">Department</th>
                    <th className="py-2 px-2.5">Data Type</th>
                    <th className="py-2 px-2.5">Last Sync</th>
                    <th className="py-2 px-2.5">Status</th>
                    <th className="py-2 px-2.5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {dataSourcesTable.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-2.5 text-center text-slate-400 font-medium">{row.id}</td>
                      <td className="py-2 px-2.5 font-semibold text-slate-900">{row.name}</td>
                      <td className="py-2 px-2.5 text-slate-600">{row.dept}</td>
                      <td className="py-2 px-2.5 text-slate-600">{row.dataType}</td>
                      <td className="py-2 px-2.5 text-slate-500 whitespace-nowrap">{row.lastSync}</td>
                      <td className="py-2 px-2.5">
                        <span
                          className={'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ' + row.statusColor}
                        >
                          <span
                            className={'w-1.5 h-1.5 rounded-full ' + (
                              row.status === 'Active' ? 'bg-emerald-500' : row.status === 'Partial' ? 'bg-amber-500' : 'bg-red-500'
                            )}
                          />
                          {row.status}
                        </span>
                      </td>
                      <td className="py-2 px-2.5 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-medium transition-colors">
                            View
                          </button>
                          <button className="p-0.5 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100 transition-colors">
                            <MoreVertical className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Middle Column (3 Cols): API & Integration Services */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-bold text-slate-900">API & Integration Services</h3>
            <Info className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>

          <div className="space-y-2.5">
            {/* REST APIs */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-center justify-between bg-slate-50/40">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">REST APIs</h4>
                  <p className="text-[10px] text-slate-500">Access real-time data</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
            </div>

            {/* Webhooks */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-center justify-between bg-slate-50/40">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Webhooks</h4>
                  <p className="text-[10px] text-slate-500">Receive instant updates</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
            </div>

            {/* Data Export */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-center justify-between bg-slate-50/40">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Download className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Data Export</h4>
                  <p className="text-[10px] text-slate-500">Download datasets</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
            </div>

            {/* Sandbox Environment */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#C0392B]/40 hover:shadow-2xs transition-all group cursor-pointer flex items-center justify-between bg-slate-50/40">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-100/70 text-[#C0392B] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                  <Box className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sandbox Environment</h4>
                  <p className="text-[10px] text-slate-500">Test integrations safely</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#C0392B] group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>
        </div>

        {/* Right Column (3 Cols): Recent Integration Logs */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur-xs rounded-xl border border-[#DFC7B2]/70 shadow-2xs p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Recent Integration Logs</h3>
            <button className="text-xs font-semibold text-[#C0392B] hover:underline flex items-center gap-0.5">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 text-xs space-y-1.5">
            {integrationLogs.map((log) => (
              <div key={log.id} className="pt-1.5 flex items-start gap-2 hover:bg-slate-50/60 transition-colors p-1 rounded-lg">
                <span className={'w-2 h-2 rounded-full mt-1 flex-shrink-0 ' + log.dotColor} />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-slate-800 text-[11px] leading-tight truncate">{log.text}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{log.time}</div>
                </div>
              </div>
            ))}
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
