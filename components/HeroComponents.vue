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
          <button @click="openOrderModal" class="bg-custom-green text-white py-3 px-6 rounded-full hover:bg-green-500 transition">
            Заказать рекламу
          </button>
          <a href="https://www.tiktok.com/@greenway_reklama" target="_blank" rel="noopener" class="bg-custom-green text-white py-3 px-6 rounded-full hover:bg-green-500 transition">
            Смотреть видео
          </a>
        </div>
      </div>
      <!-- Изображение -->
      <div class="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img :src="imageSrc" alt="Реклама в лифтах Караганды" class="w-full h-auto lg:max-w-md" />
      </div>
    </div>

    <!-- Статистика -->
    <div ref="statsSection" class="bg-custom-green py-12 mt-12">
      <div class="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
        <div v-for="item in stats" :key="item.label" class="stat-item">
          <h3 class="text-3xl font-bold border-b-4 border-white w-[150px] mx-auto pb-2">{{ formattedStats[item.label] }}</h3>
          <p class="mt-2">{{ item.label }}</p>
        </div>
      </div>
    </div>

    <!-- Модальное окно для заказа -->
    <Suspense>
      <template #default>
        <LazyOrderModal v-if="showOrderModal" :leadData="leadData" @close="closeOrderModal" @submit="handleSubmit" />
      </template>
      <template #fallback>
        <!-- Можно добавить спиннер или другой индикатор загрузки -->
      </template>
    </Suspense>
  </section>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import axios from 'axios';
import imageSrc from '@/assets/s.webp'; // Импорт изображения

// Ленивая загрузка модального окна
const LazyOrderModal = defineAsyncComponent(() => import('@/components/OrderModal.vue'));

const showOrderModal = ref(false);

// Открыть модальное окно
const openOrderModal = () => {
  showOrderModal.value = true;
};

// Закрыть модальное окно
const closeOrderModal = () => {
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
  { label: 'лифтов', value: 300 },
  { label: 'жилых домов', value: 150 },
  { label: 'ежедневный охват аудитории', value: 36000 },
  { label: 'ежемесячный охват аудитории', value: 1080000 }
]);

// Форматирование статистики (анимация чисел)
const formattedStats = ref({});
const animateNumbers = () => {
  stats.value.forEach(item => {
    formattedStats.value[item.label] = 0;
    const target = item.value;
    const increment = target / 200;
    const updateCount = () => {
      formattedStats.value[item.label] += increment;
      if (formattedStats.value[item.label] < target) {
        requestAnimationFrame(updateCount);
      } else {
        formattedStats.value[item.label] = target;
      }
    };
    updateCount();
  });
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

// Обработка отправки формы
const handleSubmit = async (data) => {
  leadData.value = data;
  validatePhone();

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

// Использование Intersection Observer для запуска анимации при видимости
const statsSection = ref(null);
import { useIntersectionObserver } from '@vueuse/core';

useIntersectionObserver(statsSection, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animateNumbers();
  }
}, {
  threshold: 0.5
});
</script>

<style scoped>
/* Tailwind CSS используется для стилей, дополнительные стили можно добавить здесь */
</style>
