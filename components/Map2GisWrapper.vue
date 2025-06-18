<template>
  <div id="mapContainer">
    <div v-if="isMapVisible">
      <Suspense>
        <template #default>
          <AsyncMap2GIS />
        </template>
        <template #fallback>
          <div>Загрузка карты...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref } from 'vue';

export default {
  components: {
    AsyncMap2GIS: defineAsyncComponent(() => import('./Map2Gis.vue')),
  },
  setup() {
    const isMapVisible = ref(false);

    // Функция для отслеживания видимости
    const observeVisibility = (el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            isMapVisible.value = true;
            observer.disconnect(); // Отключаем наблюдатель после загрузки карты
          }
        },
        { threshold: 0.1 } // Настройка отслеживания - 10% элемента в области видимости
      );
      observer.observe(el);
    };

    // Используем onMounted, чтобы начать отслеживать компонент после монтирования
    onMounted(() => {
      const mapContainer = document.querySelector('#mapContainer');
      if (mapContainer) {
        observeVisibility(mapContainer);
      }
    });

    return { isMapVisible };
  },
};
</script>