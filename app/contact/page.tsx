import { Section, SectionHeading, SectionSubheading } from '@/components/Section'

const contactMethods = [
  {
    name: 'Email',
    value: 'tsg@virginia.edu',
    href: 'mailto:tsg@virginia.edu',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Location',
    value: 'University of Virginia\nCharlottesville, VA 22903',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    name: 'Office Hours',
    value: 'By appointment\nContact us to schedule',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
      </svg>
    )
  },
  {
    name: 'Discord',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
      </svg>
    )
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 max-w-3xl mx-auto">
            Have questions about TSG? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <Section>
        <SectionHeading>Contact Information</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div key={method.name} className="text-center">
                <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-tsg-navy mb-3">{method.name}</h3>
                {method.href === '#' ? (
                  <p className="text-tsg-gray-600 whitespace-pre-line">{method.value}</p>
                ) : (
                  <a
                    href={method.href}
                    className="text-tsg-navy hover:text-tsg-navy-dark font-medium transition-colors duration-200"
                  >
                    {method.value}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Social Media Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>Connect With Us</SectionHeading>
        <SectionSubheading>
          Follow us on social media for the latest updates, event announcements, and insights.
        </SectionSubheading>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-tsg-navy rounded-full flex items-center justify-center mb-3 text-white group-hover:bg-tsg-navy-dark transition-colors duration-200">
                  {social.icon}
                </div>
                <span className="text-sm font-medium text-tsg-gray-700 group-hover:text-tsg-navy transition-colors duration-200">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section>
        <SectionHeading>Find Us at UVA</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="bg-tsg-gray-100 rounded-lg p-8 text-center">
            <div className="w-24 h-24 bg-tsg-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-tsg-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-gray-600 mb-2">Map Coming Soon</h3>
            <p className="text-tsg-gray-500 mb-4">
              We're working on adding an interactive map to show our location on UVA's campus.
            </p>
            <p className="text-tsg-gray-600">
              For now, you can find us at the University of Virginia in Charlottesville, Virginia.
            </p>
          </div>
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section className="bg-tsg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tsg-navy mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-tsg-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a student looking to join, a company interested in partnering, or just want to learn more, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="btn-primary text-lg px-8 py-4"
            >
              Join TSG
            </a>
            <a
              href="/events"
              className="btn-secondary text-lg px-8 py-4"
            >
              Attend Events
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeading>Common Questions</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                How can I schedule a meeting with TSG leadership?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                Send us an email at tsg@virginia.edu with your request and availability. We'll get back to you within 2-3 business days to schedule a meeting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                Can companies partner with TSG on projects?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                Absolutely! We're always looking for companies and organizations to partner with on strategic projects. 
                Contact us to discuss potential collaboration opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                How can alumni stay connected with TSG?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                Alumni can stay connected through our LinkedIn group, attend networking events, mentor current members, 
                or partner with us on projects. Reach out to learn more about alumni engagement opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                What's the best way to get updates about TSG activities?
              </h3>
              <p className="text-tsg-gray-600 leading-relaxed">
                Follow us on social media, join our Discord server, or send us an email to be added to our mailing list 
                for regular updates about events, projects, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
