export interface VisitedPlace {
  id: string;
  title: string;
  originalSrc: string;
  fallbackSrc: string;
  description?: string;
  region?: string;
}

export interface ContactFormData {
  fname: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}
