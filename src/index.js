import Alert from './lib/alert'
import Badge from './lib/badge'
import Breadcrumb from './lib/breadcrumb'
import BreadcrumbItem from './lib/breadcrumb-item'
import Button from './lib/button'
import Checkbox from './lib/checkbox'
import CheckboxGroup from './lib/checkbox-group'
import Col from './lib/col'
import CollapseTransition from './lib/collapse-transition'
import Drawer from './lib/drawer'
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
import Steps from './lib/steps'
import Step from './lib/step'
import Submenu from './lib/submenu'
import Swiper from './lib/swiper'
import SwiperItem from './lib/swiper-item'
import Switch from './lib/switch'
import TabPane from './lib/tab-pane'
import Tabs from './lib/tabs'
import Tree from './lib/tree'

const components = [
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  Drawer,
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
  Steps,
  Step,
  Submenu,
  Swiper,
  SwiperItem,
  Switch,
  TabPane,
  Tabs,
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
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  Drawer,
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
  Steps,
  Step,
  Submenu,
  Swiper,
  SwiperItem,
  Switch,
  TabPane,
  Tabs,
  Tree
}
