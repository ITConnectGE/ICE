<script setup lang="ts">
import type { Feature } from '~/types'

defineProps<{ feature: Feature }>()
const { t } = useLocale()
</script>

<template>
  <div class="group flex flex-col">
    <span
      class="grid h-14 w-14 place-items-center rounded-card bg-surface-muted text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white"
    >
      <AppIcon :name="feature.icon" :size="28" :stroke="1.7" />
    </span>
    <h3 class="mt-5 text-h4 text-primary">{{ t(feature.title) }}</h3>
    <p class="mt-3 text-body-sm text-muted">{{ t(feature.description) }}</p>
  </div>
</template>
