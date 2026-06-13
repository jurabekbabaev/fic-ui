<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar'
import 'v-calendar/dist/style.css'
import moment from "moment";

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
    default: null
  }
})

const emit = defineEmits(['update:model-value'])

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', moment(value).format('YYYY-MM-DD'))
  }
})

const attrs = {
  'transparent': true,
  'borderless': true,
  'color': 'primary',
  'is-dark': { selector: 'html', darkClass: 'dark' },
  'first-day-of-week': 2,
  'is-inline': false
}
</script>

<template>
  <div>
    <client-only>
      <VCalendarDatePicker
        v-model="date"
        v-bind="{ ...attrs, ...$attrs }"
      >
        <template #default="{ togglePopover }">
          <button
            type="button"
            @click="togglePopover"
            class="btn btn-primary btn-sm"
          >
            {{ date ? date : 'Выбрать дату' }}
          </button>
        </template>
      </VCalendarDatePicker>
    </client-only>
  </div>
</template>