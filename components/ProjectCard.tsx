import Link from 'next/link'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  className?: string
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 h-full flex flex-col ${className}`}>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-tsg-navy mb-3">
          {project.title}
        </h3>
        
        <p className="text-tsg-gray-600 mb-4 leading-relaxed">
          {project.summary}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-tsg-gray-700 mb-2">Impact</h4>
          <p className="text-tsg-gray-600 text-sm leading-relaxed">
            {project.impact}
          </p>
        </div>
        
        {/* Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-tsg-gray-100 text-tsg-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Link */}
      {project.link && (
        <div className="mt-auto">
          <Link
            href={project.link}
            className="inline-flex items-center text-tsg-navy hover:text-tsg-navy-dark font-medium transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  )
}
