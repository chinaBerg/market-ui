// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MarketUi from '../src/index'
import MarketUiExample from './components/mku-example'

import 'highlight.js/styles/color-brewer.css'
import './assets/styles/common.less'
import './docs-styles/index.less'

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
