import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-exo)',
        lustria: 'var(--font-lustria)',
      },
      colors: {
        white: '#fff',
        darkText: '#101B2B',
        deepBlue: '#0D1522',
        darkBlue: '#243c60',
        blue: '#3B63A8',
        lightBlue: '#518BE0',
        orange: '#F47A1E',
        lightOrange: '#FFAC73',
        lightHover: '#BBC3CE',
      },
      keyframes: {
        fadeOutLeft: {
          '0%': {
            opacity: '0',
            transform:
              'translateX(0)' /* Modificado: translateX em vez de translateY */,
          },
          '100%': {
            opacity: '1',
            transform:
              'translateX(100%)' /* Modificado: translateX em vez de translateY */,
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform:
              'translateX(100%)' /* Modificado: translateX em vez de translateY */,
          },
          '100%': {
            opacity: '1',
            transform:
              'translateX(0)' /* Modificado: translateX em vez de translateY */,
          },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeOutLeft: 'fadeOutLeft 1s ease-in-out',
      },
    },
    plugins: [],
  },
}

export default config
