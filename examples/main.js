// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MarketUi from '../src/index'
import MarketUiExample from './components/mku-example'

import 'highlight.js/styles/color-brewer.css' // 代码高亮的css
import './assets/styles/common.less' // doc的公共css
import './docs-styles/index.less' // doc文件对应的样式
import '../src/styles/index.less' // 引入组件样式

Vue.use(MarketUi)
Vue.component('mku-example', MarketUiExample)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
