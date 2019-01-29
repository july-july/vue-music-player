import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './assets/store'
import VueYoutube from 'vue-youtube'
import VueRouter from 'vue-router'
import router from './router'
import util from './assets/util'

Vue.use(VueAxios, axios)
Vue.use(VueYoutube)
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
  created(){
    util.checkUpdate()
  }

})

