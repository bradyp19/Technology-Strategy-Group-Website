'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedConnectorProps {
  className?: string
  color?: string
  pauseOnHover?: boolean
}

export function AnimatedConnector({ 
  className = '', 
  color = 'blue-500',
  pauseOnHover = true 
}: AnimatedConnectorProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setAnimationPhase(prev => (prev + 1) % 3)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovered])

  const chevronPositions = [
    { x: '20%', opacity: 0.6 },
    { x: '50%', opacity: 0.8 },
    { x: '80%', opacity: 0.6 }
  ]

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Main connector line */}
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-${color} to-transparent opacity-30`} />
      
      {/* Animated chevrons */}
      {chevronPositions.map((pos, index) => (
        <div
          key={index}
          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            animationPhase === index ? 'opacity-100 scale-110' : 'opacity-40 scale-100'
          }`}
          style={{ 
            left: pos.x,
            transform: `translate(-50%, -50%) ${animationPhase === index ? 'scale(1.1)' : 'scale(1)'}`,
            transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            className={`text-${color}`}
          >
            <path 
              d="M1 4L6 1L11 4L6 7L1 4Z" 
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>
      ))}
      
      {/* Subtle pulsing dots */}
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
        <div className={`w-1 h-1 bg-${color} rounded-full animate-pulse opacity-60`} />
      </div>
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
        <div className={`w-1 h-1 bg-${color} rounded-full animate-pulse opacity-60`} />
      </div>
    </div>
  )
}
