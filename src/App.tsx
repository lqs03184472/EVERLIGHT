import { useEffect } from 'react'
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { CharacterDetail } from './pages/CharacterDetail'
import { CharactersPage } from './pages/CharactersPage'
import { EASE } from './lib/motion'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <p className="eyebrow">404 · LOST IN THE NIGHT</p>
        <h1>你走进了一片还没有被照亮的区域。</h1>
        <Link className="btn btn--ghost" to="/">
          回到有光的地方
        </Link>
      </div>
    </main>
  )
}

function Pages() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:slug" element={<CharacterDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Pages />
      <Footer />
    </HashRouter>
  )
}
