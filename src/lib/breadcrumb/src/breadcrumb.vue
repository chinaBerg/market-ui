<template>
  <ul class="mku-breadcrumb">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'MkuBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
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
