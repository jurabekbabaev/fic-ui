<script setup>
import WLocaleLink from "../shared/WLocaleLink.vue";
import { useDesktopMarquee } from "./useDesktopMarquee";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import {
  getLocalizedField,
} from "~/composables/helpers";
import { useCouncilMembersStore } from "@/stores/councilMembers";

const props = defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
});

const store = useCouncilMembersStore();
const rootEl = ref(null);
const models = computed(() => store.list || []);
const marqueeCopies = computed(() => (models.value.length ? 2 : 0));
const {
  marqueeContainer,
  track,
  refresh,
  onMouseDown,
  onMouseMove,
  onMouseUp,
} = useDesktopMarquee();
const dragThreshold = 6;
const dragStartX = ref(0);
const isPointerDown = ref(false);
const suppressMemberClick = ref(false);

const getModels = () => {
  store.getList();
};

function handleMarqueeMouseDown(event) {
  isPointerDown.value = true;
  dragStartX.value = event.clientX;
  suppressMemberClick.value = false;
  onMouseDown(event);
}

function handleMarqueeMouseMove(event) {
  if (isPointerDown.value && Math.abs(event.clientX - dragStartX.value) > dragThreshold) {
    suppressMemberClick.value = true;
  }

  onMouseMove(event);
}

function handleMarqueeMouseUp() {
  isPointerDown.value = false;

  if (!suppressMemberClick.value) {
    dragStartX.value = 0;
  }

  onMouseUp();
}

function handleMemberClick(event) {
  if (!suppressMemberClick.value) return;

  event.preventDefault();
  event.stopPropagation();
  suppressMemberClick.value = false;
}

onMounted(() => {
  getModels();

  if (props.embedded) return;
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting && rootEl.value?.classList) {
        rootEl.value.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.12 }
  );

  if (rootEl.value) observer.observe(rootEl.value);
});

watch(marqueeCopies, () => {
  if (!marqueeCopies.value) return;
  refresh();
});
</script>
<template>
  <div
    ref="rootEl"
    :class="props.embedded ? 'uzb-members-embedded' : 'section uzb-members-reveal'"
  >
    <div>
      <div v-if="!props.embedded" class="mainContainer">
        <div class="uzb-members-header">
          <div class="uzb-members-title-wrap">
            <h2 class="title-26 lg:text-2xl text-2xl mb-3 uppercase">
              {{
                t("Участники Совета Иностранных Инвесторов с узбекской стороны")
              }}
            </h2>
          </div>
        </div>
      </div>

      <div :class="props.embedded ? 'uzb-members-shell--embedded' : 'uzb-members-shell mb-[40px] mt-[32px]'">
        <div
          ref="marqueeContainer"
          :class="[
            'uzb-members-marquee cursor-grab select-none',
            props.embedded ? 'uzb-members-marquee--embedded' : '',
          ]"
          @mousedown="handleMarqueeMouseDown"
          @mouseleave="handleMarqueeMouseUp"
          @mouseup="handleMarqueeMouseUp"
          @mousemove="handleMarqueeMouseMove"
        >
          <div ref="track" class="uzb-members-track">
            <ul
            v-for="copyIndex in marqueeCopies"
            :key="copyIndex"
            :class="[
              'uzb-members-list',
              props.embedded ? 'uzb-members-list--embedded' : '',
            ]"
            :aria-hidden="copyIndex === 2 ? 'true' : undefined"
          >
              <li
                v-for="(model, index) in models"
                :key="`${copyIndex}-${index}-${model.id || model.full_name}`"
                class="uzb-members-item"
              >
                <WLocaleLink
                  to="/uzbekside"
                  :class="[
                    'uzb-member-card',
                    props.embedded ? 'uzb-member-card--embedded' : '',
                  ]"
                  @click.capture="handleMemberClick"
                >
                  <div
                    :class="[
                      'uzb-member-avatar',
                      props.embedded ? 'uzb-member-avatar--embedded' : '',
                    ]"
                    :style="`background-image: url('${model.photo_path}')`"
                  ></div>
                  <div class="uzb-member-copy">
                    <div
                      :class="[
                        'uzb-member-name',
                        props.embedded ? 'uzb-member-name--embedded' : '',
                      ]"
                    >
                      {{ getLocalizedField(model, "full_name") }}
                    </div>
                    <div
                      :class="[
                        'uzb-member-role',
                        props.embedded ? 'uzb-member-role--embedded' : '',
                      ]"
                    >
                      {{ getLocalizedField(model, "position") }}
                    </div>
                  </div>
                </WLocaleLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uzb-members-embedded {
  padding: 0;
}

