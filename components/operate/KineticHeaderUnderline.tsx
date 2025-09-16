'use client'

import { useEffect, useRef, useState } from 'react'

interface KineticHeaderUnderlineProps {
  className?: string
  width?: string
  color?: string
  delay?: number
}

export function KineticHeaderUnderline({ 
  className = '',
  width = 'w-24',
  color = 'bg-white/80',
  delay = 200
}: KineticHeaderUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false)
  const underlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      setIsVisible(true) // Show immediately without animation
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (underlineRef.current) {
      observer.observe(underlineRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div 
      ref={underlineRef}
      className={`relative ${className}`}
    >
      <div 
        className={`h-[3px] ${color} transition-all duration-500 ease-out shadow-lg ${
          isVisible ? width : 'w-0'
        }`}
        style={{
          transitionProperty: 'width',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 10px rgba(255,255,255,0.6)'
        }}
      />
    </div>
  )
}