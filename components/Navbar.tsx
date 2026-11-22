'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, ArrowRight, Sparkles, Globe } from 'lucide-react';

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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0F2742] focus:text-white focus:rounded-full focus:shadow-xl"
      >
        {t.nav.skipToContent}
      </a>

      {/* Floating Pill Header Wrapper - 16px Top Margin, 64px High, Centered */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto w-full max-w-[1200px] h-16 transition-all duration-300 rounded-full px-5 sm:px-7 flex items-center justify-between border ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl border-white/90 shadow-[0_20px_50px_rgba(15,39,66,0.10)]'
              : 'bg-white/70 backdrop-blur-lg border-white/80 shadow-[0_20px_60px_rgba(15,39,66,0.06)]'
          }`}
        >
          {/* Logo on Left: Peace Buddy serif 22px with Circular Emblem */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E83] rounded-full p-1"
            aria-label="Peace Buddy Home"
          >
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/Peace_Buddy_Teal_Circular_Emblem.png"
                alt="Peace Buddy Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="font-serif text-[22px] tracking-tight text-[#0F2742] group-hover:text-[#8B5E83] transition-colors leading-none font-medium">
              Peace Buddy
            </span>
          </Link>

          {/* Desktop Navigation Links in the Middle */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/programs"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.programs}
            </Link>
            <Link
              href="/classes"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.classes}
            </Link>
            <Link
              href="/about"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/resources"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.resources}
            </Link>
            <Link
              href="/faq"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-medium text-[#4A5A6A] hover:text-[#0F2742] transition-colors link-editorial py-1"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Right Controls: Language Pill + Navy Pill Button "Start Journey" */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Toggle Pill: EN | தமிழ் */}
            <button
              onClick={toggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-[13px] font-medium text-[#0F2742] hover:text-[#8B5E83] bg-white/70 hover:bg-white rounded-full border border-white/80 shadow-xs transition-all min-h-[36px] active:scale-95"
              aria-label={`Switch language to ${lang === 'ta' ? 'English' : 'Tamil'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
              <span>{lang === 'ta' ? 'EN' : 'தமிழ்'}</span>
            </button>

            {/* Dark Navy Pill Button "Start Journey" */}
            <Link
              href="/classes"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium shadow-sm hover:shadow transition-all min-h-[40px] active:scale-95 group"
            >
              <span>{lang === 'ta' ? 'அமைதிப் பயணம்' : 'Start Journey'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-[#0F2742] hover:bg-white/80 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu (Soft Warm Cream Background) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F8F5F1] p-6 flex flex-col justify-between overflow-y-auto animate-fade-in">
          {/* Top Bar with Logo and Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#EFEAE2]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-9 h-9">
                <Image
                  src="/Peace_Buddy_Teal_Circular_Emblem.png"
                  alt="Peace Buddy Logo"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
              <span className="font-serif text-2xl font-medium text-[#0F2742]">
                Peace Buddy
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/80 border border-white/80 text-[#0F2742]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col gap-5 py-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.programs}
            </Link>
            <Link
              href="/classes"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.classes}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.resources}
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#0F2742] hover:text-[#8B5E83] transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#EFEAE2] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#4A5A6A]">
                {lang === 'ta' ? 'மொழி தேர்வு' : 'Language'}
              </span>
              <button
                onClick={toggleLang}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EFEAE2] text-sm font-medium text-[#0F2742]"
              >
                <Globe className="w-4 h-4 text-[#8B5E83]" />
                <span>{lang === 'ta' ? 'Switch to English' : 'தமிழுக்கு மாறவும்'}</span>
              </button>
            </div>

            <Link
              href="/classes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-[#0F2742] text-white text-[15px] font-medium shadow-md flex items-center justify-center gap-2"
            >
              <span>{lang === 'ta' ? 'அமைதிப் பயணம்' : 'Start Journey'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
