<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/lib/utils'

/** Thin-arrow + uppercase label link — the "Label / Arrow 2" pattern used across Figma. */
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    label?: string
    align?: 'left' | 'right'
    tone?: 'primary' | 'secondary' | 'white'
    class?: string
  }>(),
  { align: 'left', tone: 'primary' },
)

const component = computed(() => (props.to ? 'NuxtLink' : props.href ? 'a' : 'span'))
const toneClass = computed(
  () =>
    ({
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
    })[props.tone],
)
</script>

<template>
  <component
    :is="component"
    :to="to"
    :href="href"
    :class="
      cn(
        'link-underline group/al',
        toneClass,
        align === 'right' ? 'flex-row-reverse' : '',
        props.class,
      )
    "
  >
    <AppIcon
      name="arrow-long"
      :size="24"
      :stroke="1.6"
      :class="tone === 'secondary' ? '' : 'text-secondary'"
    />
    <span><slot>{{ label }}</slot></span>
  </component>
</template>
