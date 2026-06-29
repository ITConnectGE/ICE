<script setup lang="ts">
import { serviceSteps } from '~/data/services'
import { features } from '~/data/about'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'სერვისები — ICE', en: 'Services — ICE' }) }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენი სერვისები', en: 'Our services' }"
      :image="photo('services-hero', 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'სერვისები', en: 'Services' } }]"
      :subtitle="{ ka: 'სრული საინჟინრო მომსახურება — კონცეფციიდან ექსპლუატაციის შემდგომ მომსახურებამდე.', en: 'Full engineering services — from concept to post-operation maintenance.' }"
    />

    <!-- Intro -->
    <section class="py-20 lg:pt-28 lg:pb-16">
      <UiContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UiSectionHeading
            :title="{ ka: 'როგორ ვმუშაობთ', en: 'How we work' }"
            :eyebrow="{ ka: 'პროცესი', en: 'Process' }"
            align="center"
            class="items-center"
          />
          <p class="mt-5 text-body-lg text-muted">
            {{ t({ ka: 'ჩვენი გუნდი მომხმარებელს სთავაზობს სრულ საინჟინრო მომსახურებას როგორც გათბობა-კონდიცირების, ასევე ლიფტებისა და ესკალატორების მიმართულებით, რაც შემდეგ ეტაპებს მოიცავს:', en: 'Our team offers full engineering services in both HVAC and elevators/escalators, covering the following stages:' }) }}
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Steps timeline -->
    <section class="pb-20 lg:pb-28">
      <UiContainer>
        <div class="relative">
          <!-- center vertical line (desktop) -->
          <span
            class="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line lg:block"
            aria-hidden="true"
          />
          <div class="flex flex-col gap-12 lg:gap-16">
            <UiReveal v-for="step in serviceSteps" :key="step.step">
              <CardsServiceStep :item="step" />
            </UiReveal>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Capabilities -->
    <section class="bg-surface-muted py-20 lg:py-28">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'რატომ ICE', en: 'Why ICE' }"
          :eyebrow="{ ka: 'უპირატესობები', en: 'Advantages' }"
          align="center"
          class="mx-auto items-center text-center"
        />
        <div class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <CardsFeatureCard v-for="f in features" :key="f.title" :feature="f" />
        </div>
      </UiContainer>
    </section>

  </div>
</template>
