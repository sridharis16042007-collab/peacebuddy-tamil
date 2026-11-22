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
              : 'A dedicated 30-day sanctuary protocol. Ground your mornings in Brahma Muhurtham stillness and wind down your evenings with reflective journaling and deep guided sleep meditation.'}
          </p>
        </div>

        {/* Single Flagship Transformation Container: Frosted Glass */}
        <div className="bg-white/70 backdrop-blur-md rounded-[28px] p-6 sm:p-10 lg:p-12 border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] mb-14">

          {/* Program Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#0F2742]/10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold text-[#8B5E83] bg-[#F4D9DF] mb-2 tracking-[0.12em] uppercase">
                ✦ 30 DAYS DAILY SANCTUARY ✦
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
                      {lang === 'ta' ? 'காலை அமர்வு' : 'Morning Session'}
                    </h3>
                  </div>
                </div>

                {/* Morning Session Visual Hero Image (Brahma Muhurtham Meditation) */}
                <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/morning-garden-meditation.jpg"
                    alt="Morning Brahma Muhurtham Meditation and Gratitude"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#451A03]/70 via-[#78350F]/15 to-transparent pointer-events-none" />

                  {/* Photo Title */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px]">
                      ✦ {lang === 'ta' ? 'காலை பிரம்ம முகூர்த்த தியானம்' : 'Morning Brahma Muhurtham Meditation'}
                    </span>
                    <span className="text-[11px] text-[#FDE2D2] font-sans">
                      {lang === 'ta' ? 'விடியற்காலை அமைதி' : 'Brahma Muhurtham'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'விடியற்காலை புத்துணர்ச்சியுடன் எழுந்து, அமைதியான மனநிலையுடன் அன்றைய நாளைத் தொடங்குவதற்கான 3 படிநிலைகள்:'
                    : 'Awaken with serene clarity and ground your day with these 3 ordered morning steps:'}
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
                          : 'Daily Brahma Muhurtham Meditation'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'விடியற்காலை பிரம்ம முகூர்த்தத்தின் அமைதியில் ஆழ்ந்து, மனதை ஒருமுகப்படுத்தி நரம்பு மண்டலத்தை அமைதிப்படுத்தும் ஆழ்ந்த தமிழ் தியானம்.'
                          : 'Early morning meditation in the stillness of Brahma Muhurtham to quiet mental noise and center your nervous system.'}
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
                          : 'Structured gratitude prompts to cultivate positive emotional resonance and ground your heart before the day begins.'}
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
                          : 'Day Follow-up & Mindful Intentions'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'நாள் முழுவதும் அவசரமின்றி, பதற்றமின்றி விழிப்புணர்வுடன் செயல்படுவதற்கான கவனமுள்ள தொடர் வழிகாட்டல்.'
                          : 'Setting conscious daily intentions and gentle reminders to prevent overthinking throughout work and daily tasks.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F2742]/10 flex items-center gap-2 text-xs text-[#2A5235] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                <span>{lang === 'ta' ? 'புத்துணர்ச்சியான தொடக்கம்' : 'Energizing, mindful start'}</span>
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
                      {lang === 'ta' ? 'மாலை அமர்வு' : 'Evening Session'}
                    </h3>
                  </div>
                </div>

                {/* Evening Session Visual Hero Image (Night Gratitude Meditation) */}
                <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/evening-moonlight-journal.jpg"
                    alt="Night Gratitude Meditation and Reflection"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/75 via-[#1C1628]/25 to-transparent pointer-events-none" />

                  {/* Photo Title */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px]">
                      ✦ {lang === 'ta' ? 'இரவு நன்றியுணர்வு தியானம்' : 'Night Gratitude Meditation'}
                    </span>
                    <span className="text-[11px] text-[#E8D7F1] font-sans">
                      {lang === 'ta' ? 'இரவு அமைதி' : 'Night Sanctuary'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'அன்றாட சோர்வு மற்றும் சிந்தனைகளை இறக்கி வைத்து, நிம்மதியான உறக்கத்திற்குத் தயாராகும் 3 படிநிலைகள்:'
                    : 'Decompress from the day’s stress and ease into deep, tranquil rest with these 3 ordered evening steps:'}
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
                          : 'Quiet reflection on the day to untangle emotional tension, release lingering thoughts, and achieve mental clarity.'}
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
                          : 'Somatic calming meditation to halt racing thoughts, relax muscle tension, and welcome deep restorative sleep.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Somatic Wind-down & Restful Sleep Sanctuary */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#8B5E83] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'ஆழ்ந்த உறக்க தளர்வு & மன அமைதி'
                          : 'Somatic Wind-down & Sleep Sanctuary'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அமைதியான சூழலை உருவாக்கி, நரம்பு மண்டலத்தை முழுமையாக சாந்தப்படுத்தி மறுநாள் புத்துணர்ச்சியோடு விழிக்க உதவும் எளிய தளர்வு.'
                          : 'Gentle nervous system down-regulation to quiet racing thoughts and ease into deep, restorative sleep effortlessly.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#8B5E83]/20 flex items-center gap-2 text-xs text-[#6B3E63] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#8B5E83]" />
                <span>{lang === 'ta' ? 'ஆழ்ந்த அமைதியான உறக்கம்' : 'Restorative, peaceful sleep'}</span>
              </div>
            </div>

            {/* 3. WEEKEND WORKSHOPS */}
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
                      {lang === 'ta' ? 'வார இறுதி பயிலரங்குகள்' : 'Weekend Workshops'}
                    </h3>
                  </div>
                </div>

                {/* Weekend Session Visual Hero Image (Live Masterclasses & Healing) */}
                <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/sunset-serenity.jpg"
                    alt="Weekend Workshops, Live Q&A and Somatic Breathwork"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2612]/75 via-[#1C3D26]/20 to-transparent pointer-events-none" />

                  {/* Photo Title */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px]">
                      ✦ {lang === 'ta' ? 'வார இறுதி சிறப்பு பயிலரங்கு' : 'Weekend Healing Masterclass'}
                    </span>
                    <span className="text-[11px] text-[#DDE6DC] font-sans">
                      {lang === 'ta' ? 'நேரலை பயிலரங்கு' : 'Weekly Live Immersion'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'வாரந்தோறும் நேரலை வழிகாட்டல், வினா-விடை மற்றும் ஆழ்ந்த மன அமைதிக்கான 3 சிறப்பு அம்சங்கள்:'
                    : 'Deepen your transformation with interactive weekend intensives and mentor guidance:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Live Interactive Q&A */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#2A5235] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'நேரலை வினா-விடை & வழிகாட்டல்'
                          : 'Live Interactive Q&A & Mentoring'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'வாழ்க்கைப் பிரச்சனைகள் மற்றும் தியான சந்தேகங்களைத் தீர்த்து தனிப்பயனாக்கப்பட்ட நேரலை வழிகாட்டல் பெறும் சத்ஸங்கம்.'
                          : 'Open group Satsang to resolve personal life dilemmas, deepen meditation, and receive direct 1-on-1 guidance.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Somatic Breathwork & Sound Healing */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#2A5235] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'ஆழ்ந்த மூச்சுப்பயிற்சி & ஒலி தியானம்'
                          : 'Somatic Breathwork & Sound Bath'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'உடலிலும் நரம்புகளிலும் தேங்கியுள்ள ஆழமான அழுத்தங்களை விடுவிக்க வழிகாட்டப்பட்ட பிராணாயாமம் மற்றும் ஒலி தியானம்.'
                          : 'Therapeutic pranayama and resonance sound frequencies to release stored stress and emotional blocks.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Weekly Habit Review & Accountability */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/90 backdrop-blur-sm border border-white shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#2A5235] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-[16px] font-serif font-semibold text-[#0F2742]">
                        {lang === 'ta'
                          ? 'வாராந்திர முன்னேற்ற ஆய்வு'
                          : 'Weekly Habit Review & Accountability'}
                      </h4>
                      <p className="text-[13px] text-[#2D3F50] font-medium mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'வாராந்திர பழக்கவழக்க முன்னேற்றங்களை ஆய்வு செய்து, அடுத்த வாரத்திற்கான நேர்மறை அமைதியுடன் தொடங்குதல்.'
                          : 'Milestone check-ins, mindful group reflection, and setting conscious intentions for the coming week.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F2742]/10 flex items-center gap-2 text-xs text-[#2A5235] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                <span>{lang === 'ta' ? 'வாராந்திர முழுமையான வளர்ச்சி' : 'Transformational weekend growth'}</span>
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
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'வடிவம்' : 'Format'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-medium mt-0.5">
                {lang === 'ta' ? 'காலை, மாலை & வார இறுதி' : 'Morning, Evening & Weekends'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'மொழி' : 'Language'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-medium mt-0.5">
                {lang === 'ta' ? '100% எளிய தமிழ்' : 'Tamil-First Sanctuary'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#8B5E83]">{lang === 'ta' ? 'ஆதரவு' : 'Support'}</span>
              <strong className="text-sm text-[#0F2742] font-serif font-medium mt-0.5">
                {lang === 'ta' ? 'வாட்ஸ்அப் தனிநபர் உதவி' : 'Personal 1-on-1 Help'}
              </strong>
            </div>
          </div>

          {/* Bottom WhatsApp Booking Action */}
          <div className="pt-6 border-t border-[#0F2742]/10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-xs text-[#8B5E83] font-medium uppercase tracking-wider">
                {lang === 'ta' ? 'முன்பதிவு & கட்டண விவரங்கள்:' : 'Enrollment & Inquiries:'}
              </p>
              <p className="text-sm sm:text-base font-serif font-medium text-[#0F2742]">
                {lang === 'ta'
                  ? 'கட்டணம் மற்றும் நேரடி விவரங்களை வாட்ஸ்அப்பில் அறியலாம்'
                  : 'Connect with our team directly on WhatsApp for full details'}
              </p>
            </div>

            <a
              href="https://wa.me/?text=Hello%20Peace%20Buddy%2C%20I%20am%20interested%20in%20the%20Monthly%20Transformation%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium transition-all shadow-md active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் முன்பதிவு செய்ய' : 'Enroll via WhatsApp'}</span>
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
