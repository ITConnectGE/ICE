<script setup lang="ts">
import { news } from '~/data/news'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'სიახლეები — ICE', en: 'News — ICE' }) }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'სიახლეები', en: 'News' }"
      :image="photo('news-hero', 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'სიახლეები', en: 'News' } }]"
    />

    <section class="py-20 lg:py-28">
      <UiContainer>
        <div class="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <UiReveal v-for="(a, i) in news" :key="a.slug" :delay="(i % 3) * 80">
            <CardsNewsCard :article="a" />
          </UiReveal>
        </div>

        <!-- pagination -->
        <div class="mt-16 flex items-center justify-center gap-6 text-body-sm font-semibold">
          <button
            v-for="n in 3"
            :key="n"
            class="relative pb-1 transition-colors"
            :class="n === 1 ? 'text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-secondary' : 'text-muted hover:text-primary'"
          >
            {{ n }}
          </button>
          <button class="text-secondary transition-transform duration-300 hover:translate-x-1" aria-label="შემდეგი">
            <AppIcon name="chevron-right" :size="20" :stroke="2" />
          </button>
        </div>
      </UiContainer>
    </section>
  </div>
</template>
