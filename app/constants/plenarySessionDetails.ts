const plenary2025Image1 = img("plenarysessions/STU_8900_.jpg");
const plenary2025Image2 = img("plenarysessions/ATM_9667.JPG");
const plenary2025Image3 = img("plenarysessions/ATM_9764.JPG");
const plenary2025Image4 = img("plenarysessions/DSC_2538.JPG");
const plenary2025Image5 = img("plenarysessions/XPI_2417.JPG");
const plenary2025Image6 = img("plenarysessions/IMG_0036.JPG");
const plenary2025Image7 = img("plenarysessions/SUT_7962.JPG");
const plenary2025Image8 = img("plenarysessions/SUT_8193.JPG");

const plenary2024Image1 = img("plenarysessions/info2_1.png");
const plenary2024Image2 = img("plenarysessions/info2_2.png");
const plenary2024Image3 = img("plenarysessions/info2_3.png");
const plenary2024Image4 = img("plenarysessions/info2_4.png");
const plenary2024Image5 = img("plenarysessions/info2_5.png");
const plenary2024Image6 = img("plenarysessions/info2_6.png");
const plenary2024Image7 = img("plenarysessions/info2_7.png");
const plenary2024Image8 = img("plenarysessions/info2_8.png");

const plenary2023Image1 = img("plenarysessions/info3_1.png");
const plenary2023Image2 = img("plenarysessions/info3_2.png");
const plenary2023Image3 = img("plenarysessions/info3_3.png");
const plenary2023Image4 = img("plenarysessions/info3_4.png");
const plenary2023Image5 = img("plenarysessions/info3_5.png");
const plenary2023Image6 = img("plenarysessions/info3_6.png");
const plenary2023Image7 = img("plenarysessions/info3_7.png");
const plenary2023Image8 = img("plenarysessions/info3_8.png");

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

export interface PlenarySessionRoadmapStat {
  value: string;
  label: string;
}

export interface PlenarySessionRoadmapColumn {
  title: string;
  items: string[];
}

export interface PlenarySessionRoadmap {
  title: string;
  stats: PlenarySessionRoadmapStat[];
  initiatives: string[];
  columns: PlenarySessionRoadmapColumn[];
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
  externalLink2?: PlenarySessionAction;
  downloadFile: PlenarySessionAction;
  sessionNote?: string;
  roadmap?: Record<PlenarySessionLocale, PlenarySessionRoadmap>;
}

