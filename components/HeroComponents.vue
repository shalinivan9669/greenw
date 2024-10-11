<template>
  <section class="bg-[#efefef] py-12">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-0">
   <!-- Текстовая часть -->
   <div class="text-center lg:text-left lg:w-1/2">
        <h1 class="text-2xl lg:text-4xl font-bold text-black leading-tight">
          Эффективная реклама в лифтах Караганды от GREENWAY
        </h1>
        <p class="text-gray-700 mt-4 text-lg">
          Разместите свою рекламу в 300 лифтах жилых домов и привлеките новых клиентов уже сегодня!
        </p>

        <!-- Кнопки -->
        <div class="flex justify-center lg:justify-start space-x-4 mt-8">
          <button @click="openOrderModal" class="bg-custom-green  text-white py-3 px-6 rounded-full hover:bg-green-500 transition">
            Заказать рекламу
          </button>
          <a href="https://www.tiktok.com/@greenway_reklama" class="bg-custom-green text-white py-3 px-6 rounded-full hover:bg-green-500 transition">
            Смотреть видео
          </a>
        </div>
      </div>
      <!-- Изображение -->
      <div class="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img :src="logo" loading="lazy" alt="Реклама в лифтах Караганды" class="w-full h-auto lg:max-w-md">
      </div>
    </div>

    <!-- Статистика -->
    <div class="bg-custom-green py-12 mt-12">
      <div class="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
        <div v-for="(item, index) in stats" :key="index" class="stat-item">
          <h3 class="text-3xl font-bold border-b-4 border-white w-[150px] mx-auto pb-2" :data-target="item.value">0</h3>
          <p class="mt-2">{{ item.label }}</p>
        </div>
      </div>
    </div>

    <!-- Модальное окно для заказа -->
    <div v-if="showOrderModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 mx-4 lg:mx-0">
        <div class="text-right">
          <button @click="closeOrderModal" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-black mb-4">Свяжитесь с нами</h2>
          <p class="text-lg text-gray-700">Заполните форму ниже, и мы свяжемся с вами как можно скорее</p>
        </div>
        <form @submit.prevent="submitLead">
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Имя:</label>
            <input v-model="leadData.name" type="text" id="name" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green" />
          </div>
          <div class="mb-6">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Телефон:</label>
            <input v-model="leadData.phone" type="tel" id="phone" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green" @blur="validatePhone" />
            <p v-if="phoneError" class="text-red-500 mt-2">{{ phoneError }}</p>
          </div>
          <button type="submit" class="w-full bg-custom-green text-white py-3 rounded-lg hover:bg-green-500 transition duration-300">Отправить</button>
        </form>
        <p v-if="message" :class="{ 'text-red-500': isError, 'text-green-500': !isError }" class="text-center mt-4">{{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import logo from '@/assets/LIFT.webp';

const showOrderModal = ref(false);

// Открыть модальное окно
const openOrderModal = () => {
  console.log("Открываем модальное окно");
  showOrderModal.value = true;
};

// Закрыть модальное окно
const closeOrderModal = () => {
  console.log("Закрываем модальное окно");
  showOrderModal.value = false;
};

// Данные для формы заказа
const leadData = ref({
  name: '',
  phone: ''
});
const message = ref('');
const isError = ref(false);
const phoneError = ref('');

// Статистика
const stats = ref([
  { value: 300, label: 'лифтов' },
  { value: 150, label: 'жилых домов' },
  { value: 36000, label: 'ежедневный охват аудитории' },
  { value: 1080000, label: 'ежемесячный охват аудитории' }
]);

// Функция для отправки данных заказа
const submitLead = async () => {
  if (phoneError.value) {
    message.value = 'Ошибка в поле "Телефон". Исправьте перед отправкой.';
    isError.value = true;
    return;
  }

  try {
    // Отправляем POST-запрос с данными лида на сервер
    const response = await axios.post('/api/create-lead', leadData.value);

    if (response.status === 200) {
      message.value = 'Заявка успешно отправлена!';
      isError.value = false;
      leadData.value.name = '';
      leadData.value.phone = '';
    } else {
      message.value = 'Ошибка при отправке заявки.';
      isError.value = true;
      console.error('Ошибка:', response.data);
    }
  } catch (error) {
    message.value = 'Ошибка при отправке заявки.';
    isError.value = true;
    console.error('Ошибка:', error);
  }
};

// Валидация телефона для Казахстана
const validatePhone = () => {
  const kazakhstanPhoneRegex = /^\+7\d{9}$/;
  if (!kazakhstanPhoneRegex.test(leadData.value.phone)) {
    phoneError.value = 'Введите корректный номер телефона в формате +7XXXXXXXXX';
  } else {
    phoneError.value = '';
  }
};

// Анимация для статистики
const animateNumbers = () => {
  const elements = document.querySelectorAll('.stat-item h3');
  elements.forEach((element) => {
    const target = parseInt(element.getAttribute('data-target'));
    let count = 0;
    const increment = target / 200;
    const updateCount = () => {
      count += increment;
      if (count < target) {
        element.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target;
      }
    };
    updateCount();
  });
};

onMounted(() => {
  animateNumbers();
});
</script>

<style scoped>
/* Tailwind стили используются вместо стандартных CSS */
</style>