<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const LeaderImage1 = img("leaders/leader1.png");
const LeaderImage2 = img("leaders/leader2.png");
const LeaderImage3 = img("leaders/leader3.png");
const LeaderImage4 = img("leaders/leader4.png");
const LeaderImage5 = img("leaders/leader5.png");
const LeaderImage6 = img("leaders/leader6.png");
const AdBank = img("brands/ad-bank.png");
const IdBank = img("brands/id-bank.png");
const WbGroup = img("brands/wb-group.png");
const MiCor = img("brands/mi-cor.png");
const Cola = img("brands/cola.png");
const Visa = img("brands/visa.png");
const Halyk = img("brands/halyk.png");
const MitCo = img("brands/mit-co.png");
const TbcBank = img("brands/tbc-bank.png");
const JpMorgan = img("brands/jp-morgan.png");
const EBank = img("brands/e-bank.png");
const AwPart = img("brands/aw-part.png");
const AcdfUz = img("brands/acdf-uz.png");
const AcwaPower = img("brands/acwa-power.png");
const AiiBank = img("brands/aii-bank.png");
const AirProd = img("brands/air-prod.png");
const Aksa = img("brands/aksa.png");
const AlvarezMar = img("brands/alvarez-mar.png");
const Amcham = img("brands/amcham.png");
const Avesta = img("brands/avesta.png");
const Azizov = img("brands/azizov.png");
const BatBetter = img("brands/bat-better.png");
const Bdo = img("brands/bdo.png");
const Cafa = img("brands/cafa.png");
const CentLaw = img("brands/cent-law.png");
const ChalikHolding = img("brands/chalik-holding.png");
const ChinaSpg = img("brands/china-spg.png");
const Crowe = img("brands/crowe.png");
const Deloitte = img("brands/deloitte.png");
const Dentos = img("brands/dentos.png");
const Edf = img("brands/edf.png");
const EnergyChina = img("brands/energy-china.png");
const Enhol = img("brands/enhol.png");
const Epam = img("brands/epam.png");
const EyBrand = img("brands/ey.png");
const Fintech = img("brands/fintech.png");
const GloboGate = img("brands/globo-gate.png");
const HenleyPart = img("brands/henley-part.png");
const Hudson = img("brands/hudson.png");
const Ifc = img("brands/ifc.png");
const Indoorama = img("brands/indoorama.png");
const Itfc = img("brands/itfc.png");
const Knauf = img("brands/knauf.png");
const KostaLegal = img("brands/kosta-legal.png");
const Kpmg = img("brands/kpmg.png");
const Lekhim = img("brands/lekhim.png");
const Masdar = img("brands/masdar.png");
const Mastercard = img("brands/mastercard.png");
const MinaretRen = img("brands/minaret-ren.png");
const MinistryIit = img("brands/ministry-iit.png");
const Orano = img("brands/orano.png");
const OtpBank = img("brands/otp-bank.png");
const Ozguven = img("brands/ozguven.png");
const Pwc = img("brands/pwc.png");
const SasaIntern = img("brands/sasa-intern.png");
const Siemens = img("brands/siemens.png");
const SilverLeafe = img("brands/silver-leafe.png");
const Sojitz = img("brands/sojitz.png");
const Suez = img("brands/suez.png");
const Te = img("brands/te.png");
const UzCarls = img("brands/uz-carls.png");
const UzumMarket = img("brands/uzum-market.png");
const Veon = img("brands/veon.png");
const WhiteCase = img("brands/white-case.png");
const YandeksUz = img("brands/yandeks-uz.png");
const Yandeks = img("brands/yandeks.png");
const ZiraatBank = img("brands/ziraat-bank.png");
const Ipoteka = img("brands/ipoteka.png");
const Uzum = img("brands/uzum.png");
const sandro = img("leaders/sandro2.png");

interface ILeaderGroup {
  id: number;
  image: string;
  fullname: string;
  position: string;
  direction: string;
  directiondesc: string;
  directionid: number;
  company_image: string;
  text: string;
  brands: string[];
}