const plenarySession2024Roadmap: Record<PlenarySessionLocale, PlenarySessionRoadmap> = {
  ru: {
    title:
      "Дорожная карта II Пленарной сессии — 14 инициатив (ПП-179, Приложение № 3)",
    stats: [
      { value: "14", label: "инициатив в дорожной карте" },
      { value: "4", label: "рабочие группы (инициатива № 8)" },
      { value: "ПП-179", label: "от 16 мая 2024 года" },
    ],
    initiatives: [
      "Разработка Закона «Об инвестициях и инвестиционной деятельности» (новая редакция) в соответствии с правилами ВТО",
      "Разработка Закона «О специальных экономических зонах» (новая редакция)",
      "Разработка Закона «Об альтернативных (венчурных) инвестициях» для стартапов и инновационных проектов",
      "Организация Ташкентского международного коммерческого суда при Международном центре цифровых технологий",
      "Реализация проекта ОЭСР «Анализ инвестиционной политики»",
      "Изучение отмены налогообложения курсовой разницы при формировании уставного фонда",
      "Изучение механизма сохранения неизменных налоговых ставок для проектов свыше 100 млн долларов",
      "Создание четырёх рабочих групп в рамках Совета (см. блок ниже)",
      "Внедрение информационной системы «Единая инвестиционная платформа»",
      "Стратегия развития искусственного интеллекта и обновления цифровых карт (с Яндекс)",
      "Ускорение генеральных планов территорий и временный механизм резервирования земель",
      "Совершенствование порядка налогообложения дивидендов инвесторов",
      "Современные механизмы регулирования договорных отношений (корпоративный договор, warranty, indemnity)",
      "Законодательная база для филиалов иностранных компаний без статуса юридического лица",
    ],
    columns: [
      {
        title: "Четыре рабочие группы (ПП-179)",
        items: [
          "развитие рынка капитала и преобразование в международный финансовый центр",
          "ответственное ведение бизнеса (принципы ОЭСР)",
          "альтернативные (венчурные) инвестиции — разработка законопроекта",
          "цифровизация системы работы с инвесторами — электронная платформа",
        ],
      },
    ],
  },
  uz: {
    title:
      "II Yalpi majlisning yo'l xaritasi — 14 ta tashabbus (PP-179, 3-ilova)",
    stats: [
      { value: "14", label: "yo'l xaritasidagi tashabbuslar" },
      { value: "4", label: "ishchi guruhlar (8-tashabbus)" },
      { value: "PP-179", label: "2024-yil 16-may" },
    ],
    initiatives: [
      "«Investitsiyalar va investitsiya faoliyati to'g'risida»gi Qonunni (yangi tahrir) JST qoidalariga muvofiq ishlab chiqish",
      "«Maxsus iqtisodiy zonalar to'g'risida»gi Qonunni (yangi tahrir) ishlab chiqish",
      "Startaplar va innovatsion loyihalar uchun «Muqobil (venchur) investitsiyalar to'g'risida»gi Qonunni ishlab chiqish",
      "Raqamli texnologiyalar xalqaro markazi huzurida Toshkent xalqaro tijorat sudini tashkil etish",
      "OECDning «Investitsiya siyosatini tahlil qilish» loyihasini amalga oshirish",
      "Ustav fondini shakllantirishda kurs farqini soliqqa tortishni bekor qilishni o'rganish",
      "100 mln dollardan ortiq loyihalar uchun o'zgarmas soliq stavkalarini saqlash mexanizmini o'rganish",
      "Kengash doirasida to'rtta ishchi guruhini tashkil etish (quyidagi blokka qarang)",
      "«Yagona investitsiya platformasi» axborot tizimini joriy etish",
      "Sun'iy intellektni rivojlantirish va raqamli xaritalarni yangilash strategiyasi (Yandex bilan)",
      "Hududlarning bosh rejalarini tezlashtirish va yerlarni vaqtinchalik zaxiralash mexanizmi",
      "Investorlar dividendlarini soliqqa tortish tartibini takomillashtirish",
      "Shartnoma munosabatlarini tartibga solishning zamonaviy mexanizmlari (korporativ shartnoma, warranty, indemnity)",
      "Yuridik shaxs maqomiga ega bo'lmagan xorijiy kompaniyalar filiallari uchun qonunchilik bazasi",
    ],
    columns: [
      {
        title: "To'rtta ishchi guruh (PP-179)",
        items: [
          "kapital bozorini rivojlantirish va xalqaro moliya markaziga aylantirish",
          "mas'uliyatli biznes yuritish (OECD tamoyillari)",
          "muqobil (venchur) investitsiyalar — qonun loyihasini ishlab chiqish",
          "investorlar bilan ishlash tizimini raqamlashtirish — elektron platforma",
        ],
      },
    ],
  },
  en: {
    title:
      "Roadmap of the II Plenary Session — 14 initiatives (PP-179, Annex No. 3)",
    stats: [
      { value: "14", label: "initiatives in the roadmap" },
      { value: "4", label: "working groups (initiative No. 8)" },
      { value: "PP-179", label: "of May 16, 2024" },
    ],
    initiatives: [
      "Drafting the Law «On Investments and Investment Activity» (new edition) in line with WTO rules",
      "Drafting the Law «On Special Economic Zones» (new edition)",
      "Drafting the Law «On Alternative (Venture) Investments» for startups and innovative projects",
      "Establishing the Tashkent International Commercial Court at the International Center for Digital Technologies",
      "Implementing the OECD «Investment Policy Review» project",
      "Studying the abolition of taxation of exchange-rate differences when forming the charter capital",
      "Studying a mechanism to keep tax rates unchanged for projects exceeding $100 million",
      "Creating four working groups within the Council (see the block below)",
      "Implementing the «Unified Investment Platform» information system",
      "Strategy for developing artificial intelligence and updating digital maps (with Yandex)",
      "Accelerating territorial master plans and a temporary land reservation mechanism",
      "Improving the procedure for taxing investor dividends",
      "Modern mechanisms for regulating contractual relations (corporate agreement, warranty, indemnity)",
      "Legal framework for branches of foreign companies without legal-entity status",
    ],
    columns: [
      {
        title: "Four working groups (PP-179)",
        items: [
          "developing the capital market and transforming it into an international financial center",
          "responsible business conduct (OECD principles)",
          "alternative (venture) investments — drafting the bill",
          "digitalizing the investor relations system — electronic platform",
        ],
      },
    ],
  },
};

