<template>
  <i
    ref="icon"
    :class="iconClassNames"
    :style="iconStyle"
    @click="$emit('click')"
  ></i>
</template>

<script>
export default {
  name: 'MkuIcon',
  props: {
    // 自定义class
    className: {
      type: String,
      default: '',
    },
    // 图标类型
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  computed: {
    // 图标的class name
    iconClassNames() {
      return [
        'mku-icon',
        `mku-icon-${this.type}`,
        this.className,
      ];
    },
    // 鼠标划过的样式
    iconStyle() {
      const obj = {};
      if (this.color) obj.color = this.color;
      if (this.size) obj.fontSize = this.size;
      return obj;
    },
  },
};
</script>
