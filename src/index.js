import Button from './lib/button'
import Icon from './lib/icon'
import CollapseTransition from './lib/collapse-transition'
import Row from './lib/row'
import Col from './lib/col'
import Menu from './lib/menu'
import MenuGroup from './lib/menu-group'
import MenuItem from './lib/menu-item'
import Submenu from './lib/submenu'
import Input from './lib/input'
import Alert from './lib/alert'
import Message from './lib/message'
import Notice from './lib/notice'

const components = [
  Icon,
  Button,
  CollapseTransition,
  Row,
  Col,
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
  Input,
  Alert,
  Message,
  Notice
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
  Vue.prototype.$notice = Notice
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  Icon,
  Button,
  Row,
  Col,
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
  Input,
  CollapseTransition
}
