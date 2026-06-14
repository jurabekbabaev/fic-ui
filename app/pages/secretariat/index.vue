<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SecretariatProfileBlock from "~/components/secretariat/SecretariatProfileBlock.vue";
import PageHero from "~/components/shared/PageHero.vue";
import Aziz from "@/assets/images/experts/aziz.png";
import Avaz from "@/assets/images/experts/Avazbek.jpg";
import Madina from "@/assets/images/experts/Madina1.png";
import Jurabek from "@/assets/images/experts/jorabek.png";
import Hakimniyaz from "@/assets/images/experts/Hakimniyaz.png";
import Vladislav from "@/assets/images/experts/Vladislav.png";

const { t, locale } = useI18n();

const buildDuties = (name: string, role: string) =>
  `${name} ${role.toLowerCase()} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;

const buildBiography = (name: string, role: string) =>
  `${name} ${role.toLowerCase()} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;

const jurabekBiographies: Record<string, string> = {
  uz: `Jamoatchilik bilan aloqalar, raqamli marketing va xizmatlar sohalarida tajribaga ega kommunikatsiyalar mutaxassisi. Xalqaro ta’lim va boshqaruv sohasidagi akademik tayyorgarlik bilan mustahkamlangan brend rivojlantirish, media bilan o’zaro aloqa va raqamli ilgari surish sohasida isbotlangan natijalar mavjud. Jamoatchilik bilan muloqot va manfaatdor tomonlar bilan kommunikatsiya tajribasiga ega.`,
  ru: `Специалист в области коммуникаций с опытом в связях с общественностью, цифровом маркетинге и сфере услуг. Подтверждённый опыт в развитии бренда, медийном взаимодействии и цифровом продвижении, подкреплённый международным образованием и академической подготовкой в области управления. Опыт публичного взаимодействия и коммуникации с заинтересованными сторонами.`,
  en: `Communications professional with experience across public relations, digital marketing, and the services sector. Proven track record in brand development, media engagement, and digital promotion, supported by an international education and an academic background in management. Experienced in public engagement and stakeholder communication.`,
};

const getJurabekBiography = () =>
  jurabekBiographies[locale.value] ?? jurabekBiographies.ru;

