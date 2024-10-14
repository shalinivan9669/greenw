<template>
  <div class="w-full bg-gradient-to-r from-green-400 via-[#a8cc55] to-green-600 py-16 shadow-custom-top border-custom relative">
    <div class="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-start lg:space-x-8 relative">
      <!-- Блок с текстом "Мы вам перезвоним" -->
      <div class="absolute top-[-56px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white w-full max-w-lg h-auto p-8 rounded-3xl self-center justify-self-center z-10 shadow-consultation">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 text-center">Мы вам перезвоним</h2>
        <p class="text-lg mt-4 text-gray-700 text-center">
          Заполните имя и номер телефона, остальное по желанию<br />
        </p>
      </div>

      <!-- Переключатель для открытия/закрытия опросника в мобильной версии -->
      <div class="mt-36 mb-10 block lg:hidden flex justify-center items-center">
        <label class="switch">
          <input type="checkbox" v-model="showSurvey" />
          <span class="slider round big"></span>
        </label>
        <span class="ml-10">{{ showSurvey ? 'Скрыть опросник' : 'Показать опросник' }}</span>
      </div>

      <!-- Форма для контактов -->
      <div class="mt-10 xl:mt-52 max-w-lg bg-white rounded-3xl shadow-lg p-8 w-full lg:w-1/2" ref="contactForm">
        <form @submit.prevent="submitLead">
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Имя:</label>
            <input
              v-model="leadData.name"
              type="text"
              id="name"
              required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a8cc55]"
            />
          </div>

          <div class="mb-6">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Телефон:</label>
            <input
              v-model="leadData.phone"
              type="tel"
              id="phone"
              required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#a8cc55]"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-[#a8cc55] text-white py-3 rounded-lg transition duration-300"
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

      <!-- Опросник -->
      <div
        v-show="showSurvey || isDesktop"
        class="mt-8 max-w-full bg-white rounded-3xl shadow-lg p-8 w-full lg:w-1/2 sm:mt-0 sm:mx-0 lg:mt-56 survey-container"
      >
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Подскажите</h2>
        <form @submit.prevent="submitSurvey" class="grid grid-cols-1 sm:grid-cols-6 gap-4">
          <div
            v-for="(question, index) in surveyQuestions"
            :key="index"
            class="mb-[26px] flex flex-col justify-between h-26"
          >
            <p class="text-sm font-medium text-gray-700">{{ question.text }}</p>
            <div class="flex items-center space-x-6">
              <label class="switch">
                <input type="checkbox" v-model="question.answer" />
                <span class="slider round"></span>
              </label>
              <span>{{ question.answer ? 'Да' : 'Нет' }}</span>
            </div>
          </div>
        </form>
      </div>

      <!-- Плавающая кнопка для возврата к форме -->
      <button
        v-show="showScrollToTopButton"
        @click="scrollToForm"
        class="fixed bottom-4 right-4 lg:hidden bg-[#a8cc55] text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        ВВЕРХ
      </button>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      leadData: {
        name: '',
        phone: '',
      },
      message: '',
      isError: false,
      showSurvey: false, // Управление отображением опросника
      isDesktop: false, // Инициализируем как false
      showScrollToTopButton: false, // Показывать ли кнопку возврата к форме
      surveyQuestions: [
        { text: 'Предпочитаете общение через Мессенджер?', answer: false },
        { text: 'Собственник лифта?', answer: false },
        { text: 'Нужен QR-код?', answer: false },
        { text: 'Интересует ли вас сезонная реклама (праздники)?', answer: false },
        { text: 'Хотели бы видео блок?', answer: false },
        { text: 'Реклама на узнаваемость бренда важнее продаж?', answer: false },
        { text: 'Плановые замены блоков?', answer: false },
        { text: 'Хотите помощь в выборе района для рекламы?', answer: false },
        { text: 'Хотите протестировать несколько форматов рекламы?', answer: false },
        { text: 'Нужна ли помощь с креативом для рекламы?', answer: false },
      ]
    };
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 1024; // Проверяем размер окна только на клиенте
      window.addEventListener('resize', this.checkIsDesktop);
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.checkIsDesktop);
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    checkIsDesktop() {
      if (typeof window !== 'undefined') {
        this.isDesktop = window.innerWidth >= 1024; // Обновляем значение при изменении размера окна
      }
    },
    handleScroll() {
      if (this.isDesktop || !this.showSurvey) return; // Не показываем кнопку на десктопе или если опросник скрыт
      const scrollPosition = window.scrollY || window.pageYOffset;
      this.showScrollToTopButton = scrollPosition > 300;
    },
    scrollToForm() {
      if (this.$refs.contactForm) {
        // Используем scrollIntoView для плавной прокрутки к форме
        this.$refs.contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async submitLead() {
      // Ваш код для отправки данных формы
    },
    submitSurvey() {
      // Ваш код для обработки опроса
    },
  }
};
</script>

<style scoped>
/* Тень для блока с консультацией */
.shadow-consultation {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.shadow-custom-top {
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.05),
              0 0 4px rgba(3, 46, 40, 0.4);
}

/* Стили для переключателя */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(22px);
}

/* Круглый переключатель */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Стили для большого переключателя */
.slider.round.big {
  width: 80px;
  height: 38px;
}

.slider.round.big:before {
  width: 30px;
  height: 30px;
}

input:checked + .slider.round.big:before {
  transform: translateX(40px);
}
</style>
