<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string
    label: string
    to?: string
    ratio?: string
  }>(),
  { ratio: '406/404' },
)
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    :to="to"
    class="group relative block overflow-hidden rounded-card"
  >
    <div class="w-full" :style="{ aspectRatio: ratio }">
      <img
        :src="image"
        :alt="label"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
    <div class="absolute inset-x-0 bottom-0 p-5 text-center">
      <span class="text-h4 !text-white">{{ label }}</span>
    </div>
  </component>
</template>
