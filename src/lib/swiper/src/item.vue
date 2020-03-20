<template>
  <div class="mku-swiper__item" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MkuSwiperItem',
  inject: [
    'root'
  ],
  computed: {
    itemStyle () {
      return {
        width: this.root.swiperWidth + 'px'
      }
    }
  },
  mounted () {
    this.root.updateItems()
  }
}
</script>
