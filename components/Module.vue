<template>
  <section class="bg-[#efefef] py-16 pb-12">
    <div class="container mx-auto flex pb-12 flex-col lg:flex-row items-center">
      <!-- Схема размеров рекламных модулей -->
      <div class="lg:w-1/2 flex justify-center lg:order-1">
        <div class="bg-white ad-container rounded-lg shadow-md p-8 w-full lg:w-[555px]">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Размеры рекламных модулей</h2>
          <div class="grid grid-cols-8 gap-1 w-full h-[500px]">
            <!-- A3 (col-span-8, row-span-5) -->
            <div
              @click="toggleSelection('A3')"
              :class="getClass('A3')"
              class="border border-gray-400 col-span-8 row-span-5 flex items-center justify-center font-bold w-full"
            >
              A3
            </div>

            <!-- A5 (col-span-2, row-span-6) -->
            <div
              @click="toggleSelection('A5-1')"
              :class="getClass('A5-1')"
              class="border border-gray-400 col-span-2 row-span-6 flex items-center justify-center font-bold w-full"
            >
              A5
            </div>
            <div
              @click="toggleSelection('A5-2')"
              :class="getClass('A5-2')"
              class="border border-gray-400 col-span-2 row-span-6 flex items-center justify-center font-bold w-full"
            >
              A5
            </div>

            <!-- A4 (col-span-4, row-span-6) -->
            <div
              @click="toggleSelection('A4-1')"
              :class="getClass('A4-1')"
              class="border border-gray-400 col-span-4 row-span-6 flex items-center justify-center font-bold w-full"
            >
              A4
            </div>

            <!-- A9 (col-span-1, row-span-1) -->
            <div
              @click="toggleSelection('A9-1')"
              :class="getClass('A9-1')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-2')"
              :class="getClass('A9-2')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-3')"
              :class="getClass('A9-3')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-4')"
              :class="getClass('A9-4')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-5')"
              :class="getClass('A9-5')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-6')"
              :class="getClass('A9-6')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-7')"
              :class="getClass('A9-7')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>
            <div
              @click="toggleSelection('A9-8')"
              :class="getClass('A9-8')"
              class="border border-gray-400 col-span-1 row-span-1 flex items-center justify-center font-bold w-full"
            >
              A9
            </div>

            <!-- A4 (второй блок, col-span-4, row-span-4) -->
            <div
              @click="toggleSelection('A4-2')"
              :class="getClass('A4-2')"
              class="border border-gray-400 col-span-4 row-span-4 flex items-center justify-center font-bold w-full"
            >
              A4
            </div>

            <!-- A6 (col-span-2, row-span-2) -->
            <div
              @click="toggleSelection('A6-1')"
              :class="getClass('A6-1')"
              class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A6
            </div>
            <div
              @click="toggleSelection('A6-2')"
              :class="getClass('A6-2')"
              class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A6
            </div>
            <div
              @click="toggleSelection('A6-3')"
              :class="getClass('A6-3')"
              class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A6
            </div>
            <div
              @click="toggleSelection('A6-4')"
              :class="getClass('A6-4')"
              class="border border-gray-400 col-span-2 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A6
            </div>

            <!-- A4 (третий блок, col-span-4, row-span-4) -->
            <div
              @click="toggleSelection('A4-3')"
              :class="getClass('A4-3')"
              class="border border-gray-400 col-span-4 row-span-4 flex items-center justify-center font-bold w-full"
            >
              A4
            </div>

            <!-- A7 (col-span-1, row-span-2) -->
            <div
              @click="toggleSelection('A7-1')"
              :class="getClass('A7-1')"
              class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A7
            </div>
            <div
              @click="toggleSelection('A7-2')"
              :class="getClass('A7-2')"
              class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A7
            </div>
            <div
              @click="toggleSelection('A5-3')"
              :class="getClass('A5-3')"
              class="border border-gray-400 col-span-2 row-span-4 flex items-center justify-center font-bold w-full"
            >
              A5
            </div>
            <div
              @click="toggleSelection('A7-3')"
              :class="getClass('A7-3')"
              class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A7
            </div>
            <div
              @click="toggleSelection('A7-4')"
              :class="getClass('A7-4')"
              class="border border-gray-400 col-span-1 row-span-2 flex items-center justify-center font-bold w-full"
            >
              A7
            </div>
          </div>
        </div>
      </div>

      <!-- Информация о ценах и описаниях модулей -->
      <div class="lg:w-1/2 flex flex-col items-center lg:mb-0 lg:order-3 mt-8 lg:mt-0 w-full">
        <!-- Вкладки для переключения блоков -->
        <div class="w-full flex justify-center">
          <div class="flex w-full max-w-2xl">
            <button
              @click="activeTab = 1"
              :class="activeTab === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-t-md"
            >Блок 1</button>
            <button
              @click="activeTab = 2"
              :class="activeTab === 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-t-md"
            >Блок 2</button>
            <button
              @click="activeTab = 3"
              :class="activeTab === 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-t-md"
            >Блок 3</button>
            <button
              @click="activeTab = 4"
              :class="activeTab === 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-t-md"
            >Блок 4</button>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md mb-1 p-8 w-full">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Причины использования</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 w-full h-auto">
            <!-- A3 -->
            <div
              :class="isModuleSelected('A3') ? 'bg-green-200 border border-green-400' : 'border border-gray-400'"
              class="col-span-2 md:col-span-4 lg:col-span-5 row-span-4 flex items-center justify-center w-full"
            >
              <div class="text-center flex flex-col px-2">
                <div class="text-2xl font-extrabold">A3</div>
                <p class="text-sm mt-1 font-bold">Цена: {{ prices[`block${activeTab}`].A3 }} KZT</p>
                <p class="text-sm mt-1">
                  Крупный формат для максимального воздействия.
                  <span>Отлично подходит для детальной информации и ярких визуалов, привлекающих внимание.</span>
                </p>
              </div>
            </div>

            <!-- A4 -->
            <div
              :class="(isModuleSelected('A4-1') || isModuleSelected('A4-2') || isModuleSelected('A4-3'))
                ? 'bg-green-200 border border-green-400'
                : 'border border-gray-400'"
              class="col-span-2 md:col-span-4 lg:col-span-3 row-span-4 flex items-center justify-center w-full"
            >
              <div class="text-center flex flex-col px-2">
                <div class="text-2xl font-extrabold">A4</div>
                <p class="text-sm mt-1 font-bold">Цена: {{ prices[`block${activeTab}`].A4 }} KZT</p>
                <p class="text-sm mt-1">
                  Популярный формат для сбалансированного сочетания изображений и текста.
                  <span>Идеален для основных сообщений и предложений.</span>
                </p>
              </div>
            </div>

            <!-- A5 -->
            <div
              :class="(isModuleSelected('A5-1') || isModuleSelected('A5-2') || isModuleSelected('A5-3'))
                ? 'bg-green-200 border border-green-400'
                : 'border border-gray-400'"
              class="col-span-2 md:col-span-4 lg:col-span-4 row-span-3 flex items-center justify-center w-full"
            >
              <div class="text-center flex flex-col px-2">
                <div class="text-2xl font-extrabold">A5</div>
                <p class="text-sm mt-1 font-bold">Цена: {{ prices[`block${activeTab}`].A5 }} KZT</p>
                <p class="text-sm mt-1">
                  Компактный и эффективный формат.
                  <span>Подходит для кратких сообщений, акций и специальных предложений.</span>
                </p>
              </div>
            </div>

            <!-- A7 -->
            <div
              :class="(isModuleSelected('A7-1') || isModuleSelected('A7-2') || isModuleSelected('A7-3') || isModuleSelected('A7-4'))
                ? 'bg-green-200 border border-green-400'
                : 'border border-gray-400'"
              class="col-span-2 md:col-span-4 lg:col-span-4 row-span-3 flex items-center justify-center w-full"
            >
              <div class="text-center flex flex-col px-2">
                <div class="text-2xl font-extrabold">A7</div>
                <p class="text-sm mt-1 font-bold">Цена: {{ prices[`block${activeTab}`].A7 }} KZT</p>
                <p class="text-sm mt-1">
                  Небольшой формат для лаконичных сообщений.
                  <span>Идеально подходит для логотипов и контактной информации.</span>
                </p>
              </div>
            </div>

            <!-- A6 -->
            <div
              :class="(isModuleSelected('A6-1') || isModuleSelected('A6-2') || isModuleSelected('A6-3') || isModuleSelected('A6-4'))
                ? 'bg-green-200 border border-green-400'
                : 'border border-gray-400'"
              class="col-span-2 md:col-span-8 row-span-2 flex items-center justify-center w-full"
            >
              <div class="text-center flex flex-col px-2">
                <div class="text-2xl font-extrabold">A6</div>
                <p class="text-sm mt-1 font-bold">Цена: {{ prices[`block${activeTab}`].A6 }} KZT</p>
                <p class="text-sm mt-1">
                  Удобный размер для основных предложений и призывов к действию.
                  <span>Хорошо привлекает внимание аудитории.</span>
                </p>
              </div>
            </div>

            <!-- A9 -->
            <div
              :class="(isModuleSelected('A9-1') || isModuleSelected('A9-2') || isModuleSelected('A9-3') || isModuleSelected('A9-4') || isModuleSelected('A9-5') || isModuleSelected('A9-6') || isModuleSelected('A9-7') || isModuleSelected('A9-8'))
                ? 'bg-green-200 border border-green-400'
                : 'border border-gray-400'"
              class="col-span-2 md:col-span-8 row-span-1 flex items-center justify-center w-full"
            >
              <div class="text-center px-2">
                <div class="text-2xl font-extrabold">A9</div>
                <p class="text-sm mt-1 font-bold">Цена: {{ prices[`block${activeTab}`].A9 }} KZT</p>
                <p class="text-sm mt-1">
                  Миниатюрный формат для размещения слоганов или контактов.
                  <span>Отлично дополняет другие рекламные материалы.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade-expand">
      <PreCalc v-if="isAnyModuleSelected" :selectedModules="selectedModules" />
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PreCalc from '~/components/PreCalc.vue';

