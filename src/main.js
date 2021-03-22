// 在webpack中导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入Mint-UI
import MintUI from 'mint-ui'
// 可以省略node_modules
import 'mint-ui/lib/style.css'
// 将MintUI安装到Vue中
Vue.use(MintUI)

import app from './App.vue'
import router from './router.js'



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
