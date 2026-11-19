'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowRight, Leaf, Flower2, HeartHandshake, Sparkles } from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      aria-label="Welcome to Peace Buddy"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-mist/50 via-ice to-white"
    >
      {/* Background Atmosphere Image with Serene Gradient Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply overflow-hidden">
        <Image
          src="/assets/ref-aurora.webp"
          alt="Peaceful serene mountain lake landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ice/90 via-ice/60 to-white/95" />
      </div>

      {/* Main Hero Content (Centered) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center my-auto">
        {/* Emblem with Breathing Animation (180px desktop / 120px mobile, 6s ease-in-out) */}
        <div
          className="mb-8 relative flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] rounded-full p-1.5 bg-white/70 backdrop-blur-md border border-ringBlue/30 shadow-xl shadow-ringBlue/10 animate-breathe-glow motion-reduce:animate-none flex items-center justify-center">
            <Image
              src="/Peace_Buddy_Teal_Circular_Emblem.svg"
              alt="Peace Buddy Circular Emblem"
              width={180}
              height={180}
              priority
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Calm Badge / Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/80 backdrop-blur-sm border border-ringBlue/20 text-navy font-medium text-xs sm:text-sm mb-5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-ringBlue animate-pulse" />
          <span>{t.hero.tagline}</span>
        </div>

        {/* Single H1 Promise */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.25] sm:leading-[1.2] mb-4 font-tamil max-w-3xl">
          {t.hero.h1}
        </h1>

        {/* English Subline & Calm Description */}
        <p className="text-lg sm:text-xl font-normal text-ink-secondary mb-3 max-w-2xl font-english">
          {t.hero.englishSubline}
        </p>
        <p className="text-base sm:text-lg text-ink-muted mb-8 sm:mb-10 max-w-2xl leading-relaxed font-tamil">
          {t.hero.tamilDescription}
        </p>

        {/* Dual CTA Actions: Primary Pill + Subtle Secondary Link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="#newsletter"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-pill bg-navy hover:bg-ringBlue text-white text-base sm:text-lg font-medium shadow-md hover:shadow-lg transition-all min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue focus-visible:ring-offset-2"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <Link
            href="#breathe-strip"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-pill text-ink hover:text-navy hover:bg-mist/40 transition-colors text-base font-medium min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            <span>{t.hero.secondaryLink}</span>
          </Link>
        </div>
      </div>

      {/* Aurora Reference Model: Bottom 4 Frosted Glass Feature Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-mist/70 flex items-center justify-center text-navy flex-shrink-0">
              <Leaf className="w-5 h-5 text-ringBlue" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy text-base">
                {t.hero.pills.nature.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-relaxed">
                {t.hero.pills.nature.desc}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-mist/70 flex items-center justify-center text-navy flex-shrink-0">
              <Flower2 className="w-5 h-5 text-ringBlue" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy text-base">
                {t.hero.pills.mindful.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-relaxed">
                {t.hero.pills.mindful.desc}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-mist/70 flex items-center justify-center text-navy flex-shrink-0">
              <HeartHandshake className="w-5 h-5 text-ringBlue" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy text-base">
                {t.hero.pills.community.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-relaxed">
                {t.hero.pills.community.desc}
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-mist/70 flex items-center justify-center text-navy flex-shrink-0">
              <Sparkles className="w-5 h-5 text-ringBlue" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy text-base">
                {t.hero.pills.lasting.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-relaxed">
                {t.hero.pills.lasting.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
