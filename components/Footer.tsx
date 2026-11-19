'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { PhoneCall, Heart, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-navy-deep text-white/90 pt-16 sm:pt-20 pb-12 border-t border-navy"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Col 1: Emblem & Brand Purpose */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded-lg p-1"
              aria-label="Peace Buddy Tamil Home"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/Peace_Buddy_Teal_Circular_Emblem.svg"
                  alt="Peace Buddy Circular Emblem"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-softAccent transition-colors">
                  Peace Buddy Tamil
                </span>
                <span className="text-xs text-softAccent font-medium">
                  அமைதியான மனம் • தெளிவான வாழ்வு
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm sm:text-base text-white/70 max-w-md leading-relaxed font-tamil">
              {t.footer.tagline}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-softAccent">
              <span className="inline-flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-ringBlue" aria-hidden="true" />
                <span>Made with peace for Tamil speakers worldwide</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-softAccent mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded py-1 inline-block min-h-[44px] flex items-center"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded py-1 inline-block min-h-[44px] flex items-center"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded py-1 inline-block min-h-[44px] flex items-center"
                >
                  {t.nav.resources}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded py-1 inline-block min-h-[44px] flex items-center"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Placeholders */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-softAccent mb-4">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-softAccent flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs text-white/90">[CLIENT EMAIL]</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-softAccent flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs text-white/90">[CLIENT WHATSAPP]</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/privacy"
                  className="text-xs text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue rounded py-1 inline-block min-h-[44px] flex items-center"
                >
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Essential Trust: Verified Crisis Helpline Notice (India) */}
        <div className="bg-navy/80 rounded-2xl p-5 sm:p-6 border border-ringBlue/30 mb-10 text-xs sm:text-sm text-white/85">
          <div className="flex items-start gap-3">
            <PhoneCall className="w-5 h-5 text-softAccent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white mb-1">
                {t.footer.helplineTitle}
              </p>
              <p className="text-white/70 mb-2 leading-relaxed">
                {t.footer.helplineText}
              </p>
              <p className="font-mono font-medium text-softAccent">
                {t.footer.helplineNumber}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p className="max-w-2xl font-tamil">
            {t.footer.disclaimer}
          </p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
