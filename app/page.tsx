import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ScheduleTimelineSection from '@/components/ScheduleTimelineSection';
import FounderSection from '@/components/FounderSection';
import ArticlesSection from '@/components/ArticlesSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main id="main-content" className="bg-[#F8F5F1] text-[#4A5A6A] overflow-hidden">
      {/* 1. Hero Section (Editorial, 100vh, Floating Cards, Arch Image, Glows) */}
      <Hero />

      {/* 2. Mindful Programs Section (Soft Blush Background, 3 Frosted Glass Cards) */}
      <ServicesSection />

      {/* 3. Live Sanctuary Class Schedule (Warm Cream Background, Live IST Timeline) */}
      <ScheduleTimelineSection />

      {/* 4. Founder & About Story (Pale Lavender Background, Tall Photo, 3 Stats) */}
      <FounderSection />

      {/* 5. Resources & Articles (Warm Cream Background, 3 Cards with 24px Image) */}
      <ArticlesSection />

      {/* 6. FAQ Accordion (Soft Blush Background, Minimal Animated Plus/Minus) */}
      <FaqSection />

      {/* 7. Contact & Gentle Guidance (Warm Cream Background, Pill Inputs) */}
      <ContactSection />
    </main>
  );
}
