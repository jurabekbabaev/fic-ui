export const useAuthStore = defineStore('auth', {
  state: () => ({ 
    user: null,
    is_auth: false,
    showMobNav: false,
  }),
  getters: {
    USER: (state) => state.user,
    IS_AUTH: (state) => state.is_auth,
    SHOW_MOB_NAV: (state) => state.showMobNav,
  },
  actions: {
    toggleMobNav(){
      this.showMobNav = !this.showMobNav;
    },
    hideMobNav(){
      this.showMobNav = false;
    },
    async getCurrentUser() {
      const res = await apiRequest({
        url: `/auth/get-info`,
        method: 'get',
      });
      this.user = res;
      this.is_auth = true;
      return res;
    },
    async login(data) {
      const res = await apiRequest({
        url: `/auth/login`,
        method: 'post',
        data
      });
      const token = useCookie('access_token');
      token.value = res['access_token'];
      return res;
    },
    async logout() {
      const res = await apiRequest({
        url: `/auth/logout`,
        method: 'post'
      });
      const token = useCookie('access_token');
      token.value = null;
      this.user = null;
      return res;
    },
  },
})