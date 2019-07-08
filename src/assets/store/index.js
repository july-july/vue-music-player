import Vue from 'vue';
import Vuex from 'vuex';
import data from '../../api/data'

Vue.use(Vuex);
const state = {
  currentTrack: 0,
  repeatOne: false,
  sound: false,
  tracks: data

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
  changeSound (state) {
    state.sound = !state.sound
  }
}

export default new Vuex.Store({
  state,
  mutations,
})
