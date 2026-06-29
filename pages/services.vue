<script setup lang="ts">
import { serviceSteps } from '~/data/services'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'სერვისები — ICE', en: 'Services — ICE' }) }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენი სერვისები', en: 'Our services' }"
      image="/images/services/services-main.png"
      :breadcrumbs="[{ label: { ka: 'სერვისები', en: 'Services' } }]"
    />

    <!-- Intro -->
    <section class="pt-20 lg:pt-28">
      <UiContainer>
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-[28px] font-bold leading-tight text-primary sm:text-[36px]">
            {{ t({ ka: 'სრული საინჟინრო მომსახურება', en: 'Full engineering services' }) }}
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-body text-muted">
            {{ t({ ka: 'ჩვენი გუნდი მომხმარებელს სთავაზობს სრულ საინჟინრო მომსახურებას როგორც გათბობა-კონდიცირების, ასევე ლიფტებისა და ესკალატორების მიმართულებით, რაც შემდეგ ეტაპებს მოიცავს:', en: 'Our team offers full engineering services in both HVAC and elevators/escalators, covering the following stages:' }) }}
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Steps timeline -->
    <section class="py-16 lg:py-24">
      <UiContainer>
        <div class="relative">
          <!-- center dashed line (desktop) -->
          <span
            class="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 border-l-2 border-dashed border-line lg:block"
            aria-hidden="true"
          />
          <div class="flex flex-col gap-14 lg:gap-8">
            <UiReveal v-for="step in serviceSteps" :key="step.step">
              <CardsServiceStep :item="step" />
            </UiReveal>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>
