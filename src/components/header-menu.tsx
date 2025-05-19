'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="menu container fixed z-50 mb-14 flex h-20 w-[100vw] flex-row justify-between bg-white px-5 py-5 sm:px-0">
      <div className="logo">
        <Link href={'/'}>
          <Image
            src="/head/logo.svg"
            width={159}
            height={38}
            priority={true}
            alt="Logotipo"
          />
        </Link>
      </div>

      {/* Menu Desktop */}
      <div className="menu-buttons hidden flex-row items-center justify-center gap-5 md:flex">
        <Link href="/#beneficios" className="cursor-pointer" onClick={handleMenu}>
          Benefícios
        </Link>
        <Link href="/#comotrabalhamos" className="cursor-pointer" onClick={handleMenu}>
          Como trabalhamos
        </Link>
        <Link href="/#especialidades" className="cursor-pointer" onClick={handleMenu}>
          Especialidades
        </Link>
        <Link href="/#depoimentos" className="cursor-pointer" onClick={handleMenu}>
          Depoimentos
        </Link>
        <Link href="/#contato" className="cursor-pointer" onClick={handleMenu}>
          Contato
        </Link>
        <a
          href="https://apoia.se/aprimoraconhecimento"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-full bg-[#243c60] px-6 py-3 text-white hover:bg-[#BBC3CE] hover:text-[#101B2B] font-bold">
            APOIA-SE
          </button>
        </a>
      </div>

      {/* Menu Mobile */}
      <div className="flex md:hidden">
        <button
          className="relative flex h-8 w-10 flex-col justify-between"
          onClick={handleMenu}
          aria-label="Toggle menu"
        >
          <div className="h-1 w-7 rounded bg-black"></div>
          <div className="h-1 w-10 rounded bg-black"></div>
          <div className="h-1 w-7 rounded bg-black"></div>
        </button>

        {open && (
          <div className="absolute left-0 top-0 z-50 flex h-[100vh] w-full animate-fadeInLeft flex-col items-center gap-10 bg-white p-10 text-xl text-black">
            <div className="flex w-full flex-row justify-between">
              <button className="flex" onClick={handleMenu} aria-label="Close menu">
                <Image
                  src="/head/logosmall.svg"
                  height={60}
                  width={60}
                  alt="Logotipo da Aprimora Conhecimento"
                  className="cursor-pointer"
                />
              </button>
              <button onClick={handleMenu} className="flex" aria-label="Close menu">
                <Image src="/head/x.svg" height={30} width={30} alt="Fechar menu" />
              </button>
            </div>

            <div className="my-10 flex flex-col items-center justify-center gap-6">
              <Link href="/#beneficios" className="cursor-pointer" onClick={handleMenu}>
                Benefícios
              </Link>
              <Link href="/#comotrabalhamos" className="cursor-pointer" onClick={handleMenu}>
                Como trabalhamos
              </Link>
              <Link href="/#especialidades" className="cursor-pointer" onClick={handleMenu}>
                Especialidades
              </Link>
              <Link href="/#depoimentos" className="cursor-pointer" onClick={handleMenu}>
                Depoimentos
              </Link>
              <Link href="/#contato" className="cursor-pointer" onClick={handleMenu}>
                Contato
              </Link>
              <a
                href="https://apoia.se/aprimoraconhecimento"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenu}
              >
                <button className="rounded-full bg-[#243c60] px-6 py-3 text-white hover:bg-[#BBC3CE] hover:text-[#101B2B] font-bold">
                  APOIA-SE
                </button>
              </a>
            </div>

            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="cursor-pointer rounded-full bg-[#243c60] p-5 hover:bg-[#BBC3CE]"
                href="https://www.instagram.com/aprimoraconhecimento/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenu}
              >
                <Image
                  src="/head/instagramlogo.svg"
                  width={20}
                  height={20}
                  alt="Instagram"
                />
              </a>
              <p>@aprimoraconhecimento</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
