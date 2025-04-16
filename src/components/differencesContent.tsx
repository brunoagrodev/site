'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from './button'

const textContent = [
  {
    title: 'Oportunidade para crescer',
    subTitle:
      'Faça parte de projetos reais e ganhe experiência na prática. Aprenda novas habilidades, fortaleça seu portfólio e dê um impulso na sua carreira com desafios que fazem a diferença.',
    image: '/differences/hands.jpg',
  },
  {
    title: 'Acesso gratuito ao conhecimento',
    subTitle:
      'Desenvolva-se profissionalmente com mentorias personalizadas, workshops interativos e o aprendizado direto com profissionais experientes. Tudo isso, sem custo algum, em um ambiente colaborativo e enriquecedor.',
    image: '/differences/pigBank.jpg',
  },
  {
    title: 'Impacto social e profissional',
    subTitle:
      'Participe de projetos que geram impacto real na sociedade. Ao mesmo tempo, aprimore suas habilidades, amplie sua rede de contatos e ganhe experiência prática para se destacar no mercado.',
    image: '/differences/notebook.jpg',
  },
]

const DifferencesContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="mt-16" data-aos="fade-up" id="differences">
      <div className="container">
        <h1 className="text-center font-sans text-[40px] font-bold text-slate-800 sm:mb-[4.3125rem] sm:text-6xl">
          Benefícios
        </h1>
        <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
          {textContent.map((text, index) => (
            <article
              key={index}
              className="mx-auto mt-10 flex max-w-[300px] flex-col sm:mt-0"
            >
              <div className="h-[300px] w-[300px]">
                <Image
                  src={text.image}
                  width={300}
                  height={300}
                  priority={true}
                  alt=""
                />
              </div>
              <div className="-mt-7 flex h-full w-[300px] flex-col">
                <h2 className="mt-12 font-sans text-3xl font-bold text-deepBlue">
                  {text.title}
                </h2>
                <p className="mt-6 font-lustria text-base font-normal leading-normal sm:text-xl">
                  {text.subTitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        className="mb-2 mt-10 flex justify-center sm:mt-16"
        data-aos="fade-up"
      >
        {' '}
        <a
          href="https://rhrecruiter.com.br/partners/aprimoraconhecimento.html"
          target="_blank"
        >
          <Button size="sm">FAÇA PARTE DO TIME</Button>
        </a>
      </div>
    </section>
  )
}

export default DifferencesContent
