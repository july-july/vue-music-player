import Vue from 'vue'
import Router from 'vue-router'
import musicComponent from '../components/musicComponent'
import Auth from '../components/login/AuthComponent'
import Profile from '../components/user/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: musicComponent},
    {path: "/login", component: Auth},
    {path: "/profile", component: Profile}
  ]
})


