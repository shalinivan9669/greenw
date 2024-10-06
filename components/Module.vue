<template>
    <section class="bg-[#efefef] py-16">
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <!-- Схема размеров рекламных модулей -->
        <div class="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Размеры рекламных модулей</h2>
            <div class="grid grid-cols-8 gap-1 w-full h-[500px]">
              <div class="border border-gray-400 col-span-8 row-span-4 flex items-center justify-center font-bold w-full">A3</div>
              <div class="border border-gray-400 col-span-2 row-span-4 flex items-center justify-center font-bold w-full">A5</div>
              <div class="border border-gray-400 col-span-2 row-span-4 flex items-center justify-center font-bold w-full">A5</div>
              <div class="border border-gray-400 col-span-4 row-span-4 flex items-center justify-center font-bold w-full">A4</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full">A9</div>
              <div class="border border-gray-400 col-span-4 row-span-4 flex items-center justify-center font-bold w-full">A4</div>
              <div class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full">A6</div>
              <div class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full">A6</div>
              <div class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full">A6</div>
              <div class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full">A6</div>
              <div class="border border-gray-400 col-span-4 row-span-4 flex items-center justify-center font-bold w-full">A4</div>
              <div class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full">A7</div>
              <div class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full">A7</div>
              <div class="border border-gray-400 col-span-2 row-span-4 flex items-center justify-center font-bold w-full">A5</div>
              <div class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full">A7</div>
              <div class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full">A7</div>
            </div>
          </div>
        </div>
  
        <!-- Информация о ценах и описаниях модулей -->
        <div class="lg:w-1/2 flex flex-col space-y-8">
          <div v-for="(module, index) in adModules" :key="index" class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div class="w-full flex flex-col sm:flex-row justify-between items-center">
              <div class="mb-4 sm:mb-0">
                <h3 class="text-2xl font-bold text-custom-green">{{ module.name }}</h3>
                <p class="text-gray-700 mt-1">{{ module.size }}</p>
              </div>
              <p class="text-2xl font-bold text-black mt-4 sm:mt-0">{{ module.price }} ₸/МЕС</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const adModules = [
    { name: 'A9 (вертикальный)', size: '5,2 x 3,7 = 19,24 см²', price: '6 000' },
    { name: 'A7 (вертикальный)', size: '7,4 x 10,5 = 77,7 см²', price: '23 000' },
    { name: 'A6 (горизонтальный)', size: '14,8 x 10,5 = 155,4 см²', price: '34 500' },
    { name: 'A5 (вертикальный)', size: '14,8 x 21,0 = 310,8 см²', price: '69 000' },
    { name: 'A4 (горизонтальный)', size: '29,7 x 21,0 = 623,7 см²', price: '138 000' },
    { name: 'A3 (горизонтальный)', size: '59,4 x 21,0 = 1247,4 см²', price: '276 000' }
  ];
  </script>
  
  <style scoped>
  /***** Tailwind стили используются для придания современного и адаптивного вида *****/
  section {
    background: linear-gradient(to bottom, #eff0f2, #ffffff);
  }
  
  .bg-custom-green {
    background-color: #98C850;
  }
  
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .grid div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>