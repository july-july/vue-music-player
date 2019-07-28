import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  currentTrack: 17,
  repeatOne: false,
  sound: false,
  startTime: 0,
  random: false

}
const mutations = {
  changeTrack(state, payload) {
    state.currentTrack = payload
  },
  changeRepeatOne (state) {
    state.repeatOne = !state.repeatOne
  },
  changeSound (state, payload) {
    state.sound = payload
  },
  changeStartTime (state, payload) {
    state.startTime = payload
  },
  randomOn (state) {
    state.random = !state.random
  }
}
const getters = {
  'getStartTime': state => state.startTime
}
export default new Vuex.Store({
  state,
  mutations,
})
