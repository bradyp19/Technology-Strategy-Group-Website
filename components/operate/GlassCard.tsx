'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ 
  children, 
  className = '' 
}: GlassCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Simplified glass surface */}
      <div className="relative bg-white/30 backdrop-blur-md rounded-2xl p-8">
        {/* Subtle corner ticks */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/60"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/60"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/60"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/60"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
