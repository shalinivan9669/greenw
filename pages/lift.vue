<template>
  <div>
    <NavBar class="shadow-md bg-white z-10" />
    <HeroComponents id="about" />
     <Blocks/>
    <Suspense>
      <template #default>
        <AsyncModule /> 
      </template>
      <template #fallback>
        <div>Загрузка модуля...</div>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <AsyncFeedbackForm id="contact"/>
      </template>
      <template #fallback>
        <div>Загрузка формы обратной связи...</div>
      </template>
    </Suspense>
    
    <!-- Дополнительные асинхронные компоненты -->
    <!--<Suspense>
      <template #default>
        <AsyncMap2GisWraper/>
      </template>
      <template #fallback>
        <div>Загрузка карты...</div>
      </template>
    </Suspense>
    -->
    <Suspense>
      <template #default>
        <AsyncSlider/>
      </template>
      <template #fallback>
        <div>Загрузка слайдера...</div>
      </template>
    </Suspense>
     <Info id="services"/>
 <Suspense>
      <template #default>
        <AsyncFaq />
      </template>
      <template #fallback>
        <div>Загрузка FAQ...</div>
      </template>
    </Suspense>
    <Footer id="bank"/>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import HeroComponents from '@/components/HeroComponents.vue';
import Info from '@/components/Info.vue';
import Blocks from '@/components/Blocks.vue';
import Footer from '@/components/Footer.vue';

// Динамическая загрузка компонентов
const AsyncModule = defineAsyncComponent(() => import('~/components/Module.vue'));
const AsyncFeedbackForm = defineAsyncComponent(() => import('@/components/FeedbackForm.vue'));
const AsyncMap2GisWraper = defineAsyncComponent(() => import('~/components/Map2GisWraper.vue'));
const AsyncSlider = defineAsyncComponent(() => import('@/components/Slider.vue'));
const AsyncFaq = defineAsyncComponent(() => import('@/components/Faq.vue'));
</script>
