'use client'

import { useState, useMemo } from 'react'
import { Section, SectionHeading, SectionSubheading } from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projectsData.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projectsData
    }
    return projectsData.filter(project =>
      selectedTags.some(tag => project.tags.includes(tag))
    )
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tsg-navy to-tsg-navy-dark text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-tsg-gray-200 max-w-3xl mx-auto">
            Real strategic challenges, real solutions, real impact. See how our members are making a difference.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <Section className="bg-tsg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-tsg-navy mb-2">Filter by Category</h2>
              <p className="text-tsg-gray-600">
                {filteredProjects.length} of {projectsData.length} projects
              </p>
            </div>
            {selectedTags.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-tsg-navy hover:text-tsg-navy-dark font-medium transition-colors duration-200"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedTags.includes(tag)
                    ? 'bg-tsg-navy text-white'
                    : 'bg-white text-tsg-gray-700 hover:bg-tsg-gray-100 border border-tsg-gray-200'
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Grid Section */}
      <Section>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-tsg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tsg-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-tsg-gray-600 mb-2">No projects found</h3>
            <p className="text-tsg-gray-500 mb-4">
              Try adjusting your filters or check back later for new projects.
            </p>
            <button
              onClick={clearFilters}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Section>

      {/* Project Process Section */}
      <Section className="bg-tsg-gray-50">
        <SectionHeading>How Our Projects Work</SectionHeading>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Identify Challenge</h3>
              <p className="text-tsg-gray-600">
                We partner with companies and organizations to identify real strategic challenges that need innovative solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Develop Strategy</h3>
              <p className="text-tsg-gray-600">
                Our teams research, analyze, and develop comprehensive strategic recommendations using proven frameworks and methodologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-tsg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-tsg-navy mb-3">Deliver Impact</h3>
              <p className="text-tsg-gray-600">
                We present our findings to stakeholders and work with them to implement solutions that create measurable value.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tsg-navy mb-6">
            Want to Work on Projects Like These?
          </h2>
          <p className="text-xl text-tsg-gray-600 mb-8 max-w-2xl mx-auto">
            Join TSG and start contributing to real strategic challenges while building your skills and portfolio.
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
              Partner With Us
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
