<template>
  <div class="nav-slide-container">
    <mku-menu :default-active="$route.name" :width="240">
      <mku-menu-group
        :title="group.name"
        v-for="(group, groupIndex) in navConfig"
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
import navConfig from '../router/routes';

export default {
  name: 'DemoHeader',
  data() {
    navConfig.unshift({
      name: '指南',
      children: [
        {
          name: 'Install',
          path: '/docs/install',
          meta: { title: '安装' },
        },
        {
          name: 'QuickStart',
          path: '/docs/quick_start',
          meta: { title: '快速上手' },
        },
      ],
    });
    return {
      navConfig,
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
  overflow-x: hidden;
  overflow-y: auto;
  .nav-item__name {
    text-indent: 1em;
  }
  .mku-menu {
    border-right: 1px solid transparent;
  }
}
</style>
