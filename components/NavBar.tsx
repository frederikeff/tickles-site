'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Events', href: 'https://lu.ma/tickles', external: true },
  { name: 'About', href: '/about' },
  { name: 'Coaching', href: '/coaching' },
  { name: 'Products', href: '/products' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/tickles-logo.png"
                alt="Tickles Logo"
                width={120}
                height={40}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-500 rounded-full transition-all duration-200 hover:bg-rose-50"
              >
                {item.name}
              </a>
            ))}
            
            {/* Auth buttons */}
            <div className="ml-6 flex items-center space-x-3">
              <a 
                href="/login" 
                className="text-sm font-medium text-gray-700 hover:text-rose-500 px-4 py-2 rounded-full transition-all duration-200"
              >
                Login
              </a>
              <a
                href="/subscribe"
                className="px-6 py-2 text-sm font-medium text-white bg-rose-500 rounded-full hover:bg-rose-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-rose-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="py-3 space-y-2">
                <a
                  href="/login"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg"
                >
                  Login
                </a>
                <a
                  href="/subscribe"
                  className="block px-4 py-2 text-base font-medium text-white bg-rose-500 rounded-lg hover:bg-rose-600"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}