import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { requirements, versionInfo } from '../data/game'
import { Reveal } from './Reveal'
import { MobileIcon, WindowsIcon } from './Icons'

const platforms = [
  { name: 'Windows', en: 'PC · 客户端', icon: <WindowsIcon />, meta: '45 GB · 推荐 SSD' },
  { name: 'iOS', en: 'iPhone / iPad', icon: <MobileIcon />, meta: 'App Store · 12 GB' },
  { name: 'Android', en: '安卓设备', icon: <MobileIcon />, meta: '8 GB 以上机型' },
]

export function DownloadSection() {
  const [toast, setToast] = useState(false)

  const showToast = () => {
    setToast(true)
    window.setTimeout(() => setToast(false), 3200)
  }

  return (
    <section className="download-section" id="download">
      <div className="download">
        <img className="download__bg" src="images/nation-frostveil.jpg" alt="露霜林海" loading="lazy" />
        <div className="download__veil" />
        <div className="container download__inner">
          <Reveal>
            <p className="eyebrow">VER {versionInfo.number} · {versionInfo.en}</p>
            <h2 className="download__title">现在，点亮第一盏星灯</h2>
            <p className="download__lead">
              旅途已经在五个平台同时开启。带上你的弓、锤、杖，或者只是一盏还没点亮的灯。
            </p>
          </Reveal>

          <Reveal delay={0.12} className="download__platforms">
            {platforms.map((platform) => (
              <button className="platform" key={platform.name} onClick={showToast}>
                <span className="platform__icon">{platform.icon}</span>
                <span className="platform__text">
                  <span className="platform__name">{platform.name}</span>
                  <span className="platform__meta">
                    {platform.en} · {platform.meta}
                  </span>
                </span>
              </button>
            ))}
          </Reveal>

          <p className="download__note">数据互通 · 跨平台联机 · 存档共享</p>
        </div>

        <AnimatePresence>
          {toast ? (
            <motion.div
              className="download__toast"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
            >
              演示站点：暂未提供客户端下载
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="req">
        <div className="container req__inner">
          <Reveal className="req__intro">
            <span className="eyebrow">SYSTEM REQUIREMENTS</span>
            <h3 className="req__title">配置需求</h3>
            <p className="req__copy">
              为了完整呈现艾瑟兰的光影，我们建议使用标清以上分辨率，并为游戏预留 45 GB 存储空间。
            </p>
          </Reveal>
          <Reveal className="req__tables" delay={0.1}>
            {(['minimum', 'recommended'] as const).map((key) => (
              <div className="req__col" key={key}>
                <div className="req__col-head">
                  <span>{key === 'minimum' ? '最低配置' : '推荐配置'}</span>
                  <em>{key === 'minimum' ? 'MINIMUM' : 'RECOMMENDED'}</em>
                </div>
                {requirements[key].map((row) => (
                  <div className="req__row" key={row.label}>
                    <span>{row.label}</span>
                    <b>{row.value}</b>
                  </div>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
