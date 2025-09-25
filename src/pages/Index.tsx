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
        <Header />
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
