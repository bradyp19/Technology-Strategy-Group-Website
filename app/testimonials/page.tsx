import { Section, SectionHeading, SectionSubheading } from '@/components/Section'
import testimonialsData from '@/data/testimonials.json'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  graduationYear: string
  quote: string
  image: string
  rating: number
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy via-tsg-navy-dark to-tsg-navy text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 mb-8 max-w-3xl mx-auto">
            Hear from our alumni who have gone on to excel at top companies in consulting, technology, and strategy roles.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <Section>
        <SectionHeading>What Our Alumni Say</SectionHeading>
        <SectionSubheading>
          Our members have gone on to work at leading companies worldwide, applying the strategic thinking and technology expertise they developed at TSG.
        </SectionSubheading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial: Testimonial) => (
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
      </Section>

      {/* Stats Section */}
      <Section className="bg-tsg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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

      {/* Call to Action */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tsg-navy mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-tsg-gray-600 mb-8 max-w-2xl mx-auto">
            Join TSG and start building the strategic thinking skills that will launch your career at top companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="btn-primary text-lg px-8 py-4">
              Apply Now
            </a>
            <a href="/events" className="btn-secondary text-lg px-8 py-4">
              Attend an Event
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
