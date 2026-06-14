<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="flex justify-between">
    <h1 class="text-[24px] font-medium mb-4">{{ t('admin.expertFeedbacks.edit') }}</h1>
  </div>
  <FormsExpertFeedbacks />
</template>