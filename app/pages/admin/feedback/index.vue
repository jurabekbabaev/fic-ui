<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
import { useI18n } from 'vue-i18n'
import { useFeedbackStore } from '@/stores/feedback'
const store = useFeedbackStore();
const { t } = useI18n()
const models = computed(() => {
  return store.list;
})
const pagination = computed(() => {
  return store.pagination;
})
const getModels = () => {
  store.getList(filter.value);
}
const filter = ref({
  page: 1
})
const changePage = (page) => {
  filter.value.page = page;
}
onMounted(() => {
  getModels();
})
</script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-[24px] font-medium">{{ t('admin.feedback.list') }}</h1>
  </div>
  <div class="x-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{ t('admin.firstName') }}</th>
          <th>{{ t('admin.lastName') }}</th>
          <th>{{ t('admin.phone') }}</th>
          <th>E-mail</th>
          <th>{{ t('admin.message') }}</th>
          <th>{{ t('admin.date') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(model,index) in models" :key="index">
          <td>{{pagination.startIndex+(index+1)}}</td>
          <td>{{ model.first_name }}</td>
          <td>{{ model.last_name }}</td>
          <td>{{ model.phone_number }}</td>
          <td>{{ model.email }}</td>
          <td>{{ model.message }}</td>
          <td>{{ date(model.created_at, 'DD.MM.YYYY HH:mm') }}</td>
        </tr>
      </tbody>
    </table>
    <div class="m-pagination mt-6">
      <div>
        <el-pagination 
          v-if="pagination && pagination.last_page > 1" 
          pager-count="5" 
          layout="prev, pager, next" 
          v-model:current-page="filter.page"
          @current-change="changePage"
          :total="pagination.total" />
      </div>
    </div>
  </div>
</template>