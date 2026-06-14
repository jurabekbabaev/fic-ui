<template>
  <div class="section container mx-auto px-4">
    <div>
      <div class="text-center mb-[50px]">
        <h2 class="title-64 mb-3 lg:text-[64px] text-[32px]">
          {{ t("homePage.executiveCommittee.title") }}
        </h2>
        <div class="w-full flex justify-center">
          <div class="lg:text-[20px] text-base lg:w-2/4">
            {{ t("homePage.executiveCommittee.subtitle") }}
          </div>
        </div>
      </div>

      <div class="investor-grid">
        <article
          v-for="person in investorCards"
          :key="person.name"
          class="investor-profile-card"
        >
          <div class="investor-profile-logo">
            <img
              :src="person.logo"
              :alt="person.logoAlt"
              :class="['investor-profile-logo-image', person.logoClass]"
            />
          </div>

          <div class="investor-profile-image-wrap">
            <img
              :src="person.image"
              :alt="person.name"
              class="investor-profile-image"
            />
          </div>

          <p class="investor-profile-quote">
            {{ person.quote }}
          </p>
          <div class="investor-profile-bottom">
            <hr class="investor-profile-divider" />
            <h3 class="investor-profile-name">
              {{ person.name }}
            </h3>
            <p class="investor-profile-role">
              {{ person.position }}
            </p>
          </div>
        </article>
      </div>

      <div class="text-center mt-[50px]">
        <WLocaleLink to="/foreigninvestors" class="btn btn-secondary">
          {{ t("homePage.executiveCommittee.learnMore") }}
        </WLocaleLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import WLocaleLink from "../shared/WLocaleLink.vue";
import { useI18n } from "vue-i18n";
import LazizImage from "@/assets/images/experts/foreign1.png";
import AndiImage from "@/assets/images/experts/foreign2.png";
import KanokpanImage from "@/assets/images/experts/foreign3.png";
import NeilImage from "@/assets/images/experts/foreign4.png";
import AzizImage from "@/assets/images/experts/aziz2.png";
import AdBank from "@/assets/images/brands/ad-bank.png";
import EBank from "@/assets/images/brands/e-bank.png";
import IfcBank from "@/assets/images/brands/ifc2.png";
import FICLogo from "../../../public/images/ba12d8ddde154e568c101e56e4a917883a60b20a.png";
import Logo from "@/assets/images/brands/miit.png";

const { t } = useI18n();

const investorCards = computed(() => [
  {
    logo: Logo,
    logoAlt: "MIIT",
    logoClass: "investor-profile-logo-image--sm",
    image: LazizImage,
    name: t("homePage.executiveCommittee.laziz.name"),
    position: t("homePage.executiveCommittee.laziz.position"),
    quote: t("homePage.executiveCommittee.laziz.quote"),
  },
  {
    logo: EBank,
    logoAlt: "EBRD",
    image: AndiImage,
    name: t("homePage.executiveCommittee.andi.name"),
    position: t("homePage.executiveCommittee.andi.position"),
    quote: t("homePage.executiveCommittee.andi.quote"),
  },
  {
    logo: AdBank,
    logoAlt: "ADB",
    image: KanokpanImage,
    name: t("homePage.executiveCommittee.kanokpan.name"),
    position: t("homePage.executiveCommittee.kanokpan.position"),
    quote: t("homePage.executiveCommittee.kanokpan.quote"),
  },
  {
    logo: IfcBank,
    logoAlt: "IFC",
    image: NeilImage,
    name: t("homePage.executiveCommittee.neil.name"),
    position: t("homePage.executiveCommittee.neil.position"),
    quote: t("homePage.executiveCommittee.neil.quote"),
  },
  {
    logo: FICLogo,
    logoAlt: "FIC",
    logoClass: "investor-profile-logo-image--sm",
    image: AzizImage,
    name: t("homePage.executiveCommittee.aziz.name"),
    position: t("homePage.executiveCommittee.aziz.position"),
    quote: t("homePage.executiveCommittee.aziz.quote"),
  },
]);
</script>

<style scoped>
.investor-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
}

.investor-profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px 28px;
  border: 1px solid rgba(25, 28, 31, 0.1);
  border-radius: 24px;
  background: #fff;
  text-align: center;
  box-shadow: 0 10px 30px rgba(25, 28, 31, 0.04);
}

.investor-profile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-bottom: 18px;
}

.investor-profile-logo-image {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.investor-profile-logo-image--sm {
  max-width: 78%;
  max-height: 78%;
}

.investor-profile-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  margin-bottom: 20px;
  overflow: hidden;
}

.investor-profile-image {
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
  transform: scale(1.08);
  transform-origin: center top;
}

.investor-profile-bottom {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.investor-profile-divider {
  border: none;
  border-top: 1px solid rgba(25, 28, 31, 0.1);
  margin: 0;
  width: 100%;
}

.investor-profile-name {
  color: #191c1f;
  line-height: 1.1;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}

.investor-profile-role {
  color: #505a63;
  font-size: 15px;
  line-height: 1.35;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}

.investor-profile-quote {
  color: #002342;
  font-size: 15px;
  line-height: 1.35;
  font-style: italic;
  margin: 0;
  padding-bottom: 20px;
  width: 100%;
}

@media (min-width: 640px) {
  .investor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: auto;
  }

  .investor-profile-card {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 4;
    align-items: start;
    justify-items: center;
  }
}

@media (min-width: 768px) {
  .investor-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .investor-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
  }

  .investor-profile-card {
    padding: 28px 18px 30px;
  }

  .investor-profile-logo {
    height: 76px;
  }

  .investor-profile-image-wrap {
    height: 240px;
  }

  .investor-profile-name {
    font-size: 24px;
  }

  .investor-profile-role {
    font-size: 14px;
  }
}
</style>
