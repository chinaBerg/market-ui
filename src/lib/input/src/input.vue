<template>
  <div class="mku-input-wrapper">
    <input
      :class="['mku-input', {
        'mku-input--large': size === 'large',
        'mku-input--default': size === 'default',
        'mku-input--small': size === 'small',
      }]"
      :style="{paddingRight: clearable ? '22px' : '8px'}"
      :type="type"
      :value="currentValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <i class="iconfont mku-input__clear" v-if="isClearable" @click="handleClear">&#xe606;</i>
  </div>
</template>

<script>
import Emitter from '../../../utils/emitter'
export default {
  name: 'MkuInput',
  mixins: [Emitter],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: type => {
        return ['text', 'password', 'textarea', 'url', 'email', 'date', 'number', 'tel'].includes(type)
      }
    },
    value: {
      type: String,
      default: ''
    },
    // 尺寸
    size: {
      type: String,
      default: 'default',
      validator: size => {
        return ['large', 'default', 'small'].includes(size)
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 占位符
    placeholder: {
      type: String,
      default: ''
    },
    // 可清除
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      isFocus: false,
      isMouseover: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  computed: {
    isClearable () {
      if (!this.clearable || !this.currentValue.length) return false
      return true
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('MkuFormItem', 'on-form-change', value)
    },
    handleFocus () {
      this.isFocus = true
    },
    handleBlur () {
      this.isFocus = false
      this.dispatch('MkuFormItem', 'on-form-blur', this.currentValue)
    },
    handleClear () {
      this.currentValue = ''
      this.$emit('input', this.currentValue)
      this.dispatch('MkuFormItem', 'on-form-change', this.currentValue)
      this.$emit('clear')
    }
  }
}
</script>

<style lang="less">
@import '../../../styles/color.less';
@import '../../../styles/size.less';

.mku-input-wrapper {
  position: relative;
  .mku-input {
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 6px 8px;
    border-radius: 4px;
    border: 1px solid @border-color-base;
    background: @background-color-base;
    transition: border .2s, box-shadow .2s;
    &:focus:not([readonly]),
    &:hover:not(:disabled):not([readonly]) {
      border: 1px solid @color-primary;
      box-shadow: @shadow-primary;
    }
    &.mku-input--large {
      height: @height-large-size;
    }
    &.mku-input--default {
      height: @height-default-size;
    }
    &.mku-input--small {
      height: @height-small-size;
    }
    &:disabled,
    &[readonly] {
      background: @background-color-disabled;
      cursor: not-allowed;
    }
  }
  /* 删除按钮 */
  .mku-input__clear {
    position: absolute;
    right: 6px;
    top: 50%;
    width: 12px;
    height: 12px;
    color: @color-text-regular;
    font-size: 12px;
    cursor: pointer;
    user-select: none;
    transform: translateY(-50%);
    display: none;
    &:hover {
      color: @color-primary;
    }
  }
  &:hover .mku-input__clear {
    display: block;
  }
}
</style>