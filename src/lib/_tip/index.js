import Vue from 'vue'
import MkuTip from './src/tip'

const init = (props = {}) => {
  const vueIns = new Vue({
    render (h) {
      return h(MkuTip, { props })
    }
  })
  document.body.appendChild(vueIns.$mount().$el)
  return vueIns.$children[0]
}

MkuTip.init = init

export default MkuTip
