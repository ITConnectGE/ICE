<script setup lang="ts">
import type { ProductCategory } from '~/types'

defineProps<{ category: ProductCategory; to?: string }>()
const { t } = useLocale()
</script>

<template>
  <NuxtLink
    :to="to ?? '/products'"
    class="group relative block aspect-[386/325] overflow-hidden rounded-card"
  >
    <img
      :src="asset(category.image)"
      :alt="category.title"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/0 transition-opacity duration-300 group-hover:from-primary/95"
    />

    <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
      <h3 class="text-h4 !text-white">{{ t(category.title) }}</h3>
      <span
        class="grid h-10 w-10 shrink-0 translate-y-1 place-items-center rounded-full bg-secondary text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <AppIcon name="arrow-up-right" :size="18" :stroke="2" />
      </span>
    </div>
  </NuxtLink>
</template>
