export const useFeedbackStore = defineStore('feedback', {
  state: () => ({ 
    list: [],
    pagination: null,
  }),
  actions: {
    getList(params) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/feedback`,
          method: 'get',
          params
        }).then(res => {
          this.list = res['data'];
          this.pagination = {
            total: res['total'],
            last_page: res['last_page'],
            page: res['current_page'],
            limit: res['per_page'],
            startIndex: ((res['current_page']-1)*res['per_page']),
          }
          resolve(res);
        })
      })
    },
  },
})