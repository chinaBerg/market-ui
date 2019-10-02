<template>
  <div class="nav-slide-container">
    <ul>
      <li class="nav-slide-item"
        >
        <h3 class="">组件</h3>
        <mku-menu :default-active="$route.name">
          <mku-menu-group
            :title="group.name"
            v-for="(group, groupIndex) in navConfig"
            :key="groupIndex"
          >
            <mku-menu-item
              class-name="nav-item__name"
              v-for="(item, index) in group.children"
              :key="index"
              :name="item.name"
              :route="{path: item.path}"
            >
              {{item.meta.title}}
            </mku-menu-item>
          </mku-menu-group>
        </mku-menu>
      </li>
    </ul>
  </div>
</template>

<script>
import navConfigs from '../router/routes'

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
// @import '../../src/styles/color';

.nav-slide-container {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  z-index: 9;
  width: 200px;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  .nav-slide-item {
    > h3 {
      display: block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 500;
    }
    .nav-item__name {
      text-indent: 1em;
    }
  }
}
</style>
