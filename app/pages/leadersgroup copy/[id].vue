<script lang="ts" setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import LeaderImage1 from "@/assets/images/leaders/leader1.png";
import LeaderImage2 from "@/assets/images/leaders/leader2.png";
import LeaderImage3 from "@/assets/images/leaders/leader3.png";
import LeaderImage4 from "@/assets/images/leaders/leader4.png";
import LeaderImage5 from "@/assets/images/leaders/leader5.png";
import LeaderImage6 from "@/assets/images/leaders/leader6.png";
import AdBank from "@/assets/images/brands/ad-bank.png";
import IdBank from "@/assets/images/brands/id-bank.png";
import WbGroup from "@/assets/images/brands/wb-group.png";
import MiCor from "@/assets/images/brands/mi-cor.png";
import Cola from "@/assets/images/brands/cola.png";
import Visa from "@/assets/images/brands/visa.png";
import Halyk from "@/assets/images/brands/halyk.png";
import MitCo from "@/assets/images/brands/mit-co.png";
import TbcBank from "@/assets/images/brands/tbc-bank.png";
import JpMorgan from "@/assets/images/brands/jp-morgan.png";
import EBank from "@/assets/images/brands/e-bank.png";
import AwPart from "@/assets/images/brands/aw-part.png";
import AcdfUz from "@/assets/images/brands/acdf-uz.png";
import AcwaPower from "@/assets/images/brands/acwa-power.png";
import AiiBank from "@/assets/images/brands/aii-bank.png";
import AirProd from "@/assets/images/brands/air-prod.png";
import Aksa from "@/assets/images/brands/aksa.png";
import AlvarezMar from "@/assets/images/brands/alvarez-mar.png";
import Amcham from "@/assets/images/brands/amcham.png";
import Avesta from "@/assets/images/brands/avesta.png";
import Azizov from "@/assets/images/brands/azizov.png";
import BatBetter from "@/assets/images/brands/bat-better.png";
import Bdo from "@/assets/images/brands/bdo.png";
import Cafa from "@/assets/images/brands/cafa.png";
import CentLaw from "@/assets/images/brands/cent-law.png";
import ChalikHolding from "@/assets/images/brands/chalik-holding.png";
import ChinaSpg from "@/assets/images/brands/china-spg.png";
import Crowe from "@/assets/images/brands/crowe.png";
import Deloitte from "@/assets/images/brands/deloitte.png";
import Dentos from "@/assets/images/brands/dentos.png";
import Edf from "@/assets/images/brands/edf.png";
import EnergyChina from "@/assets/images/brands/energy-china.png";
import Enhol from "@/assets/images/brands/enhol.png";
import Epam from "@/assets/images/brands/epam.png";
import EyBrand from "@/assets/images/brands/ey.png";
import Fintech from "@/assets/images/brands/fintech.png";
import GloboGate from "@/assets/images/brands/globo-gate.png";
import HenleyPart from "@/assets/images/brands/henley-part.png";
import Hudson from "@/assets/images/brands/hudson.png";
import Ifc from "@/assets/images/brands/ifc.png";
import Indoorama from "@/assets/images/brands/indoorama.png";
import Itfc from "@/assets/images/brands/itfc.png";
import Knauf from "@/assets/images/brands/knauf.png";
import KostaLegal from "@/assets/images/brands/kosta-legal.png";
import Kpmg from "@/assets/images/brands/kpmg.png";
import Lekhim from "@/assets/images/brands/lekhim.png";
import Masdar from "@/assets/images/brands/masdar.png";
import Mastercard from "@/assets/images/brands/mastercard.png";
import MinaretRen from "@/assets/images/brands/minaret-ren.png";
import MinistryIit from "@/assets/images/brands/ministry-iit.png";
import Orano from "@/assets/images/brands/orano.png";
import OtpBank from "@/assets/images/brands/otp-bank.png";
import Ozguven from "@/assets/images/brands/ozguven.png";
import Pwc from "@/assets/images/brands/pwc.png";
import SasaIntern from "@/assets/images/brands/sasa-intern.png";
import Siemens from "@/assets/images/brands/siemens.png";
import SilverLeafe from "@/assets/images/brands/silver-leafe.png";
import Sojitz from "@/assets/images/brands/sojitz.png";
import Suez from "@/assets/images/brands/suez.png";
import Te from "@/assets/images/brands/te.png";
import UzCarls from "@/assets/images/brands/uz-carls.png";
import UzumMarket from "@/assets/images/brands/uzum-market.png";
import Veon from "@/assets/images/brands/veon.png";
import WhiteCase from "@/assets/images/brands/white-case.png";
import YandeksUz from "@/assets/images/brands/yandeks-uz.png";
import Yandeks from "@/assets/images/brands/yandeks.png";
import ZiraatBank from "@/assets/images/brands/ziraat-bank.png";


