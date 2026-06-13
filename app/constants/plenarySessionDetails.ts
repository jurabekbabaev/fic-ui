import plenary2025Image1 from "@/assets/images/plenarysessions/plenary2025/STU_8900_.jpg";
import plenary2025Image2 from "@/assets/images/plenarysessions/plenary2025/ATM_9667.JPG";
import plenary2025Image3 from "@/assets/images/plenarysessions/plenary2025/ATM_9764.JPG";
import plenary2025Image4 from "@/assets/images/plenarysessions/plenary2025/DSC_2538.JPG";
import plenary2025Image5 from "@/assets/images/plenarysessions/plenary2025/XPI_2417.JPG";
import plenary2025Image6 from "@/assets/images/plenarysessions/plenary2025/IMG_0036.JPG";
import plenary2025Image7 from "@/assets/images/plenarysessions/plenary2025/SUT_7962.JPG";
import plenary2025Image8 from "@/assets/images/plenarysessions/plenary2025/SUT_8193.JPG";

import plenary2024Image1 from "@/assets/images/plenarysessions/info2_1.png";
import plenary2024Image2 from "@/assets/images/plenarysessions/info2_2.png";
import plenary2024Image3 from "@/assets/images/plenarysessions/info2_3.png";
import plenary2024Image4 from "@/assets/images/plenarysessions/info2_4.png";
import plenary2024Image5 from "@/assets/images/plenarysessions/info2_5.png";
import plenary2024Image6 from "@/assets/images/plenarysessions/info2_6.png";
import plenary2024Image7 from "@/assets/images/plenarysessions/info2_7.png";
import plenary2024Image8 from "@/assets/images/plenarysessions/info2_8.png";

import plenary2023Image1 from "@/assets/images/plenarysessions/info3_1.png";
import plenary2023Image2 from "@/assets/images/plenarysessions/info3_2.png";
import plenary2023Image3 from "@/assets/images/plenarysessions/info3_3.png";
import plenary2023Image4 from "@/assets/images/plenarysessions/info3_4.png";
import plenary2023Image5 from "@/assets/images/plenarysessions/info3_5.png";
import plenary2023Image6 from "@/assets/images/plenarysessions/info3_6.png";
import plenary2023Image7 from "@/assets/images/plenarysessions/info3_7.png";
import plenary2023Image8 from "@/assets/images/plenarysessions/info3_8.png";

export type PlenarySessionYear = "2025" | "2024" | "2022";

export interface PlenarySessionImage {
  src: string;
  alt: string;
}

export type PlenarySessionLocale = "uz" | "ru" | "en";

export interface PlenarySessionLocalizedText {
  summary: string;
  content: string[];
}

export interface PlenarySessionLocalizedMeta {
  cardTitle: string;
  eyebrow: string;
  title: string;
}

export interface PlenarySessionAction {
  label: string;
  href: string;
  fileName?: string;
}

export interface PlenarySessionDetail {
  year: PlenarySessionYear;
  cardTitle: string;
  cardImage: string;
  eyebrow: string;
  title: string;
  summary: string;
  collageImages: PlenarySessionImage[];
  content: string[];
  localizedMeta?: Record<PlenarySessionLocale, PlenarySessionLocalizedMeta>;
  localizedText?: Record<PlenarySessionLocale, PlenarySessionLocalizedText>;
  externalLink: PlenarySessionAction;
  downloadFile: PlenarySessionAction;
}

