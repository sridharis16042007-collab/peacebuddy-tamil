'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, Plus, Minus, ArrowRight } from 'lucide-react';

export default function FAQPage() {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q:
        lang === 'ta'
          ? 'இதற்கு முன் தியானம் செய்யாதவர்கள் இதில் பங்கேற்கலாமா?'
          : 'Do I need prior meditation or mindfulness experience?',
      a:
        lang === 'ta'
          ? 'நிச்சயமாக! பீஸ் படி முழுமையாக ஆரம்பநிலையாளர்களுக்காகவே வடிவமைக்கப்பட்டுள்ளது. எந்தவித கடினமான விதிகளோ, சடங்குகளோ இல்லை. எளிய மூச்சு மற்றும் கவனக் குவிப்பு பயிற்சிகள் மட்டுமே.'
          : 'Absolutely not! Peace Buddy is designed specifically for beginners. There are no esoteric rules, complex postures, or rigid rituals—only gentle, practical mindfulness grounded in daily life.',
    },
    {
      q:
        lang === 'ta'
          ? 'பீஸ் படி என்பது மருத்துவ அல்லது மனநல சிகிச்சையா (Psychotherapy)?'
          : 'Is Peace Buddy a clinical mental health or psychiatric treatment?',
      a:
        lang === 'ta'
          ? 'இல்லை. பீஸ் படி பொதுவான மன அமைதி, உணர்வு நலம் மற்றும் விழிப்புணர்வு வழிகாட்டலை மட்டுமே வழங்குகிறது. இது மருத்துவ சிகிச்சை அல்லது மனநோய் ஆலோசனைக்கான மாற்று அல்ல. தீவிர மன அழுத்தத்தில் உள்ளவர்கள் Tele-MANAS (14416) உதவி எண்ணை நாட வேண்டும்.'
          : 'No. Peace Buddy provides gentle everyday mindfulness guidance and lifestyle emotional balance. It is not clinical psychology, psychiatry, or medical treatment. If you are in crisis, please contact verified emergency helplines such as Tele-MANAS (14416).',
    },
    {
      q:
        lang === 'ta'
          ? '4-4-6 மூச்சுப் பயிற்சி எவ்வாறு மனதை அமைதிப்படுத்துகிறது?'
          : 'How does the 4-4-6 breathing technique calm the nervous system?',
      a:
        lang === 'ta'
          ? 'நாம் உள்வாங்குவதை விட வெளிவிடும் மூச்சின் நேரத்தை நீட்டிக்கும் போது (6 நொடிகள்), நமது உடலின் பாராசிம்பதெடிக் நரம்பு மண்டலம் தூண்டப்படுகிறது. இது இதயத் துடிப்பை சீராக்கி, உடனடி அமைதியைத் தருகிறது.'
          : 'By extending the exhale to 6 seconds (longer than the 4s inhale), 4-4-6 breathing stimulates the vagus nerve and activates the parasympathetic nervous system, naturally lowering heart rate and soothing adrenaline.',
    },
    {
      q:
        lang === 'ta'
          ? 'பயிற்சிகள் மற்றும் ஆடியோக்கள் எந்த மொழியில் இருக்கும்?'
          : 'Are the sessions and audio guides available in Tamil and English?',
      a:
        lang === 'ta'
          ? 'எங்களின் அனைத்து வழிகாட்டல்களும் தூய, எளிய மற்றும் மரியாதையான தமிழில் முதன்மையாக இருக்கும். அதே சமயம், ஆங்கில மொழியிலும் புரிந்துகொள்ளும் வகையில் இருமொழி ஆதரவு வழங்கப்படுகிறது.'
          : 'All core guidance is rooted natively in spoken-formal Tamil for emotional resonance, alongside full English translation support across all guides and interfaces.',
    },
    {
      q:
        lang === 'ta'
          ? 'எனது மின்னஞ்சல் மற்றும் தனிப்பட்ட தகவல்கள் பாதுகாப்பாக இருக்குமா?'
          : 'How is my email and personal privacy protected?',
      a:
        lang === 'ta'
          ? '100% பாதுகாப்பாக இருக்கும். நாங்கள் எந்த விளம்பர நெட்வொர்க்குகளுடனும் உங்கள் தகவல்களைப் பகிர்வதில்லை. எந்த நேரத்திலும் ஒரே கிளிக்கில் விலகிக்கொள்ளலாம்.'
          : 'Your privacy is treated with utmost respect. We use zero third-party advertising trackers. You may unsubscribe or request complete erasure of your data at any time with one click.',
    },
    {
      q:
        lang === 'ta'
          ? 'மன உளைச்சல் அல்லது அவசர உதவிக்கு யாரைத் தொடர்பு கொள்வது?'
          : 'What should I do if I am in emotional crisis or need emergency help?',
      a:
        lang === 'ta'
          ? 'உங்களுக்கு உடனடி அவசர உதவி தேவைப்பட்டால், மத்திய அரசின் 24/7 இலவச மன நல உதவி எண்ணான Tele-MANAS: 14416 அல்லது 1800-891-4416 என்ற எண்ணை அழைக்கவும். இதில் தமிழ் மொழியிலும் பேசலாம்.'
          : 'If you are experiencing severe distress, please immediately dial Tele-MANAS (Govt. of India 24/7 toll-free helpline): 14416 or 1800-891-4416 (Tamil & English support available).',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5F1] min-h-screen relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E8D7F1] opacity-25 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F4D9DF] opacity-25 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[900px] mx-auto px-6 sm:px-12">
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
              FAQ
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#0F2742] font-semibold text-[12px] uppercase tracking-[0.14em] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
            <span>{lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'CLEAR PERSPECTIVES'}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-serif font-medium text-[#0F2742] leading-[1.08] tracking-tight mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif">
                தெளிவான பதில்கள்
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (முழுமையான அமைதி)
                </span>
              </span>
            ) : (
              <>
                Clear Answers
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (for Peace of Mind)
                </span>
              </>
            )}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] leading-[1.7] font-normal">
            {lang === 'ta'
              ? 'பீஸ் படி தளம், பயிற்சிகள் மற்றும் வழிகாட்டல்கள் குறித்து நீங்கள் அறிந்துகொள்ள வேண்டிய அனைத்தும்.'
              : 'Everything you need to know about our approach, guidance, privacy, and ethos.'}
          </p>
        </div>

        {/* Minimal Accordion with Thin Lines */}
        <div className="divide-y divide-[#0F2742]/10 border-t border-b border-[#0F2742]/10 bg-white/40 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border border-white/80 shadow-xs mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 first:pt-2 last:pb-2">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <h2 className="text-[18px] sm:text-[20px] font-serif font-medium text-[#0F2742] group-hover:text-[#8B5E83] transition-colors leading-snug">
                    {faq.q}
                  </h2>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 border ${
                      isOpen
                        ? 'bg-[#8B5E83] text-white border-[#8B5E83] rotate-180'
                        : 'bg-white/80 text-[#0F2742] border-white/90 group-hover:bg-white'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-[15px] sm:text-[16px] text-[#4A5A6A] leading-[1.75] font-normal animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpline Notice */}
        <div className="p-6 rounded-[24px] bg-[#DDE6DC]/60 border border-white/80 text-center text-xs text-[#2A5235]">
          <strong>Tele-MANAS (Govt of India Helpline):</strong> 14416 (24/7 Toll-free Tamil & English)
        </div>
      </div>
    </div>
  );
}
