import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-white': '#F8F9FF',
        'custom-yellow': '#FEA800',
        'custom-blue': '#172755',
      },
      screens: {
        xs: '320px', // Pantallas de 320px
        sm: '640px', // Pantallas de 640pxF
        md: '768px', // Pantallas de 768px
        lg: '1024px', // Pantallas de 1024px
        xl: '1280px', // Pantallas de 1280px
        '2xl': '1440px', // Pantallas de 1440px
        '3xl': '1920px', // Pantallas de 1920px
        '4xl': '2560px', // Pantallas de 2560px
      },
    },
  },
  plugins: [],
};

export default config;

