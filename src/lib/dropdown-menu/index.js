import MkuDropdownMenu from '../dropdown/src/menu';

MkuDropdownMenu.install = function (Vue) {
  Vue.component(MkuDropdownMenu.name, MkuDropdownMenu);
};

export default MkuDropdownMenu;