const leaderList = computed<ILeaderGroup[]>(() => [
  {
    id: 1,
    image: LeaderImage1,
    fullname: t("Спартак Тетрашвили"),
    position: t("Председатель правления TBC Bank Uzbekistan"),
    direction: t("РГ по финансовому сектору и банковской деятельности"),
    directiondesc: t(
      "Развитие финансового и банковского сектора, расширение инструментов финансирования инвестиционных проектов и укрепление доверия инвесторов к финансовой системе страны."
    ),
    directionid: 2,
    company_image: TbcBank,
    text: t(
      "Председатель правления TBC Bank Uzbekistan, вступивший в должность в декабре 2020 года. В Узбекистане у Тетрашвили нетривиальная и амбициозная задача: наладить работу открытого несколько месяцев назад TBC Bank Uzbekistan, первого полностью цифрового банка в Узбекистане, в котором нет ни одного процесса, за которым стоит человек, а все услуги можно получить через приложение — так же, как в платежных системах. Спартак считает, что философия бренда TBC заключается в создании прозрачных доступных и смелых решений. Это же определяет стиль работы управленцев и каждого сотрудника. «Я с TBC вместе уже 7 лет. Если говорить о стиле работы, то в TBC мы одна команда. Мы работаем без официоза и разделения по должностным категориям. Каждый член команды может проявить инициативу и подойти с вопросом, идеей, предложением и я готов выслушать мнение каждого.. Не ставить барьеры – вот что важно», — говорит Тетрашвили."
    ),
    brands: [
      AdBank,
      IdBank,
      WbGroup,
      MiCor,
      Cola,
      Visa,
      Halyk,
      MitCo,
      TbcBank,
      JpMorgan,
      EBank,
      AwPart,
    ],
  },
  {
    id: 2,
    image: sandro,
    fullname: t("Сандро Ртвеладзе"),
    position: t("Генеральный директор Ipoteka Bank OTP Group"),
    direction: t(
      "РГ по привлечению талантов и развитию человеческого капитала"
    ),
    directiondesc: t(
      "Подготовка квалифицированных кадров для иностранных компаний: программы непрерывного образования, международная профессиональная сертификация и сотрудничество университетов с бизнесом."
    ),
    directionid: 3,
    company_image: Ipoteka,
    text: t("leader.sandro_rtveladze.text"),
    brands: [
      OtpBank,
      HenleyPart,
      Sojitz,
      GloboGate,
      Knauf,
      UzCarls,
      Pwc,
      CentLaw,
      KostaLegal,
      TbcBank,
      AirProd,
      Epam,
      Kpmg,
      EyBrand,
      Bdo,
      Yandeks,
      Crowe,
      Veon,
      ChalikHolding,
      Suez,
      Edf,
      MiCor,
      IdBank,
      ChinaSpg,
      Halyk,
      Masdar,
      BatBetter,
      Te,
      EnergyChina,
      AcwaPower,
      AdBank,
      Ifc,
      Cafa,
      Amcham,
      ZiraatBank,
      Orano,
      Visa,
      Itfc,
      MitCo,
      AlvarezMar,
      Mastercard,
      Cola,
      Aksa,
      Hudson,
      Ozguven,
      MinistryIit,
    ],
  },
  {
    id: 3,
    image: LeaderImage3,
    fullname: t("Сергей Саликов"),
    position: t("Uzum, генеральный юрисконсульт"),
    direction: t("РГ по цифровизации и ИКТ"),
    directiondesc: t(
      "Цифровая трансформация взаимодействия инвесторов с государством, развитие электронных платформ оказания услуг и современной цифровой инфраструктуры."
    ),
    directionid: 4,
    company_image: Uzum,
    text: t(
      "Сергей Саликов - Uzum, Главный юрисконсульт. Имеет более чем 12-летний опыт поддержки инвестиционных соглашений, создания фондов и холдингов в различных юрисдикциях. Он руководил юридическим блоком в Российском фонде прямых инвестиций и был в числе тех, кто поддерживал проекты M&A в Газпромбанке"
    ),
    brands: [
      Siemens,
      AdBank,
      WbGroup,
      Cola,
      Halyk,
      EBank,
      SilverLeafe,
      Suez,
      TbcBank,
      ChalikHolding,
      Pwc,
      WhiteCase,
      Dentos,
      Fintech,
      YandeksUz,
    ],
  },
  {
    id: 4,
    image: LeaderImage4,
    fullname: t("Гаянэ Умерова"),
    position: t(
      "Председатель Фонда развития культуры и искусства Узбекистана при Кабинете Министров Республики Узбекистан"
    ),
    direction: t("РГ по креативным индустриям"),
    directiondesc: t(
      "Преобразование креативных отраслей в инвестиционно- и экспортно-ориентированный сектор экономики в течение ближайших пяти лет."
    ),
    directionid: 5,
    company_image: AcdfUz,
    text: t(
      "Председатель Фонда развития культуры и искусства Узбекистана при Кабинете Министров Республики Узбекистан. Генеральный секретарь Национальной комиссии Узбекистана по делам ЮНЕСКО при Кабинете министров. В 2004 году окончила школу искусств School of Integrated Arts (Западный Йоркшир), в 2008 году — Международный Вестминстерский университет по специальности «Бизнес управление», в 2009 году — Центральный колледж искусств Central Saint MartinsCollege, (Лондон, Великобритания) по специальности «Культура, критика и кураторство». Имеет степень магистра в областях «Современное искусство» и «Арт-бизнес» Манчестерского Университета, (Манчестер, Великобритания, 2012 г.) и Института искусств при аукционном доме Sotheby's, (Лондон, Великобритания, 2011 г.). С 2017 года является соискателем кафедры «Политические исследования и международные отношения» Оксфордского Университета (Великобритания), по направлению «Культурная дипломатия, внешняя культурная политика»."
    ),
    brands: [
      WbGroup,
      AcwaPower,
      TbcBank,
      UzumMarket,
      AcdfUz,
      EyBrand,
      Halyk,
      Lekhim,
    ],
  },
  {
    id: 5,
    image: LeaderImage5,
    fullname: t("Ерлан Досымбеков"),
    position: t("EY, управляющий партнер EY по Кавказу и Центральной Азии"),
    direction: t("РГ по инвестиционному климату"),
    directiondesc: t(
      "Системное совершенствование инвестиционного климата: устранение административных барьеров, повышение прозрачности и предсказуемости регулирования."
    ),
    directionid: 6,
    company_image: EyBrand,
    text: t(
      "У Ерлана более 25 лет опыта работы в области локального и международного налогообложения, налоговой эффективности, налоговых споров и управления налоговыми рисками. Ерлан активно участвует в проектах по улучшению делового климата и инвестиционной привлекательности, курирует проекты по развитию институциональной среды, инфраструктуры, декарбонизации и чистых технологий. Удостоен государственной награды – ордена «Курмет» за вклад в экономическое развитие и улучшение инвестиционного климата в Казахстане, а также награжден медалями к 25-летию Конституции и к 30-летию Независимости Казахстана. Ерлан является председателем правления Ассоциации «Казахстанский Совет иностранных инвесторов» и Европейской Ассоциации Бизнеса в Казахстане, сопредседателем рабочей группы по реализации инвестиционной политики Совета иностранных инвесторов, членом Совета по улучшению инвестиционного климата под председательством Премьер-министра при Американской торговой палате (AmCham). Ерлан регулярно выступает на деловых форумах, заседаниях рабочей группы EY для клиентов нефтегазовой промышленности в Хьюстоне (США), а также консультирует корпоративных клиентов EY в Каспийском регионе по вопросам налогообложения сделок и международного структурирования."
    ),
    brands: [
      AiiBank,
      Indoorama,
      Avesta,
      BatBetter,
      Deloitte,
      Suez,
      SasaIntern,
      Azizov,
      Amcham,
      Pwc,
      UzCarls,
      AdBank,
      Masdar,
      MiCor,
      EyBrand,
      Cola,
      Mastercard,
    ],
  },
  {
    id: 6,
    image: LeaderImage6,
    fullname: t("Джон Заиди"),
    position: t("CEO Acwa в Узбекистане"),
    direction: t("РГ по энергетическому сектору"),
    directiondesc: t(
      "Содействие привлечению частных инвестиций в генерацию, передачу и распределение электроэнергии, развитие возобновляемых источников и механизмов смешанного финансирования энергетических проектов."
    ),
    directionid: 1,
    company_image: AcwaPower,
    text: t(
      "Джон Заиди обладает более чем 25-летним опытом работы в области налогообложения, развития энергетики и инвестиционной инфраструктуры. Он активно участвует в продвижении энергетических проектов, внедрении новых технологий и укреплении энергетического сектора Узбекистана. Он является членом Ассоциации Совета иностранных инвесторов Казахстана и представляет Acwa в Европейской ассоциации энергетических компаний. Ранее он работал в ведущих международных энергетических корпорациях, включая проекты в США и Европе."
    ),
    brands: [
      AdBank,
      AcwaPower,
      Masdar,
      Edf,
      Te,
      EyBrand,
      Bdo,
      KostaLegal,
      Amcham,
      Dentos,
      Azizov,
      AirProd,
      Siemens,
      MinaretRen,
      Enhol,
    ],
  },
]);

