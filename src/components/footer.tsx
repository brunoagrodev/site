'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PhoneNumberForm from './phonenumberform'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="footer" id="contato">
      <div
        className="footer-up container my-10 w-full rounded-[56px] bg-[#101b2b] py-10"
        data-aos="fade-up"
      >
        <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
          Seja um Aprimorado
        </h1>
        <p className="p-10 text-center font-lustria text-lg text-white">
          Quer se tornar mais um Aprimorado e crescer junto com a gente? Forneça o seu
          <br /> WhatsApp logo abaixo !
        </p>
        <div className="mx-auto flex w-[20.625rem] flex-row items-center rounded-full bg-white shadow-md">
          <PhoneNumberForm />
        </div>
      </div>
      <div className="footer-down flex w-full flex-col items-center justify-center">
        <span className="mb-20 flex flex-col items-center justify-center gap-10 sm:flex-row md:space-x-28 lg:space-x-60 xl:space-x-96">
          <Image src="/head/logo.svg" width={159} height={38} alt="Logotipo" />
          <span className="flex flex-row items-center justify-center gap-14 sm:gap-20">
            <a
              href="https://www.linkedin.com/company/aprimoraconhecimento/"
              target="_blank"
              className="items-center justify-center rounded-full bg-[#101b2b] p-4"
            >
              <Image
                src="/footer/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin logo"
              />
            </a>
            <a
              href="https://www.instagram.com/aprimoraconhecimento/"
              target="_blank"
              className="items-center justify-center rounded-full bg-[#101b2b] p-4"
            >
              <Image
                src="/footer/instagram.svg"
                width={30}
                height={30}
                alt="Linkedin logo"
              />
            </a>
            <a
              href="https://www.youtube.com/@aprimoralabs"
              target="_blank"
              className="items-center justify-center rounded-full bg-[#101b2b] p-4"
            >
              <Image
                src="/footer/youtube.svg"
                width={30}
                height={30}
                alt="Linkedin logo"
              />
            </a>
            <a
              href="https://www.tiktok.com/@aprimoralabs"
              target="_blank"
              className="items-center justify-center rounded-full bg-[#101b2b] p-4"
            >
              <Image
                src="/footer/tiktok.svg"
                width={30}
                height={30}
                alt="Linkedin logo"
              />
            </a>
          </span>
        </span>
        <a href="/privacypolicy">
          <p className="mb-10 flex w-full items-center justify-center text-center font-lustria text-lg">
            &copy; Copyright 2025 - Todos os direitos reservados - Aprimora
            Conhecimento
          </p>
        </a>
      </div>
    </div>
  )
}

export default Footer