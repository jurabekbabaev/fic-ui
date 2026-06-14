<script setup>
import { useI18n } from "vue-i18n";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import { mainMenuSections } from "~/constants/mainMenu";

const { t } = useI18n();
</script>

<template>
  <footer class="bg-[#191C1F] pt-12 pb-8 mt-24">
    <div class="container">
      <img src="/images/logo-white.svg" alt="FIC" class="w-[200px] mb-8" />

      <div class="flex flex-col lg:flex-row items-stretch gap-12">
        <!-- Left: Socials + Copyright -->
        <div
          class="lg:w-[40%] shrink-0 mb-10 lg:mb-0 flex flex-col justify-between order-2 lg:order-1"
        >
          <div>
            <ul class="mt-5 space-y-2.5">
              <li>
                <p
                  class="text-[10px] font-normal uppercase tracking-wide text-[#FFFFFF66] mb-0.5"
                >
                  {{ t("Телефон номер") }}
                </p>
                <a
                  href="tel:+998880998888"
                  class="text-[13px] font-medium text-white hover:text-[#FFFFFFCC] transition-colors"
                >
                  +998 88 099 88 88
                </a>
              </li>
              <li>
                <p
                  class="text-[10px] font-normal uppercase tracking-wide text-[#FFFFFF66] mb-0.5"
                >
                  {{ t("Электронная почта") }}
                </p>
                <a
                  href="mailto:secretariat@fics.uz"
                  class="text-[13px] font-medium text-white hover:text-[#FFFFFFCC] transition-colors"
                >
                  secretariat@fics.uz
                </a>
              </li>
              <li>
                <p
                  class="text-[10px] font-normal uppercase tracking-wide text-[#FFFFFF66] mb-0.5"
                >
                  {{ t("Адресс") }}
                </p>
                <p class="text-[13px] font-medium text-white">
                  {{ t("BoMI Finance Center, 100135, Tashkent") }}
                </p>
              </li>
            </ul>
            <div class="flex gap-2 mt-5">
              <a
                href="https://t.me/fic_uz"
                target="_blank"
                class="btn-social-icon"
              >
                <i class="icon-telegram"></i>
              </a>
              <a
                href="https://www.facebook.com/fics.uz"
                target="_blank"
                class="btn-social-icon"
              >
                <i class="icon-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/ficsuz"
                target="_blank"
                class="btn-social-icon"
              >
                <i class="icon-linkedin"></i>
              </a>
            </div>
          </div>
          <p class="text-xs font-normal text-[#FFFFFF80] mt-8 lg:mt-auto">
            {{
              t(
                "©2019-2026 – Совет иностранных инвесторов при Президенте Республики Узбекистан"
              )
            }}
          </p>
        </div>

        <!-- Right: All menu sections in a 3-column grid -->
        <div
          class="lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 order-1 lg:order-2"
        >
          <div v-for="section in mainMenuSections" :key="section.title">
            <h4
              class="text-white text-sm font-semibold mb-3 uppercase tracking-wide opacity-90"
            >
              {{ t(section.title) }}
            </h4>
            <ul class="space-y-1.5">
              <li v-for="item in section.items" :key="item.label">
                <WLocaleLink
                  :to="item.to"
                  class="text-sm font-normal text-[#FFFFFF66] hover:text-white transition-colors duration-200 block leading-snug"
                >
                  {{ t(item.label) }}
                </WLocaleLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
