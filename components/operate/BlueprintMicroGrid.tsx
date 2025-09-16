'use client'

import { useEffect, useRef, useState } from 'react'

interface BlueprintMicroGridProps {
  className?: string
  opacity?: number
  parallaxOffset?: number
  spacing?: number
  intensityScale?: boolean
  centerOpacity?: number
  edgeOpacity?: number
  reduceContrast?: boolean
}

export function BlueprintMicroGrid({ 
  className = '', 
  opacity = 0.04,
  parallaxOffset = 2,
  spacing = 20,
  intensityScale = false,
  centerOpacity = 0.02,
  edgeOpacity = 0.06,
  reduceContrast = false
}: BlueprintMicroGridProps) {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      return // Skip parallax animation
    }

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
    
    // Vertical lines - reduced opacity
    for (let i = 0; i <= cols; i++) {
      elements.push(
        <line
          key={`v-${i}`}
          x1={i * spacing}
          y1={0}
          x2={i * spacing}
          y2={800}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity={opacity * 0.5}
        />
      )
    }
    
    // Horizontal lines - reduced opacity
    for (let i = 0; i <= rows; i++) {
      elements.push(
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * spacing + scrollY}
          x2={1200}
          y2={i * spacing + scrollY}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity={opacity * 0.5}
        />
      )
    }
    
    // Diagonal lines - more prominent pattern
    const diagonalSpacing = spacing * 1.5
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
            strokeWidth="1.2"
            opacity={opacity * 1.2}
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
            strokeWidth="1.2"
            opacity={opacity * 1.2}
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
      {/* Subtle scrim gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-900/5 to-transparent pointer-events-none z-10"></div>
      
      {/* Light vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_0%,transparent_45%,rgba(0,0,40,.10)_100%)] pointer-events-none z-20"></div>
      
      {/* Blueprint pattern */}
      <svg 
        className={`w-full h-full text-white ${reduceContrast ? 'mix-blend-soft-light' : ''}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ 
          transform: `translateY(${scrollY * 0.9}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {generateBlueprintPattern()}
      </svg>
      
    </div>
  )
}
