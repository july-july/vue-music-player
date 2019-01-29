import Vue from 'vue'
import axios from '../../node_modules/axios'
import store from './store/index'
import router from '../router'

let util = {};

util.title = function (title) {
  title = title || 'Music App';
  window.document.title = title;
};
const ajaxUrl = "http://e01404e6.ngrok.io/api";

util.ajax = axios.create({
  baseURL: ajaxUrl
});

util.ajax.interceptors.request.use(config => {
  if (store.state.user.token) config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$axios = util.ajax;
util.checkUpdate = (vm) => {
};

export default util;
