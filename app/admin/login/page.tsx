'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, Lock, Mail, ArrowRight, AlertCircle, KeyRound, Sparkles } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pinMode, setPinMode] = useState(false);
  const [pin, setPin] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
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
        throw new Error(data.error || 'தவறான மின்னஞ்சல் அல்லது கடவுச்சொல் (Invalid email or password)');
      }

      if (data.role !== 'admin') {
        throw new Error('அனுமதி மறுக்கப்பட்டது: நீங்கள் நிர்வாகி அல்ல (Access denied: Admin role required)');
      }

      // Also set PIN session storage for existing leads page compatibility
      sessionStorage.setItem('pb_admin_pin', '14416');

      router.push('/admin/classes');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Login error');
    } finally {
      setLoading(false);
    }
  };

  const handlePinLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '14416' || pin === 'peace2026') {
      sessionStorage.setItem('pb_admin_pin', pin);
      router.push('/admin/classes');
    } else {
      setError('தவறான PIN குறியீடு (Invalid PIN. Hint: 14416)');
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#1C0D24] via-[#2A1538] to-[#120718] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#241330]/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-[#FFE3A8]/20 shadow-2xl shadow-black/60">
        
        {/* Shield Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7B2CBF] to-[#9D4EDD] text-[#FFE3A8] flex items-center justify-center mx-auto mb-4 shadow-xl border border-white/20">
            <Shield className="w-8 h-8" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-1.5">
            Admin Portal Login
          </h1>
          <p className="text-xs text-[#E8DFEF]/80 font-tamil font-light">
            Peace Buddy நேரலை வகுப்பு & மேலாண்மை தளம்
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-2xl bg-[#E63946]/20 border border-[#E63946]/40 text-xs text-[#FFA4A4] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {!pinMode ? (
          /* Email + Password Admin Form */
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#FFE3A8] mb-1.5 font-tamil">
                நிர்வாகி மின்னஞ்சல் (Admin Email)
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@peacebuddytamil.com"
                  className="w-full px-4 py-3 pl-11 rounded-2xl bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:bg-white/15 focus:border-[#FFE3A8] focus:outline-none transition-colors"
                />
                <Mail className="w-4 h-4 text-[#FFE3A8]/70 absolute left-4 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#FFE3A8] mb-1.5 font-tamil">
                கடவுச்சொல் (Password)
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 pl-11 rounded-2xl bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:bg-white/15 focus:border-[#FFE3A8] focus:outline-none transition-colors"
                />
                <Lock className="w-4 h-4 text-[#FFE3A8]/70 absolute left-4 top-3.5 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] hover:from-[#6A1EB0] hover:to-[#883BCB] text-white text-sm font-medium shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 min-h-[48px] border border-white/20"
            >
              {loading ? (
                <span>சரிபார்க்கப்படுகிறது...</span>
              ) : (
                <>
                  <span>உள்நுழைக (Sign In as Admin)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Emergency PIN Login Form */
          <form onSubmit={handlePinLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#FFE3A8] mb-1.5 font-tamil">
                பாதுகாப்பு PIN (Emergency Admin PIN)
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="14416"
                  className="w-full px-4 py-3 pl-11 rounded-2xl bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:bg-white/15 focus:border-[#FFE3A8] focus:outline-none transition-colors tracking-widest text-center"
                />
                <KeyRound className="w-4 h-4 text-[#FFE3A8]/70 absolute left-4 top-3.5 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] hover:from-[#6A1EB0] hover:to-[#883BCB] text-white text-sm font-medium shadow-xl transition-all min-h-[48px] border border-white/20"
            >
              <span>PIN மூலம் உள்நுழைக</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Toggle Mode & Credentials Hint */}
        <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-[11px] text-[#E8DFEF]/70">
          <button
            type="button"
            onClick={() => {
              setPinMode(!pinMode);
              setError('');
            }}
            className="hover:text-[#FFE3A8] underline"
          >
            {pinMode ? 'Email + Password உள்நுழைவுக்கு மாறுக' : 'Emergency PIN மூலம் உள்நுழைய'}
          </button>

          <Link href="/" className="hover:text-white">
            ← Home
          </Link>
        </div>

        {/* Default credentials note for testing */}
        <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#E8DFEF]/60 text-center">
          Default Admin: <code className="text-[#FFE3A8]">admin@peacebuddytamil.com</code>
          <br />Password: <code className="text-[#FFE3A8]">PeaceAdmin@2026!</code> | PIN: <code className="text-[#FFE3A8]">14416</code>
        </div>

      </div>
    </div>
  );
}
