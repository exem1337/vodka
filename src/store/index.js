import { createStore } from "vuex";

export default createStore({
  state: {
    vodkaCount: 1000,
    deficit: false,
    sellingSpeed: 1,
    interval: null,
    vodkaIsComing: false,
    deficitFee: 50,
    proficitFee: 40,
  },
  mutations: {
    procedureSell(state, value) {
      state.vodkaCount -= value;
    },
    reset() {
      this.state.vodkaCount = 1000;
      this.state.deficit = false;
      this.sellingSpeed = 1;
      this.vodkaIsComing = false;
      this.interval = null;
    },
    orderVodka() {
      if (this.state.vodkaCount >= 0) this.state.vodkaCount += 1000;
      else this.state.vodkaCount = 1000;
      this.state.vodkaIsComing = false;
    },
    setProficit() {
      this.state.deficit = false;
    },
    setDificit() {
      this.state.deficit = true;
    },
  },
  actions: {},
  modules: {},
});
