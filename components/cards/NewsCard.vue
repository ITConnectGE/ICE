<script setup lang="ts">
import type { NewsArticle } from '~/types'

defineProps<{ article: NewsArticle }>()
const { t } = useLocale()
</script>

<template>
  <NuxtLink
    :to="`/news/${article.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
  >
    <div class="relative aspect-[386/269] overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span
        class="absolute left-4 top-4 rounded-md bg-primary/90 px-3 py-1.5 text-caption font-semibold text-white backdrop-blur"
      >
        {{ t(article.date) }}
      </span>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="line-clamp-2 text-h4 leading-snug text-primary transition-colors group-hover:text-secondary">
        {{ t(article.title) }}
      </h3>
      <p class="mt-3 line-clamp-3 text-body-sm text-muted">{{ t(article.excerpt) }}</p>
      <span class="mt-auto pt-5">
        <span class="link-underline text-primary">
          <AppIcon name="arrow-long" :size="22" :stroke="1.6" class="text-secondary" />
          {{ t({ ka: 'ვრცლად', en: 'Read more' }) }}
        </span>
      </span>
    </div>
  </NuxtLink>
</template>
