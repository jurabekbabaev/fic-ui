<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import Management1 from "@/assets/images/management/image11.png";
import Management2 from "@/assets/images/management/image12.png";
import User1 from "@/assets/images/management/mng1.png";
import User2 from "@/assets/images/management/mng2.png";
import User3 from "@/assets/images/management/mng3.png";
import User4 from "@/assets/images/management/mng4.png";
import User5 from "@/assets/images/management/mng5.png";
import User6 from "@/assets/images/management/mng6.png";
import User7 from "@/assets/images/management/mng7.png";
import WLocaleLink from "~/components/shared/WLocaleLink.vue";
import {
  companyLogoFiles,
  getCompanyLogoSrc,
  getCompanyName,
  getCompanyTargetId,
} from "@/constants/becomeMemberCompanies";
import { useCouncilMembersStore } from "@/stores/councilMembers";
import { getLocalizedField } from "~/composables/helpers";

const data = ref([
  {
    id: 1,
    image: Management2,
    fullname: t("Шавкат Миромонович Мирзиёев"),
    position: t("Председатель совета"),
  },
  {
    id: 2,
    image: Management1,
    fullname: t("Одиль Рено-Бассо"),
    position: t("Сопредседатель совета"),
  },
]);

const comitetdata = ref([
  {
    id: 1,
    image: User1,
    fullname: t("Лазиз Кудратов"),
    position: t("Глава представительства МИИТ"),
  },
  {
    id: 2,
    image: User5,
    fullname: t("Анди Аранитаси"),
    position: t("Глава ЕБРР в Узбекистане"),
  },
  {
    id: 3,
    image: User2,
    fullname: t("Азиз Гафуров"),
    position: t("Глава ассоциации СИИ"),
  },
  {
    id: 4,
    image: User7,
    fullname: t("Канокпан Лао-Арая"),
    position: t("Президент Совета управляющих ADB"),
  },
  {
    id: 5,
    image: User4,
    fullname: t("Нил Маккейн"),
    position: t("Директор офиса по Узбекистану и Туркменистану IFC"),
  },
]);

const secretariatdata = ref([
  {
    id: 1,
    image: User3,
    fullname: t("Авазбек Муллажонов"),
    position: t("Экономический эксперт"),
  },
  {
    id: 2,
    image: User6,
    fullname: t("Мадинахон Абидова"),
    position: t("Руководитель Административный ассистент"),
  },
  {
    id: 3,
    image: User2,
    fullname: t("Азиз Гафуров"),
    position: t("Глава ассоциации СИИ"),
  },
]);

const councilStore = useCouncilMembersStore();
const councilMembers = computed(() => councilStore.list || []);

const logos = companyLogoFiles.map((fileName) => ({
  src: getCompanyLogoSrc(fileName),
  alt: getCompanyName(fileName).replace(/-/g, " "),
  targetId: getCompanyTargetId(fileName),
}));

const profilesRef = ref(null);
const localePath = useLocalePath();

