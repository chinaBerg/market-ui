<template>
  <li :class="menuItemClasses">
    <slot></slot>
  </li>
</template>

<script>
const PREFIX_MENU_ITEM = 'mku-menu-item'

export default {
  name: 'MkuMenuItem',
  data () {
    return {
      // active: 1
    }
  },
  computed: {
    menuItemClasses () {
      return [
        PREFIX_MENU_ITEM,
        {
          [`${PREFIX_MENU_ITEM}--active`]: true
        }
      ]
    }
  },
}
</script>
