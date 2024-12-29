import Image from 'next/image'
import NewsletterSignup from './NewsletterSignup'

export default function Hero() {
  return (
    <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-rose-500">
                Introducing Tickles
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Love Simplified in</span>
                <span className="block text-rose-500">New York City</span>
              </span>
            </h1>
            
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Skip the dating app drama. Get daily relationship wisdom and join authentic experiences where real connections happen naturally.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0">
              <NewsletterSignup
                signupType="HERO"
                buttonText="Join Now"
                placeholder="Enter your email for daily wisdom"
                description="Get daily insights on love, dating, and relationships in NYC."
              />
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-image.png"
                  alt="Couple walking in NYC"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-rose-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}