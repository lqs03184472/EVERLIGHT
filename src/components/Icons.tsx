export function Sigil({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="25" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
      <g fill="currentColor" fillOpacity="0.9">
        <circle cx="32" cy="7" r="1.7" />
        <circle cx="51.545" cy="16.412" r="1.7" />
        <circle cx="56.373" cy="37.563" r="1.7" />
        <circle cx="42.847" cy="54.525" r="1.7" />
        <circle cx="21.153" cy="54.525" r="1.7" />
        <circle cx="7.627" cy="37.563" r="1.7" />
        <circle cx="12.455" cy="16.412" r="1.7" />
      </g>
      <path
        d="M32 16.5 L35.062 24.609 L42.960 21.040 L39.391 28.938 L47.5 32 L39.391 35.062 L42.960 42.960 L35.062 39.391 L32 47.5 L28.938 39.391 L21.040 42.960 L24.609 35.062 L16.5 32 L24.609 28.938 L21.040 21.040 L28.938 24.609 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />
      <circle cx="32" cy="32" r="2.3" fill="currentColor" />
    </svg>
  )
}

export function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowLeft({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function WindowsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.6 11 4.5v7.2H3zM12.4 4.2 21 3v8.7h-8.6zM3 13h8v7l-8-1.1zM12.4 13H21v8l-8.6-1.2z" />
    </svg>
  )
}

export function MobileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
