'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const textContent = [
  {
    title: 'Ambiente justo e colaborativo',
    subTitle:
      'As decisões são compartilhadas, e todos os membros são tratados com respeito e equidade. O ambiente é saudável, democrático e aberto para troca de ideias.',
    icon: '/work/costumerIcon.svg',
    alt: 'costumer icon',
  },
  {
    title: 'Carga horária flexível',
    subTitle:
      'Os prazos são bem definidos, e cada integrante pode organizar suas tarefas no horário que for mais conveniente dentro das entregas combinadas.',
    icon: '/work/clockIcon.svg',
    alt: 'Clock icon',
  },
  {
    title: 'Impulsione sua carreira',
    subTitle:
      'Trabalhamos com as mesmas ferramentas e metodologias do mercado, proporcionando uma experiência próxima à realidade profissional. Aqui, cada projeto é uma oportunidade de desenvolver habilidades, fortalecer seu portfólio e dar um passo a mais no seu desenvolvimento.',
    icon: '/work/rocketIcon.svg',
    alt: 'Rocket icon',
  },
]

const WorkContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="aos-init mt-[72px]" data-aos="fade-up" id="work">
      <div className="container w-full justify-center rounded-[56px] bg-deepBlue pb-24 pt-16">
        <h1 className="pb-12 text-center font-sans text-6xl font-bold text-white">
          Como trabalhamos
        </h1>
        <div className="container space-y-6">
          {textContent.map((item, index) => (
            <article
              key={index}
              className="mx-6 rounded-2xl bg-white p-12 lg:mx-auto lg:w-[75%]"
              data-aos="fade-up"
            >
              <div className="my-auto gap-12 lg:flex">
                <Image
                  src={item.icon}
                  width={180}
                  height={180}
                  alt={item.alt}
                  className="h-[140px] w-[140px] lg:h-[180px] lg:w-[180px]"
                />
                <div className="my-auto flex flex-col gap-4 pt-9">
                  <h2 className="mb-4 text-3xl font-bold text-darkText">
                    {item.title}
                  </h2>
                  <p className="font-lustria text-xl font-normal text-darkText">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkContent
