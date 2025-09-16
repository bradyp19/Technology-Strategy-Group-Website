'use client'

import { useEffect, useRef, useState } from 'react'

interface KineticHeaderUnderlineProps {
  className?: string
  color?: string
  thickness?: number
}

export function KineticHeaderUnderline({ 
  className = '', 
  color = 'slate-800',
  thickness = 2 
}: KineticHeaderUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isComplete) {
          setIsVisible(true)
          // Complete animation after 800ms
          setTimeout(() => setIsComplete(true), 800)
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isComplete])

  return (
    <div 
      ref={elementRef}
      className={`relative ${className}`}
    >
      <div 
        className={`absolute bottom-0 left-0 h-${thickness} bg-${color} transition-all duration-800 ease-out ${
          isVisible ? 'w-full' : 'w-0'
        }`}
        style={{
          transitionProperty: 'width',
          transitionDuration: '800ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  )
}
