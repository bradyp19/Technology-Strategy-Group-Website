'use client'

import React from 'react'
import Image from 'next/image'

const companyLogos = [
  { name: 'Strategy', logo: '/logos/companies/strategylogo.png', alt: 'Strategy logo' },
  { name: 'Freddie Mac', logo: '/logos/companies/freddiemac.png', alt: 'Freddie Mac logo' },
  { name: 'Goldman Sachs', logo: '/logos/companies/goldmansachs.jpeg', alt: 'Goldman Sachs logo' },
  { name: 'SAS', logo: '/logos/companies/sas.png', alt: 'SAS logo' },
  { name: 'Apple', logo: '/logos/companies/Apple_logo_black.svg.png', alt: 'Apple logo' },
  { name: 'EY', logo: '/logos/companies/EYlogo.png', alt: 'EY logo' },
  { name: 'Capital One', logo: '/logos/companies/capitalonelogo.png', alt: 'Capital One logo' },
  { name: 'Leidos', logo: '/logos/companies/leidoslogo.png', alt: 'Leidos logo' },
  { name: 'Silver Lake', logo: '/logos/companies/silverlakelogo.png', alt: 'Silver Lake logo' },
  { name: 'Riipen', logo: '/logos/companies/riipenlogo.png', alt: 'Riipen logo' },
  { name: 'Ojasys', logo: '/logos/companies/ojasyslogo.jpeg', alt: 'Ojasys logo' },
  { name: 'Certinia', logo: '/logos/companies/certinialogo.png', alt: 'Certinia logo' },
  { name: 'Guidepoint Security', logo: '/logos/companies/guidepoint-security-logo.webp', alt: 'Guidepoint Security logo' },
  { name: 'Eurex', logo: '/logos/companies/eurex.png', alt: 'Eurex logo' }
]

export default function LogoMarquee() {
  return (
    <section className="bg-white py-8 sm:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-tsg-navy mb-6 sm:mb-8">
          Where Our Members Go
        </h2>
        <div className="relative">
          <div className="flex animate-marquee">
            {companyLogos.map((company, index) => {
              // Larger logos for companies with smaller text
              const isLargerLogo = ['Leidos', 'Silver Lake', 'Strategy', 'Freddie Mac', 'Guidepoint Security', 'Goldman Sachs', 'Eurex', 'SAS'].includes(company.name);
              // Smaller logos for Apple and EY
              const isSmallerLogo = ['Apple', 'EY'].includes(company.name);
              const logoClass = isLargerLogo 
                ? "h-12 sm:h-16 md:h-20 w-auto object-contain max-w-24 sm:max-w-32 md:max-w-40" 
                : isSmallerLogo
                ? "h-8 sm:h-10 md:h-12 w-auto object-contain max-w-16 sm:max-w-20 md:max-w-24"
                : "h-10 sm:h-12 md:h-16 w-auto object-contain max-w-20 sm:max-w-24 md:max-w-32";
              
              return (
                <div
                  key={`${company.name}-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center h-12 sm:h-16 md:h-20 mx-4 sm:mx-6 md:mx-8 ${company.name === 'EY' ? '-mt-1' : ''}`}
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
              const isLargerLogo = ['Leidos', 'Silver Lake', 'Strategy', 'Freddie Mac', 'Guidepoint Security', 'Goldman Sachs', 'Eurex', 'SAS'].includes(company.name);
              // Smaller logos for Apple and EY
              const isSmallerLogo = ['Apple', 'EY'].includes(company.name);
              const logoClass = isLargerLogo 
                ? "h-12 sm:h-16 md:h-20 w-auto object-contain max-w-24 sm:max-w-32 md:max-w-40" 
                : isSmallerLogo
                ? "h-8 sm:h-10 md:h-12 w-auto object-contain max-w-16 sm:max-w-20 md:max-w-24"
                : "h-10 sm:h-12 md:h-16 w-auto object-contain max-w-20 sm:max-w-24 md:max-w-32";
              
              return (
                <div
                  key={`${company.name}-duplicate-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center h-12 sm:h-16 md:h-20 mx-4 sm:mx-6 md:mx-8 ${company.name === 'EY' ? '-mt-1' : ''}`}
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
        <p className="text-center text-tsg-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm italic">
          Companies where TSG members have joined or interned
        </p>
      </div>
    </section>
  )
}
