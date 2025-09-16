import Image from 'next/image'
import { Sponsor } from '@/types'

interface SponsorGridProps {
  sponsors: Sponsor[]
  className?: string
}

export default function SponsorGrid({ sponsors, className = '' }: SponsorGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ${className}`}>
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          {sponsor.url ? (
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={`Visit ${sponsor.name} website`}
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 max-w-full"
              />
            </a>
          ) : (
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 max-w-full"
            />
          )}
        </div>
      ))}
    </div>
  )
}