const jurabekDuties: Record<string, string> = {
  uz: `Strategik kommunikatsiyalar bo‘yicha ekspert
O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashi kotibiyati

Lavozim haqida
Maslahatchi Xorijiy investorlar kengashining (XIK) xalqaro imijini va ommaga ko‘rinish darajasini mustahkamlash, uning raqamli makondagi faolligini rivojlantirish hamda xorijiy investorlar, xalqaro moliya institutlari va keng jamoatchilik bilan o‘zbek, rus va ingliz tillarida strategik aloqalarni o‘rnatish uchun mas’uldir.

Asosiy vazifalar:

Strategiya va tahlil
•  XIK Kotibiyatining raqamli mavjudligini auditdan o‘tkazish.
•  XIK vazifalari va maqsadli auditoriyasiga muvofiq xalqaro SMM-strategiyani ishlab chiqish va amalga oshirish.
•  Tegishli asoslar bilan maqbul platformalarni (LinkedIn, Telegram, Instagram, Facebook) tanlash.

Kontentni ishlab chiqish va nashr etish
•  Har oylik ko‘p tilli kontent tayyorlash: tahliliy maqolalar, ekspert sharhlari, infografika, vizual storitelling va tadbirlar anonslari.
•  Islohotlar va asosiy yangiliklar haqida qisqa videolar (intervyular, tadbirlardan reportajlar, tashabbuslar dayjesti) va animatsion roliklar tayyorlash.
•  XIK raqamli platformalarining yagona vizual identifikatsiyasini (brand identity) shakllantirish va saqlash.

Ilgari surish va akkauntlarni boshqarish
•  XIK ijtimoiy tarmoqlarini kundalik yuritish: rejalashtirish, kontentni e’lon qilish, muhokamalarni moderatsiya qilish va diplomatik ohangda sharhlarga javob berish.
•  Pullik reklama kampaniyalarini yo‘lga qo‘yish va optimallashtirish.
•  Kommunikatsiyalar samaradorligini haftalik monitoring qilish va taktik tuzatishlar kiritish.

Hisobot va tahlil
•  Qamrov, jalb qilinganlik va nashrlarning samaradorligi bo‘yicha har oylik tahliliy hisobotlar tayyorlash.
•  Raqamli yo‘nalishni rivojlantirish bo‘yicha strategik tavsiyalar ishlab chiqish.
•  Asosiy onlayn tadbirlar va jonli efirlarni texnik jihatdan qo‘llab-quvvatlash.

Ish faoliyatining asosiy tamoyillari
•  Strategik raqamli kommunikatsiyalarning xalqaro standartlariga muvofiqlik.
•  Muloqotning rasmiy va diplomatik ohangi.
•  Maxfiylik va etika standartlariga qat’iy rioya qilish.`,
  ru: `Эксперт по стратегическим коммуникациям
Секретариат Совета иностранных инвесторов при Президенте Республики Узбекистан

О позиции
Советник отвечает за укрепление международного имиджа и публичной видимости Совета иностранных инвесторов (СИИ), развитие его цифрового присутствия и стратегическую коммуникацию с иностранными инвесторами, международными финансовыми организациями и широкой аудиторией на узбекском, русском и английском языках.

Основные обязанности:

Стратегия и аналитика
•  Проведение аудита цифрового присутствия Секретариата СИИ
•  Разработка и реализация международной SMM-стратегии в соответствии с задачами и целевой аудиторией СИИ
•  Выбор оптимальных платформ (LinkedIn, Telegram, Instagram, Facebook) с обоснованием

Разработка и публикация контента
•  Подготовка ежемесячного мультиязычного контента: аналитические публикации, экспертные комментарии, инфографика, визуальный сторителлинг, анонсы мероприятий
•  Производство коротких видео (интервью, репортажи с мероприятий, дайджесты инициатив) и анимационных роликов о реформах и ключевых обновлениях
•  Формирование и поддержание единой визуальной идентичности цифровых платформ СИИ

Продвижение и управление аккаунтами
•  Ежедневное ведение социальных сетей СИИ: планирование, публикация контента, модерация обсуждений, работа с комментариями в дипломатичном тоне
•  Запуск и оптимизация платных рекламных кампаний
•  Еженедельный мониторинг эффективности и тактическая корректировка коммуникаций

Отчётность и аналитика
•  Ежемесячные аналитические отчёты по охвату, вовлечённости и эффективности публикаций
•  Подготовка стратегических рекомендаций по развитию цифрового направления
•  Техническое сопровождение ключевых онлайн-мероприятий и прямых трансляций

Ключевые принципы работы
•  Соответствие международным стандартам стратегической цифровой коммуникации
•  Официальный и дипломатичный тон коммуникаций
•  Строгое соблюдение конфиденциальности и этических стандартов`,
  en: `Strategic Communications Expert
Secretariat of the Foreign Investors Council under the President of the Republic of Uzbekistan

About the Position
The Advisor is responsible for strengthening the international image and public visibility of the Foreign Investors Council (FIC), developing its digital presence, and managing strategic communications with foreign investors, international financial institutions, and a broad audience in Uzbek, Russian, and English.

Key Responsibilities:

Strategy and Analytics
•  Conducting a digital presence audit of the FIC Secretariat.
•  Developing and implementing an international SMM strategy aligned with the FIC’s objectives and target audience.
•  Selecting and justifying the optimal platforms (LinkedIn, Telegram, Instagram, Facebook).

Content Development and Publication
•  Preparing monthly multilingual content: analytical posts, expert commentary, infographics, visual storytelling, and event announcements.
•  Producing short videos (interviews, event coverage, initiative digests) and animated clips regarding reforms and key updates.
•  Establishing and maintaining a unified visual identity across the FIC’s digital platforms.

Promotion and Account Management
•  Daily management of the FIC’s social media: planning, posting, moderating discussions, and responding to comments in a diplomatic tone.
•  Launching and optimizing paid advertising campaigns.
•  Weekly monitoring of performance and tactical adjustment of communications.

Reporting and Analytics
•  Monthly analytical reports on reach, engagement, and post effectiveness.
•  Developing strategic recommendations for the growth of digital communication channels.
•  Technical support for key online events and live broadcasts.

Core Principles
•  Compliance with international standards of strategic digital communication.
•  Official and diplomatic tone of communication.
•  Strict adherence to confidentiality and ethical standards.`,
};

