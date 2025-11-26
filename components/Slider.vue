<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="carousel-track" :style="trackStyle" @transitionend="handleTransitionEnd">
        <div
          class="carousel-slide"
          v-for="(image, index) in loopedSlides"
          :key="index"
          :style="slideStyle"
        >
          <img
            :src="image"
            loading="lazy"
            alt="carousel image"
            class="carousel-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import image1 from '@/assets/5.webp'
import image2 from '@/assets/1.webp'
import image3 from '@/assets/2.webp'
import image4 from '@/assets/3.webp'
import image5 from '@/assets/4.webp'
import image6 from '@/assets/6.webp'
import image7 from '@/assets/7.webp'
import image8 from '@/assets/8.webp'
import image9 from '@/assets/9.webp'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

const loopedSlides = computed(() => [...images, images[0]])
const currentIndex = ref(0)
const enableTransition = ref(true)
const slideInterval = 2200
const windowWidth = ref(1024)
const slideGapPx = 32
const slideWidthPx = 288
const slideHeightPx = 490

const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

const slideStyle = computed(() => ({
  width: `${slideWidthPx}px`,
  height: `${slideHeightPx}px`,
  flexShrink: 0,
  marginRight: `${slideGapPx}px`,
}))

const trackStyle = computed(() => {
  const offsetPerSlide = slideWidthPx + slideGapPx
  const centerOffset = `calc(50% - ${slideWidthPx / 2}px)`
  return {
    width: `${loopedSlides.value.length * offsetPerSlide}px`,
    transform: `translateX(calc(-${offsetPerSlide * currentIndex.value}px + ${centerOffset}))`,
    transition: enableTransition.value ? 'transform 2.4s ease-in-out' : 'none',
  }
})

const goNext = () => {
  if (currentIndex.value < loopedSlides.value.length - 1) {
    currentIndex.value += 1
  }
}

let timer = null

const startAutoPlay = () => {
  stopAutoPlay()
  timer = setInterval(goNext, slideInterval)
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const handleTransitionEnd = () => {
  if (currentIndex.value === loopedSlides.value.length - 1) {
    enableTransition.value = false
    currentIndex.value = 0
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        enableTransition.value = true
      })
    })
  }
}

onMounted(() => {
  handleResize()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
  startAutoPlay()
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
  stopAutoPlay()
})
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: radial-gradient(circle at 20% 20%, rgba(152, 200, 80, 0.08), transparent 40%),
    radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.06), transparent 42%),
    linear-gradient(135deg, #f9fbf7 0%, #f5f7f2 100%);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
}

.carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  align-items: center;
  height: 100%;
  will-change: transform;
}

.carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 6px;
}

.carousel-image {
  width: 288px;
  max-width: 288px;
  height: 490px;
  max-height: 490px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  transition: transform 0.4s ease, filter 0.4s ease;
}

.carousel-slide:hover .carousel-image {
  transform: scale(1.01);
  filter: saturate(1.05);
}

@media (max-width: 640px) {
  .carousel-wrapper {
    border-radius: 12px;
  }
}
</style>
