<template>
  <div class="mku-dropdown" ref="dropdown">
    <div
      class="mku-dropdown__reference"
      @click="handleClick"
      @mouseover="handleMounseover"
      @mouseout="handleMounseout">
      <slot></slot>
    </div>

    <transition name="mku-dropdown" >
      <mku-drop
        class="mku-dropdown__content"
        reference="dropdown"
        ref="dropdownMenu"
        v-show="visiable"
        :placement="placement"
        @mouseenter.native="handleMounseover"
        @mouseleave.native="handleMounseout">
        <slot name="menu"></slot>
      </mku-drop>
    </transition>
  </div>
</template>

<script>
import MkuDrop from '../../_drop';

export default {
  name: 'MkuDropdown',
  components: { MkuDrop },
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: (val) => ['click', 'hover'].includes(val),
    },
    placement: {
      type: String,
      default: 'bottom-start',
    },
  },
  data() {
    return {
      visiable: false,
      timeout: null,
      isClickAtComponent: false, // 用于控制点击window时是否隐藏dropdown
    };
  },
  watch: {
    visiable: 'visiableChange',
  },
  computed: {
  },
  mounted() {
    this.$nextTick(() => {
      this.monitorWindowEvent();
    });
  },
  methods: {
    visiableChange(newVal) {
      this.$emit('visible-change', newVal);
    },
    // 点击reference显示/取消dropdown
    handleClick() {
      if (this.trigger !== 'click') return false;
      this.isClickAtComponent = true;
      this.visiable = !this.visiable;
    },
    handleMounseover() {
      if (this.trigger !== 'hover') return false;
      this.timeout && clearTimeout(this.timeout);
      this.visiable = true;
    },
    handleMounseout() {
      if (this.trigger !== 'hover') return false;
      this.timeout = setTimeout(() => {
        this.visiable = false;
      }, 50);
    },
    /**
     * @method monitorWindowEvent
     * @description 监听/取消窗口点击事件
     * - 如果是点击reference区域冒泡导致的窗口点击事件，则不关闭dropdown
     * - 组件销毁时取消监听
     */
    monitorWindowEvent() {
      const cb = () => {
        if (!this.isClickAtComponent && this.visiable) {
          this.visiable = false;
          this.$emit('click-aside');
        }
        this.isClickAtComponent = false;
      };
      window.addEventListener('click', cb, false);
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('click', cb, false);
      });
    },
  },
};
</script>
