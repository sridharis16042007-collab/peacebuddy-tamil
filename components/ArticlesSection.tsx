'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export default function ArticlesSection() {
  const { lang, t } = useLanguage();

  const articles = [
    {
      id: 'article-1',
      tag: lang === 'ta' ? 'தியானம்' : 'MEDITATION',
      title:
        lang === 'ta'
          ? 'ஆரம்பநிலைக்கான 10 நிமிட எளிய தமிழ் தியானம்'
          : 'A Gentle 10-Minute Daily Tamil Meditation Practice',
      readTime: lang === 'ta' ? '4 நிமிடம்' : '4 min read',
      excerpt:
        lang === 'ta'
          ? 'எண்ணங்களை அடக்க முயலாமல், விழிப்புணர்வுடன் மூச்சைக் கவனிக்கும் எளிய பயிற்சி முறை.'
          : 'Learn how to observe the natural cadence of your breath without forcing or judging thoughts.',
      image: '/assets/sunset-serenity.webp',
      href: '/resources#article-1',
    },
    {
      id: 'article-2',
      tag: lang === 'ta' ? 'மன அமைதி' : 'MIND CLARITY',
      title:
        lang === 'ta'
          ? 'ஓவர்திங்கிங்கை நிறுத்தும் 3 எளிய வழிகள்'
          : 'Soothe Overthinking: 3 Practical Grounding Shifts',
      readTime: lang === 'ta' ? '5 நிமிடம்' : '5 min read',
      excerpt:
        lang === 'ta'
          ? 'எண்ணங்களின் சுழற்சியில் சிக்கிக் கொள்ளாமல், உடனடி நிகழ்காலத்திற்குத் திரும்பும் எளிய நுட்பங்கள்.'
          : 'Gentle cognitive steps to step back from recursive loops and return to the grounded present.',
      image: '/assets/chakra-meditation.webp',
      href: '/resources#article-2',
    },
    {
      id: 'article-3',
      tag: lang === 'ta' ? 'வாழ்வியல்' : 'WELLNESS',
      title:
        lang === 'ta'
          ? 'பிரம்ம முகூர்த்தத்தில் தொடங்கும் அமைதியான காலை'
          : 'Brahma Muhurtham: Awakening with Serene Calm',
      readTime: lang === 'ta' ? '6 நிமிடம்' : '6 min read',
      excerpt:
        lang === 'ta'
          ? 'அதிகாலை அமைதியில் மனதை ஒருமுகப்படுத்தி அன்றைய நாளை தெளிவுடன் தொடங்குவது எப்படி.'
          : 'Harness the quietest dawn hours to nourish your nervous system and start the day grounded.',
      image: '/assets/sunset-serenity.webp',
      href: '/resources#article-3',
    },
  ];

  return (
    <section
      id="resources"
      aria-label="Mindfulness Articles and Resources"
      className="py-[72px] lg:py-[120px] bg-[#F8F5F1] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F2742]">
                {lang === 'ta' ? 'கட்டுரைகள் & வழிகாட்டிகள்' : 'EDITORIAL & GUIDES'}
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-serif font-medium text-[#0F2742] leading-[1.1] tracking-tight">
              {lang === 'ta' ? (
                <span className="font-tamil-serif">
                  ஆழ்ந்த அமைதிக்கான
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">பயனுள்ள ஆலோசனைகள்.</span>
                </span>
              ) : (
                <>
                  Perspectives & guides
                  <br />
                  <span className="italic font-serif text-[#8B5E83]">for mindful everyday living.</span>
                </>
              )}
            </h2>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#8B5E83] hover:text-[#6F4768] transition-colors group"
          >
            <span>{lang === 'ta' ? 'அனைத்து கட்டுரைகளையும் காண்க' : 'Explore all resources'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Grid of Frosted Cards with Top Image (24px Radius) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group p-6 sm:p-7 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,39,66,0.14)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Image (Rounded 24px) */}
                <div className="relative w-full h-52 rounded-[24px] overflow-hidden mb-6 bg-[#F6EBEE]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Tag Pill inside image */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] bg-white/85 backdrop-blur-md text-[#0F2742] shadow-xs">
                      {art.tag}
                    </span>
                  </div>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-1.5 text-xs text-[#8B5E83] font-medium mb-2.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </div>

                {/* Serif Title */}
                <h3 className="text-[20px] sm:text-[22px] font-serif font-medium text-[#0F2742] group-hover:text-[#8B5E83] transition-colors leading-snug mb-3">
                  {art.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-[#4A5A6A] leading-[1.65] mb-6 line-clamp-2">
                  {art.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-[#0F2742]/10">
                <Link
                  href={art.href}
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0F2742] group-hover:text-[#8B5E83] transition-colors"
                >
                  <span>{lang === 'ta' ? 'முழுதாக வாசிக்க' : 'Read more'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
