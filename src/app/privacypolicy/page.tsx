import Footer from '@/components/footer'
import HeaderMenu from '@/components/header-menu'
import WhatsappFloatingLink from '@/components/whatsappfloatinglink'  

export default function PrivacyPolicy() {
  return (
    <main className="container">
      <HeaderMenu />
      <div className="container py-20">
        {/* Seção de Título com borda estilizada e border-radius maior */}
        <div className="bg-[#101b2b] border-4 border-blue-500 p-10 text-center text-2xl font-bold text-white rounded-3xl shadow-lg">
          <h1>Política de Privacidade e Proteção de Dados Pessoais</h1>
        </div>
        
        <div className="container mt-4 flex h-full flex-col">
          {/* Seção de Introdução */}
          <ol className="px-2 pl-8 font-bold">1. Introdução:</ol>
          <p className="px-4 py-2">
            A Aprimora Conhecimento, organização sem fins lucrativos dedicada à capacitação de jovens nas áreas de Design e Tecnologia, respeita a privacidade e a proteção dos dados pessoais de seus usuários. Esta Política de Privacidade tem como objetivo informar como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
          </p>
          <p className="px-4 py-2">&nbsp;</p>
          
          {/* Coleta de Dados Pessoais */}
          <ol className="px-2 pl-8 font-bold">2. Coleta de Dados Pessoais:</ol>
          <p className="px-4 py-2">
            Coletamos dados pessoais de nossos usuários de forma transparente e para finalidades específicas, como:
          </p>
          <ol className="px-2 pl-8">
            <ul className="mt-2">
              <strong>Nome completo:</strong> Para identificação do usuário.
            </ul>
            <ul className="mt-2">
              <strong>E-mail:</strong> Para envio de informações sobre nossos programas e atividades.
            </ul>
            <ul className="mt-2">
              <strong>Número de telefone (WhatsApp):</strong> Para facilitar a comunicação direta com os interessados.
            </ul>
          </ol>
          <p className="px-4 py-2">&nbsp;</p>
          
          {/* Finalidades do Tratamento de Dados */}
          <ol className="px-2 pl-8 font-bold">3. Finalidades do Tratamento de Dados:</ol>
          <p className="px-4 py-2">
            Utilizamos seus dados pessoais exclusivamente para:
          </p>
          <ol className="px-2 pl-8">
            <ul className="mt-2">
              Enviar informações sobre nossos programas de capacitação e eventos.
            </ul>
            <ul className="mt-2">
              Facilitar a comunicação com os interessados em participar de nossas atividades e projetos.
            </ul>
          </ol>
          <p className="px-4 py-2">&nbsp;</p>
          
          {/* Compartilhamento de Dados */}
          <ol className="px-2 pl-8 font-bold">4. Compartilhamento de Dados:</ol>
          <p className="px-4 py-2">
            A Aprimora Conhecimento não compartilha seus dados pessoais com terceiros, exceto quando exigido por lei ou para atender a obrigações legais.
          </p>
          <p className="px-4 py-2">&nbsp;</p>
          
          {/* Seus Direitos */}
          <ol className="px-2 pl-8 font-bold">5. Seus Direitos:</ol>
          <p className="px-4 py-2">
            Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail: <strong>aprimoraconhecimento@gmail.com</strong>.
          </p>
          <p className="px-4 py-2">&nbsp;</p>
          
          {/* Alterações nesta Política de Privacidade */}
          <ol className="px-2 pl-8 font-bold">6. Alterações nesta Política de Privacidade:</ol>
          <p className="px-4 py-2">
            Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
          </p>
          <p className="px-4 py-2">&nbsp;</p>
          
          {/* Contato */}
          <p className="px-4 py-2">
            Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco pelo e-mail: <strong>aprimoraconhecimento@gmail.com</strong>.
          </p>
        </div>
      </div>
      
      {/* Footer e WhatsApp Floating Link */}
      <Footer />
      <WhatsappFloatingLink /> 
    </main>
  )
}
