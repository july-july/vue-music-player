import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  currentTrack: 7,
  repeatOne: false,
  sound: false,
  startTime: 0

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
  },
  changeSound (state, payload) {
    state.sound = payload
  },
  changeStartTime (state, payload) {
    state.startTime = payload
  }
}
const getters = {
  'getStartTime': state => state.startTime
}
export default new Vuex.Store({
  state,
  mutations,
})
