<!-- components/OwnersContent.vue -->
<template>
  <section class="bg-gray-50  py-12">
    <div class="container mx-auto px-4 lg:px-8">
      <h1 class="mb-4 mt-16 text-center text-4xl font-bold text-gray-800">
        Р РµРєР»Р°РјР° РІ РљР°СЂР°РіР°РЅРґРµ РґР»СЏ СЃРѕР±СЃС‚РІРµРЅРЅРёРєРѕРІ Р»РёС„С‚РѕРІ
      </h1>
      <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
        РќР°РїСЂР°РІРёР»Рё РґРµСЃСЏС‚РєРё РґРѕРјРѕРІ РЅР° РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ РґРѕС…РѕРґ: СЂР°Р·РјРµС‰Р°РµРј СЂРµРєР»Р°РјСѓ РІ Р»РёС„С‚Р°С…, РєРѕС‚РѕСЂСѓСЋ РґРµР№СЃС‚РІРёС‚РµР»СЊРЅРѕ РІРёРґСЏС‚ Р¶РёС‚РµР»Рё.
      </p>

      <BentoGrid class="w-full auto-rows-[22rem] gap-6">
        <BentoGridCard
          v-for="(card, idx) in ownerCards"
          :key="card.title"
          :name="card.title"
          :description="card.subtitle"
          cta="Р—Р°РїСЂРѕСЃРёС‚СЊ СЂР°Р·РјРµС‰РµРЅРёРµ"
          :class="card.layout"
        >
          <template #background>
            <div
              class="absolute inset-0 opacity-80 transition duration-300 group-hover:opacity-100"
              :style="card.backgroundStyle"
            ></div>
          </template>

          <template #title>
            <div class="flex items-center justify-between gap-3">
              <span
                class="rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#2e7d32] shadow-sm"
              >
                {{ card.badge }}
              </span>
              <span class="text-sm font-semibold text-[#2e7d32]">
                {{ idx + 1 }} / {{ ownerCards.length }}
              </span>
            </div>
            <div class="mt-4 text-2xl font-extrabold leading-tight text-neutral-900">
              {{ card.title }}
            </div>
          </template>

          <template #description>
            <p v-if="card.subtitle" class="text-sm leading-relaxed text-neutral-700">
              {{ card.subtitle }}
            </p>
          </template>

          <template #details>
            <div v-if="card.quiz" class="mt-2 rounded-xl bg-white/60 p-2 backdrop-blur">
              <QuizForm />
            </div>

            <div
              v-else-if="card.media"
              class="mt-2 grid grid-cols-1 gap-4 text-sm leading-relaxed text-neutral-800 md:grid-cols-2"
            >
              <ul class="space-y-2">
                <li v-for="(detail, detailIdx) in card.details" :key="detailIdx">
                  {{ detail }}
                </li>
              </ul>
              <div class="overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
                <img
                  :src="card.media"
                  loading="lazy"
                  alt="Р РµРєР»Р°РјРЅС‹Р№ СЃС‚РµРЅРґ РІ Р»РёС„С‚Рµ"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>

            <ul v-else-if="card.details?.length" class="mt-2 space-y-2 text-sm leading-relaxed text-neutral-800">
              <li v-for="(detail, detailIdx) in card.details" :key="detailIdx">
                {{ detail }}
              </li>
            </ul>
          </template>

          <template #actions>
            <button
              v-if="card.action === 'order'"
              class="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-[#4caf4f] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#3c8e3f]"
              @click.prevent="openOrderModal(card.title)"
            >
              Р—Р°РїСЂРѕСЃРёС‚СЊ
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

            <a
              v-else-if="card.action === 'video'"
              href="https://www.instagram.com/greenw.kz"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-[#2e7d32] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1f5a22]"
            >
              РЎРјРѕС‚СЂРµС‚СЊ РІРёРґРµРѕ
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
              </svg>
            </a>

            <div v-else-if="card.action === 'quiz'" class="mt-3 text-sm font-semibold text-[#2e7d32]">
              РћС‚РІРµС‚СЊС‚Рµ РЅР° РІРѕРїСЂРѕСЃС‹ РІРЅСѓС‚СЂРё РєР°СЂС‚РѕС‡РєРё
            </div>
          </template>
        </BentoGridCard>
      </BentoGrid>

      <OrderModal v-if="isOrderModalOpen" :block="block" @close-order-modal="closeOrderModal" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BentoGrid from '@/components/ui/bento-grid/BentoGrid.vue'
import BentoGridCard from '@/components/ui/bento-grid/BentoGridCard.vue'
import OrderModal from '@/components/OrderModal.vue'
import QuizForm from '@/components/QuizForm.vue'
import img from '@/assets/3.webp'

const ownerPalettes = [
  { from: '#f4fbf0', to: '#e8f5e9', glow: 'rgba(76, 175, 79, 0.25)', glowSoft: 'rgba(168, 204, 85, 0.22)' },
  { from: '#e8f4ff', to: '#dff5f1', glow: 'rgba(76, 175, 79, 0.18)', glowSoft: 'rgba(0, 136, 204, 0.18)' },
  { from: '#fef7e5', to: '#fff5e6', glow: 'rgba(255, 193, 7, 0.18)', glowSoft: 'rgba(76, 175, 79, 0.16)' },
  { from: '#eef9f1', to: '#f7fdf6', glow: 'rgba(56, 142, 60, 0.2)', glowSoft: 'rgba(168, 204, 85, 0.2)' }
]

const baseOwnerCards = [
  {
    title: 'Р’Р·Р°РёРјРѕРІС‹РіРѕРґРЅРѕРµ СЃРѕС‚СЂСѓРґРЅРёС‡РµСЃС‚РІРѕ',
    badge: 'РџР°СЂС‚РЅРµСЂСЃС‚РІРѕ',
    subtitle: 'Р РµРєР»Р°РјРЅРѕРµ Р°РіРµРЅСЃС‚РІРѕ GreenW.KZ РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕ СЂР°Р·РјРµС‰Р°РµС‚ СЂРµРєР»Р°РјСѓ РІ Р»РёС„С‚Р°С… Р¶РёР»С‹С… РґРѕРјРѕРІ РљР°СЂР°РіР°РЅРґС‹.',
    details: [
      'Р‘РѕР»РµРµ 250 РћРЎР Рё РљРЎРљ СѓР¶Рµ РЅР°Рј РґРѕРІРµСЂРёР»РёСЃСЊ.',
      'Р’С‹ Р·Р°СЂР°Р±Р°С‚С‹РІР°РµС‚Рµ РЅР° Р°СЂРµРЅРґРµ Р»РёС„С‚РѕРІ, РјС‹ РѕС‚РІРµС‡Р°РµРј Р·Р° РєРѕРЅС‚РµРЅС‚, РјРѕРЅС‚Р°Р¶ Рё РѕС‚С‡РµС‚РЅРѕСЃС‚СЊ.',
      'Р”Р»СЏ РґРѕРјРѕРІ РїСЂРµРґСѓСЃРјРѕС‚СЂРµРЅР° Р°Р»СЊС‚РµСЂРЅР°С‚РёРІР° РІ РІРёРґРµ РµР¶РµРјРµСЃСЏС‡РЅРѕР№ СѓР±РѕСЂРєРё.'
    ],
    layout: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚СЊ',
    badge: 'РћС…РІР°С‚',
    subtitle:
      'Р›РёС„С‚С‹ РІ СЃРѕРІСЂРµРјРµРЅРЅС‹С… РґРѕРјР°С… вЂ” СЌС‚Рѕ С‡РµСЂРµР·РІС‹С‡Р°Р№РЅРѕ РІС‹СЃРѕРєРёРµ РµР¶РµРґРЅРµРІРЅС‹Рµ РїРѕРєР°Р·С‹.',
    details: [
      'Р РµРєР»Р°РјР° РІ Р»РёС„С‚Рµ РїРѕРєР°Р·С‹РІР°РµС‚СЃСЏ РєР°Р¶РґС‹Р№ СЂР°Р·, РєРѕРіРґР° Р¶РёС‚РµР»СЊ Р°РєС‚РёРІРёСЂСѓРµС‚ Р»РёС„С‚.',
      'Р†РЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ РјР°РєРµС‚С‹ Рё РіРёР±РєРёРµ СѓСЃР»РѕРІРёСЏ РїРѕР·РІРѕР»СЏСЋС‚ РїРѕРґ Р·Р°РґР°С‡Сѓ РєР»РёРµРЅС‚Р° РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РІРµСЃСЊ РїРѕС‚РµРЅС†РёР°Р» РѕС…РІР°С‚Р°.'
    ],
    layout: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'РџРѕС‡РµРјСѓ РЅР°СЃ РІС‹Р±РёСЂР°СЋС‚',
    badge: 'РќР°РґРµР¶РЅРѕСЃС‚СЊ',
    details: [
      'РџР»Р°С‚РёРј Р±РѕР»СЊС€Рµ: Р°СЂРµРЅРґР° Р»РёС„С‚РѕРІ РїРѕ РІС‹СЃРѕРєРёРј СЃС‚Р°РІРєР°Рј РёР»Рё РµР¶РµРјРµСЃСЏС‡РЅР°СЏ СѓР±РѕСЂРєР°.',
      'Р Р°Р±РѕС‚Р°РµРј РєР°С‡РµСЃС‚РІРµРЅРЅРѕ: СЃС‚РёР»СЊРЅС‹Рµ Рё РЅР°РґРµР¶РЅС‹Рµ РєРѕРЅСЃС‚СЂСѓРєС†РёРё, Р°РєРєСѓСЂР°С‚РЅС‹Р№ РјРѕРЅС‚Р°Р¶ Рё РґРµРјРѕРЅС‚Р°Р¶.',
      'Р§РёСЃС‚РѕС‚Р° Рё РїРѕСЂСЏРґРѕРє: Р±С‹СЃС‚СЂРѕ СЂРµР°РіРёСЂСѓРµРј РЅР° РїРѕР»РѕРјРєРё Рё Р·Р°РјРµРЅСѓ СЃС‚РµРЅРґРѕРІ.',
      'РџРѕСЂСЏРґРѕС‡РЅРѕСЃС‚СЊ: СЃС‚СЂРѕРіРѕ РїРѕ РґРѕРіРѕРІРѕСЂСѓ Рё СЃРѕР±Р»СЋРґРµРЅРёРµ РІСЃРµС… СѓСЃР»РѕРІРёР№.'
    ],
    layout: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'РџСЂРµРёРјСѓС‰РµСЃС‚РІР° РґР»СЏ Р¶РёС‚РµР»РµР№',
    badge: 'Р”Р»СЏ РґРѕРјР°',
    details: [
      'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ РґРѕС…РѕРґ СЃРЅРёР¶Р°РµС‚ СЂР°СЃС…РѕРґС‹ РЅР° СЃРѕРґРµСЂР¶Р°РЅРёРµ Рё Р±Р»Р°РіРѕСѓСЃС‚СЂРѕР№СЃС‚РІРѕ.',
      'РЎРїРµС†РёР°Р»СЊРЅС‹Рµ СЃРєРёРґРєРё Рё Р°РєС†РёРё РѕС‚ СЂРµРєР»Р°РјРѕРґР°С‚РµР»РµР№.',
      'Р РµРіСѓР»СЏСЂРЅС‹Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ СЃ Р°РєС‚СѓР°Р»СЊРЅС‹РјРё СЃРµСЂРІРёСЃР°РјРё Рё РІР°РєР°РЅСЃРёСЏРјРё РіРѕСЂРѕРґР°.',
      'РРЅС„РѕСЂРјР°С†РёСЏ РІСЃРµРіРґР° СЂСЏРґРѕРј: РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ СЃС„РѕС‚РѕРіСЂР°С„РёСЂРѕРІР°С‚СЊ РѕР±СЊСЏРІР»РµРЅРёРµ Рё РїРѕР·РІРѕРЅРёС‚СЊ.'
    ],
    layout: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'Р§С‚Рѕ Р·Р° СЃС‚РµРЅРґ РІРЅСѓС‚СЂРё Р»РёС„С‚Р°',
    badge: 'РљРѕРЅСЃС‚СЂСѓРєС†РёСЏ',
    subtitle: 'РќР°РґРµР¶РЅРѕ РґРµСЂР¶РёС‚СЃСЏ, РЅРµ РїРѕСЂС‚РёС‚ РѕС‚РґРµР»РєСѓ Рё Р»РµРіРєРѕ СЃРЅРёРјР°РµС‚СЃСЏ.',
    details: [
      'Р Р°Р·РјРµСЂ 610Г—990 РјРј, Р±РµР·РѕРїР°СЃРЅР°СЏ РѕСЃРЅРѕРІР° PVC С‚РѕР»С‰РёРЅРѕР№ 0,5 РјРј.',
      'Р“Р»СЏРЅС†РµРІС‹Р№ СЃРµСЂРµР±СЂРёСЃС‚С‹Р№ РѕСЂР°РєР°Р» 30 РјРј СЃРІРµСЂС… СѓРєСЂРµРїР»СЏРµС‚ РєСЂР°СЏ.',
      'РњРѕРЅС‚РёСЂСѓРµРј РІРµСЂС‚РёРєР°Р»СЊРЅРѕ РЅР° Р±Р°РЅРЅРµСЂРЅС‹Р№ СЃРєРѕС‚С‡ Р±РµР· СЃР»РµРґРѕРІ РїРѕСЃР»Рµ СЃРЅСЏС‚РёСЏ.'
    ],
    media: img,
    layout: 'md:col-span-2 md:row-span-2',
    action: 'video'
  },
  {
    title: 'РЈР·РЅР°Р№С‚Рµ СЃС‚РѕРёРјРѕСЃС‚СЊ Р°СЂРµРЅРґС‹ Р»РёС„С‚РѕРІ',
    badge: 'РљРІРёР· 6 РІРѕРїСЂРѕСЃРѕРІ',
    subtitle: 'РћС‚РІРµС‚СЊС‚Рµ РЅР° 6 РІРѕРїСЂРѕСЃРѕРІ Рё РїРѕР»СѓС‡РёС‚Рµ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ.',
    details: [],
    layout: 'md:col-span-3 md:row-span-2',
    action: 'quiz',
    quiz: true
  },
  {
    title: 'Р“РѕС‚РѕРІС‹ РЅР°С‡Р°С‚СЊ СЃРѕС‚СЂСѓРґРЅРёС‡РµСЃС‚РІРѕ?',
    badge: 'Р—Р°СЏРІРєР°',
    subtitle: 'РЎРІСЏР¶РёС‚РµСЃСЊ СЃ РЅР°РјРё СЃРµРіРѕРґРЅСЏ, С‡С‚РѕР±С‹ РѕР±СЃСѓРґРёС‚СЊ СѓСЃР»РѕРІРёСЏ Рё Р±С‹СЃС‚СЂРѕ Р·Р°РїСѓСЃС‚РёС‚СЊ РїСЂРѕРєР°С‚.',
    layout: 'md:col-span-3'
  }
]

const ownerCards = baseOwnerCards.map((card, idx) => {
  const palette = ownerPalettes[idx % ownerPalettes.length]
  const layout =
    card.layout || (card.details && card.details.length > 3 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1')

  return {
    ...card,
    action: card.action || 'order',
    layout,
    backgroundStyle: {
      backgroundImage: `radial-gradient(circle at 20% 20%, ${palette.glow}, transparent 45%), radial-gradient(circle at 80% 0%, ${palette.glowSoft}, transparent 42%), linear-gradient(135deg, ${palette.from}, ${palette.to})`
    }
  }
})

const isOrderModalOpen = ref(false)
const block = ref({ name: 'Р РµРєР»Р°РјР° РІ РљР°СЂР°РіР°РЅРґРµ' })

const openOrderModal = name => {
  block.value = { name: name || 'Р РµРєР»Р°РјР° РІ РљР°СЂР°РіР°РЅРґРµ' }
  isOrderModalOpen.value = true
}

const closeOrderModal = () => {
  isOrderModalOpen.value = false
}
</script>
