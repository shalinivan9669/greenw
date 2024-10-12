<!-- components/BlocksSection.vue -->
<template>
  <section class="bg-gradient-to-r from-green-100 to-gray-100 py-16">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
      <BlockCard
        v-for="block in blocks"
        :key="block.id"
        :block="block"
        @open-modal="openModal"
      />
    </div>

    <!-- Модальное окно "Подробнее" -->
    <BlockModal
      v-if="isModalOpen"
      :block="selectedBlock"
      @close-modal="closeModal"
      @open-order-modal="openOrderModal"
    />

    <!-- Модальное окно "Заказать" -->
    <OrderModal
      v-if="isOrderModalOpen"
      :block="selectedBlock"
      @close-order-modal="closeOrderModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BlockCard from '@/components/BlockCard.vue'
import BlockModal from '@/components/BlockModal.vue'
import OrderModal from '@/components/OrderModal.vue' // Предполагается, что этот компонент уже существует

// Импорт изображений (если они хранятся в assets)
import image1 from '@/assets/1b.webp'
import image2 from '@/assets/2b.webp'
import image3 from '@/assets/3b.webp'

// Данные блоков
const blocks = ref([
  {
    id: 1,
    name: 'Блок 1',
    image: image1,
    houses: '34',
    lifts: '105',
    apartments: '4001',
    population: '15261',
    description:
      'Дома расположены по улицам: Строителей, Орбита, Гапеева, Муканова, пр. Шахтеров, Карбышева, К. Дюсембекова, Сатыбалдына, Язева и Университетская'
  },
  {
    id: 2,
    name: 'Блок 2',
    image: image2,
    houses: '29',
    lifts: '104',
    apartments: '4459',
    population: '15617',
    description:
      'Улицы: Гульдер 1, Степной 1, Степной 2, Степной 3, Степной 4, Шахтеров, Таттимбета, Сарыарка. Дома расположены на главных улицах города, обеспечивая доступ к ключевым инфраструктурным объектам, включая школы и магазины.'
  },
  {
    id: 3,
    name: 'Блок 3',
    image: image3,
    houses: '26',
    lifts: '100',
    apartments: '4459',
    population: '15617',
    description:
      'ЖК: Байсанат 1, 2, 3, Орда, Новый Степной, Гульдер, Таугуль, Орлеу, Монако. Жилые комплексы находятся в развивающихся районах, предоставляя современное жилье с хорошей транспортной доступностью и удобствами для жителей.'
  }
])

// Управление модальными окнами
const isModalOpen = ref(false)
const isOrderModalOpen = ref(false)
const selectedBlock = ref({})

// Функция открытия модального окна "Подробнее"
const openModal = (block) => {
  selectedBlock.value = block
  isModalOpen.value = true
}

// Функция закрытия модального окна "Подробнее"
const closeModal = () => {
  isModalOpen.value = false
}

// Функция открытия модального окна "Заказать"
const openOrderModal = (block) => {
  selectedBlock.value = block
  isOrderModalOpen.value = true
}

// Функция закрытия модального окна "Заказать"
const closeOrderModal = () => {
  isOrderModalOpen.value = false
}
</script>

<style scoped>
.bg-custom-green {
  background-color: #4CAF50; /* Ваш оригинальный цвет */
}
.text-custom-green {
  color: #4CAF50; /* Ваш оригинальный цвет */
}
.shadow-lg {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
