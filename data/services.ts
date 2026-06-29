import type { ServiceStep } from '~/types'

/** 5-step engineering process — from the Figma "Services" frame (188:777). */
export const serviceSteps: ServiceStep[] = [
  {
    step: '01',
    title: { ka: 'კონსულტაცია', en: 'Consultation' },
    description: {
      ka: 'მომხმარებლის ინტერესებისა და ბიუჯეტის გათვალისწინებით ოპტიმალური შეთავაზების მომზადება და საუკეთესო გადაწყვეტის შერჩევა.',
      en: "Preparing an optimal offer based on the client's interests and budget, and selecting the best solution.",
    },
    image: '/images/services/service1.png',
  },
  {
    step: '02',
    title: { ka: 'პროექტირება', en: 'Design' },
    description: {
      ka: 'მომხმარებლის მიერ მოწოდებული არქიტექტურული ნახაზების საფუძველზე პროდუქციის კონკრეტული მოდელისა და რაოდენობის განსაზღვრა.',
      en: 'Determining the specific product model and quantity based on the architectural drawings provided by the client.',
    },
    image: '/images/services/service2.png',
    reversed: true,
  },
  {
    step: '03',
    title: { ka: 'პროდუქციის მიწოდება', en: 'Product Delivery' },
    description: {
      ka: 'წარმოება, უსაფრთხო ტრანსპორტირება და ადგილზე მიტანა დათქმულ ვადებში.',
      en: 'Manufacturing, safe transportation and on-site delivery within the agreed timeframe.',
    },
    image: '/images/services/service3.png',
  },
  {
    step: '04',
    title: { ka: 'მონტაჟი', en: 'Installation' },
    description: {
      ka: 'სისტემების დამონტაჟება მწარმოებლის სტანდარტებისა და საქართველოში მოქმედი კანონმდებლობით გათვალისწინებული ნორმების სრული დაცვით.',
      en: "Installing the systems in full compliance with the manufacturer's standards and Georgian legislation.",
    },
    image: '/images/services/service4.png',
    reversed: true,
  },
  {
    step: '05',
    title: { ka: 'ყოველთვიური მომსახურება', en: 'Monthly Maintenance' },
    description: {
      ka: 'დანადგარების გამართულად მუშაობის მიზნით უსაფრთხოების კომპონენტების შემოწმება. საგარანტიო პერიოდში მათი უფასოდ შეცვლა. პრობლემაზე მყისიერი რეაგირება 24 საათის განმავლობაში.',
      en: 'Inspection of safety components to keep equipment running properly. Free replacement during the warranty period. Instant response to issues within 24 hours.',
    },
    image: '/images/services/service5.png',
  },
]
