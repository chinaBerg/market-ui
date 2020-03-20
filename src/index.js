import Alert from './lib/alert';
import Badge from './lib/badge';
import Backtop from './lib/backtop';
import Breadcrumb from './lib/breadcrumb';
import BreadcrumbItem from './lib/breadcrumb-item';
import Button from './lib/button';
import Checkbox from './lib/checkbox';
import CheckboxGroup from './lib/checkbox-group';
import Col from './lib/col';
import CollapseTransition from './lib/collapse-transition';
import DatePicker from './lib/date-picker';
import Drawer from './lib/drawer';
import Dropdown from './lib/dropdown';
import DropdownMenu from './lib/dropdown-menu';
import DropdownItem from './lib/dropdown-item';
import Form from './lib/form';
import FormItem from './lib/form-item';
import Icon from './lib/icon';
import Input from './lib/input';
import Loading from './lib/loading';
import Menu from './lib/menu';
import MenuGroup from './lib/menu-group';
import MenuItem from './lib/menu-item';
import Message from './lib/message';
import Notice from './lib/notice';
import Options from './lib/options';
import OptionsGroup from './lib/options-group';
import Pagination from './lib/pagination';
import Progress from './lib/progress';
import Radio from './lib/radio';
import RadioGroup from './lib/radio-group';
import Row from './lib/row';
import Select from './lib/select';
import Slider from './lib/slider';
import Steps from './lib/steps';
import Step from './lib/step';
import Submenu from './lib/submenu';
import Swiper from './lib/swiper';
import SwiperItem from './lib/swiper-item';
import Switch from './lib/switch';
import TabPane from './lib/tab-pane';
import Table from './lib/table';
import TableItem from './lib/table-item';
import Tabs from './lib/tabs';
import TimePicker from './lib/time-picker';
import Tree from './lib/tree';

const components = [
  Alert,
  Badge,
  Backtop,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  DatePicker,
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
  Progress,
  Radio,
  RadioGroup,
  Row,
  Select,
  Slider,
  Steps,
  Step,
  Submenu,
  Swiper,
  SwiperItem,
  Switch,
  TabPane,
  Table,
  TableItem,
  Tabs,
  TimePicker,
  Tree,
];

const useInits = [
  Loading.directive,
];

const protoInits = [
  ['$message', Message],
  ['$notice', Notice],
  ['$loading', Loading.loading],
];

const install = (Vue) => {
  const vueProto = Vue.prototype;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  useInits.forEach((ins) => {
    Vue.use(ins);
  });
  protoInits.forEach((proto) => {
    const [key, value] = proto;
    vueProto[key] = value;
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.0',
  install,
  Alert,
  Badge,
  Backtop,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseTransition,
  DatePicker,
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
  Progress,
  Radio,
  RadioGroup,
  Row,
  Select,
  Slider,
  Steps,
  Step,
  Submenu,
  Swiper,
  SwiperItem,
  Switch,
  TabPane,
  Table,
  TableItem,
  Tabs,
  TimePicker,
  Tree,
};
