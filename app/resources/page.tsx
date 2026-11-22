'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function ResourcesPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const articles = [
    {
      id: 'article-1',
      tag: lang === 'ta' ? 'மனத்தெளிவு' : 'Clarity',
      category: 'clarity',
      title: lang === 'ta'
        ? 'ஓவர்திங்கிங்கை 5 நிமிடங்களில் கட்டுப்படுத்துவது எப்படி?'
        : 'How to Quiet Overthinking in 5 Minutes',
      readTime: lang === 'ta' ? '4 நிமிட வாசிப்பு' : '4 min read',
      excerpt: lang === 'ta'
        ? 'எண்ணங்கள் சுழன்று கொண்டே இருக்கும்போது, நமது கவனம் உடலையும் மூச்சையும் நோக்கி திரும்புவது மட்டுமே அந்த சுழற்சியை உடைக்கும்.'
        : 'When thoughts cycle uncontrollably, grounding your sensory attention into the physical breath is the single most effective way to break the spiral.',
      content: lang === 'ta'
        ? 'ஓவர்திங்கிங் என்பது எதிர்காலத்தைப் பற்றிய பயம் அல்லது கடந்த காலத்தைப் பற்றிய வருத்தத்தால் ஏற்படுகிறது. இதை நிறுத்த "5-4-3-2-1" விழிப்புணர்வு முறை பெரிதும் உதவுகிறது: உங்கள் கண்களுக்குத் தெரியும் 5 பொருட்கள், தொடக்கூடிய 4 பொருட்கள், கேட்கும் 3 ஒலிகள், நுகரக்கூடிய 2 வாசனை, மற்றும் உங்கள் வாயில் உணரக்கூடிய 1 சுவை. இந்த எளிய பயிற்சி உடனடியாக உங்கள் நரம்பு மண்டலத்தை அமைதி நிலைக்குக் கொண்டுவருகிறது.'
        : 'Overthinking is often the mind trying to solve uncertainties in the future or analyze past events. The 5-4-3-2-1 grounding technique immediately interrupts this loop by anchoring into your physical senses.'
    },
    {
      id: 'article-2',
      tag: lang === 'ta' ? 'தூக்கம் & நலம்' : 'Sleep',
      category: 'sleep',
      title: lang === 'ta'
        ? 'அமைதியான இரவுத் தூக்கத்திற்கு 3 எளிய பழக்கங்கள்'
        : '3 Evening Rituals for Restful, Deep Sleep',
      readTime: lang === 'ta' ? '5 நிமிட வாசிப்பு' : '5 min read',
      excerpt: lang === 'ta'
        ? 'தூங்குவதற்கு ஒரு மணி நேரத்திற்கு முன் மொபைலைத் தள்ளி வைப்பதும், லேசான மூச்சுப் பயிற்சியும் தூக்கத்தின் தரத்தை இரட்டிப்பாக்கும்.'
        : 'Setting aside digital screens an hour before bed and doing gentle somatic breathing doubles sleep quality naturally.',
      content: lang === 'ta'
        ? '1. படுக்கைக்குச் செல்வதற்கு 45 நிமிடங்களுக்கு முன் திரை ஒளியை நிறுத்துங்கள்.\n2. ஒரு நோட்டுப் புத்தகத்தில் நாளை செய்ய வேண்டிய 3 பணிகளை மட்டும் எழுதி வைத்து மனதின் சுமையைக் குறையுங்கள்.\n3. படுக்கையில் படுத்தபடி 4-4-6 மூச்சுப் பயிற்சியை 5 சுற்றுகள் செய்யுங்கள்.'
        : '1. Disconnect from screens 45 minutes before sleep.\n2. Journal the top 3 priorities for tomorrow so your mind stops holding onto them.\n3. Complete 5 slow cycles of 4-4-6 breathing in bed.'
    },
    {
      id: 'article-3',
      tag: lang === 'ta' ? 'கவன வாழ்க்கை' : 'Mindfulness',
      category: 'habits',
      title: lang === 'ta'
        ? 'அன்றாட வேலைகளுக்கு நடுவே ஒரு நிமிட அமைதி இடைவேளை'
        : 'The One-Minute Calm Pause During Busy Days',
      readTime: lang === 'ta' ? '3 நிமிட வாசிப்பு' : '3 min read',
      excerpt: lang === 'ta'
        ? 'பணி அழுத்தத்தின் போது நாம் மூச்சை மேலோட்டமாக விடுகிறோம். ஒரு நிமிடம் கண்களை மூடி நிதானிப்பது முழு நாளின் போக்கையும் மாற்றும்.'
        : 'Under stress, our breathing becomes shallow without us noticing. Taking a conscious 60-second pause resets cognitive stamina.',
      content: lang === 'ta'
        ? 'வேலை சூழலில் நீங்கள் உட்கார்ந்திருக்கும் நாற்காலியிலேயே, இரு பாதங்களையும் தரையில் சமமாக வைத்து, 3 ஆழ்ந்த பெருமூச்சுகளை மெதுவாக விடுங்கள். இது உங்கள் மூளையின் சண்டை-தப்பிக்கும் (Fight or Flight) நரம்பு அழுத்தத்தை தணிக்கிறது.'
        : 'Wherever you sit, plant both feet firmly on the floor and take 3 deep, audible belly breaths. It downregulates the sympathetic nervous system instantly.'
    },
  ];

  const filteredArticles = filter === 'all'
    ? articles
    : articles.filter(a => a.category === filter);

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
              {t.nav.resources}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#0F2742] font-semibold text-[12px] uppercase tracking-[0.14em] mb-4 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#8B5E83]" aria-hidden="true" />
            <span>{lang === 'ta' ? 'அமைதி வழிகாட்டல்கள்' : 'MINDFUL PERSPECTIVES'}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-serif font-medium text-[#0F2742] leading-[1.08] tracking-tight mb-4">
            {lang === 'ta' ? (
              <span className="font-tamil-serif">
                கட்டுரைகள் & வழிகாட்டிகள்
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (தினசரி அமைதிப் பயிற்சிகள்)
                </span>
              </span>
            ) : (
              <>
                Mindful Guides & Resources
                <br />
                <span className="italic font-serif text-[#8B5E83] text-[28px] sm:text-[44px]">
                  (Calm Daily Practices)
                </span>
              </>
            )}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#4A5A6A] leading-[1.7] max-w-2xl mx-auto font-normal">
            {lang === 'ta'
              ? 'ஓவர்திங்கிங் நீக்கும் வழிகள், ஆழ்ந்த உறக்கம் மற்றும் விழிப்புணர்வு வாழ்விற்கான நடைமுறை கட்டுரைகள்.'
              : 'Practical guides to quiet overthinking, restore restorative sleep, and weave mindfulness into everyday living.'}
          </p>
        </div>

        {/* Category Filters: Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
          {['all', 'clarity', 'sleep', 'habits'].map((cat) => {
            const labels: Record<string, { ta: string; en: string }> = {
              all: { ta: 'அனைத்தும்', en: 'All Topics' },
              clarity: { ta: 'மனத்தெளிவு', en: 'Clarity' },
              sleep: { ta: 'தூக்கம் & நலம்', en: 'Sleep' },
              habits: { ta: 'கவன வாழ்க்கை', en: 'Mindfulness' },
            };
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-[14px] font-medium transition-all ${
                  isSelected
                    ? 'bg-[#0F2742] text-white shadow-sm'
                    : 'bg-white/80 text-[#4A5A6A] hover:text-[#0F2742] border border-white/90'
                }`}
              >
                {lang === 'ta' ? labels[cat].ta : labels[cat].en}
              </button>
            );
          })}
        </div>

        {/* Articles List in Frosted Cards (28px Radius) */}
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              id={art.id}
              className="p-8 sm:p-10 rounded-[28px] bg-white/70 backdrop-blur-md border border-white/85 shadow-[0_20px_60px_rgba(15,39,66,0.08)] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-[0.14em] bg-[#F4D9DF] text-[#8B5E83]">
                  {art.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#4A5A6A]">
                  <Clock className="w-3.5 h-3.5 text-[#8B5E83]" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <h2 className="text-[24px] sm:text-[28px] font-serif font-medium text-[#0F2742] mb-3 leading-snug">
                {art.title}
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#4A5A6A] leading-[1.75] mb-6">
                {art.excerpt}
              </p>

              <div className="pt-5 border-t border-[#0F2742]/10 whitespace-pre-line text-[14px] sm:text-[15px] text-[#4A5A6A] leading-[1.8] bg-white/50 p-6 rounded-[20px] border border-white/80">
                {art.content}
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
