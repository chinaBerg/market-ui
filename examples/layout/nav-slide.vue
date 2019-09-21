<template>
  <div class="nav-slide-container">
    <ul>
      <li
        v-for="(item, index) in navConfig"
        :key="index"
        @click="handleRouteClick(item)"
      >
        {{item.meta.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import navConfigs from '../router/nav.route'

export default {
  name: 'DemoHeader',
  data () {
    return {
      navConfig: navConfigs
    }
  },
  methods: {
    handleRouteClick (item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-slide-container {
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  z-index: 9;
  width: 200px;
  background: #fff;
  border-right: 1px solid #ccc;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
