<template>
  <div>
    <div>login组件====={{msg}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '123'
    }
  },
  methods: {
    show () {
      console.log('login.vue的show方法')
    }
  }
}
</script>

<style>

</style>
