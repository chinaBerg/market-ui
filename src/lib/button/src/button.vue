<template>
  <div class="mku-button-wrapper" :style="buttonWrapperStyle">
    <button
      :class="['mku-button', {
        'mku-button--primary': type === 'primary',
        'mku-button--dashed': type === 'dashed',
        'mku-button--default': type === 'default',
        'mku-button--danger': type === 'danger',
        'mku-button--link': type === 'link',
        'mku-button--lg': size === 'large',
        'mku-button--sm': size === 'small',
        'mku-button--loading': loading
      }]"
      :disabled="disabled"
      @click="handleClick"
    >
      <mku-icon v-if="icon || loading" :type="buttonIcon"></mku-icon>
      <slot name="default"></slot>
    </button>
  </div>
</template>

<script>
import MkuIcon from '../../icon';

export default {
  name: 'MkuButton',
  components: {
    MkuIcon,
  },
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['primary', 'default', 'dashed', 'danger', 'link'].includes(val),
    },
    // 块级按钮
    block: {
      type: Boolean,
      default: false,
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'default',
      validator: (val) => ['large', 'default', 'small'].includes(val),
    },
    // 图标
    icon: {
      type: String,
      default: '',
    },
    // loading状态
    loading: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 作为link进行连接跳转，类似于a标签
    href: {
      type: String,
      default: '',
    },
    // 外链跳转方式，只有href设置了之后生效
    target: {
      type: String,
      default: '_self',
    },
  },
  data() {
    return {

    };
  },
  watch: {
  },
  computed: {
    // button容器的样式，block为true时，展示块级属性
    buttonWrapperStyle() {
      const obj = {};
      if (this.block) {
        obj.display = 'block';
      }
      return obj;
    },
    // 按钮的图标，加载状态只用loading icon
    buttonIcon() {
      return this.loading ? 'loading' : this.icon;
    },
  },
  methods: {
    handleClick() {
      if (this.loading) return;
      if (this.href) {
        window.open(this.href, this.target);
        return;
      }
      this.$emit('click');
    },
  },
};
</script>
