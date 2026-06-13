<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
</script>
<template>
  <div style="max-width: 800px; margin: 0 auto;">
    <el-form
      v-if="(paramId && form.id) || !paramId"
      :model="form"
      label-position="top"
      ref="form"
      @submit.prevent="submit"
    >
    
      <el-form-item label="Изображение превью" prop="preview_image" :rules="paramId?[]:[vRequired()]">
        <BaseUploadFileInput v-model="form.preview_image" :oldFullPath="form.preview_image_path" accept=".png,.jpg,.jpeg" />
      </el-form-item>
    
      <el-form-item label="Баннер" prop="image" :rules="paramId?[]:[vRequired()]">
        <BaseUploadFileInput v-model="form.image" :oldFullPath="form.image_path" accept=".png,.jpg,.jpeg" />
      </el-form-item>

      <el-form-item label="Даты" prop="dates" :rules="[vRequired()]">
        <el-date-picker
          v-model="form.dates"
          type="daterange"
          format="DD.MM.YYYY"
          value-format="YYYY-MM-DD"
          placeholder="Pick a day"
        />
      </el-form-item>

      <el-form-item label="Заголовок (RU)" prop="title_ru" :rules="[vRequired()]">
        <el-input v-model="form.title_ru" />
      </el-form-item>

      <el-form-item label="Заголовок (UZ)" prop="title_uz" :rules="[vRequired()]">
        <el-input v-model="form.title_uz" />
      </el-form-item>

      <el-form-item label="Заголовок (EN)" prop="title_en" :rules="[vRequired()]">
        <el-input v-model="form.title_en" />
      </el-form-item>

      <el-form-item label="Контент (RU)" prop="content_ru" :rules="[vRequired()]">
        <BaseEditor class="w-full" v-model="form.content_ru" mode="base" />
      </el-form-item>

      <el-form-item label="Контент (UZ)" prop="content_uz" :rules="[vRequired()]">
        <BaseEditor class="w-full" v-model="form.content_uz" mode="base" />
      </el-form-item>

      <el-form-item label="Контент (EN)" prop="content_en" :rules="[vRequired()]">
        <BaseEditor class="w-full" v-model="form.content_en" mode="base" />
      </el-form-item>

      <el-form-item label="Галерея" prop="gallery" :rules="[vRequired()]">
        <BaseUploadImages v-model="form.gallery" accept=".png,.jpg,.jpeg" />
      </el-form-item>

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

  </div>
</template>

<script>
import { useWeeklyEventsStore } from '@/stores/weeklyEvents'
export default {
  data(){
    return {
      form: {
        preview_image: "",
        image: "",
        dates: [],
        title_uz: "",
        title_ru: "",
        title_en: "",
        content_uz: "",
        content_ru: "",
        content_en: "",
        gallery: [],
      }
    }
  },
  computed:{
    store(){
      return useWeeklyEventsStore();
    },
    paramId(){
      return this.$route.params['id'];
    }
  },
  created(){
    this.setData();
  },
  methods: {
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.form.id){
            this.store.update(this.form).then(res => {
              this.$router.push("/admin/weekly-events/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/weekly-events/list")
            })
          }
        }
      });
    },
    setData(){
      if(this.paramId){
        this.store.show(this.paramId).then(res => {
          this.form = {...this.form, ...res}
        })
      }
    },
  }
}
</script>