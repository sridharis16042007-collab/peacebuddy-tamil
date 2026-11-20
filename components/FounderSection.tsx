'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Heart, ArrowRight } from 'lucide-react';

export default function FounderSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-label="About the Founder"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF4FA] to-[#FBF7F9] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-calm-lg p-8 sm:p-12 border border-[#E8DFEF] shadow-sm flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Photo Placeholder */}
          <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#E8DFEF] shadow-inner bg-[#F5EFF7] flex items-center justify-center group">
              <Image
                src="/assets/chakra-meditation.webp"
                alt="Founder silhouette meditation placeholder [FOUNDER PHOTO]"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2D2342]/10 flex items-end p-4">
                <span className="text-xs bg-white/95 backdrop-blur-xs text-[#2D2342] font-medium px-2.5 py-1 rounded-md shadow-xs">
                  [FOUNDER PHOTO PLACEHOLDER]
                </span>
              </div>
            </div>
          </div>

          {/* Honest 80-word Story */}
          <div className="w-full md:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-[#F5EFF7] border border-[#E8DFEF] text-[#7E6C9E] font-medium text-xs sm:text-sm mb-3">
              <Heart className="w-3.5 h-3.5 text-[#7E6C9E]" aria-hidden="true" />
              <span>{t.founder.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2342] mb-4 font-tamil tracking-tight">
              {t.founder.title}
            </h2>

            <p className="text-base sm:text-lg text-[#5A4D6E] leading-relaxed mb-6 font-tamil">
              {t.founder.story}
            </p>

            <div className="pt-4 border-t border-[#E8DFEF] flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold text-[#2D2342] text-base">
                  {t.founder.credentials}
                </p>
                <p className="text-xs sm:text-sm text-[#7A6E91]">
                  {t.founder.role}
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7E6C9E] hover:text-[#5E4C80] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E] rounded-md px-2 py-1"
              >
                <span>{t.hero.secondaryLink}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
