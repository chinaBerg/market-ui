<template>
  <div :class="selectClasss">
    <!-- 展示框 -->
    <div
      class="mku-select__inner"
      ref="mkuSelect"
      @mouseover="handleMouseHover(true)"
      @mouseout="handleMouseHover(false)"
      @click.stop="handleSelectClick"
    >
      <!-- select text区域 -->
      <template v-if="optionsSelected.length">
        <div class="mku-select__txt mku-global-ellipsis" v-if="!multiple">
          {{optionsSelected[0] && optionsSelected[0].text}}
        </div>
        <div class="mku-select__labels" v-else>
          <span class="mku-select__labels-item" v-for="(item, index) in optionsSelected" :key="index">
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
        <i :class="['mku-icon', isShowClearIcon ? 'mku-icon-error-circle' : 'mku-icon-arrow-down']"></i>
      </span>

      <!-- dropdown的arrow-icon -->
      <!-- <span class="mku-select__icon">
        <i class="mku-icon mku-icon-arrow-down"></i>
      </span> -->
    </div>

    <!-- dropdown -->
    <transition name="mku-select-dropdown">
      <ul class="mku-select__menu"
        ref="mkuSelectMenu"
        v-show="isOpened && !disabled"
        @click="handleDropdownClick"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
import Popper from 'popper.js'
import { attrs } from '../../../utils/dom'

export default {
  name: 'MkuSelect',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      popper: null,
      isOpened: false,
      optionsSelected: [], // 所有被选中的options
      isHover: false
    }
  },
  provide () {
    return {
      MkuSelect: this
    }
  },
  watch: {
  },
  computed: {
    selectClasss () {
      return [
        'mku-select', {
          'mku-select--opened': this.isOpened,
          'mku-select--disabled': this.disabled
        }
      ]
    },
    isShowClearIcon () {
      return this.clearable && this.isHover && !this.multiple && !!this.optionsSelected.length
    }
  },
  mounted () {
    this.initPopper()
    document.addEventListener('click', this.winClickCallback, false)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.winClickCallback, false)
  },
  methods: {
    /**
     * @method initPopper
     * @description 初始化popper插件
     * - reference: https://popper.js.org/
     */
    initPopper () {
      this.popper = new Popper(this.$refs.mkuSelect, this.$refs.mkuSelectMenu, {
        placement: this.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false
          },
          preventOverflow: {
            boundariesElement: 'window'
          }
        }
      })
    },
    /**
     * @method winClickCallback
     * @description 监听页面点击事件，收起select的dropdown
     * - 在mounted后进行监听
     * - 在beforeDestroy之前取消监听
     */
    winClickCallback () {
      this.isOpened = false
    },
    /**
     * @method handleSelectClick
     * @description 点击select，收起/展开dropdown
     */
    handleSelectClick () {
      if (this.disabled) return
      const poper = this.$refs.mkuSelectMenu
      const popperPlacement = attrs(poper, 'x-placement')
      poper.style.transformOrigin = popperPlacement.indexOf('top') > -1 ?
        'bottom left' : 'top left'
      this.isOpened = !this.isOpened
    },
    /**
     * @method handleMouseHover
     * @description 鼠标滑入滑出select
     */
    handleMouseHover (isHover) {
      this.isHover = isHover
    },
    /**
     * @method handleDropdownClick
     * @description 点击dropdown，如果是多选则阻止冒泡
     */
    handleDropdownClick (event) {
      if (this.multiple) {
        event.stopPropagation()
      }
    },
    change (data) {
      if (this.multiple) {
        const index = this.optionsSelected.findIndex(item => item.value === data.value)
        if (index > -1) {
          this.optionsSelected.splice(index, 1)
        } else {
          this.optionsSelected.push(data)
        }
        this.$emit('input', this.optionsSelected.map(e => e.value))
        this.popper.scheduleUpdate()
      } else {
        this.optionsSelected = [data]
        this.$emit('input', data.value)
      }
    },
    handleDelete (option) {
      this.optionsSelected = this.optionsSelected.filter(item => item.value !== option.value)
      this.popper.scheduleUpdate()
      this.$emit('input', this.optionsSelected.map(e => e.value))
    },
    // 清空
    handleClear (event) {
      if (!this.isShowClearIcon) return
      this.optionsSelected = []
      this.$emit('clear')
      !this.isOpened && event.stopPropagation()
    }
  }
}
</script>
