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

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

  </div>
</template>

<script>
import { useCouncilMembersStore } from '@/stores/councilMembers'
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
      }
    }
  },
  computed:{
    store(){
      return useCouncilMembersStore();
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
              this.$router.push("/admin/council-members/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/council-members/list")
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