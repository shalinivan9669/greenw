<template>
  <div class="w-full flex flex-col lg:flex-row mb-5 items-center justify-center p-4">
    <div class="scroll-wheel-container flex flex-col lg:flex-row justify-between items-center w-full lg:w-4/6 lg:ml-36 gap-4">
      <!-- Пояснение о скидках -->
      <div class="discount-info text-sm text-gray-600 mt-4 w-full lg:w-1/3">
        <p>Скидки зависят от количества месяцев и выбранных рекламных модулей:</p>
        <ul class="list-disc list-inside">
          <li>Размещение нескольких форматов на одном баннере: <strong>{{ hasMultipleFormats ? 'Достигнуто' : 'Не достигнуто' }}</strong></li>
          <li>Размещение одного формата во всех блоках (предоплата): <strong>{{ isAllBlocks ? 'Достигнуто' : 'Не достигнуто' }}</strong></li>
          <li>Размещение формата в двух блоках: <strong>{{ isTwoBlocks ? 'Достигнуто' : 'Не достигнуто' }}</strong></li>
          <li>Размещение формата в одном блоке: <strong>{{ isOneBlock ? 'Достигнуто' : 'Не достигнуто' }}</strong></li>
          <li>Комплиментарная скидка на первое размещение: <strong>{{ selectedMonths === 1 && totalBlocks > 0 ? 'Достигнуто' : 'Не достигнуто' }}</strong></li>
        </ul>
      </div>
      <!-- Регулятор месяцев -->
      <div class="scroll-wheel-wrapper flex flex-col items-center w-full lg:w-1/3">
        <!-- Вывод бонусов или анекдота, если выбран 0 -->
        <div class="bonus-info mt-6">
          <h2 class="text-xl text-black font-bold text-center">Бонус за {{ selectedMonths }} месяцев: {{ calculateBonus() }}%</h2>
        </div>
        <!-- Пояснение для пользователя -->
        <div class="instruction-text mt-2 text-center text-gray-500 text-xs">
          Используйте стрелки, чтобы выбрать количество месяцев.
        </div>
        <!-- Кнопка для уменьшения значения -->
        <div @mousedown="startDecreasingMonths" @mouseup="stopScrolling" @mouseleave="stopScrolling" class="arrow-up">
          <span class="arrow-icon">▲</span>
        </div>

        <!-- "Табло" с числами -->
        <div class="scroll-wheel text-xs">
          <div class="scroll-items-wrapper">
            <div class="scroll-items text-xs" :style="{ transform: `translateY(${translateYMonths}px)` }">
              <div v-for="n in 13" :key="n" class="scroll-item">
                {{ n - 1 }}
                <div class="scroll-tick"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопка для увеличения значения -->
        <div @mousedown="startIncreasingMonths" @mouseup="stopScrolling" @mouseleave="stopScrolling" class="arrow-down">
          <span class="arrow-icon">▼</span>
        </div>
      </div>
      <!-- Табло информации о выбранных модулях и стоимости -->
      <div class="info-display w-full lg:w-2/5 text-black mt-6">
        <!-- Информация о выбранных модулях -->
        <div class="selected-modules-info">
          <h3 class="text-lg text-black font-bold text-center lg:text-left">Выбранные рекламные модули:</h3>
          <div v-if="Object.keys(formattedSelectedModules).length === 0" class="text-black text-center lg:text-left">Нет выбранных модулей</div>
          <div v-else>
            <div v-for="(modules, block) in formattedSelectedModules" :key="block" class="text-black text-center lg:text-left">
              <h4 class="text-md text-black font-bold">{{ block }}:</h4>
              <ul class="flex flex-col lg:flex-row">
                <li class="text-black" v-for="(count, module) in modules" :key="module">
                  {{ module }}: {{ count }} шт.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Общая стоимость выбранных модулей -->
        <div class="total-price-info mt-6">
          <h3 class="text-lg text-black font-bold text-center lg:text-left">Общая стоимость: {{ totalPriceWithDiscount }} тг</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    selectedModules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const prices = ref({
      block1: {
        A3: 10000,
        A4: 7000,
        A5: 5000,
        A6: 3500,
        A7: 2000,
        A9: 1000,
      },
      block2: {
        A3: 12000,
        A4: 8500,
        A5: 6000,
        A6: 4000,
        A7: 2500,
        A9: 1500,
      },
      block3: {
        A3: 15000,
        A4: 9000,
        A5: 7000,
        A6: 4500,
        A7: 3000,
        A9: 2000,
      },
    });

    return { prices };
  },
  data() {
    return {
      selectedMonths: 1,
      jokes: [
        "Анекдот 1: ...",
        "Анекдот 2: ...",
        "Анекдот 3: ...",
      ],
      randomJoke: "",
      translateYMonths: 0,
      scrollInterval: null,
    };
  },
  computed: {
    formattedSelectedModules() {
      const formatted = {};
      for (const block in this.selectedModules) {
        formatted[block] = {};
        this.selectedModules[block].forEach(module => {
          const type = module.split('-')[0];
          if (formatted[block][type]) {
            formatted[block][type]++;
          } else {
            formatted[block][type] = 1;
          }
        });
      }
      return formatted;
    },
    totalBlocks() {
      return Object.keys(this.formattedSelectedModules).length;
    },
    totalPrice() {
      let total = 0;
      for (const block in this.formattedSelectedModules) {
        const modules = this.formattedSelectedModules[block];
        for (const module in modules) {
          const count = modules[module];
          const price = this.prices[block]?.[module] || 0;
          total += price * count;
        }
      }
      return total;
    },
    totalPriceWithDiscount() {
      const discount = this.calculateBonus() / 100;
      return Math.round(this.totalPrice * this.selectedMonths * (1 - discount));
    },
    hasMultipleFormats() {
      return Object.values(this.formattedSelectedModules).some(modules => Object.keys(modules).length > 1);
    },
    isAllBlocks() {
      return this.totalBlocks === 3;
    },
    isTwoBlocks() {
      return this.totalBlocks === 2;
    },
    isOneBlock() {
      return this.totalBlocks === 1;
    }
  },
  watch: {
    selectedMonths: 'saveToLocalStorage',
    selectedModules: {
      handler: 'saveToLocalStorage',
      deep: true,
    },
    totalPriceWithDiscount: 'saveToLocalStorage'
  },
  methods: {
    startIncreasingMonths() {
      this.scrollInterval = setInterval(() => {
        if (this.selectedMonths < 12) {
          this.increaseMonths();
        }
      }, 100);
    },
    startDecreasingMonths() {
      this.scrollInterval = setInterval(() => {
        if (this.selectedMonths > 0) {
          this.decreaseMonths();
        }
      }, 100);
    },
    stopScrolling() {
      clearInterval(this.scrollInterval);
    },
    increaseMonths() {
      if (this.selectedMonths < 12) {
        this.selectedMonths++;
        this.translateYMonths -= 50;
      }
    },
    decreaseMonths() {
      if (this.selectedMonths > 0) {
        this.selectedMonths--;
        this.translateYMonths += 50;
        if (this.selectedMonths === 0) {
          this.showRandomJoke();
        }
      }
    },
    showRandomJoke() {
      const randomIndex = Math.floor(Math.random() * this.jokes.length);
      this.randomJoke = this.jokes[randomIndex];
    },
    calculateBonus() {
      // Новая логика расчета скидок на основе предоставленной таблицы
      let discount = 0;
      const hasMultipleFormats = Object.values(this.formattedSelectedModules).some(modules => Object.keys(modules).length > 1);
      const isAllBlocks = this.totalBlocks === 3;
      const isTwoBlocks = this.totalBlocks === 2;
      const isOneBlock = this.totalBlocks === 1;

      // Условия для скидок на основе размещения и количества месяцев
      if (hasMultipleFormats) {
        if (this.selectedMonths >= 1 && this.selectedMonths <= 3) {
          discount = [3, 5, 7][this.selectedMonths - 1];
        } else if (this.selectedMonths > 3) {
          discount = 7;
        }
      } else if (isAllBlocks) {
        if (this.selectedMonths >= 1 && this.selectedMonths <= 3) {
          discount = [5, 7, 10][this.selectedMonths - 1];
        } else if (this.selectedMonths > 3) {
          discount = 10;
        }
      } else if (isTwoBlocks) {
        if (this.selectedMonths >= 1 && this.selectedMonths <= 3) {
          discount = [3, 5, 7][this.selectedMonths - 1];
        } else if (this.selectedMonths > 3) {
          discount = 7;
        }
      } else if (isOneBlock) {
        if (this.selectedMonths >= 1 && this.selectedMonths <= 3) {
          discount = [2, 5, 7][this.selectedMonths - 1];
        } else if (this.selectedMonths > 3) {
          discount = 7;
        }
      }

      // Комплиментарная скидка на первое размещение
      if (this.selectedMonths === 1 && this.totalBlocks > 0) {
        discount = Math.max(discount, 5);
      }

      return discount;
    },
    saveToLocalStorage() {
      const data = {
        selectedMonths: this.selectedMonths,
        selectedModules: this.selectedModules,
        totalPriceWithDiscount: this.totalPriceWithDiscount,
      };
      localStorage.setItem('preCalcData', JSON.stringify(data));
    }
  },
};
</script>

