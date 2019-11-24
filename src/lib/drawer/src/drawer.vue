<template>
  <div :class="drawerClasss">
    <!-- mask-area -->
    <transition name="mku-drawer-mask">
      <div
        class="mku-drawer__mask"
        v-if="isVisiable && mask"
        @click="handleClickMask">
      </div>
    </transition>

    <!-- drawer-area -->
    <transition
      @enter="transitionEnter"
      @leave="transitionLeave">
      <div class="mku-drawer__main" v-if="isVisiable" :style="mainStyle">
        <!-- head -->
        <div class="mku-drawer__head">
          <h3 class="mku-drawer__title">
            <slot name="title">
              <template v-if="title">{{title}}</template>
            </slot>
          </h3>
        </div>

        <!-- close-button -->
        <i
          class="mku-icon mku-icon-error mku-drawer__close"
          v-if="closable"
          @click="handleCloseBtn">
        </i>

        <!-- dragger-button -->
        <span
          class="mku-drawer__drag"
          v-if="draggable"
          @mousedown="handleDragDown"
          @mouseup="handleDragUp">
          <slot name="draggable">
            <i class="mku-drawer__drag-btn"></i>
          </slot>
        </span>

        <!-- content-slot -->
        <div class="mku-drawer__content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// kute.js, doc：https://github.com/thednp/kute.js
import kute from 'kute.js'
import { formatSize } from '../../../utils/tools'
import { getWindowWidth } from '../../../utils/dom'

export default {
  name: 'MkuDrawer',
  props: {
    // 绑定的值
    value: {
      type: Boolean,
      default: false
    },
    // 方向
    direction: {
      type: String,
      default: 'right',
      validator: val => {
        return ['left', 'top', 'right', 'bottom'].includes(val)
      }
    },
    // 动画时间
    duration: {
      type: Number,
      default: 300
    },
    // 抽屉标题
    title: {
      type: String
    },
    // 自定义大小
    size: {
      type: [String, Number],
      default: 300
    },
    // 显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },
    // 是否展示蒙层
    mask: {
      type: Boolean,
      default: true
    },
    // 点击蒙层是否可以关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 拖拽
    draggable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isVisiable: this.value,
      isDrop: false,
      width: 0
    }
  },
  watch: {
    value: {
      handler (n) {
        this.isVisiable = n
      }
    },
    size: {
      handler (n) {
        const size = formatSize(n)
        this.width = size
      },
      immediate: true
    },
    isVisiable: {
      handler (n) {
        this.$emit('change', n)
      }
    }
  },
  computed: {
    drawerClasss () {
      const prefix = 'mku-drawer'
      const dir = this.direction
      return [prefix, {
        [`${prefix}--left`]: dir === 'left',
        [`${prefix}--top`]: dir === 'top',
        [`${prefix}--right`]: dir === 'right',
        [`${prefix}--bottom`]: dir === 'bottom'
      }]
    },
    // 弹出层的样式
    mainStyle () {
      const placementMaps = {
        left: { left: 0, top: 0, bottom: 0, width: this.width },
        top: { left: 0, top: 0, right: 0, height: this.width },
        right: { right: 0, top: 0, bottom: 0, width: this.width },
        bottom: { left: 0, right: 0, bottom: 0, height: this.width },
      }
      let placementStyle = placementMaps[this.direction] || {}
      return placementStyle
    },
    // 计算动画的配置参数
    getAnimation () {
      return done => {
        const animationMaps = {
          left: {
            startState: { translateX: '-100%' },
            endState: { translateX: 0 }
          },
          top: {
            startState: { translateY: '-100%' },
            endState: { translateY: 0 }
          },
          right: {
            startState: { translateX: '100%' },
            endState: { translateX: 0 }
          },
          bottom: {
            startState: { translateY: '100%' },
            endState: { translateX: 0 }
          }
        }
        return {
          ...(animationMaps[this.direction] || {}),
          config: {
            duration: this.duration,
            complete: () => {
              done && done()
            }
          }
        }
      }
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.handleDragMove, false)
    window.addEventListener('mouseup', this.handleDragUp, false)
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('mousemove', this.handleDragMove, false)
      window.removeEventListener('mouseup', this.handleDragUp, false)
    })
  },
  methods: {
    /**
     * @method transitionEnter
     * @description drawer的入场动画
     */
    transitionEnter (el, done) {
      const { startState, endState, config } = this.getAnimation(done)
      kute.fromTo(el, startState, endState, config).start()
    },
    /**
     * @method transitionLeave
     * @description drawer的离场动画
     */
    transitionLeave (el, done) {
      const { startState, endState, config } = this.getAnimation(done)
      kute.fromTo(el, endState, startState, config).start()
    },
    /**
     * @method handleCloseBtn
     * @description 点击关闭按钮，关闭抽屉
     */
    handleCloseBtn () {
      this.isVisiable = false
      this.$emit('input', false)
      this.$emit('close')
    },
    /**
     * @method handleClickMask
     * @description 点击蒙层，根据配置判断是否可以关闭抽屉
     */
    handleClickMask () {
      if (!this.maskClosable) return
      this.handleCloseBtn()
    },
    /**
     * @method handleDragMove
     * @description 鼠标按下事件
     */
    handleDragDown (event) {
      if (!this.draggable) return
      this.isDrop = true
    },
    /**
     * @method handleDragMove
     * @description 鼠标松开事件
     */
    handleDragUp (event) {
      if (!this.draggable) return
      this.isDrop = false
    },
    /**
     * @method handleDragMove
     * @description 鼠标移动事件
     */
    handleDragMove (event) {
      if (!this.draggable || !this.isDrop) return

      const width = this.calcDrawerWidth(event)
      this.width = width + 'px'
      this.$emit('update:size', width)
      this.$emit('drag', width)
    },
    /**
     * @method calcDrawerWidth
     * @description 计算抽屉的尺寸
     * - 左右时计算宽度，最大为视口宽度
     * - 上下时计算高度，最大为视口高度
     */
    calcDrawerWidth (event) {
      const { clientWidth, clientHeight } = getWindowWidth()
      let size = 0
      switch (this.direction) {
        case 'left':
          size = event.pageX
          break
        case 'right':
          size = Math.min(clientWidth - event.pageX, clientWidth)
          break
        case 'top':
          size = event.pageY
          break
        case 'bottom':
          size = Math.min(clientHeight - event.pageY, clientHeight)
          break
      }
      return size
    }
  }
}
</script>
