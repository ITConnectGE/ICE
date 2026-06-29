<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/utils'

/**
 * The signature ICE button: a square pink "arrow box" fused to a label panel.
 * Mirrors the Figma hero button — pink arrow box + navy (#041E42) label panel.
 */
const button = cva(
  'group/btn relative inline-flex h-[50px] select-none items-stretch overflow-hidden rounded-md text-body-sm font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        // navy panel + white label (primary / hero button)
        filled: 'bg-primary text-white shadow-card hover:bg-primary-800',
        // white panel + navy label, pink arrow box (accent CTA)
        pink: 'bg-white text-primary shadow-card ring-1 ring-line hover:shadow-card-hover',
        // white panel + navy label
        solid: 'bg-white text-primary shadow-sm hover:shadow-card',
        outline:
          'border border-primary/15 bg-white text-primary hover:border-primary/30 hover:shadow-card',
        ghost: 'bg-white/10 text-white backdrop-blur hover:bg-white/20',
      },
    },
    defaultVariants: { variant: 'filled' },
  },
)

type Props = {
  variant?: VariantProps<typeof button>['variant']
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  class?: string
}

const props = withDefaults(defineProps<Props>(), { type: 'button' })

const component = computed(() => (props.to ? 'NuxtLink' : props.href ? 'a' : 'button'))
// The arrow box is always the pink accent.
const boxClass = computed(() => 'bg-secondary')
</script>

<template>
  <component
    :is="component"
    :to="to"
    :href="href"
    :type="component === 'button' ? type : undefined"
    :class="cn(button({ variant }), props.class)"
  >
    <!-- Pink arrow box -->
    <span class="grid w-[50px] place-items-center text-white" :class="boxClass">
      <AppIcon
        name="arrow-right"
        :size="18"
        :stroke="2"
        class="transition-transform duration-300 group-hover/btn:translate-x-1"
      />
    </span>
    <!-- Label -->
    <span class="flex items-center px-5">
      <slot />
    </span>
  </component>
</template>
