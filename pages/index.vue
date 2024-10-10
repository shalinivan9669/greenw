<template>
    <div>
      <NavBar />
      <HeroComponents  id="about" />
      <Info id="services"/>
      <Module id="contact"/> 
   
      <FeedbackForm/>
      <Map2GisWraper/>
      <Slider/>
      <Blocks/>
      <Faq id="bank"/>
      <Footer/>
      
    </div>
  </template>
  
  <script setup>
 import FeedbackForm from '@/components/FeedbackForm.vue';
 
  import NavBar from '@/components/NavBar.vue';
  import HeroComponents from '@/components/HeroComponents.vue';
  import Info from '@/components/Info.vue';

  import Blocks from '@/components/Blocks.vue';
  import Faq from '@/components/Faq.vue';
  import Map2GisWraper from '~/components/Map2GisWraper.vue';
  import Footer from '@/components/Footer.vue';
 import Slider from '@/components/Slider.vue';
  import Module from '~/components/Module.vue';
  </script>
  
