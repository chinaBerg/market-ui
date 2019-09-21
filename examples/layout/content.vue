<template>
  <div class="main-container">
    <nav-slide />
    <div class="main-content">
      <router-view />
      <main-footer />
    </div>
  </div>
</template>

<script>
import NavSlide from './nav-slide'
import MainFooter from './footer'

export default {
  name: 'DemoContent',
  components: {
    NavSlide,
    MainFooter
  }
}
</script>

<style lang="less" scoped>
.main-container {
  background: #fff;
  .main-content {
    padding: 100px 20px 0 220px;
  }
}
</style>
