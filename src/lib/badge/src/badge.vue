<template>
  <div :class="badgeClasss">
    <slot></slot>

    <span
      v-if="!hidden"
      :class="[dot ? 'mku-badge__dot' : 'mku-badge__value']"
      :style="badgeStyle">
      <template v-if="!dot && isShowText">
        {{formatValue}}
      </template>
    </span>
  </div>
</template>

<script>
import { isNumber } from '../../../utils/assist';

export default {
  name: 'MkuBadge',
  props: {
    // 徽章内容
    value: {
      type: [Number, String],
      default: 0,
    },
    // 徽章最大值，仅value为Number时有效
    max: {
      type: Number,
    },
    // 是否隐藏徽章
    hidden: {
      type: Boolean,
      default: false,
    },
    // value为Number时，值为0时是否隐藏徽章
    hiddenZero: {
      type: Boolean,
      default: false,
    },
    // 仅作为圆点展示
    dot: {
      type: Boolean,
      default: false,
    },
    // 圆点的大小
    dotSize: {
      type: [Number, String],
    },
    // 圆点中心点在x、y轴上的偏移量
    offset: {
      type: Array,
    },
    // 徽章颜色的几种基本类型
    type: {
      type: String,
      default: 'danger',
    },
    // 自定义徽章颜色，权重高于type
    color: {
      type: String,
    },
  },
  computed: {
    // badge的class name
    badgeClasss() {
      const prefix = 'mku-badge';
      return [prefix, `${prefix}--${this.type}`];
    },
    // 是否展示徽章的内容
    isShowText() {
      if (!this.hiddenZero) return true;
      if (!isNumber(this.value)) return true;
      return this.value > 0;
    },
    // 计算徽章的展示内容
    formatValue() {
      if (!isNumber(this.value)) return this.value;
      return !this.max ? this.value : this.value > this.max ? `${this.max}+` : this.value;
    },
    // 徽章的内联样式：偏移量、背景色、圆点大小
    badgeStyle() {
      let offsetStyle = {};
      let bgStyle = {};
      let sizeStyle = {};
      if (this.offset) {
        const len = this.offset.length;
        offsetStyle = { marginLeft: this.fotmatSize(this.offset[0]) };
        if (len >= 2) {
          offsetStyle.marginTop = this.fotmatSize(this.offset[1]);
        }
      }
      if (this.color) {
        bgStyle = {
          background: this.color,
        };
      }
      if (this.dot && this.dotSize !== undefined) {
        const size = this.fotmatSize(this.dotSize);
        sizeStyle = {
          width: size,
          height: size,
        };
      }
      return { ...offsetStyle, ...bgStyle, ...sizeStyle };
    },
  },
  methods: {
    fotmatSize(val) {
      return isNumber(val) ? `${val}px` : val;
    },
  },
};
</script>
