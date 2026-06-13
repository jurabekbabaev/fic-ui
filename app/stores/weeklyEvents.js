export const useWeeklyEventsStore = defineStore('weeklyEvents', {
  state: () => ({ 
    list: [],
    pagination: null,
    loading: false,
  }),
  actions: {
    getList(params) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/weekly-events`,
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
        }).finally(() => {
          this.loading = false;
        })
      })
    },
    appendList(params) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/weekly-events`,
          method: 'get',
          params
        }).then(res => {
          this.list = [...this.list, ...res['data']];
          this.pagination = {
            total: res['total'],
            last_page: res['last_page'],
            page: res['current_page'],
            limit: res['per_page'],
            startIndex: ((res['current_page']-1)*res['per_page']),
          }
          resolve(res);
        }).finally(() => {
          this.loading = false;
        })
      })
    },
    getModel(id) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/weekly-events/${id}`,
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
          url: `/weekly-events`,
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
          url: `/weekly-events/${data['id']}`,
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
          url: `/weekly-events/${id}`,
          method: 'get'
        }).then(res => {
          resolve(res);
        })
      })
    },
    delete(id) {
      return new Promise((resolve, reject) => {
        apiRequest({
          url: `/weekly-events/${id}`,
          method: 'delete'
        }).then(res => {
          resolve(res);
        })
      })
    },
  },
})