import MkuAlert from './src/alert';

MkuAlert.install = function (Vue) {
  Vue.component(MkuAlert.name, MkuAlert);
};

export default MkuAlert;