const plenarySession2022Text: Record<PlenarySessionLocale, PlenarySessionLocalizedText> = {
  uz: {
    summary:
      "2022-yil 16-noyabr kuni Toshkent shahridagi “Ko‘ksaroy” qarorgohida O‘zbekiston Respublikasining investitsiyaviy jozibadorligini oshirish, biznes muhitini yanada takomillashtirish hamda xalqaro hamkorlikni kengaytirishga bag‘ishlangan 1-Yalpi majlis bo‘lib o‘tdi.",
    content: [
      "Mazkur tadbir O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev raisligida yuqori darajada tashkil etildi hamda davlat va xususiy sektor o‘rtasida ochiq, tizimli va konstruktiv muloqotni ta’minlashga qaratildi.",
      "Tadbirning maqsadi:",
      "mamlakatda ishbilarmonlik va investitsiya muhitini yanada yaxshilash;",
      "xorijiy investorlar uchun huquqiy va institutsional kafolatlarni mustahkamlash;",
      "davlat va xususiy sektor o‘rtasidagi hamkorlikni yangi bosqichga olib chiqish;",
      "iqtisodiyot tarmoqlarini modernizatsiya qilish va innovatsion rivojlanishni rag‘batlantirish.",
      "Yig‘ilishda 150 nafardan ortiq yuqori darajadagi vakillar ishtirok etdi. Jumladan:",
      "xalqaro moliya institutlari:",
      "Yevropa Tiklanish va Taraqqiyot Banki",
      "Xalqaro moliya korporatsiyasi",
      "Xalqaro konsalting va audit kompaniyalari: PwC",
      "Yirik sanoat va investitsiya kompaniyalari: Çalık Holding, Cengiz Holding",
      "O‘zbekiston Respublikasi vazirliklari, idoralari, tarmoq birlashmalari va biznes hamjamiyati vakillari.",
      "Yalpi majlis doirasida quyidagi ustuvor yo‘nalishlar bo‘yicha atroflicha muhokamalar olib borildi:",
      "Ishbilarmonlik muhitini yaxshilash;",
      "Tadbirkorlik faoliyatini yuritishdagi ma’muriy to‘siqlarni qisqartirish;",
      "Litsenziyalash va ruxsat berish tartib-taomillarini soddalashtirish;",
      "Shaffoflikni oshirish masalalari ko‘rib chiqildi.",
      "Soliq va qonunchilik barqarorligi:",
      "Soliq siyosatining izchilligini ta’minlash;",
      "Biznes uchun prognoz qilinadigan huquqiy muhit yaratish;",
      "Normativ-huquqiy hujjatlarni takomillashtirish zarurati ta’kidlandi.",
      "Davlat-xususiy sheriklikni rivojlantirish:",
      "Infratuzilma, energetika, transport, sog‘liqni saqlash va boshqa ijtimoiy sohalarda davlat-xususiy sheriklik mexanizmlarini keng joriy etish istiqbollari muhokama qilindi.",
      "Yashil iqtisodiyot va energetika:",
      "Qayta tiklanuvchi energiya manbalarini rivojlantirish, energiya samaradorligini oshirish va ekologik barqarorlikni ta’minlash masalalariga alohida e’tibor qaratildi.",
      "Raqamli transformatsiya:",
      "Iqtisodiyotning barcha tarmoqlarida raqamli texnologiyalarni keng joriy etish, elektron hukumat tizimlarini rivojlantirish hamda innovatsion yechimlarni qo‘llab-quvvatlash muhim yo‘nalish sifatida belgilandi.",
      "Yalpi majlis yakunlariga ko‘ra:",
      "40 dan ortiq aniq taklif va tashabbuslar ishlab chiqildi;",
      "davlat organlari va xalqaro investorlar o‘rtasida hamkorlikni kengaytirish bo‘yicha kelishuvlarga erishildi;",
      "ustuvor yo‘nalishlar bo‘yicha amaliy chora-tadbirlarni nazarda tutuvchi rasmiy bayonnoma imzolandi;",
      "Shavkat Mirziyoyev tomonidan mas’ul vazirlik va idoralarga aniq topshiriqlar berildi.",
      "Mazkur natijalar mamlakatda investitsiya muhitini yanada yaxshilash, iqtisodiy islohotlarni jadallashtirish va barqaror iqtisodiy o‘sishni ta’minlashga xizmat qiladi.",
      "Xulosa: 1-Yalpi majlis O‘zbekiston Respublikasining ochiq, barqaror va investorlarga yo‘naltirilgan iqtisodiy siyosatini izchil davom ettirayotganini namoyon etdi. Tadbir doirasida ilgari surilgan taklif va tashabbuslar, shuningdek, belgilangan vazifalar mamlakatning uzoq muddatli ijtimoiy-iqtisodiy rivojlanishida muhim ahamiyat kasb etadi.",
    ],
  },
  ru: {
    summary:
      "16 ноября 2022 года в резиденции «Куксарой» в городе Ташкенте состоялось 1-е Пленарное заседание, посвящённое повышению инвестиционной привлекательности Республики Узбекистан, дальнейшему совершенствованию деловой среды, а также расширению международного сотрудничества.",
    content: [
      "Данное мероприятие было организовано на высоком уровне под председательством Президента Республики Узбекистан Шавкат Мирзиёев и было направлено на обеспечение открытого, системного и конструктивного диалога между государственным и частным секторами.",
      "Цели мероприятия:",
      "улучшение деловой и инвестиционной среды в стране;",
      "укрепление правовых и институциональных гарантий для иностранных инвесторов;",
      "выведение взаимодействия между государственным и частным секторами на новый уровень;",
      "модернизация отраслей экономики и стимулирование инновационного развития.",
      "В заседании приняли участие более 150 высокопоставленных представителей. В частности:",
      "международные финансовые институты:",
      "Европейский банк реконструкции и развития",
      "Международная финансовая корпорация",
      "международные консалтинговые и аудиторские компании: PwC",
      "крупные промышленные и инвестиционные компании: Çalık Holding, Cengiz Holding",
      "представители министерств, ведомств, отраслевых объединений и бизнес-сообщества Республики Узбекистан.",
      "В рамках пленарного заседания были подробно обсуждены следующие приоритетные направления:",
      "Улучшение деловой среды;",
      "сокращение административных барьеров при осуществлении предпринимательской деятельности;",
      "упрощение процедур лицензирования и разрешительной системы;",
      "повышение прозрачности.",
      "Стабильность налоговой и правовой системы:",
      "обеспечение последовательности налоговой политики;",
      "создание предсказуемой правовой среды для бизнеса;",
      "подчёркнута необходимость совершенствования нормативно-правовых актов.",
      "Развитие государственно-частного партнёрства:",
      "обсуждены перспективы широкого внедрения механизмов ГЧП в инфраструктуре, энергетике, транспорте, здравоохранении и других социальных сферах.",
      "Зелёная экономика и энергетика:",
      "особое внимание уделено развитию возобновляемых источников энергии, повышению энергоэффективности и обеспечению экологической устойчивости.",
      "Цифровая трансформация:",
      "определено в качестве важного направления широкое внедрение цифровых технологий во все отрасли экономики, развитие систем электронного правительства и поддержка инновационных решений.",
      "По итогам пленарного заседания:",
      "разработано более 40 конкретных предложений и инициатив;",
      "достигнуты договорённости по расширению сотрудничества между государственными органами и международными инвесторами;",
      "подписан официальный протокол, предусматривающий практические меры по приоритетным направлениям;",
      "Шавкат Мирзиёев даны конкретные поручения ответственным министерствам и ведомствам.",
      "Данные результаты будут способствовать дальнейшему улучшению инвестиционного климата, ускорению экономических реформ и обеспечению устойчивого экономического роста.",
      "Заключение: 1-е Пленарное заседание продемонстрировало последовательность проводимой политики Республики Узбекистан, направленной на открытость, устойчивость и ориентированность на инвесторов. Выдвинутые инициативы и определённые задачи имеют важное значение для долгосрочного социально-экономического развития страны.",
    ],
  },
  en: {
    summary:
      "On November 16, 2022, the 1st Plenary Session was held at the “Kuksaroy” residence in the city of Tashkent, dedicated to enhancing the investment attractiveness of the Republic of Uzbekistan, further improving the business environment, and expanding international cooperation.",
    content: [
      "The event was organized at a high level under the chairmanship of the President of the Republic of Uzbekistan Shavkat Mirziyoyev and was aimed at ensuring an open, systematic, and constructive dialogue between the public and private sectors.",
      "Objectives of the event:",
      "improving the business and investment environment in the country;",
      "strengthening legal and institutional guarantees for foreign investors;",
      "bringing cooperation between the public and private sectors to a new level;",
      "modernizing economic sectors and stimulating innovative development.",
      "More than 150 high-level representatives participated in the meeting. In particular:",
      "international financial institutions:",
      "European Bank for Reconstruction and Development",
      "International Finance Corporation",
      "international consulting and auditing companies: PwC",
      "large industrial and investment companies: Çalık Holding, Cengiz Holding",
      "representatives of ministries, agencies, sectoral associations, and the business community of the Republic of Uzbekistan.",
      "Within the framework of the plenary session, the following priority areas were discussed in detail:",
      "Improvement of the business environment;",
      "reduction of administrative barriers in conducting entrepreneurial activities;",
      "simplification of licensing and permitting procedures;",
      "enhancing transparency.",
      "Stability of tax and legal framework:",
      "ensuring consistency of tax policy;",
      "creating a predictable legal environment for business;",
      "the need to improve regulatory and legal acts was emphasized.",
      "Development of public-private partnership:",
      "prospects for the wide implementation of PPP mechanisms in infrastructure, energy, transport, healthcare, and other social sectors were discussed.",
      "Green economy and energy:",
      "special attention was paid to the development of renewable energy sources, increasing energy efficiency, and ensuring environmental sustainability.",
      "Digital transformation:",
      "the wide implementation of digital technologies across all sectors of the economy, development of e-government systems, and support for innovative solutions were identified as key priorities.",
      "Following the plenary session:",
      "more than 40 specific proposals and initiatives were developed;",
      "agreements were reached to expand cooperation between government bodies and international investors;",
      "an official protocol was signed outlining practical measures in priority areas;",
      "specific instructions were given by Shavkat Mirziyoyev to responsible ministries and agencies.",
      "These results will contribute to further improving the investment climate, accelerating economic reforms, and ensuring sustainable economic growth.",
      "Conclusion: The 1st Plenary Session demonstrated the consistent policy of the Republic of Uzbekistan aimed at openness, sustainability, and investor orientation. The initiatives put forward and the tasks defined are of significant importance for the long-term socio-economic development of the country.",
    ],
  },
};

