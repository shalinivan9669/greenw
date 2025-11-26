<template>
  <div
    :class="[
      'row-span-1 rounded-xl border border-neutral-200/70 bg-white/90 p-5 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl',
      'group/bento',
      props.class,
    ]"
  >
    <slot name="header" />

    <div class="transition duration-200 group-hover/bento:translate-x-1">
      <slot name="icon" />
      <div class="my-2 font-sans text-lg font-semibold text-neutral-900">
        <slot name="title" />
      </div>
      <div class="font-sans text-sm font-normal text-neutral-600">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
