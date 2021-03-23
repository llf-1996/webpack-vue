<template>
  <div>
    <div>App组件</div>
    <mt-button type="danger" icon="back" @click="show">点我</mt-button>
    <mt-button type="danger" icon="more">default</mt-button>
    <mt-button type="danger" size="small" plain>default</mt-button>
    <mt-button type="danger" size="large" disabled>default</mt-button>

    <button type="button" class="mui-btn mui-btn-royal">紫色</button>

    <br><br>
    <hr>
    <div>
      <router-link to="/account">Account</router-link>
      <router-link to="/goodslist">Goodslist</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  // 按需导入Toast
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {
        toastInstanse: null
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        this.show();
        setTimeout(() => {
          this.toastInstanse.close()
        }, 3000)
      },
      show() {
        // Toast('提示信息')
        this.toastInstanse = Toast({
          message: '消息',
          // 显示时间，单位毫秒
          duration: -1,
          position: 'top',
          iconClass: 'glyphicon glyphicon-heart',
          className: 'mytoast'
        });
      }
    }
  }
</script>

<style>

</style>