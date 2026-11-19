'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Content for WCAG 2.2 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-ringBlue"
      >
        {t.nav.skipToContent}
      </a>

      {/* Floating Pill Header Wrapper - Aurora Model Reference */}
      <header className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-pill px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-navy/5 border-mist'
              : 'bg-white/75 backdrop-blur-md shadow-sm border-white/60'
          }`}
        >
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1583C7] rounded-full p-1"
            aria-label="Peace Buddy Tamil Home"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/Peace_Buddy_Teal_Circular_Emblem.webp"
                alt="Peace Buddy Official Emblem"
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-[#12263A] group-hover:text-[#0B3D6B] transition-colors leading-tight">
                Peace Buddy
              </span>
              <span className="text-[11px] font-medium text-[#5A758E] -mt-0.5">
                {lang === 'ta' ? 'தமிழ்' : 'Tamil'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="text-[15px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1.5 py-1"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-[15px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1.5 py-1"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/resources"
              className="text-[15px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1.5 py-1"
            >
              {t.nav.resources}
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1.5 py-1"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Action Buttons: Language Switcher + Pill CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-navy hover:text-ringBlue bg-mist/60 hover:bg-mist rounded-pill border border-mist transition-all min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
              aria-label={`Switch language to ${lang === 'ta' ? 'English' : 'Tamil'}`}
            >
              <Globe className="w-4 h-4 text-ringBlue" aria-hidden="true" />
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Pill CTA Button (Aurora Model Reference) */}
            <Link
              href="/#newsletter"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-navy hover:bg-ringBlue text-white text-sm font-medium shadow-sm hover:shadow transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue focus-visible:ring-offset-2"
            >
              <span>{t.nav.startCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-ink hover:text-navy hover:bg-mist/50 transition-colors min-h-[48px] min-w-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="pointer-events-auto absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl border border-mist rounded-2xl shadow-xl p-5 md:hidden flex flex-col gap-4 animate-slide-up"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-ink hover:text-ringBlue rounded-lg min-h-[48px] flex items-center"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-ink hover:text-ringBlue rounded-lg min-h-[48px] flex items-center"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-ink hover:text-ringBlue rounded-lg min-h-[48px] flex items-center"
            >
              {t.nav.resources}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-ink hover:text-ringBlue rounded-lg min-h-[48px] flex items-center"
            >
              {t.nav.contact}
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-ink-muted hover:text-navy rounded-lg min-h-[44px] flex items-center"
            >
              {t.nav.privacy}
            </Link>

            <Link
              href="/#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-5 rounded-pill bg-navy hover:bg-ringBlue text-white text-base font-medium min-h-[48px] shadow-sm transition-colors"
            >
              <span>{t.nav.startCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
