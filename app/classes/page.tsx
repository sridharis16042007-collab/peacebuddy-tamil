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
  User,
  ShieldAlert,
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

  // Categorize classes into upcoming, past, and cancelled
  const { upcomingClasses, pastClasses } = useMemo(() => {
    const upcoming: ClassItem[] = [];
    const past: ClassItem[] = [];

    classes.forEach((cls) => {
      const { endMs } = getClassTimestamps(cls);
      if (cls.status === 'cancelled') {
        // Keep cancelled in upcoming view for clear visibility unless long in past
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
    <div className="pt-28 sm:pt-36 pb-24 bg-gradient-to-b from-[#FDFBFE] via-[#F8F2FA] to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#7A6E91]">
            <li>
              <Link href="/" className="hover:text-[#7E6C9E] transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#2D2342] font-medium" aria-current="page">
              {lang === 'ta' ? 'வகுப்பு அட்டவணை' : 'Class Schedule'}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFEF] text-[#7E6C9E] font-medium text-xs sm:text-sm mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7E6C9E]" />
            <span>{lang === 'ta' ? 'நேரலை அமைதி வகுப்புகள்' : 'Live Mindful Sessions'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-light text-[#2D2342] tracking-wide mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif font-light">
                வகுப்பு அட்டவணை
                <br />
                <span className="italic font-serif text-[#7E6C9E] font-normal text-2xl sm:text-4xl">
                  (Class Schedule)
                </span>
              </span>
            ) : (
              <>
                Class Schedule & Live Sessions
                <br />
                <span className="italic font-serif text-[#7E6C9E] font-normal text-2xl sm:text-4xl">
                  (Google Meet Sanctuary)
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#5A4D6E] leading-relaxed font-tamil font-light max-w-2xl mx-auto mb-6">
            {lang === 'ta'
              ? 'பிரம்ம முகூர்த்த தியானம் மற்றும் இரவு நேர அமைதி வகுப்புகளுக்கான அதிகாரப்பூர்வ நேரலை அட்டவணை. பதிவு செய்த பயனர்கள் Google Meet வழியே நேரடியாக இணையலாம்.'
              : 'Official schedule for daily Brahma Muhurtham and evening calm sessions. Registered members can join live via Google Meet.'}
          </p>

          {/* Timezone & Login Status Banner */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFEF] text-[#2D2342] font-mono shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#7E6C9E]" />
              <span>Timezone: <strong>IST (Asia/Kolkata)</strong></span>
            </div>

            {isLoggedIn ? (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                <span>{lang === 'ta' ? 'உள்நுழைந்துள்ளீர்கள் (Meet இணைப்புகள் தெரியும்)' : 'Logged In (Meet links visible)'}</span>
              </div>
            ) : (
              <Link
                href="/login?redirect=/classes"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EFF7] hover:bg-[#E8DFEF] border border-[#E8DFEF] text-[#7E6C9E] font-medium transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{lang === 'ta' ? 'இணைய உள்நுழைக (Log in to Join)' : 'Log in to Join Classes'}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Tab Switcher (Upcoming / Past) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 p-1 bg-white rounded-full border border-[#E8DFEF] shadow-xs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-[#7E6C9E] text-white shadow-sm'
                  : 'text-[#7A6E91] hover:text-[#2D2342]'
              }`}
            >
              {lang === 'ta' ? 'வரவிருக்கும் வகுப்புகள்' : 'Upcoming Classes'} ({upcomingClasses.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'past'
                  ? 'bg-[#7E6C9E] text-white shadow-sm'
                  : 'text-[#7A6E91] hover:text-[#2D2342]'
              }`}
            >
              {lang === 'ta' ? 'முடிந்த வகுப்புகள்' : 'Past Classes'} ({pastClasses.length})
            </button>
          </div>
        </div>

        {/* Error message if any */}
        {error && (
          <div className="max-w-md mx-auto mb-8 p-4 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] text-xs text-[#BE123C] text-center">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="py-20 text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-[#7E6C9E] mb-3" />
            <p className="text-sm font-serif text-[#2D2342]">
              {lang === 'ta' ? 'அட்டவணை ஏற்றப்படுகிறது...' : 'Loading class schedule...'}
            </p>
          </div>
        )}

        {/* Empty States */}
        {!loading && activeTab === 'upcoming' && upcomingClasses.length === 0 && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-[#E8DFEF] text-center max-w-lg mx-auto shadow-sm">
            <CalendarIcon className="w-12 h-12 text-[#A398B8] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif font-medium text-[#2D2342] mb-2">
              {lang === 'ta' ? 'வரவிருக்கும் வகுப்புகள் எதுவும் இல்லை' : 'No upcoming classes yet'}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4D6E] font-tamil font-light mb-6">
              {lang === 'ta'
                ? 'புதிய வகுப்புகள் திட்டமிடப்படும்போது உங்களுக்கு அறிவிக்கப்படும். எங்கள் மின்னஞ்சல் சந்தாவில் இணையுங்கள்.'
                : 'New live sessions will be scheduled soon. Stay tuned or join our newsletter for email notifications.'}
            </p>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7E6C9E] text-white text-xs font-medium hover:bg-[#624F85] transition-all shadow-sm"
            >
              <span>{lang === 'ta' ? 'அறிவிப்பில் இணைய' : 'Get Notified'}</span>
            </Link>
          </div>
        )}

        {!loading && activeTab === 'past' && pastClasses.length === 0 && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-[#E8DFEF] text-center max-w-lg mx-auto shadow-sm">
            <Clock className="w-12 h-12 text-[#A398B8] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif font-medium text-[#2D2342] mb-2">
              {lang === 'ta' ? 'முடிந்த வகுப்புகள் எதுவும் இல்லை' : 'No past classes yet'}
            </h3>
            <p className="text-xs text-[#5A4D6E]">
              {lang === 'ta' ? 'முடிவடைந்த வகுப்புகள் இங்கு காப்பகப்படுத்தப்படும்.' : 'Past recorded archives will appear here.'}
            </p>
          </div>
        )}

        {/* Classes Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {(activeTab === 'upcoming' ? upcomingClasses : pastClasses).map((cls) => {
              const { startMs, endMs, windowStartMs } = getClassTimestamps(cls);
              const isCancelled = cls.status === 'cancelled';
              const isPostponed = cls.status === 'postponed';
              const isJoinActive = !isCancelled && now >= windowStartMs && now <= endMs;
              const isPast = now > endMs;

              return (
                <div
                  key={cls.id}
                  className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                    isCancelled
                      ? 'border-[#FECDD3]/80 bg-[#FFFDFE]'
                      : isPostponed
                      ? 'border-[#FDE68A]/80 bg-[#FFFDF8]'
                      : 'border-[#E8DFEF] hover:border-[#7E6C9E]/50'
                  }`}
                >
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {isCancelled ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>{lang === 'ta' ? 'ரத்து செய்யப்பட்டது' : 'Cancelled'}</span>
                        </span>
                      ) : isPostponed ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]">
                          <CalendarClock className="w-3.5 h-3.5" />
                          <span>{lang === 'ta' ? 'ஒத்திவைக்கப்பட்டது' : 'Postponed'}</span>
                        </span>
                      ) : isJoinActive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-[#059669]" />
                          <span>{lang === 'ta' ? 'நேரலை இயங்குகிறது (Live Now)' : 'Live Now (Join Active)'}</span>
                        </span>
                      ) : isPast ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          <span>{lang === 'ta' ? 'முடிவடைந்தது' : 'Past Class'}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#F5EFF7] text-[#7E6C9E]">
                          <span>{lang === 'ta' ? 'வரவிருக்கும் வகுப்பு' : 'Upcoming'}</span>
                        </span>
                      )}

                      <span className="text-xs text-[#7A6E91] font-mono">
                        {cls.duration_minutes} {lang === 'ta' ? 'நிமிடங்கள்' : 'mins'}
                      </span>
                    </div>

                    {/* Class Name */}
                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#2D2342] mb-2 leading-snug">
                      {cls.name}
                    </h2>

                    {/* Description */}
                    {cls.description && (
                      <p className="text-xs sm:text-sm text-[#5A4D6E] leading-relaxed mb-6 font-tamil font-light">
                        {cls.description}
                      </p>
                    )}

                    {/* Postpone Reason */}
                    {isPostponed && cls.postpone_reason && (
                      <div className="mb-5 p-3 rounded-2xl bg-[#FFF9EE] border border-[#FDE68A] text-xs text-[#92400E]">
                        <strong>{lang === 'ta' ? 'ஒத்திவைப்புக்கான காரணம்: ' : 'Reason for Postponing: '}</strong>
                        {cls.postpone_reason}
                      </div>
                    )}

                    {/* Cancel Reason */}
                    {isCancelled && cls.cancel_reason && (
                      <div className="mb-5 p-3 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] text-xs text-[#9F1239]">
                        <strong>{lang === 'ta' ? 'ரத்துக்கான காரணம்: ' : 'Reason for Cancellation: '}</strong>
                        {cls.cancel_reason}
                      </div>
                    )}

                    {/* Date and Time Details Box */}
                    <div className="p-4 rounded-2xl bg-[#FBF8FC] border border-[#E8DFEF] space-y-2 mb-6 text-xs sm:text-sm text-[#5A4D6E]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[#7A6E91]">
                          <CalendarIcon className="w-4 h-4 text-[#7E6C9E]" />
                          <span>{lang === 'ta' ? 'தேதி:' : 'Date:'}</span>
                        </span>
                        <div className="text-right">
                          {isPostponed && cls.original_date ? (
                            <div>
                              <span className="line-through text-gray-400 mr-2 text-xs">
                                {formatDate(cls.original_date)}
                              </span>
                              <strong className="text-[#D97706]">{formatDate(cls.date)}</strong>
                            </div>
                          ) : (
                            <strong className="text-[#2D2342]">{formatDate(cls.date)}</strong>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[#7A6E91]">
                          <Clock className="w-4 h-4 text-[#7E6C9E]" />
                          <span>{lang === 'ta' ? 'நேரம்:' : 'Time:'}</span>
                        </span>
                        <div className="text-right">
                          {isPostponed && cls.original_time ? (
                            <div>
                              <span className="line-through text-gray-400 mr-2 text-xs">
                                {formatTime(cls.original_time)}
                              </span>
                              <strong className="text-[#D97706]">{formatTime(cls.start_time)}</strong>
                            </div>
                          ) : (
                            <strong className="text-[#2D2342]">{formatTime(cls.start_time)}</strong>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Section */}
                  <div className="pt-4 border-t border-[#E8DFEF]">
                    {isCancelled ? (
                      /* Cancelled - No Join Button */
                      <div className="text-center py-2 text-xs text-[#BE123C] font-medium">
                        {lang === 'ta' ? 'இந்த வகுப்பு ரத்து செய்யப்பட்டுள்ளது' : 'This class has been cancelled'}
                      </div>
                    ) : isPast ? (
                      /* Past Class - No link */
                      <div className="text-center py-2 text-xs text-[#7A6E91] font-medium">
                        {lang === 'ta' ? 'இந்த வகுப்பு முடிவடைந்துவிட்டது' : 'Class has ended'}
                      </div>
                    ) : !isLoggedIn ? (
                      /* Not Logged In - Prompt to Sign in */
                      <div className="space-y-2">
                        <Link
                          href={`/login?redirect=/classes`}
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-xs sm:text-sm font-medium transition-all shadow-md min-h-[48px]"
                        >
                          <Lock className="w-4 h-4" />
                          <span>{lang === 'ta' ? 'இணைய உள்நுழைக (Log in to Join)' : 'Log in to Join Class'}</span>
                        </Link>
                        <p className="text-[11px] text-[#7A6E91] text-center">
                          {lang === 'ta'
                            ? 'Google Meet இணைப்பு உள்நுழைந்த பயனர்களுக்கு மட்டுமே தெரியும்.'
                            : 'Google Meet link is only visible to logged-in members.'}
                        </p>
                      </div>
                    ) : isJoinActive && cls.meet_link ? (
                      /* Logged in & Active window - Enabled Join Button */
                      <div className="space-y-2">
                        <a
                          href={cls.meet_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all min-h-[48px]"
                        >
                          <Video className="w-4 h-4" />
                          <span>{lang === 'ta' ? 'Google Meet-ல் இணைக (Join Class)' : 'Join Google Meet Now'}</span>
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                        <p className="text-[11px] text-[#065F46] text-center font-medium">
                          {lang === 'ta' ? '✓ நேரலை வகுப்பு இயங்குகிறது' : '✓ Live session is currently open'}
                        </p>
                      </div>
                    ) : (
                      /* Logged in but not yet 10m before start - Disabled Countdown Button */
                      <div className="space-y-2">
                        <button
                          disabled
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F5EFF7] text-[#7A6E91] border border-[#E8DFEF] text-xs sm:text-sm font-medium cursor-not-allowed min-h-[48px]"
                        >
                          <Clock className="w-4 h-4" />
                          <span>{getCountdownString(startMs)}</span>
                        </button>
                        <p className="text-[11px] text-[#7A6E91] text-center">
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
