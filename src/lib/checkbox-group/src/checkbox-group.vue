<template>
  <div class="mku-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist'
import Emitter from '../../../utils/emitter'

export default {
  name: 'MkuCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default: val => ([])
    }
  },
  watch: {
    value: 'updateAllCheckbox'
  },
  mounted () {
    this.updateAllCheckbox()
  },
  methods: {
    updateAllCheckbox () {
      const checkboxs = findComponentsDownward(this, 'MkuCheckbox')
      if (checkboxs && checkboxs.length) {
        checkboxs.forEach(checkbox => {
          checkbox.isGroup = true
          checkbox.checkboxSelectedArray = this.value
        })
      }
    },
    change (data) {
      this.$emit('input', data)
      this.$emit('change', data)
      this.dispatch('MkuForm', 'onFormItemChange', data)
    }
  }
}
</script>
