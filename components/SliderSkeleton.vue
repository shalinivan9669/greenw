<template>
  <div class="slider-skeleton">
    <n-skeleton class="slider-skeleton__frame" height="360px" width="100%" />
    <div class="slider-skeleton__thumbnails">
      <n-skeleton
        v-for="dot in dots"
        :key="dot"
        circle
        height="14px"
        width="14px"
      />
    </div>
  </div>
</template>

<script setup>
import { NSkeleton } from 'naive-ui'

const dots = [1, 2, 3, 4]
</script>

<style scoped>
.slider-skeleton {
  width: 100%;
  max-width: 520px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.slider-skeleton__frame {
  flex: 1;
  border-radius: 12px;
}

.slider-skeleton__thumbnails {
  display: flex;
  justify-content: center;
  gap: 10px;
}

@media (max-width: 1024px) {
  .slider-skeleton {
    max-width: 420px;
    height: 360px;
  }
}

@media (max-width: 640px) {
  .slider-skeleton {
    max-width: 320px;
    height: 300px;
  }
}
</style>
