'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowUpRight, Heart, UserCheck, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      aria-label="Peace Buddy Sanctuary"
      className="relative min-h-[95vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#F0F1EB]"
    >
      {/* Background Atmosphere - Serenica Morning Light Aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/ref-serenica.jpg"
          alt="Serene morning window with soft sunlight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.92] contrast-[0.98]"
        />
        {/* Soft Warm Mist Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0F1EB]/95 via-[#F0F1EB]/75 to-transparent sm:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F1EB]/90 via-[#F0F1EB]/70 to-[#F0F1EB]/95 sm:hidden" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Soft Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#263120]/10 text-[#263120] text-xs sm:text-sm font-medium mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1583C7] animate-pulse" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Serenica-Style Editorial Headline (with Italic Accent) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#12263A] tracking-tight leading-[1.15] mb-6 font-english">
              {lang === 'ta' ? (
                <span className="font-tamil font-normal">
                  உங்கள் பயணம் <span className="italic font-serif text-[#0B3D6B]">அமைதியை நோக்கி</span>
                  <br />
                  பீஸ் படியுடன் தொடங்குகிறது.
                </span>
              ) : (
                <>
                  Your journey <span className="italic font-serif text-[#0B3D6B]">to calm</span>
                  <br />
                  starts with Peace Buddy.
                </>
              )}
            </h1>

            {/* Subline */}
            <p className="text-lg sm:text-xl text-[#36526D] max-w-xl leading-relaxed mb-8 font-tamil">
              {lang === 'ta'
                ? 'அளவுக்கு அதிகமான சிந்தனைகள் மற்றும் அவசர ஓட்டத்திலிருந்து விடுபட்டு, உங்கள் சொந்த தாய்மொழியில் மன அமைதியைக் கண்டடையுங்கள்.'
                : 'A gentle, Tamil-first space designed to help you release overthinking, embrace daily serenity, and live with mindful intention.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#newsletter"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#263120] hover:bg-[#0B3D6B] text-white text-base font-medium transition-all shadow-md hover:shadow-lg min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1583C7]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="#breathe-strip"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#263120] border border-[#263120]/15 text-base font-medium transition-all min-h-[50px] shadow-xs backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1583C7]"
              >
                <span>{t.hero.secondaryLink}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: User's Official Emblem (Neat, Superb Presentation) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <div className="relative group">
              {/* Soft Ambient Halo Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#1583C7]/20 to-[#8FC5E8]/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Logo Presentation Frame */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-white/85 backdrop-blur-xl border border-white shadow-2xl shadow-[#0B3D6B]/15 animate-breathe-glow motion-reduce:animate-none flex items-center justify-center">
                <Image
                  src="/Peace_Buddy_Teal_Circular_Emblem.webp"
                  alt="Peace Buddy Official Teal Circular Emblem"
                  width={280}
                  height={280}
                  priority
                  className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gentle Floating Badge Below Logo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#263120]/10 shadow-sm text-center whitespace-nowrap">
                <span className="text-xs font-semibold text-[#0B3D6B] tracking-wide">
                  PEACE BUDDY TAMIL
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Features Strip (Exact Serenica Model Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full mt-12 sm:mt-16 pt-6 border-t border-[#263120]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#263120]">
          
          {/* Micro Point 1 */}
          <div className="flex items-start gap-3.5 bg-white/60 sm:bg-transparent backdrop-blur-xs p-3 sm:p-0 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-white/80 border border-[#263120]/10 flex items-center justify-center flex-shrink-0 text-[#0B3D6B] shadow-xs">
              <Heart className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-[#12263A] font-tamil">
                {lang === 'ta' ? 'கனிவான வழிகாட்டல்' : 'Gentle Guidance'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A758E] leading-relaxed">
                {lang === 'ta'
                  ? 'எந்தவித தீர்ப்புமின்றி உங்கள் உணர்வுகளை மதிக்கும் கரிசனை.'
                  : 'Calm mindfulness delivered with heartfelt empathy.'}
              </p>
            </div>
          </div>

          {/* Micro Point 2 */}
          <div className="flex items-start gap-3.5 bg-white/60 sm:bg-transparent backdrop-blur-xs p-3 sm:p-0 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-white/80 border border-[#263120]/10 flex items-center justify-center flex-shrink-0 text-[#0B3D6B] shadow-xs">
              <UserCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-[#12263A] font-tamil">
                {lang === 'ta' ? 'தனிப்பயனாக்கப்பட்ட அணுகுமுறை' : 'Personalized Approach'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A758E] leading-relaxed">
                {lang === 'ta'
                  ? 'உங்கள் வாழ்க்கை முறைக்கு ஏற்ற எளிய அமைதி பழக்கங்கள்.'
                  : 'Practices shaped quietly around your own rhythm and pace.'}
              </p>
            </div>
          </div>

          {/* Micro Point 3 */}
          <div className="flex items-start gap-3.5 bg-white/60 sm:bg-transparent backdrop-blur-xs p-3 sm:p-0 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-white/80 border border-[#263120]/10 flex items-center justify-center flex-shrink-0 text-[#0B3D6B] shadow-xs">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-[#12263A] font-tamil">
                {lang === 'ta' ? 'பாதுகாப்பான அமைதிச் சூழல்' : 'Safe, Calming Space'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A758E] leading-relaxed">
                {lang === 'ta'
                  ? 'மன அழுத்தம் நீங்கி இளைப்பாற ஒரு தூய தமிழ் புகலிடம்.'
                  : 'A quiet, private environment created purely for your peace.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
