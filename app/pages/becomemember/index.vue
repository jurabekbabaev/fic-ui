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
  [...companies.value.filter((c) => c.memberType === "E")].sort(sortByCompanyId),
);
const fullMembers = computed(() =>
  [...companies.value.filter((c) => c.memberType === "F")].sort(sortByCompanyId),
);
const observers = computed(() =>
  [...companies.value.filter((c) => c.memberType === "O")].sort(sortByCompanyId),
);

const memberSections = computed(() => [
  {
    title: t("becomemember.members.tabs.executive"),
    add: t("becomemember.members.tabs.founders"),
    targetId: "founding-members",
    items: founders.value,
    count: 3,
  },
  {
    title: t("becomemember.members.tabs.full"),
    targetId: "full-members",
    items: fullMembers.value,
    count: 32,
  },
  {
    title: t("becomemember.members.tabs.observers"),
    targetId: "observers",
    items: observers.value,
    count: 8,
  },
]);

const activeTab = ref(0);
const tabsRef = ref(null);
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

const scrollToTarget = async () => {
  if (typeof window === "undefined") return;
  await nextTick();
  const target = route.query.target;
  if (!target || typeof target !== "string") return;
  const idx = memberSections.value.findIndex((s) => s.targetId === target);
  if (idx !== -1) {
    activeTab.value = idx;
    await nextTick();
    if (tabsRef.value) {
      const offset = 110;
      const top = tabsRef.value.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
};

watch(tabsRef, (el) => {
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
  () => { scrollToTarget(); },
);
</script>

<template>
  <div>
    <client-only>
      <PageHero :title="t('becomemember.hero.title')" />
      <div class="container">
        <p class="lg:max-w-[900px] w-full text-base lg:text-lg text-[#505A63] font-normal leading-[170%]">
          {{ t("becomemember.members.intro") }}
        </p>

        <!-- Tabs -->
        <div ref="tabsRef" class="member-tabs mt-8 mb-8">
          <button
            v-for="(section, index) in memberSections"
            :key="section.targetId"
            class="member-tab"
            :class="{ 'member-tab--active': activeTab === index }"
            @click="activeTab = index"
          >
            <span class="member-tab__count">
              {{ displayValues[index] }}
            </span>
            <span class="member-tab__label">{{ section.title }}</span>
          </button>
        </div>

        <!-- Active tab content -->
        <div class="grid grid-cols-1 gap-4">
          <a
            v-for="item in memberSections[activeTab].items"
            :key="item.filename"
            :id="item.targetId"
            :href="item.website"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-7 bg-white border border-[#0000001A] rounded-2xl p-4 lg:p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#00000033] hover:shadow-[0_18px_40px_rgba(25,28,31,0.08)]"
          >
            <div class="shrink-0 flex items-center justify-center w-full sm:w-[200px] lg:w-[220px] h-[150px] lg:h-[176px] p-5">
              <img
                :src="item.image"
                :alt="item.name"
                class="max-w-full max-h-full object-contain"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-lg lg:text-2xl font-bold uppercase leading-snug text-[#191C1F]">
                {{ item.name }}
              </h3>
              <p class="mt-3 text-sm lg:text-base font-normal leading-relaxed text-[#505A63]">
                {{ item.bio }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
.member-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

@media (max-width: 640px) {
  .member-tabs {
    grid-template-columns: 1fr;
  }
}

.member-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 24px 28px;
  border-radius: 20px;
  border: 1.5px solid rgba(25, 28, 31, 0.1);
  background: #fff;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.member-tab:hover {
  border-color: rgba(25, 28, 31, 0.25);
  box-shadow: 0 8px 24px rgba(25, 28, 31, 0.07);
  transform: translateY(-2px);
}

.member-tab--active {
  background: #191c1f;
  border-color: #191c1f;
  box-shadow: 0 12px 32px rgba(25, 28, 31, 0.2);
  transform: translateY(-2px);
}

.member-tab--active:hover {
  border-color: #191c1f;
}

.member-tab__count {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 700;
  line-height: 1;
  color: #191c1f;
  transition: color 0.2s ease;
}

.member-tab--active .member-tab__count {
  color: #fff;
}

.member-tab__label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: #505a63;
  transition: color 0.2s ease;
}

.member-tab--active .member-tab__label {
  color: rgba(255, 255, 255, 0.75);
}
</style>
