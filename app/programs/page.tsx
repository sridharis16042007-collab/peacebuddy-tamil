'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Sparkles,
  Sun,
  Moon,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  ShieldCheck,
  Feather,
  BookOpen,
} from 'lucide-react';

export default function ProgramsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-gradient-to-b from-[#FBF8FC] via-[#F6F0F8] to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#7A6E91]">
            <li>
              <Link href="/" className="hover:text-[#7E6C9E] transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#2D2342] font-medium" aria-current="page">
              {lang === 'ta' ? 'பயிற்சி திட்டம்' : 'Program'}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFEF] text-[#7E6C9E] font-medium text-xs sm:text-sm mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7E6C9E]" aria-hidden="true" />
            <span className="tracking-wide">
              {lang === 'ta' ? 'முழுமையான வாழ்வியல் மாற்றம்' : 'Sacred Transformation Journey'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-light text-[#2D2342] tracking-wide mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif font-light">
                மாதாந்திர மாற்றப் பயிற்சி
                <br />
                <span className="italic font-serif text-[#7E6C9E] font-normal text-2xl sm:text-4xl">
                  (காலை & மாலை நேர அமர்வுகள்)
                </span>
              </span>
            ) : (
              <>
                Monthly Mindful Transformation
                <br />
                <span className="italic font-serif text-[#7E6C9E] font-normal text-2xl sm:text-4xl">
                  (Morning & Evening Sessions)
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#5A4D6E] leading-relaxed font-tamil font-light max-w-2xl mx-auto">
            {lang === 'ta'
              ? 'ஒரு மாத கால தினசரி தமிழ் வழிகாட்டல் மூலம் உங்கள் நாளை விழிப்புணர்வுடன் தொடங்கி, அன்றாட மன அழுத்தங்களை நீக்கி, இரவை ஆழ்ந்த அமைதியான உறக்கத்துடன் நிறைவு செய்யும் 30 நாள் வாழ்வியல் பயிற்சி.'
              : 'A dedicated 30-day sanctuary protocol. Ground your mornings in Brahma Muhurtham stillness and wind down your evenings with reflective journaling and deep guided sleep meditation.'}
          </p>
        </div>

        {/* Single Flagship Transformation Container */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFEF] shadow-xl shadow-[#7E6C9E]/5 mb-14">
          
          {/* Program Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8DFEF]">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium text-[#7E6C9E] bg-[#F5EFF7] mb-2 font-serif">
                ✦ 30 DAYS DAILY SANCTUARY ✦
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#2D2342]">
                {lang === 'ta'
                  ? 'மாதாந்திர மாற்றப் பயிற்சி அட்டவணை'
                  : 'Daily Mindful Transformation Schedule'}
              </h2>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FBF8FC] border border-[#E8DFEF] text-xs text-[#5A4D6E]">
              <Clock className="w-4 h-4 text-[#7E6C9E]" />
              <span className="font-medium">
                {lang === 'ta' ? 'தினசரி காலை & மாலை அமர்வுகள்' : 'Daily Morning & Evening Sessions'}
              </span>
            </div>
          </div>

          {/* SESSIONS GRID: Morning Session & Evening Session in Ordered Way */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 my-10">
            
            {/* 1. MORNING SESSION */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FFFDF8] to-[#FFF9EE] border border-[#FDE68A]/60 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDE68A]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#D97706]/15 text-[#B45309] flex-shrink-0">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B45309]">
                      {lang === 'ta' ? 'அமர்வு 1' : 'Session 1'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#78350F]">
                      {lang === 'ta' ? 'காலை அமர்வு' : 'Morning Session'}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#92400E] mb-6 leading-relaxed font-tamil">
                  {lang === 'ta'
                    ? 'விடியற்காலை புத்துணர்ச்சியுடன் எழுந்து, அமைதியான மனநிலையுடன் அன்றைய நாளைத் தொடங்குவதற்கான 3 படிநிலைகள்:'
                    : 'Awaken with serene clarity and ground your day with these 3 ordered morning steps:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Brahma Muhurtham Meditation */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#FDE68A]/80 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#D97706] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#78350F] font-serif">
                        {lang === 'ta'
                          ? 'தினசரி பிரம்ம முகூர்த்த தியானம்'
                          : 'Daily Brahma Muhurtham Meditation'}
                      </h4>
                      <p className="text-xs text-[#92400E]/90 mt-1 leading-relaxed font-tamil">
                        {lang === 'ta'
                          ? 'விடியற்காலை பிரம்ம முகூர்த்தத்தின் அமைதியில் ஆழ்ந்து, மனதை ஒருமுகப்படுத்தி நரம்பு மண்டலத்தை அமைதிப்படுத்தும் ஆழ்ந்த தமிழ் தியானம்.'
                          : 'Early morning meditation in the stillness of Brahma Muhurtham to quiet mental noise and center your nervous system.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Gratitude Writing */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#FDE68A]/80 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#D97706] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#78350F] font-serif">
                        {lang === 'ta'
                          ? 'நன்றியுணர்வு எழுத்துப் பயிற்சி'
                          : 'Gratitude Writing'}
                      </h4>
                      <p className="text-xs text-[#92400E]/90 mt-1 leading-relaxed font-tamil">
                        {lang === 'ta'
                          ? 'அன்றைய நாளை நேர்மறை எண்ணங்கள், அமைதி மற்றும் வாழ்வின் நன்மைகளை உணர்ந்து போற்றும் வழிகாட்டப்பட்ட நன்றியுணர்வு பதிவு.'
                          : 'Structured gratitude prompts to cultivate positive emotional resonance and ground your heart before the day begins.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Day Follow-up */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#FDE68A]/80 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#D97706] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#78350F] font-serif">
                        {lang === 'ta'
                          ? 'அன்றைய நாள் வழிகாட்டல் & விழிப்புணர்வு'
                          : 'Day Follow-up & Mindful Intentions'}
                      </h4>
                      <p className="text-xs text-[#92400E]/90 mt-1 leading-relaxed font-tamil">
                        {lang === 'ta'
                          ? 'நாள் முழுவதும் அவசரமின்றி, பதற்றமின்றி விழிப்புணர்வுடன் செயல்படுவதற்கான கவனமுள்ள தொடர் வழிகாட்டல்.'
                          : 'Setting conscious daily intentions and gentle reminders to prevent overthinking throughout work and daily tasks.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FDE68A]/60 flex items-center gap-2 text-xs text-[#92400E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>{lang === 'ta' ? 'புத்துணர்ச்சியான தொடக்கம்' : 'Energizing, mindful start'}</span>
              </div>
            </div>

            {/* 2. EVENING SESSION */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FAF7FD] to-[#F3ECF8] border border-[#E8DFEF] shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#7E6C9E]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Session Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#7E6C9E]/15 text-[#624F85] flex-shrink-0">
                    <Moon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7E6C9E]">
                      {lang === 'ta' ? 'அமர்வு 2' : 'Session 2'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#2D2342]">
                      {lang === 'ta' ? 'மாலை அமர்வு' : 'Evening Session'}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5A4D6E] mb-6 leading-relaxed font-tamil">
                  {lang === 'ta'
                    ? 'அன்றாட சோர்வு மற்றும் சிந்தனைகளை இறக்கி வைத்து, நிம்மதியான உறக்கத்திற்குத் தயாராகும் 2 படிநிலைகள்:'
                    : 'Decompress from the day’s stress and ease into deep, tranquil rest with these 2 ordered evening steps:'}
                </p>

                {/* Ordered Steps List */}
                <div className="space-y-4">
                  {/* Step 1: Journal Writing */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#E8DFEF] shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#7E6C9E] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2D2342] font-serif">
                        {lang === 'ta'
                          ? 'சுயபரிசீலனை ஜர்னல் எழுத்து'
                          : 'Journal Writing'}
                      </h4>
                      <p className="text-xs text-[#5A4D6E] mt-1 leading-relaxed font-tamil">
                        {lang === 'ta'
                          ? 'அன்றைய நிகழ்வுகள், உணர்வுகள் மற்றும் மன அழுத்தங்களை அமைதியாக எழுதி மனதை இலகுவாக்கும் எளிய ஜர்னல் பயிற்சி.'
                          : 'Quiet reflection on the day to untangle emotional tension, release lingering thoughts, and achieve mental clarity.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Night Guided Meditation */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#E8DFEF] shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#7E6C9E] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2D2342] font-serif">
                        {lang === 'ta'
                          ? 'இரவு நேர வழிகாட்டப்பட்ட தியானம்'
                          : 'Night Guided Meditation'}
                      </h4>
                      <p className="text-xs text-[#5A4D6E] mt-1 leading-relaxed font-tamil">
                        {lang === 'ta'
                          ? 'அலைபாயும் எண்ணங்களை முழுமையாக சாந்தப்படுத்தி, உடலையும் மனதையும் தளர்த்தி ஆழ்ந்த, நிம்மதியான உறக்கத்திற்கு அழைத்துச் செல்லும் இரவு தியானம்.'
                          : 'Somatic calming meditation to halt racing thoughts, relax muscle tension, and welcome deep restorative sleep.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFEF] flex items-center gap-2 text-xs text-[#7E6C9E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#7E6C9E]" />
                <span>{lang === 'ta' ? 'ஆழ்ந்த அமைதியான உறக்கம்' : 'Restorative, peaceful sleep'}</span>
              </div>
            </div>

          </div>

          {/* Key Deliverables Overview Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#FBF8FC] border border-[#E8DFEF] mb-8">
            <div className="flex flex-col">
              <span className="text-[11px] text-[#7A6E91]">{lang === 'ta' ? 'கால அளவு' : 'Duration'}</span>
              <strong className="text-sm text-[#2D2342] font-serif font-medium mt-0.5">
                {lang === 'ta' ? '1 மாதம் (30 நாட்கள்)' : '1 Month (30 Days)'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#7A6E91]">{lang === 'ta' ? 'வடிவம்' : 'Format'}</span>
              <strong className="text-sm text-[#2D2342] font-serif font-medium mt-0.5">
                {lang === 'ta' ? 'காலை & மாலை அமர்வுகள்' : 'Morning & Evening'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#7A6E91]">{lang === 'ta' ? 'மொழி' : 'Language'}</span>
              <strong className="text-sm text-[#2D2342] font-serif font-medium mt-0.5">
                {lang === 'ta' ? '100% எளிய தமிழ்' : 'Tamil-First Sanctuary'}
              </strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#7A6E91]">{lang === 'ta' ? 'ஆதரவு' : 'Support'}</span>
              <strong className="text-sm text-[#2D2342] font-serif font-medium mt-0.5">
                {lang === 'ta' ? 'வாட்ஸ்அப் தனிநபர் உதவி' : 'Personal 1-on-1 Help'}
              </strong>
            </div>
          </div>

          {/* Bottom WhatsApp Booking Action */}
          <div className="pt-6 border-t border-[#E8DFEF] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-xs text-[#7A6E91] font-medium">
                {lang === 'ta' ? 'முன்பதிவு & கட்டண விவரங்கள்:' : 'Enrollment & Inquiries:'}
              </p>
              <p className="text-sm sm:text-base font-serif font-medium text-[#2D2342]">
                {lang === 'ta'
                  ? 'கட்டணம் மற்றும் நேரடி விவரங்களை வாட்ஸ்அப்பில் அறியலாம்'
                  : 'Connect with our team directly on WhatsApp for full details'}
              </p>
            </div>

            <a
              href="https://wa.me/?text=Hello%20Peace%20Buddy%2C%20I%20am%20interested%20in%20the%20Monthly%20Transformation%20Program%20(Morning%20Brahma%20Muhurtham%20%26%20Evening%20Journaling%20Sessions)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-sm font-medium transition-all shadow-md hover:shadow-lg min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் முன்பதிவு செய்ய' : 'Enroll via WhatsApp'}</span>
            </a>
          </div>

        </div>

        {/* Safe, Confidential Environment Guarantee */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-[#E8DFEF] text-center max-w-2xl mx-auto shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#7E6C9E]/10 text-[#7E6C9E] flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-medium text-lg text-[#2D2342] mb-2">
            {lang === 'ta' ? 'அழுத்தமற்ற, 100% பாதுகாப்பான தமிழ் சூழல்' : 'Safe, Respectful & Judgment-Free'}
          </h3>
          <p className="text-sm text-[#5A4D6E] leading-relaxed mb-6 font-tamil font-light">
            {lang === 'ta'
              ? 'பயிற்சியில் இணைவது குறித்து எழும் எந்தவொரு சந்தேகத்தையும் வாட்ஸ்அப் வழியே தயக்கமின்றி எப்போது வேண்டுமானாலும் கேட்கலாம்.'
              : 'Have questions before enrolling? Connect quietly with our team on WhatsApp for transparent and caring guidance.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F5EFF7] text-[#7E6C9E] text-xs sm:text-sm font-medium hover:bg-[#E8DFEF] transition-colors"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
