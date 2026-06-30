<script setup lang="ts">
import type { TeamMember } from '~/types'

defineProps<{ member: TeamMember }>()
const { t } = useLocale()
</script>

<template>
  <div
    class="group flex flex-col rounded-card border border-line bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
  >
    <div class="overflow-hidden rounded-md bg-surface-muted">
      <div class="aspect-[4/3] w-full">
        <img
          :src="asset(member.image)"
          :alt="member.name"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
    <div class="px-1.5 pb-1 pt-3">
      <h3 class="text-body font-bold text-primary">{{ member.name }}</h3>
      <p class="mt-1 text-body-sm text-muted">{{ t(member.position) }}</p>
    </div>
  </div>
</template>
