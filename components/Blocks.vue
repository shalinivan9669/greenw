<!-- components/BlocksSection.vue -->
<template>
  <section class="bg-gradient-to-r from-green-50 via-white to-lime-100 py-16">
    <div class="container mx-auto px-4">
      <BentoGrid class="w-full max-w-6xl mx-auto auto-rows-[18rem] lg:auto-rows-[22rem] gap-8 md:grid-cols-1">
        <BentoGridCard
          v-for="(block, idx) in enhancedBlocks"
          :key="block.id"
          :name="block.name"
          :description="block.summary"
          :class="[block.layout, 'min-h-[240px] overflow-hidden']"
        >
          <template #background>
            <div
              class="absolute inset-0 opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
              :style="block.backgroundStyle"
            ></div>
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.45),transparent_40%)] opacity-80 mix-blend-screen"
            ></div>
            <div class="absolute inset-0 rounded-2xl border border-white/50 shadow-[0_20px_50px_-24px_rgba(34,124,45,0.45)]"></div>
          </template>

          <template #title>
            <div class="flex items-center justify-between text-sm font-semibold text-[#2e7d32]">
              <span>Домов: {{ block.houses }}</span>
              <span class="text-emerald-900">Лифты: {{ block.lifts }}</span>
            </div>
            <div class="mt-3 text-xl font-extrabold leading-tight text-neutral-900 drop-shadow-sm">
              {{ block.name }}
            </div>
          </template>

          <template #description>
            <p class="text-sm leading-relaxed text-neutral-700">
              {{ block.details }}
            </p>
          </template>

          <template #details>
            <div class="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-[#225c24]">
              <span class="rounded-full bg-white/85 px-3 py-1 shadow-sm">Квартир: {{ block.apartments }}</span>
              <span class="rounded-full bg-white/85 px-3 py-1 shadow-sm">Население: {{ block.population }}</span>
            </div>
          </template>

          <template #actions>
            <div class="mt-5 flex flex-wrap items-center gap-3">
              <button
                class="inline-flex items-center gap-2 rounded-full bg-[#4caf4f] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#3c8e3f]"
                @click.prevent="openBlockModal(block)"
              >
                Подробнее
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
                </svg>
              </button>

              <a
                :href="block.addressUrl"
                class="inline-flex items-center gap-2 rounded-full border border-[#2e7d32] bg-white/90 px-5 py-2 text-sm font-semibold text-[#2e7d32] shadow-md transition hover:-translate-y-0.5 hover:bg-[#e8f5e9]"
                download
              >
                Скачать адреса
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M8 12l4 4m0 0 4-4m-4 4V4" />
                </svg>
              </a>
            </div>
          </template>
        </BentoGridCard>
      </BentoGrid>

      <BlockModal
        v-if="showBlockModal && activeBlock"
        :block="activeBlock"
        @close-modal="closeBlockModal"
        @open-order-modal="closeBlockModal"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import BentoGrid from '@/components/ui/bento-grid/BentoGrid.vue'
import BentoGridCard from '@/components/ui/bento-grid/BentoGridCard.vue'
import BlockModal from '@/components/BlockModal.vue'

import image1 from '@/assets/1b.webp'
import image2 from '@/assets/2b.webp'
import image3 from '@/assets/33b.webp'
import image4 from '@/assets/4b.webp'
import image5 from '@/assets/5.webp'

const layoutClasses = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-3 md:row-span-1'
]

const palettes = [
  { from: '#f4fbf0', to: '#e6f7d9', glow: 'rgba(76, 175, 79, 0.25)', glowSoft: 'rgba(168, 204, 85, 0.25)' },
  { from: '#e8f4ff', to: '#dff5f1', glow: 'rgba(76, 175, 79, 0.2)', glowSoft: 'rgba(0, 136, 204, 0.18)' },
  { from: '#fef7e5', to: '#e8f3ff', glow: 'rgba(76, 175, 79, 0.18)', glowSoft: 'rgba(255, 193, 7, 0.18)' },
  { from: '#eef9f1', to: '#f7fdf6', glow: 'rgba(56, 142, 60, 0.22)', glowSoft: 'rgba(168, 204, 85, 0.22)' }
]

const blocks = [
  {
    id: 1,
    name: 'Блок 1 — Юго-Восток (вторичное жильё)',
    image: image1,
    houses: '40',
    lifts: '102',
    apartments: '3 894',
    population: '11 682',
    addressUrl: '/addresses/block-1-address.docx',
    summary: 'Юго-Восток, вторичное жильё.',
    details: 'Улицы: Орбита, Гапеева, Дюсембекова, Карбышева, Муканова, Сатыбалдина, Язева, Университетская и др.'
  },
  {
    id: 2,
    name: 'Блок 2 — Юго-Восток (вторичное жильё)',
    image: image2,
    houses: '60',
    lifts: '108',
    apartments: '3 987',
    population: '11 961',
    addressUrl: '/addresses/block-2-address.docx',
    summary: 'Юго-Восток, вторичное жильё.',
    details: 'Микрорайоны: Гульдер-1, Степной 1–4, улицы Шахтёров, Сарыарка, Таттимбета и др.'
  },
  {
    id: 3,
    name: 'Блок 3 — Элитные ЖК и новостройки',
    image: image3,
    houses: '19',
    lifts: '102',
    apartments: '3 201',
    population: '9 603',
    addressUrl: '/addresses/block-3-address.docx',
    summary: 'Современные жилые комплексы и новые дома.',
    details: 'Районы: Юго-Восток и Майкудук. Современные жилые комплексы, новые дома.'
  },
  {
    id: 4,
    name: 'Блок 4 — Майкудук (вторичное жильё)',
    image: image4,
    houses: '36',
    lifts: '102',
    apartments: '3 484',
    population: '10 452',
    addressUrl: '/addresses/block-4-address.docx',
    summary: 'Майкудук, вторичное жильё.',
    details: 'Микрорайоны: Восток 1–5, Голубые пруды, Сердарья, Карла Маркса и др.'
  },
  {
    id: 5,
    name: 'Блок 5 — Центр города',
    image: image5,
    houses: '50',
    lifts: '101',
    apartments: '3 636',
    population: '10 925',
    addressUrl: '/addresses/block-5-address.docx',
    summary: 'Центр города: новостройки и вторичное жильё.',
    details: 'Улицы: Назарбаева, Ерубаева, Ержанова, Ермекова и прилегающие кварталы.'
  }
]

const enhancedBlocks = computed(() =>
  blocks.map((block, idx) => {
    const palette = palettes[idx % palettes.length]
    return {
      ...block,
      layout: layoutClasses[idx] || 'md:col-span-1',
      backgroundStyle: {
        backgroundImage: `radial-gradient(circle at 20% 20%, ${palette.glow}, transparent 45%), radial-gradient(circle at 80% 0%, ${palette.glowSoft}, transparent 42%), linear-gradient(135deg, ${palette.from}, ${palette.to}), url(${block.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  })
)

const showBlockModal = ref(false)
const activeBlock = ref(null)

const openBlockModal = block => {
  activeBlock.value = block
  showBlockModal.value = true
}

const closeBlockModal = () => {
  showBlockModal.value = false
  activeBlock.value = null
}
</script>

<style scoped>
.bg-custom-green {
  background-color: #4caf50;
}
.text-custom-green {
  color: #4caf50;
}
.shadow-lg {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
