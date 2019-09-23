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
  background: #f0f2f5;
  .main-content {
    padding: 80px 40px 20px 240px;
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
    > table {
      width: 100%;
      border: 1px solid #EBEEF5;
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      background: #fff;
      th, td {
        border: 1px solid #EBEEF5;
      }
      th {
        padding: 10px;
        font-weight: normal;
        background: #fafafa;
      }
      td {
        padding: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
