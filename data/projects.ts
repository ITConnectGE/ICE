import type { Project } from '~/types'

/** Real ICE project content extracted from the Figma "Our projects" frame (188:866). */
export const projects: Project[] = [
  {
    slug: 'steps',
    title: { ka: 'პრემიუმ ჯგუფი „სთეფს"', en: 'Premium Group "Steps"' },
    excerpt: {
      ka: 'კომპანია პრემიუმ ჯგუფის მსოფლიო დონის პროექტი „STEPS" სასტუმროს ტიპის 27 სართულიანი საცხოვრებელი კომპლექსია. ICE პროექტის ფარგლებში 4 ერთეული OTIS-ის ბრენდის ლიფტს დაამონტაჟებს.',
      en: 'Premium Group\'s world-class project "STEPS" is a hotel-type 27-floor residential complex. Within the project ICE will install 4 OTIS-brand elevators.',
    },
    image: '/images/projects/steps.png',
    tags: [{ icon: 'building', label: { ka: '4 ლიფტი', en: '4 elevators' } }],
  },
  {
    slug: 'holiday-inn-blue-sky-tower',
    title: { ka: 'პოლიდეი ინნ ბათუმი', en: 'Holiday Inn Batumi' },
    excerpt: {
      ka: 'ბათუმში მშენებარე გრანდიოზულ სასტუმრო-საცხოვრებელ კომპლექსში Holiday Inn Blue Sky Tower კომპანია ICE 15 ერთეული ოტისის წარმოების ლიფტს და 4 ესკალატორს დაამონტაჟებს.',
      en: 'In the grand hotel-residential complex Holiday Inn Blue Sky Tower under construction in Batumi, ICE will install 15 OTIS elevators and 4 escalators.',
    },
    image: '/images/projects/holidayinn.png',
    tags: [
      { icon: 'building', label: { ka: '15 ლიფტი', en: '15 elevators' } },
      { icon: 'layers', label: { ka: '4 ესკალატორი', en: '4 escalators' } },
    ],
  },
  {
    slug: 'orbi-city',
    title: { ka: 'ორბი სითი', en: 'Orbi City' },
    excerpt: {
      ka: '„ორბი სითი" გრანდიოზული პროექტია 4 500 ნომრით, რომელიც ბათუმში შენდება და მსოფლიოში სასტუმრო ნომრების რაოდენობის მხრივ მე-6 ადგილს იკავებს. „აი-სი-ი", რომელიც SHANGHAI MITSUBISHI-ს ოფიციალური დისტრიბუტორია ამიერკავკასიაში, ობიექტზე 28 ერთეულ ლიფტს ამონტაჟებს.',
      en: '"Orbi City" is a grand project with 4,500 rooms, built in Batumi and ranked 6th in the world by number of hotel rooms. ICE, the official SHANGHAI MITSUBISHI distributor in the South Caucasus, is installing 28 elevators on site.',
    },
    image: '/images/projects/orbi.png',
    tags: [{ icon: 'building', label: { ka: '28 ლიფტი', en: '28 elevators' } }],
  },
  {
    slug: 'mziuri-gardens',
    title: { ka: 'მზიური გარდენსი', en: 'Mziuri Gardens' },
    excerpt: {
      ka: '„მზიური გარდენსი" — კურორტ მახინჯაურში ზღვისპირა საცხოვრებელი უნიკალური კომპლექსია. ჩვენმა გუნდმა ობიექტზე 3 ერთეული თურქული წარმოების ლიფტი უკვე დაამონტაჟა და დამატებით 9 ერთეული ლიფტის მონტაჟი უახლოეს მომავალში დაიწყება.',
      en: '"Mziuri Gardens" is a unique seaside residential complex in the Makhinjauri resort. Our team has already installed 3 Turkish-made elevators and installation of 9 more will begin soon.',
    },
    image: '/images/projects/mziuri.png',
    tags: [{ icon: 'building', label: { ka: '12 ლიფტი', en: '12 elevators' } }],
  },
  {
    slug: 'dar-tower',
    title: { ka: 'დარ თაუერი', en: 'Dar Tower' },
    excerpt: {
      ka: 'სამშენებლო კომპანიამ „დარბილდინგი" ბათუმში გრანდიოზული პროექტი Dar Tower განახორციელა. კომპლექსის ერთ-ერთ შენობაში საერთაშორისო ბრენდის სასტუმრო Hilton Garden Inn განთავსდა. „აი-სი-იმ" პროექტზე 20 ერთეული შანხაი მიცუბიშის ლიფტი დაამონტაჟა. 34-სართულიან შენობას 3 მ/წ სიჩქარის ლიფტები ემსახურება.',
      en: 'Construction company "DarBuilding" delivered the grand Dar Tower project in Batumi. One of the buildings hosts the international Hilton Garden Inn hotel. ICE installed 20 Shanghai Mitsubishi elevators; the 34-floor building is served by 3 m/s elevators.',
    },
    image: '/images/projects/darTower.png',
    tags: [
      { icon: 'building', label: { ka: '20 ლიფტი', en: '20 elevators' } },
      { icon: 'renovation', label: { ka: 'სერვისი', en: 'Service' } },
    ],
  },
]
