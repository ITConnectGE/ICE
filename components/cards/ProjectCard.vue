<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{ project: Project; index?: number }>()
const { t } = useLocale()
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="group grid items-center gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12"
  >
    <div class="relative overflow-hidden rounded-card">
      <div class="aspect-[738/420] w-full">
        <img
          :src="project.image"
          :alt="project.title"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div class="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
      <span
        v-if="index !== undefined"
        class="absolute left-5 top-5 font-display text-2xl font-bold text-white drop-shadow"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>

    <div class="flex flex-col">
      <div class="flex flex-wrap gap-2.5">
        <span
          v-for="(tag, ti) in project.tags"
          :key="ti"
          class="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-3 py-1.5 text-caption font-semibold text-primary"
        >
          <AppIcon :name="tag.icon" :size="14" class="text-secondary" />
          {{ t(tag.label) }}
        </span>
      </div>
      <h3 class="mt-4 text-balance text-[24px] font-bold leading-tight text-primary transition-colors group-hover:text-secondary lg:text-[28px]">
        {{ t(project.title) }}
      </h3>
      <p class="mt-3 line-clamp-4 text-body text-muted">{{ t(project.excerpt) }}</p>
      <span class="mt-6 link-underline text-primary">
        <AppIcon name="arrow-long" :size="24" :stroke="1.6" class="text-secondary" />
        {{ t({ ka: 'პროექტის ნახვა', en: 'View project' }) }}
      </span>
    </div>
  </NuxtLink>
</template>
