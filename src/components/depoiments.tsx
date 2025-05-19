'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const depoimentos = [
  {
    nome: 'Patrick Martins',
    cargo: 'Copywriter',
    texto:
      'Encontrar a Aprimora foi como abrir a porta para um novo universo de possibilidades. Essa oportunidade tem sido um verdadeiro divisor de águas na minha trajetória — a cada semana, me redescubro, evoluo e me sinto mais preparado para os desafios do mercado.',
    imagem: '../team/patrick.jpg',
  },
  {
    nome: 'Bruno Ferrari',
    cargo: 'Tech Recruiter',
    texto:
      'Na Aprimora, vivi na prática o dia a dia de um recrutador: divulgando vagas, conduzindo processos seletivos e colaborando com a equipe. Essa experiência me ajudou a crescer profissionalmente e a entender a importância de conectar pessoas às oportunidades certas.',
    imagem: '../team/bruno.jpeg',
  },
  {
    nome: 'Marianna Candeia',
    cargo: 'Social Media',
    texto:
      'A AC me deu apoio, conexões e a certeza de que conhecimento compartilhado transforma vidas. Com ela, cresci e venho crescendo profissionalmente e humanamente, entendendo que design com propósito são essenciais para um futuro melhor. Gratidão à todos que são parte da jornada da AC!',
    imagem: '../team/mari.jpeg',
  },
]

export function Equipe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="mt-[72px]" data-aos="fade-up" id="depoimentos">
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
              <h2 className="text-center text-xl font-bold text-darkText">
                {item.nome}
              </h2>
              <h3 className="mb-4 text-center text-sm italic text-gray-500">
                {item.cargo}
              </h3>
              <p className="text-darkText text-center italic text-base">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
