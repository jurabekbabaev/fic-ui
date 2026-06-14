<template>
  <div class="container mx-auto px-4">
    <div class="text-center mb-12 fade-in-down mt-[100px]">
      <h2 class="lg:text-[64px] text-[32px] font-bold mb-4 text-gray-900">
        {{ t("management.executiveCommittee.title") }}
      </h2>
      <div class="w-full flex justify-center">
        <div class="text-base lg:text-xl lg:w-1/2 text-gray-600">
          {{ t("management.executiveCommittee.subtitle") }}
        </div>
      </div>
    </div>

    <div class="investor-grid">
      <article
        v-for="person in investorCards"
        :key="person.name"
        class="investor-profile-card"
      >
        <div class="investor-profile-logo">
          <img
            :src="person.logo"
            :alt="person.logoAlt"
            :class="['investor-profile-logo-image', person.logoClass]"
          />
        </div>

        <div class="investor-profile-image-wrap">
          <img
            :src="person.image"
            :alt="t(person.name)"
            class="investor-profile-image"
          />
        </div>

        <div class="investor-profile-copy">
          <p v-if="showQuote" class="investor-profile-quote">
            {{ t(person.quote) }}
          </p>
          <h3 class="investor-profile-name">
            {{ t(person.name) }}
          </h3>
          <span v-if="person.role" class="investor-profile-badge">
            {{ t(person.role) }}
          </span>
          <p class="investor-profile-role">
            {{ t(person.position) }}
          </p>
          <div v-if="!showQuote" class="investor-bio-wrap">
            <button class="investor-bio-btn">
              <span>{{ t("management.executiveCommittee.bioLabel") }}</span>
            </button>
            <div class="investor-bio-popover" role="tooltip">
              <p class="investor-bio-text">{{ t(person.bio) }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import LazizImage from "@/assets/images/experts/foreign1.png";
import AndiImage from "@/assets/images/experts/foreign2.png";
import KanokpanImage from "@/assets/images/experts/foreign3.png";
import NeilImage from "@/assets/images/experts/foreign4.png";
import AzizImage from "@/assets/images/experts/aziz2.png";
import AdBank from "@/assets/images/brands/ad-bank.png";
import EBank from "@/assets/images/brands/e-bank.png";
import IfcBank from "@/assets/images/brands/ifc2.png";
import FICLogo from "../../../public/images/ba12d8ddde154e568c101e56e4a917883a60b20a.png";
import Logo from "../../../app/assets/images/brands/miit.png";

const { t } = useI18n();
const route = useRoute();
const showQuote = computed(() => !route.path.includes("foreigninvestors"));

interface InvestorCard {
  logo: string;
  logoAlt: string;
  logoClass?: string;
  image: string;
  name: string;
  role: string;
  position: string;
  quote: string;
  bio: string;
}

const investorCards = computed<InvestorCard[]>(() => [
  {
    logo: Logo,
    logoAlt: "MIIT",
    logoClass: "investor-profile-logo-image--sm",
    image: LazizImage,
    name: "management.executiveCommittee.members.0.name",
    role: "management.executiveCommittee.members.0.role",
    position: "management.executiveCommittee.members.0.position",
    quote: "management.executiveCommittee.members.0.quote",
    bio: "management.executiveCommittee.members.0.bio",
  },
  {
    logo: EBank,
    logoAlt: "EBRD",
    image: AndiImage,
    name: "management.executiveCommittee.members.1.name",
    role: "management.executiveCommittee.members.1.role",
    position: "management.executiveCommittee.members.1.position",
    quote: "management.executiveCommittee.members.1.quote",
    bio: "management.executiveCommittee.members.1.bio",
  },
  {
    logo: AdBank,
    logoAlt: "ADB",
    image: KanokpanImage,
    name: "management.executiveCommittee.members.2.name",
    role: "management.executiveCommittee.members.2.role",
    position: "management.executiveCommittee.members.2.position",
    quote: "management.executiveCommittee.members.2.quote",
    bio: "management.executiveCommittee.members.2.bio",
  },
  {
    logo: IfcBank,
    logoAlt: "IFC",
    image: NeilImage,
    name: "management.executiveCommittee.members.3.name",
    role: "management.executiveCommittee.members.3.role",
    position: "management.executiveCommittee.members.3.position",
    quote: "management.executiveCommittee.members.3.quote",
    bio: "management.executiveCommittee.members.3.bio",
  },
  {
    logo: FICLogo,
    logoAlt: "FIC",
    logoClass: "investor-profile-logo-image--sm",
    image: AzizImage,
    name: "management.executiveCommittee.members.4.name",
    role: "management.executiveCommittee.members.4.role",
    position: "management.executiveCommittee.members.4.position",
    quote: "management.executiveCommittee.members.4.quote",
    bio: "management.executiveCommittee.members.4.bio",
  },
]);
</script>

<style scoped>
.fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.investor-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.investor-profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 390px;
  height: 100%;
  padding: 24px 20px 28px;
  border: 1px solid rgba(25, 28, 31, 0.1);
  border-radius: 24px;
  background: #fff;
  text-align: center;
  box-shadow: 0 10px 30px rgba(25, 28, 31, 0.04);
}

