import Vue from 'vue';
import loading from './loading';
import { merge } from '../../../utils/tools';
import { singlePattern } from '../../../utils/assist';
import { defaultConfig } from './dict';

const LoadingExtend = Vue.extend(loading);

const getParentDom = (params) => {
  if (params.screen) return document.body;
  if (!params.target) {
    throw new Error('Missing "target" attribute');
  }
  return document.querySelector(params.target);
};

// 创建Loading
const createLoading = () => new LoadingExtend();
// 创建Loading单例
const getSingleLoading = singlePattern(createLoading);

/**
 * @class Loading
 * @description Loading类
 * @param { Object } config 配置参数
 */
const Loading = function (config = {}) {
  if (!(this instanceof Loading)) {
    return new Loading(config);
  }
  this.params = merge({}, defaultConfig, config);
  this.parent = getParentDom(this.params);

  this.init();
};

Loading.prototype.init = function () {
  this.ins = this.params.screen ? getSingleLoading() : createLoading();
  this.ins.isVisiable = false;
  this.$el = this.ins.$mount().$el;
  merge(this.ins, this.params);

  this.parent.appendChild(this.$el);
  this.ins.isVisiable = true;
};

Loading.prototype.close = function () {
  this.ins.isVisiable = false;
  this.$el.parentNode.removeChild(this.$el);
};

export default Loading;
