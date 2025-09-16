import { Section, SectionHeading, SectionSubheading } from '@/components/Section'

const faqs = [
  {
    question: "What is Technology Strategy Group?",
    answer: "TSG is a student organization at UVA that bridges technology and business strategy. We help students develop strategic thinking skills through real projects, industry connections, and hands-on experience."
  },
  {
    question: "Who can join TSG?",
    answer: "Any UVA student interested in technology strategy, consulting, product management, or business strategy is welcome to apply. We value diverse perspectives and backgrounds."
  },
  {
    question: "What kind of projects do you work on?",
    answer: "Our projects range from digital transformation strategies for healthcare systems to AI ethics frameworks for financial services. We partner with real companies and organizations to solve actual strategic challenges."
  },
  {
    question: "How much time commitment is required?",
    answer: "Members typically spend 5-10 hours per week on TSG activities, including project work, events, and meetings. We understand academic priorities and work around exam schedules."
  },
  {
    question: "Do you help with career preparation?",
    answer: "Yes! We provide interview preparation, case study practice, networking opportunities, and mentorship to help members secure internships and full-time positions in consulting, tech, and strategy roles."
  },
  {
    question: "How do I get involved?",
    answer: "Start by attending our events and workshops to learn more about what we do. Then submit an application through our website. We review applications each semester and welcome new members."
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            About Technology Strategy Group
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 max-w-3xl mx-auto">
            We're a community of strategic thinkers, problem solvers, and future technology leaders at the University of Virginia.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Section>
        <SectionHeading>Our Mission</SectionHeading>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-tsg-gray-700 leading-relaxed mb-8">
            Technology Strategy Group exists to bridge the gap between technology and business strategy. 
            We believe that the most successful organizations are those that can effectively align their 
            technological capabilities with their strategic objectives.
          </p>
          <p className="text-lg text-tsg-gray-600 leading-relaxed">
            Our mission is to prepare UVA students to become strategic technology leaders who can 
            navigate complex business challenges, make data-driven decisions, and drive innovation 
            in an increasingly digital world.
          </p>
        </div>
      </Section>

      {/* What We Value Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>What We Value</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Innovation</h3>
            <p className="text-tsg-gray-600">
              We embrace new ideas and approaches, constantly seeking better ways to solve complex problems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Collaboration</h3>
            <p className="text-tsg-gray-600">
              We believe the best solutions come from diverse teams working together toward common goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Excellence</h3>
            <p className="text-tsg-gray-600">
              We strive for the highest quality in everything we do, from project deliverables to member development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Learning</h3>
            <p className="text-tsg-gray-600">
              We foster a culture of continuous learning and growth, both individually and as an organization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Impact</h3>
            <p className="text-tsg-gray-600">
              We measure our success by the real-world impact of our work and the growth of our members.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-tsg-navy rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-navy mb-3">Passion</h3>
            <p className="text-tsg-gray-600">
              We're driven by our passion for technology and strategy, and we love sharing that enthusiasm with others.
            </p>
          </div>
        </div>
      </Section>

      {/* How We Operate Section */}
      <Section>
        <SectionHeading>How We Operate</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tsg-navy mb-2">Project-Based Learning</h3>
                <p className="text-tsg-gray-600 leading-relaxed">
                  Our members work on real strategic challenges with actual companies and organizations. 
                  This hands-on approach ensures that learning is practical, relevant, and immediately applicable.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tsg-navy mb-2">Industry Connections</h3>
                <p className="text-tsg-gray-600 leading-relaxed">
                  We maintain strong relationships with industry professionals, alumni, and companies. 
                  These connections provide mentorship, networking opportunities, and real-world insights.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tsg-navy mb-2">Skill Development</h3>
                <p className="text-tsg-gray-600 leading-relaxed">
                  Through workshops, case competitions, and structured learning programs, we help members 
                  develop the analytical, communication, and leadership skills needed for success.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-tsg-navy mb-2">Community Support</h3>
                <p className="text-tsg-gray-600 leading-relaxed">
                  We foster a supportive community where members can learn from each other, share experiences, 
                  and build lasting friendships with like-minded peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-tsg-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-tsg-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
