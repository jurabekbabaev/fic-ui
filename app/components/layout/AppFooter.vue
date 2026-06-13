<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
</script>

<template>
  <footer class="bg-[#191C1F] lg:h-[350px] sm:h-full pt-12 pb-4 mt-24">
    <div class="container">
      <div class="lg:flex sm:block justify-between">
        <div>
          <img src="/images/logo-white.svg" alt="" class="w-[200px]">
          <div class="mb-4 flex gap-2 mt-4">
              <a href="https://t.me/fic_uz" target="_blank" class="size-12 flex justify-center items-center rounded-[50%] bg-white cursor-pointer hover:bg-gray-200">
                <i class="icon-telegram text-[#191C1F]"></i>
              </a>
              <a href="https://www.facebook.com/fics.uz" target="_blank" class="size-12 flex justify-center items-center rounded-[50%] bg-white cursor-pointer hover:bg-gray-200">
                <i class="icon-facebook text-[#191C1F]"></i>
              </a>
              <a href="https://www.linkedin.com/company/ficsuz" target="_blank" class="size-12 flex justify-center items-center rounded-[50%] bg-white cursor-pointer hover:bg-gray-200">
                <i class="icon-linkedin text-[#191C1F]"></i>
              </a>
            </div>
            <p class="text-xs font-normal text-[#FFFFFF80] mt-[100px] w-2/3">{{ t('© 2024 – Совет иностранных инвесторов при Президенте Республики Узбекистан') }}</p>
        </div>
        <div>
          <h4 class="text-white text-sm font-normal mb-5">{{ t('О СИИ') }}</h4>
          <div class="block">
            <!-- <WLocaleLink to="/" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Мисси') }}</WLocaleLink> -->
            <WLocaleLink to="/secretariat" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Ассоциация') }}</WLocaleLink>
            <!-- <router-link to="" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Исполнительный комитет') }}</router-link> -->
            <WLocaleLink to="/maininfo" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('История СИИ') }}</WLocaleLink>
            <WLocaleLink to="/blog" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Статьи') }}</WLocaleLink>
            <WLocaleLink to="/reports" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Отчеты') }}</WLocaleLink>
            <WLocaleLink to="/contacts" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Контакты') }}</WLocaleLink>
          </div>
        </div>
        <div>
          <h4 class="text-white text-sm font-normal mb-5">{{ t('Членство') }}</h4>
          <div class="block">
            <WLocaleLink to="/becomemember" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('О членах') }}</WLocaleLink>
            <WLocaleLink to="/becomemember?target=membership-form" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Стать членом СИИ') }}</WLocaleLink>
            <WLocaleLink to="/experts" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Эксперты') }}</WLocaleLink>
          </div>
          <h4 class="text-white text-sm font-normal mb-5 mt-5">{{ t('События') }}</h4>
          <div class="block">
            <WLocaleLink to="/calendarplan" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Календарный план') }}</WLocaleLink>
            <WLocaleLink to="/plenarysessions" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Пленарные сессии') }}</WLocaleLink>
            <WLocaleLink to="/interimsession" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Промежуточная сессия') }}</WLocaleLink>
            <WLocaleLink to="/weeklyevents" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Еженедельные события') }}</WLocaleLink>
            <!-- <WLocaleLink to="/weeklyevents" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Промежуточные события') }}</WLocaleLink> -->
          </div>
        </div>
        <div>
          <h4 class="text-white text-sm font-normal mb-5">{{ t('Рабочие группы') }}</h4>
          <div class="block">
            <WLocaleLink to="/advice" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Основные рабочие группы') }}</WLocaleLink>
            <WLocaleLink to="/advice/1?year=2025" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Межведомственные рабочие группы') }}</WLocaleLink>
          </div>
          <h4 class="text-white text-sm font-normal mb-5 mt-5">{{ t('Медиа') }}</h4>
          <div class="block">
            <WLocaleLink to="/news" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Новости') }}</WLocaleLink>
            <WLocaleLink to="/publications" class="text-sm font-normal text-[#FFFFFF80] mb-2 block">{{ t('Публикации') }}</WLocaleLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style>

</style>
