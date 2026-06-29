import type { I18nText } from '~/composables/useLocale'

export const siteName = 'ICE'

export interface NavItemI18n {
  label: I18nText
  to: string
}

/** Primary navigation — labels from the Figma Menu overlay (97:371), bilingual. */
export const navItems: NavItemI18n[] = [
  { label: { ka: 'მთავარი', en: 'Home' }, to: '/' },
  { label: { ka: 'ჩვენ შესახებ', en: 'About us' }, to: '/about' },
  { label: { ka: 'პროდუქცია', en: 'Products' }, to: '/products' },
  { label: { ka: 'პროექტები', en: 'Projects' }, to: '/projects' },
  { label: { ka: 'სერვისები', en: 'Services' }, to: '/services' },
  { label: { ka: 'სიახლეები', en: 'News' }, to: '/news' },
  { label: { ka: 'კონტაქტი', en: 'Contact' }, to: '/contacts' },
]

export const contact = {
  address: { ka: 'საქართველო, თბილისი, ნიკო ნიკოლაძის #7', en: '7 Niko Nikoladze St, Tbilisi, Georgia' },
  phone: '+995 32 2 990 172',
  phoneHref: '+995322990172',
  email: 'info@ice.com.ge',
  workingHours: { ka: 'ორშ - პარ: 10:00 - 19:00', en: 'Mon - Fri: 10:00 - 19:00' },
}

export const socials = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' as const },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' as const },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' as const },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' as const },
]

/** Footer socials — matches the footer design (Facebook, Twitter, Instagram). */
export const footerSocials = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' as const },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' as const },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' as const },
]

/** Footer navigation — two columns of links, each with a pink arrow. */
export const footerNav: NavItemI18n[] = [
  { label: { ka: 'კომპანია', en: 'Company' }, to: '/about' },
  { label: { ka: 'ჩვენ შესახებ', en: 'About us' }, to: '/about' },
  { label: { ka: 'სერვისები', en: 'Services' }, to: '/services' },
  { label: { ka: 'პროდუქცია', en: 'Products' }, to: '/products' },
  { label: { ka: 'პროექტები', en: 'Projects' }, to: '/projects' },
  { label: { ka: 'სიახლეები', en: 'News' }, to: '/news' },
  { label: { ka: 'კარიერა', en: 'Careers' }, to: '/contacts' },
  { label: { ka: 'კონტაქტი', en: 'Contact' }, to: '/contacts' },
]

export const footerColumns = [
  {
    title: { ka: 'კომპანია', en: 'Company' },
    links: [
      { label: { ka: 'ჩვენ შესახებ', en: 'About us' }, to: '/about' },
      { label: { ka: 'სერვისები', en: 'Services' }, to: '/services' },
      { label: { ka: 'პროექტები', en: 'Projects' }, to: '/projects' },
      { label: { ka: 'სიახლეები', en: 'News' }, to: '/news' },
    ],
  },
  {
    title: { ka: 'პროდუქცია', en: 'Products' },
    links: [
      { label: { ka: 'ლიფტები', en: 'Elevators' }, to: '/products' },
      { label: { ka: 'ესკალატორები', en: 'Escalators' }, to: '/products' },
      { label: { ka: 'გათბობა-გაგრილება', en: 'Heating & Cooling' }, to: '/products' },
      { label: { ka: 'ვენტილაცია', en: 'Ventilation' }, to: '/products' },
    ],
  },
]

/** Brand partners shown in the homepage clients strip */
export const partners = ['OTIS', 'TOSHIBA', 'CARRIER', 'LENNOX', 'MITSUBISHI', 'DELFAR']

/** Client / supplier logos shown in the homepage "ჩვენი დამკვეთები" carousel.
 *  Real logos live in public/images/partners (spaces in filenames URL-encoded). */
export const partnerLogos = [
  { name: 'Doosan', logo: '/images/partners/image%2014.png' },
  { name: 'Baudouin', logo: '/images/partners/image%2016.png' },
  { name: 'Berksan', logo: '/images/partners/image%2020.png' },
  { name: 'Kingspan', logo: '/images/partners/image%2021.png' },
  { name: 'Rapidrop', logo: '/images/partners/image%2018.png' },
]

/** Misc UI strings used across components. */
export const ui = {
  contact: { ka: 'კონტაქტი', en: 'Contact' },
  navigation: { ka: 'ნავიგაცია', en: 'Navigation' },
  getInTouch: { ka: 'დაგვიკავშირდით', en: 'Get in touch' },
  readMore: { ka: 'ვრცლად', en: 'Read more' },
  readFull: { ka: 'სრულად წაკითხვა', en: 'Read full article' },
  allProjects: { ka: 'ყველა პროექტი', en: 'All projects' },
  allNews: { ka: 'ყველა სიახლე', en: 'All news' },
  allProducts: { ka: 'ყველა პროდუქტი', en: 'All products' },
  viewProject: { ka: 'პროექტის ნახვა', en: 'View project' },
  details: { ka: 'დეტალურად', en: 'Details' },
  newsletter: { ka: 'გამოიწერე სიახლეები', en: 'Subscribe to our newsletter' },
  emailPlaceholder: { ka: 'თქვენი ელ-ფოსტა', en: 'Your email' },
  subscribed: { ka: 'გმადლობთ გამოწერისთვის!', en: 'Thanks for subscribing!' },
  rights: { ka: 'ყველა უფლება დაცულია.', en: 'All rights reserved.' },
  privacy: { ka: 'კონფიდენციალურობა', en: 'Privacy policy' },
  terms: { ka: 'წესები და პირობები', en: 'Terms & conditions' },
  footerAbout: {
    ka: 'ჩვენ გთავაზობთ საინჟინრო იდეების განხორციელებას სრულ ციკლზე მუშაობით',
    en: 'We deliver engineering ideas by working across the full project cycle',
  },
  address: { ka: 'მისამართი', en: 'Address' },
  phone: { ka: 'ტელეფონი', en: 'Phone' },
  emailLabel: { ka: 'ელ-ფოსტა', en: 'Email' },
  workingHours: { ka: 'სამუშაო საათები', en: 'Working hours' },
  home: { ka: 'მთავარი', en: 'Home' },
  search: { ka: 'ძიება', en: 'Search' },
}
