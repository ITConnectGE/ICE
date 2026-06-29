import type { NewsArticle } from '~/types'
import { photo } from './images'

const ramadaBody = [
  {
    ka: 'სასტუმროების ცნობილი ქსელი „რამადა" ბათუმის ბაზარზე შემოდის. კომპანია „აი-სი-ი" აღნიშნულ პროექტზე 19 ლიფტს დაამონტაჟებს.',
    en: 'The well-known hotel chain "Ramada" is entering the Batumi market. ICE will install 19 elevators on this project.',
  },
  {
    ka: '„თვინ თაუერის" პროექტზე წარმატებული მუშაობის შემდეგ, ბათუმში ჩვენი სახელი უკვე დავიმკვიდრეთ და ახალ პროექტებზე მუშაობას ვიწყებთ. „რამადა პლაზა" პრესტიჟული კომპლექსი იქნება. საერთო ჯამში 19 ლიფტს დავამონტაჟებთ — უმეტესობა 34 სართულიანია და 3 მ/წ სიჩქარისაა," — აცხადებს კომპანიის დირექტორი გიორგი ბახტაძე.',
    en: '"After successful work on the Twin Tower project, we have established our name in Batumi and are starting new projects. Ramada Plaza will be a prestigious complex. In total we will install 19 elevators — most are 34 floors and run at 3 m/s," says company director Giorgi Bakhtadze.',
  },
  {
    ka: 'პროექტის დასრულების შემდეგ კომპანია ლიფტებს 24-საათიან მომსახურებას გაუწევს.',
    en: 'After project completion the company will provide 24-hour maintenance for the elevators.',
  },
]

