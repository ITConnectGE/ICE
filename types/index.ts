import type { I18nText } from '~/composables/useLocale'

export interface NavItem {
  label: I18nText
  to: string
}

export interface Project {
  slug: string
  title: I18nText
  excerpt: I18nText
  image: string
  tags: { icon: 'pin' | 'building' | 'layers'; label: I18nText }[]
}

export interface ProductCategory {
  slug: string
  title: I18nText
  image: string
}

export interface Product {
  slug: string
  category: I18nText
  categorySlug: string
  title: I18nText
  subtitle: I18nText
  description: I18nText
  image: string
}

export interface NewsArticle {
  slug: string
  category: I18nText
  title: I18nText
  date: I18nText
  excerpt: I18nText
  body: I18nText[]
  image: string
}

export interface ServiceStep {
  step: string
  title: I18nText
  description: I18nText
  image: string
  reversed?: boolean
}

export interface TeamMember {
  name: string
  position: I18nText
  image: string
}

export interface Feature {
  icon: 'interior' | 'architecture' | 'renovation'
  title: I18nText
  description: I18nText
}

export interface Stat {
  value: string
  label: I18nText
}
