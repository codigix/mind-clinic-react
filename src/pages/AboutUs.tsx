import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/ui/Testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Award, Phone, Mail, CheckCircle, User, HeartPulse, Smile, GraduationCap, ClipboardList, Flag, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import hamzaHussain from '@/assets/team/hamza-hussain.jpg';
import naseemAhmad from '@/assets/team/naseem-ahmad.jpg';
import pallaviKhurana from '@/assets/team/pallavi-khurana.jpg';
import arzooBhagchandani from '@/assets/team/arzoo-bhagchandani.jpg';
import nadeemhussain from '@/assets/team/nadeem-hussain.png';
import ashimaDesai from '@/assets/team/ashima-desai.png';
import femaledoc from '@/assets/team/femaledoc.png';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

const AboutUs = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const commitmentRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true });
  const isCommitmentInView = useInView(commitmentRef, { once: true });
  const isImpactInView = useInView(impactRef, { once: true });

  const teamMembers = [
    {
      id: 1,
      name: "Dr Hamza Hussain",
      title: "Founder & Chief Psychiatrist",
      website: "https://drhamzahussain.com",
      image: hamzaHussain,
      description: "A visionary leader in mental health care who blends modern psychiatric practices with ancient healing techniques. As a gold medalist Dr. Hussain has transformed mental health care in India by pioneering integrated psychiatry. His patient-centered approach focuses on delivering personalized, side-effect-free treatments that combine conventional therapies with yoga, mindfulness, and psychobiotics."
    },
    {
      id: 2,
      name: "Dr Naseem Ahmad",
      title: "Clinical Psychologist",
      image: naseemAhmad,
      description: "Naseem Ahmed specializes in psychological assessments, providing detailed evaluations that form the foundation for effective treatment planning and intervention. His work helps identify cognitive, emotional, behavioral, and developmental patterns, enabling tailored therapeutic strategies for clients of all age groups.Through precision and clinical rigor, Naseem ensures that every assessment translates into actionable insights, empowering both clients and therapists to move forward with clarity and confidence."
    },
    {
      id: 3,
      name: "Pallavi Khurana",
      title: "Counselling Psychologist",
      image: pallaviKhurana,
      description: "Pallavi Khurana views therapy as a safe and structured space for learning, growth, and resilience. She helps clients navigate relationships, careers, finances, education, and health while equipping them with tools to regulate emotions and handle life challenges with clarity.Her integrative approach combines Mindfulness, Person-Centred Therapy, Gestalt Therapy, and evidence-based methods such as CBT and REBT, tailored to the unique needs of every individual. Pallavi works with adolescents, adults, and senior citizens, addressing issues like identity struggles, work-life stress, depression, anxiety, OCD, PTSD, and addictions. She also supports caregivers coping with emotional strain.With years of voluntary service at Connecting NGO, Pallavi has contributed to suicide prevention, survivor support, and crisis intervention. Clients value her deep listening, empathy, and unwavering commitment to healing. Beyond her clinical role, she enjoys travelling, cooking, gardening, and lifelong learning, all of which enrich her therapeutic perspective."
    },
    {
      id: 4,
      name: "Arzoo Bhagchandani",
      title: "Child Psychologist",
      image: arzooBhagchandani,
      description: "Arzoo Bhagchandani specializes in supporting children with behavioral challenges, emotional struggles, learning difficulties, and school-related concerns. Using a balanced mix of behavioral therapy, cognitive techniques, play therapy, and art-based interventions, she creates a safe and engaging space where children feel understood and empowered.Her expertise in remedial therapy allows her to provide tailored interventions for children facing difficulties with reading, writing, focus, and other foundational academic skills. More than improving academic performance, her work emphasizes building confidence, resilience, and emotional well-being.Guided by the belief that every child has the capacity to thrive, Arzoo equips them with the tools, empathy, and encouragement they need to grow into their best selves."
    },
    {
      id: 5,
      name: "Mr. Nadeem Hussain",
      title: "Corporate Psychologist",
      image: nadeemhussain,
      description: "With over three decades of corporate experience, Nadeem bridges the gap between clinical psychology and organizational well-being. He specializes in treating Generalized Anxiety Disorder (GAD), OCD, and personality disorders, while also applying his expertise to workplace mental health.Certified in PMI Agile and trained extensively in employee wellness strategies, he integrates clinical insights with organizational practices to reduce burnout, promote work-life balance, and enhance team performance. His unique perspective enables him to address both individual mental health challenges and systemic workplace issues, driving healthier and more productive organizations."
    },
    {
      id: 6,
      name: "Ms. Ashima Desai",
      title: "Art Therapist",
      image: ashimaDesai,
      description: "Ashima is an Art Therapist with a Master’s in Art Therapy from La Salle College of the Arts, Singapore. She brings a trauma-informed, person-centered lens to her work, offering individual and group therapy to children, adolescents, and adults across diverse settings. Rooted in psychodynamic psychotherapy, she adapts to each client’s unique emotional needs, creating safe, attuned spaces for exploration through creative expression. Her deep empathy and curiosity foster genuine healing and growth. With six years in the design industry, she blends artistic insight with clinical rigor, guiding clients through complex emotions with clarity, care, and authenticity."
    },
    {
      id: 7,
      name: "Ms. Mansi Iyer",
      title: "Clinical Psychologist and ADHD Specialist",
      image: femaledoc,
      description: "Mansi Iyer is a Clinical Psychologist with a special focus on ADHD. Having personally navigated life with ADHD, she brings both professional expertise and lived experience to her work, offering clients a rare combination of empathy, authenticity, and evidence-based strategies.Her practice emphasizes creating structured, supportive, and empowering environments where individuals with ADHD can harness their strengths, manage challenges, and thrive in all areas of life. At Insight, she is known for her ability to connect deeply with clients and guide them toward practical, sustainable solutions."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sharan",
      rating: 5,
      text: "I took my father to Insight – The Mind Clinic for his schizophrenia treatment, and Dr Hamza Hussain’s approach was incredible. He is definitely the best Psychiatrist in Pune, and the clinic provides a very comfortable environment. Anyone looking for a psychiatrist near me in Pune should visit here!",
      condition: "Schizophrenia"
    },
    {
      id: 2,
      name: "Jobanpreet",
      rating: 5,
      text: "I’ve been searching for the best psychiatrist near me, and Insight – The Mind Clinic in Pune exceeded my expectations. Dr Hamza Hussain is an expert in treating depression and anxiety, and the personalized care here is top-notch",
      condition: "Depression & Anxiety"
    },
    {
      id: 3,
      name: "Bhullar",
      rating: 5,
      text: "Dr Hamza Hussain is the best Psychiatrist in Pune, and his clinic, Insight – The Mind Clinic, is perfect for anyone struggling with OCD and anxiety. The holistic approach here is unlike anywhere else. If you’re looking for a psychiatrist near me, this is the place.",
      condition: "OCD & Anxiety"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Enhanced Hero/About Section */}
        <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 border-b">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Headings and CTA */}
              <div>
                <h3 className="text-primary text-xl font-bold mb-2">About Us</h3>
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                  Welcome to Insight –<br />The Mind Clinic
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Your Partner in Mental Wellness: Combining Compassionate Care with Innovative and side effect free Treatments.
                </p>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground font-semibold px-8 py-4 text-lg hover:bg-primary/90 transition"
                  onClick={() => navigate('/services')}
                >
                  OUR SERVICES
                </Button>
              </div>
              {/* Right: Features */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-7 w-7 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Personalized Treatment Plans</h4>
                    <p className="text-muted-foreground">
                      Our holistic approach tailors treatments for anxiety, depression, and more, designed to fit your unique needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <HeartPulse className="h-7 w-7 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Integrated Psychiatry & Modern Therapies</h4>
                    <p className="text-muted-foreground">
                      A blend of cutting-edge psychiatry and ancient healing practices, including yoga, psychobiotics, and low-dose antidepressants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Smile className="h-7 w-7 text-primary" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Stress-Free, Professional Support</h4>
                    <p className="text-muted-foreground">
                      Get expert, side-effect-free care that supports your mental well-being in today’s demanding world.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section ref={statsRef} className="py-0 bg-transparent">
          <div className="container max-w-7xl mx-auto -mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl shadow-lg bg-white/80 backdrop-blur border border-primary/20 px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
              style={{
                boxShadow: "0 8px 32px 0 rgba(41, 41, 41, 0.08)",
              }}
            >
              <div className="flex flex-col items-center flex-1">
                <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </span>
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-muted-foreground text-base">Hours of Psychiatric Expertise</div>
              </div>
              <div className="hidden md:block h-16 w-px bg-primary/10 mx-4" />
              <div className="flex flex-col items-center flex-1">
                <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-primary" />
                </span>
                <div className="text-2xl font-bold text-primary">1,500+</div>
                <div className="text-muted-foreground text-base">Lives Transformed</div>
              </div>
              <div className="hidden md:block h-16 w-px bg-primary/10 mx-4" />
              <div className="flex flex-col items-center flex-1">
                <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <ClipboardList className="h-8 w-8 text-primary" />
                </span>
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-muted-foreground text-base">Treatment Options</div>
              </div>
              <div className="hidden md:block h-16 w-px bg-primary/10 mx-4" />
              <div className="flex flex-col items-center flex-1">
                <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Flag className="h-8 w-8 text-primary" />
                </span>
                <div className="text-2xl font-bold text-primary">India’s 1st</div>
                <div className="text-muted-foreground text-base text-center">Integrated Psychiatric Clinic</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Team Section */}
        <section ref={teamRef} className="py-20 bg-muted/30 border-b">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">The Team</h2>
              <p className="text-2xl font-bold text-foreground mb-2">
                Expert Psychiatrists | Skilled Therapists | Compassionate Counselors
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden shadow-xl h-full border-border/50 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row h-full">
                      {index % 2 === 0 ? (
                        // Even index: Image on left, text on right
                        <>
                          <div className="w-full md:w-1/2">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = doctorPortrait;
                              }}
                            />
                          </div>
                          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-background">
                            <div className="mb-6">
                              <h3 className="text-2xl font-semibold mb-2 text-foreground">{member.name}</h3>
                              <p className="text-primary font-medium mb-4">{member.title}</p>
                              <p className="text-muted-foreground leading-relaxed">
                                {member.description}
                              </p>
                            </div>
                            {member.id === 1 && (
                              <div className="mt-auto">
                                <Button
                                  variant="outline"
                                  size="lg"
                                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 w-full hover:shadow-lg"
                                  asChild
                                >
                                  <a href={member.website} target="_blank" rel="noopener noreferrer">
                                    Know More
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        // Odd index: Image on right, text on left
                        <>
                          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-background order-2 md:order-1">
                            <div className="mb-6">
                              <h3 className="text-2xl font-semibold mb-2 text-foreground">{member.name}</h3>
                              <p className="text-primary font-medium mb-4">{member.title}</p>
                              <p className="text-muted-foreground leading-relaxed">
                                {member.description}
                              </p>
                            </div>
                            {member.id === 1 && (
                              <div className="mt-auto">
                                <Button
                                  variant="outline"
                                  size="lg"
                                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 w-full hover:shadow-lg"
                                  asChild
                                >
                                  <a href={member.website} target="_blank" rel="noopener noreferrer">
                                    Know More
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                          <div className="w-full md:w-1/2 order-1 md:order-2">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = doctorPortrait;
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section ref={commitmentRef} className="py-20 border-b bg-gradient-to-br from-[#fffbe9] to-[#fff7e0]">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCommitmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-stretch"
            >
              {/* Left: Commitment Statement */}
              <div
                tabIndex={0}
                className="group relative flex flex-col h-full transition-all duration-300 outline-none"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffe9b3] via-[#fff4d6] to-[#ffe9b3] opacity-90 blur-sm z-0 pointer-events-none" />
                <div
                  className="relative rounded-2xl bg-white/95 shadow-2xl p-8 md:p-12 border-2 border-yellow-200 flex flex-col justify-center h-full z-10 transition-all duration-300
                    group-hover:border-yellow-400 group-focus:border-yellow-400
                    group-hover:shadow-[0_0_0_4px_rgba(246,184,0,0.15)] group-focus:shadow-[0_0_0_4px_rgba(246,184,0,0.18)]"
                >
                  <h3 className="text-[#f6b800] text-lg font-bold mb-2">Our Commitment to Mental Health</h3>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 leading-tight">
                    Prioritizing Health and Safety in Psychiatry
                  </h2>
                  <p className="text-lg text-[#6b6b6b] mb-8">
                    At our state-of-the-art psychiatric clinic, we prioritize the health and safety of our patients and staff. Our unwavering commitment to mental health care ensures that everyone who walks through our doors feels secure, supported, and cared for. We implement comprehensive treatment protocols and best practices to create a side effect free healing regimen.
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#ffc940] text-[#1a1a1a] font-semibold px-8 py-4 text-lg hover:bg-[#ffd966] transition w-max"
                    onClick={() => window.open('https://web.docterz.in/#/clinics/4849/book_online_appointment ', '_blank')}
                  >
                    GET IN TOUCH
                  </Button>
                </div>
              </div>
              {/* Right: Best Practices */}
              <div
                tabIndex={0}
                className="group relative flex flex-col h-full transition-all duration-300 outline-none"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffe9b3] via-[#fff4d6] to-[#ffe9b3] opacity-90 blur-sm z-0 pointer-events-none" />
                <div
                  className="relative rounded-2xl bg-white/95 shadow-2xl p-8 md:p-12 border-2 border-yellow-200 flex flex-col justify-center h-full z-10 transition-all duration-300
                    group-hover:border-yellow-400 group-focus:border-yellow-400
                    group-hover:shadow-[0_0_0_4px_rgba(246,184,0,0.15)] group-focus:shadow-[0_0_0_4px_rgba(246,184,0,0.18)]"
                >
                  <h3 className="text-[#f6b800] text-lg font-bold mb-2">Our Best Practices</h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">Best-in-Class Care</h2>
                  <p className="text-base text-[#6b6b6b] mb-8">
                    We follow rigorous best practices in integrated psychiatry to ensure our treatments for mental health conditions are safe, effective, and personalized. Each approach is designed to promote holistic healing and sustainable recovery for anxiety, depression, and other mental health disorders. Our evidence-based techniques enhance patient outcomes and foster lasting well-being.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-[#f6b800]" />
                      <span className="text-lg font-semibold text-[#1a1a1a]">Compassionate Care</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Smile className="h-6 w-6 text-[#f6b800]" />
                      <span className="text-lg font-semibold text-[#1a1a1a]">Holistic Healing Approaches</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ClipboardList className="h-6 w-6 text-[#f6b800]" />
                      <span className="text-lg font-semibold text-[#1a1a1a]">Innovative Treatment Modalities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-[#f6b800]" />
                      <span className="text-lg font-semibold text-[#1a1a1a]">Evidence-Based Psychiatry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Impact */}
        <section ref={impactRef} className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming lives through compassionate care and innovative treatment approaches
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Impact Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Clients Served</h3>
                    <p className="text-muted-foreground text-sm">
                      Individuals and families who have trusted us with their mental health journey
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Impact Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Therapy Options</h3>
                    <p className="text-muted-foreground text-sm">
                      Evidence-based therapeutic approaches tailored to individual needs
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Impact Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">More than 95%</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Success Rate</h3>
                    <p className="text-muted-foreground text-sm">
                      Clients see significant improvement within the first month of treatment
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Impact Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">1,500+</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Hours of Care</h3>
                    <p className="text-muted-foreground text-sm">
                      Dedicated consultation time providing personalized attention to each client
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Impact Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">India's 1st</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Integrated Clinic</h3>
                    <p className="text-muted-foreground text-sm">
                      Pioneering holistic psychiatric care with innovative, side-effect-free treatments
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Impact Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Compassionate Care</h3>
                    <p className="text-muted-foreground text-sm">
                      Every interaction guided by empath and commitment to your well-being
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands who have transformed their mental health with us
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300"
                onClick={() => window.open('https://web.docterz.in/#/clinics/4849/book_online_appointment ', '_blank')}
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <Testimonials testimonials={testimonials} />

        {/* Call to Action */}
        <section className="py-16">
          <div className="container max-w-2xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Button
                size="lg"
                className="text-lg font-bold px-8 py-4"
                onClick={() => window.open('https://web.docterz.in/#/clinics/4849/book_online_appointment', '_blank')}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;