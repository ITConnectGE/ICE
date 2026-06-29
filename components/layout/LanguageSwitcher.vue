<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type { Locale } from '~/composables/useLocale'

withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'light' })

const { locale, setLocale } = useLocale()
const open = ref(false)
const root = ref<HTMLElement | null>(null)

const options: { code: Locale; label: string; short: string }[] = [
  { code: 'ka', label: 'ქართული', short: 'ქარ' },
  { code: 'en', label: 'English', short: 'EN' },
]

const current = computed(() => options.find((o) => o.code === locale.value) ?? options[0])

onClickOutside(root, () => (open.value = false))

function choose(code: Locale) {
  setLocale(code)
  open.value = false
}
</script>

<template>
  <div ref="root" class="relative" @keydown.esc="open = false">
    <button
      type="button"
      class="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-body-sm font-semibold transition-colors"
      :class="[
        tone === 'dark' ? 'text-primary hover:bg-surface-muted' : 'text-white hover:bg-white/10',
        open ? (tone === 'dark' ? 'bg-surface-muted' : 'bg-white/10') : '',
      ]"
      aria-haspopup="listbox"
      :aria-expanded="open"
      aria-label="ენის შეცვლა / Change language"
      @click="open = !open"
    >
      {{ current.short }}
      <AppIcon
        name="chevron-down"
        :size="14"
        :stroke="2.2"
        class="transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
      />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      leave-active-class="transition duration-100 ease-in"
      enter-from-class="opacity-0 -translate-y-1 scale-95"
      leave-to-class="opacity-0 -translate-y-1 scale-95"
    >
      <ul
        v-if="open"
        role="listbox"
        class="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[160px] overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-card"
      >
        <li v-for="opt in options" :key="opt.code" role="option" :aria-selected="opt.code === locale.value">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-body-sm font-medium transition-colors"
            :class="
              opt.code === locale.value
                ? 'bg-primary text-white'
                : 'text-ink-soft hover:bg-surface-muted'
            "
            @click="choose(opt.code)"
          >
            <span class="flex items-center gap-2.5">
              <span
                class="grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold"
                :class="opt.code === locale.value ? 'bg-white/20 text-white' : 'bg-surface-muted text-primary'"
              >
                {{ opt.code === 'en' ? 'EN' : 'ქა' }}
              </span>
              {{ opt.label }}
            </span>
            <AppIcon v-if="opt.code === locale.value" name="check" :size="16" :stroke="2.4" />
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>
