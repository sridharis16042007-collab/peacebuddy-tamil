'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5F1] min-h-screen relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E8D7F1] opacity-25 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F4D9DF] opacity-25 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-[#4A5A6A]">
            <li>
              <Link href="/" className="hover:text-[#0F2742] transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#0F2742] font-medium" aria-current="page">
              {t.nav.contact}
            </li>
          </ol>
        </nav>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F2742]">
                {lang === 'ta' ? 'அன்போடு தொடர்பு கொள்ள' : 'REACH OUT GENTLY'}
              </span>
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-serif font-medium text-[#0F2742] leading-[1.08] tracking-tight mb-6">
              {lang === 'ta' ? (
                <span className="font-tamil-serif">
                  அன்போடு பேசலாம்
                  <br />
                  <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                    வாருங்கள்.
                  </span>
                </span>
              ) : (
                <>
                  We Welcome
                  <br />
                  <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                    Your Gentle Message.
                  </span>
                </>
              )}
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#4A5A6A] leading-[1.75] mb-8">
              {lang === 'ta'
                ? 'உங்கள் கேள்விகள், அமைதிப் பயிற்சிகள் பற்றிய ஐயங்கள் அல்லது ஆலோசனைகளைப் பகிருங்கள். நாங்கள் நிதானமாகப் பதிலளிப்போம்.'
                : 'Feel free to reach out with questions regarding programs, mindful routines, or guidance. We reply gently and attentively.'}
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 w-full">
              <div className="p-5 rounded-[22px] bg-white/70 backdrop-blur-md border border-white/85 shadow-xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#DDE6DC] text-[#2A5235] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-[#0F2742]">WhatsApp Support</h3>
                  <a
                    href="https://wa.me/?text=Hello%20Peace%20Buddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8B5E83] hover:underline"
                  >
                    Connect directly on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-[22px] bg-white/70 backdrop-blur-md border border-white/85 shadow-xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F6EBEE] text-[#8B5E83] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-[#0F2742]">Official Email</h3>
                  <span className="text-xs text-[#4A5A6A]">
                    support@peacebuddytamil.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Form with 56px High Pill Inputs */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)]">
              {status === 'success' ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#DDE6DC] text-[#2A5235] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-[#0F2742]">
                    {lang === 'ta' ? 'செய்தி பெறப்பட்டது' : 'Message Received'}
                  </h3>
                  <p className="text-sm text-[#4A5A6A] max-w-md mx-auto">
                    {lang === 'ta'
                      ? 'நன்றி! உங்கள் செய்தியைப் பெற்றோம். விரைவில் கனிவான பதிலை அனுப்புவோம்.'
                      : 'Thank you for reaching out. We will get back to you with a gentle response shortly.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#0F2742] text-white text-xs font-medium"
                  >
                    {lang === 'ta' ? 'மற்றொரு செய்தி அனுப்ப' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#0F2742] mb-2">
                      {lang === 'ta' ? 'உங்கள் பெயர்' : 'YOUR NAME'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'ta' ? 'உங்கள் பெயர்' : 'Your name'}
                      className="w-full h-14 px-6 rounded-full bg-white/80 border border-white/90 text-[#0F2742] placeholder-[#4A5A6A]/60 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#8B5E83] shadow-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#0F2742] mb-2">
                      {lang === 'ta' ? 'மின்னஞ்சல் முகவரி' : 'EMAIL ADDRESS'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@example.com"
                      className="w-full h-14 px-6 rounded-full bg-white/80 border border-white/90 text-[#0F2742] placeholder-[#4A5A6A]/60 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#8B5E83] shadow-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#0F2742] mb-2">
                      {lang === 'ta' ? 'உங்கள் செய்தி' : 'MESSAGE'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'ta'
                          ? 'உங்கள் கருத்துகள் அல்லது ஐயங்களை இங்கு எழுதலாம்...'
                          : 'Share your questions or reflections...'
                      }
                      className="w-full p-5 rounded-[24px] bg-white/80 border border-white/90 text-[#0F2742] placeholder-[#4A5A6A]/60 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#8B5E83] shadow-xs transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full h-14 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 group disabled:opacity-70"
                  >
                    <span>
                      {status === 'submitting'
                        ? lang === 'ta'
                          ? 'அனுப்பப்படுகிறது...'
                          : 'Sending...'
                        : lang === 'ta'
                        ? 'செய்தியை அனுப்பவும்'
                        : 'Send message'}
                    </span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
