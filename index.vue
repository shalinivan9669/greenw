<template>
  <div class="flex flex-col min-h-screen">
    <NavBar class="shadow-md bg-white z-10" />

    <main class="flex-grow">
      <!-- Hero + Р’С‹Р±РѕСЂ С„РѕСЂРјР°С‚Р° СЂРµРєР»Р°РјС‹ -->
      <section class="relative overflow-hidden">
        <!-- Р“СЂР°РґРёРµРЅС‚РЅС‹Р№ С„РѕРЅ -->
        <div class="absolute inset-0 bg-gradient-to-b from-emerald-600/80 to-amber-400"></div>
        <!-- РџР°С‚С‚РµСЂРЅ Р»РёС„С‚РѕРІ -->
        <div
          class="absolute inset-0 bg-[url('/pattern-elevator.svg')] opacity-10 pointer-events-none"
        ></div>

        <div class="relative container mx-auto px-4 py-24 text-center text-white">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-16 max-w-4xl mx-auto "
          >
            РџСЂРёРІР»РµРєР°РµРј РєР»РёРµРЅС‚РѕРІ С‡РµСЂРµР· Р»РёС„С‚С‹ Рё СЌРєСЂР°РЅС‹ РІ РљР°СЂР°РіР°РЅРґРµ
          </h1>

          <p class="text-lg md:text-5xl mb-12 max-w-2xl mx-auto leading-relaxed   ">
            Р‘РѕР»РµРµ 600 Р»РёС„С‚РѕРІ Рё 28 СЌРєСЂР°РЅР° <br />РїРѕ РІСЃРµРјСѓ РіРѕСЂРѕРґСѓ.
          </p>
          <p class="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ">
            РћС‚ 20 000 в‚ё РІ РјРµСЃСЏС†. Р‘РµР· С€СѓРјР°. <br />РЎ РјР°РєСЃРёРјР°Р»СЊРЅС‹Рј РІРЅРёРјР°РЅРёРµРј.
          </p>

          <!-- CTA-РєРЅРѕРїРєРё -->
          <div class="flex flex-wrap justify-center gap-4 mb-36">
            <!-- Р—Р°РєР°Р·Р°С‚СЊ СЂРµРєР»Р°РјСѓ -->
            <NuxtLink
              to=""
              @click.prevent="openOrderModal('СЂРµРєР»Р°РјСѓ')"
              class="relative cursor-pointer z-10 px-10 py-5 text-lg md:text-xl font-semibold text-green-600 bg-white rounded-lg shadow-lg transform transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
            >
              Р—Р°РєР°Р·Р°С‚СЊ СЂРµРєР»Р°РјСѓ
            </NuxtLink>

            <!-- РџРµСЂРµР№С‚Рё РІ Instagram -->
            <a
              href="https://instagram.com/greenw.kz"
              target="_blank"
              class="relative z-10 px-10 py-5 text-lg md:text-xl font-semibold text-white bg-transparent border-2 border-white rounded-lg shadow-lg transform transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:bg-white hover:text-green-600 active:scale-95"
            >
              РџРµСЂРµР№С‚Рё РІ Instagram
            </a>
          </div>

          <h2 class="text-2xl md:text-5xl font-semibold mb-20 flex flex-wrap justify-center gap-3 items-baseline">
            РљР°РєР°СЏ СЂРµРєР»Р°РјР° РїРѕРґРѕР№РґС‘С‚ РёРјРµРЅРЅРѕ РІР°Рј
            <span class="inline-flex items-baseline gap-2">
              <span class="rotating-word-wrapper">
                <Transition name="rotate-word">
                  <span
                    class="rotating-word inline-block font-extrabold text-white"
                    :key="currentRotatingWord"
                  >
                    {{ currentRotatingWord }}?
                  </span>
                </Transition>
              </span>
            </span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <!-- Р›РёС„С‚С‹ -->
            <NuxtLink
              to="/lift"
              class="group relative flex flex-col items-start p-12 bg-lime-300/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl min-h-[450px] hover:backdrop-blur-sm hover:border-white/50 hover:shadow-2xl transition"
            >
              <div class="mb-6 w-full text-center">
                <img src="/assets/svg/lift.svg" alt="Р РµРєР»Р°РјР° РљР°СЂР°РіР°РЅРґР°" class="w-20 h-20 mx-auto" />
              </div>
              <h3 class="text-2xl font-semibold text-white mb-3">
                Р РµРєР»Р°РјР° РІ Р»РёС„С‚Р°С…
              </h3>
              <ul class="mt-4 space-y-2 text-white text-left">
                <li><span class="font-semibold">Р¤РѕСЂРјР°С‚:</span> Р±СѓРјР°Р¶РЅС‹Р№ РјРѕРґСѓР»СЊ РІРЅСѓС‚СЂРё Р»РёС„С‚Р°</li>
                <li><span class="font-semibold">450+ Р»РёС„С‚РѕРІ</span> РїРѕ РІСЃРµРјСѓ РіРѕСЂРѕРґСѓ</li>
                <li><span class="font-semibold">Р•Р¶РµРґРЅРµРІРЅС‹Р№ РѕС…РІР°С‚:</span> РґРѕ 48 000 С‡РµР»РѕРІРµРє</li>
                <li><span class="font-semibold">РћС‚ 20 000 в‚ё</span> / РјРµСЃСЏС†</li>
                <li>Р Р°Р±РѕС‚Р°РµС‚ РЅР° РґРѕРІРµСЂРёРµ, Р»РѕРєР°Р»СЊРЅРѕСЃС‚СЊ Рё СЂРµРіСѓР»СЏСЂРЅС‹Р№ РєРѕРЅС‚Р°РєС‚</li>
              </ul>
            </NuxtLink>

            <!-- Р­РєСЂР°РЅС‹ Рё LED-СЃС‚РµРЅРґС‹ -->
            <NuxtLink
              to="/led"
              class="group relative flex flex-col items-start p-12 bg-lime-300/40 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl min-h-[450px] hover:backdrop-blur-sm hover:border-white/50 hover:shadow-2xl transition"
            >
              <div class="mb-6 w-full text-center">
                <img src="/assets/svg/led.svg" alt="Р РµРєР»Р°РјР° РљР°СЂР°РіР°РЅРґР° Р»РµРґ СЌРєСЂР°РЅС‹" class="w-20 h-20 mx-auto" />
              </div>
              <h3 class="text-2xl font-semibold text-white mb-3">
                Р РµРєР»Р°РјР° РЅР° СЌРєСЂР°РЅР°С… Рё LED-СЃС‚РµРЅРґР°С…
              </h3>
              <ul class="mt-4 space-y-2 text-white text-left">
                <li><span class="font-semibold">Р¤РѕСЂРјР°С‚:</span> РґРёРЅР°РјРёС‡РЅС‹Р№ СЂРѕР»РёРє РЅР° СЌРєСЂР°РЅРµ</li>
                <li><span class="font-semibold">22 РјРѕРЅРёС‚РѕСЂР°</span> РІ РўР”, РЅР° РІРѕРєР·Р°Р»Рµ Рё СѓР»РёС†Р°С…</li>
                <li><span class="font-semibold">200вЂ“400 РїРѕРєР°Р·РѕРІ</span> РІ СЃСѓС‚РєРё</li>
                <li>РРґРµР°Р»СЊРЅРѕ РґР»СЏ Р°РєС†РёР№, РёРјРёРґР¶Р°, СѓР·РЅР°РІР°РµРјРѕСЃС‚Рё</li>
                <li><span class="font-semibold">РћС‚ 20 000 в‚ё</span> / РјРµСЃСЏС†</li>
              </ul>
            </NuxtLink>
          </div>
        </div>

        <!-- Р‘Р»РѕРє РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё -->
        <div class="relative -mt-1 bg-white/20 backdrop-blur-lg py-8">
          <div class="container mx-auto px-4 text-center">
            <p class="text-3xl md:text-4xl font-bold text-white mb-4">
              РќРµ Р·РЅР°РµС‚Рµ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ?
            </p>
            <p class="text-lg text-white/90 mb-6">
              РџРѕРјРѕР¶РµРј РѕРїСЂРµРґРµР»РёС‚СЊСЃСЏ! Р—Р°РєР°Р¶РёС‚Рµ Р±РµСЃРїР»Р°С‚РЅСѓСЋ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <NuxtLink
                to=""
                @click.prevent="openOrderModal('Р·РІРѕРЅРѕРє')"
                class="px-8 py-3 cursor-pointer bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Р—Р°РєР°Р·Р°С‚СЊ Р·РІРѕРЅРѕРє
              </NuxtLink>
              <a
                href="https://wa.me/77086755846"
                target="_blank"
                class="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition"
              >
                РќР°РїРёСЃР°С‚СЊ РІ WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- РќРѕРІС‹Р№ Р±Р»РѕРє вЂњРќР°Рј РґРѕРІРµСЂСЏСЋС‚вЂќ -->
      <section class="bg-white py-6">
        <div class="container mx-auto px-4 text-center">
          <!-- Р—Р°РіРѕР»РѕРІРѕРє -->
          <h2 class="text-3xl md:text-5xl font-bold text-green-500 mb-8">
            РќР°Рј РґРѕРІРµСЂСЏСЋС‚
          </h2>

          <!-- РћСЃРЅРѕРІРЅРѕР№ С‚РµРєСЃС‚ -->
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mx-auto">
            РЈР¶Рµ Р±РѕР»РµРµ <span class="text-green-500">20 РєРѕРјРїР°РЅРёР№</span> СЂР°Р·РјРµС‰Р°СЋС‚ СЂРµРєР»Р°РјСѓ СЃ РЅР°РјРё РЅР° РїРѕСЃС‚РѕСЏРЅРЅРѕР№ РѕСЃРЅРѕРІРµ вЂ” РІ Р»РёС„С‚Р°С… Рё РЅР° СЌРєСЂР°РЅР°С…, Р±РѕР»РµРµ <span class="text-green-500">6 РјРµСЃСЏС†РµРІ</span> РїРѕРґСЂСЏРґ.
          </h3>
          <p class="mt-4 text-xl text-gray-600 max-w-5xl mx-auto">
            РЎСЂРµРґРё РЅРёС… вЂ” РєСЂСѓРїРЅС‹Рµ Р±СЂРµРЅРґС‹, РєР»РёРЅРёРєРё, СЃР°Р»РѕРЅС‹, Р±Р°РЅРєРё Рё Р»РѕРєР°Р»СЊРЅС‹Рµ РјР°РіР°Р·РёРЅС‹.
          </p>
        </div>
      </section>

      <!-- РџР°СЂС‚РЅС‘СЂС‹: Р±РµРіСѓС‰Р°СЏ СЃС‚СЂРѕРєР° -->
      <section class="bg-gray-50 py-8">
        <div class="container mx-auto">
          <PartnersMarquee />
        </div>
      </section>
    </main>

    <Footer />

    <!-- РњРѕРґР°Р»РєР° Р·Р°РєР°Р·Р° -->
    <OrderModal
      v-if="showOrderModal"
      :block="modalBlock"
      @close-order-modal="closeOrderModal"
    />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import PartnersMarquee from '@/components/PartnersMarquee.vue'
