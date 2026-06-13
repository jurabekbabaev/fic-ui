import { defineStore } from 'pinia'
export const useApp = defineStore('app', {
  state: () => ({
  }),
  actions: {
    uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);
      return apiRequest({
        headers: {'Content-Type':'multipart/form-data'},
        url: '/resource/upload-file',
        method: 'post',
        data: formData
      });
    },
  }
})
