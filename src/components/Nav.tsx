import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Sigil } from './Icons'
import { EASE, scrollToSection } from '../lib/motion'

const links = [
  { id: 'world', label: '世界', en: 'WORLD' },
  { id: 'characters', label: '角色', en: 'CHARACTERS' },
  { id: 'nations', label: '城邦', en: 'REALMS' },
  { id: 'gameplay', label: '玩法', en: 'GAMEPLAY' },
  { id: 'news', label: '资讯', en: 'NEWS' },
  { id: 'download', label: '下载', en: 'DOWNLOAD' },
]

export function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (id: string) => {
    setOpen(false)
    if (id === 'characters') {
      if (location.pathname === '/characters') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/characters')
      }
      return
    }
    if (isHome) {
      scrollToSection(id)
      return
    }
    navigate('/')
    window.setTimeout(() => scrollToSection(id), 520)
  }

  return (
    <>
      <header className={`nav ${scrolled || !isHome ? 'is-solid' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" aria-label="永夜星灯 首页">
            <Sigil className="nav__sigil" />
            <span className="nav__wordmark">
              <span className="nav__wordmark-en">EVERLIGHT</span>
              <span className="nav__wordmark-cn">永夜星灯</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="主导航">
            {links.map((item) => (
              <button key={item.id} className="nav__link" onClick={() => goTo(item.id)}>
                <span>{item.label}</span>
                <em>{item.en}</em>
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <span className="nav__lang">中 / EN</span>
            <button className="nav__cta" onClick={() => goTo('download')}>
              开始旅程
            </button>
            <button
              className={`nav__burger ${open ? 'is-open' : ''}`}
              aria-label={open ? '关闭菜单' : '打开菜单'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="container menu__inner">
              <nav className="menu__links">
                {links.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className="menu__link"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.06 * i }}
                    onClick={() => goTo(item.id)}
                  >
                    <span className="menu__link-no">0{i + 1}</span>
                    <span className="menu__link-label">{item.label}</span>
                    <span className="menu__link-en">{item.en}</span>
                  </motion.button>
                ))}
              </nav>
              <div className="menu__foot">
                <span>EVERLIGHT · ELANTIA</span>
                <span>VER 1.0 「星火之章」</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
