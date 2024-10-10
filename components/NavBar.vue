<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Логотип -->
      <div class="flex items-center space-x-2">
        <img :src="logo" alt="Логотип рекламного агентства GREENWAY в Караганде" class="h-12">
        <span class="font-bold text-lg text-custom-green">Рекламное агентство</span>
      </div>

      <!-- Бургер-меню для мобильных устройств (направо) -->
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-800 focus:outline-none">
          <!-- Иконка бургера -->
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Навигация для десктопов -->
      <nav class="hidden md:flex space-x-8 flex-grow justify-center text-lg">
        <NuxtLink to="/#about" class="text-gray-800 hover:text-custom-green">О нас</NuxtLink>
        <NuxtLink to="/owners" class="text-gray-800 hover:text-custom-green">Собственникам лифтов</NuxtLink>
        <NuxtLink to="/#contact" class="text-gray-800 hover:text-custom-green">Рекламодателям</NuxtLink>
        <NuxtLink to="/#bank" class="text-gray-800 hover:text-custom-green">Реквизиты</NuxtLink>
      </nav>

      <!-- Телефон справа -->
      <div class="hidden md:block">
        <a 
          href="tel:+77086755846" 
          class="font-normal text-lg text-black hover:text-custom-green"
          target="_blank"
          rel="noopener noreferrer">
          +7 708 675 5846
        </a>
      </div>
    </div>

    <!-- Мобильное меню -->
    <nav v-if="isMenuOpen" class="md:hidden p-4 space-y-4 bg-gray-50 shadow-lg rounded-md">
      <NuxtLink to="/#about" class="block text-gray-800 hover:text-custom-green">О нас</NuxtLink>
      <NuxtLink to="/owners" class="block text-gray-800 hover:text-custom-green">Собственникам лифтов</NuxtLink>
      <NuxtLink to="/#contact" class="block text-gray-800 hover:text-custom-green">Рекламодателям</NuxtLink>
      <NuxtLink to="/#bank" class="block text-gray-800 hover:text-custom-green">Реквизиты</NuxtLink>
      <!-- Ссылка на телефон -->
      <a 
        href="tel:+77086755846" 
        class="block text-gray-800 hover:text-custom-green font-bold text-lg mt-4"
        target="_blank"
        rel="noopener noreferrer">
        +7 708 675 5846
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '~/assets/logo.png'

const isMenuOpen = ref(false)
</script>
