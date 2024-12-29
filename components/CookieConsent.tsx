'use client'

import { useState, useEffect } from 'react'
import { setCookie, hasCookie } from 'cookies-next'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    setShowConsent(!hasCookie('cookie-consent'))
  }, [])

  const acceptCookies = () => {
    setCookie('cookie-consent', 'true')
    setShowConsent(false)
    // Initialize analytics here
  }

  const declineCookies = () => {
    setCookie('cookie-consent', 'false')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent