<script setup lang="ts">
import { cn } from '~/lib/utils'
withDefaults(defineProps<{ as?: string; class?: string }>(), { as: 'div' })
</script>

<template>
  <component :is="as" :class="cn('container-ice', $props.class)">
    <slot />
  </component>
</template>
