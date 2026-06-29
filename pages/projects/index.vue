<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'პროექტები — ICE', en: 'Projects — ICE' }) }))

const filters = [
  { ka: 'ყველა პროექტი', en: 'All projects' },
  { ka: 'მიმდინარე', en: 'Ongoing' },
  { ka: 'დასრულებული', en: 'Completed' },
]
const active = ref(0)
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენი პროექტები', en: 'Our projects' }"
      image="/images/projects/projects-main.png"
      :breadcrumbs="[{ label: { ka: 'პროექტები', en: 'Projects' } }]"
    />

    <section class="py-16 lg:py-24">
      <UiContainer>
        <!-- filter tabs -->
        <div class="mb-12 flex flex-wrap gap-8 border-b border-line">
          <button
            v-for="(f, i) in filters"
            :key="i"
            type="button"
            class="relative -mb-px pb-4 text-body font-semibold transition-colors"
            :class="
              active === i
                ? 'text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-secondary'
                : 'text-muted hover:text-primary'
            "
            @click="active = i"
          >
            {{ t(f) }}
          </button>
        </div>

        <!-- project list -->
        <div class="flex flex-col divide-y divide-line">
          <UiReveal v-for="p in projects" :key="p.slug" class="py-10 first:pt-0 last:pb-0">
            <CardsProjectCard :project="p" />
          </UiReveal>
        </div>
      </UiContainer>
    </section>
  </div>
</template>
