import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { ParallaxImage } from './ParallaxImage'

const facts = [
  { num: '05', label: '城邦与地貌', en: 'REALMS' },
  { num: '06', label: '律能共鸣', en: 'LAWS' },
  { num: '07', label: '熄灭的星灯', en: 'LANTERNS' },
]

export function WorldSection() {
  return (
    <section className="section world" id="world">
      <div className="container">
        <SectionHead index="01" title="世界" en="THE WORLD OF ELANTIA" />

        <div className="world__lead">
          <Reveal>
            <p className="world__kicker">A STORY TOLD IN LAMPLIGHT</p>
            <h3 className="world__statement">
              长夜之后，
              <br />
              仍有光。
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="world__copy">
              三百年前，七盏星灯同时熄灭，天空坠入漫长的黑夜。大陆「艾瑟兰」被风、焰、霜、潮、岩与星六种律能割裂，
              唯有散落在废墟深处的星火仍在低语。
            </p>
            <p className="world__copy">
              你是最后一位「拾光者」。穿过五座城邦，替沉默的灯塔重新点燃，也替那些等了太久的人，找回一个可以仰望的方向。
            </p>
            <span className="world__sign">— 拾光者手记 · 第一章</span>
          </Reveal>
        </div>

        <Reveal className="world__media-wrap">
          <ParallaxImage
            className="world__media"
            src="images/world.jpg"
            alt="艾瑟兰大陆全境俯瞰：五座城邦与漂浮的星灯"
          >
            <span className="world__caption">
              <em>ELANTIA</em>
              <span>艾瑟兰大陆 · 全境俯瞰</span>
            </span>
          </ParallaxImage>
        </Reveal>

        <div className="world__facts">
          {facts.map((fact, i) => (
            <Reveal className="world__fact" key={fact.num} delay={0.08 * i}>
              <span className="world__fact-num">{fact.num}</span>
              <span className="world__fact-label">
                {fact.label}
                <em>{fact.en}</em>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
