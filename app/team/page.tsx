import { Section, SectionHeading, SectionSubheading } from '@/components/Section'
import teamData from '@/data/team.json'

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 max-w-3xl mx-auto">
            The dedicated students and faculty who make Technology Strategy Group possible.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <Section>
        <SectionHeading>Leadership Team</SectionHeading>
        <SectionSubheading>
          Our executive board and faculty advisor work together to create opportunities for all TSG members.
        </SectionSubheading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="relative h-64 bg-tsg-gray-100">
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tsg-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-tsg-gray-600 mb-4">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-tsg-navy hover:text-tsg-navy-dark font-medium transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Join the Team Section */}
      <Section className="bg-tsg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tsg-navy mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-tsg-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students to help lead TSG and shape our organization's future. 
            Leadership positions open up each semester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="btn-primary text-lg px-8 py-4"
            >
              Apply for Leadership
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

      {/* Team Values Section */}
      <Section>
        <SectionHeading>What Makes Our Team Special</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Diverse Perspectives</h3>
            <p className="text-tsg-gray-600">
              Our team represents different majors, backgrounds, and experiences, bringing unique viewpoints to every decision.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Proven Impact</h3>
            <p className="text-tsg-gray-600">
              Our leadership team has successfully executed projects, events, and initiatives that have benefited hundreds of students.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Mentorship Focus</h3>
            <p className="text-tsg-gray-600">
              We prioritize developing the next generation of leaders through hands-on guidance and skill-building opportunities.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Collaborative Culture</h3>
            <p className="text-tsg-gray-600">
              We work together as a cohesive unit, supporting each other and sharing knowledge to achieve our collective goals.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
