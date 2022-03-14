import { createStore } from "vuex";

export default createStore({
  state: {
    vodkaCount: 0,
    deficit: false,
    sellingSpeed: 1,
    interval: null,
    vodkaIsComing: false,
  },
  mutations: {
    procedureSell(state, value) {
      state.vodkaCount -= value;
    },
    reset() {
      this.state.vodkaCount = 100;
      this.state.deficit = false;
      this.sellingSpeed = 1;
      this.vodkaIsComing = false;
      this.interval = null;
    },
    orderVodka() {
      this.state.vodkaCount += 100;
      this.state.vodkaIsComing = false;
    },
  },
  actions: {},
  modules: {},
});
