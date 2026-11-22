'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Sparkles,
  Sun,
  Moon,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

export default function ProgramsPage() {
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
              {lang === 'ta' ? 'பயிற்சி திட்டம்' : 'Program'}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#0F2742] font-semibold text-[12px] uppercase tracking-[0.14em] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
            <span>
              {lang === 'ta' ? 'முழுமையான வாழ்வியல் மாற்றம்' : 'SACRED TRANSFORMATION JOURNEY'}
            </span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-serif font-medium text-[#0F2742] leading-[1.08] tracking-tight mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif">
                மாதாந்திர மாற்றப் பயிற்சி
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[26px] sm:text-[40px]">
                  (காலை, மாலை & வார இறுதி பயிலரங்குகள்)
                </span>
              </span>
            ) : (
              <>
                Monthly Mindful Transformation
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[26px] sm:text-[40px]">
                  (Morning, Evening & Weekend Workshops)
                </span>
              </>
            )}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] leading-[1.7] max-w-2xl mx-auto font-normal">
            {lang === 'ta'
              ? 'ஒரு மாத கால தினசரி தமிழ் வழிகாட்டல் மூலம் உங்கள் நாளை விழிப்புணர்வுடன் தொடங்கி, அன்றாட மன அழுத்தங்களை நீக்கி, இரவை ஆழ்ந்த அமைதியான உறக்கத்துடன் நிறைவு செய்யும் 30 நாள் வாழ்வியல் பயிற்சி.'
              : 'A 30-day life transformation program in Tamil. Start your mornings with dawn meditation, end your days with peaceful sleep meditation, and grow with special weekend workshops.'}
          </p>
        </div>

        {/* Single Flagship Transformation Container: Frosted Glass */}
        <div className="bg-white/70 backdrop-blur-md rounded-[28px] p-6 sm:p-10 lg:p-12 border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] mb-14">

          {/* Program Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#0F2742]/10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold text-[#8B5E83] bg-[#F4D9DF] mb-2 tracking-[0.12em] uppercase">
                ✦ 30 DAYS DAILY TRANSFORMATION ✦
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#0F2742]">
                {lang === 'ta'
                  ? 'மாதாந்திர மாற்றப் பயிற்சி அட்டவணை'
                  : 'Daily Mindful Transformation Schedule'}
              </h2>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/90 text-xs text-[#4A5A6A]">
              <Clock className="w-4 h-4 text-[#8B5E83]" />
              <span className="font-medium">
                {lang === 'ta' ? 'தினசரி காலை, மாலை & வார இறுதி அமர்வுகள்' : 'Daily Morning, Evening & Weekend Sessions'}
              </span>
            </div>
          </div>

          {/* SESSIONS GRID: Morning, Evening & Weekend Workshops in Ordered Way */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-10">

            {/* 1. MORNING SESSION */}
            <div className="rounded-[24px] p-6 sm:p-7 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF5E6]/80 border border-[#FDE68A]/70 shadow-[0_20px_60px_rgba(217,119,6,0.06)] flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-[#FEF3C7] text-[#B45309] flex-shrink-0">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B5E83]">
                      {lang === 'ta' ? 'அமர்வு 1' : 'Session 1'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0F2742]">
                      {lang === 'ta' ? 'பிரம்ம முகூர்த்த காலை அமர்வு' : 'Brahma Muhurtham Morning Session'}
                    </h3>
                  </div>
                </div>

                {/* Morning Session Visual Hero Image */}
                <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/morning-garden-meditation.jpg"
                    alt="Brahma Muhurtham Morning Session"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#451A03]/70 via-[#78350F]/15 to-transparent pointer-events-none" />

                  {/* Photo Title */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center text-center text-white text-xs px-3.5 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px] tracking-wide text-center">
                      ✦ {lang === 'ta' ? 'பிரம்ம முகூர்த்த காலை அமர்வு' : 'Brahma Muhurtham Morning Session'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'விடியற்காலை புத்துணர்ச்சியுடன் எழுந்து, அமைதியான மனநிலையுடன் அன்றைய நாளைத் தொடங்குவதற்கான 3 எளிய படிநிலைகள்:'
                    : 'Start your day calm, focused, and energized with these 3 daily morning steps:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Brahma Muhurtham Meditation */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#0F2742] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'தினசரி பிரம்ம முகூர்த்த தியானம்'
                          : 'Daily Dawn Meditation'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'விடியற்காலை பிரம்ம முகூர்த்தத்தின் அமைதியில் ஆழ்ந்து, மனதை ஒருமுகப்படுத்தி நரம்பு மண்டலத்தை அமைதிப்படுத்தும் ஆழ்ந்த தமிழ் தியானம்.'
                          : 'Early morning meditation at dawn to quiet a busy mind, reduce stress, and start your day with deep peace.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Gratitude Writing */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#0F2742] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'நன்றியுணர்வு எழுத்துப் பயிற்சி'
                          : 'Gratitude Writing'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அன்றைய நாளை நேர்மறை எண்ணங்கள், அமைதி மற்றும் வாழ்வின் நன்மைகளை உணர்ந்து போற்றும் வழிகாட்டப்பட்ட நன்றியுணர்வு பதிவு.'
                          : 'Write down what you are thankful for every morning to fill your heart with positive energy and joy.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Day Follow-up */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#0F2742] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'அன்றைய நாள் வழிகாட்டல் & விழிப்புணர்வு'
                          : 'Mindful Daily Reminders'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'நாள் முழுவதும் அவசரமின்றி, பதற்றமின்றி விழிப்புணர்வுடன் செயல்படுவதற்கான கவனமுள்ள தொடர் வழிகாட்டல்.'
                          : 'Simple reminders during your day to avoid stress, stop overthinking, and work with a relaxed mind.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F2742]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                <div className="flex items-center gap-2 text-[#2A5235]">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                  <span>{lang === 'ta' ? 'புத்துணர்ச்சியான தொடக்கம்' : 'Energizing, mindful start'}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-[11px] font-semibold border border-[#FDE68A]/80 shadow-2xs">
                  {lang === 'ta' ? 'காலை + மாலை: ₹999' : 'Morning + Evening: ₹999'}
                </span>
              </div>
            </div>

            {/* 2. EVENING SESSION (Matching user's soft purple gradient & bold text) */}
            <div
              className="rounded-[24px] p-6 sm:p-7 border border-[#BFA7FF]/85 shadow-[0_20px_60px_rgba(180,150,250,0.20)] flex flex-col justify-between relative overflow-hidden"
              style={{
                background: 'radial-gradient(125% 105% at 50% 50%, #FFFFFF 28%, #F2EBFE 65%, #CBB3FE 100%)',
              }}
            >
              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-[#E8D7F1] text-[#8B5E83] flex-shrink-0 shadow-xs">
                    <Moon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B5E83]">
                      {lang === 'ta' ? 'அமர்வு 2' : 'Session 2'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0F2742]">
                      {lang === 'ta' ? 'இரவு நேர வழிகாட்டப்பட்ட தியானம்' : 'Night Guided Meditation'}
                    </h3>
                  </div>
                </div>

                {/* Evening Session Visual Hero Image (Night Guided Meditation) */}
                <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/evening-bedtime-window-meditation.jpg"
                    alt="Night Guided Meditation"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/75 via-[#1C1628]/25 to-transparent pointer-events-none" />

                  {/* Photo Title */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center text-center text-white text-xs px-3.5 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px] tracking-wide text-center">
                      ✦ {lang === 'ta' ? 'இரவு நேர வழிகாட்டப்பட்ட தியானம்' : 'Night Guided Meditation'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'அன்றாட சோர்வு மற்றும் சிந்தனைகளை இறக்கி வைத்து, நிம்மதியான உறக்கத்திற்குத் தயாராகும் 3 எளிய படிநிலைகள்:'
                    : 'Let go of daily stress, clear your mind, and prepare for a deep, peaceful sleep with these 3 steps:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Journal Writing */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#8B5E83] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'சுயபரிசீலனை ஜர்னல் எழுத்து'
                          : 'Journal Writing'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அன்றைய நிகழ்வுகள், உணர்வுகள் மற்றும் மன அழுத்தங்களை அமைதியாக எழுதி மனதை இலகுவாக்கும் எளிய ஜர்னல் பயிற்சி.'
                          : 'Write down your thoughts and feelings from the day to let go of tension and feel mentally light.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Night Guided Meditation */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#8B5E83] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'இரவு நேர வழிகாட்டப்பட்ட தியானம்'
                          : 'Night Guided Meditation'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அலைபாயும் எண்ணங்களை முழுமையாக சாந்தப்படுத்தி, உடலையும் மனதையும் தளர்த்தி ஆழ்ந்த, நிம்மதியான உறக்கத்திற்கு அழைத்துச் செல்லும் இரவு தியானம்.'
                          : 'Guided meditation to calm racing thoughts, relax your whole body, and drift into peaceful sleep.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Deep & Restful Sleep */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#8B5E83] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'ஆழ்ந்த உறக்க தளர்வு & மன அமைதி'
                          : 'Deep & Restful Sleep'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அமைதியான சூழலை உருவாக்கி, நரம்பு மண்டலத்தை முழுமையாக சாந்தப்படுத்தி மறுநாள் புத்துணர்ச்சியோடு விழிக்க உதவும் எளிய தளர்வு.'
                          : 'Put away phone screens, relax completely, and wake up feeling refreshed and energized next morning.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#8B5E83]/20 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                <div className="flex items-center gap-2 text-[#6B3E63]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5E83]" />
                  <span>{lang === 'ta' ? 'ஆழ்ந்த அமைதியான உறக்கம்' : 'Restorative, peaceful sleep'}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#E8D7F1] text-[#6B3E63] text-[11px] font-semibold border border-[#CBB3FE]/80 shadow-2xs">
                  {lang === 'ta' ? 'காலை + மாலை: ₹999' : 'Morning + Evening: ₹999'}
                </span>
              </div>
            </div>

            {/* 3. WEEKEND WORKSHOPS (Money, Inner Self-Value, Open to Everyone in Simple English) */}
            <div className="rounded-[24px] p-6 sm:p-7 bg-gradient-to-b from-[#F3F8F5] via-[#EBF4EF] to-[#E3EFE8]/80 border border-[#C5DDD0]/80 shadow-[0_20px_60px_rgba(42,82,53,0.06)] flex flex-col justify-between relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-[#DDE6DC] text-[#2A5235] flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A5235]">
                      {lang === 'ta' ? 'அமர்வு 3' : 'Session 3'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0F2742]">
                      {lang === 'ta' ? 'வார இறுதி சிறப்பு பயிலரங்குகள்' : 'Weekend Life Workshops'}
                    </h3>
                  </div>
                </div>

                {/* Weekend Session Visual Hero Image (Tree of Life Sprout) */}
                <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/weekend-workshop-tree.jpg"
                    alt="Weekend Life Workshops"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2612]/70 via-[#1C3D26]/15 to-transparent pointer-events-none" />

                  {/* Photo Title */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center text-center text-white text-xs px-3.5 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px] tracking-wide text-center">
                      ✦ {lang === 'ta' ? 'வார இறுதி சிறப்பு பயிலரங்குகள்' : 'Weekend Life Workshops'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'பணம், சுயமதிப்பு மற்றும் வாழ்க்கை வழிகாட்டல் குறித்த வாராந்திர/மாதாந்திர நேரலை பயிலரங்குகள். யார் வேண்டுமானாலும் கலந்து கொள்ளலாம்:'
                    : 'Weekly and monthly live online workshops on practical life topics. Open for everyone to join:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Money & Financial Mindset */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#2A5235] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'பணம் & மன அமைதி வழிகாட்டல்'
                          : 'Money Mindset & Financial Peace'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'பணம் குறித்த பயம் மற்றும் அழுத்தங்களை நீக்கி, பணத்தை நேர்மறையாகக் கையாளவும் அமைதியோடு செல்வத்தை ஈர்க்கவும் எளிய வழிகாட்டல்.'
                          : 'Learn how to remove money stress, build a healthy relationship with wealth, and attract abundance with peace of mind.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Inner Self-Value & Confidence */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#2A5235] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'சுயமதிப்பு & தன்னம்பிக்கை'
                          : 'Inner Self-Value & Confidence'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'சுயமதிப்பை உணர்ந்து, சுய சந்தேகங்களை விலக்கி, பிறருடன் ஒப்பிடாமல் உண்மையான தன்னம்பிக்கையை வளர்த்தல்.'
                          : 'Understand your true inner worth, overcome self-doubt, stop comparing yourself to others, and build lasting self-love.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Open for Everyone */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#2A5235] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'அனைவருக்குமான நேரலை அரங்கம்'
                          : 'Open for Everyone (Live Sessions)'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'இதில் யார் வேண்டுமானாலும் கலந்து கொள்ளலாம். உங்கள் வாழ்க்கை சந்தேகங்களை நேரடியாகக் கேட்டு எளிய வாழ்வியல் தீர்வுகளைப் பெறலாம்.'
                          : 'Anyone can join these interactive live sessions. Ask your life questions directly, learn practical tools, and grow together.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F2742]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#2A5235] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2A5235] animate-pulse" />
                  <span>{lang === 'ta' ? 'விரைவில் தொடக்கம் (Upcoming)' : 'Upcoming'}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#DDE6DC]/70 text-[#2A5235] text-[11px] font-semibold border border-[#C5DDD0]">
                  {lang === 'ta' ? 'விரைவில் அறிவிப்பு' : 'Coming Soon'}
                </span>
              </div>
            </div>

          </div>

          {/* Key Deliverables Overview Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-[20px] bg-white/60 border border-white/80 mb-8 text-[#4A5A6A]">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'கால அளவு' : 'Duration'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-medium mt-0.5">
                {lang === 'ta' ? '1 மாதம் (30 நாட்கள்)' : '1 Month (30 Days)'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'கட்டணம்' : 'Program Fee'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-bold mt-0.5 text-[#0F2742]">
                {lang === 'ta' ? '₹999 (காலை & மாலை இரண்டும்)' : '₹999 (Morning + Evening)'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'மொழி' : 'Language'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-medium mt-0.5">
                {lang === 'ta' ? '100% எளிய தமிழ்' : 'Simple Tamil Guidance'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'ஆதரவு' : 'Support'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-medium mt-0.5">
                {lang === 'ta' ? 'வாட்ஸ்அப் தனிநபர் உதவி' : 'Personal 1-on-1 Help'}
              </strong>
            </div>
          </div>

          {/* Bottom WhatsApp Booking Action with Direct Combined Pricing */}
          <div className="pt-6 border-t border-[#0F2742]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDE6DC] text-[#2A5235] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <span>✦ {lang === 'ta' ? 'காலை & மாலை இரண்டுக்கும் சேர்த்து' : 'Special Combined Offering'} ✦</span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2742]">₹999</span>
                <span className="text-xs sm:text-sm text-[#4A5A6A] line-through">₹2,499</span>
                <span className="text-xs sm:text-sm font-semibold text-[#8B5E83]">
                  {lang === 'ta' ? '/ மாதம் (காலை & மாலை இரண்டும் சேர்த்து)' : '/ month (Both Morning & Evening Included)'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5A6A] mt-1 font-medium">
                {lang === 'ta'
                  ? 'பிரம்ம முகூர்த்த காலை தியானம் மற்றும் இரவு நேர வழிகாட்டப்பட்ட தியானம் ஆகிய இரண்டு அமர்வுகளும் சேர்த்து மாதக் கட்டணம் ₹999 மட்டுமே.'
                  : 'Daily Morning Brahma Muhurtham Meditation & Night Guided Meditation combined together for ₹999 / month.'}
              </p>
            </div>

            <a
              href="https://wa.me/?text=Hello%20Peace%20Buddy%2C%20I%20want%20to%20enroll%20in%20the%20Monthly%20Transformation%20Program%20(Morning%20%2B%20Evening%20Combined%20at%20%E2%82%B9999)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium transition-all shadow-md active:scale-95 min-h-[48px] flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ta' ? '₹999-க்கு முன்பதிவு செய்ய' : 'Enroll for ₹999 (Both Sessions)'}</span>
            </a>
          </div>

        </div>

        {/* Safe, Confidential Environment Guarantee */}
        <div className="bg-white/70 backdrop-blur-md rounded-[28px] p-8 border border-white/85 text-center max-w-2xl mx-auto shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#DDE6DC] text-[#2A5235] flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-medium text-lg text-[#0F2742] mb-2">
            {lang === 'ta' ? 'அழுத்தமற்ற, 100% பாதுகாப்பான தமிழ் சூழல்' : 'Safe, Respectful & Judgment-Free'}
          </h3>
          <p className="text-sm text-[#4A5A6A] leading-relaxed mb-6">
            {lang === 'ta'
              ? 'பயிற்சியில் இணைவது குறித்து எழும் எந்தவொரு சந்தேகத்தையும் வாட்ஸ்அப் வழியே தயக்கமின்றி எப்போது வேண்டுமானாலும் கேட்கலாம்.'
              : 'Have questions before enrolling? Connect quietly with our team on WhatsApp for transparent and caring guidance.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F2742] text-white text-xs sm:text-sm font-medium hover:bg-[#1E3B5C] transition-colors"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
