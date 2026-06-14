<template>
  <div>
    <client-only>
      <!-- <ForeignInvestors /> -->

      <PageHero :title="t('management.hero.title')" />
      <div class="container">
        <div>
          <div class="text-center mb-[28px] fade-in-down fade-in-down--soft">
            <h6 class="lg:text-[64px] text-[32px] font-bold mb-4 text-gray-900 uppercase">
              {{ t("management.heading") }}
            </h6>
          </div>

          <div class="leaders-grid">
            <article
              v-for="(item, i) in leaders"
              :key="i"
              class="investor-profile-card investor-profile-card--leader"
            >
              <div class="investor-profile-logo investor-profile-logo--leader">
                <img
                  :src="item.logo"
                  :alt="item.logoAlt"
                  :class="['investor-profile-logo-image', item.logoClass]"
                />
              </div>

              <div class="investor-profile-image-wrap investor-profile-image-wrap--leader">
                <img
                  :src="item.image"
                  :alt="item.fullname"
                  class="investor-profile-image investor-profile-image--leader"
                />
              </div>

              <div class="investor-profile-copy investor-profile-copy--leader">
                <h3 class="investor-profile-name investor-profile-name--leader">
                  {{ item.fullname }}
                </h3>
                <p class="investor-profile-role investor-profile-role--leader">
                  <span
                    v-for="(line, lineIdx) in item.position.split('—')"
                    :key="lineIdx"
                    class="investor-profile-role-line"
                  >{{ line.trim() }}</span>
                </p>
              </div>
            </article>
          </div>

          <!-- <div class="text-center mb-[50px] fade-in-down">
            <h2 class="title-64 mb-3 lg:text-[64px] text-[32px]">
              {{ t('Совет Иностранных Инвесторов') }}
            </h2>
            <div class="w-full flex justify-center">
              <div class="lg:text-[20px] text-base lg:w-2/4">
                {{ t('barqaror rivojlanish va iqtisodiy islohotlarni qo‘llab-quvvatlash maqsadidagi tashkilotlarni birlashtiradi.') }}
              </div>
            </div>
          </div> -->

          <Investors />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Investors from "./investors.vue";
import PageHero from "~/components/shared/PageHero.vue";
import Management1 from "@/assets/images/management/image11.png";
import Management2 from "@/assets/images/management/image12.png";
import EBank from "@/assets/images/brands/e-bank.png";
import FICLogo from "../../../public/images/pr.png";

const { t } = useI18n();

const leaders = ref([
  {
    id: 1,
    logo: FICLogo,
    logoAlt: "FIC",
    logoClass: "investor-profile-logo-image--sm",
    image: Management2,
    fullname: t("management.leaders.0.fullname"),
    position: t("management.leaders.0.position"),
  },
  {
    id: 2,
    logo: EBank,
    logoAlt: "EBRD",
    logoClass: "investor-profile-logo-image--ebrd",
    image: Management1,
    fullname: t("management.leaders.1.fullname"),
    position: t("management.leaders.1.position"),
  },
]);
</script>

<style scoped>
.leaders-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  max-width: 860px;
  margin: 32px auto 24px;
  padding: 0 12px;
}

.fade-in-down--soft {
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
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

.investor-profile-card--leader {
  min-height: 420px;
}

.investor-profile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-bottom: 18px;
}

.investor-profile-logo--leader {
  height: 64px;
}

.investor-profile-logo-image {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.investor-profile-logo-image--sm {
  max-width: 78%;
  max-height: 100%;
}

.investor-profile-logo-image--ebrd {
  transform: scale(1.25);
  transform-origin: center;
}

.investor-profile-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.investor-profile-image-wrap--leader {
  height: 292px;
  margin-bottom: 12px;
  border-radius: 20px;
  background: #8389a4;
}

.investor-profile-image {
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
}

.investor-profile-image--leader {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
  transform: scale(1.15);
  transform-origin: center;
}

.investor-profile-copy {
  width: 100%;
  margin-top: auto;
}

.investor-profile-copy--leader {
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 8px;
  align-items: start;
}

.investor-profile-name {
  color: #191c1f;
  font-size: 26px;
  line-height: 1.1;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.investor-profile-name--leader {
  font-size: 20px;
  min-height: 0;
}

.investor-profile-role {
  color: #505a63;
  font-size: 15px;
  line-height: 1.35;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.investor-profile-role--leader {
  font-size: 14px;
  min-height: 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.investor-profile-role-line {
  display: block;
}

@media (min-width: 640px) {
  .leaders-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .leaders-grid {
    gap: 24px;
    max-width: 900px;
  }

  .investor-profile-card--leader {
    min-height: 452px;
    padding: 26px 22px 30px;
  }

  .investor-profile-logo--leader {
    height: 70px;
  }

  .investor-profile-image-wrap--leader {
    height: 318px;
  }
}
</style>
