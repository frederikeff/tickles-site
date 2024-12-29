// utils/kit.ts
export const SIGNUP_TAGS = {
    HERO: 'website-hero-signup',
    FOOTER: 'website-footer-signup',
    EVENTS: 'website-events-signup',
    COACHING: 'website-coaching-inquiry',
    NEWSLETTER: 'website-newsletter-signup'
  } as const;
  
  export type SignupType = keyof typeof SIGNUP_TAGS;
  
  export interface SignupResponse {
    success: boolean;
    message: string;
    details?: string;
  }