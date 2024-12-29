'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, Calendar, Mail } from 'lucide-react'
import NewsletterPopup from './NewsletterPopup'

const features = [
  {
    name: 'Daily Wisdom',
    description: 'Get practical relationship insights delivered to your inbox',
    icon: Mail,
  },
  {
    name: 'Authentic Events',
    description: 'Join curated experiences where connections happen naturally',
    icon: Calendar,
  },
  {
    name: 'Expert Coaching',
    description: 'Transform your approach to love and relationships',
    icon: Heart,
  },
  {
    name: 'Community',
    description: 'Connect with like-minded people seeking real relationships',
    icon: Users,
  },
]

export default function TicklesLanding() {
  const [showNewsletter, setShowNewsletter] = useState(false)

  return (
    <>
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Section */}
          <div className="lg:text-center mb-20">
            <p className="text-base font-semibold tracking-wide text-rose-500 uppercase">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Skip the Dating Drama
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover a more authentic way to find love in NYC through genuine connections and expert guidance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 text-rose-500">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter/Events Promo */}
          <div className="mt-32 rounded-2xl bg-rose-50/50 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="px-6 py-12 sm:px-12 lg:py-16">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Ready to Transform Your Love Life?
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Join our next Chelsea Walk event or start with daily relationship wisdom in your inbox.
                  </p>
                  <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                  <Link 
                    href="https://lu.ma/tickles" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-rose-500 hover:bg-rose-600 transition-colors"
                  >
                    View All Events
                  </Link>
                    <button
                      onClick={() => setShowNewsletter(true)}
                      className="inline-flex items-center justify-center px-6 py-3 border border-rose-500 text-base font-medium rounded-full text-rose-500 bg-white hover:bg-rose-50 transition-colors"
                    >
                      Get Daily Insights
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative lg:aspect-w-5 lg:aspect-h-6">
                <Image
                  src="/images/chelsea-walk.png"
                  alt="Chelsea Walk Event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Popup */}
      <NewsletterPopup 
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        title="Get Daily Love Insights"
        description="Join our community of NYC singles and couples getting daily relationship wisdom."
      />
    </>
  )
}