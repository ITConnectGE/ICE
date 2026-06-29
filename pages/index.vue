<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { hero, intro, projectsTeaser, productsTeaser, projectSlides, newsTeaser, servicesBand } from '~/data/home'
import { productCategories } from '~/data/products'
import { news } from '~/data/news'
import { serviceSteps } from '~/data/services'
import { partnerLogos } from '~/data/site'

const { t } = useLocale()

// The 3 service features under the stats band (Consultation / Design / Installation).
const serviceFeatures = [
  { icon: 'consult', step: serviceSteps[0] },
  { icon: 'architecture', step: serviceSteps[1] },
  { icon: 'renovation', step: serviceSteps[3] },
]
useHead(() => ({ title: t({ ka: 'ICE — საინჟინრო გადაწყვეტილებები', en: 'ICE — Engineering solutions' }) }))

const featuredProducts = computed(() => productCategories.slice(0, 9))

// Hero slideshow — cross-fades between the three photos every few seconds.
const heroImages = [
  '/images/hero-factory.png',
  '/images/hero-subway.png',
  '/images/hero-corridor.png',
]
const heroIndex = ref(0)
let heroTimer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  heroTimer = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroImages.length
  }, 4500)
})
onBeforeUnmount(() => clearInterval(heroTimer))

// Projects carousel
const projectScroller = ref<HTMLElement | null>(null)
function scrollProjects(dir: number) {
  projectScroller.value?.scrollBy({ left: dir * 324, behavior: 'smooth' })
}

// Products carousel
const productCardScroller = ref<HTMLElement | null>(null)
function scrollProductCards(dir: number) {
  productCardScroller.value?.scrollBy({ left: dir * 324, behavior: 'smooth' })
}

// Partners / clients carousel
const partnerScroller = ref<HTMLElement | null>(null)
function scrollPartners(dir: number) {
  partnerScroller.value?.scrollBy({ left: dir * 420, behavior: 'smooth' })
}

