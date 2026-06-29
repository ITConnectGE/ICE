<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{ project: Project }>()
const { t } = useLocale()
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="group grid items-center gap-7 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-14"
  >
    <!-- image -->
    <div class="overflow-hidden rounded-card">
      <div class="aspect-[420/260] w-full">
        <img
          :src="asset(project.image)"
          :alt="t(project.title)"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>

    <!-- content -->
    <div class="flex flex-col">
      <h3 class="text-balance text-[26px] font-bold leading-[1.15] text-primary transition-colors group-hover:text-secondary sm:text-[32px] lg:text-[38px]">
        {{ t(project.title) }}
      </h3>
      <p class="mt-4 line-clamp-4 text-body text-muted">{{ t(project.excerpt) }}</p>

      <!-- badges -->
      <div class="mt-6 flex flex-wrap gap-3">
        <span
          v-for="(tag, ti) in project.tags"
          :key="ti"
          class="inline-flex items-center gap-2 text-body-sm font-medium text-ink-soft"
        >
          <span class="grid h-7 w-7 shrink-0 place-items-center rounded bg-surface-muted text-primary">
            <AppIcon :name="tag.icon" :size="15" />
          </span>
          {{ t(tag.label) }}
        </span>
      </div>

      <!-- share link -->
      <span class="mt-7 link-underline text-primary">
        <AppIcon name="arrow-long" :size="24" :stroke="1.6" class="text-secondary" />
        {{ t({ ka: 'გაზიარება', en: 'Share' }) }}
      </span>
    </div>
  </NuxtLink>
</template>
