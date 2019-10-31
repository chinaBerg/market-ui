import directive from './src/directive'
import loading from './src/service'

const install = Vue => {
  Vue.use(directive)
  Vue.prototype.$loading = loading
}
export default {
  install,
  directive,
  loading
}
