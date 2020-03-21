<template>

  <li :class="[menuItemClasses, className]" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
import Emitter from '../../../utils/emitter';
import InjectMixin from '../mixins/inject';

const PREFIX_MENU_ITEM = 'mku-menu-item';

export default {
  name: 'MkuMenuItem',
  mixins: [Emitter, InjectMixin],
  props: {
    // 唯一标识符
    name: {
      type: String,
      required: true,
    },
    // 自定义className
    className: {
      type: String,
      default: '',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 支持vue-router的跳转
    route: {
      type: [Object, String],
    },
    // vue-router的跳转方式，只在route传入时有效
    routeType: {
      type: String,
      default: 'push',
    },
    // 作为外链进行跳转
    target: {
      type: String,
    },
  },
  inject: ['menu'],
  data() {
    return {
      // 后取menu组件中选中的菜单项
      activedName: this.menu.defaultActive,
    };
  },
  watch: {
    'menu.activeItemName': {
      handler(n) {
        this.activedName = n;
      },
    },
  },
  computed: {
    // 拼接classNames
    menuItemClasses() {
      return [
        PREFIX_MENU_ITEM,
        {
          [`${PREFIX_MENU_ITEM}--active`]: this.isActive,
          [`${PREFIX_MENU_ITEM}--disabled`]: this.disabled,
        },
      ];
    },
    // 是否选中
    isActive() {
      return this.name === this.activedName;
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.dispatch('MkuMenu', 'menu-item-click', this);
      this.$emit('click', this);
    },
  },
};
</script>
