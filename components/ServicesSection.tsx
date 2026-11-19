'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Compass, Brain, SunMedium, Check, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      aria-label="How Peace Buddy Helps"
      className="py-16 sm:py-24 bg-white relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-mist text-navy font-medium text-xs sm:text-sm mb-4">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-navy mb-3 tracking-tight font-tamil">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Cards Only - As per strict rule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-ice rounded-calm-lg p-6 sm:p-8 border border-mist hover:border-softAccent hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-mist flex items-center justify-center text-navy mb-6 shadow-xs">
                <Compass className="w-6 h-6 text-ringBlue" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-ringBlue tracking-wider uppercase">
                {t.services.card1.tag}
              </span>
              <h3 className="text-xl font-bold text-navy mt-1 mb-3 font-tamil">
                {t.services.card1.title}
              </h3>
              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-6 font-tamil">
                {t.services.card1.desc}
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-mist/80 text-xs sm:text-sm text-ink-muted">
              {t.services.card1.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ringBlue flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-ice rounded-calm-lg p-6 sm:p-8 border border-ringBlue/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-ringBlue/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-mist flex items-center justify-center text-navy mb-6 shadow-xs">
                <Brain className="w-6 h-6 text-ringBlue" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-ringBlue tracking-wider uppercase">
                {t.services.card2.tag}
              </span>
              <h3 className="text-xl font-bold text-navy mt-1 mb-3 font-tamil">
                {t.services.card2.title}
              </h3>
              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-6 font-tamil">
                {t.services.card2.desc}
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-mist/80 text-xs sm:text-sm text-ink-muted">
              {t.services.card2.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ringBlue flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-ice rounded-calm-lg p-6 sm:p-8 border border-mist hover:border-softAccent hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-mist flex items-center justify-center text-navy mb-6 shadow-xs">
                <SunMedium className="w-6 h-6 text-ringBlue" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-ringBlue tracking-wider uppercase">
                {t.services.card3.tag}
              </span>
              <h3 className="text-xl font-bold text-navy mt-1 mb-3 font-tamil">
                {t.services.card3.title}
              </h3>
              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-6 font-tamil">
                {t.services.card3.desc}
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-mist/80 text-xs sm:text-sm text-ink-muted">
              {t.services.card3.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ringBlue flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Single Primary Action Button for this Section */}
        <div className="text-center mt-12">
          <Link
            href="#newsletter"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill bg-navy hover:bg-ringBlue text-white text-base font-medium shadow-sm transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