const plenarySession2025Roadmap: Record<PlenarySessionLocale, PlenarySessionRoadmap> = {
  ru: {
    title: "Что закреплено постановлением ПП-226",
    stats: [
      { value: "14", label: "инициатив в дорожной карте" },
      { value: "4", label: "рабочие группы (инициатива № 8)" },
      { value: "ПП-179", label: "от 16 мая 2024 года" },
      { value: "40+", label: "инициатив отобрано к сессии" },
      { value: "2028", label: "базовые ставки налогов заморожены до" },
      { value: "16 000", label: "предприятий с иностранным капиталом" },
      { value: "$4,5 млрд", label: "проектов ГЧП запущено" },
      { value: "$8 млрд", label: "инвестиций в «зелёную» экономику" },
      { value: "~$1 млрд", label: "рекордные инвестиции ЕБРР за год" },
    ],
    initiatives: [
      "Утверждён План действий по реализации предложений и инициатив III пленарной сессии (Приложение № 1)",
      "Утверждён обновлённый состав узбекской стороны Совета (Приложение № 2)",
      "Совету предоставлено право создавать рабочие группы по направлениям с привлечением руководителей и работников министерств и ведомств",
      "Секретариат Совета образован как негосударственная некоммерческая организация с участием международных финансовых институтов (новая редакция пунктов 29–31 ПП-4519); руководитель назначается по согласованию с Исполнительным комитетом",
      "Внедрение информационной системы «Единая инвестиционная платформа» (ответственный — заместитель Премьер-министра Ж. Ходжаев)",
      "Контроль за исполнением — Премьер-министр А. Н. Арипов",
    ],
    columns: [],
  },
  uz: {
    title: "PP-226 qarori bilan nima mustahkamlangan",
    stats: [
      { value: "14", label: "yo'l xaritasidagi tashabbuslar" },
      { value: "4", label: "ishchi guruhlar (8-tashabbus)" },
      { value: "PP-179", label: "2024-yil 16-may" },
      { value: "40+", label: "sessiyaga tanlangan tashabbuslar" },
      { value: "2028", label: "asosiy soliq stavkalari muzlatilgan" },
      { value: "16 000", label: "xorijiy kapitalli korxonalar" },
      { value: "$4,5 mlrd", label: "ishga tushirilgan DXSh loyihalari" },
      { value: "$8 mlrd", label: "«yashil» iqtisodiyotga investitsiyalar" },
      { value: "~$1 mlrd", label: "EBRRning bir yildagi rekord investitsiyasi" },
    ],
    initiatives: [
      "III yalpi majlis takliflari va tashabbuslarini amalga oshirish bo'yicha Harakatlar rejasi tasdiqlandi (1-ilova)",
      "Kengashning o'zbek tomoni yangilangan tarkibi tasdiqlandi (2-ilova)",
      "Kengashga vazirliklar va idoralar rahbarlari hamda xodimlarini jalb qilgan holda yo'nalishlar bo'yicha ishchi guruhlar tuzish huquqi berildi",
      "Kengash Kotibiyati xalqaro moliya institutlari ishtirokida nodavlat notijorat tashkiloti sifatida tashkil etildi (PP-4519ning 29–31-bandlari yangi tahriri); rahbar Ijroiya qo'mitasi bilan kelishilgan holda tayinlanadi",
      "«Yagona investitsiya platformasi» axborot tizimini joriy etish (mas'ul — Bosh vazir o'rinbosari J. Xo'jayev)",
      "Ijro ustidan nazorat — Bosh vazir A. N. Aripov",
    ],
    columns: [],
  },
  en: {
    title: "What was enshrined by Decree PP-226",
    stats: [
      { value: "14", label: "initiatives in the roadmap" },
      { value: "4", label: "working groups (initiative No. 8)" },
      { value: "PP-179", label: "of May 16, 2024" },
      { value: "40+", label: "initiatives selected for the session" },
      { value: "2028", label: "basic tax rates frozen until" },
      { value: "16,000", label: "enterprises with foreign capital" },
      { value: "$4.5 bn", label: "PPP projects launched" },
      { value: "$8 bn", label: "investments in the «green» economy" },
      { value: "~$1 bn", label: "record EBRD investment for the year" },
    ],
    initiatives: [
      "An Action Plan for implementing the proposals and initiatives of the III plenary session was approved (Annex No. 1)",
      "An updated composition of the Uzbek side of the Council was approved (Annex No. 2)",
      "The Council was granted the right to create working groups by area, involving heads and staff of ministries and agencies",
      "The Council Secretariat was established as a non-governmental non-profit organization with the participation of international financial institutions (new edition of paragraphs 29–31 of PP-4519); the head is appointed in coordination with the Executive Committee",
      "Implementation of the «Unified Investment Platform» information system (responsible — Deputy Prime Minister J. Khodjaev)",
      "Oversight of execution — Prime Minister A. N. Aripov",
    ],
    columns: [],
  },
};

