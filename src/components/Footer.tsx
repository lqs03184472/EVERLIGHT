import { Link } from 'react-router-dom'
import { Sigil } from './Icons'

const columns = [
  {
    title: '世界',
    en: 'WORLD',
    links: [
      { label: '艾瑟兰大陆', to: '/' },
      { label: '五座城邦', to: '/' },
      { label: '律能体系', to: '/' },
    ],
  },
  {
    title: '角色',
    en: 'CAST',
    links: [
      { label: '瑟琳 · 苍岚之翼', to: '/characters/serin' },
      { label: '薇尔 · 霜语低吟', to: '/characters/viel' },
      { label: '诺亚 · 星轨观测者', to: '/characters/noa' },
      { label: '艾莉丝 · 烬羽之舞', to: '/characters/eris' },
    ],
  },
  {
    title: '支持',
    en: 'SUPPORT',
    links: [
      { label: '配置需求', to: '/' },
      { label: '常见问题', to: '/' },
      { label: '联系我们', to: '/' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__lockup">
            <Sigil className="footer__sigil" />
            <span>
              <b>EVERLIGHT</b>
              <em>永夜星灯</em>
            </span>
          </Link>
          <p className="footer__tagline">长夜之后，仍有光。一个关于拾光与归途的原创开放世界。</p>
          <div className="footer__social">
            <span>微博</span>
            <span>Bilibili</span>
            <span>Discord</span>
            <span>YouTube</span>
          </div>
        </div>

        {columns.map((column) => (
          <div className="footer__col" key={column.en}>
            <div className="footer__col-head">
              <span>{column.title}</span>
              <em>{column.en}</em>
            </div>
            {column.links.map((link) => (
              <Link className="footer__link" key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer__legal">
        <span>
          本网站为原创概念演示项目（VibeCoding Demo），与米哈游 / miHoYo、《原神》及任何商业游戏无关。
          页面美术素材由 AI 生成，仅用于设计展示。
        </span>
        <span className="footer__copyright">© 2026 EVERLIGHT STUDIO · ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  )
}
