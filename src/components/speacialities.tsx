'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from './button'
import {
  FaUserCircle,
  FaPaintBrush,
  FaInstagram,
  FaUsersCog,
  FaCode,
} from 'react-icons/fa'

const Especialidades = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const cards = [
    {
      title: 'UX/UI',
      description:
        'Colabore no desenvolvimento de interfaces reais para projetos sociais. Aqui você vai aplicar conceitos de usabilidade e design centrado no usuário, simulando o dia a dia de uma equipe de produto.',
      icon: <FaUserCircle size={110} />,
    },
    {
      title: 'Design Gráfico',
      description:
        'Participe da criação de identidades visuais completas para ONGs e projetos voluntários. Tudo feito em equipe, com briefing, feedback e entregas reais, como no mercado de trabalho.',
      icon: <FaPaintBrush size={110} />,
    },
    {
      title: 'Social Media',
      description:
        'Desenvolva estratégias de conteúdo e artes para redes sociais de iniciativas sociais. É uma oportunidade de praticar criação, planejamento e análise de resultados com liberdade criativa.',
      icon: <FaInstagram size={110} />,
    },
    {
      title: 'Recursos Humanos',
      description:
        'Atue na seleção e integração de novos voluntários. Você vai ajudar a estruturar processos de recrutamento e criar ações que fortaleçam o bem-estar e a cultura do nosso time.',
      icon: <FaUsersCog size={110} />,
    },
    {
      title: 'Desenvolvimento Web',
      description:
        'Ajude a desenvolver plataformas, sites e sistemas para ONGs e projetos parceiros. Aqui você vai trabalhar com tecnologias do mercado e contribuir com soluções reais em equipe.',
      icon: <FaCode size={110} />,
    },
  ]

  const width = typeof window !== 'undefined' ? window.innerWidth : 0

  return (
    <section className="aos-init mt-[72px]" data-aos="fade-up" id="especialidades">
      <div className="container max-w-[1160px] px-6 md:px-0 lg:px-[59px]">
        <h1 className="mb-[56px] text-center text-3xl font-bold text-deepBlue md:text-6xl">
          Especialidades
        </h1>
        <div className="flex w-full flex-col gap-5 md:grid md:grid-cols-12">
          {cards.map((item, index) => {
            const span1 =
              index === 2 ? 'col-span-7 w-full' : 'col-span-5 w-full'
            const span2 = index === 3 ? 'col-span-5 w-full' : 'col-span-6'
            const bg =
              index === 1 || index === 2
                ? 'md:bg-darkBlue md:text-white'
                : 'md:bg-[#FCD6B9] md:text-darkText'

            return (
              <article
                key={index}
                className={`${span1} ${span2} ${bg} max-[768px]:${
                  width < 768 && index % 2 === 0
                    ? ' max-[768px]:bg-[#FCD6B9] max-[768px]:text-darkText'
                    : ' max-[768px]:bg-darkBlue max-[768px]:text-white'
                } mx-auto rounded-2xl`}
                data-aos="fade-up"
              >
                <div className="mx-[32px] space-y-4 py-[68px] md:my-[75px]">
                  <div>{item.icon}</div>
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <p className="text-base">{item.description}</p>
                </div>
              </article>
            )
          })}
          <article
            className={`col-span-6 flex items-center rounded-2xl bg-darkBlue p-[78px]`}
            data-aos="fade-up"
          >
            <div className="flex w-full items-center justify-center">
              <a
                href="https://rhrecruiter.com.br/partners/aprimoraconhecimento.html"
                target="_blank"
              >
                <Button color="lightOrange">FAÇA PARTE DO TIME</Button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Especialidades
