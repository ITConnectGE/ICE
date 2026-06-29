<script setup lang="ts">
import { aboutIntro, otisOffer, advantage, pillars, team } from '~/data/about'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'ჩვენ შესახებ — ICE', en: 'About us — ICE' }) }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენ შესახებ', en: 'About us' }"
      :image="photo('about-hero', 1600, 500)"
    />

    <!-- Intro: image left + text right -->
    <section class="py-16 lg:py-24">
      <UiContainer>
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <UiReveal class="overflow-hidden rounded-card shadow-card">
            <div class="aspect-[560/430] w-full">
              <img
                :src="asset(photo('about-engineers', 820, 660))"
                :alt="t({ ka: 'ICE-ის გუნდი', en: 'ICE team' })"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </UiReveal>
          <div>
            <UiSectionHeading
              :title="{ ka: 'გათბობა, კონდიცირება, ვენტილაცია', en: 'Heating, conditioning, ventilation' }"
            />
            <p class="mt-6 text-body-lg font-medium text-ink-soft">{{ t(aboutIntro.lead) }}</p>
            <div class="mt-4 space-y-4 text-body text-muted">
              <p v-for="(p, i) in aboutIntro.paragraphs" :key="i">{{ t(p) }}</p>
            </div>
            <UiIceButton variant="filled" to="/contacts" class="mt-8">
              {{ t({ ka: 'დაგვიკავშირდით', en: 'Contact us' }) }}
            </UiIceButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Elevators / escalators — big image + OTIS offer grid -->
    <section class="pb-16 lg:pb-24">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'ლიფტები, ესკალატორები, ტრაველატორი', en: 'Elevators, escalators, travolators' }"
          align="center"
          class="mx-auto"
        />
        <UiReveal class="mt-10 overflow-hidden rounded-card shadow-card lg:mt-12">
          <div class="aspect-[1180/470] w-full">
            <img
              :src="asset(photo('otis-escalator', 1180, 470))"
              alt="OTIS"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </UiReveal>

        <p class="mx-auto mt-10 max-w-3xl text-center text-body text-muted lg:mt-12">
          {{ t(otisOffer.title) }}. {{ t(otisOffer.intro) }}
        </p>

        <div class="mx-auto mt-8 grid max-w-4xl gap-x-12 gap-y-8 sm:grid-cols-2">
          <div v-for="(item, i) in otisOffer.items" :key="i" class="flex gap-3.5">
            <AppIcon name="check" :size="22" :stroke="2.6" class="mt-0.5 text-secondary" />
            <div>
              <p class="font-semibold text-primary">{{ t(item.title) }}</p>
              <p class="mt-1 text-body-sm text-muted">{{ t(item.text) }}</p>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Our advantage (navy band) -->
    <section class="bg-primary py-16 lg:py-20">
      <UiContainer>
        <UiSectionHeading
          :title="advantage.title"
          tone="light"
          align="center"
          class="mx-auto max-w-4xl"
        >
          {{ t(advantage.text) }}
        </UiSectionHeading>
      </UiContainer>
    </section>

    <!-- Mission / Vision / Values -->
    <section class="bg-surface-muted py-16 lg:py-24">
      <UiContainer>
        <div class="grid gap-10 md:grid-cols-3 lg:gap-14">
          <UiReveal v-for="(p, i) in pillars" :key="i" :delay="i * 100" class="flex flex-col">
            <span class="text-secondary">
              <AppIcon :name="p.icon" :size="34" :stroke="1.7" />
            </span>
            <h3 class="mt-4 text-h4 text-primary">{{ t(p.title) }}</h3>
            <p class="mt-3 text-body-sm text-muted">{{ t(p.text) }}</p>
          </UiReveal>
        </div>
      </UiContainer>
    </section>

    <!-- Team -->
    <section class="py-16 lg:py-24">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'ჩვენი გუნდი', en: 'Our team' }"
          align="center"
          class="mx-auto"
        >
          {{ t({ ka: 'ჩვენი გუნდის მიზანია ინოვაციების განვითარება და თანამედროვე ინჟინერიის სრულყოფილების მიღწევა.', en: 'Our team’s mission is to drive innovation and achieve excellence in modern engineering.' }) }}
        </UiSectionHeading>
        <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <UiReveal v-for="(m, i) in team" :key="m.name" :delay="(i % 4) * 80">
            <CardsTeamCard :member="m" />
          </UiReveal>
        </div>
      </UiContainer>
    </section>
  </div>
</template>
