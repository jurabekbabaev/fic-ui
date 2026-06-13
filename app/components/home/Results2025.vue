<template>
  <div class="section">
    <div class="mainContainer">
      <div class="mb-[50px]">
        <h2 class="title-64 lg:text-[64px] text-[32px] mb-3">
          {{ t('результаты за 2025 год') }}
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-[30px]">
        <div>
          <div class="font-medium lg:text-[32px] text-xl mb-4">
            {{ t('Результаты по Инвесторам') }}
          </div>
          <div class="card-primary p-4">
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
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
                  {{ t('Инвесторов/участников совета') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-investment-dollar"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">90$</b>
                  <span class="text-xl pl-2">{{ t('млрд.') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('Текущих инвестиций') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-chart-pie"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">200$ </b>
                  <span class="text-xl pl-2">{{ t('млрд.') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('Планируемых инвестиций') }}
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
                  {{ t('Рабочих мест') }}
                </div>
              </div>
            </div>
            <WLocaleLink to="/result" class="btn btn-outline-w w-full mt-4">
              {{ t('Посмотреть статистику') }}
            </WLocaleLink>
          </div>
        </div>
        <div>
          <div class="font-medium lg:text-[32px] text-xl mb-4">
            {{ t('Результаты по Совету') }}
          </div>
          <div class="card-primary p-4">
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
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
                  {{ t('Проекта, свыше 32 700 рабочих мест') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-investment-dollar"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">30,5$</b>
                  <span class="text-xl pl-2">{{ t('млрд.') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('Подписанные соглашения') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-chart-pie"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">17</b>
                  <span class="text-xl pl-2">{{ t('предложений') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('Утверждено президентом') }}
                </div>
              </div>
              <div class="card-f7">
                <div class="text-[48px] text-grey mb-2">
                  <i class="icon-user-briefcase"></i>
                </div>
                <div class="font-black leading-normal">
                  <b class="lg:text-[44px] text-[32px]">17</b>
                  <span class="text-xl pl-2">{{ t('рабочих группы') }}</span>
                </div>
                <div class="lg:text-lg text-base text-grey font-bold">
                  {{ t('Реструктурирован и активирован') }}
                </div>
              </div>
            </div>
            <WLocaleLink to="/result" class="btn btn-outline-w w-full mt-4">
              {{ t('Посмотреть статистику') }}
            </WLocaleLink>
          </div>
        </div>
      </div>

      <div class="card-eb mt-[50px]">
        <div class="lg:text-[32px] text-xl font-bold mb-1">
          {{ t('Инициативы по улучшению инвестиционного климата') }}
        </div>
        <div class="lg:text-lg text-sm mb-4">
          {{ t('Каждая инициатива направлена на реформы в налогообложении, энергетике, инвестициях, трудоустройстве и корпоративном управлении') }}
        </div>
        <WLocaleLink to="/initiatives">
            <span class="flex items-center">
              <span class="lg:text-sm text-xs"> {{ t('Подробнее о каждом шаге') }} </span>
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
