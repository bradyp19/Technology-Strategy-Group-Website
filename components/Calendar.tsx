'use client'

import { useState, useEffect } from 'react'
import { Event } from '@/types'

interface CalendarProps {
  events: Event[]
  className?: string
}

export default function Calendar({ events, className = '' }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Get current month's start and end dates
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  // Generate calendar days
  const calendarDays = []
  const current = new Date(startDate)
  
  while (current <= lastDay || current.getDay() !== 0) {
    calendarDays.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  // Check if a date has events
  const hasEvents = (date: Date) => {
    return events.some(event => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  // Navigate to previous/next month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Calendar header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-tsg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="text-xl font-semibold text-tsg-navy">
          {monthNames[month]} {year}
        </h3>
        
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-tsg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-tsg-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          const isCurrentMonth = date.getMonth() === month
          const isToday = date.toDateString() === new Date().toDateString()
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()
          const hasEvent = hasEvents(date)

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`
                p-2 text-sm rounded-lg transition-all duration-200 min-h-[3rem] flex items-center justify-center relative
                ${isCurrentMonth 
                  ? 'text-tsg-gray-900 hover:bg-tsg-gray-100' 
                  : 'text-tsg-gray-400'
                }
                ${isToday ? 'bg-tsg-navy text-white hover:bg-tsg-navy-dark' : ''}
                ${isSelected && !isToday ? 'bg-tsg-navy-light text-white' : ''}
                ${hasEvent ? 'font-semibold' : ''}
              `}
              aria-label={`${date.toLocaleDateString()}${hasEvent ? ' - Has events' : ''}`}
            >
              {date.getDate()}
              {hasEvent && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-tsg-navy rounded-full"></div>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Selected date events */}
      {selectedDate && (
        <div className="mt-6 p-4 bg-tsg-gray-50 rounded-lg">
          <h4 className="font-semibold text-tsg-navy mb-3">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h4>
          {getEventsForDate(selectedDate).length > 0 ? (
            <div className="space-y-2">
              {getEventsForDate(selectedDate).map((event) => (
                <div key={event.id} className="text-sm">
                  <div className="font-medium text-tsg-gray-900">{event.title}</div>
                  <div className="text-tsg-gray-600">{event.time} • {event.location}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-tsg-gray-500 text-sm">No events scheduled for this date.</p>
          )}
        </div>
      )}
    </div>
  )
}
