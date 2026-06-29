<script setup lang="ts">
import { cn } from '~/lib/utils'

defineProps<{ class?: string }>()
const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    :class="
      cn(
        'flex h-[55px] w-full rounded-md border border-line bg-white px-5 text-body text-ink shadow-sm transition-colors placeholder:text-muted/70 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20',
        $props.class,
      )
    "
  />
</template>
