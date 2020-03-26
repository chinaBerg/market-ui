import Vue from 'vue';
import Router from 'vue-router';
import hljs from 'highlight.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

router.beforeEach((from, to, next) => {
  NProgress.start();
  next();
});

router.afterEach((route) => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => Array.from(document.querySelectorAll('pre code')).forEach(hljs.highlightBlock));
  document.title = `Market-Ui | ${route.meta && route.meta.title}` || 'Market-Ui';
  NProgress.done();
});

export default router;
