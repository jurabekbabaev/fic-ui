<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const filter = ref({
  subject_id: null,
  year: null,
});
</script>
<template>
  <div>
    <div class="container">
      <h1
        class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
      >
        {{ t('Аналитика и статьи') }}
      </h1>

      <div class="filters justify-center mb-5">
        <div class="filter-field">
          <el-select clearable v-model="filter.subject_id" :placeholder="t('Все темы')">
          </el-select>
        </div>
        <div class="filter-field">
          <el-select clearable v-model="filter.year" :placeholder="t('Все годы')">
            <el-option label="2025" value="2025" />
            <el-option label="2024" value="2024" />
          </el-select>
        </div>
      </div>
      
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div class="mb-4 rounded-bl-xl rounded-br-xl" style="background: rgb(247, 247, 247);">
          <div class="card-item cursor-pointer">
            <div class="card-item-image"></div>
            <div class="card-item-body">
              <div class="font-medium text-grey mb-1">
                <!-- subject name -->
              </div>
              <div class="font-medium mb-2 lg:text-[32px] text-xl leading-normal">
                <!-- title -->
              </div>
              <div><!-- date --></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style></style>
