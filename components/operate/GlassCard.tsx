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
      {/* Simple card container */}
      <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-3xl p-12 shadow-lg">
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