const plenarySession2022Text: Record<PlenarySessionLocale, PlenarySessionLocalizedText> = {
  uz: {
    summary:
      "2022-yil 16-noyabr kuni Toshkent shahridagi «Ko’ksaroy» qarorgohida O’zbekiston Respublikasi Prezidenti raisligida Xorijiy investorlar kengashining birinchi yalpi majlisi bo’lib o’tdi. Mazkur majlis hukumat va xalqaro investorlar o’rtasidagi to’g’ridan-to’g’ri muloqotning institutsional formatini ochib berdi.",
    content: [
      "Sessiyada 150 dan ortiq yuqori darajadagi vakillar ishtirok etdi — xalqaro moliya institutlari, yetakchi sanoat va investitsiya kompaniyalari, vazirliklar va idoralar.",
      "Ishbilarmonlik muhitini yaxshilash, soliq va huquqiy tizimning barqarorligi, davlat-xususiy sheriklikni rivojlantirish, yashil iqtisodiyot va raqamli transformatsiya masalalari muhokama qilindi.",
      "Majlis yakunlariga ko’ra 40 dan ortiq aniq taklif va tashabbuslar ishlab chiqildi va ular Kengashning tizimli faoliyatiga asos bo’ldi.",
    ],
  },
  ru: {
    summary:
      "16 ноября 2022 года в резиденции «Куксарой» в Ташкенте под председательством Президента Республики Узбекистан состоялось первое пленарное заседание Совета иностранных инвесторов. Заседание открыло институциональный формат прямого диалога между Правительством и международными инвесторами.",
    content: [
      "В работе сессии приняли участие более 150 представителей высокого уровня — международные финансовые институты, ведущие промышленные и инвестиционные компании, министерства и ведомства.",
      "Обсуждались улучшение деловой среды, стабильность налоговой и правовой системы, развитие государственно-частного партнёрства, зелёная экономика и цифровая трансформация.",
      "По итогам заседания было выработано свыше 40 конкретных предложений и инициатив, давших старт системной работе Совета.",
    ],
  },
  en: {
    summary:
      "On November 16, 2022, the first plenary session of the Foreign Investors Council was held at the Kuksaroy residence in Tashkent, under the chairmanship of the President of the Republic of Uzbekistan. The session opened an institutional format for direct dialogue between the Government and international investors.",
    content: [
      "More than 150 high-level representatives participated in the session — international financial institutions, leading industrial and investment companies, ministries and agencies.",
      "Discussions covered improving the business environment, stability of the tax and legal system, development of public-private partnerships, green economy, and digital transformation.",
      "As a result of the session, more than 40 specific proposals and initiatives were developed, launching the Council’s systematic work.",
    ],
  },
};

