<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { news } from '~/data/news'

const route = useRoute()
const { t } = useLocale()
const article = computed(() => news.find((a) => a.slug === route.params.slug))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'სიახლე ვერ მოიძებნა', fatal: true })
}

const related = computed(() => news.filter((a) => a.slug !== route.params.slug).slice(0, 5))

const relatedScroller = ref<HTMLElement | null>(null)
function scrollRelated(dir: number) {
  relatedScroller.value?.scrollBy({ left: dir * 370, behavior: 'smooth' })
}

useHead(() => ({ title: `${t(article.value!.title)} — ICE` }))
</script>

<template>
  <article v-if="article">
    <LayoutPageHero
      :title="{ ka: 'სიახლე', en: 'News' }"
      image="/images/projects/projects-main.png"
      :breadcrumbs="[{ label: { ka: 'სიახლეები', en: 'News' }, to: '/news' }, { label: article.title }]"
    />

    <!-- ============ ARTICLE ============ -->
    <section class="py-16 lg:py-24">
      <UiContainer>
        <h1 class="text-center text-[28px] font-bold leading-tight text-primary sm:text-[40px]">
          {{ t(article.title) }}
        </h1>

        <!-- lead image -->
        <div class="relative mt-10 overflow-hidden rounded-card shadow-card">
          <div class="aspect-[16/8] w-full">
            <img :src="asset(article.image)" :alt="t(article.title)" class="h-full w-full object-cover" />
          </div>
          <span class="absolute bottom-5 left-5 rounded-md bg-primary/85 px-3.5 py-1.5 text-caption font-semibold text-white backdrop-blur">
            {{ t(article.date) }}
          </span>
        </div>

        <!-- body -->
        <div class="mt-10 space-y-6 text-body leading-relaxed text-ink-soft">
          <p v-for="(p, i) in article.body" :key="i">{{ t(p) }}</p>
        </div>
      </UiContainer>
    </section>

    <!-- ============ OTHER NEWS ============ -->
    <section class="pb-20 lg:pb-28">
      <UiContainer>
        <div class="mb-8 flex items-end justify-between gap-6">
          <h2 class="text-[26px] font-bold text-primary sm:text-[32px]">
            {{ t({ ka: 'სხვა სიახლეები', en: 'Other news' }) }}
          </h2>
          <div class="flex items-center gap-6 text-secondary">
            <button
              type="button"
              aria-label="წინა"
              class="transition-transform duration-300 hover:-translate-x-1"
              @click="scrollRelated(-1)"
            >
              <AppIcon name="arrow-long" :size="30" :stroke="1.5" class="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="შემდეგი"
              class="transition-transform duration-300 hover:translate-x-1"
              @click="scrollRelated(1)"
            >
              <AppIcon name="arrow-long" :size="30" :stroke="1.5" />
            </button>
          </div>
        </div>

        <div ref="relatedScroller" class="hide-scrollbar flex gap-7 overflow-x-auto scroll-smooth pb-2">
          <div v-for="a in related" :key="a.slug" class="w-[300px] shrink-0 sm:w-[340px]">
            <CardsNewsCard :article="a" />
          </div>
        </div>
      </UiContainer>
    </section>
  </article>
</template>
