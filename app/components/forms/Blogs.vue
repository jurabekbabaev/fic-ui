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

      <div class="float-end">
        <a href="#" class="link text-[14px]" @click.prevent="addSubjectModalShow=true">Добавить новую тему</a>
      </div>
      <el-form-item label="Тема" prop="subject_id" :rules="[vRequired()]">
        <el-select v-model="form.subject_id">
          <el-option v-for="(item,index) in subjects" :key="index" :label="item.name_ru" :value="item.id" />
        </el-select>
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

      <el-form-item label="Контент (RU)" prop="content_ru" :rules="[vRequired()]">
        <BaseEditor class="w-full" v-model="form.content_ru" mode="base" />
      </el-form-item>

      <el-form-item label="Контент (UZ)" prop="content_uz" :rules="[vRequired()]">
        <BaseEditor class="w-full" v-model="form.content_uz" mode="base" />
      </el-form-item>

      <el-form-item label="Контент (EN)" prop="content_en" :rules="[vRequired()]">
        <BaseEditor class="w-full" v-model="form.content_en" mode="base" />
      </el-form-item>

      <el-form-item label="Статус" prop="status" :rules="[vRequired()]">
        <el-select v-model="form.status">
          <el-option label="Опубликовать" value="1" />
          <el-option label="Черновик" value="0" />
        </el-select>
      </el-form-item>

      <button class="btn btn-primary w-full">Сохранить</button>

    </el-form>

    <ModalAddBlogSubject :show="addSubjectModalShow" @added="addedSubjects" @closed="addSubjectModalShow=false" />
  </div>
</template>

<script>
import { useBlogsStore } from '@/stores/blogs'
export default {
  data(){
    return {
      addSubjectModalShow: false,
      form: {
        image: "",
        date: "",
        title_uz: "",
        title_ru: "",
        title_en: "",
        subject_id: "",
        content_uz: "",
        content_ru: "",
        content_en: "",
        status: "1",
      }
    }
  },
  computed:{
    store(){
      return useBlogsStore();
    },
    subjects(){
      return this.store.subjects;
    },
    paramId(){
      return this.$route.params['id'];
    }
  },
  created(){
    this.setData();
    this.store.getSubjects();
  },
  methods: {
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.form.id){
            this.store.update(this.form).then(res => {
              this.$router.push("/admin/blogs/list")
            })
          }else{
            this.store.store(this.form).then(res => {
              this.$router.push("/admin/blogs/list")
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
    addedSubjects(res){
      this.store.getSubjects().then(_ => {
        this.form.subject_id = res['id'];
      });
    }
  }
}
</script>