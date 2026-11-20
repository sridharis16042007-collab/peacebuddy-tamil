'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Sparkles,
  ArrowRight,
  Wind,
  HeartHandshake,
  BookOpen,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      aria-label="Peace Buddy Sanctuary"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-[#1E0E27]"
    >
      {/* Background: Radiant Sunset over Lavender Meadow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <picture>
          <source srcSet="/assets/sunset-serenity.avif" type="image/avif" />
          <source srcSet="/assets/sunset-serenity.webp" type="image/webp" />
          <Image
            src="/assets/sunset-serenity.jpg"
            alt="Serene sunset glow over a peaceful lavender flower field"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.96] contrast-[1.03]"
          />
        </picture>

        {/* Ambient Dark-to-Transparent Gradient Overlay for Pristine Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14081B]/90 via-[#14081B]/65 to-[#14081B]/35 hidden lg:block pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14081B]/75 via-[#14081B]/55 to-[#14081B]/85 lg:hidden pointer-events-none" />
      </div>

      {/* Main 2-Column Split Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Large Elegant Typography & Complete Website Overview */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Sacred Sanctuary Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFE3A8]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#FFE3A8]">
                {lang === 'ta' ? 'அமைதிக்கான தமிழ் புகலிடம்' : 'A SACRED SANCTUARY'}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFE3A8]" aria-hidden="true" />
            </div>

            {/* Display Headline: "A place to find your inner peace" */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-tight leading-[1.14] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
              {lang === 'ta' ? (
                <span className="font-tamil font-normal">
                  உங்கள்{' '}
                  <span className="italic font-serif text-[#FFD68A] font-light">
                    உள் அமைதியைக்
                  </span>{' '}
                  கண்டறியும் கனிவான இடம்.
                </span>
              ) : (
                <>
                  A place to find your{' '}
                  <span className="italic font-serif text-[#FFD68A] font-light">
                    inner peace.
                  </span>
                </>
              )}
            </h1>

            {/* Harmonious Subheading blending inner peace and calmness */}
            <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed mb-7 font-tamil font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {lang === 'ta'
                ? 'அளவுக்கு அதிகமான சிந்தனைகள், மன அழுத்தம் மற்றும் அவசர உலகத்திலிருந்து விடுபட்டு, உங்கள் சொந்த தாய்மொழியில் ஆழ்ந்த மன அமைதியையும், நிம்மதியான உள் அமைதியையும் (inner calmness) மீட்டெடுங்கள்.'
                : 'Where calmness meets clarity. Step away from overthinking and daily noise in a dedicated, Tamil-first sanctuary to quiet your mind, restore deep inner peace, and cultivate lasting tranquility.'}
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9 w-full sm:w-auto">
              {/* Primary Explore Programs Button */}
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] hover:from-[#6A1EB0] hover:to-[#883BCB] text-white text-base font-medium shadow-xl hover:shadow-2xl transition-all min-h-[48px] border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD68A]"
              >
                <span>{lang === 'ta' ? 'பயிற்சிகளைக் காண்க' : 'Explore Programs'}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              {/* Secondary Direct Guidance Pill */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/40 text-base font-serif italic transition-all min-h-[48px] shadow-lg backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 text-[#FFD68A]" aria-hidden="true" />
                <span>{lang === 'ta' ? 'நேரடி உதவி / WhatsApp' : 'Direct Guidance'}</span>
              </Link>
            </div>

            {/* Complete Website Overview (4 Key Pillars on the First Page) */}
            <div className="w-full pt-6 border-t border-white/20">
              <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#FFE3A8]/90 mb-3.5">
                {lang === 'ta' ? '✦ பீஸ் படி வழங்கும் முழு விவரங்கள்' : '✦ WHAT PEACE BUDDY OFFERS'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {/* 1. Programs Card */}
                <Link
                  href="/programs"
                  className="group flex items-start gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all shadow-sm"
                >
                  <div className="p-2 rounded-xl bg-[#7B2CBF]/60 text-[#FFE3A8] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white group-hover:text-[#FFD68A] transition-colors">
                      {lang === 'ta' ? '3 சிறப்புப் பயிற்சிகள்' : '3 Mindful Programs'}
                    </h2>
                    <p className="text-xs text-white/80 leading-snug">
                      {lang === 'ta' ? '21 நாள் வழக்கம் • Overthinking • ஆழ்ந்த உறக்கம்' : '21-Day Routine, Overthinking Relief, Deep Sleep'}
                    </p>
                  </div>
                </Link>

                {/* 2. Guided Meditation Card */}
                <Link
                  href="/resources"
                  className="group flex items-start gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all shadow-sm"
                >
                  <div className="p-2 rounded-xl bg-[#2A9D8F]/60 text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white group-hover:text-[#FFD68A] transition-colors">
                      {lang === 'ta' ? 'வழிகாட்டப்பட்ட தியானம்' : 'Guided Meditation'}
                    </h2>
                    <p className="text-xs text-white/80 leading-snug">
                      {lang === 'ta' ? 'அமைதியான தமிழ் தியானம் & மன அமைதி பயிற்சிகள்' : 'Calm Tamil meditations & mindfulness practices'}
                    </p>
                  </div>
                </Link>

                {/* 3. 1-on-1 Confidential Guidance */}
                <Link
                  href="/contact"
                  className="group flex items-start gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all shadow-sm"
                >
                  <div className="p-2 rounded-xl bg-[#E76F51]/60 text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white group-hover:text-[#FFD68A] transition-colors">
                      {lang === 'ta' ? 'நேரடி வழிகாட்டல்' : '1-on-1 Guidance'}
                    </h2>
                    <p className="text-xs text-white/80 leading-snug">
                      {lang === 'ta' ? '100% ரகசியமான, கனிவான தமிழ் ஆதரவு' : 'Safe, private & compassionate listening'}
                    </p>
                  </div>
                </Link>

                {/* 4. Free Resources & Audio */}
                <Link
                  href="/resources"
                  className="group flex items-start gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all shadow-sm"
                >
                  <div className="p-2 rounded-xl bg-[#9D4EDD]/60 text-[#FFE3A8] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white group-hover:text-[#FFD68A] transition-colors">
                      {lang === 'ta' ? 'இலவச ஆடியோ & வழிகாட்டிகள்' : 'Audio & Guides'}
                    </h2>
                    <p className="text-xs text-white/80 leading-snug">
                      {lang === 'ta' ? '10 நிமிட தமிழ் தியான ஆடியோ பதிவிறக்கம்' : 'Tamil meditation audio & mindfulness articles'}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Official Circular Logo with Glowing Halo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Radiant Ambient Breathing Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7B2CBF]/50 via-[#E0AAFF]/40 to-[#FFD68A]/40 blur-3xl opacity-90 group-hover:opacity-100 transition-opacity animate-breathe-glow" />

              {/* Crystal Frost Outer Ring */}
              <div className="relative w-full h-full rounded-full p-3 sm:p-4 bg-white/20 backdrop-blur-2xl border-2 border-white/50 shadow-2xl shadow-black/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
                <Image
                  src="/Peace_Buddy_Teal_Circular_Emblem.webp"
                  alt="Peace Buddy Official Circular Emblem"
                  width={420}
                  height={420}
                  priority
                  className="w-full h-full object-contain rounded-full drop-shadow-md"
                />
              </div>

              {/* Floating Brand Badge */}
              <div className="absolute -bottom-5 px-5 py-2 rounded-full bg-[#1A0B22]/95 backdrop-blur-xl border border-[#FFE3A8]/40 shadow-2xl text-center flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD68A]" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  ✦ PEACE BUDDY TAMIL ✦
                </span>
              </div>
            </div>

            {/* Subtle Tagline Below Logo */}
            <p className="mt-8 text-xs text-white/80 text-center font-tamil font-light tracking-wide drop-shadow-sm">
              {lang === 'ta'
                ? 'மன அமைதி • தெளிவான வாழ்வு • 100% தமிழ் தளம்'
                : 'Peace of Mind • Clarity • Mindful Living'}
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-white/80 pt-8">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium drop-shadow-sm">
          PEACE BUDDY SANCTUARY
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
