'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Mail, MessageCircle, PhoneCall, CheckCircle, Send, Heart } from 'lucide-react';

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus('submitting');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('success');
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-mist/40 via-ice to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-ink-muted">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium" aria-current="page">
              {t.nav.contact}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-white border border-mist text-navy font-medium text-xs sm:text-sm mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{t.nav.contact}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-navy tracking-tight mb-4 font-tamil">
            {lang === 'ta' ? 'அன்போடு பேசலாம் வாருங்கள்' : 'We Welcome Your Message'}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {lang === 'ta'
              ? 'உங்கள் கேள்விகள், அமைதிப் பயிற்சிகள் பற்றிய ஐயங்கள் அல்லது ஆலோசனைகளைப் பகிருங்கள். நாங்கள் நிதானமாகப் பதிலளிப்போம்.'
              : 'Feel free to reach out with questions regarding programs, mindful routines, or guidance. We reply gently and attentively.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Direct Options Sidebar */}
          <div className="space-y-4 md:col-span-1">
            {/* WhatsApp Box */}
            <div className="bg-white rounded-2xl p-6 border border-mist shadow-xs">
              <div className="w-10 h-10 rounded-full bg-mist/60 flex items-center justify-center text-navy mb-3">
                <MessageCircle className="w-5 h-5 text-ringBlue" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-navy text-base">WhatsApp</h3>
              <p className="text-xs text-ink-muted mt-1 mb-3">
                {lang === 'ta' ? 'உடனடி மற்றும் நேரடி தகவல் தொடர்பு' : 'Direct, pressure-free connection'}
              </p>
              <a
                href="https://wa.me/?text=Hello%20Peace%20Buddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-ringBlue hover:underline inline-block min-h-[44px] flex items-center"
              >
                [CLIENT WHATSAPP]
              </a>
            </div>

            {/* Email Box */}
            <div className="bg-white rounded-2xl p-6 border border-mist shadow-xs">
              <div className="w-10 h-10 rounded-full bg-mist/60 flex items-center justify-center text-navy mb-3">
                <Mail className="w-5 h-5 text-ringBlue" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-navy text-base">Email</h3>
              <p className="text-xs text-ink-muted mt-1 mb-3">
                {lang === 'ta' ? 'எங்கள் மின்னஞ்சல் முகவரி' : 'Official correspondence'}
              </p>
              <span className="text-xs font-mono font-medium text-ink-secondary">
                [CLIENT EMAIL]
              </span>
            </div>

            {/* Helpline Notice */}
            <div className="bg-mist/40 rounded-2xl p-5 border border-ringBlue/20 text-xs text-ink-secondary">
              <div className="flex items-center gap-2 font-bold text-navy mb-1">
                <PhoneCall className="w-4 h-4 text-ringBlue" aria-hidden="true" />
                <span>{lang === 'ta' ? 'அவசர உதவி' : 'Crisis Support'}</span>
              </div>
              <p className="mb-2">
                Tele-MANAS: <strong className="text-navy">14416 / 1800-891-4416</strong> (24/7)
              </p>
              <p className="text-[11px] text-ink-muted">
                {lang === 'ta' ? 'அரசு இலவச மன நல உதவி மையம்' : 'National Tele-Mental Health Helpline'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-calm-lg p-6 sm:p-10 border border-mist shadow-sm md:col-span-2">
            {status === 'success' ? (
              <div
                className="bg-ice border border-ringBlue/30 rounded-2xl p-8 text-center animate-fade-in"
                role="alert"
              >
                <CheckCircle className="w-12 h-12 text-ringBlue mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy mb-2 font-tamil">
                  {lang === 'ta' ? 'உங்கள் செய்தி பெறப்பட்டது!' : 'Message Received with Gratitude'}
                </h3>
                <p className="text-sm sm:text-base text-ink-secondary max-w-md mx-auto">
                  {lang === 'ta'
                    ? 'நன்றி! உங்கள் செய்தியை வாசித்து விரைவில் நிதானமாகப் பதிலளிப்போம்.'
                    : 'Thank you for reaching out. We will read your message mindfully and respond soon.'}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 rounded-pill bg-navy text-white text-xs font-medium hover:bg-ringBlue transition-colors"
                >
                  {lang === 'ta' ? 'மற்றொரு செய்தி அனுப்ப' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-1.5 font-tamil">
                    {lang === 'ta' ? 'உங்கள் பெயர் (விருப்பப்பட்டால்)' : 'Your Name (Optional)'}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ta' ? 'எ.கா: செந்தில்' : 'e.g. Senthil'}
                    className="w-full px-4 py-3 rounded-xl bg-ice border border-mist text-ink text-sm sm:text-base focus:border-ringBlue focus:ring-2 focus:ring-ringBlue/20 focus:outline-none min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-1.5 font-tamil">
                    {lang === 'ta' ? 'மின்னஞ்சல் முகவரி *' : 'Email Address *'}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'ta' ? 'உங்கள் மின்னஞ்சல்' : 'you@example.com'}
                    className="w-full px-4 py-3 rounded-xl bg-ice border border-mist text-ink text-sm sm:text-base focus:border-ringBlue focus:ring-2 focus:ring-ringBlue/20 focus:outline-none min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-1.5 font-tamil">
                    {lang === 'ta' ? 'உங்கள் செய்தி அல்லது வினா *' : 'Your Message or Question *'}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'ta'
                        ? 'உங்கள் மன உணர்வுகள் அல்லது நீங்கள் தெரிந்து கொள்ள விரும்பும் விவரங்களை எழுதுங்கள்...'
                        : 'Share your thoughts, questions, or how we might assist you...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ice border border-mist text-ink text-sm sm:text-base focus:border-ringBlue focus:ring-2 focus:ring-ringBlue/20 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-pill bg-navy hover:bg-ringBlue text-white font-medium text-base shadow-sm transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {status === 'submitting'
                      ? (lang === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Sending...')
                      : (lang === 'ta' ? 'செய்தி அனுப்ப' : 'Send Message')}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
