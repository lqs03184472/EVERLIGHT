import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { SectionHead } from './SectionHead'
import { laws, lawMap, nations, type Nation } from '../data/game'

function NationPanel({ nation }: { nation: Nation }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])
  const law = lawMap[nation.law]

  return (
    <div className="nation" ref={ref}>
      <motion.img
        className="nation__bg"
        src={nation.image}
        alt={`${nation.name} · ${nation.tagline}`}
        loading="lazy"
        style={reduced ? undefined : { y }}
      />
      <div className="nation__veil" />
      <div className="container nation__inner">
        <motion.div
          className="nation__content"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-18% 0px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="nation__index">
            <span>{nation.index}</span>
            <span className="nation__index-total">/ 0{nations.length}</span>
            <i style={{ background: law.color }} />
            <em>{law.name}</em>
          </div>
          <h3 className="nation__name">{nation.name}</h3>
          <p className="nation__en">{nation.en}</p>
          <p className="nation__tagline">{nation.tagline}</p>
          <p className="nation__desc">{nation.desc}</p>
          <div className="nation__tags">
            {nation.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
      <span className="nation__vertical" aria-hidden="true">
        ELANTIA · {nation.en}
      </span>
    </div>
  )
}

export function NationsSection() {
  return (
    <section className="nations" id="nations">
      <div className="container nations__head">
        <SectionHead index="03" title="五座城邦" en="FIVE REALMS" />
      </div>
      {nations.map((nation) => (
        <NationPanel key={nation.id} nation={nation} />
      ))}
      <div className="container nations__foot">
        <span className="nations__foot-label">六律共存</span>
        <div className="nations__laws">
          {laws.map((law) => (
            <span key={law.id} style={{ color: law.color }}>
              {law.name}
            </span>
          ))}
        </div>
        <span className="nations__foot-motto">每一种律能，都是一种照亮世界的方式。</span>
      </div>
    </section>
  )
}
