<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

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
</script>

<template>
  <div>
    <client-only>
      <div id="membership-form" class="container">
        <div class="mt-12 lg:mt-20 mb-14 sm:text-left lg:text-center">
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
      </div>
    </client-only>
  </div>
</template>

<style></style>
