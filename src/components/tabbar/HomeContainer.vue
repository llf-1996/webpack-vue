<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'

  export default {
    data () {
      return {
        lunbotuList: []
      }
    },
    created(){
      this.getLunbotu()
    },
    methods: {
      getLunbotu(){
        this.$http.get('http://127.0.0.1/api/getlunbo')
        .then(res=>{
          // console.log(res.body)
          if (res.body.status === 0) {
            this.lunbotuList = res.body.message
          } else {
            Toast('加载轮播图失败...')
          }
        })
        .catch(err=>{
          Toast('请求轮播图失败...')
          this.lunbotuList = [
            {
              id: 1,
              img: ''
            },
            {
              id: 2,
              img: ''
            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: blue;
      }
      &:nth-child(3) {
        background-color: cyan;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
