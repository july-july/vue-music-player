import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/IndexComponent'
import Auth from '../components/login/AuthComponent'
import Profile from '../components/user/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: "/profile", component: Profile}
  ]
})


