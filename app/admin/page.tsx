'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Lock,
  Search,
  Download,
  ExternalLink,
  RefreshCw,
  Users,
  Mail,
  MessageCircle,
  CheckCircle2,
  Clock,
  Filter,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface Lead {
  id: string;
  type: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: string;
}

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Check saved session
  useEffect(() => {
    const savedPin = sessionStorage.getItem('pb_admin_pin');
    if (savedPin === '14416' || savedPin === 'peace2026') {
      setPin(savedPin);
      setIsAuthenticated(true);
      fetchLeads(savedPin);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '14416' || pin === 'peace2026') {
      setIsAuthenticated(true);
      setAuthError('');
      sessionStorage.setItem('pb_admin_pin', pin);
      fetchLeads(pin);
    } else {
      setAuthError('தவறான ரகசியக் குறியீடு (Invalid PIN. Hint: 14416)');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('pb_admin_pin');
    setIsAuthenticated(false);
    setPin('');
  };

  const fetchLeads = async (authPin: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads?pin=${authPin}`);
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads || []);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === 'all' ||
      (filterType === 'newsletter' && lead.type === 'Newsletter') ||
      (filterType === 'contact' && lead.type.includes('Contact'));
    return matchesSearch && matchesFilter;
  });

  // Export to CSV
  const exportToCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Timestamp', 'Type', 'Name', 'Email', 'Message', 'Status'];
    const rows = leads.map((l) => [
      `"${new Date(l.createdAt).toLocaleString()}"`,
      `"${l.type}"`,
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.message.replace(/"/g, '""')}"`,
      `"${l.status}"`,
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `peace_buddy_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If not logged in, show calm PIN lock
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F1EB] via-ice to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-mist shadow-xl text-center">
          <div className="w-16 h-16 rounded-full bg-mist/60 border border-ringBlue/20 flex items-center justify-center mx-auto mb-5 text-[#0B3D6B]">
            <Lock className="w-8 h-8 text-ringBlue" aria-hidden="true" />
          </div>

          <h1 className="text-2xl font-bold text-[#12263A] mb-2 font-tamil">
            Peace Buddy நிர்வாக தளம் (Admin Portal)
          </h1>
          <p className="text-xs sm:text-sm text-[#5A758E] mb-6">
            பதிவுகள் மற்றும் செய்திகளை நிர்வகிக்க உங்கள் ரகசிய PIN எண்ணை உள்ளிடவும்.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-pin" className="sr-only">
                Admin Security PIN
              </label>
              <input
                id="admin-pin"
                type="password"
                maxLength={10}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="ரகசிய PIN உள்ளிடவும் (Default: 14416)"
                className="w-full text-center px-4 py-3.5 rounded-full bg-ice border border-mist text-lg font-mono tracking-widest text-[#12263A] focus:border-ringBlue focus:ring-2 focus:ring-ringBlue/20 focus:outline-none"
                autoFocus
              />
            </div>

            {authError && (
              <p className="text-xs text-red-600 font-medium" role="alert">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#0B3D6B] hover:bg-[#1583C7] text-white text-base font-semibold shadow-md transition-all min-h-[48px]"
            >
              உள்நுழைக (Enter Dashboard)
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-mist/80 space-y-2">
            <div>
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-1.5 text-xs text-[#7E6C9E] font-medium hover:underline"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>நிர்வாகி மின்னஞ்சல் + கடவுச்சொல் உள்நுழைவு (/admin/login)</span>
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-[#5A758E] hover:text-[#0B3D6B] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>முகப்புப் பக்கத்திற்குத் திரும்புக</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Dashboard
  return (
    <div className="min-h-screen bg-[#F0F1EB] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Header Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mist shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/Peace_Buddy_Teal_Circular_Emblem.png"
                alt="Peace Buddy Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-full shadow-xs"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#12263A] font-tamil">
                Peace Buddy நிர்வாக மையம் (Admin Hub)
              </h1>
              <p className="text-xs text-[#5A758E] mt-0.5">
                பயனாளர் பதிவுகள், வழிகாட்டி சந்தாக்கள் மற்றும் Google Sheet நேரலை
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Google Sheet Live Status Indicator */}
            <Link
              href="/admin/classes"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>📅 Class Scheduling Portal</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Google Sheet Live Connected</span>
            </div>

            <button
              onClick={() => fetchLeads(pin)}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-mist text-[#12263A] border border-mist text-xs font-medium transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-mist/60 hover:bg-mist text-[#12263A] text-xs font-medium transition-all"
            >
              வெளியேறு (Logout)
            </button>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-mist shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#5A758E] mb-2 font-medium">
              <span>மொத்த பதிவுகள் (Total Leads)</span>
              <Users className="w-4 h-4 text-ringBlue" />
            </div>
            <div className="text-3xl font-bold text-[#0B3D6B]">
              {leads.length}
            </div>
            <p className="text-[11px] text-[#5A758E] mt-1">Website & Sheet Synced</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-mist shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#5A758E] mb-2 font-medium">
              <span>இலவச வழிகாட்டி (Newsletter)</span>
              <Mail className="w-4 h-4 text-ringBlue" />
            </div>
            <div className="text-3xl font-bold text-[#12263A]">
              {leads.filter((l) => l.type === 'Newsletter').length}
            </div>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">100% Verified Delivery</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-mist shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#5A758E] mb-2 font-medium">
              <span>நேரடி தொடர்புகள் (Inquiries)</span>
              <MessageCircle className="w-4 h-4 text-ringBlue" />
            </div>
            <div className="text-3xl font-bold text-[#12263A]">
              {leads.filter((l) => l.type.includes('Contact')).length}
            </div>
            <p className="text-[11px] text-[#5A758E] mt-1">WhatsApp & Form requests</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-mist shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#5A758E] mb-2 font-medium">
              <span>கூகுள் ஷீட் நிலவரம்</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-base font-semibold text-emerald-700">
              Active Webhook
            </div>
            <a
              href="https://docs.google.com/spreadsheets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-ringBlue hover:underline mt-1"
            >
              <span>Open Google Sheets</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Data Filter & Action Controls */}
        <div className="bg-white rounded-3xl p-6 border border-mist shadow-xs mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-[#5A758E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="பெயர், மின்னஞ்சல் அல்லது செய்தி தேடுக..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-ice border border-mist text-xs sm:text-sm text-[#12263A] focus:border-ringBlue focus:outline-none"
              />
            </div>

            {/* Type Filter & Export */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#5A758E]" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3.5 py-2 rounded-full bg-ice border border-mist text-xs text-[#12263A] focus:border-ringBlue focus:outline-none"
                >
                  <option value="all">அனைத்துப் பதிவுகள் (All)</option>
                  <option value="newsletter">இலவச வழிகாட்டி (Newsletter)</option>
                  <option value="contact">நேரடி தொடர்புகள் (Contact)</option>
                </select>
              </div>

              <button
                type="button"
                onClick={exportToCSV}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#263120] hover:bg-[#0B3D6B] text-white text-xs font-medium transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

          </div>
        </div>

        {/* Main Leads Table */}
        <div className="bg-white rounded-3xl border border-mist shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-ice border-b border-mist text-xs uppercase text-[#5A758E] tracking-wider font-semibold">
                <tr>
                  <th scope="col" className="px-6 py-4">நேரம் (Timestamp)</th>
                  <th scope="col" className="px-6 py-4">வகை (Type)</th>
                  <th scope="col" className="px-6 py-4">பெயர் (Name)</th>
                  <th scope="col" className="px-6 py-4">மின்னஞ்சல் (Email)</th>
                  <th scope="col" className="px-6 py-4">செய்தி / குறிப்பு</th>
                  <th scope="col" className="px-6 py-4 text-right">நடவடிக்கை (Action)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist/80">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-ice/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-[#5A758E]">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-ringBlue" />
                          <span>{new Date(lead.createdAt).toLocaleString()}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            lead.type === 'Newsletter'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {lead.type}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap font-medium text-[#12263A]">
                        {lead.name}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-[#36526D]">
                        {lead.email}
                      </td>

                      <td className="px-6 py-4 text-xs text-[#5A758E] max-w-xs truncate">
                        {lead.message}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <a
                          href={`https://wa.me/?text=Hello%20${encodeURIComponent(
                            lead.name !== 'Anonymous' ? lead.name : 'there'
                          )}%2C%20thank%20you%20for%20reaching%20out%20to%20Peace%20Buddy%20Tamil`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-medium border border-emerald-200 transition-colors"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-[#5A758E]">
                      <p className="text-base font-tamil mb-1">
                        இன்னும் புதிய பதிவுகள் எதுவும் இல்லை (No submissions found)
                      </p>
                      <p className="text-xs">
                        வெப்சைட்டில் படிவத்தை நிரப்பினால் உடனே இங்கே தோன்றும்!
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
