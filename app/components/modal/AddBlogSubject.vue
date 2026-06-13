<template>
  <el-dialog
    v-model="outerVisible"
    title="Добавить тему"
    append-to-body
    width="500px">

    <el-form
      ref="form"
      :model="form"
      label-position="top"
      @submit.prevent.native="submit"
    >

      <el-form-item label="Название RU" prop="name_ru" :rules="[vRequired()]">
        <el-input v-model="form.name_ru" />
      </el-form-item>

      <el-form-item label="Название UZ" prop="name_uz" :rules="[vRequired()]">
        <el-input v-model="form.name_uz" />
      </el-form-item>

      <el-form-item label="Название EN" prop="name_en" :rules="[vRequired()]">
        <el-input v-model="form.name_en" />
      </el-form-item>

      <div class="text-center">
        <button class="btn btn-primary w-full" type="submit">Добавить</button>
      </div>
      
    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from '@/mixins/modals';
import { useBlogsStore } from '@/stores/blogs'
export default {
  mixins: [modals],
  data() {
    return {
      form: {
        name_ru: "",
        name_uz: "",
        name_en: "",
      }
    }
  },
  computed: {
    store(){
      return useBlogsStore()
    }
  },
  mounted() {
  },
  methods: {
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.store.createSubject(this.form).then(res => {
            this.$emit('added', res);
            this.close();
          })
        }
      })
    }
  },
}
</script>