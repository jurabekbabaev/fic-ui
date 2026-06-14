<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import TbcBank from "@/assets/images/brands/tbc-bank.png";
import AirProd from "@/assets/images/brands/air-prod.png";
import CentLaw from "@/assets/images/brands/cent-law.png";
import Epam from "@/assets/images/brands/epam.png";
import EyBrand from "@/assets/images/brands/ey.png";
import GloboGate from "@/assets/images/brands/globo-gate.png";
import HenleyPart from "@/assets/images/brands/henley-part.png";
import Knauf from "@/assets/images/brands/knauf.png";
import KostaLegal from "@/assets/images/brands/kosta-legal.png";
import Kpmg from "@/assets/images/brands/kpmg.png";
import OtpBank from "@/assets/images/brands/otp-bank.png";
import Pwc from "@/assets/images/brands/pwc.png";
import Sojitz from "@/assets/images/brands/sojitz.png";
import UzCarls from "@/assets/images/brands/uz-carls.png";
import Yandeks from "@/assets/images/brands/yandeks.png";
import NoData from "../nodata";

const brands = ref([
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
]);
</script>

<template>
  <div>
    <client-only>
      <div class="container">
        <!-- <div>
        <h1
            class="text-left lg:text-[64px] text-[32px] text-[#191C1F] font-extrabold uppercase  mt-16"
          >
          {{ t('foreignparty.title') }}
          </h1>
          <span class="text-[#8E8E93] font-extrabold text-[44px] uppercase mt-6">{{ t('foreignparty.membersCount') }}</span>
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

<style scoped></style>