export const news: NewsArticle[] = [
  {
    slug: 'orbi-city',
    category: { ka: 'პროექტები', en: 'Projects' },
    title: { ka: 'პროექტი „ორბი სითი"', en: 'Project "Orbi City"' },
    date: { ka: '15 მარტი, 2025', en: 'March 15, 2025' },
    excerpt: {
      ka: 'სასტუმროების ცნობილი ქსელი „რამადა" ბათუმის ბაზარზე შემოდის. კომპანია „აი-სი-ი" აღნიშნულ პროექტზე 19 ლიფტს დაამონტაჟებს.',
      en: 'The well-known hotel chain "Ramada" is entering the Batumi market. ICE will install 19 elevators on this project.',
    },
    body: ramadaBody,
    image: '/images/news/Screenshot%202025-02-20%20at%2013.12.12.png',
  },
  {
    slug: 'otis-distribution',
    category: { ka: 'სიახლეები', en: 'News' },
    title: {
      ka: 'ICE — OTIS-ის ოფიციალური დისტრიბუტორი საქართველოში',
      en: 'ICE — Official OTIS Distributor in Georgia',
    },
    date: { ka: '28 თებერვალი, 2025', en: 'February 28, 2025' },
    excerpt: {
      ka: '„აი-სი-ი" OTIS-ის ოფიციალური დისტრიბუტორია საქართველოში და გთავაზობთ მსოფლიოს ერთ-ერთი უმსხვილესი მწარმოებლის უმაღლესი ხარისხის პროდუქციას.',
      en: 'ICE is the official OTIS distributor in Georgia, offering the highest-quality products from one of the world\'s largest manufacturers.',
    },
    body: [
      {
        ka: '„აი-სი-ი" OTIS-ის ოფიციალური დისტრიბუტორია საქართველოში. ჩვენ გთავაზობთ ლიფტების, ესკალატორებისა და ტრაველატორების მიწოდებას, მონტაჟსა და ტექნიკურ მომსახურებას.',
        en: 'ICE is the official OTIS distributor in Georgia. We offer supply, installation and technical maintenance of elevators, escalators and travolators.',
      },
      {
        ka: 'OTIS მსოფლიოში ერთ-ერთი ყველაზე მსხვილი მწარმოებელია, რომელიც უზრუნველყოფს ქარხნულ გარანტიასა და უმაღლესი ხარისხის პროდუქციას.',
        en: 'OTIS is one of the largest manufacturers in the world, providing factory warranty and the highest-quality products.',
      },
    ],
    image: '/images/news/Screenshot%202025-02-02%20at%2018.06.04.png',
  },
  {
    slug: 'holiday-inn',
    category: { ka: 'პროექტები', en: 'Projects' },
    title: {
      ka: 'Holiday Inn Blue Sky Tower — 15 ლიფტი და 4 ესკალატორი',
      en: 'Holiday Inn Blue Sky Tower — 15 elevators and 4 escalators',
    },
    date: { ka: '10 თებერვალი, 2025', en: 'February 10, 2025' },
    excerpt: {
      ka: 'ბათუმში მშენებარე გრანდიოზულ სასტუმრო-საცხოვრებელ კომპლექსში კომპანია ICE 15 ერთეული ოტისის ლიფტს და 4 ესკალატორს დაამონტაჟებს.',
      en: 'In the grand hotel-residential complex under construction in Batumi, ICE will install 15 OTIS elevators and 4 escalators.',
    },
    body: [
      {
        ka: 'ბათუმში მშენებარე გრანდიოზულ სასტუმრო-საცხოვრებელ კომპლექსში Holiday Inn Blue Sky Tower კომპანია ICE 15 ერთეული ოტისის წარმოების ლიფტს და 4 ესკალატორს დაამონტაჟებს.',
        en: 'In the grand hotel-residential complex Holiday Inn Blue Sky Tower under construction in Batumi, ICE will install 15 OTIS elevators and 4 escalators.',
      },
      {
        ka: 'პროექტი კიდევ ერთხელ ადასტურებს კომპანიის ლიდერ პოზიციას ვერტიკალური ტრანსპორტირების სისტემების მიმართულებით.',
        en: 'The project once again confirms the company\'s leading position in vertical transportation systems.',
      },
    ],
    image: '/images/news/Screenshot%202025-02-02%20at%2019.30.59.png',
  },
  {
    slug: 'dar-tower',
    category: { ka: 'პროექტები', en: 'Projects' },
    title: {
      ka: 'Dar Tower — 20 შანხაი მიცუბიშის ლიფტი',
      en: 'Dar Tower — 20 Shanghai Mitsubishi elevators',
    },
    date: { ka: '02 თებერვალი, 2025', en: 'February 02, 2025' },
    excerpt: {
      ka: 'სამშენებლო კომპანიამ „დარბილდინგი" ბათუმში გრანდიოზული პროექტი Dar Tower განახორციელა, სადაც „აი-სი-იმ" 20 ერთეული ლიფტი დაამონტაჟა.',
      en: 'Construction company "DarBuilding" delivered the grand Dar Tower project in Batumi, where ICE installed 20 elevators.',
    },
    body: [
      {
        ka: 'სამშენებლო კომპანიამ „დარბილდინგი" ბათუმში გრანდიოზული პროექტი Dar Tower განახორციელა. კომპლექსის ერთ-ერთ შენობაში საერთაშორისო ბრენდის სასტუმრო Hilton Garden Inn განთავსდა.',
        en: 'Construction company "DarBuilding" delivered the grand Dar Tower project in Batumi. One of the buildings hosts the international Hilton Garden Inn hotel.',
      },
      {
        ka: '„აი-სი-იმ" პროექტზე 20 ერთეული შანხაი მიცუბიშის ლიფტი დაამონტაჟა. 34-სართულიან შენობას 3 მ/წ სიჩქარის ლიფტები ემსახურება.',
        en: 'ICE installed 20 Shanghai Mitsubishi elevators. The 34-floor building is served by 3 m/s elevators.',
      },
    ],
    image: photo('news-dar', 1200, 600),
  },
  {
    slug: 'steps-residential',
    category: { ka: 'პროექტები', en: 'Projects' },
    title: {
      ka: 'STEPS — 27 სართულიანი საცხოვრებელი კომპლექსი',
      en: 'STEPS — 27-floor residential complex',
    },
    date: { ka: '20 იანვარი, 2025', en: 'January 20, 2025' },
    excerpt: {
      ka: 'კომპანია პრემიუმ ჯგუფის მსოფლიო დონის პროექტ „STEPS"-ში ICE 4 ერთეული OTIS-ის ბრენდის ლიფტს დაამონტაჟებს.',
      en: 'In Premium Group\'s world-class project "STEPS", ICE will install 4 OTIS-brand elevators.',
    },
    body: [
      {
        ka: 'კომპანია პრემიუმ ჯგუფის მსოფლიო დონის პროექტი „STEPS" სასტუმროს ტიპის 27 სართულიანი საცხოვრებელი კომპლექსია.',
        en: 'Premium Group\'s world-class project "STEPS" is a hotel-type 27-floor residential complex.',
      },
      {
        ka: 'ICE პროექტის ფარგლებში 4 ერთეული OTIS-ის ბრენდის ლიფტს დაამონტაჟებს.',
        en: 'Within the project ICE will install 4 OTIS-brand elevators.',
      },
    ],
    image: photo('news-steps', 1200, 600),
  },
  {
    slug: 'mziuri-gardens',
    category: { ka: 'პროექტები', en: 'Projects' },
    title: {
      ka: 'მზიური გარდენსი — ზღვისპირა საცხოვრებელი',
      en: 'Mziuri Gardens — seaside residence',
    },
    date: { ka: '12 იანვარი, 2025', en: 'January 12, 2025' },
    excerpt: {
      ka: 'კურორტ მახინჯაურში ზღვისპირა საცხოვრებელ უნიკალურ კომპლექსში ჩვენმა გუნდმა უკვე 3 ლიფტი დაამონტაჟა.',
      en: 'In the unique seaside residential complex in the Makhinjauri resort, our team has already installed 3 elevators.',
    },
    body: [
      {
        ka: '„მზიური გარდენსი" კურორტ მახინჯაურში ზღვისპირა საცხოვრებელი უნიკალური კომპლექსია.',
        en: '"Mziuri Gardens" is a unique seaside residential complex in the Makhinjauri resort.',
      },
      {
        ka: 'ჩვენმა გუნდმა ობიექტზე 3 ერთეული თურქული წარმოების ლიფტი უკვე დაამონტაჟა და დამატებით 9 ერთეული ლიფტის მონტაჟი უახლოეს მომავალში დაიწყება.',
        en: 'Our team has already installed 3 Turkish-made elevators and installation of 9 more will begin soon.',
      },
    ],
    image: photo('news-mziuri', 1200, 600),
  },
]
