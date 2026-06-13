<template>
  <el-upload 
    action="#"
    list-type="picture-card" 
    :auto-upload="false"
    :on-change="handleChange"
    v-model:file-list="fileList"
    :accept="accept"
    :multiple="props.multiple"
    >
    <el-icon><Plus /></el-icon>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <div v-if="acceptText" class="flex-auto text-grey font-medium ms-4">{{ acceptText }}</div>
  <el-dialog v-model="dialogVisible">
    <div class="text-center">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </div>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
import { useApp } from '@/stores/app';
const props = defineProps({
  modelValue: {
    type: [Array, null],
    default: []
  },
  accept: {
    type: String,
    default: ""
  },
  multiple: {
    type: Boolean,
    default: true
  },
  acceptText: {
    type: String,
    default: ""
  }
})
const appStore = useApp();
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const emit = defineEmits(['update:modelValue'])

const handleRemove = (file) => {
  fileList.value = fileList.value.filter(item => {
    return item.uid != file.uid;
  })
  emitFiles();
}
const fileList = ref([]);

onMounted(() => {
  setData()
})
const setData = () => {
  if(props.modelValue && props.modelValue.length){
    if(props.multiple){
      fileList.value = props.modelValue.map(item => {
        return {url: fullPath(item), path: item};
      });
    }else{
      fileList.value = [{url: fullPath(props.modelValue), path: props.modelValue}];
    }
  }
}
const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}


const handleChange = (event) => {
  appStore.uploadFile(event.raw).then(res => {
    if(props.multiple){
      fileList.value = fileList.value.filter(item => {
        return !item.raw;
      })
      fileList.value.push({url: res.full_path, path: res.path});
    }else{
      fileList.value = [{url: res.full_path, path: res.path}];
    }
    emitFiles();
  })
}

const emitFiles = () => {
  if(fileList.value && fileList.value.length){
    if(props.multiple){
      emit('update:modelValue', fileList.value.map(item => {
        return item.path;
      }));
    }else{
      emit('update:modelValue', fileList.value[0].path);
    }
  }else{
    emit('update:modelValue', props.multiple?[]:"");
  }
}

</script>