<template>
  <div class="main-container">
    <div class="main__head">
      <div class="main__head-logo">
        <div class="main__head-image"></div>
        <h3 class="main__head-title">Market-Ui</h3>
        <p class="main__head-desc">灵活与艺术的组件库</p>
      </div>
      <div class="main__head-right">
        <ul class="main__head-nav">
          <li class="main__head-nav-item">
            <router-link to="">快速开始</router-link>
          </li>
          <li class="main__head-nav-item">
            <router-link to="">组件</router-link>
          </li>
          <li class="main__head-nav-item">
            <router-link to="">资源</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main__content-container">
      <div class="main__nav-container">
        <nav-slide />
      </div>
      <div class="main_content">
        <router-view />
      </div>
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
  position: fixed;
  left: 10px;
  top: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;

  /* 头部 */
  .main__head {
    display: flex;
    flex-direction: row;
    height: 120px;
    background: #478efa;
    .main__head-logo {
      width: 300px;
      height: 100%;
      padding: 0 30px;
      .main__head-image {
        height: 60px;
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
    .main__head-right {
      flex: 1;
      height: 70px;
      .main__head-nav {
        display: flex;
        align-items: center;
        height: 70px;
        padding: 0 30px;
        font-size: 16px;
      }
      .main__head-nav-item {
        margin-right: 20px;
        a {
          color: #fff;
        }
      }
    }
  }

  /* 主体 */
  .main__content-container {
    position: relative;
    flex: 1;
    background: #f8f9f9;
    /* 左侧菜单 */
    .main__nav-container {
      position: absolute;
      left: 30px;
      top: 20px;
      bottom: 20px;
      width: 240px;
      overflow-x: hidden;
      overflow-y: auto;
      background: #fff;
      border-radius: 10px;
    }
    /* 右侧主体*/
    .main_content {
      position: absolute;
      top: -50px;
      left: 300px;
      right: 30px;
      bottom: 20px;
      padding: 30px;
      border-radius: 30px;
      background: #fff;
      box-shadow: 0 9px 7px #e8eef5;
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
    code {
      display: inline-block;
      margin: 0 4px;
      padding: 0 4px;
      border-radius: 2px;
      background: #EBEEF5;
    }
  }
}
</style>