// News carousel
const newsScroller = ref<HTMLElement | null>(null)
function scrollNews(dir: number) {
  newsScroller.value?.scrollBy({ left: dir * 370, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="relative isolate flex min-h-screen items-center overflow-hidden bg-primary">
      <img
        v-for="(img, i) in heroImages"
        :key="img"
        :src="asset(img)"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out motion-reduce:transition-none"
        :class="i === heroIndex ? 'opacity-100' : 'opacity-0'"
        :fetchpriority="i === 0 ? 'high' : 'low'"
      />
      <!-- navy overlay: solid on the left, fading toward the photo on the right -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/20" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-primary/70 via-transparent to-primary/30" />

      <UiContainer class="relative w-full pt-24">
        <div class="grid grid-cols-[auto_1fr] items-stretch gap-6 sm:gap-10">
          <!-- left rail: 01 ── 03 -->
          <div class="hidden flex-col items-center justify-between py-3 sm:flex">
            <span class="font-display text-body-sm font-semibold tracking-widest text-white/80">01</span>
            <span class="my-4 w-px flex-1 bg-white/25" />
            <span class="font-display text-body-sm font-semibold tracking-widest text-white/45">03</span>
          </div>

          <!-- content -->
          <div class="max-w-2xl py-6">
            <UiReveal>
              <span class="flex items-center gap-3 text-body-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                <span class="h-px w-8 bg-white/40 sm:hidden" />
                {{ t(hero.eyebrow) }}
              </span>
            </UiReveal>
            <UiReveal :delay="80">
              <h1 class="mt-6 max-w-[15ch] text-[40px] font-bold leading-[1.04] !text-white sm:text-[52px] lg:text-[62px]">
                {{ t(hero.title) }}
              </h1>
            </UiReveal>
            <UiReveal :delay="200">
              <div class="mt-10 flex flex-wrap items-center gap-6">
                <UiIceButton variant="solid" :to="hero.primaryCta.to">
                  {{ t(hero.primaryCta.label) }}
                </UiIceButton>

                <NuxtLink
                  :to="hero.secondaryCta.to"
                  class="group flex items-center gap-3.5 text-white"
                >
                  <span
                    class="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/5 transition-colors duration-300 group-hover:bg-white group-hover:text-primary"
                  >
                    <AppIcon name="play" :size="15" />
                  </span>
                  <span class="flex items-center gap-2.5 text-body-sm font-bold uppercase tracking-wide">
                    <AppIcon name="arrow-long" :size="22" :stroke="1.6" class="text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                    {{ t(hero.secondaryCta.label) }}
                  </span>
                </NuxtLink>
              </div>
            </UiReveal>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ============ INTRO ============ -->
    <section class="py-20 lg:py-28">
      <UiContainer>
        <div class="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div class="lg:col-span-5">
            <div class="relative">
              <!-- decorative bracket watermark (ICE logo motif) -->
              <img
                :src="asset('/images/rectangle.png')"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute -left-10 -top-12 hidden h-[300px] w-auto select-none object-contain mix-blend-multiply sm:block lg:-top-32 lg:h-[360px]"
              />

              <UiSectionHeading :title="intro.title" :eyebrow="intro.eyebrow" class="relative" />
            </div>
          </div>
          <div class="lg:col-span-7">
            <p class="text-body-lg text-ink-soft">{{ t(intro.text) }}</p>
            <UiArrowLink :to="intro.cta.to" class="mt-8">{{ t(intro.cta.label) }}</UiArrowLink>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ============ FEATURED PROJECTS (carousel) ============ -->
    <section class="bg-surface-muted py-16 lg:py-24">
      <UiContainer>
        <!-- carousel arrows -->
        <div class="mb-8 flex justify-end gap-5">
          <button
            type="button"
            aria-label="წინა"
            class="text-secondary transition-transform duration-300 hover:-translate-x-1"
            @click="scrollProjects(-1)"
          >
            <AppIcon name="arrow-left" :size="30" :stroke="1.6" />
          </button>
          <button
            type="button"
            aria-label="შემდეგი"
            class="text-secondary transition-transform duration-300 hover:translate-x-1"
            @click="scrollProjects(1)"
          >
            <AppIcon name="arrow-right" :size="30" :stroke="1.6" />
          </button>
        </div>

        <div class="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
          <!-- left column -->
          <div class="flex flex-col">
            <h2 class="text-[32px] font-bold leading-[1.1] text-primary sm:text-[40px]">
              {{ t(projectsTeaser.title) }}
            </h2>
            <p class="mt-5 text-body text-muted">{{ t(projectsTeaser.text) }}</p>
            <UiIceButton variant="pink" :to="projectsTeaser.cta.to" class="mt-8 self-start">
              {{ t(projectsTeaser.cta.label) }}
            </UiIceButton>
          </div>

          <!-- cards scroller -->
          <div
            ref="projectScroller"
            class="flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <template v-for="(slide, i) in projectSlides" :key="i">
              <!-- image card -->
              <NuxtLink
                v-if="slide.type === 'image'"
                :to="slide.to"
                class="group relative w-[280px] shrink-0 overflow-hidden rounded-card sm:w-[300px]"
              >
                <img
                  :src="asset(slide.image)"
                  :alt="t(slide.label!)"
                  class="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-x-4 bottom-4 rounded-md bg-primary/45 py-3 text-center backdrop-blur-sm">
                  <span class="text-h4 !text-white">{{ t(slide.label!) }}</span>
                </div>
              </NuxtLink>

              <!-- highlight card: image by default, navy text panel on hover -->
              <NuxtLink
                v-else
                :to="slide.to"
                class="group relative block h-[400px] w-[280px] shrink-0 overflow-hidden rounded-card sm:w-[300px]"
              >
                <img
                  :src="asset(slide.image)"
                  :alt="t(slide.title!)"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <!-- default state: gradient + title label -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                <div class="absolute inset-x-4 bottom-4 rounded-md bg-primary/45 py-3 text-center backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                  <span class="text-h4 !text-white">{{ t(slide.title!) }}</span>
                </div>

                <!-- hover state: navy panel + full text -->
                <div class="absolute inset-0 flex flex-col items-center justify-center bg-primary/90 px-7 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 class="text-[22px] font-bold !text-white">{{ t(slide.title!) }}</h3>
                  <p class="mt-4 text-body-sm leading-relaxed text-white/70">{{ t(slide.text!) }}</p>
                  <span class="mt-6 flex items-center gap-2.5 text-body-sm font-bold uppercase tracking-wide text-white">
                    <AppIcon name="arrow-long" :size="22" :stroke="1.6" class="text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                    {{ t({ ka: 'ვრცლად', en: 'Read more' }) }}
                  </span>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ============ PRODUCTS (dark, carousel) ============ -->
    <section class="relative overflow-hidden bg-primary py-16 lg:py-24">
      <div class="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <UiContainer class="relative">
        <!-- heading + arrows -->
        <div class="mb-9 flex items-center justify-between gap-6">
          <h2 class="text-[30px] font-bold leading-tight !text-white sm:text-[40px]">
            {{ t(productsTeaser.title) }}
          </h2>
          <div class="flex items-center gap-6 text-white/70">
            <button
              type="button"
              aria-label="წინა"
              class="transition-transform duration-300 hover:-translate-x-1"
              @click="scrollProductCards(-1)"
            >
              <AppIcon name="arrow-long" :size="30" :stroke="1.5" class="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="შემდეგი"
              class="transition-transform duration-300 hover:translate-x-1"
              @click="scrollProductCards(1)"
            >
              <AppIcon name="arrow-long" :size="30" :stroke="1.5" />
            </button>
          </div>
        </div>

        <!-- cards -->
        <div ref="productCardScroller" class="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-2">
          <NuxtLink
            v-for="c in featuredProducts"
            :key="c.slug"
            :to="`/products/${c.slug}`"
            class="group relative block h-[320px] w-[80%] shrink-0 overflow-hidden rounded-card sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <img
              :src="asset(c.image)"
              :alt="t(c.title)"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <!-- default: gradient + label -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
            <div class="absolute inset-x-4 bottom-4 rounded-md bg-primary/45 py-2.5 text-center backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
              <span class="text-h4 !text-white">{{ t(c.title) }}</span>
            </div>

            <!-- hover: navy + ვრცლად -->
            <div class="absolute inset-0 flex items-center justify-center bg-primary/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span class="flex items-center gap-2.5 text-body-sm font-bold uppercase tracking-wide text-white">
                <AppIcon name="arrow-long" :size="22" :stroke="1.6" class="text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                {{ t({ ka: 'ვრცლად', en: 'Read more' }) }}
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- centered button -->
        <div class="mt-10 flex justify-center">
          <UiIceButton variant="pink" :to="productsTeaser.cta.to">
            {{ t(productsTeaser.cta.label) }}
          </UiIceButton>
        </div>
      </UiContainer>
    </section>

    <!-- ============ CLIENTS / PARTNERS (logo carousel) ============ -->
    <section class="py-16 lg:py-20">
      <UiContainer>
        <div class="mb-10 flex items-end justify-between gap-6">
          <h2 class="text-[28px] font-bold leading-tight text-primary sm:text-[34px]">
            {{ t({ ka: 'ჩვენი დამკვეთები', en: 'Our clients' }) }}
          </h2>
          <div class="flex items-center gap-6 text-secondary">
            <button
              type="button"
              aria-label="წინა"
              class="transition-transform duration-300 hover:-translate-x-1"
              @click="scrollPartners(-1)"
            >
              <AppIcon name="arrow-long" :size="34" :stroke="1.5" class="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="შემდეგი"
              class="transition-transform duration-300 hover:translate-x-1"
              @click="scrollPartners(1)"
            >
              <AppIcon name="arrow-long" :size="34" :stroke="1.5" />
            </button>
          </div>
        </div>

        <div
          ref="partnerScroller"
          class="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          <div
            v-for="p in partnerLogos"
            :key="p.name"
            class="flex h-[150px] w-[260px] shrink-0 items-center justify-center rounded-card bg-surface-muted px-8 sm:w-[280px]"
          >
            <img :src="asset(p.logo)" :alt="p.name" class="max-h-20 w-auto max-w-[180px] object-contain" loading="lazy" />
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ============ OUR SERVICES (video banner + stats + features) ============ -->
    <section>
      <!-- video banner -->
      <div class="relative isolate h-[260px] overflow-hidden bg-primary sm:h-[320px]">
        <img
          :src="asset(servicesBand.image)"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 -z-10 bg-primary/45" />
        <div class="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-primary to-transparent" />

        <!-- top-left brand label -->
        <div class="absolute left-6 top-6 flex items-center gap-3 lg:left-[120px]">
          <img src="/images/logo.svg" alt="ICE" class="h-9 w-auto" />
          <span class="text-caption font-semibold uppercase tracking-[0.14em] text-white/85">
            {{ servicesBand.badge }}
          </span>
        </div>

        <!-- center play button -->
        <button
          type="button"
          aria-label="ვიდეოს ჩვენება"
          class="group absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-white/10 backdrop-blur transition-colors duration-300 hover:bg-white"
        >
          <AppIcon name="play" :size="20" class="ml-0.5 text-white transition-colors group-hover:text-primary" />
        </button>
      </div>

      <!-- navy stats band -->
      <div class="bg-primary pb-20 pt-4 lg:pb-28">
        <UiContainer>
          <div class="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div class="lg:col-span-7">
              <div class="flex items-center gap-5">
                <span class="hidden h-px w-16 bg-white/30 sm:block" />
                <h2 class="text-[30px] font-bold leading-tight !text-white sm:text-[40px]">
                  {{ t(servicesBand.title) }}
                </h2>
              </div>
              <p class="mt-6 max-w-xl text-body text-white/65 sm:ml-[84px]">{{ t(servicesBand.text) }}</p>
            </div>

            <div class="flex gap-12 lg:col-span-5 lg:justify-end">
              <UiStatCounter
                v-for="(s, i) in servicesBand.stats"
                :key="i"
                :value="s.value"
                :label="s.label"
                tone="pink"
              />
            </div>
          </div>
        </UiContainer>
      </div>

      <!-- features -->
      <div class="bg-surface-muted py-16 lg:py-20">
        <UiContainer>
          <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div v-for="(f, i) in serviceFeatures" :key="i" class="flex flex-col">
              <AppIcon :name="f.icon" :size="34" :stroke="1.6" class="text-primary" />
              <h3 class="mt-5 text-h4 text-primary">{{ t(f.step.title) }}</h3>
              <p class="mt-3 text-body-sm leading-relaxed text-muted">{{ t(f.step.description) }}</p>
            </div>
          </div>
        </UiContainer>
      </div>
    </section>

    <!-- ============ NEWS ============ -->
    <section class="py-20 lg:py-28">
      <UiContainer>
        <h2 class="text-center text-[32px] font-bold text-primary sm:text-[42px]">
          {{ t(newsTeaser.title) }}
        </h2>

        <div class="relative mt-12">
          <!-- side arrows -->
          <button
            type="button"
            aria-label="წინა"
            class="absolute -left-2 top-[120px] z-10 hidden text-secondary transition-transform duration-300 hover:-translate-x-1 lg:block lg:-left-12 xl:-left-16"
            @click="scrollNews(-1)"
          >
            <AppIcon name="arrow-long" :size="32" :stroke="1.5" class="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="შემდეგი"
            class="absolute -right-2 top-[120px] z-10 hidden text-secondary transition-transform duration-300 hover:translate-x-1 lg:block lg:-right-12 xl:-right-16"
            @click="scrollNews(1)"
          >
            <AppIcon name="arrow-long" :size="32" :stroke="1.5" />
          </button>

          <!-- cards -->
          <div
            ref="newsScroller"
            class="hide-scrollbar -mx-1 flex gap-7 overflow-x-auto scroll-smooth px-1 pb-8 pt-2"
          >
            <NuxtLink
              v-for="a in news"
              :key="a.slug"
              :to="`/news/${a.slug}`"
              class="group flex w-[300px] shrink-0 flex-col overflow-hidden rounded-card bg-white shadow-[0_16px_40px_-24px_rgba(4,30,66,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:w-[340px]"
            >
              <div class="relative aspect-[16/11] overflow-hidden">
                <img
                  :src="asset(a.image)"
                  :alt="t(a.title)"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span class="absolute left-4 top-4 rounded-md bg-primary/85 px-3 py-1.5 text-caption font-semibold text-white backdrop-blur">
                  {{ t(a.date) }}
                </span>
              </div>

              <div class="flex flex-1 flex-col p-6">
                <h3 class="line-clamp-2 text-h4 leading-snug text-primary transition-colors group-hover:text-secondary">
                  {{ t(a.title) }}
                </h3>
                <p class="mt-3 line-clamp-3 text-body-sm text-muted">{{ t(a.excerpt) }}</p>
                <span class="mt-auto pt-5">
                  <span class="link-underline text-primary">
                    <AppIcon name="arrow-long" :size="22" :stroke="1.6" class="text-secondary" />
                    {{ t({ ka: 'ვრცლად', en: 'Read more' }) }}
                  </span>
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-12 flex justify-center">
          <UiIceButton variant="pink" to="/news">{{ t(newsTeaser.cta.label) }}</UiIceButton>
        </div>
      </UiContainer>
    </section>

  </div>
</template>
