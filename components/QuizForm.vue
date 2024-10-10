<!-- components/QuizForm.vue -->
<template>
    <div class="max-w-3xl mx-auto">
      <form @submit.prevent="submitForm">
        <!-- Вопрос 1 -->
        <div v-if="step === 1" class="mb-6">
          <h3 class="text-2xl font-bold mb-4">1) Вы являетесь:</h3>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="radio" value="Председатель КСК" v-model="formData.role" class="form-radio text-custom-green" />
              <span class="ml-2">Председателем КСК</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="Управляющая компания" v-model="formData.role" class="form-radio text-custom-green" />
              <span class="ml-2">Управляющей компанией</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="Старший по дому" v-model="formData.role" class="form-radio text-custom-green" />
              <span class="ml-2">Старшим по дому</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="Старший по подъезду" v-model="formData.role" class="form-radio text-custom-green" />
              <span class="ml-2">Старшим по подъезду</span>
            </label>
          </div>
        </div>
  
        <!-- Вопрос 2 -->
        <div v-else-if="step === 2" class="mb-6">
          <h3 class="text-2xl font-bold mb-4">2) В каком районе города находится ваш дом:</h3>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="radio" value="Майкудук" v-model="formData.district" class="form-radio text-custom-green" />
              <span class="ml-2">Майкудук</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="Город" v-model="formData.district" class="form-radio text-custom-green" />
              <span class="ml-2">Город</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="Юго-Восток" v-model="formData.district" class="form-radio text-custom-green" />
              <span class="ml-2">Юго-Восток</span>
            </label>
          </div>
        </div>
  
        <!-- Вопрос 3 -->
        <div v-else-if="step === 3" class="mb-6">
          <h3 class="text-2xl font-bold mb-4">3) Сколько подъездов в доме:</h3>
          <div class="flex items-center">
            <button type="button" @click="decrease('entrances', 1)" class="bg-gray-300 px-4 py-2 rounded-l">-</button>
            <input type="number" v-model.number="formData.entrances" min="1" max="100" class="w-20 text-center border-t border-b border-gray-300" />
            <button type="button" @click="increase('entrances', 100)" class="bg-gray-300 px-4 py-2 rounded-r">+</button>
          </div>
        </div>
  
        <!-- Вопрос 4 -->
        <div v-else-if="step === 4" class="mb-6">
          <h3 class="text-2xl font-bold mb-4">4) Сколько лифтов в подъезде:</h3>
          <div class="flex items-center">
            <button type="button" @click="decrease('lifts', 1)" class="bg-gray-300 px-4 py-2 rounded-l">-</button>
            <input type="number" v-model.number="formData.lifts" min="1" max="10" class="w-20 text-center border-t border-b border-gray-300" />
            <button type="button" @click="increase('lifts', 10)" class="bg-gray-300 px-4 py-2 rounded-r">+</button>
          </div>
        </div>
  
        <!-- Вопрос 5 -->
        <div v-else-if="step === 5" class="mb-6">
          <h3 class="text-2xl font-bold mb-4">5) Укажите телефон и мы вам перезвоним:</h3>
          <div class="mb-4">
            <label class="block text-lg mb-2">Имя:</label>
            <input type="text" v-model="formData.name" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green" />
          </div>
          <div>
            <label class="block text-lg mb-2">Телефон:</label>
            <input type="tel" v-model="formData.phone" required class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-custom-green" />
          </div>
        </div>
  
        <!-- Согласие на обработку персональных данных -->
        <div v-if="step === 5" class="mb-6">
          <label class="flex items-center">
            <input type="checkbox" v-model="formData.agree" required class="form-checkbox text-custom-green" />
            <span class="ml-2 text-sm">
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
            </span>
          </label>
        </div>
  
        <!-- Кнопки навигации -->
        <div class="flex justify-between">
          <button type="button" v-if="step > 1" @click="prevStep" class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
            Назад
          </button>
          <button type="button" v-if="step < 5" @click="nextStep" class="bg-custom-green text-white py-2 px-4 rounded hover:bg-green-500">
            Далее
          </button>
          <button type="submit" v-if="step === 5" class="bg-custom-green text-white py-2 px-4 rounded hover:bg-green-500">
            Отправить
          </button>
        </div>
  
        <!-- Сообщение после отправки -->
        <p v-if="message" class="text-center mt-4 text-lg" :class="{ 'text-green-600': !error, 'text-red-600': error }">
          {{ message }}
        </p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const step = ref(1)
  const formData = ref({
    role: '',
    district: '',
    entrances: 1,
    lifts: 1,
    name: '',
    phone: '',
    agree: false
  })
  const message = ref('')
  const error = ref(false)
  
  const nextStep = () => {
    if (validateStep()) {
      step.value++
    }
  }
  
  const prevStep = () => {
    step.value--
  }
  
  const increase = (field, max) => {
    if (formData.value[field] < max) {
      formData.value[field]++
    }
  }
  
  const decrease = (field, min) => {
    if (formData.value[field] > min) {
      formData.value[field]--
    }
  }
  
  const validateStep = () => {
    switch (step.value) {
      case 1:
        return !!formData.value.role
      case 2:
        return !!formData.value.district
      case 3:
        return formData.value.entrances > 0
      case 4:
        return formData.value.lifts > 0
      default:
        return true
    }
  }
  
  const submitForm = async () => {
    if (!formData.value.agree) {
      error.value = true
      message.value = 'Вы должны согласиться с политикой конфиденциальности.'
      return
    }
  
    try {
      // Собираем все данные формы в читаемый текст
      const combinedInfo = `
  Имя: ${formData.value.name}
  Телефон: ${formData.value.phone}
  Вы являетесь: ${formData.value.role}
  Район города: ${formData.value.district}
  Количество подъездов в доме: ${formData.value.entrances}
  Количество лифтов в подъезде: ${formData.value.lifts}
  `.trim()
  
      // Подготавливаем данные для отправки
      const dataToSend = {
        name: combinedInfo,
        phone: formData.value.phone
      }
  
      // Отправляем данные на сервер
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      })
  
      const result = await response.json()
  
      if (response.ok) {
        message.value = 'Спасибо! Мы свяжемся с вами в ближайшее время.'
        error.value = false
        // Очистка формы
        step.value = 1
        formData.value = {
          role: '',
          district: '',
          entrances: 1,
          lifts: 1,
          name: '',
          phone: '',
          agree: false
        }
      } else {
        error.value = true
        message.value = result.message || 'Ошибка при отправке данных.'
      }
    } catch (err) {
      error.value = true
      message.value = 'Ошибка при отправке данных. Пожалуйста, попробуйте позже.'
      console.error('Ошибка при отправке формы:', err)
    }
  }
  </script>
  
  <style scoped>
  .text-custom-green {
    color: #98C850;
  }
  .form-radio:checked {
    border-color: #98C850;
  }
  .form-checkbox:checked {
    border-color: #98C850;
    background-color: #98C850;
  }
  </style>
  