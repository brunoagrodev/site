'use client'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import * as zod from 'zod' // Importe o Zod para validação de esquema

// Defina o esquema de validação para o número de telefone
const formSchema = zod.object({
  phone: zod
    .string()
    .min(1, { message: 'Número Incompleto' })
    .refine((val) => !val.includes('_'), { message: 'Número Incompleto' }),
})

export default function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState(false)
  const [response, setResponse] = useState({
    type: '',
    message: '',
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (phoneNumber.includes('_') || phoneNumber === '') {
      setError(true)
      return
    }

    try {
      formSchema.parse({ phone: phoneNumber })

      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          $NovoLead: 'Telefone para Contato',
          phone: phoneNumber,
          accessKey: process.env.NEXT_PUBLIC_KEY_EMAIL,
        }),
      })

      const json = await response.json()

      if (response.ok) {
        if (json.success) {
          // console.log(response)
          setResponse({
            type: 'success',
            message: 'Thank you for reaching out to us.',
          })
        } else {
          // console.log(response)
          setResponse({
            type: 'error',
            message: json.message,
          })
        }
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setResponse({
        type: 'error',
        message: 'An error occurred while submitting the form',
      })
    }
  }

  return (
    <div>
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mx-auto flex w-[20.625rem] flex-row items-center rounded-full bg-white shadow-md">
          <Image
            src="/footer/whatsapp.svg"
            width={50}
            height={50}
            alt="WhatsApp logotipo"
            className="mr-2 rounded-l-full bg-orange p-2"
          />
          <InputMask
            mask="(99) \99999-9999"
            maskChar="_"
            alwaysShowMask={false}
            placeholder="(11) 91234-5678"
            className="text-4 placeholder:text-neutral-light-200 md:text-2 inline-block w-20 flex-1 bg-transparent focus:outline-none"
            type="phone"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value)
              setError(false)
            }}
          />
          <button
            type="submit"
            className="flex h-12 w-24 cursor-pointer flex-col items-center rounded-r-full border-l-2 p-3 text-center font-bold hover:bg-lightHover"
          >
            {response.type === 'success' ? (
              <FaCheck className="bg-primary-400 aspect-square h-[1lh] w-auto fill-green-600" />
            ) : (
              'ENVIAR'
            )}
          </button>
        </div>
        {error && (
          <p className="text-5 md:text-4 absolute ml-20 text-center italic text-red-500">
            Telefone Inválido
          </p>
        )}
        {response.type === 'success' && (
          <p className="text-5 md:text-4 absolute ml-10 mt-2 text-center italic text-white">
            Entraremos em contato em breve
          </p>
        )}
      </form>
    </div>
  )
}
