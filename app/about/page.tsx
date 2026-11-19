'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Heart, ShieldCheck, Sparkles, ArrowRight, Compass } from 'lucide-react';

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-mist/40 via-ice to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Category */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-ink-muted">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium" aria-current="page">
              {t.nav.about}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-white border border-mist text-navy font-medium text-xs sm:text-sm mb-4">
            <Heart className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{lang === 'ta' ? 'எங்கள் நோக்கம்' : 'Our Purpose'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-navy tracking-tight mb-4 font-tamil">
            {lang === 'ta'
              ? 'அமைதிக்கான எளிய பயணம் — பீஸ் படி தமிழ்'
              : 'A Simple Journey to Inner Peace — Peace Buddy Tamil'}
          </h1>
          <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
            {lang === 'ta'
              ? 'எந்தவித படபடப்பும், வணிக அழுத்தமும் இல்லாத... உங்கள் மனதை இளைப்பாறச் செய்யும் ஒரு தமிழ் தளம்.'
              : 'A gentle, hype-free space crafted specifically for Tamil speakers seeking calm, emotional clarity, and mindful balance.'}
          </p>
        </div>

        {/* Founder Portrait & Honest Narrative */}
        <div className="bg-white rounded-calm-lg p-8 sm:p-12 border border-mist shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-mist flex-shrink-0 bg-mist/50">
              <Image
                src="/assets/chakra-meditation.webp"
                alt="Founder meditation portrait [FOUNDER PHOTO]"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/10 flex items-end p-3">
                <span className="text-[11px] bg-white/90 text-navy px-2 py-0.5 rounded font-mono">
                  [FOUNDER PHOTO]
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-ringBlue uppercase tracking-wider">
                {t.founder.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mt-1 mb-3 font-tamil">
                {t.founder.title}
              </h2>
              <p className="text-base text-ink-secondary leading-relaxed font-tamil">
                {t.founder.story}
              </p>
              <div className="mt-4 pt-4 border-t border-mist/80">
                <p className="font-semibold text-navy text-sm sm:text-base">
                  {t.founder.credentials}
                </p>
                <p className="text-xs text-ink-muted">{t.founder.role}</p>
              </div>
            </div>
          </div>

          {/* Three Core Guiding Principles */}
          <div className="pt-8 border-t border-mist grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-ice border border-mist/70">
              <ShieldCheck className="w-5 h-5 text-ringBlue mb-2" aria-hidden="true" />
              <h3 className="font-bold text-navy text-base mb-1 font-tamil">
                {lang === 'ta' ? 'தீர்ப்புகளற்ற இடம்' : 'Judgment-Free Space'}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {lang === 'ta'
                  ? 'உங்கள் எண்ணங்கள் அல்லது சூழ்நிலைகளை யாரும் தவறாக மதிப்பிடுவதில்லை.'
                  : 'Your feelings and vulnerabilities are welcomed with dignity, warmth, and respect.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ice border border-mist/70">
              <Compass className="w-5 h-5 text-ringBlue mb-2" aria-hidden="true" />
              <h3 className="font-bold text-navy text-base mb-1 font-tamil">
                {lang === 'ta' ? 'தாய்மொழி வழிகாட்டல்' : 'Mother Tongue Roots'}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {lang === 'ta'
                  ? 'எண்ணங்களும் உணர்வுகளும் தாய்மொழியில் வெளிப்படும் போதுதான் ஆழமான அமைதி பிறக்கிறது.'
                  : 'Mindfulness resonates deepest when articulated natively in your own mother tongue.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ice border border-mist/70">
              <Sparkles className="w-5 h-5 text-ringBlue mb-2" aria-hidden="true" />
              <h3 className="font-bold text-navy text-base mb-1 font-tamil">
                {lang === 'ta' ? 'அழுத்தமற்ற பயிற்சிகள்' : 'Gentle, Steady Pace'}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {lang === 'ta'
                  ? 'கடினமான விதிகளோ அல்லது அவசர இலக்குகளோ இல்லை; சிறிய தினசரி மாற்றங்கள்.'
                  : 'No aggressive milestones or rigid rules; only subtle, sustainable everyday rituals.'}
              </p>
            </div>
          </div>
        </div>

        {/* Clear Non-Medical Disclaimer */}
        <div className="bg-mist/50 border border-ringBlue/20 rounded-2xl p-6 mb-12 text-sm text-ink-secondary leading-relaxed">
          <h3 className="font-bold text-navy mb-1">
            {lang === 'ta' ? 'முக்கிய பொறுப்புத் துறப்பு (Ethics & Scope)' : 'Ethical Scope & Medical Disclaimer'}
          </h3>
          <p className="font-tamil">
            {lang === 'ta'
              ? 'பீஸ் படி என்பது பொதுவான மன அமைதி மற்றும் வாழ்வியல் நலம் சார்ந்த வழிகாட்டல் மட்டுமே. இது மனநோய் மருத்துவம், உளவியல் ஆலோசனை (Clinical Psychiatry/Psychotherapy) அல்லது அவசர மருத்துவத்திற்கான மாற்று அல்ல. தீவிர மன அழுத்தத்தில் உள்ளவர்கள் அரசு அங்கீகரிக்கப்பட்ட இலவச மன நல உதவி எண்களை (Tele-MANAS: 14416 / 1800-891-4416) நாடவும்.'
              : 'Peace Buddy provides general lifestyle mindfulness and emotional wellbeing support and is not a substitute for clinical psychological or psychiatric medical care. If you are experiencing acute distress, please reach out directly to verified healthcare professionals or national helplines.'}
          </p>
        </div>

        {/* Action Link */}
        <div className="text-center">
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill bg-navy hover:bg-ringBlue text-white text-base font-medium transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
