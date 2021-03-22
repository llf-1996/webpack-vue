// 在webpack中导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import router from './router.js'


Vue.use(VueRouter)

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // render: function (createElements) {
  //   return createElements(login)
  // }
  render: c => c(app),
  router
})
