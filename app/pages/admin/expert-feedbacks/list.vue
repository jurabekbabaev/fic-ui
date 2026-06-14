<script setup>
import { Delete, Plus, EditPen } from "@element-plus/icons-vue";
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
import { useI18n } from 'vue-i18n'
import { useExpertFeedbacksStore } from '@/stores/expertFeedbacks'
const store = useExpertFeedbacksStore();
const { t } = useI18n()
const models = computed(() => {
  return store.list;
})
const getModels = () => {
  store.getList();
}
const deleteModel = (id) => {
  if(confirm(t("admin.confirm"))){
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
    <h1 class="text-[24px] font-medium">{{ t('admin.expertFeedbacks.list') }}</h1>
    <div>
      <NuxtLink class="btn btn-primary btn-sm" to="/admin/expert-feedbacks/create">{{ t('admin.addNew') }}</NuxtLink>
    </div>
  </div>
  <div class="x-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{ t('admin.photo') }}</th>
          <th>{{ t('admin.videoLink') }}</th>
          <th class="!text-center">{{ t("Actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(model,index) in models" :key="index">
          <td>{{(index+1)}}</td>
          <td>
            <img :src="model.caption_path" alt="" width="50px">
          </td>
          <!-- <td>{{ model.full_name_ru }}</td> -->
          <td>
            <div class="max-w-[500px]">
              <a :href="model.video_source" class="text-blue-600" target="_blank"></a>
              {{ model.video_source }}
            </div>
          </td>
          <td>
            <div class="flex gap-3 justify-center">
              <NuxtLink
                :to="`/admin/expert-feedbacks/${model.id}/update`"
                class="text-blue-600"
              >
                <el-tooltip
                  :content="t('admin.edit')"
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
              <el-tooltip :content="t('admin.delete')" placement="top">
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
  </div>
</template>