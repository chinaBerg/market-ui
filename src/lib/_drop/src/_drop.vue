<template>
  <div
    :class="['mku-drop', className]"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>

<script>
import Popper from 'popper.js';
import { attrs } from '../../../utils/dom';

export default {
  name: 'MkuDrop',
  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },
    reference: {
      type: [String],
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      popperIns: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initPopper();
    });
  },
  methods: {
    /**
     * @method initPopper
     * @description 初始化popper插件
     * - reference: https://popper.js.org/
     */
    initPopper() {
      const ref = this.$parent.$refs[this.reference];
      this.popperIns = new Popper(ref, this.$el, {
        placement: this.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false,
          },
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
        onCreate: () => {
          this.$nextTick(() => {
            this.rerender();
          });
        },
        onUpdate: () => {
          this.rerender();
        },
      });
    },
    // 重新计算下拉菜单的动画原点
    updateTransformOrigin() {
      const popperPlacement = attrs(this.$el, 'x-placement');
      this.$el.style.transformOrigin = popperPlacement.indexOf('top') > -1
        ? 'bottom left' : 'top left';
    },
    /**
     * @method rerender
     * @description 对外暴露接口，重新计算drop位置等样式
     */
    rerender() {
      this.updateTransformOrigin();
      this.popperIns && this.popperIns.scheduleUpdate();
    },
  },
};
</script>
