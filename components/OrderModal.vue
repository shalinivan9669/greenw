<!-- components/OrderModal.vue -->
<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 mx-4 lg:mx-0">
        <div class="text-right">
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-black mb-4">Свяжитесь с нами</h2>
          <p class="text-lg text-gray-700">Заполните форму ниже, и мы свяжемся с вами как можно скорее</p>
        </div>
        <form @submit.prevent="$emit('submit', leadData)">
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Имя:</label>
            <input v-model="leadData.name" type="text" id="name" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green" />
          </div>
          <div class="mb-6">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Телефон:</label>
            <input v-model="leadData.phone" type="tel" id="phone" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green" />
            <p v-if="phoneError" class="text-red-500 mt-2">{{ phoneError }}</p>
          </div>
          <button type="submit" class="w-full bg-custom-green text-white py-3 rounded-lg hover:bg-green-500 transition duration-300">Отправить</button>
        </form>
        <p v-if="message" :class="{ 'text-red-500': isError, 'text-green-500': !isError }" class="text-center mt-4">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    show: Boolean,
    leadData: Object
  });
  
  const emit = defineEmits(['close', 'submit']);
  
  const phoneError = ref('');
  const message = ref('');
  const isError = ref(false);
   
  
  </script>
  