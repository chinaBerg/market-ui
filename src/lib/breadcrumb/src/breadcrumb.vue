<template>
  <ul class="mku-breadcrumb">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'MkuBreadcrumb',
  props: {
    // 分割符字符串
    separator: {
      type: String,
      default: '/'
    },
    // 分隔符render函数
    separatorRender: {
      type: Function
    }
  },
  provide () {
    return {
      MkuBreadcrumb: this
    }
  }
}
</script>
