'use client'

import React, { useState, useEffect } from 'react'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 max-w-4xl w-[90vw] rounded-xl bg-white shadow-lg border border-gray-300 p-6 flex flex-col md:flex-row md:items-center gap-6 z-50">
      <p className="text-sm md:text-base flex-1 text-gray-800">
      A sua privacidade e segurança são prioridades para a Aprimora Conhecimento. Tratamos suas informações com o máximo cuidado, seguindo nossa{' '}
      <a href="/policyprivacy" className="text-blue-600 underline hover:text-blue-800">
        Política de Privacidade
      </a>.
      </p>
      <button
        onClick={acceptCookies}
        style={{ backgroundColor: '#243c60' }}
        className="text-white font-semibold rounded-md px-6 py-3 hover:brightness-110 transition"
      >
        Aceitar
      </button>
    </div>
  )
}

export default CookieConsent
