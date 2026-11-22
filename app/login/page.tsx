'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { Lock, Mail, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/classes';
  const { lang } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Login failed. Please check your credentials.');
      }

      if (data.role === 'admin' && redirectUrl === '/classes') {
        router.push('/admin/classes');
      } else {
        router.push(redirectUrl);
      }
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8F5F1] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-[#E8D7F1] opacity-30 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F4D9DF] opacity-30 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-md w-full bg-white/70 backdrop-blur-md rounded-[28px] p-8 sm:p-10 border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)]">
        
        {/* Top Eyebrow */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-white/90 text-[#0F2742] font-semibold text-[12px] uppercase tracking-[0.14em] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5E83]" />
            <span>{lang === 'ta' ? 'அமைதி கணக்கு' : 'PEACE BUDDY ACCOUNT'}</span>
          </div>

          <h1 className="text-[32px] sm:text-[36px] font-serif font-medium text-[#0F2742] mb-2 leading-tight">
            {lang === 'ta' ? 'உள்நுழைக' : 'Sign In'}
          </h1>
          <p className="text-xs sm:text-[14px] text-[#4A5A6A]">
            {lang === 'ta'
              ? 'நேரலை வகுப்புகள் மற்றும் அமைதி பயிற்சிகளை அணுக உள்நுழையவும்.'
              : 'Sign in to access your live classes, Google Meet links, and mindful sessions.'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-[18px] bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-[0.12em] font-semibold text-[#0F2742] mb-2">
              {lang === 'ta' ? 'மின்னஞ்சல்' : 'EMAIL ADDRESS'}
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full h-13 px-4 pl-11 rounded-full bg-white/80 border border-white/90 text-sm text-[#0F2742] focus:outline-none focus:ring-2 focus:ring-[#8B5E83] shadow-xs transition-all"
              />
              <Mail className="w-4 h-4 text-[#8B5E83] absolute left-4 top-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.12em] font-semibold text-[#0F2742] mb-2">
              {lang === 'ta' ? 'கடவுச்சொல்' : 'PASSWORD'}
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-13 px-4 pl-11 rounded-full bg-white/80 border border-white/90 text-sm text-[#0F2742] focus:outline-none focus:ring-2 focus:ring-[#8B5E83] shadow-xs transition-all"
              />
              <Lock className="w-4 h-4 text-[#8B5E83] absolute left-4 top-4 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 h-13 px-6 rounded-full bg-[#0F2742] hover:bg-[#1E3B5C] text-white text-[15px] font-medium shadow-md transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <span>{lang === 'ta' ? 'உள்நுழைகிறது...' : 'Signing in...'}</span>
            ) : (
              <>
                <span>{lang === 'ta' ? 'உள்நுழைக' : 'Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#0F2742]/10 text-center text-xs text-[#4A5A6A]">
          <span>{lang === 'ta' ? 'கணக்கு இல்லையா?' : "Don't have an account?"}{' '}</span>
          <Link
            href={`/signup?redirect=${encodeURIComponent(redirectUrl)}`}
            className="text-[#8B5E83] font-medium hover:underline"
          >
            {lang === 'ta' ? 'இப்போதே பதிவு செய்க (Sign Up)' : 'Sign Up now'}
          </Link>
        </div>

        {/* Admin Login Shortcut */}
        <div className="mt-4 text-center">
          <Link
            href="/admin/login"
            className="text-[11px] text-[#4A5A6A] hover:text-[#8B5E83] transition-colors"
          >
            {lang === 'ta' ? 'நிர்வாகி உள்நுழைவு (Admin Portal)' : 'Admin Portal Login'}
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F5F1]" />}>
      <LoginContent />
    </Suspense>
  );
}
