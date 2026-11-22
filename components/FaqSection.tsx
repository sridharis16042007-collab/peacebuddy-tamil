'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, Plus, Minus, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const { lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q:
        lang === 'ta'
          ? 'இதற்கு முன் தியானம் செய்யாதவர்கள் இதில் பங்கேற்கலாமா?'
          : 'Do I need prior meditation or mindfulness experience?',
      a:
        lang === 'ta'
          ? 'நிச்சயமாக! பீஸ் படி முழுமையாக ஆரம்பநிலையாளர்களுக்காகவே வடிவமைக்கப்பட்டுள்ளது. எந்தவித கடினமான விதிகளோ சடங்குகளோ இல்லை. எளிய மூச்சு மற்றும் கவனக் குவிப்பு பயிற்சிகள் மட்டுமே.'
          : 'Absolutely not. Peace Buddy is designed specifically for beginners. There are no esoteric rules, complex postures, or rituals—only gentle, practical mindfulness grounded in daily life.',
    },
    {
      q:
        lang === 'ta'
          ? 'நேரலை வகுப்புகள் எவ்வாறு நடைபெறுகின்றன?'
          : 'How do the live online classes work?',
      a:
        lang === 'ta'
          ? 'அனைத்து நேரலை வகுப்புகளும் Google Meet மூலம் எளிமையாக நடைபெறுகின்றன. வகுப்பு தொடங்குவதற்கு 10 நிமிடங்களுக்கு முன்பு Join Class பொத்தான் செயல்படத் தொடங்கும்.'
          : 'Classes are conducted seamlessly via Google Meet. The Join Class button activates 10 minutes before the scheduled start time for registered members.',
    },
    {
      q:
        lang === 'ta'
          ? 'பீஸ் படி என்பது மருத்துவ அல்லது மனநல சிகிச்சையா?'
          : 'Is Peace Buddy clinical therapy or psychiatric treatment?',
      a:
        lang === 'ta'
          ? 'இல்லை. பீஸ் படி பொதுவான மன அமைதி, உணர்வு நலம் மற்றும் விழிப்புணர்வு வழிகாட்டலை மட்டுமே வழங்குகிறது. தீவிர மன உளைச்சலில் உள்ளவர்கள் Tele-MANAS (14416) உதவி எண்ணை நாட வேண்டும்.'
          : 'No. Peace Buddy provides gentle everyday mindfulness guidance and lifestyle balance. If you are experiencing severe distress, please reach out directly to verified helplines like Tele-MANAS (14416).',
    },
    {
      q:
        lang === 'ta'
          ? 'எனது தனிப்பட்ட தகவல்கள் மற்றும் மின்னஞ்சல் பாதுகாப்பாக இருக்குமா?'
          : 'How is my privacy and information protected?',
      a:
        lang === 'ta'
          ? '100% பாதுகாப்பாக இருக்கும். நாங்கள் எந்த விளம்பர நெட்வொர்க்குகளுடனும் உங்கள் தகவல்களைப் பகிர்வதில்லை. எந்த நேரத்திலும் ஒரே கிளிக்கில் விலகிக்கொள்ளலாம்.'
          : 'Your privacy is held sacred. We never share details with advertising trackers. You may request account deletion or unsubscribe with a single click at any time.',
    },
    {
      q:
        lang === 'ta'
          ? 'பயிற்சிகள் தமிழ் மொழியிலும் ஆங்கிலத்திலும் உள்ளதா?'
          : 'Are materials and guidance bilingual?',
      a:
        lang === 'ta'
          ? 'ஆம்! எங்களின் அனைத்து பயிற்சிகளும் தாய்மொழியான தமிழில் முதன்மையாக அமைந்திருப்பதுடன், ஆங்கிலத்திலும் முழுமையாகப் புரிந்துகொள்ளும் வகையில் வடிவமைக்கப்பட்டுள்ளன.'
          : 'Yes. All core meditation guidance is naturally articulated in gentle Tamil, with complete English translation support across all pages.',
    },
  ];

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-[72px] lg:py-[120px] bg-[#F6EBEE] relative overflow-hidden"
    >
      <div className="max-w-[900px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F2742]">
              {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'CLEAR ANSWERS'}
            </span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-serif font-medium text-[#0F2742] leading-[1.1] tracking-tight mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif">
                தெளிவான பதில்கள்,
                <br />
                <span className="italic font-serif text-[#8B5E83]">முழுமையான அமைதி.</span>
              </span>
            ) : (
              <>
                Common questions,
                <br />
                <span className="italic font-serif text-[#8B5E83]">gentle clarity.</span>
              </>
            )}
          </h2>

          <p className="text-[16px] sm:text-[17px] text-[#4A5A6A] max-w-xl mx-auto">
            {lang === 'ta'
              ? 'பீஸ் படி தளம், பயிற்சிகள் மற்றும் வழிகாட்டல்கள் குறித்து நீங்கள் அறிய வேண்டிய அனைத்தும்.'
              : 'Everything you need to know about our approach, class schedule, and sanctuary philosophy.'}
          </p>
        </div>

        {/* Minimal Accordion with Thin Lines, No Heavy Boxes, Smooth Rotating Icon */}
        <div className="divide-y divide-[#0F2742]/10 border-t border-b border-[#0F2742]/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[18px] sm:text-[20px] font-serif font-medium text-[#0F2742] group-hover:text-[#8B5E83] transition-colors leading-snug">
                    {faq.q}
                  </h3>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 border ${
                      isOpen
                        ? 'bg-[#8B5E83] text-white border-[#8B5E83] rotate-180'
                        : 'bg-white/70 text-[#0F2742] border-white/80 group-hover:bg-white'
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

        {/* Need More Assistance */}
        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#8B5E83] hover:text-[#6F4768] transition-colors group"
          >
            <span>{lang === 'ta' ? 'அனைத்து கேள்விகளையும் பார்க்க' : 'View all FAQs'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
