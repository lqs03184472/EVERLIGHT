import { useEffect, useState, type CSSProperties } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { characters, lawMap } from '../data/game'
import { Reveal } from '../components/Reveal'
import { ArrowLeft, Arrow } from '../components/Icons'
import { EASE } from '../lib/motion'

const numbers = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ']

export function CharacterDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const index = characters.findIndex((c) => c.slug === slug)
  const character = characters[index]
  const [view, setView] = useState(0)

  useEffect(() => {
    setView(0)
  }, [slug])

  if (!character) {
    return (
      <main className="detail detail--empty">
        <div className="container">
          <p className="eyebrow">404 · CHARACTER NOT FOUND</p>
          <h1 className="detail-empty__title">这一页档案，被风吹走了。</h1>
          <Link className="btn btn--ghost" to="/">
            返回首页 <Arrow />
          </Link>
        </div>
      </main>
    )
  }

  const law = lawMap[character.law]
  const portraits = [
    { label: '立绘', en: 'FULL', src: character.portrait },
    { label: '特写', en: 'CLOSE', src: character.closeup },
  ]
  const prev = characters[(index - 1 + characters.length) % characters.length]
  const next = characters[(index + 1) % characters.length]

  const back = () => {
    navigate('/characters')
  }

  return (
    <main className="detail" style={{ '--law': law.color } as CSSProperties}>
      <div className="detail-hero">
        <div className="detail-visual">
          <div className="detail-visual__stage">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={portraits[view].src}
                className="detail-visual__img"
                src={portraits[view].src}
                alt={`${character.name} · ${character.title} · ${portraits[view].label}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </AnimatePresence>
          </div>
          <div className="detail-visual__veil" />
          <span className="detail-visual__frame" aria-hidden="true" />
          <span className="detail-visual__label">
            CHARACTER FILE · {String(index + 1).padStart(2, '0')} / {String(characters.length).padStart(2, '0')}
          </span>
          <div className="detail-views" role="group" aria-label="切换角色立绘">
            {portraits.map((item, i) => (
              <button
                key={item.en}
                className={view === i ? 'is-active' : ''}
                onClick={() => setView(i)}
                aria-pressed={view === i}
              >
                <img src={item.src} alt="" />
                <span>
                  {item.label}
                  <em>{item.en}</em>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="detail-intro">
          <button className="back-link" onClick={back}>
            <ArrowLeft /> 返回角色档案
          </button>

          <div className="detail-rarity" aria-label={`${character.rarity} 星角色`}>
            {Array.from({ length: character.rarity }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <h1 className="detail-name">{character.name}</h1>
          <p className="detail-en">{character.en}</p>
          <p className="detail-title">{character.title}</p>

          <blockquote className="detail-quote">“{character.quote}”</blockquote>

          <div className="detail-meta">
            <div>
              <span>所属</span>
              <b>{character.faction}</b>
            </div>
            <div>
              <span>律能</span>
              <b className="law-value">
                <i style={{ background: law.color }} />
                {law.name}
                <em>{law.en}</em>
              </b>
            </div>
            <div>
              <span>武器</span>
              <b>{character.weapon}</b>
            </div>
            <div>
              <span>稀有度</span>
              <b>{character.rarity} 星</b>
            </div>
            <div>
              <span>性别</span>
              <b>{character.gender === 'female' ? '女性' : '男性'}</b>
            </div>
            <div>
              <span>年龄</span>
              <b>{character.age} 岁</b>
            </div>
            <div>
              <span>身高</span>
              <b>{character.height}</b>
            </div>
            <div>
              <span>生日</span>
              <b>{character.birthday}</b>
            </div>
          </div>

          <div className="detail-look">
            <span>形象设定</span>
            <b>{character.outfit}</b>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <Reveal className="block">
          <div className="block__side">
            <span className="eyebrow">PROFILE</span>
            <h2 className="block__title">一位旅人的来路</h2>
          </div>
          <div className="block__main">
            <p className="detail-story">{character.story}</p>
          </div>
        </Reveal>

        <Reveal className="block">
          <div className="block__side">
            <span className="eyebrow">ATTRIBUTES</span>
            <h2 className="block__title">战斗数据</h2>
          </div>
          <div className="block__main">
            <div className="stat-row">
              {character.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat__label">{stat.label}</span>
                  <span className="stat__value">{stat.value}</span>
                  <span className="stat__note">{stat.note}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="block">
          <div className="block__side">
            <span className="eyebrow">TALENTS</span>
            <h2 className="block__title">战斗天赋</h2>
          </div>
          <div className="block__main">
            <div className="skill-list">
              {character.skills.map((skill, i) => (
                <div className="skill" key={skill.name}>
                  <span className="skill__num">{numbers[i]}</span>
                  <div className="skill__body">
                    <span className="skill__type">{skill.type}</span>
                    <h3 className="skill__name">{skill.name}</h3>
                    <p className="skill__desc">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="block">
          <div className="block__side">
            <span className="eyebrow">CONSTELLATION</span>
            <h2 className="block__title">星痕</h2>
          </div>
          <div className="block__main">
            <div className="constellation">
              {character.constellation.map((name, i) => (
                <div className="constellation__item" key={name}>
                  <span className="constellation__num">{numbers[i]}</span>
                  <span className="constellation__name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="block">
          <div className="block__side">
            <span className="eyebrow">VOICE</span>
            <h2 className="block__title">语音</h2>
          </div>
          <div className="block__main">
            <div className="voice-list">
              {character.voices.map((voice) => (
                <div className="voice" key={voice.context}>
                  <span className="voice__context">{voice.context}</span>
                  <p className="voice__line">“{voice.line}”</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="pager">
          <Link className="pager__link" to={`/characters/${prev.slug}`}>
            <img src={prev.portrait} alt="" />
            <span>
              <em>上一位</em>
              <b>{prev.name} · {prev.title}</b>
            </span>
          </Link>
          <Link className="pager__link pager__link--next" to={`/characters/${next.slug}`}>
            <span>
              <em>下一位</em>
              <b>{next.name} · {next.title}</b>
            </span>
            <img src={next.portrait} alt="" />
          </Link>
        </div>
      </div>
    </main>
  )
}
