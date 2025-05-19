import HeaderMenu from '@/components/header-menu'
import HeaderContent from '@/components/header-content'
import Intro from '@/components/intro'
import FloatingArrow from '@/components/floatingarrow'
import CookieConsent from '@/components/cookies'
import { Equipe } from '@/components/depoiments'
import Beneficios from '@/components/benefits'
import ComoTrabalhamos from '@/components/workContent'
import Especialidades from '@/components/speacialities'
import Perguntas from '@/components/question'
import Rodape from '@/components/footer'

export default function Home() {
  return (
    <main className="container">
      <HeaderMenu />
      <div className="container pt-20">
        <HeaderContent />
        <Intro />
        <Beneficios/>
        <ComoTrabalhamos />
        <Especialidades />
        <Equipe />/
        <Perguntas />
        <Rodape />
        <FloatingArrow />
        <CookieConsent />
      </div>
    </main>
  )
}