'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, Calendar, Clock, Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function ProgramsPage() {
  const { lang, t } = useLanguage();

  const programs = [
    {
      id: 'program-1',
      badge: lang === 'ta' ? 'முதன்மை பயிற்சி' : 'Signature Program',
      title: lang === 'ta'
        ? '[PROGRAM 1: 21 நாள் அமைதி வாழ்வியல் பயிற்சி (21-Day Mindful Routine)]'
        : '[PROGRAM 1: 21-Day Mindful Living Cohort]',
      description: lang === 'ta'
        ? 'தினசரி 15 நிமிட எளிய தமிழ் வழிகாட்டல் மூலம் உங்கள் மனதை அமைதிப்படுத்தி, சீரான காலை மற்றும் இரவு பழக்கங்களை உருவாக்கும் தொடர் பயிற்சி.'
        : 'A 21-day guided journey with daily 15-minute mother-tongue audio reflections to ground your mornings and restore inner calm.',
      duration: lang === 'ta' ? '21 நாட்கள்' : '21 Days',
      format: lang === 'ta' ? 'தினசரி தமிழ் ஆடியோ + வழிகாட்டி' : 'Daily Audio + Workbook',
      fees: '[PROGRAM 1 FEES]',
      features: [
        lang === 'ta' ? 'தினசரி 15 நிமிட தமிழ் தியான ஆடியோ' : 'Daily 15-minute guided audio sessions',
        lang === 'ta' ? 'எழுத்து வழியிலான விழிப்புணர்வு (Mindful Journaling)' : 'Daily quiet journaling prompts',
        lang === 'ta' ? 'வாட்ஸ்அப் தனிநபர் ஆதரவு & வழிகாட்டல்' : 'Personal check-ins via WhatsApp',
        lang === 'ta' ? 'வாழ்நாள் ஆடியோ அணுகல் (Lifetime Access)' : 'Lifetime audio replay access'
      ]
    },
    {
      id: 'program-2',
      badge: lang === 'ta' ? 'மனத்தெளிவு பயிற்சி' : 'Emotional Clarity',
      title: lang === 'ta'
        ? '[PROGRAM 2: ஓவர்திங்கிங் தணிப்பு பட்டறை (Overthinking Relief Workshop)]'
        : '[PROGRAM 2: Overthinking to Inner Clarity Intensive]',
      description: lang === 'ta'
        ? 'எண்ணங்களின் சுழற்சி மற்றும் எதிர்கால பதற்றத்திலிருந்து விடுபட நடைமுறை அறிவாற்றல் நுட்பங்கள் (Cognitive Grounding).'
        : 'Practical grounding techniques and somatic awareness designed to halt runaway thoughts and cultivate mental lightness.',
      duration: lang === 'ta' ? '2 வாரங்கள்' : '2 Weeks',
      format: lang === 'ta' ? 'வார இறுதி நேரலை அமர்வுகள் + பயிற்சிகள்' : 'Weekend Live Sessions + Exercises',
      fees: '[PROGRAM 2 FEES]',
      features: [
        lang === 'ta' ? '5-4-3-2-1 மற்றும் 4-4-6 மூச்சுப் பயிற்சி முறைகள்' : 'Mastery of 4-4-6 breathing & grounding',
        lang === 'ta' ? 'எண்ணங்களை எதிர்கொள்ளும் நடைமுறை பயிற்சிகள்' : 'Cognitive defusion thought exercises',
        lang === 'ta' ? 'அமைதியான முடிவெடுக்கும் தெளிவு' : 'Decision-making clarity frameworks',
        lang === 'ta' ? 'கேள்வி-பதில் நேரலை வழிகாட்டல்' : 'Live interactive Q&A'
      ]
    },
    {
      id: 'program-3',
      badge: lang === 'ta' ? 'ஆழ்ந்த தூக்கம்' : 'Restorative Sleep',
      title: lang === 'ta'
        ? '[PROGRAM 3: அமைதியான தூக்க வழிகாட்டல் (Sleep Reset Masterclass)]'
        : '[PROGRAM 3: Deep Sleep & Night Calm Ritual]',
      description: lang === 'ta'
        ? 'இரவு நேர படபடப்பு மற்றும் தூக்கமின்மையை நீக்கி, ஆழ்ந்த புத்துணர்ச்சியூட்டும் தூக்கத்தைப் பெறுவதற்கான மாலை நேர வழக்கம்.'
        : 'A gentle evening wind-down protocol with bedtime somatic audio to ease nervous system arousal and foster restorative sleep.',
      duration: lang === 'ta' ? '7 நாட்கள்' : '7 Days',
      format: lang === 'ta' ? 'மாலை நேர வழிகாட்டல் + Sleep Audio' : 'Evening Routine + Sleep Audio',
      fees: '[PROGRAM 3 FEES]',
      features: [
        lang === 'ta' ? 'படுக்கை நேர அமைதி தியான ஆடியோ' : 'Bedtime calming audio tracks',
        lang === 'ta' ? 'டிஜிட்டல் நச்சுநீக்கம் (Digital Detox Guide)' : 'Digital boundary evening architecture',
        lang === 'ta' ? 'உடல் தளர்வு பயிற்சி (Body Scan Meditation)' : 'Somatic body-scan guided relaxation',
        lang === 'ta' ? 'காலை புத்துணர்ச்சி நுட்பங்கள்' : 'Morning waking clarity routines'
      ]
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-[#F0F1EB] via-ice to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#5A758E]">
            <li>
              <Link href="/" className="hover:text-[#0B3D6B] transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#0B3D6B] font-medium" aria-current="page">
              {lang === 'ta' ? 'பயிற்சிகள்' : 'Programs'}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-mist text-[#263120] font-medium text-xs sm:text-sm mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{lang === 'ta' ? 'அமைதி பயிற்சிகள் & பட்டறைகள்' : 'Mindfulness Programs & Cohorts'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#12263A] tracking-tight mb-4 font-tamil">
            {lang === 'ta'
              ? 'உங்கள் மன நலனுக்கான வழிகாட்டப்பட்ட பயிற்சிகள்'
              : 'Structured Pathways to Lasting Peace of Mind'}
          </h1>
          <p className="text-base sm:text-lg text-[#36526D] leading-relaxed font-tamil">
            {lang === 'ta'
              ? 'எந்தவித வணிக அழுத்தமும் இன்றி, உங்கள் சொந்த வேகத்தில் நீங்கள் தாய்மொழியில் பழகக்கூடிய நிதானமான பயிற்சித் திட்டங்கள்.'
              : 'Thoughtfully designed, pressure-free programs to help you dissolve anxiety, conquer overthinking, and rest deeply.'}
          </p>
        </div>

        {/* 3 Core Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-mist hover:border-[#1583C7]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#0B3D6B] bg-mist/60 mb-4">
                  {prog.badge}
                </span>

                <h2 className="text-xl font-bold text-[#12263A] mb-3 font-tamil leading-snug">
                  {prog.title}
                </h2>

                <p className="text-sm text-[#36526D] leading-relaxed mb-6 font-tamil">
                  {prog.description}
                </p>

                {/* Duration & Format Meta */}
                <div className="py-3 px-4 rounded-2xl bg-ice border border-mist/70 mb-6 space-y-2 text-xs text-[#5A758E]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-ringBlue" />
                      <span>கால அளவு:</span>
                    </span>
                    <strong className="text-[#12263A]">{prog.duration}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-ringBlue" />
                      <span>வடிவம்:</span>
                    </span>
                    <strong className="text-[#12263A]">{prog.format}</strong>
                  </div>
                </div>

                {/* Feature Bullets */}
                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#5A758E]">
                  {prog.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-ringBlue flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Booking Action */}
              <div className="pt-6 border-t border-mist">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#5A758E]">முன்பதிவு கட்டணம்:</span>
                  <span className="font-mono font-bold text-sm text-[#0B3D6B]">
                    {prog.fees}
                  </span>
                </div>

                <a
                  href={`https://wa.me/?text=Hello%20Peace%20Buddy%2C%20I%20would%20like%20to%20enroll%20in%20${encodeURIComponent(
                    prog.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#263120] hover:bg-[#0B3D6B] text-white text-sm font-medium transition-all shadow-xs min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ta' ? 'விவரம் கேட்க / முன்பதிவு' : 'Inquire on WhatsApp'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee of Gentle Care */}
        <div className="bg-white rounded-3xl p-8 border border-mist text-center max-w-2xl mx-auto shadow-xs">
          <h3 className="font-bold text-lg text-[#12263A] mb-2 font-tamil">
            {lang === 'ta' ? 'அழுத்தமற்ற, 100% பாதுகாப்பான சூழல்' : 'Safe, Respectful & Judgment-Free'}
          </h3>
          <p className="text-sm text-[#5A758E] leading-relaxed mb-6 font-tamil">
            {lang === 'ta'
              ? 'பயிற்சியில் சேர்வது பற்றிய உங்கள் கேள்விகளை வாட்ஸ்அப் வழியே எப்போது வேண்டுமானாலும் தயக்கமின்றி கேட்கலாம்.'
              : 'Have questions before enrolling? Connect quietly with our team on WhatsApp for honest guidance.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-mist text-[#0B3D6B] text-xs sm:text-sm font-semibold hover:bg-mist/80 transition-colors"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
