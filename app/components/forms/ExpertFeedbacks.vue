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
      <el-form-item label="Фото" prop="caption" :rules="paramId?[]:[vRequired()]">
        <BaseUploadFileInput v-model="form.caption" :oldFullPath="form.caption_path" accept=".png,.jpg,.jpeg" />
      </el-form-item>

      <!-- <el-form-item label="Имя" prop="full_name_uz" :rules="[vRequired()]">
        <el-input v-model="form.full_name" />
      </el-form-item>

      <el-form-item label="Должность" prop="position" :rules="[vRequired()]">
        <el-input v-model="form.position" />
      </el-form-item> -->

      <el-form-item label="Видео линк" prop="video_source" >
        <el-input v-model="form.video_source" />
      </el-form-item>

      <!-- <el-form-item label="Имя (EN)" prop="full_name_en" :rules="[vRequired()]">
        <el-input v-model="form.full_name_en" />
      </el-form-item>

      <el-form-item label="Должность (UZ)" prop="position_uz" :rules="[vRequired()]">
        <el-input v-model="form.position_uz" />
      </el-form-item>

      <el-form-item label="Должность (RU)" prop="position_ru" :rules="[vRequired()]">
        <el-input v-model="form.position_ru" />
      </el-form-item>

      <el-form-item label="Должность (EN)" prop="position_en" :rules="[vRequired()]">
        <el-input v-model="form.position_en" />
      </el-form-item> -->

      <!-- <el-form-item label="Статус" prop="status" :rules="[vRequired()]">
        <el-select v-model="form.status">
          <el-option label="Опубликовать" value="1" />
          <el-option label="Черновик" value="0" />
        </el-select>
      </el-form-item> -->

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

  </div>
</template>

<script>
import { useExpertFeedbacksStore } from '@/stores/expertFeedbacks'
export default {
  data(){
    return {
      form: {
        caption: "",
        // full_name: "",
        // position: "",
        video_source: "",
        // logo: "",

        // full_name_uz: "",
        // full_name_ru: "",
        // full_name_en: "",
        // position_uz: "",
        // position_ru: "",
        // position_en: "",
        status: 1,
      }
    }
  },
  computed:{
    store(){
      return useExpertFeedbacksStore();
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
              this.$router.push("/admin/expert-feedbacks/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/expert-feedbacks/list")
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