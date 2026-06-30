import type { Product, ProductCategory } from '~/types'
import { photo } from './images'

/** Product categories — from the Figma "Our products" grid (200:748) & sidebar (240:803). */
export const productCategories: ProductCategory[] = [
  { slug: 'escalators', title: { ka: 'ესკალატორები', en: 'Escalators' }, image: '/images/ourProducts/escalator.png' },
  { slug: 'travolators', title: { ka: 'ტრავალატორი', en: 'Travolators' }, image: '/images/ourProducts/travolator.png' },
  { slug: 'elevators', title: { ka: 'ლიფტები', en: 'Elevators' }, image: '/images/ourProducts/elevator.png' },
  { slug: 'hvac', title: { ka: 'გათბობა-გაგრილება', en: 'Heating & Cooling' }, image: '/images/ourProducts/gatboba.png' },
  { slug: 'ventilation', title: { ka: 'ვენტილაცია', en: 'Ventilation' }, image: '/images/ourProducts/ventilacia.png' },
  { slug: 'energy', title: { ka: 'ენერგიის მართვა', en: 'Energy Management' }, image: '/images/ourProducts/energiis_martva.png' },
  { slug: 'automation', title: { ka: 'ავტომატიზაციის სისტემები', en: 'Automation Systems' }, image: '/images/ourProducts/avtomatizacia.png' },
  { slug: 'cctv', title: { ka: 'ვიდეო-მეთვალყურეობის სისტემები', en: 'Video Surveillance' }, image: '/images/ourProducts/video_sistemebi.png' },
  { slug: 'billboards', title: { ka: 'ციფრული ბილბორდი', en: 'Digital Billboards' }, image: '/images/ourProducts/cifruli.png' },
  { slug: 'plumbing', title: { ka: 'სანტექნიკური დანადგარები', en: 'Plumbing Equipment' }, image: '/images/ourProducts/santeqnika.png' },
  { slug: 'sprinklers', title: { ka: 'სკრინკლერი', en: 'Sprinklers' }, image: '/images/ourProducts/sprinkler.png' },
  { slug: 'pumps', title: { ka: 'ტუმბოები', en: 'Pumps' }, image: '/images/ourProducts/tumboebi.png' },
]

const autoWalkDescription = {
  ka: 'მშვიდი და მშვიდობიანი, დახვეწილი და მდიდარი დასასვენებელი სივრცე დატვირთული ქალაქის ცხოვრებაში. C SERIES AUTO WALK იყენებს უახლეს ტექნიკას სწრაფი, კომფორტული და უსაფრთხო შესრულებით. ის არა მხოლოდ აკმაყოფილებს თანამედროვე მეტროპოლიის მზარდ მოთხოვნილებებს, არამედ წარმოადგენს ფერად და დინამიკურ ხედს ქალაქზე.',
  en: 'A calm, refined and rich resting space within busy city life. The C SERIES AUTO WALK uses the latest technology for fast, comfortable and safe performance. It not only meets the growing demands of a modern metropolis but also offers a colorful and dynamic view of the city.',
}

/** Product items — from the Figma "Product items" (240:803) & "Product Item" (240:1014) frames. */
export const products: Product[] = [
  {
    slug: 'delfar-escalator',
    category: { ka: 'ესკალატორები', en: 'Escalators' },
    categorySlug: 'escalators',
    title: { ka: 'დელფარის ესკალატორი', en: 'Delfar Escalator' },
    subtitle: { ka: 'ესკალატორი', en: 'Escalator' },
    description: autoWalkDescription,
    image: photo('prod-escalator-1', 813, 482),
  },
  {
    slug: 'delfar-auto-walk',
    category: { ka: 'ესკალატორები', en: 'Escalators' },
    categorySlug: 'escalators',
    title: { ka: 'დელფარის ტრავალატორი — C SERIES', en: 'Delfar Travolator — C SERIES' },
    subtitle: { ka: 'ტრავალატორი', en: 'Travolator' },
    description: autoWalkDescription,
    image: photo('prod-escalator-2', 813, 482),
  },
  {
    slug: 'otis-gen2',
    category: { ka: 'ლიფტები', en: 'Elevators' },
    categorySlug: 'elevators',
    title: { ka: 'OTIS Gen2® სამგზავრო ლიფტი', en: 'OTIS Gen2® Passenger Elevator' },
    subtitle: { ka: 'ლიფტი', en: 'Elevator' },
    description: {
      ka: 'OTIS Gen2® სისტემა აერთიანებს ენერგოეფექტურობას, უსაფრთხოებასა და კომფორტს. ბრტყელი ქამრის ტექნოლოგია უზრუნველყოფს მდოვრე და უხმაურო მოძრაობას, ხოლო ReGen® რეკუპერაციული დისკი მნიშვნელოვნად ამცირებს ენერგიის მოხმარებას.',
      en: 'The OTIS Gen2® system combines energy efficiency, safety and comfort. Flat-belt technology ensures smooth, quiet movement, while the ReGen® regenerative drive significantly reduces energy consumption.',
    },
    image: photo('prod-elevator-1', 813, 482),
  },
]
