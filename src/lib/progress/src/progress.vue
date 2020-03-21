<template>
  <div :class="progressClasss">
    <progress-side v-if="isSide(['start'])" />

    <div class="mku-progress__outer" :style="outerStyle">
      <div class="mku-progress__inner" :style="innerStyle">
        <span :class="shadowClasss" :style="shadowStyle"></span>
        <progress-side v-if="isSide(['start-inside', 'end-inside', 'top-follow'])" />
      </div>
    </div>

    <progress-side v-if="isSide(['end'])" />
  </div>
</template>

<script>
import { isEqual } from '../../../utils/tools';
import { isArray } from '../../../utils/assist';
import ProgressSide from './side';

export default {
  name: 'MkuProgress',
  components: { ProgressSide },
  props: {
    // 绑定的值
    percent: {
      type: Number,
      required: true,
    },
    // 进度条状态
    status: {
      type: String,
      default: 'active',
      validator: (val) => ['active', 'success', 'warning', 'error'].includes(val),
    },
    // percent为100时是否自动将status置为success
    autoSuccess: {
      type: Boolean,
      default: true,
    },
    // 进度条颜色，会覆盖status
    color: {
      type: [Array, String],
    },
    // 背景色
    background: {
      type: [Array, String],
    },
    // 几种不同的类型
    activeAnimate: {
      type: String,
      default: 'none',
      validator: (val) => ['none', 'zebra', 'line'].includes(val),
    },
    // 进度条宽度
    size: {
      type: Number,
      default: 6,
      validator: (val) => val >= 0,
    },
    // 隐藏进度条提示内容（文字、图标部分）
    textHidden: {
      type: Boolean,
      default: false,
    },
    // 自定义text内容
    textRender: {
      type: Function,
    },
    // 进度条文字位置
    textPlacement: {
      type: String,
      default: 'end',
      validator: (val) => ['start', 'end', 'start-inside', 'end-inside', 'top-follow'].includes(val),
    },
  },
  computed: {
    // percent最大100，最小0
    calcPercent() {
      return Math.min(100, Math.max(this.percent, 0));
    },
    // 计算status
    calcStatus() {
      if (this.calcPercent === 100 && this.autoSuccess) return 'success';
      return this.status;
    },
    // 拼接steps的class name
    progressClasss() {
      const prefix = 'mku-progress';
      const isFinish = this.calcStatus === 'success';
      const eq = (v) => isEqual(this.status, v);
      return [prefix, {
        [`${prefix}--success`]: eq('success') || isFinish,
        [`${prefix}--error`]: eq('error') && !isFinish,
        [`${prefix}--warning`]: eq('warning') && !isFinish,
      }];
    },
    // 拼接进度条shadow部分的class name
    shadowClasss() {
      const prefix = 'mku-progress__shadow';
      const isActive = this.calcStatus === 'active';
      const eq = (v) => isEqual(this.activeAnimate, v);
      return [prefix, {
        [`${prefix}--line`]: eq('line') && isActive,
        [`${prefix}--zebra`]: eq('zebra') && isActive,
      }];
    },
    // 计算outer的样式
    outerStyle() {
      const res = {
        height: `${this.size}px`,
        borderRadius: `${Math.ceil(this.size / 2)}px`,
      };
      const bg = this.background;
      if (bg) {
        if (isArray(bg)) {
          res.backgroundImage = `linear-gradient(${bg.join(',')})`;
        } else {
          res.background = bg;
        }
      }
      return res;
    },
    // 计算inner的样式
    innerStyle() {
      const res = {
        width: `${this.calcPercent}%`,
        height: `${this.size}px`,
        borderRadius: `${Math.ceil(this.size / 2)}px`,
      };
      const cor = this.color;
      if (cor) {
        if (isArray(cor)) {
          res.backgroundImage = `linear-gradient(${cor.join(',')})`;
        } else {
          res.background = cor;
        }
      }
      return res;
    },
    // 计算shaodow部分的样式
    shadowStyle() {
      const size = `${Math.ceil(this.size / 2)}px`;
      return {
        borderRadius: `0 ${size} ${size} 0`,
      };
    },
    // 控制对应位置的text的展示隐藏
    isSide() {
      return (placement) => !this.textHidden && placement.includes(this.textPlacement);
    },
  },
};
</script>
