<script setup lang="ts">
import { projects } from '~/data/projects'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'პროექტები — ICE', en: 'Projects — ICE' }) }))

const filters = [
  { ka: 'ყველა', en: 'All' },
  { ka: 'ლიფტები', en: 'Elevators' },
  { ka: 'ესკალატორები', en: 'Escalators' },
  { ka: 'სასტუმროები', en: 'Hotels' },
]
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენი პროექტები', en: 'Our projects' }"
      :image="photo('projects-hero', 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'პროექტები', en: 'Projects' } }]"
      :subtitle="{ ka: 'მასშტაბური და გრანდიოზული პროექტები, რომელზეც კომპანია წლების განმავლობაში მუშაობს.', en: 'Large-scale, ambitious projects the company has delivered over the years.' }"
    />

    <section class="py-20 lg:py-28">
      <UiContainer>
        <!-- filter chips -->
        <div class="mb-12 flex flex-wrap gap-3">
          <button
            v-for="(f, i) in filters"
            :key="i"
            type="button"
            class="rounded-full px-5 py-2.5 text-body-sm font-semibold transition-colors"
            :class="
              i === 0
                ? 'bg-primary text-white'
                : 'bg-surface-muted text-primary hover:bg-primary hover:text-white'
            "
          >
            {{ t(f) }}
          </button>
        </div>

        <div class="flex flex-col divide-y divide-line">
          <UiReveal v-for="(p, i) in projects" :key="p.slug" class="py-10 first:pt-0 last:pb-0">
            <CardsProjectCard :project="p" :index="i" />
          </UiReveal>
        </div>

        <!-- pagination -->
        <div class="mt-14 flex items-center justify-center gap-3">
          <button
            class="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="წინა"
          >
            <AppIcon name="arrow-left" :size="18" />
          </button>
          <button
            v-for="n in 3"
            :key="n"
            class="grid h-10 w-10 place-items-center rounded-full text-body-sm font-semibold transition-colors"
            :class="n === 1 ? 'bg-primary text-white' : 'text-muted hover:bg-surface-muted'"
          >
            {{ n }}
          </button>
          <button
            class="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="შემდეგი"
          >
            <AppIcon name="arrow-right" :size="18" />
          </button>
        </div>
      </UiContainer>
    </section>

  </div>
</template>
