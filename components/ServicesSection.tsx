'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowUpRight, Sparkles, Sun, Moon, Calendar } from 'lucide-react';

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  const programs = [
    {
      tag: lang === 'ta' ? '30 நாள் பயணம்' : '30-DAY JOURNEY',
      title: lang === 'ta' ? 'மாதாந்திர மாற்றப் பயிற்சி' : 'Monthly Transformation',
      desc:
        lang === 'ta'
          ? 'காலை பிரம்ம முகூர்த்த தியானம், நன்றியுணர்வு மற்றும் இரவு அமைதி அமர்வுகள்.'
          : 'Ground your mornings in Brahma Muhurtham stillness and end days with reflective calm.',
      duration: lang === 'ta' ? '30 நாட்கள்' : '30 Days',
      level: lang === 'ta' ? 'அனைவருக்கும்' : 'All Levels',
      href: '/programs',
      highlight: true,
      icon: Sun,
    },
    {
      tag: lang === 'ta' ? 'தினசரி பயிற்சி' : 'DAILY PRACTICE',
      title: lang === 'ta' ? 'எளிய தமிழ் தியானம்' : 'Guided Tamil Meditation',
      desc:
        lang === 'ta'
          ? 'ஓவர்திங்கிங் மற்றும் பதற்றத்தைத் தணிக்கும் எளிய 10 நிமிட மூச்சுப் பயிற்சிகள்.'
          : 'Soothe daily overthinking and mental noise with gentle breath awareness routines.',
      duration: lang === 'ta' ? '10 நிமிடங்கள்' : '10 Mins Daily',
      level: lang === 'ta' ? 'ஆரம்பநிலை' : 'Beginner',
      href: '/resources',
      highlight: false,
      icon: Moon,
    },
    {
      tag: lang === 'ta' ? 'நேரலை வகுப்பு' : 'LIVE SANCTUARY',
      title: lang === 'ta' ? 'நேரலை அமைதி அமர்வுகள்' : 'Live Sanctuary Classes',
      desc:
        lang === 'ta'
          ? 'கூட்டு தியானம் மற்றும் விழிப்புணர்வு பயிற்சிகள் நேரலையாக Google Meet மூலம்.'
          : 'Interactive group meditation, mindful reflection, and direct guidance on Google Meet.',
      duration: lang === 'ta' ? '60 நிமிடங்கள்' : '60 Mins',
      level: lang === 'ta' ? 'வாரம் தோறும்' : 'Weekly Live',
      href: '/classes',
      highlight: false,
      icon: Calendar,
    },
  ];

  return (
    <section
      id="programs"
      aria-label="Mindful Programs"
      className="py-[72px] lg:py-[120px] bg-[#F6EBEE] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Header: Large H2 on the Left, Short Description on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F2742]">
                {lang === 'ta' ? 'அமைதிப் பயிற்சிகள்' : 'MINDFUL PATHWAYS'}
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-serif font-medium text-[#0F2742] leading-[1.1] tracking-tight">
              {lang === 'ta' ? (
                <span className="font-tamil-serif">
                  உங்கள் மன அமைதிக்கான
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">பயிற்சித் திட்டங்கள்.</span>
                </span>
              ) : (
                <>
                  Gentle programs designed
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">for lasting stillness.</span>
                </>
              )}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] leading-[1.7] font-normal">
              {lang === 'ta'
                ? 'எந்தவித அவசரமும் அழுத்தமும் இன்றி, உங்கள் சொந்த வேகத்தில் நீங்கள் பழகக்கூடிய நடைமுறை வழிகாட்டல்கள்.'
                : 'Move at your own gentle pace. Structured, pressure-free practices tailored for authentic balance and everyday peace of mind.'}
            </p>
          </div>
        </div>

        {/* 3 Frosted Glass Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((prog, idx) => (
            <Link
              key={idx}
              href={prog.href}
              className={`group relative p-7 sm:p-8 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,39,66,0.14)] transition-all duration-300 flex flex-col justify-between ${
                prog.highlight ? 'ring-1 ring-[#8B5E83]/30' : ''
              }`}
            >
              <div>
                {/* Top Row: Blush Pill Tag + Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-[0.14em] bg-[#F4D9DF] text-[#8B5E83]">
                    {prog.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-[#8B5E83] shadow-xs group-hover:scale-105 transition-transform">
                    <prog.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Title (26px Serif) */}
                <h3 className="text-[24px] sm:text-[26px] font-serif font-medium text-[#0F2742] mb-3 group-hover:text-[#8B5E83] transition-colors leading-tight">
                  {prog.title}
                </h3>

                {/* 2-line Description */}
                <p className="text-[15px] sm:text-[16px] text-[#4A5A6A] leading-[1.65] mb-8 line-clamp-2">
                  {prog.desc}
                </p>
              </div>

              {/* Bottom: Duration + Level & Round Mauve Arrow Button (Rotates 45 deg on hover) */}
              <div className="pt-5 border-t border-[#0F2742]/10 flex items-center justify-between">
                <div>
                  <span className="text-[12px] uppercase tracking-[0.12em] font-medium text-[#8B5E83] block">
                    {prog.duration}
                  </span>
                  <span className="text-[13px] text-[#4A5A6A] font-medium">
                    {prog.level}
                  </span>
                </div>

                {/* Round Mauve Button Rotating 45° */}
                <div className="w-11 h-11 rounded-full bg-[#8B5E83] text-white flex items-center justify-center shadow-sm group-hover:bg-[#6F4768] transition-colors">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
