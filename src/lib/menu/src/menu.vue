<template>
  <div :class="menuClasses" :style="menuStyle">
    <slot></slot>
  </div>
</template>

<script>
import { isArray } from '../../../utils/assist';

const MENU = 'mku-menu';

export default {
  name: 'MkuMenu',
  props: {
    // 模式：水平或者垂直 TODO：目前水平模式尚未支持
    mode: {
      type: String,
      default: 'vertical',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    // 主题， TODO：尚未支持
    theme: {
      type: String,
      default: 'light',
      validator: (val) => ['light', 'dark'].includes(val),
    },
    // 自定义宽度
    width: {
      type: Number,
      default: 200,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
    animate: {
      type: String,
      default: 'linear',
    },
    // 只允许同时展开一个子菜单
    uniqueOpen: {
      type: Boolean,
      default: false,
    },
    // 默认选中的菜单项
    defaultActive: {
      type: String,
    },
    // 默认展开的submenu
    defaultOpened: {
      type: Array,
      default: () => ([]),
    },
  },
  provide() {
    return {
      menu: this,
    };
  },
  data() {
    return {
      submenus: {}, // 所有submenu列表
      activeItemName: null, // 当前选中的菜单项
    };
  },
  watch: {
  },
  computed: {
    menuClasses() {
      return [
        MENU,
        {
          [`${MENU}--vertical`]: this.mode === 'vertical',
          [`${MENU}--horizontal`]: this.mode === 'horizontal',
          [`${MENU}--light`]: this.theme === 'light',
          [`${MENU}--dark`]: this.theme === 'dark',
        },
      ];
    },
    menuStyle() {
      const obj = {};
      // 只有vertical模式，才支持定宽
      if (this.mode === 'vertical') {
        Object.assign(obj, {
          width: `${this.width}px`,
        });
      }
      return obj;
    },
  },
  created() {
    this.$on('menu-item-click', this.handleMenuItemClick);
  },
  methods: {
    /**
     * @method cacheSubmenu
     * @description 缓存所有的submenu，由submenu调用
     */
    cacheSubmenu(submenu) {
      this.$set(this.submenus, submenu.name, submenu);
    },
    /**
     * @method updateSubmenu
     * @description 由submenu组件调用触发的事件
     * 用来更新submenu的opened状态，并触发opened-change、opened、closed事件给用户
     */
    updateSubmenu(names, isOpen, siblingsNames) {
      this.updateSubmenuState(names, isOpen, siblingsNames);
      this.openedChangeCallback(names, isOpen);
    },
    /**
     * @method updateSubmenuState
     * @description 更新submenu的opened状态
     * @param { String | Array<String> } names 需要更新opened状态的submenu的name或name集合
     * @param { Boolean } isOpen 更新的状态
     * @param { Array<String> } siblingsNames 当前submenu的兄弟submenu的name集合，非必填
     */
    updateSubmenuState(names, isOpen, siblingsNames) {
      if (!names || !names.length) return;
      let targetNames = isArray(names) ? names : [names];
      // 如果开启了uniqueOpen属性，则只对第一个name生效
      if (this.uniqueOpen) {
        targetNames = targetNames.slice(0, 1);
      }

      // 更新submenu的状态
      targetNames.forEach((submenu) => {
        if (submenu in this.submenus) {
          this.submenus[submenu].isOpen = isOpen;
        }
      });

      // 更新兄弟submenu的状态
      if (siblingsNames && siblingsNames.length) {
        siblingsNames.forEach((submenu) => {
          this.submenus[submenu] = false;
        });
      }
    },
    /**
     * @method openedChangeCallback
     * @description 由submenu opened 状态变化后触发的回调函数
     *  暴露给用户事件接口
     */
    openedChangeCallback(submenuName, openedState) {
      // 查询所有打开、关闭以及全部的submenu的name
      const openedNames = [];
      const closedNames = [];
      const allNames = [];
      for (const prop in this.submenus) {
        const submenu = this.submenus[prop];
        const { name } = submenu;
        allNames.push(name);
        if (submenu.isOpen) openedNames.push(name);
        else closedNames.push(name);
      }

      // 暴露opened、closed、opened-change事件
      const cbParams = {
        name: submenuName,
        state: openedState,
        openedNames,
        closedNames,
        allNames,
      };
      if (openedState) this.$emit('opened', cbParams);
      else this.$emit('closed', cbParams);
      this.$emit('opened-change', cbParams);
    },
    /**
     * @method routeTo
     * @descrition 跳转到menu item设置的路由地址
     * @param { Object } item 菜单项
     * @param { Function } onComplete vue-router跳转完成的回调
     * @param { Function } onAbord vue-router跳转失败或终止的回调
     */
    routeTo(item, onComplete, onAbord) {
      const { target, routeType, route } = item;
      // target属性存在时，优先以外链进行跳转
      if (target) {
        window.open(route, target);
        return;
      }
      try {
        this.$router[routeType](item.route, onComplete, onAbord);
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * @method handleMenuItemClick
     * @description 监听菜单项的点击事件
     * - 暴露给用户select事件
     * - 如果开启了route属性，则进行外链/路由跳转
     */
    handleMenuItemClick(item) {
      const currentActiveName = this.activeItemName;
      this.activeItemName = item.name;
      this.$emit('select', item.name);

      if (item.route) {
        this.routeTo(item, () => {}, (err) => {
          this.activeItemName = currentActiveName;
          if (err) console.error(err);
        });
      }
    },
    /**
     * @method open
     * @description 手动展开submenu的方法
     * @param { String | Array<string> } names submenus的name或name集合
     */
    open(names) {
      const isNeedUpdate = this.checkSubmenuState(names, true);
      if (!isNeedUpdate) return;
      this.updateSubmenuState(names, true);
      this.openedChangeCallback(null, true);
    },
    /**
     * @method close
     * @description 手动关闭submenu的方法
     * @param { String | Array<string> } names submenus的name或name集合
     */
    close(names) {
      const isNeedUpdate = this.checkSubmenuState(names, false);
      if (!isNeedUpdate) return;
      this.updateSubmenuState(names, false);
      this.openedChangeCallback(null, true);
    },
    // 检测是否需要触发open或close方法
    checkSubmenuState(names, state) {
      let isNeedUpdate = false;
      const submenus = isArray(names) ? names : [names];
      submenus.forEach((name) => {
        if (this.submenus[name].isOpen !== state) {
          isNeedUpdate = true;
        }
      });
      return isNeedUpdate;
    },
  },
};
</script>
