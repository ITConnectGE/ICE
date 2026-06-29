<script setup lang="ts">
import { cn } from '~/lib/utils'
import type { I18nText } from '~/composables/useLocale'

withDefaults(
  defineProps<{
    title: I18nText
    eyebrow?: I18nText
    align?: 'left' | 'center'
    tone?: 'dark' | 'light'
    class?: string
  }>(),
  { align: 'left', tone: 'dark' },
)

const { t } = useLocale()
</script>

<template>
  <div
    :class="
      cn('flex flex-col gap-3', align === 'center' ? 'items-center text-center' : '', $props.class)
    "
  >
    <span
      v-if="eyebrow"
      class="inline-flex items-center gap-2 text-body-sm font-semibold uppercase tracking-[0.14em] text-secondary"
    >
      <span class="h-px w-7 bg-secondary" />
      {{ t(eyebrow) }}
    </span>
    <h2
      class="text-balance text-[28px] leading-tight sm:text-[34px] lg:text-h2"
      :class="tone === 'light' ? '!text-white' : ''"
    >
      {{ t(title) }}
    </h2>
    <p
      v-if="$slots.default"
      class="max-w-2xl text-body"
      :class="tone === 'light' ? 'text-white/70' : 'text-muted'"
    >
      <slot />
    </p>
  </div>
</template>
