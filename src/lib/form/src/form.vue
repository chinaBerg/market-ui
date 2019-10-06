<template>
  <form class="mku-form">
    <slot></slot>
  </form>
</template>

<script>
import { isFunction, isString, isArray } from '../../../utils/assist'

const getEmptyObject = () => ({})

export default {
  name: 'MkuForm',
  props: {
    // 表单的数据对象
    model: {
      type: Object,
      default: getEmptyObject
    },
    rules: {
      type: Object,
      default: getEmptyObject
    },
    labelWidth: {
      type: Number
    },
    showMessage: {
      type: Boolean,
      default: true
    }
  },
  provide () {
    return {
      mkuForm: this
    }
  },
  data () {
    return {
      formItems: []
    }
  },
  methods: {
    /**
     * @method cacheFormItem
     * @description 缓存formItem组件，由formItem组件调用
     */
    cacheFormItem (formItem) {
      this.formItems.push(formItem)
    },
    /**
     * @method cacheFormItem
     * @description 移除某个缓存的formItem组件，由formItem组件调用
     */
    removeFormItem (formItem) {
      this.formItems = this.formItems.filter(item => item !== formItem)
    },
    /**
     * @method validate
     * @description 公共的迭代验证FormItem方法
     * @param { Function } successCb 验证完成的回调，会回填一个是否成功的参数
     * @param { Function } errorCb 验证出错的回调，会回填一个error对象
     */
    iterateValidate (formItems, successCb, errorCb) {
      try {
        let validateState = true
        formItems.forEach(formItem => {
          formItem.validate(null, err => {
            if (err) {
              validateState = false
            }
          })
        })
        // 同时支持promise和回调两种调用方式
        isFunction(successCb) && successCb(validateState)
      } catch (error) {
        isFunction(errorCb) && errorCb(error)
      }
    },
    /**
     * @method validate
     * @description 对外暴露方法，验证所有的需要验证的FormItem
     * @param { Function } successCb 验证完成的回调，会回填一个是否成功的参数
     * @param { Function } errorCb 验证出错的回调，会回填一个error对象
     */
    validate (successCb, errorCb) {
      this.iterateValidate(this.formItems, successCb, errorCb)
    },
    /**
     * @method validateField
     * @description 对外暴露方法，验证部分表单域
     */
    validateField (fields, successCb, errorCb) {
      if (isString(fields)) fields = [fields]
      if (isArray(fields)) {
        const formItems = this.formItems.filter(item => fields.includes(item.prop))
        this.iterateValidate(formItems, successCb, errorCb)
      }
    },
    /**
     * @method validateField
     * @description 对外暴露方法，移除所有验证结果并重置数据到初始状态
     */
    resetFields () {
      this.formItems.forEach(formItem => formItem.resetField())
    }
  }
}
</script>
