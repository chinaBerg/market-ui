<template>
  <div id="app">
    <template v-if="isComponent">
      <main-content />
    </template>

    <router-view v-else />
  </div>
</template>

<script>
import MainContent from './layout/content.vue';

export default {
  name: 'App',
  components: {
    MainContent,
  },
  computed: {
    isComponent() {
      return this.$route.meta.type === 'component';
    },
  },
};
</script>
