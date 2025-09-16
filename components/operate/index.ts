// Visual enhancement components for the "How We Operate" section
// Each component includes accessibility features and respects prefers-reduced-motion

export { KineticHeaderUnderline } from './KineticHeaderUnderline'
export { AnimatedConnector } from './AnimatedConnector'
export { GlassCard } from './GlassCard'
export { BlueprintMicroGrid } from './BlueprintMicroGrid'

// Component Usage Guide:
// 
// KineticHeaderUnderline: Draws a 2px underline left→right when section enters view
//   - Props: className, color, thickness
//   - Respects reduced motion preferences
//
// AnimatedConnector: Thin SVG line with pulsing chevrons that move every 2s
//   - Props: className, color, pauseOnHover
//   - Pauses animation on hover for better UX
//
// GlassCard: Glass effect with backdrop-blur and hover glow ring
//   - Props: children, className, glowColor, enableHoverGlow
//   - Includes 1px white border and subtle inner shadow
//
// BlueprintMicroGrid: Ultra-faint dot pattern with scroll parallax
//   - Props: className, opacity, parallaxOffset, dotSize, spacing
//   - Throttled scroll events for performance
