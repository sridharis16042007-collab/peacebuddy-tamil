'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      aria-label="Peace Buddy Sanctuary"
      className="relative min-h-screen pt-28 sm:pt-36 pb-12 flex flex-col justify-between items-center overflow-hidden bg-[#FBF7F9]"
    >
      {/* Background: Heavenly Ethereal Clouds (Soul Serenity Aesthetic) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/assets/cloud-serenity.webp"
          alt="Ethereal lavender sky and peaceful pastel clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[1.02] contrast-[0.98]"
        />
        {/* Subtle ethereal mist fade for pure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF7F9]/30 via-transparent to-[#FBF7F9]/60 pointer-events-none" />
      </div>

      {/* Main Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center my-auto">
        
        {/* Official Circular Logo with Celestial Breathing Glow */}
        <div className="relative mb-6 sm:mb-8 group" aria-hidden="true">
          {/* Ambient Lavender Aura */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#7E6C9E]/30 via-[#C5B3E6]/40 to-[#F6DCE8]/30 blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />

          {/* Logo Frame */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full p-1.5 bg-white/80 backdrop-blur-md border border-[#E8DFEF] shadow-xl shadow-[#7E6C9E]/15 animate-breathe-glow motion-reduce:animate-none flex items-center justify-center">
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
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#7E6C9E]">
            ✦ A JOURNEY WITHIN ✦
          </span>
        </div>

        {/* Reference Image Headline: Roman Serif + Italicized Lilac Contrast */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#2D2342] tracking-tight leading-[1.18] mb-5 max-w-3xl">
          {lang === 'ta' ? (
            <span className="font-tamil font-normal">
              அமைதியான மனம்,
              <br />
              <span className="italic font-serif text-[#7E6C9E] font-light">
                தெளிவான வாழ்வு.
              </span>
            </span>
          ) : (
            <>
              A peaceful mind,
              <br />
              <span className="italic font-serif text-[#7E6C9E] font-light">
                felt from within.
              </span>
            </>
          )}
        </h1>

        {/* Calm Descriptive Paragraph */}
        <p className="text-base sm:text-lg text-[#5A4D6E] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-tamil font-light">
          {lang === 'ta'
            ? 'அளவுக்கு அதிகமான சிந்தனைகள் மற்றும் அவசர ஓட்டத்திலிருந்து விடுபட்டு, உங்கள் சொந்த தாய்மொழியில் மன அமைதியைத் தழுவுங்கள்.'
            : 'A gentle, Tamil-first space designed to help you quiet overthinking, reconnect with inner serenity, and live with soulful intention.'}
        </p>

        {/* Dual Pill Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary Solid Lilac Button */}
          <Link
            href="#newsletter"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#725E96] hover:bg-[#5E4C80] text-white text-base font-medium shadow-md hover:shadow-lg transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E]"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Secondary Delicate Translucent Pill */}
          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/70 hover:bg-white text-[#2D2342] border border-[#D8CFE6] text-base font-serif italic transition-all min-h-[48px] shadow-xs backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E]"
          >
            <span>{lang === 'ta' ? 'பயிற்சிகளைக் காண்க' : 'Explore Programs'}</span>
          </Link>
        </div>

      </div>

      {/* Bottom Scroll Indicator (Exact Reference Match) */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-[#7E6C9E] pt-8">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#7E6C9E] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
