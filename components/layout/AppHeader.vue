<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const { t } = useLocale()
const scrolled = ref(false)
const menuOpen = ref(false)
const searchOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 py-2.5 shadow-[0_8px_30px_-18px_rgba(4,30,66,0.4)] backdrop-blur' : 'py-4'"
  >
    <!-- decorative crossing lines (visible over the dark hero, hidden once scrolled) -->
    <UiContainer class="relative flex items-center justify-between gap-4">
      <AppLogo :variant="scrolled ? 'dark' : 'light'" />

      <!-- Actions (full nav lives in the slide-in menu, matching the Figma design) -->
      <div class="flex items-center gap-1 sm:gap-2">
        <NuxtLink
          to="/contacts"
          class="hidden items-center gap-2 px-3 text-body-sm font-medium transition-colors sm:inline-flex"
          :class="scrolled ? 'text-ink-soft hover:text-secondary' : 'text-white/90 hover:text-white'"
        >
          <img :src="asset('/images/phone_vector.png')" alt="" class="h-4 w-4 object-contain" />
          {{ t({ ka: 'კონტაქტი', en: 'Contact' }) }}
        </NuxtLink>

        <button
          type="button"
          :aria-label="t({ ka: 'ძიება', en: 'Search' })"
          class="grid h-10 w-10 place-items-center rounded-full transition-colors"
          :class="scrolled ? 'text-primary hover:bg-surface-muted' : 'text-white hover:bg-white/10'"
          @click="searchOpen = true"
        >
          <AppIcon name="search" :size="20" />
        </button>

        <span class="hidden h-5 w-px sm:block" :class="scrolled ? 'bg-line' : 'bg-white/30'" />

        <LayoutLanguageSwitcher :tone="scrolled ? 'dark' : 'light'" class="hidden sm:block" />

        <span class="hidden h-5 w-px sm:block" :class="scrolled ? 'bg-line' : 'bg-white/30'" />

        <button
          type="button"
          aria-label="მენიუ"
          class="grid h-10 w-10 place-items-center rounded-full transition-colors"
          :class="scrolled ? 'text-primary hover:bg-surface-muted' : 'text-white hover:bg-white/10'"
          @click="menuOpen = true"
        >
          <AppIcon name="menu" :size="22" />
        </button>
      </div>
    </UiContainer>

    <LayoutMobileMenu v-model:open="menuOpen" />
    <LayoutSearchOverlay v-model:open="searchOpen" />
  </header>
</template>
