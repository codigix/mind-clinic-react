import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { services as allServices } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const AllServices = () => {
  const categories = [
    'Core Medical & Therapeutic Services',
    'Targeted Therapy & Support',
    'Community & Corporate Programs',
    'Integrative & Support Services',
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleBookConsultation = () => {
    window.open('https://health.copious.care/drhamzahussain', '_blank');
  };

  // Scroll active tab into view
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement && tabsListRef.current) {
      // Calculate the position to scroll to (center of the tab)
      const container = tabsListRef.current;
      const tab = activeTabElement;
      
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      
      const containerScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const tabWidth = tabRect.width;
      const tabLeft = tabRect.left - containerRect.left + containerScrollLeft;
      
      // For the first tab, scroll to the beginning with small offset to ensure it's fully visible
      if (activeTab === categories[0]) {
        container.scrollTo({
          left: -8, // Small negative offset to account for padding
          behavior: 'smooth'
        });
        return;
      }
      
      // For other tabs, calculate the scroll position to center the tab
      let scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      // Ensure the scroll position is within bounds
      // Minimum scroll position (prevent first tab from being cut off)
      const minScrollPosition = 0;
      // Maximum scroll position (prevent last tab from being cut off)
      const maxScrollPosition = container.scrollWidth - containerWidth;
      
      // Clamp the scroll position between min and max
      scrollPosition = Math.max(minScrollPosition, Math.min(scrollPosition, maxScrollPosition));
      
      // Smooth scroll to the calculated position
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  // Set initial scroll position for the first tab
  useEffect(() => {
    const timer = setTimeout(() => {
      if (tabsListRef.current) {
        tabsListRef.current.scrollTo({
          left: 0,
          behavior: 'auto' // No animation on initial load
        });
      }
    }, 100); // Small delay to ensure DOM is fully rendered
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Our Comprehensive Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of specialized mental health services, from psychiatric care and therapy to advanced neurostimulation and wellness programs. Explore our offerings to find the right support for your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              ref={tabsListRef}
              className="flex w-full justify-start md:justify-center gap-1 md:gap-4 overflow-x-auto overflow-y-hidden py-1 flex-nowrap scrollbar-hide h-12"
            >
              <div className="flex-shrink-0 w-4 md:w-0"></div>
              {categories.map((category, index) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  ref={(el) => (tabRefs.current[category] = el)}
                  className="transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap flex-shrink-0 text-xs md:text-sm lg:text-base px-3 py-1 md:px-4 md:py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
              <div className="flex-shrink-0 w-4 md:w-0"></div>
            </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
                {allServices
                  .filter(service => service.category === category)
                  .map((service, index) => {
                    const IconComponent = service.icon;

                    return (
                      <motion.div
                        key={service.id}
                        className="h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          className="flex flex-col h-full border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out hover:border-primary/30"
                        >
                          <CardHeader className="flex-row items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-7 h-7 text-primary" />
                            </div>
                            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                                  <span className="text-foreground/90">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Take the first step towards better mental health. Our team is here to guide you with compassion and expertise.
          </p>
          <Button size="lg" onClick={handleBookConsultation}>
            Book Consultation
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AllServices;
