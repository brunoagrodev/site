// team.tsx
'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Dados dos depoimentos
const testimonials = [
  {
    photo: '/images/depoimento1.jpg', // Substitua pelo caminho real da foto
    name: 'Maria Silva',
    description: 'A Aprimora transformou a maneira como gerencio minhas tarefas diárias. A plataforma é intuitiva e me ajudou a aumentar muito minha produtividade. Recomendo fortemente!',
  },
  {
    photo: '/images/depoimento2.jpg', // Substitua pelo caminho real da foto
    name: 'João Pereira',
    description: 'Estava procurando uma solução completa para organizar meus projetos e a Aprimora superou minhas expectativas. O suporte ao cliente é excelente e as funcionalidades são incríveis.',
  },
  {
    photo: '/images/depoimento3.jpg', // Substitua pelo caminho real da foto
    name: 'Ana Rodrigues',
    description: 'Desde que comecei a usar a Aprimora, minha comunicação com a equipe melhorou significativamente. As ferramentas de colaboração são fantásticas e facilitam muito o trabalho em conjunto.',
  },
];

export const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-16 bg-gray-100"> {/* Uma seção com padding e fundo cinza claro */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8" data-aos="fade-up">
          O que nossos clientes estão dizendo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={testimonial.photo} alt={`Foto de ${testimonial.name}`} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm italic">"{testimonial.description}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}