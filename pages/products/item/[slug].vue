<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products, productCategories } from '~/data/products'
import { photo } from '~/data/images'

const route = useRoute()
const { t } = useLocale()
const slug = computed(() => String(route.params.slug))

const fallbackDescription = {
  ka: 'მაღალი ხარისხის, ენერგოეფექტური და უსაფრთხო გადაწყვეტა, რომელიც შექმნილია თანამედროვე სივრცეების მოთხოვნების დასაკმაყოფილებლად. პროდუქტი მოყვება ქარხნულ გარანტიას, პროფესიონალურ მონტაჟსა და 24/7 ტექნიკურ მომსახურებას.',
  en: 'A high-quality, energy-efficient and safe solution designed to meet the demands of modern spaces. The product comes with a factory warranty, professional installation and 24/7 technical support.',
}

const product = computed(() => {
  const found = products.find((p) => p.slug === slug.value)
  if (found) return found
  // Synthesized item coming from a category listing (e.g. "elevators-2")
  const catSlug = slug.value.replace(/-\d+$/, '')
  const cat = productCategories.find((c) => c.slug === catSlug)
  const suffix = slug.value.split('-').pop()
  const catKa = cat ? (typeof cat.title === 'string' ? cat.title : cat.title.ka) : 'პროდუქცია'
  const catEn = cat ? (typeof cat.title === 'string' ? cat.title : cat.title.en) : 'Products'
  return {
    slug: slug.value,
    category: cat?.title ?? { ka: 'პროდუქცია', en: 'Products' },
    categorySlug: cat?.slug ?? 'escalators',
    title: { ka: `${catKa} — ${suffix}`, en: `${catEn} — ${suffix}` },
    subtitle: cat?.title ?? { ka: 'პროდუქცია', en: 'Products' },
    description: fallbackDescription,
    image: photo(`${slug.value}-detail`, 813, 482),
  }
})

const related = computed(() => products.filter((p) => p.slug !== product.value.slug).slice(0, 3))

useHead(() => ({ title: `${t(product.value.title)} — ICE` }))
</script>

<template>
  <div>
    <LayoutPageHero
      :title="product.title"
      :image="photo(`${product.categorySlug}-hero`, 1600, 500)"
      :breadcrumbs="[
        { label: { ka: 'პროდუქცია', en: 'Products' }, to: '/products' },
        { label: product.category, to: `/products/${product.categorySlug}` },
        { label: product.title },
      ]"
    />

    <section class="py-16 lg:py-24">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
          <ProductsCategorySidebar :active="product.categorySlug" />

          <div>
            <div class="grid gap-8 lg:grid-cols-2">
              <div class="overflow-hidden rounded-card shadow-card">
                <div class="aspect-[813/620] w-full">
                  <img :src="product.image" :alt="t(product.title)" class="h-full w-full object-cover" />
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-body-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                  {{ t(product.subtitle) }}
                </span>
                <h2 class="mt-3 text-balance text-[26px] font-bold leading-tight text-primary lg:text-[32px]">
                  {{ t(product.title) }}
                </h2>
                <p class="mt-5 text-body text-muted">{{ t(product.description) }}</p>

                <ul class="mt-6 space-y-3">
                  <li
                    v-for="(feat, fi) in [
                      { ka: 'ქარხნული გარანტია', en: 'Factory warranty' },
                      { ka: 'პროფესიონალური მონტაჟი', en: 'Professional installation' },
                      { ka: '24/7 ტექნიკური მომსახურება', en: '24/7 technical support' },
                    ]"
                    :key="fi"
                    class="flex items-center gap-3 text-body text-ink-soft"
                  >
                    <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
                      <AppIcon name="check" :size="14" :stroke="2.4" />
                    </span>
                    {{ t(feat) }}
                  </li>
                </ul>

                <div class="mt-8 flex flex-wrap gap-3">
                  <UiIceButton variant="filled" to="/contacts">{{ t({ ka: 'შეთავაზების მიღება', en: 'Get a quote' }) }}</UiIceButton>
                  <UiIceButton variant="outline" to="/products">{{ t({ ka: 'სხვა პროდუქცია', en: 'Other products' }) }}</UiIceButton>
                </div>
              </div>
            </div>

            <!-- spec table -->
            <div class="mt-12 overflow-hidden rounded-card border border-line">
              <h3 class="bg-surface-muted px-6 py-4 text-h4 text-primary">
                {{ t({ ka: 'ტექნიკური მახასიათებლები', en: 'Technical specifications' }) }}
              </h3>
              <table class="w-full text-body-sm">
                <tbody>
                  <tr
                    v-for="(row, i) in [
                      { label: { ka: 'ბრენდი', en: 'Brand' }, value: { ka: 'OTIS / DELFAR', en: 'OTIS / DELFAR' } },
                      { label: { ka: 'წარმოშობის ქვეყანა', en: 'Country of origin' }, value: { ka: 'აშშ / ჩინეთი', en: 'USA / China' } },
                      { label: { ka: 'სიჩქარე', en: 'Speed' }, value: { ka: '0.5 – 3 მ/წ', en: '0.5 – 3 m/s' } },
                      { label: { ka: 'გარანტია', en: 'Warranty' }, value: { ka: '24 თვე', en: '24 months' } },
                      { label: { ka: 'მონტაჟი', en: 'Installation' }, value: { ka: 'სრული საინჟინრო ციკლი', en: 'Full engineering cycle' } },
                    ]"
                    :key="i"
                    :class="i % 2 ? 'bg-white' : 'bg-surface-muted/40'"
                  >
                    <td class="w-1/2 px-6 py-3.5 font-medium text-ink-soft">{{ t(row.label) }}</td>
                    <td class="px-6 py-3.5 text-muted">{{ t(row.value) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <section v-if="related.length" class="bg-surface-muted py-20 lg:py-24">
      <UiContainer>
        <UiSectionHeading
          :title="{ ka: 'მსგავსი პროდუქცია', en: 'Related products' }"
          :eyebrow="{ ka: 'შესაძლოა დაგაინტერესოთ', en: 'You may also like' }"
          class="mb-12"
        />
        <div class="grid gap-6 md:grid-cols-3">
          <NuxtLink
            v-for="p in related"
            :key="p.slug"
            :to="`/products/item/${p.slug}`"
            class="group overflow-hidden rounded-card bg-white shadow-card ring-1 ring-line transition-all hover:-translate-y-1"
          >
            <div class="aspect-[4/3] w-full overflow-hidden">
              <img :src="p.image" :alt="t(p.title)" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div class="p-5">
              <h3 class="text-h4 text-primary group-hover:text-secondary">{{ t(p.title) }}</h3>
            </div>
          </NuxtLink>
        </div>
      </UiContainer>
    </section>

  </div>
</template>
