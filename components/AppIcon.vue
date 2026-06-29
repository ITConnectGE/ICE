<script setup lang="ts">
/**
 * Lightweight inline-SVG icon set (stroke = currentColor) so the project
 * stays dependency-free while matching the Figma icon language.
 */
withDefaults(
  defineProps<{
    name: string
    size?: number | string
    stroke?: number
  }>(),
  { size: 24, stroke: 1.8 },
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke-width="stroke"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="shrink-0"
  >
    <!-- arrow-right -->
    <template v-if="name === 'arrow-right'">
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline points="14 5 21 12 14 19" />
    </template>
    <!-- arrow-long (thin, used in links) -->
    <template v-else-if="name === 'arrow-long'">
      <line x1="2" y1="12" x2="22" y2="12" />
      <polyline points="16 7 22 12 16 17" />
    </template>
    <!-- arrow-up-right -->
    <template v-else-if="name === 'arrow-up-right'">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </template>
    <template v-else-if="name === 'arrow-left'">
      <line x1="21" y1="12" x2="3" y2="12" />
      <polyline points="10 5 3 12 10 19" />
    </template>
    <template v-else-if="name === 'chevron-down'">
      <polyline points="6 9 12 15 18 9" />
    </template>
    <template v-else-if="name === 'chevron-right'">
      <polyline points="9 6 15 12 9 18" />
    </template>
    <!-- search -->
    <template v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </template>
    <!-- menu -->
    <template v-else-if="name === 'menu'">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="15" y2="17" />
    </template>
    <!-- close -->
    <template v-else-if="name === 'close'">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </template>
    <!-- pin -->
    <template v-else-if="name === 'pin'">
      <path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </template>
    <!-- building -->
    <template v-else-if="name === 'building'">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <line x1="9" y1="7" x2="9" y2="7.01" />
      <line x1="15" y1="7" x2="15" y2="7.01" />
      <line x1="9" y1="11" x2="9" y2="11.01" />
      <line x1="15" y1="11" x2="15" y2="11.01" />
      <line x1="10" y1="21" x2="14" y2="21" />
    </template>
    <!-- layers -->
    <template v-else-if="name === 'layers'">
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 13 12 18 21 13" />
    </template>
    <!-- phone -->
    <template v-else-if="name === 'phone'">
      <path
        d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L17 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z"
      />
    </template>
    <!-- mail -->
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </template>
    <!-- location (outline) -->
    <template v-else-if="name === 'location'">
      <path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </template>
    <!-- clock -->
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </template>
    <!-- check -->
    <template v-else-if="name === 'check'">
      <polyline points="20 6 9 17 4 12" />
    </template>
    <!-- engineering / interior -->
    <template v-else-if="name === 'interior'">
      <path d="M3 21V10l9-7 9 7v11" />
      <path d="M9 21v-6h6v6" />
    </template>
    <!-- architecture / compass -->
    <template v-else-if="name === 'architecture'">
      <circle cx="12" cy="12" r="9" />
      <polygon points="16 8 13 13 8 16 11 11 16 8" />
    </template>
    <!-- renovation / wrench -->
    <template v-else-if="name === 'renovation'">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.2 5.2L4 17v3h3l5.5-5.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.1-2.1 2.7-2.5Z"
      />
    </template>
    <!-- consultation / person + sound -->
    <template v-else-if="name === 'consult'">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.6 5.6 0 0 1 11 0" />
      <path d="M16.5 7a4 4 0 0 1 0 6" />
      <path d="M19 4.5a7.5 7.5 0 0 1 0 11" />
    </template>
    <!-- play -->
    <template v-else-if="name === 'play'">
      <polygon points="8 5 19 12 8 19 8 5" fill="currentColor" stroke="none" />
    </template>
    <!-- socials -->
    <template v-else-if="name === 'facebook'">
      <path
        d="M14 8.5h2V5.5h-2.2C11.7 5.5 10.5 7 10.5 9v1.5H8.5v3h2V21h3v-7.5h2.3l.7-3h-3V9c0-.4.3-.5.7-.5Z"
        fill="currentColor"
        stroke="none"
      />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <line x1="17" y1="7" x2="17" y2="7.01" />
    </template>
    <template v-else-if="name === 'linkedin'">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="10.5" x2="8" y2="16.5" />
      <line x1="8" y1="7.5" x2="8" y2="7.51" />
      <path d="M12 16.5v-3a2 2 0 0 1 4 0v3" />
      <line x1="12" y1="10.5" x2="12" y2="16.5" />
    </template>
    <template v-else-if="name === 'youtube'">
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <polygon points="11 9.5 15 12 11 14.5 11 9.5" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'twitter'">
      <path
        d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.6c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.8 5.3a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.7-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1Z"
        fill="currentColor"
        stroke="none"
      />
    </template>
    <template v-else-if="name === 'send'">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </template>
  </svg>
</template>
