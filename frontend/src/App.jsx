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
const IconPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const IconFilter = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;
const IconMessage = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const IconUsers = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconEdit = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const IconHistory = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><polyline points="12 7 12 12 15 15"></polyline></svg>;

function App() {
  const [healthStatus, setHealthStatus] = useState('Checking');
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  // Authentication State
  const [currentUser, setCurrentUser] = useState(null); 
  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');

  // Customization State
  const [config, setConfig] = useState({
    mode: 'dark',
    primary: 'cyan',
    layout: 'sidebar'
  });

  // Ticket Data State
  const initialTickets = [
    { id: 'TKT-1042', title: 'Multiple failed logins from unknown IP', description: 'Detected 50+ failed login attempts targeting the admin portal from IP 192.168.1.105 within 5 minutes.', severity: 'High', status: 'In Progress', assignedTo: 'Alex Chen', category: 'Access Control', createdAt: '2026-06-22T08:30:00Z', updatedAt: '2026-06-22T09:15:00Z', comments: [{ author: 'Alex Chen', time: '1h ago', text: 'Blocked the IP address at the firewall level. Investigating if any successful auths occurred before the block.' }] },
    { id: 'TKT-1041', title: 'Malware signature detected in email attachment', description: 'User reported a suspicious email. EDR flagged the attached PDF as containing a known macro payload.', severity: 'Critical', status: 'New', assignedTo: null, category: 'Phishing', createdAt: '2026-06-22T10:12:00Z', updatedAt: '2026-06-22T10:12:00Z', comments: [] },
    { id: 'TKT-1040', title: 'Anomalous outbound traffic spike', description: 'Database server DB-02 is sending an unusually high volume of data to an external AWS IP.', severity: 'Critical', status: 'In Progress', assignedTo: 'Sarah Jenkins', category: 'Data Exfiltration', createdAt: '2026-06-21T22:45:00Z', updatedAt: '2026-06-22T01:10:00Z', comments: [{ author: 'System', time: '10h ago', text: 'Auto-isolated DB-02 from external network routing.' }] },
  ];
  
  const [tickets, setTickets] = useState(initialTickets);
  const [ticketSearchQuery, setTicketSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({ title: '', description: '', severity: 'Medium', category: 'Network' });

  // User Data State
  const initialUsers = [
    { id: 'USR-002', name: 'Bob Analyst', email: 'bob@aegis.com', password: 'password123', role: 'Security Analyst', department: 'SOC Level 1', status: 'Active', lastLogin: '2026-06-22T09:00:00Z' },
    { id: 'USR-003', name: 'Charlie Ops', email: 'charlie@aegis.com', password: 'password123', role: 'Security Analyst', department: 'SOC Level 2', status: 'Disabled', lastLogin: '2026-06-15T14:30:00Z' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [auditLogs, setAuditLogs] = useState([
    { id: 'LOG-01', user: 'Admin User', action: 'Created Platform', target: 'System', timestamp: '2026-06-20T10:00:00Z' }
  ]);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showAuditLogs, setShowAuditLogs] = useState(false);
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'Security Analyst', department: '', status: 'Active' });

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then((res) => res.json())
      .then((data) => setHealthStatus(data.status === 'ok' ? 'Online' : 'Degraded'))
      .catch(() => setHealthStatus('Offline'));
  }, []);

  // Theme Config Maps
  const themes = {
    dark: {
      bg: 'bg-[#0B101E]', surface: 'bg-[#151C2C]/80', surfaceSolid: 'bg-[#0F1525]',
      border: 'border-slate-800/50', borderHover: 'hover:border-slate-700/80',
      text: 'text-slate-300', textMuted: 'text-slate-500', heading: 'text-white',
      input: 'bg-[#151C2C] border-slate-800 text-slate-200 placeholder-slate-500',
    },
    light: {
      bg: 'bg-slate-50', surface: 'bg-white/80', surfaceSolid: 'bg-white',
      border: 'border-slate-200', borderHover: 'hover:border-slate-300',
      text: 'text-slate-600', textMuted: 'text-slate-400', heading: 'text-slate-900',
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

  // Helper Badges
  const getSeverityBadge = (sev) => {
    switch (sev) {
      case 'Critical': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'High': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Low': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };
  const getTicketStatusBadge = (status) => {
    switch (status) {
      case 'New': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'In Progress': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Resolved': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Closed': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      default: return '';
    }
  };
  const getRoleBadge = (role) => {
    switch (role) {
      case 'Admin': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Manager': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Security Analyst': return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
      case 'Viewer': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };
  const getStatusBadge = (status) => status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border-rose-500/20';

  // Auth Handler
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    if (authForm.email === 'admin@gmail.com' && authForm.password === '123') {
      setCurrentUser({ id: 'ADMIN-001', name: 'Admin User', email: 'admin@gmail.com', role: 'Admin' });
    } else {
      const u = users.find(u => u.email === authForm.email && u.password === authForm.password);
      if (u) {
        if (u.status !== 'Active') {
          setAuthError('Your account has been disabled.');
        } else {
          setCurrentUser(u);
        }
      } else {
        setAuthError('Invalid email or password.');
      }
    }
  };

  // User Handlers
  const handleOpenUserModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setUserForm({ name: user.name, email: user.email, password: user.password, role: user.role, department: user.department, status: user.status });
    } else {
      setEditingUser(null);
      setUserForm({ name: '', email: '', password: '', role: 'Security Analyst', department: '', status: 'Active' });
    }
    setIsUserModalOpen(true);
  };
  const handleSaveUser = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    let actionLog = '';
    
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...userForm } : u));
      actionLog = `Updated User Details`;
    } else {
      const newUser = { id: `USR-00${users.length + 3}`, ...userForm, lastLogin: 'Never' };
      setUsers([newUser, ...users]);
      actionLog = `Created New User`;
    }
    setAuditLogs([{ id: `LOG-${auditLogs.length + 1}`, user: currentUser?.name || 'Admin', action: actionLog, target: userForm.name, timestamp }, ...auditLogs]);
    setIsUserModalOpen(false);
  };
  const handleToggleStatus = (user) => {
    const newStatus = user.status === 'Active' ? 'Disabled' : 'Active';
    setUsers(users.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
    setAuditLogs([{ id: `LOG-${auditLogs.length + 1}`, user: currentUser?.name || 'Admin', action: `${newStatus === 'Disabled' ? 'Disabled' : 'Enabled'} User`, target: user.name, timestamp: new Date().toISOString() }, ...auditLogs]);
  };

  // Ticket Handlers
  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newTkt = {
      id: `TKT-${1043 + tickets.length}`,
      ...newTicket,
      status: 'New',
      assignedTo: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      comments: []
    };
    setTickets([newTkt, ...tickets]);
    setIsTicketModalOpen(false);
    setNewTicket({ title: '', description: '', severity: 'Medium', category: 'Network' });
  };

  // Filtering
  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(userSearchQuery.toLowerCase()) || u.email.toLowerCase().includes(userSearchQuery.toLowerCase()));
  const filteredTickets = tickets.filter(t => t.title.toLowerCase().includes(ticketSearchQuery.toLowerCase()) || t.id.toLowerCase().includes(ticketSearchQuery.toLowerCase()));

  // -------------------------------------------------------------
  // AUTHENTICATION SCREEN
  // -------------------------------------------------------------
  if (!currentUser) {
    return (
      <div className={`flex min-h-screen w-full ${curTheme.bg} ${curTheme.text} font-sans overflow-hidden ${curColor.selection} transition-colors duration-500 relative`}>
        {config.mode === 'dark' && <div className={`absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] ${curColor.dot}/10 rounded-full blur-[150px] pointer-events-none transition-colors duration-700`}></div>}
        <div className="flex w-full z-10">
          <div className={`hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-between p-12 bg-gradient-to-br from-[#0B101E] to-[#151C2C]`}>
             <div className="absolute right-0 top-0 bottom-0 w-full opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at right, ${config.primary === 'cyan' ? '#06b6d4' : config.primary === 'emerald' ? '#10b981' : config.primary === 'purple' ? '#a855f7' : '#f59e0b'} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center ${curColor.glow}`}><span className="text-white"><IconShield /></span></div>
              <span className={`text-white font-bold text-2xl tracking-wide`}>Aegis One</span>
            </div>
            <div className="relative z-10 space-y-6">
              <div className={`inline-flex px-3 py-1 rounded-full ${curColor.bgFade} ${curColor.border} border text-xs font-semibold ${curColor.text} uppercase tracking-wider`}>Enterprise Security Platform</div>
              <h1 className="text-5xl font-black text-white leading-tight tracking-tight">Unified protection.<br/><span className={`text-transparent bg-clip-text bg-gradient-to-r ${curColor.from} ${curColor.to}`}>Total visibility.</span></h1>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed">Log in to your workspace.</p>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center p-8 ${curTheme.bg} transition-colors duration-300`}>
            <div className="absolute top-6 right-6 z-50">
              <button onClick={() => setIsCustomizing(true)} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${curTheme.surface} border ${curTheme.border} ${curTheme.textMuted} hover:${curColor.text} transition-all`} title="Customize UI Theme"><IconPalette /> <span className="text-xs font-semibold">Theme</span></button>
            </div>
             <form onSubmit={handleAuthSubmit} className={`p-8 rounded-2xl ${curTheme.surface} border ${curTheme.border} shadow-2xl space-y-6 backdrop-blur-xl max-w-md w-full animate-in fade-in slide-in-from-bottom-8 duration-700`}>
                <div className="text-center space-y-2 mb-6">
                  <h2 className={`text-3xl font-extrabold ${curTheme.heading} tracking-tight`}>Sign in</h2>
                  <p className={`${curTheme.textMuted} text-sm`}>Enter credentials to access Aegis One.</p>
                </div>
                {authError && <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-medium">{authError}</div>}
                <div className="space-y-2">
                  <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Email</label>
                  <div className="relative">
                    <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconUser /></span>
                    <input type="email" required placeholder="admin@gmail.com" value={authForm.email} onChange={(e) => setAuthForm({...authForm, email: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none ${curTheme.borderHover} focus:border-${config.primary}-500 focus:ring-1 ${curColor.ring} transition-all`}/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Password</label>
                  <div className="relative">
                    <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconLock /></span>
                    <input type="password" required placeholder="123" value={authForm.password} onChange={(e) => setAuthForm({...authForm, password: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none ${curTheme.borderHover} focus:border-${config.primary}-500 focus:ring-1 ${curColor.ring} transition-all`}/>
                  </div>
                </div>
                <button type="submit" className={`w-full flex justify-center items-center gap-2 py-3 rounded-xl font-bold text-white shadow-lg transition-all active:scale-[0.98] ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}>Sign In</button>
             </form>
          </div>
        </div>

        {/* Customization logic omitted for auth for brevity but still working... */}
        {isCustomizing && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsCustomizing(false)}></div>
            <div className={`relative w-80 h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
              <div className={`p-5 flex items-center justify-between border-b ${curTheme.border}`}>
                <h3 className={`font-bold ${curTheme.heading} flex items-center gap-2`}><IconPalette /> Theme</h3>
                <button onClick={() => setIsCustomizing(false)} className={`${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button>
              </div>
              <div className="p-6 overflow-y-auto flex-1 space-y-8">
                <div className="space-y-3"><label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Mode</label><div className="grid grid-cols-2 gap-3">{['dark', 'light'].map((m) => (<button key={m} onClick={() => setConfig({...config, mode: m})} className={`py-2 px-3 rounded-lg border text-sm font-medium capitalize transition-all ${config.mode === m ? `${curColor.bgFade} ${curColor.borderSolid} ${curColor.text}` : `${curTheme.border} ${curTheme.text} hover:${curTheme.surface}`}`}>{m}</button>))}</div></div>
                <div className="space-y-3"><label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Accent Color</label><div className="grid grid-cols-4 gap-3">{Object.keys(primaryColors).map((colorKey) => (<button key={colorKey} onClick={() => setConfig({...config, primary: colorKey})} className={`h-10 rounded-lg border flex items-center justify-center transition-all ${config.primary === colorKey ? `${primaryColors[colorKey].borderSolid} ring-2 ring-${colorKey}-500/30 scale-110` : `${curTheme.border} hover:scale-105`}`}><div className={`h-4 w-4 rounded-full bg-${colorKey}-500`}></div></button>))}</div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // MAIN APP SHELL
  // -------------------------------------------------------------
  const navItems = [
    { icon: <IconDashboard />, label: 'Dashboard', active: activeTab === 'Dashboard' },
    { icon: <IconAlertTriangle />, label: 'Incidents', active: activeTab === 'Incidents' },
    { icon: <IconTarget />, label: 'Vulnerabilities', active: activeTab === 'Vulnerabilities' },
    { icon: <IconActivity />, label: 'Threat Intel', active: activeTab === 'Threat Intel' },
  ];
  
  if (currentUser.role === 'Admin') {
    navItems.push({ icon: <IconUsers />, label: 'Users', active: activeTab === 'Users' });
  }

  return (
    <div className={`flex h-screen w-full ${curTheme.bg} ${curTheme.text} font-sans overflow-hidden ${curColor.selection} transition-colors duration-500 relative`}>
      {config.mode === 'dark' && (
        <>
          <div className={`absolute top-[-10%] left-[20%] w-[500px] h-[500px] ${curColor.dot}/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-700`}></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-700"></div>
        </>
      )}

      <div className={`flex flex-1 w-full ${config.layout === 'sidebar' ? 'flex-row' : 'flex-col'}`}>
        
        {config.layout === 'sidebar' && (
          <aside className={`w-64 border-r ${curTheme.border} ${curTheme.surfaceSolid}/80 backdrop-blur-2xl flex flex-col z-20 transition-all duration-300`}>
            <div className={`h-16 flex items-center px-6 border-b ${curTheme.border}`}>
              <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center ${curColor.glow}`}><span className="text-white"><IconShield /></span></div>
                <span className={`${curTheme.heading} font-bold text-lg tracking-wide`}>Aegis One</span>
              </div>
            </div>
            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
              <p className={`px-3 text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Main Menu</p>
              {navItems.map((item, i) => (
                <button key={i} onClick={() => setActiveTab(item.label)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${item.active ? `bg-gradient-to-r ${curColor.from}/10 to-transparent border ${curColor.border} ${curColor.text} ${curColor.insetShadow}` : `${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} border border-transparent`}`}>
                  <span className={item.active ? curColor.text : curTheme.textMuted}>{item.icon}</span>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
            <div className={`p-4 border-t ${curTheme.border}`}>
              <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-4`}>
                <div className="flex items-center gap-3 mb-2"><div className={`h-2.5 w-2.5 rounded-full ${healthStatus === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-rose-500'}`}></div><span className={`text-xs font-medium ${curTheme.text}`}>API Gateway</span></div>
                <p className={`text-[10px] ${curTheme.textMuted}`}>Latency: 24ms • 99.9% Uptime</p>
              </div>
            </div>
          </aside>
        )}

        <div className="flex-1 flex flex-col relative overflow-hidden">
          <header className={`h-16 flex items-center justify-between px-8 border-b ${curTheme.border} ${curTheme.surfaceSolid}/80 backdrop-blur-md z-10 transition-colors duration-300`}>
             {config.layout === 'topbar' ? (
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 mr-4">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center ${curColor.glow}`}><span className="text-white"><IconShield /></span></div>
                  <span className={`${curTheme.heading} font-bold text-lg tracking-wide`}>Aegis One</span>
                </div>
                <nav className="flex items-center gap-2">
                  {navItems.map((item, i) => (
                    <button key={i} onClick={() => setActiveTab(item.label)} className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${item.active ? `${curColor.bgFade} border ${curColor.border} ${curColor.text}` : `${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} border border-transparent`}`}>
                      <span className={item.active ? curColor.text : curTheme.textMuted}>{item.icon}</span><span className="font-medium text-sm">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            ) : (
              <div className="flex-1 flex items-center">
                <div className="relative w-96 group">
                  <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted} group-focus-within:${curColor.text} transition-colors`}><IconSearch /></span>
                  <input type="text" placeholder="Search across Aegis One..." className={`w-full ${curTheme.input} rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none ${curColor.border} focus:ring-1 ${curColor.ring} transition-all shadow-inner`}/>
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-5 ml-auto">
              <button onClick={() => setIsCustomizing(true)} className={`relative ${curTheme.textMuted} hover:${curColor.text} transition-colors p-1`} title="Customize UI"><IconPalette /></button>
              <div className="relative group">
                <button className={`flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 border ${curTheme.border} text-white hover:opacity-90 transition-all`}><IconUser /></button>
                <div className={`absolute right-0 top-full mt-2 w-48 ${curTheme.surfaceSolid} border ${curTheme.border} rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50`}>
                  <div className={`px-3 py-2 border-b ${curTheme.border} mb-1`}>
                    <p className={`text-sm font-bold ${curTheme.heading}`}>{currentUser.name}</p>
                    <p className={`text-xs ${curTheme.textMuted}`}>{currentUser.role}</p>
                  </div>
                  <button onClick={() => { setCurrentUser(null); setAuthForm({email:'', password:''}); setActiveTab('Dashboard'); }} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-rose-500 hover:bg-rose-500/10 transition-colors`}><IconLogOut /> Sign out</button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-8 z-0 scrollbar-hide">
            <div className="max-w-7xl mx-auto h-full flex flex-col gap-6">
              
              {/* DASHBOARD MODULE */}
              {activeTab === 'Dashboard' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className={`relative rounded-2xl ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} p-8 overflow-hidden shadow-xl transition-all duration-300`}>
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at right, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <h2 className={`text-3xl font-extrabold ${curTheme.heading} tracking-tight mb-2`}>Welcome back, {currentUser.name}</h2>
                        <p className={`${curTheme.textMuted} max-w-xl text-sm leading-relaxed`}>Global threat landscape is currently elevated. Critical patches are pending on 3 edge nodes.</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-3">
                          <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${curColor.from} ${curColor.to}`}>A-</span>
                          <div className="flex flex-col"><span className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Overall Score</span><span className="text-xs text-emerald-500 font-medium">+2.4% vs last week</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[{ title: 'Active Threats', value: '12', trend: '+3', up: false, color: 'rose' }, { title: 'Events (24h)', value: '1.2M', trend: '-5%', up: true, color: 'blue' }, { title: 'Vulnerabilities', value: '84', trend: '-12', up: true, color: 'amber' }, { title: 'Avg TTR', value: '45m', trend: '-15m', up: true, color: 'emerald' }].map((kpi, i) => (
                      <div key={i} className={`${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl p-5 ${curTheme.borderHover} transition-all duration-300 group shadow-lg`}>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>{kpi.title}</h3>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${kpi.up ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>{kpi.trend}</span>
                        </div>
                        <p className={`text-3xl font-bold ${curTheme.heading} group-hover:${curColor.text} transition-colors`}>{kpi.value}</p>
                        <div className="mt-4 flex gap-1 h-8 items-end opacity-50 group-hover:opacity-100 transition-opacity">
                          {[40, 70, 45, 90, 65, 80, 55].map((h, j) => <div key={j} className={`w-full rounded-t-sm bg-${kpi.color}-500/40`} style={{ height: `${h}%` }}></div>)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className={`lg:col-span-2 ${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl flex flex-col shadow-lg overflow-hidden`}>
                      <div className={`p-5 border-b ${curTheme.border} flex items-center justify-between`}><h3 className={`text-sm font-bold ${curTheme.heading} flex items-center gap-2`}><IconAlertTriangle /> Critical Incidents</h3><button onClick={()=>setActiveTab('Incidents')} className={`text-xs ${curColor.text} font-medium transition-colors opacity-80 hover:opacity-100`}>View All &rarr;</button></div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                          <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}><tr><th className="px-5 py-3 font-semibold">ID</th><th className="px-5 py-3 font-semibold">Description</th><th className="px-5 py-3 font-semibold">Severity</th><th className="px-5 py-3 font-semibold">Status</th></tr></thead>
                          <tbody className={`divide-y ${curTheme.border}`}>
                            {tickets.slice(0,3).map((row, i) => (
                              <tr key={i} className="hover:bg-black/5 transition-colors">
                                <td className={`px-5 py-3 font-mono text-xs ${curTheme.text}`}>{row.id}</td><td className={`px-5 py-3 ${curTheme.text}`}>{row.title}</td><td className="px-5 py-3"><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${getSeverityBadge(row.severity)}`}>{row.severity}</span></td><td className={`px-5 py-3 ${curTheme.textMuted} text-xs`}>{row.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className={`${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl flex flex-col shadow-lg overflow-hidden`}>
                      <div className={`p-5 border-b ${curTheme.border} flex items-center justify-between`}><h3 className={`text-sm font-bold ${curTheme.heading} flex items-center gap-2`}><IconTarget /> Threat Intelligence</h3></div>
                      <div className="p-5 flex-1 flex flex-col gap-4">
                        {[{ tag: 'APT29', detail: 'New phishing campaign targets finance sector', time: '2h ago' }, { tag: 'CVE-2026-104', detail: 'Zero-day in popular VPN gateway published', time: '5h ago' }, { tag: 'Ransomware', detail: 'LockBit variant utilizing new obfuscation', time: '12h ago' }].map((intel, i) => (
                          <div key={i} className="flex gap-3 group">
                            <div className="relative mt-1"><div className={`w-2 h-2 rounded-full ${curColor.dot} group-hover:${curColor.glow} transition-shadow`}></div>{i !== 2 && <div className={`absolute top-3 left-1 w-px h-10 ${curTheme.border.replace('border-', 'bg-').split('/')[0]}`}></div>}</div>
                            <div><div className="flex items-center gap-2 mb-1"><span className={`text-[10px] font-bold ${curColor.text} uppercase tracking-wider`}>{intel.tag}</span><span className={`text-[10px] ${curTheme.textMuted}`}>{intel.time}</span></div><p className={`text-xs ${curTheme.text} leading-relaxed group-hover:${curTheme.heading} transition-colors`}>{intel.detail}</p></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* INCIDENTS MODULE */}
              {activeTab === 'Incidents' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div><h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight`}>Incident Management</h2><p className={`${curTheme.textMuted} text-sm`}>Track, assign, and resolve security alerts and tickets.</p></div>
                    <div className="flex gap-3"><button onClick={() => setIsTicketModalOpen(true)} className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-medium text-sm transition-all shadow-lg active:scale-95 ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}><IconPlus /> Create Ticket</button></div>
                  </div>
                  <div className="relative w-full md:w-96"><span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconSearch /></span><input type="text" placeholder="Search tickets by ID, title, or assignee..." value={ticketSearchQuery} onChange={e => setTicketSearchQuery(e.target.value)} className={`w-full ${curTheme.surface} border ${curTheme.border} rounded-lg pl-10 pr-4 py-2 text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}/></div>
                  <div className={`flex-1 ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} rounded-xl overflow-hidden shadow-xl flex flex-col`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}><tr><th className="px-6 py-4 font-semibold">Ticket</th><th className="px-6 py-4 font-semibold">Severity</th><th className="px-6 py-4 font-semibold">Status</th><th className="px-6 py-4 font-semibold">Assigned To</th><th className="px-6 py-4 font-semibold">Created</th><th className="px-6 py-4 font-semibold text-right">Action</th></tr></thead>
                        <tbody className={`divide-y ${curTheme.border}`}>
                          {filteredTickets.map(ticket => (
                            <tr key={ticket.id} className="hover:bg-black/5 transition-colors cursor-pointer" onClick={() => setSelectedTicket(ticket)}>
                              <td className="px-6 py-4"><div className="flex flex-col"><span className={`font-medium ${curTheme.heading} mb-1`}>{ticket.title}</span><div className="flex gap-2 items-center"><span className={`font-mono text-[10px] ${curTheme.textMuted}`}>{ticket.id}</span><span className="text-[10px] text-slate-500">•</span><span className={`text-[10px] ${curTheme.textMuted}`}>{ticket.category}</span></div></div></td>
                              <td className="px-6 py-4"><span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getSeverityBadge(ticket.severity)}`}>{ticket.severity}</span></td>
                              <td className="px-6 py-4"><span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getTicketStatusBadge(ticket.status)}`}>{ticket.status}</span></td>
                              <td className="px-6 py-4">{ticket.assignedTo ? <div className="flex items-center gap-2"><div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">{ticket.assignedTo.charAt(0)}</div><span className={curTheme.text}>{ticket.assignedTo}</span></div> : <span className={`text-xs italic ${curTheme.textMuted}`}>Unassigned</span>}</td>
                              <td className={`px-6 py-4 text-xs ${curTheme.textMuted}`}><div className="flex items-center gap-1"><IconClock /> {new Date(ticket.createdAt).toLocaleDateString()}</div></td>
                              <td className="px-6 py-4 text-right"><button className={`text-xs ${curColor.text} font-medium hover:underline`}>View Details</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* USERS MODULE */}
              {activeTab === 'Users' && currentUser.role === 'Admin' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight`}>User & Access Management</h2>
                      <p className={`${curTheme.textMuted} text-sm`}>Manage security operators, roles, and platform permissions.</p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setShowAuditLogs(!showAuditLogs)} className={`px-4 py-2 flex items-center gap-2 rounded-lg ${showAuditLogs ? `${curColor.bgFade} border-${config.primary}-500/30 ${curColor.text}` : `${curTheme.surfaceSolid} border ${curTheme.border} ${curTheme.text}`} text-sm font-medium transition-all`}>
                        <IconHistory /> {showAuditLogs ? 'Hide Audit Logs' : 'View Audit Logs'}
                      </button>
                      <button onClick={() => handleOpenUserModal()} className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-medium text-sm transition-all shadow-lg active:scale-95 ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}>
                        <IconPlus /> Add User
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6 h-full">
                    <div className={`flex-1 flex flex-col gap-4`}>
                      <div className="relative w-full md:w-96">
                        <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconSearch /></span>
                        <input type="text" placeholder="Search by name, email, or role..." value={userSearchQuery} onChange={e => setUserSearchQuery(e.target.value)} className={`w-full ${curTheme.surface} border ${curTheme.border} rounded-lg pl-10 pr-4 py-2 text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}/>
                      </div>

                      <div className={`flex-1 ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} rounded-xl overflow-hidden shadow-xl flex flex-col`}>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className={`bg-black/5 text-xs ${curColor.text} uppercase tracking-wider`}>
                              <tr>
                                <th className="px-6 py-4 font-semibold">User</th>
                                <th className="px-6 py-4 font-semibold">Role</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Last Login</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody className={`divide-y ${curTheme.border}`}>
                              {filteredUsers.map(user => (
                                <tr key={user.id} className={`hover:bg-black/5 transition-colors ${user.status === 'Disabled' ? 'opacity-60' : ''}`}>
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                      <div className={`h-8 w-8 rounded-full ${user.status === 'Disabled' ? 'bg-slate-700' : curColor.bgFade} flex items-center justify-center text-xs font-bold ${user.status === 'Disabled' ? 'text-slate-400' : curColor.text}`}>{user.name.charAt(0)}</div>
                                      <div className="flex flex-col"><span className={`font-medium ${curTheme.heading}`}>{user.name}</span><span className={`text-[10px] ${curTheme.textMuted}`}>{user.email}</span></div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4"><div className="flex flex-col gap-1 items-start"><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getRoleBadge(user.role)}`}>{user.role}</span><span className={`text-[10px] ${curTheme.textMuted}`}>{user.department}</span></div></td>
                                  <td className="px-6 py-4"><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getStatusBadge(user.status)}`}>{user.status}</span></td>
                                  <td className={`px-6 py-4 text-xs ${curTheme.textMuted}`}>{user.lastLogin !== 'Never' ? new Date(user.lastLogin).toLocaleString() : 'Never'}</td>
                                  <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-3">
                                      <button onClick={() => handleToggleStatus(user)} className={`text-xs font-medium hover:underline ${user.status === 'Active' ? 'text-rose-500' : 'text-emerald-500'}`}>{user.status === 'Active' ? 'Disable' : 'Enable'}</button>
                                      <button onClick={() => handleOpenUserModal(user)} className={`text-xs ${curColor.text} font-medium hover:underline flex items-center gap-1`}><IconEdit /> Edit</button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {showAuditLogs && (
                      <div className={`w-80 flex flex-col ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} rounded-xl shadow-xl overflow-hidden animate-in slide-in-from-right-8 duration-300`}>
                        <div className={`p-4 border-b ${curTheme.border} flex items-center gap-2`}><IconHistory /><h3 className={`font-bold ${curTheme.heading} text-sm`}>Audit Trail</h3></div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                          {auditLogs.map(log => (
                            <div key={log.id} className="relative pl-4 border-l-2 border-slate-700 pb-2">
                              <div className={`absolute w-2 h-2 rounded-full ${curColor.dot} -left-[5px] top-1`}></div>
                              <p className={`text-xs font-semibold ${curTheme.heading} mb-1`}>{log.action}</p>
                              <p className={`text-[10px] ${curTheme.textMuted} mb-1`}>Target: {log.target}</p>
                              <div className="flex justify-between items-center mt-1"><span className={`text-[10px] ${curTheme.textMuted}`}>By {log.user}</span><span className={`text-[10px] ${curTheme.textMuted}`}>{new Date(log.timestamp).toLocaleTimeString()}</span></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* OTHER TABS */}
              {!['Dashboard', 'Incidents', 'Users'].includes(activeTab) && (
                <div className={`flex flex-col items-center justify-center h-[60vh] ${curTheme.surface} border ${curTheme.border} rounded-2xl animate-in fade-in duration-500`}>
                  <div className={`h-16 w-16 rounded-full ${curColor.bgFade} flex items-center justify-center ${curColor.text} mb-4`}><IconDashboard /></div>
                  <h2 className={`text-2xl font-bold ${curTheme.heading}`}>{activeTab} Module</h2>
                  <p className={`${curTheme.textMuted} mt-2`}>This module is currently under construction.</p>
                  <button onClick={() => setActiveTab('Dashboard')} className={`mt-6 px-4 py-2 ${curTheme.surfaceSolid} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} hover:${curTheme.heading} transition-all`}>Go to Dashboard</button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* DRAWERS & MODALS */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setSelectedTicket(null)}></div>
          <div className={`relative w-full max-w-2xl h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className={`p-6 flex items-start justify-between border-b ${curTheme.border}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-3"><span className={`font-mono text-sm ${curColor.text} font-bold`}>{selectedTicket.id}</span><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getTicketStatusBadge(selectedTicket.status)}`}>{selectedTicket.status}</span><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityBadge(selectedTicket.severity)}`}>{selectedTicket.severity}</span></div>
                <h3 className={`text-xl font-bold ${curTheme.heading}`}>{selectedTicket.title}</h3>
              </div>
              <button onClick={() => setSelectedTicket(null)} className={`p-2 rounded-lg ${curTheme.surface} ${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              <div className="grid grid-cols-2 gap-6 p-4 rounded-xl bg-black/5 border border-slate-800/20">
                <div><span className={`block text-xs font-semibold ${curTheme.textMuted} uppercase mb-1`}>Category</span><span className={`text-sm ${curTheme.heading}`}>{selectedTicket.category}</span></div>
                <div><span className={`block text-xs font-semibold ${curTheme.textMuted} uppercase mb-1`}>Assigned To</span><span className={`text-sm ${curTheme.heading}`}>{selectedTicket.assignedTo || 'Unassigned'}</span></div>
              </div>
              <div><h4 className={`text-sm font-bold ${curTheme.heading} mb-3`}>Description</h4><p className={`text-sm ${curTheme.text} leading-relaxed whitespace-pre-wrap`}>{selectedTicket.description}</p></div>
              <div className={`border-t ${curTheme.border} pt-8`}>
                <h4 className={`text-sm font-bold ${curTheme.heading} mb-6 flex items-center gap-2`}><IconMessage /> Activity Timeline</h4>
                <div className="space-y-6">
                  {selectedTicket.comments.map((c, i) => (
                    <div key={i} className="flex gap-4"><div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">{c.author.charAt(0)}</div><div className={`flex-1 p-4 rounded-xl ${curTheme.surface} border ${curTheme.border}`}><div className="flex items-center justify-between mb-2"><span className={`text-sm font-bold ${curTheme.heading}`}>{c.author}</span><span className={`text-xs ${curTheme.textMuted}`}>{c.time}</span></div><p className={`text-sm ${curTheme.text}`}>{c.text}</p></div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsTicketModalOpen(false)}></div>
          <div className={`relative w-full max-w-lg ${curTheme.surfaceSolid} border ${curTheme.border} rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden`}>
            <div className={`px-6 py-4 border-b ${curTheme.border} flex justify-between items-center bg-black/5`}><h3 className={`text-lg font-bold ${curTheme.heading}`}>Create New Ticket</h3><button onClick={() => setIsTicketModalOpen(false)} className={`${curTheme.textMuted} hover:${curTheme.heading}`}><IconX /></button></div>
            <form onSubmit={handleCreateTicket} className="p-6 space-y-5">
              <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Issue Title</label><input required type="text" value={newTicket.title} onChange={e => setNewTicket({...newTicket, title: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Severity</label><select value={newTicket.severity} onChange={e => setNewTicket({...newTicket, severity: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Category</label><select value={newTicket.category} onChange={e => setNewTicket({...newTicket, category: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Network</option><option>Access Control</option><option>Phishing</option></select></div>
              </div>
              <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Description</label><textarea required value={newTicket.description} onChange={e => setNewTicket({...newTicket, description: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${curColor.ring} h-24 resize-none`}></textarea></div>
              <div className={`pt-4 border-t ${curTheme.border} flex justify-end gap-3`}><button type="button" onClick={() => setIsTicketModalOpen(false)} className={`px-4 py-2 rounded-lg border ${curTheme.border} text-sm font-medium ${curTheme.text} hover:${curTheme.surface}`}>Cancel</button><button type="submit" className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${config.primary === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'}`}>Create</button></div>
            </form>
          </div>
        </div>
      )}

      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsUserModalOpen(false)}></div>
          <div className={`relative w-full max-w-lg ${curTheme.surfaceSolid} border ${curTheme.border} rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden`}>
            <div className={`px-6 py-4 border-b ${curTheme.border} flex justify-between items-center bg-black/5`}><h3 className={`text-lg font-bold ${curTheme.heading}`}>{editingUser ? 'Edit User' : 'Add New User'}</h3><button onClick={() => setIsUserModalOpen(false)} className={`${curTheme.textMuted} hover:${curTheme.heading}`}><IconX /></button></div>
            <form onSubmit={handleSaveUser} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2"><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Full Name</label><input required type="text" value={userForm.name} onChange={e => setUserForm({...userForm, name: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`} /></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Email Address</label><input required type="email" value={userForm.email} onChange={e => setUserForm({...userForm, email: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`} /></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Password</label><input required={!editingUser} type="text" value={userForm.password} onChange={e => setUserForm({...userForm, password: e.target.value})} placeholder={editingUser ? "(unchanged)" : "Enter password"} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`} /></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>RBAC Role</label><select value={userForm.role} onChange={e => setUserForm({...userForm, role: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Admin</option><option>Manager</option><option>Security Analyst</option><option>Viewer</option></select></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Department/Team</label><input type="text" value={userForm.department} onChange={e => setUserForm({...userForm, department: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`} /></div>
                {editingUser && <div className="col-span-2 mt-2"><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Account Status</label><select value={userForm.status} onChange={e => setUserForm({...userForm, status: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Active</option><option>Disabled</option></select></div>}
              </div>
              <div className={`pt-4 border-t ${curTheme.border} flex justify-end gap-3`}><button type="button" onClick={() => setIsUserModalOpen(false)} className={`px-4 py-2 rounded-lg border ${curTheme.border} text-sm font-medium ${curTheme.text} hover:${curTheme.surface}`}>Cancel</button><button type="submit" className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${config.primary === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'}`}>{editingUser ? 'Save' : 'Create User'}</button></div>
            </form>
          </div>
        </div>
      )}

      {isCustomizing && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsCustomizing(false)}></div>
          <div className={`relative w-80 h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className={`p-5 flex items-center justify-between border-b ${curTheme.border}`}><h3 className={`font-bold ${curTheme.heading} flex items-center gap-2`}><IconPalette /> Theme</h3><button onClick={() => setIsCustomizing(false)} className={`${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button></div>
            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              <div className="space-y-3"><label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Mode</label><div className="grid grid-cols-2 gap-3">{['dark', 'light'].map((m) => (<button key={m} onClick={() => setConfig({...config, mode: m})} className={`py-2 px-3 rounded-lg border text-sm font-medium capitalize transition-all ${config.mode === m ? `${curColor.bgFade} ${curColor.borderSolid} ${curColor.text}` : `${curTheme.border} ${curTheme.text} hover:${curTheme.surface}`}`}>{m}</button>))}</div></div>
              <div className="space-y-3"><label className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Accent Color</label><div className="grid grid-cols-4 gap-3">{Object.keys(primaryColors).map((colorKey) => (<button key={colorKey} onClick={() => setConfig({...config, primary: colorKey})} className={`h-10 rounded-lg border flex items-center justify-center transition-all ${config.primary === colorKey ? `${primaryColors[colorKey].borderSolid} ring-2 ring-${colorKey}-500/30 scale-110` : `${curTheme.border} hover:scale-105`}`}><div className={`h-4 w-4 rounded-full bg-${colorKey}-500`}></div></button>))}</div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
