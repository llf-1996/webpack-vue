// 在webpack中导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './login.vue'
import app from './App.vue'
import account from './Account.vue'
import goodlist from './GoodsList.vue'


Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
      // accout goodslist
    {path: '/account', component: account},
    {path: '/goodslist', component: goodlist},

  ]
})

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
