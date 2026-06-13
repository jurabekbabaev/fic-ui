<script setup>
import { Delete, Plus, EditPen } from "@element-plus/icons-vue";
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
import { useI18n } from "vue-i18n";
import { useUzbekExpertsStore } from "@/stores/uzbekExperts";
const store = useUzbekExpertsStore();
const { t } = useI18n();
const models = computed(() => {
  return store.list;
});
const getModels = () => {
  store.getList();
};
const deleteModel = (id) => {
  if (confirm(t("Вы уверены?"))) {
    store.delete(id).then((res) => {
      getModels();
    });
  }
};
onMounted(() => {
  getModels();
});
</script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-[24px] font-medium">{{ t("Узбекская сторона") }}</h1>
    <div>
      <NuxtLink
        class="btn btn-primary btn-sm"
        to="/admin/uzbek-experts/create"
        >{{ t("Добавить новую") }}</NuxtLink
      >
    </div>
  </div>
  <div class="x-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{ t("Фото") }}</th>
          <th>{{ t("Имя") }}</th>
          <th>{{ t("Должность") }}</th>
          <th class="!text-center">{{ t("Actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(model, index) in models" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <img :src="model.image_path" alt="" width="50px" />
          </td>
          <td>{{ model.full_name_ru }}</td>
          <td>
            <div class="max-w-[500px]">{{ model.position_ru }}</div>
          </td>
          <td>
            <div class="flex gap-3 justify-center">
              <NuxtLink
                :to="`/admin/uzbek-experts/${model.id}/update`"
                class="text-blue-600"
              >
                <el-tooltip :content="t('Редактировать')" placement="top">
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
  </div>
</template>
