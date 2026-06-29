<script setup lang="ts">
import type { TeamMember } from '~/types'

defineProps<{ member: TeamMember }>()
const { t } = useLocale()
</script>

<template>
  <div class="group flex flex-col">
    <div class="relative overflow-hidden rounded-card bg-surface-muted">
      <div class="aspect-[283/250] w-full">
        <img
          :src="member.image"
          :alt="member.name"
          class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          loading="lazy"
        />
      </div>
      <div
        class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100"
      />
    </div>
    <h3 class="mt-4 text-h4 text-primary">{{ member.name }}</h3>
    <p class="mt-1 text-body-sm text-secondary">{{ t(member.position) }}</p>
  </div>
</template>
