<template>
  <li class="mku-submenu">
    <div class="mku-submenu-title" @click="updateOpenState">
      <slot name="title"></slot>
      <i :class="iconArrowClasss"></i>
    </div>

    <mku-collapse-transition
      :duration="transitionDuration"
      :animate="transitionAnimate"
    >
      <ul v-show="isOpen">
        <slot></slot>
      </ul>
    </mku-collapse-transition>
  </li>
</template>

<script>
import MkuCollapseTransition from '../../collapse-transition'
import Emitter from '../../../utils/emitter'
import InjectMixin from '../mixins/inject'
import { findSiblingsComponents } from '../../../utils/assist'

export default {
  name: 'MkuSubmenu',
  mixins: [Emitter, InjectMixin],
  components: {
    MkuCollapseTransition
  },
  props: {
    // submenu的唯一标识
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number
    },
    animate: {
      type: String
    }
  },
  data () {
    let isOpen
    if (this.menu.uniqueOpen) {
      isOpen = this.name === this.menu.defaultOpened[0]
    } else {
      isOpen = this.menu.defaultOpened.includes(this.name)
    }
    return {
      isOpen,
      openSubmenuNames: this.menu.defaultOpened
    }
  },
  computed: {
    // 拼接箭头的class name
    iconArrowClasss () {
      return [
        'iconfont',
        'iconarrow-down',
        'mku-icon__arrow',
        {
          'mku-icon__arrow--up': this.isOpen
        }
      ]
    },
    transitionDuration () {
      return this.duration || this.menu.duration
    },
    transitionAnimate () {
      return this.animate || this.menu.animate
    }
  },
  mounted () {
    this.menu.cacheSubmenu(this)
  },
  methods: {
    // 展开、收起submenu
    updateOpenState () {
      let siblingsNames = []
      // 只允许展开一个子菜单的处理
      if (this.menu.uniqueOpen) {
        const sibComponents = findSiblingsComponents(this, 'MkuSubmenu')
        if (sibComponents && sibComponents.length) {
          sibComponents.forEach(submenu => {
            siblingsNames.push(submenu.name)
          })
        }
      }

      this.menu.updateSubmenu(this.name, !this.isOpen, siblingsNames)
    }
  }
}
</script>
