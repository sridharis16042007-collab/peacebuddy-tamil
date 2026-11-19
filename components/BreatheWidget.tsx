'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Play, Pause, RotateCcw, Wind } from 'lucide-react';

type Phase = 'ready' | 'inhale' | 'hold' | 'exhale';

export default function BreatheWidget() {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>('ready');
  const [countdown, setCountdown] = useState(4);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 4-4-6 Breathing Cycle:
  // Inhale: 4s
  // Hold: 4s
  // Exhale: 6s
  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    let currentPhase: Phase = phase === 'ready' ? 'inhale' : phase;
    let secondsLeft = currentPhase === 'exhale' ? 6 : 4;
    
    setPhase(currentPhase);
    setCountdown(secondsLeft);

    timerRef.current = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft > 0) {
        setCountdown(secondsLeft);
      } else {
        // Transition to next phase
        if (currentPhase === 'inhale') {
          currentPhase = 'hold';
          secondsLeft = 4;
        } else if (currentPhase === 'hold') {
          currentPhase = 'exhale';
          secondsLeft = 6;
        } else {
          currentPhase = 'inhale';
          secondsLeft = 4;
        }
        setPhase(currentPhase);
        setCountdown(secondsLeft);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive]);

  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
      if (phase === 'ready') {
        setPhase('inhale');
        setCountdown(4);
      }
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('ready');
    setCountdown(4);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return t.breathe.inhale;
      case 'hold':
        return t.breathe.hold;
      case 'exhale':
        return t.breathe.exhale;
      default:
        return t.breathe.ready;
    }
  };

  const getCircleScale = () => {
    if (phase === 'inhale') return 'scale-125 border-ringBlue bg-mist/60 shadow-2xl shadow-ringBlue/20';
    if (phase === 'hold') return 'scale-125 border-softAccent bg-softAccent/20 shadow-xl shadow-softAccent/20';
    if (phase === 'exhale') return 'scale-90 border-navy/40 bg-ice shadow-sm';
    return 'scale-100 border-mist bg-white shadow-md';
  };

  const getTransitionDuration = () => {
    if (phase === 'inhale') return 'duration-[4000ms]';
    if (phase === 'hold') return 'duration-[4000ms]';
    if (phase === 'exhale') return 'duration-[6000ms]';
    return 'duration-500';
  };

  return (
    <section
      id="breathe-strip"
      aria-label="Interactive 4-4-6 Breathing Tool"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-ice to-mist/30 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Calm Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-mist text-navy font-medium text-xs sm:text-sm mb-4">
          <Wind className="w-4 h-4 text-ringBlue" aria-hidden="true" />
          <span>{t.breathe.badge}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-navy mb-3 tracking-tight font-tamil">
          {t.breathe.title}
        </h2>
        <p className="text-base sm:text-lg text-ink-secondary mb-10 max-w-xl mx-auto">
          {t.breathe.subtitle}
        </p>

        {/* Breathing Orb Display */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center my-6">
          {/* Subtle outer pulsing ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 border-dashed border-ringBlue/30 transition-transform ease-in-out ${getTransitionDuration()} ${
              isActive && phase === 'inhale' ? 'scale-110' : 'scale-100'
            }`}
          />

          {/* Interactive animated orb */}
          <div
            className={`w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 flex flex-col items-center justify-center p-6 text-center transition-all ease-in-out ${getTransitionDuration()} ${getCircleScale()} motion-reduce:transition-none`}
          >
            {/* Live screen reader announcement */}
            <div aria-live="polite" className="sr-only">
              {phase !== 'ready' ? `${getPhaseText()} ${countdown} ${t.breathe.secondsUnit}` : 'Breathing ready to start'}
            </div>

            <span className="text-sm sm:text-base font-medium text-ink-secondary tracking-wide mb-1 font-tamil">
              {getPhaseText()}
            </span>

            {phase !== 'ready' && (
              <span className="text-3xl sm:text-5xl font-bold text-navy tracking-tight font-english">
                {countdown}
                <span className="text-xs sm:text-sm font-normal text-ink-muted ml-1">
                  {t.breathe.secondsUnit}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-navy hover:bg-ringBlue text-white text-base font-medium shadow-sm transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            {isActive ? (
              <>
                <Pause className="w-5 h-5" aria-hidden="true" />
                <span>{t.breathe.pauseBtn}</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" aria-hidden="true" />
                <span>{t.breathe.startBtn}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-pill bg-white hover:bg-mist text-ink border border-mist text-base font-medium transition-all min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ringBlue"
          >
            <RotateCcw className="w-4 h-4 text-ink-muted" aria-hidden="true" />
            <span>{t.breathe.resetBtn}</span>
          </button>
        </div>

        {/* Rhythm Explanation Steps */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto mt-10 pt-6 border-t border-mist/60 text-xs sm:text-sm">
          <div className={`p-3 rounded-xl transition-colors ${phase === 'inhale' ? 'bg-mist text-navy font-medium' : 'text-ink-muted'}`}>
            <span className="block font-bold text-base text-navy">4s</span>
            <span>{t.breathe.inhale}</span>
          </div>
          <div className={`p-3 rounded-xl transition-colors ${phase === 'hold' ? 'bg-mist text-navy font-medium' : 'text-ink-muted'}`}>
            <span className="block font-bold text-base text-navy">4s</span>
            <span>{t.breathe.hold}</span>
          </div>
          <div className={`p-3 rounded-xl transition-colors ${phase === 'exhale' ? 'bg-mist text-navy font-medium' : 'text-ink-muted'}`}>
            <span className="block font-bold text-base text-navy">6s</span>
            <span>{t.breathe.exhale}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
