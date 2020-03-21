<template>
  <div :class="switchClasss" :style="switchStyle" @click="handleClick">
    <span class="mku-switch__inner-before" v-show="switchValue">
      <slot name="open"></slot>
    </span>
    <span :class="['mku-switch__icon', { 'mku-switch__icon--loading': loading }]">
      <i :style="iconLoadingStyle"></i>
    </span>
    <span class="mku-switch__inner-after" v-show="!switchValue">
      <slot name="close"></slot>
    </span>
  </div>
</template>

<script>
import Emitter from '../../../utils/emitter';

const SIZE_VALUE = ['large', 'default', 'small'];

export default {
  name: 'MkuSwitch',
  mixins: [Emitter],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    width: {
      type: Number,
      default: 50,
    },
    size: {
      type: String,
      default: 'default',
      validator: (val) => SIZE_VALUE.includes(val),
    },
    activeColor: {
      type: String,
    },
    inactiveColor: {
      type: String,
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      switchValue: this.value,
    };
  },
  watch: {
    value: {
      handler(n, o) {
        this.handleValueChange(n, o);
      },
      immediate: true,
    },
  },
  computed: {
    // 拼接switch的className
    switchClasss() {
      return [
        'mku-switch', {
          'mku-switch--lg': this.size === 'large',
          'mku-switch--sm': this.size === 'small',
          'mku-switch--opened': this.switchValue,
          'mku-switch--disabled': this.disabled,
        },
      ];
    },
    // 计算switch的背景色
    switchBgColor() {
      let bgColor = '';
      if (this.switchValue && this.activeColor) {
        bgColor = this.activeColor;
      }
      if (!this.switchValue && this.inactiveColor) {
        bgColor = this.inactiveColor;
      }
      return bgColor;
    },
    // 定义switch的样式
    switchStyle() {
      const obj = {};
      obj.width = `${this.width}px`;
      // 优先使用自定义背景色，否则不赋值（则使用默认主题色）
      if (this.switchBgColor) obj.backgroundColor = this.switchBgColor;
      return obj;
    },
    // 定义switch的loading样式
    iconLoadingStyle() {
      const obj = {};
      if (this.switchBgColor) obj.borderColor = `transparent transparent transparent ${this.switchBgColor}`;
      return obj;
    },
  },
  methods: {
    /**
     * @method handleValueChange
     * @description 监听value值变化，给switchValue赋值
     */
    handleValueChange(newVal) {
      const isPreicate = [this.trueValue, this.falseValue].includes(newVal);
      if (!isPreicate) {
        throw TypeError(`The switch value is invalid， expected to pass in '${this.trueValue}' and '${this.falseValue}'.`);
      }
      this.switchValue = newVal === this.trueValue;
    },
    /**
     * @method handleValueChange
     * @description switch点击事件
     * - 更新switch值
     * - 双向绑定更新value值
     * - 对外暴露change事件
     * - 支持Form表单的验证
     */
    handleClick() {
      if (this.disabled || this.loading) return;

      this.switchValue = !this.switchValue;
      const value = this.switchValue ? this.trueValue : this.falseValue;
      this.$emit('input', value);
      this.$emit('change', value);
      this.dispatch('MkuFormItem', 'onFormItemChange', value);
    },
  },
};
</script>
