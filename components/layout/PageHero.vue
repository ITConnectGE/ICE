<script setup lang="ts">
import type { I18nText } from '~/composables/useLocale'

interface Crumb {
  label: I18nText
  to?: string
}
withDefaults(
  defineProps<{
    title: I18nText
    image: string
    breadcrumbs?: Crumb[]
    subtitle?: I18nText
  }>(),
  { breadcrumbs: () => [] },
)

const { t } = useLocale()
</script>

<template>
  <section class="relative isolate flex min-h-[340px] items-end overflow-hidden bg-primary pb-12 pt-32 sm:min-h-[380px] sm:pb-14 lg:min-h-[420px]">
    <img
      :src="asset(image)"
      :alt="title"
      class="absolute inset-0 -z-10 h-full w-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 -z-10 bg-navy-overlay" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

    <UiContainer class="relative">
      <!-- white top-left corner stripes accent (sits above the title) -->
      <div class="relative">
        <span class="absolute -left-5 -top-9 hidden h-10 w-[3px] bg-white sm:block" />
        <span class="absolute -left-5 -top-9 hidden h-[3px] w-14 bg-white sm:block" />

        <nav v-if="breadcrumbs.length" class="mb-4 flex flex-wrap items-center gap-2 text-body-sm text-white/70">
          <NuxtLink to="/" class="transition-colors hover:text-secondary">
            {{ t({ ka: 'მთავარი', en: 'Home' }) }}
          </NuxtLink>
          <template v-for="(crumb, ci) in breadcrumbs" :key="ci">
            <AppIcon name="chevron-right" :size="14" class="text-white/40" />
            <NuxtLink
              v-if="crumb.to"
              :to="crumb.to"
              class="transition-colors hover:text-secondary"
              >{{ t(crumb.label) }}</NuxtLink
            >
            <span v-else class="text-white">{{ t(crumb.label) }}</span>
          </template>
        </nav>

        <h1 class="max-w-3xl text-balance text-[32px] !text-white sm:text-[42px] lg:text-h1">
          {{ t(title) }}
        </h1>
        <p v-if="subtitle" class="mt-4 max-w-2xl text-body-lg text-white/75">{{ t(subtitle) }}</p>
      </div>
    </UiContainer>
  </section>
</template>
