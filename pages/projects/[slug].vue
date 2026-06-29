<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '~/data/projects'
import { photo } from '~/data/images'

const route = useRoute()
const { t } = useLocale()
const project = computed(() => projects.find((p) => p.slug === route.params.slug))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'პროექტი ვერ მოიძებნა', fatal: true })
}

const related = computed(() => projects.filter((p) => p.slug !== route.params.slug).slice(0, 3))

useHead(() => ({ title: `${t(project.value!.title)} — ICE` }))
</script>

<template>
  <div v-if="project">
    <LayoutPageHero
      :title="project.title"
      :image="project.image"
      :breadcrumbs="[{ label: { ka: 'პროექტები', en: 'Projects' }, to: '/projects' }, { label: project.title }]"
    />

    <section class="py-20 lg:py-28">
      <UiContainer>
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-8">
            <div class="overflow-hidden rounded-card shadow-card">
              <div class="aspect-[16/9] w-full">
                <img :src="photo(`${project.slug}-main`, 1200, 675)" :alt="t(project.title)" class="h-full w-full object-cover" />
              </div>
            </div>
            <div class="prose mt-10 max-w-none">
              <h2 class="text-h3 text-primary">{{ t({ ka: 'პროექტის შესახებ', en: 'About the project' }) }}</h2>
              <p class="mt-4 text-body-lg text-ink-soft">{{ t(project.excerpt) }}</p>
              <p class="mt-4 text-body text-muted">
                {{ t({ ka: 'კომპანია ICE უზრუნველყოფს სრულ საინჟინრო ციკლს — დაგეგმვიდან მონტაჟსა და ექსპლუატაციის შემდგომ მომსახურებამდე. პროექტი ხორციელდება მსოფლიოს წამყვანი ბრენდების პროდუქციით, ქარხნული გარანტიითა და 24/7 ტექნიკური მხარდაჭერით.', en: 'ICE delivers the full engineering cycle — from planning to installation and post-operation maintenance. The project is carried out with products from the world’s leading brands, factory warranty and 24/7 technical support.' }) }}
              </p>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div v-for="n in 3" :key="n" class="overflow-hidden rounded-card">
                <div class="aspect-square w-full">
                  <img :src="photo(`${project.slug}-g${n}`, 400, 400)" alt="" class="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <!-- sidebar -->
          <aside class="lg:col-span-4">
            <div class="sticky top-28 rounded-card bg-surface-muted p-7">
              <h3 class="text-h4 text-primary">{{ t({ ka: 'პროექტის დეტალები', en: 'Project details' }) }}</h3>
              <dl class="mt-5 space-y-4">
                <div v-for="(tag, ti) in project.tags" :key="ti" class="flex items-start gap-3">
                  <span class="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-secondary shadow-sm">
                    <AppIcon :name="tag.icon" :size="18" />
                  </span>
                  <span class="text-body text-ink-soft">{{ t(tag.label) }}</span>
                </div>
              </dl>
              <UiIceButton variant="filled" to="/contacts" class="mt-7 w-full">
                {{ t({ ka: 'მსგავსი პროექტი გაქვთ?', en: 'Have a similar project?' }) }}
              </UiIceButton>
            </div>
          </aside>
        </div>
      </UiContainer>
    </section>

    <!-- related -->
    <section class="bg-surface-muted py-20 lg:py-24">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'სხვა პროექტები', en: 'Other projects' }"
          :eyebrow="{ ka: 'პორტფოლიო', en: 'Portfolio' }"
          class="mb-12"
        />
        <div class="grid gap-6 md:grid-cols-3">
          <CardsImageTile
            v-for="p in related"
            :key="p.slug"
            :image="p.image"
            :label="t(p.title)"
            :to="`/projects/${p.slug}`"
            ratio="406/420"
          />
        </div>
      </UiContainer>
    </section>

  </div>
</template>
