'use client'

import React from 'react'
import Image from 'next/image'

const companyLogos = [
  { name: 'Apple', logo: '/logos/companies/Apple_logo_black.svg.png', alt: 'Apple logo' },
  { name: 'EY', logo: '/logos/companies/EYlogo.png', alt: 'EY logo' },
  { name: 'Capital One', logo: '/logos/companies/capitalonelogo.png', alt: 'Capital One logo' },
  { name: 'Leidos', logo: '/logos/companies/leidoslogo.png', alt: 'Leidos logo' },
  { name: 'Silver Lake', logo: '/logos/companies/silverlakelogo.png', alt: 'Silver Lake logo' },
  { name: 'Strategy', logo: '/logos/companies/strategylogo.png', alt: 'Strategy logo' },
  { name: 'Riipen', logo: '/logos/companies/riipenlogo.png', alt: 'Riipen logo' },
  { name: 'Ojasys', logo: '/logos/companies/ojasyslogo.jpeg', alt: 'Ojasys logo' },
  { name: 'Certinia', logo: '/logos/companies/certinialogo.png', alt: 'Certinia logo' },
  { name: 'Freddie Mac', logo: '/logos/companies/freddiemac.png', alt: 'Freddie Mac logo' },
  { name: 'Guidepoint Security', logo: '/logos/companies/guidepoint-security-logo.webp', alt: 'Guidepoint Security logo' }
]

export default function LogoMarquee() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold text-tsg-navy mb-8">
          Where Our Members Go
        </h2>
        <div className="relative">
          <div className="flex animate-marquee">
            {companyLogos.map((company, index) => {
              // Larger logos for companies with smaller text
              const isLargerLogo = ['Leidos', 'Silver Lake', 'Strategy', 'Freddie Mac', 'Guidepoint Security'].includes(company.name);
              // Smaller logos for Apple and EY
              const isSmallerLogo = ['Apple', 'EY'].includes(company.name);
              const logoClass = isLargerLogo 
                ? "h-20 w-auto object-contain max-w-40" 
                : isSmallerLogo
                ? "h-12 w-auto object-contain max-w-24"
                : "h-16 w-auto object-contain max-w-32";
              
              return (
                <div
                  key={`${company.name}-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center h-20 mx-8 ${company.name === 'EY' ? '-mt-1' : ''}`}
                >
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={128}
                    height={64}
                    className={logoClass}
                  />
                </div>
              );
            })}
            {/* Duplicate logos for seamless loop */}
            {companyLogos.map((company, index) => {
              // Larger logos for companies with smaller text
              const isLargerLogo = ['Leidos', 'Silver Lake', 'Strategy', 'Freddie Mac', 'Guidepoint Security'].includes(company.name);
              // Smaller logos for Apple and EY
              const isSmallerLogo = ['Apple', 'EY'].includes(company.name);
              const logoClass = isLargerLogo 
                ? "h-20 w-auto object-contain max-w-40" 
                : isSmallerLogo
                ? "h-12 w-auto object-contain max-w-24"
                : "h-16 w-auto object-contain max-w-32";
              
              return (
                <div
                  key={`${company.name}-duplicate-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center h-20 mx-8 ${company.name === 'EY' ? '-mt-1' : ''}`}
                >
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={128}
                    height={64}
                    className={logoClass}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center text-tsg-gray-600 mt-4 text-sm italic">
          Companies where TSG members have joined or interned
        </p>
      </div>
    </section>
  )
}
