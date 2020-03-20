<template>
  <div class="header-container">
    <!-- <div class="header__logo" @click="handleToHome">Market-Ui</div>
    <div class="header__content"></div> -->
  </div>
</template>

<script>
export default {
  name: 'DemoHeader',
  methods: {
    handleToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  .header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 64px;
    background: linear-gradient(to right, #01a0fb, #28f39c);
    color: #fff;
    font-size: 26px;
    user-select: none;
    cursor: pointer;
  }
  .header__content {
    flex: 1;
  }
}
</style>
