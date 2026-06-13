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
  uz: `O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashi Kotibiyatining strategik kommunikatsiyalar bo‘yicha maslahatchisi

Jurabek Babaev — strategik kommunikatsiyalar, PR va boshqaruv sohalarida ko‘p yillik xalqaro tajribaga ega mutaxassis. O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashining raqamli ishtiroki va xalqaro imijini rivojlantirish, shuningdek, xorijiy investorlar hamda xalqaro hamkorlar bilan aloqalarni yo‘lga qo‘yish uchun mas’uldir.

Ta’lim:
• O‘zbek-Yapon markazi — Professional Management Program, Toshkent, 2018
• Toshkent davlat iqtisodiyot universiteti — “Xalqaro turizm menejmenti” yo‘nalishi bo‘yicha PhD, 2017–2019
• Toshkent davlat iqtisodiyot universiteti — magistratura, “Xalqaro turizm menejmenti”, 2015–2017
• Buxoro davlat universiteti — bakalavriat, ijtimoiy-iqtisodiy fakultet, “Turizm va mehmonxona menejmenti”, 2011–2015
• International Center of Modern Education — Praga, Chexiya, 2009–2011
• Karlov College — ABE dasturi “Travel, Tourism and Hospitality Business”, Praga, Chexiya, 2007–2009

Malaka oshirish va sertifikatlar:
• Vena iqtisodiyot va biznes universiteti, 2013
• Oerlikon GmbH, Nyurnberg, Germaniya, 2013
• O‘zbekiston Banklar assotsiatsiyasi, Buxoro, 2003–2006

Kasbiy tajriba
• Babaev Services LLC — direktor, Toshkent (2019-yil sentabrdan hozirgacha)
• Toshkent davlat iqtisodiyot universiteti — “Turizm va servis” kafedrasi o‘qituvchisi, 2017–2021
• Meridian Service Bukhara LLC — TIF va logistika menejeri, Buxoro, 2015–2017
• “Bukhara Gilam” QK MChJ — TIF va logistika bo‘yicha mutaxassis, Buxoro, 2011–2014
• Hotel Karlo IV (Boscolo, 5★) — F&B menejeri assistenti, Praga, Chexiya, 2010
• Hotel Inturprag (3★) — administrator, Praga, Chexiya, 2009–2010

Jamoatchilik faoliyati
• Birlashgan Millatlar Tashkiloti Taraqqiyot Dasturi volontyori, Buxorodagi turizm loyihalari bo‘yicha, 2013–2015
• “Kelajak ovozi” Yosh tadbirkorlar maktabi trener-volontyori, 2012–2013
• Kamolot yoshlar ijtimoiy harakati yetakchisi va volontyori, 2011–2015

Kompetensiyalar va tillar
• Tillar: o‘zbek — ona tili; rus va ingliz — erkin; chex va turk — boshlang‘ich daraja
• Kasbiy ko‘nikmalar: PR, marketing, strategik menejment, sun’iy intellekt vositalari bilan ishlash, Microsoft Office dasturlari.`,
  ru: `Советник по стратегическим коммуникациям Секретариата Совета иностранных инвесторов при Президенте Республики Узбекистан

Журабек Бабаев — специалист в области стратегических коммуникаций, PR и управления с многолетним международным опытом. Отвечает за развитие цифрового присутствия и международного имиджа Совета иностранных инвесторов при Президенте Республики Узбекистан, а также за налаживание взаимодействия с иностранными инвесторами и международными партнёрами.

Образование:
• Узбекско-Японский центр — Professional Management Program, Ташкент, 2018
• Ташкентский государственный экономический университет — PhD по направлению «Международный туристический менеджмент», 2017–2019
• Ташкентский государственный экономический университет — магистратура, «Международный туристический менеджмент», 2015–2017
• Бухарский государственный университет — бакалавриат, социально-экономический факультет, «Туризм и гостиничный менеджмент», 2011–2015
• International Center of Modern Education — Прага, Чехия, 2009–2011
• Karlov College — программа ABE «Travel, Tourism and Hospitality Business», Прага, Чехия, 2007–2009

Повышение квалификации и сертификаты:
• Венский университет экономики и бизнеса, 2013
• Oerlikon GmbH, Нюрнберг, Германия, 2013
• Ассоциация банков Узбекистана, Бухара, 2003–2006

Профессиональный опыт
• Babaev Services LLC — директор, Ташкент (с сентября 2019 года по настоящее время)
• Ташкентский государственный экономический университет — преподаватель кафедры «Туризм и сервис», 2017–2021
• Meridian Service Bukhara LLC — менеджер по ВЭД и логистике, Бухара, 2015–2017
• «Bukhara Gilam» СП ООО — специалист по ВЭД и логистике, Бухара, 2011–2014
• Hotel Karlo IV (Boscolo, 5★) — ассистент менеджера F&B, Прага, Чехия, 2010
• Hotel Inturprag (3★) — администратор, Прага, Чехия, 2009–2010

Общественная деятельность
• Волонтёр Программы развития Организация Объединённых Наций по туристическим проектам в Бухаре, 2013–2015
• Тренер-волонтёр Школы молодых предпринимателей «Келажак овози», 2012–2013
• Лидер и волонтёр общественного движения Камолот, 2011–2015

Компетенции и языки
• Языки: узбекский — родной; русский и английский — свободно; чешский и турецкий — начальный уровень
• Профессиональные навыки: PR, маркетинг, стратегический менеджмент, работа с инструментами искусственного интеллекта, программы Microsoft Office.`,
  en: `Strategic Communications Advisor of the Secretariat of the Foreign Investors Council under the President of the Republic of Uzbekistan

Jurabek Babaev is a specialist in strategic communications, PR, and management with many years of international experience. He is responsible for developing the digital presence and international image of the Foreign Investors Council under the President of the Republic of Uzbekistan, as well as establishing cooperation with foreign investors and international partners.

Education:
• Uzbek-Japanese Center — Professional Management Program, Tashkent, 2018
• Tashkent State University of Economics — PhD in International Tourism Management, 2017–2019
• Tashkent State University of Economics — Master’s degree, International Tourism Management, 2015–2017
• Bukhara State University — Bachelor’s degree, Faculty of Socio-Economics, Tourism and Hotel Management, 2011–2015
• International Center of Modern Education — Prague, Czech Republic, 2009–2011
• Karlov College — ABE Program “Travel, Tourism and Hospitality Business”, Prague, Czech Republic, 2007–2009

Professional Development and Certificates:
• Vienna University of Economics and Business, 2013
• Oerlikon GmbH, Nuremberg, Germany, 2013
• Banking Association of Uzbekistan, Bukhara, 2003–2006

Professional Experience
• Babaev Services LLC — Director, Tashkent (from September 2019 to present)
• Tashkent State University of Economics — Lecturer, Department of Tourism and Service, 2017–2021
• Meridian Service Bukhara LLC — Foreign Economic Activity and Logistics Manager, Bukhara, 2015–2017
• “Bukhara Gilam” JV LLC — Foreign Economic Activity and Logistics Specialist, Bukhara, 2011–2014
• Hotel Karlo IV (Boscolo, 5★) — Assistant F&B Manager, Prague, Czech Republic, 2010
• Hotel Inturprag (3★) — Administrator, Prague, Czech Republic, 2009–2010

Public Activities
• Volunteer of the United Nations Development Programme (UNDP) for tourism projects in Bukhara, 2013–2015
• Volunteer Trainer at the “Kelajak Ovozi” School of Young Entrepreneurs, 2012–2013
• Leader and volunteer of the Kamolot Youth Social Movement, 2011–2015

Competencies and Languages
• Languages: Uzbek — native; Russian and English — fluent; Czech and Turkish — beginner level
• Professional skills: PR, marketing, strategic management, working with artificial intelligence tools, Microsoft Office programs.`,
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

