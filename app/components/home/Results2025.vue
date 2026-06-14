<template>
  <div class="section">
    <div class="mainContainer">
      <div class="mb-[50px]">
        <h2 class="title-64 lg:text-[64px] text-[32px] mb-3">
          {{ t('home.results2025.heading') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div>
          <div class="font-medium lg:text-[32px] text-xl mb-4">
            {{ t('home.results2025.investors.title') }}
          </div>
          <div class="card-primary p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-users-dollar"></i>
                </div>
                <div
                  class="lg:text-[44px] text-[32px] font-black leading-normal"
                >
                  102
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.investors.members') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-investment-dollar"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">90$</b>
                  <span class="text-xl pl-2">{{ t('common.bn') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.investors.currentInvestments') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-chart-pie"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">200$ </b>
                  <span class="text-xl pl-2">{{ t('common.bn') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.investors.plannedInvestments') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-user-briefcase"></i>
                </div>
                <div
                  class="lg:text-[44px] text-[32px] font-black leading-normal"
                >
                  80,000
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.investors.jobs') }}
                </div>
              </div>
            </div>
            <WLocaleLink to="/result" class="btn btn-outline-w w-full mt-4">
              {{ t('home.results2025.viewStats') }}
            </WLocaleLink>
          </div>
        </div>
        <div>
          <div class="font-medium lg:text-[32px] text-xl mb-4">
            {{ t('home.results2025.council.title') }}
          </div>
          <div class="card-primary p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-users-dollar"></i>
                </div>
                <div
                  class="lg:text-[44px] text-[32px] font-black leading-normal"
                >
                  242
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.council.projects') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-investment-dollar"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">30,5$</b>
                  <span class="text-xl pl-2">{{ t('common.bn') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.council.agreements') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-chart-pie"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">17</b>
                  <span class="text-xl pl-2">{{ t('home.results2025.council.proposals') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.council.proposalsApproved') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-user-briefcase"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">17</b>
                  <span class="text-xl pl-2">{{ t('home.results2025.council.workingGroups') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('home.results2025.council.workingGroupsActivated') }}
                </div>
              </div>
            </div>
            <WLocaleLink to="/result" class="btn btn-outline-w w-full mt-4">
              {{ t('home.results2025.viewStats') }}
            </WLocaleLink>
          </div>
        </div>
      </div>

      <div class="card-eb mt-[50px]">
        <div class="lg:text-[32px] text-xl font-bold mb-1">
          {{ t('home.results2025.initiatives.title') }}
        </div>
        <div class="lg:text-lg text-sm mb-4">
          {{ t('home.results2025.initiatives.subtitle') }}
        </div>
        <WLocaleLink to="/initiatives">
            <span class="flex items-center">
              <span class="lg:text-sm text-xs"> {{ t('home.results2025.initiatives.learnMore') }} </span>
            <i class="icon-move-right ms-2 mt-1"></i>
          </span>
          </WLocaleLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
</script>

<style></style>
