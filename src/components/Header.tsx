import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Menu, X } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import { clinicInfo, navigationSections } from '@/data/constants';

export const Header = () => {
  const { scrollToSection, navigateToHome, navigateToRoute } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt={clinicInfo.fullName}
            className="h-28 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            onClick={navigateToHome}
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                if (section.href.startsWith('http') || section.href.startsWith('/')) {
                  if (section.href.startsWith('http')) {
                    window.open(section.href, '_blank');
                  } else {
                    navigateToRoute(section.href);
                  }
                } else {
                  scrollToSection(section.id);
                }
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-label={`Navigate to ${section.label} section`}
            >
              {section.label}
            </button>
          ))}
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            aria-label="Visit our blog (opens in a new tab)"
          >
            Blogs
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{clinicInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>Mon-Sat 10AM-8PM</span>
            </div>
          </div>
          <Button
            onClick={() => window.open('https://health.copious.care/drhamzahussain', '_blank')}
            aria-label="Book an appointment"
            className="hidden sm:inline-flex"
          >
            Book Appointment
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95">
          <div className="container py-4 flex flex-col space-y-4">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  if (section.href.startsWith('http') || section.href.startsWith('/')) {
                    if (section.href.startsWith('http')) {
                      window.open(section.href, '_blank');
                    } else {
                      navigateToRoute(section.href);
                    }
                  } else {
                    scrollToSection(section.id);
                  }
                  toggleMenu();
                }}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                aria-label={`Navigate to ${section.label} section`}
              >
                {section.label}
              </button>
            ))}
            <a
              href="https://drhamzahussain.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              aria-label="Visit our blog (opens in a new tab)"
            >
              Blogs
            </a>
            <Button
              onClick={() => {
                window.open('https://health.copious.care/drhamzahussain', '_blank');
                toggleMenu();
              }}
              aria-label="Book an appointment"
              className="w-full"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};