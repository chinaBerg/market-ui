<template>
  <div class="main-container">
    <div class="main__head">
      <div class="main__head-logo">
        <router-link class="main__head-image" to="/">
          <img src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/logo.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="main__content-container">
      <div class="main__nav-container docs-scroller">
        <nav-slide />
      </div>
      <div class="main_content docs-scroller">
        <transition name="doc-page-toogle">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import NavSlide from './nav-slide';

export default {
  name: 'DemoContent',
  components: {
    NavSlide,
  },
};
</script>

<style lang="less">
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: #fff;

  /* 头部 */
  .main__head {
    display: flex;
    flex-direction: row;
    height: 120px;
    background: #478efa;
    .main__head-logo {
      display: flex;
      align-items: center;
      width: 240px;
      height: 100%;
      padding: 0 10px;
      .main__head-image {
        width: 240px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .main__head-title {
        margin-bottom: 10px;
        font-size: 20px;
        color: #fff;
      }
      .main__head-desc {
        color: #fff;
      }
    }
  }

  /* 主体 */
  .main__content-container {
    position: relative;
    flex: 1;
    background: #f2f2f2;
    /* 左侧菜单 */
    .main__nav-container {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 240px;
      overflow-x: hidden;
      overflow-y: auto;
      background: #fff;
      box-shadow: 0 0 0 1px #e8e8e8;
    }
    /* 右侧主体*/
    .main_content {
      position: absolute;
      top: -120px;
      left: 240px;
      right: 0;
      bottom: 0;
      padding: 10px 30px 20px;
      background: #fff;
      overflow-x: hidden;
      overflow-y: auto;
    }
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
      margin: 10px 0 40px;
      font-size: 24px;
      font-weight: 700;
    }
    > h3 {
      margin: 10px 0 20px;
      font-size: 22px;
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
      margin-bottom: 30px;
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
    code {
      display: inline-block;
      margin: 0 4px;
      padding: 2px 4px;
      font-family: miscrosoft yahei;
      border-radius: 2px;
      background: #ececec;
      font-weight: bold;
    }
    > p {
      margin: 10px 0;
    }
    > pre {
      padding: 20px 10px;
      margin: 10px 0;
      border-radius: 10px;
      background: #e0f3fe;
      code {
        background: transparent;
        font-weight: normal;
      }
    }
  }
}
.doc-page-toogle-enter-active {
  transition: all .4s linear;
}
.doc-page-toogle-leave-active {
  transition: all .4s linear;
}
.doc-page-toogle-enter,
.doc-page-toogle-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
