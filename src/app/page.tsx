import HeaderMenu from '@/components/header-menu'
import HeaderContent from '@/components/header-content'
import DifferencesContent from '@/components/differencesContent'

import Intro from '@/components/intro'
import WorkContent from '@/components/workContent'
import Footer from '@/components/footer'
import WhatsappFloatingLink from '@/components/whatsappfloatinglink'
import Services from '@/components/services'
import Question from '@/components/question'
import { Team } from '@/components/team'

export default function Home() {
  return (
    <main className="container">
      <HeaderMenu />
      <div className="container pt-20">
        <HeaderContent />
        <Intro />
        <DifferencesContent />
        <WorkContent />
        <Services />
        <Team />/
        <Question />
        <Footer />
        <WhatsappFloatingLink />
      </div>
    </main>
  )
}