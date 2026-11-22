'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function FounderSection() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="about"
      aria-label="About the Founder"
      className="py-[72px] lg:py-[120px] bg-[#F1EAF4] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Tall Rounded Photo Strip with Thin Circle Line Behind */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Thin Decorative Circle Line Behind the Image */}
              <div className="absolute -inset-6 sm:-inset-10 rounded-full border border-[#8B5E83]/25 pointer-events-none -z-10" />
              <div className="absolute -inset-14 sm:-inset-20 rounded-full border border-[#8B5E83]/15 pointer-events-none -z-10" />

              {/* Tall Rounded Image Container (32px Radius) */}
              <div className="w-full h-[460px] sm:h-[520px] rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(15,39,66,0.12)] border border-white/80 relative bg-white/70 group">
                <Image
                  src="/assets/chakra-meditation.webp"
                  alt="Founder peaceful meditation sanctuary"
                  fill
                  sizes="(max-width: 640px) 360px, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Founder Badge at bottom */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[20px] bg-white/80 backdrop-blur-md border border-white/90 shadow-md">
                  <span className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[#8B5E83] block">
                    {lang === 'ta' ? 'வழிகாட்டி & நிறுவனர்' : 'FOUNDER & MENTOR'}
                  </span>
                  <span className="text-base font-serif font-medium text-[#0F2742] block mt-0.5">
                    Peace Buddy Tamil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Label, Editorial H2, Story, 3 Stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F2742]">
                {lang === 'ta' ? 'நிறுவனரின் வார்த்தைகள்' : "THE FOUNDER'S STORY"}
              </span>
            </div>

            {/* Editorial Headline (H2) with Wide Letter-Spacing */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-serif font-medium text-[#0F2742] leading-[1.15] tracking-[0.01em] mb-6">
              {lang === 'ta' ? (
                <span className="font-tamil-serif">
                  சொந்த அனுபவத்திலிருந்து பிறந்த
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">கனிவான தமிழ் வழிகாட்டல்.</span>
                </span>
              ) : (
                <>
                  Born from personal experience,
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">guided by quiet compassion.</span>
                </>
              )}
            </h2>

            {/* Warm Story (2-3 paragraphs) */}
            <div className="space-y-4 text-[16px] sm:text-[17px] text-[#4A5A6A] leading-[1.75] font-normal mb-8">
              <p>
                {lang === 'ta'
                  ? 'வாழ்க்கையின் வேகமான ஓட்டத்தில் தீவிர மன அழுத்தத்தையும், ஓவர்திங்கிங்கையும் நானே எதிர்கொண்டேன். அமைதியைத் தேடிப் பல ஆங்கில வழிகாட்டல்களைப் படித்தாலும், நம் தாய்மொழியான தமிழில் எளிமையான, அழுத்தமற்ற ஒரு அமைதிப் புகலிடம் இல்லையே என்ற ஏக்கம் நீண்ட நாட்களாக என்னுள் இருந்தது.'
                  : 'In the rapid rush of everyday life, I walked through chronic overthinking and stress firsthand. While there were endless English mindfulness guides, there was no gentle, pressure-free sanctuary rooted natively in Tamil for our everyday emotional rhythm.'}
              </p>
              <p>
                {lang === 'ta'
                  ? 'பீஸ் படி என்பது எந்தவித சிக்கலான விதிகளோ சடங்குகளோ கொண்டதல்ல. இது ஒரு மருத்துவமனையோ அல்லது தீர்ப்பு வழங்கும் இடமோ அல்ல—உங்கள் மனதிற்கு நிம்மதியான இளைப்பாறுதல் தரும் ஒரு எளிய நண்பன்.'
                  : 'Peace Buddy was created to be that trusted friend. No rigid dogmas, no overwhelming routines—just calm, structured pathways to help you breathe, quiet the noise, and come home to yourself.'}
              </p>
            </div>

            {/* 3 Key Stats with Thin Vertical Dividers */}
            <div className="w-full pt-6 pb-2 border-t border-[#0F2742]/10 grid grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div>
                <span className="text-[28px] sm:text-[36px] font-serif font-medium text-[#0F2742] block leading-none">
                  500+
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#4A5A6A] mt-1.5 block">
                  {lang === 'ta' ? 'அமைதி அமர்வுகள்' : 'Mindful Sessions'}
                </span>
              </div>

              <div className="border-l border-[#0F2742]/10 pl-4 sm:pl-6">
                <span className="text-[28px] sm:text-[36px] font-serif font-medium text-[#0F2742] block leading-none">
                  30 Days
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#4A5A6A] mt-1.5 block">
                  {lang === 'ta' ? 'தினசரி பயிற்சி' : 'Daily Practice'}
                </span>
              </div>

              <div className="border-l border-[#0F2742]/10 pl-4 sm:pl-6">
                <span className="text-[28px] sm:text-[36px] font-serif font-medium text-[#0F2742] block leading-none">
                  4.9 ★
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#4A5A6A] mt-1.5 block">
                  {lang === 'ta' ? 'அன்பான மதிப்பு' : 'Peace Rating'}
                </span>
              </div>
            </div>

            {/* Learn More Link */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#8B5E83] hover:text-[#6F4768] transition-colors group"
            >
              <span>{lang === 'ta' ? 'எங்கள் முழு கதையை வாசியுங்கள்' : 'Read our full story'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
