import Vue from 'vue';
import Router from 'vue-router';
import hljs from 'highlight.js';
import NavConfigs from './routes';

Vue.use(Router);

const navConfigs = NavConfigs.map((item) => item.children).flat(Infinity);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        type: 'page',
        title: 'Market-Ui|一款基于vue的ui组件库',
      },
      component: () => import('@/views/home'),
    },
    {
      path: '/docs/install',
      name: 'Install',
      meta: {
        type: 'component',
        title: '安装',
      },
      component: () => import('@/docs/zh_CN/install.md'),
    },
    {
      path: '/docs/quick_start',
      name: 'QuickStart',
      meta: {
        type: 'component',
        title: '快速开始',
      },
      component: () => import('@/docs/zh_CN/quick-start.md'),
    },
    ...navConfigs,
  ],
  scrollBehavior() {
    const main = document.querySelector('.main_content');
    if (main) {
      main.scrollTop = 0;
    }
  },
});

router.afterEach((route) => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => Array.from(document.querySelectorAll('pre code')).forEach(hljs.highlightBlock));
  document.title = `Market-Ui | ${route.meta && route.meta.title}` || '';
});

export default router;
