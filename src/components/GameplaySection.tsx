import { features } from '../data/game'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'

export function GameplaySection() {
  return (
    <section className="section gameplay" id="gameplay">
      <div className="container">
        <SectionHead index="04" title="玩法" en="HOW YOU TRAVEL" />

        <div className="play-list">
          {features.map((feature, i) => (
            <div className="play-row" key={feature.index}>
              <Reveal className="play-media">
                <img src={feature.image} alt={feature.alt} loading="lazy" />
                <span className="play-media__no">{feature.index}</span>
              </Reveal>
              <Reveal className="play-copy" delay={0.1 + i * 0.02}>
                <span className="play-copy__kicker">{feature.kicker}</span>
                <h3 className="play-copy__title">{feature.title}</h3>
                <p className="play-copy__desc">{feature.desc}</p>
                <p className="play-copy__note">{feature.note}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
