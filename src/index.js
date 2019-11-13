import Alert from './lib/alert'
import Button from './lib/button'
import Checkbox from './lib/checkbox'
import CheckboxGroup from './lib/checkbox-group'
import Col from './lib/col'
import CollapseTransition from './lib/collapse-transition'
import Dropdown from './lib/dropdown'
import DropdownMenu from './lib/dropdown-menu'
import DropdownItem from './lib/dropdown-item'
import Form from './lib/form'
import FormItem from './lib/form-item'
import Icon from './lib/icon'
import Input from './lib/input'
import Loading from './lib/loading'
import Menu from './lib/menu'
import MenuGroup from './lib/menu-group'
import MenuItem from './lib/menu-item'
import Message from './lib/message'
import Notice from './lib/notice'
import Options from './lib/options'
import OptionsGroup from './lib/options-group'
import Pagination from './lib/pagination'
import Radio from './lib/radio'
import RadioGroup from './lib/radio-group'
import Row from './lib/row'
import Select from './lib/select'
import Submenu from './lib/submenu'
import Switch from './lib/switch'
import Tree from './lib/tree'

const components = [
  Alert,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Notice,
  Options,
  OptionsGroup,
  Pagination,
  Radio,
  RadioGroup,
  Row,
  Select,
  Submenu,
  Switch,
  Tree
]

const useInits = [
  Loading.directive
]

const protoInits = [
  ['$message', Message],
  ['$notice', Notice],
  ['$loading', Loading.loading]
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  useInits.forEach(ins => {
    Vue.use(ins)
  })
  protoInits.forEach(proto => {
    Vue.prototype[proto[0]] = proto[1]
  })
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
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Notice,
  Options,
  OptionsGroup,
  Pagination,
  Radio,
  RadioGroup,
  Row,
  Select,
  Submenu,
  Switch,
  Tree
}
