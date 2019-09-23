<template>
  <div class="mku-input-wrapper">
    <input
      ref="input"
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
    // 值变化的回调
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('MkuFormItem', 'on-form-change', value)
      this.$emit('change', value)
    },
    // 获取焦点的回调
    handleFocus (event) {
      this.$emit('focus', event)
    },
    // 失去焦点回调
    handleBlur () {
      this.dispatch('MkuFormItem', 'on-form-blur', this.currentValue)
      this.$emit('blur', event)
    },
    // 点击清空按钮
    handleClear () {
      this.currentValue = ''
      this.$emit('input', this.currentValue)
      this.dispatch('MkuFormItem', 'on-form-change', this.currentValue)
      this.$emit('clear')
    },
    // 使组件获取焦点
    focus () {
      this.$refs.input.focus()
    },
    // 使组件失去焦点
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>
