<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SecretariatProfileModal from "~/components/secretariat/SecretariatProfileModal.vue";

type ContactType = "phone" | "email" | "location" | "hours";

interface ContactItem {
  type: ContactType;
  value: string;
  href?: string;
}

interface SecretariatMember {
  image: string;
  fullname: string;
  position: string;
  description: string;
  biography: string;
  contacts: ContactItem[];
}

defineProps<{
  member: SecretariatMember;
}>();

const { t } = useI18n();

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <article class="sec-card">
    <div class="sec-card__media">
      <img
        :src="member.image"
        :alt="member.fullname"
        class="sec-card__photo"
        loading="lazy"
      />
    </div>

    <div class="sec-card__body">
      <p class="sec-card__position">{{ member.position }}</p>
      <h2 class="sec-card__name">{{ member.fullname }}</h2>

      <div class="sec-card__contacts">
        <component
          :is="contact.href ? 'a' : 'div'"
          v-for="contact in member.contacts"
          :key="`${member.fullname}-${contact.type}`"
          :href="contact.href"
          class="sec-contact"
        >
          <span class="sec-contact__icon" aria-hidden="true">
            <svg v-if="contact.type === 'phone'" viewBox="0 0 24 24">
              <path
                d="M4.75 5.5c0-.41.34-.75.75-.75h2.6c.36 0 .67.26.74.61l.48 2.41a.75.75 0 0 1-.2.68l-1.38 1.38a13.96 13.96 0 0 0 5.43 5.43l1.38-1.38a.75.75 0 0 1 .68-.2l2.41.48c.35.07.61.38.61.74v2.6a.75.75 0 0 1-.75.75h-1.5C10.83 19 5 13.17 5 6.25V5.5h-.25Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
              />
            </svg>

            <svg v-else-if="contact.type === 'email'" viewBox="0 0 24 24">
              <path
                d="M4.5 6.75h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1.6"
              />
              <path
                d="M4.5 8.25 12 13.5l7.5-5.25"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
              />
            </svg>

            <svg v-else-if="contact.type === 'location'" viewBox="0 0 24 24">
              <path
                d="M12 20.25s6-5.43 6-10.5a6 6 0 1 0-12 0c0 5.07 6 10.5 6 10.5Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
              />
              <circle
                cx="12"
                cy="9.75"
                r="1.8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />
            </svg>

            <svg v-else viewBox="0 0 24 24">
              <path
                d="M12 6.75v5.25l3 3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />
            </svg>
          </span>

          <span class="sec-contact__text">{{ contact.value }}</span>
        </component>
      </div>

      <div class="sec-card__actions">
        <button type="button" class="sec-btn" @click="openModal">
          <span>{{ t("Биография") }}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
        </button>
      </div>
    </div>

    <SecretariatProfileModal
      :open="isModalOpen"
      :member="member"
      @close="closeModal"
    />
  </article>
</template>

<style scoped>
.sec-card {
  display: grid;
  grid-template-columns: 188px minmax(0, 1fr);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(25, 28, 31, 0.04);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease, border-color 0.35s ease;
}

.sec-card:hover {
  transform: translateY(-4px);
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 26px 56px rgba(25, 28, 31, 0.1);
}

/* media */
.sec-card__media {
  position: relative;
  overflow: hidden;
  background: #eef0f3;
}

.sec-card__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(25, 28, 31, 0) 60%,
    rgba(25, 28, 31, 0.14) 100%
  );
  pointer-events: none;
}

.sec-card__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.sec-card:hover .sec-card__photo {
  transform: scale(1.04);
}

/* body */
.sec-card__body {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 28px 30px;
}

.sec-card__position {
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #909aa6;
}

.sec-card__name {
  font-size: clamp(22px, 2.4vw, 27px);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #191c1f;
}

/* contacts */
.sec-card__contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin-top: auto;
  padding: 18px 0 20px;
  border-top: 1px solid rgba(25, 28, 31, 0.07);
}

.sec-contact {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #191c1f;
  text-decoration: none;
}

.sec-contact__icon {
  flex: 0 0 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgba(25, 28, 31, 0.05);
  color: #191c1f;
  transition: background-color 0.24s ease, color 0.24s ease;
}

.sec-contact__icon svg {
  width: 16px;
  height: 16px;
}

.sec-contact__text {
  font-size: 13.5px;
  line-height: 1.4;
  font-weight: 500;
  color: #505a63;
  transition: color 0.24s ease;
}

a.sec-contact:hover .sec-contact__icon {
  background: #191c1f;
  color: #ffffff;
}

a.sec-contact:hover .sec-contact__text {
  color: #191c1f;
}

/* action */
.sec-card__actions {
  display: flex;
}

.sec-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  border-radius: 999px;
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 600;
  background: rgba(25, 28, 31, 0.06);
  color: #191c1f;
  transition: background-color 0.24s ease, color 0.24s ease, transform 0.24s ease,
    box-shadow 0.24s ease;
}

.sec-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.28s ease;
}

.sec-btn:hover {
  background: #191c1f;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(25, 28, 31, 0.18);
}

.sec-btn:hover svg {
  transform: translateX(4px);
}

/* tablet / small desktop */
@media (max-width: 1023px) and (min-width: 768px) {
  .sec-card {
    grid-template-columns: 168px minmax(0, 1fr);
  }

  .sec-card__body {
    padding: 24px;
  }
}

@media (max-width: 767px) {
  .sec-card {
    grid-template-columns: 1fr;
    border-radius: 24px;
  }

  .sec-card__media {
    aspect-ratio: 16 / 11;
  }

  .sec-card__photo {
    object-position: center 20%;
  }

  .sec-card__body {
    padding: 22px 20px;
  }
}
</style>
