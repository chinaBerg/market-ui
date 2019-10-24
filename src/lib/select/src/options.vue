<template>
  <li :class="optionsClasss" @click="handleOptionsClick">
    <slot>
      {{label || value}}
    </slot>
  </li>
</template>

<script>
export default {
  name: 'MkuOptions',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: Boolean
  },
  inject: [
    'MkuSelect'
  ],
  data () {
    return {
      // activeI
    }
  },
  watch: {
  },
  computed: {
    // 返回所有被选中的options
    optionsSelected () {
      return this.MkuSelect.optionsSelected
    },
    optionsClasss () {
      const isActived = this.optionsSelected.some(item => item.value === this.value)
      return [
        'mku-options', {
          'mku-options--actived': isActived,
          'mku-options--disabled': this.disabled
        }
      ]
    }
  },
  mounted () {
    console.log('dis', this.disabled)
  },
  methods: {
    handleOptionsClick (event) {
      if (this.disabled) {
        return event.stopPropagation()
      }

      this.MkuSelect.change({
        value: this.value,
        text: this.label || (this.$el && this.$el.textContent)
      })
    }
  }
}
</script>
