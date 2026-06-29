<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'light' | 'dark' }>(), { variant: 'light' })
</script>

<template>
  <NuxtLink to="/" class="inline-flex items-center" aria-label="ICE — მთავარი გვერდი">
    <img
      :src="asset(variant === 'light' ? '/images/logo.svg' : '/images/logo-dark.svg')"
      alt="ICE"
      class="h-11 w-auto transition-opacity duration-300"
      width="67"
      height="44"
    />
  </NuxtLink>
</template>
