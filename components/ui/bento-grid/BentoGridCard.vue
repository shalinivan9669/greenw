<template>
  <div
    :key="name"
    :class="[
      'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl',
      props.class,
    ]"
  >
    <slot name="background" />

    <div class="relative z-10 flex flex-col gap-3 p-6 lg:p-7">
      <slot name="icon">
        <component
          :is="icon"
          v-if="icon"
          class="size-10 rounded-xl bg-[#e8f5e9] p-2 text-[#2e7d32]"
        />
      </slot>

      <slot name="title">
        <div class="text-2xl font-extrabold leading-tight text-neutral-900">
          {{ name }}
        </div>
      </slot>

      <slot name="description">
        <p class="text-sm leading-relaxed text-neutral-700">
          {{ description }}
        </p>
      </slot>

      <div v-if="$slots.details" class="text-sm leading-relaxed text-neutral-800">
        <slot name="details" />
      </div>

      <slot name="actions">
        <a
          v-if="href"
          :href="href"
          class="mt-2 inline-flex w-max items-center gap-2 rounded-full bg-[#4caf4f] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#3c8e3f]"
        >
          {{ cta }}
          <svg
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
          </svg>
        </a>

        <span v-else class="mt-2 text-sm font-semibold text-[#4caf4f]">
          {{ cta }}
        </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component, HTMLAttributes } from 'vue'

interface Props {
  name: string
  description?: string
  href?: string
  cta?: string
  icon?: Component | string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
