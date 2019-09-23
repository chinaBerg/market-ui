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
      <i v-if="icon || loading" :class="['iconfont', buttonIconfont]"></i>
      <slot name="default"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MkuButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      validator: val => {
        return ['primary', 'default', 'dashed', 'danger', 'link'].includes(val)
      }
    },
    // 块级按钮
    block: {
      type: Boolean,
      default: false
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return ['large', 'default', 'small'].includes(val)
      }
    },
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // loading状态
    loading: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 作为link进行连接跳转，类似于a标签
    href: {
      type: String,
      default: ''
    },
    // 外链跳转方式，只有href设置了之后生效
    target: {
      type: String,
      default: '_self'
    }
  },
  data () {
    return {

    }
  },
  watch: {
  },
  computed: {
    // button容器的样式，block为true时，展示块级属性
    buttonWrapperStyle () {
      let obj = {}
      if (this.block) {
        obj.display = 'block'
      }
      return obj
    },
    // 按钮的图标，加载状态只用loading icon
    buttonIconfont () {
      if (this.loading) return 'iconloading'
      return this.icon ? `icon${this.icon}` : ''
    }
  },
  methods: {
    handleClick () {
      if (this.loading) return
      if (this.href) {
        window.open(this.href, this.target)
        return
      }
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
@import '../../../styles/color.less';
@import '../../../styles/size.less';

.mku-button-wrapper {
  display: inline-block;
  .mku-button {
    display: block;
    width: 100%;
    height: @height-default-size;
    padding: 0 13px;
    border-radius: @border-radius-default;
    border: 1px solid @border-color-base;
    background: @background-color-base;
    outline: none;
    cursor: pointer;
    user-select: none;
    transition-property: opacity, border-color, color;
    transition-duration: .3s;
    /* primary button */
    > .iconfont {
      display: inline-block;
    }
    &.mku-button--primary {
      border: 1px solid @color-primary;
      color: @color-white;
      background-color: @color-primary;
      &:hover {
        .button-opacity()
      }
    }
    /* default button*/
    &.mku-button--default:hover {
      color: @color-primary;
      border: 1px solid @color-primary;
    }
    /* dashed button */
    &.mku-button--dashed {
      border: 1px dashed @border-color-base;
      &:hover {
        color: @color-primary;
        border-color: @color-primary;
      }
    }
    /* danger button */
    &.mku-button--danger {
      border: 1px solid @color-danger;
      color: @color-white;
      background-color: @color-danger;
      &:hover {
        .button-opacity()
      }
    }
    /* link button */
    &.mku-button--link {
      border: 0;
      color: @color-primary;
      background-color: @background-color-base;
      &:hover {
        .button-opacity()
      }
    }
    /* 三种按钮尺寸 */
    &.mku-button--lg {
      height: @height-large-size;
    }
    &.mku-button--sm {
      height: @height-small-size;
    }
    &.mku-button--loading {
      .button-opacity();
      > .iconfont {
        animation: rotate 2s linear infinite;
      }
    }
  }
}
.button-opacity {
  opacity: .8;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
