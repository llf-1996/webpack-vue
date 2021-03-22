<template>
  <div>
    <div>App组件</div>
    <mt-button type="danger" icon="back">default</mt-button>
    <mt-button type="danger" icon="more">default</mt-button>
    <mt-button type="danger" size="small" plain>default</mt-button>
    <mt-button type="danger" size="large" disabled>default</mt-button>

    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>

</style>