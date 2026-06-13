<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from "vue";
import MapImage from '@/assets/images/map.png'

const form = ref({
  surname: "",
  lastname: "",
  phonenumber: "",
  email: "",
  details: "",
});

const loading = ref(false);
const status  = ref(''); // 'success' | 'error' | ''

async function sendForm() {
  if (loading.value) return;
  loading.value = true;
  status.value  = '';

  try {
    const res = await fetch('https://6935988eacba7.xvest1.ru/fic_bot_test/send.php', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: form.value.surname,
        last_name:  form.value.lastname,
        phone:      form.value.phonenumber,
        email:      form.value.email,
        message:    form.value.details,
      }),
    });

    const data = await res.json();

    if (data.success) {
      status.value = 'success';
      form.value = { surname: '', lastname: '', phonenumber: '', email: '', details: '' };
    } else {
      status.value = 'error';
    }
  } catch {
    status.value = 'error';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <client-only>
      <div class="container">
        <h1
          class="lg:text-[64px] text-[32px] uppercase font-black lg:text-center sm:text-left mt-[100px] mb-14"
        >
          {{ t('Контакты') }}
        </h1>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-20">
          <div class="mb-10">
            <el-form :model="form" @submit.prevent="sendForm">
              <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 ">
                <el-form-item>
                  <label>{{ t('Имя') }}</label>
                  <el-input
                    v-model="form.surname"
                    :placeholder="t('Ваша имя')"
                    size="large"
                  />
                </el-form-item>
                <el-form-item>
                  <label>{{ t('Фамилия') }}</label>
                  <el-input
                    v-model="form.lastname"
                    :placeholder="t('Ваша фамилия')"
                    size="large"
                  />
                </el-form-item>
              </div>
              <el-form-item class="mb-6">
                <label>{{ t('Телефон номер') }}</label>
                <el-input
                  v-model="form.phonenumber"
                  placeholder="+998 99 999 99 99"
                  size="large"
                />
              </el-form-item>
              <el-form-item class="mb-6">
                <label>{{ t('Электронная почта') }}</label>
                <el-input
                  v-model="form.email"
                  placeholder="example@gmail.com"
                  size="large"
                />
              </el-form-item>
              <el-form-item class="mb-6">
                <label>{{ t('Сообщения') }}</label>
                <el-input
                  v-model="form.details"
                  :rows="4"
                  type="textarea"
                  :placeholder="t('Пожалуйста, расскажите нам, что вы думаете. У вас есть к нам вопрос? Задайте его')"
                />
              </el-form-item>
              <div v-if="status === 'success'" class="mb-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm">
                {{ t('Xabaringiz yuborildi!') }}
              </div>
              <div v-if="status === 'error'" class="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                {{ t('Xatolik yuz berdi. Qayta urinib ko\'ring.') }}
              </div>
              <div class="w-full">
                <button
                  type="submit"
                  class="btn btn-primary w-full"
                  :disabled="loading"
                  @click="sendForm"
                >
                  {{ loading ? '...' : t('Отправить') }}
                </button>
              </div>
            </el-form>
          </div>
          <div class="sm:mt-10">
            <div class="mb-4">
              <label class="text-[#9094A2] text-base font-normal">{{ t('Телефон номер') }}</label>
              <div class="lg:text-2xl text-2xl text-[#191C1F] font-normal">+998 88 099 88 88</div>
            </div>
            <div class="mb-4">
              <label class="text-[#9094A2] text-base font-normal">{{ t('Электронная почта') }}</label>
              <div class="lg:text-2xl text-2xl text-[#191C1F] font-normal">secretariat@fics.uz</div>
            </div>
            <div class="mb-4">
              <label class="text-[#9094A2] text-base font-normal">{{ t('Адресс') }}</label>
              <div class="lg:text-2xl text-2xl text-[#191C1F] font-normal">BoMI Finance Center, 100135, Tashkent</div>
            </div>
            <div class="mb-4 flex gap-2">
              <a href="https://t.me/fic_uz" target="_blank" class="btn-social-icon btn-social-icon--dark btn-social-icon--lg">
                <i class="icon-telegram"></i>
              </a>
              <a href="https://www.facebook.com/fics.uz" target="_blank" class="btn-social-icon btn-social-icon--dark btn-social-icon--lg">
                <i class="icon-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/ficsuz" target="_blank" class="btn-social-icon btn-social-icon--dark btn-social-icon--lg">
                <i class="icon-linkedin"></i>
              </a>
            </div>
            <div class="mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8519078768372!2d69.2427285762434!3d41.31208517130959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b478a111e81%3A0xf63fdb37cbe1bd7d!2sBomi%20Finance%20Center!5e0!3m2!1sen!2s!4v1774329944788!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
:deep(.el-input__wrapper) {
  border-radius: 30px;
  padding: 8px 16px;
}

:deep(.el-input__inner) {
  color: #9094A2;
}
</style>
