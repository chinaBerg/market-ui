<template>
  <div class="mku-tab-pane" v-if="isShow">
    <slot></slot>
  </div>
</template>

<script>
import { getStyle } from '../../../utils/dom'

export default {
  name: 'MkuTabPane',
  props: {
    // 标识，相当于value
    name: {
      type: [String, Number]
    },
    // 选项卡名称
    label: {
      type: [String, Number],
      default: ''
    },
    // 图标
    icon: {
      type: String
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['root'],
  data () {
    return {
      width: 0, // 选项卡对应的头部宽度
      offset: 0, // 选项卡距离左侧的距离
      index: 0 // 选项卡的下标
    }
  },
  computed: {
    // 是否展示当前pane，只有父级存在且选中当前项才显示
    isShow () {
      if (this.root.currentName !== this.nameValue) return false
      return this.root.panes.includes(this)
    },
    // 计算当前的name值，如果未传递则使用下标
    nameValue () {
      if (this.name !== undefined) return this.name
      return this.index
    }
  },
  created () {
    this.root.updatePanes()
  }
}
</script>
