import { Link } from 'react-router-dom'
import { news } from '../data/game'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import { ArrowUpRight } from './Icons'

export function NewsSection() {
  return (
    <section className="section news" id="news">
      <div className="container">
        <SectionHead
          index="05"
          title="资讯"
          en="NEWS & UPDATES"
          aside={
            <span className="news__more">
              全部资讯 <ArrowUpRight />
            </span>
          }
        />

        <div className="news-list">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <Link className="news-row" to={item.href.replace('#', '')}>
                <span className="news-row__date">{item.date}</span>
                <span className={`news-row__kind kind-${item.kind}`}>{item.kind}</span>
                <span className="news-row__body">
                  <span className="news-row__title">{item.title}</span>
                  <span className="news-row__desc">{item.desc}</span>
                </span>
                <span className="news-row__arrow">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
