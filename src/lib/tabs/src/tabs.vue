<template>
  <div :class="tabsClasss">
    <!-- head -->
    <div class="mku-tabs__head">
      <ul class="mku-tabs__head-nav">
        <li
          v-for="(item, index) in panes"
          :key="index"
          :class="navItemClasss(item)"
          @click="handleLabelClick(item)">
          <i :class="['mku-icon', 'mku-tabs__nav-icon', `mku-icon-${item.icon}`]" v-if="item.icon"></i>
          <span class="mku-tab__label">{{item.label}}</span>
          <i class="mku-icon mku-icon-error" v-if="closable" @click.stop="handleClose(item)"></i>
        </li>
      </ul>

      <div class="mku-tabs__head-right">
        <slot name="extra"></slot>
      </div>

      <!-- 下划线 -->
      <span
        class="mku-tabs__underline"
        v-if="type === 'line'"
        :style="underlineStyle">
      </span>
    </div>

    <!-- panes -->
    <div class="mku-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../../utils/assist'
import { getStyle } from '../../../utils/dom'

export default {
  name: 'MkuTabs',
  props: {
    value: {
      type: [String, Number]
    },
    // 类型
    type: {
      type: String,
      default: 'line',
      validator: val => {
        return ['line', 'card'].includes(val)
      }
    },
    // 可删除
    closable: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      root: this
    }
  },
  data () {
    return {
      panes: [],
      currentName: undefined
    }
  },
  watch: {
    value: {
      handler: 'handleValueChange',
      immediate: true
    }
  },
  computed: {
    // 拼接tabs的class name
    tabsClasss () {
      return ['mku-tabs', {
        'mku-tabs--line': this.type === 'line',
        'mku-tabs--card': this.type === 'card'
      }]
    },
    // 拼接菜单项的class name
    navItemClasss () {
      return (item)  => {
        const prefix = 'mku-tabs__nav-item'
        return [prefix, {
          [`${prefix}--acitve`]: item.nameValue === this.currentName,
          [`${prefix}--disabled`]: item.disabled,
        }]
      }
    },
    // 拼接下划线样式
    underlineStyle () {
      if (!this.panes || !this.panes.length || this.index < 0) return {}
      const current = this.panes.find(e => e.nameValue === this.currentName)
      if (!current) return {}

      const { width, offset } = current
      return {
        width: `${width}px`,
        left: `${offset}px`
      }
    }
  },
  methods: {
    // 监听value值的变化
    handleValueChange (newVal, oldVal) {
      this.$nextTick(() => {
        const current = this.panes.find(e => e.nameValue === newVal)
        this.currentName = current ? newVal : (this.panes[0] && this.panes[0].nameValue)
      })
    },
    /**
     * @method updatePanes
     * @description 由子组件调用，每次pane创建后，调用该方法进行更新pane
     */
    updatePanes () {
      const panes = findComponentsDownward(this, 'MkuTabPane')
      this.panes = panes || []
      this.updateNavDom()
    },
    /**
     * @method updateNavDom
     * @description 计算头部菜单项的宽度、下标、距左侧距离
     */
    updateNavDom () {
      this.$nextTick(() => {
        let labels = this.$el.querySelectorAll('.mku-tabs__nav-item')
        this.panes.forEach((item, index, list) => {
          const width = labels[index].offsetWidth
          const prev = this.panes[index - 1]
          const offset = (prev && (prev.offset + prev.width)) || 0
          item.width = width
          item.offset = offset
          item.index = index
        })
      })
    },
    /**
     * @method handleLabelClick
     * @description 点击菜单项时触发，更新当前选中项
     */
    handleLabelClick (item) {
      if (item.disabled) return
      this.currentName = item.nameValue
      this.$emit('input', item.nameValue)
      this.$emit('click', item.nameValue)
    },
    /**
     * @method handleClose
     * @description 点击删除时触发
     */
    handleClose (item) {
      const idx = this.panes.indexOf(item)
      const lastIndex = this.panes.length - 1
      this.panes.splice(idx, 1)
      this.updateNavDom()
      if (idx > lastIndex) {
        this.currentName = this.panes[lastIndex].nameValue
      }
      this.$emit('close', item.nameValue)
    }
  }
}
</script>
