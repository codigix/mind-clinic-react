import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock, ArrowRight, Building, User, Brain, Heart, Shield, Activity } from 'lucide-react';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

export const About = () => {
  const navigate = useNavigate();
  const clinicRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const isClinicInView = useInView(clinicRef, { once: true });
  const isFounderInView = useInView(founderRef, { once: true });

  const handleClinicClick = () => {
    navigate('/aboutus');
  };

  const handleFounderClick = () => {
    window.location.href = 'https://drhamzahussain.com';
  };

  const clinicStats = [
    { value: '50,000+', label: 'Hours of Expertise', icon: Clock },
    { value: '2,000+', label: 'Lives Transformed', icon: Users },
    { value: '100+', label: 'Treatment Options', icon: Activity },
    { value: "4+", label: 'Expert Psychologist', icon: Award }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        {/* About the Clinic Section */}
        <motion.div
          ref={clinicRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isClinicInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why should you choose Insight Mind Clinic?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert-led care that treats your mind with science, compassion, and balance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
            <div className="space-y-8">
              <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 shadow-xl h-full">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6">How we make a difference</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
                      <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Personalized Treatment Plans</h4>
                        <p className="text-sm text-muted-foreground">
                          Holistic approach tailored for anxiety, depression, and more, designed to fit your unique needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-accent/10 rounded-lg">
                      <Heart className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Integrated Psychiatric Clinic</h4>
                        <p className="text-sm text-muted-foreground">
                          Cutting-edge psychiatry blended with ancient healing practices, yoga, and psychobiotics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-green-500/10 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Professional Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Expert, side-effect-free care that supports your mental well-being in today's demanding world.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 h-full">
              <div className="grid grid-cols-2 gap-4 h-full">
                {clinicStats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow h-full flex flex-col justify-center">
                    <CardContent className="p-0">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleClinicClick}
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300"
            >
              Learn More About Our Clinic
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* About the Founder Section */}
        <motion.div
          ref={founderRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dr. Hamza Hussain - India's First Integrated Psychiatrist
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden shadow-xl h-full">
                <CardContent className="p-0 h-full">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Hamza Hussain - Founder of Insight Mind Clinic"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 shadow-xl h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-4">Dr. Hamza Hussain</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A visionary leader in mental health care who blends modern psychiatric practices with 
                    ancient healing techniques. As a gold medalist Dr. Hussain has transformed 
                    mental health care in India by pioneering integrated psychiatry.
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    His patient-centered approach focuses on delivering personalized, side-effect-free treatments 
                    that combine conventional therapies with yoga, mindfulness, and psychobiotics.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-semibold">Gold Medalist</div>
                      <div className="text-sm text-muted-foreground"></div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <Brain className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="font-semibold">Pioneer</div>
                      <div className="text-sm text-muted-foreground"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-3">Specializations</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Anxiety & Depression Disorders
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        OCD, PTSD & Stress Disorders
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Psychobiotics & Alternative Therapies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Minimal Medication Approach
                      </li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleFounderClick}
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300"
                  >
                    Know More About The Founder
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};