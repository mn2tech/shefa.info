export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface AudienceCard {
  title: string;
  description: string;
  icon: string;
}

export interface ConnectionCategory {
  title: string;
  description: string;
  icon: string;
}

export interface TrainingTopic {
  title: string;
  description: string;
  icon: string;
}

export interface WorkshopPlaceholder {
  title: string;
  type: "workshop" | "webinar";
  description: string;
  date: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  type: string;
  icon: string;
}

export interface EventItem {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

export interface ConnectRequestFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  location: string;
  connectionType: string;
  businessChallenge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}
