'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  Edit2,
  CalendarClock,
  XCircle,
  Trash2,
  Search,
  ExternalLink,
  Shield,
  RefreshCw,
  LogOut,
  Mail,
  CheckCircle2,
  AlertCircle,
  Video,
  ArrowRight,
  Filter,
  Users,
} from 'lucide-react';

interface ClassItem {
  id: string;
  name: string;
  description: string;
  date: string;
  start_time: string;
  duration_minutes: number;
  meet_link: string;
  status: 'scheduled' | 'postponed' | 'cancelled';
  original_date?: string | null;
  original_time?: string | null;
  postpone_reason?: string | null;
  cancel_reason?: string | null;
  created_at: string;
  updated_at: string;
}

interface EmailLogItem {
  id: string;
  class_id?: string | null;
  class_name?: string | null;
  recipient_email: string;
  type: string;
  status: 'sent' | 'failed';
  error_message?: string | null;
  sent_at: string;
}

export default function AdminClassesPage() {
  const router = useRouter();

  // Authentication state
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [currentAdminEmail, setCurrentAdminEmail] = useState('');

  // Data states
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [emailLogs, setEmailLogs] = useState<EmailLogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'classes' | 'logs'>('classes');

  // Filter states
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPostponeModalOpen, setIsPostponeModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Selected class for actions
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  // Form states for Add/Edit
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formStartTime, setFormStartTime] = useState('');
  const [formDuration, setFormDuration] = useState('45');
  const [formMeetLink, setFormMeetLink] = useState('');

  // Form states for Postpone
  const [postponeNewDate, setPostponeNewDate] = useState('');
  const [postponeNewTime, setPostponeNewTime] = useState('');
  const [postponeNewMeetLink, setPostponeNewMeetLink] = useState('');
  const [postponeReason, setPostponeReason] = useState('');

  // Form state for Cancel
  const [cancelReason, setCancelReason] = useState('');

  // Toast notification state
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  // Live IST Clock
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  // Check admin session
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        // Also check sessionStorage PIN fallback
        const savedPin = typeof window !== 'undefined' ? sessionStorage.getItem('pb_admin_pin') : null;
        const isPinAdmin = savedPin === '14416' || savedPin === 'peace2026';

        if (data.authenticated && data.role === 'admin') {
          setIsAdmin(true);
          setCurrentAdminEmail(data.user?.email || 'admin@peacebuddytamil.com');
          fetchClasses();
          fetchLogs();
        } else if (isPinAdmin) {
          setIsAdmin(true);
          setCurrentAdminEmail('admin (PIN session)');
          fetchClasses();
          fetchLogs();
        } else {
          setIsAdmin(false);
          router.push('/admin/login');
        }
      } catch {
        router.push('/admin/login');
      }
    }
    checkAuth();
  }, [router]);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/classes');
      const data = await res.json();
      if (data.success) {
        setClasses(data.classes || []);
      } else {
        showToast('error', data.error || 'Failed to fetch classes');
      }
    } catch {
      showToast('error', 'Network error fetching classes');
    } finally {
      setLoading(false);
    }
  };

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/admin/email-logs');
      const data = await res.json();
      if (data.success) {
        setEmailLogs(data.logs || []);
      }
    } catch {
      // ignore
    }
  };

  const handleLogout = async () => {
    sessionStorage.removeItem('pb_admin_pin');
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  // Open Edit Modal
  const openEditModal = (cls: ClassItem) => {
    setSelectedClass(cls);
    setFormName(cls.name);
    setFormDescription(cls.description || '');
    setFormDate(cls.date);
    setFormStartTime(cls.start_time);
    setFormDuration(String(cls.duration_minutes));
    setFormMeetLink(cls.meet_link);
    setIsEditModalOpen(true);
  };

  // Open Postpone Modal
  const openPostponeModal = (cls: ClassItem) => {
    setSelectedClass(cls);
    setPostponeNewDate('');
    setPostponeNewTime(cls.start_time);
    setPostponeNewMeetLink('');
    setPostponeReason('');
    setIsPostponeModalOpen(true);
  };

  // Open Cancel Modal
  const openCancelModal = (cls: ClassItem) => {
    setSelectedClass(cls);
    setCancelReason('');
    setIsCancelModalOpen(true);
  };

  // Open Delete Modal
  const openDeleteModal = (cls: ClassItem) => {
    setSelectedClass(cls);
    setIsDeleteModalOpen(true);
  };

  // Handle Create Class
  const handleCreateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);

    try {
      const res = await fetch('/api/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          description: formDescription,
          date: formDate,
          start_time: formStartTime,
          duration_minutes: Number(formDuration),
          meet_link: formMeetLink,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to create class');
      }

      showToast('success', 'புதிய வகுப்பு உருவாக்கப்பட்டு, அனைத்து சந்தாதாரர்களுக்கும் மின்னஞ்சல் அனுப்பப்பட்டது!');
      setIsAddModalOpen(false);
      // Reset form
      setFormName('');
      setFormDescription('');
      setFormDate('');
      setFormStartTime('');
      setFormMeetLink('');
      fetchClasses();
      fetchLogs();
    } catch (err: any) {
      showToast('error', err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Edit Class
  const handleUpdateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass) return;
    setActionLoading(true);

    try {
      const res = await fetch(`/api/classes/${selectedClass.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          description: formDescription,
          date: formDate,
          start_time: formStartTime,
          duration_minutes: Number(formDuration),
          meet_link: formMeetLink,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to update class');
      }

      showToast('success', 'வகுப்பு விவரங்கள் புதுப்பிக்கப்பட்டு அறிவிப்பு அனுப்பப்பட்டது!');
      setIsEditModalOpen(false);
      fetchClasses();
      fetchLogs();
    } catch (err: any) {
      showToast('error', err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Postpone Class
  const handlePostponeClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass) return;
    setActionLoading(true);

    try {
      const res = await fetch(`/api/classes/${selectedClass.id}/postpone`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          new_date: postponeNewDate,
          new_start_time: postponeNewTime,
          new_meet_link: postponeNewMeetLink,
          postpone_reason: postponeReason,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to postpone class');
      }

      showToast('success', 'வகுப்பு ஒத்திவைக்கப்பட்டது மற்றும் அறிவிப்பு மின்னஞ்சல் அனுப்பப்பட்டது!');
      setIsPostponeModalOpen(false);
      fetchClasses();
      fetchLogs();
    } catch (err: any) {
      showToast('error', err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Cancel Class
  const handleCancelClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass) return;
    setActionLoading(true);

    try {
      const res = await fetch(`/api/classes/${selectedClass.id}/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cancel_reason: cancelReason }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to cancel class');
      }

      showToast('success', 'வகுப்பு ரத்து செய்யப்பட்டு மின்னஞ்சல் அனுப்பப்பட்டது!');
      setIsCancelModalOpen(false);
      fetchClasses();
      fetchLogs();
    } catch (err: any) {
      showToast('error', err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Delete Class
  const handleDeleteClass = async () => {
    if (!selectedClass) return;
    setActionLoading(true);

    try {
      const res = await fetch(`/api/classes/${selectedClass.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete class');
      }

      showToast('success', 'வகுப்பு முழுமையாக நீக்கப்பட்டது');
      setIsDeleteModalOpen(false);
      fetchClasses();
    } catch (err: any) {
      showToast('error', err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Filtered classes calculation
  const filteredClasses = useMemo(() => {
    let result = [...classes];

    const nowStr = new Date().toISOString().slice(0, 16);

    if (statusFilter === 'upcoming') {
      result = result.filter((c) => c.status !== 'cancelled' && `${c.date}T${c.start_time}` >= nowStr);
    } else if (statusFilter === 'postponed') {
      result = result.filter((c) => c.status === 'postponed');
    } else if (statusFilter === 'cancelled') {
      result = result.filter((c) => c.status === 'cancelled');
    } else if (statusFilter === 'past') {
      result = result.filter((c) => `${c.date}T${c.start_time}` < nowStr);
    }

    if (dateFilter) {
      result = result.filter((c) => c.date === dateFilter);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q))
      );
    }

    return result;
  }, [classes, statusFilter, dateFilter, searchTerm]);

  // Metrics calculation
  const metrics = useMemo(() => {
    const nowStr = new Date().toISOString().slice(0, 16);
    return {
      total: classes.length,
      upcoming: classes.filter((c) => c.status !== 'cancelled' && `${c.date}T${c.start_time}` >= nowStr).length,
      postponed: classes.filter((c) => c.status === 'postponed').length,
      cancelled: classes.filter((c) => c.status === 'cancelled').length,
    };
  }, [classes]);

  if (isAdmin === null) {
    return (
      <div className="min-h-screen bg-[#FDFBFE] flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#7E6C9E] font-medium text-sm">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>அங்கீகரிக்கப்படுகிறது (Verifying Admin Access)...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBFE] pt-24 pb-20">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-[9999] max-w-md animate-fade-in">
          <div
            className={`p-4 rounded-2xl shadow-2xl border flex items-start gap-3 ${
              toast.type === 'success'
                ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]'
                : 'bg-[#FFF1F2] border-[#FECDD3] text-[#9F1239]'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#059669]" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#E11D48]" />
            )}
            <div className="flex-1 text-sm font-medium">{toast.message}</div>
            <button
              onClick={() => setToast(null)}
              className="text-xs opacity-70 hover:opacity-100 font-bold ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8DFEF] mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#7E6C9E]/10 text-[#7E6C9E]">
                <Shield className="w-5 h-5" />
              </span>
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#2D2342]">
                  Peace Buddy — Class Scheduling Portal
                </h1>
                <p className="text-xs text-[#7A6E91]">
                  Logged in as: <strong className="text-[#2D2342]">{currentAdminEmail}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* IST Time Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFEF] text-xs font-mono text-[#2D2342] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#7E6C9E]" />
              <span>IST (Asia/Kolkata): {istTime}</span>
            </div>

            {/* Leads Link */}
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EFF7] hover:bg-[#E8DFEF] text-xs font-medium text-[#7E6C9E] transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Leads & Messages</span>
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FFF1F2] border border-[#E8DFEF] hover:border-[#FECDD3] text-xs font-medium text-[#5A4D6E] hover:text-[#BE123C] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-[#E8DFEF] shadow-xs">
            <span className="text-xs text-[#7A6E91] font-medium uppercase tracking-wider">Total Classes</span>
            <div className="text-2xl font-serif font-semibold text-[#2D2342] mt-1">{metrics.total}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#A7F3D0]/60 shadow-xs">
            <span className="text-xs text-[#065F46] font-medium uppercase tracking-wider">Upcoming</span>
            <div className="text-2xl font-serif font-semibold text-[#065F46] mt-1">{metrics.upcoming}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#FDE68A]/80 shadow-xs">
            <span className="text-xs text-[#B45309] font-medium uppercase tracking-wider">Postponed</span>
            <div className="text-2xl font-serif font-semibold text-[#B45309] mt-1">{metrics.postponed}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#FECDD3]/80 shadow-xs">
            <span className="text-xs text-[#BE123C] font-medium uppercase tracking-wider">Cancelled</span>
            <div className="text-2xl font-serif font-semibold text-[#BE123C] mt-1">{metrics.cancelled}</div>
          </div>
        </div>

        {/* Action Bar & Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 p-1 bg-[#F5EFF7] rounded-full w-fit">
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'classes'
                  ? 'bg-white text-[#2D2342] shadow-xs font-semibold'
                  : 'text-[#7A6E91] hover:text-[#2D2342]'
              }`}
            >
              Classes Management ({classes.length})
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'logs'
                  ? 'bg-white text-[#2D2342] shadow-xs font-semibold'
                  : 'text-[#7A6E91] hover:text-[#2D2342]'
              }`}
            >
              Email Notification Logs ({emailLogs.length})
            </button>
          </div>

          {activeTab === 'classes' && (
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Class / புதிய வகுப்பு</span>
            </button>
          )}
        </div>

        {activeTab === 'classes' ? (
          <>
            {/* Filters and Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#E8DFEF] shadow-xs mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="வகுப்பு பெயர் அல்லது விவரிப்பு கொண்டு தேடுங்கள்..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
                <Search className="w-4 h-4 text-[#7A6E91] absolute left-3 top-2.5" />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:outline-none focus:border-[#7E6C9E]"
                >
                  <option value="all">அனைத்து நிலைகளும் (All Status)</option>
                  <option value="upcoming">வரவிருக்கும் வகுப்புகள் (Upcoming)</option>
                  <option value="postponed">ஒத்திவைக்கப்பட்டவை (Postponed)</option>
                  <option value="cancelled">ரத்து செய்யப்பட்டவை (Cancelled)</option>
                  <option value="past">முடிந்த வகுப்புகள் (Past)</option>
                </select>

                {/* Date Picker Filter */}
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:outline-none focus:border-[#7E6C9E]"
                />

                {(statusFilter !== 'all' || dateFilter || searchTerm) && (
                  <button
                    onClick={() => {
                      setStatusFilter('all');
                      setDateFilter('');
                      setSearchTerm('');
                    }}
                    className="px-3 py-2 text-xs text-[#BE123C] hover:underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Classes Table */}
            <div className="bg-white rounded-2xl border border-[#E8DFEF] shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF7FB] border-b border-[#E8DFEF] text-[11px] font-semibold text-[#7A6E91] uppercase tracking-wider">
                      <th className="py-3.5 px-4">Class Details</th>
                      <th className="py-3.5 px-4">Date & Time (IST)</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Duration</th>
                      <th className="py-3.5 px-4">Google Meet Link</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DFEF] text-xs text-[#2D2342]">
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-[#7A6E91]">
                          <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#7E6C9E]" />
                          <span>வகுப்புகள் ஏற்றப்படுகின்றன...</span>
                        </td>
                      </tr>
                    ) : filteredClasses.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-[#7A6E91]">
                          <CalendarIcon className="w-8 h-8 mx-auto mb-2 text-[#A398B8] opacity-50" />
                          <p className="font-medium text-sm text-[#2D2342]">எந்த வகுப்பும் காணப்படவில்லை</p>
                          <p className="text-xs text-[#7A6E91] mt-1">No classes match your current filter.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredClasses.map((cls) => {
                        return (
                          <tr key={cls.id} className="hover:bg-[#FAF7FB]/70 transition-colors">
                            {/* Class Details */}
                            <td className="py-4 px-4 max-w-xs">
                              <p className="font-semibold text-sm text-[#2D2342] font-serif">{cls.name}</p>
                              {cls.description && (
                                <p className="text-xs text-[#7A6E91] line-clamp-1 mt-0.5">{cls.description}</p>
                              )}
                              {cls.status === 'postponed' && cls.postpone_reason && (
                                <p className="text-[11px] text-[#B45309] bg-[#FFF9EE] px-2 py-0.5 rounded mt-1 inline-block">
                                  காரணம்: {cls.postpone_reason}
                                </p>
                              )}
                              {cls.status === 'cancelled' && cls.cancel_reason && (
                                <p className="text-[11px] text-[#BE123C] bg-[#FFF1F2] px-2 py-0.5 rounded mt-1 inline-block">
                                  காரணம்: {cls.cancel_reason}
                                </p>
                              )}
                            </td>

                            {/* Date & Time */}
                            <td className="py-4 px-4 whitespace-nowrap">
                              {cls.status === 'postponed' && cls.original_date ? (
                                <div>
                                  <div className="line-through text-[#A398B8] text-[11px]">
                                    {cls.original_date} @ {cls.original_time}
                                  </div>
                                  <div className="font-semibold text-[#D97706]">
                                    {cls.date} @ {cls.start_time} IST
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <div className="font-medium">{cls.date}</div>
                                  <div className="text-[11px] text-[#7A6E91]">{cls.start_time} IST</div>
                                </div>
                              )}
                            </td>

                            {/* Status */}
                            <td className="py-4 px-4 whitespace-nowrap">
                              {cls.status === 'scheduled' && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                                  Scheduled
                                </span>
                              )}
                              {cls.status === 'postponed' && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]">
                                  Postponed
                                </span>
                              )}
                              {cls.status === 'cancelled' && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]">
                                  Cancelled
                                </span>
                              )}
                            </td>

                            {/* Duration */}
                            <td className="py-4 px-4 whitespace-nowrap text-[#5A4D6E]">
                              {cls.duration_minutes} mins
                            </td>

                            {/* Google Meet Link */}
                            <td className="py-4 px-4 max-w-[200px] truncate">
                              <a
                                href={cls.meet_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[#7E6C9E] hover:underline"
                              >
                                <Video className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="truncate">{cls.meet_link}</span>
                                <ExternalLink className="w-3 h-3 flex-shrink-0" />
                              </a>
                            </td>

                            {/* Actions */}
                            <td className="py-4 px-4 text-right whitespace-nowrap">
                              <div className="inline-flex items-center gap-1.5">
                                {/* Edit */}
                                <button
                                  onClick={() => openEditModal(cls)}
                                  title="Edit Class"
                                  className="p-1.5 rounded-lg text-[#5A4D6E] hover:bg-[#F5EFF7] hover:text-[#7E6C9E] transition-colors"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>

                                {/* Postpone */}
                                {cls.status !== 'cancelled' && (
                                  <button
                                    onClick={() => openPostponeModal(cls)}
                                    title="Postpone Class"
                                    className="p-1.5 rounded-lg text-[#B45309] hover:bg-[#FFF9EE] transition-colors"
                                  >
                                    <CalendarClock className="w-4 h-4" />
                                  </button>
                                )}

                                {/* Cancel */}
                                {cls.status !== 'cancelled' && (
                                  <button
                                    onClick={() => openCancelModal(cls)}
                                    title="Cancel Class"
                                    className="p-1.5 rounded-lg text-[#BE123C] hover:bg-[#FFF1F2] transition-colors"
                                  >
                                    <XCircle className="w-4 h-4" />
                                  </button>
                                )}

                                {/* Delete */}
                                <button
                                  onClick={() => openDeleteModal(cls)}
                                  title="Delete Class Permanently"
                                  className="p-1.5 rounded-lg text-[#7A6E91] hover:bg-[#FFF1F2] hover:text-[#BE123C] transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          /* Email Logs Table */
          <div className="bg-white rounded-2xl border border-[#E8DFEF] shadow-xs overflow-hidden">
            <div className="p-4 bg-[#FAF7FB] border-b border-[#E8DFEF] flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm text-[#2D2342]">Automated Email Notification Logs</h3>
                <p className="text-xs text-[#7A6E91]">
                  Displays the status of emails dispatched for Added, Edited, Postponed, and Cancelled classes.
                </p>
              </div>
              <button
                onClick={fetchLogs}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8DFEF] text-xs font-medium text-[#7E6C9E] hover:bg-[#F5EFF7]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF7FB] border-b border-[#E8DFEF] text-[11px] font-semibold text-[#7A6E91] uppercase tracking-wider">
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Recipient</th>
                    <th className="py-3 px-4">Event Type</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Sent Time (IST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DFEF] text-xs text-[#2D2342]">
                  {emailLogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-[#7A6E91]">
                        No email notification logs recorded yet.
                      </td>
                    </tr>
                  ) : (
                    emailLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-[#FAF7FB]/60">
                        <td className="py-3 px-4 font-medium">{log.class_name || log.class_id || 'N/A'}</td>
                        <td className="py-3 px-4 text-[#5A4D6E]">{log.recipient_email}</td>
                        <td className="py-3 px-4 uppercase text-[10px] font-semibold tracking-wider">
                          <span className="px-2 py-0.5 rounded-md bg-[#F5EFF7] text-[#7E6C9E]">{log.type}</span>
                        </td>
                        <td className="py-3 px-4">
                          {log.status === 'sent' ? (
                            <span className="inline-flex items-center gap-1 text-[#065F46] font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Sent
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[#BE123C] font-medium" title={log.error_message || ''}>
                              <AlertCircle className="w-3.5 h-3.5 text-[#E11D48]" /> Failed
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-[#7A6E91] text-[11px]">{new Date(log.sent_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* ===================================================================== */}
      {/* 1. ADD CLASS MODAL                                                    */}
      {/* ===================================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFEF] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-serif font-medium text-[#2D2342] mb-1">புதிய வகுப்பைச் சேர்க்க (Add New Class)</h2>
            <p className="text-xs text-[#7A6E91] mb-5">
              இந்த வகுப்பைச் சேர்த்ததும் அனைத்துப் பதிவு செய்த பயனர்களுக்கும் தானியங்கி மின்னஞ்சல் அறிவிப்பு செல்லும்.
            </p>

            <form onSubmit={handleCreateClass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2342] mb-1">Class Name / வகுப்பு பெயர் *</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="எ.கா: காலை பிரம்ம முகூர்த்த தியானம்"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2342] mb-1">Description / விவரிப்பு (Optional)</label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="வகுப்பு பற்றிய சிறு விளக்கம்..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Date / தேதி *</label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Start Time (IST) *</label>
                  <input
                    type="time"
                    required
                    value={formStartTime}
                    onChange={(e) => setFormStartTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Duration (Minutes) *</label>
                  <input
                    type="number"
                    required
                    min={5}
                    max={240}
                    value={formDuration}
                    onChange={(e) => setFormDuration(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Timezone</label>
                  <input
                    type="text"
                    disabled
                    value="IST (Asia/Kolkata)"
                    className="w-full px-3 py-2 rounded-xl bg-gray-100 border border-[#E8DFEF] text-xs text-gray-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2342] mb-1">Google Meet Link *</label>
                <input
                  type="url"
                  required
                  value={formMeetLink}
                  onChange={(e) => setFormMeetLink(e.target.value)}
                  placeholder="https://meet.google.com/abc-defg-hij"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
                <p className="text-[11px] text-[#7A6E91] mt-1">Must start with https://meet.google.com/...</p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8DFEF]">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#E8DFEF] text-xs font-medium text-[#5A4D6E] hover:bg-[#F5EFF7]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
                >
                  {actionLoading ? 'சேமிக்கப்படுகிறது...' : 'Add Class & Send Email'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 2. EDIT CLASS MODAL                                                   */}
      {/* ===================================================================== */}
      {isEditModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFEF] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-serif font-medium text-[#2D2342] mb-1">வகுப்பைத் திருத்து (Edit Class)</h2>
            <p className="text-xs text-[#7A6E91] mb-5">
              நேரம் அல்லது இணைப்பு மாறினால் சந்தாதாரர்களுக்குத் தானியங்கி மின்னஞ்சல் அனுப்பப்படும்.
            </p>

            <form onSubmit={handleUpdateClass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2342] mb-1">Class Name *</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2342] mb-1">Description</label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Start Time (IST) *</label>
                  <input
                    type="time"
                    required
                    value={formStartTime}
                    onChange={(e) => setFormStartTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Duration (Minutes) *</label>
                  <input
                    type="number"
                    required
                    min={5}
                    value={formDuration}
                    onChange={(e) => setFormDuration(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2D2342] mb-1">Timezone</label>
                  <input
                    type="text"
                    disabled
                    value="IST (Asia/Kolkata)"
                    className="w-full px-3 py-2 rounded-xl bg-gray-100 border border-[#E8DFEF] text-xs text-gray-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2342] mb-1">Google Meet Link *</label>
                <input
                  type="url"
                  required
                  value={formMeetLink}
                  onChange={(e) => setFormMeetLink(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:outline-none focus:border-[#7E6C9E]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8DFEF]">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#E8DFEF] text-xs font-medium text-[#5A4D6E] hover:bg-[#F5EFF7]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
                >
                  {actionLoading ? 'புதுப்பிக்கப்படுகிறது...' : 'Save & Notify'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 3. POSTPONE CLASS MODAL                                               */}
      {/* ===================================================================== */}
      {isPostponeModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#FDE68A]">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2.5 rounded-xl bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]">
                <CalendarClock className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl font-serif font-medium text-[#78350F]">வகுப்பை ஒத்திவைக்க (Postpone Class)</h2>
                <p className="text-xs text-[#92400E]">{selectedClass.name}</p>
              </div>
            </div>

            <div className="mb-4 p-3 rounded-xl bg-[#FFFDF8] border border-[#FDE68A]/80 text-xs text-[#92400E]">
              தற்போதைய நேரம்: <strong>{selectedClass.date} @ {selectedClass.start_time} IST</strong>
            </div>

            <form onSubmit={handlePostponeClass} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#78350F] mb-1">New Date / புதிய தேதி *</label>
                  <input
                    type="date"
                    required
                    value={postponeNewDate}
                    onChange={(e) => setPostponeNewDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#FDE68A] text-xs text-[#2D2342] focus:outline-none focus:border-[#D97706]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#78350F] mb-1">New Start Time (IST) *</label>
                  <input
                    type="time"
                    required
                    value={postponeNewTime}
                    onChange={(e) => setPostponeNewTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#FDE68A] text-xs text-[#2D2342] focus:outline-none focus:border-[#D97706]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#78350F] mb-1">New Google Meet Link (Optional)</label>
                <input
                  type="url"
                  value={postponeNewMeetLink}
                  onChange={(e) => setPostponeNewMeetLink(e.target.value)}
                  placeholder="பழைய இணைப்பையே பயன்படுத்த காலியாக விடலாம்"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#FDE68A] text-xs text-[#2D2342] focus:outline-none focus:border-[#D97706]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#78350F] mb-1">Reason for Postponing / ஒத்திவைப்புக்கான காரணம் (Optional)</label>
                <textarea
                  rows={2}
                  value={postponeReason}
                  onChange={(e) => setPostponeReason(e.target.value)}
                  placeholder="எ.கா: தவிர்க்க முடியாத தொழில்நுட்பக் காரணங்களால்..."
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#FDE68A] text-xs text-[#2D2342] focus:outline-none focus:border-[#D97706]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#FDE68A]">
                <button
                  type="button"
                  onClick={() => setIsPostponeModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
                >
                  {actionLoading ? 'ஒத்திவைக்கப்படுகிறது...' : 'Postpone & Send Email'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 4. CANCEL CLASS MODAL                                                 */}
      {/* ===================================================================== */}
      {isCancelModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#FECDD3]">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2.5 rounded-xl bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]">
                <XCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl font-serif font-medium text-[#9F1239]">வகுப்பை ரத்து செய்ய (Cancel Class)</h2>
                <p className="text-xs text-[#9F1239]/80">{selectedClass.name}</p>
              </div>
            </div>

            <p className="text-xs text-[#5A4D6E] mb-4">
              இந்த வகுப்பை ரத்து செய்ய விரும்புகிறீர்களா? இது அட்டவணையில் <strong>Cancelled</strong> எனக் காட்டப்படும் மற்றும் அனைத்துப் பயனர்களுக்கும் ரத்து செய்யப்பட்ட அறிவிப்பு மின்னஞ்சல் செல்லும்.
            </p>

            <form onSubmit={handleCancelClass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#9F1239] mb-1">Reason for Cancellation / ரத்துக்கான காரணம் (Optional)</label>
                <textarea
                  rows={2}
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="காரணத்தைக் குறிப்பிடலாம்..."
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#FECDD3] text-xs text-[#2D2342] focus:outline-none focus:border-[#BE123C]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#FECDD3]">
                <button
                  type="button"
                  onClick={() => setIsCancelModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-full bg-[#BE123C] hover:bg-[#9F1239] text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
                >
                  {actionLoading ? 'ரத்து செய்யப்படுகிறது...' : 'Confirm Cancel & Send Email'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 5. DELETE CLASS MODAL                                                 */}
      {/* ===================================================================== */}
      {isDeleteModalOpen && selectedClass && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>

            <h2 className="text-lg font-serif font-semibold text-[#2D2342] mb-2">வகுப்பை நிரந்தரமாக நீக்கவா?</h2>
            <p className="text-xs text-[#7A6E91] mb-6">
              <strong>&ldquo;{selectedClass.name}&rdquo;</strong> என்ற வகுப்பு நிரந்தரமாக நீக்கப்படும். இந்த செயலை மாற்றியமைக்க முடியாது.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-5 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteClass}
                disabled={actionLoading}
                className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
              >
                {actionLoading ? 'நீக்கப்படுகிறது...' : 'Yes, Delete Permanently'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