const getJurabekDuties = () => jurabekDuties[locale.value] ?? jurabekDuties.ru;

const vladislavBiographies: Record<string, string> = {
  uz: `Kengash dasturlari koordinatsiyasini va Kotibiyatning kundalik faoliyatini ta’minlovchi biznes va moliya sohasidagi mutaxassis. Ishtirokchilar bilan muloqot, muzokaralar va kommunikatsiya ko’nikmalariga ega bo’lib, sotuv, logistika va ta’lim sohalarida amaliy tajribaga ega. Rus, ingliz va o’zbek tillarini mukammal biladi.`,
  ru: `Специалист в области бизнеса и финансов, обеспечивающий координацию программ Совета и текущую операционную деятельность Секретариата. Развитые навыки взаимодействия с участниками, ведения переговоров и коммуникации; практический опыт в продажах, логистике и образовании. Свободно владеет русским, английским и узбекским языками.`,
  en: `Business and finance professional supporting the coordination of Council programs and day-to-day operations of the Secretariat. Skilled in stakeholder engagement, negotiation, and communication, with hands-on experience across sales, logistics, and education. Fluent in Russian, English, and Uzbek.`,
};

const getVladislavBiography = () =>
  vladislavBiographies[locale.value] ?? vladislavBiographies.ru;

