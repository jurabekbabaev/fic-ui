<script setup>
import { Delete, Plus, EditPen } from "@element-plus/icons-vue";
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
import { useI18n } from 'vue-i18n'
import { useWeeklyEventsStore } from '@/stores/weeklyEvents'
const store = useWeeklyEventsStore();
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
const deleteModel = (id) => {
  if(confirm(t("Вы уверены?"))){
    store.delete(id).then(res => {
      getModels();
    })
  }
}
onMounted(() => {
  getModels();
})
</script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-[24px] font-medium">{{ t('Еженедельные события') }}</h1>
    <div>
      <NuxtLink class="btn btn-primary btn-sm" to="/admin/weekly-events/create">{{ t('Добавить новую') }}</NuxtLink>
    </div>
  </div>
  <div class="x-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{ t('Картинка') }}</th>
          <th>{{ t('Загаловок') }}</th>
          <th>{{ t('Дата') }}</th>
          <th class="!text-center">{{ t("Actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(model,index) in models" :key="index">
          <td>{{pagination.startIndex+(index+1)}}</td>
          <td>
            <img :src="model.preview_image_path?model.preview_image_path:model.image_path" alt="" width="50px">
          </td>
          <td>{{ model.title_ru }}</td>
          <td>{{ date(model.created_at, 'DD.MM.YYYY HH:mm') }}</td>
          <td>
            <div class="flex gap-3 justify-center">
              <NuxtLink
                :to="`/admin/weekly-events/${model.id}/update`"
                class="text-blue-600"
              >
                <el-tooltip
                  :content="t('Редактировать')"
                  placement="top"
                >
                  <el-icon :size="18"><EditPen /></el-icon>
                </el-tooltip>
              </NuxtLink>
              <a
                href="#"
                class="link text-red-700"
                @click.prevent="deleteModel(model.id)"
              >
              <el-tooltip :content="t('Удалить')" placement="top">
                <el-icon :size="18">
                  <Delete />
                </el-icon>
              </el-tooltip>
              </a>
            </div>
          </td>
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