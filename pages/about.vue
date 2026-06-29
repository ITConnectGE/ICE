<script setup lang="ts">
import { aboutIntro, features, stats, otisOffer, team } from '~/data/about'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'ჩვენ შესახებ — ICE', en: 'About us — ICE' }) }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენ შესახებ', en: 'About us' }"
      :image="photo('about-hero', 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'ჩვენ შესახებ', en: 'About us' } }]"
    />

    <!-- Intro: image + text -->
    <section class="py-20 lg:py-28">
      <UiContainer>
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <UiReveal class="overflow-hidden rounded-card shadow-card">
            <div class="aspect-[583/477] w-full">
              <img
                :src="photo('about-engineers', 800, 660)"
                :alt="t({ ka: 'ICE-ის გუნდი', en: 'ICE team' })"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </UiReveal>
          <div>
            <UiSectionHeading
              :title="aboutIntro.title"
              :eyebrow="{ ka: '13 წელი ბაზარზე', en: '13 years on the market' }"
            />
            <p class="mt-6 text-body-lg font-medium text-ink-soft">{{ t(aboutIntro.lead) }}</p>
            <div class="mt-4 space-y-4 text-body text-muted">
              <p v-for="(p, i) in aboutIntro.paragraphs" :key="i">{{ t(p) }}</p>
            </div>
            <UiIceButton variant="solid" to="/services" class="mt-8">
              {{ t({ ka: 'ჩვენი სერვისები', en: 'Our services' }) }}
            </UiIceButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Stats band -->
    <section class="bg-primary py-16 lg:py-20">
      <UiContainer>
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <UiStatCounter v-for="(s, i) in stats" :key="i" :value="s.value" :label="s.label" tone="light" />
        </div>
      </UiContainer>
    </section>

    <!-- What we do / features -->
    <section class="py-20 lg:py-28">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'რას ვსაქმიანობთ?', en: 'What we do' }"
          :eyebrow="{ ka: 'მიმართულებები', en: 'Directions' }"
          align="center"
          class="mx-auto items-center text-center"
        >
          {{ t({ ka: 'სრული საინჟინრო მომსახურება ერთ სივრცეში — დაგეგმვიდან ექსპლუატაციის შემდგომ მომსახურებამდე.', en: 'Full engineering services in one place — from planning to post-operation maintenance.' }) }}
        </UiSectionHeading>
        <div class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <CardsFeatureCard v-for="(f, i) in features" :key="i" :feature="f" />
        </div>
      </UiContainer>
    </section>

    <!-- OTIS distributor band -->
    <section class="bg-surface-muted py-20 lg:py-28">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <UiReveal class="order-2 overflow-hidden rounded-card shadow-card lg:order-1">
            <div class="aspect-[600/520] w-full">
              <img
                :src="photo('otis-escalator', 820, 720)"
                alt="OTIS"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </UiReveal>
          <div class="order-1 lg:order-2">
            <UiSectionHeading
              :title="otisOffer.title"
              :eyebrow="{ ka: 'ოფიციალური დისტრიბუტორი', en: 'Official distributor' }"
            />
            <p class="mt-5 text-body-lg font-medium text-ink-soft">{{ t(otisOffer.intro) }}</p>
            <ul class="mt-6 space-y-4">
              <li v-for="(item, i) in otisOffer.items" :key="i" class="flex gap-4">
                <span
                  class="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-white"
                >
                  <AppIcon name="check" :size="16" :stroke="2.4" />
                </span>
                <div>
                  <p class="font-semibold text-primary">{{ t(item.title) }}</p>
                  <p class="text-body-sm text-muted">{{ t(item.text) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Team -->
    <section class="py-20 lg:py-28">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'ჩვენი გუნდი', en: 'Our team' }"
          :eyebrow="{ ka: 'პროფესიონალები', en: 'Professionals' }"
          align="center"
          class="mx-auto items-center text-center"
        >
          {{ t({ ka: 'ჩვენი გუნდის მიზანია ინოვაციების განვითარება და თანამედროვე ინჟინერიის სრულყოფილების მიღწევა.', en: 'Our team’s mission is to drive innovation and achieve excellence in modern engineering.' }) }}
        </UiSectionHeading>
        <div class="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <UiReveal v-for="(m, i) in team" :key="m.name" :delay="(i % 4) * 80">
            <CardsTeamCard :member="m" />
          </UiReveal>
        </div>
      </UiContainer>
    </section>

  </div>
</template>
