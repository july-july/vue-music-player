import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  currentTrack: 0,
  repeatOne: false
}
const mutations = {
  changeTrack(state, payload) {
    state.currentTrack = payload
  },
  setUser(state, user) {
    state.user = user
  },
  changeRepeatOne (state) {
    state.repeatOne = !state.repeatOne
  }
}
export default new Vuex.Store({
  state,
  mutations
})
