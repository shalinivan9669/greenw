<template>
  <section class="py-12 bg-[#f3f3f3]">
    <!-- Первый блок: Когда полезна реклама в лифтах? -->
    <div class="container mx-auto text-center px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-8">Когда полезна реклама в лифтах?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="sale" alt="Sale" class="mx-auto h-40 mb-4">
          <p>Планируете провести акцию или распродажу</p>
        </div>
        <div class="bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="staff" alt="Staff" class="mx-auto h-40 mb-4">
          <p>Необходимо привлечь квалифицированный персонал</p>
        </div>
        <div class="bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="money" alt="Money" class="mx-auto h-40 mb-4">
          <p>Ограничен рекламный бюджет</p>
        </div>
        <div class="bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="medal" alt="Medal" class="mx-auto h-40 mb-4">
          <p>Хотите быть на шаг впереди конкурентов</p>
        </div>
        <div class="bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="people" alt="People" class="mx-auto h-40 mb-4">
          <p>Нужен эффективный способ привлечения новых клиентов</p>
        </div>
        <div class="bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="hand" alt="Hand" class="mx-auto h-40 mb-4">
          <p>Вашему бренду не хватает узнаваемости</p>
        </div>
      </div>
    </div>

    <!-- Второй блок: Почему реклама в лифтах? -->
    <div class="container mx-auto text-center mt-16 px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-8">Почему реклама в лифтах?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-16 text-left">
        <div class="flex items-start space-x-4 bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="button" alt="Button" class="h-12">
          <div>
            <h3 class="text-xl font-bold">Удобный формат</h3>
            <p>Реклама на уровне глаз, легко доступна и хорошо видна.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4 bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="money" alt="Prices" class="h-12">
          <div>
            <h3 class="text-xl font-bold">Выгодные цены</h3>
            <p>Реклама в лифтах дешевле других видов рекламы.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4 bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="people" alt="City" class="h-12">
          <div>
            <h3 class="text-xl font-bold">Развитие города</h3>
            <p>Интенсивное строительство новых жилых домов с лифтами.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4 bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="hand" alt="Reach" class="h-12">
          <div>
            <h3 class="text-xl font-bold">Широкий охват</h3>
            <p>Можно охватить широкую аудиторию, не использующую другие медиа.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4 bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="button" alt="Contact" class="h-12">
          <div>
            <h3 class="text-xl font-bold">Частота контакта</h3>
            <p>80% жителей домов ежедневно пользуются лифтами минимум два раза в день.</p>
          </div>
        </div>
        <div class="flex items-start space-x-4 bg-[#efefef] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img :src="hand" alt="Effect" class="h-12">
          <div>
            <h3 class="text-xl font-bold">Быстрый эффект</h3>
            <p>Реклама сразу привлекает внимание, особенно востребованные услуги.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Импортируем изображения
import button from '@/assets/button.png'
import hand from '@/assets/hand.png'
import medal from '@/assets/medal.png'
import money from '@/assets/money.png'
import people from '@/assets/people.png'
import sale from '@/assets/sale.png'
import staff from '@/assets/staff.png'
</script>