export const placeholderBioKey =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

type BecomeMemberLocale = "en" | "ru" | "uz";

type BecomeMemberCompany = {
  filename: string;
  name: string;
  website?: string;
};

type CompanyBio = Record<BecomeMemberLocale, string>;
type CompanyName = Record<BecomeMemberLocale, string>;

const normalizeCompanyLookupKey = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/\.[^.]+$/, "")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");

const companyNamesByKey: Record<string, CompanyName> = {
  ebrd: {
    en: "European Bank for Reconstruction and Development",
    ru: "Европейский банк реконструкции и развития",
    uz: "Yevropa tiklanish va taraqqiyot banki",
  },
  adb: {
    en: "Asian Development Bank",
    ru: "Азиатский банк развития",
    uz: "Osiyo taraqqiyot banki",
  },
  ifc: {
    en: "International Finance Corporation",
    ru: "Международная финансовая корпорация",
    uz: "Xalqaro moliya korporatsiyasi",
  },
};

const companyBiosByKey: Record<string, CompanyBio> = {
  acwapower: {
    en: "ACWA is today one of the important and rapidly growing companies in the global energy and water infrastructure sector.",
    ru: "ACWA на сегодняшний день является одной из важных и быстро развивающихся компаний в сфере энергетики и водной инфраструктуры в мировом масштабе.",
    uz: "ACWA bugungi kunda energetika va suv infratuzilmasi sohasida dunyo miqyosida muhim va tez o‘sayotgan kompaniyalardan biridir.",
  },
  alkhorayef: {
    en: "Alkhorayef Water and Power Technologies is an engineering and infrastructure company based in Saudi Arabia that mainly provides services in the water and energy sectors.",
    ru: "Alkhorayef Water and Power Technologies — это инжиниринговая и инфраструктурная компания, расположенная в Саудовской Аравии, которая в основном предоставляет услуги в сферах водоснабжения и энергетики.",
    uz: "Alkhorayef Water and Power Technologies — Saudiya Arabistonida joylashgan muhandislik va infratuzilma kompaniyasi bo‘lib, asosan suv va energetika sohalariga xizmat ko‘rsatadi.",
  },
  odas: {
    en: "ODAS is a company operating in the energy sector, mainly focused on electricity generation through thermal and renewable power plants, as well as investments in mining and infrastructure projects.",
    ru: "ODAS — компания, работающая в энергетическом секторе, основное направление которой — производство электроэнергии на тепловых и возобновляемых электростанциях, а также инвестиции в горнодобывающие и инфраструктурные проекты.",
    uz: "ODAS — energetika sohasida faoliyat yurituvchi kompaniya bo‘lib, asosan issiqlik va qayta tiklanuvchi elektr stansiyalari orqali elektr energiyasi ishlab chiqarish hamda konchilik va infratuzilma loyihalariga investitsiya qilish bilan shug‘ullanadi.",
  },
  chinacamc: {
    en: "China CAMC Engineering is a global engineering, procurement and construction company that delivers large infrastructure, energy, industrial, water, and transportation projects worldwide.",
    ru: "China CAMC Engineering — это международная инжиниринговая компания, которая реализует крупные инфраструктурные, энергетические, промышленные и водные проекты по всему миру.",
    uz: "China CAMC Engineering — bu xalqaro muhandislik kompaniyasi bo‘lib, dunyo bo‘ylab yirik infratuzilma, energetika, sanoat, suv va transport loyihalarini amalga oshiradi.",
  },
  halykbank: {
    en: "Halyk Bank is a large financial services bank and is considered one of the biggest banks in Central Asia.",
    ru: "Halyk Bank — это крупный банк, предоставляющий финансовые услуги, и считается одним из крупнейших банков в Центральной Азии.",
    uz: "Halyk Bank — yirik moliyaviy xizmatlar ko‘rsatuvchi bank bo‘lib, u Markaziy Osiyodagi eng katta banklardan biri hisoblanadi.",
  },
  calikenerji: {
    en: "Çalık Enerji is an internationally operating energy company that develops and executes projects in electricity generation, transmission, and energy infrastructure.",
    ru: "Çalık Enerji — это международная энергетическая компания, которая занимается производством электроэнергии, её передачей и реализацией инфраструктурных энергетических проектов.",
    uz: "Çalık Enerji — xalqaro miqyosda faoliyat yurituvchi energetika kompaniyasi bo‘lib, u elektr energiyasi ishlab chiqarish, uzatish va infratuzilma loyihalarini amalga oshiradi.",
  },
  wildberries: {
    en: "Wildberries — One of the largest e-commerce platforms in Eurasia, offering online retail, logistics, and digital services for consumers and businesses.",
    ru: "Wildberries — одна из крупнейших платформ электронной коммерции в Евразии, предоставляющая услуги онлайн-торговли, логистики и цифровых сервисов для покупателей и предпринимателей.",
    uz: "Wildberries — iste’molchilar va tadbirkorlar uchun onlayn savdo, logistika va raqamli xizmatlarni taqdim etuvchi Yevroosiyodagi eng yirik elektron tijorat platformalaridan biri.",
  },
  kostalegal: {
    en: "Kosta Legal is one of Uzbekistan’s leading law firms, recognized by Chambers and The Legal 500 for its expertise in corporate law, finance, real estate, and dispute resolution.",
    ru: "Kosta Legal — одна из ведущих юридических фирм Узбекистана, признанная рейтингами Chambers и The Legal 500 за высокий профессионализм в области корпоративного права, финансов, недвижимости и разрешения споров.",
    uz: "Kosta Legal — O‘zbekistonning yetakchi yuridik firmalaridan biri bo‘lib, Chambers va The Legal 500 reytinglari tomonidan korporativ huquq, moliya, ko‘chmas mulk va nizolarni hal etish sohalaridagi tajribasi uchun e’tirof etilgan.",
  },
  ey: {
    en: "EY has been present in Uzbekistan for nearly 30 years. Starting as a small office in 1995, it has grown into a team of almost 300 professionals.",
    ru: "EY работает в Узбекистане почти 30 лет. Начав в 1995 году как небольшое представительство, компания сегодня объединяет около 300 специалистов",
    uz: "EY O‘zbekistonda qariyb 30 yildan beri faoliyat yuritmoqda. 1995-yilda kichik vakolatxona sifatida boshlangan faoliyat bugun 300 nafarga yaqin mutaxassisga ega yirik jamoaga aylandi.",
  },
  chinaenergy: {
    en: "China Energy Overseas Investment Company — the key overseas investment platform of China Energy Engineering Group — focuses on renewable energy and infrastructure development within the Belt and Road Initiative.",
    ru: "China Energy Overseas Investment Company, ключевая зарубежная платформа China Energy Engineering Group, реализует проекты в области возобновляемой энергетики и инфраструктуры в рамках инициативы «Один пояс, один путь».",
    uz: "China Energy Overseas Investment Company — China Energy Engineering Group’ning asosiy xalqaro investitsiya platformasi bo‘lib, “Bir makon, bir yo‘l” tashabbusi doirasida O‘zbekistonda qayta tiklanuvchi energiya va infratuzilma loyihalariga sarmoya kiritmoqda.",
  },
  mitsubishi: {
    en: "Mitsubishi Corporation, a leading Japanese trading and investment company, has been operating in Uzbekistan since 1993. Over the past decade, the company has focused on large-scale infrastructure projects, including gas-fired power plants and gas chemical facilities in the Navoi and Karshi regions — each valued at over USD 1 billion.",
    ru: "Японская компания Mitsubishi Corporation, один из мировых лидеров в сфере торговли и инвестиций, работает в Узбекистане с 1993 года. В последние годы компания сосредоточила внимание на крупных инфраструктурных проектах — строительстве газовых электростанций и газохимических комплексов в Навоийской и Каршинской областях, каждый из которых оценивается более чем в 1 млрд долларов США.",
    uz: "Yaponiyaning yetakchi savdo va investitsiya kompaniyasi — Mitsubishi Corporation 1993-yildan buyon O‘zbekistonda faoliyat yuritib kelmoqda. So‘nggi yillarda kompaniya infratuzilma sohasiga e’tibor qaratib, Navoiy va Qarshi hududlarida yirik gaz turbinali elektr stansiyalari hamda gaz-kimyo majmualarini barpo etdi — har bir loyiha qiymati 1 milliard AQSh dollaridan ortiq.",
  },
  ifc: {
    en: "IFC is one of the world’s largest development institutions supporting private sector growth.",
    ru: "IFC — одна из крупнейших международных организаций, поддерживающих развитие частного сектора.",
    uz: "XMK — xususiy sektorni qo‘llab-quvvatlaydigan dunyoning eng yirik rivojlanish institutlaridan biri.",
  },
  adb: {
    en: "The Asian Development Bank (ADB) is a regional multilateral development bank that finances the economic and social development of countries in Asia and the Pacific.",
    ru: "Азиатский банк развития (АБР) — это региональный многосторонний банк развития, финансирующий экономическое и социальное развитие стран Азии и Тихоокеанского региона.",
    uz: "Osiyo taraqqiyot banki (OTB) Osiyo va Tinch okeani mintaqasi mamlakatlarining iqtisodiy va ijtimoiy rivojlanishini moliyalashtiruvchi mintaqaviy ko‘p tomonlama taraqqiyot bankidir.",
  },
  ebrd: {
    en: "EBRD is an international financial institution that finances projects to support the transition to open, market-oriented and sustainable economies, mainly by investing in the private sector across Europe, Central Asia, and neighbouring regions.",
    ru: "ЕБРР — это международная финансовая организация, которая финансирует проекты для поддержки перехода к открытым, рыночным и устойчивым экономикам, преимущественно путём инвестиций в частный сектор в Европе, Центральной Азии и соседних регионах.",
    uz: "YTTB — bu ochiq, bozorga yo‘naltirilgan va barqaror iqtisodiyotlarga o‘tishni qo‘llab-quvvatlash maqsadida asosan Yevropa, Markaziy Osiyo va qo‘shni mintaqalarda xususiy sektor loyihalarini moliyalashtiruvchi xalqaro moliya institutidir.",
  },
  masdar: {
    en: "Masdar is a global renewable energy company implementing solar, wind, and green hydrogen projects worldwide to support the global clean energy transition.",
    ru: "Masdar — международная компания в сфере ВИЭ, реализующая проекты солнечной, ветровой и водородной энергетики по всему миру, поддерживая глобальный переход к чистой энергии.",
    uz: "Masdar — qayta tiklanadigan energetika bo‘yicha xalqaro kompaniya bo‘lib, dunyo bo‘ylab quyosh, shamol va yashil vodorod loyihalarini amalga oshirib, global “yashil” energetika oʻtishini qo‘llab-quvvatlaydi.",
  },
  datavolt: {
    en: "DataVolt is a digital infrastructure company building next-generation data centers to support the AI era and global digital transformation",
    ru: "DataVolt — компания в сфере цифровой инфраструктуры, создающая дата-центры нового поколения для развития ИИ и цифровой экономики",
    uz: "DataVolt — sun’iy intellekt davriga mo‘ljallangan yangi avlod ma’lumotlar markazlarini barpo etuvchi raqamli infratuzilma kompaniyasidir",
  },
  indorama: {
    en: "Indorama Corporation is a global manufacturing group involved in chemicals, textiles, fertilizers, and polymer production, supplying materials to various industries worldwide.",
    ru: "Indorama Corporation — это международная производственная группа, работающая в сферах химии, текстиля, удобрений и полимеров, поставляющая продукцию различным отраслям по всему миру.",
    uz: "Indorama Corporation — kimyo, to‘qimachilik, o‘g‘itlar va polimerlar ishlab chiqarish bilan shug‘ullanuvchi global ishlab chiqarish guruhi bo‘lib, dunyo bo‘ylab turli sanoat tarmoqlarini mahsulotlar bilan ta’minlaydi.",
  },
  bat: {
    en: "British American Tobacco is one of the world’s largest tobacco companies, producing cigarettes, vaping products, and other nicotine-based products on a global scale.",
    ru: "British American Tobacco — одна из крупнейших табачных компаний в мире, производящая сигареты, вейп-продукцию и другие никотиновые изделия в глобальном масштабе.",
    uz: "British American Tobacco — dunyodagi eng yirik tamaki kompaniyalaridan biri bo‘lib, u sigaretalar, veyp mahsulotlari va boshqa nikotin asosidagi mahsulotlarni global miqyosda ishlab chiqaradi.",
  },
  voltalia: {
    en: "Voltalia is an international renewable energy company developing and operating solar and wind power plants worldwide.",
    ru: "Voltalia — quyosh va shamol elektr stansiyalarini rivojlantiruvchi va boshqaruvchi xalqaro qayta tiklanuvchi energiya kompaniyasidir.",
    uz: "Voltalia — quyosh va shamol elektr stansiyalarini rivojlantiruvchi va boshqaruvchi xalqaro qayta tiklanuvchi energiya kompaniyasidir.",
  },
  suez: {
    en: "Suez is a global company specializing in water and waste management services, providing solutions for drinking water supply, wastewater treatment, and recycling.",
    ru: "Suez — это международная компания, специализирующаяся на управлении водными ресурсами и отходами, предоставляющая решения по водоснабжению, очистке сточных вод и переработке.",
    uz: "Suez — suv va chiqindilarni boshqarish xizmatlariga ixtisoslashgan global kompaniya bo‘lib, ichimlik suvi ta’minoti, oqava suvlarni tozalash va qayta ishlash bo‘yicha yechimlar taqdim etadi.",
  },
  tbcbank: {
    en: "TBC Bank is a leading financial institution that provides retail and corporate banking services, including loans, deposits, and digital banking solutions.",
    ru: "TBC Bank — ведущий финансовый институт, предоставляющий розничные и корпоративные банковские услуги, включая кредиты, депозиты и цифровые банковские решения.",
    uz: "TBC Bank — chakana va korporativ bank xizmatlarini ko‘rsatuvchi yetakchi moliyaviy muassasa bo‘lib, kreditlar, depozitlar va raqamli banking yechimlarini taqdim etadi.",
  },
  veon: {
    en: "VEON is a global telecommunications company that provides mobile and digital communication services, including voice, data, and internet solutions across multiple countries.",
    ru: "VEON — это глобальная телекоммуникационная компания, предоставляющая мобильные и цифровые услуги связи, включая голосовую связь, передачу данных и интернет-решения в разных странах.",
    uz: "VEON — mobil va raqamli aloqa xizmatlarini ko‘rsatuvchi global telekommunikatsiya kompaniyasi bo‘lib, ovozli aloqa, internet va ma’lumot uzatish xizmatlarini turli mamlakatlarda taqdim etadi.",
  },
  visioninvest: {
    en: "Vision Invest is an investment and infrastructure company focused on developing and managing large-scale projects in sectors such as energy, water, and transportation, often through public-private partnerships.",
    ru: "Vision Invest — инвестиционная и инфраструктурная компания, занимающаяся разработкой и управлением крупными проектами в энергетике, водоснабжении и транспорте, часто в рамках государственно-частного партнёрства.",
    uz: "Vision Invest — investitsiya va infratuzilma kompaniyasi bo‘lib, energetika, suv va transport sohalarida yirik loyihalarni ishlab chiqish va boshqarish bilan shug‘ullanadi, ko‘pincha davlat-xususiy sheriklik asosida.",
  },
  mangoldconsulting: {
    en: "Mangold Consulting is a consulting and advisory firm that provides services in financial analysis, investment advisory, and strategic business consulting for companies and institutions.",
    ru: "Mangold Consulting — это консалтинговая компания, предоставляющая услуги в области финансового анализа, инвестиционного консультирования и стратегического бизнес-консалтинга для компаний и организаций.",
    uz: "Mangold Consulting — moliyaviy tahlil, investitsiya bo‘yicha maslahat va strategik biznes konsalting xizmatlarini ko‘rsatuvchi konsalting kompaniyasi.",
  },
  eurasiandevelopmentbank: {
    en: "The Eurasian Development Bank is a multilateral development bank that finances infrastructure, energy, transport, and industrial projects to support economic integration and development in its member countries.",
    ru: "Евразийский банк развития — это многосторонний банк развития, который финансирует инфраструктурные, энергетические, транспортные и промышленные проекты для поддержки экономической интеграции и развития в странах-участницах.",
    uz: "Yevroosiyo taraqqiyot banki — bu a’zo davlatlarda iqtisodiy integratsiya va rivojlanishni qo‘llab-quvvatlash maqsadida infratuzilma, energetika, transport va sanoat loyihalarini moliyalashtiruvchi ko‘p tomonlama taraqqiyot bankidir.",
  },
  edf: {
    en: "EDF is a major electricity generation and distribution company that operates nuclear, renewable, and conventional power plants, supplying energy to millions of customers worldwide.",
    ru: "EDF — крупная энергетическая компания, занимающаяся производством и распределением электроэнергии, эксплуатирующая атомные, возобновляемые и традиционные электростанции, обеспечивая энергией миллионы клиентов по всему миру.",
    uz: "EDF — elektr energiyasi ishlab chiqarish va taqsimlash bilan shug‘ullanuvchi yirik kompaniya bo‘lib, atom, qayta tiklanuvchi va an’anaviy elektr stansiyalarini boshqaradi hamda dunyo bo‘ylab millionlab mijozlarni energiya bilan ta’minlaydi.",
  },
  knauf: {
    en: "Knauf is a global building materials company that produces gypsum-based products, drywall systems, plaster, insulation materials, and construction solutions for the building industry.",
    ru: "Knauf — это международная компания по производству строительных материалов, выпускающая гипсовые изделия, системы гипсокартона, штукатурку, теплоизоляционные материалы и строительные решения.",
    uz: "Knauf — qurilish materiallari ishlab chiqaruvchi global kompaniya bo‘lib, gips asosidagi mahsulotlar, gipsokarton tizimlari, suvoq, issiqlik izolyatsiya materiallari va qurilish yechimlarini ishlab chiqaradi.",
  },
  uzum: {
    en: "Uzum is a digital ecosystem company that offers e-commerce, fintech, and delivery services, providing an integrated platform for online shopping and financial solutions.",
    ru: "Uzum — это цифровая экосистема, которая предоставляет услуги электронной коммерции, финтеха и доставки, предлагая интегрированную платформу для онлайн-покупок и финансовых решений.",
    uz: "Uzum — bu elektron tijorat, fintex va yetkazib berish xizmatlarini taklif qiluvchi raqamli ekotizim kompaniyasi bo‘lib, onlayn xaridlar va moliyaviy yechimlar uchun integratsiyalashgan platforma taqdim etadi.",
  },
  totalenergies: {
    en: "TotalEnergies is a global energy company involved in oil, natural gas, electricity, and renewable energy production and distribution, with operations in many countries worldwide.",
    ru: "TotalEnergies — это глобальная энергетическая компания, занимающаяся добычей и переработкой нефти, природного газа, а также производством электроэнергии и возобновляемой энергии в разных странах мира.",
    uz: "TotalEnergies — neft, tabiiy gaz, elektr energiyasi va qayta tiklanuvchi energiya ishlab chiqarish hamda taqsimlash bilan shug‘ullanuvchi global energetika kompaniyasi bo‘lib, dunyoning ko‘plab mamlakatlarida faoliyat yuritadi.",
  },
  sojitz: {
    en: "Sojitz Corporation is a Japanese general trading and investment company engaged in global trade, infrastructure development, energy, automotive, and industrial projects.",
    ru: "Sojitz Corporation — японская торгово-инвестиционная компания, занимающаяся международной торговлей, развитием инфраструктуры, энергетикой, автомобильной и промышленной сферой.",
    uz: "Sojitz Corporation — xalqaro savdo va investitsiya kompaniyasi bo‘lib, global savdo, infratuzilma rivojlanishi, energetika, avtomobil va sanoat loyihalari bilan shug‘ullanadi.",
  },
  cengizenerji: {
    en: "Cengiz Enerji is an energy company engaged in electricity generation, distribution, and infrastructure projects, with a focus on thermal and renewable power plants.",
    ru: "Cengiz Enerji — энергетическая компания, занимающаяся производством и распределением электроэнергии, а также инфраструктурными проектами, с акцентом на тепловые и возобновляемые электростанции.",
    uz: "Cengiz Enerji — elektr energiyasi ishlab chiqarish, taqsimlash va infratuzilma loyihalari bilan shug‘ullanuvchi energetika kompaniyasi bo‘lib, asosan issiqlik va qayta tiklanuvchi elektr stansiyalariga e’tibor qaratadi.",
  },
  curtis: {
    en: "Curtis, Mallet-Prevost, Colt & Mosle LLP is an international law firm that provides legal services in areas such as arbitration, corporate law, international trade, tax, and dispute resolution for governments, companies, and financial institutions.",
    ru: "Curtis, Mallet-Prevost, Colt & Mosle LLP — это международная юридическая фирма, предоставляющая услуги в области арбитража, корпоративного права, международной торговли, налогообложения и разрешения споров для правительств, компаний и финансовых организаций.",
    uz: "Curtis, Mallet-Prevost, Colt & Mosle LLP — xalqaro yuridik firma bo‘lib, arbitraj, korporativ huquq, xalqaro savdo, soliq va nizolarni hal qilish sohalarida hukumatlar, kompaniyalar va moliyaviy tashkilotlarga huquqiy xizmatlar ko‘rsatadi.",
  },
  yandex: {
    en: "Yandex is a technology company that provides internet-related services and products, including search engine, maps, ride-hailing, e-commerce, and AI-based digital solutions.",
    ru: "Yandex — это технологическая компания, предоставляющая интернет-сервисы и продукты, включая поисковую систему, карты, такси-сервисы, электронную коммерцию и решения на основе искусственного интеллекта.",
    uz: "Yandex — internet xizmatlari va mahsulotlarini taqdim etuvchi texnologiya kompaniyasi bo‘lib, qidiruv tizimi, xaritalar, taksi xizmatlari, elektron tijorat va sun’iy intellekt asosidagi raqamli yechimlarni taklif qiladi.",
  },
  crowe: {
    en: "Crowe Global is an international network of accounting, audit, tax, and consulting firms that provides professional services to businesses, governments, and organizations worldwide.",
    ru: "Crowe Global — это международная сеть компаний, предоставляющих услуги аудита, бухгалтерского учета, налогообложения и консалтинга для бизнеса, государственных структур и организаций по всему миру.",
    uz: "Crowe Global — bu xalqaro audit, buxgalteriya, soliq va konsalting xizmatlarini ko‘rsatuvchi professional kompaniyalar tarmog‘i bo‘lib, dunyo bo‘ylab bizneslar, hukumatlar va tashkilotlarga xizmat qiladi.",
  },
  pashaholding: {
    en: "PASHA Holding is an investment holding company that operates in various sectors including banking, insurance, construction, tourism, and real estate, managing a diversified portfolio of businesses.",
    ru: "PASHA Holding — это инвестиционный холдинг, работающий в различных секторах, включая банковское дело, страхование, строительство, туризм и недвижимость, и управляющий диверсифицированным портфелем компаний.",
    uz: "PASHA Holding — bank, sug‘urta, qurilish, turizm va ko‘chmas mulk kabi turli sohalarda faoliyat yurituvchi investitsion xolding kompaniyasi bo‘lib, diversifikatsiyalangan biznes portfelini boshqaradi.",
  },
  linde: {
    en: "Linde is a global industrial gases and engineering company that produces and supplies gases such as oxygen, nitrogen, hydrogen, and carbon dioxide for healthcare, manufacturing, and energy industries.",
    ru: "Linde — это глобальная компания по производству промышленных газов и инженерных решений, поставляющая такие газы, как кислород, азот, водород и углекислый газ для медицины, промышленности и энергетики.",
    uz: "Linde — sanoat gazlari va muhandislik yechimlari bilan shug‘ullanuvchi global kompaniya bo‘lib, tibbiyot, sanoat va energetika sohalari uchun kislorod, azot, vodorod va karbon dioksid kabi gazlarni ishlab chiqaradi va yetkazib beradi.",
  },
  miahona: {
    en: "Miahona is a company specializing in water infrastructure projects, including water treatment, wastewater management, and utility services, focusing on sustainable water solutions.",
    ru: "Miahona — это компания, специализирующаяся на водной инфраструктуре, включая очистку воды, управление сточными водами и коммунальные услуги, с акцентом на устойчивые водные решения.",
    uz: "Miahona — suv infratuzilmasi loyihalariga ixtisoslashgan kompaniya bo‘lib, suvni tozalash, oqava suvlarni boshqarish va kommunal xizmatlar bilan shug‘ullanadi hamda barqaror suv yechimlariga e’tibor qaratadi.",
  },
  deloitte: {
    en: "Deloitte is one of the world’s largest professional services firms, providing audit, consulting, tax, and advisory services to businesses, governments, and organizations globally.",
    ru: "Deloitte — одна из крупнейших в мире компаний, предоставляющих профессиональные услуги, включая аудит, консалтинг, налогообложение и консультирование для бизнеса, государственных структур и организаций.",
    uz: "Deloitte — dunyodagi eng yirik professional xizmatlar ko‘rsatuvchi kompaniyalardan biri bo‘lib, audit, konsalting, soliq va maslahat xizmatlarini bizneslar, hukumatlar va tashkilotlarga taqdim etadi.",
  },
  veolia: {
    en: "Veolia is a global leader in depollution, decarbonization, and resource regeneration. In Uzbekistan, the company operates and modernizes Tashkent’s district heating network, serving 1.2 million residents across more than 1,300 km of infrastructure, with a focus on energy efficiency and reliability.",
    ru: "Veolia — мировой лидер в сфере деполлюции, декарбонизации и регенерации ресурсов. В Узбекистане компания управляет и модернизирует систему теплоснабжения Ташкента протяжённостью более 1 300 км, обеспечивая теплом 1,2 млн жителей, с акцентом на энергоэффективность и надёжность инфраструктуры.",
    uz: "Veolia — depollutsiya, dekarbonizatsiya va resurslarni qayta tiklash sohasida global yetakchi kompaniya. O‘zbekistonda kompaniya Toshkent shahrining 1 300 km dan ortiq uzunlikdagi markaziy issiqlik ta’minoti tizimini boshqaradi va modernizatsiya qiladi va 1,2 million aholiga xizmat ko‘rsatmoqda, shuningdek,  energiya samaradorligi bilan birga  infratuzilma ishonchliligiga ham alohida e’tibor qaratmoqda.",
  },
  kocconstruction: {
    en: "KOÇ Construction is a global EPC contractor, real estate developer, and investor with over 55 years of international experience, delivering commercial, residential, and infrastructure projects worldwide.",
    ru: "KOÇ Construction — международный EPC-подрядчик, девелопер и инвестор с более чем 55-летним опытом реализации коммерческих, жилых и инфраструктурных проектов по всему миру.",
    uz: "KOÇ Construction — 55 yillik tajribaga ega global EPC pudratchi, ko‘chmas mulk ishlab chiquvchi va investor bo‘lib, turli tijorat, turar joy va infratuzilma loyihalarini amalga oshirib kelmoqda.",
  },
  marubeni: {
    en: "Marubeni is a global Japanese trading and investment corporation active in energy, infrastructure, and industrial sectors, with a strong focus on sustainable development.",
    ru: "Marubeni — японская глобальная торгово-инвестиционная компания, работающая в энергетике, инфраструктуре и промышленных секторах, с фокусом на устойчивое развитие.",
    uz: "Marubeni — energetika, infratuzilma va sanoat yo‘nalishlarida faoliyat yurituvchi yaponiyaning global savdo va investitsiya kompaniyasidir.",
  },
  jpmorgan: {
    en: "JP Morgan — One of the world's largest financial institutions, providing investment banking, asset management, corporate banking, capital markets, and financial advisory services.",
    ru: "JP Morgan — один из крупнейших мировых инвестиционных банков и финансовых институтов, предоставляющий услуги в области корпоративного банкинга, рынков капитала, управления активами и инвестиционного консультирования.",
    uz: "JPMorgan — investitsiya banki, aktivlarni boshqarish, korporativ banking, kapital bozorlari va moliyaviy maslahat xizmatlarini ko'rsatuvchi dunyo miqyosidagi yirik moliyaviy institutlardan biri.",
  },
  cocacola: {
    en: "The Coca-Cola Company — One of the world's leading beverage companies, operating a diverse portfolio of brands and advancing sustainability initiatives in water stewardship, packaging, and community development.",
    ru: "The Coca-Cola Company — одна из крупнейших мировых компаний по производству безалкогольных напитков, развивающая бренды в более чем 200 странах и реализующая инициативы в области устойчивого развития и управления водными ресурсами.",
    uz: "The Coca-Cola Company — 200 dan ortiq mamlakatda turli brendlar portfelini boshqaruvchi va suv resurslarini tejash, qadoqlash hamda jamoat rivojiga doir barqarorlik tashabbuslarini amalga oshiruvchi dunyoning yetakchi ichimlik kompaniyalaridan biri.",
  },
  whitecase: {
    en: "White & Case — A leading international law firm specializing in cross-border transactions, project finance, international arbitration, corporate law, and complex commercial matters.",
    ru: "White & Case — международная юридическая фирма, специализирующаяся на сопровождении трансграничных сделок, проектного финансирования, международного арбитража, корпоративного права и инвестиционных проектов.",
    uz: "White & Case — chegara oshgan bitimlar, loyiha moliyalashtirish, xalqaro arbitraj, korporativ huquq va murakkab tijorat masalalariga ixtisoslashgan yetakchi xalqaro yuridik firma.",
  },
  otpbank: {
    en: "OTP Bank — A leading banking group in Central and Eastern Europe, providing a full range of retail, corporate, and investment banking services.",
    ru: "OTP Bank — ведущая банковская группа Центральной и Восточной Европы, предоставляющая широкий спектр розничных, корпоративных и инвестиционно-банковских услуг.",
    uz: "OTP Bank — Markaziy va Sharqiy Yevropadagi yetakchi bank guruhi bo'lib, chakana, korporativ va investitsiya-banking xizmatlarining keng doirasini taqdim etadi.",
  },
  bomi: {
    en: "BoMI Engineering & Construction — An engineering and construction company specializing in the development and delivery of infrastructure, industrial, and commercial projects, offering integrated engineering and project management solutions.",
    ru: "BoMI Engineering & Construction — инжиниринговая и строительная компания, специализирующаяся на реализации инфраструктурных, промышленных и коммерческих проектов, а также предоставлении комплексных инженерных решений.",
    uz: "BoMI Engineering & Construction — infratuzilma, sanoat va tijorat loyihalarini amalga oshirishga ixtisoslashgan muhandislik va qurilish kompaniyasi bo'lib, kompleks muhandislik yechimlarini va loyihalarni boshqarishni taqdim etadi.",
  },
  orascomholdings: {
    en: "Orascom Holdings — is an international company specializing in long-term investments, with operations in the mining and agro-industrial sectors.",
    ru: "Orascom Holdings — международная компания, специализирующаяся на долгосрочных инвестициях и осуществляющая деятельность в горнодобывающей и агропромышленной отраслях.",
    uz: "Orascom Holdings— tog‘-kon sanoati va agro-industrial yo‘nalishlarda faoliyat yurituvchi, uzoq muddatli investitsiyalarga ixtisoslashgan xalqaro kompaniya.",
  },
  acwa: {
    en: "Orascom Holdings — is an international company specializing in long-term investments, with operations in the mining and agro-industrial sectors.",
    ru: "Orascom Holdings — международная компания, специализирующаяся на долгосрочных инвестициях и осуществляющая деятельность в горнодобывающей и агропромышленной отраслях.",
    uz: "Orascom Holdings— tog‘-kon sanoati va agro-industrial yo‘nalishlarda faoliyat yurituvchi, uzoq muddatli investitsiyalarga ixtisoslashgan xalqaro kompaniya.",
  },
};

