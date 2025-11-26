<!-- pages/screens/index.vue -->
<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    <!-- ░░░ Навбар ░░░ -->
    <NavBar class="shadow-md bg-white z-10" />

    <main class="flex-grow">
      <!-- ░░░ Hero ░░░ -->
      <section
        id="led-hero"
        class="relative overflow-hidden bg-gradient-to-b from-[#4caf4fcc] to-[#a8cc55]"
      >
        <div
          class="absolute inset-0 bg-[url('/pattern-screens.svg')] opacity-10 pointer-events-none"
        ></div>

        <div class="relative container mx-auto px-6 pt-12 pb-24 text-center">
          <span
            class="inline-block bg-white text-[#4caf4f] font-bold px-6 py-2 rounded-full mb-6 uppercase tracking-wide shadow-md"
          >
            −10 % на первый месяц
          </span>

          <h1
            class="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-8 drop-shadow-lg max-w-5xl mx-auto"
          >
            Реклама на LED-экранах и мониторах<br class="hidden md:inline" />
            в Караганде
          </h1>

          <ul
            class="text-lg md:text-xl mb-10 space-y-3 max-w-3xl mx-auto text-left list-inside list-disc text-white/90"
          >
            <li>28 экрана по всему городу — ТЦ, улицы, вокзалы</li>
            <li>200–400 показов в день</li>
            <li>Хронометраж до 30 секунд</li>
            <li>Узнаваемость </li>
            <li>Охваты</li>
            <li>Эффект "вижу каждый день"</li>
          </ul>

          <p class="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-sm">
            От 20&nbsp;000&nbsp;₸/мес
          </p>
          <p class="text-sm text-white/80 mb-14">Более 50 клиентов уже с нами</p>

          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink
              to=""
              @click.prevent="openOrderModal('звонок')"
              class="cursor-pointer px-10 py-4 bg-white text-[#4caf4f] font-semibold rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-200"
            >
              Заказать звонок
            </NuxtLink>

            <a
              href="https://wa.me/77086755846"
              target="_blank"
              class="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4caf4f] transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <!-- ░░░ Типы экранов ░░░ -->
      <section id="led-screens" class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <h2
            class="text-4xl md:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#4caf4f] via-[#8ecb48] to-[#a8cc55]"
          >
            Типы экранов
          </h2>

          <BentoGrid class="w-full max-w-6xl mx-auto auto-rows-[18rem] lg:auto-rows-[22rem] gap-8 md:grid-cols-1">
            <BentoGridCard
              v-for="(card, idx) in screenTypeCards"
              :key="card.title"
              :name="card.title"
              :description="card.line2 || card.line1"
              cta="Р—Р°РїСЂРѕСЃРёС‚СЊ СЂР°Р·РјРµС‰РµРЅРёРµ"
              :class="card.layout"
            >
              <template #background>
                <div
                  class="absolute inset-0 opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
                  :style="card.backgroundStyle"
                ></div>
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.45),transparent_40%)] opacity-80 mix-blend-screen"></div>
                <div class="absolute inset-0 border border-white/50 rounded-2xl shadow-[0_20px_50px_-24px_rgba(34,124,45,0.45)]"></div>
              </template>

              <template #title>
                <div class="flex items-center justify-between gap-3">
                  <span
                    class="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#2e7d32] shadow-sm"
                  >
                    {{ card.line1 }}
                  </span>
                  <span class="text-sm font-semibold text-[#2e7d32]">
                    {{ idx + 1 }} / {{ screenTypeCards.length }}
                  </span>
                </div>
                <div class="mt-4 text-2xl font-extrabold leading-tight text-neutral-900 drop-shadow-sm">
                  {{ card.title }}
                </div>
              </template>

              <template #description>
                <p class="text-sm leading-relaxed text-neutral-700">
                  {{ card.line2 || card.line3 }}
                </p>
              </template>

              <template #details>
                <ul class="mt-3 space-y-2 text-sm leading-relaxed text-neutral-800">
                  <li v-if="card.line3">{{ card.line3 }}</li>
                  <li v-if="card.line4">{{ card.line4 }}</li>
                  <li v-if="card.line5" class="text-base font-bold text-[#225c24]">
                    {{ card.line5 }}
                  </li>
                  <li v-if="card.line6" class="font-semibold text-[#2e7d32]">
                    {{ card.line6 }}
                  </li>
                </ul>
              </template>

              <template #actions>
                <button
                  class="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-[#4caf4f] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#3c8e3f]"
                  @click.prevent="openOrderModal(card.title)"
                >
                  Р—Р°РєР°Р·Р°С‚СЊ
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
                  </svg>
                </button>
              </template>
            </BentoGridCard>
          </BentoGrid>
        </div>
      </section>

      <!-- ░░░ Галерея экранов ░░░ -->
      <section id="led-gallery" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2
            class="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#4caf4f] to-[#a8cc55]"
          >
            Галерея экранов
          </h2>

          <div class="bg-white rounded-3xl shadow-xl p-4 md:p-6">
            <Masonry
              class="w-full"
              :items="masonryItems"
              :duration="0.6"
              :stagger="0.05"
              animate-from="bottom"
              :scale-on-hover="true"
              :hover-scale="0.95"
              :blur-to-focus="true"
              :color-shift-on-hover="false"
            />
          </div>
        </div>
      </section>

      <!-- ░░░ Почему это работает ░░░ -->
      <section id="led-benefits" class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <h2
            class="text-4xl md:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#4caf4f] via-[#8ecb48] to-[#a8cc55]"
          >
            Почему это работает
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div
              v-for="(point, idx) in whyPoints"
              :key="idx"
              class="relative p-10 bg-gradient-to-br from-[#f0fbe6] via-white/60 to-[#f0fbe6] rounded-3xl shadow-xl ring-1 ring-[#a8cc55]/20 hover:ring-[#a8cc55]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col animate-fade-up"
              :style="{ '--i': idx }"
            >
              <!-- Бадж -->
              <div class="absolute -top-6 left-6">
                <div
                  class="w-14 h-14 rounded-full bg-[#4caf4f] text-white flex items-center justify-center text-xl font-extrabold shadow-lg"
                >
                  {{ idx + 1 }}
                </div>
              </div>

              <h3 class="mt-8 text-xl font-semibold text-[#2e7d32] mb-3 leading-snug">
                {{ point.title }}
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">{{ point.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ░░░ Когда полезно (полностью переработанный блок) ░░░ -->
      <section class="relative py-24 bg-gray-50 overflow-hidden">
        <!-- Декоративные пятна -->
        <svg
          class="absolute -top-24 -left-24 w-[480px] h-[480px] blur-3xl opacity-30 select-none pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="#8ecb48" />
        </svg>
        <svg
          class="absolute bottom-0 right-0 w-[380px] h-[380px] blur-3xl opacity-25 select-none pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="#4caf4f" />
        </svg>

        <div class="relative container mx-auto px-6">
          <h2
            class="text-4xl md:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#4caf4f] via-[#8ecb48] to-[#a8cc55]"
          >
            Когда реклама на LED-экранах раскрывает максимум
          </h2>

          <ul
            class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
            role="list"
          >
            <li
              v-for="(item, idx) in whenUsefulList"
              :key="idx"
              class="relative p-8 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-[#a8cc55]/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#4caf4f] text-white flex items-center justify-center text-2xl font-bold shadow-lg"
              >
                {{ item.icon }}
              </div>

              <h3 class="mt-10 text-lg font-semibold text-gray-900 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-700 leading-relaxed">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- ░░░ Финальный CTA ░░░ -->
      <section id="led-cta" class="py-24 bg-gradient-to-r from-[#4caf4f] to-[#8ecb48]">
        <div class="container mx-auto px-6 text-center text-white">
          <p class="text-3xl md:text-4xl font-extrabold mb-8">
            Рассчитать стоимость под ваш бизнес
          </p>

          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink
              to=""
              @click.prevent="openOrderModal('звонок')"
              class="cursor-pointer px-10 py-4 bg-white text-[#4caf4f] font-semibold rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-200"
            >
              Заказать звонок
            </NuxtLink>

            <a
              href="https://wa.me/77086755846"
              target="_blank"
              class="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4caf4f] transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      <FaqLed class="py-12 bg-gray-200" />
    </main>

    <!-- ░░░ Футер ░░░ -->
    <Footer class="mt-10 bg-white" />

    <!-- Модалка заказа -->
    <OrderModal
      v-if="showOrderModal"
      :block="modalBlock"
      @close-order-modal="closeOrderModal"
    />

  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import FaqLed from '@/components/FaqLed.vue'
