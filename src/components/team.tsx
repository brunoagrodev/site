'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const teamContent = [
    {
      name: 'Bruno Ferrari',
      sub: 'CEO da Aprimora Conhecimento',
      src: '/team/Bruno.png',
      alt: 'Our team',
    },
    {
      name: 'Kalyel Costa',
      sub: 'Produtor de Conteúdo',
      src: '/team/Kalyel.png',
      alt: 'Our team',
    },
    {
      name: 'Nathan Mateus',
      sub: 'Desenvolvedor Web Front-end',
      src: '/team/Nathan.png',
      alt: 'Our team',
    },
    {
      name: 'João Carlos',
      sub: 'Desenvolvedor Web Front-end',
      src: '/team/Joao.png',
      alt: 'Our team',
    },
    {
      name: 'Larissa Lins',
      sub: 'UX|UI Designer',
      src: '/team/Larissa.png',
      alt: 'Our team',
    },
    {
      name: 'Antonio Vieira',
      sub: 'Desenvolvedor Web Full-Stack',
      src: '/team/Antonio.png',
      alt: 'Our team',
    },
    {
      name: 'Wesley Bezerra',
      sub: 'UX|UI Designer',
      src: '/team/Wesley.png',
      alt: 'Our team',
    },
    {
      name: 'Rafael Machado',
      sub: 'UX|UI Designer',
      src: '/team/Rafael.png',
      alt: 'Our team',
    },
    {
      name: 'André Thiago',
      sub: 'Produtor de Conteúdo',
      src: '/team/Andre.png',
      alt: 'Our team',
    },
  ]

  return (
    <section className="aos-init" data-aos="fade-up" id="team">
      <div className="container max-w-[900px] px-7 md:px-0">
        <h1 className="my-14 text-center text-4xl font-bold text-darkBlue md:text-6xl">
          Nossa equipe
        </h1>
        <div className="grid grid-cols-2 gap-2 last:mx-auto md:grid-cols-3">
          {teamContent.map((item, index) => (
            <article
              key={index}
              className="center mx-auto mt-4 grid-flow-row grid-cols-1 last:col-span-full md:last:col-span-1"
              data-aos="fade-up"
            >
              <div className="flex flex-col space-y-2 justify-self-center text-center">
                <Image src={item.src} width={177} height={240} alt={item.alt} />
                <h3 className="max-w-[177px] text-xl font-bold text-deepBlue">
                  {item.name}
                </h3>
                <p className="max-w-[177px] font-lustria">{item.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
