import { 
  Award, 
  Heart, 
  Users, 
  ClipboardList, 
  Flag, 
  CheckCircle, 
  Clock,
  Brain,
  Shield,
  Stethoscope,
  Activity,
  Baby,
  Eye,
  Pill,
  UserCheck,
  School,
  User,
  PlusCircle,
  BrainCircuit,
  ShieldAlert,
  BookOpen,
  FileText,
  HeartHandshake,
  MonitorSmartphone
} from 'lucide-react';
import type { 
  Testimonial, 
  Service, 
  ClinicInfo, 
  NavigationSection, 
  StatItem 
} from '@/types';

// Clinic Information
export const clinicInfo: ClinicInfo = {
  name: 'Insight',
  fullName: 'Insight - The Mind Clinic',
  psychiatrist: 'Dr. Hamza Hussain',
  phone: '+91 9390442784',
  email: 'help@insightmind.in',
  address: {
    street: '2nd Floor, Opus B, Undri',
    city: 'Pune',
    state: 'Maharashtra',
    zip: '411028'
  },
  hours: {
    weekday: 'Mon - Sat 10:00 AM - 8:00 PM',
    weekend: 'Sunday 10:00 AM - 2:00 PM',
    crisis: 'Available 24/7'
  }
};

// Navigation Sections
export const navigationSections: NavigationSection[] = [
  { id: 'home', label: 'Home', href: '/#home' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'about', label: 'About', href: '/aboutus' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
  { id: 'disorders', label: 'Know Your Disorders', href: '/know-your-disorders' }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Harpreet Singh',
    rating: 5,
    text: 'I consulted Dr Hamza for my anxiety and depression at Insight – The Mind Clinic in Pune and I couldn\'t be happier with the results. He is the best psychiatrist in Pune, hands down and the clinic is the best Psychiatric clinic I have ever been too. If you are looking for a psychiatrist near me in Pune then he is the most recommended',
    condition: 'Anxiety & Depression',
  },
  {
    id: 2,
    name: 'Rinku Masih',
    rating: 5,
    text: 'I was searching for a psychiatrist near me in Pune to help with my sleep disorder, and I am so glad I found Insight – The Mind Clinic. Dr Hamza Hussain is compassionate and knowledgeable. Highly recommend!',
    condition: 'Sleep Disorder',
  },
  {
    id: 3,
    name: 'Aman Gill',
    rating: 5,
    text: 'Insight – The Mind Clinic is the best psychiatric clinic in Pune for mental health care. Dr Hamza Hussain helped me manage my anxiety and depression with a holistic, side effects free approach. If you are searching for psychiatrist near me in Undri then I highly recommend visiting this Psychiatrist',
    condition: 'Anxiety & Depression',
  },
  {
    id: 4,
    name: 'Rajbir Kaur',
    rating: 5,
    text: 'Insight – The Mind Clinic is a heaven for anyone dealing with mental health issues. I visited for my bipolar disorder, and Dr Hamza Hussain provided the best best care. The clinic is easily accessible from anywhere in Pune and it is definitely worth visiting for anyone having a psychiatric or mental health problem. Dr Hamza Hussain is the chief Psychiatrist here and he is truly the best Psychiatrist in Pune',
    condition: 'Bipolar Disorder',
  },
  {
    id: 5,
    name: 'Sharan',
    rating: 4.5,
    text: 'I took my father to Insight – The Mind Clinic for his schizophrenia treatment, and Dr Hamza Hussain\'s approach was incredible. He is definitely the best Psychiatrist in Pune, and the clinic provides a very comfortable environment. Anyone looking for a psychiatrist near me in Pune should visit here!',
    condition: 'Schizophrenia',
  },
  {
    id: 6,
    name: 'Jobanpreet',
    rating: 4,
    text: 'I\'ve been searching for the best psychiatrist near me, and Insight – The Mind Clinic in Pune exceeded my expectations. Dr Hamza Hussain is an expert in treating depression and anxiety, and the personalized care here is top-notch',
    condition: 'Depression & Anxiety',
  },
  {
    id: 7,
    name: 'Bhullar',
    rating: 4.5,
    text: 'Dr Hamza Hussain is the best Psychiatrist in Pune, and his clinic, Insight – The Mind Clinic, is perfect for anyone struggling with OCD and anxiety. The holistic approach here is unlike anywhere else. If you\'re looking for a psychiatrist near me, this is the place.',
    condition: 'OCD & Anxiety',
  },
];

// Stats Data
export const stats: StatItem[] = [
  {
    icon: Award,
    value: '50,000+',
    label: 'Hours of Psychiatric Expertise',
  },
  {
    icon: Heart,
    value: "2,000+",
    label: 'Lives Transformed',
  },
  {
    icon: ClipboardList,
    value: '100+',
    label: 'Treatment Options',
  },
  {
    icon: Flag,
    value: 'More than 95%',
    label: 'Success Rate',
  }
];

// Routes Configuration
export const routes = {
  home: '/',
  services: '/services',
  disorders: '/know-your-disorders',
  about: '/aboutus',
  contact: '/#contact'
} as const;

// Social Links
export const socialLinks = [
  { name: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/insight.themindclinic' },
  { name: 'Twitter', icon: 'Twitter', href: 'https://x.com/drhamzahussain' },
  { name: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/drhamzahussain_md' },
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/in/drhamzahussain' }
] as const;