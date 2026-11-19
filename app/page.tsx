import Hero from '@/components/Hero';
import BreatheWidget from '@/components/BreatheWidget';
import ServicesSection from '@/components/ServicesSection';
import FounderSection from '@/components/FounderSection';
import NewsletterSection from '@/components/NewsletterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ArticlesSection from '@/components/ArticlesSection';
import ClosingCta from '@/components/ClosingCta';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Signature 4-4-6 Breathe Strip */}
      <BreatheWidget />

      {/* 3. How Peace Buddy Helps (3 Cards Only) */}
      <ServicesSection />

      {/* 4. About the Founder (Photo Placeholder + 80-word Story) */}
      <FounderSection />

      {/* 5. Free Resource / Newsletter (Inline Form, No Popup) */}
      <NewsletterSection />

      {/* 6. Real Testimonials ([REAL TESTIMONIAL] x3) */}
      <TestimonialsSection />

      {/* 7. Latest 2-3 Articles / Guides */}
      <ArticlesSection />

      {/* 8. Gentle Closing Call to Action */}
      <ClosingCta />
    </>
  );
}
