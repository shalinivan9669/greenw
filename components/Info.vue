<template>
  <section class="py-12 bg-[#f3f3f3]">
    <!-- Первый блок: Когда полезна реклама в лифтах? -->
    <div class="container mx-auto text-center px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-6">Когда полезна реклама в лифтах?</h2>
      <p class="text-gray-700 max-w-2xl mx-auto mb-8">
        Выделили ключевые случаи, когда размещение в лифтах даёт максимум эффекта. Небольшие карточки сделали заметнее.
      </p>
      <div class="flex justify-center items-center gap-6">
        <Carousel
          :items="whenUsefulChunks[0]"
          :base-width="360"
          :autoplay="true"
          :autoplay-delay="3200"
          :pause-on-hover="true"
          :loop="true"
          :round="false"
        />
        <Carousel
          :items="whenUsefulChunks[1]"
          :base-width="360"
          :autoplay="true"
          :autoplay-delay="3200"
          :pause-on-hover="true"
          :loop="true"
          :round="false"
        />
      </div>
    </div>

    <!-- Второй блок: Почему реклама в лифтах? -->
    <div class="container mx-auto text-center mt-16 px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-6">Почему реклама в лифтах?</h2>
      <p class="text-gray-700 max-w-2xl mx-auto mb-8">
        Причины, почему лифтовая реклама работает лучше среднего: сделали карточки крупнее для акцента на преимуществах.
      </p>
      <div class="flex justify-center items-center gap-6">
        <Carousel
          :items="whyLiftChunks[0]"
          :base-width="520"
          :autoplay="true"
          :autoplay-delay="3600"
          :pause-on-hover="true"
          :loop="true"
          :round="false"
        />
        <Carousel
          :items="whyLiftChunks[1]"
          :base-width="520"
          :autoplay="true"
          :autoplay-delay="3600"
          :pause-on-hover="true"
          :loop="true"
          :round="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel, { type CarouselItem } from '@/components/ui/CarouselBits.vue'
import { computed } from 'vue'

const whenUsefulCarousel: CarouselItem[] = [
  {
    id: 1,
    title: 'Акции и распродажи',
    description: 'Быстро донесите спецпредложение до соседних домов и получите всплеск обращений.',
    iconText: '⚡'
  },
  {
    id: 2,
    title: 'Найм персонала рядом',
    description: 'Ищете сотрудников около точки продаж — жители подъезда увидят объявление дважды в день.',
    iconText: '🧑‍🍳'
  },
  {
    id: 3,
    title: 'Ограниченный бюджет',
    description: 'Лифты дают плотный контакт с аудиторией без больших вложений в медиа.',
    iconText: '💸'
  },
  {
    id: 4,
    title: 'Отстройка от конкурентов',
    description: 'Регулярные показы в лифте закрепляют бренд в памяти жильцов.',
    iconText: '🏅'
  },
  {
    id: 5,
    title: 'Нужны новые клиенты',
    description: 'Каждый подъём и спуск — напоминание обратиться именно к вам.',
    iconText: '🤝'
  },
  {
    id: 6,
    title: 'Растить узнаваемость',
    description: 'Постоянное присутствие в лифте делает бренд «своим» для дома.',
    iconText: '📌'
  }
]

const whyLiftCarousel: CarouselItem[] = [
  {
    id: 1,
    title: 'Формат на уровне глаз',
    description: 'Плакат невозможно пролистать или закрыть — внимание удерживается естественно.',
    iconText: '👀'
  },
  {
    id: 2,
    title: 'Выгодная цена',
    description: 'Дешевле наружки и онлайн при сопоставимом охвате жителей дома.',
    iconText: '💚'
  },
  {
    id: 3,
    title: 'Растущий охват',
    description: 'Новые ЖК и лифты появляются каждый месяц — аудитория расширяется.',
    iconText: '🏗️'
  },
  {
    id: 4,
    title: 'Частота контактов',
    description: 'Жильцы ездят 2+ раза в день, реклама перед глазами постоянно.',
    iconText: '🔁'
  },
  {
    id: 5,
    title: 'Доверие и статус',
    description: 'Размещение воспринимается как часть дома — это повышает доверие.',
    iconText: '🛗'
  },
  {
    id: 6,
    title: 'Быстрый запуск',
    description: 'Можно выйти в показы за пару дней и получить фотоотчёт по каждому адресу.',
    iconText: '⏱️'
  }
]

const chunkCarousel = (items: CarouselItem[], size: number) => {
  const chunks: CarouselItem[][] = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size))
  }
  return chunks
}

const whenUsefulChunks = computed(() => chunkCarousel(whenUsefulCarousel, 3))
const whyLiftChunks = computed(() => chunkCarousel(whyLiftCarousel, 3))
</script>
