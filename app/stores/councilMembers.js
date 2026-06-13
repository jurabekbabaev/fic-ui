export const useCouncilMembersStore = defineStore('councilMembers', {
  state: () => ({ 
    list: [],
    pagination: null,
  }),
  actions: {
    async getList(params) {
      const res = await apiRequest({
        url: `/council-members`,
        method: 'get',
        params
      });
      this.list = res;
      // this.pagination = {
      //   total: res['total'],
      //   last_page: res['last_page'],
      //   page: res['current_page'],
      //   limit: res['per_page'],
      //   startIndex: ((res['current_page']-1)*res['per_page']),
      // }
      return res;
    },
    getModel(id) {
      return apiRequest({
        url: `/council-members/${id}`,
        method: 'get'
      });
    },
    store(data) {
      return apiRequest({
        url: `/council-members`,
        method: 'post',
        data
      });
    },
    update(data) {
      return apiRequest({
        url: `/council-members/${data['id']}`,
        method: 'put',
        data
      });
    },
    show(id) {
      return apiRequest({
        url: `/council-members/${id}`,
        method: 'get'
      });
    },
    delete(id) {
      return apiRequest({
        url: `/council-members/${id}`,
        method: 'delete'
      });
    },
  },
})
