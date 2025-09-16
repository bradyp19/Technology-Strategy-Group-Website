import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-20 w-auto'
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logos/companies/TSGLogo.jpeg"
        alt="Technology Strategy Group Logo"
        width={size === 'sm' ? 40 : size === 'md' ? 64 : 80}
        height={size === 'sm' ? 40 : size === 'md' ? 64 : 80}
        className={sizeClasses[size]}
        priority
      />
    </div>
  )
}
