<template>
  <label :class="radioClasss">
    <span class="mku-radio__inner" v-if="!isButtonGroup"></span>
    <input
      type="radio"
      class="mku-radio__input"
      :value="label"
      :checked="checked"
      :disabled="disabled"
      @change="handleRadioChange"
    />
    <slot>{{label}}</slot>
  </label>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist'
import Emitter from '../../../utils/emitter'

export default {
  name: 'MkuRadio',
  mixins: [Emitter],
  props: {
    // 单独使用时绑定的值
    value: {
      type: [String, Number]
    },
    // 作为group使用时，radio项指定的value值
    // 参考单选按钮的绑定：https://cn.vuejs.org/v2/guide/forms.html
    label: {
      type: [String, Number]
    },
    // 是否禁用当前radio项
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      parent: null,
      radioValue: this.value
    }
  },
  computed: {
    // 拼接radio的chassName
    radioClasss () {
      return [
        'mku-radio', {
          'mku-radio--actived': this.checked,
          'mku-radio--disabled': this.disabled
        }
      ]
    },
    // 根据是否作为group使用，定义选中时的值
    selectedValue () {
      if (!this.parent) return this.value
      return this.parent.radioGroupValue
    },
    // 判断是否选中
    checked () {
      return this.label === this.selectedValue
    },
    isButtonGroup () {
      return this.parent && this.parent.type === 'button'
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'MkuRadioGroup')
  },
  methods: {
    /**
     * @method handleRadioChange
     * @description 监听radio值的变化：
     * - 作为单独使用时，暴露change事件和支持Form表单使用、
     * - 作为group使用时，将group组件进行事件的暴露
     */
    handleRadioChange (event) {
      if (this.disabled) return

      const checked = event.target.checked
      if (this.parent) {
        this.parent.change(this.label)
      } else {
        this.$emit('input', this.label)
        this.$emit('change', this.label)
        this.dispatch('MkuFormItem', 'onFormItemChange', this.label)
      }
    }
  }
}
</script>
