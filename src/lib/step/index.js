import MkuStep from '../steps/src/step';

MkuStep.install = function (Vue) {
  Vue.component(MkuStep.name, MkuStep);
};

export default MkuStep;
