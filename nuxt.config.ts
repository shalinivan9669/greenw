import compression from 'compression'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Реклама в лифтах и на экранах в  Караганде | GREENWAY — Реклама в Караганде',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Эффективная реклама в лифтах Караганды от GREENWAY. Увеличьте охват рекламы в Караганде. Разместив рекламу в 300 лифтах  и привлеките новых клиентов уже сегодня! Заказать рекламу !',
        },
        {
          name: 'keywords',
          content:
            'Реклама, Реклама в лифтах Караганда, Реклама в Караганде, Реклама Караганада, GREENWAY, реклама в лифтах , рекламное агентство Караганда, Рекламные стенды Караганда, размещение рекламы, рекламные услуги Караганда',
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
              "https://www.tiktok.com/@greenw.kz",
              "https://api.whatsapp.com/send/?phone=77086755846"
            ]
          }
          `,
        },
        // Добавление Яндекс.Метрики
        {
          hid: 'yandex-metrika',
          innerHTML: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){
                (m[i].a=m[i].a||[]).push(arguments)
              };
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
            ym(${process.env.VITE_YANDEX_METRIKA_ID}, "init", { 
              clickmap:true, 
              trackLinks:true, 
              accurateTrackBounce:true, 
              webvisor:true 
            });
          `,
          type: 'text/javascript',
          charset: 'utf-8',
          body: true, // Размещает скрипт перед закрывающим тегом </body>
        },
        // Добавление Google Tag (gtag.js)
        {
          hid: 'google-tag',
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_GOOGLE_TAG_ID}`,
          async: true,
        },
        {
          hid: 'google-gtag',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', '${process.env.VITE_GOOGLE_TAG_ID}');
          `,
          type: 'text/javascript',
          charset: 'utf-8',
          body: true,
        }
      ],
      noscript: [
        {
          hid: 'yandex-metrika-noscript',
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/${process.env.VITE_YANDEX_METRIKA_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'yandex-metrika': ['innerHTML'],
        'yandex-metrika-noscript': ['innerHTML'],
        'google-gtag': ['innerHTML'],
      }
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

  // Опционально: Добавление компрессии
  serverMiddleware: [
    {
      path: '/',
      handler: compression()
    }
  ],
})
