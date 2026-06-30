import React, { useState, useEffect } from 'react';

// Custom SVG Icons
const IconDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>;
const IconAlertTriangle = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const IconActivity = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const IconSearch = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const IconTarget = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const IconPalette = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>;
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconLayoutList = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="14" width="7" height="7"></rect><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>;
const IconLogOut = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const IconLock = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const IconPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const IconMessage = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const IconUsers = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconEdit = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const IconFileText = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const IconAlertCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const IconHash = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>;
const IconDatabase = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const IconServer = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconFilter = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;

const IconTerminal = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>;
const IconCpu = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>;
const IconPlusCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>;
const IconEye = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const IconPlay = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
const IconPause = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>;
const IconRefresh = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>;

const IconSend = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
const IconBookmark = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
const IconSparkles = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"></path></svg>;
const IconBot = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4M8 16h8"></path></svg>;

const IconTrendingUp = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
const IconAward = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
const IconDownload = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const IconPrinter = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>;
const IconBriefcase = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;

const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const IconSliders = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>;
const IconLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
const IconKey = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>;
const IconShieldAlert = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const IconDownloadCloud = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>;
const IconUploadCloud = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>;

const API_BASE = "http://localhost:8000";

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

  // Dynamic Data State
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [ticketSearchQuery, setTicketSearchQuery] = useState('');
  const [ticketFilterSeverity, setTicketFilterSeverity] = useState('All');
  const [ticketFilterStatus, setTicketFilterStatus] = useState('All');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketDetailTab, setTicketDetailTab] = useState('Overview');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({ title: '', description: '', severity: 'Medium', category: 'Network', source: 'Manual', status: 'New' });
  const [ticketNoteInput, setTicketNoteInput] = useState('');

  // Threat Intel State
  const [threatSearchQuery, setThreatSearchQuery] = useState('');
  const [threatFilterType, setThreatFilterType] = useState('All');
  const [threatFilterConfidence, setThreatFilterConfidence] = useState('All');
  const [selectedThreat, setSelectedThreat] = useState(null);
  const [threatDetailTab, setThreatDetailTab] = useState('Overview');
  const [threatNoteInput, setThreatNoteInput] = useState('');

  const [threats, setThreats] = useState([
    { id: 'IOC-84920', value: '185.15.58.22', type: 'IP Address', severity: 'Critical', confidence: 'High', source: 'AlienVault OTX', status: 'Active', tags: ['botnet', 'c2'], firstSeen: '2024-05-10T08:00:00Z', lastSeen: '2024-05-15T12:00:00Z', enrichment: { location: 'Russia', asn: 'AS20860', rep: 'Malicious' }, notes: [] },
    { id: 'IOC-84921', value: 'login-secure-update.com', type: 'Domain', severity: 'High', confidence: 'Medium', source: 'Internal Honeypot', status: 'Active', tags: ['phishing', 'credential-harvesting'], firstSeen: '2024-05-14T09:30:00Z', lastSeen: '2024-05-14T09:30:00Z', enrichment: { registrar: 'NameCheap', created: '2024-05-13', rep: 'Suspicious' }, notes: [{date: '2024-05-14T10:00:00Z', note: 'Blocked on edge firewall.', author: 'System'}] },
    { id: 'IOC-84922', value: '9a2a7f5a9fe1c...', type: 'Hash', severity: 'High', confidence: 'High', source: 'VirusTotal API', status: 'Investigating', tags: ['ransomware', 'lockbit'], firstSeen: '2024-05-12T14:20:00Z', lastSeen: '2024-05-15T09:00:00Z', enrichment: { family: 'LockBit 3.0', vt_score: '58/72', file_type: 'Win32 EXE' }, notes: [] },
    { id: 'IOC-84923', value: 'MuddyWater Campaign', type: 'Campaign', severity: 'Critical', confidence: 'Low', source: 'Mandiant', status: 'Inactive', tags: ['apt', 'espionage'], firstSeen: '2023-11-01T00:00:00Z', lastSeen: '2024-01-15T00:00:00Z', enrichment: { target_sectors: 'Telecomm, Government', actor: 'MuddyWater' }, notes: [] }
  ]);
  
  // Vulnerability State
  const [vulnSearchQuery, setVulnSearchQuery] = useState('');
  const [vulnFilterSeverity, setVulnFilterSeverity] = useState('All');
  const [vulnFilterStatus, setVulnFilterStatus] = useState('All');
  const [selectedVuln, setSelectedVuln] = useState(null);
  const [vulnDetailTab, setVulnDetailTab] = useState('Overview');
  const [vulnRemediationNote, setVulnRemediationNote] = useState('');
  
  const [vulnerabilities, setVulnerabilities] = useState([
    { id: 'CVE-2023-44487', title: 'HTTP/2 Rapid Reset Attack', severity: 'Critical', asset: 'web-prod-01', status: 'Open', exploitability: 'High', discovered: '2023-10-10T08:00:00Z', remediation: 'Pending Patch', cvss: 9.8, riskScore: 98, description: 'The HTTP/2 protocol allows a denial of service (server resource consumption) because request cancellation can reset many streams quickly.', remediationNotes: [] },
    { id: 'CVE-2021-44228', title: 'Log4Shell in Authentication Service', severity: 'Critical', asset: 'auth-svc-cluster', status: 'In Progress', exploitability: 'High', discovered: '2021-12-10T14:30:00Z', remediation: 'Patching', cvss: 10.0, riskScore: 100, description: 'Apache Log4j2 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints.', remediationNotes: [{date: '2021-12-11T09:00:00Z', note: 'Applying patch 2.15.0', author: 'System'}] },
    { id: 'VULN-INTERNAL-092', title: 'Outdated Nginx Version', severity: 'Medium', asset: 'proxy-gateway', status: 'Open', exploitability: 'Low', discovered: '2024-02-15T11:20:00Z', remediation: 'Scheduled Maintenance', cvss: 5.3, riskScore: 45, description: 'Nginx version 1.18.0 is running, which is missing several security updates. Recommend upgrading to 1.24.0.', remediationNotes: [] },
    { id: 'CVE-2024-3094', title: 'XZ Utils Backdoor', severity: 'High', asset: 'db-backup-server', status: 'Resolved', exploitability: 'Medium', discovered: '2024-03-29T10:00:00Z', remediation: 'Downgraded Package', cvss: 10.0, riskScore: 85, description: 'Malicious code was discovered in the upstream tarballs of xz, starting with version 5.6.0.', remediationNotes: [{date: '2024-03-30T10:00:00Z', note: 'Downgraded xz to 5.4.6', author: 'Security Team'}] }
  ]);

  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'Security Analyst', department: '', status: 'Active' });
  const [assigneeForm, setAssigneeForm] = useState(''); // Added for ticket assignment

  // SIEM / Log Management State
  const [siemSubTab, setSiemSubTab] = useState('Overview');
  const [selectedLog, setSelectedLog] = useState(null);
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const [siemSearch, setSiemSearch] = useState('');
  const [siemFilterCategory, setSiemFilterCategory] = useState('All');
  const [siemFilterSeverity, setSiemFilterSeverity] = useState('All');
  const [siemFilterStatus, setSiemFilterStatus] = useState('All');
  const [siemFilterTimeRange, setSiemFilterTimeRange] = useState('Last 24h');

  const [siemCorrelationRules, setSiemCorrelationRules] = useState([
    { rule_id: 'R-01', name: 'Brute Force Detection', description: 'Detects more than 5 failed login attempts from the same source IP within 1 minute.', category: 'Authentication', severity: 'High', status: 'Enabled', alertsGenerated: 4 },
    { rule_id: 'R-02', name: 'Port Scan Detection', description: 'Detects multiple rapid connection requests to different ports from a single IP address.', category: 'Network', severity: 'Medium', status: 'Enabled', alertsGenerated: 2 },
    { rule_id: 'R-03', name: 'Malware Execution Indicator', description: 'Detects execution attempts of known malicious binaries or script indicators.', category: 'Endpoint', severity: 'Critical', status: 'Enabled', alertsGenerated: 1 },
    { rule_id: 'R-04', name: 'SQL Injection Attempt', description: 'Detects common SQL syntax patterns in HTTP application payloads.', category: 'Application', severity: 'High', status: 'Enabled', alertsGenerated: 0 },
    { rule_id: 'R-05', name: 'Phishing Email Link Clicked', description: 'Detects outbound traffic to categorized malicious/phishing domains from internal email clients.', category: 'Email', severity: 'Critical', status: 'Disabled', alertsGenerated: 0 }
  ]);

  const [siemLogs, setSiemLogs] = useState([
    { event_id: 'LOG-3001', category: 'Authentication', source: 'Active Directory', host_user: '192.168.10.45 / j.doe', message: 'User login failed. Incorrect password.', severity: 'Low', timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), status: 'Active', correlation: 'No correlation rule matched' },
    { event_id: 'LOG-3002', category: 'Network', source: 'Edge Firewall', host_user: '185.15.58.22', message: 'Inbound connection blocked. Port 22 (SSH).', severity: 'Medium', timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(), status: 'Correlated', correlation: 'Triggered Port Scan Detection' },
    { event_id: 'LOG-3003', category: 'Endpoint', source: 'CrowdStrike Falcon', host_user: 'DESKTOP-8A4F / a.smith', message: 'Suspicious PowerShell execution blocked: encoded command syntax detected.', severity: 'Critical', timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(), status: 'Flagged', correlation: 'Triggered Malware Execution Indicator' },
    { event_id: 'LOG-3004', category: 'Application', source: 'Nginx Web Server', host_user: '203.0.113.88', message: 'HTTP 404 - Request to /admin/config.php.', severity: 'Low', timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(), status: 'Active', correlation: 'No correlation rule matched' },
    { event_id: 'LOG-3005', category: 'Email', source: 'Office 365 Defender', host_user: 'ceo@aegisone.com', message: 'Inbound phishing email quarantined. Subject: "Urgent Payment Request Required".', severity: 'High', timestamp: new Date(Date.now() - 65 * 60 * 1000).toISOString(), status: 'Correlated', correlation: 'Quarantine Action Performed' },
    { event_id: 'LOG-3006', category: 'Authentication', source: 'Okta SSO', host_user: '198.51.100.12 / m.jones', message: 'MFA challenge failed. Session aborted.', severity: 'Medium', timestamp: new Date(Date.now() - 90 * 60 * 1000).toISOString(), status: 'Active', correlation: 'No correlation rule matched' },
    { event_id: 'LOG-3007', category: 'Network', source: 'Cisco ISE', host_user: '10.100.20.154 / HR-LAPTOP', message: 'Network admission control: unauthorized device connected.', severity: 'Medium', timestamp: new Date(Date.now() - 120 * 60 * 1000).toISOString(), status: 'Active', correlation: 'No correlation rule matched' },
    { event_id: 'LOG-3008', category: 'Application', source: 'PostgreSQL DB Server', host_user: 'securityops_db / postgres', message: 'Database login error. Root credentials rejected.', severity: 'High', timestamp: new Date(Date.now() - 150 * 60 * 1000).toISOString(), status: 'Active', correlation: 'No correlation rule matched' },
    { event_id: 'LOG-3009', category: 'Email', source: 'Proofpoint', host_user: 'sales-rep@aegisone.com', message: 'Outbound email blocked. Contains suspected Credit Card data (DLP Rule 14).', severity: 'High', timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(), status: 'Flagged', correlation: 'Data Leak Prevention Triggered' },
    { event_id: 'LOG-3010', category: 'Endpoint', source: 'Windows Defender', host_user: 'FINANCE-PC-01 / t.brown', message: 'Threat detected: Win32/Mimikatz.A credentials dumper. Threat removed.', severity: 'Critical', timestamp: new Date(Date.now() - 210 * 60 * 1000).toISOString(), status: 'Correlated', correlation: 'Triggered Malware Execution Indicator' }
  ]);

  const [liveStreamLogs, setLiveStreamLogs] = useState([
    { event_id: 'LOG-STREAM-001', category: 'Network', source: 'Edge Firewall', host_user: '8.8.8.8', message: 'DNS query resolution request for standard root servers.', severity: 'Info', timestamp: new Date().toISOString(), status: 'Active', correlation: 'No correlation rule matched' }
  ]);

  // Simulated Real-Time Log Streaming Effect
  useEffect(() => {
    if (!isLiveStreaming) return;
    const interval = setInterval(() => {
      const categories = ['Authentication', 'Network', 'Endpoint', 'Application', 'Email'];
      const severities = ['Info', 'Low', 'Medium', 'High', 'Critical'];
      const sources = {
        'Authentication': ['Active Directory', 'Okta SSO', 'Linux PAM'],
        'Network': ['Edge Firewall', 'Core Switch', 'Internal Router'],
        'Endpoint': ['CrowdStrike Falcon', 'Windows Defender', 'OSQuery Daemon'],
        'Application': ['Nginx Web Server', 'PostgreSQL DB Server', 'FastAPI App'],
        'Email': ['Office 365 Defender', 'Proofpoint Email Gateway', 'GSuite Security Logs']
      };
      
      const category = categories[Math.floor(Math.random() * categories.length)];
      const severity = severities[Math.floor(Math.random() * severities.length)];
      const sourceList = sources[category];
      const source = sourceList[Math.floor(Math.random() * sourceList.length)];
      
      const hosts = ['192.168.1.104', '10.0.50.22', '185.15.58.22', 'user.test@aegisone.com', 'server-prod-02', 'admin-workstation-09'];
      const host_user = hosts[Math.floor(Math.random() * hosts.length)];
      
      const messages = {
        'Authentication': ['User login successful.', 'Failed login attempt. IP blocked temporary.', 'Password reset request initiated.', 'Session expired for inactive user.'],
        'Network': ['Connection accepted from secure gateway.', 'Dropped packet from blacklisted IP address.', 'UDP port scan detected.', 'SPI firewall rules updated successfully.'],
        'Endpoint': ['System scan completed. 0 threats found.', 'File write permission error on secure directory.', 'Process launched: explorer.exe.', 'User added to local Administrators group.'],
        'Application': ['API Gateway response status 200 OK.', 'Internal database query timeout alert.', 'SSL handshake failed. Client version mismatch.', 'Session storage cache cleared.'],
        'Email': ['Spam email blocked and deleted.', 'Email attachment scanned: Clean.', 'Spam detection engine version updated.', 'User reported suspicious phishing email.']
      };
      const message = messages[category][Math.floor(Math.random() * messages[category].length)];
      
      const newLog = {
        event_id: `LOG-STREAM-${Math.floor(10000 + Math.random() * 90000)}`,
        category,
        source,
        host_user,
        message,
        severity,
        timestamp: new Date().toISOString(),
        status: severity === 'Critical' || severity === 'High' ? 'Flagged' : 'Active',
        correlation: severity === 'Critical' ? 'Triggered Automated Alert Engine' : 'No correlation rule matched'
      };
      
      setLiveStreamLogs(prev => [newLog, ...prev].slice(0, 100));
      // Also occasionally append to general siemLogs
      setSiemLogs(prev => [newLog, ...prev].slice(0, 200));
    }, 3000);
    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  // SOC Copilot / AI Assistant State
  const [copilotMessages, setCopilotMessages] = useState([
    {
      role: 'assistant',
      text: 'AegisOne SOC Copilot initialized. I can assist with alert summaries, incident remediation, risk intelligence, or security log queries. What security context would you like to explore today?',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      links: null
    }
  ]);
  const [copilotInput, setCopilotInput] = useState('');
  const [copilotHistory, setCopilotHistory] = useState([
    {
      id: 'SAVED-01',
      title: 'Remediation Steps: CVE-2023-44487',
      category: 'Remediation',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      content: '1. Update Nginx packages to latest mainline release.\n2. Configure max_concurrent_streams limit to appropriate levels (e.g. 100).\n3. Enable request rate limiting at edge proxies.'
    },
    {
      id: 'SAVED-02',
      title: 'Alert Summary: IOC-84920 Russian IP',
      category: 'Alert Analysis',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      content: 'IP address 185.15.58.22 exhibits known Command and Control behavior matching LockBit botnet patterns. Active blocks are confirmed on primary firewalls.'
    }
  ]);
  const [copilotIsTyping, setCopilotIsTyping] = useState(false);

  const handleSendCopilotMessage = (customText = null) => {
    const textToSend = customText || copilotInput;
    if (!textToSend.trim()) return;

    const userMsg = {
      role: 'user',
      text: textToSend,
      timestamp: new Date().toISOString(),
      links: null
    };

    setCopilotMessages(prev => [...prev, userMsg]);
    if (!customText) setCopilotInput('');
    setCopilotIsTyping(true);

    // Simulate response generation
    setTimeout(() => {
      let replyText = 'I have analyzed your query. To protect the organization, check that your local endpoints have current security definitions and verify edge routing logs.';
      let links = null;

      const lower = textToSend.toLowerCase();
      if (lower.includes('summarize') || lower.includes('alert') || lower.includes('incident')) {
        replyText = `Based on current AegisOne metrics, we have ${tickets.length} active incidents. The most critical incident is "${tickets[0]?.title || 'none'}" categorized as "${tickets[0]?.category || 'none'}". Immediate remediation of critical vulnerabilities is advised to decrease risk.`;
        if (tickets.length > 0) {
          links = { type: 'incident', item: tickets[0] };
        }
      } else if (lower.includes('remed') || lower.includes('steps') || lower.includes('remediation') || lower.includes('malware') || lower.includes('cve')) {
        replyText = `Recommended SOC Remediation Strategy:\n1. Isolate the affected host systems immediately using EDR firewall block.\n2. Force password resets for affected identities.\n3. Validate signatures on incoming email relays.\n4. Deploy updated CVE patches across proxy gateways.`;
        if (vulnerabilities.length > 0) {
          links = { type: 'vulnerability', item: vulnerabilities[0] };
        }
      } else if (lower.includes('threat') || lower.includes('intel') || lower.includes('ioc') || lower.includes('ip')) {
        replyText = `Intelligence Correlation: The IP address/domain input matches our high-confidence active threat feed from AlienVault OTX. Target system is isolated. Edge firewall blocks are working properly.`;
        if (threats.length > 0) {
          links = { type: 'threat', item: threats[0] };
        }
      } else if (lower.includes('query') || lower.includes('sql') || lower.includes('failed ssh')) {
        replyText = `Log query helper: Here is the recommended query to locate failed authentication attempts in Nginx logs:\n\n\`SELECT timestamp, host_user, message FROM siem_logs WHERE category = 'Authentication' AND status = 'Flagged';\``;
      }

      const botMsg = {
        role: 'assistant',
        text: replyText,
        timestamp: new Date().toISOString(),
        links
      };

      setCopilotMessages(prev => [...prev, botMsg]);
      setCopilotIsTyping(false);
    }, 1500);
  };

  // Executive Dashboard / Reports State
  const [reportTimeRange, setReportTimeRange] = useState('Last 30 Days');
  const [selectedReportType, setSelectedReportType] = useState('Security Summary');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportProgress, setReportProgress] = useState(0);
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

  // Platform Settings & Integrations State
  const [settingsActiveSubTab, setSettingsActiveSubTab] = useState('Profile Settings');
  const [settingsApiKeys, setSettingsApiKeys] = useState([
    { name: 'SOC SIEM Ingestion Daemon', key: 'ae_live_83910fbc2e1a3d4d9e0', created: '2024-05-01', status: 'Active' },
    { name: 'SOC Copilot Slack Endpoint', key: 'ae_live_9201abcd3f4e5a6b7c8', created: '2024-05-15', status: 'Active' }
  ]);
  const [newKeyName, setNewKeyName] = useState('');
  
  const [connectors, setConnectors] = useState([
    { id: 'splunk', name: 'Splunk Enterprise', description: 'Forward local security syslog streams into Splunk log aggregators.', status: 'Connected', category: 'SIEM' },
    { id: 'crowdstrike', name: 'CrowdStrike Falcon', description: 'Sync host telemetry detections & process alerts into Incidents queue.', status: 'Connected', category: 'EDR' },
    { id: 'aws', name: 'AWS Security Hub', description: 'Monitor multi-cloud security hub notifications and configurations.', status: 'Disconnected', category: 'Cloud Security' },
    { id: 'slack', name: 'Slack SOC Alerts', description: 'Deliver critical priority incidents to designated Slack channels.', status: 'Configured', category: 'Alerting' },
    { id: 'jira', name: 'Jira Service Management', description: 'Sync AegisOne incident tickets into enterprise Jira workflow tickets.', status: 'Disconnected', category: 'Ticketing' }
  ]);

  const [rolePermissions, setRolePermissions] = useState([
    { role: 'Admin', read: true, write: true, delete: true, config: true },
    { role: 'Security Manager', read: true, write: true, delete: false, config: true },
    { role: 'Security Analyst', read: true, write: true, delete: false, config: false },
    { role: 'Auditor / Guest', read: true, write: false, delete: false, config: false }
  ]);

  // LinkGuard URL & QR Security States
  const [linkGuardMode, setLinkGuardMode] = useState('URL Scan');
  const [linkGuardUrl, setLinkGuardUrl] = useState('');
  const [linkGuardQrName, setLinkGuardQrName] = useState('');
  const [linkGuardQrDataUrl, setLinkGuardQrDataUrl] = useState(null);
  const [linkGuardScanning, setLinkGuardScanning] = useState(false);
  const [linkGuardResult, setLinkGuardResult] = useState(null);
  const [linkGuardSelectedHistory, setLinkGuardSelectedHistory] = useState(null);
  const [linkGuardNotes, setLinkGuardNotes] = useState('');

  const [linkGuardHistory, setLinkGuardHistory] = useState([
    {
      id: 'LG-9001',
      type: 'URL',
      input: 'https://paypal-secure-verification.com/login',
      verdict: 'Malicious',
      score: 95,
      timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
      explanation: 'Lookalike/impersonation domain matching brand keyword (paypal). Domain resolved to non-standard server IP. Missing valid EV certificate.',
      details: {
        dest: 'https://paypal-secure-verification.com/login/auth.php',
        domain: 'paypal-secure-verification.com',
        redirects: ['http://paypal-secure-verification.com/login', 'https://paypal-secure-verification.com/login'],
        suspiciousKeywords: true,
        lookalike: true,
        https: true,
        length: 42,
        shortened: false,
        qrText: null
      }
    },
    {
      id: 'LG-9002',
      type: 'QR Code',
      input: 'MOCK_QR_INBOUND_SHIPMENT.png',
      verdict: 'Safe',
      score: 12,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      explanation: 'Decoded QR payload leads to corporate Intranet portal destination. Standard secure TLS layers validated.',
      details: {
        dest: 'https://intranet.aegisone.com/shipping/receipt?id=90382',
        domain: 'intranet.aegisone.com',
        redirects: [],
        suspiciousKeywords: false,
        lookalike: false,
        https: true,
        length: 52,
        shortened: false,
        qrText: 'https://intranet.aegisone.com/shipping/receipt?id=90382'
      }
    },
    {
      id: 'LG-9003',
      type: 'URL',
      input: 'https://bit.ly/3x8FD2',
      verdict: 'Suspicious',
      score: 65,
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      explanation: 'Shortened URL expands to an untrusted file download destination. Requires manual sandbox verification.',
      details: {
        dest: 'https://untrusted-share-drive.xyz/files/download/inbound_patch.exe',
        domain: 'untrusted-share-drive.xyz',
        redirects: ['https://bit.ly/3x8FD2', 'http://untrusted-share-drive.xyz/files/download', 'https://untrusted-share-drive.xyz/files/download/inbound_patch.exe'],
        suspiciousKeywords: true,
        lookalike: false,
        https: true,
        length: 70,
        shortened: true,
        qrText: null
      }
    },
    {
      id: 'LG-9004',
      type: 'QR Code',
      input: 'MOCK_QR_MFA_UPDATE.png',
      verdict: 'Malicious',
      score: 98,
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      explanation: 'Embedded quishing payload detected. Decoded URL leads to fake Microsoft login page designed for credential harvesting.',
      details: {
        dest: 'https://login-microsoft-auth-update.net/owa/login.asp',
        domain: 'login-microsoft-auth-update.net',
        redirects: [],
        suspiciousKeywords: true,
        lookalike: true,
        https: true,
        length: 50,
        shortened: false,
        qrText: 'https://login-microsoft-auth-update.net/owa/login.asp'
      }
    }
  ]);

  const handleLinkGuardScan = (urlToScan = null, qrPresetName = null) => {
    setLinkGuardScanning(true);
    setLinkGuardResult(null);

    const targetUrl = urlToScan || linkGuardUrl;

    setTimeout(() => {
      let result = null;

      if (linkGuardMode === 'URL Scan') {
        const lower = targetUrl.toLowerCase();
        if (lower.includes('paypal') || lower.includes('secure-login') || lower.includes('verification')) {
          result = {
            id: `LG-${Math.floor(9100 + Math.random() * 900)}`,
            type: 'URL',
            input: targetUrl,
            verdict: 'Malicious',
            score: 94,
            timestamp: new Date().toISOString(),
            explanation: 'Highly suspicious lookalike domain pattern detected. The destination contains sensitive financial credentials keywords while resolving to a newly-registered hosting block.',
            details: {
              dest: targetUrl,
              domain: targetUrl.split('//')[1]?.split('/')[0] || targetUrl,
              redirects: [targetUrl],
              suspiciousKeywords: true,
              lookalike: true,
              https: lower.startsWith('https'),
              length: targetUrl.length,
              shortened: false,
              qrText: null
            }
          };
        } else if (lower.includes('bit.ly') || lower.includes('tinyurl') || lower.includes('t.co')) {
          result = {
            id: `LG-${Math.floor(9100 + Math.random() * 900)}`,
            type: 'URL',
            input: targetUrl,
            verdict: 'Suspicious',
            score: 60,
            timestamp: new Date().toISOString(),
            explanation: 'Shortened link used to conceal final landing page redirect routing. Expands to external storage folder containing untrusted binaries.',
            details: {
              dest: 'https://external-storage-bucket-901.net/downloads/patch_setup.msi',
              domain: 'external-storage-bucket-901.net',
              redirects: [targetUrl, 'https://external-storage-bucket-901.net/downloads/patch_setup.msi'],
              suspiciousKeywords: true,
              lookalike: false,
              https: true,
              length: 68,
              shortened: true,
              qrText: null
            }
          };
        } else if (lower.includes('google.com') || lower.includes('aegisone.com') || lower.includes('github.com')) {
          result = {
            id: `LG-${Math.floor(9100 + Math.random() * 900)}`,
            type: 'URL',
            input: targetUrl,
            verdict: 'Safe',
            score: 4,
            timestamp: new Date().toISOString(),
            explanation: 'Well-known benign enterprise target domain. Fully compliant SSL/TLS certificates and standard redirect structures verified.',
            details: {
              dest: targetUrl,
              domain: targetUrl.split('//')[1]?.split('/')[0] || targetUrl,
              redirects: [],
              suspiciousKeywords: false,
              lookalike: false,
              https: true,
              length: targetUrl.length,
              shortened: false,
              qrText: null
            }
          };
        } else {
          result = {
            id: `LG-${Math.floor(9100 + Math.random() * 900)}`,
            type: 'URL',
            input: targetUrl,
            verdict: 'Needs review',
            score: 45,
            timestamp: new Date().toISOString(),
            explanation: 'Neutral or newly registered domain with minimal active reputational rating index. Advise manual inspection in sandbox environments.',
            details: {
              dest: targetUrl,
              domain: targetUrl.split('//')[1]?.split('/')[0] || targetUrl,
              redirects: [],
              suspiciousKeywords: false,
              lookalike: false,
              https: lower.startsWith('https'),
              length: targetUrl.length,
              shortened: false,
              qrText: null
            }
          };
        }
      } else {
        // QR Scan mode
        const qrName = qrPresetName || linkGuardQrName || 'Simulated_QR_Image.png';
        if (qrName.toLowerCase().includes('mfa') || qrName.toLowerCase().includes('malicious') || qrName.toLowerCase().includes('update')) {
          result = {
            id: `LG-${Math.floor(9100 + Math.random() * 900)}`,
            type: 'QR Code',
            input: qrName,
            verdict: 'Malicious',
            score: 97,
            timestamp: new Date().toISOString(),
            explanation: 'Hidden quishing redirect. The decoded payload attempts to force redirection to a clone portal designed for credential harvesting.',
            details: {
              dest: 'https://microsoft-mfa-security.update-sso-portal.com/auth',
              domain: 'update-sso-portal.com',
              redirects: [],
              suspiciousKeywords: true,
              lookalike: true,
              https: true,
              length: 56,
              shortened: false,
              qrText: 'https://microsoft-mfa-security.update-sso-portal.com/auth'
            }
          };
        } else {
          result = {
            id: `LG-${Math.floor(9100 + Math.random() * 900)}`,
            type: 'QR Code',
            input: qrName,
            verdict: 'Safe',
            score: 8,
            timestamp: new Date().toISOString(),
            explanation: 'Decoded QR code matches corporate intranet asset links and standard compliance patterns.',
            details: {
              dest: 'https://intranet.aegisone.com/verify-mfa',
              domain: 'intranet.aegisone.com',
              redirects: [],
              suspiciousKeywords: false,
              lookalike: false,
              https: true,
              length: 34,
              shortened: false,
              qrText: 'https://intranet.aegisone.com/verify-mfa'
            }
          };
        }
      }

      setLinkGuardResult(result);
      setLinkGuardHistory(prev => [result, ...prev]);
      setLinkGuardScanning(false);
    }, 1500);
  };

  // Initial Fetch & Health Check
  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then(res => res.json())
      .then(data => setHealthStatus(data.status === 'ok' ? 'Online' : 'Degraded'))
      .catch(() => setHealthStatus('Offline'));
  }, []);

  // Fetch Data when authenticated
  useEffect(() => {
    if (currentUser) {
      fetchData();
    }
  }, [currentUser]);

  const fetchData = async () => {
    try {
      const uRes = await fetch(`${API_BASE}/users`);
      if (uRes.ok) setUsers(await uRes.json());
      
      const tRes = await fetch(`${API_BASE}/tickets`);
      if (tRes.ok) setTickets(await tRes.json());
    } catch (e) {
      console.error("Failed to fetch data", e);
    }
  };

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
      case 'Investigating': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Contained': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Resolved': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Closed': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
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



  const getThreatConfidenceBadge = (conf) => {
    switch(conf) {
      case 'High': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Low': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  const getThreatTypeIcon = (type) => {
    switch(type) {
      case 'IP Address': return <IconGlobe />;
      case 'Domain': return <IconGlobe />;
      case 'URL': return <IconGlobe />;
      case 'Hash': return <IconHash />;
      default: return <IconAlertTriangle />;
    }
  };
  
  const getVulnStatusBadge = (status) => {
    switch (status) {
      case 'Open': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'In Progress': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Resolved': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Risk Accepted': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };
  // API Actions
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(authForm)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Login failed');
      setCurrentUser(data);
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/tickets`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTicket)
      });
      if (res.ok) {
        setIsTicketModalOpen(false);
        setNewTicket({ title: '', description: '', severity: 'Medium', category: 'Network', source: 'Manual', status: 'New' });
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAssignTicket = async () => {
    if (!selectedTicket || !assigneeForm) return;
    try {
      const res = await fetch(`${API_BASE}/tickets/${selectedTicket.ticket_id}/assign?assigned_to=${assigneeForm}`, {
        method: 'PUT'
      });
      if (res.ok) {
        setSelectedTicket({...selectedTicket, assigned_to: assigneeForm});
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenUserModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setUserForm({ name: user.name, email: user.email, password: '', role: user.role, department: user.department, status: user.status });
    } else {
      setEditingUser(null);
      setUserForm({ name: '', email: '', password: '', role: 'Security Analyst', department: '', status: 'Active' });
    }
    setIsUserModalOpen(true);
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      const url = editingUser ? `${API_BASE}/users/${editingUser.user_id}` : `${API_BASE}/users`;
      const method = editingUser ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userForm)
      });
      if (res.ok) {
        setIsUserModalOpen(false);
        fetchData();
      } else {
        const error = await res.json();
        alert("Failed: " + error.detail);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleStatus = async (user) => {
    try {
      await fetch(`${API_BASE}/users/${user.user_id}/status`, { method: 'PUT' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Filtering
  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(userSearchQuery.toLowerCase()) || u.email.toLowerCase().includes(userSearchQuery.toLowerCase()));
  const filteredTickets = tickets.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(ticketSearchQuery.toLowerCase()) || (t.ticket_id && t.ticket_id.toLowerCase().includes(ticketSearchQuery.toLowerCase()));
    const matchesSev = ticketFilterSeverity === 'All' || t.severity === ticketFilterSeverity;
    const matchesStatus = ticketFilterStatus === 'All' || t.status === ticketFilterStatus;
    return matchesSearch && matchesSev && matchesStatus;
  });

  const filteredVulns = vulnerabilities.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(vulnSearchQuery.toLowerCase()) || v.id.toLowerCase().includes(vulnSearchQuery.toLowerCase()) || v.asset.toLowerCase().includes(vulnSearchQuery.toLowerCase());
    const matchesSev = vulnFilterSeverity === 'All' || v.severity === vulnFilterSeverity;
    const matchesStatus = vulnFilterStatus === 'All' || v.status === vulnFilterStatus;
    return matchesSearch && matchesSev && matchesStatus;
  });


  const filteredThreats = threats.filter(t => {
    const matchesSearch = t.value.toLowerCase().includes(threatSearchQuery.toLowerCase()) || t.tags.join(' ').toLowerCase().includes(threatSearchQuery.toLowerCase());
    const matchesType = threatFilterType === 'All' || t.type === threatFilterType;
    const matchesConf = threatFilterConfidence === 'All' || t.confidence === threatFilterConfidence;
    return matchesSearch && matchesType && matchesConf;
  });
  
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
      </div>
    );
  }

  // -------------------------------------------------------------
  // MAIN APP SHELL
  // -------------------------------------------------------------
  const navItems = [
    { icon: <IconDashboard />, label: 'Dashboard', active: activeTab === 'Dashboard' },
    { icon: <IconDatabase />, label: 'SIEM / Logs', active: activeTab === 'SIEM / Logs' },
    { icon: <IconLink />, label: 'LinkGuard', active: activeTab === 'LinkGuard' },
    { icon: <IconAlertTriangle />, label: 'Incidents', active: activeTab === 'Incidents' },
    { icon: <IconTarget />, label: 'Vulnerabilities', active: activeTab === 'Vulnerabilities' },
    { icon: <IconActivity />, label: 'Threat Intel', active: activeTab === 'Threat Intel' },
    { icon: <IconSparkles />, label: 'AI Copilot', active: activeTab === 'AI Copilot' },
    { icon: <IconBriefcase />, label: 'Executive Reports', active: activeTab === 'Executive Reports' },
    { icon: <IconSettings />, label: 'Platform Settings', active: activeTab === 'Platform Settings' },
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
                <div className="flex items-center gap-3 mb-2"><div className={`h-2.5 w-2.5 rounded-full ${healthStatus === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-rose-500'}`}></div><span className={`text-xs font-medium ${curTheme.text}`}>DB Connection</span></div>
                <p className={`text-[10px] ${curTheme.textMuted}`}>Live from PostgreSQL</p>
              </div>
            </div>
          </aside>
        )}

        <div className="flex-1 flex flex-col relative overflow-hidden">
          <header className={`h-16 flex items-center justify-between px-8 border-b ${curTheme.border} ${curTheme.surfaceSolid}/80 backdrop-blur-md z-10 transition-colors duration-300`}>
            <div className="flex-1 flex items-center">
              <div className="relative w-96 group">
                <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted} group-focus-within:${curColor.text} transition-colors`}><IconSearch /></span>
                <input type="text" placeholder="Search across Aegis One..." className={`w-full ${curTheme.input} rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none ${curColor.border} focus:ring-1 ${curColor.ring} transition-all shadow-inner`}/>
              </div>
            </div>
            
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
                                <td className={`px-5 py-3 font-mono text-xs ${curTheme.text}`}>{row.ticket_id}</td><td className={`px-5 py-3 ${curTheme.text}`}>{row.title}</td><td className="px-5 py-3"><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${getSeverityBadge(row.severity)}`}>{row.severity}</span></td><td className={`px-5 py-3 ${curTheme.textMuted} text-xs`}>{row.status}</td>
                              </tr>
                            ))}
                            {tickets.length === 0 && <tr><td colSpan="4" className={`px-5 py-3 text-center ${curTheme.textMuted}`}>No active incidents.</td></tr>}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SIEM / LOG MANAGEMENT MODULE */}
              {activeTab === 'SIEM / Logs' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  {/* SIEM Module Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight`}>SIEM & Log Operations</h2>
                      <p className={`${curTheme.textMuted} text-sm`}>Real-time security log aggregation, automated correlation, and active rule detection.</p>
                    </div>
                    
                    {/* Sub-Tab Navigation */}
                    <div className={`flex p-1 rounded-lg ${curTheme.surface} border ${curTheme.border}`}>
                      {['Overview', 'Log Explorer', 'Correlation & Rules', 'Live Monitor'].map(sub => (
                        <button
                          key={sub}
                          onClick={() => setSiemSubTab(sub)}
                          className={`px-4 py-2 rounded-md text-xs font-semibold transition-all duration-200 ${siemSubTab === sub ? `${config.primary === 'cyan' ? 'bg-cyan-500 text-white' : config.primary === 'emerald' ? 'bg-emerald-500 text-white' : config.primary === 'purple' ? 'bg-purple-500 text-white' : 'bg-amber-500 text-white'}` : `${curTheme.textMuted} hover:${curTheme.heading}`}`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SUBTAB: OVERVIEW */}
                  {siemSubTab === 'Overview' && (
                    <div className="space-y-6">
                      {/* Metric Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg relative overflow-hidden group`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Ingested Logs (24h)</h3>
                            <span className="text-[10px] font-bold text-emerald-500">+14% vs avg</span>
                          </div>
                          <p className={`text-2xl font-bold ${curTheme.heading}`}>1,284,912</p>
                          <span className={`text-[10px] ${curTheme.textMuted}`}>Live count from log collectors</span>
                        </div>
                        <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg relative overflow-hidden group`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Events Per Second (EPS)</h3>
                            <span className={`h-2 w-2 rounded-full ${isLiveStreaming ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                          </div>
                          <p className={`text-2xl font-bold ${curTheme.heading}`}>
                            {isLiveStreaming ? Math.floor(210 + Math.random() * 25) : 0}
                          </p>
                          <span className={`text-[10px] ${curTheme.textMuted}`}>Real-time message velocity</span>
                        </div>
                        <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg relative overflow-hidden group`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Enabled Rules</h3>
                            <span className={`text-xs ${curColor.text}`}><IconCpu /></span>
                          </div>
                          <p className={`text-2xl font-bold ${curTheme.heading}`}>
                            {siemCorrelationRules.filter(r => r.status === 'Enabled').length} / {siemCorrelationRules.length}
                          </p>
                          <span className={`text-[10px] ${curTheme.textMuted}`}>Active detectors monitoring hosts</span>
                        </div>
                        <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg relative overflow-hidden group`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`text-xs font-semibold ${curTheme.textMuted} uppercase tracking-wider`}>Correlation Alerts</h3>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-500">Unresolved</span>
                          </div>
                          <p className={`text-2xl font-bold ${curTheme.heading}`}>
                            {siemCorrelationRules.reduce((acc, curr) => acc + (curr.status === 'Enabled' ? curr.alertsGenerated : 0), 0)}
                          </p>
                          <span className={`text-[10px] ${curTheme.textMuted}`}>Security events flagged</span>
                        </div>
                      </div>

                      {/* Charts and Distributions */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Log Volume by Category */}
                        <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg space-y-4`}>
                          <h3 className={`text-sm font-bold ${curTheme.heading}`}>Event Logs by Category</h3>
                          <div className="space-y-3">
                            {[
                              { label: 'Authentication Logs', count: 482012, pct: 37, color: 'bg-cyan-500' },
                              { label: 'Network Firewall Logs', count: 549301, pct: 43, color: 'bg-blue-500' },
                              { label: 'Endpoint Agent Logs', count: 153094, pct: 12, color: 'bg-indigo-500' },
                              { label: 'Application Logs', count: 76020, pct: 6, color: 'bg-purple-500' },
                              { label: 'Email Security Logs', count: 24485, pct: 2, color: 'bg-pink-500' }
                            ].map((item, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs font-medium">
                                  <span className={curTheme.text}>{item.label}</span>
                                  <span className={curTheme.textMuted}>{item.count.toLocaleString()} ({item.pct}%)</span>
                                </div>
                                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Severity breakdown */}
                        <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg space-y-4`}>
                          <h3 className={`text-sm font-bold ${curTheme.heading}`}>Log Severity Distribution</h3>
                          <div className="space-y-3">
                            {[
                              { label: 'Critical Severity', count: 124, pct: 0.1, color: 'bg-rose-500' },
                              { label: 'High Severity', count: 1845, pct: 1.5, color: 'bg-orange-500' },
                              { label: 'Medium Severity', count: 24905, pct: 19.3, color: 'bg-amber-500' },
                              { label: 'Low Severity', count: 482912, pct: 37.6, color: 'bg-emerald-500' },
                              { label: 'Informational', count: 775126, pct: 61.5, color: 'bg-blue-400' }
                            ].map((item, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs font-medium">
                                  <span className={curTheme.text}>{item.label}</span>
                                  <span className={curTheme.textMuted}>{item.count.toLocaleString()} ({item.pct}%)</span>
                                </div>
                                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recent High Severity Alerts panel */}
                      <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl shadow-lg overflow-hidden`}>
                        <div className={`p-4 border-b ${curTheme.border} flex items-center justify-between`}>
                          <h3 className={`text-sm font-bold ${curTheme.heading} flex items-center gap-2`}>
                            <span className="text-rose-500"><IconAlertTriangle /></span>
                            Correlated Threats Detected from Logs
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}>
                              <tr>
                                <th className="px-5 py-3 font-semibold">Event ID</th>
                                <th className="px-5 py-3 font-semibold">Correlation Status</th>
                                <th className="px-5 py-3 font-semibold">Rule Triggered</th>
                                <th className="px-5 py-3 font-semibold">Target / Host</th>
                                <th className="px-5 py-3 font-semibold">Ingestion Timestamp</th>
                              </tr>
                            </thead>
                            <tbody className={`divide-y ${curTheme.border}`}>
                              {siemLogs.filter(l => l.severity === 'Critical' || l.severity === 'High').slice(0, 3).map((log, i) => (
                                <tr key={i} className="hover:bg-black/5 transition-colors">
                                  <td className={`px-5 py-3 font-mono text-xs ${curTheme.text}`}>{log.event_id}</td>
                                  <td className="px-5 py-3">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold border bg-rose-500/10 text-rose-500 border-rose-500/20">
                                      Flagged Alerts
                                    </span>
                                  </td>
                                  <td className={`px-5 py-3 text-xs ${curTheme.text}`}>{log.correlation}</td>
                                  <td className={`px-5 py-3 text-xs ${curTheme.textMuted}`}>{log.host_user}</td>
                                  <td className={`px-5 py-3 text-xs ${curTheme.textMuted}`}>
                                    {new Date(log.timestamp).toLocaleTimeString()}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBTAB: LOG EXPLORER */}
                  {siemSubTab === 'Log Explorer' && (
                    <div className="space-y-4 flex-1 flex flex-col min-h-0 relative">
                      {/* Search & Filter Header */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                        {/* Search Input */}
                        <div className="relative lg:col-span-2">
                          <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconSearch /></span>
                          <input
                            type="text"
                            placeholder="Search log ID, message, source, host..."
                            value={siemSearch}
                            onChange={e => setSiemSearch(e.target.value)}
                            className={`w-full ${curTheme.surface} border ${curTheme.border} rounded-lg pl-10 pr-4 py-2 text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}
                          />
                        </div>

                        {/* Category Filter */}
                        <div className="relative flex items-center">
                          <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                          <select
                            value={siemFilterCategory}
                            onChange={e => setSiemFilterCategory(e.target.value)}
                            className={`w-full pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}
                          >
                            <option value="All">All Categories</option>
                            <option value="Authentication">Authentication</option>
                            <option value="Network">Network</option>
                            <option value="Endpoint">Endpoint</option>
                            <option value="Application">Application</option>
                            <option value="Email">Email</option>
                          </select>
                        </div>

                        {/* Severity Filter */}
                        <div className="relative flex items-center">
                          <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                          <select
                            value={siemFilterSeverity}
                            onChange={e => setSiemFilterSeverity(e.target.value)}
                            className={`w-full pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}
                          >
                            <option value="All">All Severities</option>
                            <option value="Critical">Critical</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            <option value="Info">Info</option>
                          </select>
                        </div>

                        {/* Status Filter */}
                        <div className="relative flex items-center">
                          <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                          <select
                            value={siemFilterStatus}
                            onChange={e => setSiemFilterStatus(e.target.value)}
                            className={`w-full pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}
                          >
                            <option value="All">All Statuses</option>
                            <option value="Active">Active</option>
                            <option value="Correlated">Correlated</option>
                            <option value="Flagged">Flagged</option>
                            <option value="Cleared">Cleared</option>
                          </select>
                        </div>
                      </div>

                      {/* Log Output Table */}
                      <div className={`flex-1 ${curTheme.surface} border ${curTheme.border} rounded-xl overflow-hidden shadow-xl flex flex-col`}>
                        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
                          <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider sticky top-0 backdrop-blur-md`}>
                              <tr>
                                <th className="px-5 py-4 font-semibold">Event ID</th>
                                <th className="px-5 py-4 font-semibold">Timestamp</th>
                                <th className="px-5 py-4 font-semibold">Category</th>
                                <th className="px-5 py-4 font-semibold">Source</th>
                                <th className="px-5 py-4 font-semibold">Host / User</th>
                                <th className="px-5 py-4 font-semibold">Message</th>
                                <th className="px-5 py-4 font-semibold">Severity</th>
                                <th className="px-5 py-4 font-semibold">Status</th>
                                <th className="px-5 py-4 font-semibold text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody className={`divide-y ${curTheme.border}`}>
                              {siemLogs
                                .filter(log => {
                                  const matchesSearch = siemSearch === '' || 
                                    log.event_id.toLowerCase().includes(siemSearch.toLowerCase()) ||
                                    log.message.toLowerCase().includes(siemSearch.toLowerCase()) ||
                                    log.host_user.toLowerCase().includes(siemSearch.toLowerCase()) ||
                                    log.source.toLowerCase().includes(siemSearch.toLowerCase());
                                    
                                  const matchesCategory = siemFilterCategory === 'All' || log.category === siemFilterCategory;
                                  const matchesSeverity = siemFilterSeverity === 'All' || log.severity === siemFilterSeverity;
                                  const matchesStatus = siemFilterStatus === 'All' || log.status === siemFilterStatus;
                                  
                                  return matchesSearch && matchesCategory && matchesSeverity && matchesStatus;
                                })
                                .map((log, idx) => (
                                  <tr key={idx} className="hover:bg-black/5 transition-colors cursor-pointer" onClick={() => setSelectedLog(log)}>
                                    <td className={`px-5 py-4 font-mono text-xs ${curTheme.text}`}>{log.event_id}</td>
                                    <td className={`px-5 py-4 text-xs ${curTheme.textMuted}`}>{new Date(log.timestamp).toLocaleTimeString()}</td>
                                    <td className={`px-5 py-4 text-xs font-semibold ${curTheme.text}`}>{log.category}</td>
                                    <td className={`px-5 py-4 text-xs ${curTheme.textMuted}`}>{log.source}</td>
                                    <td className={`px-5 py-4 text-xs font-mono ${curTheme.text}`}>{log.host_user}</td>
                                    <td className={`px-5 py-4 text-xs ${curTheme.text} max-w-xs truncate`} title={log.message}>{log.message}</td>
                                    <td className="px-5 py-4">
                                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityBadge(log.severity)}`}>
                                        {log.severity}
                                      </span>
                                    </td>
                                    <td className="px-5 py-4">
                                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${
                                        log.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                        log.status === 'Correlated' ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' :
                                        log.status === 'Flagged' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                                        'bg-slate-500/10 text-slate-500 border-slate-500/20'
                                      }`}>
                                        {log.status}
                                      </span>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                      <button className={`text-xs ${curColor.text} font-medium hover:underline`}>View</button>
                                    </td>
                                  </tr>
                                ))
                              }
                              {siemLogs.length === 0 && (
                                <tr>
                                  <td colSpan="9" className={`px-5 py-12 text-center ${curTheme.textMuted}`}>No logs found matching specified parameters.</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Log Detail Drawer (Open state when selectedLog is truthy) */}
                      {selectedLog && (
                        <div className={`fixed inset-y-0 right-0 w-96 ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl z-50 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300`}>
                          <div className="flex items-center justify-between border-b pb-4">
                            <div>
                              <h3 className={`text-md font-bold ${curTheme.heading}`}>Log Details</h3>
                              <p className={`font-mono text-xs ${curTheme.textMuted}`}>{selectedLog.event_id}</p>
                            </div>
                            <button onClick={() => setSelectedLog(null)} className={`${curTheme.textMuted} hover:${curTheme.heading}`}><IconX /></button>
                          </div>

                          <div className="flex-1 space-y-4 overflow-y-auto pr-2 text-xs">
                            <div className="space-y-1">
                              <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Message</span>
                              <p className={`${curTheme.text} leading-relaxed bg-black/20 p-2.5 rounded-lg border ${curTheme.border} font-mono`}>{selectedLog.message}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Category</span>
                                <span className={curTheme.text}>{selectedLog.category}</span>
                              </div>
                              <div>
                                <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Source System</span>
                                <span className={curTheme.text}>{selectedLog.source}</span>
                              </div>
                              <div>
                                <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Host / User</span>
                                <span className={`font-mono ${curTheme.text}`}>{selectedLog.host_user}</span>
                              </div>
                              <div>
                                <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Ingested At</span>
                                <span className={curTheme.text}>{new Date(selectedLog.timestamp).toLocaleString()}</span>
                              </div>
                              <div>
                                <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Severity</span>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityBadge(selectedLog.severity)}`}>{selectedLog.severity}</span>
                              </div>
                              <div>
                                <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Status</span>
                                <span className={curTheme.text}>{selectedLog.status}</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Correlation Results</span>
                              <div className="p-2 rounded bg-black/10 border border-slate-500/10 font-mono text-cyan-400">
                                {selectedLog.correlation}
                              </div>
                            </div>
                          </div>

                          <div className="border-t pt-4 space-y-2">
                            <button
                              onClick={async () => {
                                const ticketData = {
                                  title: `SIEM Escalation: ${selectedLog.category} anomaly on ${selectedLog.host_user}`,
                                  description: `Escalated from Event ID: ${selectedLog.event_id}\n\nCategory: ${selectedLog.category}\nSource: ${selectedLog.source}\nHost/User: ${selectedLog.host_user}\nMessage: ${selectedLog.message}\nCorrelation: ${selectedLog.correlation}`,
                                  severity: selectedLog.severity === 'Info' ? 'Low' : selectedLog.severity,
                                  category: selectedLog.category === 'Email' ? 'Email Security' : selectedLog.category,
                                  source: 'SIEM Log Correlation',
                                  status: 'New'
                                };
                                try {
                                  const res = await fetch(`${API_BASE}/tickets`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(ticketData)
                                  });
                                  if (res.ok) {
                                    const created = await res.json();
                                    setTickets([created, ...tickets]);
                                  } else {
                                    setTickets([{ ticket_id: `TKT-${1000 + tickets.length + 1}`, ...ticketData, created_at: new Date().toISOString() }, ...tickets]);
                                  }
                                } catch (e) {
                                  setTickets([{ ticket_id: `TKT-${1000 + tickets.length + 1}`, ...ticketData, created_at: new Date().toISOString() }, ...tickets]);
                                }
                                setSiemLogs(prev => prev.map(l => l.event_id === selectedLog.event_id ? { ...l, status: 'Flagged', correlation: 'Escalated to Incident' } : l));
                                setSelectedLog(null);
                              }}
                              className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-bold text-white shadow-lg transition-all active:scale-[0.98] ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}
                            >
                              <IconPlusCircle /> Escalate to Incident
                            </button>
                            <button onClick={() => setSelectedLog(null)} className={`w-full py-2 border ${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} rounded-lg font-medium text-xs transition-colors`}>
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUBTAB: CORRELATION & RULES */}
                  {siemSubTab === 'Correlation & Rules' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Rules List */}
                        <div className="lg:col-span-2 space-y-4">
                          <h3 className={`text-sm font-bold ${curTheme.heading} flex items-center gap-2`}>
                            <IconCpu /> Correlation Rules
                          </h3>
                          <div className="space-y-3">
                            {siemCorrelationRules.map((rule, idx) => (
                              <div key={idx} className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-4 flex items-start justify-between shadow`}>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className={`font-mono text-xs ${curColor.text}`}>{rule.rule_id}</span>
                                    <h4 className={`text-sm font-bold ${curTheme.heading}`}>{rule.name}</h4>
                                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${getSeverityBadge(rule.severity)}`}>
                                      {rule.severity}
                                    </span>
                                  </div>
                                  <p className={`text-xs ${curTheme.textMuted} max-w-xl`}>{rule.description}</p>
                                  <div className="flex gap-4 text-[10px] text-slate-500">
                                    <span>Category: <strong>{rule.category}</strong></span>
                                    <span>•</span>
                                    <span>Triggered Alerts: <strong>{rule.alertsGenerated}</strong></span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => {
                                    setSiemCorrelationRules(prev => prev.map(r => r.rule_id === rule.rule_id ? { ...r, status: r.status === 'Enabled' ? 'Disabled' : 'Enabled' } : r));
                                  }}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                    rule.status === 'Enabled' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-slate-500/10 border-slate-500/20 text-slate-500'
                                  }`}
                                >
                                  {rule.status}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Detection statistics & quick action */}
                        <div className="space-y-4">
                          <h3 className={`text-sm font-bold ${curTheme.heading}`}>Correlated Incidents</h3>
                          <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow space-y-4`}>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className={`text-xs font-bold ${curTheme.textMuted}`}>Brute Force Attacks</span>
                              <span className="text-xs font-bold text-rose-500">Active</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className={`text-xs font-bold ${curTheme.textMuted}`}>Malicious File Detected</span>
                              <span className="text-xs font-bold text-rose-500">Active</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span className={`text-xs font-bold ${curTheme.textMuted}`}>Port Scanning Detected</span>
                              <span className="text-xs font-bold text-amber-500">Investigating</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className={`text-xs font-bold ${curTheme.textMuted}`}>DDoS Anomalies</span>
                              <span className="text-xs font-bold text-slate-500">Suppressed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBTAB: LIVE MONITOR */}
                  {siemSubTab === 'Live Monitor' && (
                    <div className="flex-1 flex flex-col min-h-[400px] gap-4">
                      {/* Controller Header */}
                      <div className="flex justify-between items-center p-4 rounded-xl bg-black/10 border border-slate-500/10">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <IconTerminal /> <span>Live Stream Status:</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isLiveStreaming ? 'bg-emerald-500/15 text-emerald-400 animate-pulse' : 'bg-slate-500/10 text-slate-500'}`}>
                            {isLiveStreaming ? 'INGESTING' : 'PAUSED'}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setIsLiveStreaming(!isLiveStreaming)}
                            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-medium text-white transition-all active:scale-95 ${
                              isLiveStreaming ? 'bg-amber-500 hover:bg-amber-400' : 'bg-emerald-500 hover:bg-emerald-400'
                            }`}
                          >
                            {isLiveStreaming ? <><IconPause /> Pause Stream</> : <><IconPlay /> Resume Stream</>}
                          </button>
                          <button
                            onClick={() => setLiveStreamLogs([])}
                            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-medium border ${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} transition-colors`}
                          >
                            Clear Screen
                          </button>
                        </div>
                      </div>

                      {/* Stream Output */}
                      <div className="flex-1 bg-black/90 text-cyan-400 border border-slate-800 rounded-xl p-5 font-mono text-xs overflow-y-auto max-h-[450px] shadow-inner space-y-1">
                        <div className="text-slate-500 border-b border-slate-800 pb-2 mb-2 flex justify-between">
                          <span>AegisOne SIEM Syslog Receiver Stream v1.0.0</span>
                          <span>UTC Ingest Socket Active</span>
                        </div>
                        {liveStreamLogs.map((log, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row gap-2 hover:bg-cyan-500/5 py-1 px-1.5 rounded">
                            <span className="text-slate-500 select-none">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                            <span className={`font-bold select-none ${
                              log.severity === 'Critical' ? 'text-rose-500' :
                              log.severity === 'High' ? 'text-orange-400' :
                              log.severity === 'Medium' ? 'text-amber-300' :
                              log.severity === 'Low' ? 'text-emerald-400' : 'text-slate-400'
                            }`}>
                              [{log.severity.toUpperCase()}]
                            </span>
                            <span className="text-indigo-300 font-semibold select-none">({log.category})</span>
                            <span className="text-slate-400 font-mono">[{log.source}]</span>
                            <span className="text-slate-300 font-mono font-bold">[{log.host_user}]:</span>
                            <span className="text-white flex-1">{log.message}</span>
                          </div>
                        ))}
                        {liveStreamLogs.length === 0 && (
                          <div className="text-slate-600 italic py-8 text-center">Stream cleared. Waiting for syslog packets...</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* LINKGUARD / URL & QR SECURITY ANALYZER MODULE */}
              {activeTab === 'LinkGuard' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  {/* Title Header */}
                  <div>
                    <h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight flex items-center gap-2`}>
                      <span className={curColor.text}><IconLink /></span>
                      LinkGuard: Threat Link & QR Analyzer
                    </h2>
                    <p className={`${curTheme.textMuted} text-sm`}>Deconstruct shortened redirects, analyze lookalike domains, and parse QR quishing codes for security validation.</p>
                  </div>

                  {/* Dual Mode Selector & Scanner inputs */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                      {/* Mode tab selector */}
                      <div className={`flex p-1 rounded-lg ${curTheme.surface} border ${curTheme.border} w-fit`}>
                        {['URL Scan', 'QR Code Scan'].map(mode => (
                          <button
                            key={mode}
                            onClick={() => {
                              setLinkGuardMode(mode);
                              setLinkGuardResult(null);
                            }}
                            className={`px-4 py-2 rounded-md text-xs font-semibold transition-all duration-200 ${
                              linkGuardMode === mode
                                ? `${config.primary === 'cyan' ? 'bg-cyan-500 text-white' : config.primary === 'emerald' ? 'bg-emerald-500 text-white' : config.primary === 'purple' ? 'bg-purple-500 text-white' : 'bg-amber-500 text-white'}`
                                : `${curTheme.textMuted} hover:${curTheme.heading}`
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>

                      {/* Scan console panel */}
                      <div className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl space-y-4`}>
                        {linkGuardMode === 'URL Scan' ? (
                          <div className="space-y-3">
                            <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Target URL Payload</span>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Paste destination link (e.g. http://paypal-secure-login.com or https://bit.ly/3x8FD2)"
                                value={linkGuardUrl}
                                onChange={e => setLinkGuardUrl(e.target.value)}
                                className={`flex-1 ${curTheme.input} border rounded-lg px-4 py-2 text-xs focus:outline-none focus:ring-1 ${curColor.ring}`}
                              />
                              <button
                                disabled={linkGuardScanning}
                                onClick={() => handleLinkGuardScan()}
                                className={`px-5 py-2 text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] ${
                                  config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'
                                }`}
                              >
                                {linkGuardScanning ? 'Scanning...' : 'Scan URL'}
                              </button>
                            </div>
                            <div className="flex gap-2 text-[10px] text-slate-500">
                              <span>Examples:</span>
                              <button onClick={() => { setLinkGuardUrl('https://google.com'); }} className="underline hover:text-white">google.com (Safe)</button>
                              <span>|</span>
                              <button onClick={() => { setLinkGuardUrl('http://paypal-secure-verification.com/login'); }} className="underline hover:text-white">paypal-lookalike.com (Malicious)</button>
                              <span>|</span>
                              <button onClick={() => { setLinkGuardUrl('https://bit.ly/3x8FD2'); }} className="underline hover:text-white">bit.ly shortened (Suspicious)</button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Upload QR Code Image</span>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Left Dropzone */}
                              <div className="border-2 border-dashed border-slate-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-black/10 gap-2">
                                <span className={`text-slate-500`}><IconUploadCloud /></span>
                                <div className="space-y-1">
                                  <p className={`text-[11px] font-bold ${curTheme.heading}`}>Simulate Image Upload</p>
                                  <p className={`text-[9px] ${curTheme.textMuted}`}>Select a preset below to populate image telemetry</p>
                                </div>
                              </div>

                              {/* Right Presets selection */}
                              <div className="space-y-2.5">
                                <span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase`}>Select QR Preset Payload</span>
                                <div className="flex flex-col gap-2">
                                  {[
                                    { name: 'MOCK_QR_INBOUND_SHIPMENT.png', desc: 'Inbound courier delivery (Safe)' },
                                    { name: 'MOCK_QR_MFA_UPDATE.png', desc: 'Urgent security check alert (Malicious)' }
                                  ].map((preset, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => {
                                        setLinkGuardQrName(preset.name);
                                        handleLinkGuardScan(null, preset.name);
                                      }}
                                      className={`w-full text-left p-2.5 rounded-lg border text-xs ${curTheme.border} ${curTheme.borderHover} hover:${curTheme.surface} flex justify-between items-center group`}
                                    >
                                      <div>
                                        <p className={`font-bold ${curTheme.heading}`}>{preset.name}</p>
                                        <p className={`text-[9px] ${curTheme.textMuted}`}>{preset.desc}</p>
                                      </div>
                                      <span className={`text-[10px] ${curColor.text}`}>Scan Preset &rarr;</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Threat Category Summary details */}
                    <div className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-5 shadow-lg space-y-3.5`}>
                      <h3 className={`text-xs font-bold uppercase tracking-wider ${curTheme.textMuted}`}>Scanner Rules Index</h3>
                      <div className="space-y-3 text-xs">
                        {[
                          { rule: 'Redirect Chain Detection', desc: 'Flags links resolving through more than 3 nested hops.' },
                          { rule: 'Lookalike Typosquatting', desc: 'Identifies brand impersonation attempts (e.g. Microsoft/PayPal).' },
                          { rule: 'Quishing Payload Analyzer', desc: 'Extracts encoded credentials harvest URLs from QR matrices.' },
                          { rule: 'TLS/HTTPS Enforcement', desc: 'Warns on unencrypted plaintext (HTTP) transport links.' }
                        ].map((rule, idx) => (
                          <div key={idx} className="space-y-0.5">
                            <h4 className={`font-semibold ${curTheme.text}`}>{rule.rule}</h4>
                            <p className={`text-[10px] ${curTheme.textMuted}`}>{rule.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scan results area */}
                  {linkGuardScanning && (
                    <div className={`p-8 ${curTheme.surface} border ${curTheme.border} rounded-2xl text-center shadow flex flex-col items-center justify-center gap-3`}>
                      <span className="h-6 w-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></span>
                      <p className={`text-xs ${curTheme.textMuted}`}>Running deep redirect inspection and reputation feed lookup...</p>
                    </div>
                  )}

                  {linkGuardResult && (
                    <div className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-300`}>
                      
                      {/* Left Score Gauge */}
                      <div className="flex flex-col items-center justify-center text-center p-4 border-b lg:border-b-0 lg:border-r border-slate-700/30 gap-3">
                        <span className={`text-[10px] font-bold ${curTheme.textMuted} uppercase`}>Evaluation Result</span>
                        
                        <div className={`h-28 w-28 rounded-full border-[8px] flex flex-col items-center justify-center ${
                          linkGuardResult.verdict === 'Safe' ? 'border-emerald-500/20 text-emerald-500' :
                          linkGuardResult.verdict === 'Suspicious' ? 'border-amber-500/20 text-amber-500' :
                          'border-rose-500/20 text-rose-500'
                        }`}>
                          <span className="text-3xl font-black">{linkGuardResult.score}</span>
                          <span className="text-[8px] text-slate-500 font-bold uppercase">Risk Score</span>
                        </div>

                        <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${
                          linkGuardResult.verdict === 'Safe' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                          linkGuardResult.verdict === 'Suspicious' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                          linkGuardResult.verdict === 'Needs review' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                          'bg-rose-500/10 text-rose-500 border-rose-500/20'
                        }`}>
                          {linkGuardResult.verdict}
                        </span>
                      </div>

                      {/* Center Verdict analysis reasons */}
                      <div className="lg:col-span-2 flex flex-col justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className={`text-sm font-bold ${curTheme.heading}`}>Analysis Summary</h3>
                          <p className={`text-xs ${curTheme.text} leading-relaxed`}>{linkGuardResult.explanation}</p>
                        </div>

                        {/* Breakdown Grid details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div className="space-y-1">
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Final Destination URL</span>
                            <span className={`font-mono text-cyan-400 select-all truncate block`}>{linkGuardResult.details.dest}</span>
                          </div>
                          <div className="space-y-1">
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Resolved Domain</span>
                            <span className={`font-semibold ${curTheme.text}`}>{linkGuardResult.details.domain}</span>
                          </div>
                          <div className="space-y-1">
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>HTTPS Layer</span>
                            <span className={linkGuardResult.details.https ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
                              {linkGuardResult.details.https ? 'Secured (HTTPS)' : 'Plaintext HTTP (Insecure)'}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Shortened Link</span>
                            <span className={curTheme.text}>{linkGuardResult.details.shortened ? 'Yes' : 'No'}</span>
                          </div>
                          {linkGuardResult.details.qrText && (
                            <div className="space-y-1 md:col-span-2">
                              <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Decoded QR Code Raw Data</span>
                              <p className={`bg-black/10 border ${curTheme.border} p-2 rounded-lg font-mono text-[11px] text-slate-300 select-all`}>
                                {linkGuardResult.details.qrText}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Actions drawer triggers */}
                        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-700/30">
                          <button
                            onClick={async () => {
                              const ticketData = {
                                title: `LinkGuard Escalation: ${linkGuardResult.verdict} payload on ${linkGuardResult.details.domain}`,
                                description: `Escalated from LinkGuard Scan ID: ${linkGuardResult.id}\nVerdict: ${linkGuardResult.verdict}\nRisk Score: ${linkGuardResult.score}\nSource URL/Payload: ${linkGuardResult.input}\nExpanded Destination: ${linkGuardResult.details.dest}\n\nAnalysis Summary:\n${linkGuardResult.explanation}`,
                                severity: linkGuardResult.score > 80 ? 'Critical' : linkGuardResult.score > 50 ? 'High' : 'Medium',
                                category: 'Network',
                                source: 'LinkGuard Analyzer',
                                status: 'New'
                              };
                              try {
                                const res = await fetch(`${API_BASE}/tickets`, {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify(ticketData)
                                });
                                if (res.ok) {
                                  const created = await res.json();
                                  setTickets([created, ...tickets]);
                                } else {
                                  setTickets([{ ticket_id: `TKT-${1000 + tickets.length + 1}`, ...ticketData, created_at: new Date().toISOString() }, ...tickets]);
                                }
                              } catch (e) {
                                setTickets([{ ticket_id: `TKT-${1000 + tickets.length + 1}`, ...ticketData, created_at: new Date().toISOString() }, ...tickets]);
                              }
                              alert('Security event escalated successfully! Ticket added to Incident queue.');
                            }}
                            className={`px-4 py-2 flex items-center justify-center gap-1.5 text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] ${
                              config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'
                            }`}
                          >
                            <IconPlusCircle /> Escalate to Incident Queue
                          </button>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(linkGuardResult.details.dest);
                              alert('Destination link copied to clipboard!');
                            }}
                            className={`px-4 py-2 border ${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} rounded-lg text-xs font-semibold transition-colors`}
                          >
                            Copy Expanded Link
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Scan logs history */}
                  <div className={`flex-1 ${curTheme.surface} border ${curTheme.border} rounded-2xl overflow-hidden shadow-xl flex flex-col`}>
                    <div className="p-4 border-b border-slate-700/30">
                      <h3 className={`text-sm font-bold ${curTheme.heading}`}>Analysis History</h3>
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                      <table className="w-full text-left text-xs whitespace-nowrap">
                        <thead className={`bg-black/5 text-[10px] ${curTheme.textMuted} uppercase tracking-wider sticky top-0`}>
                          <tr>
                            <th className="px-5 py-3 font-semibold">Scan ID</th>
                            <th className="px-5 py-3 font-semibold">Timestamp</th>
                            <th className="px-5 py-3 font-semibold">Scanner Mode</th>
                            <th className="px-5 py-3 font-semibold">Submitted Payload</th>
                            <th className="px-5 py-3 font-semibold">Risk Verdict</th>
                            <th className="px-5 py-3 font-semibold">Score</th>
                            <th className="px-5 py-3 font-semibold text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${curTheme.border}`}>
                          {linkGuardHistory.map((log, idx) => (
                            <tr key={idx} className="hover:bg-black/5 transition-colors cursor-pointer" onClick={() => setLinkGuardSelectedHistory(log)}>
                              <td className={`px-5 py-3 font-mono ${curTheme.text}`}>{log.id}</td>
                              <td className={`px-5 py-3 text-slate-500`}>{new Date(log.timestamp).toLocaleTimeString()}</td>
                              <td className={`px-5 py-3 font-semibold ${curTheme.text}`}>{log.type}</td>
                              <td className={`px-5 py-3 font-mono text-slate-400 max-w-xs truncate`} title={log.input}>{log.input}</td>
                              <td className="px-5 py-3">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${
                                  log.verdict === 'Safe' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                  log.verdict === 'Suspicious' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                  log.verdict === 'Needs review' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                  'bg-rose-500/10 text-rose-500 border-rose-500/20'
                                }`}>
                                  {log.verdict}
                                </span>
                              </td>
                              <td className={`px-5 py-3 font-bold ${curTheme.text}`}>{log.score} / 100</td>
                              <td className="px-5 py-3 text-right">
                                <button className={`text-[10px] ${curColor.text} font-bold hover:underline`}>View Logs</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Detailed Analysis log drawer */}
                  {linkGuardSelectedHistory && (
                    <div className={`fixed inset-y-0 right-0 w-96 ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl z-50 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300`}>
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className={`text-md font-bold ${curTheme.heading}`}>Analysis Logs</h3>
                          <p className={`font-mono text-xs ${curTheme.textMuted}`}>{linkGuardSelectedHistory.id}</p>
                        </div>
                        <button onClick={() => setLinkGuardSelectedHistory(null)} className={`${curTheme.textMuted} hover:${curTheme.heading}`}><IconX /></button>
                      </div>

                      <div className="flex-1 space-y-4 overflow-y-auto pr-2 text-xs">
                        <div className="space-y-1">
                          <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Scan Verdict Summary</span>
                          <p className={`${curTheme.text} leading-relaxed bg-black/20 p-2.5 rounded-lg border ${curTheme.border}`}>{linkGuardSelectedHistory.explanation}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Input Payload</span>
                            <span className={`font-mono truncate block ${curTheme.text}`} title={linkGuardSelectedHistory.input}>{linkGuardSelectedHistory.input}</span>
                          </div>
                          <div>
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Ingested Target</span>
                            <span className={`font-mono truncate block ${curTheme.text}`} title={linkGuardSelectedHistory.details.dest}>{linkGuardSelectedHistory.details.dest}</span>
                          </div>
                          <div>
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>HTTPS Mode</span>
                            <span className={linkGuardSelectedHistory.details.https ? 'text-emerald-400 font-bold' : 'text-rose-500 font-bold'}>
                              {linkGuardSelectedHistory.details.https ? 'Active' : 'Missing'}
                            </span>
                          </div>
                          <div>
                            <span className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Obfuscation Warning</span>
                            <span className={curTheme.text}>{linkGuardSelectedHistory.details.lookalike ? 'Lookalike Brand Detected' : 'None Detected'}</span>
                          </div>
                        </div>

                        {/* Analyst notes textarea */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-700/30">
                          <label className={`block font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Operator Analyst Notes</label>
                          <textarea
                            rows="4"
                            placeholder="Add manual notes, compliance review summaries, or remediation logs..."
                            value={linkGuardNotes}
                            onChange={e => setLinkGuardNotes(e.target.value)}
                            className={`w-full ${curTheme.input} border rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 ${curColor.ring} resize-none`}
                          />
                        </div>
                      </div>

                      <div className="border-t pt-4 space-y-2">
                        <button
                          onClick={async () => {
                            const ticketData = {
                              title: `Escalated: ${linkGuardSelectedHistory.verdict} link alert on ${linkGuardSelectedHistory.details.domain}`,
                              description: `Escalated from LinkGuard ID: ${linkGuardSelectedHistory.id}\nVerdict: ${linkGuardSelectedHistory.verdict}\nRisk Score: ${linkGuardSelectedHistory.score}\nSource URL: ${linkGuardSelectedHistory.input}\nExpanded Destination: ${linkGuardSelectedHistory.details.dest}\n\nAnalyst Audit Comments:\n${linkGuardNotes}`,
                              severity: linkGuardSelectedHistory.score > 80 ? 'Critical' : linkGuardSelectedHistory.score > 50 ? 'High' : 'Medium',
                              category: 'Network',
                              source: 'LinkGuard Analyzer',
                              status: 'New'
                            };
                            try {
                              const res = await fetch(`${API_BASE}/tickets`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(ticketData)
                              });
                              if (res.ok) {
                                const created = await res.json();
                                setTickets([created, ...tickets]);
                              } else {
                                setTickets([{ ticket_id: `TKT-${1000 + tickets.length + 1}`, ...ticketData, created_at: new Date().toISOString() }, ...tickets]);
                              }
                            } catch (e) {
                              setTickets([{ ticket_id: `TKT-${1000 + tickets.length + 1}`, ...ticketData, created_at: new Date().toISOString() }, ...tickets]);
                            }
                            alert('Security alert promoted to Incident queues successfully.');
                            setLinkGuardSelectedHistory(null);
                          }}
                          className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-bold text-white shadow-lg transition-all active:scale-[0.98] ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}
                        >
                          <IconPlusCircle /> Escalate to Incident Queue
                        </button>
                        <button onClick={() => setLinkGuardSelectedHistory(null)} className={`w-full py-2 border ${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} rounded-lg font-medium text-xs transition-colors`}>
                          Close Panel
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              )}
              {/* AI COPILOT / SOC ASSISTANT MODULE */}
              {activeTab === 'AI Copilot' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight flex items-center gap-2`}>
                        <span className={curColor.text}><IconSparkles /></span>
                        AegisOne SOC Copilot
                      </h2>
                      <p className={`${curTheme.textMuted} text-sm`}>Interact with your intelligent SOC assistant for incident summaries, risk analysis, and playbook recommendations.</p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px]">
                    {/* Central Chat Panel (Left 2 columns) */}
                    <div className="lg:col-span-2 flex flex-col h-full bg-black/10 border border-slate-500/10 rounded-xl overflow-hidden shadow-2xl">
                      {/* Chat Header */}
                      <div className={`p-4 border-b ${curTheme.border} ${curTheme.surface} flex items-center justify-between`}>
                        <div className="flex items-center gap-3">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${curColor.from} ${curColor.to} flex items-center justify-center text-white`}>
                            <IconBot />
                          </div>
                          <div>
                            <span className={`text-sm font-bold ${curTheme.heading}`}>SOC Assistant</span>
                            <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span className="text-[10px] text-emerald-500 font-semibold uppercase tracking-wider">Online & Aggregating</span></div>
                          </div>
                        </div>
                        <button
                          onClick={() => setCopilotMessages([{ role: 'assistant', text: 'SOC Copilot context reset. How can I help you analyze events?', timestamp: new Date().toISOString() }])}
                          className={`text-xs ${curTheme.textMuted} hover:${curTheme.heading} border border-transparent hover:border-slate-500/20 px-2.5 py-1 rounded-lg transition-colors`}
                        >
                          Clear Chat
                        </button>
                      </div>

                      {/* Chat Messages Area */}
                      <div className="flex-1 p-6 overflow-y-auto space-y-4 max-h-[380px] scrollbar-hide">
                        {copilotMessages.map((msg, idx) => (
                          <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                            <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] font-bold ${
                              msg.role === 'user' ? 'bg-slate-700' : `bg-gradient-to-br ${curColor.from} ${curColor.to}`
                            }`}>
                              {msg.role === 'user' ? 'U' : <IconBot />}
                            </div>
                            <div className="space-y-1">
                              <div className={`rounded-2xl px-4 py-2.5 text-xs shadow-lg leading-relaxed ${
                                msg.role === 'user'
                                  ? `${config.primary === 'cyan' ? 'bg-cyan-500 text-white' : config.primary === 'emerald' ? 'bg-emerald-500 text-white' : config.primary === 'purple' ? 'bg-purple-500 text-white' : 'bg-amber-500 text-white'}`
                                  : `${curTheme.surface} border ${curTheme.border} ${curTheme.text}`
                              }`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                                
                                {/* Linked Context Card */}
                                {msg.links && (
                                  <div className="mt-3 p-2.5 rounded-lg bg-black/25 border border-white/10 hover:border-white/20 transition-all cursor-pointer" onClick={() => {
                                    if (msg.links.type === 'incident') {
                                      setActiveTab('Incidents');
                                      setSelectedTicket(msg.links.item);
                                    } else if (msg.links.type === 'vulnerability') {
                                      setActiveTab('Vulnerabilities');
                                      setSelectedVuln(msg.links.item);
                                    } else if (msg.links.type === 'threat') {
                                      setActiveTab('Threat Intel');
                                      setSelectedThreat(msg.links.item);
                                    }
                                  }}>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Linked {msg.links.type}</span>
                                      <span className="text-[9px] text-white/50">Click to Inspect &rarr;</span>
                                    </div>
                                    <p className="text-[11px] font-medium text-white truncate">{msg.links.item.title || msg.links.item.value || msg.links.item.id}</p>
                                  </div>
                                )}
                              </div>
                              <span className={`block text-[9px] ${curTheme.textMuted} ${msg.role === 'user' ? 'text-right' : ''}`}>
                                {new Date(msg.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                        ))}

                        {/* Typing indicator */}
                        {copilotIsTyping && (
                          <div className="flex gap-3 max-w-[80%]">
                            <div className={`h-7 w-7 rounded-full flex items-center justify-center bg-gradient-to-br ${curColor.from} ${curColor.to} text-white`}>
                              <IconBot />
                            </div>
                            <div className={`rounded-2xl px-4 py-3 ${curTheme.surface} border ${curTheme.border} flex items-center gap-1.5`}>
                              <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                              <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                              <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Chat Input Area */}
                      <div className={`p-4 border-t ${curTheme.border} ${curTheme.surface} flex gap-2 items-center`}>
                        <input
                          type="text"
                          placeholder="Ask about active incidents, log anomalies, or remediation playbooks..."
                          value={copilotInput}
                          onChange={e => setCopilotInput(e.target.value)}
                          onKeyDown={e => { if (e.key === 'Enter') handleSendCopilotMessage(); }}
                          className={`flex-1 ${curTheme.input} border rounded-lg px-4 py-2.5 text-xs focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}
                        />
                        <button
                          onClick={() => handleSendCopilotMessage()}
                          className={`h-9 w-9 flex items-center justify-center rounded-lg text-white transition-all active:scale-95 ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}
                        >
                          <IconSend />
                        </button>
                      </div>
                    </div>

                    {/* Copilot Insights & Saved History Sidebar */}
                    <div className="space-y-4">
                      {/* Quick SOC Actions Card */}
                      <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg space-y-3`}>
                        <h3 className={`text-xs font-bold uppercase tracking-wider ${curTheme.textMuted}`}>Quick SOC Actions</h3>
                        <div className="flex flex-col gap-2">
                          {[
                            { label: 'Summarize Active Alerts', prompt: 'Summarize our active critical security alerts and incidents.' },
                            { label: 'Explain CVSS Vulnerabilities', prompt: 'Explain recommended remediation steps for active CVSS vulnerabilities.' },
                            { label: 'C&C Threat Explanation', prompt: 'Explain the active IP indicators of compromise and external threats.' },
                            { label: 'Generate SIEM SQL Query', prompt: 'Generate SQL query logic for failed login logs.' }
                          ].map((action, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendCopilotMessage(action.prompt)}
                              className={`w-full flex items-center justify-between text-left p-2.5 rounded-lg text-xs border ${curTheme.border} ${curTheme.borderHover} hover:${curTheme.surface} transition-all group`}
                            >
                              <span className={curTheme.text}>{action.label}</span>
                              <span className={`transition-transform duration-200 group-hover:translate-x-1 ${curColor.text}`}>&rarr;</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Saved Outputs & History */}
                      <div className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-5 shadow-lg space-y-3 flex-1 flex flex-col`}>
                        <div className="flex items-center justify-between">
                          <h3 className={`text-xs font-bold uppercase tracking-wider ${curTheme.textMuted}`}>Saved Insights</h3>
                          <button
                            onClick={() => {
                              if (copilotMessages.length > 1) {
                                const lastAssistant = [...copilotMessages].reverse().find(m => m.role === 'assistant');
                                if (lastAssistant) {
                                  const savedItem = {
                                    id: `SAVED-${Date.now()}`,
                                    title: `Saved Incident Insight: ${lastAssistant.text.slice(0, 20)}...`,
                                    category: 'SOC Insight',
                                    timestamp: new Date().toISOString(),
                                    content: lastAssistant.text
                                  };
                                  setCopilotHistory([savedItem, ...copilotHistory]);
                                }
                              }
                            }}
                            className={`text-[10px] ${curColor.text} font-bold hover:underline`}
                          >
                            Save Last Response
                          </button>
                        </div>

                        <div className="space-y-2 overflow-y-auto max-h-[220px]">
                          {copilotHistory.map((item, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-black/10 border border-slate-500/10 text-xs space-y-1 relative group">
                              <div className="flex justify-between items-start">
                                <span className={`text-[10px] font-bold ${curColor.text}`}>{item.category}</span>
                                <button
                                  onClick={() => setCopilotHistory(prev => prev.filter(p => p.id !== item.id))}
                                  className="opacity-0 group-hover:opacity-100 text-rose-500 font-bold text-[10px] transition-opacity"
                                >
                                  Delete
                                </button>
                              </div>
                              <h4 className={`font-bold ${curTheme.heading}`}>{item.title}</h4>
                              <p className={`${curTheme.textMuted} text-[11px] line-clamp-3 whitespace-pre-line`}>{item.content}</p>
                              <span className="block text-[8px] text-slate-600">{new Date(item.timestamp).toLocaleDateString()}</span>
                            </div>
                          ))}
                          {copilotHistory.length === 0 && (
                            <div className={`text-xs italic text-center py-6 ${curTheme.textMuted}`}>No saved insights found.</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* EXECUTIVE DASHBOARD / REPORTS MODULE */}
              {activeTab === 'Executive Reports' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  {/* Executive Header & Timeframe Filter */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight flex items-center gap-2`}>
                        <span className={curColor.text}><IconBriefcase /></span>
                        Security Leadership Console
                      </h2>
                      <p className={`${curTheme.textMuted} text-sm`}>High-level security posture assessments, compliance alignment, and reporting indicators for management.</p>
                    </div>

                    <div className="flex gap-2">
                      {['Last 7 Days', 'Last 30 Days', 'Last 90 Days'].map(time => (
                        <button
                          key={time}
                          onClick={() => setReportTimeRange(time)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            reportTimeRange === time
                              ? `${config.primary === 'cyan' ? 'bg-cyan-500 text-white' : config.primary === 'emerald' ? 'bg-emerald-500 text-white' : config.primary === 'purple' ? 'bg-purple-500 text-white' : 'bg-amber-500 text-white'} border-transparent`
                              : `${curTheme.surface} ${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading}`
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Operational Risk Assessment Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Overall Risk Rating */}
                    <div className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden group`}>
                      <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none text-9xl font-black">AI</div>
                      
                      <div className="space-y-1">
                        <span className={`text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Global Security Score</span>
                        <h3 className={`text-sm font-bold ${curTheme.heading}`}>Enterprise Risk Index</h3>
                      </div>

                      {/* Visual ring/dial representation */}
                      <div className="my-6 relative flex items-center justify-center">
                        <div className={`h-36 w-36 rounded-full border-[10px] border-black/20 flex flex-col items-center justify-center ${
                          config.primary === 'cyan' ? 'shadow-[0_0_20px_rgba(6,182,212,0.15)]' : config.primary === 'emerald' ? 'shadow-[0_0_20px_rgba(16,185,129,0.15)]' : 'shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                        }`}>
                          <span className={`text-4xl font-black ${curColor.text}`}>86%</span>
                          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Grade A-</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs text-emerald-500 font-bold">Optimized Posture</span>
                        <p className={`text-[11px] ${curTheme.textMuted} leading-relaxed`}>No critical intrusions bypasses. Outbound threat activity is blocked and fully contained.</p>
                      </div>
                    </div>

                    {/* Right: Operational Performance Metrics */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Mean Time to Detect (MTTD)', value: '14 mins', trend: '-8% vs last month', detail: 'Ingestion to automated correlation', up: true },
                        { title: 'Mean Time to Resolve (MTTR)', value: '42 mins', trend: '-12% vs last month', detail: 'Alert creation to ticket resolution', up: true },
                        { title: 'Remediation Rate', value: '92.4%', trend: '+2.4% vs last month', detail: 'Resolved vulnerabilities & malware', up: false },
                        { title: 'Regulatory Compliance Index', value: '91.8%', trend: 'ISO 27001 / SOC 2 Type II', detail: 'Continuous compliance monitoring', up: false }
                      ].map((card, i) => (
                        <div key={i} className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-5 shadow-lg flex flex-col justify-between gap-4`}>
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <h3 className={`text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>{card.title}</h3>
                              <p className={`text-2xl font-black ${curTheme.heading}`}>{card.value}</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${card.up ? 'bg-emerald-500/10 text-emerald-500' : 'bg-indigo-500/10 text-indigo-500'}`}>{card.trend}</span>
                          </div>
                          <div>
                            <p className={`text-[10px] ${curTheme.textMuted}`}>{card.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Metrics Visualizer / Custom Progress Bars */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Vulnerability & Incident Backlogs */}
                    <div className={`lg:col-span-2 ${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl space-y-5`}>
                      <h3 className={`text-sm font-bold ${curTheme.heading}`}>Security Posture Distribution</h3>
                      
                      <div className="space-y-4">
                        {/* Open Incidents Bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className={curTheme.text}>Unresolved Critical Incidents</span>
                            <span className={curTheme.textMuted}>{tickets.filter(t => t.severity === 'Critical').length} Active</span>
                          </div>
                          <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden flex">
                            <div className="h-full bg-rose-500" style={{ width: '15%' }}></div>
                            <div className="h-full bg-orange-500" style={{ width: '25%' }}></div>
                            <div className="h-full bg-amber-500" style={{ width: '40%' }}></div>
                            <div className="h-full bg-slate-500" style={{ width: '20%' }}></div>
                          </div>
                        </div>

                        {/* Patch Vulnerability Backlog */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className={curTheme.text}>Vulnerability Remediation Velocity</span>
                            <span className={curTheme.textMuted}>84 Patched / 12 Pending</span>
                          </div>
                          <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '87.5%' }}></div>
                          </div>
                        </div>

                        {/* Email Threat Blockage */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className={curTheme.text}>Threat Ingestion & Detection Accuracy</span>
                            <span className={curTheme.textMuted}>99.98% blocked automatically</span>
                          </div>
                          <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: '99.98%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Threat Intelligence Source Trends */}
                    <div className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl space-y-4`}>
                      <h3 className={`text-sm font-bold ${curTheme.heading}`}>Threat Stream Distribution</h3>
                      
                      <div className="space-y-3.5 text-xs">
                        {[
                          { category: 'Botnets & C2 Inbound Requests', count: '14,801 blocked', pct: '74%' },
                          { category: 'Phishing URLs Blocked', count: '3,845 quarantined', pct: '19%' },
                          { category: 'Credential Access Attempts', count: '1,204 blocked', pct: '6%' },
                          { category: 'DDoS Vectors Shielded', count: '219 absorbed', pct: '1%' }
                        ].map((stat, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <div className="space-y-0.5">
                              <p className={`font-semibold ${curTheme.text}`}>{stat.category}</p>
                              <p className={`text-[10px] ${curTheme.textMuted}`}>{stat.count}</p>
                            </div>
                            <span className={`font-bold ${curColor.text}`}>{stat.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Report Generator Console */}
                  <div className={`${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl space-y-6`}>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className={`text-md font-bold ${curTheme.heading}`}>Executive Report Builder</h3>
                        <p className={`text-xs ${curTheme.textMuted}`}>Customize and export security posture reports for stakeholders.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Report Type */}
                      <div className="space-y-1.5">
                        <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Report Template</label>
                        <select
                          value={selectedReportType}
                          onChange={e => setSelectedReportType(e.target.value)}
                          className={`w-full py-2.5 px-3 ${curTheme.surface} border ${curTheme.border} rounded-lg text-xs ${curTheme.text} focus:outline-none focus:ring-1 ${curColor.ring}`}
                        >
                          <option value="Security Summary">Security Summary Report (Comprehensive)</option>
                          <option value="Incident Remediation">Incident Investigation & Remediation Audit</option>
                          <option value="Vulnerability Scans">Vulnerability Disclosure & Patching Index</option>
                          <option value="Regulatory Compliance">Regulatory Compliance Profile (ISO 27001 / SOC 2)</option>
                        </select>
                      </div>

                      {/* Timeframe */}
                      <div className="space-y-1.5">
                        <label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Report Range</label>
                        <select
                          value={reportTimeRange}
                          onChange={e => setReportTimeRange(e.target.value)}
                          className={`w-full py-2.5 px-3 ${curTheme.surface} border ${curTheme.border} rounded-lg text-xs ${curTheme.text} focus:outline-none focus:ring-1 ${curColor.ring}`}
                        >
                          <option value="Last 7 Days">Last 7 Days</option>
                          <option value="Last 30 Days">Last 30 Days</option>
                          <option value="Last 90 Days">Last 90 Days</option>
                        </select>
                      </div>

                      {/* Action trigger */}
                      <div className="flex items-end">
                        <button
                          disabled={isGeneratingReport}
                          onClick={() => {
                            setIsGeneratingReport(true);
                            setReportProgress(0);
                            const timer = setInterval(() => {
                              setReportProgress(p => {
                                if (p >= 100) {
                                  clearInterval(timer);
                                  setIsGeneratingReport(false);
                                  setShowDownloadAlert(true);
                                  return 100;
                                }
                                return p + 20;
                              });
                            }, 400);
                          }}
                          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-white font-bold text-xs shadow-lg transition-all active:scale-[0.98] ${
                            config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'
                          }`}
                        >
                          {isGeneratingReport ? `Building Document (${reportProgress}%)` : 'Generate Executive Report'}
                        </button>
                      </div>
                    </div>

                    {/* Simulating Document Build Progress */}
                    {isGeneratingReport && (
                      <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                        <div className={`h-full ${curColor.from.replace('from-', 'bg-')} transition-all duration-300`} style={{ width: `${reportProgress}%` }}></div>
                      </div>
                    )}

                    {/* Download Alert notification */}
                    {showDownloadAlert && (
                      <div className={`p-4 rounded-xl border ${curTheme.border} ${curTheme.surface} flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-300`}>
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-500"><IconCheckCircle /></span>
                          <div>
                            <p className={`text-xs font-bold ${curTheme.heading}`}>Report Successfully Created</p>
                            <p className={`text-[10px] ${curTheme.textMuted}`}>Your document "{selectedReportType} ({reportTimeRange}).pdf" has been compiled and is ready for export.</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setShowDownloadAlert(false);
                              alert('Mock PDF Download Triggered Successfully!');
                            }}
                            className={`px-3 py-1.5 flex items-center gap-1 bg-black/20 border border-slate-500/20 text-xs font-medium rounded-lg text-white hover:bg-black/35`}
                          >
                            <IconDownload /> Save PDF
                          </button>
                          <button
                            onClick={() => {
                              setShowDownloadAlert(false);
                              window.print();
                            }}
                            className={`px-3 py-1.5 flex items-center gap-1 bg-black/20 border border-slate-500/20 text-xs font-medium rounded-lg text-white hover:bg-black/35`}
                          >
                            <IconPrinter /> Print Report
                          </button>
                          <button onClick={() => setShowDownloadAlert(false)} className={`px-3 py-1.5 text-xs font-medium border border-transparent ${curTheme.textMuted} hover:${curTheme.heading}`}>
                            Dismiss
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* PLATFORM SETTINGS & INTEGRATIONS MODULE */}
              {activeTab === 'Platform Settings' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  {/* Settings Header */}
                  <div>
                    <h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight flex items-center gap-2`}>
                      <span className={curColor.text}><IconSettings /></span>
                      System Settings & Integrations
                    </h2>
                    <p className={`${curTheme.textMuted} text-sm`}>Manage your operator profile, customize theme layouts, configure credentials, and manage third-party API connectors.</p>
                  </div>

                  {/* Settings Main Content Layout (Sidebar + Content Panel) */}
                  <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-[500px]">
                    
                    {/* Settings Sidebar Nav */}
                    <div className={`w-full md:w-56 shrink-0 flex flex-row md:flex-col gap-1 p-1.5 rounded-xl ${curTheme.surface} border ${curTheme.border} md:h-fit overflow-x-auto md:overflow-x-visible`}>
                      {[
                        { label: 'Profile Settings', icon: <IconUser /> },
                        { label: 'Appearance & Layout', icon: <IconSliders /> },
                        { label: 'Security & API Keys', icon: <IconKey /> },
                        { label: 'External Connectors', icon: <IconLink /> },
                        { label: 'Access Control List', icon: <IconShieldAlert /> },
                        { label: 'Backups & Exports', icon: <IconDownloadCloud /> }
                      ].map((tab, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSettingsActiveSubTab(tab.label)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                            settingsActiveSubTab === tab.label
                              ? `${config.primary === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : config.primary === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : config.primary === 'purple' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`
                              : `${curTheme.textMuted} hover:${curTheme.heading} hover:${curTheme.surface} border border-transparent`
                          }`}
                        >
                          {tab.icon}
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Settings Panel */}
                    <div className={`flex-1 ${curTheme.surface} border ${curTheme.border} rounded-2xl p-6 shadow-xl flex flex-col gap-6`}>
                      
                      {/* Sub-tab: Profile Settings */}
                      {settingsActiveSubTab === 'Profile Settings' && (
                        <div className="space-y-6">
                          <h3 className={`text-sm font-bold ${curTheme.heading} border-b pb-2`}>Operator Profile</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                              <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase`}>Username / Operator Name</span>
                              <p className={`text-sm font-semibold ${curTheme.heading} bg-black/10 p-2.5 rounded-lg border ${curTheme.border}`}>{currentUser.name}</p>
                            </div>
                            <div className="space-y-1">
                              <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase`}>Email Address</span>
                              <p className={`text-sm font-semibold ${curTheme.heading} bg-black/10 p-2.5 rounded-lg border ${curTheme.border}`}>{currentUser.email}</p>
                            </div>
                            <div className="space-y-1">
                              <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase`}>Security Role Assignment</span>
                              <p className={`text-sm font-semibold ${curTheme.heading} bg-black/10 p-2.5 rounded-lg border ${curTheme.border}`}>{currentUser.role}</p>
                            </div>
                            <div className="space-y-1">
                              <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase`}>Assigned Department</span>
                              <p className={`text-sm font-semibold ${curTheme.heading} bg-black/10 p-2.5 rounded-lg border ${curTheme.border}`}>{currentUser.department || 'Global SOC Operations'}</p>
                            </div>
                          </div>
                          <div className="pt-4 border-t flex flex-col sm:flex-row gap-3">
                            <button className={`px-4 py-2 bg-black/20 border border-slate-500/20 text-xs font-medium rounded-lg text-white hover:bg-black/35 transition-colors`}>
                              Reset Password
                            </button>
                            <button className={`px-4 py-2 bg-black/20 border border-slate-500/20 text-xs font-medium rounded-lg text-white hover:bg-black/35 transition-colors`}>
                              Setup Multi-Factor Authentication (MFA)
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Sub-tab: Appearance & Layout settings */}
                      {settingsActiveSubTab === 'Appearance & Layout' && (
                        <div className="space-y-6">
                          <h3 className={`text-sm font-bold ${curTheme.heading} border-b pb-2`}>Appearance Customization</h3>
                          
                          {/* Mode settings */}
                          <div className="space-y-3">
                            <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Theme Mode</span>
                            <div className="flex gap-4">
                              {['dark', 'light'].map(m => (
                                <button
                                  key={m}
                                  onClick={() => setConfig({ ...config, mode: m })}
                                  className={`flex-1 py-4 border rounded-xl font-bold text-xs uppercase transition-all ${
                                    config.mode === m
                                      ? `${config.primary === 'cyan' ? 'border-cyan-500 text-cyan-400 bg-cyan-500/5' : config.primary === 'emerald' ? 'border-emerald-500 text-emerald-400 bg-emerald-500/5' : 'border-purple-500 text-purple-400 bg-purple-500/5'}`
                                      : `${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading}`
                                  }`}
                                >
                                  {m} Mode
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Accent colors */}
                          <div className="space-y-3">
                            <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Accent Color</span>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {['cyan', 'emerald', 'purple', 'amber'].map(color => (
                                <button
                                  key={color}
                                  onClick={() => setConfig({ ...config, primary: color })}
                                  className={`py-3 border rounded-xl font-bold text-xs uppercase transition-all ${
                                    config.primary === color
                                      ? `border-${color}-500 text-${color}-400 bg-${color}-500/5`
                                      : `${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading}`
                                  }`}
                                >
                                  {color}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Layout Style */}
                          <div className="space-y-3">
                            <span className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider`}>Sidebar Shell Layout</span>
                            <div className="flex gap-4">
                              {['sidebar', 'header'].map(layout => (
                                <button
                                  key={layout}
                                  onClick={() => setConfig({ ...config, layout })}
                                  className={`flex-1 py-4 border rounded-xl font-bold text-xs uppercase transition-all ${
                                    config.layout === layout
                                      ? `${config.primary === 'cyan' ? 'border-cyan-500 text-cyan-400 bg-cyan-500/5' : config.primary === 'emerald' ? 'border-emerald-500 text-emerald-400 bg-emerald-500/5' : 'border-purple-500 text-purple-400 bg-purple-500/5'}`
                                      : `${curTheme.border} ${curTheme.textMuted} hover:${curTheme.heading}`
                                  }`}
                                >
                                  {layout === 'sidebar' ? 'Collapsible Sidebar' : 'Header / Top Navigation'}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Sub-tab: Security & API Keys */}
                      {settingsActiveSubTab === 'Security & API Keys' && (
                        <div className="space-y-6">
                          <h3 className={`text-sm font-bold ${curTheme.heading} border-b pb-2`}>API Key Management</h3>
                          
                          {/* Create Key Form */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <input
                              type="text"
                              placeholder="Key Name (e.g. Jenkins Webhook Connector)"
                              value={newKeyName}
                              onChange={e => setNewKeyName(e.target.value)}
                              className={`flex-1 ${curTheme.input} border rounded-lg px-4 py-2 text-xs focus:outline-none focus:ring-1 ${curColor.ring}`}
                            />
                            <button
                              onClick={() => {
                                if (!newKeyName.trim()) return;
                                const newKey = {
                                  name: newKeyName,
                                  key: `ae_live_${Math.random().toString(16).substring(2, 10)}${Math.random().toString(16).substring(2, 10)}`,
                                  created: new Date().toISOString().split('T')[0],
                                  status: 'Active'
                                };
                                setSettingsApiKeys([...settingsApiKeys, newKey]);
                                setNewKeyName('');
                              }}
                              className={`px-4 py-2 text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] ${
                                config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'
                              }`}
                            >
                              Generate Key
                            </button>
                          </div>

                          {/* Key list table */}
                          <div className={`border ${curTheme.border} rounded-xl overflow-hidden shadow-inner`}>
                            <table className="w-full text-left text-xs whitespace-nowrap">
                              <thead className={`bg-black/5 text-[10px] ${curTheme.textMuted} uppercase`}>
                                <tr>
                                  <th className="px-4 py-3 font-semibold">Key Name</th>
                                  <th className="px-4 py-3 font-semibold">Secret Key Token</th>
                                  <th className="px-4 py-3 font-semibold">Created Date</th>
                                  <th className="px-4 py-3 font-semibold">Status</th>
                                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className={`divide-y ${curTheme.border}`}>
                                {settingsApiKeys.map((key, i) => (
                                  <tr key={i} className="hover:bg-black/5">
                                    <td className={`px-4 py-3 font-semibold ${curTheme.text}`}>{key.name}</td>
                                    <td className={`px-4 py-3 font-mono ${curTheme.textMuted}`}>{key.key.substring(0, 12)}*****************</td>
                                    <td className="px-4 py-3 text-slate-500">{key.created}</td>
                                    <td className="px-4 py-3">
                                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                        {key.status}
                                      </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                      <button
                                        onClick={() => {
                                          setSettingsApiKeys(prev => prev.filter(k => k.key !== key.key));
                                        }}
                                        className="text-rose-500 font-bold hover:underline"
                                      >
                                        Revoke Key
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Sub-tab: External Connectors (Integrations) */}
                      {settingsActiveSubTab === 'External Connectors' && (
                        <div className="space-y-6">
                          <h3 className={`text-sm font-bold ${curTheme.heading} border-b pb-2`}>Third-Party Security Connectors</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {connectors.map((connector, i) => (
                              <div key={i} className={`${curTheme.surface} border ${curTheme.border} rounded-xl p-4 flex flex-col justify-between gap-4 shadow`}>
                                <div className="space-y-1">
                                  <div className="flex justify-between items-center">
                                    <h4 className={`text-xs font-black ${curTheme.heading}`}>{connector.name}</h4>
                                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${
                                      connector.status === 'Connected' ? 'bg-emerald-500/15 border-emerald-500/20 text-emerald-400' :
                                      connector.status === 'Configured' ? 'bg-cyan-500/15 border-cyan-500/20 text-cyan-400' :
                                      'bg-slate-500/10 border-slate-500/20 text-slate-500'
                                    }`}>
                                      {connector.status}
                                    </span>
                                  </div>
                                  <p className={`text-[11px] ${curTheme.textMuted} leading-relaxed`}>{connector.description}</p>
                                </div>
                                <div className="flex justify-between items-center text-[10px]">
                                  <span className="text-slate-500">Category: <strong>{connector.category}</strong></span>
                                  <button
                                    onClick={() => {
                                      setConnectors(prev => prev.map(c => c.id === connector.id ? { ...c, status: c.status === 'Connected' || c.status === 'Configured' ? 'Disconnected' : 'Connected' } : c));
                                    }}
                                    className={`px-2.5 py-1 rounded border font-bold ${
                                      connector.status === 'Disconnected' ? `text-${config.primary}-400 border-${config.primary}-500/30 hover:bg-black/10` : 'text-slate-500 border-slate-500/20 hover:bg-black/10'
                                    }`}
                                  >
                                    {connector.status === 'Disconnected' ? 'Connect' : 'Disconnect'}
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Sub-tab: Access Control List (Access Mapping) */}
                      {settingsActiveSubTab === 'Access Control List' && (
                        <div className="space-y-6">
                          <h3 className={`text-sm font-bold ${curTheme.heading} border-b pb-2`}>Role Privilege Mapping</h3>
                          
                          <div className={`border ${curTheme.border} rounded-xl overflow-hidden shadow-inner`}>
                            <table className="w-full text-left text-xs whitespace-nowrap">
                              <thead className={`bg-black/5 text-[10px] ${curTheme.textMuted} uppercase`}>
                                <tr>
                                  <th className="px-4 py-3 font-semibold">User Role Group</th>
                                  <th className="px-4 py-3 font-semibold text-center">Read Actions</th>
                                  <th className="px-4 py-3 font-semibold text-center">Write Actions</th>
                                  <th className="px-4 py-3 font-semibold text-center">Delete Privileges</th>
                                  <th className="px-4 py-3 font-semibold text-center">Platform Config</th>
                                </tr>
                              </thead>
                              <tbody className={`divide-y ${curTheme.border}`}>
                                {rolePermissions.map((permission, i) => (
                                  <tr key={i} className="hover:bg-black/5">
                                    <td className={`px-4 py-3 font-bold ${curTheme.text}`}>{permission.role}</td>
                                    <td className="px-4 py-3 text-center">
                                      <input
                                        type="checkbox"
                                        checked={permission.read}
                                        onChange={() => {
                                          setRolePermissions(prev => prev.map(p => p.role === permission.role ? { ...p, read: !p.read } : p));
                                        }}
                                        className="rounded border-slate-500/20 text-cyan-500 focus:ring-cyan-500 h-3.5 w-3.5 bg-black/10"
                                      />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                      <input
                                        type="checkbox"
                                        checked={permission.write}
                                        onChange={() => {
                                          setRolePermissions(prev => prev.map(p => p.role === permission.role ? { ...p, write: !p.write } : p));
                                        }}
                                        className="rounded border-slate-500/20 text-cyan-500 focus:ring-cyan-500 h-3.5 w-3.5 bg-black/10"
                                      />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                      <input
                                        type="checkbox"
                                        checked={permission.delete}
                                        onChange={() => {
                                          setRolePermissions(prev => prev.map(p => p.role === permission.role ? { ...p, delete: !p.delete } : p));
                                        }}
                                        className="rounded border-slate-500/20 text-cyan-500 focus:ring-cyan-500 h-3.5 w-3.5 bg-black/10"
                                      />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                      <input
                                        type="checkbox"
                                        checked={permission.config}
                                        onChange={() => {
                                          setRolePermissions(prev => prev.map(p => p.role === permission.role ? { ...p, config: !p.config } : p));
                                        }}
                                        className="rounded border-slate-500/20 text-cyan-500 focus:ring-cyan-500 h-3.5 w-3.5 bg-black/10"
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Sub-tab: Backups & Exports */}
                      {settingsActiveSubTab === 'Backups & Exports' && (
                        <div className="space-y-6">
                          <h3 className={`text-sm font-bold ${curTheme.heading} border-b pb-2`}>Platform Backup Utilities</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Backup Card */}
                            <div className={`p-5 rounded-xl border ${curTheme.border} bg-black/10 space-y-4`}>
                              <div className="flex items-center gap-2">
                                <span className={curColor.text}><IconDownloadCloud /></span>
                                <h4 className={`text-xs font-bold ${curTheme.heading}`}>Backup Security Configurations</h4>
                              </div>
                              <p className={`text-[11px] ${curTheme.textMuted} leading-relaxed`}>Download system layouts, theme parameters, connector keys, and custom rules locally as a JSON backup config.</p>
                              <button
                                onClick={() => {
                                  alert('Mock SQL Database Backup export triggered. File securityops_backup.json downloaded.');
                                }}
                                className={`px-4 py-2 flex items-center gap-1.5 text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] ${
                                  config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'
                                }`}
                              >
                                <IconDownload /> Download Backup JSON
                              </button>
                            </div>

                            {/* Restore Card */}
                            <div className={`p-5 rounded-xl border ${curTheme.border} bg-black/10 space-y-4`}>
                              <div className="flex items-center gap-2">
                                <span className={curColor.text}><IconUploadCloud /></span>
                                <h4 className={`text-xs font-bold ${curTheme.heading}`}>Restore System Backup</h4>
                              </div>
                              <p className={`text-[11px] ${curTheme.textMuted} leading-relaxed`}>Upload your backup JSON configuration file to overwrite connection tokens and platform layouts immediately.</p>
                              <button
                                onClick={() => {
                                  alert('File picker simulation. Choose a valid AegisOne JSON configurations backup file to sync.');
                                }}
                                className={`px-4 py-2 bg-black/20 border border-slate-500/20 text-xs font-medium rounded-lg text-white hover:bg-black/35 transition-colors`}
                              >
                                Upload Restore Backup
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'Incidents' && (



                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div><h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight`}>Incident Management</h2><p className={`${curTheme.textMuted} text-sm`}>Track, assign, and resolve security alerts and tickets.</p></div>
                    <div className="flex gap-3"><button onClick={() => setIsTicketModalOpen(true)} className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-medium text-sm transition-all shadow-lg active:scale-95 ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}><IconPlus /> Create Ticket</button></div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconSearch /></span>
                      <input type="text" placeholder="Search tickets by ID, title, or assignee..." value={ticketSearchQuery} onChange={e => setTicketSearchQuery(e.target.value)} className={`w-full ${curTheme.surface} border ${curTheme.border} rounded-lg pl-10 pr-4 py-2 text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}/>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative flex items-center">
                        <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                        <select value={ticketFilterSeverity} onChange={e => setTicketFilterSeverity(e.target.value)} className={`pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}>
                          <option value="All">All Severities</option><option value="Critical">Critical</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option>
                        </select>
                      </div>
                      <div className="relative flex items-center">
                        <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                        <select value={ticketFilterStatus} onChange={e => setTicketFilterStatus(e.target.value)} className={`pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}>
                          <option value="All">All Statuses</option><option value="New">New</option><option value="Investigating">Investigating</option><option value="Contained">Contained</option><option value="Resolved">Resolved</option><option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className={`flex-1 ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} rounded-xl overflow-hidden shadow-xl flex flex-col`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}><tr><th className="px-6 py-4 font-semibold">Ticket</th><th className="px-6 py-4 font-semibold">Severity</th><th className="px-6 py-4 font-semibold">Status</th><th className="px-6 py-4 font-semibold">Source</th><th className="px-6 py-4 font-semibold">Assigned To</th><th className="px-6 py-4 font-semibold">Created</th><th className="px-6 py-4 font-semibold text-right">Action</th></tr></thead>
                        <tbody className={`divide-y ${curTheme.border}`}>
                          {filteredTickets.map(ticket => (
                            <tr key={ticket.ticket_id} className="hover:bg-black/5 transition-colors cursor-pointer" onClick={() => setSelectedTicket(ticket)}>
                              <td className="px-6 py-4"><div className="flex flex-col"><span className={`font-medium ${curTheme.heading} mb-1 truncate max-w-xs`}>{ticket.title}</span><div className="flex gap-2 items-center"><span className={`font-mono text-[10px] ${curTheme.textMuted}`}>{ticket.ticket_id}</span><span className="text-[10px] text-slate-500">•</span><span className={`text-[10px] ${curTheme.textMuted}`}>{ticket.category}</span></div></div></td>
                              <td className="px-6 py-4"><span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getSeverityBadge(ticket.severity)}`}>{ticket.severity}</span></td>
                              <td className="px-6 py-4"><span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getTicketStatusBadge(ticket.status)}`}>{ticket.status}</span></td>
                              <td className="px-6 py-4"><span className={`text-xs ${curTheme.textMuted}`}>{ticket.source || 'Manual'}</span></td>
                              <td className="px-6 py-4">{ticket.assigned_to ? <div className="flex items-center gap-2"><div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">{ticket.assigned_to.charAt(0)}</div><span className={curTheme.text}>{ticket.assigned_to}</span></div> : <span className={`text-xs italic ${curTheme.textMuted}`}>Unassigned</span>}</td>
                              <td className={`px-6 py-4 text-xs ${curTheme.textMuted}`}><div className="flex items-center gap-1"><IconClock /> {new Date(ticket.created_at).toLocaleDateString()}</div></td>
                              <td className="px-6 py-4 text-right"><button className={`text-xs ${curColor.text} font-medium hover:underline`}>View Details</button></td>
                            </tr>
                          ))}
                          {filteredTickets.length === 0 && <tr><td colSpan="7" className={`px-6 py-12 text-center ${curTheme.textMuted}`}>No tickets found matching your filters.</td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              
              {/* VULNERABILITIES MODULE */}
              {activeTab === 'Vulnerabilities' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div><h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight`}>Vulnerability Management</h2><p className={`${curTheme.textMuted} text-sm`}>Track, prioritize, and remediate security vulnerabilities across all assets.</p></div>
                    <div className="flex gap-3"><button className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-medium text-sm transition-all shadow-lg active:scale-95 ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}><IconPlus /> Run Scan</button></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[{ title: 'Critical Risk', value: '2', color: 'text-rose-500', bg: 'bg-rose-500/10' }, { title: 'High Risk', value: '14', color: 'text-orange-500', bg: 'bg-orange-500/10' }, { title: 'Medium Risk', value: '45', color: 'text-amber-500', bg: 'bg-amber-500/10' }, { title: 'Remediated (30d)', value: '128', color: 'text-emerald-500', bg: 'bg-emerald-500/10' }].map((stat, i) => (
                      <div key={i} className={`${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl p-4 flex items-center gap-4 shadow-md`}>
                        <div className={`h-12 w-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center font-bold text-lg`}><IconAlertCircle /></div>
                        <div><p className={`text-2xl font-black ${curTheme.heading}`}>{stat.value}</p><p className={`text-xs font-medium uppercase tracking-wider ${curTheme.textMuted}`}>{stat.title}</p></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconSearch /></span>
                      <input type="text" placeholder="Search vulnerabilities by CVE, title, or asset..." value={vulnSearchQuery} onChange={e => setVulnSearchQuery(e.target.value)} className={`w-full ${curTheme.surface} border ${curTheme.border} rounded-lg pl-10 pr-4 py-2 text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}/>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative flex items-center">
                        <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                        <select value={vulnFilterSeverity} onChange={e => setVulnFilterSeverity(e.target.value)} className={`pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}>
                          <option value="All">All Severities</option><option value="Critical">Critical</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option>
                        </select>
                      </div>
                      <div className="relative flex items-center">
                        <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                        <select value={vulnFilterStatus} onChange={e => setVulnFilterStatus(e.target.value)} className={`pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}>
                          <option value="All">All Statuses</option><option value="Open">Open</option><option value="In Progress">In Progress</option><option value="Resolved">Resolved</option><option value="Risk Accepted">Risk Accepted</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} rounded-xl overflow-hidden shadow-xl flex flex-col`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}><tr><th className="px-6 py-4 font-semibold">Vulnerability</th><th className="px-6 py-4 font-semibold">Risk/CVSS</th><th className="px-6 py-4 font-semibold">Asset/Target</th><th className="px-6 py-4 font-semibold">Status</th><th className="px-6 py-4 font-semibold">Discovered</th><th className="px-6 py-4 font-semibold text-right">Action</th></tr></thead>
                        <tbody className={`divide-y ${curTheme.border}`}>
                          {filteredVulns.map(vuln => (
                            <tr key={vuln.id} className="hover:bg-black/5 transition-colors cursor-pointer" onClick={() => setSelectedVuln(vuln)}>
                              <td className="px-6 py-4"><div className="flex flex-col"><span className={`font-medium ${curTheme.heading} mb-1 truncate max-w-sm`}>{vuln.title}</span><div className="flex gap-2 items-center"><span className={`font-mono text-[10px] ${curTheme.textMuted}`}>{vuln.id}</span></div></div></td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getSeverityBadge(vuln.severity)}`}>{vuln.severity}</span>
                                  <span className={`text-[10px] font-mono ${curTheme.textMuted}`}>CVSS {vuln.cvss}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4"><div className="flex items-center gap-2 text-xs"><IconServer /> <span className={`${curTheme.text}`}>{vuln.asset}</span></div></td>
                              <td className="px-6 py-4"><span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getVulnStatusBadge(vuln.status)}`}>{vuln.status}</span></td>
                              <td className={`px-6 py-4 text-xs ${curTheme.textMuted}`}><div className="flex items-center gap-1"><IconClock /> {new Date(vuln.discovered).toLocaleDateString()}</div></td>
                              <td className="px-6 py-4 text-right"><button className={`text-xs ${curColor.text} font-medium hover:underline`}>Analyze</button></td>
                            </tr>
                          ))}
                          {filteredVulns.length === 0 && <tr><td colSpan="6" className={`px-6 py-12 text-center ${curTheme.textMuted}`}>No vulnerabilities found matching your filters.</td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              
              {/* THREAT INTEL MODULE */}
              {activeTab === 'Threat Intel' && (
                <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div><h2 className={`text-2xl font-extrabold ${curTheme.heading} tracking-tight`}>Threat Intelligence</h2><p className={`${curTheme.textMuted} text-sm`}>Centralized IOCs, feeds, and threat enrichment.</p></div>
                    <div className="flex gap-3"><button className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-medium text-sm transition-all shadow-lg active:scale-95 ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : config.primary === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : config.primary === 'purple' ? 'bg-purple-500 hover:bg-purple-400' : 'bg-amber-500 hover:bg-amber-400'}`}><IconPlus /> Add Indicator</button></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[{ title: 'Active IOCs', value: '14,289', color: 'text-rose-500', bg: 'bg-rose-500/10' }, { title: 'High Confidence', value: '2,845', color: 'text-orange-500', bg: 'bg-orange-500/10' }, { title: 'Feed Sources', value: '12', color: 'text-emerald-500', bg: 'bg-emerald-500/10' }, { title: 'Enrichment Hits', value: '1.2M', color: 'text-blue-500', bg: 'bg-blue-500/10' }].map((stat, i) => (
                      <div key={i} className={`${curTheme.surface} backdrop-blur-md border ${curTheme.border} rounded-xl p-4 flex items-center gap-4 shadow-md`}>
                        <div className={`h-12 w-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center font-bold text-lg`}><IconDatabase /></div>
                        <div><p className={`text-2xl font-black ${curTheme.heading}`}>{stat.value}</p><p className={`text-xs font-medium uppercase tracking-wider ${curTheme.textMuted}`}>{stat.title}</p></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${curTheme.textMuted}`}><IconSearch /></span>
                      <input type="text" placeholder="Search indicators, hashes, or tags..." value={threatSearchQuery} onChange={e => setThreatSearchQuery(e.target.value)} className={`w-full ${curTheme.surface} border ${curTheme.border} rounded-lg pl-10 pr-4 py-2 text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} transition-all`}/>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative flex items-center">
                        <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                        <select value={threatFilterType} onChange={e => setThreatFilterType(e.target.value)} className={`pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}>
                          <option value="All">All Types</option><option value="IP Address">IP Address</option><option value="Domain">Domain</option><option value="URL">URL</option><option value="Hash">Hash</option><option value="Campaign">Campaign</option>
                        </select>
                      </div>
                      <div className="relative flex items-center">
                        <span className={`absolute left-3 ${curTheme.textMuted}`}><IconFilter /></span>
                        <select value={threatFilterConfidence} onChange={e => setThreatFilterConfidence(e.target.value)} className={`pl-9 pr-8 py-2 ${curTheme.surface} border ${curTheme.border} rounded-lg text-sm ${curTheme.text} focus:outline-none ${curTheme.borderHover} focus:ring-1 ${curColor.ring} appearance-none`}>
                          <option value="All">All Confidences</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${curTheme.surface} backdrop-blur-xl border ${curTheme.border} rounded-xl overflow-hidden shadow-xl flex flex-col`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className={`bg-black/5 text-xs ${curTheme.textMuted} uppercase tracking-wider`}><tr><th className="px-6 py-4 font-semibold">Indicator</th><th className="px-6 py-4 font-semibold">Confidence</th><th className="px-6 py-4 font-semibold">Tags</th><th className="px-6 py-4 font-semibold">Source</th><th className="px-6 py-4 font-semibold">Last Seen</th><th className="px-6 py-4 font-semibold text-right">Action</th></tr></thead>
                        <tbody className={`divide-y ${curTheme.border}`}>
                          {filteredThreats.map(t => (
                            <tr key={t.id} className="hover:bg-black/5 transition-colors cursor-pointer" onClick={() => setSelectedThreat(t)}>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className={`h-8 w-8 rounded-full bg-slate-800 border ${curTheme.border} flex items-center justify-center text-[10px] font-bold ${curTheme.textMuted}`}>{getThreatTypeIcon(t.type)}</div>
                                  <div className="flex flex-col"><span className={`font-mono text-xs font-bold ${curColor.text} mb-0.5 truncate max-w-[200px]`}>{t.value}</span><span className={`text-[10px] ${curTheme.textMuted} uppercase`}>{t.type}</span></div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold border ${getThreatConfidenceBadge(t.confidence)}`}>{t.confidence}</span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-1">
                                  {t.tags.map((tag, i) => <span key={i} className={`px-2 py-0.5 bg-black/20 border ${curTheme.border} rounded text-[10px] font-medium ${curTheme.text}`}>{tag}</span>)}
                                </div>
                              </td>
                              <td className="px-6 py-4"><span className={`text-xs ${curTheme.heading}`}>{t.source}</span></td>
                              <td className={`px-6 py-4 text-xs ${curTheme.textMuted}`}><div className="flex items-center gap-1"><IconClock /> {new Date(t.lastSeen).toLocaleDateString()}</div></td>
                              <td className="px-6 py-4 text-right"><button className={`text-xs ${curColor.text} font-medium hover:underline`}>View Details</button></td>
                            </tr>
                          ))}
                          {filteredThreats.length === 0 && <tr><td colSpan="6" className={`px-6 py-12 text-center ${curTheme.textMuted}`}>No indicators found matching filters.</td></tr>}
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
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody className={`divide-y ${curTheme.border}`}>
                              {filteredUsers.map(user => (
                                <tr key={user.user_id} className={`hover:bg-black/5 transition-colors ${user.status === 'Disabled' ? 'opacity-60' : ''}`}>
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                      <div className={`h-8 w-8 rounded-full ${user.status === 'Disabled' ? 'bg-slate-700' : curColor.bgFade} flex items-center justify-center text-xs font-bold ${user.status === 'Disabled' ? 'text-slate-400' : curColor.text}`}>{user.name.charAt(0)}</div>
                                      <div className="flex flex-col"><span className={`font-medium ${curTheme.heading}`}>{user.name}</span><span className={`text-[10px] ${curTheme.textMuted}`}>{user.email}</span></div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4"><div className="flex flex-col gap-1 items-start"><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getRoleBadge(user.role)}`}>{user.role}</span><span className={`text-[10px] ${curTheme.textMuted}`}>{user.department}</span></div></td>
                                  <td className="px-6 py-4"><span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getStatusBadge(user.status)}`}>{user.status}</span></td>
                                  <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-3">
                                      <button onClick={() => handleToggleStatus(user)} className={`text-xs font-medium hover:underline ${user.status === 'Active' ? 'text-rose-500' : 'text-emerald-500'}`}>{user.status === 'Active' ? 'Disable' : 'Enable'}</button>
                                      <button onClick={() => handleOpenUserModal(user)} className={`text-xs ${curColor.text} font-medium hover:underline flex items-center gap-1`}><IconEdit /> Edit</button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                              {filteredUsers.length === 0 && <tr><td colSpan="5" className={`px-6 py-12 text-center ${curTheme.textMuted}`}>No users found in database.</td></tr>}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>

      {/* DRAWERS & MODALS */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedTicket(null)}></div>
          <div className={`relative w-full max-w-3xl h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className={`p-6 flex items-start justify-between border-b ${curTheme.border} bg-black/20`}>
              <div className="space-y-3 w-full pr-8">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-sm ${curColor.text} font-bold`}>{selectedTicket.ticket_id}</span>
                  <select value={selectedTicket.status} onChange={(e) => {
                    setSelectedTicket({...selectedTicket, status: e.target.value});
                  }} className={`text-xs font-bold px-2 py-1 rounded bg-transparent border ${curTheme.border} ${curTheme.heading} focus:outline-none appearance-none cursor-pointer`}>
                    <option value="New">New</option>
                    <option value="Investigating">Investigating</option>
                    <option value="Contained">Contained</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityBadge(selectedTicket.severity)}`}>{selectedTicket.severity}</span>
                  <div className="ml-auto text-xs text-slate-400 flex items-center gap-2"><IconClock /> Created: {new Date(selectedTicket.created_at).toLocaleString()}</div>
                </div>
                <h3 className={`text-2xl font-bold ${curTheme.heading}`}>{selectedTicket.title}</h3>
              </div>
              <button onClick={() => setSelectedTicket(null)} className={`absolute top-6 right-6 p-2 rounded-lg ${curTheme.surface} ${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button>
            </div>
            
            <div className={`flex border-b ${curTheme.border} px-6 mt-2`}>
              {['Overview', 'Timeline & Audit', 'Evidence & Notes'].map(tab => (
                <button key={tab} onClick={() => setTicketDetailTab(tab)} className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${ticketDetailTab === tab ? `${curColor.text} ${curColor.borderSolid}` : `border-transparent ${curTheme.textMuted} hover:${curTheme.heading}`}`}>{tab}</button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-gradient-to-b from-transparent to-black/5">
              {ticketDetailTab === 'Overview' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className={`grid grid-cols-2 gap-4 p-5 rounded-xl ${curTheme.surface} border ${curTheme.border} shadow-inner`}>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Category</span><span className={`text-sm font-medium ${curTheme.heading}`}>{selectedTicket.category}</span></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Source</span><span className={`text-sm font-medium ${curTheme.heading}`}>{selectedTicket.source || 'Manual'}</span></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Updated At</span><span className={`text-sm font-medium ${curTheme.heading}`}>{new Date(selectedTicket.updated_at || selectedTicket.created_at).toLocaleString()}</span></div>
                    <div>
                      <span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Assigned To</span>
                      {selectedTicket.assigned_to ? (
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${curTheme.heading}`}>{selectedTicket.assigned_to}</span>
                          <button onClick={() => setSelectedTicket({...selectedTicket, assigned_to: null})} className="text-[10px] text-amber-500 hover:underline">Reassign</button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <select onChange={(e) => setAssigneeForm(e.target.value)} className={`w-32 ${curTheme.input} border rounded py-1 px-2 text-xs`}>
                            <option value="">Select User...</option>
                            {users.map(u => <option key={u.user_id} value={u.name}>{u.name}</option>)}
                          </select>
                          <button onClick={handleAssignTicket} className={`text-xs px-3 py-1 rounded bg-black/20 border ${curTheme.border} hover:${curColor.text} font-medium transition-colors`}>Assign</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${curTheme.heading} mb-3 flex items-center gap-2`}><IconFileText /> Description</h4>
                    <div className={`p-4 rounded-xl ${curTheme.surface} border ${curTheme.border}`}>
                      <p className={`text-sm ${curTheme.text} leading-relaxed whitespace-pre-wrap font-mono`}>{selectedTicket.description}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {ticketDetailTab === 'Timeline & Audit' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="relative pl-6 border-l-2 border-slate-700/50 space-y-8">
                    <div className="relative">
                      <div className={`absolute -left-[31px] bg-[#0F1525] p-1 rounded-full border border-slate-700/50 ${curColor.text}`}><IconAlertCircle /></div>
                      <div className="flex flex-col"><span className={`text-sm font-bold ${curTheme.heading}`}>Ticket Created</span><span className={`text-xs ${curTheme.textMuted}`}>{new Date(selectedTicket.created_at).toLocaleString()} - System</span></div>
                    </div>
                    {selectedTicket.assigned_to && (
                      <div className="relative">
                        <div className={`absolute -left-[31px] bg-[#0F1525] p-1 rounded-full border border-slate-700/50 text-emerald-500`}><IconUser /></div>
                        <div className="flex flex-col"><span className={`text-sm font-bold ${curTheme.heading}`}>Assigned to {selectedTicket.assigned_to}</span><span className={`text-xs ${curTheme.textMuted}`}>{new Date(selectedTicket.updated_at || selectedTicket.created_at).toLocaleString()} - Admin</span></div>
                      </div>
                    )}
                    <div className="relative">
                      <div className={`absolute -left-[31px] bg-[#0F1525] p-1 rounded-full border border-slate-700/50 text-amber-500`}><IconActivity /></div>
                      <div className="flex flex-col"><span className={`text-sm font-bold ${curTheme.heading}`}>Status updated to {selectedTicket.status}</span><span className={`text-xs ${curTheme.textMuted}`}>{new Date(selectedTicket.updated_at || selectedTicket.created_at).toLocaleString()} - System</span></div>
                    </div>
                  </div>
                </div>
              )}

              {ticketDetailTab === 'Evidence & Notes' && (
                <div className="space-y-6 animate-in fade-in duration-300 flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto space-y-4">
                    <div className={`p-4 rounded-xl ${curTheme.surface} border ${curTheme.border}`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-xs font-bold ${curTheme.heading}`}>System</span>
                        <span className={`text-[10px] ${curTheme.textMuted}`}>{new Date(selectedTicket.created_at).toLocaleString()}</span>
                      </div>
                      <p className={`text-sm ${curTheme.text}`}>Initial alert data captured. Affected parameters and logs stored in SIEM database.</p>
                    </div>
                  </div>
                  <div className={`mt-auto pt-4 border-t ${curTheme.border}`}>
                    <textarea placeholder="Add a note or evidence link..." value={ticketNoteInput} onChange={(e) => setTicketNoteInput(e.target.value)} className={`w-full ${curTheme.input} border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${curColor.ring} h-20 resize-none mb-2`}></textarea>
                    <div className="flex justify-end">
                      <button onClick={() => { setTicketNoteInput(''); }} className={`px-4 py-2 rounded-lg text-white text-sm font-medium shadow-md transition-all ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-amber-500 hover:bg-amber-400'}`}>Add Note</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      
      {selectedVuln && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedVuln(null)}></div>
          <div className={`relative w-full max-w-3xl h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className={`p-6 flex items-start justify-between border-b ${curTheme.border} bg-black/20`}>
              <div className="space-y-3 w-full pr-8">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-sm ${curColor.text} font-bold`}>{selectedVuln.id}</span>
                  <select value={selectedVuln.status} onChange={(e) => {
                    const newStatus = e.target.value;
                    setVulnerabilities(vulnerabilities.map(v => v.id === selectedVuln.id ? {...v, status: newStatus} : v));
                    setSelectedVuln({...selectedVuln, status: newStatus});
                  }} className={`text-xs font-bold px-2 py-1 rounded bg-transparent border ${curTheme.border} ${curTheme.heading} focus:outline-none appearance-none cursor-pointer`}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Risk Accepted">Risk Accepted</option>
                  </select>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityBadge(selectedVuln.severity)}`}>{selectedVuln.severity}</span>
                  <div className="ml-auto text-xs text-slate-400 flex items-center gap-2"><IconClock /> Discovered: {new Date(selectedVuln.discovered).toLocaleString()}</div>
                </div>
                <h3 className={`text-2xl font-bold ${curTheme.heading}`}>{selectedVuln.title}</h3>
              </div>
              <button onClick={() => setSelectedVuln(null)} className={`absolute top-6 right-6 p-2 rounded-lg ${curTheme.surface} ${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button>
            </div>
            
            <div className={`flex border-b ${curTheme.border} px-6 mt-2`}>
              {['Overview', 'Remediation & Tracking'].map(tab => (
                <button key={tab} onClick={() => setVulnDetailTab(tab)} className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${vulnDetailTab === tab ? `${curColor.text} ${curColor.borderSolid}` : `border-transparent ${curTheme.textMuted} hover:${curTheme.heading}`}`}>{tab}</button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-gradient-to-b from-transparent to-black/5">
              {vulnDetailTab === 'Overview' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className={`grid grid-cols-3 gap-4 p-5 rounded-xl ${curTheme.surface} border ${curTheme.border} shadow-inner`}>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Asset/Target</span><div className={`flex items-center gap-1 text-sm font-medium ${curTheme.heading}`}><IconServer /> {selectedVuln.asset}</div></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>CVSS Score</span><span className={`text-lg font-black ${getSeverityBadge(selectedVuln.severity).split(' ')[1]}`}>{selectedVuln.cvss}</span></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Exploitability</span><span className={`text-sm font-medium ${curTheme.heading}`}>{selectedVuln.exploitability}</span></div>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${curTheme.heading} mb-3 flex items-center gap-2`}><IconAlertCircle /> Vulnerability Details</h4>
                    <div className={`p-5 rounded-xl ${curTheme.surface} border ${curTheme.border}`}>
                      <p className={`text-sm ${curTheme.text} leading-relaxed whitespace-pre-wrap`}>{selectedVuln.description}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {vulnDetailTab === 'Remediation & Tracking' && (
                <div className="space-y-6 animate-in fade-in duration-300 flex flex-col h-full">
                  <div className={`grid grid-cols-2 gap-4 p-5 rounded-xl ${curTheme.surface} border ${curTheme.border}`}>
                     <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Remediation Status</span><span className={`text-sm font-medium ${curTheme.heading}`}>{selectedVuln.remediation}</span></div>
                     <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Verification Status</span><div className={`flex items-center gap-1 text-sm font-medium ${selectedVuln.status === 'Resolved' ? 'text-emerald-500' : 'text-amber-500'}`}>{selectedVuln.status === 'Resolved' ? <><IconCheckCircle /> Verified Safe</> : <><IconActivity /> Pending Fix</>}</div></div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-4">
                    <h4 className={`text-sm font-bold ${curTheme.heading} mb-3`}>Remediation Log</h4>
                    {selectedVuln.remediationNotes && selectedVuln.remediationNotes.length > 0 ? selectedVuln.remediationNotes.map((note, idx) => (
                      <div key={idx} className={`p-4 rounded-xl ${curTheme.surface} border ${curTheme.border}`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-xs font-bold ${curTheme.heading}`}>{note.author}</span>
                          <span className={`text-[10px] ${curTheme.textMuted}`}>{new Date(note.date).toLocaleString()}</span>
                        </div>
                        <p className={`text-sm ${curTheme.text}`}>{note.note}</p>
                      </div>
                    )) : (
                      <p className={`text-sm ${curTheme.textMuted} italic`}>No remediation notes added yet.</p>
                    )}
                  </div>
                  <div className={`mt-auto pt-4 border-t ${curTheme.border}`}>
                    <textarea placeholder="Add a remediation note..." value={vulnRemediationNote} onChange={(e) => setVulnRemediationNote(e.target.value)} className={`w-full ${curTheme.input} border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${curColor.ring} h-20 resize-none mb-2`}></textarea>
                    <div className="flex justify-end">
                      <button onClick={() => { 
                        if (!vulnRemediationNote) return;
                        const newNote = { date: new Date().toISOString(), note: vulnRemediationNote, author: 'Current User' };
                        const updatedVuln = {...selectedVuln, remediationNotes: [...selectedVuln.remediationNotes, newNote]};
                        setVulnerabilities(vulnerabilities.map(v => v.id === updatedVuln.id ? updatedVuln : v));
                        setSelectedVuln(updatedVuln);
                        setVulnRemediationNote('');
                      }} className={`px-4 py-2 rounded-lg text-white text-sm font-medium shadow-md transition-all ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-amber-500 hover:bg-amber-400'}`}>Add Note</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsTicketModalOpen(false)}></div>
          <div className={`relative w-full max-w-lg ${curTheme.surfaceSolid} border ${curTheme.border} rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden`}>
            <div className={`px-6 py-4 border-b ${curTheme.border} flex justify-between items-center bg-black/5`}><h3 className={`text-lg font-bold ${curTheme.heading}`}>Create New Incident</h3><button onClick={() => setIsTicketModalOpen(false)} className={`${curTheme.textMuted} hover:${curTheme.heading}`}><IconX /></button></div>
            <form onSubmit={handleCreateTicket} className="p-6 space-y-5">
              <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Issue Title</label><input required type="text" value={newTicket.title} onChange={e => setNewTicket({...newTicket, title: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Severity</label><select value={newTicket.severity} onChange={e => setNewTicket({...newTicket, severity: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Category</label><select value={newTicket.category} onChange={e => setNewTicket({...newTicket, category: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Network</option><option>Access Control</option><option>Phishing</option><option>Malware</option><option>Other</option></select></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Source</label><select value={newTicket.source} onChange={e => setNewTicket({...newTicket, source: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>Manual</option><option>SIEM Alert</option><option>EDR Alert</option><option>User Reported</option></select></div>
                <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Initial Status</label><select value={newTicket.status} onChange={e => setNewTicket({...newTicket, status: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 ${curColor.ring}`}><option>New</option><option>Investigating</option></select></div>
              </div>
              <div><label className={`block text-xs font-bold ${curTheme.textMuted} uppercase tracking-wider mb-2`}>Description / Evidence</label><textarea required value={newTicket.description} onChange={e => setNewTicket({...newTicket, description: e.target.value})} className={`w-full ${curTheme.input} border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${curColor.ring} h-24 resize-none`}></textarea></div>
              <div className={`pt-4 border-t ${curTheme.border} flex justify-end gap-3`}><button type="button" onClick={() => setIsTicketModalOpen(false)} className={`px-4 py-2 rounded-lg border ${curTheme.border} text-sm font-medium ${curTheme.text} hover:${curTheme.surface}`}>Cancel</button><button type="submit" className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${config.primary === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'}`}>Create Incident</button></div>
            </form>
          </div>
        </div>
      )}
      
      
      {selectedThreat && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedThreat(null)}></div>
          <div className={`relative w-full max-w-3xl h-full ${curTheme.surfaceSolid} border-l ${curTheme.border} shadow-2xl flex flex-col animate-in slide-in-from-right duration-300`}>
            <div className={`p-6 flex items-start justify-between border-b ${curTheme.border} bg-black/20`}>
              <div className="space-y-3 w-full pr-8">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 border ${curTheme.border} ${curTheme.text}`}>{getThreatTypeIcon(selectedThreat.type)} {selectedThreat.type}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getThreatConfidenceBadge(selectedThreat.confidence)}`}>{selectedThreat.confidence} Confidence</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${getSeverityBadge(selectedThreat.severity)}`}>{selectedThreat.severity} Severity</span>
                  <div className="ml-auto text-xs text-slate-400 flex items-center gap-2"><IconClock /> First Seen: {new Date(selectedThreat.firstSeen).toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className={`text-2xl font-mono font-bold ${curColor.text} break-all`}>{selectedThreat.value}</h3>
                </div>
              </div>
              <button onClick={() => setSelectedThreat(null)} className={`absolute top-6 right-6 p-2 rounded-lg ${curTheme.surface} ${curTheme.textMuted} hover:${curTheme.heading} transition-colors`}><IconX /></button>
            </div>
            
            <div className={`flex border-b ${curTheme.border} px-6 mt-2`}>
              {['Overview', 'Enrichment Data', 'Notes & Activity'].map(tab => (
                <button key={tab} onClick={() => setThreatDetailTab(tab)} className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${threatDetailTab === tab ? `${curColor.text} ${curColor.borderSolid}` : `border-transparent ${curTheme.textMuted} hover:${curTheme.heading}`}`}>{tab}</button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-gradient-to-b from-transparent to-black/5">
              {threatDetailTab === 'Overview' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className={`grid grid-cols-2 gap-4 p-5 rounded-xl ${curTheme.surface} border ${curTheme.border} shadow-inner`}>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Source Feed</span><span className={`text-sm font-medium ${curTheme.heading}`}>{selectedThreat.source}</span></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Status</span><span className={`text-sm font-medium ${selectedThreat.status === 'Active' ? 'text-rose-500' : 'text-emerald-500'}`}>{selectedThreat.status}</span></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>First Seen</span><span className={`text-sm font-medium ${curTheme.heading}`}>{new Date(selectedThreat.firstSeen).toLocaleString()}</span></div>
                    <div><span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>Last Seen</span><span className={`text-sm font-medium ${curTheme.heading}`}>{new Date(selectedThreat.lastSeen).toLocaleString()}</span></div>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${curTheme.heading} mb-3 flex items-center gap-2`}><IconActivity /> Tags & Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedThreat.tags.map((tag, i) => <span key={i} className={`px-3 py-1 bg-black/20 border ${curTheme.border} rounded-lg text-sm font-medium ${curTheme.text}`}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              )}
              
              {threatDetailTab === 'Enrichment Data' && (
                <div className="space-y-6 animate-in fade-in duration-300 flex flex-col h-full">
                  <div className={`p-5 rounded-xl ${curTheme.surface} border border-blue-500/30 bg-blue-500/5`}>
                     <div className="flex items-center gap-2 mb-4"><div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div><h4 className={`text-sm font-bold ${curTheme.heading}`}>Automated Enrichment (VirusTotal / OTX)</h4></div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                        {Object.entries(selectedThreat.enrichment).map(([k, v], i) => (
                           <div key={i} className="border-b border-blue-500/10 pb-2">
                             <span className={`block text-[10px] font-bold ${curTheme.textMuted} uppercase tracking-wider mb-1`}>{k.replace('_', ' ')}</span>
                             <span className={`text-sm font-medium ${curTheme.heading}`}>{v}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                </div>
              )}

              {threatDetailTab === 'Notes & Activity' && (
                <div className="space-y-6 animate-in fade-in duration-300 flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {selectedThreat.notes && selectedThreat.notes.length > 0 ? selectedThreat.notes.map((note, idx) => (
                      <div key={idx} className={`p-4 rounded-xl ${curTheme.surface} border ${curTheme.border}`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-xs font-bold ${curTheme.heading}`}>{note.author}</span>
                          <span className={`text-[10px] ${curTheme.textMuted}`}>{new Date(note.date).toLocaleString()}</span>
                        </div>
                        <p className={`text-sm ${curTheme.text}`}>{note.note}</p>
                      </div>
                    )) : (
                      <p className={`text-sm ${curTheme.textMuted} italic`}>No analyst notes added yet.</p>
                    )}
                  </div>
                  <div className={`mt-auto pt-4 border-t ${curTheme.border}`}>
                    <textarea placeholder="Add an observation or note..." value={threatNoteInput} onChange={(e) => setThreatNoteInput(e.target.value)} className={`w-full ${curTheme.input} border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${curColor.ring} h-20 resize-none mb-2`}></textarea>
                    <div className="flex justify-end">
                      <button onClick={() => { 
                        if (!threatNoteInput) return;
                        const newNote = { date: new Date().toISOString(), note: threatNoteInput, author: 'Analyst' };
                        const updatedThreat = {...selectedThreat, notes: [...selectedThreat.notes, newNote]};
                        setThreats(threats.map(t => t.id === updatedThreat.id ? updatedThreat : t));
                        setSelectedThreat(updatedThreat);
                        setThreatNoteInput('');
                      }} className={`px-4 py-2 rounded-lg text-white text-sm font-medium shadow-md transition-all ${config.primary === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-amber-500 hover:bg-amber-400'}`}>Add Note</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
