<script setup lang="ts">
import { cn } from '~/lib/utils'

defineProps<{ class?: string }>()
const model = defineModel<string>()
</script>

<template>
  <textarea
    v-model="model"
    :class="
      cn(
        'flex min-h-[120px] w-full resize-none rounded-md border border-line bg-white px-5 py-4 text-body text-ink shadow-sm transition-colors placeholder:text-muted/70 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20',
        $props.class,
      )
    "
  />
</template>
