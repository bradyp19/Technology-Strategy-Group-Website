'use client'

import { useEffect, useRef, useState } from 'react'

interface BlueprintMicroGridProps {
  className?: string
  opacity?: number
  parallaxOffset?: number
  spacing?: number
}

export function BlueprintMicroGrid({ 
  className = '', 
  opacity = 0.08,
  parallaxOffset = 2,
  spacing = 20
}: BlueprintMicroGridProps) {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const elementTop = rect.top
        const elementHeight = rect.height
        const windowHeight = window.innerHeight
        
        // Only animate when element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
          setScrollY(progress * parallaxOffset)
        }
      }
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [parallaxOffset])

  // Generate clean blueprint grid pattern
  const generateBlueprintPattern = () => {
    const elements = []
    
    // Main grid lines
    const cols = Math.ceil(1200 / spacing)
    const rows = Math.ceil(800 / spacing)
    
    // Vertical lines
    for (let i = 0; i <= cols; i++) {
      elements.push(
        <line
          key={`v-${i}`}
          x1={i * spacing}
          y1={0}
          x2={i * spacing}
          y2={800}
          stroke="currentColor"
          strokeWidth="1"
          opacity={opacity}
        />
      )
    }
    
    // Horizontal lines
    for (let i = 0; i <= rows; i++) {
      elements.push(
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * spacing + scrollY}
          x2={1200}
          y2={i * spacing + scrollY}
          stroke="currentColor"
          strokeWidth="1"
          opacity={opacity}
        />
      )
    }
    
    // Diagonal lines - simple pattern
    const diagonalSpacing = spacing * 2
    for (let i = 0; i < 1200; i += diagonalSpacing) {
      for (let j = 0; j < 800; j += diagonalSpacing) {
        // Diagonal from top-left to bottom-right
        elements.push(
          <line
            key={`diag1-${i}-${j}`}
            x1={i}
            y1={j}
            x2={i + diagonalSpacing}
            y2={j + diagonalSpacing}
            stroke="currentColor"
            strokeWidth="0.8"
            opacity={opacity * 0.7}
          />
        )
        
        // Diagonal from top-right to bottom-left
        elements.push(
          <line
            key={`diag2-${i}-${j}`}
            x1={i + diagonalSpacing}
            y1={j}
            x2={i}
            y2={j + diagonalSpacing}
            stroke="currentColor"
            strokeWidth="0.8"
            opacity={opacity * 0.7}
          />
        )
      }
    }
    
    return elements
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg 
        className="w-full h-full text-white" 
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {generateBlueprintPattern()}
      </svg>
    </div>
  )
}
