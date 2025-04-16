import { Children } from 'react'
import { tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'font-bold flex justify-center items-center hover:bg-lightHover hover:text-darkText rounded-[50px] transition duration-300',
  variants: {
    color: {
      blue: 'bg-darkBlue text-white ',
      lightOrange: 'bg-[#FEF2E9] text-darkText',
    },
    size: {
      sm: 'text-xl',
      md: 'text-[25px]',
      // lg: 'px-4 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-8 py-[18px]',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'blue',
  },
})

interface variants {
  size?: 'sm' | 'md'
  color?: 'blue' | 'lightOrange'
  children: React.ReactNode
}

export const Button = ({ size = 'md', color = 'blue', children }: variants) => {
  return <button className={buttonVariants({ size, color })}>{children}</button>
}
