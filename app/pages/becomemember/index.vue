<script setup>
import {
  becomeMemberCompanies,
  getCompanyBio,
  getCompanyDisplayName,
  getCompanyKey,
  getCompanyLogoSrc,
  getCompanyTargetId,
  parseBecomeMemberCompanyId,
  placeholderBioKey,
} from "@/constants/becomeMemberCompanies";
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount } from "vue";
import PageHero from "~/components/shared/PageHero.vue";

const { locale, t } = useI18n();
const route = useRoute();

const uploadModalOpen = ref(false);

const sortByCompanyId = (left, right) => {
  const leftId = parseBecomeMemberCompanyId(left.id);
  const rightId = parseBecomeMemberCompanyId(right.id);

  return leftId.order - rightId.order;
};

const companies = computed(() =>
  becomeMemberCompanies.map((company) => {
    const parsedId = parseBecomeMemberCompanyId(company.id);

    return {
      id: company.id,
      memberType: parsedId.type,
      order: parsedId.order,
      filename: company.filename,
      key: getCompanyKey(company.filename),
      image: getCompanyLogoSrc(company.filename),
      name: getCompanyDisplayName(company, locale.value),
      bio: getCompanyBio(company, locale.value) ?? t(placeholderBioKey),
      targetId: getCompanyTargetId(company.filename),
      website: company.website,
    };
  }),
);

const founders = computed(() =>
  [...companies.value.filter((company) => company.memberType === "E")].sort(
    sortByCompanyId,
  ),
);

const fullMembers = computed(() =>
  [...companies.value.filter((company) => company.memberType === "F")].sort(
    sortByCompanyId,
  ),
);

const observers = computed(() =>
  [...companies.value.filter((company) => company.memberType === "O")].sort(
    sortByCompanyId,
  ),
);

const memberSections = computed(() => [
  {
    title: t("Члены исполнительного комитета"),
    add: t("Члены-учредители aссоциации"),
    targetId: "founding-members",
    items: founders.value,
    count: 3,
  },
  {
    title: t("Действительные члены"),
    targetId: "full-members",
    items: fullMembers.value,
    count: 32,
  },
  {
    title: t("Члены-Наблюдатели"),
    targetId: "observers",
    items: observers.value,
    count: 8,
  },
]);

const statsContainerRef = ref(null);
const displayValues = ref([0, 0, 0]);
const hasAnimated = ref(false);
let statsObserver = null;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateCountUp(targets) {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    targets.forEach((target, index) => {
      displayValues.value[index] = Math.floor(easedProgress * target);
    });

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const admissionSteps = [
  {
    n: "01",
    title: "Заявка и документы",
    text: "Подача письменного заявления вместе с полным комплектом необходимых подтверждающих документов с указанием запрашиваемой категории членства",
  },
  {
    n: "02",
    title: "Рассмотрение",
    text: "Оценка, включая проверку документов и соответствия требованиям",
  },
  {
    n: "03",
    title: "Решение",
    text: "Рассмотрение и принятие решения Исполнительным комитетом",
  },
  {
    n: "04",
    title: "Оформление",
    text: "Подписание соглашения о членстве и оплата членских взносов",
  },
];

const membershipTiers = [
  {
    key: "exec",
    title: "Исполнительный комитет / Учредители (МФО)",
    featured: false,
    points: [
      "Стратегическая роль в управлении",
      "Решающий голос по изменениям Устава, реорганизации и ликвидации",
    ],
    fee: null,
    cap: null,
  },
  {
    key: "full",
    title: "Действительные члены",
    featured: false,
    points: [
      "Ключевые и активные инвесторы",
      "Решающее право голоса",
      "Участие в пленарных сессиях с Президентом Узбекистана",
      "Участие в официальном протоколе и закрытых рабочих форматах",
    ],
    fee: "305 млн сум",
    cap: "до 40 членов",
  },
  {
    key: "observer",
    title: "Наблюдатели",
    featured: false,
    points: [
      "Консультативная (без права решающего голоса) роль",
      "Участие в пленарных сессиях СИИ",
      "Участие в открытых сессиях, обсуждениях и экспертных форматах",
    ],
    fee: "183 млн сум",
    cap: "до 60 членов",
  },
];

const participationPrinciples = [
  "Пленарные сессии СИИ открыты для членов и наблюдателей",
  "Официальные протокольные форматы проводятся в рамках членства",
  "Принятие решений и голосование закреплены только за членами",
];

const eligibilityGeneral = [
  "Соответствие целям СИИ и положительная деловая репутация",
  "Активная или планируемая инвестиционная деятельность в Узбекистане",
];

const eligibilityFullMembers = [
  "Инвестиции или проекты на сумму ≥ 50 млн USD",
  "Для МФО: финансирование / гарантии / техническая помощь ≥ 500 млн USD",
];

const scrollToTarget = async () => {
  if (typeof window === "undefined") return;

  await nextTick();

  const target = route.query.target;
  if (!target || typeof target !== "string") return;

  const element = document.getElementById(target);
  if (!element) return;

  setTimeout(() => {
    const offset = 110;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, 100);
};

watch(statsContainerRef, (el) => {
  if (!el) return;

  statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp(memberSections.value.map((s) => s.count));
        }
      });
    },
    { threshold: 0.3 },
  );
  statsObserver.observe(el);
});

