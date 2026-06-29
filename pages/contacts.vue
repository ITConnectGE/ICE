<script setup lang="ts">
import { reactive, ref } from 'vue'
import { contact } from '~/data/site'
import { photo } from '~/data/images'

const { t } = useLocale()
useHead(() => ({ title: t({ ka: 'კონტაქტი — ICE', en: 'Contact — ICE' }) }))

const form = reactive({ name: '', lastName: '', message: '' })
const sent = ref(false)
const sending = ref(false)

function submit() {
  sending.value = true
  // Simulated submit — wire to a real endpoint in production.
  setTimeout(() => {
    sending.value = false
    sent.value = true
    form.name = ''
    form.lastName = ''
    form.message = ''
    setTimeout(() => (sent.value = false), 5000)
  }, 700)
}
</script>

<template>
  <div>
    <LayoutPageHero
      :title="{ ka: 'კონტაქტი', en: 'Contact' }"
      :image="photo('contacts-hero', 1600, 500)"
      :breadcrumbs="[{ label: { ka: 'კონტაქტი', en: 'Contact' } }]"
    />

    <!-- ============ MAP + INFO ============ -->
    <section class="py-20 lg:py-28">
      <UiContainer>
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <!-- map -->
          <div class="overflow-hidden rounded-card shadow-card ring-1 ring-line">
            <iframe
              title="ICE მდებარეობა"
              src="https://www.openstreetmap.org/export/embed.html?bbox=43.6%2C41.2%2C45.6%2C42.2&layer=mapnik&marker=41.715%2C44.80"
              class="h-[420px] w-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>

          <!-- info -->
          <div>
            <h2 class="text-[34px] font-bold leading-[1.1] text-primary sm:text-[42px]">
              {{ t({ ka: 'საკონტაქტო', en: 'Contact' }) }}<br />{{ t({ ka: 'ინფორმაცია', en: 'information' }) }}
            </h2>
            <p class="mt-5 max-w-md text-body text-muted">
              {{ t({ ka: 'ჩვენი გუნდი მუდმივად მზად არის დაგეხმაროთ და გაგიწიოთ კონსულტაცია ნებისმიერი სირთულის საინჟინრო გადაწყვეტის მიმართულებით.', en: 'Our team is always ready to help and advise you on engineering solutions of any complexity.' }) }}
            </p>

            <div class="mt-10 space-y-8">
              <!-- address -->
              <div class="flex gap-4">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
                  <AppIcon name="pin" :size="20" />
                </span>
                <div>
                  <p class="text-body font-bold text-primary">{{ t({ ka: 'მისამართი', en: 'Address' }) }}</p>
                  <p class="mt-1 text-body-sm text-muted">{{ t(contact.address) }}</p>
                </div>
              </div>

              <!-- contact -->
              <div class="flex gap-4">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
                  <AppIcon name="phone" :size="20" />
                </span>
                <div>
                  <p class="text-body font-bold text-primary">{{ t({ ka: 'დაგვიკავშირდით', en: 'Get in touch' }) }}</p>
                  <a :href="`tel:${contact.phoneHref}`" class="mt-1 block text-body-sm text-muted transition-colors hover:text-secondary">
                    {{ contact.phone }}
                  </a>
                  <a :href="`mailto:${contact.email}`" class="block text-body-sm text-muted transition-colors hover:text-secondary">
                    {{ contact.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ============ FORM (navy) ============ -->
    <section class="bg-primary py-20 lg:py-24">
      <UiContainer>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-[30px] font-bold !text-white sm:text-[38px]">
            {{ t({ ka: 'გაგვიზიარეთ მოსაზრება', en: 'Share your thoughts' }) }}
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-body text-white/65">
            {{ t({ ka: 'გაქვთ იდეები ან წინადადებები? გაგვიზიარეთ თქვენი მოსაზრებები და ერთად შევქმნათ ინოვაციური საინჟინრო გადაწყვეტილებები!', en: 'Have ideas or suggestions? Share your thoughts and let’s create innovative engineering solutions together!' }) }}
          </p>
        </div>

        <form class="mx-auto mt-10 max-w-2xl space-y-4" @submit.prevent="submit">
          <input
            v-model="form.name"
            required
            :placeholder="t({ ka: 'სახელი', en: 'First name' })"
            class="h-[56px] w-full rounded-md border border-white/15 bg-white/5 px-5 text-body text-white placeholder:text-white/40 transition-colors focus:border-secondary focus:outline-none"
          />
          <input
            v-model="form.lastName"
            required
            :placeholder="t({ ka: 'გვარი', en: 'Last name' })"
            class="h-[56px] w-full rounded-md border border-white/15 bg-white/5 px-5 text-body text-white placeholder:text-white/40 transition-colors focus:border-secondary focus:outline-none"
          />
          <textarea
            v-model="form.message"
            required
            rows="5"
            :placeholder="t({ ka: 'დაწერეთ შეტყობინება', en: 'Write a message' })"
            class="w-full rounded-md border border-white/15 bg-white/5 px-5 py-4 text-body text-white placeholder:text-white/40 transition-colors focus:border-secondary focus:outline-none"
          />

          <div class="flex flex-col items-start justify-between gap-5 pt-2 sm:flex-row sm:items-center">
            <!-- decorative reCAPTCHA -->
            <div class="flex items-center gap-3 rounded-md border border-white/15 bg-white px-4 py-3.5">
              <span class="h-6 w-6 rounded-sm border-2 border-line" />
              <span class="text-body-sm text-ink/80">{{ t({ ka: 'მე არ ვარ რობოტი', en: "I'm not a robot" }) }}</span>
              <span class="ml-4 text-[10px] leading-tight text-muted">reCAPTCHA</span>
            </div>

            <UiIceButton variant="pink" type="submit" :class="sending ? 'opacity-70' : ''">
              {{ sending ? t({ ka: 'იგზავნება...', en: 'Sending...' }) : t({ ka: 'გაგზავნა', en: 'Send' }) }}
            </UiIceButton>
          </div>

          <Transition enter-active-class="transition duration-300" enter-from-class="opacity-0 -translate-y-1">
            <p
              v-if="sent"
              class="flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-body-sm font-medium text-white"
            >
              <AppIcon name="check" :size="18" :stroke="2.4" class="text-secondary" />
              {{ t({ ka: 'გმადლობთ! თქვენი შეტყობინება გაიგზავნა.', en: 'Thank you! Your message has been sent.' }) }}
            </p>
          </Transition>
        </form>
      </UiContainer>
    </section>
  </div>
</template>