const companyBioAliases: Record<string, string> = {
  acwa: "acwapower",
  acwapower: "acwapower",
  alkhoraev: "alkhorayef",
  alkhorayefwaterpowertechnologies: "alkhorayef",
  odas: "odas",
  chinacamc: "chinacamc",
  chinacamcengineering: "chinacamc",
  halykbank: "halykbank",
  calikenerji: "calikenerji",
  calkenerji: "calikenerji",
  wildberries: "wildberries",
  kostalegal: "kostalegal",
  ey: "ey",
  chinaenergy: "chinaenergy",
  chinaenergyoverseasinvestmentcompany: "chinaenergy",
  chinaenergyoverseasinvestmentcompanylimited: "chinaenergy",
  mitsubishi: "mitsubishi",
  mitsubishicorporation: "mitsubishi",
  ifc: "ifc",
  internationalfinancecorporation: "ifc",
  adb: "adb",
  asiandevelopmentbank: "adb",
  ebrd: "ebrd",
  ebdr: "ebrd",
  europeanbankforreconstructionanddevelopment: "ebrd",
  masdar: "masdar",
  datavolt: "datavolt",
  indorama: "indorama",
  indoramacorporation: "indorama",
  bat: "bat",
  voltalia: "voltalia",
  suez: "suez",
  tbcbank: "tbcbank",
  veon: "veon",
  visioninvest: "visioninvest",
  mangoldconsulting: "mangoldconsulting",
  eurasiandevelopmentbank: "eurasiandevelopmentbank",
  edf: "edf",
  knauf: "knauf",
  uzum: "uzum",
  totalenergy: "totalenergies",
  totalenergies: "totalenergies",
  sojitz: "sojitz",
  sojitzcorporation: "sojitz",
  cengizenerji: "cengizenerji",
  curtis: "curtis",
  yandex: "yandex",
  crowe: "crowe",
  pasha: "pashaholding",
  pashaholding: "pashaholding",
  linde: "linde",
  miahona: "miahona",
  miohona: "miahona",
  deloitte: "deloitte",
  veolia: "veolia",
  kocconstruction: "kocconstruction",
  marubeni: "marubeni",
  orascom: "orascomholdings",
  orascomholdings: "orascomholdings",
  orascominvestment: "orascomholdings",
  jpmorgan: "jpmorgan",
  jpmorganchase: "jpmorgan",
  cocacola: "cocacola",
  thecocacolacompany: "cocacola",
  whitecase: "whitecase",
  otpbank: "otpbank",
  bomi: "bomi",
  bomiengineering: "bomi",
  bomiconstructionengineering: "bomi",
};

