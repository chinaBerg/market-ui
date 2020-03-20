<template>
  <div :class="classs" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentUpward } from '../../../utils/assist'

export default {
  name: 'MkuDropdownItem',
  props: {
    name: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dropdown: null
    }
  },
  computed: {
    classs () {
      return [ 'mku-dropdown-item', {
        'mku-dropdown-item--disabled': this.disabled,
        'mku-dropdown-item--active': this.active
      }]
    }
  },
  created () {
    this.dropdown = findComponentUpward(this, 'MkuDropdown')
  },
  methods: {
    handleClick () {
      if (this.disabled) return

      if (this.dropdown) {
        this.dropdown.$emit('click', this.name)
      }
    }
  }
}
</script>
