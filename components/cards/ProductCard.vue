<script setup lang="ts">
import type { ProductCategory } from '~/types'

defineProps<{ category: ProductCategory; to?: string }>()
const { t } = useLocale()
</script>

<template>
  <NuxtLink
    :to="to ?? '/products'"
    class="group relative block aspect-[4/3] overflow-hidden rounded-card"
  >
    <img
      :src="asset(category.image)"
      :alt="category.title"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
    <!-- gradient for label legibility -->
    <div
      class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent"
    />
    <!-- subtle hover veil -->
    <div class="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15" />

    <div class="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
      <h3 class="text-h4 font-bold !text-white drop-shadow-sm">{{ t(category.title) }}</h3>
      <span
        class="flex -translate-y-1 items-center gap-2 text-body-sm font-semibold uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <AppIcon name="arrow-long" :size="20" :stroke="1.8" class="text-secondary" />
        {{ t({ ka: 'ვრცლად', en: 'Read more' }) }}
      </span>
    </div>
  </NuxtLink>
</template>