const plenarySession2024Text: Record<PlenarySessionLocale, PlenarySessionLocalizedText> = {
  uz: {
    summary:
      "2024-yil 3-may kuni Toshkent shahrida o‘tkazilgan Toshkent xalqaro investitsiya forumi doirasida Xalqaro ko‘rgazma kompleksida 2-Yalpi majlis – Xorijiy investorlar kengashi yig‘ilishi bo‘lib o‘tdi. Mazkur tadbir O‘zbekiston Respublikasining investitsiyaviy jozibadorligini yanada oshirish, xorijiy investorlar bilan samarali muloqotni mustahkamlash hamda iqtisodiy islohotlarni yangi bosqichga olib chiqishga qaratildi.",
    content: [
      "Yig‘ilish O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev raisligida yuqori darajada tashkil etildi.",
      "Tadbirning maqsadi:",
      "mamlakatda qulay va barqaror investitsiya muhitini shakllantirish;",
      "xorijiy investorlar bilan tizimli va samarali hamkorlikni kengaytirish;",
      "iqtisodiy islohotlarni jadallashtirish va ularning amaliy samaradorligini oshirish;",
      "xususiy sektor rolini kuchaytirish va bozor mexanizmlarini rivojlantirish.",
      "Ishtirokchilar",
      "Yig‘ilishda 93 mamlakatdan 2500 nafardan ortiq yuqori darajadagi delegatlar ishtirok etdi. Jumladan:",
      "xalqaro moliya institutlari vakillari:",
      "Yevropa Tiklanish va Taraqqiyot Banki",
      "Xalqaro valyuta jamg‘armasi",
      "Xorijiy investorlar, yirik kompaniyalar va moliyaviy institutlar rahbarlari;",
      "O‘zbekiston Respublikasi vazirliklari, idoralari va biznes hamjamiyati vakillari.",
      "Yalpi majlis doirasida iqtisodiy rivojlanishning muhim yo‘nalishlari bo‘yicha keng qamrovli muhokamalar olib borildi:",
      "Ustuvor yo‘nalishlar",
      "14 ta strategik yo‘nalish doirasida quyidagi masalalar ko‘rib chiqildi:",
      "Soliq tizimidagi yangiliklar va islohotlar;",
      "Davlat aktivlarini xususiylashtirish jarayonlari;",
      "Infratuzilma loyihalarini rivojlantirish;",
      "Investitsiya muhitini yaxshilashga qaratilgan boshqa ustuvor yo‘nalishlar.",
      "Ishchi guruhlar tashkil etilishi",
      "Yig‘ilish yakunida quyidagi yo‘nalishlar bo‘yicha 4 ta ishchi guruh tashkil etish taklifi ilgari surildi:",
      "Soliq siyosati va ma’murchiligi;",
      "Xususiy sektorni rivojlantirish;",
      "Raqamli iqtisodiyot;",
      "Investitsiya jarayonlarini muvofiqlashtirish.",
      "Xalqaro hamkorlik",
      "Xususan, European Bank for Reconstruction and Development tomonidan texnik ko‘mak va ekspert yordamini kengaytirish masalalari muhokama qilindi.",
      "Muhokamalar yakuni va erishilgan natijalar",
      "Yalpi majlis yakunlariga ko‘ra quyidagi muhim natijalarga erishildi:",
      "Umumiy qiymati 26 milliard AQSh dollariga teng investitsiya loyihalari shakllantirildi;",
      "Davlat va investorlar o‘rtasidagi hamkorlikni kengaytirish bo‘yicha kelishuvlarga erishildi;",
      "O‘zbekiston Respublikasi Prezidentining PP-179 qarori qabul qilindi;",
      "Shavkat Mirziyoyev tomonidan tegishli vazirlik va idoralarga aniq topshiriqlar berildi.",
      "Mazkur natijalar mamlakatda investitsiya faoliyatini kengaytirish, iqtisodiy o‘sishni jadallashtirish va xalqaro hamkorlikni yangi bosqichga olib chiqishga xizmat qiladi.",
      "Xulosa: 2-Yalpi majlis O‘zbekiston Respublikasining ochiq iqtisodiyot, faol investitsiya siyosati va xalqaro hamkorlikni rivojlantirish yo‘lidagi izchil sa’y-harakatlarini yana bir bor tasdiqladi. Tadbir doirasida ilgari surilgan tashabbuslar, shakllantirilgan loyihalar va qabul qilingan qarorlar mamlakatning uzoq muddatli iqtisodiy taraqqiyotida muhim ahamiyat kasb etadi.",
    ],
  },
  ru: {
    summary:
      "3 мая 2024 года в городе Ташкенте в рамках Ташкентского международного инвестиционного форума в Международном выставочном комплексе состоялось 2-е Пленарное заседание – заседание Совета иностранных инвесторов. Данное мероприятие было направлено на дальнейшее повышение инвестиционной привлекательности Республики Узбекистан, укрепление эффективного диалога с иностранными инвесторами, а также выведение экономических реформ на новый этап.",
    content: [
      "Заседание было организовано на высоком уровне под председательством Президента Республики Узбекистан Шавкат Мирзиёев.",
      "Цели мероприятия:",
      "формирование благоприятной и устойчивой инвестиционной среды в стране;",
      "расширение системного и эффективного сотрудничества с иностранными инвесторами;",
      "ускорение экономических реформ и повышение их практической эффективности;",
      "усиление роли частного сектора и развитие рыночных механизмов.",
      "Участники",
      "В заседании приняли участие более 2500 высокопоставленных делегатов из 93 стран. В частности:",
      "представители международных финансовых институтов:",
      "Европейский банк реконструкции и развития",
      "Международный валютный фонд",
      "руководители иностранных инвесторов, крупных компаний и финансовых институтов;",
      "представители министерств, ведомств и бизнес-сообщества Республики Узбекистан.",
      "В рамках пленарного заседания были проведены широкомасштабные обсуждения по ключевым направлениям экономического развития:",
      "Приоритетные направления",
      "В рамках 14 стратегических направлений были рассмотрены следующие вопросы:",
      "нововведения и реформы в налоговой системе;",
      "процессы приватизации государственных активов;",
      "развитие инфраструктурных проектов;",
      "другие приоритетные направления, направленные на улучшение инвестиционной среды.",
      "Формирование рабочих групп",
      "По итогам заседания было предложено создать 4 рабочие группы по следующим направлениям:",
      "налоговая политика и администрирование;",
      "развитие частного сектора;",
      "цифровая экономика;",
      "координация инвестиционных процессов.",
      "Международное сотрудничество",
      "В частности, были обсуждены вопросы расширения технической помощи и экспертной поддержки со стороны European Bank for Reconstruction and Development.",
      "Итоги обсуждений и достигнутые результаты",
      "По итогам пленарного заседания были достигнуты следующие важные результаты:",
      "сформированы инвестиционные проекты на общую сумму 26 миллиардов долларов США;",
      "достигнуты договорённости по расширению сотрудничества между государством и инвесторами;",
      "принято постановление Президента Республики Узбекистан PP-179;",
      "Shavkat Mirziyoyev даны конкретные поручения соответствующим министерствам и ведомствам.",
      "Данные результаты будут способствовать расширению инвестиционной деятельности, ускорению экономического роста и выводу международного сотрудничества на новый уровень.",
      "Заключение: 2-е Пленарное заседание вновь подтвердило последовательные усилия Республики Узбекистан по развитию открытой экономики, активной инвестиционной политики и международного сотрудничества. Выдвинутые инициативы, сформированные проекты и принятые решения имеют важное значение для долгосрочного экономического развития страны.",
    ],
  },
  en: {
    summary:
      "On May 3, 2024, in the city of Tashkent, within the framework of the Tashkent International Investment Forum, the 2nd Plenary Session – the meeting of the Foreign Investors Council – was held at the International Exhibition Complex. The event was aimed at further enhancing the investment attractiveness of the Republic of Uzbekistan, strengthening effective dialogue with foreign investors, and bringing economic reforms to a new stage.",
    content: [
      "The meeting was organized at a high level under the chairmanship of the President of the Republic of Uzbekistan Shavkat Mirziyoyev.",
      "Objectives of the event:",
      "formation of a favorable and stable investment environment in the country;",
      "expansion of systematic and effective cooperation with foreign investors;",
      "acceleration of economic reforms and increasing their practical effectiveness;",
      "strengthening the role of the private sector and development of market mechanisms.",
      "Participants",
      "More than 2,500 high-level delegates from 93 countries participated in the meeting. In particular:",
      "representatives of international financial institutions:",
      "European Bank for Reconstruction and Development",
      "International Monetary Fund",
      "leaders of foreign investors, large companies and financial institutions;",
      "representatives of ministries, agencies, and the business community of the Republic of Uzbekistan.",
      "Within the framework of the plenary session, extensive discussions were held on key areas of economic development:",
      "Priority areas",
      "Within 14 strategic directions, the following issues were considered:",
      "innovations and reforms in the tax system;",
      "processes of privatization of state assets;",
      "development of infrastructure projects;",
      "other priority areas aimed at improving the investment environment.",
      "Establishment of working groups",
      "Following the meeting, it was proposed to establish 4 working groups in the following areas:",
      "tax policy and administration;",
      "development of the private sector;",
      "digital economy;",
      "coordination of investment processes.",
      "International cooperation",
      "In particular, issues of expanding technical assistance and expert support from the European Bank for Reconstruction and Development were discussed.",
      "Results of discussions and achieved outcomes",
      "Following the plenary session, the following important results were achieved:",
      "investment projects totaling 26 billion US dollars were formed;",
      "agreements were reached to expand cooperation between the state and investors;",
      "the Resolution of the President of the Republic of Uzbekistan PP-179 was adopted;",
      "specific instructions were given by Shavkat Mirziyoyev to the relevant ministries and agencies.",
      "These results will contribute to expanding investment activities, accelerating economic growth, and bringing international cooperation to a new level.",
      "Conclusion: The 2nd Plenary Session once again confirmed the consistent efforts of the Republic of Uzbekistan in developing an open economy, active investment policy, and international cooperation. The initiatives put forward, the projects formed, and the decisions adopted are of significant importance for the long-term economic development of the country.",
    ],
  },
};

