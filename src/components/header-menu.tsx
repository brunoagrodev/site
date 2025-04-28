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
      <div className="menu-buttons hidden flex-row items-center justify-center gap-5 md:flex">
        <Link href="/#differences">
          <p className="cursor-pointer" onClick={handleMenu}>
            Benefícios
          </p>
        </Link>
        <Link href={'/#work'}>
          <p className="cursor-pointer" onClick={handleMenu}>
            Como trabalhamos
          </p>
        </Link>
        <Link href={'/#services'}>
          <p className="cursor-pointer" onClick={handleMenu}>
            Especialidades
          </p>
        </Link>
        <Link href={'/#team'}>
          <p className="cursor-pointer" onClick={handleMenu}>
            Depoimentos
          </p>
        </Link>
        <Link href={'/#contato'}>
          <p className="cursor-pointer" onClick={handleMenu}>
            Contato
          </p>
        </Link>
        <Link href={'/#apoiase'}>
          <button className="rounded-full bg-[#243c60] px-6 py-3 text-white hover:bg-[#BBC3CE] hover:text-[#101B2B] font-bold" onClick={handleMenu}>
            APOIA-SE
          </button>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button
          className="relative flex h-8 w-10 flex-col justify-between"
          onClick={handleMenu}
        >
          <div className="h-1 w-7 rounded bg-black"></div>
          <div className="h-1 w-10 rounded bg-black"></div>
          <div className="h-1 w-7 rounded bg-black"></div>
        </button>
        {open && (
          <div className="absolute left-0 top-0 z-50 flex h-[100vh] w-full animate-fadeInLeft flex-col items-center gap-10 bg-white p-10 text-xl text-black">
            <div className="flex w-full flex-row justify-between">
              <button className="flex">
                <Image
                  src="/head/logosmall.svg"
                  height={60}
                  width={60}
                  alt="Logotipo da Aprimora Conhecimento"
                  onClick={handleMenu}
                  className="cursor-pointer"
                />
              </button>
              <button onClick={handleMenu} className="flex">
                <Image src="/head/x.svg" height={30} width={30} alt="x" />
              </button>
            </div>
            <div className="my-10 flex flex-col items-center justify-center gap-6">
              <Link href={'/#differences'}>
                <p className="cursor-pointer" onClick={handleMenu}>
                  Benefícios
                </p>
              </Link>
              <Link href={'/#work'}>
                <p className="cursor-pointer" onClick={handleMenu}>
                  Como trabalhamos
                </p>
              </Link>
              <Link href={'/#services'}>
                <p className="cursor-pointer" onClick={handleMenu}>
                  Especialidades
                </p>
              </Link>
              <Link href={'/#team'}>
                <p className="cursor-pointer" onClick={handleMenu}>
                  Depoimentos
                </p>
              </Link>
              <Link href={'/#contato'}>
                <p className="cursor-pointer" onClick={handleMenu}>
                  Contato
                </p>
              </Link>
            </div>
            <div className="flex cursor-pointer flex-row items-center justify-center">
              <a
                className="flex cursor-pointer flex-row content-center items-center justify-center rounded-full bg-[#243c60] p-5 text-white hover:bg-[#BBC3CE] hover:text-[#101B2B] font-bold"
                onClick={handleMenu}
                href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_WPP}&text=${encodeURIComponent('Olá, gostaria de entrar em contato com a Aprimora Conhecimento.')}`}
                target="_blank"
              >
                <p className="relative top-[2px]">APOIA-SE</p>
              </a>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="cursor-pointer rounded-full bg-[#243c60] p-5 hover:bg-[#BBC3CE]"
                href="https://www.instagram.com/aprimoraconhecimento/"
                target="_blank"
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
