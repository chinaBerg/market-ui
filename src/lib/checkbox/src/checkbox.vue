<template>
  <label :class="checkboxClasss">
    <span class="mku-checkbox-content">
      <span class="mku-checkbox">
        <span class="mku-checkbox-inner"></span>
        <!-- 单个复选框的v-model会绑定到一个布尔值，多个复选框的v-model会绑定到一个数组 -->
        <!-- 参考：https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86 -->
        <input
          type="checkbox"
          class="mku-checkbox-input a"
          v-if="isGroup"
          v-model="checkboxSelectedArray"
          :value="label"
          :disabled="disabled"
          @change="handleCheckboxChange"
        />
        <input
          type="checkbox"
          class="mku-checkbox-input b"
          v-else
          :checked="checkboxValue"
          :disabled="disabled"
          @change="handleCheckboxChange"
        />
      </span>
      <span>
        <slot></slot>
      </span>
    </span>
  </label>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist'
import Emitter from '../../../utils/emitter'

export default {
  name: 'MkuCheckbox',
  mixins: [Emitter],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
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
    indeterminate: {
      type: Boolean,
      default: false
    },
    label: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  data () {
    return {
      checkboxValue: false, // 单个使用时，当前checkbox的值
      checkboxSelectedArray: [], // 作为group使用时所有选中项的数组集合
      isGroup: false, // 是否作为group使用
      parent: null // group组件
    }
  },
  watch: {
    // 监听value，给checkboxValue赋值，包含了初始化赋值
    value: {
      handler (newValue) {
        const isPredict = [this.trueValue, this.falseValue].includes(newValue)
        console.log('newValue', newValue)
        if (isPredict) {
          this.checkboxValue = newValue === this.trueValue
          return
        }
        throw TypeError('请绑定trueValue或falseValue指定的值')
      },
      immediate: true
    }
  },
  computed: {
    checkboxClasss () {
      let isChecked
      let indeterminate
      if (!this.isGroup) {
        isChecked = this.checkboxValue && !this.indeterminate
        indeterminate = this.indeterminate
      } else {
        isChecked = this.checkboxSelectedArray.includes(this.label)
        indeterminate = false
      }
      return [
        'mku-checkbox-wrapper', {
          'mku-checkbox--checked': isChecked,
          'mku-checkbox--disabled': this.disabled,
          'mku-checkbox--indeterminate': indeterminate
        }
      ]
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'MkuCheckboxGroup')
    if (this.parent) {
      this.parent.updateAllCheckbox()
    }
  },
  methods: {
    handleCheckboxChange (event) {
      if (this.disabled) return

      const checked = event.target.checked
      const value = checked ? this.trueValue : this.falseValue
      this.checkboxValue = value
      this.$emit('input', value)

      if (this.isGroup) {
        // 作为group使用时
        // change事件、form验证等应由group组件触发
        this.parent.change(this.checkboxSelectedArray)
      } else {
        // 作为单个checkbox使用时
        // 由自身触发change事件、Form验证
        this.$emit('change', value)
        this.dispatch('MkuForm', 'onFormItemChange', value)
      }
    }
  }
}
</script>
