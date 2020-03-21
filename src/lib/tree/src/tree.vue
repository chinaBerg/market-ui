<template>
  <div class="mku-tree">
    <mku-tree-node
      v-for="(node, index) in dataCopyed" :key="index"
      :data="node"
      :label="label"
      :children="children"
      :show-checkbox="showCheckbox"
      :node-key="nodeKey"
      :default-expanded-keys="defaultExpandedKeys"
      :default-checked-keys="defaultCheckedKeys"
      :default-expand-all="defaultExpandAll"
      :accordion="accordion"
      :render-content="renderContent"
      :parent-data="dataCopyed"
    />
  </div>
</template>

<script>
import MkuTreeNode from './tree-node';
import {
  deepCopy,
  isObjectEqual,
  findComponentsDownward,
} from '../../../utils/assist';

export default {
  name: 'MkuTree',
  components: {
    MkuTreeNode,
  },
  props: {
    data: {
      type: Array,
      default: () => ([]),
    },
    label: {
      type: String,
      default: 'label',
    },
    children: {
      type: String,
      default: 'children',
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    nodeKey: {
      type: [String, Number],
      default: '',
    },
    // 默认展开项
    defaultExpandedKeys: {
      type: Array,
      default: () => [],
    },
    // 默认选中项
    defaultCheckedKeys: {
      type: Array,
      default: () => [],
    },
    // 默认展开所有
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
    // 手风琴，只允许同时展开一个节点
    accordion: {
      type: Boolean,
      default: false,
    },
    // 自定义渲染函数
    renderContent: {
      type: Function,
    },
    // 点击node时可以展开收起
    expandOnClickNode: {
      type: Boolean,
      default: true,
    },
    // 点击node时可以选中、取消
    checkOnClickNode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dataCopyed: [],
    };
  },
  watch: {
    data: {
      handler: 'handleDataChange',
      immediate: true,
    },
  },
  methods: {
    handleDataChange(newVal) {
      if (!newVal) {
        this.dataCopyed = [];
        return;
      }
      this.dataCopyed = deepCopy(newVal);
    },
    // 供子组件调用的emit
    emitEvent(event, ...data) {
      this.$emit(event, ...data);
    },
    // 节点选中状态变化时触发，暴露checked-change事件
    checkedChange(data) {
      const checkedNodes = this.getCheckedNodes();
      this.$emit('checked-change', checkedNodes, data);
    },
    /**
     * @method _iterateNodes
     * @description 迭代所有后代TreeNode节点
     */
    _iterateNodes(cb) {
      const nodes = findComponentsDownward(this, 'MkuTreeNode');
      if (nodes && nodes.length) {
        nodes.forEach((node) => {
          cb(node);
        });
      }
    },
    /**
     * @method setCheckedKeys
     * @description 对外暴露接口，通过传入keys数组设置选中
     */
    setCheckedKeys(keys) {
      if (!this.showCheckbox) return;

      this._iterateNodes((node) => {
        const checked = node.key && keys.includes(node.key);
        node.handleCheckboxChange(checked);
      });
    },
    /**
     * @method setCheckedKeys
     * @description 对外暴露接口，通过传dataOrigin入节点数据设置选中
     */
    setCheckedNodes(data) {
      if (!this.showCheckbox) return;

      const isEqual = (node) => data.every((value) => isObjectEqual(value, node.dataOrigin));
      const checkedFunc = (node) => node.handleCheckboxChange(isEqual(node));
      this._iterateNodes(checkedFunc);
    },
    /**
     * @method getCheckedKeys
     * @description 对外暴露接口，获取选中项的keys数组
     * @returns { Array } 选中项的keys数组
     */
    getCheckedKeys() {
      const res = [];
      this._iterateNodes((node) => {
        if (node.data.isChecked) {
          res.push(node.data[node.nodeKey]);
        }
      });
      return res;
    },
    /**
     * @method getCheckedNodes
     * @description 对外暴露接口，通过传dataOrigin入节点数据设置选中
     * @returns { Array } 选中项的数据
     */
    getCheckedNodes() {
      const res = [];
      this._iterateNodes((node) => {
        if (node.data.isChecked) {
          res.push(node.data);
        }
      });
      return res;
    },
  },
};
</script>
