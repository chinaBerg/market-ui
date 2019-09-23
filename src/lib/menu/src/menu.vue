<template>
  <div :class="menuClasses" :style="menuStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MkuMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical',
      validator: val => {
        return ['horizontal', 'vertical'].includes(val)
      }
    },
    theme: {
      type: String,
      default: 'light',
      validator: val => {
        return ['light', 'dark'].includes(val)
      }
    },
    width: {
      type: Number,
      default: 200
    }
  },
  provide: {
    app: this
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
    menuClasses () {
      return [
        'mku-Menu-wrapper',
        {
          'mku-Menu--vertical': this.mode === 'vertical',
          'mku-Menu--horizontal': this.mode === 'horizontal',
          'mku-Menu--light': this.theme === 'light',
          'mku-Menu--dark': this.theme === 'dark'
        }
      ]
    },
    menuStyle () {
      let obj = {}
      // 只有vertical模式，才支持定宽
      if (this.mode === 'vertical') {
        Object.assign(obj, {
          width: `${this.width}px`
        })
      }
      return obj
    }
  },
  methods: {
  }
}
</script>