.uzb-members-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 360ms ease, transform 360ms ease;
}

.uzb-members-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.uzb-members-shell {
  padding: 34px 0;
  overflow: hidden;
}

.uzb-members-header {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
}

.uzb-members-title-wrap {
  width: min(100%, 720px);
}

.uzb-members-footer-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4px;
}

.uzb-members-footer-text {
  max-width: 760px;
  font-size: 16px;
  line-height: 1.45;
  margin-bottom: 16px;
}

.uzb-members-footer-link {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  color: #191c1f;
  opacity: 0.6;
}

.uzb-members-shell--embedded {
  padding: 8px 0 0;
  overflow: hidden;
}

.uzb-members-marquee {
  overflow: hidden;
}

.uzb-members-marquee--embedded {
  overflow: hidden;
}

.uzb-members-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.uzb-members-list {
  display: flex;
  flex-shrink: 0;
  gap: 20px;
  min-width: max-content;
  margin: 0;
  padding: 0 20px 0 0;
}

.uzb-members-list--embedded {
  gap: 14px;
  padding-right: 14px;
}

.uzb-members-item {
  list-style: none;
}

.uzb-member-card {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 300px;
  height: 140px;
  padding: 18px 20px;
  box-sizing: border-box;
  border: 1px solid rgba(25, 28, 31, 0.1);
  border-radius: 20px;
  background: #fff;
  color: #191c1f;
  text-decoration: none;
  transition:
    transform 180ms ease,
    border-color 220ms ease,
    box-shadow 180ms ease;
}

.uzb-member-card--embedded {
  width: clamp(250px, 22vw, 320px);
  height: 110px;
  padding: 14px;
  gap: 12px;
  border-radius: 16px;
}

.uzb-member-card:hover,
.uzb-member-card:focus-visible {
  border-color: rgba(25, 28, 31, 0.14);
  box-shadow: 0 6px 18px rgba(25, 28, 31, 0.04);
}

.uzb-member-avatar {
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.uzb-member-avatar--embedded {
  flex: 0 0 46px;
  width: 46px;
  height: 46px;
}

.uzb-member-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  text-align: left;
}

.uzb-member-name {
  font-size: 22px;
  line-height: 1.05;
  font-weight: 700;
}

.uzb-member-name--embedded {
  font-size: 14px;
}

.uzb-member-role {
  margin-top: 6px;
  color: #505a63;
  font-size: 15px;
  line-height: 1.22;
  font-weight: 400;
}

.uzb-member-role--embedded {
  margin-top: 2px;
  font-size: 12px;
  line-height: 1.15;
}

@media (max-width: 768px) {
  .uzb-members-shell {
    padding: 24px 0;
  }

  .uzb-members-header {
    margin-bottom: 16px;
  }

  .uzb-members-footer-text {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .uzb-members-list {
    gap: 14px;
    padding-right: 14px;
  }

  .uzb-member-card {
    width: min(90vw, 360px);
    height: 96px;
    padding: 16px;
    gap: 14px;
  }

  .uzb-member-avatar {
    flex-basis: 56px;
    width: 56px;
    height: 56px;
  }

  .uzb-member-name {
    font-size: 18px;
  }

  .uzb-member-role {
    font-size: 14px;
  }

  .uzb-members-shell--embedded {
    padding-top: 6px;
  }

  .uzb-members-list--embedded {
    gap: 12px;
    padding-right: 12px;
  }

  .uzb-member-card--embedded {
    width: clamp(220px, 56vw, 280px);
    height: 98px;
    padding: 12px;
    gap: 12px;
  }

  .uzb-member-avatar--embedded {
    flex-basis: 40px;
    width: 40px;
    height: 40px;
  }

  .uzb-member-name--embedded {
    font-size: 13px;
  }

  .uzb-member-role--embedded {
    font-size: 11px;
  }
}
</style>
