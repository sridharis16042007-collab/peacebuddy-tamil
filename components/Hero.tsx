'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Sparkles,
  ArrowRight,
  Wind,
  Moon,
  Clock,
  Heart,
  Play,
  Star,
} from 'lucide-react';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      aria-label="Peace Buddy Sanctuary Hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-[#F8F5F1]"
    >
      {/* 2-3 Large Blurred Gradient Glows (Lavender, Blush, Soft Peach) at 25-35% Opacity */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] rounded-full bg-[#E8D7F1] opacity-30 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 sm:left-1/4 w-[450px] sm:w-[600px] h-[450px] rounded-full bg-[#F4D9DF] opacity-35 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-5 sm:right-1/4 w-[400px] sm:w-[550px] h-[400px] rounded-full bg-[#FDE2D2] opacity-30 blur-[120px] pointer-events-none -z-10" />

      {/* Rotating Circular Text Badge Top Right ("A CALMER MIND • EVERY DAY •") */}
      <div className="absolute top-24 right-4 sm:top-28 sm:right-10 lg:right-16 z-20 hidden sm:block">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
          <svg
            viewBox="0 0 140 140"
            className="w-full h-full animate-spin-slow select-none pointer-events-none"
          >
            <path
              id="circlePath"
              d="M 70, 70 m -53, 0 a 53,53 0 1,1 106,0 a 53,53 0 1,1 -106,0"
              fill="none"
            />
            <text className="text-[10px] uppercase tracking-[0.22em] fill-[#0F2742] font-semibold">
              <textPath href="#circlePath" startOffset="0%">
                A CALMER MIND • EVERY DAY •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-1 sm:p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_4px_20px_rgba(15,39,66,0.12)] flex items-center justify-center">
              <Image
                src="/Peace_Buddy_Teal_Circular_Emblem.png"
                alt="Peace Buddy Logo"
                width={76}
                height={76}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12 w-full my-auto flex flex-col items-center text-center">

        {/* Pill Label: "Structured pathways to peace" / "அமைதிக்கான சீரான நல்வழிகள்" */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F2742]">
            {lang === 'ta' ? 'அமைதிக்கான சீரான நல்வழிகள்' : 'Structured pathways to peace'}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
        </div>

        {/* H1 Headline on Two Lines: Line 1 Normal Serif, Line 2 Italic Serif */}
        <h1 className="text-[44px] sm:text-[68px] lg:text-[96px] font-serif font-medium text-[#0F2742] tracking-[-0.02em] leading-[1.02] mb-6 max-w-4xl">
          {lang === 'ta' ? (
            <span className="font-tamil-serif block leading-[1.3]">
              ஆழ்ந்த மன அமைதி
              <span className="block italic font-serif text-[#8B5E83] font-normal mt-1 sm:mt-2">
                அன்பான ஒரு வழிகாட்டல்.
              </span>
            </span>
          ) : (
            <>
              Find lasting calm
              <span className="block italic font-serif text-[#8B5E83] font-normal mt-1 sm:mt-2">
                one gentle step at a time.
              </span>
            </>
          )}
        </h1>

        {/* 2-Line Subtext: Max Width 560px, 18px text, Muted Grey-Navy */}
        <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] max-w-[560px] leading-[1.7] mb-8 font-sans font-normal">
          {lang === 'ta'
            ? 'அளவுக்கு அதிகமான சிந்தனைகள், மன அழுத்தம் மற்றும் அவசர உலகத்திலிருந்து விடுபட்டு, தாய்மொழியில் அமைதியையும் புத்துணர்ச்சியையும் மீட்டெடுங்கள்.'
            : 'Step away from overthinking and daily noise. A dedicated Tamil-first sanctuary to quiet your mind, restore balance, and cultivate lasting peace.'}
        </p>

        {/* Two Pill Buttons: Navy Pill "Start your journey" + White Outline Pill "Explore Classes" */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/classes"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium shadow-md hover:shadow-lg transition-all min-h-[48px] active:scale-95 group"
          >
            <span>{lang === 'ta' ? 'உங்கள் பயணத்தைத் தொடங்குங்கள்' : 'Start your journey'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>

          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/70 hover:bg-white text-[#0F2742] border border-white/90 text-[15px] font-medium shadow-xs hover:shadow transition-all min-h-[48px] backdrop-blur-md active:scale-95"
          >
            <Play className="w-4 h-4 text-[#8B5E83] fill-[#8B5E83]" aria-hidden="true" />
            <span>{lang === 'ta' ? 'பயிற்சிகளைக் காண்க' : 'Explore Programs'}</span>
          </Link>
        </div>

        {/* Center Image Arch with 4 Floating Glass Cards */}
        <div className="relative w-full max-w-[420px] mx-auto mt-2 mb-6">

          {/* Connecting Curved Lines (Thin SVGs Behind Floating Cards) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-10 hidden md:block overflow-visible"
            viewBox="0 0 420 520"
          >
            <path
              d="M -60 120 C 40 120, 60 180, 120 200"
              fill="none"
              stroke="#8B5E83"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M -40 380 C 40 380, 60 320, 100 300"
              fill="none"
              stroke="#8B5E83"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M 480 120 C 380 120, 360 180, 300 200"
              fill="none"
              stroke="#8B5E83"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M 460 380 C 380 380, 360 320, 320 300"
              fill="none"
              stroke="#8B5E83"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.35"
            />
          </svg>

          {/* Floating Card 1: Top-Left ("Calm your mind" / -4 deg / float-slow) */}
          <div
            className="hidden md:flex absolute -left-48 lg:-left-56 top-16 z-20 flex-col items-start p-4 rounded-[22px] border border-[#CFA5F7]/80 shadow-[0_20px_50px_rgba(180,140,230,0.22)] max-w-[210px] text-left transform -rotate-4 animate-float-slow hover:scale-105 hover:shadow-[0_25px_60px_rgba(180,140,230,0.30)] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F6EDFD 35%, #E5C8FB 70%, #CEA0F6 100%)',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#8B5E83] mb-2 shadow-xs">
              <Wind className="w-4 h-4" />
            </div>
            <h2 className="text-[15px] font-serif font-semibold text-[#0F2742] leading-tight">
              {lang === 'ta' ? 'மன அமைதி' : 'Calm your mind'}
            </h2>
            <p className="text-[12px] text-[#3D2652] font-medium leading-snug mt-1">
              {lang === 'ta' ? 'எண்ணங்களை அமைதிப்படுத்துங்கள்' : 'Quiet mental noise daily'}
            </p>
          </div>

          {/* Floating Card 2: Bottom-Left ("Sleep deeply" / +3 deg / float-reverse) */}
          <div
            className="hidden md:flex absolute -left-44 lg:-left-52 bottom-20 z-20 flex-col items-start p-4 rounded-[22px] border border-[#CFA5F7]/80 shadow-[0_20px_50px_rgba(180,140,230,0.22)] max-w-[210px] text-left transform rotate-3 animate-float-reverse hover:scale-105 hover:shadow-[0_25px_60px_rgba(180,140,230,0.30)] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F6EDFD 35%, #E5C8FB 70%, #CEA0F6 100%)',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#8B5E83] mb-2 shadow-xs">
              <Moon className="w-4 h-4" />
            </div>
            <h2 className="text-[15px] font-serif font-semibold text-[#0F2742] leading-tight">
              {lang === 'ta' ? 'ஆழ்ந்த உறக்கம்' : 'Sleep deeply'}
            </h2>
            <p className="text-[12px] text-[#3D2652] font-medium leading-snug mt-1">
              {lang === 'ta' ? 'நிம்மதியான இரவு அமைதி' : 'Wake up revitalized'}
            </p>
          </div>

          {/* Floating Card 3: Top-Right ("Daily 10-min practice" / +4 deg / float-slow) */}
          <div
            className="hidden md:flex absolute -right-48 lg:-right-56 top-20 z-20 flex-col items-start p-4 rounded-[22px] border border-[#CFA5F7]/80 shadow-[0_20px_50px_rgba(180,140,230,0.22)] max-w-[210px] text-left transform rotate-4 animate-float-slow hover:scale-105 hover:shadow-[0_25px_60px_rgba(180,140,230,0.30)] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F6EDFD 35%, #E5C8FB 70%, #CEA0F6 100%)',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#2A5235] mb-2 shadow-xs">
              <Clock className="w-4 h-4" />
            </div>
            <h2 className="text-[15px] font-serif font-semibold text-[#0F2742] leading-tight">
              {lang === 'ta' ? '10 நிமிட தியானம்' : 'Daily 10-min practice'}
            </h2>
            <p className="text-[12px] text-[#3D2652] font-medium leading-snug mt-1">
              {lang === 'ta' ? 'எளிய தமிழ் பயிற்சிகள்' : 'Effortless, steady habit'}
            </p>
          </div>

          {/* Floating Card 4: Bottom-Right ("Mindful Living" / -3 deg / float-reverse) */}
          <div
            className="hidden md:flex absolute -right-44 lg:-right-52 bottom-16 z-20 flex-col items-start p-4 rounded-[22px] border border-[#CFA5F7]/80 shadow-[0_20px_50px_rgba(180,140,230,0.22)] max-w-[210px] text-left transform -rotate-3 animate-float-reverse hover:scale-105 hover:shadow-[0_25px_60px_rgba(180,140,230,0.30)] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F6EDFD 35%, #E5C8FB 70%, #CEA0F6 100%)',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#8B5E83] mb-2 shadow-xs">
              <Heart className="w-4 h-4" />
            </div>
            <h2 className="text-[15px] font-serif font-semibold text-[#0F2742] leading-tight">
              {lang === 'ta' ? 'விழிப்புணர்வு வாழ்வு' : 'Mindful Living'}
            </h2>
            <p className="text-[12px] text-[#3D2652] font-medium leading-snug mt-1">
              {lang === 'ta' ? 'அழுத்தமற்ற நல்வாழ்வு' : 'Less stress, true ease'}
            </p>
          </div>

          {/* Large Rounded Arch Container (420px Wide x 520px Tall, Rounded Arch) */}
          <div className="w-[300px] sm:w-[420px] h-[380px] sm:h-[520px] mx-auto rounded-t-[150px] sm:rounded-t-[210px] rounded-b-[40px] overflow-hidden shadow-[0_24px_60px_rgba(15,39,66,0.12)] border border-white/90 relative bg-[#F6EBEE] group">
            <Image
              src="/assets/sunset-serenity.webp"
              alt="Calm serene sunset meadow"
              fill
              priority
              sizes="(max-width: 640px) 300px, 420px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/50 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Pill at bottom of arch: Choose your dreamed life (no icon) */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center px-5 py-2 rounded-full border border-white/90 shadow-md backdrop-blur-md whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(246, 237, 253, 0.92) 50%, rgba(229, 200, 251, 0.90) 100%)',
              }}
            >
              <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#0F2742] tracking-wide">
                {lang === 'ta' ? 'உங்கள் கனவு வாழ்வை தேர்ந்தெடுங்கள்' : 'Choose your dreamed life'}
              </span>
            </div>
          </div>

          {/* Below picture: Peace Buddy Welcomes You with Logo */}
          <div className="mt-4 sm:mt-5 text-center flex items-center justify-center">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#CFA5F7]/70 shadow-xs text-xs sm:text-[13px] font-serif font-semibold text-[#0F2742] tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F6EDFD 35%, #E5C8FB 70%, #CEA0F6 100%)',
              }}
            >
              <Image
                src="/Peace_Buddy_Teal_Circular_Emblem.png"
                alt="Peace Buddy Logo"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full object-contain flex-shrink-0"
              />
              <span>{lang === 'ta' ? 'பீஸ் படி உங்களை அன்புடன் வரவேற்கிறது' : 'Peace Buddy welcomes you'}</span>
            </span>
          </div>

        </div>

      </div>

      {/* Bottom Proof Bar: Left "Trusted by 5,000+ people" / Right "Less stress. More peace." */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12 w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5A6A]">
        {/* Left: Trusted by 5,000+ people with small avatar circles */}
        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-[#E8D7F1] border-2 border-white flex items-center justify-center text-[10px] font-semibold text-[#8B5E83]">
              P
            </div>
            <div className="w-6 h-6 rounded-full bg-[#F4D9DF] border-2 border-white flex items-center justify-center text-[10px] font-semibold text-[#8B5E83]">
              B
            </div>
            <div className="w-6 h-6 rounded-full bg-[#DDE6DC] border-2 border-white flex items-center justify-center text-[10px] font-semibold text-[#2A5235]">
              T
            </div>
          </div>
          <span className="font-medium text-[#0F2742]">
            {lang === 'ta' ? '5,000+ தமிழ் அன்பர்களின் நல்நம்பிக்கை' : 'Trusted by 5,000+ people'}
          </span>
        </div>

        {/* Right: Less stress. More peace. with a tiny star icon */}
        <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs">
          <Star className="w-3.5 h-3.5 text-[#8B5E83] fill-[#8B5E83]" aria-hidden="true" />
          <span className="font-medium text-[#0F2742]">
            {lang === 'ta' ? 'குறைவான அழுத்தம். அதிக அமைதி.' : 'Less stress. More peace.'}
          </span>
        </div>
      </div>
    </section>
  );
}
