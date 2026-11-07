import { useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  characters,
  lawMap,
  laws,
  nations,
  type Character,
  type Gender,
  type LawId,
} from '../data/game'
import { EASE } from '../lib/motion'

type GenderFilter = 'all' | Gender
type LawFilter = 'all' | LawId

function PortraitCard({ character, index }: { character: Character; index: number }) {
  const [view, setView] = useState<'full' | 'close'>('full')
  const law = lawMap[character.law]
  const src = view === 'full' ? character.portrait : character.closeup

  return (
    <motion.article
      className="pcard"
      style={{ '--law': law.color } as CSSProperties}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: EASE, delay: Math.min(index, 6) * 0.035 }}
    >
      <Link
        className="pcard__link"
        to={`/characters/${character.slug}`}
        aria-label={`查看 ${character.name} 的角色档案`}
      >
        <span className="pcard__media">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={src}
              className="pcard__img"
              src={src}
              alt={`${character.name} · ${character.title}`}
              loading={index < 10 ? 'eager' : 'lazy'}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </AnimatePresence>
        </span>

        <span className="pcard__scrim" aria-hidden="true" />
        <span className="pcard__no">{String(index + 1).padStart(2, '0')}</span>

        <div className="pcard__info">
          <span className="pcard__law">
            <i />
            {law.name}
            <em>{law.en}</em>
          </span>
          <span className="pcard__title">{character.title}</span>
          <h2 className="pcard__name">{character.name}</h2>
          <span className="pcard__en">{character.en}</span>
        </div>
        <span className="pcard__open" aria-hidden="true">
          +
        </span>
      </Link>

      <div className="pcard__views" role="group" aria-label={`切换 ${character.name} 的立绘`}>
        <button
          className={view === 'full' ? 'is-active' : ''}
          onClick={() => setView('full')}
          aria-pressed={view === 'full'}
        >
          立绘
        </button>
        <button
          className={view === 'close' ? 'is-active' : ''}
          onClick={() => setView('close')}
          aria-pressed={view === 'close'}
        >
          特写
        </button>
      </div>
    </motion.article>
  )
}

export function CharactersPage() {
  const [gender, setGender] = useState<GenderFilter>('all')
  const [law, setLaw] = useState<LawFilter>('all')

  const female = characters.filter((c) => c.gender === 'female').length
  const male = characters.length - female

  const visible = useMemo(
    () =>
      characters.filter(
        (c) => (gender === 'all' || c.gender === gender) && (law === 'all' || c.law === law),
      ),
    [gender, law],
  )

  const genderOptions: { id: GenderFilter; label: string }[] = [
    { id: 'all', label: '全部' },
    { id: 'female', label: `女性 ${female}` },
    { id: 'male', label: `男性 ${male}` },
  ]

  return (
    <main className="archive">
      <header className="archive-hero">
        <img className="archive-hero__bg" src="images/hero.jpg" alt="" />
        <div className="container archive-hero__inner">
          <span className="eyebrow">CHARACTER ARCHIVE · VOL. I</span>
          <h1 className="archive-hero__title">
            角色档案
            <span>三十位旅人 · 六种律能 · 五座城邦</span>
          </h1>
          <p className="archive-hero__lead">
            从风哨塔的见习生到遗迹里最后的守卫，每一位旅人都带着自己的律能与来路。
            将鼠标移到立绘上可以放大查看，也可以随时切换全身立绘与面部特写。
          </p>
          <div className="archive-stats">
            <div>
              <b>{characters.length}</b>
              <span>位旅人</span>
            </div>
            <div>
              <b>{female}</b>
              <span>女性角色</span>
            </div>
            <div>
              <b>{male}</b>
              <span>男性角色</span>
            </div>
            <div>
              <b>{laws.length}</b>
              <span>律能体系</span>
            </div>
            <div>
              <b>{nations.length}</b>
              <span>座城邦</span>
            </div>
          </div>
        </div>
      </header>

      <section className="archive-body">
        <div className="container">
          <div className="archive-filterbar">
            <div className="archive-filtergroup">
              <span className="archive-filterlabel">GENDER</span>
              {genderOptions.map((item) => (
                <button
                  key={item.id}
                  className={`fchip ${gender === item.id ? 'is-active' : ''}`}
                  onClick={() => setGender(item.id)}
                  aria-pressed={gender === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="archive-filtergroup">
              <span className="archive-filterlabel">LAW</span>
              <button
                className={`fchip ${law === 'all' ? 'is-active' : ''}`}
                onClick={() => setLaw('all')}
                aria-pressed={law === 'all'}
              >
                全部
              </button>
              {laws.map((item) => (
                <button
                  key={item.id}
                  className={`fchip ${law === item.id ? 'is-active' : ''}`}
                  onClick={() => setLaw(item.id)}
                  aria-pressed={law === item.id}
                  style={{ '--dot': item.color } as CSSProperties}
                >
                  <i className="fchip__dot" />
                  {item.name}
                </button>
              ))}
            </div>

            <span className="archive-count">
              显示 {visible.length} / {characters.length} 份档案
            </span>
          </div>

          <div className="portrait-grid">
            {visible.map((c) => (
              <PortraitCard key={c.slug} character={c} index={characters.indexOf(c)} />
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="archive-empty">这一组筛选下，暂时没有找到旅人。</p>
          ) : null}
        </div>
      </section>
    </main>
  )
}
