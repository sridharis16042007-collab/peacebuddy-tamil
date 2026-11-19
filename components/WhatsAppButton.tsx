'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {/* Calm Tooltip on hover/focus */}
      {showTooltip && (
        <span
          className="hidden sm:inline-block bg-navy text-white text-xs px-3 py-1.5 rounded-full shadow-md animate-fade-in font-tamil"
          role="status"
        >
          {t.whatsapp.tooltip}
        </span>
      )}

      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/?text=Hello%20Peace%20Buddy%2C%20I%20am%20interested%20in%20your%20mindfulness%20programs"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-navy hover:bg-ringBlue text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ringBlue/40"
        aria-label={t.whatsapp.ariaLabel}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
      </a>
    </aside>
  );
}
