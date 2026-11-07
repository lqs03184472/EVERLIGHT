export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
