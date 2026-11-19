'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Quote, MessageSquareHeart } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      aria-label="Community Testimonials"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-ice to-white relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-mist text-navy font-medium text-xs sm:text-sm mb-4">
            <MessageSquareHeart className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-navy mb-3 tracking-tight font-tamil">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Moderated & Calm Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-calm-lg p-6 sm:p-8 border border-mist shadow-sm flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-softAccent mb-4" aria-hidden="true" />
              <p className="text-ink-secondary text-base leading-relaxed mb-6 font-tamil italic">
                {t.testimonials.card1.text}
              </p>
            </div>
            <div className="pt-4 border-t border-mist/80">
              <p className="font-semibold text-navy text-sm sm:text-base">
                {t.testimonials.card1.author}
              </p>
              <p className="text-xs text-ink-muted">
                {t.testimonials.card1.location}
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-calm-lg p-6 sm:p-8 border border-mist shadow-sm flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-softAccent mb-4" aria-hidden="true" />
              <p className="text-ink-secondary text-base leading-relaxed mb-6 font-tamil italic">
                {t.testimonials.card2.text}
              </p>
            </div>
            <div className="pt-4 border-t border-mist/80">
              <p className="font-semibold text-navy text-sm sm:text-base">
                {t.testimonials.card2.author}
              </p>
              <p className="text-xs text-ink-muted">
                {t.testimonials.card2.location}
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-calm-lg p-6 sm:p-8 border border-mist shadow-sm flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-softAccent mb-4" aria-hidden="true" />
              <p className="text-ink-secondary text-base leading-relaxed mb-6 font-tamil italic">
                {t.testimonials.card3.text}
              </p>
            </div>
            <div className="pt-4 border-t border-mist/80">
              <p className="font-semibold text-navy text-sm sm:text-base">
                {t.testimonials.card3.author}
              </p>
              <p className="text-xs text-ink-muted">
                {t.testimonials.card3.location}
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Integrity Disclaimer */}
        <p className="text-center text-xs text-ink-light mt-8">
          {t.testimonials.disclaimer}
        </p>
      </div>
    </section>
  );
}
