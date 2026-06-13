<script setup>
import { useApp } from '@/stores/app';
const props = defineProps({
  modelValue: {
    type: [File, null],
    default: null
  },
  accept: {
    type: String,
    default: ""
  },
  oldFullPath:{
    type: String,
    default: ""
  }
})
const emit = defineEmits(['update:modelValue'])
const fileModel = ref(null);
const appStore = useApp();
const filePath = ref("");
const loader = ref(false);
const changeFile = (event) => {
  const file = event.target.files[0];
  loader.value = true;
  appStore.uploadFile(file).then(res => {
    filePath.value = res.full_path;
    emit('update:modelValue', res.path);
  }).finally(_ => {
    loader.value = false;
  })
}
onMounted(() => {
  if(props.oldFullPath){
    filePath.value = props.oldFullPath;
  }
})
</script>

<template>
  <client-only>
    <img v-if="filePath" :src="filePath" alt="" style="max-width: 200px; max-height: 200px;">
    <div class="el-input" v-loading="loader">
      <div class="el-input__wrapper">
        <input class="el-input__inner" type="file" ref="fileModel" @change="changeFile" :accept="accept">
      </div>
    </div>
  </client-only>
</template>