const vladislavDuties: Record<string, string> = {
  uz: `Dasturiy koordinator
O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashi kotibiyati

Lavozim haqida
Dasturiy koordinator Xorijiy investorlar kengashi (XIK) loyihalari va tashabbuslarini tashkil etish, muvofiqlashtirish va kuzatib borish, davlat organlari, xalqaro hamkorlar hamda biznes-hamjamiyat o‘rtasida samarali hamkorlikni ta’minlash uchun mas’uldir. Mazkur lavozim dasturlar ijrosini nazorat qilish, operatsion jarayonlarni qo‘llab-quvvatlash va Kotibiyat faoliyati doirasidagi vazifalarning o‘z vaqtida bajarilishini ta’minlashni o‘z ichiga oladi.

Asosiy vazifalar:

Loyihalar va dasturlarni muvofiqlashtirish
• XIK loyihalarini barcha bosqichlarda rejalashtirish va hamrohlik qilish.
• Vazifalar ijrosi, muddatlar va asosiy nazorat nuqtalarini monitoring qilish.
• Loyihalarning ichki va tashqi ishtirokchilari bilan o‘zaro hamkorlikni yo‘lga qo‘yish.
• Tadbirlar, uchrashuvlar va ishchi guruhlar faoliyatini tayyorlash hamda o‘tkazishni qo‘llab-quvvatlash.

Operatsion faoliyat
• Kotibiyatning kundalik ish jarayonlarini tashkil etish.
• Uchrashuv materiallari, kun tartibi va bayonnomalarni tayyorlash.
• Samarali hujjat almashinuvini ta’minlash va topshiriqlar ijrosini nazorat qilish.
• Departamentlar va ishtirokchilar o‘rtasidagi o‘zaro aloqalarni muvofiqlashtirish.

Kommunikatsiya va hamkorlik
• Xorijiy investorlar va hamkorlar bilan doimiy muloqotni saqlab turish.
• Tomonlar o‘rtasida tezkor ma’lumot almashinuvini ta’minlash.
• Bir necha tillarda rasmiy xatishmalar va ishchi materiallarni tayyorlash.
• Barqaror ishchi munosabatlarni shakllantirishga ko‘maklashish.

Tahlil va hisobot
• Loyihalar va tashabbuslar bo‘yicha ma’lumotlarni to‘plash hamda tizimlashtirish.
• Vazifalar ijrosining holati yuzasidan muntazam hisobotlar tayyorlash.
• Jarayonlar rivojini monitoring qilish va yuzaga kelishi mumkin bo‘lgan xatarlarni aniqlash.

Tadbirlarni tashkil etish
• XIKning ishchanlik tadbirlari, forum va uchrashuvlarini muvofiqlashtirish.
• Logistika va ma’muriy jarayonlarni qo‘llab-quvvatlash.
• Ishtirokchilar va materiallar tayyorgarligini nazorat qilish.

Ish faoliyatining asosiy tamoyillari
• Vazifalarni bajarishda yuksak professionalizm va aniqlik.
• Muloqotning rasmiy va diplomatik ohangi.
• Maxfiylik va etika standartlariga qat’iy rioya qilish.`,
  ru: `Программный координатор отвечает за организацию, координацию и сопровождение проектов и инициатив Совета иностранных инвесторов (СИИ), обеспечивая эффективное взаимодействие между государственными органами, международными партнёрами и бизнес-сообществом.

Роль включает контроль реализации программ, поддержку операционных процессов и обеспечение своевременного исполнения задач в рамках деятельности Секретариата.

Основные обязанности

Координация проектов и программ

•  Планирование и сопровождение проектов СИИ на всех этапах реализации
•  Контроль сроков, задач и ключевых этапов исполнения
•  Взаимодействие с внутренними и внешними участниками проектов
•  Поддержка подготовки и проведения мероприятий, встреч и рабочих групп

Операционная деятельность

•  Организация ежедневных рабочих процессов Секретариата
•  Подготовка материалов, повесток и протоколов встреч
•  Обеспечение эффективного документооборота и контроля исполнения поручений
•  Координация взаимодействия между департаментами и участниками

Коммуникация и взаимодействие

•  Поддержка коммуникации с иностранными инвесторами и партнёрами
•  Обеспечение оперативного обмена информацией между сторонами
•  Подготовка деловой переписки и рабочих материалов на нескольких языках
•  Содействие выстраиванию устойчивых рабочих отношений

Аналитика и отчётность

•  Сбор и систематизация информации по проектам и инициативам
•  Подготовка регулярных отчётов о статусе выполнения задач
•  Мониторинг прогресса и выявление потенциальных рисков
•  Подготовка предложений по оптимизации процессов

Организация мероприятий

•  Координация деловых мероприятий, форумов и встреч СИИ
•  Поддержка логистики и административных процессов
•  Контроль подготовки участников и материалов
•  Обеспечение высокого уровня проведения мероприятий`,
  en: `Program Coordinator
Secretariat of the Foreign Investors Council under the President of the Republic of Uzbekistan

About the Position
The Program Coordinator is responsible for organizing, coordinating, and monitoring the projects and initiatives of the Foreign Investors Council, ensuring effective cooperation between government agencies, international partners, and the business community. This role involves overseeing program implementation, supporting operational processes, and ensuring the timely execution of tasks within the scope of the Secretariat's activities.

Key Responsibilities:

Project and Program Coordination
• Planning and monitoring FIC projects at all stages of implementation.
• Monitoring the execution of tasks, deadlines, and key milestones (control points).
• Facilitating interaction between internal and external project participants.
• Supporting the preparation and management of events, meetings, and working groups.

Operational Activities
• Organizing the daily workflows of the Secretariat.
• Preparing meeting materials, agendas, and minutes.
• Ensuring effective document flow and monitoring the implementation of assignments.
• Coordinating interaction between departments and stakeholders.

Communication and Collaboration
• Maintaining constant communication with foreign investors and partners.
• Ensuring the prompt exchange of information between all parties.
• Preparing official correspondence and working materials in multiple languages.
• Assisting in the development of sustainable professional relationships.

Analytics and Reporting
• Collecting and systematizing information regarding projects and initiatives.
• Preparing regular progress reports on the status of task execution.
• Monitoring progress and identifying potential risks.

Event Organization
• Coordinating FIC business events, forums, and high-level meetings.
• Supporting logistics and administrative processes.
• Overseeing the preparation of participants and relevant materials.

Core Principles
• High professionalism and precision in task execution.
• Maintaining an official and diplomatic tone in all communications.
• Strict adherence to confidentiality and ethical standards.`,
};

const getVladislavDuties = () =>
  vladislavDuties[locale.value] ?? vladislavDuties.ru;

