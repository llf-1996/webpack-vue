import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodlist from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'


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

export default router
