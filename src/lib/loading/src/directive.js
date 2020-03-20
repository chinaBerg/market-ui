import Vue from 'vue';
import Loading from './loading';
import { attrs } from '../../../utils/dom';
import { merge } from '../../../utils/tools';
import { defaultConfig } from './dict';

const LoadingExtend = Vue.extend(Loading);

const getConfig = (el, binding) => {
  const text = attrs(el, 'mku-loading-text');
  const textColor = attrs(el, 'mku-loading-text-color');
  const iconColor = attrs(el, 'mku-loading-icon-color');
  const background = attrs(el, 'mku-loading-background');

  return {
    screen: binding.modifiers.screen,
    text,
    textColor,
    iconColor,
    background,
  };
};
const install = (Vue) => {
  // dom的显示隐藏
  const toggleLoading = (el, binding) => {
    const { $el, ins } = el.instance;
    if (binding.value) {
      if (binding.modifiers.screen) {
        document.body.appendChild($el);
      } else {
        el.appendChild($el);
      }
      ins.isVisiable = true;
    } else {
      ins.isVisiable = false;
      $el.parentNode.removeChild($el);
    }
  };

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      const ins = new LoadingExtend();
      const config = getConfig(el, binding);
      merge(ins, defaultConfig, config);

      el.instance = {
        ins,
        $el: ins.$mount().$el,
      };

      binding.value && toggleLoading(el, binding);
    },
    update(el, binding) {
      toggleLoading(el, binding);
    },
  });
};

export default {
  install,
};
