import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { StatsBar } from '@/components/ui/StatsBar';
import { Testimonials } from '@/components/ui/Testimonials';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { testimonials as testimonialsData, stats as statsData } from '@/data/constants';

const Index = () => {
  const { scrollToSection } = useNavigation();

  useEffect(() => {
    // Handle hash-based navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        scrollToSection(elementId, { offset: 80 });
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [scrollToSection]);

  return (
    <>
      <SEO
        title="Best Psychiatrist in Pune | Dr. Hamza Hussain"
        description="Expert psychiatric care by Dr. Hamza Hussain at Insight - The Mind Clinic. Specialized in depression, anxiety, OCD, and mental health treatment in Pune."
        keywords={['best psychiatrist pune', 'mental health treatment', 'depression therapy', 'anxiety treatment']}
      />
      <div className="min-h-screen">
  {/* Announcement Bar */}
  <div
    className="w-full bg-background/75 text-foreground border-b border-background/60 px-4 py-3 flex items-center justify-between gap-4 backdrop-blur sticky top-0 z-50"
    role="region"
    aria-label="New app announcement"
    style={{
      backgroundColor: 'rgba(254, 251, 244, 0.7)',
      color: '#111827',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}
  >
    <span className="text-sm sm:text-base" style={{ color: '#111827' }}>
      Download our new app to easily schedule visits and stay updated on your treatment.
    </span>
    <Button
      onClick={() =>
        window.open(
          'https://play.google.com/store/apps/details?id=com.docterz.connect.insightthemindclinic',
          '_blank'
        )
      }
      aria-label="Download app from App Store"
      className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
    >
      Download App
    </Button>
  </div>

  {/* Nav Bar (Header) */}
  <div className="sticky top-[48px] z-40"> 
    <Header />
  </div>

  <main>
    <Hero />
    <StatsBar stats={statsData} />
    <Services />
    <About />
    <Testimonials testimonials={testimonialsData} />
    <Contact />
  </main>
  <Footer />
  <Chatbot />
</div>

    </>
  );
};

export default Index;
