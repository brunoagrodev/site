import type { Metadata } from 'next'
import { Exo, Lustria } from 'next/font/google'
import './globals.css'

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
})

const lustria = Lustria({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lustria',
})

export const metadata: Metadata = {
  title: 'Aprimora Conhecimento - Capacitação e Inclusão Digital para Jovens',
  description:
    'Aprimora Conhecimento é uma ONG dedicada à capacitação de jovens em Design e Tecnologia, promovendo oportunidades de crescimento e inclusão social.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${exo.variable} ${lustria.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
