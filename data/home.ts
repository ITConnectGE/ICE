import { photo } from './images'

export const hero = {
  // NOTE: hero eyebrow/headline transcribed from the provided screenshot — confirm exact wording.
  eyebrow: { ka: 'სრული MEP სერვისი', en: 'Full MEP service' },
  title: { ka: 'ინოვაციური ინჟინერია შენი წარმატებისთვის', en: 'Innovative engineering for your success' },
  subtitle: {
    ka: 'ლიფტები, ესკალატორები, გათბობა-კონდიცირება და ვენტილაცია — სრული ციკლი ერთ სივრცეში.',
    en: 'Elevators, escalators, HVAC and ventilation — the full cycle in one place.',
  },
  primaryCta: { label: { ka: 'ჩვენი პროექტები', en: 'Our projects' }, to: '/projects' },
  secondaryCta: { label: { ka: 'იხილე ვიდეო', en: 'Watch video' }, to: '/services' },
  // Real hero asset provided in public/images
  image: '/images/man-working-factory.png',
  slides: ['01', '02', '03'],
}

export const intro = {
  eyebrow: { ka: 'რას ვსაქმიანობთ?', en: 'What we do?' },
  title: { ka: 'თქვენი საიმედო პარტნიორი', en: 'Your reliable partner' },
  text: {
    ka: 'ჩვენ გთავაზობთ საინჟინრო მომსახურების განხორციელებას სრულ ციკლზე — კონცეფციიდან მონტაჟსა და ექსპლუატაციის შემდგომ მომსახურებამდე. ჩვენი გამოცდილი და განვითარებაზე ორიენტირებული გუნდი მუდამ მზადაა მოერგოს ნებისმიერ გამოწვევას, რათა უზრუნველყოს კომფორტული და ეფექტური სერვისი.',
    en: 'We deliver engineering services across the full cycle — from concept to installation and post-operation maintenance. Our experienced, growth-oriented team is always ready to adapt to any challenge to ensure a comfortable and efficient service.',
  },
  cta: { label: { ka: 'ვრცლად', en: 'Read more' }, to: '/about' },
}

export const projectsTeaser = {
  title: { ka: 'ჩვენი პროექტები', en: 'Our projects' },
  text: {
    ka: 'დღესდღეობით აი-სი-ი დარგის ერთ-ერთი ლიდერია, რასაც მოწმობს ის მასშტაბური და გრანდიოზული პროექტები, რომელზეც კომპანია წლების განმავლობაში მუშაობს.',
    en: 'Today ICE is one of the industry leaders, proven by the large-scale and ambitious projects the company has delivered over the years.',
  },
  cta: { label: { ka: 'დაგვიკავშირდით', en: 'Get in touch' }, to: '/contacts' },
}

/** Homepage projects carousel — uses the real images provided in public/images. */
export const projectSlides = [
  {
    type: 'image' as const,
    image: '/images/proj-highline.png',
    label: { ka: 'ჰაილაინი', en: 'Highline' },
    to: '/projects/holiday-inn-blue-sky-tower',
  },
  {
    type: 'highlight' as const,
    image: '/images/proj-citymall.png',
    title: { ka: 'სით მოლი', en: 'City Mall' },
    text: {
      ka: '54-სართულიან მრავალფუნქციურ კომპლექსში „ალიანს ფრივილიჯი" ჩვენი გუნდი ოტისის ბრენდის 10 ერთეულ ლიფტს დაამონტაჟებს.',
      en: 'In the 54-floor multifunctional complex "Alliance Privilege" our team will install 10 OTIS-brand elevators.',
    },
    to: '/projects/steps',
  },
  {
    type: 'image' as const,
    image: '/images/proj-orbi.png',
    label: { ka: 'ორბი სითი', en: 'Orbi City' },
    to: '/projects/orbi-city',
  },
]

export const productsTeaser = {
  title: { ka: 'ჩვენი პროდუქცია', en: 'Our products' },
  text: {
    ka: 'ჩვენ გთავაზობთ მსოფლიოს წამყვანი ბრენდების სრულ პროდუქტთა ხაზს — ლიფტებიდან ვენტილაციის სისტემებამდე.',
    en: "We offer a full product line from the world's leading brands — from elevators to ventilation systems.",
  },
  cta: { label: { ka: 'ყველა პროდუქცია', en: 'All products' }, to: '/products' },
}

export const clients = {
  title: { ka: 'ჩვენი პარტნიორები', en: 'Our partners' },
  eyebrow: { ka: 'ნდობა', en: 'Trust' },
}

export const newsTeaser = {
  title: { ka: 'სიახლეები', en: 'News' },
  eyebrow: { ka: 'ბლოგი', en: 'Blog' },
  text: { ka: 'გაეცანი კომპანიის უახლეს პროექტებსა და სიახლეებს.', en: 'Discover the company’s latest projects and news.' },
  cta: { label: { ka: 'ყველა სიახლე', en: 'All news' }, to: '/news' },
}

/** "ჩვენი სერვისები" band — video banner + navy stats + 3 service features. */
export const servicesBand = {
  badge: 'ICE GROUP PROJECT IN LARGEST MALL',
  title: { ka: 'ჩვენი სერვისები', en: 'Our services' },
  text: {
    ka: 'დღესდღეობით აი-სი-ი დარგის ერთ-ერთი ლიდერია, რასაც მოწმობს ის მასშტაბური და გრანდიოზული პროექტები, რომელზეც კომპანია წლების განმავლობაში მუშაობს.',
    en: 'Today ICE is one of the industry leaders, proven by the large-scale and ambitious projects the company has delivered over the years.',
  },
  image: '/images/hero-subway.png',
  stats: [
    { value: '13', label: { ka: 'წელი გამოცდილება', en: 'Years of experience' } },
    { value: '500+', label: { ka: 'პროექტი', en: 'Projects' } },
  ],
}

export const ctaBand = {
  eyebrow: { ka: 'ICE GROUP', en: 'ICE GROUP' },
  title: { ka: 'თქვენი იდეის ხორცშესხმა ჩვენი საქმეა', en: 'Bringing your idea to life is our business' },
  text: {
    ka: 'როგორც არქიტექტორთა, ინჟინერთა და დიზაინერთა გუნდი, ჩვენ ვქმნით სივრცეებს, რომლებიც აერთიანებს ფუნქციურობას, უსაფრთხოებასა და ესთეტიკას.',
    en: 'As a team of architects, engineers and designers, we create spaces that combine functionality, safety and aesthetics.',
  },
}
