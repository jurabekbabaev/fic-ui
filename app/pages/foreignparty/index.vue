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
import NoData from '../nodata'

const brands = ref([
    OtpBank, HenleyPart, Sojitz, GloboGate, Knauf, UzCarls, Pwc, CentLaw, KostaLegal, TbcBank, AirProd, Epam, Kpmg, EyBrand, Bdo, Yandeks
])


</script>

<template>
  <div>
    <client-only>
    <div class="container">
      <!-- <div>
        <h1
            class="text-left lg:text-[64px] text-[32px] text-[#191C1F] font-extrabold uppercase  mt-16"
          >
          {{ t('Иностранная сторона') }}
          </h1>
          <span class="text-[#8E8E93] font-extrabold text-[44px] uppercase mt-6">{{ t('40 участинков') }}</span>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 mt-[32px]">
          <div v-for="(item, index) in brands" :key="index" class="border border-solid border-gray-500 rounded-xl bg-white flex items-center justify-center h-[162px]">
            <img :src="item" alt="">
          </div>
        </div>
      </div> -->
      <NoData />
    </div>
  </client-only>
  </div>
</template>

<style scoped>
</style>