const activeTab = ref(1);
const selectedModules = ref({
  block1: [],
  block2: [],
  block3: [],
  block4: [],
});

const prices = ref({
  block1: {
    A3: 276000,
    A4: 138000,
    A5: 69000,
    A6: 34500,
    A7: 23000,
    A9: 6000,
  },
  block2: {
    A3: 276000,
    A4: 138000,
    A5: 69000,
    A6: 34500,
    A7: 23000,
    A9: 6000,
  },
  block3: {
    A3: 360000,
    A4: 180000,
    A5: 90000,
    A6: 45000,
    A7: 30000,
    A9: 10000,
  },
  block4: {
    A3: 240000,
    A4: 120000,
    A5: 60000,
    A6: 30000,
    A7: 20000,
    A9: 5000,
  },
});

const toggleSelection = (module) => {
  const current = `block${activeTab.value}`;
  const list = selectedModules.value[current];
  selectedModules.value[current] = list.includes(module)
    ? list.filter((m) => m !== module)
    : [...list, module];
};

const getClass = (module) => {
  return isModuleSelected(module) ? 'bg-green-200' : '';
};

const isModuleSelected = (module) => {
  return selectedModules.value[`block${activeTab.value}`].includes(module);
};

const isAnyModuleSelected = computed(() =>
  Object.values(selectedModules.value).some((arr) => arr.length > 0)
);
</script>

<style scoped>
section {
  background: linear-gradient(
    to bottom,
    #f3f3f3,
    #b9f3c1,
    #759911
  );
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: all 1.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-expand-enter-from,
.fade-expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scale(0.9);
}

.fade-expand-enter-to,
.fade-expand-leave-from {
  max-height: 1000px;
  opacity: 1;
  transform: scale(1.05);
}
</style>
