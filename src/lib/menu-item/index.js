import { MkuMenuItem } from '../menu';

MkuMenuItem.install = function (Vue) {
  Vue.component(MkuMenuItem.name, MkuMenuItem);
};

export default MkuMenuItem;