import OrderModal from '@/components/OrderModal.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

useSeoMeta({
  title: 'Р РµРєР»Р°РјР° РІ РљР°СЂР°РіР°РЅРґРµ вЂ“ Р»РёС„С‚С‹ Рё LED-СЌРєСЂР°РЅС‹, РЅР°СЂСѓР¶РЅР°СЏ СЂРµРєР»Р°РјР° Р°РіРµРЅС‚СЃС‚РІРѕ GreenW',
  description: 'РџСЂРёРІР»РµС‡С‘Рј РєР»РёРµРЅС‚РѕРІ РІ РљР°СЂР°РіР°РЅРґРµ С‡РµСЂРµР· СЂРµРєР»Р°РјСѓ РІ Р»РёС„С‚Р°С… Рё РЅР° LED-СЌРєСЂР°РЅР°С…. РћС…РІР°С‚ РґРѕ 48 000 Р¶РёС‚РµР»РµР№ РµР¶РµРґРЅРµРІРЅРѕ. РћС‚ 20 000 в‚ё/РјРµСЃ. РќР°СЂСѓР¶РЅР°СЏ СЂРµРєР»Р°РјР°',
  ogTitle: 'Р РµРєР»Р°РјР° РІ РљР°СЂР°РіР°РЅРґРµ вЂ“ Р»РёС„С‚С‹ Рё LED-СЌРєСЂР°РЅС‹',
  ogDescription: 'Р›РѕРєР°Р»СЊРЅС‹Р№ РѕС…РІР°С‚: 450+ Р»РёС„С‚РѕРІ Рё 22 СЌРєСЂР°РЅР° РїРѕ РіРѕСЂРѕРґСѓ.',
  ogUrl: 'https://www.greenw.kz',
  twitterCard: 'summary_large_image',
  robots: 'index,follow'
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.greenw.kz/' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context':'https://schema.org',
      '@type':'LocalBusiness',
      name:'GreenW',
      description:'Р РµРєР»Р°РјРЅРѕРµ Р°РіРµРЅС‚СЃС‚РІРѕ РІ РљР°СЂР°РіР°РЅРґРµ: Р»РёС„С‚С‹ Рё LED-СЌРєСЂР°РЅС‹',
      url:'https://www.greenw.kz',
      telephone:'+7 708 675 5846',
      email:'GREENWAYKRG@gmail.com',
      address:{
        '@type':'PostalAddress',
        addressLocality:'РљР°СЂР°РіР°РЅРґР°',
        addressRegion:'РљР°СЂР°РіР°РЅРґРёРЅСЃРєР°СЏ РѕР±Р»Р°СЃС‚СЊ',
        postalCode:'100000',
        streetAddress:'РјРєСЂ 14, Рґ.42, РєРІ.20'
      },
      areaServed:'РљР°СЂР°РіР°РЅРґР°',
      priceRange:'в‚ёв‚ё',
      sameAs:[
        'https://instagram.com/greenw.kz', // РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё Р·Р°РјРµРЅРё
        'https://tiktok.com/@greenw.kz'    // РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё Р·Р°РјРµРЅРё
      ]
    })
  }]
})


