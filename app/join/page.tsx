'use client'

import { useState } from 'react'
import { Section, SectionHeading, SectionSubheading } from '@/components/Section'

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    whyJoin: '',
    experience: '',
    interests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = 'TSG Membership Application'
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Major: ${formData.major}
Year: ${formData.year}

Why do you want to join TSG?
${formData.whyJoin}

Relevant experience:
${formData.experience}

Areas of interest:
${formData.interests}
    `.trim()
    
    const mailtoLink = `mailto:tsg@virginia.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Join Technology Strategy Group
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 max-w-3xl mx-auto">
            Ready to build real strategy skills? Here's how to become part of our community.
          </p>
        </div>
      </section>

      {/* Application Steps Section */}
      <Section>
        <SectionHeading>How to Apply</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Attend Events</h3>
              <p className="text-tsg-gray-600">
                Start by coming to our workshops, case competitions, and networking events to learn more about what we do.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Submit Application</h3>
              <p className="text-tsg-gray-600">
                Fill out the application form below, telling us about your background, interests, and why you want to join TSG.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Interview & Welcome</h3>
              <p className="text-tsg-gray-600">
                Meet with our leadership team for a brief conversation, then join our community and start contributing!
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Form Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>Application Form</SectionHeading>
        <SectionSubheading>
          Tell us about yourself and why you'd like to join TSG. We review applications each semester.
        </SectionSubheading>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                  UVA Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                  Major/Program
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                  Expected Graduation Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                >
                  <option value="">Select year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="whyJoin" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                Why do you want to join TSG? *
              </label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                placeholder="Tell us about your interest in technology strategy and what you hope to gain from TSG..."
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                placeholder="Any relevant coursework, projects, internships, or work experience..."
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="interests" className="block text-sm font-medium text-tsg-gray-700 mb-2">
                Areas of Interest
              </label>
              <textarea
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-tsg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tsg-navy focus:border-transparent"
                placeholder="What areas of technology strategy interest you most? (e.g., AI, healthcare, fintech, consulting...)"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary text-lg px-8 py-4"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* Community Section */}
      <Section>
        <SectionHeading>Join Our Community</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Discord Community</h3>
              <p className="text-tsg-gray-600 mb-4">
                Connect with current members, get updates on events, and join discussions about technology strategy.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-tsg-navy hover:text-tsg-navy-dark font-medium"
              >
                Join Discord Server
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Slack Workspace</h3>
              <p className="text-tsg-gray-600 mb-4">
                Collaborate on projects, share resources, and stay connected with the TSG community.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-tsg-navy hover:text-tsg-navy-dark font-medium"
              >
                Join Slack Workspace
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                When do you review applications?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                We review applications at the beginning of each semester (September and January). Applications submitted outside these periods will be reviewed during the next cycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                What if I don't have experience in strategy or consulting?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                No experience required! We welcome students from all backgrounds. What matters most is your interest in learning and your willingness to contribute to our community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                How competitive is the application process?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                We typically accept 20-30 new members each semester. We look for students who are genuinely interested in technology strategy and committed to contributing to our community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                Can I still attend events if I'm not a member?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                Yes! Many of our events are open to all UVA students. This is a great way to learn more about TSG and meet current members before applying.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