interface ILeaderGroup {
  id: number;
  image: string;
  fullname: string;
  position: string;
  direction: string;
  directionid: number;
  text: string;
  brands: string[]
}

const leaderList = ref<ILeaderGroup[]>([
  {
    id: 1,
    image: LeaderImage1,
    fullname: t("Спартак Тетрашвили"),
    position: t("TBC Bank, генеральный. Подбор талантов и управление человеческим капиталом"),
    direction: t("Финансовый сектор и банковское дело"),
    directionid: 2,
    text: t("Председатель правления TBC Bank Uzbekistan, вступивший в должность в декабре 2020 года. В Узбекистане у Тетрашвили нетривиальная и амбициозная задача: наладить работу открытого несколько месяцев назад TBC Bank Uzbekistan, первого полностью цифрового банка в Узбекистане, в котором нет ни одного процесса, за которым стоит человек, а все услуги можно получить через приложение — так же, как в платежных системах. Спартак считает, что философия бренда TBC заключается в создании прозрачных доступных и смелых решений. Это же определяет стиль работы управленцев и каждого сотрудника. «Я с TBC вместе уже 7 лет. Если говорить о стиле работы, то в TBC мы одна команда. Мы работаем без официоза и разделения по должностным категориям. Каждый член команды может проявить инициативу и подойти с вопросом, идеей, предложением и я готов выслушать мнение каждого.. Не ставить барьеры – вот что важно», — говорит Тетрашвили."),
    brands: [AdBank, IdBank, WbGroup, MiCor, Cola, Visa, Halyk, MitCo, TbcBank, JpMorgan, EBank, AwPart]
  },
  {
    id: 2,
    image: LeaderImage2,
    fullname: t("Александр Рукавишников"),
    position: t(""),
    direction: t("Привлечение талантов и развитие человеческого капитала"),
    directionid: 3,
    text: t("Александр Рукавишников — директор Дирекции маркетинга и коммуникации в Ipoteka Bank OTP Group. Он не просто придумывает слоганы — он строит мосты доверия между банком и его миллионной аудиторией. Работает на высоких скоростях — Ipoteka Bank занимает 5-е место среди банков Узбекистана с 7,6 % ипотечного рынка. Под его руководством активы банка растут в кредитном портфеле на 20 % в год, а депозиты — на 24 % в портфеле. Год за годом. Банк обслуживает 1,5 миллиона розничных и ряд крупных корпоративных клиентов через 40 филиалов и 123 точки обслуживания — и он это знает, потому что он там рулит маркетингом."),
    brands: [OtpBank, HenleyPart, Sojitz, GloboGate, Knauf, UzCarls, Pwc, CentLaw, KostaLegal, TbcBank, AirProd, Epam, Kpmg, EyBrand, Bdo, Yandeks, Crowe, Veon, ChalikHolding, Suez, Edf, MiCor, IdBank, ChinaSpg, Halyk, Masdar, BatBetter, Te, EnergyChina, AcwaPower, AdBank, Ifc, Cafa, Amcham, ZiraatBank, Orano, Visa, Itfc, MitCo, AlvarezMar, Mastercard, Cola, Aksa, Hudson, Ozguven, MinistryIit ]
  },
  {
    id: 3,
    image: LeaderImage3,
    fullname: t("Сергей Саликов"),
    position: t("Uzum, генеральный юрисконсульт"),
    direction: t("Цифровизация и ИКТ"),
    directionid: 4,
    text: t("Сергей Саликов - Uzum, Главный юрисконсульт. Имеет более чем 12-летний опыт поддержки инвестиционных соглашений, создания фондов и холдингов в различных юрисдикциях. Он руководил юридическим блоком в Российском фонде прямых инвестиций и был в числе тех, кто поддерживал проекты M&A в Газпромбанке"),
    brands: [Siemens, AdBank, WbGroup, Cola, Halyk, EBank, SilverLeafe, Suez, TbcBank, ChalikHolding, Pwc, WhiteCase, Dentos, Fintech, YandeksUz ]
  },
  {
    id: 4,
    image: LeaderImage4,
    fullname: t("Гаянэ Умерова"),
    position: t("ACDF, председатель"),
    direction: t("Креативные индустрии"),
    directionid: 5,
    text: t("Председатель Фонда развития культуры и искусства Узбекистана при Кабинете Министров Республики Узбекистан. Генеральный секретарь Национальной комиссии Узбекистана по делам ЮНЕСКО при Кабинете министров. В 2004 году окончила школу искусств School of Integrated Arts (Западный Йоркшир), в 2008 году — Международный Вестминстерский университет по специальности «Бизнес управление», в 2009 году — Центральный колледж искусств Central Saint MartinsCollege, (Лондон, Великобритания) по специальности «Культура, критика и кураторство». Имеет степень магистра в областях «Современное искусство» и «Арт-бизнес» Манчестерского Университета, (Манчестер, Великобритания, 2012 г.) и Института искусств при аукционном доме Sotheby's, (Лондон, Великобритания, 2011 г.). С 2017 года является соискателем кафедры «Политические исследования и международные отношения» Оксфордского Университета (Великобритания), по направлению «Культурная дипломатия, внешняя культурная политика»."),
    brands: [WbGroup, AcwaPower, TbcBank, UzumMarket, AcdfUz, EyBrand, Halyk, Lekhim]
  },
  {
    id: 5,
    image: LeaderImage5,
    fullname: t("Ерлан Досымбеков"),
    position: t("EY, управляющий партнер EY по Кавказу и Центральной Азии"),
    direction: t("Инвестиционный климат"),
    directionid: 6,
    text: t("У Ерлана более 25 лет опыта работы в области локального и международного налогообложения, налоговой эффективности, налоговых споров и управления налоговыми рисками. Ерлан активно участвует в проектах по улучшению делового климата и инвестиционной привлекательности, курирует проекты по развитию институциональной среды, инфраструктуры, декарбонизации и чистых технологий. Удостоен государственной награды – ордена «Курмет» за вклад в экономическое развитие и улучшение инвестиционного климата в Казахстане, а также награжден медалями к 25-летию Конституции и к 30-летию Независимости Казахстана. Ерлан является председателем правления Ассоциации «Казахстанский Совет иностранных инвесторов» и Европейской Ассоциации Бизнеса в Казахстане, сопредседателем рабочей группы по реализации инвестиционной политики Совета иностранных инвесторов, членом Совета по улучшению инвестиционного климата под председательством Премьер-министра при Американской торговой палате (AmCham). Ерлан регулярно выступает на деловых форумах, заседаниях рабочей группы EY для клиентов нефтегазовой промышленности в Хьюстоне (США), а также консультирует корпоративных клиентов EY в Каспийском регионе по вопросам налогообложения сделок и международного структурирования."),
    brands: [AiiBank, Indoorama, Avesta, BatBetter, Deloitte, Suez, SasaIntern, Azizov, Amcham, Pwc, UzCarls, AdBank, Masdar, MiCor, EyBrand, Cola, Mastercard]
  },
  {
    id: 6,
    image: LeaderImage6,
    fullname: t("Джон Заиди"),
    position: t("Acwa, глава страны – Узбекистан"),
    direction: t("Энергетический сектор"),
    directionid: 1,
    text: t("У Ерлана более 25 лет опыта работы в области локального и международного налогообложения, налоговой эффективности, налоговых споров и управления налоговыми рисками. Ерлан активно участвует в проектах по улучшению делового климата и инвестиционной привлекательности, курирует проекты по развитию институциональной среды, инфраструктуры, декарбонизации и чистых технологий. Удостоен государственной награды – ордена «Курмет» за вклад в экономическое развитие и улучшение инвестиционного климата в Казахстане, а также награжден медалями к 25-летию Конституции и к 30-летию Независимости Казахстана. Ерлан является председателем правления Ассоциации «Казахстанский Совет иностранных инвесторов» и Европейской Ассоциации Бизнеса в Казахстане, сопредседателем рабочей группы по реализации инвестиционной политики Совета иностранных инвесторов, членом Совета по улучшению инвестиционного климата под председательством Премьер-министра при Американской торговой палате (AmCham). Ерлан регулярно выступает на деловых форумах, заседаниях рабочей группы EY для клиентов нефтегазовой промышленности в Хьюстоне (США), а также консультирует корпоративных клиентов EY в Каспийском регионе по вопросам налогообложения сделок и международного структурирования."),
    brands: [AdBank, AcwaPower, Masdar, Edf, Te, EyBrand, Bdo, KostaLegal, Amcham, Dentos, Azizov, AirProd, Siemens, MinaretRen, Enhol]
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
  const to = localePath("/leadersgroup");
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
          {{ t('Назад к списку лидеров') }}
        </button>
      </div>

      <div v-if="currentLeader" class="">
        <div>
          <h1
            class="lg:text-[64px] text-[32px] uppercase font-black mb-12 mt-10"
          >
            {{ currentLeader.direction }}
          </h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="lg:w-1/3 sm:w-screen">
            <img
              :src="currentLeader.image"
              :alt="currentLeader.fullname"
              class="lg:w-full sm:w-screen! sm:object-cover"
            />
          </div>

          <div class="lg:w-2/3 sm:w-full">
            <div>
              <p class="lg:text-2xl text-lg text-[#505A63] mb-3">
                {{ currentLeader.position }}
              </p>
            </div>
            <h1
              class="lg:text-[32px] text-2xl font-black text-[#191C1F] mb-6 uppercase"
            >
              {{ currentLeader.fullname }}
            </h1>

            <div class="space-y-6">
              <div>
                <p class="lg:text-lg text-sm text-[#505A63]">
                  {{ currentLeader.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center mt-[100px]">
        <h2 class="text-2xl font-bold text-[#191C1F] mb-4">{{ t('Лидер не найден') }}</h2>
        <p class="text-[#505A63] mb-8">{{ t('Запрашиваемый лидер не существует') }}</p>
        <button
          @click="goBack"
          class="bg-[#191C1F] text-white px-6 py-3 rounded-lg hover:bg-[#2a2f33] transition-colors"
        >
          {{ t('Вернуться к списку') }}
        </button>
      </div>
      <div>
        <h1
            class="text-center lg:text-[32px] text-2xl text-[#505A63] font-normal mb-12 mt-16"
          >
          {{ t('Участники рабочей группы') }}
          </h1>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-5">
          <div v-for="(item, index) in currentLeader?.brands" :key="index" class="border border-solid border-gray-500 rounded-xl bg-white flex items-center justify-center h-[162px]">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
    </div>
  </client-only>
  </div>
</template>

<style scoped>
</style>
