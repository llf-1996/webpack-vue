// 在webpack中导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入Mint-UI
// import MintUI from 'mint-ui'
// // 可以省略node_modules
// import 'mint-ui/lib/style.css'
// // 将MintUI安装到Vue中
// Vue.use(MintUI)

// 按需导入mint-ui
import {Button} from 'mint-ui'
Vue.component(Button.name, Button)

// 导入BootStrap
import 'bootstrap/dist/css/bootstrap.css'

import './css/app.css'
import app from './App.vue'
import router from './router.js'

// 导入MUI的样式表
import './lib/mui/css/mui.min.css'


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
