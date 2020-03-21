<template>
  <div :class="selectClasss">
    <!-- 展示框 -->
    <div
      class="mku-select__inner"
      ref="mkuSelect"
      @mouseover="handleMouseHover(true)"
      @mouseout="handleMouseHover(false)"
      @click="handleSelectClick">
      <!-- select text区域 -->
      <template v-if="optionsSelected.length">
        <div class="mku-select__txt mku-global-ellipsis" v-if="!multiple">
          {{optionsSelected[0] && optionsSelected[0].text}}
        </div>
        <div class="mku-select__labels" v-else>
          <span
            class="mku-select__labels-item"
            v-for="(item, index) in optionsSelected"
            :key="index">
            <span class="mku-global-ellipsis">{{item.text}}</span>
            <i class="mku-icon mku-icon-error-circle" @click.stop="handleDelete(item)"></i>
          </span>
        </div>
      </template>

      <!-- placeholder -->
      <div class="mku-select__placeholder mku-global-ellipsis" v-else>
        {{placeholder}}
      </div>

      <!-- dropdown的arrow-icon -->
      <span class="mku-select__icon" @click="handleClear">
        <i :class="['mku-icon',
          isShowClearIcon ? 'mku-icon-error-circle'
          : 'mku-icon-arrow-down']"></i>
      </span>
    </div>

    <!-- dropdown -->
    <transition name="mku-select-dropdown">
      <ul class="mku-select__menu"
        ref="mkuSelectMenu"
        v-show="isOpened && !disabled"
        :style="dropdownStyle"
        @click="handleDropdownClick">
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
import Popper from 'popper.js';
import Emitter from '../../../utils/emitter';
import { attrs } from '../../../utils/dom';
import { findComponentsDownward } from '../../../utils/assist';

export default {
  name: 'MkuSelect',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Array],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    placement: {
      type: String,
      default: 'bottom-start',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      popper: null,
      isOpened: false,
      optionsSelected: [], // 所有被选中的options
      isHover: false,
      isClickAtComponent: false, // 用于控制点击window时是否隐藏dropdown
    };
  },
  provide() {
    return {
      MkuSelect: this,
    };
  },
  watch: {
    value: {
      handler: 'handleValueChange',
      immediate: true,
    },
  },
  computed: {
    // 拼接select的className
    selectClasss() {
      return [
        'mku-select', {
          'mku-select--opened': this.isOpened,
          'mku-select--disabled': this.disabled,
        },
      ];
    },
    // 是否显示清除的icon
    isShowClearIcon() {
      return this.clearable && this.isHover && !this.multiple && !!this.optionsSelected.length;
    },
    // dropdown的style
    dropdownStyle() {
      const res = {};
      const one = (str) => this.placement.indexOf(str) > -1;
      const isTopOrBottom = one('bottom') || one('top');
      if (isTopOrBottom) {
        res.margin = '8px 0';
      } else if (one('right')) res.marginLeft = '8px';
      return res;
    },
  },
  mounted() {
    this.initPopper();
    document.addEventListener('click', this.winClickCallback, false);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.winClickCallback, false);
  },
  methods: {
    /**
     * @method handleValueChange
     * @description 监听value值的变化
     */
    handleValueChange(newVal) {
      const selected = [];
      const arrs = this.multiple ? newVal : [newVal];
      this.$nextTick(() => {
        const options = findComponentsDownward(this, 'MkuOptions');
        if (!options) return;
        for (let i = 0, len = arrs.length; i < len; i++) {
          options.forEach((option) => {
            if (option.value === arrs[i]) {
              selected.push(option.formatEmitData());
            }
          });
        }
        this.optionsSelected = selected;
      });
    },
    /**
     * @method initPopper
     * @description 初始化popper插件
     * - reference: https://popper.js.org/
     */
    initPopper() {
      const { placement } = this;
      this.popper = new Popper(this.$refs.mkuSelect, this.$refs.mkuSelectMenu, {
        placement,
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
            this.updateTransformOrigin();
            if (this.popper) this.popper.scheduleUpdate();
          });
        },
        onUpdate: () => {
          this.updateTransformOrigin();
        },
      });
    },
    // 重新计算下拉菜单的动画原点
    updateTransformOrigin() {
      const poper = this.$refs.mkuSelectMenu;
      if (!poper) return;
      const popperPlacement = attrs(poper, 'x-placement');
      poper.style.transformOrigin = popperPlacement.indexOf('top') > -1
        ? 'bottom left' : 'top left';
    },
    /**
     * @method winClickCallback
     * @description 监听页面点击事件，收起select的dropdown
     * - 在mounted后进行监听
     * - 在beforeDestroy之前取消监听
     */
    winClickCallback() {
      if (!this.isClickAtComponent) {
        this.isOpened = false;
      }
      this.isClickAtComponent = false;
    },
    /**
     * @method handleSelectClick
     * @description 点击select，收起/展开dropdown
     */
    handleSelectClick() {
      if (this.disabled) return;
      this.isClickAtComponent = true;

      this.isOpened = !this.isOpened;
      this.popper.scheduleUpdate();

      this.$emit('drop-change', this.isOpened);
    },
    /**
     * @method handleMouseHover
     * @description 鼠标滑入滑出select
     */
    handleMouseHover(isHover) {
      this.isHover = isHover;
    },
    /**
     * @method handleDropdownClick
     * @description 点击dropdown，如果是多选则阻止冒泡
     */
    handleDropdownClick(event) {
      if (this.multiple) {
        event.stopPropagation();
      }
    },
    /**
     * @method change
     * @description options变化后的回调函数
     * - 多选时：支持再次点击取消，绑定的值为一个选中项的数组
     * - 单选，绑定值为一个单个值
     * - 支持Form表单验证
     */
    change(data) {
      let validateValue;
      if (this.multiple) {
        const index = this.optionsSelected.findIndex((item) => item.value === data.value);
        if (index > -1) {
          this.optionsSelected.splice(index, 1);
        } else {
          this.optionsSelected.push(data);
        }
        validateValue = this.optionsSelected.map((e) => e.value);
      } else {
        validateValue = data.value;
        this.optionsSelected = [data];
      }
      this.$emit('input', validateValue);
      this.$emit('change', validateValue);
      this.popper.scheduleUpdate();
      // 表单验证
      this.dispatch('MkuFormItem', 'onFormItemChange', validateValue);
    },
    handleDelete(option) {
      this.optionsSelected = this.optionsSelected.filter((item) => item.value !== option.value);
      this.popper.scheduleUpdate();
      this.$emit('input', this.optionsSelected.map((e) => e.value));
    },
    // 清空
    handleClear(event) {
      if (!this.isShowClearIcon) return;
      this.optionsSelected = [];
      this.$emit('clear');
      if (!this.isOpened) {
        event.stopPropagation();
      }
    },
  },
};
</script>
