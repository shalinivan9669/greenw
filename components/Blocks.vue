<template>
  <section class="bg-gradient-to-r from-green-100 to-gray-100 py-16">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
      >
        <img :src="block.image" alt="Image" class="w-full h-48 object-cover rounded-t-lg mb-6" />
        <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ block.name }}</h3>
        <div class="text-gray-700 mb-4">
          <p><strong>Домов:</strong> {{ block.houses }}</p>
          <p><strong>Лифтов:</strong> {{ block.lifts }}</p>
          <p><strong>Квартир:</strong> {{ block.apartments }}</p>
          <p><strong>Население:</strong> {{ block.population }}</p>
        </div>
        <button
          class="mt-6 bg-custom-green text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"
          @click="openModal(block)"
        >
          Подробнее
        </button>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-10 rounded-lg w-full max-w-xl shadow-2xl relative">
        <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" @click="closeModal">&times;</button>

        <!-- Изображение в модальном окне -->
        <img :src="selectedBlock.image" alt="Image" class="w-full h-64 object-cover rounded-lg mb-6" />

        <h2 class="text-3xl font-bold mb-6 text-gray-800">{{ selectedBlock.name }}</h2>

        <!-- Информация о домах, лифтах, квартирах, населении -->
        <div class="text-gray-700 mb-6">
          <p><strong>Домов:</strong> {{ selectedBlock.houses }}</p>
          <p><strong>Лифтов:</strong> {{ selectedBlock.lifts }}</p>
          <p><strong>Квартир:</strong> {{ selectedBlock.apartments }}</p>
          <p><strong>Население:</strong> {{ selectedBlock.population }}</p>
        </div>

        <!-- Описание блока -->
        <p class="text-gray-700 mb-6">{{ selectedBlock.description }}</p>

        <!-- Кнопка "Заказать" -->
        <button
          class="mt-6 bg-custom-green text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"
          @click="openOrderForm"
        >
          Заказать
        </button>
        
        <button class="mt-8 bg-red-500 ml-11 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300" @click="closeModal">
          Закрыть
        </button>
      </div>
    </div>

    <!-- Модальное окно с формой заказа -->
    <div v-if="isOrderModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-10 rounded-lg w-full max-w-xl shadow-2xl relative">
        <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" @click="closeOrderModal">&times;</button>
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Заказать {{ selectedBlock.name }}</h2>
        
        <!-- Форма заказа -->
        <form @submit.prevent="submitLead">
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Имя:</label>
            <input v-model="leadData.name" type="text" id="name" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a8cc55]" />
          </div>

          <div class="mb-6">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Телефон:</label>
            <input v-model="leadData.phone" type="tel" id="phone" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a8cc55]" />
          </div>

          <button type="submit" class="w-full bg-[#a8cc55] text-white py-3 rounded-lg hover:bg-[#98b84d] transition duration-300">Отправить</button>
        </form>

        <p v-if="message" :class="{ 'text-red-500': isError, 'text-green-500': !isError }" class="text-center mt-4">{{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Импорт изображений
import image1 from '@/assets/1b.png'
import image2 from '@/assets/2b.png'
import image3 from '@/assets/3b.png'

// Пример данных блоков
const blocks = [
  {
    name: 'Блок 1',
    image: image1,
    houses: '34',
    lifts: '105',
    apartments: '4001',
    population: '15261',
    description: 'Дома расположены по улицам: Строителей, Орбита, Гапеева, Муканова, пр. Шахтеров, Карбышева, К. Дюсембекова, Сатыбалдына, Язева и Университетская'
  },
  {
    name: 'Блок 2',
    image: image2,
    houses: '29',
    lifts: '104',
    apartments: '4459',
    population: '15617',
    description: 'Улицы: Гульдер 1, Степной 1, Степной 2, Степной 3, Степной 4, Шахтеров, Таттимбета, Сарыарка. Дома расположены на главных улицах города, обеспечивая доступ к ключевым инфраструктурным объектам, включая школы и магазины.'
  },
  {
    name: 'Блок 3',
    image: image3,
    houses: '26',
    lifts: '100',
    apartments: '4459',
    population: '15617',
    description: 'ЖК: Байсанат 1, 2, 3, Орда, Новый Степной, Гульдер, Таугуль, Орлеу, Монако, Описание: Жилые комплексы находятся в развивающихся районах, предоставляя современное жилье с хорошей транспортной доступностью и удобствами для жителей.'
  }
]

// Управление модальными окнами
const isModalOpen = ref(false)
const isOrderModalOpen = ref(false)
const selectedBlock = ref({})
const leadData = ref({
  name: '',
  phone: ''
})
const message = ref('')
const isError = ref(false)

// Открытие модального окна "Подробнее"
const openModal = (block) => {
  selectedBlock.value = block
  isModalOpen.value = true
}

// Закрытие модального окна "Подробнее"
const closeModal = () => {
  isModalOpen.value = false
}

// Открытие модального окна "Заказать"
const openOrderForm = () => {
  closeModal() // Закрываем окно "Подробнее"
  isOrderModalOpen.value = true
}

// Закрытие модального окна "Заказать"
const closeOrderModal = () => {
  isOrderModalOpen.value = false
}

// Отправка данных формы
const submitLead = async () => {
  try {
    const response = await axios.post('/api/create-lead', leadData.value)
    if (response.status === 200) {
      message.value = 'Заявка успешно отправлена!'
      isError.value = false
      leadData.value.name = ''
      leadData.value.phone = ''
      closeOrderModal() // Закрываем модальное окно после успешной отправки
    } else {
      message.value = 'Ошибка при отправке заявки.'
      isError.value = true
    }
  } catch (error) {
    message.value = 'Ошибка при отправке заявки.'
    isError.value = true
  }
}
</script>

<style scoped>
.bg-custom-green {
  background-color: #98C850;
}
.shadow-xl {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.hover\:shadow-2xl:hover {
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}
</style>