const plenarySession2025Text: Record<PlenarySessionLocale, PlenarySessionLocalizedText> = {
  uz: {
    summary:
      "2025-yil 11-iyun kuni Toshkent shahridagi Toshkent Xalqaro kongress-hollida 3-Yalpi majlis – Xorijiy investorlar kengashi yig‘ilishi bo‘lib o‘tdi. Mazkur tadbir O‘zbekiston Respublikasida investitsiya muhitini yanada mustahkamlash, xorijiy investorlar bilan ochiq va samarali muloqotni kengaytirish hamda iqtisodiy islohotlarni izchil davom ettirishga qaratildi.",
    content: [
      "Yig‘ilish O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev raisligida yuqori darajada tashkil etildi.",
      "Tadbirning maqsadi:",
      "mamlakatda barqaror va prognoz qilinadigan investitsiya muhitini shakllantirish;",
      "xorijiy investorlar bilan samarali hamkorlikni chuqurlashtirish;",
      "iqtisodiyotda xususiy sektor rolini oshirish;",
      "yirik investitsiya loyihalarini amalga oshirishni jadallashtirish.",
      "Ishtirokchilar",
      "Yig‘ilishda yuqori darajadagi xalqaro va mahalliy vakillar ishtirok etdi. Jumladan:",
      "xalqaro moliya institutlari vakillari:",
      "Yevropa Tiklanish va Taraqqiyot Bankining prezidenti Odil Renbasso",
      "yirik xalqaro kompaniyalar rahbarlari:",
      "Aksa",
      "Cengiz Holding",
      "O‘zbekiston Respublikasi vazirliklari, idoralari va biznes hamjamiyati vakillari.",
      "Yalpi majlis doirasida iqtisodiy rivojlanishning muhim yo‘nalishlari bo‘yicha keng qamrovli muhokamalar olib borildi:",
      "Ustuvor yo‘nalishlar",
      "quyidagi masalalar ko‘rib chiqildi:",
      "soliq siyosatining barqarorligi va to‘g‘ridan-to‘g‘ri amal qiluvchi qonunchilikni shakllantirish;",
      "infratuzilma loyihalarini rivojlantirish va xususiy sektor ulushini oshirish;",
      "yashil iqtisodiyot tamoyillarini joriy etish va yirik investitsiya loyihalarini amalga oshirish.",
      "Xalqaro hamkorlik",
      "Xususan, Yevropa Tiklanish va Taraqqiyot Banki tomonidan texnik ko‘mak va ekspert yordamini kengaytirish masalalari muhokama qilindi.",
      "Muhokamalar yakuni va erishilgan natijalar",
      "Yalpi majlis yakunlariga ko‘ra quyidagi muhim natijalarga erishildi:",
      "40 dan ortiq tashabbuslar va takliflar ilgari surildi;",
      "ustuvor yo‘nalishlar bo‘yicha rasmiy bayonnoma qabul qilindi;",
      "O‘zbekiston Respublikasi Prezidentining PQ-226 qarori qabul qilindi;",
      "Shavkat Mirziyoyev tomonidan tegishli vazirlik va idoralarga aniq topshiriqlar berildi.",
      "Mazkur natijalar mamlakatda investitsiya muhitini yanada yaxshilash, iqtisodiy o‘sishni ta’minlash va xalqaro hamkorlikni mustahkamlashga xizmat qiladi.",
      "Xulosa: 3-Yalpi majlis O‘zbekiston Respublikasining ochiq va barqaror investitsiya siyosatini izchil davom ettirayotganini, shuningdek, xorijiy investorlar bilan samarali hamkorlikni yangi bosqichga olib chiqishga intilayotganini yana bir bor tasdiqladi. Tadbir doirasida ilgari surilgan tashabbuslar va qabul qilingan qarorlar mamlakatning uzoq muddatli iqtisodiy rivojlanishida muhim o‘rin tutadi.",
    ],
  },
  ru: {
    summary:
      "11 июня 2025 года в городе Ташкенте в Ташкентском международном конгресс-холле состоялось 3-е Пленарное заседание – заседание Совета иностранных инвесторов. Данное мероприятие было направлено на дальнейшее укрепление инвестиционного климата в Республике Узбекистан, расширение открытого и эффективного диалога с иностранными инвесторами, а также последовательное продолжение экономических реформ.",
    content: [
      "Заседание было организовано на высоком уровне под председательством Президента Республики Узбекистан Шавкат Мирзиёев.",
      "Цели мероприятия:",
      "формирование стабильной и предсказуемой инвестиционной среды в стране;",
      "углубление эффективного сотрудничества с иностранными инвесторами;",
      "повышение роли частного сектора в экономике;",
      "ускорение реализации крупных инвестиционных проектов.",
      "Участники",
      "В заседании приняли участие представители высокого уровня международных и национальных структур. В частности:",
      "представители международных финансовых институтов:",
      "Президент Европейского банка реконструкции и развития Одил Рено-Бассо",
      "руководители крупных международных компаний:",
      "Aksa",
      "Cengiz Holding",
      "представители министерств, ведомств и бизнес-сообщества Республики Узбекистан.",
      "В рамках пленарного заседания были проведены широкомасштабные обсуждения по ключевым направлениям экономического развития:",
      "Приоритетные направления",
      "были рассмотрены следующие вопросы:",
      "обеспечение стабильности налоговой политики и формирование прямого действия законодательства;",
      "развитие инфраструктурных проектов и увеличение доли частного сектора;",
      "внедрение принципов «зеленой» экономики и реализация крупных инвестиционных проектов.",
      "Международное сотрудничество",
      "В частности, были обсуждены вопросы расширения технической помощи и экспертной поддержки со стороны Европейский банк реконструкции и развития.",
      "Итоги обсуждений и достигнутые результаты",
      "По итогам пленарного заседания были достигнуты следующие важные результаты:",
      "выдвинуто более 40 инициатив и предложений;",
      "принят официальный протокол по приоритетным направлениям;",
      "принято постановление Президента Республики Узбекистан № ПП-226;",
      "Шавкат Мирзиёев даны конкретные поручения соответствующим министерствам и ведомствам.",
      "Данные результаты будут способствовать дальнейшему улучшению инвестиционного климата, обеспечению экономического роста и укреплению международного сотрудничества.",
      "Заключение: 3-е Пленарное заседание вновь подтвердило последовательную политику Республики Узбекистан, направленную на развитие открытой и устойчивой инвестиционной среды, а также стремление вывести сотрудничество с иностранными инвесторами на новый уровень. Выдвинутые инициативы и принятые решения имеют важное значение для долгосрочного экономического развития страны.",
    ],
  },
  en: {
    summary:
      "On June 11, 2025, the 3rd Plenary Session – the meeting of the Foreign Investors Council – was held at the Tashkent International Congress Hall in the city of Tashkent. The event was aimed at further strengthening the investment climate in the Republic of Uzbekistan, expanding open and effective dialogue with foreign investors, and consistently continuing economic reforms.",
    content: [
      "The meeting was organized at a high level under the chairmanship of the President of the Republic of Uzbekistan Shavkat Mirziyoyev.",
      "Objectives of the event:",
      "formation of a stable and predictable investment environment in the country;",
      "deepening effective cooperation with foreign investors;",
      "increasing the role of the private sector in the economy;",
      "accelerating the implementation of large investment projects.",
      "Participants",
      "High-level representatives of international and national institutions participated in the meeting. In particular:",
      "representatives of international financial institutions:",
      "European Bank for Reconstruction and Development",
      "its president Odil Renbasso",
      "leaders of major international companies:",
      "Aksa",
      "Cengiz Holding",
      "representatives of ministries, agencies, and the business community of the Republic of Uzbekistan.",
      "Within the framework of the plenary session, extensive discussions were held on key areas of economic development:",
      "Priority areas",
      "the following issues were considered:",
      "ensuring the stability of tax policy and establishing directly applicable legislation;",
      "development of infrastructure projects and increasing the share of the private sector;",
      "implementation of green economy principles and execution of large investment projects.",
      "International cooperation",
      "In particular, issues of expanding technical assistance and expert support from the European Bank for Reconstruction and Development were discussed.",
      "Results of discussions and achieved outcomes",
      "Following the plenary session, the following important results were achieved:",
      "more than 40 initiatives and proposals were put forward;",
      "an official protocol on priority areas was adopted;",
      "the Resolution of the President of the Republic of Uzbekistan Presidential Resolution No. PP-226 was adopted;",
      "specific instructions were given by Shavkat Mirziyoyev to the relevant ministries and agencies.",
      "These results will contribute to further improving the investment climate, ensuring economic growth, and strengthening international cooperation.",
      "Conclusion: The 3rd Plenary Session once again confirmed the consistent policy of the Republic of Uzbekistan aimed at developing an open and sustainable investment environment, as well as the intention to elevate cooperation with foreign investors to a new level. The initiatives put forward and the decisions adopted are of significant importance for the long-term economic development of the country.",
    ],
  },
};

