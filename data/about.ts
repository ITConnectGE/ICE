import type { Feature, Stat, TeamMember } from '~/types'
import type { I18nText } from '~/composables/useLocale'

export const aboutIntro = {
  title: { ka: 'ჩვენ შესახებ', en: 'About us' },
  lead: {
    ka: 'აი-სი-ი უკვე 13 წელია ბაზარზე ოპერირებს გათბობა-კონდიცირება-ვენტილაციის სისტემების მიმართულებით.',
    en: 'ICE has been operating on the market for 13 years in heating, air-conditioning and ventilation systems.',
  },
  paragraphs: [
    {
      ka: 'დღესდღეობით აი-სი-ი დარგის ერთ-ერთი ლიდერია, რასაც მოწმობს ის მასშტაბური და გრანდიოზული პროექტები, რომელზეც კომპანია წლების განმავლობაში მუშაობს.',
      en: 'Today ICE is one of the industry leaders, proven by the large-scale and ambitious projects the company has delivered over the years.',
    },
    {
      ka: 'ჩვენ გთავაზობთ მსოფლიოს წამყვანი ბრენდების — OTIS, TOSHIBA, CARRIER, LENNOX — გათბობა-გაგრილების, ვენტილაციისა და ხანძარსაწინააღმდეგო სისტემებს. ჩვენი გუნდი მუდამ მზადაა მოერგოს ნებისმიერ გამოწვევას, რათა უზრუნველყოს კომფორტული და ეფექტური სერვისი.',
      en: "We offer heating, cooling, ventilation and fire-protection systems from the world's leading brands — OTIS, TOSHIBA, CARRIER, LENNOX. Our team is always ready to adapt to any challenge to ensure a comfortable and efficient service.",
    },
  ],
}

/** Feature trio — from homepage (159:249) & About (200:851). */
export const features: Feature[] = [
  {
    icon: 'interior',
    title: { ka: 'ინჟინერია', en: 'Engineering' },
    description: {
      ka: 'სრული საინჟინრო მომსახურება კონცეფციიდან ექსპლუატაციამდე — ვუზრუნველყოფთ კომფორტულ და ეფექტურ გარემოს.',
      en: 'Full engineering services from concept to operation — we ensure a comfortable and efficient environment.',
    },
  },
  {
    icon: 'architecture',
    title: { ka: 'პროექტირება', en: 'Design' },
    description: {
      ka: 'არქიტექტურული ნახაზების საფუძველზე ვქმნით ოპტიმალურ ტექნიკურ გადაწყვეტას — ვაერთიანებთ ფუნქციურობასა და ესთეტიკას.',
      en: 'Based on architectural drawings we create the optimal technical solution — uniting functionality and aesthetics.',
    },
  },
  {
    icon: 'renovation',
    title: { ka: 'მომსახურება', en: 'Maintenance' },
    description: {
      ka: 'საკუთარი სერვის-ცენტრით ვუზრუნველყოფთ დანადგარების მუდმივ მომსახურებას და პრობლემაზე მყისიერ რეაგირებას 24/7 რეჟიმში.',
      en: 'With our own service center we provide continuous equipment maintenance and instant response to issues 24/7.',
    },
  },
]

export const stats: Stat[] = [
  { value: '13', label: { ka: 'წელი გამოცდილება', en: 'Years of experience' } },
  { value: '110', label: { ka: 'დასრულებული პროექტი', en: 'Completed projects' } },
  { value: '500+', label: { ka: 'დამონტაჟებული ლიფტი', en: 'Elevators installed' } },
  { value: '24/7', label: { ka: 'ტექნიკური მომსახურება', en: 'Technical support' } },
]

export const otisOffer = {
  title: {
    ka: 'აი-სი-ი OTIS-ის ოფიციალური დისტრიბუტორია საქართველოში',
    en: 'ICE is the official OTIS distributor in Georgia',
  },
  intro: { ka: 'ჩვენ გთავაზობთ:', en: 'We offer:' },
  items: [
    {
      title: { ka: 'უმაღლესი ხარისხის პროდუქციას', en: 'Highest-quality products' },
      text: {
        ka: 'მსოფლიოში ერთ-ერთი ყველაზე მსხვილი მწარმოებლის უმაღლესი ხარისხის პროდუქციას.',
        en: "The highest-quality products from one of the world's largest manufacturers.",
      },
    },
    {
      title: { ka: 'უფასო საკონსულტაციო მომსახურებას', en: 'Free consultancy' },
      text: {
        ka: 'ლიფტების, ესკალატორებისა და ტრაველატორების მიწოდებას, მონტაჟსა და ტექნიკურ მომსახურებას.',
        en: 'Supply, installation and technical maintenance of elevators, escalators and travolators.',
      },
    },
    {
      title: { ka: 'მიწოდებას, მონტაჟსა და მომსახურებას', en: 'Supply, installation & service' },
      text: {
        ka: 'სრულ ციკლს — დაგეგმვიდან ექსპლუატაციის შემდგომ მომსახურებამდე.',
        en: 'The full cycle — from planning to post-operation maintenance.',
      },
    },
    {
      title: { ka: 'ქარხნულ გარანტიას', en: 'Factory warranty' },
      text: {
        ka: 'მწარმოებლის ოფიციალურ ქარხნულ გარანტიასა და ორიგინალ სათადარიგო ნაწილებს.',
        en: "The manufacturer's official factory warranty and original spare parts.",
      },
    },
  ],
}