export const getCompanyBio = (company: BecomeMemberCompany, locale: string) => {
  const normalizedLocale: BecomeMemberLocale =
    locale === "en" || locale === "uz" || locale === "ru" ? locale : "ru";

  const candidates = [
    normalizeCompanyLookupKey(company.filename),
    normalizeCompanyLookupKey(company.name),
  ];

  for (const candidate of candidates) {
    const companyKey = companyBioAliases[candidate] ?? candidate;
    const bio = companyBiosByKey[companyKey];

    if (bio) {
      return bio[normalizedLocale];
    }
  }

  return undefined;
};

export const getCompanyDisplayName = (
  company: BecomeMemberCompany,
  locale: string
) => {
  const normalizedLocale: BecomeMemberLocale =
    locale === "en" || locale === "uz" || locale === "ru" ? locale : "ru";

  const candidates = [
    normalizeCompanyLookupKey(company.filename),
    normalizeCompanyLookupKey(company.name),
  ];

  for (const candidate of candidates) {
    const companyKey = companyBioAliases[candidate] ?? candidate;
    const localizedName = companyNamesByKey[companyKey];

    if (localizedName) {
      return localizedName[normalizedLocale];
    }
  }

  return company.name;
};

export const observerCompanyFiles = [
  "linde.png",
  "crowe.png",
  "pasha.png",
  "mitsubishi.png",
];

