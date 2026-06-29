<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center text-white">
    <div
      class="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
    />
    <p class="font-display text-[120px] font-bold leading-none text-secondary">
      {{ error?.statusCode || 404 }}
    </p>
    <h1 class="mt-2 text-h2 !text-white">გვერდი ვერ მოიძებნა</h1>
    <p class="mt-3 max-w-md text-white/70">
      სამწუხაროდ, მოთხოვნილი გვერდი არ არსებობს ან გადატანილია სხვა მისამართზე.
    </p>
    <UiIceButton variant="filled" class="mt-8" @click="clearError({ redirect: '/' })">
      მთავარ გვერდზე დაბრუნება
    </UiIceButton>
  </div>
</template>
