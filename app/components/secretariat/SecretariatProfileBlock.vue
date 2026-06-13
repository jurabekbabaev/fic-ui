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
  duties: string;
  biography: string;
  contacts: ContactItem[];
}

const props = defineProps<{
  member: SecretariatMember;
}>();

const { t } = useI18n();

const activeModal = ref<"duties" | "biography" | null>(null);

const modalTitle = computed(() =>
  activeModal.value === "duties" ? t("Обязанности") : t("Биография")
);

const modalContent = computed(() =>
  activeModal.value === "duties"
    ? props.member.duties
    : props.member.biography
);

const openModal = (type: "duties" | "biography") => {
  activeModal.value = type;
};

const closeModal = () => {
  activeModal.value = null;
};
</script>

<template>
  <article class="secretariat-profile">
    <div class="secretariat-profile__image-shell">
      <img
        :src="member.image"
        :alt="member.fullname"
        class="secretariat-profile__image"
      />
    </div>

    <div class="secretariat-profile__content">
      <p class="secretariat-profile__position">{{ member.position }}</p>
      <h2 class="secretariat-profile__name">
        <span class="secretariat-profile__name-line">
          {{ member.fullname.split(" ").slice(0, 1).join(" ") }}
        </span>
        <span class="secretariat-profile__name-line">
          {{ member.fullname.split(" ").slice(1).join(" ") }}
        </span>
      </h2>

      <div class="secretariat-profile__actions">
        <button
          type="button"
          class="secretariat-action secretariat-action--primary"
          @click="openModal('duties')"
        >
          {{ t("Обязанности") }}
        </button>
        <button
          type="button"
          class="secretariat-action secretariat-action--secondary"
          @click="openModal('biography')"
        >
          {{ t("Биография") }}
        </button>
      </div>
    </div>

    <div class="secretariat-profile__contacts">
      <component
        :is="contact.href ? 'a' : 'div'"
        v-for="contact in member.contacts"
        :key="`${member.fullname}-${contact.type}`"
        :href="contact.href"
        class="secretariat-contact"
      >
        <span class="secretariat-contact__icon" aria-hidden="true">
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

        <span class="secretariat-contact__text">
          {{ contact.value }}
        </span>
      </component>
    </div>

    <SecretariatProfileModal
      :open="activeModal !== null"
      :title="modalTitle"
      :member-name="member.fullname"
      :content="modalContent"
      @close="closeModal"
    />
  </article>
</template>

<style scoped>
.secretariat-profile {
  display: grid;
  width: 100%;
  box-sizing: border-box;
  gap: 22px;
  max-width: 100%;
  min-height: 238px;
  margin: 0;
  padding: 20px;
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(25, 28, 31, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.secretariat-profile:hover {
  transform: translateY(-3px);
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 22px 48px rgba(25, 28, 31, 0.08);
}

.secretariat-profile__image-shell {
  width: min(100%, 164px);
  aspect-ratio: 0.78;
  align-self: center;
  overflow: hidden;
  border-radius: 18px;
  background: #eef0f3;
}

.secretariat-profile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.secretariat-profile__content {
  display: flex;
  flex-direction: column;
  min-width: 0;
  align-self: stretch;
  justify-content: center;
}

.secretariat-profile__position {
  margin-bottom: 10px;
  font-size: 12.5px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #909aa6;
}

.secretariat-profile__name {
  margin-bottom: 18px;
  font-size: 38px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #191c1f;
}

.secretariat-profile__name-line {
  display: block;
  white-space: nowrap;
}

.secretariat-profile__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 2px;
}

.secretariat-action {
  min-height: 40px;
  border-radius: 999px;
  padding: 10px 22px;
  font-size: 13px;
  line-height: 1.15;
  font-weight: 600;
  transition: transform 0.24s ease, background-color 0.24s ease,
    color 0.24s ease;
}

.secretariat-action:hover {
  transform: translateY(-1px);
}

.secretariat-action--primary {
  background: #191c1f;
  color: #ffffff;
}

.secretariat-action--primary:hover {
  background: #000000;
}

.secretariat-action--secondary {
  background: rgba(25, 28, 31, 0.06);
  color: #191c1f;
}

.secretariat-action--secondary:hover {
  background: rgba(25, 28, 31, 0.12);
}

.secretariat-profile__contacts {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
  gap: 14px;
}

.secretariat-contact {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #191c1f;
  text-decoration: none;
}

.secretariat-contact__icon {
  flex: 0 0 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(25, 28, 31, 0.05);
  color: #191c1f;
  transition: background-color 0.24s ease, color 0.24s ease;
}

.secretariat-contact__icon svg {
  width: 18px;
  height: 18px;
}

.secretariat-contact__text {
  display: flex;
  align-items: center;
  min-height: 42px;
  padding-top: 0;
  font-size: 14.5px;
  line-height: 1.4;
  font-weight: 500;
  color: #191c1f;
  transition: color 0.24s ease;
}

a.secretariat-contact:hover .secretariat-contact__icon {
  background: #191c1f;
  color: #ffffff;
}

a.secretariat-contact:hover .secretariat-contact__text {
  color: #505a63;
}

@media (min-width: 768px) {
  .secretariat-profile {
    grid-template-columns: minmax(0, 1fr) minmax(220px, 252px);
    min-height: 252px;
    padding: 18px;
  }

  .secretariat-profile__image-shell {
    grid-column: 1 / -1;
    width: 170px;
    min-height: 218px;
  }

  .secretariat-profile__content {
    grid-column: 1;
  }

  .secretariat-profile__contacts {
    grid-column: 2;
  }
}

@media (min-width: 1200px) {
  .secretariat-profile {
    grid-template-columns: 170px minmax(0, 1fr) 252px;
    gap: 20px;
    min-height: 254px;
    align-items: stretch;
    padding: 18px;
  }

  .secretariat-profile__image-shell,
  .secretariat-profile__content,
  .secretariat-profile__contacts {
    grid-column: auto;
  }

  .secretariat-profile__image-shell {
    width: 170px;
    min-height: 218px;
    height: 100%;
    align-self: stretch;
  }
}

@media (max-width: 767px) {
  .secretariat-profile {
    gap: 16px;
    min-height: 272px;
    padding: 16px;
    border-radius: 20px;
  }

  .secretariat-profile__image-shell {
    width: min(100%, 156px);
  }

  .secretariat-profile__position {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .secretariat-profile__name {
    margin-bottom: 14px;
    font-size: 24px;
    line-height: 1.08;
  }

  .secretariat-profile__actions {
    margin-top: 16px;
  }

  .secretariat-action {
    min-height: 38px;
    padding: 9px 20px;
  }

  .secretariat-profile__contacts {
    gap: 12px;
  }

  .secretariat-contact__icon {
    flex-basis: 40px;
    width: 40px;
    height: 40px;
  }

  .secretariat-contact__text {
    min-height: 40px;
    font-size: 13.5px;
    padding-top: 0;
  }
}
</style>
