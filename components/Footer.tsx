'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Heart, Instagram, Youtube, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer
      aria-label="Peace Buddy Site Footer"
      className="bg-[#F6EBEE] pt-16 sm:pt-24 pb-12 border-t border-[#0F2742]/10 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Top Section: Brand Story & 3 Columns of Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#0F2742]/10">

          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Peace Buddy Home"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/Peace_Buddy_Teal_Circular_Emblem.png"
                  alt="Peace Buddy Logo"
                  width={40}
                  height={40}
                  className="rounded-full shadow-xs"
                />
              </div>
              <span className="font-serif text-[24px] font-medium text-[#0F2742] tracking-tight">
                Peace Buddy
              </span>
            </Link>

            <p className="text-[15px] text-[#4A5A6A] leading-[1.7] max-w-sm">
              {lang === 'ta'
                ? 'அமைதியான மனம், தெளிவான சிந்தனை மற்றும் நிம்மதியான வாழ்விற்கான தமிழ் புகலிடம்.'
                : 'A dedicated Tamil-first sanctuary for inner peace, emotional wellbeing, and mindful daily living.'}
            </p>

            {/* Circular Social Buttons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-[#0F2742] hover:text-[#8B5E83] hover:bg-white shadow-xs transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-[#0F2742] hover:text-[#8B5E83] hover:bg-white shadow-xs transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-[#0F2742] hover:text-[#8B5E83] hover:bg-white shadow-xs transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3 Columns of Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Col 1: Explore */}
            <div>
              <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#8B5E83] block mb-4">
                {lang === 'ta' ? 'வழிகாட்டல்' : 'EXPLORE'}
              </span>
              <ul className="space-y-2.5 text-[15px] text-[#4A5A6A]">
                <li>
                  <Link href="/" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.programs}
                  </Link>
                </li>
                <li>
                  <Link href="/classes" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.classes}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.about}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Sanctuary */}
            <div>
              <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#8B5E83] block mb-4">
                {lang === 'ta' ? 'அமைதி வளங்கள்' : 'SANCTUARY'}
              </span>
              <ul className="space-y-2.5 text-[15px] text-[#4A5A6A]">
                <li>
                  <Link href="/resources" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.resources}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.faq}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-[#0F2742] transition-colors link-editorial">
                    {t.nav.login}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Safe Space */}
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#8B5E83] block mb-4">
                {lang === 'ta' ? 'பாதுகாப்பு' : 'ETHOS'}
              </span>
              <p className="text-xs text-[#4A5A6A] leading-relaxed mb-3">
                {lang === 'ta'
                  ? 'விளம்பரங்களற்ற, அமைதியான மற்றும் மரியாதையான தனிப்பட்ட இடம்.'
                  : 'Zero trackers. Calm, intentional, and respectful of your inner space.'}
              </p>
              <Link
                href="/privacy"
                className="text-xs text-[#8B5E83] hover:underline font-medium"
              >
                {t.nav.privacy}
              </Link>
            </div>
          </div>

        </div>

        {/* Big Serif Wordmark "Peace Buddy" at the Bottom */}
        <div className="py-12 text-center select-none overflow-hidden">
          <span className="text-[52px] sm:text-[90px] lg:text-[130px] font-serif font-medium text-[#0F2742]/15 tracking-tight leading-none block hover:text-[#0F2742]/25 transition-colors duration-500">
            Peace Buddy
          </span>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 border-t border-[#0F2742]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5A6A]">
          <p>© {new Date().getFullYear()} Peace Buddy Tamil. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[#8B5E83]">
            <Heart className="w-3.5 h-3.5 fill-[#8B5E83]" />
            <span>Nurturing calm for Tamil speakers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
