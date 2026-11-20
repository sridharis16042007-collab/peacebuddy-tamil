'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      aria-label="Peace Buddy Sanctuary"
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between items-center overflow-hidden bg-[#2D1B36]"
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
            className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          />
        </picture>

        {/* Ambient Dark/Warm Vignette for High-Contrast Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0D24]/40 via-transparent to-[#1C0D24]/70 pointer-events-none" />
      </div>

      {/* Main Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center my-auto">
        
        {/* Official Circular Logo with Celestial Aura */}
        <div className="relative mb-6 sm:mb-8 group" aria-hidden="true">
          {/* Ambient Sunset Lavender Aura */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#9B5DE5]/40 via-[#F15BB5]/30 to-[#FEE440]/30 blur-2xl opacity-90 group-hover:opacity-100 transition-opacity" />

          {/* Logo Frame: Crystal Frost Glass */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full p-2 bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl shadow-black/40 animate-breathe-glow motion-reduce:animate-none flex items-center justify-center">
            <Image
              src="/Peace_Buddy_Teal_Circular_Emblem.webp"
              alt="Peace Buddy Official Emblem"
              width={180}
              height={180}
              priority
              className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Eyebrow Tagline: A JOURNEY WITHIN */}
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FFE3A8]" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FFE3A8]">
            {lang === 'ta' ? 'அமைதிக்கான பயணம்' : 'A JOURNEY WITHIN'}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FFE3A8]" aria-hidden="true" />
        </div>

        {/* Hero Headline: Pure White Roman Serif + Luminous Golden Italic */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.18] mb-5 max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          {lang === 'ta' ? (
            <span className="font-tamil font-normal">
              அமைதியான மனம்,
              <br />
              <span className="italic font-serif text-[#FFD68A] font-light">
                தெளிவான வாழ்வு.
              </span>
            </span>
          ) : (
            <>
              A peaceful mind,
              <br />
              <span className="italic font-serif text-[#FFD68A] font-light">
                felt from within.
              </span>
            </>
          )}
        </h1>

        {/* Calm Descriptive Paragraph */}
        <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-tamil font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          {lang === 'ta'
            ? 'அளவுக்கு அதிகமான சிந்தனைகள் மற்றும் அவசர ஓட்டத்திலிருந்து விடுபட்டு, உங்கள் சொந்த தாய்மொழியில் மன அமைதியைத் தழுவுங்கள்.'
            : 'A gentle, Tamil-first space designed to help you quiet overthinking, reconnect with inner serenity, and live with soulful intention.'}
        </p>

        {/* Dual Pill Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] hover:from-[#6A1EB0] hover:to-[#883BCB] text-white text-base font-medium shadow-xl hover:shadow-2xl transition-all min-h-[48px] border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD68A]"
          >
            <span>{lang === 'ta' ? 'பயிற்சிகளைக் காண்க' : 'Explore Programs'}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Secondary Delicate Translucent Pill */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/40 text-base font-serif italic transition-all min-h-[48px] shadow-lg backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>{lang === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'}</span>
          </Link>
        </div>

      </div>

      {/* Bottom Scroll / Journey Cue */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-white/80 pt-6">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium drop-shadow-sm">
          PEACE BUDDY SANCTUARY
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
