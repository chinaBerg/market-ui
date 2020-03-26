<template>
  <div class="docs-page__home">
    <section class="home__wrap">
      <header class="home__head">
        <router-link class="home__logo" to="/">
          <img src="http://q7kvtumoa.bkt.clouddn.com/market-ui/images/logo.png" alt="">
        </router-link>

        <nav class="home__nav">
          <router-link class="nav__item" to="/docs/install">安装</router-link>
          <router-link class="nav__item" to="/component/button">组件</router-link>
          <a href="https://github.com/chinaBerg/market-ui" class="nav__item" target="_blank">Github</a>
        </nav>
      </header>

      <section class="home__detail">
        <div class="home__title">
          <h3>致力于快速高效开发PC端中后台产品！</h3>
          <p>Committed to rapid and efficient development of PC end in the background products!</p>
        </div>
        <div class="home__operation">
          <mku-button @click="handleStart">快速开始</mku-button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DocsHome',
  methods: {
    handleStart() {
      this.$router.push('/component/button');
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 769px) {
  .docs-page__home {
    min-height: 100vh;
    background: url(http://q7kvtumoa.bkt.clouddn.com/market-ui/images/docs-home-bg.png) no-repeat top center;
    background-size: 100% auto;
    .home__wrap {
      width: 1200px;
      margin: 0 auto;
    }
    .home__head {
      height: 100px;
      display: flex;
      justify-content: space-between;
    }
    .home__logo {
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      transform: translateY(10px);
      img {
        height: 100%;
      }
    }

    .home__nav {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .nav__item {
      margin-left: 20px;
      font-size: 16px;
      color: #fff;
    }

    .home__detail {
      height: calc(~'100vh - 100px');
      padding-top: 130px;
      background: url(http://q7kvtumoa.bkt.clouddn.com/market-ui/images/docs-home-bg2.png) no-repeat right 40px;
      background-size: auto 500px;
      .home__title {
        color: #fff;
        h3 {
          font-size: 24px;
          font-weight: 500;
        }
        p {
          margin-top: 14px;
          font-size: 14px;
          color: #f3f3f3;
        }
      }
      .home__operation {
        margin-top: 100px;
        .mku-button-wrapper {
          width: 200px;
          /deep/ .mku-button {
            border-radius: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .docs-page__home {
  min-height: 100vh;
  .home__wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  .home__head {
    display: flex;
    justify-content: space-between;
    height: 140px;
    padding: 10px;
    background: url(http://q7kvtumoa.bkt.clouddn.com/market-ui/images/docs-home-bg.png) no-repeat top center;
    background-size: 100% 100%;
  }
  .home__logo {
    height: 90px;
    border-radius: 10px;
    overflow: hidden;
    transform: translateY(0);
    img {
      height: 100%;
    }
  }

  .home__nav {
    display: flex;
    align-items: center;
    height: 100%;
    align-items: flex-start;
    padding-top: 20px;
  }
  .nav__item {
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    &:not(:last-child) {
      display: none;
    }
  }

  .home__detail {
    flex: 1;
    padding: 40px 10px;
    background: url(http://q7kvtumoa.bkt.clouddn.com/market-ui/images/docs-home-bg2.png) no-repeat bottom right;
    background-size: 70% auto;
    .home__title {
      h3 {
        font-size: 20px;
        font-weight: 500;
      }
      p {
        margin-top: 14px;
        font-size: 14px;
        color: #8e8e8e;
      }
    }
    .home__operation {
      margin-top: 30px;
      /deep/ .mku-button-wrapper .mku-button {
        border: 1px solid #2d8cf0;
        background: #2d8cf0;
        color: #fff;
      }
    }
  }
}
}
</style>
