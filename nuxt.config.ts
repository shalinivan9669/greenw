import compression from 'compression'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Включение gzip-сжатия для всего контента
  serverMiddleware: [
    compression({ threshold: 0 })
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Реклама в лифтах Караганды и Темертау | GREENWAY — Реклама в Караганде',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'GREENWAY — первые в Караганде по рекламе в лифтах. Увеличьте охват и привлеките новых клиентов через эффективное размещение рекламы в жилых домах и бизнес-центрах. Свяжитесь с нами и узнайте, как мы можем помочь вашему бизнесу расти!',
        },
        {
          name: 'keywords',
          content:
            'реклама в лифтах Караганда, Реклама в Караганде, GREENWAY, реклама в лифтах Темертау, лифтовая реклама, рекламное агентство Караганда, баннерная реклама в Караганде, Рекламные стенды Караганда, локальная реклама, размещение рекламы, эффективная реклама, рекламные услуги Караганда',
        },
        // Open Graph мета-теги
        { property: 'og:title', content: 'Реклама в лифтах Караганды | GREENWAY' },
        {
          property: 'og:description',
          content:
            'GREENWAY — первые в Караганде по рекламе в лифтах. Привлекайте новых клиентов и увеличивайте продажи с помощью эффективной рекламы в лифтах.',
        },
        { property: 'og:image', content: 'https://yourwebsite.com/og-image.jpg' },
        { property: 'og:url', content: 'https://yourwebsite.com' },
        { property: 'og:type', content: 'website' },
        // Twitter Card мета-теги
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Реклама в лифтах Караганды | GREENWAY' },
        {
          name: 'twitter:description',
          content:
            'Узнайте, как GREENWAY может помочь вашему бизнесу расти через эффективную рекламу в лифтах Караганды.',
        },
        { name: 'twitter:image', content: 'https://yourwebsite.com/og-image.jpg' },
        { name: 'language', content: 'ru' },
        { name: 'geo.region', content: 'KZ-KAR' }, // Код региона Караганды
        { name: 'geo.placename', content: 'Караганда' },
        { name: 'geo.position', content: '49.806,73.085' }, // Примерные координаты Караганды
        { name: 'ICBM', content: '49.806,73.085' },
      ],
      
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        // Дополнительные ссылки на ресурсы
      ],
      script: [
        // Структурированные данные Schema.org
        {
          type: 'application/ld+json',
          children: `
          {
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "GREENWAY",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Караганда",
              "addressCountry": "KZ"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7 708 675 5846",
              "contactType": "customer service",
              "availableLanguage": ["Russian"]
            },
            "sameAs": [
              "https://www.instagram.com/greenw.kz/",
              "https://www.tiktok.com/@greenway_reklama",
              "https://api.whatsapp.com/send/?phone=77086755846"
            ]
          }
          `,
        },
      ],
    },
    buildAssetsDir: '/_nuxt/', // Директория для статических активов
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],

  // Настройки для модуля @nuxt/image
  image: {
    dir: 'static',
    format: ['webp', 'png'],
    providers: {
      // Опциональные провайдеры изображений, например Cloudinary или imgix
    },
  },

  plugins: [
    '~/plugins/observe-visibility.js' // Ваши плагины
  ],

   
})
