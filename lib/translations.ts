export type Language = 'ta' | 'en';

export interface TranslationContent {
  nav: {
    home: string;
    programs: string;
    about: string;
    resources: string;
    faq: string;
    contact: string;
    privacy: string;
    startCta: string;
    langToggle: string;
    skipToContent: string;
  };
  hero: {
    tagline: string;
    h1: string;
    englishSubline: string;
    tamilDescription: string;
    primaryCta: string;
    secondaryLink: string;
    pills: {
      nature: { title: string; desc: string };
      mindful: { title: string; desc: string };
      community: { title: string; desc: string };
      lasting: { title: string; desc: string };
    };
  };
  breathe: {
    badge: string;
    title: string;
    subtitle: string;
    inhale: string;
    hold: string;
    exhale: string;
    ready: string;
    startBtn: string;
    pauseBtn: string;
    resetBtn: string;
    secondsUnit: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    card1: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    card2: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    card3: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    };
  };
  founder: {
    badge: string;
    title: string;
    story: string;
    role: string;
    credentials: string;
  };
  newsletter: {
    badge: string;
    title: string;
    desc: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    button: string;
    buttonSubmitting: string;
    successMessage: string;
    privacyNote: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    card1: { text: string; author: string; location: string };
    card2: { text: string; author: string; location: string };
    card3: { text: string; author: string; location: string };
  };
  articles: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    item1: { title: string; excerpt: string; readTime: string; tag: string };
    item2: { title: string; excerpt: string; readTime: string; tag: string };
    item3: { title: string; excerpt: string; readTime: string; tag: string };
  };
  cta: {
    title: string;
    desc: string;
    primaryBtn: string;
    whatsappBtn: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    helplineTitle: string;
    helplineText: string;
    helplineNumber: string;
    disclaimer: string;
    copyright: string;
  };
  whatsapp: {
    tooltip: string;
    ariaLabel: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  ta: {
    nav: {
      home: "முகப்பு",
      programs: "பயிற்சிகள்",
      about: "எங்களைப் பற்றி",
      resources: "வளங்கள் & கட்டுரைகள்",
      faq: "FAQ",
      contact: "தொடர்புக்கு",
      privacy: "தனியுரிமைக் கொள்கை",
      startCta: "அமைதிப் பயணம்",
      langToggle: "English",
      skipToContent: "முக்கிய உள்ளடக்கத்திற்குச் செல்லவும்",
    },
    hero: {
      tagline: "மன அமைதிக்கான உங்களின் தமிழ் புகலிடம்",
      h1: "அமைதியான மனம். தெளிவான சிந்தனை. நிம்மதியான வாழ்வு.",
      englishSubline: "A gentle Tamil space for peace of mind, mindful living and emotional wellbeing.",
      tamilDescription: "அளவுக்கு அதிகமான சிந்தனைகள், மன அழுத்தம் மற்றும் அவசர ஓட்டத்திலிருந்து விடுபட்டு, நிதானமான மற்றும் மகிழ்ச்சியான வாழ்க்கையை உருவாக்க பீஸ் படி உங்களுக்குத் துணைநிற்கிறது.",
      primaryCta: "உங்கள் அமைதிப் பயணத்தைத் தொடங்குங்கள்",
      secondaryLink: "மேலும் அறிய",
      pills: {
        nature: { title: "அமைதியான அணுகுமுறை", desc: "இயற்கையான, நிதானமான வாழ்வியல் வழிகள்." },
        mindful: { title: "கவனமுள்ள வாழ்க்கை", desc: "அன்றாடப் பணிகளில் முழு விழிப்புணர்வு." },
        community: { title: "அன்பான ஆதரவு", desc: "தீர்ப்புகளற்ற பாதுகாப்பான தமிழ் தளம்." },
        lasting: { title: "நீடித்த மன அமைதி", desc: "ஆழமான, நிலையான உணர்வு தெளிவு." },
      },
    },
    breathe: {
      badge: "உடனடி அமைதி பயிற்சி",
      title: "ஒரு நிமிடம்... மூச்சை ஆழமாக கவனியுங்கள்",
      subtitle: "4-4-6 முறை: 4 நொடி உள்வாங்குங்கள், 4 நொடி நிறுத்துங்கள், 6 நொடி சீராக வெளிவிடுங்கள்.",
      inhale: "உள்வாங்குங்கள்...",
      hold: "நிறுத்துங்கள்...",
      exhale: "மெதுவாக வெளிவிடுங்கள்...",
      ready: "தொடங்க கிளிக் செய்யவும்",
      startBtn: "பயிற்சியைத் தொடங்கு",
      pauseBtn: "இடைநிறுத்து",
      resetBtn: "மீண்டும் அமை",
      secondsUnit: "நொடி",
    },
    services: {
      badge: "பீஸ் படி எவ்வாறு உதவுகிறது",
      title: "உங்கள் மன நலனுக்கான மூன்று முக்கிய வழிகள்",
      subtitle: "எந்தவித அழுத்தமும் இல்லாமல், உங்கள் சொந்த வேகத்தில் நீங்கள் பழகக்கூடிய எளிமையான வழிகாட்டல்.",
      card1: {
        tag: "சேவை 1",
        title: "[SERVICE 1: எளிய தமிழ் தியான வழிகாட்டல்]",
        desc: "அன்றாடம் 10 நிமிடங்கள் உங்கள் மனதை அமைதிப்படுத்த உதவும் ஆரம்பநிலை தியான வழிகாட்டல் மற்றும் ஆடியோ பயிற்சிகள்.",
        bullets: [
          "ஆரம்பநிலையாளர்களுக்கான எளிய தமிழ் வழிகாட்டல்",
          "தூக்கமின்மை மற்றும் பதற்றத்தைத் தணிக்கும் ஆடியோ",
          "தினசரி 10 நிமிட அமைதி இடைவேளை"
        ]
      },
      card2: {
        tag: "சேவை 2",
        title: "[SERVICE 2: ஓவர்திங்கிங் மற்றும் உணர்வு தெளிவு]",
        desc: "எண்ணங்களின் சுழற்சியிலிருந்து விடுபட்டு, உணர்வுகளைப் புரிந்து கொண்டு மனத்தெளிவு பெறுவதற்கான நடைமுறை நுட்பங்கள்.",
        bullets: [
          "அளவுக்கு அதிகமான சிந்தனையை நிறுத்தும் பயிற்சிகள்",
          "எழுத்து வழியிலான உணர்வு வெளிப்பாடு (Journaling)",
          "மன அழுத்த தருணங்களில் உடனடி நிதானம்"
        ]
      },
      card3: {
        tag: "சேவை 3",
        title: "[SERVICE 3: நிம்மதியான அன்றாட வாழ்வியல் பழக்கங்கள்]",
        desc: "அவசரமில்லாத காலை நேரங்கள், அமைதியான இரவுகள் மற்றும் வேலை-வாழ்க்கை சமநிலையை உருவாக்கும் வழிமுறைகள்.",
        bullets: [
          "அமைதியான காலை வழக்கம் (Morning Calm Routine)",
          "நிம்மதியான இரவுத் தூக்க பழக்கங்கள்",
          "டிஜிட்டல் சோர்வைக் குறைக்கும் வழிகள்"
        ]
      },
    },
    founder: {
      badge: "நிறுவனரின் வார்த்தைகள்",
      title: "ஒரு எளிய தொடக்கம், உண்மையான நோக்கம்",
      story: "வாழ்க்கையின் அதிவேக ஓட்டத்தில் தீவிர மன அழுத்தத்தையும் ஓவர்திங்கிங்கையும் நானே அனுபவித்தேன். பல ஆங்கில புத்தகங்கள் இருந்தாலும், என் சொந்த தாய்மொழியான தமிழில் மன அமைதிக்கான எளிய, தெளிவான, அழுத்தமற்ற ஒரு இடம் இல்லையே என்ற ஏக்கமே 'பீஸ் படி' உருவாகக் காரணம். இது மருத்துவமனை அல்ல; தீர்ப்புகளற்ற, உங்கள் மனதிற்கு இளைப்பாறுதல் தரும் ஒரு எளிய நண்பன். வாருங்கள், மெதுவாகப் பயணிப்போம்.",
      role: "நிறுவனர் & வழிகாட்டி",
      credentials: "[FOUNDER NAME] — Peace Buddy Tamil",
    },
    newsletter: {
      badge: "இலவச அமைதி வழிகாட்டி",
      title: "அமைதியான வாராந்திர வழிகாட்டலை உங்கள் இமெயிலில் பெறுங்கள்",
      desc: "எந்த விளம்பரங்களும் இல்லை, தொல்லை தரும் செய்திகள் இல்லை. வாரத்திற்கு ஒரு முறை மன அமைதிக்கான சிறிய வழிகாட்டல் மற்றும் தியானக் குறிப்புகள் மட்டுமே.",
      namePlaceholder: "உங்கள் பெயர் (விரும்பினால்)",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
      button: "இலவச வழிகாட்டலைப் பெறுங்கள்",
      buttonSubmitting: "பதிவு செய்யப்படுகிறது...",
      successMessage: "நன்றி! உங்கள் அமைதி வழிகாட்டி விரைவில் உங்கள் மின்னஞ்சலுக்கு வந்து சேரும்.",
      privacyNote: "உங்கள் மின்னஞ்சல் முழுமையாகப் பாதுகாக்கப்படுகிறது. எந்த நேரத்திலும் விலகிக் கொள்ளலாம்.",
    },
    testimonials: {
      badge: "பயனாளர்களின் அனுபவங்கள்",
      title: "உண்மையான அமைதி அனுபவங்கள்",
      subtitle: "எங்கள் வழிகாட்டலைப் பயன்படுத்தியவர்களின் நிதானமான மற்றும் மாற்றமளிக்கும் பகிர்வுகள்.",
      disclaimer: "*உண்மையான பின்னூட்டங்கள் பெறப்பட்டவுடன் இங்கு மாற்றப்படும்.",
      card1: {
        text: "[REAL TESTIMONIAL 1: 'பீஸ் படியின் 4-4-6 மூச்சுப் பயிற்சியும் தமிழ் தியான வழிகாட்டலும் எனது அலுவலக மன அழுத்தத்தை வெகுவாகக் குறைத்துள்ளது. இரவு நிம்மதியாகத் தூங்க முடிகிறது.']",
        author: "[CLIENT NAME 1]",
        location: "சென்னை"
      },
      card2: {
        text: "[REAL TESTIMONIAL 2: 'ஓவர்திங்கிங்கால் தவித்த எனக்கு தாய்மொழியில் கிடைத்த எளிய விளக்கங்கள் மிகப்பெரிய மன விடுதலையைத் தந்தன. எந்த படபடப்பும் இல்லாத நிதானமான தளம்.']",
        author: "[CLIENT NAME 2]",
        location: "கோயம்புத்தூர்"
      },
      card3: {
        text: "[REAL TESTIMONIAL 3: 'தினசரி காலையில் 10 நிமிடம் அமைதி காப்பது என் வாழ்வின் முக்கியமான பழக்கமாக மாறியுள்ளது. பீஸ் படிக்கு என் மனமார்ந்த நன்றிகள்.']",
        author: "[CLIENT NAME 3]",
        location: "மதுரை"
      },
    },
    articles: {
      badge: "அமைதி கட்டுரைகள் & வழிகாட்டிகள்",
      title: "தெளிவான மனத்திற்கான சமீபத்திய பதிவுகள்",
      subtitle: "உங்கள் அன்றாட வாழ்க்கைக்குத் தேவையான எளிய வாசிப்பு மற்றும் நடைமுறை பயிற்சிகள்.",
      readMore: "முழுமையாகப் படிக்க →",
      item1: {
        title: "ஓவர்திங்கிங்கை 5 நிமிடங்களில் கட்டுப்படுத்துவது எப்படி?",
        excerpt: "எண்ணங்கள் கட்டுக்கடங்காமல் ஓடும்போது மூச்சு மற்றும் எளிய கவனக் குவிப்பு மூலம் மனதை மீட்டெடுக்கும் நுட்பம்.",
        readTime: "4 நிமிட வாசிப்பு",
        tag: "மனத்தெளிவு"
      },
      item2: {
        title: "அமைதியான இரவுத் தூக்கத்திற்கு 3 எளிய பழக்கங்கள்",
        excerpt: "மொபைல் திரையைத் தள்ளிவைத்து, மனதை அமைதிப்படுத்தி ஆழ்ந்த தூக்கத்தைப் பெறுவதற்கான மாலை நேர வழக்கம்.",
        readTime: "5 நிமிட வாசிப்பு",
        tag: "தூக்கம் & நலம்"
      },
      item3: {
        title: "அன்றாட வேலைகளுக்கு நடுவே ஒரு நிமிட அமைதி இடைவேளை",
        excerpt: "எந்தவொரு இடத்திலும், எவர் முன்னிலையிலும் நீங்கள் எளிதாக செய்யக்கூடிய விழிப்புணர்வுப் பயிற்சி.",
        readTime: "3 நிமிட வாசிப்பு",
        tag: "கவன வாழ்க்கை"
      },
    },
    cta: {
      title: "இன்றே உங்கள் அமைதிப் பயணத்தைத் தொடங்குங்கள்",
      desc: "மன அமைதி என்பது எப்போதோ கிடைப்பதல்ல; அது ஒவ்வொரு நாளும் நாம் தேர்ந்தெடுக்கும் நிதானமான பழக்கம்.",
      primaryBtn: "இலவச வழிகாட்டலைப் பெற",
      whatsappBtn: "வாட்ஸ்அப் வழியே பேச [CLIENT WHATSAPP]",
    },
    footer: {
      tagline: "மன அமைதி மற்றும் உணர்வு நலம் காணும் உங்களின் தமிழ் புகலிடம்.",
      quickLinks: "பக்கங்கள்",
      legal: "சட்ட விவகாரங்கள்",
      helplineTitle: "அவசர மன நல உதவி எண்கள் (Emergency Mental Health Support)",
      helplineText: "பீஸ் படி பொதுவான மன நல வழிகாட்டலை மட்டுமே வழங்குகிறது; இது மருத்துவ சிகிச்சை அல்ல. உங்களுக்கு தீவிர மன உளைச்சல் அல்லது அவசர உதவி தேவைப்பட்டால்:",
      helplineNumber: "Tele-MANAS (மத்திய அரசு 24/7 இலவச உதவி எண்): 14416 / 1800-891-4416 | வந்தேவாலா அறக்கட்டளை: +91 9999 666 555",
      disclaimer: "மறுப்புரை: Peace Buddy offers general wellbeing support and is not a substitute for medical or mental-health care. If you are in crisis, contact local emergency services or a helpline.",
      copyright: "© 2026 Peace Buddy Tamil. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    whatsapp: {
      tooltip: "வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ள",
      ariaLabel: "Peace Buddy WhatsApp உடனடி உதவி",
    }
  },
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      about: "About",
      resources: "Resources",
      faq: "FAQ",
      contact: "Contact",
      privacy: "Privacy Policy",
      startCta: "Start Journey",
      langToggle: "தமிழ்",
      skipToContent: "Skip to main content",
    },
    hero: {
      tagline: "Your Tamil Sanctuary for Inner Peace",
      h1: "Find Balance. Live with Intention.",
      englishSubline: "A gentle Tamil space for peace of mind, mindful living and emotional wellbeing.",
      tamilDescription: "Designed with calmness at its core, Peace Buddy helps you release overthinking, embrace tranquility, and create peaceful mindful moments in everyday life.",
      primaryCta: "Start your peace journey",
      secondaryLink: "Learn more",
      pills: {
        nature: { title: "Calm Approach", desc: "Gentle practices rooted in natural peace." },
        mindful: { title: "Mindful Living", desc: "Presence and focus in everyday routines." },
        community: { title: "Safe Space", desc: "A warm, judgment-free Tamil sanctuary." },
        lasting: { title: "Lasting Calm", desc: "Deep, sustainable emotional clarity." },
      },
    },
    breathe: {
      badge: "Instant Calming Tool",
      title: "Take a Moment. Breathe with Intention.",
      subtitle: "The 4-4-6 Method: Inhale for 4s, Hold for 4s, and Exhale smoothly for 6s.",
      inhale: "Inhale slowly...",
      hold: "Hold gently...",
      exhale: "Exhale completely...",
      ready: "Click to begin",
      startBtn: "Start Breathing",
      pauseBtn: "Pause",
      resetBtn: "Reset",
      secondsUnit: "s",
    },
    services: {
      badge: "How Peace Buddy Helps",
      title: "Three Gentle Pathways to Emotional Balance",
      subtitle: "Simple, pressure-free practices tailored for your personal pace and daily rhythm.",
      card1: {
        tag: "Service 1",
        title: "[SERVICE 1: Mindful Meditation Guidance]",
        desc: "Gentle beginner-friendly meditation guides and soothing audio sessions to settle a racing mind in just 10 minutes a day.",
        bullets: [
          "Beginner Tamil audio guides with zero complexity",
          "Techniques to ease anxiety and restless sleep",
          "10-minute daily peaceful reset routines"
        ]
      },
      card2: {
        tag: "Service 2",
        title: "[SERVICE 2: Overthinking & Emotional Clarity]",
        desc: "Practical cognitive techniques to break thought spirals, understand emotional triggers, and restore mental space.",
        bullets: [
          "Targeted exercises to slow down racing thoughts",
          "Gentle guided reflection and journaling prompts",
          "Grounding techniques for high-stress moments"
        ]
      },
      card3: {
        tag: "Service 3",
        title: "[SERVICE 3: Daily Peaceful Habit Design]",
        desc: "Unrushed mornings, peaceful evenings, and sustainable boundaries to safeguard your inner peace.",
        bullets: [
          "Unrushed morning calm ritual architecture",
          "Evening restorative wind-down routines",
          "Practical digital detox and boundary guidance"
        ]
      },
    },
    founder: {
      badge: "Founder's Story",
      title: "An Honest Journey from Hustle to Healing",
      story: "Years ago, I found myself drowning in chronic stress and relentless overthinking. While there were countless self-help books and western apps, there was virtually no gentle, pressure-free space designed natively for Tamil speakers who crave peace without hype or judgment. Peace Buddy was born from that need: not as a clinical clinic, but as a calm companion walking alongside you. Welcome to your quiet haven.",
      role: "Founder & Mindfulness Practitioner",
      credentials: "[FOUNDER NAME] — Peace Buddy Tamil",
    },
    newsletter: {
      badge: "Free Calm Guide",
      title: "Receive Gentle Weekly Guidance in Your Inbox",
      desc: "No sales funnels, no aggressive popups. Just one serene reflection and practical mindfulness tip sent quietly every Sunday.",
      namePlaceholder: "Your Name (Optional)",
      emailPlaceholder: "Your Email Address",
      button: "Get Free Peace Guide",
      buttonSubmitting: "Registering...",
      successMessage: "Thank you! Your free peace guide is on its way to your inbox.",
      privacyNote: "We respect your inbox. Unsubscribe anytime with one quiet click.",
    },
    testimonials: {
      badge: "Community Reflections",
      title: "Quiet Stories of Transformation",
      subtitle: "Honest feedback from people who found their calm with Peace Buddy.",
      disclaimer: "*Placeholders ready for verified community testimonials.",
      card1: {
        text: "[REAL TESTIMONIAL 1: 'The 4-4-6 breathing practice and Tamil meditation sessions have brought so much calm into my stressful work days. I sleep peacefully now.']",
        author: "[CLIENT NAME 1]",
        location: "Chennai"
      },
      card2: {
        text: "[REAL TESTIMONIAL 2: 'Having mindfulness explained in my mother tongue without any pressure changed everything for me. It feels like a safe harbor.']",
        author: "[CLIENT NAME 2]",
        location: "Coimbatore"
      },
      card3: {
        text: "[REAL TESTIMONIAL 3: 'Spending 10 quiet minutes every morning has transformed how I respond to my family and workplace. Deeply grateful.']",
        author: "[CLIENT NAME 3]",
        location: "Madurai"
      },
    },
    articles: {
      badge: "Mindful Reads",
      title: "Thoughtful Guides for Everyday Tranquility",
      subtitle: "Short, practical reads designed to bring quiet clarity to your everyday life.",
      readMore: "Read full guide →",
      item1: {
        title: "How to Quiet Overthinking in 5 Minutes",
        excerpt: "When your thoughts feel unmanageable, this gentle somatic technique anchors your awareness back to the present.",
        readTime: "4 min read",
        tag: "Clarity"
      },
      item2: {
        title: "3 Evening Rituals for Restful, Deep Sleep",
        excerpt: "Put down the screen and guide your nervous system into restorative rest with these gentle night habits.",
        readTime: "5 min read",
        tag: "Sleep & Health"
      },
      item3: {
        title: "The One-Minute Calm Pause During Busy Days",
        excerpt: "A subtle, discreet breathing practice you can do anywhere, anytime without anyone noticing.",
        readTime: "3 min read",
        tag: "Mindfulness"
      },
    },
    cta: {
      title: "Begin Your Personal Journey to Calm Today",
      desc: "Inner peace is not an elusive luxury; it is a gentle habit cultivated one mindful breath at a time.",
      primaryBtn: "Claim Free Guide",
      whatsappBtn: "Chat on WhatsApp [CLIENT WHATSAPP]",
    },
    footer: {
      tagline: "A calm, Tamil-first sanctuary for peace of mind and emotional wellbeing.",
      quickLinks: "Navigation",
      legal: "Legal & Ethics",
      helplineTitle: "Emergency Mental Health Helplines (24/7 Verified Support)",
      helplineText: "Peace Buddy provides general wellbeing support and is not a substitute for clinical or medical care. If you are experiencing crisis:",
      helplineNumber: "Tele-MANAS (Govt of India, 24/7 toll-free): 14416 / 1800-891-4416 | Vandrevala Foundation: +91 9999 666 555",
      disclaimer: "Disclaimer: Peace Buddy offers general wellbeing support and is not a substitute for medical or mental-health care. If you are in crisis, contact local emergency services or a helpline.",
      copyright: "© 2026 Peace Buddy Tamil. All rights reserved.",
    },
    whatsapp: {
      tooltip: "Connect with us on WhatsApp",
      ariaLabel: "Chat with Peace Buddy on WhatsApp",
    }
  }
};
