'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Member } from '@/types'

interface MemberSpotlightProps {
  members: Member[]
  className?: string
}

export default function MemberSpotlight({ members, className = '' }: MemberSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [members.length])

  const currentMember = members[currentIndex]

  return (
    <div className={`bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white rounded-2xl p-6 sm:p-8 md:p-12 ${className}`}>
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Member Spotlight</h3>
        <p className="text-tsg-gray-200 text-sm sm:text-base">Meet the students making an impact</p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
        {/* Member photo */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <Image
              src={currentMember.photo}
              alt={`${currentMember.name}, ${currentMember.role}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Member info */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">{currentMember.name}</h4>
          <p className="text-tsg-gray-200 mb-3 sm:mb-5 text-base sm:text-lg font-medium">{currentMember.role}</p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-white/90 font-medium">{currentMember.blurb}</p>
          
          <a
            href={currentMember.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-tsg-navy hover:bg-tsg-gray-50 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
