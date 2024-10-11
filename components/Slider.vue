<template>
  <div
    class="carousel-wrapper"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="carousel">
      <div
        class="carousel-slide"
        v-for="(image, index) in images"
        :key="index"
        :style="getSlideStyle(index)"
      >
        <img :src="image" loading="lazy" alt="carousel image" class="carousel-image" />
      </div>
    </div>

    <!-- Кнопки навигации -->
    <button class="nav-btn prev-btn" @click="prevSlide">
      <!-- Левая стрелка -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-icon">
        <circle cx="12" cy="12" r="11" fill="#98C850" stroke="none"></circle>
        <polygon points="15,6 9,12 15,18" fill="white"></polygon>
      </svg>
    </button>
    <button class="nav-btn next-btn" @click="nextSlide">
      <!-- Правая стрелка -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-icon">
        <circle cx="12" cy="12" r="11" fill="#98C850" stroke="none"></circle>
        <polygon points="9,6 15,12 9,18" fill="white"></polygon>
      </svg>
    </button>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Импорт изображений
import image1 from '@/assets/5.webp'
import image2 from '@/assets/1.webp'
import image3 from '@/assets/2.webp'
import image4 from '@/assets/3.webp'
import image5 from '@/assets/4.webp'
import image6 from '@/assets/6.webp'

// Массив изображений
const images = [image1, image2, image3, image4, image5, image6]

const currentIndex = ref(0)
const numSlides = images.length

// Хранение текущего угла поворота
const currentRotation = ref(0)

// Функции навигации
const nextSlide = () => {
  const anglePerSlide = 360 / numSlides
  currentIndex.value = (currentIndex.value + 1) % numSlides
  currentRotation.value -= anglePerSlide
}

const prevSlide = () => {
  const anglePerSlide = 360 / numSlides
  currentIndex.value = (currentIndex.value - 1 + numSlides) % numSlides
  currentRotation.value += anglePerSlide
}

// Получение ширины окна
const windowWidth = ref(1024) // Значение по умолчанию для SSR

const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

onMounted(() => {
  handleResize()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})

// Расчёт 3D позиции и стилей слайда
const getSlideStyle = (index) => {
  const anglePerSlide = 360 / numSlides 
  const angle = anglePerSlide * index + currentRotation.value

  // Изменяем translateZ с учётом расстояния между слайдами
  let translateZ = computeTranslateZ()

  return {
    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
    width: slideWidth.value,
    height: slideHeight.value,
    transition: 'transform 0.5s ease-in-out',
  }
}

// Вычисляем translateZ на основе ширины слайда и количества слайдов
const computeTranslateZ = () => {
  const width = parseInt(slideWidth.value)
  const radians = (Math.PI * 2) / numSlides
  const spacingFactor = 1.2 // Коэффициент расстояния между слайдами (увеличьте для большего расстояния)
  return ((width / 2) / Math.tan(radians / 2)) * spacingFactor
}

// Вычисляемые размеры слайда
const slideWidth = computed(() => {
  if (windowWidth.value >= 1024) {
    return '250px'
  } else if (windowWidth.value >= 768) {
    return '200px'
  } else if (windowWidth.value >= 504) {
    return '180px'
  } else {
    return '140px'
  }
})

const slideHeight = computed(() => {
  if (windowWidth.value >= 1024) {
    return '400px'
  } else if (windowWidth.value >= 768) {
    return '350px'
  } else if (windowWidth.value >= 504) {
    return '300px'
  } else {
    return '250px'
  }
})

// Свайп-функциональность
let startX = 0
let endX = 0

const onTouchStart = (e) => {
  startX = e.touches[0].clientX
}

const onTouchMove = (e) => {
  endX = e.touches[0].clientX
}

const onTouchEnd = () => {
  if (startX - endX > 50) {
    // Свайп влево
    nextSlide()
  } else if (endX - startX > 50) {
    // Свайп вправо
    prevSlide()
  }
}
</script>


<style scoped>
.carousel-wrapper {
  perspective: 1200px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
  overflow: hidden;
}

.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.carousel-slide {
  position: absolute;
  bottom: 19.5%;
  left: 41%;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}

.carousel-slide:hover .carousel-image {
  transform: scale(1.05);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.nav-icon {
  width: 40px;
  height: 40px;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

/* Адаптивность для экранов менее 934px */
@media (max-width: 934px) {
  .nav-btn {
    top: auto;
    bottom: 10px;
  }
  .prev-btn {
    left: calc(50% - 60px);
    transform: none;
  }
  .next-btn {
    right: calc(50% - 60px);
    transform: none;
  }
}

/* Адаптивность для малых экранов */
@media (max-width: 504px) {
  .carousel-wrapper {
    height: 500px;
  }
  .carousel-slide {
    bottom: 20%;
    left: 36%;
  }
  .prev-btn {
    left: calc(50% - 80px);
  }
  .next-btn {
    right: calc(50% - 80px);
  }
}

/* Адаптивность для экранов до 390px */
@media (max-width: 390px) {
  .carousel-wrapper {
    height: 400px;
  }
  .carousel-slide {
    bottom: 25%;
    left: 30%;
  }
  .nav-icon {
    width: 30px;
    height: 30px;
  }
  .prev-btn {
    left: calc(50% - 60px);
  }
  .next-btn {
    right: calc(50% - 60px);
  }
}
</style>

