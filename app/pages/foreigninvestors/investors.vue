<template>
  <div class="container mx-auto px-4">
    <div class="text-center mb-12 fade-in-down mt-[100px]">
      <h2 class="lg:text-[64px] text-[32px] font-bold mb-4 text-gray-900">
        {{ t("Исполнительный комитет") }}
      </h2>
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

        <div class="investor-profile-copy">
          <p v-if="showQuote" class="investor-profile-quote">
            {{ person.quote }}
          </p>
          <h3 class="investor-profile-name">
            {{ person.name }}
          </h3>
          <span v-if="person.role" class="investor-profile-badge">
            {{ person.role }}
          </span>
          <span v-if="person.role2" class="investor-profile-badge">
            {{ person.role2 }}
          </span>
          <p class="investor-profile-role">
            {{ person.position }}
          </p>
          <div v-if="!showQuote" class="investor-bio-wrap">
            <button class="investor-bio-btn">
              <span>{{ t("Биография") }}</span>
            </button>
            <div class="investor-bio-popover" role="tooltip">
              <p class="investor-bio-text">{{ person.bio }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import LazizImage from "@/assets/images/experts/foreign1.png";
import AndiImage from "@/assets/images/experts/foreign2.png";
import KanokpanImage from "@/assets/images/experts/foreign3.png";
import NeilImage from "@/assets/images/experts/foreign4.png";
import AzizImage from "@/assets/images/experts/aziz2.png";
import AdBank from "@/assets/images/brands/ad-bank.png";
import EBank from "@/assets/images/brands/e-bank.png";
import IfcBank from "@/assets/images/brands/ifc2.png";
import FICLogo from "@/assets/images/ba12d8ddde154e568c101e56e4a917883a60b20a.png";
import Logo from "@/assets/images/brands/miit.png";

const { t } = useI18n();
const route = useRoute();
const showQuote = computed(() => !route.path.includes("foreigninvestors"));

interface InvestorCard {
  logo: string;
  logoAlt: string;
  logoClass?: string;
  image: string;
  name: string;
  role: string;
  role2?: string;
  position: string;
  quote: string;
  bio: string;
}

const investorCards = computed<InvestorCard[]>(() => [
  {
    logo: Logo,
    logoAlt: "MIIT",
    logoClass: "investor-profile-logo-image--sm",
    image: LazizImage,
    name: t("Лазиз Кудратов"),
    role: t("Председатель исполнительного комитета"),
    // role2: t("Председатель "),
    position: t(
      "Министр инвестиций, промышленности и торговли Республики Узбекистан"
    ),
    quote: t(
      "“Узбекистан демонстрирует устойчивый рост инвестиционной активности благодаря проводимым реформам, созданию благоприятных условий для иностранных инвесторов.”"
    ),
    bio: t(
      "Министр инвестиций, промышленности и торговли РУз, Председатель Исполнительного комитета. Руководит инвестиционной политикой, промышленным развитием и внешней торговлей страны."
    ),
  },
  {
    logo: EBank,
    logoAlt: "EBRD",
    image: AndiImage,
    name: t("Анди Аранитаси"),
    role: t("Член исполнительного комитета"),
    // role2: t("Исполнительный комитет"),
    position: t(
      "Глава представительства Европейского банка реконструкции и развития в Узбекистане"
    ),
    quote: t(
      "“Мы придаем большое значение улучшению делового климата в стране, которое Президент Мирзиёев определил как стратегический национальный приоритет.”"
    ),
    bio: t(
      "Директор, Глава представительства ЕБРР в Узбекистане. Более 25 лет опыта в банковской сфере; расширил инвестиции ЕБРР в энергетику, инфраструктуру и частный сектор Узбекистана."
    ),
  },
  {
    logo: AdBank,
    logoAlt: "ADB",
    image: KanokpanImage,
    name: t("Канокпан Лао-Арая"),
    role: t("Член исполнительного комитета"),
    // role2: t("Исполнительный комитет"),
    position: t("Председатель Совета управляющих Азиатского банка развития"),
    quote: t(
      "“Правительство демонстрирует сильную приверженность реформам и стремится вовлекать все заинтересованные стороны страны, включая частный сектор, в процесс развития.”"
    ),
    bio: t(
      "Страновой директор АБР в Узбекистане. Более 25 лет опыта в области развития и экономической политики."
    ),
  },
  {
    logo: IfcBank,
    logoAlt: "IFC",
    image: NeilImage,
    name: t("Нил Маккейн"),
    role: t("Член исполнительного комитета"),
    // role2: t("Исполнительный комитет"),
    position: t(
      "Директор офиса Международной финансовой корпорации по Узбекистану и Туркменистану"
    ),
    quote: t(
      "“Ключевые конкурентные преимущества Узбекистана — крупнейшее население в Центральной Азии и наиболее диверсифицированная экономика.”"
    ),
    bio: t(
      "Директор офиса МФК по Узбекистану и Туркменистану. Руководит операциями МФК по развитию частного сектора."
    ),
  },
  {
    logo: FICLogo,
    logoAlt: "FIC",
    logoClass: "investor-profile-logo-image--sm",
    image: AzizImage,
    name: t("Азиз Гафуров"),
    role: t("Глава секретариата Совета Иностранных инвесторов"),
    // role2: t("Исполнительный комитет"),
    position: t("Глава ассоциации Совета"),
    quote: t(
      "“Мы придаем большое значение улучшению делового климата в стране, которое Президент Мирзиёев определил как стратегический национальный приоритет.”"
    ),
    bio: t(
      "Глава Ассоциации и Руководитель Секретариата Совета. Топ-менеджер с более чем 20-летним опытом в корпоративном управлении, управлении рисками и инвестиционной политике."
    ),
  },
]);
</script>

<style scoped>
.fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.investor-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.investor-profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 390px;
  height: 100%;
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

.investor-profile-copy {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
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
  font-size: 20px !important;
}

.investor-profile-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  max-width: 100%;
  color: #2d4cc5;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.4;
  text-align: center;
  white-space: pre-line;
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

.investor-bio-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
  padding-bottom: 20px;
}