const showOrderModal = ref(false)
const modalBlock     = ref<{ name: string }>({ name: '' })

const rotatingWords = ['Р›РёС„С‚С‹', 'Р›РµРґС‹', 'Р‘РѕР»СЊС€РёРµ Р»РµРґС‹', 'РћС…РІР°С‚С‹ СЃРµР№С‡Р°СЃ']
const rotatingIndex = ref(0)
const currentRotatingWord = computed(() => rotatingWords[rotatingIndex.value])

let rotateTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  rotateTimer = setInterval(() => {
    rotatingIndex.value = (rotatingIndex.value + 1) % rotatingWords.length
  }, 1800)
})
onBeforeUnmount(() => {
  if (rotateTimer) clearInterval(rotateTimer)
})

function openOrderModal(name: string) {
  modalBlock.value = { name }
  showOrderModal.value = true
}
function closeOrderModal() {
  showOrderModal.value = false
}
</script>

<style>
.text-stroke-3 {
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
}
.text-stroke-thin {
  text-shadow:
    -0.5px -0.5px 0 black,
     0.5px -0.5px 0 black,
    -0.5px  0.5px 0 black,
     0.5px  0.5px 0 black;
}

.rotating-word-wrapper {
  position: relative;
  min-width: 10ch;
  height: 1.2em;
  overflow: hidden;
}
.rotating-word {
  position: absolute;
  inset: 0;
}
.rotate-word-enter-active,
.rotate-word-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}
.rotate-word-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.rotate-word-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
