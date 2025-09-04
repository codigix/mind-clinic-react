import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services as servicesData } from '@/data/services';
import type { Service } from '@/types';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mental Health Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive psychiatric care for a range of mental health conditions,
            delivered with expertise and compassion.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData
            .filter(service => [
              'Psychiatric Care',
              'Therapy & Counselling',
              'Diagnostic & Functional Assessments',
              'Corporate Mental Health Solutions',
              'Lifestyle Psychiatry & Integrative Medicine',
              'Crisis & Emergency Support'
            ].includes(service.title))
            .slice(0, 6)
            .map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" aria-label="View all mental health services">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8">
              View All Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = service.icon;

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative h-[400px] cursor-pointer [perspective:1000px]"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold tracking-wide">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-sm">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground text-center mt-4">Click to see more</p>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="h-full bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30">
            <CardHeader>
              <CardTitle className="text-lg font-bold tracking-wide text-center">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-sm">All Features:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground text-center mt-4">Click to flip back</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};