// 在webpack中导入vue
import Vue from 'vue'

import login from './login.vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // render: function (createElements) {
  //   return createElements(login)
  // }
  render: c => c(login)
})
