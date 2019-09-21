export default {
  methods: {
    dispatch (componentName, eventName, ...params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName, ...params])
      }
    },
    broadcast (componentName, eventName, ...params) {
      let children = [...this.$children]
      while (children.length) {
        let child = children.shift()
        if (child.$options.name === componentName) {
          child.$emit.call(child, eventName, ...params)
          children = []
        } else {
          if (child.$children.length) {
            children.push(...child.$children)
          }
        }
      }
    }
  }
}