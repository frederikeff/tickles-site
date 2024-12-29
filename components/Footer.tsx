'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Heart } from 'lucide-react'

const footerLinks = {
  learn: [
    { name: 'Newsletter', href: '/newsletter', external: true },
    { name: 'Books', href: '/books', external: true }
  ],
  connect: [
    { name: 'Walk & Connect', href: '/events/walk', external: true },
    { name: 'Play & Connect', href: '/events/play', external: true },
    { name: 'Love & Connect', href: '/events/love', external: true }
  ],
  improve: [
    { name: 'Find Love', href: '/coaching/find-love', external: true },
    { name: 'Improve Love', href: '/coaching/improve-love', external: true }
  ],
  social: [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/ticklesnyc',
      icon: Instagram,
      external: true 
    }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/tickles-logo.webp"
                alt="Tickles Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-600 mb-4 max-w-sm">
              Simplifying love in NYC through authentic connections. Skip the dating app drama and discover meaningful relationships through daily wisdom and genuine experiences.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="text-sm font-semibold text-rose-500 tracking-wider uppercase mb-4 flex items-center">
              Learn
            </h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-gray-600 hover:text-rose-500 transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-rose-500 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-gray-600 hover:text-rose-500 transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-rose-500 tracking-wider uppercase mb-4">
              Improve
            </h3>
            <ul className="space-y-3">
              {footerLinks.improve.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-gray-600 hover:text-rose-500 transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rose-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} tickles.me. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}