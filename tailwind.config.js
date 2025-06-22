// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // обязательно пропишите все папки/файлы, где вы используете классы
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
            'custom-green': '#a8cc55',
        // ваша основная «брендовая» зелень
        primary: {
          light: '#b3d870',   // чуть светлее
          DEFAULT: '#86b233', // точный ваш #86b233
          dark: '#5e801a',    // чуть темнее
        },
        // вторичный, комплементарный (холодный) оттенок
        secondary: {
          light: '#90cdf4',
          DEFAULT: '#63b3ed',
          dark: '#3182ce',
        },
        // акцентный «жёлто-оранжевый»
        accent: {
          light: '#fbd38d',
          DEFAULT: '#f6ad55',
          dark: '#dd6b20',
        },
        // «фоновый» мягкий нейтральный
        muted: '#f7fafc',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // можно добавить ещё, например, forms или typography
  ],
}
