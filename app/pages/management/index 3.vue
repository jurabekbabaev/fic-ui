<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const Management1 = img("management/image11.png");
const Management2 = img("management/image12.png");
const User1 = img("management/mng1.png");
const User2 = img("management/mng2.png");
const User3 = img("management/mng3.png");
const User4 = img("management/mng4.png");
const User5 = img("management/mng5.png");
const User6 = img("management/mng6.png");
const User7 = img("management/mng7.png");

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
    position: t("Директор, глава представительства ЕБРР"),
  },
  {
    id: 3,
    image: User2,
    fullname: t("Азиз Гафуров"),
    position: t("Руководитель ассоциации FIC"),
  },
  {
    id: 4,
    image: User7,
    fullname: t("Масато Канда"),
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
    position: t("Программный координатор"),
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
    position: t("Руководитель ассоциации FIC"),
  },
]);
</script>
<template>
  <div>
    <client-only>
      <div class="container">
        <div
          class="bg-[#00000008] rounded-[32px] border-1 border-[#0000001A] mt-[80px] mb-[50px]"
        >
          <!-- руководство сии -->
          <div>
            <h1
              class="lg:text-[64px] text-[32px] uppercase font-black text-center mt-[80px] mb-14"
            >
              {{ t("руководство сии") }}
            </h1>
            <div
              class="bg-[#0000000D] border-1 mb-[80px] border-[#0000001A] rounded-[32px] lg:w-[1014px] w-full m-auto relative flex justify-center mt-[241px]"
            >
              <div
                class="grid grid-cols-2 lg:w-[734px] w-full m-auto gap-5 absolute top-[-217px] p-3"
              >
                <div
                  class="border-1 border-[#0000001A] p-4 rounded-2xl bg-white"
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
                    <span
                      class="text-[#000000] lg:text-sm text-xs font-normal"
                      >{{ item.position }}</span
                    >
                  </div>
                </div>
              </div>

              <!--  -->
              <div class="lg:mt-[220px] mt-[100px] w-full px-3">
                <h1
                  class="lg:text-[44px] text-[24px] uppercase font-black text-center mt-[80px] mb-14"
                >
                  {{ t("совет") }}
                </h1>
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:w-[734px] w-full m-auto gap-5 mt-6 !mb-[60px]"
                >
                  <div
                    class="bg-white rounded-xl p-4 lg:h-[232px] h-auto flex flex-col justify-between"
                  >
                    <div>
                      <div
                        class="lg:text-[28px] text-lg font-extrabold uppercase text-[#191C1F]"
                      >
                        {{ t("иНОСТРАННАЯ СТОРОНА") }}
                      </div>
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93] mt-4"
                        >{{ t("3 oснователи") }}</span
                      >
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93]"
                        >{{ t("31 действительные члены") }}</span
                      >
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93]"
                        >{{ t("60 наблюдателей") }}</span
                      >
                    </div>
                    <div>
                      <router-link
                        to="/becomemember"
                        class="flex gap-1 text-sm font-normal items-center lg:justify-items-start justify-end sm:text-right"
                      >
                        <span>{{ t("Подробнее") }}</span>
                        <i class="icon-move-right"></i>
                      </router-link>
                    </div>
                  </div>
                  <div
                    class="bg-white rounded-xl p-4 lg:h-[232px] h-auto flex flex-col justify-between"
                  >
                    <div>
                      <div
                        class="lg:text-[28px] text-lg font-extrabold uppercase text-[#191C1F]"
                      >
                        {{ t("Узбекская сторона") }}
                      </div>
                      <span
                        class="block lg:text-lg text-base font-medium tracking-[-2%] text-[#8E8E93] mt-4"
                        >{{ t("16 участников") }}</span
                      >
                    </div>
                    <div>
                      <router-link
                        to="/uzbekside"
                        class="flex gap-1 text-sm font-normal items-center lg:justify-items-start justify-end sm:text-right"
                      >
                        <span>{{ t("Подробнее") }}</span>
                        <i class="icon-move-right"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Исполнительный комитет -->
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
              <router-link to="/foreigninvestors" class="btn btn-secondary"
                >{{ t("Подробнее") }}</router-link
              >
            </div>
          </div>

          <!-- Секретариат  -->
          <div
            class="bg-[#0000000D] border-1 border-[#0000001A] rounded-[32px] lg:w-[940px] w-full m-auto my-[80px] lg:px-[60px] py-[60px] px-3"
          >
            <h1
              class="lg:text-[44px] text-[24px] uppercase font-black text-center mb-14"
            >
              {{ t("Ассоциация") }}
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
              <router-link to="/secretariat" class="btn btn-secondary"
                >{{ t("Подробнее (секретариат)") }}</router-link
              >
            </div>
          </div>

          <!-- Рабочие группы -->
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
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Энергетический сектор") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Финансовый сектор и банковское дело") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t(
                        "Привлечение талантов и развитие человеческого капитала"
                      )
                    }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Цифровизация и ИКТ") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Креативные индустрии") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Инвестиционный климат") }}</span
                  >
                </div>
                <router-link
                  to="/advice"
                  class="flex items-center gap-1 text-sm font-normal text-[#191C1F] mt-4"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i class="icon-move-right"></i>
                </router-link>
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
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Энергетика") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Улучшение процедур выделения земель") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Налоговое администрирование") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{
                      t("Корпоративное управление в локальных компаниях")
                    }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Подготовка кадров для иностранных компаний") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Ответственное ведение бизнеса") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Залоговое законодательство") }}</span
                  >
                  <span
                    class="lg:text-lg text-sm text-[#8E8E93] tracking-[-2%] font-medium mb-3 block"
                    >{{ t("Альтернативные инвестиционные фонды") }}</span
                  >
                </div>
                <router-link
                  to="/advice/1"
                  class="flex items-center gap-1 text-sm font-normal text-[#191C1F] mt-4"
                >
                  <span>{{ t("Подробнее") }}</span>
                  <i class="icon-move-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="flex flex-col items-center">
            <img :src="Management1" alt="">
            <img :src="Management2" class="mt-9">
            <img :src="Management3" alt="" class="mt-9">
        </div> -->
      </div>
    </client-only>
  </div>
</template>

<style></style>
