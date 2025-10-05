/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0C10',
        surface: '#12141A',
        text: {
          primary: 'rgba(255, 255, 255, 0.92)',
          secondary: '#9AA0A6',
        },
        line: 'rgba(255, 255, 255, 0.06)',
        accent: {
          blue: '#3D7BFF',
          cyan: '#29D3FF',
          magenta: '#B249F8',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        card: '16px',
      },
      boxShadow: {
        'glow-blue': '0 0 24px rgba(61, 123, 255, 0.25)',
        'glow-cyan': '0 0 24px rgba(41, 211, 255, 0.2)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '1280px',
        },
      },
    },
  },
  plugins: [],
}
