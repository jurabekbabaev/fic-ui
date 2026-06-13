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
      <el-form-item label="Картинка" prop="image" :rules="paramId?[]:[vRequired()]">
        <BaseUploadFileInput v-model="form.image" :oldFullPath="form.image_path" accept=".png,.jpg,.jpeg" />
      </el-form-item>

      <el-form-item label="Дата" prop="date" :rules="[vRequired()]">
        <BaseDatePicker v-model="form.date" />
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

      <el-form-item label="Ссылка на инстаграм" prop="other_link" :rules="[vRequired()]">
        <el-input v-model="form.other_link" />
      </el-form-item>

      <el-form-item label="Статус" prop="status" :rules="[vRequired()]">
        <el-select v-model="form.status">
          <el-option label="Опубликовать" value="1" />
          <el-option label="Черновик" value="0" />
        </el-select>
      </el-form-item>

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

  </div>
</template>

<script>
import { useNewsStore } from '@/stores/news'
export default {
  data(){
    return {
      form: {
        image: "",
        date: "",
        title_uz: "",
        title_ru: "",
        title_en: "",
        other_link: "",
        status: "1",
      }
    }
  },
  computed:{
    store(){
      return useNewsStore();
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
              this.$router.push("/admin/news/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/news/list")
            })
          }
        }
      });
    },
    setData(){
      if(this.paramId){
        this.store.show(this.paramId).then(res => {
          res['status'] = String(res['status']);
          this.form = {...this.form, ...res}
        })
      }
    },
  }
}
</script>