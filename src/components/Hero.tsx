import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Arrow } from './Icons'
import { EASE, scrollToSection } from '../lib/motion'
import { versionInfo } from '../data/game'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.05, ease: EASE },
  },
}

export function Hero() {
  const reduced = useReducedMotion()

  const motes = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        left: `${(i * 43 + 11) % 100}%`,
        top: `${(i * 61 + 9) % 100}%`,
        size: `${1 + (i % 3) * 0.6}px`,
        delay: `${(i * 0.8) % 9}s`,
        duration: `${7 + (i % 5) * 1.6}s`,
        opacity: 0.18 + ((i * 7) % 40) / 100,
      })),
    [],
  )

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img src="images/hero.jpg" alt="永夜星灯 主视觉：浮空群岛与点灯者" />
      </div>
      <div className="hero__veil" />
      <div className="hero__motes" aria-hidden="true">
        {motes.map((mote, i) => (
          <span
            key={i}
            style={{
              left: mote.left,
              top: mote.top,
              width: mote.size,
              height: mote.size,
              animationDelay: mote.delay,
              animationDuration: mote.duration,
              opacity: mote.opacity,
            }}
          />
        ))}
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial={reduced ? false : 'hidden'}
          animate="show"
        >
          <motion.p className="hero__eyebrow" variants={item}>
            EVERLIGHT · OPEN WORLD FANTASY
          </motion.p>
          <motion.h1 className="hero__title" variants={item}>
            永夜星灯
          </motion.h1>
          <motion.div className="hero__rule" variants={item} />
          <motion.p className="hero__tagline" variants={item}>
            长夜之后，仍有光。
          </motion.p>
          <motion.p className="hero__lead" variants={item}>
            七盏星灯熄灭三百年。你将是最后一位拾光者——沿着熄灭的轨迹出发，把光一盏一盏地点回去。
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <button className="btn btn--solid" onClick={() => scrollToSection('world')}>
              开始旅程 <Arrow />
            </button>
            <Link className="btn btn--ghost" to="/characters">
              角色档案
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__side" aria-hidden="true">
        ELANTIA — 2026
      </div>

      <div className="hero__bottombar">
        <div className="container hero__bottom-inner">
          <div className="scroll-cue">
            <span className="scroll-cue__line" />
            <span className="scroll-cue__text">SCROLL</span>
          </div>
          <div className="hero__meta">
            VER {versionInfo.number} 「{versionInfo.name}」 · 现已开放
          </div>
        </div>
      </div>
    </section>
  )
}