<style scoped>
.scroll-wheel-container {
  background: #f8fff1;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #3a3a3a; /* Чёткие границы тёмного цвета */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  gap: 20px;
}

.scroll-wheel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
}

.scroll-wheel {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b8e986; /* Тепло зелёный цвет, соответствующий стилю сайта */
  width: 49px;
  height: 116px;
  border-radius: 10px;
  margin: 8px 0;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  border: 2px solid #759911; /* Глубоко пастельно зелёный цвет */
}

.scroll-items-wrapper {
  height: 150px;
  overflow: hidden;
}

.scroll-items {
  transition: transform 0.5s ease-in-out;
}

.scroll-item {
  font-size: 24px;
  color: #fefefe; /* Темно-зелёный цвет для соответствия стилю сайта */
  line-height: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.scroll-tick {
  width: 100%;
  height: 4px;
  background: #759911;
  margin-top: -2px;
}

.current {
  color: #b18fff; /* Основной цвет для выбранного значения */
  font-size: 32px;
  font-weight: bold;
}

.arrow-up, .arrow-down {
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  user-select: none;
  background: #4a773c;
  border: 2px solid #3a3a3a; /* Чёткая тёмная граница */
  padding: 10px;
  width: 30px; /* Уменьшение размера кнопки в 2 раза */
  height: 30px;
  border-radius: 6px; /* Квадратная форма, с небольшим закруглением для элегантности */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3);
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-up:active, .arrow-down:active {
  transform: translateY(2px); /* Имитация глубины при нажатии */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3);
}

.arrow-icon {
  display: inline-block;
  font-size: 20px;
  color: #b0e57c;
  text-shadow: 0 0 8px rgba(176, 229, 124, 0.8);
}

.joke-display {
  margin-top: 20px;
  background-color: #444;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-style: italic;
}

.bonus-info {
  text-align: center;
  font-size: 18px;
  color: #fff;
}

.selected-modules-info {
  text-align: center;
  font-size: 18px;
  color: #fff;
}

.total-price-info {
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
}

.info-display {
  background: #adffad;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid #3a3a3a; /* Чёткие границы тёмного цвета */
}
</style>