<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const { locale } = useLocale()
useHead(() => ({ htmlAttrs: { lang: locale.value } }))

const showTop = ref(false)
function onScroll() {
  showTop.value = window.scrollY > 700
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white">
    <LayoutAppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />

    <Transition
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-200"
      enter-from-class="opacity-0 translate-y-3"
      leave-to-class="opacity-0 translate-y-3"
    >
      <button
        v-if="showTop"
        type="button"
        aria-label="ზემოთ"
        class="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-secondary text-white shadow-btn transition-transform hover:scale-110"
        @click="scrollTop"
      >
        <AppIcon name="chevron-down" :size="22" :stroke="2" class="rotate-180" />
      </button>
    </Transition>
  </div>
</template>
