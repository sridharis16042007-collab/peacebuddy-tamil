'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Clock, Tag, ArrowRight, Headphones } from 'lucide-react';

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
        ? 'ஓவர்திங்கிங் என்பது எதிர்காலத்தைப் பற்றிய பயம் அல்லது கடந்த காலத்தைப் பற்றிய வருத்தத்தால் ஏற்படுகிறது. இதை நிறுத்த "5-4-3-2-1" விழிப்புணர்வு முறை பெரிதும் உதவுகிறது: உங்கள் கண்களுக்குத் தெரியும் 5 பொருட்கள், தொடக்கூடிய 4 பொருட்கள், கேட்கும் 3 ஒலிகள், நுகரக்கூடிய 2 வாசனை, மற்றும் உங்கள் வாயில் உணரக்கூடிய 1 சுவை. இந்த எளிய تمرین உடனடியாக உங்கள் நரம்பு மண்டலத்தை அமைதி நிலைக்குக் கொண்டுவருகிறது.'
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
    <div className="pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-mist/40 via-ice to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
              {t.nav.resources}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-white border border-mist text-navy font-medium text-xs sm:text-sm mb-4">
            <BookOpen className="w-3.5 h-3.5 text-ringBlue" aria-hidden="true" />
            <span>{t.articles.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-navy tracking-tight mb-4 font-tamil">
            {t.articles.title}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.articles.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-pill text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
              filter === 'all'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-white text-ink hover:bg-mist border border-mist'
            }`}
          >
            {lang === 'ta' ? 'அனைத்தும்' : 'All Topics'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('clarity')}
            className={`px-4 py-2 rounded-pill text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
              filter === 'clarity'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-white text-ink hover:bg-mist border border-mist'
            }`}
          >
            {lang === 'ta' ? 'மனத்தெளிவு' : 'Clarity'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('sleep')}
            className={`px-4 py-2 rounded-pill text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
              filter === 'sleep'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-white text-ink hover:bg-mist border border-mist'
            }`}
          >
            {lang === 'ta' ? 'தூக்கம் & நலம்' : 'Sleep'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('habits')}
            className={`px-4 py-2 rounded-pill text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
              filter === 'habits'
                ? 'bg-navy text-white shadow-xs'
                : 'bg-white text-ink hover:bg-mist border border-mist'
            }`}
          >
            {lang === 'ta' ? 'கவன வாழ்க்கை' : 'Mindfulness'}
          </button>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              id={art.id}
              className="bg-white rounded-calm-lg p-6 sm:p-10 border border-mist shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ringBlue bg-mist/60 px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  <span>{art.tag}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 font-tamil">
                {art.title}
              </h2>
              <p className="text-base text-ink-secondary mb-4 leading-relaxed font-tamil">
                {art.excerpt}
              </p>

              {/* Full Text Dropdown / Reader */}
              <div className="p-5 rounded-2xl bg-ice border border-mist/80 text-ink text-sm sm:text-base leading-relaxed font-tamil whitespace-pre-line mt-4">
                {art.content}
              </div>
            </article>
          ))}
        </div>

        {/* Free Audio Guide Strip */}
        <div className="mt-14 bg-navy rounded-calm-lg p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-ringBlue flex items-center justify-center flex-shrink-0">
              <Headphones className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-xl font-tamil">
                {lang === 'ta' ? '10 நிமிட தமிழ் தியான ஆடியோ வழிகாட்டி' : '10-Minute Tamil Guided Meditation Audio'}
              </h3>
              <p className="text-sm text-softAccent mt-0.5">
                {lang === 'ta' ? '[AUDIO DOWNLOAD: அமைதியான தூக்கத்திற்கான தமிழ் வழிகாட்டல்]' : '[AUDIO DOWNLOAD: Tamil Sleep Reset Guide]'}
              </p>
            </div>
          </div>
          <Link
            href="/#newsletter"
            className="w-full sm:w-auto px-6 py-3 rounded-pill bg-white hover:bg-mist text-navy text-sm font-semibold text-center transition-colors min-h-[44px] flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>{lang === 'ta' ? 'இலவசமாகப் பெறுக' : 'Get Free Audio'}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
