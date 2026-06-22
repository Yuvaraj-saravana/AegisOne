import React, { useState, useEffect } from 'react';

// Custom SVG Icons
const IconDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>;
const IconAlertTriangle = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const IconActivity = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const IconSearch = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconBell = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const IconUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const IconTarget = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const IconNetwork = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>;

function App() {
  const [healthStatus, setHealthStatus] = useState('Checking');

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then((res) => res.json())
      .then((data) => setHealthStatus(data.status === 'ok' ? 'Online' : 'Degraded'))
      .catch(() => setHealthStatus('Offline'));
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#0B101E] text-slate-300 font-sans overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-slate-800/50 bg-[#0F1525]/80 backdrop-blur-2xl flex flex-col z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <IconShield />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">SecurityOps</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
          {[
            { icon: <IconDashboard />, label: 'Dashboard', active: true },
            { icon: <IconAlertTriangle />, label: 'Incidents' },
            { icon: <IconTarget />, label: 'Vulnerabilities' },
            { icon: <IconActivity />, label: 'Threat Intel' },
            { icon: <IconNetwork />, label: 'Assets' },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
              item.active 
                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-cyan-400 shadow-[inset_4px_0_0_rgba(34,211,238,1)]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
            }`}>
              <span className={item.active ? 'text-cyan-400' : 'text-slate-500'}>{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
          
          <div className="mt-8 mb-2 px-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">System</p>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all border border-transparent">
            <span className="text-slate-500"><IconSettings /></span>
            <span className="font-medium text-sm">Settings</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800/50">
          <div className="bg-[#151C2C] border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={`h-2.5 w-2.5 rounded-full ${healthStatus === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-rose-500'}`}></div>
              <span className="text-xs font-medium text-slate-300">API Gateway</span>
            </div>
            <p className="text-[10px] text-slate-500">Latency: 24ms • 99.9% Uptime</p>
          </div>
        </div>
      </aside>

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* HEADER */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800/50 bg-[#0B101E]/80 backdrop-blur-md z-10">
          <div className="flex-1 flex items-center">
            <div className="relative w-96 group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                <IconSearch />
              </span>
              <input 
                type="text" 
                placeholder="Search IPs, domains, hashes, or alerts..." 
                className="w-full bg-[#151C2C] border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400">Environment:</span>
              <span className="text-xs font-semibold text-emerald-400">Production</span>
            </div>
            
            <button className="relative text-slate-400 hover:text-white transition-colors">
              <IconBell />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-[#0B101E]"></span>
            </button>
            
            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 text-slate-300 hover:text-white transition-all hover:border-slate-500">
              <IconUser />
            </button>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 z-10 scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* HERO SECTION */}
            <div className="relative rounded-2xl bg-[#111827]/80 backdrop-blur-xl border border-slate-700/50 p-8 overflow-hidden shadow-2xl">
              {/* Decorative graphic in hero */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at right, #06b6d4 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#0B101E] to-transparent pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">Security Posture</h2>
                  <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                    Global threat landscape is currently elevated. Critical patches are pending on 3 edge nodes. Real-time SIEM analytics active.
                  </p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
                      A-
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Overall Score</span>
                      <span className="text-xs text-emerald-400 font-medium">+2.4% vs last week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KPI GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Active Threats', value: '12', trend: '+3', trendUp: false, color: 'rose' },
                { title: 'Events (24h)', value: '1.2M', trend: '-5%', trendUp: true, color: 'blue' },
                { title: 'Vulnerabilities', value: '84', trend: '-12', trendUp: true, color: 'amber' },
                { title: 'Avg TTR', value: '45m', trend: '-15m', trendUp: true, color: 'emerald' },
              ].map((kpi, i) => (
                <div key={i} className="bg-[#151C2C]/80 backdrop-blur-md border border-slate-700/40 rounded-xl p-5 hover:bg-[#1A233A] hover:border-slate-600/50 transition-all duration-300 group shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{kpi.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${kpi.trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {kpi.trend}
                    </span>
                  </div>
                  <div className="flex items-end gap-3">
                    <p className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{kpi.value}</p>
                  </div>
                  {/* Decorative mini bar chart */}
                  <div className="mt-4 flex gap-1 h-8 items-end opacity-50 group-hover:opacity-100 transition-opacity">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, j) => (
                      <div key={j} className={`w-full rounded-t-sm bg-${kpi.color}-500/40`} style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* DASHBOARD WIDGETS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Active Incidents Table */}
              <div className="lg:col-span-2 bg-[#151C2C]/80 backdrop-blur-md border border-slate-700/40 rounded-xl flex flex-col shadow-lg overflow-hidden">
                <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <IconAlertTriangle /> Critical Incidents
                  </h3>
                  <button className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors">View All &rarr;</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-[#1A233A]/50 text-xs text-slate-400 uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3 font-semibold">ID</th>
                        <th className="px-5 py-3 font-semibold">Description</th>
                        <th className="px-5 py-3 font-semibold">Severity</th>
                        <th className="px-5 py-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {[
                        { id: 'INC-1042', desc: 'Multiple failed logins from unknown IP', sev: 'High', status: 'Investigating' },
                        { id: 'INC-1041', desc: 'Malware signature detected in email attachment', sev: 'Critical', status: 'Blocked' },
                        { id: 'INC-1040', desc: 'Anomalous outbound traffic spike', sev: 'Medium', status: 'Open' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-3 font-mono text-xs text-slate-300">{row.id}</td>
                          <td className="px-5 py-3 text-slate-200">{row.desc}</td>
                          <td className="px-5 py-3">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${
                              row.sev === 'Critical' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
                              row.sev === 'High' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 
                              'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                              {row.sev}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-slate-400 text-xs">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Threat Intel Sidebar Widget */}
              <div className="bg-[#151C2C]/80 backdrop-blur-md border border-slate-700/40 rounded-xl flex flex-col shadow-lg overflow-hidden">
                <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <IconTarget /> Threat Intelligence
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-4">
                  {[
                    { tag: 'APT29', detail: 'New phishing campaign targets finance sector', time: '2h ago' },
                    { tag: 'CVE-2026-104', detail: 'Zero-day in popular VPN gateway published', time: '5h ago' },
                    { tag: 'Ransomware', detail: 'LockBit variant utilizing new obfuscation', time: '12h ago' },
                  ].map((intel, i) => (
                    <div key={i} className="flex gap-3 group">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-shadow"></div>
                        {i !== 2 && <div className="absolute top-3 left-1 w-px h-10 bg-slate-800"></div>}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{intel.tag}</span>
                          <span className="text-[10px] text-slate-500">{intel.time}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed group-hover:text-white transition-colors">{intel.detail}</p>
                      </div>
                    </div>
                  ))}
                  <button className="mt-auto w-full py-2 bg-slate-800/50 hover:bg-slate-700/50 text-xs font-medium text-slate-300 rounded border border-slate-700 transition-colors">
                    View MISP Dashboard
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
