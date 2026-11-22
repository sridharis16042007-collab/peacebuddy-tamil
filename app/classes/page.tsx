'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  ExternalLink,
  Lock,
  Sparkles,
  AlertCircle,
  RefreshCw,
  CheckCircle2,
  CalendarClock,
  XCircle,
  LogIn,
  ArrowRight,
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
}

export default function ClassesPage() {
  const { lang, t } = useLanguage();

  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [now, setNow] = useState<number>(Date.now());
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // Live timer for live countdowns every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 10000);
    return () => clearInterval(timer);
  }, []);

  // Fetch classes & auth status
  const fetchClasses = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/classes');
      const data = await res.json();
      if (data.success) {
        setClasses(data.classes || []);
        setIsLoggedIn(!!data.isLoggedIn);
        setIsPaid(!!data.isPaid);
        setUserRole(data.userRole || null);
      } else {
        setError(data.error || 'Failed to load class schedule');
      }
    } catch {
      setError('Unable to reach server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // Format date helper in IST
  const formatDate = (dateStr: string) => {
    try {
      const [y, m, d] = dateStr.split('-');
      const date = new Date(Number(y), Number(m) - 1, Number(d));
      return date.toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Format time helper in 12h IST
  const formatTime = (timeStr: string) => {
    try {
      const [h, m] = timeStr.split(':');
      const hour = Number(h);
      const minute = m || '00';
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minute} ${ampm} (IST)`;
    } catch {
      return `${timeStr} (IST)`;
    }
  };

  // Helper to parse IST timestamps
  const getClassTimestamps = (cls: ClassItem) => {
    const isoString = `${cls.date}T${cls.start_time}:00+05:30`;
    const startMs = new Date(isoString).getTime();
    const endMs = startMs + cls.duration_minutes * 60 * 1000;
    const windowStartMs = startMs - 10 * 60 * 1000; // 10 minutes before
    return { startMs, endMs, windowStartMs };
  };

  // Countdown string helper
  const getCountdownString = (startMs: number) => {
    const diff = startMs - now;
    if (diff <= 0) return lang === 'ta' ? 'நேரலை தொடங்குகிறது...' : 'Starting now...';

    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      return lang === 'ta' ? `${diffDays} நாட்களில் தொடங்கும்` : `Starts in ${diffDays} days`;
    }
    if (diffHours >= 1) {
      return lang === 'ta'
        ? `${diffHours} மணி ${diffMinutes} நிமிடங்களில் தொடங்கும்`
        : `Starts in ${diffHours}h ${diffMinutes}m`;
    }
    return lang === 'ta' ? `${diffMinutes} நிமிடங்களில் தொடங்கும்` : `Starts in ${diffMinutes}m`;
  };

  // Categorize classes into upcoming and past
  const { upcomingClasses, pastClasses } = useMemo(() => {
    const upcoming: ClassItem[] = [];
    const past: ClassItem[] = [];

    classes.forEach((cls) => {
      const { endMs } = getClassTimestamps(cls);
      if (cls.status === 'cancelled') {
        if (now <= endMs + 24 * 60 * 60 * 1000) {
          upcoming.push(cls);
        } else {
          past.push(cls);
        }
      } else if (now > endMs) {
        past.push(cls);
      } else {
        upcoming.push(cls);
      }
    });

    return { upcomingClasses: upcoming, pastClasses: past };
  }, [classes, now]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5F1] min-h-screen relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E8D7F1] opacity-25 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F4D9DF] opacity-25 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-[#4A5A6A]">
            <li>
              <Link href="/" className="hover:text-[#0F2742] transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#0F2742] font-medium" aria-current="page">
              {lang === 'ta' ? 'வகுப்பு அட்டவணை' : 'Class Schedule'}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-serif font-medium text-[#0F2742] leading-[1.08] tracking-tight mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif">
                வகுப்பு அட்டவணை
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (Google Meet நேரலை)
                </span>
              </span>
            ) : (
              <>
                Class Schedule & Live Sessions
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (Google Meet Sanctuary)
                </span>
              </>
            )}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] leading-[1.7] max-w-2xl mx-auto mb-8 font-normal">
            {lang === 'ta'
              ? 'பிரம்ம முகூர்த்த தியானம் மற்றும் இரவு நேர அமைதி வகுப்புகளுக்கான அதிகாரப்பூர்வ நேரலை அட்டவணை. பதிவு செய்த பயனர்கள் Google Meet வழியே நேரடியாக இணையலாம்.'
              : 'Official schedule for daily Brahma Muhurtham and evening calm sessions. Registered members can join live via Google Meet.'}
          </p>

          {/* Timezone & Membership Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#0F2742] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#8B5E83]" />
              <span>Timezone: <strong>IST (Asia/Kolkata)</strong></span>
            </div>

            {isLoggedIn ? (
              isPaid || userRole === 'admin' ? (
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#DDE6DC] text-[#2A5235] font-medium shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'ta'
                      ? 'கட்டண உறுப்பினர் (Google Meet நேரலை இயங்கும்)'
                      : 'Paid Member (Google Meet Enabled)'}
                  </span>
                </div>
              ) : (
                <div className="inline-flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDE2D2] text-[#9A4A1C] font-medium shadow-xs text-xs">
                    <Lock className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'ta'
                        ? 'Google Meet பூட்டப்பட்டுள்ளது'
                        : 'Google Meet Locked'}
                    </span>
                  </div>
                  <a
                    href="https://wa.me/919944445555?text=வணக்கம்%20Peace%20Buddy,%20நான்%20காலை%20மற்றும்%20மாலை%20நேரலை%20Google%20Meet%20வகுப்புகளில்%20இணைய%20₹999%20கட்டணம்%20செலுத்தி%20Unlock%20செய்ய%20விரும்புகிறேன்."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white font-semibold text-xs shadow-md transition-all active:scale-95"
                  >
                    <Sparkles className="w-3 h-3 text-[#FEF3C7]" />
                    <span>{lang === 'ta' ? '₹999 செலுத்தி திறக்கவும் (Unlock with ₹999)' : 'Unlock with ₹999'}</span>
                  </a>
                </div>
              )
            ) : (
              <div className="inline-flex flex-wrap items-center gap-2">
                <Link
                  href="/login?redirect=/classes"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-[#0F2742] font-medium border border-white/90 shadow-xs transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#8B5E83]" />
                  <span>{lang === 'ta' ? 'இணைய உள்நுழைக' : 'Log in to Join Classes'}</span>
                </Link>
                <a
                  href="https://wa.me/919944445555?text=வணக்கம்%20Peace%20Buddy,%20நான்%20காலை%20மற்றும்%20மாலை%20நேரலை%20Google%20Meet%20வகுப்புகளில்%20இணைய%20₹999%20கட்டணம்%20செலுத்தி%20Unlock%20செய்ய%20விரும்புகிறேன்."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white font-semibold text-xs shadow-md transition-all active:scale-95"
                >
                  <Sparkles className="w-3 h-3 text-[#FEF3C7]" />
                  <span>{lang === 'ta' ? 'Unlock with ₹999' : 'Unlock with ₹999'}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Tab Switcher: Upcoming / Past */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-xs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-[14px] font-medium transition-all ${activeTab === 'upcoming'
                  ? 'bg-[#0F2742] text-white shadow-sm'
                  : 'text-[#4A5A6A] hover:text-[#0F2742]'
                }`}
            >
              {lang === 'ta' ? 'வரவிருக்கும் வகுப்புகள்' : 'Upcoming Classes'} ({upcomingClasses.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-[14px] font-medium transition-all ${activeTab === 'past'
                  ? 'bg-[#0F2742] text-white shadow-sm'
                  : 'text-[#4A5A6A] hover:text-[#0F2742]'
                }`}
            >
              {lang === 'ta' ? 'முடிந்த வகுப்புகள்' : 'Past Classes'} ({pastClasses.length})
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="max-w-md mx-auto mb-8 p-4 rounded-[20px] bg-rose-50 border border-rose-200 text-xs text-rose-700 text-center">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="py-20 text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-[#8B5E83] mb-3" />
            <p className="text-base font-serif text-[#0F2742]">
              {lang === 'ta' ? 'அட்டவணை ஏற்றப்படுகிறது...' : 'Loading class schedule...'}
            </p>
          </div>
        )}

        {/* Empty States */}
        {!loading && activeTab === 'upcoming' && upcomingClasses.length === 0 && (
          <div className="p-12 text-center rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-sm max-w-lg mx-auto">
            <CalendarIcon className="w-12 h-12 text-[#8B5E83] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif font-medium text-[#0F2742] mb-2">
              {lang === 'ta' ? 'வரவிருக்கும் வகுப்புகள் எதுவும் இல்லை' : 'No upcoming classes yet'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5A6A] mb-6">
              {lang === 'ta'
                ? 'புதிய வகுப்புகள் திட்டமிடப்படும்போது உங்களுக்கு அறிவிக்கப்படும்.'
                : 'New live sessions will be scheduled soon. Stay tuned for updates.'}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F2742] text-white text-xs font-medium hover:bg-[#1E3B5C] transition-all shadow-sm"
            >
              <span>{lang === 'ta' ? 'தொடர்பில் இருக்க' : 'Contact Us'}</span>
            </Link>
          </div>
        )}

        {!loading && activeTab === 'past' && pastClasses.length === 0 && (
          <div className="p-12 text-center rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-sm max-w-lg mx-auto">
            <Clock className="w-12 h-12 text-[#8B5E83] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif font-medium text-[#0F2742] mb-2">
              {lang === 'ta' ? 'முடிந்த வகுப்புகள் எதுவும் இல்லை' : 'No past classes yet'}
            </h3>
            <p className="text-xs text-[#4A5A6A]">
              {lang === 'ta' ? 'முடிவடைந்த வகுப்புகள் இங்கு காப்பகப்படுத்தப்படும்.' : 'Past session records will appear here.'}
            </p>
          </div>
        )}

        {/* Classes Grid: 28px Frosted Glass Cards */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {(activeTab === 'upcoming' ? upcomingClasses : pastClasses).map((cls) => {
              const { startMs, endMs, windowStartMs } = getClassTimestamps(cls);
              const isCancelled = cls.status === 'cancelled';
              const isPostponed = cls.status === 'postponed';
              const isJoinActive = !isCancelled && now >= windowStartMs && now <= endMs;
              const isPast = now > endMs;

              return (
                <div
                  key={cls.id}
                  className="p-7 sm:p-8 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,39,66,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Status & Duration */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {isCancelled ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-rose-100 text-rose-700">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>{lang === 'ta' ? 'ரத்து செய்யப்பட்டது' : 'Cancelled'}</span>
                        </span>
                      ) : isPostponed ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#FDE2D2] text-[#9A4A1C]">
                          <CalendarClock className="w-3.5 h-3.5" />
                          <span>{lang === 'ta' ? 'ஒத்திவைக்கப்பட்டது' : 'Postponed'}</span>
                        </span>
                      ) : isJoinActive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#DDE6DC] text-[#2A5235] animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-[#2A5235]" />
                          <span>{lang === 'ta' ? 'நேரலை இயங்குகிறது' : 'Live Now (Join Active)'}</span>
                        </span>
                      ) : isPast ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600">
                          <span>{lang === 'ta' ? 'முடிவடைந்தது' : 'Past Class'}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-[#F6EBEE] text-[#8B5E83]">
                          <span>{lang === 'ta' ? 'வரவிருக்கும் வகுப்பு' : 'Upcoming'}</span>
                        </span>
                      )}

                      <span className="text-xs text-[#4A5A6A] font-medium">
                        {cls.duration_minutes} {lang === 'ta' ? 'நிமிடங்கள்' : 'mins'}
                      </span>
                    </div>

                    {/* Class Name */}
                    <h2 className="text-[22px] sm:text-[24px] font-serif font-medium text-[#0F2742] mb-2 leading-snug">
                      {cls.name}
                    </h2>

                    {/* Description */}
                    {cls.description && (
                      <p className="text-[14px] text-[#4A5A6A] leading-[1.65] mb-5">
                        {cls.description}
                      </p>
                    )}

                    {/* Postpone Reason */}
                    {isPostponed && cls.postpone_reason && (
                      <div className="mb-4 p-3.5 rounded-[18px] bg-[#FFF9EE] border border-[#FDE68A] text-xs text-[#92400E]">
                        <strong>{lang === 'ta' ? 'காரணம்: ' : 'Reason: '}</strong>
                        {cls.postpone_reason}
                      </div>
                    )}

                    {/* Cancel Reason */}
                    {isCancelled && cls.cancel_reason && (
                      <div className="mb-4 p-3.5 rounded-[18px] bg-rose-50 border border-rose-200 text-xs text-rose-800">
                        <strong>{lang === 'ta' ? 'காரணம்: ' : 'Reason: '}</strong>
                        {cls.cancel_reason}
                      </div>
                    )}

                    {/* Date and Time Details Card */}
                    <div className="p-4 rounded-[20px] bg-white/60 border border-white/80 space-y-2 mb-6 text-xs sm:text-sm text-[#4A5A6A]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[#4A5A6A]">
                          <CalendarIcon className="w-4 h-4 text-[#8B5E83]" />
                          <span>{lang === 'ta' ? 'தேதி:' : 'Date:'}</span>
                        </span>
                        <div className="text-right">
                          {isPostponed && cls.original_date ? (
                            <div>
                              <span className="line-through text-gray-400 mr-2 text-xs">
                                {formatDate(cls.original_date)}
                              </span>
                              <strong className="text-[#9A4A1C]">{formatDate(cls.date)}</strong>
                            </div>
                          ) : (
                            <strong className="text-[#0F2742]">{formatDate(cls.date)}</strong>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[#4A5A6A]">
                          <Clock className="w-4 h-4 text-[#8B5E83]" />
                          <span>{lang === 'ta' ? 'நேரம்:' : 'Time:'}</span>
                        </span>
                        <div className="text-right">
                          {isPostponed && cls.original_time ? (
                            <div>
                              <span className="line-through text-gray-400 mr-2 text-xs">
                                {formatTime(cls.original_time)}
                              </span>
                              <strong className="text-[#9A4A1C]">{formatTime(cls.start_time)}</strong>
                            </div>
                          ) : (
                            <strong className="text-[#0F2742]">{formatTime(cls.start_time)}</strong>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Section */}
                  <div className="pt-4 border-t border-[#0F2742]/10">
                    {isCancelled ? (
                      <div className="text-center py-2 text-xs text-rose-700 font-medium">
                        {lang === 'ta' ? 'இந்த வகுப்பு ரத்து செய்யப்பட்டுள்ளது' : 'This class has been cancelled'}
                      </div>
                    ) : isPast ? (
                      <div className="text-center py-2 text-xs text-[#4A5A6A] font-medium">
                        {lang === 'ta' ? 'இந்த வகுப்பு முடிவடைந்துவிட்டது' : 'Class has ended'}
                      </div>
                    ) : !isLoggedIn ? (
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Link
                            href={`/login?redirect=/classes`}
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/80 hover:bg-white text-[#0F2742] border border-white/90 text-[13px] font-medium transition-all shadow-xs active:scale-95"
                          >
                            <LogIn className="w-4 h-4 text-[#8B5E83]" />
                            <span>{lang === 'ta' ? 'உள்நுழைக' : 'Log In'}</span>
                          </Link>
                          <a
                            href="https://wa.me/919944445555?text=வணக்கம்%20Peace%20Buddy,%20நான்%20காலை%20மற்றும்%20மாலை%20நேரலை%20Google%20Meet%20வகுப்புகளில்%20இணைய%20₹999%20கட்டணம்%20செலுத்தி%20Unlock%20செய்ய%20விரும்புகிறேன்."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[13px] font-semibold transition-all shadow-md active:scale-95"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#FEF3C7]" />
                            <span>{lang === 'ta' ? '₹999 Unlock' : 'Unlock with ₹999'}</span>
                          </a>
                        </div>
                        <p className="text-[11px] text-[#4A5A6A] text-center">
                          {lang === 'ta'
                            ? 'Google Meet இணைப்பு ₹999 செலுத்தி சந்தா பெற்றவர்களுக்கு மட்டுமே திறக்கப்படும்.'
                            : 'Google Meet link unlocks exclusively with ₹999 subscription.'}
                        </p>
                      </div>
                    ) : !isPaid && userRole !== 'admin' ? (
                      <div className="space-y-2">
                        <a
                          href="https://wa.me/919944445555?text=வணக்கம்%20Peace%20Buddy,%20நான்%20காலை%20மற்றும்%20மாலை%20நேரலை%20Google%20Meet%20வகுப்புகளில்%20இணைய%20₹999%20கட்டணம்%20செலுத்தி%20Unlock%20செய்ய%20விரும்புகிறேன்."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[14px] font-semibold shadow-md transition-all active:scale-95"
                        >
                          <Sparkles className="w-4 h-4 text-[#FEF3C7]" />
                          <span>{lang === 'ta' ? '₹999 செலுத்தி திறக்கவும் (Unlock with ₹999)' : 'Unlock with ₹999'}</span>
                        </a>
                        <p className="text-[11px] text-[#9A4A1C] text-center font-medium">
                          {lang === 'ta'
                            ? 'Google Meet நேரலை இணைப்பு ₹999 கட்டணம் செலுத்திய பயனர்களுக்கு மட்டுமே திறக்கப்படும் (காலை + மாலை இரண்டும் அடங்கும்).'
                            : 'Google Meet access unlocks exclusively with ₹999 subscription (includes Morning & Evening live sessions).'}
                        </p>
                      </div>
                    ) : isJoinActive && cls.meet_link ? (
                      <div className="space-y-2">
                        <a
                          href={cls.meet_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[14px] font-medium shadow-lg hover:shadow-xl transition-all active:scale-95"
                        >
                          <Video className="w-4 h-4 text-[#DDE6DC]" />
                          <span>{lang === 'ta' ? 'Google Meet-ல் இணைக' : 'Join Google Meet Now'}</span>
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                        <p className="text-[11px] text-[#2A5235] text-center font-medium">
                          {lang === 'ta' ? '✓ நேரலை வகுப்பு இயங்குகிறது' : '✓ Live session is currently open'}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <button
                          disabled
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/60 text-[#4A5A6A] border border-white/80 text-[13px] font-medium cursor-not-allowed"
                        >
                          <Clock className="w-4 h-4 text-[#8B5E83]" />
                          <span>{getCountdownString(startMs)}</span>
                        </button>
                        <p className="text-[11px] text-[#4A5A6A] text-center">
                          {lang === 'ta'
                            ? 'வகுப்பு தொடங்குவதற்கு 10 நிமிடங்களுக்கு முன் Join பட்டன் இயக்கப்படும்.'
                            : 'Join button activates 10 minutes before the scheduled start time.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
