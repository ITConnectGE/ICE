<script setup lang="ts">
import type { ServiceStep } from '~/types'

defineProps<{ item: ServiceStep }>()
const { t } = useLocale()
</script>

<template>
  <div class="relative grid items-center gap-6 lg:grid-cols-[1fr_92px_1fr] lg:gap-0">
    <!-- Text -->
    <div
      class="order-2 lg:order-none"
      :class="item.reversed ? 'lg:col-start-3 lg:pl-12 lg:text-left' : 'lg:col-start-1 lg:pr-12 lg:text-right'"
    >
      <h3 class="text-[22px] font-bold text-primary lg:text-[26px]">{{ t(item.title) }}</h3>
      <p
        class="mt-3 text-body text-muted"
        :class="item.reversed ? '' : 'lg:ml-auto'"
        style="max-width: 30rem"
      >
        {{ t(item.description) }}
      </p>
    </div>

    <!-- Center number (pink, sits on the dashed line) -->
    <div class="order-1 flex items-center lg:order-none lg:col-start-2 lg:justify-center">
      <span
        class="bg-white px-3 font-display text-[36px] font-bold leading-none text-secondary lg:text-[40px]"
      >
        {{ item.step }}
      </span>
    </div>

    <!-- Image -->
    <div
      class="order-3 overflow-hidden rounded-card shadow-card lg:order-none"
      :class="item.reversed ? 'lg:col-start-1 lg:row-start-1 lg:pr-12' : 'lg:col-start-3 lg:pl-12'"
    >
      <div class="aspect-[500/270] w-full overflow-hidden rounded-card">
        <img
          :src="asset(item.image)"
          :alt="item.title"
          class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
