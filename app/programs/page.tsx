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
  const [morningImage, setMorningImage] = useState<'sunrise' | 'garden'>('sunrise');

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
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (காலை & மாலை நேர அமர்வுகள்)
                </span>
              </span>
            ) : (
              <>
                Monthly Mindful Transformation
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (Morning & Evening Sessions)
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
                {lang === 'ta' ? 'தினசரி காலை & மாலை அமர்வுகள்' : 'Daily Morning & Evening Sessions'}
              </span>
            </div>
          </div>

          {/* SESSIONS GRID: Morning Session & Evening Session in Ordered Way */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 my-10">
            
            {/* 1. MORNING SESSION */}
            <div className="rounded-[24px] p-6 sm:p-8 bg-[#F6EBEE]/70 border border-white/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-[#DDE6DC] text-[#2A5235] flex-shrink-0">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B5E83]">
                      {lang === 'ta' ? 'அமர்வு 1' : 'Session 1'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0F2742]">
                      {lang === 'ta' ? 'காலை அமர்வு' : 'Morning Session'}
                    </h3>
                  </div>
                </div>

                {/* Morning Session Visual Hero Image (Sunrise Gratitude & Meditation) */}
                <div className="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src={morningImage === 'sunrise' ? '/assets/morning-gratitude-sunrise.jpg' : '/assets/morning-garden-meditation.jpg'}
                    alt="Brahma Muhurtham Morning Meditation and Gratitude Writing"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/65 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Title & Interactive Switcher */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px]">
                      ✦ {lang === 'ta' ? 'பிரம்ம முகூர்த்தம் & நன்றியுணர்வு' : 'Brahma Muhurtham & Gratitude'}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setMorningImage('sunrise')}
                        className={`px-2 py-0.5 rounded-full transition-colors ${
                          morningImage === 'sunrise'
                            ? 'bg-white/30 text-white font-bold'
                            : 'text-white/70 hover:text-white'
                        }`}
                        title="Sunrise Gratitude View"
                      >
                        {lang === 'ta' ? 'சூரியோதயம்' : 'Sunrise'}
                      </button>
                      <span className="opacity-40">|</span>
                      <button
                        type="button"
                        onClick={() => setMorningImage('garden')}
                        className={`px-2 py-0.5 rounded-full transition-colors ${
                          morningImage === 'garden'
                            ? 'bg-white/30 text-white font-bold'
                            : 'text-white/70 hover:text-white'
                        }`}
                        title="Garden Meditation View"
                      >
                        {lang === 'ta' ? 'தோட்டம்' : 'Garden'}
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A5A6A] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'விடியற்காலை புத்துணர்ச்சியுடன் எழுந்து, அமைதியான மனநிலையுடன் அன்றைய நாளைத் தொடங்குவதற்கான 3 படிநிலைகள்:'
                    : 'Awaken with serene clarity and ground your day with these 3 ordered morning steps:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Brahma Muhurtham Meditation */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/80 border border-white/90 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#0F2742] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-[15px] font-serif font-medium text-[#0F2742]">
                        {lang === 'ta'
                          ? 'தினசரி பிரம்ம முகூர்த்த தியானம்'
                          : 'Daily Brahma Muhurtham Meditation'}
                      </h4>
                      <p className="text-xs text-[#4A5A6A] mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'விடியற்காலை பிரம்ம முகூர்த்தத்தின் அமைதியில் ஆழ்ந்து, மனதை ஒருமுகப்படுத்தி நரம்பு மண்டலத்தை அமைதிப்படுத்தும் ஆழ்ந்த தமிழ் தியானம்.'
                          : 'Early morning meditation in the stillness of Brahma Muhurtham to quiet mental noise and center your nervous system.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Gratitude Writing */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/80 border border-white/90 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#0F2742] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-[15px] font-serif font-medium text-[#0F2742]">
                        {lang === 'ta'
                          ? 'நன்றியுணர்வு எழுத்துப் பயிற்சி'
                          : 'Gratitude Writing'}
                      </h4>
                      <p className="text-xs text-[#4A5A6A] mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அன்றைய நாளை நேர்மறை எண்ணங்கள், அமைதி மற்றும் வாழ்வின் நன்மைகளை உணர்ந்து போற்றும் வழிகாட்டப்பட்ட நன்றியுணர்வு பதிவு.'
                          : 'Structured gratitude prompts to cultivate positive emotional resonance and ground your heart before the day begins.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Day Follow-up */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/80 border border-white/90 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#0F2742] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-[15px] font-serif font-medium text-[#0F2742]">
                        {lang === 'ta'
                          ? 'அன்றைய நாள் வழிகாட்டல் & விழிப்புணர்வு'
                          : 'Day Follow-up & Mindful Intentions'}
                      </h4>
                      <p className="text-xs text-[#4A5A6A] mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'நாள் முழுவதும் அவசரமின்றி, பதற்றமின்றி விழிப்புணர்வுடன் செயல்படுவதற்கான கவனமுள்ள தொடர் வழிகாட்டல்.'
                          : 'Setting conscious daily intentions and gentle reminders to prevent overthinking throughout work and daily tasks.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F2742]/10 flex items-center gap-2 text-xs text-[#2A5235] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                <span>{lang === 'ta' ? 'புத்துணர்ச்சியான தொடக்கம்' : 'Energizing, mindful start'}</span>
              </div>
            </div>

            {/* 2. EVENING SESSION */}
            <div className="rounded-[24px] p-6 sm:p-8 bg-[#F1EAF4]/70 border border-white/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-[#E8D7F1] text-[#8B5E83] flex-shrink-0">
                    <Moon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B5E83]">
                      {lang === 'ta' ? 'அமர்வு 2' : 'Session 2'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0F2742]">
                      {lang === 'ta' ? 'மாலை அமர்வு' : 'Evening Session'}
                    </h3>
                  </div>
                </div>

                {/* Evening Session Visual Hero Image */}
                <div className="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden mb-6 shadow-sm border border-white/85 group">
                  <Image
                    src="/assets/sunset-serenity.webp"
                    alt="Evening Journaling and Night Guided Meditation"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/65 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="font-serif font-medium text-[13px]">
                      ✦ {lang === 'ta' ? 'சுயபரிசீலனை & இரவு தியானம்' : 'Reflection & Night Meditation'}
                    </span>
                    <span className="text-[11px] text-[#E8D7F1] font-sans">
                      {lang === 'ta' ? 'இரவு அமைதி' : 'Tranquil Dusk'}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A5A6A] mb-6 leading-relaxed">
                  {lang === 'ta'
                    ? 'அன்றாட சோர்வு மற்றும் சிந்தனைகளை இறக்கி வைத்து, நிம்மதியான உறக்கத்திற்குத் தயாராகும் 2 படிநிலைகள்:'
                    : 'Decompress from the day’s stress and ease into deep, tranquil rest with these 2 ordered evening steps:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Journal Writing */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/80 border border-white/90 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#8B5E83] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-[15px] font-serif font-medium text-[#0F2742]">
                        {lang === 'ta'
                          ? 'சுயபரிசீலனை ஜர்னல் எழுத்து'
                          : 'Journal Writing'}
                      </h4>
                      <p className="text-xs text-[#4A5A6A] mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அன்றைய நிகழ்வுகள், உணர்வுகள் மற்றும் மன அழுத்தங்களை அமைதியாக எழுதி மனதை இலகுவாக்கும் எளிய ஜர்னல் பயிற்சி.'
                          : 'Quiet reflection on the day to untangle emotional tension, release lingering thoughts, and achieve mental clarity.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Night Guided Meditation */}
                  <div className="flex items-start gap-3.5 p-4 rounded-[18px] bg-white/80 border border-white/90 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#8B5E83] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-[15px] font-serif font-medium text-[#0F2742]">
                        {lang === 'ta'
                          ? 'இரவு நேர வழிகாட்டப்பட்ட தியானம்'
                          : 'Night Guided Meditation'}
                      </h4>
                      <p className="text-xs text-[#4A5A6A] mt-1 leading-relaxed">
                        {lang === 'ta'
                          ? 'அலைபாயும் எண்ணங்களை முழுமையாக சாந்தப்படுத்தி, உடலையும் மனதையும் தளர்த்தி ஆழ்ந்த, நிம்மதியான உறக்கத்திற்கு அழைத்துச் செல்லும் இரவு தியானம்.'
                          : 'Somatic calming meditation to halt racing thoughts, relax muscle tension, and welcome deep restorative sleep.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F2742]/10 flex items-center gap-2 text-xs text-[#8B5E83] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#8B5E83]" />
                <span>{lang === 'ta' ? 'ஆழ்ந்த அமைதியான உறக்கம்' : 'Restorative, peaceful sleep'}</span>
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
                {lang === 'ta' ? 'காலை & மாலை அமர்வுகள்' : 'Morning & Evening'}
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
