// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueYoutube from 'vue-youtube'
// import  { mixin } from "./assets/mixin";

Vue.use(VueAxios, axios)
Vue.use(VueYoutube)
// Vue.mixin(mixin)
import store from './assets/store'
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
})

