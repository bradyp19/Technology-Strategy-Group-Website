'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

export default function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-tsg-gray-200">
            <Logo size="sm" />
            <button
              type="button"
              className="text-tsg-gray-700 hover:text-tsg-navy p-2"
              onClick={onClose}
              aria-label="Close mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-tsg-gray-700 hover:text-tsg-navy transition-colors duration-200"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-tsg-gray-200 space-y-4">
            <Link
              href="/join"
              className="btn-primary w-full text-center"
              onClick={onClose}
            >
              Join TSG
            </Link>
            <a
              href="/#contact"
              className="btn-secondary w-full text-center"
              onClick={onClose}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
