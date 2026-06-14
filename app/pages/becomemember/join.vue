<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const admissionSteps = [
  {
    n: "01",
    title: "becomemember.join.admission.steps.application.title",
    text: "becomemember.join.admission.steps.application.text",
  },
  {
    n: "02",
    title: "becomemember.join.admission.steps.review.title",
    text: "becomemember.join.admission.steps.review.text",
  },
  {
    n: "03",
    title: "becomemember.join.admission.steps.decision.title",
    text: "becomemember.join.admission.steps.decision.text",
  },
  {
    n: "04",
    title: "becomemember.join.admission.steps.formalization.title",
    text: "becomemember.join.admission.steps.formalization.text",
  },
];

const membershipTiers = [
  {
    key: "exec",
    title: "becomemember.join.tiers.items.exec.title",
    featured: false,
    points: [
      "becomemember.join.tiers.items.exec.points.0",
      "becomemember.join.tiers.items.exec.points.1",
    ],
    cap: null,
  },
  {
    key: "full",
    title: "becomemember.join.tiers.items.full.title",
    featured: false,
    points: [
      "becomemember.join.tiers.items.full.points.0",
      "becomemember.join.tiers.items.full.points.1",
      "becomemember.join.tiers.items.full.points.2",
      "becomemember.join.tiers.items.full.points.3",
    ],
    cap: "becomemember.join.tiers.items.full.cap",
  },
  {
    key: "observer",
    title: "becomemember.join.tiers.items.observer.title",
    featured: false,
    points: [
      "becomemember.join.tiers.items.observer.points.0",
      "becomemember.join.tiers.items.observer.points.1",
      "becomemember.join.tiers.items.observer.points.2",
    ],
    cap: "becomemember.join.tiers.items.observer.cap",
  },
];

const participationPrinciples = [
  "becomemember.join.participation.items.0",
  "becomemember.join.participation.items.1",
  "becomemember.join.participation.items.2",
];

const eligibilityGeneral = [
  "becomemember.join.eligibility.general.0",
  "becomemember.join.eligibility.general.1",
];

const eligibilityFullMembers = [
  "becomemember.join.eligibility.fullMembers.0",
  "becomemember.join.eligibility.fullMembers.1",
];
</script>

<template>
  <div>
    <client-only>
      <div id="membership-form" class="container">
        <div class="mt-12 lg:mt-20 mb-14 sm:text-left lg:text-center">
          <h1 class="lg:text-[64px] text-[32px] uppercase font-black">
            {{ t("becomemember.join.title") }}
          </h1>
          <h2
            class="mt-4 text-2xl lg:text-4xl uppercase font-black text-[#191C1F]"
          >
            {{ t("becomemember.join.subtitle") }}
          </h2>
          <h3
            class="mt-5 lg:max-w-[920px] lg:mx-auto text-base lg:text-xl font-semibold leading-relaxed text-[#505A63]"
          >
            {{ t("becomemember.join.lead") }}
          </h3>
        </div>

        <!-- Admission procedure -->
        <section class="mt-[50px]">
          <h3 class="lg:text-[32px] text-2xl font-black">
            {{ t("becomemember.join.admission.heading") }}
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
            {{ t("becomemember.join.admission.note") }}
          </p>
        </section>

        <!-- Membership categories & level of influence -->
        <section class="mt-[60px]">
          <h3 class="lg:text-[32px] text-2xl font-black">
            {{ t("becomemember.join.tiers.heading") }}
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
                v-if="tier.cap"
                :class="[
                  'mt-6 pt-5 border-t',
                  tier.featured ? 'border-white/15' : 'border-[#0000001A]',
                ]"
              >
                <span
                  :class="[
                    'inline-flex items-center gap-2 rounded-full px-4 py-2',
                    tier.featured ? 'bg-white/10' : 'bg-[#191C1F]/5',
                  ]"
                >
                  <span
                    :class="[
                      'text-xs uppercase tracking-wide font-semibold',
                      tier.featured ? 'text-white/55' : 'text-[#9AA3AC]',
                    ]"
                  >
                    {{ t("becomemember.join.tiers.capLabel") }}
                  </span>
                  <span
                    :class="[
                      'text-sm lg:text-base font-black',
                      tier.featured ? 'text-white' : 'text-[#191C1F]',
                    ]"
                  >
                    {{ t(tier.cap) }}
                  </span>
                </span>
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
              {{ t("becomemember.join.participation.heading") }}
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
              {{ t("becomemember.join.eligibility.heading") }}
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
                {{ t("becomemember.join.eligibility.fullMembersLabel") }}
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
