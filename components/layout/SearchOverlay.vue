<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const open = defineModel<boolean>('open', { default: false })
const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

watch(open, async (v) => {
  if (v) {
    await nextTick()
    inputRef.value?.focus()
  } else {
    query.value = ''
  }
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[70] flex items-start justify-center bg-primary/80 px-5 pt-32 backdrop-blur-sm"
        @click.self="open = false"
        @keydown="onKey"
      >
        <div class="w-full max-w-2xl animate-fade-up">
          <label class="mb-3 block text-body-sm font-semibold uppercase tracking-widest text-white/60">
            მოძებნე საიტზე
          </label>
          <div class="flex items-center gap-3 border-b-2 border-white/30 pb-3 focus-within:border-secondary">
            <AppIcon name="search" :size="26" class="text-white/70" />
            <input
              ref="inputRef"
              v-model="query"
              type="text"
              placeholder="პროდუქცია, პროექტი, სიახლე..."
              class="w-full bg-transparent text-2xl text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="button"
              aria-label="დახურვა"
              class="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white/70 hover:bg-white/10"
              @click="open = false"
            >
              <AppIcon name="close" :size="22" />
            </button>
          </div>
          <p class="mt-4 text-body-sm text-white/50">დააჭირე Esc-ს დასახურად</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
