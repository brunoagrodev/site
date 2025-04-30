'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const depoimentos = [
  {
    nome: 'Maria Silva',
    texto:
      'A Aprimora transformou a maneira como gerencio minhas tarefas diárias. A plataforma é intuitiva e me ajudou a aumentar muito minha produtividade. Recomendo fortemente!',
    imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    nome: 'João Pereira',
    texto:
      'Estava procurando uma solução completa para organizar meus projetos e a Aprimora superou minhas expectativas. O suporte ao cliente é excelente e as funcionalidades são incríveis.',
    imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    nome: 'Ana Rodrigues',
    texto:
      'Desde que comecei a usar a Aprimora, minha comunicação com a equipe melhorou significativamente. As ferramentas de colaboração são fantásticas e facilitam muito o trabalho em conjunto.',
    imagem: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]

export function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="mt-[72px]" data-aos="fade-up" id="team">
      <div className="container mx-auto px-6">
        <h1 className="my-14 text-center text-4xl font-bold text-darkBlue md:text-6xl">
          Depoimentos
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {depoimentos.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={item.imagem}
                alt={`Foto de ${item.nome}`}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h2 className="mb-4 text-xl font-bold text-darkText text-center">
                {item.nome}
              </h2>
              <p className="text-darkText text-center italic text-base">
                “{item.texto}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
