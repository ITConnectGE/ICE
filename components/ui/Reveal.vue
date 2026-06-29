<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

/** Fade/slide content in once it scrolls into view (IntersectionObserver, no deps). */
const props = withDefaults(defineProps<{ as?: string; delay?: number }>(), { as: 'div', delay: 0 })

const el = ref<HTMLElement | null>(null)
const shown = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shown.value = true
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="transition-all duration-700 ease-out motion-reduce:transition-none"
    :class="shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </component>
</template>