onMounted(() => {
  scrollToTarget();
});

onBeforeUnmount(() => {
  statsObserver?.disconnect();
});

watch(
  () => route.query.target,
  () => {
    scrollToTarget();
  },
);
</script>
<template>
  <div>
    <div>
      <client-only>
        <PageHero title="Члены Совета" />
        <div class="container">
          <p
            class="lg:max-w-[900px] w-full text-base lg:text-lg text-[#505A63] font-normal leading-[170%]"
          >
            {{
              t(
                "Членами Совета иностранных инвесторов являются ведущие международные компании, банки и финансовые институты, осуществляющие стратегические инвестиции в экономику Узбекистана. Членство отражает долгосрочную приверженность развитию страны и предоставляет прямой канал диалога с Правительством по вопросам инвестиционной политики. Совет объединяет 41 члена из 19 стран, представляющих 23 сектора экономики.",
              )
            }}
          </p>
          <div
            ref="statsContainerRef"
            class="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3 mt-8 mb-4"
          >
            <div
              v-for="(section, index) in memberSections"
              :key="section.targetId"
              class="card-item p-5 lg:p-7 flex flex-col justify-between min-h-[130px]"
            >
              <div
                class="text-[36px] font-bold leading-none text-[#191C1F] lg:text-[52px]"
              >
                {{ displayValues[index] }}
              </div>
              <div class="mt-3 text-sm text-grey lg:text-base">
                {{ section.title }}
              </div>
            </div>
          </div>
          <template v-for="section in memberSections" :key="section.title">
            <h1
              class="lg:text-[64px] text-[32px] uppercase font-black mt-12"
              :id="section.targetId"
            >
              {{ section.title }}
            </h1>
            <div class="grid grid-cols-1 gap-4">
              <a
                v-for="item in section.items"
                :key="item.filename"
                :id="item.targetId"
                :href="item.website"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-7 bg-white border border-[#0000001A] rounded-2xl p-4 lg:p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#00000033] hover:shadow-[0_18px_40px_rgba(25,28,31,0.08)]"
              >
                <div
                  class="shrink-0 flex items-center justify-center w-full sm:w-[200px] lg:w-[220px] h-[150px] lg:h-[176px] p-5"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="max-w-full max-h-full object-contain"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-lg lg:text-2xl font-bold uppercase leading-snug text-[#191C1F]"
                  >
                    {{ item.name }}
                  </h3>
                  <p
                    class="mt-3 text-sm lg:text-base font-normal leading-relaxed text-[#505A63]"
                  >
                    {{ item.bio }}
                  </p>
                </div>
              </a>
            </div>
          </template>
        </div>
      </client-only>
    </div>

    <client-only>
      <div id="membership-form" class="container">
        <div class="mt-[100px] mb-14 sm:text-left lg:text-center">
          <h1 class="lg:text-[64px] text-[32px] uppercase font-black">
            {{ t("Стать членом") }}
          </h1>
          <h2
            class="mt-4 text-2xl lg:text-4xl uppercase font-black text-[#191C1F]"
          >
            {{ t("Категории, влияние и порядок приёма") }}
          </h2>
          <h3
            class="mt-5 lg:max-w-[920px] lg:mx-auto text-base lg:text-xl font-semibold leading-relaxed text-[#505A63]"
          >
            {{
              t(
                "СИИ — основная институциональная платформа для структурированного диалога между иностранными инвесторами и Правительством Узбекистана.",
              )
            }}
          </h3>
        </div>

        <!-- Admission procedure -->
        <section class="mt-[50px]">
          <h3 class="lg:text-[32px] text-2xl font-black">
            {{ t("Процедура вступления") }}
          </h3>

          <ol
            class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            <li
              v-for="(step, index) in admissionSteps"
              :key="step.n"
              class="group relative flex flex-col bg-white border border-[#0000001A] rounded-2xl p-5 lg:p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[#00000033] hover:shadow-[0_18px_40px_rgba(25,28,31,0.08)]"
            >
              <div class="flex items-center justify-between">
                <span
                  class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#191C1F] text-white text-lg font-black"
                >
                  {{ step.n }}
                </span>
                <i
                  v-if="index < admissionSteps.length - 1"
                  class="icon-chevron-right text-2xl text-[#191C1F]/20 hidden lg:block"
                ></i>
              </div>
              <h4
                class="mt-5 text-lg lg:text-xl font-bold text-[#191C1F] leading-snug"
              >
                {{ t(step.title) }}
              </h4>
              <p
                class="mt-3 text-sm lg:text-base font-normal leading-relaxed text-[#505A63]"
              >
                {{ t(step.text) }}
              </p>
            </li>
          </ol>

          <p
            class="mt-6 text-sm lg:text-base text-[#505A63] italic leading-relaxed"
          >
            {{
              t(
                "Приём и форматы участия определяются в соответствии с Уставом, Положением о членстве и применимыми протокольными правилами.",
              )
            }}
          </p>
        </section>

        <!-- Membership categories & level of influence -->
        <section class="mt-[60px]">
          <h3 class="lg:text-[32px] text-2xl font-black">
            {{ t("Категории членства и уровень влияния") }}
          </h3>

          <div
            class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch"
          >
            <div
              v-for="tier in membershipTiers"
              :key="tier.key"
              :class="[
                'flex flex-col h-full rounded-2xl p-6 lg:p-7 border transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(25,28,31,0.08)]',
                tier.featured
                  ? 'bg-[#191C1F] border-[#191C1F] text-white'
                  : 'bg-white border-[#0000001A] hover:border-[#00000033]',
              ]"
            >
              <h4
                :class="[
                  'text-base lg:text-lg font-black uppercase leading-snug',
                  tier.featured ? 'text-white' : 'text-[#191C1F]',
                ]"
              >
                {{ t(tier.title) }}
              </h4>

              <ul class="mt-5 space-y-3 flex-1">
                <li
                  v-for="point in tier.points"
                  :key="point"
                  class="flex gap-3"
                >
                  <svg
                    viewBox="0 0 20 20"
                    class="shrink-0 w-5 h-5 mt-0.5"
                    :class="tier.featured ? 'text-white' : 'text-[#191C1F]'"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span
                    :class="[
                      'text-sm lg:text-base leading-relaxed',
                      tier.featured ? 'text-white/85' : 'text-[#505A63]',
                    ]"
                  >
                    {{ t(point) }}
                  </span>
                </li>
              </ul>

              <div
                v-if="tier.fee"
                :class="[
                  'mt-6 pt-5 grid grid-cols-2 gap-3 border-t',
                  tier.featured ? 'border-white/15' : 'border-[#0000001A]',
                ]"
              >
                <div>
                  <p
                    :class="[
                      'text-xs uppercase tracking-wide font-semibold',
                      tier.featured ? 'text-white/55' : 'text-[#9AA3AC]',
                    ]"
                  >
                    {{ t("Годовой взнос") }}
                  </p>
                  <p
                    :class="[
                      'mt-1 text-lg lg:text-xl font-black',
                      tier.featured ? 'text-white' : 'text-[#191C1F]',
                    ]"
                  >
                    {{ t(tier.fee) }}
                  </p>
                </div>
                <div>
                  <p
                    :class="[
                      'text-xs uppercase tracking-wide font-semibold',
                      tier.featured ? 'text-white/55' : 'text-[#9AA3AC]',
                    ]"
                  >
                    {{ t("Лимит мест") }}
                  </p>
                  <p
                    :class="[
                      'mt-1 text-lg lg:text-xl font-black',
                      tier.featured ? 'text-white' : 'text-[#191C1F]',
                    ]"
                  >
                    {{ t(tier.cap) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Participation principles + key eligibility thresholds -->
        <section
          class="mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5"
        >
          <div
            class="bg-white border border-[#0000001A] rounded-2xl p-6 lg:p-8"
          >
            <h3 class="text-xl lg:text-2xl font-black text-[#191C1F]">
              {{ t("Принципы участия") }}
            </h3>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in participationPrinciples"
                :key="item"
                class="flex gap-3"
              >
                <span
                  class="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#191C1F]"
                ></span>
                <span
                  class="text-sm lg:text-base leading-relaxed text-[#505A63]"
                >
                  {{ t(item) }}
                </span>
              </li>
            </ul>
          </div>

          <div
            class="bg-white border border-[#0000001A] rounded-2xl p-6 lg:p-8"
          >
            <h3 class="text-xl lg:text-2xl font-black text-[#191C1F]">
              {{ t("Ключевые критерии соответствия") }}
            </h3>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in eligibilityGeneral"
                :key="item"
                class="flex gap-3"
              >
                <span
                  class="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#191C1F]"
                ></span>
                <span
                  class="text-sm lg:text-base leading-relaxed text-[#505A63]"
                >
                  {{ t(item) }}
                </span>
              </li>
            </ul>

            <div class="mt-6 rounded-xl bg-[#191C1F]/5 p-5">
              <p class="text-sm lg:text-base font-bold text-[#191C1F]">
                {{ t("Для действительных членов:") }}
              </p>
              <ul class="mt-3 space-y-3">
                <li
                  v-for="item in eligibilityFullMembers"
                  :key="item"
                  class="flex gap-3"
                >
                  <span
                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#191C1F]"
                  ></span>
                  <span
                    class="text-sm lg:text-base leading-relaxed text-[#505A63]"
                  >
                    {{ t(item) }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div>
          <h3 class="lg:text-[32px] text-2xl font-black mt-[50px] lg:w-[625px]">
            {{
              t(
                "Пожалуйста, скачайте форму заявки с руководством по ее заполнению",
              )
            }}
          </h3>
          <div class="lg:flex sm:block gap-4 mt-6 w-full items-center">
            <a
              href="/documents/fic-membership-documents.zip"
              class="btn btn-primary flex! items-center mb-3"
              download
            >
              <span class="ml-1">{{ t("Форма заявки") }}</span>
            </a>
            <a
              href="#"
              class="btn btn-secondary flex! items-center mb-3"
              @click.prevent="uploadModalOpen = true"
            >
              <i class="icon-book-info text-2xl"> </i>
              <span class="ml-1">{{ t("Руководство по подача заявки") }}</span>
            </a>
          </div>
        </div>
      </div>
    </client-only>

    <ModalUploadDocuments
      v-if="uploadModalOpen"
      @close="uploadModalOpen = false"
    />
  </div>
</template>

<style></style>