export const companyLogoFiles = [
  "EDB.png",
  "acwa-power.png",
  "adb.png",
  "alkhoraev.png",
  "bat.png",
  "calik-enerji.png",
  "cengiz-enerji.png",
  "china-camc.png",
  "china-energy.png",
  "cola.png",
  "crowe.png",
  "datavolt.png",
  "deloitte.png",
  "ebdr.png",
  "edf.png",
  "ey.png",
  "halyk-bank.png",
  "ifc.png",
  "indorama.png",
  "jpmorgan.png",
  "knauf.png",
  "linde.png",
  "logo-mangold.png",
  "masdar.png",
  "miohona.png",
  "mitsubishi.png",
  "odas.png",
  "orascom.png",
  "otp-bank.png",
  "pasha.png",
  "sojitz.png",
  "suez.png",
  "tbcbank.png",
  "total-energy.png",
  "uzum.png",
  "veolia.png",
  "veon.png",
  "vision.png",
  "voltalia.png",
  "wildberries.png",
  "yandex.png",
  "CURTIS.png",
];

export const getCompanyKey = (filename: string) =>
  filename.replace(/\.[^.]+$/, "").toLowerCase();

export const getCompanyName = (filename: string) =>
  filename.replace(/\.[^.]+$/, "");

export const getCompanyLogoSrc = (filename: string) =>
  img(`brands/${filename}`);

