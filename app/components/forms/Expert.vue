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
      <el-form-item label="Фото" prop="photo" :rules="paramId?[]:[vRequired()]">
        <BaseUploadFileInput v-model="form.photo" :oldFullPath="form.photo_path" accept=".png,.jpg,.jpeg" />
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

      <!-- <el-form-item label="E-mail" prop="email" :rules="[vRequired()]">
        <el-input type="email" v-model="form.email" />
      </el-form-item>

      <el-form-item label="Телефон" prop="phone" :rules="[vRequired()]">
        <el-input type="tel" v-model="form.phone" />
      </el-form-item> -->

      <el-form-item label="Био (UZ)" prop="bio_uz" :rules="[vRequired()]">
        <el-input v-model="form.bio_uz" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="Био (RU)" prop="bio_ru" :rules="[vRequired()]">
        <el-input v-model="form.bio_ru" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="Био (EN)" prop="bio_en" :rules="[vRequired()]">
        <el-input v-model="form.bio_en" type="textarea" rows="3" />
      </el-form-item>

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

  </div>
</template>

<script>
import { useExpertsStore } from '@/stores/experts'
export default {
  data(){
    return {
      form: {
        photo: "",
        full_name_uz: "",
        full_name_ru: "",
        full_name_en: "",
        position_uz: "",
        position_ru: "",
        position_en: "",
        // email: "",
        // phone: "",
        bio_uz: "",
        bio_ru: "",
        bio_en: "",
      }
    }
  },
  computed:{
    store(){
      return useExpertsStore();
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
              this.$router.push("/admin/experts/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/experts/list")
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