const madinaDuties: Record<string, string> = {
  uz: `O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashi Kotibiyatining ma’muriy masalalar bo‘yicha xodimi

Kasbiy tajriba va asosiy vazifalar:

Hujjatlar aylanishi va ish yuritish
•  Kotibiyatning o‘zbek, rus va ingliz tillaridagi kiruvchi va chiquvchi korrespondensiyasini yuritish.
•  Hujjatlarni o‘rnatilgan reglamentlarga muvofiq ro‘yxatga olish, tizimlashtirish va arxivlash.
•  Rasmiy xatlar, ma’lumotnomalar, bayonnomalar va xizmat yozishmalarini tayyorlash.
•  Topshiriqlar ijrosini va hujjat aylanishi muddatlarini nazorat qilish.
•  Xizmat ma’lumotlarining maxfiyligi va saqlanishini ta’minlash.

Tadbirlar va uchrashuvlarni tashkil etish
•  Ishchi guruhlar yig‘ilishlari, plenar sessiyalar va ikki tomonlama uchrashuvlarni rejalashtirish hamda tashkiliy jihatdan muvofiqlashtirish.
•  Tadbirlar logistikasini boshqarish: zallarni band qilish, materiallarni tayyorlash va texnik ta’minot.
•  Kun tartibini tuzish, yig‘ilish bayonnomalarini yuritish va qabul qilingan qarorlar ijrosini nazorat qilish.
•  Xorijiy delegatsiyalar bilan aloqa o‘rnatish va rasmiy tashriflarning protokol kuzatuvini ta’minlash.

Muvofiqlashtirish va tahlil
•  Investorlar va vazirliklar o‘rtasida tezkor aloqani ta’minlash, investorlar murojaatlarini qabul qilish va ularning ko‘rib chiqilishini nazorat qilish.
•  Kotibiyat faoliyati bo‘yicha muntazam ma’muriy hisobotlar va rahbariyat uchun taqdimot materiallarini tayyorlash.
•  Onlayn tadbirlar va videokonferensiyalarni texnik qo‘llab-quvvatlash.

Kompetensiyalar va tillar:
•  Tillar: o‘zbek va rus tillari — erkin; ingliz tili — professional.
•  Kasbiy ko‘nikmalar: Davlat ish yuritish standartlari, strategik va diplomatik muloqot, MS Office dasturlari bilan professional darajada ishlash.
•  Shaxsiy sifatlar: Multitasking rejimida ishlash, stressga chidamlilik, natijadorlik va mijozga yo‘naltirilgan yondashuv.`,
  ru: `Административный сотрудник Секретариата Совета иностранных инвесторов при Президенте Республики Узбекистан

Профессиональный опыт и основные обязанности:

Документооборот и делопроизводство 
• Ведение входящей и исходящей корреспонденции Секретариата на узбекском, русском и английском языках. 
• Регистрация, систематизация и архивирование документов в соответствии с установленными регламентами. 
• Подготовка официальных писем, справок, протоколов и служебных записок. 
• Контроль за своевременным исполнением поручений и соблюдением сроков документооборота. 
• Обеспечение конфиденциальности и сохранности служебной информации.

Организация мероприятий и встреч 
• Планирование и организационное сопровождение заседаний рабочих групп, пленарных сессий и двусторонних встреч. 
• Управление логистикой мероприятий: бронирование залов, подготовка материалов и техническое обеспечение. 
• Составление повесток, ведение протоколов заседаний и контроль за выполнением принятых решений. 
• Взаимодействие с иностранными делегациями и обеспечение протокольного сопровождения официальных визитов.

Координация и анализ 
• Обеспечение оперативного взаимодействия между инвесторами и министерствами, прием и контроль исполнения обращений инвесторов. 
• Подготовка регулярных административных отчетов о деятельности Секретариата и презентационных материалов для руководства. 
• Техническая поддержка онлайн-мероприятий и видеоконференций.

Компетенции и языки: 
• Языки: узбекский и русский — свободно; английский — профессионально. 
• Профессиональные навыки: государственные стандарты делопроизводства, стратегическая и дипломатическая коммуникация, профессиональное владение программами MS Office. 
• Личные качества: работа в режиме многозадачности, стрессоустойчивость, ориентация на результат и клиентоориентированный подход.`,
  en: `Administrative Officer of the Secretariat of the Foreign Investors Council under the President of the Republic of Uzbekistan

Professional Experience and Key Responsibilities:

Document Flow and Clerical Work 
• Managing incoming and outgoing correspondence of the Secretariat in Uzbek, Russian, and English. 
• Registration, systematization, and archiving of documents in accordance with established regulations. 
• Preparation of official letters, certificates, minutes, and internal memos. 
• Monitoring the timely execution of assignments and compliance with document processing deadlines. 
• Ensuring the confidentiality and security of official information.

Organization of Events and Meetings 
• Planning and organizational support for working group meetings, plenary sessions, and bilateral meetings. 
• Managing event logistics: hall bookings, preparation of materials, and technical support. 
• Drafting agendas, taking minutes of meetings, and monitoring the implementation of decisions. 
• Liaising with foreign delegations and ensuring protocol support for official visits.

Coordination and Analysis 
• Ensuring prompt communication between investors and ministries, receiving and monitoring the processing of investor inquiries. 
• Preparing regular administrative reports on Secretariat activities and presentation materials for management. 
• Technical support for online events and video conferences.

Competencies and Languages: 
• Languages: Uzbek and Russian — fluent; English — professional. 
• Professional Skills: State clerical standards, strategic and diplomatic communication, professional proficiency in MS Office programs. 
• Personal Qualities: Multitasking, stress tolerance, result-oriented, and client-focused approach.`,
};

