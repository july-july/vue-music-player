import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  currentTrack: 0
}
const mutations = {
  changeTrack(state, payload) {
    state.currentTrack = payload
  }
}
export default new Vuex.Store({
  state,
  mutations
})
