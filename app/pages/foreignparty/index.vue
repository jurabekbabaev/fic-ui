<script lang="ts" setup>
import { ref, computed } from "vue";
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
