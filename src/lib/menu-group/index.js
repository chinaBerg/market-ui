import { MkuMenuGroup } from '../menu';

MkuMenuGroup.install = function (Vue) {
  Vue.component(MkuMenuGroup.name, MkuMenuGroup);
};

export default MkuMenuGroup;
