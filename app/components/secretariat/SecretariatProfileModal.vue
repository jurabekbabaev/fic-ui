<script setup lang="ts">
import { useI18n } from "vue-i18n";

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

interface Props {
  open: boolean;
  member: SecretariatMember | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const previousOverflow = ref("");
const previousPaddingRight = ref("");

const paragraphs = computed(() =>
  (props.member?.biography ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
);

const handleClose = () => {
  emit("close");
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    handleClose();
  }
};

const restoreBodyScroll = () => {
  document.body.style.overflow = previousOverflow.value;
  document.body.style.paddingRight = previousPaddingRight.value;
  window.removeEventListener("keydown", handleKeydown);
};

watch(
  () => props.open,
  (isOpen) => {
    if (!import.meta.client) {
      return;
    }

    if (isOpen) {
      previousOverflow.value = document.body.style.overflow;
      previousPaddingRight.value = document.body.style.paddingRight;

      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const bodyPaddingRight =
        Number.parseFloat(window.getComputedStyle(document.body).paddingRight) ||
        0;

      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
      }
      window.addEventListener("keydown", handleKeydown);
      return;
    }

    restoreBodyScroll();
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return;
  }

  restoreBodyScroll();
});
</script>

<template>
  <Teleport to="body">
    <Transition name="sec-modal">
      <div
        v-if="open && member"
        class="sec-modal-overlay"
        @click.self="handleClose"
      >
        <div
          class="sec-modal"
          role="dialog"
          aria-modal="true"
          :aria-label="member.fullname"
        >
          <button
            type="button"
            class="sec-modal__close"
            aria-label="Close"
            @click="handleClose"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.75 6.75L17.25 17.25M17.25 6.75L6.75 17.25"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </button>

          <header class="sec-modal__header">
            <div class="sec-modal__avatar">
              <img :src="member.image" :alt="member.fullname" />
            </div>
            <div class="sec-modal__id">
              <p class="sec-modal__position">{{ member.position }}</p>
              <h3 class="sec-modal__name">{{ member.fullname }}</h3>
            </div>
          </header>

          <div class="sec-modal__body">
            <p class="sec-modal__eyebrow">{{ t("Биография") }}</p>
            <p
              v-for="(paragraph, i) in paragraphs"
              :key="i"
              class="sec-modal__paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sec-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(12, 14, 16, 0.42);
  backdrop-filter: blur(6px);
}

.sec-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(680px, 100%);
  max-height: min(86vh, 800px);
  overflow: hidden;
  border: 1px solid rgba(25, 28, 31, 0.08);
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 30px 80px rgba(12, 14, 16, 0.22);
}

.sec-modal__close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: rgba(25, 28, 31, 0.06);
  color: #191c1f;
  transition: background-color 0.24s ease, color 0.24s ease,
    transform 0.24s ease;
}

.sec-modal__close:hover {
  background: #191c1f;
  color: #ffffff;
  transform: rotate(90deg);
}

.sec-modal__close svg {
  width: 18px;
  height: 18px;
}

.sec-modal__header {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 28px 30px 22px;
  border-bottom: 1px solid rgba(25, 28, 31, 0.07);
}

.sec-modal__avatar {
  flex: 0 0 76px;
  width: 76px;
  height: 76px;
  overflow: hidden;
  border-radius: 18px;
  background: #eef0f3;
}

.sec-modal__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.sec-modal__id {
  min-width: 0;
  padding-right: 44px;
}

.sec-modal__position {
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #909aa6;
}

.sec-modal__name {
  font-size: clamp(20px, 3vw, 26px);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #191c1f;
}

.sec-modal__body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 30px 30px;
}

.sec-modal__eyebrow {
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c2c8d0;
}

.sec-modal__paragraph {
  margin-bottom: 14px;
  font-size: 15px;
  line-height: 1.7;
  white-space: pre-line;
  color: #505a63;
}

.sec-modal__paragraph:last-child {
  margin-bottom: 0;
}

/* overlay + dialog transition */
.sec-modal-enter-active,
.sec-modal-leave-active {
  transition: opacity 0.26s ease;
}

.sec-modal-enter-active .sec-modal,
.sec-modal-leave-active .sec-modal {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.26s ease;
}

.sec-modal-enter-from,
.sec-modal-leave-to {
  opacity: 0;
}

.sec-modal-enter-from .sec-modal,
.sec-modal-leave-to .sec-modal {
  opacity: 0;
  transform: translateY(24px) scale(0.96);
}

@media (max-width: 767px) {
  .sec-modal-overlay {
    align-items: flex-end;
    padding: 0;
  }

  .sec-modal {
    width: 100%;
    max-height: 92vh;
    border-radius: 24px 24px 0 0;
  }

  .sec-modal__header {
    padding: 24px 20px 18px;
    gap: 14px;
  }

  .sec-modal__avatar {
    flex-basis: 60px;
    width: 60px;
    height: 60px;
    border-radius: 14px;
  }

  .sec-modal__body {
    padding: 20px 20px 26px;
  }
}
</style>
