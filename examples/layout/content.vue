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

<style lang="less">
.main-container {
  background: #fff;
  .main-content {
    padding: 80px 40px 0 240px;
  }
  .market-doc-container {
    > h1, > h2, > h3, > h4, > h5, > h6 {
      font-weight: 400;
      margin: 12px 0;
    }
    > h1 {
      font-size: 26px;
    }
    > h2 {
      font-size: 20px;
    }
    > h3 {
      font-size: 18px;
    }
    > h4 {
      font-size: 16px;
    }
    > h5 {
      font-size: 14px;
    }
    > h6 {
      font-size: 12px;
    }
  }
}
</style>
