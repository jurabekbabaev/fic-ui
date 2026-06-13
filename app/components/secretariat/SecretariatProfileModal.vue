<script setup lang="ts">
interface Props {
  open: boolean;
  title: string;
  memberName: string;
  content: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const previousOverflow = ref("");
const previousPaddingRight = ref("");

const paragraphs = computed(() =>
  props.content
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
    <Transition name="secretariat-modal">
      <div
        v-if="open"
        class="secretariat-modal-overlay"
        @click.self="handleClose"
      >
        <div
          class="secretariat-modal-dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
        >
          <button
            type="button"
            class="secretariat-modal-close"
            aria-label="Close modal"
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

          <div class="secretariat-modal-heading">
            <span></span>
            <h3>{{ title }}</h3>
            <span></span>
          </div>

          <p class="secretariat-modal-member">{{ memberName }}</p>

          <div class="secretariat-modal-body">
            <p
              v-for="paragraph in paragraphs"
              :key="paragraph"
              class="secretariat-modal-paragraph"
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
.secretariat-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(12, 18, 32, 0.2);
  backdrop-filter: blur(5px);
}

.secretariat-modal-dialog {
  position: relative;
  width: min(760px, 100%);
  max-height: min(80vh, 760px);
  overflow: hidden;
  border: 1px solid rgba(48, 78, 196, 0.1);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(12, 18, 32, 0.12);
  padding: 18px 20px;
}

.secretariat-modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(48, 78, 196, 0.45);
  border-radius: 10px;
  background: #ffffff;
  color: #3555d5;
  transition: background-color 0.24s ease, color 0.24s ease,
    border-color 0.24s ease, transform 0.24s ease;
}

.secretariat-modal-close:hover {
  background: #3555d5;
  color: #ffffff;
  border-color: #3555d5;
  transform: translateY(-1px);
}

.secretariat-modal-close svg {
  width: 16px;
  height: 16px;
}

.secretariat-modal-heading {
  margin-bottom: 10px;
  padding-right: 44px;
}

.secretariat-modal-heading h3 {
  font-size: 22px;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #353a45;
}

.secretariat-modal-member {
  margin-bottom: 12px;
  text-align: left;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 600;
  color: #4b5870;
}

.secretariat-modal-body {
  max-height: calc(min(80vh, 760px) - 96px);
  overflow-y: auto;
  padding-right: 4px;
}

.secretariat-modal-paragraph {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-line;
  color: #5d6674;
}

.secretariat-modal-paragraph:last-child {
  margin-bottom: 0;
}

.secretariat-modal-enter-active,
.secretariat-modal-leave-active {
  transition: opacity 0.24s ease-in-out;
}

.secretariat-modal-enter-active .secretariat-modal-dialog,
.secretariat-modal-leave-active .secretariat-modal-dialog {
  transition: transform 0.24s ease-in-out, opacity 0.24s ease-in-out;
}

.secretariat-modal-enter-from,
.secretariat-modal-leave-to {
  opacity: 0;
}

.secretariat-modal-enter-from .secretariat-modal-dialog,
.secretariat-modal-leave-to .secretariat-modal-dialog {
  opacity: 0;
  transform: translateY(14px) scale(0.97);
}

@media (max-width: 767px) {
  .secretariat-modal-overlay {
    align-items: flex-start;
    padding: 12px;
  }

  .secretariat-modal-dialog {
    max-height: calc(100vh - 24px);
    border-radius: 18px;
    padding: 18px 16px;
  }

  .secretariat-modal-close {
    top: 12px;
    right: 12px;
  }

  .secretariat-modal-heading {
    margin-top: 8px;
    margin-bottom: 10px;
    padding-right: 44px;
  }

  .secretariat-modal-heading h3 {
    font-size: 18px;
    letter-spacing: -0.02em;
  }

  .secretariat-modal-member {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .secretariat-modal-body {
    max-height: calc(100vh - 116px);
    padding-right: 4px;
  }

  .secretariat-modal-paragraph {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
