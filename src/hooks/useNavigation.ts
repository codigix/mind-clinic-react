import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationOptions {
  smooth?: boolean;
  offset?: number;
}

export const useNavigation = () => {
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string, options: NavigationOptions = {}) => {
    const { smooth = true, offset = 0 } = options;
    
    // Handle hash navigation for same page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  }, [navigate]);

  const navigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const navigateToRoute = useCallback((route: string) => {
    if (route.startsWith('/#')) {
      const sectionId = route.substring(2);
      scrollToSection(sectionId);
    } else {
      navigate(route);
    }
  }, [navigate, scrollToSection]);

  return {
    scrollToSection,
    navigateToHome,
    navigateToRoute
  };
};