import OrderModal from '@/components/OrderModal.vue'
import BentoGrid from '@/components/ui/bento-grid/BentoGrid.vue'
import BentoGridCard from '@/components/ui/bento-grid/BentoGridCard.vue'
import Masonry from '@/components/Masonry.vue'
import { ref } from 'vue'

useSeoMeta({
  title: 'Реклама на LED-экранах в Караганде – 22 площадки | GreenW',
  description: 'Видео-реклама на экранах в ТРЦ, на вокзале и улицах Караганды. До 400 показов в сутки. От 20 000 ₸/мес.',
  ogTitle: 'LED-реклама Караганда',
  ogDescription: 'Динамичная цифровая наружная реклама по всему городу.',
  ogUrl: 'https://www.greenw.kz/led',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.greenw.kz/led' }],
  script: [
    {
      type:'application/ld+json',
      children: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'Service',
        serviceType:'Реклама на LED-экранах',
        areaServed:{ '@type':'City', name:'Караганда' },
        provider:{ '@type':'Organization', name:'GreenW', url:'https://www.greenw.kz' }
      })
    },
    {
      type:'application/ld+json',
      children: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'FAQPage',
        mainEntity: [
          { '@type':'Question', name:'Какой формат видео нужен?',
            acceptedAnswer:{ '@type':'Answer', text:'MP4, 1920×1080, до 15–30 c. Поможем адаптировать ролик.'}},
          { '@type':'Question', name:'Есть ли звук?',
            acceptedAnswer:{ '@type':'Answer', text:'Обычно без звука. Важен понятный визуальный посыл и субтитры.'}},
          { '@type':'Question', name:'Минимальный срок?',
            acceptedAnswer:{ '@type':'Answer', text:'Рекомендуем от 1 месяца для накопления контактов и узнаваемости.'}}
        ]
      })
    }
  ]
})


