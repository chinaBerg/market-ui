<template>
  <div class="main-container">
    <nav class="docs__nav-wrap docs-scroller--hide">
      <router-link class="docs__logo" to="/">
        <img src="@/assets/images/logo.png" alt="logo">
      </router-link>
      <nav-slide />
    </nav>
    <section class="docs__content">
      <div class="docs__content-head">
        <router-link class="links__item" to="/docs/install">安装</router-link>
        <router-link class="links__item" to="/docs/install">快速开始</router-link>
        <a href="https://juejin.im/user/58ae78da8d6d8100584bc207/posts" target="_blank" class="links__item">博客</a>
        <a href="https://github.com/chinaBerg/market-ui" target="_blank" class="icon__git links__item"></a>
      </div>

      <div class="content__wraper">
        <router-view/>

        <div class="aside__wraper">
          <div class="aside__item banner">
            <h3 class="aside__item-head">微信公众号</h3>
            <img src="../assets/images/qrcode-lc.jpg" alt="">
          </div>

          <div class="aside__item articles">
            <h3>文章推荐</h3>
            <ul>
              <li v-for="(item, index) in articles" :key="index">
                <a :href="item.src">{{item.title}}</a>
              </li>
            </ul>
            <div class="more">
              <a href="https://juejin.im/user/58ae78da8d6d8100584bc207/posts">查看更多</a>
            </div>
          </div>

          <a href="https://github.com/chinaBerg/vue-typescript-admin" target="_blank" class="aside__item recommend">
            <img src="../assets/images/rbac-logo.png" alt="">
            <p>基于Vue+typescript+ElementUi技术栈的RBAC后台管理系统模板</p>
          </a>

          <a href="https://github.com/chinaBerg/vta-cli" target="_blank" class="aside__item recommend">
            <h3 class="aside__item-head">vta-cli</h3>
            <p>一个快速生成Vue+Ts+ElementUi的RBAC系统模板的脚手架。</p>
          </a>
        </div>
      </div>
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
  data() {
    return {
      articles: [
        {
          src: 'https://juejin.im/post/5f0734ac5188252e703ac112',
          title: '详解前端脚手架开发排坑全指南【前端提效必须上干货】',
        },
        {
          src: 'https://juejin.im/post/5ee7a9855188251f59238c77',
          title: '【vue选手极速进阶】图文详解vue+ts+class+注解风格开发排坑全指南',
        },
        {
          src: 'https://juejin.im/post/5ee2f60cf265da76cb3c00a3',
          title: '5分钟上手Egg.js+nunjucks模板引擎快速开发SEO友好的官网项目',
        },
        {
          src: 'https://juejin.im/post/5d3c51ad6fb9a07ead5a42bf',
          title: '【愣锤笔记】中高级前端进阶之极速通关koa2全栈核心内容（图文并茂）',
        },
        {
          src: 'https://juejin.im/post/5b96586de51d450e7d0984a6',
          title: 'vue插件开发、文档书写、github发布、npm包发布一波流',
        },
        {
          src: 'https://juejin.im/post/5cfcf8f7e51d455a694f94e1',
          title: '【愣锤笔记】嗯，真香！精简ES函数式编程核心概念',
        },
        {
          src: 'https://juejin.im/post/5d0baf2d5188255fc6384ef8',
          title: '【愣锤笔记】underscore源码里中高级前端所需要掌握的内容',
        },
        {
          src: 'https://juejin.im/post/5b55c118f265da0f6f1aa354',
          title: 'vue中Axios的封装和API接口的管理',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.main-container {
  padding-left: 240px;
  background: #fafeff;
  .docs__nav-wrap {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 240px;
    box-shadow: 0 1px 10px #bbc3cc;
    overflow: auto;
    .docs__logo {
      width: 100%;
      height: 60px;
      background: #2d8cf0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .docs__content {
    min-height: 100%;
  }
  .docs__content-head {
    height: 60px;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .links__item {
      height: 32px;
      margin-right: 20px;
      line-height: 32px;
      font-size: 16px;
      color: #515151;
      transition: all .3s;
      &:hover {
        color: #2d8cf0;
      }
    }
    .icon__git {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-image: url('../assets/images/github.png');
      background-size: 24px auto;
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        background-image: url('../assets/images/github-active.png');
      }
    }
  }

  .content__wraper {
    display: flex;
    padding: 0 30px;
  }
  .aside__wraper {
    width: 240px;
    margin-left: 18px;
    .aside__item {
      margin-bottom: 20px;
      background: #fff;
      box-shadow: 0 0 10px #ccc;
      border-radius: 4px;
      &.banner {
        padding: 10px;
        text-align: center;
        img {
          width: 100%;
        }
      }
      &.articles {
        h3 {
          line-height: 40px;
          text-align: center;
          border-bottom: 1px solid rgba(151, 151, 151, 0.1);
        }
        ul {
          li {
            a {
              display: block;
              padding: 10px;
              cursor: pointer;
              &:hover {
                background: #f1f1f1;
              }
            }
          }
        }
        .more {
          border-top: 1px solid rgba(151, 151, 151, 0.1);
          line-height: 40px;
          text-align: center;
          a {
            color: #2d8cf0;
          }
        }
      }

      &.recommend {
        display: block;
        cursor: pointer;
        transition: all .3s;
        overflow: hidden;
        &:hover {
          background: #f0fafe;
          transform: translateY(-6px);
        }
        h3 {
          padding: 10px 10px 0;
        }
        img {
          width: 100%;
        }
        p {
          padding: 10px;
          color: #666;
        }
      }
    }
  }

  .market-doc-container {
    flex: 1;
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
