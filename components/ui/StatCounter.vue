<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { I18nText } from '~/composables/useLocale'

/** Animated stat: counts up the numeric portion of a value (e.g. "110", "500+", "24/7"). */
const props = withDefaults(
  defineProps<{ value: string; label: I18nText; tone?: 'dark' | 'light' | 'pink' }>(),
  { tone: 'dark' },
)

const { t } = useLocale()

const el = ref<HTMLElement | null>(null)
const display = ref(props.value)

const match = props.value.match(/^(\d+)(.*)$/)
const target = match ? parseInt(match[1], 10) : 0
const suffix = match ? match[2] : ''

onMounted(() => {
  if (!match || typeof IntersectionObserver === 'undefined') return
  display.value = `0${suffix}`
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      observer.disconnect()
      const duration = 1400
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        display.value = `${Math.round(target * eased)}${suffix}`
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    { threshold: 0.5 },
  )
  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div ref="el" class="flex flex-col">
    <span
      class="font-display text-[44px] font-bold leading-none tracking-tight sm:text-[56px]"
      :class="{ 'text-white': tone === 'light', 'text-primary': tone === 'dark', 'text-secondary': tone === 'pink' }"
    >
      {{ display }}
    </span>
    <span
      class="mt-2 text-body-sm font-medium"
      :class="tone === 'dark' ? 'text-muted' : 'text-white/65'"
    >
      {{ t(label) }}
    </span>
  </div>
</template>
