<script setup>
import { useI18n } from 'vue-i18n'
definePageMeta({
  layout: 'empty'
})
const { t } = useI18n()
</script>
<template>
  <div class="authPage">
    <div class="authPageContainer">
      <div class="authPageForm">
        <h1 class="text-center text-[24px]">{{ t('auth.login.heading') }}</h1>
        <el-form
          ref="form"
          :model="form"
          label-position="top"
          @submit.prevent="submit"
        >
          <el-form-item :label="t('auth.login.username')" prop="username" :rules="[vRequired()]">
            <el-input
              v-model="form.username"
              size="large"
            />
          </el-form-item>

          <el-form-item :label="t('auth.login.password')" prop="password" :rules="[vRequired()]">
            <el-input
              v-model="form.password"
              type="password"
              size="large"
            />
          </el-form-item>

          <div class="w-full">
            <button class="btn btn-primary w-full">{{ t('auth.login.submit') }}</button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {useAuthStore} from '@/stores/auth'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  computed: {
    authStore(){
      return useAuthStore();
    },
  },
  methods: {
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.authStore.login(this.form).then(res => {
            this.authStore.getCurrentUser().then(res => {
              this.$router.push("/admin/blogs/list");
            })
          })
        }
      })
    },
  }
}
</script>

<style scoped>
.authPage{
  display: flex;
  padding: 50px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
.authPageContainer{
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  min-width: 400px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}
</style>
