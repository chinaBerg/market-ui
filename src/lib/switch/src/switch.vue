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
const SIZE_VALUE = ['large', 'default', 'small']

export default {
  name: 'MkuSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    width: {
      type: Number,
      default: 50
    },
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return SIZE_VALUE.includes(val)
      }
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      switchValue: this.value
    }
  },
  watch: {
    value: {
      handler (n, o) {
        this.handleValueChange(n, o)
      },
      immediate: true
    }
  },
  computed: {
    switchClasss () {
      return [
        'mku-switch', {
          'mku-switch--lg': this.size === 'large',
          'mku-switch--sm': this.size === 'small',
          'mku-switch--opened': this.switchValue,
          'mku-switch--disabled': this.disabled,
        }
      ]
    },
    switchBgColor () {
      let bgColor = ''
      if (this.switchValue && this.activeColor) {
        bgColor =  this.activeColor
      }
      if (!this.switchValue && this.inactiveColor) {
        bgColor =  this.inactiveColor
      }
      return bgColor
    },
    switchStyle () {
      let obj = {}
      obj.width = `${this.width}px`
      // 优先使用自定义背景色，否则不赋值（则使用默认主题色）
      if (this.switchBgColor) obj.backgroundColor = this.switchBgColor
      return obj
    },
    iconLoadingStyle () {
      let obj = {}
      if (this.switchBgColor) obj.borderColor = `transparent transparent transparent ${this.switchBgColor}`
      return obj
    }
  },
  methods: {
    handleValueChange (newVal) {
      const isPreicate = [this.trueValue, this.falseValue].includes(newVal)
      if (!isPreicate) {
        throw TypeError(`The switch value is invalid， expected to pass in \'${this.trueValue}\' and \'${this.falseValue}\'.`)
        return
      }
      this.switchValue = newVal === this.trueValue
    },
    handleClick (e) {
      if (this.disabled || this.loading) return

      this.switchValue = !this.switchValue
      const value = this.switchValue ? this.trueValue : this.falseValue
      this.$emit('input', value)
      this.$emit('change', value)
    }
  }
}
</script>
