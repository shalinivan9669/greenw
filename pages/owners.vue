<!-- pages/owners.vue -->
<template>
    <div>
      <NavBar />
  
      <!-- Основной контент страницы -->
      <main>
        <!-- Здесь мы разместим наш компонент -->
        <OwnersContent />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  import OwnersContent from '@/components/OwnersContent.vue'
  </script>
  