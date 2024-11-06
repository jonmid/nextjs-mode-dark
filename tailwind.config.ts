import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        app: {
          '50': '#fdf2fa',
          '100': '#fbe8f6',
          '200': '#fad0ee',
          '300': '#f7aadf',
          '400': '#f175c7',
          '500': '#e63da8',
          '600': '#d72b8f',
          '700': '#ba1c74',
          '800': '#9a1a60',
          '900': '#801b52',
          '950': '#4e092e',
        },
      },
    },
  },
  plugins: [],
};
export default config;
