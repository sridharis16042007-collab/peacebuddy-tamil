'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function ArticlesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="resources"
      aria-label="Mindfulness Articles and Guides"
      className="py-16 sm:py-24 bg-white relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-[#F5EFF7] border border-[#E8DFEF] text-[#7E6C9E] font-medium text-xs sm:text-sm mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#7E6C9E]" aria-hidden="true" />
            <span>{t.articles.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#2D2342] mb-3 tracking-tight font-tamil">
            {t.articles.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5A4D6E]">
            {t.articles.subtitle}
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Article 1 */}
          <article className="bg-white rounded-calm-lg p-6 sm:p-8 border border-[#E8DFEF] hover:border-[#7E6C9E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-[#7E6C9E] bg-[#F5EFF7] px-2.5 py-1 rounded-md border border-[#E8DFEF] shadow-xs">
                  {t.articles.item1.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#7A6E91]">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.articles.item1.readTime}</span>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2342] mb-3 group-hover:text-[#7E6C9E] transition-colors font-tamil leading-snug">
                {t.articles.item1.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5A4D6E] leading-relaxed mb-6 font-tamil">
                {t.articles.item1.excerpt}
              </p>
            </div>
            <Link
              href="/resources#article-1"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7E6C9E] group-hover:text-[#5E4C80] transition-colors pt-4 border-t border-[#E8DFEF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E] rounded-md"
            >
              <span>{t.articles.readMore}</span>
            </Link>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-calm-lg p-6 sm:p-8 border border-[#E8DFEF] hover:border-[#7E6C9E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-[#7E6C9E] bg-[#F5EFF7] px-2.5 py-1 rounded-md border border-[#E8DFEF] shadow-xs">
                  {t.articles.item2.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#7A6E91]">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.articles.item2.readTime}</span>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2342] mb-3 group-hover:text-[#7E6C9E] transition-colors font-tamil leading-snug">
                {t.articles.item2.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5A4D6E] leading-relaxed mb-6 font-tamil">
                {t.articles.item2.excerpt}
              </p>
            </div>
            <Link
              href="/resources#article-2"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7E6C9E] group-hover:text-[#5E4C80] transition-colors pt-4 border-t border-[#E8DFEF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E] rounded-md"
            >
              <span>{t.articles.readMore}</span>
            </Link>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-calm-lg p-6 sm:p-8 border border-[#E8DFEF] hover:border-[#7E6C9E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-[#7E6C9E] bg-[#F5EFF7] px-2.5 py-1 rounded-md border border-[#E8DFEF] shadow-xs">
                  {t.articles.item3.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#7A6E91]">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.articles.item3.readTime}</span>
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2342] mb-3 group-hover:text-[#7E6C9E] transition-colors font-tamil leading-snug">
                {t.articles.item3.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5A4D6E] leading-relaxed mb-6 font-tamil">
                {t.articles.item3.excerpt}
              </p>
            </div>
            <Link
              href="/resources#article-3"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7E6C9E] group-hover:text-[#5E4C80] transition-colors pt-4 border-t border-[#E8DFEF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E] rounded-md"
            >
              <span>{t.articles.readMore}</span>
            </Link>
          </article>
        </div>

        {/* View All Resources Link */}
        <div className="text-center mt-12">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-mist hover:bg-softAccent/40 text-navy text-sm font-medium transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            <span>{t.nav.resources}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
