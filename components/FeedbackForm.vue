<template>
  <div class="w-full bg-gradient-to-r from-green-400 via-[#a8cc55] to-green-600 py-16">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
        <p class="text-lg text-white">Заполните форму ниже, и мы свяжемся с вами как можно скорее</p>
      </div>
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      leadData: {
        name: '',
        phone: ''
      },
      message: '',
      isError: false // Флаг для отслеживания ошибок
    };
  },
  methods: {
    async submitLead() {
      try {
        // Отправляем POST-запрос с данными лида на сервер
        const response = await axios.post('/api/create-lead', this.leadData);

        if (response.status === 200) {
          this.message = 'Заявка успешно отправлена!';
          this.isError = false;
          this.leadData.name = '';
          this.leadData.phone = '';
        } else {
          this.message = 'Ошибка при отправке заявки.';
          this.isError = true;
          console.error('Ошибка:', response.data);
        }
      } catch (error) {
        this.message = 'Ошибка при отправке заявки.';
        this.isError = true;
        console.error('Ошибка:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Tailwind стили используются вместо стандартных CSS */
</style>