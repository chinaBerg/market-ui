<template>
  <div :class="formItemClasss">
    <label :class="labelClasss" :style="labelStyle">
      {{label}}
    </label>
    <div class="mku-form-item__content">
      <slot></slot>
      <p class="mku-form-item__error" v-if="isShowMessage">
        {{validateMessage}}
      </p>
    </div>
  </div>
</template>

<script>
import schema from 'async-validator'
import { isFunction } from '../../../utils/assist'

const FormItem = 'mku-form-item'

export default {
  name: 'MkuFormItem',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    labelWidth: {
      type: Number
    },
    labelPosition: {
      type: String,
      default: 'right',
      validator: val => {
        return ['left', 'top', 'right'].includes(val)
      }
    },
    showMessage: {
      type: Boolean,
      default: undefined
    }
  },
  inject: [
    'mkuForm'
  ],
  data () {
    return {
      validateState: null,
      validateMessage: ''
    }
  },
  watch: {
  },
  computed: {
    // 组合FormItem的class
    formItemClasss () {
      return [
        FormItem, {
          [`${FormItem}--column`]: this.labelPosition === 'top'
        }
      ]
    },
    // 组合label的class
    labelClasss () {
      const isRequired = this.formRules.some(rule => rule.required)
      return [
        `${FormItem}__label`, {
          [`${FormItem}--required`]: isRequired,
          [`${FormItem}--column`]: this.labelPosition === 'top'
        }
      ]
    },
    // 计算label的内联样式
    labelStyle () {
      let styles = {}
      if (this.mkuForm.labelWidth) styles.width = `${this.mkuForm.labelWidth}px`
      if (this.labelWidth) styles.width = `${this.labelWidth}px`
      if (this.labelPosition === 'right') styles.textAlign = 'right'

      return styles
    },
    // FormItem的所有rules
    formRules () {
      const rules = this.mkuForm.rules
      return rules && rules[this.prop] || []
    },
    // FormItem的所有trigger为change的rules
    rulesOfChange () {
      return this.formRules.filter(rule => rule.trigger && rule.trigger.includes('change'))
    },
    // FormItem的所有trigger为blur的rules
    rulesOfBlur () {
      return this.formRules.filter(rule => rule.trigger && rule.trigger.includes('blur'))
    },
    // 是否显示校验错误的提示信息
    isShowMessage () {
      if (this.validateState !== 'error') return false
      if (this.showMessage !== undefined) return this.showMessage
      return this.mkuForm.showMessage
    }
  },
  created () {
    // 只有需要验证的FormItem才需要如下操作：
    // 1.在Form缓存该FormItem
    // 2.监听FormItem内部表单相关组件值的变化
    // 3.记录原数据，重置不是清空，是重置到原数据
    if (this.prop) {
      this.mkuForm.cacheFormItem(this)
      // 防止重复监听
      this.$off('onFormItemChange', this.onFieldChange)
      this.$on('onFormItemChange', this.onFieldChange)
      this.$off('onFormItemBlur', this.onFieldBlur)
      this.$on('onFormItemBlur', this.onFieldBlur)
      this.originFieldData = this.mkuForm.model[this.prop]
    }
  },
  beforeDestroy() {
    if (this.prop) {
      this.mkuForm.removeFormItem(this)
    }
  },
  methods: {
    // 当验证的组件触发change事件后，触发验证器
    onFieldChange () {
      if (!this.rulesOfChange.length) return true
      this.validate(this.formRulesOfChang)
    },
    // 当验证的组件触发blur事件后，触发验证器
    onFieldBlur () {
      if (!this.rulesOfBlur.length) return true
      this.validate(this.rulesOfBlur)
    },
    /**
     * @method validate
     * @description 验证当前规则是否合法
     * @param { Array } rules 待验证的规则
     * @param { Function } callback 验证后的回调
     */
    validate (rules, callback) {
      // 设置验证规则和值
      const descriptor = { [this.prop]: rules || this.formRules }
      const source = { [this.prop]: this.mkuForm.model[this.prop] }
      // 初始化 async-validator 插件
      // doc of npm: https://www.npmjs.com/package/async-validator
      const validator = new schema(descriptor)
      validator.validate(source, err => {
        if (err) {
          this.validateState = 'error'
          this.validateMessage = err[0].message
        } else {
          this.validateState = 'success'
          this.validateMessage = ''
        }
        isFunction(callback) && callback(this.validateMessage)
      })
    },
    /**
     * @method resetField
     * @description 重置当前FormItem到初始状态
     */
    resetField () {
      this.validateState = null
      this.validateMessage = ''
      this.mkuForm.model[this.prop] = this.originFieldData
    }
  }
}
</script>
