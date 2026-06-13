export const useLoaderStore = defineStore('loader', {
  state: () => ({ 
    loads: 0 
  }),
  getters: {
    LOADS: (state) => state.loads,
  },
  actions: {
    increase() {
      this.loads++;
    },
    decrease() {
      this.loads--;
    },
  },
})