const plenarySession2024Text: Record<PlenarySessionLocale, PlenarySessionLocalizedText> = {
  uz: {
    summary:
      "2024-yil 3-may kuni III Toshkent xalqaro investitsiya forumi doirasida O’zbekiston Respublikasi Prezidenti raisligida Xorijiy investorlar kengashining ikkinchi yalpi majlisi bo’lib o’tdi. Sessiya takliflar ishlab chiqishdan ularni tizimli amalga oshirishga o’tishni mustahkamladi.",
    content: [
      "Majlis yakunlariga ko’ra 2024-yil 15-may kuni PP-179-son Prezident Farmoni qabul qilindi va 14 ta tashabbus bo’yicha yo’l xaritasi tasdiqlandi.",
      "Yo’l xaritasiga investitsiyalar va maxsus iqtisodiy zonalar to’g’risidagi qonunlarning yangi tahrirlari, muqobil (venchur) investitsiyalar to’g’risidagi qonun, OECD tomonidan ‘Investitsiya siyosatini tahlil qilish’ loyihasini amalga oshirish, shuningdek Kengashning asosiy yo’nalishlar bo’yicha to’rtta ishchi guruhini tashkil etish kiradi.",
    ],
  },
  ru: {
    summary:
      "3 мая 2024 года в рамках III Ташкентского международного инвестиционного форума под председательством Президента Республики Узбекистан состоялось второе пленарное заседание Совета иностранных инвесторов. Сессия закрепила переход от выработки предложений к их системной реализации.",
    content: [
      "По итогам заседания принято Постановление Президента № ПП-179 от 15 мая 2024 года, утвердившее дорожную карту из 14 инициатив.",
      "В их числе — новые редакции законов об инвестициях и о специальных экономических зонах, закон об альтернативных (венчурных) инвестициях, реализация проекта ОЭСР «Анализ инвестиционной политики», а также создание четырёх рабочих групп Совета по ключевым направлениям.",
    ],
  },
  en: {
    summary:
      "On May 3, 2024, within the framework of the III Tashkent International Investment Forum, the second plenary session of the Foreign Investors Council was held under the chairmanship of the President of the Republic of Uzbekistan. The session consolidated the transition from developing proposals to their systematic implementation.",
    content: [
      "Following the session, Presidential Decree No. PP-179 of May 15, 2024 was adopted, approving a roadmap of 14 initiatives.",
      "These include new editions of the laws on investments and special economic zones, a law on alternative (venture) investments, implementation of the OECD Investment Policy Review project, and the establishment of four Council working groups on key areas.",
    ],
  },
};

