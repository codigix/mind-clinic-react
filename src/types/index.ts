import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  condition: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
  category: string;
}

export interface ClinicInfo {
  name: string;
  fullName: string;
  psychiatrist: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekday: string;
    weekend: string;
    crisis: string;
  };
}

export interface NavigationSection {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}