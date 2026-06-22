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
const IconPalette = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>;
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconLayoutList = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="14" width="7" height="7"></rect><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>;
const IconLogOut = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const IconLock = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;

function App() {
  const [healthStatus, setHealthStatus] = useState('Checking');
  const [isCustomizing, setIsCustomizing] = useState(false);
  
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  
  // Form fields state
  const [authForm, setAuthForm] = useState({ email: '', password: '', name: '' });

  // Customization State
  const [config, setConfig] = useState({
    mode: 'dark', // 'dark' | 'light'
    primary: 'cyan', // 'cyan' | 'emerald' | 'purple' | 'amber'
    layout: 'sidebar' // 'sidebar' | 'topbar'
  });

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then((res) => res.json())
      .then((data) => setHealthStatus(data.status === 'ok' ? 'Online' : 'Degraded'))
      .catch(() => setHealthStatus('Offline'));
  }, []);

  // Theme configuration mappings
  const themes = {
    dark: {
      bg: 'bg-[#0B101E]',
      surface: 'bg-[#151C2C]/80',
      surfaceSolid: 'bg-[#0F1525]',
      border: 'border-slate-800/50',
      borderHover: 'hover:border-slate-700/80',
      text: 'text-slate-300',
      textMuted: 'text-slate-500',
      heading: 'text-white',
      input: 'bg-[#151C2C] border-slate-800 text-slate-200 placeholder-slate-500',
    },
    light: {
      bg: 'bg-slate-50',
      surface: 'bg-white/80',
      surfaceSolid: 'bg-white',
      border: 'border-slate-200',
      borderHover: 'hover:border-slate-300',
      text: 'text-slate-600',
      textMuted: 'text-slate-400',
      heading: 'text-slate-900',
      input: 'bg-white border-slate-200 text-slate-800 placeholder-slate-400',
    }
  };

  const primaryColors = {
    cyan: { text: 'text-cyan-400', bgFade: 'bg-cyan-500/10', border: 'border-cyan-500/20', borderSolid: 'border-cyan-500', from: 'from-cyan-400', to: 'to-blue-600', glow: 'shadow-[0_0_15px_rgba(34,211,238,0.4)]', ring: 'focus:ring-cyan-500/50', selection: 'selection:bg-cyan-500/30 selection:text-cyan-100', dot: 'bg-cyan-500', insetShadow: 'shadow-[inset_4px_0_0_rgba(34,211,238,1)]' },
    emerald: { text: 'text-emerald-400', bgFade: 'bg-emerald-500/10', border: 'border-emerald-500/20', borderSolid: 'border-emerald-500', from: 'from-emerald-400', to: 'to-teal-600', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]', ring: 'focus:ring-emerald-500/50', selection: 'selection:bg-emerald-500/30 selection:text-emerald-100', dot: 'bg-emerald-500', insetShadow: 'shadow-[inset_4px_0_0_rgba(16,185,129,1)]' },
    purple: { text: 'text-purple-400', bgFade: 'bg-purple-500/10', border: 'border-purple-500/20', borderSolid: 'border-purple-500', from: 'from-purple-400', to: 'to-indigo-600', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.4)]', ring: 'focus:ring-purple-500/50', selection: 'selection:bg-purple-500/30 selection:text-purple-100', dot: 'bg-purple-500', insetShadow: 'shadow-[inset_4px_0_0_rgba(168,85,247,1)]' },
    amber: { text: 'text-amber-400', bgFade: 'bg-amber-500/10', border: 'border-amber-500/20', borderSolid: 'border-amber-500', from: 'from-amber-400', to: 'to-orange-600', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.4)]', ring: 'focus:ring-amber-500/50', selection: 'selection:bg-amber-500/30 selection:text-amber-100', dot: 'bg-amber-500', insetShadow: 'shadow-[inset_4px_0_0_rgba(245,158,11,1)]' }
  };

  const curTheme = themes[config.mode];
  const curColor = primaryColors[config.primary];

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // Simulate auth action
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 500);
  };

  // -------------------------------------------------------------
  // AUTHENTICATION SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className={`flex min-h-screen w-full ${curTheme.bg} ${curTheme.text} font-sans overflow-hidden ${curColor.selection} transition-colors duration-500 relative`}>
        
        {/* Dynamic Background Glow */}
        {config.mode === 'dark' && (
          <div className={`absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] ${curColor.dot}/10 rounded-full blur-[150px] pointer-events-none transition-colors duration-700`}></div>
        )}

        <div className="flex w-full z-10">
          {/* Left Branding Panel */}
          <div className={`hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-between p-12 bg-gradient-to-br from-[#0B101E] to-[#151C2C]`}>
            {/* Visual Abstract Elements */}
            <div className="absolute right-0 top-0 bottom-0 w-full opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at right, ${config.primary === 'cyan' ? '#06b6d4' : config.primary === 'emerald' ? '#10b981' : config.primary === 'purple' ? '#a855f7' : '#f59e0b'} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center ${curColor.glow}`}>
                <span className="text-white"><IconShield /></span>
              </div>
              <span className={`text-white font-bold text-2xl tracking-wide`}>Aegis One</span>
            </div>

            <div className="relative z-10 space-y-6">
              <div className={`inline-flex px-3 py-1 rounded-full ${curColor.bgFade} ${curColor.border} border text-xs font-semibold ${curColor.text} uppercase tracking-wider`}>
                Enterprise Security Platform
              </div>
              <h1 className="text-5xl font-black text-white leading-tight tracking-tight">
                Unified protection.<br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${curColor.from} ${curColor.to}`}>Total visibility.</span>
              </h1>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                Connect your SOC tools, automate incident response, and gain unparalleled insights into your organization's threat landscape.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span>© {new Date().getFullYear()} Aegis One</span>
              <span>•</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy</span>
              <span>•</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms</span>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 ${curTheme.bg} transition-colors duration-300`}>
            
            {/* Customizer Button for Auth Screen */}
            <div className="absolute top-6 right-6 z-50">
              <button 
                onClick={() => setIsCustomizing(true)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${curTheme.surface} border ${curTheme.border} ${curTheme.textMuted} hover:${curColor.text} transition-all`}
                title="Customize UI Theme"
              >
                <IconPalette /> <span className="text-xs font-semibold">Theme</span>
              </button>
            </div>

            <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              <div className="text-center space-y-2">
                <h2 className={`text-3xl font-extrabold ${curTheme.heading} tracking-tight`}>
                  {authMode === 'login' ? 'Welcome back' : 'Create an account'}
                </h2>
                <p className={`${curTheme.textMuted} text-sm`}>
                  {authMode === 'login' 
                    ? 'Enter your credentials to access the SOC dashboard.' 
                    : 'Register your organization to begin utilizing Aegis One.'}
                </p>
              </div>

              <form onSubmit={handleAuthSubmit} className={`p-8 rounded-2xl ${curTheme.surface} border ${curTheme.border} shadow-2xl space-y-6 backdrop-blur-xl`}>
                
                {authMode === 'register' && (
                  <div className="space-y-2">
                    <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Full Name</label>
                    <div className="relative">
                      <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}>
                        <IconUser />
                      </span>
                      <input 
                        type="text" required
                        placeholder="John Doe"
                        value={authForm.name}
                        onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                        className={`w-full ${curTheme.input} border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none ${curTheme.borderHover} focus:border-${config.primary}-500 focus:ring-1 ${curColor.ring} transition-all`}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Email Address</label>
                  <div className="relative">
                    <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </span>
                    <input 
                      type="email" required
                      placeholder="admin@organization.com"
                      value={authForm.email}
                      onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                      className={`w-full ${curTheme.input} border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none ${curTheme.borderHover} focus:border-${config.primary}-500 focus:ring-1 ${curColor.ring} transition-all`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Password</label>
                    {authMode === 'login' && (
                      <a href="#" className={`text-xs font-semibold ${curColor.text} hover:underline`}>Forgot password?</a>
                    )}
                  </div>
                  <div className="relative">
                    <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}>
                      <IconLock />
                    </span>
                    <input 
                      type="password" required
                      placeholder="••••••••••••"
                      value={authForm.password}
                      onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                      className={`w-full ${curTheme.input} border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none ${curTheme.borderHover} focus:border-${config.primary}-500 focus:ring-1 ${curColor.ring} transition-all`}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className={`w-full flex justify-center items-center gap-2 py-3 rounded-xl font-bold text-white shadow-lg transition-all active:scale-[0.98] ${
                    config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/25' :
                    config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/25' :
                    config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400 shadow-purple-500/25' :
                    'bg-amber-500 hover:bg-amber-400 shadow-amber-500/25'
                  }`}
                >
                  {authMode === 'login' ? 'Sign In to Dashboard' : 'Register Account'}
                </button>
              </form>

              <div className="text-center">
                <p className={`${curTheme.textMuted} text-sm font-medium`}>
                  {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    type="button"
                    onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                    className={`ml-2 font-bold ${curColor.text} hover:underline transition-all`}
                  >
                    {authMode === 'login' ? 'Register' : 'Sign in'}
                  </button>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* REUSED CUSTOMIZATION DRAWER FOR AUTH SCREEN */}
        {isCustomizing && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsCustomizing(false)}></div>
            <div className={`relative w-80 h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
              <div className={`p-5 flex items-center justify-between border-b ${curTheme.border}`}>
                <h3 className={`font-bold ${curTheme.heading} flex items-center gap-2`}><IconPalette /> Theme Customization</h3>
                <button onClick={() => setIsCustomizing(false)} className={`${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button>
              </div>
              <div className="p-6 overflow-y-auto flex-1 space-y-8">
                {/* Theme Mode */}
                <div className="space-y-3">
                  <label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Mode</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['dark', 'light'].map((m) => (
                      <button key={m} onClick={() => setConfig({...config, mode: m})} className={`py-2 px-3 rounded-lg border text-sm font-medium capitalize transition-all ${config.mode === m ? `${curColor.bgFade} ${curColor.borderSolid} ${curColor.text}` : `${curTheme.border} ${curTheme.text} hover:${curTheme.surface}`}`}>{m}</button>
                    ))}
                  </div>
                </div>
                {/* Primary Color */}
                <div className="space-y-3">
                  <label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Accent Color</label>
                  <div className="grid grid-cols-4 gap-3">
                    {Object.keys(primaryColors).map((colorKey) => (
                      <button key={colorKey} onClick={() => setConfig({...config, primary: colorKey})} className={`h-10 rounded-lg border flex items-center justify-center transition-all ${config.primary === colorKey ? `${primaryColors[colorKey].borderSolid} ring-2 ring-${colorKey}-500/30 scale-110` : `${curTheme.border} hover:scale-105`}`}><div className={`h-4 w-4 rounded-full bg-${colorKey}-500`}></div></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // DASHBOARD SCREEN (Main App)
  // -------------------------------------------------------------
  const navItems = [
    { icon: <IconDashboard />, label: 'Dashboard', active: true },
    { icon: <IconAlertTriangle />, label: 'Incidents' },
    { icon: <IconTarget />, label: 'Vulnerabilities' },
    { icon: <IconActivity />, label: 'Threat Intel' },
    { icon: <IconNetwork />, label: 'Assets' },
  ];

  return (
    <div className={`flex h-screen w-full ${curTheme.bg} ${curTheme.text} font-sans overflow-hidden ${curColor.selection} transition-colors duration-500 relative`}>
      
      {/* Background glow effects - hidden in light mode for cleaner look */}
      {config.mode === 'dark' && (
        <>
          <div className={`absolute top-[-10%] left-[20%] w-[500px] h-[500px] ${curColor.dot}/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-700`}></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-700"></div>
        </>
      )}

      {/* SIDEBAR OR TOPBAR LAYOUT WRAPPER */}
      <div className={`flex flex-1 w-full ${config.layout === 'sidebar' ? 'flex-row' : 'flex-col'}`}>
        
        {/* NAVIGATION: SIDEBAR MODE */}
        {config.layout === 'sidebar' && (
          <aside className={`w-64 border-r ${curTheme.border} ${curTheme.surfaceSolid}/80 backdrop-blur-2xl flex flex-col z-20 transition-all duration-300`}>
            <div className={`h-16 flex items-center px-6 border-b ${curTheme.border}`}>
              <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center ${curColor.glow}`}>
                  <span className="text-white"><IconShield /></span>
                </div>
                <span className={`${curTheme.heading} font-bold text-lg tracking-wide`}>Aegis One</span>
              </div>
            </div>

            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
              <p className={`px-3 text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Main Menu</p>
              {navItems.map((item, i) => (
                <button key={i} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  item.active 
                    ? `bg-gradient-to-r ${curColor.from}/10 to-transparent border ${curColor.border} ${curColor.text} ${curColor.insetShadow}` 
                    : `${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} border border-transparent`
                }`}>
                  <span className={item.active ? curColor.text : curTheme.textMuted}>{item.icon}</span>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
              
              <div className="mt-8 mb-2 px-3">
                <p className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>System</p>
              </div>
              <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg ${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} transition-all border border-transparent`}>
                <span className={curTheme.textMuted}><IconSettings /></span>
                <span className="font-medium text-sm">Settings</span>
              </button>
            </nav>

            <div className={`p-4 border-t ${curTheme.border}`}>
              <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-4`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${healthStatus === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-rose-500'}`}></div>
                  <span className={`text-xs font-medium ${curTheme.text}`}>API Gateway</span>
                </div>
                <p className={`text-[10px] ${curTheme.textMuted}`}>Latency: 24ms • 99.9% Uptime</p>
              </div>
            </div>
          </aside>
        )}

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          
          {/* HEADER */}
          <header className={`h-16 flex items-center justify-between px-8 border-b ${curTheme.border} ${curTheme.surfaceSolid}/80 backdrop-blur-md z-10 transition-colors duration-300`}>
            
            {/* If Topbar layout, show logo and nav here */}
            {config.layout === 'topbar' ? (
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 mr-4">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center ${curColor.glow}`}>
                    <span className="text-white"><IconShield /></span>
                  </div>
                  <span className={`${curTheme.heading} font-bold text-lg tracking-wide`}>Aegis One</span>
                </div>
                <nav className="flex items-center gap-2">
                  {navItems.map((item, i) => (
                    <button key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      item.active 
                        ? `${curColor.bgFade} border ${curColor.border} ${curColor.text}` 
                        : `${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} border border-transparent`
                    }`}>
                      <span className={item.active ? curColor.text : curTheme.textMuted}>{item.icon}</span>
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            ) : (
              <div className="flex-1 flex items-center">
                <div className="relative w-96 group">
                  <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted} group-focus-within:${curColor.text} transition-colors`}>
                    <IconSearch />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Search IPs, domains, hashes..." 
                    className={`w-full ${curTheme.input} rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none ${curColor.border} focus:ring-1 ${curColor.ring} transition-all shadow-inner`}
                  />
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-5 ml-auto">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${curTheme.surface} border ${curTheme.border}`}>
                <span className={`text-xs ${curTheme.textMuted}`}>Environment:</span>
                <span className="text-xs font-semibold text-emerald-500">Production</span>
              </div>
              
              <button className={`relative ${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}>
                <IconBell />
                <span className={`absolute -top-1 -right-1 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 ${curTheme.surfaceSolid}`}></span>
              </button>
              
              {/* Customization Toggle Button */}
              <button 
                onClick={() => setIsCustomizing(true)}
                className={`relative ${curTheme.textMuted} hover:${curColor.text} transition-colors p-1`}
                title="Customize UI"
              >
                <IconPalette />
              </button>

              <div className="relative group">
                <button className={`flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 border ${curTheme.border} text-white hover:opacity-90 transition-all`}>
                  <IconUser />
                </button>
                {/* Logout Tooltip/Dropdown mock */}
                <div className={`absolute right-0 top-full mt-2 w-48 ${curTheme.surfaceSolid} border ${curTheme.border} rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50`}>
                  <div className={`px-3 py-2 border-b ${curTheme.border} mb-1`}>
                    <p className={`text-sm font-bold ${curTheme.heading}`}>Admin User</p>
                    <p className={`text-xs ${curTheme.textMuted}`}>admin@organization.com</p>
                  </div>
                  <button 
                    onClick={() => setIsAuthenticated(false)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-rose-500 hover:bg-rose-500/10 transition-colors`}
                  >
                    <IconLogOut /> Sign out
                  </button>
                </div>
              </div>

            </div>
          </header>

          {/* DASHBOARD CONTENT */}
          <main className="flex-1 overflow-y-auto p-8 z-0 scrollbar-hide">
            <div className="max-w-7xl mx-auto space-y-8">
              
              {/* HERO SECTION */}
              <div className={`relative rounded-2xl ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} p-8 overflow-hidden shadow-xl transition-all duration-300`}>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at right, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className={`absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[${curTheme.bg}] to-transparent pointer-events-none opacity-50`}></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h2 className={`text-3xl font-extrabold ${curTheme.heading} tracking-tight mb-2`}>Security Posture</h2>
                    <p className={`${curTheme.textMuted} max-w-xl text-sm leading-relaxed`}>
                      Global threat landscape is currently elevated. Critical patches are pending on 3 edge nodes. Real-time SIEM analytics active.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${curColor.from} ${curColor.to}`}>
                        A-
                      </span>
                      <div className="flex flex-col">
                        <span className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Overall Score</span>
                        <span className="text-xs text-emerald-500 font-medium">+2.4% vs last week</span>
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
                  <div key={i} className={`${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl p-5 ${curTheme.borderHover} transition-all duration-300 group shadow-lg`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>{kpi.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${kpi.trendUp ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                        {kpi.trend}
                      </span>
                    </div>
                    <div className="flex items-end gap-3">
                      <p className={`text-3xl font-bold ${curTheme.heading} group-hover:${curColor.text} transition-colors`}>{kpi.value}</p>
                    </div>
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
                
                {/* Active Incidents */}
                <div className={`lg:col-span-2 ${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl flex flex-col shadow-lg overflow-hidden`}>
                  <div className={`p-5 border-b ${curTheme.border} flex items-center justify-between`}>
                    <h3 className={`text-sm font-bold ${curTheme.heading} flex items-center gap-2`}>
                      <IconAlertTriangle /> Critical Incidents
                    </h3>
                    <button className={`text-xs ${curColor.text} font-medium transition-colors opacity-80 hover:opacity-100`}>View All &rarr;</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}>
                        <tr>
                          <th className="px-5 py-3 font-semibold">ID</th>
                          <th className="px-5 py-3 font-semibold">Description</th>
                          <th className="px-5 py-3 font-semibold">Severity</th>
                          <th className="px-5 py-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${curTheme.border}`}>
                        {[
                          { id: 'INC-1042', desc: 'Multiple failed logins from unknown IP', sev: 'High', status: 'Investigating' },
                          { id: 'INC-1041', desc: 'Malware signature detected in email attachment', sev: 'Critical', status: 'Blocked' },
                          { id: 'INC-1040', desc: 'Anomalous outbound traffic spike', sev: 'Medium', status: 'Open' },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-black/5 transition-colors">
                            <td className={`px-5 py-3 font-mono text-xs ${curTheme.text}`}>{row.id}</td>
                            <td className={`px-5 py-3 ${curTheme.text}`}>{row.desc}</td>
                            <td className="px-5 py-3">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${
                                row.sev === 'Critical' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 
                                row.sev === 'High' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 
                                'bg-amber-500/10 text-amber-500 border-amber-500/20'
                              }`}>
                                {row.sev}
                              </span>
                            </td>
                            <td className={`px-5 py-3 ${curTheme.textMuted} text-xs`}>{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Threat Intel Sidebar Widget */}
                <div className={`${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl flex flex-col shadow-lg overflow-hidden`}>
                  <div className={`p-5 border-b ${curTheme.border} flex items-center justify-between`}>
                    <h3 className={`text-sm font-bold ${curTheme.heading} flex items-center gap-2`}>
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
                          <div className={`w-2 h-2 rounded-full ${curColor.dot} group-hover:${curColor.glow} transition-shadow`}></div>
                          {i !== 2 && <div className={`absolute top-3 left-1 w-px h-10 ${curTheme.border.replace('border-', 'bg-').split('/')[0]}`}></div>}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-bold ${curColor.text} uppercase tracking-wider`}>{intel.tag}</span>
                            <span className={`text-[10px] ${curTheme.textMuted}`}>{intel.time}</span>
                          </div>
                          <p className={`text-xs ${curTheme.text} leading-relaxed group-hover:${curTheme.heading} transition-colors`}>{intel.detail}</p>
                        </div>
                      </div>
                    ))}
                    <button className={`mt-auto w-full py-2 bg-black/10 hover:bg-black/20 text-xs font-medium ${curTheme.text} rounded border ${curTheme.border} transition-colors`}>
                      View MISP Dashboard
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>

      {/* CUSTOMIZATION DRAWER FOR DASHBOARD */}
      {isCustomizing && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCustomizing(false)}
          ></div>
          
          {/* Panel */}
          <div className={`relative w-80 h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className={`p-5 flex items-center justify-between border-b ${curTheme.border}`}>
              <h3 className={`font-bold ${curTheme.heading} flex items-center gap-2`}>
                <IconPalette /> Theme Customization
              </h3>
              <button onClick={() => setIsCustomizing(false)} className={`${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}>
                <IconX />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              
              {/* Color Theme */}
              <div className="space-y-3">
                <label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  {['dark', 'light'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setConfig({...config, mode: m})}
                      className={`py-2 px-3 rounded-lg border text-sm font-medium capitalize transition-all ${
                        config.mode === m 
                          ? `${curColor.bgFade} ${curColor.borderSolid} ${curColor.text}` 
                          : `${curTheme.border} ${curTheme.text} hover:${curTheme.surface}`
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Color */}
              <div className="space-y-3">
                <label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Accent Color</label>
                <div className="grid grid-cols-4 gap-3">
                  {Object.keys(primaryColors).map((colorKey) => (
                    <button
                      key={colorKey}
                      onClick={() => setConfig({...config, primary: colorKey})}
                      className={`h-10 rounded-lg border flex items-center justify-center transition-all ${
                        config.primary === colorKey 
                          ? `${primaryColors[colorKey].borderSolid} ring-2 ring-${colorKey}-500/30 scale-110` 
                          : `${curTheme.border} hover:scale-105`
                      }`}
                    >
                      <div className={`h-4 w-4 rounded-full bg-${colorKey}-500`}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout */}
              <div className="space-y-3">
                <label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Navigation Layout</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'sidebar', label: 'Sidebar' },
                    { id: 'topbar', label: 'Top Bar' }
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setConfig({...config, layout: l.id})}
                      className={`py-3 px-3 rounded-lg border text-sm font-medium flex flex-col items-center gap-2 transition-all ${
                        config.layout === l.id 
                          ? `${curColor.bgFade} ${curColor.borderSolid} ${curColor.text}` 
                          : `${curTheme.border} ${curTheme.text} hover:${curTheme.surface}`
                      }`}
                    >
                      <IconLayoutList />
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
            
            <div className={`p-5 border-t ${curTheme.border} bg-black/5`}>
              <button 
                onClick={() => {
                  setConfig({ mode: 'dark', primary: 'cyan', layout: 'sidebar' });
                }}
                className={`w-full py-2 rounded-lg border ${curTheme.border} ${curTheme.text} text-sm font-medium hover:${curTheme.heading} hover:${curTheme.surface} transition-all`}
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
