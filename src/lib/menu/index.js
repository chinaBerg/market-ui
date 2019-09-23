import MkuMenu from './src/menu'
import MkuMenuItem from './src/menu-item'
import MkuMenuGroup from './src/menu-group'
import MkuSubmenu from './src/submenu'

MkuMenu.install = function (Vue) {
  Vue.component(MkuMenu.name, MkuMenu)
}

export {
  MkuMenuItem,
  MkuMenuGroup,
  MkuSubmenu
}

export default MkuMenu