const getMadinaDuties = () => madinaDuties[locale.value] ?? madinaDuties.ru;

const madinaBiographies: Record<string, string> = {
  uz: `Tadbirlar, loyihalar va ishtirokchilar bilan o’zaro aloqalarni qo’llab-quvvatlash bo’yicha 7 yildan ortiq tajribaga ega ma’muriy va koordinatsion mutaxassis. Milliy va xalqaro tadbirlarni tashkil etish hamda YeI va USAID tomonidan moliyalashtiriladigan rivojlanish dasturlarini muvofiqlashtirish sohasida isbotlangan natijalar mavjud. Madaniyatlararo kommunikatsiya, hujjat aylanishi va ko’p tomonlama hamkorlik tajribasiga ega.`,
  ru: `Специалист по административной работе и координации с более чем 7-летним опытом сопровождения мероприятий, проектов и взаимодействия с участниками. Подтверждённый опыт организации национальных и международных мероприятий и координации программ развития, финансируемых ЕС и USAID. Опыт межкультурной коммуникации, документооборота и многостороннего взаимодействия.`,
  en: `Administrative and coordination professional with 7+ years of experience supporting events, projects, and stakeholder engagement. Proven track record in organizing national and international events and coordinating EU- and USAID-funded development programs. Experienced in cross-cultural communication, documentation, and multi-stakeholder collaboration.`,
};

const getMadinaBiography = () =>
  madinaBiographies[locale.value] ?? madinaBiographies.ru;

const azizBiographies: Record<string, string> = {
  uz: `Korporativ boshqaruv, risklar menejmenti, investitsion maslahat va davlat-xususiy sektor hamkorligi sohasida 20 yildan ortiq tajribaga ega yuqori darajali rahbar. Murakkab tashkilotlarni o’zgartirishdan o’tkazish, mustahkam korporativ boshqaruv tizimlarini qurish hamda moliya, energetika va infratuzilma sohalarida strategik o’zgarishlarni amalga oshirishda isbotlangan natijalar mavjud. Investorlar, regulyatorlar va xalqaro institutlar bilan yuqori darajadagi muloqot tajribasiga ega. Iqtisodiyot fanlari doktori (PhD).`,
  ru: `Руководитель высшего звена с более чем 20-летним опытом в корпоративном управлении, управлении рисками, инвестиционном консультировании и взаимодействии государственного и частного секторов. Подтверждённый опыт проведения сложных организаций через трансформацию, выстраивания надёжных систем корпоративного управления и реализации стратегических преобразований в сферах финансов, энергетики и инфраструктуры. Опыт взаимодействия на высоком уровне с инвесторами, регуляторами и международными институтами. Доктор философии (PhD) по экономическим наукам.`,
  en: `Executive-level professional with 20+ years of experience across corporate leadership, risk management, investment advisory, and public-private sector collaboration. Proven track record in steering complex organizations through transformation, establishing robust governance frameworks, and delivering strategic transformation across finance, energy, and infrastructure sectors. Experienced in high-level stakeholder engagement, including investors, regulators, and international institutions. Holds a Ph.D. in Economic Sciences.`,
};

const getAzizBiography = () =>
  azizBiographies[locale.value] ?? azizBiographies.ru;

