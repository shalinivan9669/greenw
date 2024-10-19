<!-- components/OrderModal.vue -->
<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click.self="closeOrderModal"
  >
    <div class="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl relative mx-4">
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        @click="closeOrderModal"
      >
        &times;
      </button>
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">
        Заказать {{ block.name }}
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
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  block: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close-order-modal'])

const closeOrderModal = () => {
  emit('close-order-modal')
}

const leadData = ref({
  name: '',
  phone: ''
})
const message = ref('')
const isError = ref(false)

// Функция отправки данных формы
const submitLead = async () => {
  try {
    // Собираем данные в строку, как в третьем компоненте
    const combinedInfo = `
Имя: ${leadData.value.name}
Телефон: ${leadData.value.phone}
Заказ: ${props.block.name}
    `.trim()

    // Подготавливаем данные для отправки
    const dataToSend = {
      name: combinedInfo,
      phone: leadData.value.phone
    }

    // Отправляем данные с помощью fetch
    const response = await fetch('/api/create-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })

    const result = await response.json()

    if (response.ok) {
      message.value = 'Заявка успешно отправлена!'
      isError.value = false
      // Очистка формы
      leadData.value.name = ''
      leadData.value.phone = ''
      // Автоматически закрываем модальное окно после успешной отправки
      setTimeout(() => {
        closeOrderModal()
      }, 2000)
    } else {
      isError.value = true
      message.value = result.message || 'Ошибка при отправке заявки.'
    }
  } catch (error) {
    isError.value = true
    message.value = 'Ошибка при отправке заявки. Пожалуйста, попробуйте позже.'
    console.error('Ошибка при отправке формы:', error)
  }
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
