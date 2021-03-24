// 入口文件
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'
import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
