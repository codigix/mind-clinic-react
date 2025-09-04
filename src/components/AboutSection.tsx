import { User, HeartPulse, Smile } from 'lucide-react';
import { ClinicInfo } from '@/types';
import { StatsBar } from '@/components/ui/StatsBar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface AboutSectionProps {
  clinicInfo: ClinicInfo;
  variant?: 'concise' | 'detailed';
  showStats?: boolean;
  showFeatures?: boolean;
  showCta?: boolean;
  stats?: {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
  }[];
}

export const AboutSection = ({
  clinicInfo,
  variant = 'concise',
  showStats = true,
  showFeatures = true,
  showCta = true,
  stats = []
}: AboutSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 border-b">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Headings and CTA */}
          <div>
            {variant === 'detailed' && (
              <h3 className="text-primary text-xl font-bold mb-2">About Us</h3>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Welcome to {clinicInfo.name} –<br />The Mind Clinic
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your Partner in Mental Wellness: Combining Compassionate Care with Innovative and side effect free Treatments.
            </p>
            {showCta && (
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8 py-4 text-lg shadow hover:bg-primary/90 transition"
                onClick={() => navigate('/services')}
              >
                OUR SERVICES
              </Button>
            )}
          </div>

          {/* Right: Features - only shown in detailed view */}
          {showFeatures && variant === 'detailed' && (
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
                    Get expert, side-effect-free care that supports your mental well-being in today's demanding world.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Bar - configurable */}
      {showStats && <StatsBar stats={stats} />}
    </section>
  );
};