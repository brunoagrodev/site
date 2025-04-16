import Footer from '@/components/footer'
import HeaderMenu from '@/components/header-menu'
import WhatsappFloatingLink from '@/components/whatsappfloatinglink'

export default function PrivacyPolicy() {
  return (
    <main className="container">
      <HeaderMenu />
      <div className="container py-20">
        <div className="bg-blue p-10 text-center text-2xl font-bold text-white">
          <h1>Política de Privacidade e LGPD</h1>
        </div>
        <div className="container mt-4 flex h-full flex-col">
          <ol className="px-2 pl-8 font-bold">Introdução:</ol>
          <p className="px-4 py-2">
            Bem-vindo à página de Política de Privacidade e LGPD da Aprimora
            Conhecimento. Nesta seção, esclarecemos como coletamos, utilizamos,
            armazenamos e protegemos suas informações pessoais quando você
            interage conosco. A segurança e confidencialidade de seus dados são
            prioridades para nós.
          </p>
          <p className="px-4 py-2">&nbsp;</p>
          <ol className="px-2 pl-8 font-bold">Quem somos:</ol>
          <p className="px-4 py-2">
            Visite nosso site em{' '}
            <a href="http://www.aprimoraconhecimento.com.br">
              <strong>www.aprimoraconhecimento.com.br</strong>
            </a>{' '}
            para conhecer mais sobre nossos serviços e atuação.
          </p>
          <p className="px-4 py-2">&nbsp;</p>

          <ol className="px-2 pl-8 font-bold">Coleta de Informações:</ol>
          <p className="px-4 py-2">
            Ao falar conosco ou disponibilizar o seu número via formulário,
            poderemos coletar as seguintes informações:
          </p>
          <ol className="px-2 pl-8">
            <ul className=" mt-2">
              <strong>Nome:</strong> Estamos coletando seu nome apenas para
              saber com quem estamos falando.
            </ul>{' '}
            <ul className=" mt-2">
              <strong>E-mail:</strong> Seu e-mail é coletado para que possamos
              entrar em contato com você sobre informações relevantes e dúvidas.
            </ul>{' '}
            <ul className=" mt-2">
              <strong>Número de WhatsApp:</strong> Coletamos seu número do
              WhatsApp para facilitar a comunicação e fornecer suporte em tempo
              real.{' '}
            </ul>{' '}
          </ol>
          <p className="px-4 py-2">&nbsp;</p>

          <ol className="px-2 pl-8 font-bold">Uso das Informações:</ol>
          <p className="px-4 py-2">
            Utilizamos suas informações para fornecer e melhorar nossos
            serviços, personalizar sua experiência, enviar comunicações de
            marketing, processar transações, entre outros fins comerciais
            legítimos. Não compartilhamos suas informações com terceiros para
            fins de marketing sem seu consentimento explícito.
          </p>
          <p className="px-4 py-2">&nbsp;</p>

          <ol className="px-2 pl-8 font-bold">
            Compartilhamento de informações:
          </ol>
          <p className="px-4 py-2">
            Comprometemo-nos a não compartilhar, vender, alugar ou divulgar suas
            informações, exceto quando exigido por lei ou autoridade competente.
          </p>
          <p className="px-4 py-2">&nbsp;</p>

          <ol className="px-2 pl-8 font-bold">Consentimento:</ol>
          <p className="px-4 py-2">
            Ao utilizar nosso site e fornecer suas informações, você concorda
            com a coleta, uso e armazenamento conforme esta Política de
            Privacidade.
          </p>
          <p className="px-4 py-2">&nbsp;</p>

          <ol className="px-2 pl-8 font-bold">
            Alterações na Política de Privacidade:
          </ol>
          <p className="px-4 py-2">
            Reservamo-nos o direito de atualizar esta Política de Privacidade
            periodicamente. Recomendamos que você revise esta página
            regularmente para estar ciente de quaisquer alterações.
          </p>
          <p className="px-4 py-2">&nbsp;</p>

          <p className="px-4 py-2">
            Se tiver alguma dúvida sobre esta Política, entre em contato conosco
            pelo e-mail <strong>aprimoraconhecimento@gmail.com</strong>
          </p>
        </div>
      </div>
      <Footer />
      <WhatsappFloatingLink />
    </main>
  )
}
