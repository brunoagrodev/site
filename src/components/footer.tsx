'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PhoneNumberForm from './phonenumberform'
import { FaFacebookF, FaBehance } from 'react-icons/fa'

const Rodape = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div id="contato" className="footer bg-white text-white py-12">
      <div className="container mx-auto px-6">
        <div
          className="footer-up w-full rounded-[56px] bg-[#101b2b] py-10 mb-10"
          data-aos="fade-up"
        >
          <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
            Seja um Aprimorado
          </h1>
          <p className="text-center text-lg mt-4 mb-6 font-lustria text-white">
            Quer se tornar mais um Aprimorado e crescer junto com a gente? Forneça o seu
            <br /> WhatsApp logo abaixo!
          </p>
          <div className="flex justify-center">
            <div className="mx-auto flex w-[20.625rem] items-center rounded-full bg-white shadow-md">
              <PhoneNumberForm />
            </div>
          </div>
        </div>
        <div className="footer-down flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Image src="/head/logo.svg" width={159} height={38} alt="Logotipo" />
            <span className="flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com/company/aprimoraconhecimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#101b2b] p-4"
              >
                <Image
                  src="/footer/linkedin.svg"
                  width={30}
                  height={30}
                  alt="LinkedIn logo"
                />
              </a>
              <a
                href="https://www.instagram.com/aprimoraconhecimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#101b2b] p-4"
              >
                <Image
                  src="/footer/instagram.svg"
                  width={30}
                  height={30}
                  alt="Instagram logo"
                />
              </a>
              <a
                href="https://www.facebook.com/aprimoraconhecimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#101b2b] p-4"
              >
                <FaFacebookF color="#ffffff" size={30} />
              </a>
              <a
                href="https://www.behance.net/aprimoraconhecimento"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#101b2b] p-4"
              >
                <FaBehance color="#ffffff" size={30} />
              </a>
            </span>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl font-semibold text-[#101b2b]">Contato</h2>
            <ul className="mt-4 space-y-2 text-lg text-[#101b2b]">
              <li>
                Email:{' '}
                <a
                  href="mailto:aprimoraconhecimento@gmail.com"
                  className="text-[#101b2b] hover:underline"
                >
                  aprimoraconhecimento@gmail.com
                </a>
              </li>
              <li>
                Telefone:{' '}
                <a
                  href="https://wa.me/55849991557670?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20Aprimora%20Conhecimento."
                  className="text-[#101b2b] hover:underline"
                >
                  +55 84 99155-7670
                </a>
              </li>
              <li>Localização: Natal - RN</li>
            </ul>
          </div>
        </div>
        <footer className="footer-bottom text-center text-lg font-lustria text-[#101b2b] border-t border-gray-300 pt-6">
          <p>
            &copy; 2025 Aprimora Conhecimento. Todos os direitos reservados.{' '}
            <a
              href="/policyprivacy"
              className="underline hover:text-blue-600 transition-colors"
            >
              Política de Privacidade
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Rodape
