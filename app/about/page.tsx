'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, ArrowRight, ShieldCheck, Compass, Heart } from 'lucide-react';

export default function AboutPage() {
  const { lang, t } = useLanguage();

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
              {t.nav.about}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#0F2742] font-semibold text-[12px] uppercase tracking-[0.14em] mb-4 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
            <span>{lang === 'ta' ? 'எங்கள் நோக்கம்' : 'OUR SANCTUARY PURPOSE'}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-serif font-medium text-[#0F2742] leading-[1.08] tracking-tight mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif">
                அமைதிக்கான எளிய பயணம்
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (பீஸ் படி தமிழ்)
                </span>
              </span>
            ) : (
              <>
                A Simple Journey to Inner Peace
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (Peace Buddy Sanctuary)
                </span>
              </>
            )}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] leading-[1.7] max-w-2xl mx-auto font-normal">
            {lang === 'ta'
              ? 'எந்தவித படபடப்பும், வணிக அழுத்தமும் இல்லாத... உங்கள் மனதை இளைப்பாறச் செய்யும் ஒரு மென்மையான தமிழ் தளம்.'
              : 'A gentle, hype-free space crafted specifically for Tamil speakers seeking authentic calm, emotional clarity, and mindful balance.'}
          </p>
        </div>

        {/* 2-Column Founder Feature */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Founder Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] h-[380px] sm:h-[440px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(15,39,66,0.10)] border border-white/90 bg-[#F6EBEE] group">
                <Image
                  src="/assets/founder-meditation-tree.jpg"
                  alt="Founder peaceful meditation sanctuary"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/80 backdrop-blur-md text-center">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8B5E83] block">
                    {t.founder.role}
                  </span>
                  <span className="text-sm font-serif font-medium text-[#0F2742]">
                    {t.founder.credentials}
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Story Text */}
            <div className="md:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold text-[#8B5E83] bg-[#F4D9DF] mb-3 tracking-[0.12em] uppercase">
                {t.founder.badge}
              </span>
              <h2 className="text-[26px] sm:text-[34px] font-serif font-medium text-[#0F2742] leading-tight mb-4">
                {t.founder.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#4A5A6A] leading-[1.75] mb-6 font-normal">
                {t.founder.story}
              </p>

              {/* 3 Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#0F2742]/10 text-center">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-medium text-[#0F2742] block">500+</span>
                  <span className="text-xs text-[#4A5A6A]">Sessions</span>
                </div>
                <div className="border-l border-[#0F2742]/10">
                  <span className="text-2xl sm:text-3xl font-serif font-medium text-[#0F2742] block">30 Days</span>
                  <span className="text-xs text-[#4A5A6A]">Daily Practice</span>
                </div>
                <div className="border-l border-[#0F2742]/10">
                  <span className="text-2xl sm:text-3xl font-serif font-medium text-[#0F2742] block">4.9 ★</span>
                  <span className="text-xs text-[#4A5A6A]">Rating</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Guiding Principles in Frosted Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          <div className="p-7 sm:p-8 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.06)] hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#DDE6DC] text-[#2A5235] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#0F2742] mb-2">
              {lang === 'ta' ? 'தீர்ப்புகளற்ற இடம்' : 'Judgment-Free Space'}
            </h3>
            <p className="text-[14px] text-[#4A5A6A] leading-[1.65]">
              {lang === 'ta'
                ? 'உங்கள் எண்ணங்கள் அல்லது சூழ்நிலைகளை யாரும் தவறாக மதிப்பிடுவதில்லை. இது உங்களின் பாதுகாப்பான தளம்.'
                : 'Your emotions and experiences are welcomed with dignity, tenderness, and absolute acceptance.'}
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.06)] hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#F6EBEE] text-[#8B5E83] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#0F2742] mb-2">
              {lang === 'ta' ? 'எளிமையான வழிகாட்டல்' : 'Gentle Simplicity'}
            </h3>
            <p className="text-[14px] text-[#4A5A6A] leading-[1.65]">
              {lang === 'ta'
                ? 'எந்தவித கடுமையான விதிகளும் இல்லை. அன்றாட வாழ்வில் நீங்கள் எளிதாக கடைப்பிடிக்கக்கூடிய எளிய மூச்சுப் பயிற்சிகள்.'
                : 'No complicated dogmas or rigid postures. Practical, accessible mindfulness for your daily life.'}
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.06)] hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#E8D7F1] text-[#8B5E83] flex items-center justify-center mb-5">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-[#0F2742] mb-2">
              {lang === 'ta' ? '100% தமிழ் சூழல்' : 'Tamil-First Sanctuary'}
            </h3>
            <p className="text-[14px] text-[#4A5A6A] leading-[1.65]">
              {lang === 'ta'
                ? 'நம் சொந்த தாய்மொழியில் மனதை அமைதிப்படுத்தும் சொற்கள் தரும் இளைப்பாறுதல் அலாதியானது.'
                : 'Finding peace in your own mother tongue connects directly to your emotional roots and inner calmness.'}
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center pt-8">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium shadow-md transition-all active:scale-95"
          >
            <span>{lang === 'ta' ? 'வகுப்பு அட்டவணை காண' : 'Explore Class Schedule'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