const plenarySession2025Text: Record<PlenarySessionLocale, PlenarySessionLocalizedText> = {
  uz: {
    summary:
      "2025-yil 11-iyun kuni Xalqaro kongress-markazida O’zbekiston Respublikasi Prezidenti va YeTTB prezidenti ishtirokida Xorijiy investorlar kengashining uchinchi yalpi majlisi bo’lib o’tdi. Majlisda Masdar, ACWA Power, Indorama, Vision Invest, DataVolt, VEON, Boeing, SpaceX, Meta, Franklin Templeton, TotalEnergies va boshqa kompaniyalar rahbarlari, shuningdek OECD, IFC, ADB va Islom taraqqiyot banki vakillari ishtirok etdi.",
    content: [
      "Platforma samaradorligi qayd etildi: YeTTB bir yil ichida O’zbekistonga rekord — taxminan 1 mlrd dollar investitsiya kiritdi va mintaqada mamlakatning eng yirik hamkoriga aylandi; xususiy sektor bilan qo’shma loyihalar hajmi 1 mlrd dollardan oshdi; yetakchi energetika kompaniyalari yashil iqtisodiyotga 8 mlrd dollardan ortiq mablag’ investitsiya qildi.",
      "Biznes uchun asosiy soliq stavkalari 2028 yilgacha o’zgarmasligni e’lon qilindi; ikki yil ichida xorijiy kapital ishtirokidagi 5 500 ta yangi korxona tashkil etildi va ularning umumiy soni 16 mingtaga yetdi.",
      "Sessiyaga 40 dan ortiq tashabbus tanlandi. Yakunlarda 2025-yil 18-iyulda PP-226-son Prezident Farmoni qabul qilindi — yo’l xaritasi tasdiqlandi va Kengash Kotibiyati mustaqil yuridik shaxsga aylantirildi.",
    ],
  },
  ru: {
    summary:
      "11 июня 2025 года в Международном конгресс-центре под председательством Президента Республики Узбекистан и при участии Президента ЕБРР состоялось третье пленарное заседание Совета иностранных инвесторов. В заседании приняли участие руководители Masdar, ACWA Power, Indorama, Vision Invest, DataVolt, VEON, Boeing, SpaceX, Meta, Franklin Templeton, TotalEnergies и других компаний, а также представители ОЭСР, МФК, АБР и Исламского банка развития.",
    content: [
      "Отмечена результативность платформы: ЕБРР инвестировал в Узбекистан рекордный объём — около 1 млрд долларов за год, став крупнейшим партнёром страны в регионе; объём совместных проектов с частным сектором превысил 1 млрд долларов; ведущие энергетические компании вложили свыше 8 млрд долларов в зелёную экономику.",
      "Объявлено, что базовые ставки налогов для бизнеса не изменятся до 2028 года; за два года создано 5,5 тысячи новых предприятий с иностранным капиталом, а их общее число достигло 16 тысяч.",
      "К сессии отобрано свыше 40 инициатив. По итогам принято Постановление Президента № ПП-226 от 18 июля 2025 года, утвердившее дорожную карту и закрепившее преобразование Секретариата Совета в самостоятельное юридическое лицо.",
    ],
  },
  en: {
    summary:
      "On June 11, 2025, the third plenary session of the Foreign Investors Council was held at the International Congress Center under the chairmanship of the President of the Republic of Uzbekistan and with the participation of the EBRD President. The session was attended by heads of Masdar, ACWA Power, Indorama, Vision Invest, DataVolt, VEON, Boeing, SpaceX, Meta, Franklin Templeton, TotalEnergies and other companies, as well as representatives of the OECD, IFC, ADB and the Islamic Development Bank.",
    content: [
      "The effectiveness of the platform was highlighted: the EBRD invested a record amount of approximately $1 billion in Uzbekistan over the year, becoming the country’s largest partner in the region; the volume of joint projects with the private sector exceeded $1 billion; leading energy companies invested over $8 billion in the green economy.",
      "It was announced that basic tax rates for business will not change until 2028; over two years, 5,500 new enterprises with foreign capital were established, bringing the total to 16,000.",
      "More than 40 initiatives were selected for the session. Following the session, Presidential Decree No. PP-226 of July 18, 2025 was adopted, approving the roadmap and formalizing the transformation of the Council Secretariat into an independent legal entity.",
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
    sessionNote:
      "Международный конгресс-центр, под председательством Президента и при участии Президента ЕБРР. Отобрано свыше 40 инициатив; базовые ставки налогов для бизнеса не изменятся до 2028 года. По итогам — ПП-226 от 18.07.2025 (вступило в силу 21.07.2025).",
    roadmap: plenarySession2025Roadmap,
    externalLink: {
      label: "president.uz",
      href: "https://president.uz/oz/lists/view/8212",
    },
    externalLink2: {
      label: "lex.uz",
      href: "https://lex.uz/docs/7637571",
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
    sessionNote:
      "Состоялась в рамках III ТМИФ под председательством Президента. По итогам — ПП-179 с дорожной картой из 14 инициатив, включая создание четырёх рабочих групп.",
    roadmap: plenarySession2024Roadmap,
    externalLink: {
      label: "lex.uz",
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
    sessionNote:
      "Резиденция «Куксарой». Более 150 участников, свыше 40 предложений. Приоритеты: деловая среда, налоговая стабильность, ГЧП, зелёная экономика, цифровизация.",
    externalLink: {
      label: "president.uz",
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