.investor-profile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-bottom: 18px;
}

.investor-profile-logo-image {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.investor-profile-logo-image--sm {
  max-width: 78%;
  max-height: 78%;
}

.investor-profile-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  margin-bottom: 20px;
  overflow: hidden;
}

.investor-profile-image {
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
  transform: scale(1.08);
  transform-origin: center top;
}

.investor-profile-copy {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

.investor-profile-name {
  color: #191c1f;
  line-height: 1.1;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}

.investor-profile-badge {
  display: inline-flex;
  align-items: center;
  align-self: center;
  max-width: 100%;
  color: #2d4cc5;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.2;
  white-space: nowrap;
}

.investor-profile-role {
  color: #505a63;
  font-size: 15px;
  line-height: 1.35;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
}

.investor-bio-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
  padding-bottom: 20px;
}

.investor-bio-btn {
  position: relative;
  overflow: hidden;
  padding: 7px 18px;
  border: 1px solid rgba(25, 28, 31, 0.25);
  border-radius: 999px;
  background: transparent;
  color: #191c1f;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.35s ease, border-color 0.35s ease;
}

.investor-bio-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #191c1f;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.investor-bio-btn:hover::before {
  transform: scaleX(1);
}

.investor-bio-btn:hover {
  color: #fff;
  border-color: #191c1f;
}

.investor-bio-btn span {
  position: relative;
  z-index: 1;
}

.investor-bio-popover {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  width: 280px;
  max-width: 80vw;
  padding: 16px 18px;
  transform: translateX(-50%) translateY(-8px);
  border-radius: 16px;
  border: 1px solid rgba(25, 28, 31, 0.1);
  background: #fff;
  color: #191c1f;
  box-shadow: 0 18px 40px rgba(25, 28, 31, 0.12);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.28s ease, transform 0.28s ease, visibility 0.28s;
  pointer-events: none;
  z-index: 5;
}

.investor-bio-popover::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 14px;
  height: 14px;
  background: #fff;
  border-left: 1px solid rgba(25, 28, 31, 0.1);
  border-top: 1px solid rgba(25, 28, 31, 0.1);
  transform: translate(-50%, 50%) rotate(45deg);
  border-radius: 3px 0 0 0;
}

.investor-bio-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
}

.investor-bio-wrap:hover .investor-bio-popover {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.investor-profile-quote {
  color: #002342;
  font-size: 15px;
  line-height: 1.35;
  font-style: italic;
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(25, 28, 31, 0.1);
}
@media (min-width: 640px) {
  .investor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .investor-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .investor-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
  }

  .investor-profile-card {
    min-height: 420px;
    padding: 28px 18px 30px;
  }

  .investor-profile-logo {
    height: 76px;
  }

  .investor-profile-image-wrap {
    height: 240px;
  }

  .investor-profile-name {
    font-size: 24px;
  }

  .investor-profile-role {
    font-size: 14px;
  }
}
</style>
