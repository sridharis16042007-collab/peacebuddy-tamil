'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { Lock, Mail, User, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

function SignupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/classes';
  const { lang } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError(lang === 'ta' ? 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்' : 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Registration failed');
      }

      router.push(redirectUrl);
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#FDFBFE] via-[#F8F2FA] to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-[#E8DFEF] shadow-2xl shadow-[#7E6C9E]/10">
        
        {/* Top Eyebrow */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EFF7] border border-[#E8DFEF] text-[#7E6C9E] font-medium text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ta' ? 'புதிய பதிவு' : 'Create Free Account'}</span>
          </div>

          <h1 className="text-3xl font-serif font-light text-[#2D2342] mb-2">
            {lang === 'ta' ? 'கணக்கை உருவாக்குங்கள்' : 'Join Peace Buddy'}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A4D6E] font-tamil font-light">
            {lang === 'ta'
              ? 'நேரலை வகுப்புகள் மற்றும் நினைவூட்டல் மின்னஞ்சல்களைப் பெற இலவசமாகப் பதிவு செய்யுங்கள்.'
              : 'Sign up to view Google Meet links, join live classes, and receive email schedules.'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] text-xs text-[#BE123C] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#2D2342] mb-1.5 font-tamil">
              {lang === 'ta' ? 'உங்கள் பெயர் (Full Name)' : 'Full Name'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sridhar"
                className="w-full px-4 py-3 pl-11 rounded-2xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:border-[#7E6C9E] focus:outline-none transition-colors"
              />
              <User className="w-4 h-4 text-[#7A6E91] absolute left-4 top-3.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#2D2342] mb-1.5 font-tamil">
              {lang === 'ta' ? 'மின்னஞ்சல் (Email Address)' : 'Email Address'}
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full px-4 py-3 pl-11 rounded-2xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:border-[#7E6C9E] focus:outline-none transition-colors"
              />
              <Mail className="w-4 h-4 text-[#7A6E91] absolute left-4 top-3.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#2D2342] mb-1.5 font-tamil">
              {lang === 'ta' ? 'கடவுச்சொல் (Password - min 6 chars)' : 'Password (min 6 characters)'}
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 pl-11 rounded-2xl bg-[#FBF8FC] border border-[#E8DFEF] text-sm text-[#2D2342] focus:bg-white focus:border-[#7E6C9E] focus:outline-none transition-colors"
              />
              <Lock className="w-4 h-4 text-[#7A6E91] absolute left-4 top-3.5 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50 min-h-[48px]"
          >
            {loading ? (
              <span>{lang === 'ta' ? 'பதிவாகிறது...' : 'Creating Account...'}</span>
            ) : (
              <>
                <span>{lang === 'ta' ? 'கணக்கை உருவாக்குங்கள்' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#E8DFEF] text-center text-xs text-[#5A4D6E]">
          <span>{lang === 'ta' ? 'ஏற்கனவே கணக்கு உள்ளதா?' : 'Already have an account?'}{' '}</span>
          <Link
            href={`/login?redirect=${encodeURIComponent(redirectUrl)}`}
            className="text-[#7E6C9E] font-medium hover:underline"
          >
            {lang === 'ta' ? 'உள்நுழைக (Sign In)' : 'Sign In'}
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBFE]" />}>
      <SignupContent />
    </Suspense>
  );
}