// Update only this object later to swap images, text, links, or downloadable files.
export const plenarySessionDetails: Record<PlenarySessionYear, PlenarySessionDetail> = {
  "2025": {
    year: "2025",
    cardTitle: "Третье пленарное заседание совета иностранных инвесторов, 11 июня 2025 г.",
    cardImage: plenary2025Image1,
    eyebrow: "Пленарная сессия 2025",
    title: "Третье пленарное заседание совета иностранных инвесторов",
    localizedMeta: {
      uz: {
        cardTitle: "Xorijiy investorlar kengashining uchinchi yalpi majlisi, 2025-yil 11-iyun",
        eyebrow: "Yalpi majlis 2025",
        title: "Xorijiy investorlar kengashining uchinchi yalpi majlisi",
      },
      ru: {
        cardTitle: "Третье пленарное заседание совета иностранных инвесторов, 11 июня 2025 г.",
        eyebrow: "Пленарная сессия 2025",
        title: "Третье пленарное заседание совета иностранных инвесторов",
      },
      en: {
        cardTitle: "Third plenary session of the Foreign Investors Council, June 11, 2025",
        eyebrow: "Plenary session 2025",
        title: "Third plenary session of the Foreign Investors Council",
      },
    },
    summary: plenarySession2025Text.ru.summary,
    collageImages: [
      { src: plenary2025Image1, alt: "Пленарная сессия 2025 - кадр 1" },
      { src: plenary2025Image2, alt: "Пленарная сессия 2025 - кадр 2" },
      { src: plenary2025Image3, alt: "Пленарная сессия 2025 - кадр 3" },
      { src: plenary2025Image4, alt: "Пленарная сессия 2025 - кадр 4" },
      { src: plenary2025Image5, alt: "Пленарная сессия 2025 - кадр 5" },
      { src: plenary2025Image6, alt: "Пленарная сессия 2025 - кадр 6" },
      { src: plenary2025Image7, alt: "Пленарная сессия 2025 - кадр 7" },
      { src: plenary2025Image8, alt: "Пленарная сессия 2025 - кадр 8" },
    ],
    content: plenarySession2025Text.ru.content,
    localizedText: plenarySession2025Text,
    externalLink: {
      label: "Подробно",
      href: "https://president.uz/oz/lists/view/8212",
    },
    downloadFile: {
      label: "doc",
      href: "/documents/FIC-Annual_Report_web-updated.pdf",
      fileName: "plenary-session-2025-materials.pdf",
    },
  },
  "2024": {
    year: "2024",
    cardTitle: "Второе пленарное заседание совета иностранных инвесторов, 3 мая 2024 г.",
    cardImage: plenary2024Image1,
    eyebrow: "Пленарная сессия 2024",
    title: "Второе пленарное заседание совета иностранных инвесторов",
    localizedMeta: {
      uz: {
        cardTitle: "Xorijiy investorlar kengashining ikkinchi yalpi majlisi, 2024-yil 3-may",
        eyebrow: "Yalpi majlis 2024",
        title: "Xorijiy investorlar kengashining ikkinchi yalpi majlisi",
      },
      ru: {
        cardTitle: "Второе пленарное заседание совета иностранных инвесторов, 3 мая 2024 г.",
        eyebrow: "Пленарная сессия 2024",
        title: "Второе пленарное заседание совета иностранных инвесторов",
      },
      en: {
        cardTitle: "Second plenary session of the Foreign Investors Council, May 3, 2024",
        eyebrow: "Plenary session 2024",
        title: "Second plenary session of the Foreign Investors Council",
      },
    },
    summary: plenarySession2024Text.ru.summary,
    collageImages: [
      { src: plenary2024Image1, alt: "Пленарная сессия 2024 - кадр 1" },
      { src: plenary2024Image2, alt: "Пленарная сессия 2024 - кадр 2" },
      { src: plenary2024Image3, alt: "Пленарная сессия 2024 - кадр 3" },
      { src: plenary2024Image4, alt: "Пленарная сессия 2024 - кадр 4" },
      { src: plenary2024Image5, alt: "Пленарная сессия 2024 - кадр 5" },
      { src: plenary2024Image6, alt: "Пленарная сессия 2024 - кадр 6" },
      { src: plenary2024Image7, alt: "Пленарная сессия 2024 - кадр 7" },
      { src: plenary2024Image8, alt: "Пленарная сессия 2024 - кадр 8" },
    ],
    content: plenarySession2024Text.ru.content,
    localizedText: plenarySession2024Text,
    externalLink: {
      label: "Подробно",
      href: "https://lex.uz/docs/-6927600",
    },
    downloadFile: {
      label: "doc",
      href: "/documents/Final - FIC-Annual_Report-2024.pdf",
      fileName: "plenary-session-2024-materials.pdf",
    },
  },
  "2022": {
    year: "2022",
    cardTitle: "Первое пленарное заседание совета иностранных инвесторов, 16 ноября 2022 г.",
    cardImage: plenary2023Image1,
    eyebrow: "Пленарная сессия 2022",
    title: "Первое пленарное заседание совета иностранных инвесторов",
    localizedMeta: {
      uz: {
        cardTitle: "Xorijiy investorlar kengashining birinchi yalpi majlisi, 2022-yil 16-noyabr",
        eyebrow: "Yalpi majlis 2022",
        title: "Xorijiy investorlar kengashining birinchi yalpi majlisi",
      },
      ru: {
        cardTitle: "Первое пленарное заседание совета иностранных инвесторов, 16 ноября 2022 г.",
        eyebrow: "Пленарная сессия 2022",
        title: "Первое пленарное заседание совета иностранных инвесторов",
      },
      en: {
        cardTitle: "First plenary session of the Foreign Investors Council, November 16, 2022",
        eyebrow: "Plenary session 2022",
        title: "First plenary session of the Foreign Investors Council",
      },
    },
    summary: plenarySession2022Text.ru.summary,
    collageImages: [
      { src: plenary2023Image1, alt: "Пленарная сессия 2022 - кадр 1" },
      { src: plenary2023Image2, alt: "Пленарная сессия 2022 - кадр 2" },
      { src: plenary2023Image3, alt: "Пленарная сессия 2022 - кадр 3" },
      { src: plenary2023Image4, alt: "Пленарная сессия 2022 - кадр 4" },
      { src: plenary2023Image5, alt: "Пленарная сессия 2022 - кадр 5" },
      { src: plenary2023Image6, alt: "Пленарная сессия 2022 - кадр 6" },
      { src: plenary2023Image7, alt: "Пленарная сессия 2022 - кадр 7" },
      { src: plenary2023Image8, alt: "Пленарная сессия 2022 - кадр 8" },
    ],
    content: plenarySession2022Text.ru.content,
    localizedText: plenarySession2022Text,
    externalLink: {
      label: "Подробно",
      href: "https://president.uz/oz/lists/view/5704",
    },
    downloadFile: {
      label: "doc",
      href: "/documents/AR_2023_finalized.pdf",
      fileName: "plenary-session-2022-materials.pdf",
    },
  },
};

export const plenarySessionCards = Object.values(plenarySessionDetails).map((session) => ({
  year: session.year,
  targetId: `plenary-${session.year}`,
  image: session.cardImage,
  fullname: session.cardTitle,
  position: "Подробно",
  link: `/plenarysessions/${session.year}`,
}));

export const getPlenarySessionDetail = (year: PlenarySessionYear) => plenarySessionDetails[year];
