<template>
  <div class="footer-container">
    <div class="footer__links">
      <p><a href="https://github.com/chinaBerg/market-ui">Github</a></p>
      <p><a href="https://www.npmjs.com/package/market-ui">Npm地址</a></p>
      <p><a href="https://juejin.im/user/58ae78da8d6d8100584bc207/posts">作者博客</a></p>
      <p><a href="https://cn.vuejs.org/">Vue</a></p>
      <p><a href="https://router.vuejs.org/zh/">Vue-Router</a></p>
      <p><a href="https://vuex.vuejs.org/zh/">Vuex</a></p>
    </div>
    <div class="footer__item">
      <p class="footer__title">微信公众号</p>
      <div class="footer__qrcode" style="width: 240px">
        <img src="../assets/images/qrcode-lc.jpg" alt="">
      </div>
    </div>
    <div class="footer__item">
      <p class="footer__title">微信交流群</p>
      <div class="footer__qrcode" style="width: 240px">
        <img src="../assets/images/qun-wechat.jpeg" alt="">
      </div>
    </div>
    <div class="footer__item">
      <p class="footer__title">QQ交流群</p>
      <div class="footer__qrcode">
        <img src="../assets/images/qun-qq.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoFooter',
};
</script>

<style lang="less" scoped>
.footer-container {
  display: flex;
  margin-top: 30px;
  padding: 40px;
  background: #000;
  font-size: 16px;
  color: #fff;
  .footer__links {
    width: 200px;
    p {
      margin-bottom: 20px;
    }
    a {
      color: #fff;
      &:hover {
        color: #338cf0;
      }
    }
  }
  .footer__item {
    margin-right: 100px;
    .footer__title {
      text-align: center;
    }
  }
  .footer__qrcode {
    width: 200px;
    margin-top: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