/** Navy "Our advantage" band. */
export const advantage = {
  title: { ka: 'ჩვენი უპირატესობა', en: 'Our advantage' },
  text: {
    ka: 'ICE-ს მრავალწლიანი გამოცდილება და პროფესიონალიზმი დასტურდება იმ მასშტაბური პროექტებით, რომლებზეც კომპანია მუშაობს — „სთეფსი", „ჰოლიდეი ინ ბლუ სქაი თაუერი", „ორბი სითი", „მზიური გარდენსი" და „დარ თაუერი". ჩვენ ვქმნით მდგრად, უსაფრთხო და ენერგოეფექტურ საინჟინრო გადაწყვეტილებებს, რომლებიც დროს უსწრებს.',
    en: 'ICE\'s years of experience and professionalism are proven by the large-scale projects the company delivers — "Steps", "Holiday Inn Blue Sky Tower", "Orbi City", "Mziuri Gardens" and "Dar Tower". We build durable, safe and energy-efficient engineering solutions that stay ahead of their time.',
  },
}

/** Mission / Vision / Values trio. `icon` maps to AppIcon names. */
export const pillars: { icon: string; title: I18nText; text: I18nText }[] = [
  {
    icon: 'target',
    title: { ka: 'მისია', en: 'Mission' },
    text: {
      ka: 'პროდუქტისა და სერვისის უმაღლესი ხარისხით შევქმნათ კომფორტული, უსაფრთხო და ენერგოეფექტური გარემო ჩვენი მომხმარებლისთვის.',
      en: 'To create a comfortable, safe and energy-efficient environment for our clients through the highest quality of products and service.',
    },
  },
  {
    icon: 'eye',
    title: { ka: 'ხედვა', en: 'Vision' },
    text: {
      ka: 'ვიყოთ საქართველოს საინჟინრო ბაზრის ლიდერი — მუდმივად განვითარებადი, ინოვაციებსა და მომხმარებელზე ორიენტირებული პარტნიორი.',
      en: 'To be the leader of Georgia\'s engineering market — a constantly evolving partner focused on innovation and the customer.',
    },
  },
  {
    icon: 'gem',
    title: { ka: 'ფასეულობები', en: 'Values' },
    text: {
      ka: 'პროფესიონალიზმი, გუნდურობა, პასუხისმგებლობა და მომხმარებლის ნდობა — ღირებულებები, რომლებზეც ვდგავართ.',
      en: 'Professionalism, teamwork, responsibility and customer trust — the values we stand on.',
    },
  },
]

const positions = [
  { ka: 'გენერალური დირექტორი', en: 'General Director' },
  { ka: 'ტექნიკური დირექტორი', en: 'Technical Director' },
  { ka: 'მთავარი ინჟინერი', en: 'Chief Engineer' },
  { ka: 'პროექტების მენეჯერი', en: 'Project Manager' },
  { ka: 'სამონტაჟო ჯგუფის ხელმძღვანელი', en: 'Installation Team Lead' },
  { ka: 'გაყიდვების მენეჯერი', en: 'Sales Manager' },
  { ka: 'სერვის-ცენტრის უფროსი', en: 'Service Center Head' },
  { ka: 'ფინანსური მენეჯერი', en: 'Finance Manager' },
]

const names = [
  'გიორგი ბახტაძე',
  'ნინო კვარაცხელია',
  'ლევან მაისურაძე',
  'თამარ გელაშვილი',
  'დავით ჩხეიძე',
  'ანა ბერიძე',
  'ზურაბ ხარაზიშვილი',
  'მარიამ წიკლაური',
  'ირაკლი ჩიქოვანი',
  'სოფიო კაპანაძე',
  'გიორგი ლომიძე',
  'ეკატერინე ჯავახიშვილი',
]

export const team: TeamMember[] = names.map((name, i) => ({
  name,
  position: positions[i % positions.length],
  // Placeholder headshot for every member until individual photos are provided.
  image: '/images/aboutUs/template.png',
}))
