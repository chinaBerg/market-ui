import Alert from './lib/alert'
import Button from './lib/button'
import Checkbox from './lib/checkbox'
import CheckboxGroup from './lib/checkbox-group'
import Col from './lib/col'
import CollapseTransition from './lib/collapse-transition'
import Form from './lib/form'
import FormItem from './lib/form-item'
import Icon from './lib/icon'
import Input from './lib/input'
import Menu from './lib/menu'
import MenuGroup from './lib/menu-group'
import MenuItem from './lib/menu-item'
import Message from './lib/message'
import Notice from './lib/notice'
import Radio from './lib/radio'
import RadioGroup from './lib/radio-group'
import Row from './lib/row'
import Switch from './lib/switch'
import Submenu from './lib/submenu'

const components = [
  Alert,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  Form,
  FormItem,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Notice,
  Radio,
  RadioGroup,
  Row,
  Switch,
  Submenu
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
  Alert,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  Form,
  FormItem,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Notice,
  Radio,
  RadioGroup,
  Row,
  Switch,
  Submenu
}
