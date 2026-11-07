import type { ReactNode } from 'react'

interface SectionHeadProps {
  index: string
  title: string
  en: string
  aside?: ReactNode
}

export function SectionHead({ index, title, en, aside }: SectionHeadProps) {
  return (
    <div className={`sechead ${aside ? 'sechead--aside' : ''}`}>
      <span className="sechead__no">{index}</span>
      <h2 className="sechead__title">{title}</h2>
      <span className="sechead__en">{en}</span>
      {aside ? <div className="sechead__aside">{aside}</div> : null}
    </div>
  )
}
