'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ArrowLeft, Heart } from 'lucide-react';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBFE] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#E8DFEF] shadow-xl text-center">
        <div className="w-14 h-14 rounded-full bg-[#7E6C9E]/10 text-[#7E6C9E] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-2xl font-serif font-medium text-[#2D2342] mb-3">
          மின்னஞ்சல் சந்தா ரத்து செய்யப்பட்டது
        </h1>
        <p className="text-sm text-[#5A4D6E] leading-relaxed mb-6 font-tamil font-light">
          {email ? (
            <>
              <strong className="text-[#2D2342]">{email}</strong> என்ற மின்னஞ்சல் முகவரி வகுப்பு அறிவிப்புப் பட்டியலில் இருந்து வெற்றிகரமாக நீக்கப்பட்டது.
            </>
          ) : (
            'வகுப்பு அறிவிப்புப் பட்டியலில் இருந்து உங்கள் மின்னஞ்சல் நீக்கப்பட்டது.'
          )}
        </p>

        <p className="text-xs text-[#7A6E91] mb-8 font-light">
          நீங்கள் எப்போது வேண்டுமானாலும் அமைதி வகுப்புகள் பற்றிய தகவல்களை எங்கள் இணையதளத்தில் நேரடியாகக் காணலாம்.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7E6C9E] hover:bg-[#624F85] text-white text-sm font-medium transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>முகப்புப் பக்கத்திற்குத் திரும்புக (Go to Home)</span>
        </Link>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBFE]" />}>
      <UnsubscribeContent />
    </Suspense>
  );
}
