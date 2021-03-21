// 在webpack中导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import account from './main/Account.vue'
import goodlist from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'


Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    // accout goodslist
    {
      path: '/account',
      component: account,
      children: [
        {path: 'login', component: login},
        {path: 'register', component: register},
      ]
    },
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
