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
  <section class="relative isolate flex min-h-[340px] items-center overflow-hidden bg-primary pb-12 pt-28 sm:min-h-[380px] lg:min-h-[420px]">
    <img
      :src="asset(image)"
      :alt="title"
      class="absolute inset-0 -z-10 h-full w-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 -z-10 bg-navy-overlay" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

    <UiContainer class="relative">
      <div class="relative">
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

        <!-- L-shaped corner frame: the title sits inside the top-left corner -->
        <div class="relative w-fit pl-7 pt-7">
          <span
            class="pointer-events-none absolute left-0 top-0 h-[calc(100%+1rem)] w-[2px] bg-white/50"
            aria-hidden="true"
          />
          <span
            class="pointer-events-none absolute left-0 top-0 h-[2px] w-[calc(100%+1.5rem)] bg-white/50"
            aria-hidden="true"
          />
          <h1 class="max-w-3xl text-balance text-[32px] !text-white sm:text-[42px] lg:text-h1">
            {{ t(title) }}
          </h1>
        </div>
        <p v-if="subtitle" class="mt-4 max-w-2xl text-body-lg text-white/75">{{ t(subtitle) }}</p>
      </div>
    </UiContainer>
  </section>
</template>
