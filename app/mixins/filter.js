export default {
  data() {
    return {
      filter: {},
      filterClone: null,
    };
  },
  computed:{
    queries(){
      return this.$route.query;
    },
    isFiltered(){
      return JSON.stringify(this.filter) != JSON.stringify(this.filterClone);
    }
  },
  created() {
    this.filterClone = {...{}, ...this.filter};
    this.setFilter();
  },
  methods: {
    setFilter(){
      Object.keys(this.filter).forEach(key => {
        if(Array.isArray(this.filter[key]) && this.queries[key] && !Array.isArray(this.queries[key])){
          this.filter[key] = [this.queries[key]];
        }else{
          if(this.queries[key]){
            this.filter[key] = this.queries[key];
          }
        }
      })
    },
    submitFilter(){
      this.filter['page'] = 1;
      this.$router.push({path: this.$route.path, query: this.filter});
    },
    changePage(page){
      this.filter['page'] = page;
      this.$router.push({path: this.$route.path, query: this.filter});
    },
    clearFilter(){
      this.filter = {...{}, ...this.filterClone};
      this.$router.push({path: this.$route.path});
    },
  },
};
