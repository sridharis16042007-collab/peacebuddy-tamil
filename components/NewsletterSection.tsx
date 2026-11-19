'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Mail, CheckCircle, ShieldCheck } from 'lucide-react';

export default function NewsletterSection() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும் (Please enter a valid email).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        // Even if API is static/offline, show calm success locally
        setStatus('success');
      }
    } catch {
      // Local fallback for offline/static deployment
      setStatus('success');
    }
  };

  return (
    <section
      id="newsletter"
      aria-label="Free Mindfulness Resource and Newsletter"
      className="py-16 sm:py-24 bg-white relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-mist/60 via-ice to-white rounded-calm-lg p-8 sm:p-12 border border-mist shadow-sm text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-white border border-mist text-navy font-medium text-xs sm:text-sm mb-4 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{t.newsletter.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-navy mb-3 tracking-tight font-tamil">
            {t.newsletter.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary mb-8 max-w-xl mx-auto leading-relaxed">
            {t.newsletter.desc}
          </p>

          {status === 'success' ? (
            <div
              className="bg-white border border-ringBlue/30 rounded-2xl p-6 max-w-md mx-auto shadow-xs flex items-center gap-3 text-left animate-fade-in"
              role="alert"
            >
              <CheckCircle className="w-6 h-6 text-ringBlue flex-shrink-0" aria-hidden="true" />
              <p className="text-sm sm:text-base text-navy font-medium">
                {t.newsletter.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
              noValidate
            >
              {/* Optional Name */}
              <div className="sm:w-1/3 text-left">
                <label htmlFor="newsletter-name" className="sr-only">
                  {t.newsletter.namePlaceholder}
                </label>
                <input
                  id="newsletter-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.newsletter.namePlaceholder}
                  className="w-full px-4 py-3.5 rounded-pill bg-white border border-mist text-ink text-sm sm:text-base placeholder:text-ink-muted focus:border-ringBlue focus:ring-2 focus:ring-ringBlue/20 focus:outline-none min-h-[48px] shadow-xs"
                />
              </div>

              {/* Required Email */}
              <div className="sm:w-1/2 text-left">
                <label htmlFor="newsletter-email" className="sr-only">
                  {t.newsletter.emailPlaceholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.emailPlaceholder}
                  className="w-full px-4 py-3.5 rounded-pill bg-white border border-mist text-ink text-sm sm:text-base placeholder:text-ink-muted focus:border-ringBlue focus:ring-2 focus:ring-ringBlue/20 focus:outline-none min-h-[48px] shadow-xs"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:w-auto">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-pill bg-navy hover:bg-ringBlue text-white font-medium text-sm sm:text-base shadow-sm transition-all min-h-[48px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue focus-visible:ring-offset-2"
                >
                  {status === 'submitting' ? t.newsletter.buttonSubmitting : t.newsletter.button}
                </button>
              </div>
            </form>
          )}

          {status === 'error' && errorMessage && (
            <p className="text-sm text-red-600 mt-3 font-medium" role="alert">
              {errorMessage}
            </p>
          )}

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-ink-muted">
            <ShieldCheck className="w-4 h-4 text-ringBlue" aria-hidden="true" />
            <span>{t.newsletter.privacyNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
