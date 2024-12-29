'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import type { SignupType } from '@/utils/kit'

interface NewsletterSignupProps {
  signupType: SignupType;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export default function NewsletterSignup({
  signupType,
  description,
  buttonText,
  placeholder = 'Enter your email',
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          signupType
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        console.error('Subscription error:', data)
      }
    } catch (error) {
      setStatus('error')
      console.error('Submit error:', error)
    }
  }

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white/80"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? (
              <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
            ) : buttonText ? (
              <span className="px-3">{buttonText}</span>
            ) : (
              <Send size={24} />
            )}
          </button>
        </div>
        
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
        
        {status === 'success' && (
          <p className="text-emerald-600 text-sm">Welcome aboard! Check your inbox.</p>
        )}
        {status === 'error' && (
          <p className="text-rose-600 text-sm">Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}