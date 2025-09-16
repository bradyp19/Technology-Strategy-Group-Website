import Link from 'next/link'
import { Event } from '@/types'

interface EventCardProps {
  event: Event
  className?: string
}

export default function EventCard({ event, className = '' }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="bg-tsg-navy text-white px-3 py-1 rounded-full text-sm font-medium">
          {formatDate(event.date)}
        </div>
        <div className="text-tsg-gray-500 text-sm">
          {event.time}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-tsg-navy mb-2">
        {event.title}
      </h3>
      
      <p className="text-tsg-gray-600 mb-4 line-clamp-3">
        {event.summary}
      </p>
      
      <div className="flex items-center text-tsg-gray-500 text-sm mb-4">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {event.location}
      </div>
      
      {event.link && (
        <Link
          href={event.link}
          className="inline-flex items-center text-tsg-navy hover:text-tsg-navy-dark font-medium transition-colors duration-200"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}
