<template>
  <div class="mku-home-container">
    <div class="mku-home__wrapper">
      <div class="mku-home__head">
        <h3 class="mku-home__head-title">Market-Ui</h3>
        <p class="mku-home__head-desc">一款精美的Vue组件库</p>
      </div>
      <div class="mku-home__content">
        <button class="mku-home__start" @click="handleStart">立即开始</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MkuHome',
  methods: {
    handleStart () {
      this.$router.push('/input')
    }
  }
}
</script>

<style lang="less" scoped>
  .mku-home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: linear-gradient(to bottom right, #0088ff, #28f39c);
    .mku-home__wrapper {
      transform: translateY(-60px);
    }
    .mku-home__head {
      text-align: center;
      h3 {
        font-size: 30px;
        color: #fff;
        &::first-letter {
          transform: rotateX(-45deg);
          font-size: 36px;
          text-shadow: 0 0 6px #f1f1f1;
        }
      }
      p {
        margin-top: 20px;
        font-size: 16px;
        letter-spacing: 20px;
        color: #fff;
        user-select: none;
      }
    }
    .mku-home__content {
      .mku-home__start {
        display: block;
        margin: 40px auto;
        padding: 10px 30px;
        border: 0;
        border-radius: 4px;
        outline: none;
        user-select: none;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 10px #ccc;
        }
      }
    }
  }
</style>