onMounted(() => {
  councilStore.getList();

  if (!("IntersectionObserver" in window)) {
    if (profilesRef.value) profilesRef.value.classList.add("is-visible");
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting && profilesRef.value?.classList) {
        profilesRef.value.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  if (profilesRef.value) observer.observe(profilesRef.value);
});
</script>

<template>
  <div>
    <client-only>
      <div class="container">
        <!-- Task 1: outer wrapper background removed -->
        <div class="mt-[80px] mb-[50px]">
          <!-- Руководство СИИ -->
          <div>
            <h1
              class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[80px] mb-14"
            >
              {{ t("руководство сии") }}
            </h1>
            <div
              class="bg-[#0000000D] border-1 mb-[80px] border-[#0000001A] rounded-[32px] lg:w-[1014px] w-full m-auto relative flex justify-center mt-[241px]"
            >
              <!-- Task 2: profile cards with entrance animation + hover -->
              <div
                ref="profilesRef"
                class="grid grid-cols-2 lg:w-[734px] w-full m-auto gap-5 absolute top-[-217px] p-3 mng-profiles-reveal"
              >
                <div
                  class="border-1 border-[#0000001A] p-4 rounded-2xl bg-white mng-profile-card"
                  v-for="(item, i) in data"
                  :key="i"
                >
                  <img
                    :src="item.image"
                    alt=""
                    class="bg-[#8389A4] rounded-2xl w-full object-cover lg:h-[324px] h-[140px] object-top"
                  />
                  <span
                    class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#000000] mt-3"
                    >{{ item.fullname }}</span
                  >
                  <div
                    class="flex justify-center items-center p-2 rounded-sm bg-[#0000001A] h-[34px] mt-3"
                    style="width: fit-content"
                  >
                    <span class="text-[#000000] lg:text-sm text-xs font-normal">{{
                      item.position
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Task 3: Совет — stacked vertical layout -->
              <div class="lg:mt-[220px] mt-[100px] w-full">
                <h1
                  class="lg:text-[44px] text-[24px] uppercase font-black text-center mt-[80px] mb-12"
                >
                  {{ t("совет") }}
                </h1>

                <!-- 3.1 ЗАРУБЕЖНАЯ СТОРОНА + logo scroll -->
                <div class="mb-[60px]">
                  <div
                    class="px-4 flex flex-wrap gap-3 items-end justify-between mb-5"
                  >
                    <div>
                      <div
                        class="lg:text-[28px] text-lg font-extrabold uppercase text-[#191C1F] text-center"
                      >
                        {{ t("иНОСТРАННАЯ СТОРОНА") }}
                      </div>
                      <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                        <span class="mng-stat">{{ t("3 oснователи") }}</span>
                        <span class="mng-stat">{{
                          t("31 действительные члены")
                        }}</span>
                        <span class="mng-stat">{{ t("60 наблюдателей") }}</span>
                      </div>
                    </div>
                    <WLocaleLink
                      to="/becomemember"
                      class="flex gap-2 text-sm font-normal items-center text-[#191C1F] pt-15"
                    >
                      <span>{{ t("Подробнее") }}</span>
                      <i class="icon-move-right"></i>
                    </WLocaleLink>
                  </div>

                  <div class="mng-marquee">
                    <div class="mng-logos-track">
                      <!-- copy 1 -->
                      <ul class="mng-logo-list" aria-hidden="true">
                        <li
                          v-for="logo in logos"
                          :key="`la-${logo.src}`"
                          class="mng-item"
                        >
                          <WLocaleLink
                            :to="`/becomemember?target=${logo.targetId}`"
                            class="mng-logo-card"
                          >
                            <img
                              :src="logo.src"
                              :alt="logo.alt"
                              draggable="false"
                              class="mng-logo-img"
                            />
                          </WLocaleLink>
                        </li>
                      </ul>
                      <!-- copy 2 (seamless loop) -->
                      <ul class="mng-logo-list" aria-hidden="true">
                        <li
                          v-for="logo in logos"
                          :key="`lb-${logo.src}`"
                          class="mng-item"
                        >
                          <WLocaleLink
                            :to="`/becomemember?target=${logo.targetId}`"
                            class="mng-logo-card"
                            tabindex="-1"
                          >
                            <img
                              :src="logo.src"
                              :alt="logo.alt"
                              draggable="false"
                              class="mng-logo-img"
                            />
                          </WLocaleLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- 3.2 Узбекская сторона + person cards scroll -->
                <div class="mb-[80px]">
                  <div
                    class="px-4 flex flex-wrap gap-3 items-end mb-5"
                  >
                    <div>
                      <div
                        class="lg:text-[28px] font-extrabold uppercase text-[#191C1F] aa11"
                      >
                        {{ t("Узбекская сторона") }}
                      </div>
                      <span class="mng-stat mt-2 block">{{
                        t("16 участников")
                      }}</span>
                    </div>
                    <WLocaleLink
                      to="/uzbekside"
                      class="flex gap-1 text-sm font-normal items-center text-[#191C1F]"
                    >
                      <span>{{ t("Подробнее") }}</span>
                      <i class="icon-move-right"></i>
                    </WLocaleLink>
                  </div>

                  <div v-if="councilMembers.length" class="mng-marquee">
                    <div class="mng-persons-track">
                      <!-- copy 1 -->
                      <ul class="mng-person-list" aria-hidden="true">
                        <li
                          v-for="(member, idx) in councilMembers"
                          :key="`pa-${idx}`"
                          class="mng-item"
                        >
                          <WLocaleLink to="/uzbekside" class="mng-person-card">
                            <div
                              class="mng-person-avatar"
                              :style="`background-image: url('${member.photo_path}')`"
                            ></div>
                            <div class="mng-person-copy">
                              <div class="mng-person-name">
                                {{ getLocalizedField(member, "full_name") }}
                              </div>
                              <div class="mng-person-role">
                                {{ getLocalizedField(member, "position") }}
                              </div>
                            </div>
                          </WLocaleLink>
                        </li>
                      </ul>
                      <!-- copy 2 (seamless loop) -->
                      <ul class="mng-person-list" aria-hidden="true">
                        <li
                          v-for="(member, idx) in councilMembers"
                          :key="`pb-${idx}`"
                          class="mng-item"
                        >
                          <WLocaleLink
                            to="/uzbekside"
                            class="mng-person-card"
                            tabindex="-1"
                          >
                            <div
                              class="mng-person-avatar"
                              :style="`background-image: url('${member.photo_path}')`"
                            ></div>
                            <div class="mng-person-copy">
                              <div class="mng-person-name">
                                {{ getLocalizedField(member, "full_name") }}
                              </div>
                              <div class="mng-person-role">
                                {{ getLocalizedField(member, "position") }}
                              </div>
                            </div>
                          </WLocaleLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Исполнительный комитет — unchanged -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[1300px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("Исполнительный комитет") }}
            </h1>
            <div class="flex flex-wrap justify-center gap-5">
              <div
                class="bg-white rounded-xl border-1 border-[#0000001A] h-[108px] p-4 flex gap-4 items-start lg:w-[32%] w-full"
                v-for="item in comitetdata"
                :key="item.id"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[76px] h-[76px] rounded-xl object-cover"
                />
                <div>
                  <p
                    class="lg:text-lg text-base font-bold text-[#191C1F] leading-[110%]"
                  >
                    {{ item.fullname }}
                  </p>
                  <span
                    class="block lg:text-sm text-xs font-normal leading-[120%] text-[#505A63] mt-1"
                    >{{ item.position }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center mt-6">
              <WLocaleLink to="/foreigninvestors" class="btn btn-secondary">{{
                t("Подробнее")
              }}</WLocaleLink>
            </div>
          </div>

          <!-- Секретариат — unchanged -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[940px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("Ассоциация ") }}
            </h1>
            <div class="flex flex-wrap-reverse justify-center gap-5 w-full">
              <div
                class="bg-white rounded-xl border-1 border-[#0000001A] h-[108px] p-4 flex gap-4 items-start lg:w-[48%] w-full"
                v-for="item in secretariatdata"
                :key="item.id"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="w-[76px] h-[76px] rounded-xl object-cover"
                />
                <div>
                  <p
                    class="lg:text-lg text-base font-bold text-[#191C1F] leading-[110%]"
                  >
                    {{ item.fullname }}
                  </p>
                  <span
                    class="block lg:text-sm text-xs font-normal leading-[120%] text-[#505A63] mt-1"
                    >{{ item.position }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center mt-6">
              <WLocaleLink to="/secretariat" class="btn btn-secondary">{{
                t("Подробнее (секретариат)")
              }}</WLocaleLink>
            </div>
          </div>

          <!-- Рабочие группы — unchanged -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[940px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("Рабочие группы ") }}
            </h1>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div
                class="bg-white rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p
                    class="lg:text-[28px] text-lg uppercase font-extrabold text-[#191C1F] pb-4"
                  >
                    {{ t("основные") }}
                  </p>
                  <WLocaleLink
                    to="/leadersgroup/1"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("РГ по энергетическому сектору") }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/leadersgroup/2"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t("РГ по финансовому сектору и банковской деятельности")
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/leadersgroup/3"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "РГ по привлечению талантов и развитию человеческого капитала"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/leadersgroup/4"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("РГ по цифровизации и ИКТ") }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/leadersgroup/5"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("РГ по креативным индустриям") }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/leadersgroup/6"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("РГ по инвестиционному климату") }}</WLocaleLink
                  >
                </div>
                <WLocaleLink
                  to="/advice"
                  class="flex items-center gap-1 text-sm font-normal text-[#191C1F] mt-4"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i class="icon-move-right"></i>
                </WLocaleLink>
              </div>
              <div
                class="bg-white rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p
                    class="lg:text-[28px] text-lg uppercase font-extrabold text-[#191C1F] pb-4"
                  >
                    {{ t("межведомственные (2025)") }}
                  </p>
                  <WLocaleLink
                    to="/advice/show/8"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по разработке законопроекта Об альтернативных инвестиционных фондах"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/7"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по совершенствованию залогового законодательства"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/6"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по внедрению принципов ответственного ведения бизнеса"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/5"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по подготовке профессиональных кадров для иностранных компаний"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/4"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по улучшению корпоративного управления в местных компаниях"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/3"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по совершенствованию налогового администрирования"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/2"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "МРГ по совершенствованию процедур выделения земельных участков"
                      )
                    }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/1"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("МРГ по вопросам энергетики") }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/9"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("МРГ по циркулярной экономике") }}</WLocaleLink
                  >
                  <WLocaleLink
                    to="/advice/show/10"
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t("МРГ по развитию искусственного интеллекта")
                    }}</WLocaleLink
                  >
                </div>
                <WLocaleLink
                  to="/advice/1"
                  class="flex items-center gap-1 text-sm font-normal text-[#191C1F] mt-4"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i class="icon-move-right"></i>
                </WLocaleLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