const avazbekBiographies: Record<string, string> = {
  uz: `Investitsion muhitni rivojlantirish, xususiy-davlat hamkorligi va iqtisodiy siyosat sohasida 15 yildan ortiq tajribaga ega mutaxassis. To’g’ridan-to’g’ri xorijiy investitsiyalarni jalb etish, investitsion va KXH loyihalarini tuzish, investitsion muhit islohotlarini ilgari surish — jumladan, investor-davlat muloqoti platformasini yaratishda poydevor ishlarni olib borish sohasida isbotlangan natijalar mavjud. Xalqaro moliya institutlari, davlat organlari va xususiy investorlar bilan o’zaro aloqada ishlash tajribasiga ega.`,
  ru: `Специалист по инвестиционному климату с более чем 15-летним опытом в привлечении инвестиций, государственно-частном взаимодействии и экономической политике. Подтверждённый опыт привлечения прямых иностранных инвестиций, структурирования инвестиционных проектов и проектов ГЧП, продвижения реформ инвестиционного климата — включая работу у истоков платформы диалога инвесторов и государства. Опыт взаимодействия с международными финансовыми институтами, государственными органами и частными инвесторами.`,
  en: `Investment-climate specialist with 15+ years of experience across investment promotion, public-private collaboration, and economic policy. Proven track record in attracting foreign direct investment, structuring investment and PPP projects, and advancing investment-climate reforms — including foundational work on the platform for investor–government dialogue. Experienced in engagement with international financial institutions, government bodies, and private investors.`,
};

const getAvazbekBiography = () =>
  avazbekBiographies[locale.value] ?? avazbekBiographies.ru;

const hakimniyazBiographies: Record<string, string> = {
  uz: `Investitsiyalar, savdo va JTT ga qo’shilish masalalarida ixtisoslashgan xalqaro huquqshunos. Xalqaro huquq bo’yicha akademik yutuqlari bilan mustahkamlangan huquqiy va tahliliy qo’llab-quvvatlash, shartnoma-huquqiy ish va chegaralararo huquqiy jarayonlar sohasida isbotlangan natijalar mavjud. Davlat organlari, diplomatik missiyalar va xalqaro yuridik firmalar bilan ishlash tajribasiga ega.`,
  ru: `Юрист-международник, специализирующийся на вопросах инвестиций, торговли и вступления в ВТО. Подтверждённый опыт правовой и аналитической поддержки, договорно-правовой работы и трансграничных юридических процессов, подкреплённый отличными академическими результатами в области международного права. Опыт взаимодействия с государственными органами, дипломатическими миссиями и международными юридическими фирмами.`,
  en: `International law professional specializing in investment, trade, and WTO-accession matters. Proven track record in legal and analytical support, treaty work, and cross-border legal processes, underpinned by academic distinction in international law. Experienced in engagement with government bodies, diplomatic missions, and international law firms.`,
};

const getHakimniyazBiography = () =>
  hakimniyazBiographies[locale.value] ?? hakimniyazBiographies.ru;

const createContacts = (phone: string, email: string) => [
  {
    type: "phone" as const,
    value: phone,
    href: `tel:${phone.replace(/[^\d+]/g, "")}`,
  },
  {
    type: "email" as const,
    value: email,
    href: `mailto:${email}`,
  },
];