/* ───────────────────────────── Типы экранов ───────────────────────────── */
const screenTypes = [
  {
    title: '🔹 Внутренние экраны',
    line1: 'Восток-LED, GreenCity-LED, Вокзал-LED 1/2',
    line2: '📍 ТЦ и жилые комплексы, рядом с супермаркетами, аптеками и кассами',
    line3: '📐 Размер: 1,8 × 0,7 м',
    line4: '👀 Охват: до 22 000 чел./день',
    line5: '💰 От 20 000 ₸ в месяц'
  },
  {
    title: '🔹 Уличные Smart Eco',
    line1: 'Парк-SmartEco, Сквер-SmartEco',
    line2: '📍 Центральный парк, перекрёсток Абдирова — Ерубаева',
    line3: '📐 Размер: 1,8 × 1 м',
    line4: '👀 Охват: до 30 000 проходимость',
    line5: '💰 От 200 000 ₸ / мес',
    line6: '🎁 Скидка 15 % на первое размещение'
  },
  {
    title: '🔹 Большие уличные экраны SmartMedia',
    line1: 'Акнар, Цирк, 45 квартал, Юбилейка, Караганда Арена',
    line2: '📍 Вдоль дорог, на ключевых перекрёстках и трассах',
    line3: '📐 Размер: 6 × 2 м',
    line4: '🚗 Автоохват: до 10 000 в день',
    line5: '💰 750 000 ₸ / 30 дней',
    line6: '🎁 Скидка 15 % при первом запуске'
  },
  {
    title: '🔹 Комплекс Таир (10 экранов)',
    line1: '2 LED + 8 мониторов в ТД Таир',
    line2: '📍 1, 2 и 4 этаж, рядом с фудкортом, бутиками, кассами',
    line3: '📐 FULL HD, до 30 сек, 3 показа в час',
    line4: '👀 Охват: до 22 000 чел./день',
    line5: '💰 40 000 ₸ / месяц за все 10 экранов'
  }
]

const screenTypePalettes = [
  { from: '#f4fbf0', to: '#e6f7d9', glow: 'rgba(76, 175, 79, 0.25)', glowSoft: 'rgba(168, 204, 85, 0.25)' },
  { from: '#e8f4ff', to: '#dff5f1', glow: 'rgba(76, 175, 79, 0.2)', glowSoft: 'rgba(0, 136, 204, 0.18)' },
  { from: '#fef7e5', to: '#e8f3ff', glow: 'rgba(76, 175, 79, 0.18)', glowSoft: 'rgba(255, 193, 7, 0.18)' },
  { from: '#eef9f1', to: '#f7fdf6', glow: 'rgba(56, 142, 60, 0.22)', glowSoft: 'rgba(168, 204, 85, 0.22)' }
]

const screenTypeLayouts = [
  'md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1',
  'md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-1',
  'md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-2',
  'md:col-span-3 md:row-span-1'
]

