<template>
  <li class="mku-breadcrumb-item">
    <a
      class="mku-breadcrumb-item__link"
      v-if="to"
      :href="to"
      :target="target"
      @click="handleClick">
      <slot/>
    </a>
    <span class="mku-breadcrumb-item__span" v-else>
      <slot/>
    </span>

    <span class="mku-breadcrumb-item__separator">
      <separator />
    </span>
  </li>
</template>

<script>
import Separator from './separator'
export default {
  name: 'MkuBreadcrumbItem',
  components: { Separator },
  props: {
    to: {
      type: [String, Object]
    },
    routerType: {
      type: String,
      default: 'push',
      validator: val => {
        return ['push', 'replace'].includes(val)
      }
    },
    target: {
      type: String
    }
  },
  methods: {
    handleClick (event) {
      if (!this.to) return
      if (this.target) return

      const router = this.$router

      if (router) {
        event.preventDefault()
        this.$router[this.routerType](this.to)
      } else {
        window.location.href = this.to
      }
    }
  }
}
</script>
