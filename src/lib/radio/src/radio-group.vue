<template>
  <div :class="radioGroupClasss">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../../utils/emitter';

export default {
  name: 'MkuRadioGroup',
  mixins: [Emitter],
  props: {
    // radio-group绑定的值
    value: {
      type: [Number, String, Boolean],
    },
    // 水平或垂直排版
    mode: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    type: {
      type: String,
      default: 'radio',
      validator: (val) => ['radio', 'button'].includes(val),
    },
    // 作为button-group使用时，button的样式类型，实心或者线形
    buttonType: {
      type: String,
      default: 'line',
      validator: (val) => ['line', 'fill'].includes(val),
    },
    size: {
      type: String,
      default: 'default',
      validator: (val) => ['large', 'default', 'small'].includes(val),
    },
  },
  data() {
    return {
      radioGroupValue: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.radioGroupValue = newVal;
    },
  },
  computed: {
    // 拼接radio-group的className
    radioGroupClasss() {
      return {
        'mku-radio-group': this.type === 'radio',
        'mku-radio-group--vertical': this.mode === 'vertical',
        'mku-button-group': this.type === 'button',
        'mku-button-group--fill': this.type === 'button' && this.buttonType === 'fill',
        'mku-button-group--lg': this.size === 'large',
        'mku-button-group--sm': this.size === 'small',
      };
    },
  },
  methods: {
    /**
     * @method change
     * @description 监听radio-group值的变化
     * - 双向绑定value
     * - 暴露change事件
     * - 支持Form的验证
     */
    change(val) {
      this.radioGroupValue = val;
      this.$emit('input', val);
      this.$emit('change', val);
      this.dispatch('MkuFormItem', 'onFormItemChange', val);
    },
  },
};
</script>
