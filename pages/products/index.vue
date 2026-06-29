<script setup lang="ts">
import { productCategories } from '~/data/products'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'პროდუქცია — ICE', en: 'Products — ICE' }) }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'ჩვენი პროდუქცია', en: 'Our products' }"
      :image="photo('products-hero', 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'პროდუქცია', en: 'Products' } }]"
      :subtitle="{ ka: 'მსოფლიოს წამყვანი ბრენდების სრული პროდუქტთა ხაზი — ერთ სივრცეში.', en: 'A full product line from the world’s leading brands — in one place.' }"
    />

    <section class="py-20 lg:py-28">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'აირჩიე კატეგორია', en: 'Choose a category' }"
          :eyebrow="{ ka: '12 მიმართულება', en: '12 categories' }"
          class="mb-12 max-w-xl"
        >
          {{ t({ ka: 'ლიფტებიდან და ესკალატორებიდან დაწყებული ვენტილაციისა და ავტომატიზაციის სისტემებამდე.', en: 'From elevators and escalators to ventilation and automation systems.' }) }}
        </UiSectionHeading>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <UiReveal v-for="(c, i) in productCategories" :key="c.slug" :delay="(i % 3) * 80">
            <CardsProductCard :category="c" :to="`/products/${c.slug}`" />
          </UiReveal>
        </div>
      </UiContainer>
    </section>

  </div>
</template>
