'use client'

import { useState } from 'react'
import { Section, SectionHeading, SectionSubheading } from '@/components/Section'
import EventCard from '@/components/EventCard'
import Calendar from '@/components/Calendar'
import eventsData from '@/data/events.json'

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list')

  // Sort events by date (upcoming first)
  const sortedEvents = [...eventsData].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    const now = new Date()
    
    // If both dates are in the past, sort by most recent first
    if (dateA < now && dateB < now) {
      return dateB.getTime() - dateA.getTime()
    }
    
    // If one is in the past and one is upcoming, upcoming comes first
    if (dateA < now && dateB >= now) return 1
    if (dateA >= now && dateB < now) return -1
    
    // If both are upcoming, sort by earliest first
    return dateA.getTime() - dateB.getTime()
  })

  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= new Date())
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < new Date())

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Events & Workshops
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 max-w-3xl mx-auto">
            Join us for workshops, case competitions, networking events, and more. Build your skills and connect with industry professionals.
          </p>
        </div>
      </section>

      {/* View Toggle Section */}
      <Section className="bg-tsg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-tsg-navy mb-2">Choose Your View</h2>
              <p className="text-tsg-gray-600">
                Browse events in a list format or use our interactive calendar to see what's happening when.
              </p>
            </div>
            
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-tsg-navy text-white'
                    : 'text-tsg-gray-600 hover:text-tsg-navy'
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'calendar'
                    ? 'bg-tsg-navy text-white'
                    : 'text-tsg-gray-600 hover:text-tsg-navy'
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Events Content */}
      {viewMode === 'list' ? (
        <>
          {/* Upcoming Events */}
          <Section>
            <SectionHeading>Upcoming Events</SectionHeading>
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-tsg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-tsg-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-tsg-gray-600 mb-2">No upcoming events</h3>
                <p className="text-tsg-gray-500">
                  Check back soon for new events and workshops!
                </p>
              </div>
            )}
          </Section>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <Section className="bg-tsg-gray-50">
              <SectionHeading>Past Events</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.slice(0, 6).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              {pastEvents.length > 6 && (
                <div className="text-center mt-8">
                  <p className="text-tsg-gray-600">
                    Showing 6 of {pastEvents.length} past events
                  </p>
                </div>
              )}
            </Section>
          )}
        </>
      ) : (
        /* Calendar View */
        <Section>
          <SectionHeading>Event Calendar</SectionHeading>
          <div className="max-w-4xl mx-auto">
            <Calendar events={eventsData} />
          </div>
        </Section>
      )}

      {/* Event Types Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>Types of Events We Host</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Workshops</h3>
            <p className="text-tsg-gray-600">
              Hands-on sessions covering strategic frameworks, case analysis, and industry-specific topics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Case Competitions</h3>
            <p className="text-tsg-gray-600">
              Competitive events where teams solve real business challenges and present strategic recommendations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Networking</h3>
            <p className="text-tsg-gray-600">
              Opportunities to connect with industry professionals, alumni, and fellow students.
            </p>
          </div>
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tsg-navy mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-xl text-tsg-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mailing list to get notified about upcoming events, or become a member to attend exclusive workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="btn-primary text-lg px-8 py-4"
            >
              Join TSG
            </a>
            <a
              href="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
