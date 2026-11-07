import { Hero } from '../components/Hero'
import { WorldSection } from '../components/WorldSection'
import { CharacterStage } from '../components/CharacterStage'
import { NationsSection } from '../components/NationsSection'
import { GameplaySection } from '../components/GameplaySection'
import { NewsSection } from '../components/NewsSection'
import { DownloadSection } from '../components/DownloadSection'

export function Home() {
  return (
    <main>
      <Hero />
      <WorldSection />
      <CharacterStage />
      <NationsSection />
      <GameplaySection />
      <NewsSection />
      <DownloadSection />
    </main>
  )
}
