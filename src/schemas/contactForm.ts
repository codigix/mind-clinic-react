import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z.string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z.string()
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits'),
  
  service: z.string()
    .min(1, 'Please select a service'),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
  
  preferredDate: z.string()
    .optional()
    .refine((date) => {
      if (!date) return true;
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Preferred date must be today or in the future'),
  
  preferredTime: z.string()
    .optional()
    .refine((time) => {
      if (!time) return true;
      const [hours] = time.split(':').map(Number);
      return hours >= 10 && hours <= 20; // 10 AM to 8 PM
    }, 'Preferred time must be between 10 AM and 8 PM'),
  
  consent: z.boolean()
    .refine((val) => val === true, 'You must consent to data processing'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Default values
export const contactFormDefaults: Partial<ContactFormData> = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  preferredDate: '',
  preferredTime: '',
  consent: false,
};

// Service options
export const serviceOptions = [
  { value: 'depression', label: 'Depression Treatment' },
  { value: 'anxiety', label: 'Anxiety Therapy' },
  { value: 'ocd', label: 'OCD Treatment' },
  { value: 'dementia', label: 'Dementia Care' },
  { value: 'schizophrenia', label: 'Schizophrenia Treatment' },
  { value: 'adhd', label: 'ADHD Management' },
  { value: 'other', label: 'Other' },
];