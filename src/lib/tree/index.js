import MkuTree from './src/tree';

MkuTree.install = function (Vue) {
  Vue.component(MkuTree.name, MkuTree);
};

export default MkuTree;
