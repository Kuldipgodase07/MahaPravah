import { useState } from 'react';
import { Download, ChevronDown, FileText, FileSpreadsheet } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ReportsDownloadsTab() {
  const { isMarathi } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'standard' | 'custom' | 'export'>('standard');

  const reports = [
    {
      name: isMarathi ? 'राज्य कौशल्य विकास अहवाल' : 'State Skill Development Report',
      description: isMarathi ? 'महाराष्ट्रातील एकूण कौशल्य प्रगती' : 'Overall skilling progress in Maharashtra',
      format: 'PDF',
      date: '12 Sep 2025',
    },
    {
      name: isMarathi ? 'जिल्हानिहाय कामगिरी अहवाल' : 'District-wise Performance',
      description: isMarathi ? 'जिल्हास्तरीय निष्पत्ती विश्लेषण' : 'District-level outcome analysis',
      format: 'PDF',
      date: '10 Sep 2025',
    },
    {
      name: isMarathi ? 'कार्यक्रमानिहाय अहवाल' : 'Programme-wise Report',
      description: isMarathi ? 'सर्व कार्यक्रमांची कामगिरी' : 'Performance of all programmes',
      format: 'Excel',
      date: '9 Sep 2025',
    },
    {
      name: isMarathi ? 'रोजगार निष्पत्ती अहवाल' : 'Employment Outcomes Report',
      description: isMarathi ? 'प्लेसमेंट आणि धारणा विश्लेषण' : 'Placement and retention analysis',
      format: 'PDF',
      date: '8 Sep 2025',
    },
    {
      name: isMarathi ? 'कौशल्य तूट विश्लेषण अहवाल' : 'Skill Gap Analysis Report',
      description: isMarathi ? 'उद्योग मागणी वि. प्रशिक्षण पुरवठा' : 'Industry demand vs training supply',
      format: 'PDF',
      date: '7 Sep 2025',
    },
    {
      name: isMarathi ? 'लाभार्थी लोकसंख्याशास्त्र' : 'Beneficiary Demographics',
      description: isMarathi ? 'तपशीलवार लाभार्थी विश्लेषण' : 'Detailed beneficiary analysis',
      format: 'Excel',
      date: '6 Sep 2025',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden select-none pt-3">
      {/* Title Header */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
          {isMarathi ? 'अहवाल व डाऊनलोड' : 'Reports & Downloads'}
        </h1>
        <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-tight">
          {isMarathi
            ? 'तपशीलवार अहवाल आणि डेटा निर्यातीमध्ये प्रवेश करा.'
            : 'Access detailed reports and data exports.'}
        </p>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-2 mb-2.5">
        <button
          onClick={() => setActiveSubTab('standard')}
          className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
            activeSubTab === 'standard'
              ? 'bg-[#7B2400] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-[#FAF7F2] border border-[#E2E8F0]'
          }`}
        >
          {isMarathi ? 'मानक अहवाल' : 'Standard Reports'}
        </button>
        <button
          onClick={() => setActiveSubTab('custom')}
          className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
            activeSubTab === 'custom'
              ? 'bg-[#7B2400] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-[#FAF7F2] border border-[#E2E8F0]'
          }`}
        >
          {isMarathi ? 'सानुकूल अहवाल' : 'Custom Reports'}
        </button>
        <button
          onClick={() => setActiveSubTab('export')}
          className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
            activeSubTab === 'export'
              ? 'bg-[#7B2400] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-[#FAF7F2] border border-[#E2E8F0]'
          }`}
        >
          {isMarathi ? 'डेटा निर्यात' : 'Data Export'}
        </button>
      </div>

      {/* Filter Row: Categories + Districts + FY */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व प्रवर्ग' : 'All Categories'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
          <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
            <span>{isMarathi ? 'सर्व जिल्हे' : 'All Districts'}</span>
            <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-1.5 h-7 px-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[11px] font-medium text-slate-700 shadow-2xs cursor-pointer">
          <span>{isMarathi ? 'आ.व. २०२५-२६' : 'FY 2025-26'}</span>
          <ChevronDown size={12} className="text-slate-400" />
        </div>
      </div>

      {/* Reports Table in Card */}
      <div className="flex-1 bg-white rounded-xl border border-[#F1E5D8] p-3 shadow-2xs flex flex-col min-h-0 overflow-hidden">
        <div className="flex-1 overflow-x-auto min-h-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F1E5D8] text-[11px] font-bold text-slate-600">
                <th className="pb-2 font-bold">{isMarathi ? 'अहवालाचे नाव' : 'Report Name'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'वर्णन' : 'Description'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'स्वरुप' : 'Format'}</th>
                <th className="pb-2 font-bold">{isMarathi ? 'शेवटचे अपडेट' : 'Last Updated'}</th>
                <th className="pb-2 font-bold text-right">{isMarathi ? 'डाऊनलोड' : 'Download'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6EFE9] text-xs">
              {reports.map((r, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="py-2.5 font-semibold text-slate-800">{r.name}</td>
                  <td className="py-2.5 text-slate-600 text-[11.5px]">{r.description}</td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      {r.format === 'PDF' ? <FileText size={11} className="text-red-500" /> : <FileSpreadsheet size={11} className="text-emerald-600" />}
                      {r.format}
                    </span>
                  </td>
                  <td className="py-2.5 text-slate-500 text-[11.5px]">{r.date}</td>
                  <td className="py-2.5 text-right">
                    <button
                      onClick={() => alert(`Downloading ${r.name} (${r.format})`)}
                      className="inline-flex items-center gap-1 text-[#2563EB] hover:text-[#1D4ED8] font-semibold text-[11.5px] cursor-pointer hover:underline"
                    >
                      <Download size={13} />
                      <span>{isMarathi ? 'डाऊनलोड' : 'Download'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
