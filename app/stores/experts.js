export const useExpertsStore = defineStore('experts', {
  state: () => ({ 
    list: [],
    pagination: null,
  }),
  actions: {
    getList(params) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/experts`,
          method: 'get',
          params
        }).then(res => {
          this.list = res;
          // this.pagination = {
          //   total: res['total'],
          //   last_page: res['last_page'],
          //   page: res['current_page'],
          //   limit: res['per_page'],
          //   startIndex: ((res['current_page']-1)*res['per_page']),
          // }
          resolve(res);
        })
      })
    },
    getModel(id) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/experts/${id}`,
          method: 'get'
        }).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    },
    store(data) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/experts`,
          method: 'post',
          data
        }).then(res => {
          resolve(res);
        })
      })
    },
    update(data) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/experts/${data['id']}`,
          method: 'put',
          data
        }).then(res => {
          resolve(res);
        })
      })
    },
    show(id) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/experts/${id}`,
          method: 'get'
        }).then(res => {
          resolve(res);
        })
      })
    },
    delete(id) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/experts/${id}`,
          method: 'delete'
        }).then(res => {
          resolve(res);
        })
      })
    },
  },
})