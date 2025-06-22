<!-- components/NavBar.vue -->
<template>
  <!-- ①: фиксируем только на mobile -->
  <header class="bg-white shadow-xl fixed top-0 inset-x-0 w-full z-50 md:relative">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Логотип — ссылка на главную -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img
          :src="logo"
          alt="Логотип рекламного агентства GREENWAY в Караганде"
          class="h-16"
        />
        <span class="font-bold text-lg text-custom-green">
         
        </span>
      </NuxtLink>

      <!-- Бургер только на mobile -->
      <div class="md:hidden">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="text-gray-800 focus:outline-none"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Навигация десктоп -->
      <nav
        class="hidden md:flex space-x-8 flex-grow justify-center text-lg"
      >
        <NuxtLink to="/lift"  class="text-gray-800 hover:text-custom-green">Реклама в лифтах</NuxtLink>
        <NuxtLink to="/led"   class="text-gray-800 hover:text-custom-green">Реклама на экранах</NuxtLink>
        <NuxtLink to="/owners" class="text-gray-800 hover:text-custom-green">Собственникам лифтов</NuxtLink>
        <NuxtLink to="/we"     class="text-gray-800 hover:text-custom-green">О нас</NuxtLink>
      </nav>

      <!-- Телефон десктоп -->
      <div class="hidden md:block">
        <a
          href="tel:+77086755846"
          class="font-normal text-lg text-black hover:text-custom-green"
          target="_blank" rel="noopener noreferrer"
        >
          +7 708 675 5846
        </a>
      </div>
    </div>

    <!-- ②: мобильное меню — фиксируем под шапкой -->
    <nav
      v-if="isMenuOpen"
      class="md:hidden fixed top-16 inset-x-0 p-4 space-y-4 bg-gray-50 shadow-lg rounded-b-md z-40"
    >
      <NuxtLink to="/lift"  class="block text-gray-800 hover:text-custom-green">Реклама в лифтах</NuxtLink>
      <NuxtLink to="/led"   class="block text-gray-800 hover:text-custom-green">Реклама на экранах</NuxtLink>
      <NuxtLink to="/owners" class="block text-gray-800 hover:text-custom-green">Собственникам лифтов</NuxtLink>
      <NuxtLink to="/we"     class="block text-gray-800 hover:text-custom-green">О нас</NuxtLink>

      <a
        href="tel:+77086755846"
        class="block text-gray-800 hover:text-custom-green font-bold text-lg pt-2"
        target="_blank" rel="noopener noreferrer"
      >
        +7 708 675 5846
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/svg/loggo.svg'

const isMenuOpen = ref(false)
</script>