/* Task 2 — profile card entrance animation */
.mng-profiles-reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 500ms ease, transform 500ms ease;
}

.mng-profiles-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Task 2 — profile card hover */
.mng-profile-card {
  transition: transform 200ms ease, box-shadow 220ms ease;
}

.mng-profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.09);
}

/* Task 3 — stats caption */
.mng-stat {
  font-size: 15px;
  font-weight: 500;
  color: #8e8e93;
  letter-spacing: -0.02em;
}

/* Task 3 — marquee shared */
@keyframes mng-scroll-logos {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes mng-scroll-persons {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.mng-marquee {
  overflow: hidden;
}

.mng-logos-track {
  display: flex;
  width: max-content;
  animation: mng-scroll-logos 36s linear infinite;
}

.mng-logos-track:hover {
  animation-play-state: paused;
}

.mng-persons-track {
  display: flex;
  width: max-content;
  animation: mng-scroll-persons 28s linear infinite;
}

.mng-persons-track:hover {
  animation-play-state: paused;
}

.mng-item {
  list-style: none;
}

/* Task 3.1 — logo list */
.mng-logo-list {
  display: flex;
  flex-shrink: 0;
  gap: 14px;
  min-width: max-content;
  margin: 0;
  padding: 0 14px 0 0;
}

.mng-logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 13vw, 190px);
  height: 90px;
  padding: clamp(10px, 1.2vw, 16px);
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 14px;
  background: #fff;
  text-decoration: none;
}

