<template>
  <div class="section container mx-auto px-4">
    <div>
      <div class="text-center mb-[50px]">
        <h2 class="title-64 mb-3 lg:text-[64px] text-[32px]">
          {{ t("Исполнительный комитет") }}
        </h2>
        <div class="w-full flex justify-center">
          <div class="lg:text-[20px] text-base lg:w-2/4">
            {{
              t(
                "barqaror rivojlanish va iqtisodiy islohotlarni qo‘llab-quvvatlash maqsadidagi tashkilotlarni birlashtiradi."
              )
            }}
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

          <div class="investor-profile-copy">
            <p class="investor-profile-quote">
              {{ person.quote }}
            </p>
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
          {{ t("Подробно") }}
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
import Logo from "../../../app/assets/images/brands/ministry-iit.png";

const { t } = useI18n();

const investorCards = computed(() => [
  {
    logo: Logo,
    logoAlt: "MIIT",
    logoClass: "investor-profile-logo-image--sm",
    image: LazizImage,
    name: t("Лазиз Кудратов"),
    position: t("Министр инвестиций, промышленности и торговли Республики Узбекистан"),
    quote: t("“Узбекистан демонстрирует устойчивый рост инвестиционной активности благодаря проводимым реформам, созданию благоприятных условий для иностранных инвесторов.”"),
  },
  {
    logo: EBank,
    logoAlt: "EBRD",
    image: AndiImage,
    name: t("Анди Аранитаси"),
    position: t(
      "Глава представительства Европейского банка реконструкции и развития в Узбекистане"
    ),
    quote: t("“Мы придаем большое значение улучшению делового климата в стране, которое Президент Мирзиёев определил как стратегический национальный приоритет.”"),
  },
  {
    logo: AdBank,
    logoAlt: "ADB",
    image: KanokpanImage,
    name: t("Канокпан Лао-Арая"),
    position: t("Председатель Совета управляющих Азиатского банка развития"),
    quote: t("“Правительство демонстрирует сильную приверженность реформам и стремится вовлекать все заинтересованные стороны страны, включая частный сектор, в процесс развития.”"),
  },
  {
    logo: IfcBank,
    logoAlt: "IFC",
    image: NeilImage,
    name: t("Нил Маккейн"),
    position: t(
      "Директор офиса Международной финансовой корпорации по Узбекистану и Туркменистану"
    ),
    quote: t("“Ключевые конкурентные преимущества Узбекистана — крупнейшее население в Центральной Азии и наиболее диверсифицированная экономика.”"),
  },
  {
    logo: FICLogo,
    logoAlt: "FIC",
    logoClass: "investor-profile-logo-image--sm",
    image: AzizImage,
    name: t("Азиз Гафуров"),
    position: t("Глава ассоциации СИИ"),
    quote: t("“Мы придаем большое значение улучшению делового климата в стране, которое Президент Мирзиёев определил как стратегический национальный приоритет.”"),
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
  display: grid;
  grid-template-rows: minmax(120px, auto) auto auto;
  row-gap: 10px;
  align-items: start;
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
  border-bottom: 1px solid rgba(25, 28, 31, 0.1);
}

@media (min-width: 640px) {
  .investor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

  .investor-profile-copy {
    grid-template-rows: minmax(170px, auto) auto auto;
  }

  .investor-profile-name {
    font-size: 24px;
  }

  .investor-profile-role {
    font-size: 14px;
  }
}
</style>