const getJurabekDuties = () =>
  jurabekDuties[locale.value] ?? jurabekDuties.ru;

const vladislavBiographies: Record<string, string> = {
  uz: `O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashi Kotibiyatining dasturiy koordinatori

Vladislav Li — jarayonlarni muvofiqlashtirish, loyiha ishtirokchilari bilan o‘zaro aloqalarni o‘rnatish va samarali kommunikatsiyani ta’minlash bo‘yicha mutaxassis. Mijozlar bilan ishlash, tadbirlarni tashkil etish va loyihalarni kuzatib borish bo‘yicha amaliy ko‘nikmalarga ega. Yuqori moslashuvchanlik, mas’uliyat va dinamik muhitda ishlash qobiliyati bilan ajralib turadi.

Ta’lim:
• Toshkentdagi Xalqaro Vestminster universiteti — Bakalavriat, “Biznes menejmenti va moliya”, 2021–2025

Kasbiy tajriba:
• XIK Kotibiyati — Dasturiy koordinator (hozirgi vaqtda)
 • Loyihalar va ichki jarayonlarni muvofiqlashtirish;
 • Ishtirokchilar va hamkorlar bilan aloqalarni bog‘lash;
 • Ish jarayonlarini tashkil etish va vazifalar ijrosini nazorat qilish.
• “Tashagrochem” MChJ — Logistika bo‘yicha menejer, 2024–2025
 • Yuk tashishni tashkil etish va kuzatish;
 • Ta’minot monitoringi va operatsion masalalarni hal qilish;
 • Mijozlar va haydovchilar bilan aloqa o‘rnatish.
• “Tashagrochem” MChJ — Sotuv bo‘yicha mutaxassis, 2023–2025
 • Muzokaralar olib borish va mijozlar bilan ishlash;
 • Uzoq muddatli hamkorlik aloqalarini o‘rnatish;
 • Sotuvdan keyingi xizmatlarni muvofiqlashtirish.
• Scholastic Academy Group — Ingliz tili o‘qituvchisi assistenti, 2021–2023
 • O‘quv jarayonini tashkil etish;
 • Talabalar o‘zlashtirishini nazorat qilish;
 • O‘qituvchini qo‘llab-quvvatlash va dars mashg‘ulotlarini o‘tkazish.

Kompetensiyalar va tillar:
• Tillar: rus, ingliz va o‘zbek tillari — erkin (fluently)
• Kasbiy ko‘nikmalar: Loyihalarni muvofiqlashtirish, kommunikatsiya va mijozlar bilan ishlash, muzokaralar va taqdimotlar o‘tkazish, logistika va operatsion boshqaruv, jamoada ishlash, stressga chidamlilik va natijadorlik.`,
  ru: `Владислав Ли — программный координатор Секретариата, специализируется на координации процессов, взаимодействии с участниками проектов и обеспечении эффективной коммуникации.

Обладает практическими навыками работы с клиентами, организации мероприятий и сопровождения проектов. Отличается высокой адаптивностью, ответственностью и умением работать в динамичной среде.

Образование

Международный Вестминстерский университет в Ташкенте
Бакалавриат — Бизнес менеджмент и финансы (2021–2025)

Профессиональный опыт

Секретариат (текущая позиция)
Программный координатор

• Координация проектов и внутренних процессов
• Взаимодействие с участниками и партнёрами
• Организация рабочих процессов и контроль выполнения задач

ООО “Tashagrochem”
Менеджер по логистике (2024–2025)

• Организация и сопровождение грузоперевозок
• Мониторинг поставок и решение операционных вопросов
• Взаимодействие с клиентами и водителями

Специалист по продажам (2023–2025)

• Проведение переговоров и работа с клиентами
• Построение долгосрочных отношений
• Постпродажное сопровождение

Scholastic Academy Group
Ассистент преподавателя английского языка (2021–2023)

• Организация учебного процесса
• Контроль успеваемости студентов
• Поддержка преподавателя и проведение занятий

Компетенции

• Координация проектов
• Коммуникации и работа с клиентами
• Переговоры и презентации
• Логистика и операционное управление
• Работа в команде и адаптивность
• Стрессоустойчивость и ориентация на результат

Языки

• Русский — свободно
• Английский — свободно
• Узбекский — свободно`,
  en: `Program Coordinator of the Secretariat of the Foreign Investors Council under the President of the Republic of Uzbekistan

Vladislav Li is a specialist in process coordination, stakeholder engagement, and ensuring effective communication. He possesses practical skills in client relations, event organization, and project support. He is distinguished by high adaptability, responsibility, and the ability to work in dynamic environments.

Education:
• Westminster International University in Tashkent — Bachelor of Arts in Business Management and Finance, 2021–2025

Professional Experience:
• FIC Secretariat — Program Coordinator (Current position)
 • Coordinating projects and internal processes;
 • Interacting with participants and partners;
 • Organizing workflows and monitoring task execution.
• Tashagrochem LLC — Logistics Manager, 2024–2025
 • Organizing and supervising freight transportation;
 • Monitoring supplies and resolving operational issues;
 • Liaising with clients and drivers.
• Tashagrochem LLC — Sales Specialist, 2023–2025
 • Conducting negotiations and client management;
 • Building long-term professional relationships;
 • Providing after-sales support.
• Scholastic Academy Group — English Teacher Assistant, 2021–2023
 • Organizing the educational process;
 • Monitoring student performance;
 • Assisting teachers and conducting lessons.

Competencies and Languages:
• Languages: Russian, English, and Uzbek — Fluent.
• Professional Skills: Project coordination, communication and client relations, negotiations and presentations, logistics and operational management, teamwork, stress tolerance, and result orientation.`,
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

const getMadinaDuties = () =>
  madinaDuties[locale.value] ?? madinaDuties.ru;

const madinaBiographies: Record<string, string> = {
  uz: `O‘zbekiston Respublikasi Prezidenti huzuridagi Xorijiy investorlar kengashi Kotibiyatining ma’muriy masalalar bo‘yicha xodimi

Madinaxon Abidova — loyihalarni boshqarish, xalqaro tadbirlarni tashkil etish va turizmni rivojlantirish sohasida boy tajribaga ega mutaxassis. Xalqaro tashkilotlar, davlat tuzilmalari va notijorat sektordagi faoliyati davomida chuqur akademik bilimlarni amaliy tajriba bilan samarali uyg‘unlashtirib kelmoqda. Hozirda Xorijiy investorlar kengashining ma’muriy jarayonlarini muvofiqlashtirish va investorlar bilan aloqalarni ta’minlash uchun mas’uldir.

Ta’lim:
• Xalqaro agrar universiteti / Qirollik agrar universiteti — Magistratura, “Agrobiznesni boshqarish”, 2023–2025
• Toshkentdagi Singapur menejmentni rivojlantirish instituti — Bakalavriat, “Biznes va iqtisodiyot”, 2015–2020
• Toshkent davlat iqtisodiyot universiteti qoshidagi akademik litsey — 2012–2015

Kasbiy tajriba:
• XIK Kotibiyati — Ma’muriy xodim(2025-yil iyundan hozirgacha)
 • Kotibiyatning barcha hujjatlar aylanishi va ish yuritish jarayonlarini boshqarish.
 • Ishchi guruhlar yig‘ilishlari, investorlar bilan uchrashuvlar va rasmiy tadbirlarni tashkil etish.
 • Investorlar va tegishli davlat organlari o‘rtasidagi aloqalarni muvofiqlashtirish.
• XIK Kotibiyati — Stajyor (2025-yil fevral – iyun)
• O‘zbekiston xususiy sayyohlik tashkilotlari uyushmasi (APTA) — Menejer, 2016–2024
 • 15 dan ortiq milliy va xalqaro tadbirlarni (B2B, Road-show) muvofiqlashtirish.
 • Yevropa Ittifoqi (YeI) va USAID loyihalarida loyiha assistenti va aloqa ofitseri (Liaison Officer) sifatida ishtirok etish.
 • "Tashkent Travel Mart" B2B ko‘rgazmasi va YeI tomonidan qo‘llab-quvvatlangan xalqaro konferensiyalar tashkilotchisi.
• Denova Agro — Tadbirlar tashkilotchisi (Vena, Avstriya), 2019
• WEST CAMP — Ingliz tili o‘qituvchisi va yoshlar dasturlari rahbari, 2017

Jamoatchilik va ko‘ngillilik faoliyati:
• Iteca-Exhibitions — Xalqaro ko‘rgazmalar ko‘ngillisi, 2017–2018

Kompetensiyalar va tillar:
• Tillar: o‘zbek — ona tili; rus va ingliz tillari — erkin.
• Kasbiy ko‘nikmalar: Event management (tadbirlar boshqaruvi), xalqaro logistika, B2B muloqot, strategik rejalashtirish, loyihalar monitoringi va YeI/USAID standartlari asosida hisobot tayyorlash.`,
  ru: `Административный сотрудник Секретариата Совета иностранных инвесторов при Президенте Республики Узбекистан

Мадинахон Абидова — специалист с богатым опытом в области управления проектами, организации международных мероприятий и развития туризма. В своей деятельности в международных организациях, государственных структурах и некоммерческом секторе она эффективно сочетает глубокие академические знания с практическим опытом. В настоящее время отвечает за координацию административных процессов Совета иностранных инвесторов и обеспечение связи с инвесторами.

Образование:
• Международный аграрный университет / Королевский аграрный университет — Магистратура, «Управление агробизнесом», 2023–2025
• Сингапурский институт развития менеджмента в Ташкенте — Бакалавриат, «Бизнес и экономика», 2015–2020
• Академический лицей при Ташкентском государственном экономическом университете — 2012–2015

Профессиональный опыт:
• Секретариат СИИ — Административный сотрудник (с июня 2025 года по настоящее время)
 • Управление всеми процессами документооборота и делопроизводства Секретариата.
 • Организация заседаний рабочих групп, встреч с инвесторами и официальных мероприятий.
 • Координация взаимодействия между инвесторами и соответствующими государственными органами.
• Секретариат СИИ — Стажер (февраль – июнь 2025)
• Ассоциация частных туристических организаций Узбекистана (APTA) — Менеджер, 2016–2024
 • Координация более 15 национальных и международных мероприятий (B2B, Road-show).
 • Участие в проектах Европейского Союза (ЕС) и USAID в качестве ассистента проекта и офицера по связям (Liaison Officer).
 • Организатор B2B выставки «Tashkent Travel Mart» и международных конференций при поддержке ЕС.
• Denova Agro — Организатор мероприятий (Вена, Австрия), 2019
• WEST CAMP — Преподаватель английского языка и руководитель молодежных программ, 2017

Общественная и волонтерская деятельность:
• Iteca-Exhibitions — Волонтер международных выставок, 2017–2018

Компетенции и языки:
• Языки: узбекский — родной; русский и английский — свободно.
• Профессиональные навыки: Event management (управление мероприятиями), международная логистика, B2B коммуникации, стратегическое планирование, мониторинг проектов и подготовка отчетов по стандартам ЕС/USAID.`,
  en: `Administrative Officer of the Secretariat of the Foreign Investors Council under the President of the Republic of Uzbekistan

Madinaxon Abidova is a professional with extensive experience in project management, international event organization, and tourism development. Throughout her career in international organizations, government structures, and the non-profit sector, she has effectively combined deep academic knowledge with practical experience. Currently, she is responsible for coordinating administrative processes of the Foreign Investors Council and ensuring liaison with investors.

Education:
• International Agriculture University / Royal Agricultural University — Master’s in Agribusiness Management, 2023–2025
• Management Development Institute of Singapore in Tashkent — Bachelor’s in Business and Economics, 2015–2020
• Academic Lyceum under Tashkent State University of Economics — 2012–2015

Professional Experience:
• FIC Secretariat — Administrative Officer (June 2025 – Present)
 • Managing all document flow and clerical processes of the Secretariat.
 • Organizing working group meetings, investor sessions, and official events.
 • Coordinating interaction between investors and relevant state authorities.
• FIC Secretariat — Intern (February – June 2025)
• Association of Private Tourism Agencies of Uzbekistan (APTA) — Manager, 2016–2024
 • Coordinating more than 15 national and international events (B2B, Road-shows).
 • Participating in European Union (EU) and USAID projects as a project assistant and Liaison Officer.
 • Organizer of the "Tashkent Travel Mart" B2B exhibition and international conferences supported by the EU.
• Denova Agro — Event Organizer (Vienna, Austria), 2019
• WEST CAMP — English teacher and youth program leader, 2017

Public and Volunteer Activities:
• Iteca-Exhibitions — Volunteer for international exhibitions, 2017–2018

Competencies and Languages:
• Languages: Uzbek — native; Russian and English — fluent.
• Professional Skills: Event management, international logistics, B2B communication, strategic planning, project monitoring, and reporting based on EU/USAID standards.`,
};

const getMadinaBiography = () =>
  madinaBiographies[locale.value] ?? madinaBiographies.ru;

const azizBiographies: Record<string, string> = {
  uz: `Iqtisodiyot fanlari doktori, korporativ boshqaruv, investitsiya siyosati va strategik konsalting sohalarida 20 yildan ortiq tajribaga ega. U xalqaro investorlar, rivojlanish banklari va davlat tuzilmalari bilan ishlash bo‘yicha keng tajribaga ega. Investorlar bilan aloqalarni rivojlantirish, siyosatni muvofiqlashtirish va institutsional rivojlanishga rahbarlik qiladi.`,
  ru: `Доктор экономических наук, более 20 лет опыта в сферах корпоративного управления, инвестиционной политики и стратегического консалтинга. Обладает обширным опытом работы с международными инвесторами, банками развития и государственными структурами. Руководит развитием отношений с инвесторами, координацией политики и институциональным развитием.`,
  en: `Doctor of Economic Sciences with over 20 years of experience in corporate governance, investment policy, and strategic consulting. He has extensive experience working with international investors, development banks, and government institutions. He leads the development of investor relations, policy coordination, and institutional development.`,
};

const getAzizBiography = () =>
  azizBiographies[locale.value] ?? azizBiographies.ru;

const avazbekBiographies: Record<string, string> = {
  uz: `Tashqi iqtisodiy aloqalar, investitsiyalar va energetika sohalarida 15 yildan ortiq kasbiy tajribaga ega. Yirik investitsiya loyihalarini muvofiqlashtirish va xalqaro hamkorlikni rivojlantirish bo‘yicha keng amaliyotga ega. Xorijiy investorlar kengashi Kotibiyatida dasturlarni muvofiqlashtirish va loyihalar ijrosini ta’minlash uchun mas’ul.`,
  ru: `Более 15 лет профессионального опыта в области внешнеэкономических связей, инвестиций и энергетики. Обладает обширной практикой координации крупных инвестиционных проектов и развития международного сотрудничества. В Секретариате Совета иностранных инвесторов отвечает за координацию программ и обеспечение реализации проектов.`,
  en: `Over 15 years of professional experience in foreign economic relations, investment, and energy. He has extensive practice in coordinating major investment projects and developing international cooperation. At the Secretariat of the Foreign Investors Council, he is responsible for program coordination and ensuring project implementation.`,
};

const getAvazbekBiography = () =>
  avazbekBiographies[locale.value] ?? avazbekBiographies.ru;

const hakimniyazBiographies: Record<string, string> = {
  uz: `MGIMO (Moskva) bakalavriat va magistraturasini xalqaro huquq yo‘nalishi bo‘yicha imtiyozli diplom bilan tamomlagan. O‘zbekiston Tashqi ishlar vazirligida hamda xalqaro yuridik firmada ishlash tajribasiga ega. Xorijiy investorlar kengashi Kotibiyatida huquqiy masalalar va dasturlarni muvofiqlashtirish bilan shug‘ullanadi.`,
  ru: `С отличием окончил бакалавриат и магистратуру МГИМО (Москва) по международному праву. Имеет опыт работы в МИД Узбекистана, а также в международной юридической фирме. В Секретариате Совета иностранных инвесторов занимается правовыми вопросами и координацией программ.`,
  en: `Graduated with honors from MGIMO (Moscow) with bachelor's and master's degrees in international law. He has experience working at the Ministry of Foreign Affairs of Uzbekistan and at an international law firm. At the Secretariat of the Foreign Investors Council, he handles legal matters and program coordination.`,
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
  {
    type: "hours" as const,
    value: "Du-Ju 9:00 - 18:00",
  },
];

const members = computed(() => [
  {
    image: Aziz,
    fullname: t("Азиз Гафуров"),
    position: t("Руководитель секретариата"),
    description: t(
      "Азиз Гафуров – топ-менеджер с более чем 20-летним опытом в сфере корпоративного управления, управления рисками, инвестиционной политики и стратегического консалтинга."
    ),
    biography: getAzizBiography(),
    contacts: createContacts("+998 88 099 88 88", "head@fics.uz"),
  },
  {
    image: Avaz,
    fullname: t("Авазбек Муллажонов"),
    position: t("Программный координатор"),
    description: t(
      "Авазбек имеет более чем 15-летний профессиональный опыт в области внешнеэкономических связей, инвестиций и энергетики."
    ),
    biography: getAvazbekBiography(),
    contacts: createContacts("+998 88 099 88 88", "coord1@fics.uz"),
  },
  {
    image: Hakimniyaz,
    fullname: t("Хакимнияз Каипбергенов"),
    position: t("Программный координатор"),
    description: t(
      "Хакимнияз Каипбергенов с отличием окончил бакалавриат и магистратуру МГИМО в Москве по международному праву. Имеет опыт работы в МИД Узбекистана, а также в международной юридической фирме."
    ),
    biography: getHakimniyazBiography(),
    contacts: createContacts("+998 88 099 88 88", "coord2@fics.uz"),
  },
  {
    image: Vladislav,
    fullname: t("Владислав Ли"),
    position: t("Программный координатор"),
    description:
      "Окончил филиал Международного университета Вестминстера в Ташкенте по направлению «Бизнес-менеджмент и финансы» и свободно владеет тремя языками. Также владеет практическими навыками эффективной работы с клиентами, проведения переговоров и решения комплексных задач.",
    biography: getVladislavBiography(),
    contacts: createContacts("+998 88 099 88 88", "coord3@fics.uz"),
  },
  {
    image: Jurabek,
    fullname: t("Журабек Бабаев"),
    position: t("ПР & Эксперт по маркетингу"),
    description: t(
      "Журабек Бабаев — маркетолог нового поколения, соединяющий стратегическое мышление с глубоким пониманием бизнес-ландшафта Узбекистана"
    ),
    biography: getJurabekBiography(),
    contacts: createContacts("+998 88 099 88 88", "marketing@fics.uz"),
  },
  {
    image: Madina,
    fullname: t("Мадинахон Абидова"),
    position: t("Административный ассистент"),
    description: t(
      "До присоединения к Секретариату СИИ Мадинахон работала менеджером в Ассоциации частных туристических организаций Узбекистана"
    ),
    biography: getMadinaBiography(),
    contacts: createContacts("+998 88 099 88 88", "admin@fics.uz"),
  },
]);
</script>

<template>
  <div class="secretariat-page">
    <client-only>
      <PageHero title="Секретариат" />
      <section class="container secretariat-page__container">
        <div class="secretariat-page__intro w-full">
          <p class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%] pb-5">
            {{ t("Секретариат Совета иностранных инвесторов — постоянно действующий операционный орган, обеспечивающий преемственность и системность работы Совета между сессиями. Секретариат организует пленарные и промежуточные заседания, координирует деятельность шестнадцати рабочих групп, ведёт ежедневный диалог с членами Совета и иностранными инвесторами, собирает и анализирует инициативы по улучшению инвестиционного климата и обеспечивает их продвижение в профильную государственную политику.") }}
          </p>
          <p class="text-base lg:text-lg text-[#505A63] font-normal leading-[170%]">
            {{ t("С обретением статуса юридического лица Секретариат получил необходимую институциональную самостоятельность для эффективного выполнения своего мандата и взаимодействия с международными финансовыми институтами.") }}
          </p>
        </div>

        <div class="secretariat-page__list">
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
