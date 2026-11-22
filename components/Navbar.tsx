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
          className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-pill px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between border ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-[#7E6C9E]/5 border-[#E8DFEF]'
              : 'bg-white/70 backdrop-blur-md shadow-xs border-white/80'
          }`}
        >
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E] rounded-full p-1"
            aria-label="Peace Buddy Tamil Home"
          >
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/Peace_Buddy_Teal_Circular_Emblem.webp"
                alt="Peace Buddy Official Emblem"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-tight text-[#2D2342] group-hover:text-[#7E6C9E] transition-colors leading-tight">
                ✦ Peace Buddy
              </span>
              <span className="text-[10px] font-medium text-[#7E6C9E] -mt-0.5">
                {lang === 'ta' ? 'தமிழ்' : 'Tamil'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/"
              className="text-[14px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1 py-1"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/classes"
              className="text-[14px] font-medium text-[#7E6C9E] hover:text-[#5E4C80] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E] rounded-md px-1 py-1"
            >
              {t.nav.classes}
            </Link>
            <Link
              href="/programs"
              className="text-[14px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1 py-1"
            >
              {t.nav.programs}
            </Link>
            <Link
              href="/about"
              className="text-[14px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1 py-1"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/resources"
              className="text-[14px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1 py-1"
            >
              {t.nav.resources}
            </Link>
            <Link
              href="/faq"
              className="text-[14px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1 py-1"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-ink hover:text-ringBlue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-md px-1 py-1"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Action Buttons: Language Switcher + Sign In / CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#2D2342] hover:text-[#7E6C9E] bg-white/80 hover:bg-white rounded-pill border border-[#E8DFEF] transition-all min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E]"
              aria-label={`Switch language to ${lang === 'ta' ? 'English' : 'Tamil'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#7E6C9E]" aria-hidden="true" />
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Login Link */}
            <Link
              href="/login"
              className="hidden lg:inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#2D2342] hover:text-[#7E6C9E] transition-colors"
            >
              <span>{t.nav.login}</span>
            </Link>

            {/* Pill CTA Button (Soul Serenity Lilac) */}
            <Link
              href="/classes"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-pill bg-[#725E96] hover:bg-[#5E4C80] text-white text-xs sm:text-sm font-medium shadow-xs hover:shadow transition-all min-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E6C9E]"
            >
              <span>{t.nav.classes}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
              href="/classes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-[#7E6C9E] hover:text-[#5E4C80] rounded-lg min-h-[48px] flex items-center bg-[#F5EFF7]"
            >
              ✦ {t.nav.classes}
            </Link>
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-ink hover:text-ringBlue rounded-lg min-h-[48px] flex items-center"
            >
              {t.nav.programs}
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
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-ink hover:text-ringBlue rounded-lg min-h-[48px] flex items-center"
            >
              {t.nav.faq}
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
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[#7E6C9E] font-medium rounded-lg min-h-[44px] flex items-center"
            >
              ✦ {t.nav.login} (Sign In)
            </Link>

            <Link
              href="/classes"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-5 rounded-pill bg-[#725E96] hover:bg-[#5E4C80] text-white text-base font-medium min-h-[48px] shadow-sm transition-colors"
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
