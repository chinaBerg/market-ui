export default {
  methods: {
    dispatch(componentName, eventName, ...params) {
      let parent = this.$parent || this.$root;
      let { name } = parent.$options;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName, ...params]);
      }
    },
    broadcast(componentName, eventName, ...params) {
      let children = [...this.$children];
      while (children.length) {
        const child = children.shift();
        if (child.$options.name !== componentName) {
          if (child.$children.length) {
            children.push(...child.$children);
          }
        } else {
          child.$emit.call(child, eventName, ...params);
          children = [];
        }
      }
    },
  },
};
