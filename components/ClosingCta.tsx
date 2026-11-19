'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ClosingCta() {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Begin Your Peace Journey"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-ice to-mist/40 text-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-navy mb-4 tracking-tight font-tamil">
          {t.cta.title}
        </h2>
        <p className="text-base sm:text-xl text-ink-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.cta.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#newsletter"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill bg-navy hover:bg-ringBlue text-white text-base sm:text-lg font-medium shadow-md hover:shadow-lg transition-all min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue focus-visible:ring-offset-2"
          >
            <span>{t.cta.primaryBtn}</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <a
            href="https://wa.me/?text=Hello%20Peace%20Buddy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20calm%20programs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-pill bg-white hover:bg-mist text-navy border border-mist text-base font-medium transition-all min-h-[52px] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            <MessageCircle className="w-5 h-5 text-ringBlue" aria-hidden="true" />
            <span>{t.cta.whatsappBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
