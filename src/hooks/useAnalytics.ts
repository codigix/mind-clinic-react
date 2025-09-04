import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

interface AnalyticsConfig {
  trackingId: string;
  testMode?: boolean;
}

export const initAnalytics = (config: AnalyticsConfig) => {
  ReactGA.initialize(config.trackingId, {
    testMode: config.testMode || false,
  });
};

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  };

  const trackFormSubmission = (formName: string) => {
    trackEvent('Form', 'Submit', formName);
  };

  const trackButtonClick = (buttonName: string) => {
    trackEvent('Button', 'Click', buttonName);
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('Service', 'View', serviceName);
  };

  const trackAppointmentBooking = (serviceType: string) => {
    trackEvent('Appointment', 'Book', serviceType);
  };

  return {
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackServiceView,
    trackAppointmentBooking,
  };
};

// Web Vitals tracking
export const reportWebVitals = () => {
  onCLS(console.log);
  onFCP(console.log);
  onLCP(console.log);
  onTTFB(console.log);
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  ReactGA.event('exception', {
    description: error.message,
    fatal: false,
    ...errorInfo,
  });
};