import MkuButton from './lib/button'

import MkuRow from './lib/row'
import MkuCol from './lib/col'
import MkuInput from './lib/input'

const components = [
  MkuButton,
  MkuRow,
  MkuCol,
  MkuInput
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install
}
