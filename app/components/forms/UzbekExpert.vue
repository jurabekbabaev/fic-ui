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
      <el-form-item label="Фото" prop="image" :rules="paramId?[]:[vRequired()]">
        <BaseUploadFileInput v-model="form.image" :oldFullPath="form.image_path" accept=".png,.jpg,.jpeg" />
      </el-form-item>

      <el-form-item label="Имя (UZ)" prop="full_name_uz" :rules="[vRequired()]">
        <el-input v-model="form.full_name_uz" />
      </el-form-item>

      <el-form-item label="Имя (RU)" prop="full_name_ru" :rules="[vRequired()]">
        <el-input v-model="form.full_name_ru" />
      </el-form-item>

      <el-form-item label="Имя (EN)" prop="full_name_en" :rules="[vRequired()]">
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
      </el-form-item>

      <el-form-item label="Био (UZ)" prop="about_uz" :rules="[vRequired()]">
        <el-input v-model="form.about_uz" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="Био (RU)" prop="about_ru" :rules="[vRequired()]">
        <el-input v-model="form.about_ru" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="Био (EN)" prop="about_en" :rules="[vRequired()]">
        <el-input v-model="form.about_en" type="textarea" rows="3" />
      </el-form-item>

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

  </div>
</template>

<script>
import { useUzbekExpertsStore } from '@/stores/uzbekExperts'
export default {
  data(){
    return {
      form: {
        image: "",
        image_path: "",
        full_name_uz: "",
        full_name_ru: "",
        full_name_en: "",
        position_uz: "",
        position_ru: "",
        position_en: "",
        // email: "",
        // phone: "",
        about_uz: "",
        about_ru: "",
        about_en: "",
      }
    }
  },
  computed:{
    store(){
      return useUzbekExpertsStore();
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
              this.$router.push("/admin/uzbek-experts/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/uzbek-experts/list")
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