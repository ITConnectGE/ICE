<script setup lang="ts">
import { contact, footerNav, footerSocials, ui } from '~/data/site'

const { t } = useLocale()

// Split the footer nav into two columns of four.
const colA = footerNav.slice(0, 4)
const colB = footerNav.slice(4, 8)
</script>

<template>
  <footer class="bg-primary text-white">
    <UiContainer class="py-14 lg:py-16">
      <div class="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-8">
        <!-- Logo + tagline -->
        <div>
          <AppLogo variant="light" />
          <p class="mt-6 max-w-[15rem] text-body-sm leading-relaxed text-white/55">
            {{ t(ui.footerAbout) }}
          </p>
        </div>

        <!-- Link column A -->
        <ul class="space-y-4 lg:pt-1">
          <li v-for="(item, i) in colA" :key="i">
            <NuxtLink
              :to="item.to"
              class="group flex items-center gap-3 text-body-sm text-white/85 transition-colors hover:text-white"
            >
              <AppIcon
                name="arrow-long"
                :size="20"
                :stroke="1.6"
                class="text-secondary transition-transform duration-300 group-hover:translate-x-1"
              />
              {{ t(item.label) }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Link column B -->
        <ul class="space-y-4 lg:pt-1">
          <li v-for="(item, i) in colB" :key="i">
            <NuxtLink
              :to="item.to"
              class="group flex items-center gap-3 text-body-sm text-white/85 transition-colors hover:text-white"
            >
              <AppIcon
                name="arrow-long"
                :size="20"
                :stroke="1.6"
                class="text-secondary transition-transform duration-300 group-hover:translate-x-1"
              />
              {{ t(item.label) }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Contact + socials -->
        <div class="lg:pt-1">
          <ul class="space-y-4 text-body-sm text-white/85">
            <li>
              <a :href="`tel:${contact.phoneHref}`" class="flex items-center gap-3 transition-colors hover:text-white">
                <AppIcon name="phone" :size="18" class="text-white/70" />
                {{ contact.phone }}
              </a>
            </li>
            <li class="flex items-center gap-3">
              <AppIcon name="location" :size="18" class="text-white/70" />
              {{ t(contact.address) }}
            </li>
            <li>
              <a :href="`mailto:${contact.email}`" class="flex items-center gap-3 transition-colors hover:text-white">
                <AppIcon name="send" :size="18" class="text-white/70" />
                {{ contact.email }}
              </a>
            </li>
          </ul>

          <div class="mt-7 flex items-center gap-5">
            <a
              v-for="s in footerSocials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              class="text-white/85 transition-colors hover:text-secondary"
            >
              <AppIcon :name="s.icon" :size="19" />
            </a>
          </div>
        </div>
      </div>

      <!-- divider + copyright -->
      <div class="mt-12 border-t border-white/10 pt-6">
        <p class="text-caption text-white/40">© {{ 2026 }} ICE. {{ t(ui.rights) }}</p>
      </div>
    </UiContainer>
  </footer>
</template>
