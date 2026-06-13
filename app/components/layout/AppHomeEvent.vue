<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { date, getLocalizedField } from '~/composables/helpers';
import { useWeeklyEventsStore } from '@/stores/weeklyEvents';
import WLocaleLink from "~/components/shared/WLocaleLink.vue";

const { t } = useI18n();
const store = useWeeklyEventsStore();
const nextEvent = computed(() => store.list?.[0] ?? null);
const nextEventDate = computed(() => {
  if (!nextEvent.value?.dates?.length) return '';
  return date(nextEvent.value.dates[0], 'DAY MNTHS');
});
const nextEventTitle = computed(() => {
  if (!nextEvent.value) return '';
  return getLocalizedField(nextEvent.value, 'title');
});

const fetchNextEvent = async () => {
  try {
    await store.getList({ page: 1, per_page: 1 });
  } catch {}
};

onMounted(() => {
  fetchNextEvent();
});
</script>

<template>
  <div class="eventSection">
    <div class="flex justify-center items-center gap-5">
      <div class="uppercase font-medium opacity-[70%]">{{t('Ближайшие события')}}</div>
      <div class="delimiter"></div>
      <div class="leading-none">
        <div class="uppercase font-medium">
          {{ nextEventDate || t('18 июня') }}
        </div>
        <div class="text-[14px]">
          {{ nextEventTitle || t('Пленарная сессия') }}
        </div>
      </div>
      <div>
        <WLocaleLink to="/weeklyevents" class="btn btn-secondary btn-sm">
          <span class="flex items-center">
            {{t('Подробнее')}}
            <i class="icon-move-right ms-2"></i>
          </span>
        </WLocaleLink>
      </div>
    </div>
  </div>
</template>

<style></style>
