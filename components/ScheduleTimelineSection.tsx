'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Calendar,
  Clock,
  Video,
  ArrowRight,
  ExternalLink,
  Lock,
  Sparkles,
  AlertCircle,
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

export default function ScheduleTimelineSection() {
  const { lang } = useLanguage();
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function loadClasses() {
      try {
        const res = await fetch('/api/classes');
        const data = await res.json();
        if (data.success && Array.isArray(data.classes)) {
          setClasses(data.classes);
          setIsLoggedIn(!!data.isLoggedIn);
          setIsPaid(!!data.isPaid);
        }
      } catch {
        // Fallback or silent
      } finally {
        setLoading(false);
      }
    }
    loadClasses();
  }, []);

  const parseIST = (dateStr: string, timeStr: string) => {
    const [y, m, d] = dateStr.split('-');
    const [hh, mm] = timeStr.split(':');
    return new Date(
      `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:00+05:30`
    ).getTime();
  };

  const formatMonth = (dateStr: string) => {
    try {
      const [y, m, d] = dateStr.split('-');
      const date = new Date(Number(y), Number(m) - 1, Number(d));
      return date.toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-US', { month: 'short' });
    } catch {
      return '';
    }
  };

  const formatDay = (dateStr: string) => {
    try {
      const [, , d] = dateStr.split('-');
      return d || '01';
    } catch {
      return '01';
    }
  };

  const formatTime12h = (timeStr: string) => {
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

  const getCountdown = (startMs: number) => {
    const diff = startMs - now;
    if (diff <= 0) return lang === 'ta' ? 'நேரலை தொடங்குகிறது' : 'Starting now';
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (diffHours >= 1) {
      return lang === 'ta' ? `${diffHours} மணி ${diffMinutes} நிமி` : `Starts in ${diffHours}h ${diffMinutes}m`;
    }
    return lang === 'ta' ? `${diffMinutes} நிமிடங்களில்` : `Starts in ${diffMinutes}m`;
  };

  // Filter upcoming or current
  const displayClasses = classes.slice(0, 4);

  return (
    <section
      id="classes"
      aria-label="Upcoming Live Sanctuary Classes"
      className="py-[72px] lg:py-[120px] bg-[#F8F5F1] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-serif font-medium text-[#0F2742] leading-[1.1] tracking-tight">
              {lang === 'ta' ? (
                <span className="font-tamil-serif">
                  வரவிருக்கும் நேரலை
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">தியான அமர்வுகள்.</span>
                </span>
              ) : (
                <>
                  Upcoming live classes
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">and guided circles.</span>
                </>
              )}
            </h2>
          </div>

          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#8B5E83] hover:text-[#6F4768] transition-colors group"
          >
            <span>{lang === 'ta' ? 'முழு அட்டவணை காண்க' : 'View full class schedule'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Timeline List of Frosted Cards */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-28 rounded-[28px] bg-white/40 animate-pulse border border-white/60"
              />
            ))}
          </div>
        ) : displayClasses.length === 0 ? (
          <div className="p-12 text-center rounded-[28px] bg-white/70 backdrop-blur-md border border-white/80 shadow-sm max-w-xl mx-auto">
            <Calendar className="w-10 h-10 text-[#8B5E83] mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-serif text-[#0F2742] mb-1">
              {lang === 'ta' ? 'புதிய வகுப்புகள் விரைவில் அறிவிக்கப்படும்' : 'No upcoming classes right now'}
            </h3>
            <p className="text-sm text-[#4A5A6A]">
              {lang === 'ta'
                ? 'அடுத்த நேரலை வகுப்பு விவரங்கள் இங்கு பதிவேற்றப்படும்.'
                : 'Check back soon or explore our self-paced meditation resources.'}
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {displayClasses.map((cls) => {
              const startMs = parseIST(cls.date, cls.start_time);
              const endMs = startMs + cls.duration_minutes * 60 * 1000;
              const isLiveWindow = now >= startMs - 10 * 60 * 1000 && now <= endMs;
              const isPast = now > endMs;
              const isCancelled = cls.status === 'cancelled';
              const isPostponed = cls.status === 'postponed';

              return (
                <div
                  key={cls.id}
                  className="group relative p-6 sm:p-7 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,39,66,0.12)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  {/* Left: Big Day Number + Month */}
                  <div className="flex items-center gap-5 sm:gap-6 flex-shrink-0">
                    <div className="flex flex-col items-center justify-center min-w-[70px] text-center border-r border-[#0F2742]/10 pr-5 sm:pr-6">
                      <span className="text-[44px] sm:text-[48px] font-serif font-medium text-[#0F2742] leading-none">
                        {formatDay(cls.date)}
                      </span>
                      <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#8B5E83] mt-1">
                        {formatMonth(cls.date)}
                      </span>
                    </div>

                    {/* Middle: Title, IST Time, Status Badges */}
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Status Badges */}
                        {isCancelled ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-rose-100 text-rose-700">
                            {lang === 'ta' ? 'ரத்து செய்யப்பட்டது' : 'Cancelled'}
                          </span>
                        ) : isPostponed ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#FDE2D2] text-[#9A4A1C]">
                            {lang === 'ta' ? 'ஒத்திவைக்கப்பட்டது' : 'Postponed'}
                          </span>
                        ) : isLiveWindow ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#DDE6DC] text-[#2A5235] animate-pulse">
                            {lang === 'ta' ? 'நேரலை விரைவில்' : 'Live soon'}
                          </span>
                        ) : null}

                        <h3 className="text-[20px] sm:text-[22px] font-serif font-medium text-[#0F2742]">
                          {cls.name}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#4A5A6A]">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#8B5E83]" />
                          <span>{formatTime12h(cls.start_time)}</span>
                        </span>
                        <span>•</span>
                        <span>{cls.duration_minutes} {lang === 'ta' ? 'நிமிடங்கள்' : 'mins'}</span>
                        {isPostponed && cls.original_time && (
                          <span className="text-xs text-[#9A4A1C] line-through opacity-70">
                            (was {formatTime12h(cls.original_time)})
                          </span>
                        )}
                      </div>

                      {cls.description && (
                        <p className="text-xs sm:text-sm text-[#4A5A6A] line-clamp-1 max-w-xl">
                          {cls.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Join Button */}
                  <div className="flex-shrink-0 flex items-center gap-3">
                    {isCancelled ? (
                      <span className="text-xs text-[#4A5A6A] italic">
                        {lang === 'ta' ? 'வகுப்பு ரத்து' : 'Class cancelled'}
                      </span>
                    ) : isPast ? (
                      <span className="px-4 py-2 rounded-full text-xs text-[#4A5A6A] bg-white/50 border border-white/80">
                        {lang === 'ta' ? 'முடிவடைந்தது' : 'Past class'}
                      </span>
                    ) : !isLoggedIn ? (
                      <Link
                        href="/login?redirect=/classes"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#0F2742] text-[14px] font-medium border border-white/90 shadow-xs transition-all"
                      >
                        <Lock className="w-3.5 h-3.5 text-[#8B5E83]" />
                        <span>{lang === 'ta' ? 'உள்நுழையவும்' : 'Sign in to join'}</span>
                      </Link>
                    ) : !isPaid ? (
                      <a
                        href="https://wa.me/919944445555?text=வணக்கம்%20Peace%20Buddy,%20நான்%20காலை%20மற்றும்%20மாலை%20நேரலை%20Google%20Meet%20வகுப்புகளில்%20இணைய%20₹999%20கட்டணம்%20செலுத்தி%20Unlock%20செய்ய%20விரும்புகிறேன்."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[13px] font-semibold shadow-xs transition-all active:scale-95"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#FEF3C7]" />
                        <span>{lang === 'ta' ? '₹999 Unlock' : 'Unlock with ₹999'}</span>
                      </a>
                    ) : isLiveWindow ? (
                      <a
                        href={cls.meet_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[14px] font-medium shadow-md transition-all active:scale-95 group"
                      >
                        <Video className="w-4 h-4 text-[#DDE6DC]" />
                        <span>{lang === 'ta' ? 'வகுப்பில் இணையுங்கள்' : 'Join Class'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 text-[#4A5A6A] text-[13px] font-medium border border-white/80">
                        <Clock className="w-3.5 h-3.5 text-[#8B5E83]" />
                        <span>{getCountdown(startMs)}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
