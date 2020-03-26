<template>
  <div class="main-container docs-scroller">
    <nav class="docs__nav-wrap">
      <router-link class="docs__logo" to="/">
        <img src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/logo.png" alt="">
      </router-link>
      <nav-slide class="docs__nav" />
    </nav>
    <section class="docs__content">
      <router-view />
      <doc-footer />
    </section>
  </div>
</template>

<script>
import NavSlide from './nav-slide';
import DocFooter from './footer';


export default {
  name: 'DemoContent',
  components: {
    NavSlide,
    DocFooter,
  },
};
</script>

<style lang="less">
.main-container {
  padding: 26px 40px 0 340px;
  .docs__nav-wrap {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    box-shadow: 0 0 6px #dcdee2;
    .docs__logo {
      width: 100%;
      height: 90px;
      padding: 0 10px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .docs__nav {
      flex: 1;
    }
  }

  .docs__content {
    min-height: 100%;
    background: #fff;
  }

  .market-doc-container {
    > h1, > h2, > h3, > h4, > h5, > h6 {
      font-weight: 400;
      margin: 12px 0;
    }
    > h2 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    > h3 {
      margin: 40px 0 0;
      font-size: 22px;
    }

    > table {
      width: 100%;
      margin-top: 20px;
      border: 1px solid #EBEEF5;
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      background: #fff;
      th, td {
        padding: 10px;
        border: 1px solid #EBEEF5;
        font-size: 14px;
        font-weight: normal;
        font-family: Consolas,Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      }
      th {
        font-weight: bold;
        background: #fafafa;
      }
    }
    > p {
      margin-top: 10px;
    }
    > pre {
      margin-top: 20px;
      padding: 20px 10px;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      background: #fafafa;
      font-family: Consolas,Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      code {
        font-size: 14px;
        font-weight: normal;
        font-family: Consolas,Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        background: transparent;
      }
    }
  }
}
</style>
