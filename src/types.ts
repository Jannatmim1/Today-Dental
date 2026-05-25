export interface Doctor {
  id: string;
  name: string;
  title: string;
  education: string;
  bio: string;
  quote?: string;
  specialties: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'general' | 'cosmetic' | 'implants' | 'orthodontics';
  highlights: string[];
  faqs: { question: string; answer: string }[];
  priceInfo?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  text: string;
  rating: number;
  date?: string;
  treatment?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface OfficeHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}
