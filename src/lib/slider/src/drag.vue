<template>
  <span
    :class="['mku-slider__button', {'mku-slider__button--active': isDrop}]"
    :style="buttonStyle"
    @mousedown="handleDragStart"
    @mousemove="handleDraging"
    @mouseup="handleDragEnd">
  </span>
</template>

<script>
import { withinNum, floor } from '../../../utils/tools'
import { onEvent, offEvent, getRect } from '../../../utils/dom'
import { isArray } from '../../../utils/assist'

export default {
  name: 'MkuSlider',
  props: {
    // 绑定的值
    value: {
      type: Number
    }
  },
  data () {
    return {
      isDrop: false, // 是否正在拖拽
      currentX: 0 // 当前值
    }
  },
  computed: {
    step () {
      return this.$parent.step
    },
    min () {
      return this.$parent.min
    },
    max () {
      return this.$parent.max
    },
    disabled () {
      return this.$parent.disabled
    },
    // range范围
    rangeDiff () {
      return this.max - this.min
    },
    // 拼接按钮样式
    buttonStyle () {
      return {
        left: (this.value - this.$parent.min) / this.rangeDiff * 100 + '%'
      }
    }
  },
  methods: {
    /**
     * @method handleDragStart
     * @description 拖拽开始事件
     * - 计算slider各种size
     * - 缓存slider的value值
     * - 监听move和end事件
     */
    handleDragStart (event) {
      if (this.disabled) return
      event.preventDefault() // 避免触发浏览器自带的拖拽行为
      this.startX = event.clientX
      this.$parent.calcSliderSize()

      this.isDrop = true
      this.$parent.cacheCurrentValue()

      onEvent(window, 'mousemove', this.handleDraging)
      onEvent(window, 'mouseup', this.handleDragEnd)
    },
    /**
     * @method handleDraging
     * @description 拖拽进行中事件
     * - 计算当前指针距离slider左侧的偏移距离
     * - 更新更新当前value
     */
    handleDraging (event) {
      if (this.disabled) return
      if (!this.isDrop) return

      this.currentX = event.clientX
      const offsetWidth = this.currentX - this.$parent.startX // 偏移距离
      this.updateValue(offsetWidth)
    },
    /**
     * @method updateValue
     * @description 根据拖拽偏移距离计算当前对应的value值
     * - 计算当前指针距离slider左侧的偏移距离
     * - 同步更新value
     */
    updateValue (offsetWidth) {
      const stepWidth = this.step / this.rangeDiff * this.$parent.sliderWidth // 每个step所占宽度
      const stepsCount = Math.round(offsetWidth / stepWidth) // step数，round解决了什么时候触发的问题
      let value = stepsCount * this.step + this.min // 步数 * 每步占值 + min初始值
      value = withinNum(value, this.min, this.max) // 不能超出min、max范围
      this.$emit('input', value)
    },
    /**
     * @method handleDragEnd
     * @description 拖拽结束
     * - 取消move和end的事件监听
     * - 如果值发生了变化，触发drag-change事件
     */
    handleDragEnd () {
      if (this.disabled) return
      this.isDrop = false

      if (this.$parent.checkValueChange()) {
        this.$parent.emitEvent('drag-change', this.$parent.getEmitValue())
      }

      offEvent(window, 'mousemove', this.handleDraging)
      offEvent(window, 'mouseup', this.handleDragEnd)
    }
  }
}
</script>
