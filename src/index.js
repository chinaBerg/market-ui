import MkuButton from './lib/button'
import MkuRow from './lib/row'
import MkuCol from './lib/col'
import MkuMenu from './lib/menu'
import MkuMenuGroup from './lib/menu-group'
import MkuMenuItem from './lib/menu-item'
import MkuSubmenu from './lib/submenu'
import MkuCollapseTransition from './lib/collapse-transition'

import MkuInput from './lib/input'

const components = [
  MkuButton,
  MkuRow,
  MkuCol,
  MkuMenu,
  MkuMenuGroup,
  MkuMenuItem,
  MkuSubmenu,
  MkuInput,
  MkuCollapseTransition
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
  install,
  MkuButton,
  MkuRow,
  MkuCol,
  MkuMenu,
  MkuMenuGroup,
  MkuMenuItem,
  MkuSubmenu,
  MkuInput,
  MkuCollapseTransition
}