const screenTypeCards = screenTypes.map((card, idx) => {
  const palette = screenTypePalettes[idx % screenTypePalettes.length]
  return {
    ...card,
    layout: screenTypeLayouts[idx] || '',
    backgroundStyle: {
      backgroundImage: `radial-gradient(circle at 20% 20%, ${palette.glow}, transparent 45%), radial-gradient(circle at 80% 0%, ${palette.glowSoft}, transparent 42%), linear-gradient(135deg, ${palette.from}, ${palette.to})`
    }
  }
})
const masonryItems = ref([
  { id: 'gcp-main', img: '/exampleled/GCP.jpg', url: '/exampleled/GCP.jpg', height: 620 },
  { id: 'gcp-1', img: '/exampleled/GCP1.png', url: '/exampleled/GCP1.png', height: 540 },
  { id: 'gcp-2', img: '/exampleled/GCP2.png', url: '/exampleled/GCP2.png', height: 480 },
  { id: 'gcp-3', img: '/exampleled/GCP3.jpg', url: '/exampleled/GCP3.jpg', height: 560 },
  { id: 'gcp-4', img: '/exampleled/GCP4.jpg', url: '/exampleled/GCP4.jpg', height: 420 },
  { id: 'gcp-5', img: '/exampleled/GCP5.png', url: '/exampleled/GCP5.png', height: 520 },
  { id: 'smarteco-main', img: '/exampleled/smarteco.jpg', url: '/exampleled/smarteco.jpg', height: 620 },
  { id: 'smarteco-1', img: '/exampleled/smarteco1.png', url: '/exampleled/smarteco1.png', height: 520 },
  { id: 'smarteco-2', img: '/exampleled/smarteco2.png', url: '/exampleled/smarteco2.png', height: 460 },
  { id: 'smarteco-3', img: '/exampleled/smarteco3.png', url: '/exampleled/smarteco3.png', height: 500 },
  { id: 'ledbig-main', img: '/exampleled/ledbig.jpg', url: '/exampleled/ledbig.jpg', height: 700 },
  { id: 'ledbig-1', img: '/exampleled/ledbig1.png', url: '/exampleled/ledbig1.png', height: 540 },
  { id: 'ledbig-2', img: '/exampleled/ledbig2.png', url: '/exampleled/ledbig2.png', height: 520 },
  { id: 'ledbig-3', img: '/exampleled/ledbig3.png', url: '/exampleled/ledbig3.png', height: 480 },
  { id: 'ledbig-4', img: '/exampleled/ledbig4.png', url: '/exampleled/ledbig4.png', height: 580 },
  { id: 'ledbig-5', img: '/exampleled/ledbig5.png', url: '/exampleled/ledbig5.png', height: 500 },
  { id: 'tair-main', img: '/exampleled/tair.jpg', url: '/exampleled/tair.jpg', height: 660 },
  { id: 'tair-1', img: '/exampleled/tair1.png', url: '/exampleled/tair1.png', height: 540 },
  { id: 'tair-2', img: '/exampleled/tair2.png', url: '/exampleled/tair2.png', height: 500 },
  { id: 'tair-3', img: '/exampleled/tair3.png', url: '/exampleled/tair3.png', height: 460 },
  { id: 'tair-4', img: '/exampleled/tair4.png', url: '/exampleled/tair4.png', height: 560 },
  { id: 'tair-5', img: '/exampleled/tair5.png', url: '/exampleled/tair5.png', height: 500 }
])

/* ──────────────────────── Почему это работает ─────────────────────── */
const whyPoints = [
  { title: 'Экраны там, где взгляд прикован', text: 'Супермаркет, вокзал, фудкорт — люди вынужденно останавливаются.' },
  { title: 'Повтор — ключ к запоминанию', text: 'Несколько показов в день создают эффект знакомого бренда.' },
  { title: 'Видео = эмоция', text: 'Динамика и звук работают лучше, чем статичный баннер.' },
  { title: 'Масштабно и локально', text: 'Охват города и точечная настройка по районам.' },
  { title: 'Бренд — часть города', text: 'Экран не пролистать, не закрыть, не проигнорировать.' }
]

/* ────────────────────────── Когда полезно ────────────────────────── */
const whenUsefulList = [
  { icon: '🚀', title: 'Новая точка или бизнес', text: 'LED-экран мгновенно расскажет о вас всему району и создаст первые лиды.' },
  { icon: '⚡️', title: 'Короткая акция', text: 'Ролик можно показать 2 800 раз уже на этой неделе — максимум охвата за минимум времени.' },
  { icon: '🎯', title: 'Высокая конкуренция', text: 'Сочный ролик на экране выделит вас среди остальных предложений.' },
  { icon: '🤝', title: 'Рост доверия', text: 'Появление на большом экране в ТЦ или на вокзале повышает статус бренда.' },
  { icon: '📈', title: 'Сайт без заявок', text: 'Прямой call-to-action на экране направит аудиторию сразу в WhatsApp или Instagram.' },
  { icon: '💡', title: 'Альтернатива билбордам', text: 'LED-реклама ярче, динамичнее и при этом дешевле классической наружки.' }
]

// состояния модалки заказа
const showOrderModal    = ref(false)
const modalBlock        = ref<{ name: string }>({ name: '' })

// Заказ звонка
function openOrderModal(name: string) {
  modalBlock.value = { name }
  showOrderModal.value = true
}
function closeOrderModal() {
  showOrderModal.value = false
}
</script>

<style scoped>
.container {
  max-width: 1280px;
}

/* Анимация появления карточек вверх */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.6s ease forwards;
}
</style>
