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
      className="py-16 sm:py-24 bg-gradient-to-b from-mist/30 to-ice relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-calm-lg p-8 sm:p-12 border border-mist shadow-sm flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Photo Placeholder */}
          <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-mist shadow-inner bg-mist/40 flex items-center justify-center group">
              <Image
                src="/assets/chakra-meditation.webp"
                alt="Founder silhouette meditation placeholder [FOUNDER PHOTO]"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/10 flex items-end p-4">
                <span className="text-xs bg-white/90 backdrop-blur-xs text-navy font-medium px-2.5 py-1 rounded-md shadow-xs">
                  [FOUNDER PHOTO PLACEHOLDER]
                </span>
              </div>
            </div>
          </div>

          {/* Honest 80-word Story */}
          <div className="w-full md:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-mist text-navy font-medium text-xs sm:text-sm mb-3">
              <Heart className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
              <span>{t.founder.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 font-tamil tracking-tight">
              {t.founder.title}
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-6 font-tamil">
              {t.founder.story}
            </p>

            <div className="pt-4 border-t border-mist/80 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold text-navy text-base">
                  {t.founder.credentials}
                </p>
                <p className="text-xs sm:text-sm text-ink-muted">
                  {t.founder.role}
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ringBlue hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-2 py-1"
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
