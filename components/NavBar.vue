<!-- components/NavBar.vue -->
<template>
  <header class="fixed inset-x-0 top-0 z-50 flex justify-center">
    <CardNav
      class-name="pointer-events-auto shadow-xl"
      :logo="logo"
      logo-alt="GreenW"
      :items="navItems"
      base-color="#ffffff"
      menu-color="#0f172a"
      ease="power3.out"
    />
    <NuxtLink
      to="/lift#contact"
      aria-label="�������� ������"
      class="fixed z-[51] flex h-24 w-24 items-center justify-center rounded-full bg-[#4caf4f] shadow-xl ring-4 ring-white/70 transition-transform duration-200 hover:scale-110 hover:shadow-2xl pointer-events-auto"
      :style="{ bottom: '6%', right: '4%', transform: jitterTransform }"
      @mouseenter="maybeJitter"
    >
      <span class="sr-only">�������� ������</span>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardNav, { type CardNavItem } from '@/components/CardNav.vue'
import logo from '@/assets/svg/loggo.svg'

const navItems: CardNavItem[] = [
  {
    label: 'Страницы',
    bgColor: '#0f172a',
    textColor: '#e2ffe8',
    links: [
      { label: 'Главная', href: '/', ariaLabel: 'Перейти на главную' },
      { label: 'О нас', href: '/we', ariaLabel: 'О компании GreenW' },
      { label: 'Собственникам', href: '/owners', ariaLabel: 'Раздел для собственников' }
    ]
  },
  {
    label: 'Лифты',
    bgColor: '#14532d',
    textColor: '#e8ffe8',
    links: [
      { label: 'Вступление', href: '/lift#about', ariaLabel: 'Описание услуги лифтов' },
      { label: 'Сетка блоков', href: '/lift#blocks', ariaLabel: 'Перейти к сетке блоков' },
      { label: 'Услуги и расчёт', href: '/lift#services', ariaLabel: 'Перейти к услугам и калькулятору' },
      { label: 'Контакты', href: '/lift#contact', ariaLabel: 'Оставить заявку на размещение' }
    ]
  },
  {
    label: 'LED-экраны',
    bgColor: '#1f2937',
    textColor: '#f8fafc',
    links: [
      { label: 'Главный блок', href: '/led#led-hero', ariaLabel: 'Главный блок LED' },
      { label: 'Форматы', href: '/led#led-screens', ariaLabel: 'Форматы экранов' },
      { label: 'Галерея', href: '/led#led-gallery', ariaLabel: 'Галерея экранов' },
      { label: 'Преимущества', href: '/led#led-benefits', ariaLabel: 'Преимущества LED' },
      { label: 'Оферта', href: '/led#led-cta', ariaLabel: 'CTA LED' }
    ]
  },
  {
    label: 'Контакты',
    bgColor: '#334155',
    textColor: '#f8fafc',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/77086755846', ariaLabel: 'Написать в WhatsApp' },
      { label: 'Позвонить', href: 'tel:+77086755846', ariaLabel: 'Позвонить +7 708 675 5846' },
      { label: 'Почта', href: 'mailto:info@greenw.kz', ariaLabel: 'Написать на почту info@greenw.kz' }
    ]
  }
]

const jitterTransform = ref('translate3d(0,0,0)')
const maybeJitter = () => {
  if (Math.random() < 0.75) {
    const dx = (Math.random() * 26 - 18).toFixed(1)
    const dy = (Math.random() * 26 - 18).toFixed(1)
    jitterTransform.value = `translate3d(${dx}px, ${dy}px, 0)`
    setTimeout(() => {
      jitterTransform.value = 'translate3d(0,0,0)'
    }, 1000)
  }
}
</script>



