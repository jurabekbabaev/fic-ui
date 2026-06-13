<template>
  <div class="relative">
    <div
      id="newmainBanner"
      class="flex items-center"
      :style="bgStyle"

    >
      <div class="mainContainer">
        <div
          class="mainBannerTxt lg:flex block lg:items-center lg:justify-between leading-normal"
        >
          <div class="newMBCol1">
            <h1
              class="font-black lg:text-[63px] text-[32px] uppercase mb-3 relative lg:-top-[98px] -top-[105px]"
            >
              {{ t("Мы создадим все условия") }}
            </h1>
            <h2 class="lg:text-2xl text-sm mb-4 text-[#EAEAEA] relative lg:top-[40px] -top-[100px] lg:w-[66%]">
              {{
                t(
                  "чтобы в Новом Узбекистане инвесторы чувствовали себя свободными"
                )
              }}
            </h2>
          </div>
          <!-- <div class="bannerDeco"></div> -->
          <div class=" lg:top-[135px] lg:left-[25px] -top-[95px] relative">
            <h2 class="lg:text-2xl text-base font-bold mb-1">
              {{ t("Шавкат Миромонович Мирзиёев") }}
            </h2>
            <h3 class="lg:text-base text-sm font-normal">
              {{ t("Президент Республики Узбекистан") }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="fInvestorsSectionWrap">
      <div class="section" id="fInvestorsSection">
        <div>
          <div class="text-center mb-[50px] fade-in-down d-hide">
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

          <div class="fInvestors" id="fInvestors">
            <ul>
              <li>
                <div class="fInvestorItem">
                  <div>
                    <div class="fInvestorItemLogo">
                      <img src="/images/fInvestor1.png" alt="" />
                    </div>
                    <div class="fInvestorItemTxt">
                      {{
                        t(
                          "“Uzbekistan is demonstrating steady growth in investment activity thanks to ongoing reforms, greater transparency, and the creation of favorable conditions for foreign investors.”"
                        )
                      }}
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2 items-center">
                      <img
                        src="@/assets/images/experts/foreign1.png"
                        class="w-[48px] h-[48px] shrink-0 object-cover rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <div class="text-sm font-semibold">
                          {{ t("Лазиз Кудратов") }}
                        </div>
                        <p class="text-xs font-normal text-[#505A63] leading-[120%] mt-0.5">Глава представительства MIIT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="fInvestorItem">
                  <div>
                    <div class="fInvestorItemLogo">
                      <img src="/images/fInvestor2.png" alt="" />
                    </div>
                    <div class="fInvestorItemTxt">
                      {{
                        t(
                          "“The government has strong commitment to reforms and promote every stakeholder in the country to to be involved in development including private sector."
                        )
                      }}
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2 items-center">
                      <img
                        src="@/assets/images/experts/foreign2.png"
                        class="w-[48px] h-[48px] shrink-0 object-cover rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <div class="text-sm font-semibold">{{ t("Анди Аранитаси") }}</div>
                        <p class="text-xs font-normal text-[#505A63] leading-[120%] mt-0.5">Директор, Глава представительства EBRD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li id="centerItem" class="fInvestorsCenterLi">
                <div
                  class="fInvestorItemImg"
                  style="
                    background-image: url('/images/60f66bb43e415a780b96ef1fc99600ee027b94c4.png');
                    background-color: #8389A4;
                  "
                ></div>
              </li>
              <li>
                <div class="fInvestorItem">
                  <div>
                    <div class="fInvestorItemLogo">
                      <img src="/images/fInvestor3.png" alt="" />
                    </div>
                    <div class="fInvestorItemTxt">
                      “We attach high importance to improving the country’s business environment, which President Mirziyoyev made a strategic national priority.
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2 items-center">
                      <img
                        src="@/assets/images/experts/foreign3.png"
                        class="w-[48px] h-[48px] shrink-0 object-cover rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <div class="text-sm font-semibold">{{ t("Канокпан Лао-Арая") }}</div>
                        <p class="text-xs font-normal text-[#505A63] leading-[120%] mt-0.5">Президент Совета управляющих ADB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="fInvestorItem">
                  <div>
                    <div class="fInvestorItemLogo">
                      <img src="/images/fInvestor4.png" alt="" />
                    </div>
                    <div class="fInvestorItemTxt">
                      “Together with investors, Uzbekistan is shaping a future of
                      opportunity and prosperity. Reforms, innovation, and
                      partnerships are driving the nation’s new era of growth.”
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2 items-center">
                      <img
                        src="@/assets/images/experts/foreign4.png"
                        class="!w-[48px] !h-[48px] shrink-0 object-cover rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <div class="text-sm font-semibold">{{ t("Макхтар Диоп") }}</div>
                        <p class="text-xs font-normal text-[#505A63] leading-[120%] mt-0.5">Управляющий директор и исполнительный вице-президент IFC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="text-center mt-[50px] d-hide">
            <WLocaleLink to="/foreigninvestors" class="btn btn-secondary">{{ t("Узнать больше") }}</WLocaleLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WLocaleLink from "../shared/WLocaleLink.vue";
const desktopImg = "/images/60f66bb43e415a780b96ef1fc99600ee027b94c4.png";
const mobileImg = "/images/banner-img-mobile.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const isMobile = ref(false);
function handleResize() {
  isMobile.value =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;
}

const bgStyle = computed(() => ({
  backgroundImage: `url('${isMobile.value ? mobileImg : desktopImg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: '#8389A4'
  // height: '100vh'
}));


onMounted(() => {
  setTimeout(() => {
    correctScroll();
  }, 300);
  window.addEventListener("resize", correctScroll);
  window.addEventListener("scroll", handleScroll, { passive: true });

  handleResize();
  window.addEventListener("resize", handleResize);
});
const correctScroll = () => {
  const container = document.getElementById("fInvestors");
  container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
};
const handleScroll = () => {
  const scrollY = window.scrollY;
  const fInvestorsSection = document.getElementById("fInvestorsSection");
  if (scrollY > 5) {
    fInvestorsSection.classList.add("action-show");
  } else {
    fInvestorsSection.classList.remove("action-show");
  }
};
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", correctScroll);
});
</script>

<style></style>
