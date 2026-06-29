<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { navItems, footerSocials } from '~/data/site'

const open = defineModel<boolean>('open', { default: false })
const route = useRoute()
const { t } = useLocale()

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}

function lockScroll(lock: boolean) {
  if (typeof document === 'undefined') return
  document.body.style.overflow = lock ? 'hidden' : ''
}

watch(open, (v) => lockScroll(v))
watch(
  () => route.fullPath,
  () => (open.value = false),
)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
watch(open, (v) => {
  if (typeof window === 'undefined') return
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  lockScroll(false)
  if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-[60]" @click.self="open = false">
        <!-- scrim: page stays visible underneath -->
        <div class="absolute inset-0 bg-primary/30" />

        <Transition
          enter-active-class="transition-transform duration-350 ease-out"
          leave-active-class="transition-transform duration-300 ease-in"
          enter-from-class="translate-x-full"
          leave-to-class="translate-x-full"
        >
          <aside
            v-if="open"
            class="absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white px-10 py-7 shadow-2xl"
          >
            <!-- decorative crosshair -->
            <span class="pointer-events-none absolute left-0 top-[92px] h-px w-[60%] bg-line" />
            <span class="pointer-events-none absolute left-[58px] top-0 h-[185px] w-px bg-line" />

            <!-- close -->
            <div class="flex justify-end">
              <button
                type="button"
                aria-label="დახურვა"
                class="grid h-11 w-11 place-items-center rounded-full text-primary transition-colors hover:bg-surface-muted"
                @click="open = false"
              >
                <AppIcon name="close" :size="26" />
              </button>
            </div>

            <!-- nav -->
            <nav class="flex flex-1 flex-col justify-center gap-2.5">
              <NuxtLink
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                class="w-fit text-[26px] font-bold uppercase leading-tight transition-colors"
                :class="isActive(item.to) ? 'text-secondary' : 'text-primary hover:text-secondary'"
              >
                {{ t(item.label) }}
              </NuxtLink>
            </nav>

            <!-- socials bottom-right -->
            <div class="mt-auto flex items-center justify-end gap-5">
              <a
                v-for="s in footerSocials"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.label"
                class="text-primary/70 transition-colors hover:text-secondary"
              >
                <AppIcon :name="s.icon" :size="18" />
              </a>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
