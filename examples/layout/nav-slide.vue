<template>
  <div class="nav-slide-container">
    <mku-menu :default-active="$route.name" :width="300">
      <mku-menu-group
        :title="group.name"
        v-for="(group, groupIndex) in NavConfigs"
        :key="groupIndex">
        <mku-menu-item
          class-name="nav-item__name"
          v-for="(item, index) in group.children"
          :key="index"
          :name="item.name"
          :route="{path: item.path}">
          {{item.meta.title}}
        </mku-menu-item>
      </mku-menu-group>
    </mku-menu>
  </div>
</template>

<script>
import { NavConfigs } from '@/router/routes/index.js';

export default {
  name: 'DemoHeader',
  data() {
    return {
      NavConfigs,
    };
  },
  methods: {
    handleRouteClick(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="less" scoped>
.nav-slide-container {
  background: #fff;
  padding: 20px 0;
  .nav-item__name {
    text-indent: 1em;
  }
  .mku-menu {
    border-right: 1px solid transparent !important;
  }
}
</style>
