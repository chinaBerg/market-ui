import MkuBadge from './src/badge';

MkuBadge.install = function (Vue) {
  Vue.component(MkuBadge.name, MkuBadge);
};

export default MkuBadge;