.mng-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

/* Task 3.2 — person card list */
.mng-person-list {
  display: flex;
  flex-shrink: 0;
  gap: 14px;
  min-width: max-content;
  margin: 0;
  padding: 0 14px 0 0;
}

.mng-person-card {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 260px;
  height: 116px;
  padding: 16px 18px;
  box-sizing: border-box;
  border: 1px solid rgba(25, 28, 31, 0.1);
  border-radius: 18px;
  background: #fff;
  color: #191c1f;
  text-decoration: none;
  transition: border-color 220ms ease, box-shadow 180ms ease;
}

.mng-person-card:hover,
.mng-person-card:focus-visible {
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 6px 18px rgba(25, 28, 31, 0.04);
}

.mng-person-avatar {
  flex: 0 0 54px;
  width: 54px;
  height: 54px;
  border-radius: 999px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mng-person-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  text-align: left;
}

.mng-person-name {
  font-size: 17px;
  line-height: 1.1;
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.mng-person-role {
  margin-top: 4px;
  color: #505a63;
  font-size: 13px;
  line-height: 1.25;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .mng-logo-list {
    gap: 10px;
    padding-right: 10px;
  }

  .mng-logo-card {
    width: clamp(100px, 34vw, 150px);
    height: 72px;
    border-radius: 12px;
  }

  .mng-person-list {
    gap: 10px;
    padding-right: 10px;
  }

  .mng-person-card {
    width: min(82vw, 260px);
    height: 96px;
    padding: 14px 16px;
    gap: 12px;
  }

  .mng-person-avatar {
    flex-basis: 46px;
    width: 46px;
    height: 46px;
  }

  .aa11 {
    text-align: center;
    align-items: center;
  }

  .mng-person-name {
    font-size: 15px;
  }

  .mng-person-role {
    font-size: 12px;
  }
}
</style>
