import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  currentTrack: 0,
}
const mutations = {
  changeTrack(state, payload) {
    state.currentTrack = payload
  },
  setUser(state, user) {
    state.user = user
  }
}
export default new Vuex.Store({
  state,
  mutations
})
