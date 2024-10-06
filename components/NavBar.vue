<template>
    <header class="bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Логотип -->
        <div class="flex items-center space-x-2">
          <img :src="logo" alt="Logo" class="h-12">
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
          <a href="#about" class="text-gray-800 hover:text-custom-green">О нас</a>
          <a href="#services" class="text-gray-800 hover:text-custom-green">Собственникам лифтов</a>
          <a href="#contact" class="text-gray-800 hover:text-custom-green">Рекламодателям</a>
          <a href="#bank" class="text-gray-800 hover:text-custom-green">Реквизиты</a>
        </nav>
  
        <!-- Телефон справа -->
        <div class="hidden md:block">
          <a 
            href="https://wa.me/77086755846" 
            class="font-normal text-lg text-black hover:text-custom-green"
            target="_blank"
            rel="noopener noreferrer">
            +7 708 675 5846
          </a>
        </div>
      </div>
  
      <!-- Мобильное меню -->
      <nav v-if="isMenuOpen" class="md:hidden p-4 space-y-4 bg-gray-50 shadow-lg rounded-md">
        <a href="#about" class="block text-gray-800 hover:text-custom-green">О нас</a>
        <a href="#services" class="block text-gray-800 hover:text-custom-green">Собственникам лифтов</a>
        <a href="#contact" class="block text-gray-800 hover:text-custom-green">Рекламодателям</a>
        <a href="#bank" class="block text-gray-800 hover:text-custom-green">Реквизиты</a>
        <!-- Ссылка на WhatsApp -->
        <a 
          href="https://wa.me/77086755846" 
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
  import logo from '~/assets/logo.png'
  
  const isMenuOpen = ref(false)
  </script>
  