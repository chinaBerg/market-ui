<template>
  <li class="mku-options-group">
    <div class="mku-options-group__title" v-if="label" @click.stop="handleClick">
      <slot name="title">{{label}}</slot>
    </div>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'MkuOptionsGroup',
  props: {
    label: {
      type: String
    }
  }
}
</script>
