import { SERVICES } from "./constants";

// Navigation types
export interface NavLink {
  href: string;
  label: string;
  children?: NavChild[];
}

export interface NavChild {
  href: string;
  label: string;
  description?: string;
}

// Service types - derived from constants
export type Service = (typeof SERVICES)[number];
export type ServiceFeature = Service["features"][number];
export type ServiceProcess = Service["process"][number];
export type ServiceCaseStudy = Service["caseStudies"][number];
export type ServiceFAQ = Service["faqs"][number];
export type ServiceTechnology = Service["technologies"][number];

// Product types
export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: readonly string[];
  technologies: readonly string[];
  status: "Active" | "Coming Soon" | "Beta";
  website?: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

// Stat types
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";


// Product feature
export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

// Product platform
export interface ProductPlatform {
  name: string;
  description: string;
  features: string[];
  image: string;
}

// Product module (for Lazarus)
export interface ProductModule {
  name: string;
  description: string;
  included: boolean;
  features: string[];
}

// Product testimonial
export interface ProductTestimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  image: string;
}

// Product pricing
export interface ProductPricing {
  name: string;
  description: string;
  price: string;
  currency: string;
  period: string;
  features: string[];
  highlighted: boolean;
}

// Product roadmap item
export interface ProductRoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Planned";
}

// Product gallery item
export interface ProductGalleryItem {
  image: string;
  caption: string;
}

// Product FAQ
export interface ProductFAQ {
  question: string;
  answer: string;
}

