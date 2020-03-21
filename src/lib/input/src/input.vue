<template>
  <div :class="wrapClasss">
    <!-- 多行文本框 -->
    <textarea
      ref="textarea"
      class="mku-textarea"
      v-if="type === 'textarea'"
      :rows="rows"
      :value="currentValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :style="inputStyle"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.enter="handleEnter"
    />

    <!-- 单行文本框 -->
    <template v-else>
      <input
        ref="input"
        :class="inputClasss"
        :style="inputStyle"
        :type="type"
        :value="currentValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
      />
      <i class="mku-icon mku-input__clear" v-if="isClearable" @click="handleClear">
        &#xe633;
      </i>
    </template>
  </div>
</template>

<script>
import autosize from 'autosize';
import Emitter from '../../../utils/emitter';

export default {
  name: 'MkuInput',
  mixins: [Emitter],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (type) => ['text', 'password', 'textarea', 'url', 'email', 'date', 'number', 'tel'].includes(type),
    },
    value: {
      type: [String, Number],
      default: '',
    },
    // 尺寸
    size: {
      type: String,
      default: 'default',
      validator: (size) => ['large', 'default', 'small'].includes(size),
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 占位符
    placeholder: {
      type: String,
      default: '',
    },
    // 可清除
    clearable: {
      type: Boolean,
      default: false,
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      isMouseover: false,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  computed: {
    isClearable() {
      if (!this.clearable || !this.currentValue.length) return false;
      return true;
    },
    wrapClasss() {
      return ['mku-input__wrap', {
        'mku-input__wrap--block': this.block,
      }];
    },
    inputClasss() {
      const prefix = 'mku-input';
      return [prefix,
        {
          [`${prefix}--large`]: this.size === 'large',
          [`${prefix}--default`]: this.size === 'default',
          [`${prefix}--small`]: this.size === 'small',
        },
      ];
    },
    inputStyle() {
      const res = {};
      if (this.type !== 'textarea') {
        res.paddingRight = this.clearable ? '22px' : '8px';
      }
      return res;
    },
  },
  mounted() {
    if (this.type === 'textarea' && this.autosize) {
      autosize(this.$refs.textarea);
    }
    if (this.autofocus) {
      const input = this.$refs.input || this.$refs.textarea;
      input.focus();
    }
  },
  methods: {
    // 值变化的回调
    handleInput(event) {
      const { value } = event.target;
      this.currentValue = value;
      this.$emit('input', value);
      this.dispatch('MkuFormItem', 'onFormItemChange', value);
      this.$emit('change', value);
    },
    // 获取焦点的回调
    handleFocus(event) {
      this.$emit('focus', event);
    },
    // 失去焦点回调
    handleBlur(event) {
      this.$emit('blur', event);
      this.dispatch('MkuFormItem', 'onFormItemBlur', this.currentValue);
    },
    // 点击清空按钮
    handleClear() {
      this.currentValue = '';
      this.$emit('input', this.currentValue);
      this.dispatch('MkuFormItem', 'onFormItemChange', this.currentValue);
      this.$emit('clear');
    },
    // 使组件获取焦点
    focus() {
      this.$refs.input.focus();
    },
    // 使组件失去焦点
    blur() {
      this.$refs.input.blur();
      this.dispatch('MkuFormItem', 'onFormItemBlur', this.value);
    },
    handleEnter(event) {
      this.$emit('enter', event, this.currentValue);
    },
  },
};
</script>