const members = computed(() => [
  {
    image: Aziz,
    fullname: t("Азиз Гафуров"),
    position: t("Руководитель секретариата"),
    description: t(
      "Руководитель высшего звена с более чем 20-летним опытом в корпоративном управлении, управлении рисками, инвестиционном консультировании и взаимодействии государственного и частного секторов."
    ),
    biography: getAzizBiography(),
    contacts: createContacts("+998 88 099 88 88", "head@fics.uz"),
  },
  {
    image: Avaz,
    fullname: t("Авазбек Муллажонов"),
    position: t("Программный координатор"),
    description: t(
      "Специалист по инвестиционному климату с более чем 15-летним опытом в привлечении инвестиций, государственно-частном взаимодействии и экономической политике."
    ),
    biography: getAvazbekBiography(),
    contacts: createContacts("+998 88 099 88 88", "coord1@fics.uz"),
  },
  {
    image: Hakimniyaz,
    fullname: t("Хакимнияз Каипбергенов"),
    position: t("Программный координатор"),
    description: t(
      "Юрист-международник, специализирующийся на вопросах инвестиций, торговли и вступления в ВТО. Опыт взаимодействия с государственными органами, дипломатическими миссиями и международными юридическими фирмами."
    ),
    biography: getHakimniyazBiography(),
    contacts: createContacts("+998 88 099 88 88", "coord2@fics.uz"),
  },
  {
    image: Vladislav,
    fullname: t("Владислав Ли"),
    position: t("Программный координатор"),
    description: t(
      "Окончил филиал Международного университета Вестминстера в Ташкенте по направлению «Бизнес-менеджмент и финансы» и свободно владеет тремя языками. Также владеет практическими навыками эффективной работы с клиентами, проведения переговоров и решения комплексных задач."
    ),
    biography: getVladislavBiography(),
    contacts: createContacts("+998 88 099 88 88", "coord3@fics.uz"),
  },
  {
    image: Jurabek,
    fullname: t("Журабек Бабаев"),
    position: t("ПР & Эксперт по маркетингу"),
    description: t(
      "Специалист в области коммуникаций с опытом в связях с общественностью, цифровом маркетинге и сфере услуг. Подтверждённый опыт в развитии бренда, медийном взаимодействии и цифровом продвижении, подкреплённый международным образованием и академической подготовкой в области управления. Опыт публичного взаимодействия и коммуникации с заинтересованными сторонами."
    ),
    biography: getJurabekBiography(),
    contacts: createContacts("+998 88 099 88 88", "marketing@fics.uz"),
  },
  {
    image: Madina,
    fullname: t("Мадинахон Абидова"),
    position: t("Административный ассистент"),
    description: t(
      "Специалист по административной работе и координации с более чем 7-летним опытом сопровождения мероприятий, проектов и взаимодействия с участниками. Подтверждённый опыт организации национальных и международных мероприятий и координации программ развития, финансируемых ЕС и USAID. Опыт межкультурной коммуникации, документооборота и многостороннего взаимодействия."
    ),
    biography: getMadinaBiography(),
    contacts: createContacts("+998 88 099 88 88", "admin@fics.uz"),
  },
]) as any;
</script>

<template>
  <div class="secretariat-page">
    <client-only>
      <PageHero :title="t('Секретариат')" />
      <section class="container secretariat-page__container">
        <div class="w-full">
          <p
            class="text-base text-left lg:text-lg text-[#505A63] font-normal leading-[170%] pb-5"
          >
            {{
              t(
                "Секретариат Совета иностранных инвесторов — постоянно действующий операционный орган, обеспечивающий преемственность и системность работы Совета между сессиями. Секретариат организует пленарные и промежуточные заседания, координирует деятельность шестнадцати рабочих групп, ведёт ежедневный диалог с членами Совета и иностранными инвесторами, собирает и анализирует инициативы по улучшению инвестиционного климата и обеспечивает их продвижение в профильную государственную политику."
              )
            }}
          </p>
          <p
            class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%]"
          >
            {{
              t(
                "С обретением статуса юридического лица Секретариат получил необходимую институциональную самостоятельность для эффективного выполнения своего мандата и взаимодействия с международными финансовыми институтами."
              )
            }}
          </p>
        </div>

        <div class="secretariat-page__list mt-10">
          <SecretariatProfileBlock
            v-for="member in members"
            :key="member.fullname"
            :member="member"
          />
        </div>
      </section>
    </client-only>
  </div>
</template>

<style scoped>
.secretariat-page {
  padding: 0 0 72px;
}

.secretariat-page__container {
  max-width: 1240px;
}

.secretariat-page__title {
  margin: 100px 0 28px;
  font-size: clamp(34px, 6vw, 64px);
  line-height: 0.96;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: #191c1f;
}

.secretariat-page__intro {
  max-width: 860px;
  margin: 0 auto 56px;
  text-align: center;
}

.secretariat-page__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  justify-items: stretch;
}

@media (min-width: 1024px) {
  .secretariat-page__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .secretariat-page {
    padding: 0 0 52px;
  }

  .secretariat-page__title {
    margin: 100px 0 22px;
  }

  .secretariat-page__intro {
    margin-bottom: 32px;
  }

  .secretariat-page__list {
    gap: 16px;
  }
}
</style>