export const getCompanyTargetId = (filename: string) =>
  `company-${getCompanyKey(filename)}`;

export const becomeMemberCompanies = [
  {
    id: "E-01",
    filename: "ebdr.png",
    name: "European Bank for Reconstruction and Development",
    website: "https://www.ebrd.com/ru/home.html",
  },
  {
    id: "E-02",
    filename: "adb.png",
    name: "Asian Development Bank",
    website: "https://www.adb.org",
  },
  {
    id: "E-03",
    filename: "ifc.png",
    name: "International Finance Corporation",
    website: "https://www.ifc.org",
  },
  {
    id: "F-01",
    filename: "acwa-power.png",
    name: "ACWA Power",
    website: "https://acwapower.com",
  },
  {
    id: "F-02",
    filename: "alkhoraev.png",
    name: "Alkhorayef Water & Power Technologies",
    website: "https://www.alkhorayef.com",
  },
  {
    id: "F-03",
    filename: "odas.png",
    name: "ODAS",
    website: "https://www.odas.com.tr",
  },
  {
    id: "F-04",
    filename: "china-camc.png",
    name: "China CAMC Engineering",
    website: "https://www.camceng.com",
  },
  {
    id: "F-05",
    filename: "halyk-bank.png",
    name: "Halyk Bank",
    website: "https://halykbank.kz",
  },
  {
    id: "F-06",
    filename: "calik-enerji.png",
    name: "Calık Enerji",
    website: "https://www.calikenerji.com",
  },
  {
    id: "O-01",
    filename: "crowe.png",
    name: "CROWE",
    website: "https://www.crowe.com",
  },
  {
    id: "O-02",
    filename: "pasha.png",
    name: "PASHA Holding",
    website: "https://www.pasha-holding.com",
  },
  {
    id: "F-07",
    filename: "orascom.png",
    name: "Orascom Investment",
    website: "https://www.orascom.com",
  },
  {
    id: "F-08",
    filename: "bat.png",
    name: "BAT",
    website: "https://www.bat.com",
  },
  {
    id: "O-03",
    filename: "mitsubishi.png",
    name: "Mitsubishi Corporation",
    website: "https://www.mitsubishicorp.com",
  },
  {
    id: "F-09",
    filename: "indorama.png",
    name: "Indorama Corporation",
    website: "https://www.indoramaventures.com",
  },
  {
    id: "F-10",
    filename: "suez.png",
    name: "Suez",
    website: "https://www.suez.com",
  },
  { id: "F-11", filename: "ey.png", name: "EY", website: "https://www.ey.com" },
  {
    id: "F-12",
    filename: "tbcbank.png",
    name: "TBC Bank",
    website: "https://tbcbank.ge/en",
  },
  {
    id: "F-13",
    filename: "masdar.png",
    name: "Masdar",
    website: "https://masdar.ae",
  },
  {
    id: "F-14",
    filename: "veon.png",
    name: "Veon",
    website: "https://www.veon.com",
  },
  {
    id: "F-15",
    filename: "vision.png",
    name: "Vision Invest",
    website: "https://vision-invest.com",
  },
  {
    id: "F-16",
    filename: "datavolt.png",
    name: "Data Volt",
    website: "https://www.datavolt.com",
  },
  {
    id: "O-04",
    filename: "linde.png",
    name: "Linde",
    website: "https://www.linde.com",
  },
  {
    id: "F-17",
    filename: "logo-mangold.png",
    name: "Mangold Consulting",
    website: "https://mangoldconsulting.com",
  },
  {
    id: "F-18",
    filename: "EDB.png",
    name: "Eurasian Development Bank",
    website: "https://eabr.org",
  },
  {
    id: "F-19",
    filename: "edf.png",
    name: "EDF",
    website: "https://www.edf.fr",
  },
  {
    id: "F-20",
    filename: "knauf.png",
    name: "Knauf",
    website: "https://www.knauf.com",
  },
  {
    id: "O-05",
    filename: "voltalia.png",
    name: "Voltalia",
    website: "https://www.voltalia.com",
  },
  {
    id: "F-23",
    filename: "veolia.png",
    name: "Veolia",
    website: "https://www.veolia.com",
  },
  {
    id: "F-21",
    filename: "china-energy.png",
    name: "China Energy Overseas Investment Company Limited",
    website: "https://www.ceec.net.cn",
  },
  {
    id: "F-22",
    filename: "uzum.png",
    name: "Uzum",
    website: "https://uzum.uz",
  },
  {
    id: "F-28",
    filename: "yandex.png",
    name: "Yandex",
    website: "https://yandex.com",
  },
  {
    id: "O-06",
    filename: "miohona.png",
    name: "Miahona",
    website: "https://www.miahona.com/en/about-miahona",
  },
  {
    id: "F-26",
    filename: "cengiz-enerji.png",
    name: "Cengiz Enerji",
    website: "https://www.cengizenerji.com.tr",
  },
  {
    id: "O-08",
    filename: "CURTIS.png",
    name: "CURTIS",
    website: "https://www.curtis.com",
  },
  {
    id: "F-25",
    filename: "sojitz.png",
    name: "Sojitz Corporation",
    website: "https://www.sojitz.com",
  },
  {
    id: "O-07",
    filename: "deloitte.png",
    name: "Deloitte",
    website: "https://www.deloitte.com",
  },
  {
    id: "F-29",
    filename: "wildberries.png",
    name: "Wildberries",
    website: "https://www.wildberries.ru",
  },
  {
    id: "F-30",
    filename: "jpmorgan.png",
    name: "JPMorgan Chase",
    website: "https://www.jpmorgan.com",
  },
  {
    id: "F-31",
    filename: "otp-bank.png",
    name: "OTP Bank",
    website: "https://www.otpbank.com",
  },
  {
    id: "F-32",
    filename: "cola.png",
    name: "Coca-Cola",
    website: "https://www.coca-cola.com",
  },
  {
    id: "F-33",
    filename: "bomi.png",
    name: "Bomi",
    website: "",
  },
  {
    id: "F-34",
    filename: "white-case.png",
    name: "White & Case",
    website: "https://www.whitecase.com",
  },
] as const;

export const parseBecomeMemberCompanyId = (id: string) => {
  const [type, rawOrder] = id.split("-");

  return {
    type,
    order: Number.parseInt(rawOrder ?? "", 10),
  };
};
