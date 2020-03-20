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
      component: () => import('@/components/home'),
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
