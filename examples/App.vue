<template>
  <div id="app">
    <template v-if="isComponent">
      <!-- <main-header /> -->
      <main-content />
    </template>

    <router-view v-else />
  </div>
</template>

<script>
import MainHeader from './layout/header'
import MainContent from './layout/content'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent
  },
  computed: {
    isComponent () {
      return this.$route.meta.type === 'component'
    }
  }
}
</script>
