// 在webpack中导入vue
import Vue from '../node_modules/vue/dist/vue.js'

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  }
})
