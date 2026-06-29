<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { productCategories, products } from '~/data/products'
import { photo } from '~/data/images'

const route = useRoute()
const { t } = useLocale()
const slug = computed(() => String(route.params.category))
const category = computed(() => productCategories.find((c) => c.slug === slug.value))

if (!category.value) {
  throw createError({ statusCode: 404, statusMessage: 'კატეგორია ვერ მოიძებნა', fatal: true })
}

// Products in this category, or synthesized demo items so every category has content.
const items = computed(() => {
  const matched = products.filter((p) => p.categorySlug === slug.value)
  if (matched.length) return matched
  const cat = category.value!
  return Array.from({ length: 6 }).map((_, i) => ({
    slug: `${slug.value}-${i + 1}`,
    category: cat.title,
    categorySlug: slug.value,
    title: {
      ka: `${typeof cat.title === 'string' ? cat.title : cat.title.ka} — მოდელი ${i + 1}`,
      en: `${typeof cat.title === 'string' ? cat.title : cat.title.en} — Model ${i + 1}`,
    },
    subtitle: cat.title,
    description: '',
    image: photo(`${slug.value}-item-${i}`, 600, 500),
  }))
})

useHead(() => ({ title: `${t(category.value!.title)} — ICE` }))
</script>

<template>
  <div v-if="category">
    <LayoutPageHero
      :title="category.title"
      :image="photo(`${category.slug}-hero`, 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'პროდუქცია', en: 'Products' }, to: '/products' }, { label: category.title }]"
    />

    <section class="py-16 lg:py-24">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
          <ProductsCategorySidebar :active="category.slug" />

          <div>
            <div class="mb-8 flex items-center justify-between">
              <p class="text-body-sm text-muted">
                {{ t({ ka: 'ნაპოვნია', en: 'Found' }) }}
                <span class="font-semibold text-primary">{{ items.length }}</span>
                {{ t({ ka: 'პროდუქტი', en: 'products' }) }}
              </p>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <NuxtLink
                v-for="item in items"
                :key="item.slug"
                :to="`/products/item/${item.slug}`"
                class="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div class="aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                  <img
                    :src="asset(item.image)"
                    :alt="item.title"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div class="flex flex-1 flex-col p-5">
                  <span class="text-caption font-semibold uppercase tracking-wide text-secondary">
                    {{ t(item.subtitle) }}
                  </span>
                  <h3 class="mt-1.5 text-h4 leading-snug text-primary transition-colors group-hover:text-secondary">
                    {{ t(item.title) }}
                  </h3>
                  <span class="mt-auto pt-4 link-underline text-primary">
                    <AppIcon name="arrow-long" :size="20" :stroke="1.6" class="text-secondary" />
                    {{ t({ ka: 'დეტალურად', en: 'Details' }) }}
                  </span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

  </div>
</template>
