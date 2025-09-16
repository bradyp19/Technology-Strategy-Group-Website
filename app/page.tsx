import Link from 'next/link'
import { Section, SectionHeading, SectionSubheading } from '@/components/Section'
import LogoMarquee from '@/components/LogoMarquee'
import MemberSpotlight from '@/components/MemberSpotlight'
import SponsorGrid from '@/components/SponsorGrid'
import { GlassCard } from '@/components/operate/GlassCard'
import { BlueprintMicroGrid } from '@/components/operate/BlueprintMicroGrid'
import { KineticHeaderUnderline } from '@/components/operate/KineticHeaderUnderline'
import sponsorsData from '@/data/sponsors.json'
import membersData from '@/data/members.json'
import teamData from '@/data/team.json'
import testimonialsData from '@/data/testimonials.json'
import Image from 'next/image'

export default function HomePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with better resolution */}
        <div className="absolute inset-0">
          <img 
            src="/tsg2.png" 
            alt="TSG members at UVA Rotunda" 
            className="w-full h-full object-cover object-[center_25%] scale-110"
            style={{ imageRendering: 'high-quality' as any }}
          />
        </div>
        
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60"></div>
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Technology Strategy Group
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The biggest tech-consulting and student-builder club at UVA with over 50+ past clients.
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Member Outcomes Marquee */}
      <LogoMarquee />

      {/* Value Proposition Section */}
      <Section className="bg-gradient-to-b from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Blueprint Micro-Grid Background with intensity scaling */}
        <BlueprintMicroGrid 
          opacity={0.04} 
          parallaxOffset={2} 
          spacing={16}
          intensityScale={true}
          centerOpacity={0.02}
          edgeOpacity={0.06}
          reduceContrast={true}
        />
        
        <div className="text-center max-w-6xl mx-auto relative z-40">
          {/* Clean title with subtle underline */}
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-6 drop-shadow-md" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.2)' }}>
              Value Proposition
            </h2>
            {/* Kinetic underline */}
            <div className="flex justify-center">
              <KineticHeaderUnderline 
                width="w-32" 
                color="bg-white"
                delay={300}
              />
            </div>
          </div>
          
          {/* CEO Quote Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-4" style={{ textShadow: '0 0 6px rgba(255,255,255,0.3)' }}>
                "We go through a rigorous hiring process, seeking builders who want to create so companies don't have to giving students real, impactful work."
              </p>
              <cite className="text-white/70 text-sm font-medium tracking-wide">
                Brady Park, UVA 2027
              </cite>
            </blockquote>
          </div>
          
          {/* Visual Exchange Diagram - aligned to blueprint grid */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16" style={{ marginLeft: '8px', marginRight: '8px' }}>
            {/* Dedicated Builders Box */}
            <GlassCard 
              className="w-full max-w-sm"
            >
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Dedicated Builders</h3>
              <ul className="text-sm text-white/80 space-y-1">
                <li>• Smart Builders</li>
                <li>• Tech Analysts</li>
              </ul>
            </GlassCard>
            
            {/* Sleek Arrows Container */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Forward Arrow */}
              <div className="flex items-center space-x-3">
                <div className="w-16 h-0.5 bg-gradient-to-r from-white to-white/40 shadow-lg"></div>
                <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent drop-shadow-lg"></div>
              </div>
              
              {/* Backward Arrow */}
              <div className="flex items-center space-x-3">
                <div className="w-0 h-0 border-r-[10px] border-r-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent drop-shadow-lg"></div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-white to-white/40 shadow-lg"></div>
              </div>
            </div>
            
            {/* Industry Clients Box */}
            <GlassCard 
              className="w-full max-w-sm"
            >
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Industry Clients</h3>
              <ul className="text-sm text-white/80 space-y-1">
                <li>• Real Projects</li>
                <li>• Tech Opportunities</li>
              </ul>
            </GlassCard>
          </div>
        </div>
        
        {/* Client Presentation Image */}
        <div className="mt-20 text-center">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/tsg1.png" 
              alt="TSG members presenting to first client" 
              className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
            />
            <p className="text-white italic mt-4 text-lg">
              TSG members presenting to our first ever client
            </p>
          </div>
        </div>
      </Section>


      {/* Member Spotlight Section */}
      <Section>
        <SectionHeading>Member Spotlight</SectionHeading>
        <MemberSpotlight members={membersData} />
      </Section>

      {/* Sponsors Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>Our Sponsors</SectionHeading>
        <SectionSubheading>
          We're grateful for the support of leading companies and organizations that share our vision.
        </SectionSubheading>
        
        <SponsorGrid sponsors={sponsorsData} />
      </Section>


      {/* Team Section */}
      <Section className="bg-tsg-gray-50" id="team">
        <SectionHeading>Meet Our Team</SectionHeading>
        <SectionSubheading>
          The dedicated students and faculty who make Technology Strategy Group possible.
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

      {/* Testimonials Section */}
      <Section id="testimonials">
        <SectionHeading>Success Stories</SectionHeading>
        <SectionSubheading>
          Hear from our alumni who have gone on to excel at top companies in consulting, technology, and strategy roles.
        </SectionSubheading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-tsg-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-tsg-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-tsg-navy">{testimonial.name}</div>
                  <div className="text-sm text-tsg-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-tsg-gray-500">{testimonial.company}</div>
                  <div className="text-xs text-tsg-gray-400">Class of {testimonial.graduationYear}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-tsg-navy mb-2">95%</div>
            <div className="text-tsg-gray-600 uppercase tracking-wide">Placement Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-tsg-navy mb-2">$120K</div>
            <div className="text-tsg-gray-600 uppercase tracking-wide">Average Starting Salary</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-tsg-navy mb-2">50+</div>
            <div className="text-tsg-gray-600 uppercase tracking-wide">Companies Represented</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-tsg-navy mb-2">3</div>
            <div className="text-tsg-gray-600 uppercase tracking-wide">Years Average</div>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
              Ready to join TSG or have questions? We'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-100 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-blue-100 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="your.email@virginia.edu"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="" className="text-gray-800">Select a topic</option>
                  <option value="membership" className="text-gray-800">Membership Inquiry</option>
                  <option value="events" className="text-gray-800">Events & Workshops</option>
                  <option value="projects" className="text-gray-800">Project Opportunities</option>
                  <option value="partnership" className="text-gray-800">Partnership</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                  placeholder="Tell us more about your interest in TSG..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
