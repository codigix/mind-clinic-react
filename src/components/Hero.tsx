import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Shield, Star, Users, Brain } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import clinicHero from '@/assets/clinic-hero.jpg';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { scrollToSection } = useNavigation();

  const handleBookConsultation = () => {
    window.open('https://web.docterz.in/#/clinics/4849/book_online_appointment', '_blank');
  };

  const handleExploreServices = () => {
    window.location.href = '/services';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={clinicHero}
          alt="Modern medical clinic interior with professional psychiatric care environment"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                🏆 India's First Integrated Psychiatric Clinic
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Transform Your Mental Health with
                <span className="text-primary"> Insight - The Mind Clinic</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
  Led by gold medalist Dr. Hamza Hussain, Insight offers India’s first fully integrated mental health care. We combine psychiatry, therapy, nutrition, and ancient healing for effective, side-effect-free treatment for all ages.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleBookConsultation}
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300"
              >
                Book Consultation
              </Button>
              <Button
                size="lg"
                onClick={handleExploreServices}
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>

          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-center">Why Choose Insight?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Expert Care</div>
                      <div className="text-sm text-muted-foreground">Gold Medalist Psychiatrist</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                    <Heart className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-medium">Holistic Approach</div>
                      <div className="text-sm text-muted-foreground">Modern + Ancient Healing</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Side-Effect Free</div>
                      <div className="text-sm text-muted-foreground">Minimal Medication</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Best Rated</div>
                      <div className="text-sm text-muted-foreground">Rated 5★ on Google, Justdial & Practo</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};