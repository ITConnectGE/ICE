<script setup lang="ts">
import { productCategories } from '~/data/products'

defineProps<{ active?: string }>()
const { t } = useLocale()
</script>

<template>
  <aside class="rounded-card border border-line bg-white p-6 lg:p-7">
    <h3 class="text-h4 text-primary">{{ t({ ka: 'პროდუქცია', en: 'Products' }) }}</h3>
    <ul class="mt-5 space-y-1">
      <li v-for="cat in productCategories" :key="cat.slug">
        <NuxtLink
          :to="`/products/${cat.slug}`"
          class="group flex items-center gap-3 rounded-md px-3 py-2.5 text-body-sm transition-colors"
          :class="
            active === cat.slug
              ? 'bg-primary font-semibold text-white'
              : 'text-ink-soft hover:bg-surface-muted'
          "
        >
          <span
            class="h-2.5 w-2.5 shrink-0 rounded-[2px] transition-colors"
            :class="active === cat.slug ? 'bg-secondary' : 'bg-line group-hover:bg-secondary'"
          />
          {{ t(cat.title) }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
