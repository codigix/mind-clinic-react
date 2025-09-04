import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

export const Testimonials = ({ testimonials, className }: TestimonialsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          'h-5 w-5',
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        )}
      />
    ));
  };

  return (
    <section className={cn("py-20 bg-gradient-to-br from-muted/30 to-background border-b", className)}>
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from people whose lives we've touched
          </p>
        </div>
        
        <div ref={ref} className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 animate-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-80 md:w-96 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-white"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="italic text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-primary">
                        {testimonial.condition}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">
              Trusted by 2,000+ clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};