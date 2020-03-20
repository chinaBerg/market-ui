<template>
  <li class="mku-menu-group">
    <div class="mku-menu-group__title" v-if="title">
      {{title}}
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MkuMenuGroup',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
