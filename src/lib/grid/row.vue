<template>
  <div :class="['mku-row', 'mku-global-clear', className]" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MkuRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      gutter: this.gutter
    }
  },
  computed: {
    rowStyle () {
      let offset = -this.gutter / 2 + 'px'
      return {
        marginLeft: offset,
        marginRight: offset
      }
    }
  }
}
</script>

<style lang="less">

</style>
