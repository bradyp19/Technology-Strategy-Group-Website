interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
    >
      <div className="container mx-auto container-padding">
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({ children, className = '', size = 'md' }: SectionHeadingProps) {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl font-bold',
    md: 'text-3xl md:text-4xl font-bold',
    lg: 'text-4xl md:text-5xl font-bold'
  }

  return (
    <h2 className={`${sizeClasses[size]} text-tsg-navy text-center mb-8 md:mb-12 ${className}`}>
      {children}
    </h2>
  )
}

export function SectionSubheading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg md:text-xl text-tsg-gray-600 text-center max-w-3xl mx-auto mb-12 ${className}`}>
      {children}
    </p>
  )
}
