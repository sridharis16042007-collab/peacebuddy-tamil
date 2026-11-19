'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ShieldCheck, Lock, EyeOff, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-mist/40 via-ice to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-ink-muted">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium" aria-current="page">
              {t.nav.privacy}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-white border border-mist text-navy font-medium text-xs sm:text-sm mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{t.nav.privacy}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-navy tracking-tight mb-4 font-tamil">
            {lang === 'ta' ? 'எங்கள் தனியுரிமை உறுதிமொழி' : 'Privacy & Trust Commitment'}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {lang === 'ta'
              ? 'உங்கள் தனியுரிமை மற்றும் மன அமைதிக்கு நாங்கள் கொடுக்கும் அதே உயர் மரியாதையை உங்கள் தரவுகளுக்கும் தருகிறோம்.'
              : 'We value your peace of mind and treat your personal data with the exact same quiet dignity and protection.'}
          </p>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-calm-lg p-8 sm:p-12 border border-mist shadow-sm space-y-8 text-ink-secondary text-base leading-relaxed">
          <section>
            <div className="flex items-center gap-3 mb-3">
              <EyeOff className="w-5 h-5 text-ringBlue flex-shrink-0" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold text-navy font-tamil">
                {lang === 'ta' ? '1. விளம்பர ட்ராக்கர்கள் இல்லை' : '1. Zero Invasive Tracking & Advertising'}
              </h2>
            </div>
            <p className="font-tamil">
              {lang === 'ta'
                ? 'பீஸ் படி தளத்தில் உங்களை பின்தொடரும் மூன்றாம் தரப்பு விளம்பரங்கள் (Ad trackers), குறுக்கீடு செய்யும் குக்கீகள் அல்லது கண்காணிப்புக் கருவிகள் எதுவும் இல்லை. நாங்கள் எந்த விளம்பர நெட்வொர்க்குகளுடனும் உங்களின் விவரங்களை பகிர்வதில்லை.'
                : 'Peace Buddy uses no third-party ad retargeting pixels, invasive trackers, or profiling cookies. Your mindful exploration remains completely private.'}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-5 h-5 text-ringBlue flex-shrink-0" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold text-navy font-tamil">
                {lang === 'ta' ? '2. நாங்கள் சேகரிக்கும் குறைந்தபட்ச தகவல்கள்' : '2. Minimal Data Collection'}
              </h2>
            </div>
            <p className="font-tamil">
              {lang === 'ta'
                ? 'நீங்கள் விருப்பப்பட்டு இலவச வழிகாட்டலுக்குப் பதிவு செய்யும் போது அல்லது தொடர்பு கொள்ளும் போது மட்டுமே உங்கள் பெயர் (விரும்பினால்) மற்றும் மின்னஞ்சல் முகவரியைப் பெறுகிறோம். இது அமைதி வழிகாட்டல்களை அனுப்ப மட்டுமே பயன்படுத்தப்படுகிறது.'
                : 'We collect personal information solely when you voluntarily provide it: your optional name and email address when requesting our free guide or sending an inquiry.'}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-3">
              <UserCheck className="w-5 h-5 text-ringBlue flex-shrink-0" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold text-navy font-tamil">
                {lang === 'ta' ? '3. உங்கள் உரிமைகள் (Your Control)' : '3. Complete Control & Right to Erase'}
              </h2>
            </div>
            <p className="font-tamil">
              {lang === 'ta'
                ? 'நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் மின்னஞ்சல் பதிவை ஒரே கிளிக்கில் ரத்து செய்யலாம். உங்கள் தகவல்களை முழுமையாக நீக்க [CLIENT EMAIL] என்ற முகவரிக்கு செய்தி அனுப்பலாம்.'
                : 'You have full autonomy over your information. Every weekly email contains an instant unsubscribe link. You may request total erasure of your contact details anytime at [CLIENT EMAIL].'}
            </p>
          </section>

          <section className="pt-6 border-t border-mist/80 text-sm text-ink-muted">
            <p>
              {lang === 'ta'
                ? 'சட்ட இணக்கம்: இந்தியாவின் டிஜிட்டல் தனிநபர் தரவு பாதுகாப்பு சட்டம் (DPDP Act) மற்றும் சர்வதேச தரவுப் பாதுகாப்பு நெறிமுறைகளுக்கு அமைவாக இக்கொள்கை வடிவமைக்கப்பட்டுள்ளது. கடைசி புதுப்பிப்பு: நவம்பர் 2026.'
                : 'Compliance: This policy adheres to ethical privacy standards and the Digital Personal Data Protection (DPDP) framework. Last updated: November 2026.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
