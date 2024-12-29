// components/NewsletterPopup.tsx
'use client'

import { Heart, X } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function NewsletterPopup({
  isOpen,
  onClose,
  title = "Get Daily Love Insights",
  description = "Join our community and receive daily relationship wisdom straight to your inbox."
}: NewsletterPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-6">
          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-500">
            {description}
          </p>
        </div>

        <NewsletterSignup
          signupType="POPUP"
          buttonText="Subscribe"
          placeholder="Enter your email"
          description="No spam, just love advice. Unsubscribe anytime."
        />
      </div>
    </div>
  );
}