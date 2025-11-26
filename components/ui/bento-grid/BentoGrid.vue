<template>
  <div
    :class="[
      'grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3 max-w-7xl mx-auto',
      props.class,
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
