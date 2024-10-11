<template>
  <section class="bg-gradient-to-r from-green-100 to-gray-100 py-16">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        <img :src="block.image" loading="lazy" alt="Image" class="w-full h-56 object-cover" />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-center text-gray-800 mb-4">{{ block.name }}</h3>
          <!-- Новая сетка с двумя колонками -->
          <div class="grid grid-cols-2 gap-4 text-gray-700 mb-4">
            <!-- Домов -->
            <div class="flex items-center justify-around">
              <span><strong>Домов:</strong> {{ block.houses }}</span>
              <!-- Иконка домов -->
              <svg
                class="w-8 h-8 text-custom-green"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 10L12 2L21 10V21H3V10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 21V15H15V21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <!-- Лифтов -->
            <div class="flex items-center justify-around">
              <span><strong>Лифтов:</strong> {{ block.lifts }}</span>
              <!-- Иконка квартир -->
              <svg
                class="w-8 h-8 text-custom-green"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.25 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V22.25C0.75 22.8023 1.19772 23.25 1.75 23.25H22.25C22.8023 23.25 23.25 22.8023 23.25 22.25V1.75C23.25 1.19772 22.8023 0.75 22.25 0.75Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 23.25V10.5C6 10.3011 6.07902 10.1103 6.21967 9.96967C6.36032 9.82902 6.55109 9.75 6.75 9.75H17.25C17.4489 9.75 17.6397 9.82902 17.7803 9.96967C17.921 10.1103 18 10.3011 18 10.5V23.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 9.75V23.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0156 4.02124L15.4997 5.99999L16.9838 4.02124"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.04247 5.94302L8.49975 3.99999L9.95703 5.94302"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <!-- Квартир -->
            <div class="flex items-center justify-around">
              <span><strong>Квартир:</strong> {{ block.apartments }}</span>
              <!-- Иконка лифта -->
              <svg
                class="w-8 h-8 text-custom-green"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L3 2V14H1V16H15V14H13V2H11V14H9V0Z"
                  fill="currentColor"
                />
                <circle cx="6.75" cy="8" r="1" fill="white" />
              </svg>
            </div>
            <!-- Население -->
            <div class="flex items-center justify-around">
              <span><strong>Население:</strong> {{ block.population }}</span>
              <!-- Иконка населения -->
              <svg
                class="w-8 h-8 text-custom-green"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <button
            class="mt-4 w-full bg-custom-green text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
            @click="openModal(block)"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно "Подробнее" -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-8 rounded-xl w-full max-w-2xl shadow-2xl relative mx-4">
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          @click="closeModal"
        >
          &times;
        </button>
        <img
          :src="selectedBlock.image"
          loading="lazy"
          alt="Image"
          class="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 class="text-3xl font-bold text-center  mb-4 text-gray-800">{{ selectedBlock.name }}</h2>
        <!-- Используем ту же сетку в модальном окне -->
        <div class="grid grid-cols-2 gap-4 text-gray-700 mb-6">
          <!-- Домов -->
          <div class="flex items-center justify-between">
            <span><strong>Домов:</strong> {{ selectedBlock.houses }}</span>
            <!-- Иконка домов -->
            <!-- Повторяем тот же SVG код -->
            <svg
              class="w-8 h-8 text-custom-green"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- SVG контент -->
              <path
                d="M3 10L12 2L21 10V21H3V10Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 21V15H15V21"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <!-- Лифтов -->
          <div class="flex items-center justify-between">
            <span><strong>Лифтов:</strong> {{ selectedBlock.lifts }}</span>
            <!-- Иконка лифта -->
            <svg
              class="w-8 h-8 text-custom-green"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L3 2V14H1V16H15V14H13V2H11V14H9V0Z"
                fill="currentColor"
              />
              <circle cx="6.75" cy="8" r="1" fill="white" />
            </svg>
          </div>
          <!-- Квартир -->
          <div class="flex items-center justify-between">
            <span><strong>Квартир:</strong> {{ selectedBlock.apartments }}</span>
            <!-- Иконка квартир -->
            <svg
              class="w-8 h-8 text-custom-green"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- SVG контент -->
              <path
                d="M22.25 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V22.25C0.75 22.8023 1.19772 23.25 1.75 23.25H22.25C22.8023 23.25 23.25 22.8023 23.25 22.25V1.75C23.25 1.19772 22.8023 0.75 22.25 0.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 23.25V10.5C6 10.3011 6.07902 10.1103 6.21967 9.96967C6.36032 9.82902 6.55109 9.75 6.75 9.75H17.25C17.4489 9.75 17.6397 9.82902 17.7803 9.96967C17.921 10.1103 18 10.3011 18 10.5V23.25"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 9.75V23.25"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0156 4.02124L15.4997 5.99999L16.9838 4.02124"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.04247 5.94302L8.49975 3.99999L9.95703 5.94302"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <!-- Население -->
          <div class="flex items-center justify-between">
            <span><strong>Население:</strong> {{ selectedBlock.population }}</span>
            <!-- Иконка населения -->
            <svg
                class="w-8 h-8 text-custom-green"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </div>
        </div>
        <p class="text-gray-700 mb-6">{{ selectedBlock.description }}</p>
        <div class="flex flex-wrap gap-4">
          <button
            class="flex-1 bg-custom-green text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
            @click="openOrderForm"
          >
            Заказать
          </button>
          <button
            class="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
            @click="closeModal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно с формой заказа -->
    <div
      v-if="isOrderModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl relative mx-4">
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          @click="closeOrderModal"
        >
          &times;
        </button>
        <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">
          Заказать {{ selectedBlock.name }}
        </h2>
        <form @submit.prevent="submitLead">
          <div class="mb-4">
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Имя:</label
            >
            <input
              v-model="leadData.name"
              type="text"
              id="name"
              required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green"
            />
          </div>
          <div class="mb-6">
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Телефон:</label
            >
            <input
              v-model="leadData.phone"
              type="tel"
              id="phone"
              required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-custom-green text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Отправить
          </button>
        </form>
        <p
          v-if="message"
          :class="{ 'text-red-500': isError, 'text-green-500': !isError }"
          class="text-center mt-4"
        >
          {{ message }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Импорт изображений
import image1 from '@/assets/1b.webp'
import image2 from '@/assets/2b.webp'
import image3 from '@/assets/3b.webp'

// Пример данных блоков
const blocks = [
  {
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
    name: 'Блок 3',
    image: image3,
    houses: '26',
    lifts: '100',
    apartments: '4459',
    population: '15617',
    description:
      'ЖК: Байсанат 1, 2, 3, Орда, Новый Степной, Гульдер, Таугуль, Орлеу, Монако. Жилые комплексы находятся в развивающихся районах, предоставляя современное жилье с хорошей транспортной доступностью и удобствами для жителей.'
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
  // Не закрываем модальное окно "Подробнее", чтобы пользователь мог вернуться
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
      closeOrderModal()
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
  background-color: #4CAF50;
}
.text-custom-green {
  color: #4CAF50;
}
.shadow-lg {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