const route = useRoute();
const leaderId = computed(() => parseInt(route.params.id as string));
const isuser = computed(
  () => route.query.isuser === "true" || route.query.isuser === true
);

const currentLeader = computed(() => {
  return leaderList.value.find((leader) =>
    isuser.value
      ? leader.id === leaderId.value
      : leader.directionid === leaderId.value
  );
});

console.log(currentLeader.value);

function goBack() {
  const localePath = useLocalePath();
  const to = localePath("/advice");
  navigateTo(to);
}
</script>

<template>
  <div>
    <client-only>
      <div class="container">
        <div class="mt-10 mb-12">
          <button
            @click="goBack"
            class="flex items-center gap-2 text-[#505A63] hover:text-[#191C1F] transition-colors mb-8 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ t("Назад к списку лидеров") }}
          </button>
        </div>
        <div v-if="currentLeader" class="">
          <h1 class="text-4xl text-left font-bold mx-auto pb-4">
            {{ currentLeader.direction }}
          </h1>
          <p class="lg:text-base text-sm text-[#505A63] pb-10">
            {{ currentLeader.directiondesc }}
          </p>
        </div>
        <div v-if="currentLeader" class="">
          <div>
            <!-- <h1
            class="lg:text-[64px] text-[32px] uppercase font-black mb-12 mt-10"
          >
            {{ currentLeader.direction }}
          </h1> -->
          </div>
          <div class="flex flex-col lg:flex-row gap-5 items-start">
            <div class="w-full lg:w-1/2 flex flex-col lg:flex-row">
              <div class="shrink-0">
                <img
                  :src="currentLeader.image"
                  :alt="currentLeader.fullname"
                  class="w-full lg:w-[324px] object-cover rounded-2xl"
                />
              </div>
              <div class="ml-5 lg:mt-0 mt-5">
                <div>
                  <p class="text-sm text-[#000000] mb-0.5 font-normal">
                    {{ t("Руководитель рабочей группы.") }}
                  </p>
                </div>
                <h1
                  class="lg:text-[32px] text-2xl font-extrabold text-[#191C1F] mb-1 uppercase"
                >
                  {{ currentLeader.fullname }}
                </h1>
                <p class="text-xs font-normal text-[#505A63]">
                  {{ currentLeader.position }}
                </p>
              </div>
            </div>

            <div class="lg:w-1/2 sm:w-full">
              <div class="mt-1">
                <div>
                  <p class="lg:text-base text-sm text-[#505A63]">
                    {{ t(currentLeader.text) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center mt-[50px] lg:mt-[100px]">
          <h2 class="text-2xl font-bold text-[#191C1F] mb-4">
            {{ t("Лидер не найден") }}
          </h2>
          <p class="text-[#505A63] mb-8">
            {{ t("Запрашиваемый лидер не существует") }}
          </p>
          <button
            @click="goBack"
            class="bg-[#191C1F] text-white px-6 py-3 rounded-lg hover:bg-[#2a2f33] transition-colors"
          >
            {{ t("Вернуться к списку") }}
          </button>
        </div>
        <div>
          <h1
            class="text-center lg:text-[32px] text-2xl text-[#191C1F] font-extrabold mb-12 mt-16 uppercase"
          >
            {{ t("Участники рабочей группы") }}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="(item, index) in currentLeader?.brands"
              :key="index"
              class="border border-solid border-gray-500 rounded-xl bg-white flex items-center justify-center h-[162px]"
            >
              <img
                :src="item"
                alt=""
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
