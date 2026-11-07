import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { characters, lawMap, laws, type LawId } from '../data/game'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import { Arrow } from './Icons'
import { EASE } from '../lib/motion'

type Filter = 'all' | LawId

export function CharacterStage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [slug, setSlug] = useState(characters[0].slug)

  const visible = filter === 'all' ? characters : characters.filter((c) => c.law === filter)
  const active = visible.find((c) => c.slug === slug) ?? visible[0]
  const law = lawMap[active.law]

  const selectLaw = (next: Filter) => {
    setFilter(next)
    const list = next === 'all' ? characters : characters.filter((c) => c.law === next)
    setSlug((prev) => (list.some((c) => c.slug === prev) ? prev : list[0].slug))
  }

  return (
    <section className="section characters" id="characters">
      <div className="container">
        <SectionHead
          index="02"
          title="角色"
          en="CHARACTER FILES"
          aside={
            <Link className="sechead__link" to="/characters">
              全部 {characters.length} 位角色 <Arrow />
            </Link>
          }
        />

        <div className="char-filters" role="tablist" aria-label="按律能筛选角色">
          <button
            className={`char-filter ${filter === 'all' ? 'is-active' : ''}`}
            onClick={() => selectLaw('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            全部
          </button>
          {laws.map((item) => (
            <button
              key={item.id}
              className={`char-filter ${filter === item.id ? 'is-active' : ''}`}
              onClick={() => selectLaw(item.id)}
              role="tab"
              aria-selected={filter === item.id}
              style={{ '--dot': item.color } as CSSProperties}
            >
              <i className="char-filter__dot" />
              {item.name}
            </button>
          ))}
        </div>

        <div className="char-stage">
          <Reveal className="char-visual-wrap">
            <div
              className="char-visual"
              style={{ '--law': law.color } as CSSProperties}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={active.slug}
                  src={active.portrait}
                  alt={`${active.name} · ${active.title}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                />
              </AnimatePresence>
              <div className="char-visual__veil" />
              <span className="char-visual__no">
                {String(characters.findIndex((c) => c.slug === active.slug) + 1).padStart(2, '0')}
              </span>
              <span className="char-visual__tag">CHARACTER FILE</span>
            </div>
          </Reveal>

          <Reveal className="char-info" delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="char-info__rarity" aria-label={`${active.rarity} 星角色`}>
                  {Array.from({ length: active.rarity }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <h3 className="char-info__name">{active.name}</h3>
                <p className="char-info__en">{active.en}</p>
                <p className="char-info__title">{active.title}</p>

                <div className="char-info__meta">
                  <div className="char-meta-row">
                    <span>所属</span>
                    <b>{active.faction}</b>
                  </div>
                  <div className="char-meta-row">
                    <span>律能</span>
                    <b className="law-value">
                      <i style={{ background: law.color }} />
                      {law.name}
                      <em>{law.en}</em>
                    </b>
                  </div>
                  <div className="char-meta-row">
                    <span>武器</span>
                    <b>{active.weapon}</b>
                  </div>
                </div>

                <blockquote className="char-info__quote" style={{ borderLeftColor: law.color }}>
                  “{active.quote}”
                </blockquote>

                <p className="char-info__intro">{active.intro}</p>

                <Link className="btn btn--ghost char-info__cta" to={`/characters/${active.slug}`}>
                  查看完整档案 <Arrow />
                </Link>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>

        <div className="roster" aria-label="角色列表">
          {visible.map((c) => (
            <button
              key={c.slug}
              className={`roster-item ${active.slug === c.slug ? 'is-active' : ''}`}
              onClick={() => setSlug(c.slug)}
              aria-label={`选择角色 ${c.name}`}
            >
              <img src={c.portrait} alt="" loading="lazy" />
              <span className="roster-item__name">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