.investor-bio-btn {
  position: relative;
  overflow: hidden;
  padding: 7px 18px;
  border: 1px solid rgba(25, 28, 31, 0.25);
  border-radius: 999px;
  background: transparent;
  color: #191c1f;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.35s ease, border-color 0.35s ease;
}

.investor-bio-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #191c1f;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.investor-bio-btn:hover::before {
  transform: scaleX(1);
}

.investor-bio-btn:hover {
  color: #fff;
  border-color: #191c1f;
}

.investor-bio-btn span {
  position: relative;
  z-index: 1;
}

.investor-bio-popover {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  width: 280px;
  max-width: 80vw;
  padding: 16px 18px;
  transform: translateX(-50%) translateY(-8px);
  border-radius: 16px;
  border: 1px solid rgba(25, 28, 31, 0.1);
  background: #fff;
  color: #191c1f;
  box-shadow: 0 18px 40px rgba(25, 28, 31, 0.12);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.28s ease, transform 0.28s ease, visibility 0.28s;
  pointer-events: none;
  z-index: 5;
}

.investor-bio-popover::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 14px;
  height: 14px;
  background: #fff;
  border-left: 1px solid rgba(25, 28, 31, 0.1);
  border-top: 1px solid rgba(25, 28, 31, 0.1);
  transform: translate(-50%, 50%) rotate(45deg);
  border-radius: 3px 0 0 0;
}

.investor-bio-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
}

.investor-bio-wrap:hover .investor-bio-popover {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.investor-profile-quote {
  color: #002342;
  font-size: 15px;
  line-height: 1.35;
  font-style: italic;
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(25, 28, 31, 0.1);
}
@media (min-width: 640px) {
  .investor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .investor-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .investor-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
  }

  .investor-profile-card {
    min-height: 420px;
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
