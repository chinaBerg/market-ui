<template>
  <ul class="mku-tree__parent">
    <li class="mku-tree__child mku-tree__child--disabled">
      <div class="mku-tree__content" @click="handleNodeClick">
        <!-- 图标 -->
        <span class="mku-tree__icon-wrap" @click.stop="expandNode">
          <mku-icon
            type="arrow-right"
            v-if="childrenData && childrenData.length"
            :class="['mku-tree__icon', {'mku-tree__icon--opened': data.isExpand}]"
          />
        </span>
        <!-- 选择框 -->
        <span class="mku-tree__checkbox" @click.stop>
          <mku-checkbox
            v-if="showCheckbox"
            v-model="data.isChecked"
            :indeterminate="data.indeterminate"
            :disabled="data.disabled"
            @change="handleCheckboxChange"
          />
        </span>

        <!-- 标题 -->
        <div class="mku-tree__label">
          <node-content
            :render-content="renderContent"
            :data="data"
            :label="label"
            :parent-data="parentData"
          />
        </div>
      </div>

      <!-- 递归tree-node -->
      <mku-collspse-transition :duration="0.3" animate="linear">
        <div v-show="data.isExpand && childrenData && childrenData.length">
          <mku-tree-node
            v-for="(item, index) in childrenData"
            :key="index"
            :data="item"
            :label="label"
            :children="children"
            :show-checkbox="showCheckbox"
            :node-key="nodeKey"
            :default-expanded-keys="defaultExpandedKeys"
            :default-checked-keys="defaultCheckedKeys"
            :default-expand-all="defaultExpandAll"
            :accordion="accordion"
            :render-content="renderContent"
            :parent-data="childrenData"
          />
        </div>
      </mku-collspse-transition>
    </li>
  </ul>
</template>

<script>
import MkuIcon from '../../icon'
import MkuCheckbox from '../../checkbox'
import MkuCollspseTransition from '../../collapse-transition'
import nodeContent from './tree-node-content'
import {
  findComponentUpward,
  findSiblingsComponents,
  deepCopy
} from '../../../utils/assist'

export default {
  name: 'MkuTreeNode',
  components: {
    MkuIcon,
    MkuCheckbox,
    MkuCollspseTransition,
    nodeContent
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    parentData: {
      type: Array,
      default: () => ([])
    },
    label: String,
    children: String,
    showCheckbox: Boolean,
    nodeKey: String,
    // 默认展开项
    defaultExpandedKeys: Array,
    // 默认选中项
    defaultCheckedKeys: Array,
    defaultExpandAll: Boolean,
    accordion: Boolean,
    renderContent: Function
  },
  data () {
    return {
      dataOrigin: {},
      parentTreeNode: null,
      root: null,
      key: null
    }
  },
  computed: {
    childrenData () {
      if (!this.data) return []
      return this.data[this.children]
    }
  },
  created () {
    this.root = findComponentUpward(this, 'MkuTree')
    this.parentTreeNode = findComponentUpward(this, 'MkuTreeNode')
    this._initDefault()
  },
  methods: {
    /**
     * @method _initDefault
     * @description 初始化默认的展开项和选中项
     */
    _initDefault () {
      const nodeKeyValue = this.data[this.nodeKey]
      const isExpand = this.defaultExpandAll || this.defaultExpandedKeys.includes(nodeKeyValue)
      const isChecked = this.$parent.data.isChecked || this.defaultCheckedKeys.includes(nodeKeyValue)
      const _origin = deepCopy(this.data)
      delete _origin[this.children]

      this.dataOrigin = _origin
      this.$set(this.data, 'isExpand', isExpand)
      this.$set(this.data, 'isChecked', isChecked)
      this.$set(this.data, 'indeterminate', false)

      if (this.nodeKey) {
        this.key = nodeKeyValue
      }

      this.$nextTick(() => {
        // 设置默认节点，需要默认勾选对应的字所有子节点
        if (isChecked) {
          this.updateChildrenChecked(this.data, isChecked)
          this.updateParentChecked()
        }
      })
    },
    /**
     * @method expandNode
     * @description 用户点击图标，收起展开子节点
     * - 如果是手风琴模式，则收起所有兄弟节点
     * - 更新所有父TreeNode组件的toggle-change事件
     */
    expandNode () {
      this.$set(this.data, 'isExpand', !this.data.isExpand)

      if (this.accordion) {
        const sibNodes = findSiblingsComponents(this, 'MkuTreeNode')
        if (sibNodes && sibNodes.length) {
          sibNodes.forEach(node => {
            this.$set(node.data, 'isExpand', false)
          })
        }
      }

      if (this.root) {
        this.root.emitEvent('toggle-change', this.data, this)
      }
    },
    /**
     * @method handleNodeClick
     * @description 点击节点时的回调函数
     * - 是否可以展开收起
     * - 是否可以选中/取消，仅show-checkbox开启时有效
     */
    handleNodeClick () {
      if (!this.root) return

      if (this.root.expandOnClickNode) {
        this.expandNode()
      }

      if (this.root.checkOnClickNode && this.root.showCheckbox) {
        this.handleCheckboxChange(!this.data.isChecked)
      }
    },
    /**
     * @method handleCheckboxChange
     * @description 用户点击勾选/取消checkbox
     * - 同时所有的子checkbox都需要同步更新
     * - 触发Tree的checked-change emit
     * - 更新所有父TreeNode组件的状态
     */
    handleCheckboxChange (state) {
      this.updateChildrenChecked(this.data, state)
      this.updateParentChecked()

      if (this.root) {
        this.root.checkedChange(this.data)
      }
    },
    /**
     * @method updateParentChecked
     * @description 更新父TreeNode组件的状态
     * - 遍历所有父TreeNode组件
     * - 根据父TreeNode组件的所有子组件选中状态进行更新
     */
    updateParentChecked () {
      let parent = this.parentTreeNode
      while (parent) {
        const data = parent.data
        const children = data[parent.children]
        if (children && children.length) {
          // const isChecked = children.every(child => child.isChecked)
          let checked
          let indeterminate
          const checkedNodes = children.filter(child => child.isChecked)
          if (checkedNodes.length === 0) {
            checked = false
            indeterminate = false
          } else if (checkedNodes.length === children.length) {
            checked = true
            indeterminate = false
          } else {
            checked = false
            indeterminate = true
          }
          this.$set(data, 'isChecked', checked)
          this.$set(data, 'indeterminate', indeterminate)
        }

        parent = parent.parentTreeNode
      }
    },
    /**
     * @method updateChildrenChecked
     * @description 迭代children，更新其checkbox状态
     */
    updateChildrenChecked (data, state) {
      let nodes = [data]
      while (nodes && nodes.length) {
        const currentNode = nodes.shift()
        const children = currentNode[this.children]
        this.$set(currentNode, 'isChecked', state)

        if (children && children.length) {
          nodes.push(...children)
        }
      }
    }
  }
}
</script>
