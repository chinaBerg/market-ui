<template>
  <div
    ref="slider"
    :class="sliderClasss">
    <!-- 左drag-button -->
    <mku-slider-drag ref="startDrag" v-model="startValue" />

    <div class="mku-slider__outer" ref="sliderWrap" @click="handleBarClick">
      <!-- bar -->
      <div class="mku-slider__inner" :style="barStyle"></div>
      <!-- 断点 -->
      <div class="mku-slider__stops" v-if="showStops || masks">
        <span class="mku-slider__stops-item"
          v-for="(item, index) in stops"
          :key="index"
          :style="stopsItemStyle(item)"></span>
      </div>
    </div>

    <!-- 右drag-button -->
    <mku-slider-drag ref="endDrag" v-model="endValue" v-if="range"/>

    <!-- 自定义标记 -->
    <div class="mku-slider__marks" v-if="masks">
      <mku-slider-mark
        v-for="(val, key) in masks"
        :key="key"
        :data="{key, val}"
      />
    </div>
  </div>
</template>

<script>
import MkuSliderDrag from './drag'
import MkuSliderMark from './mark'

import Emitter from '../../../utils/emitter'
import { withinNum, floor } from '../../../utils/tools'
import { onEvent, offEvent, getRect } from '../../../utils/dom'
import { isArray, isNumber } from '../../../utils/assist'

export default {
  name: 'MkuSlider',
  mixins: [ Emitter ],
  components: { MkuSliderDrag, MkuSliderMark },
  props: {
    // 绑定的值
    value: {
      type: [Number, Array]
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 步骤
    step: {
      type: Number,
      default: 1
    },
    // 是否展示离散值的断点
    showStops: {
      type: Boolean,
      default: false
    },
    // 范围选择
    range: {
      type: Boolean,
      default: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 自定义标记
    masks: {
      type: Object
    }
  },
  data () {
    return {
      startValue: 0, // 第一个drag按钮绑定的value
      endValue: 0, // 第二个drag按钮绑定的value
      startX: 0, // slider组件距离视口可视区域左侧的距离
      sliderWidth: 0.1, // slider组件宽度，给0.1防止作为被除数时报错
      oldParentValue: null // 每次drag的mouseDown时记录当前值
    }
  },
  watch: {
    value: {
      handler: 'watchValueChange',
      immediate: true
    },
    startValue: 'watchStartValueChange',
    endValue: 'watchEndValueChange'
  },
  computed: {
    // 拼接slider的class name
    sliderClasss () {
      return ['mku-slider', {
        'mku-slider--disabled': this.disabled
      }]
    },
    // max和min的差值
    rangeDiff () {
      return this.max - this.min
    },
    // 断点
    stops () {
      // 优先使用mask定义的断点
      if (this.masks) {
        return Object.keys(this.masks).filter(e => {
          return e > this.min && e < this.max
        })
      }
      // 未定义mask，则根据step计算stops数量和对应位置
      const stopCount = this.rangeDiff / this.step
      const stopPercent = this.step / this.rangeDiff * 100
      let res = []
      for (let i = 1; i < stopCount; i++) {
        res.push(i * stopPercent)
      }
      return res
    },
    // 计算断点样式
    stopsItemStyle () {
      return item => {
        return {
          left: item + '%'
        }
      }
    },
    // 条的样式
    barStyle () {
      // 非range下的bar
      if (!this.range) {
        return {
          left: 0,
          width: (this.startValue - this.min) / this.rangeDiff * 100 + '%'
        }
      }
      // range下的bar
      const minVal = Math.min(this.startValue, this.endValue)
      const maxVal = Math.max(this.startValue, this.endValue)
      return {
        left: (minVal - this.min) / this.rangeDiff * 100 + '%',
        width: (maxVal - minVal) / this.rangeDiff * 100 + '%'
      }
    }
  },
  methods: {
    /**
     * @method watchValueChange
     * @description 监听value变化
     * - range情况下：
     *   1. startValue不能大于endValue
     *   2. 值不能超出min和max范围
     *   3. value变化时触发change事件和表单的change验证
     * - 非range情况下：
     *   同上，仅关注第一个值
     */
    watchValueChange (newVal, oldVal) {
      if (!this.range) {
        this.startValue = withinNum(newVal, this.min, this.max)
        // immediate时不需要触发form验证
        if (oldVal !== undefined && newVal !== oldVal) {
          this.emitEvent('change', this.startValue)
          this.dispatch('MkuFormItem', 'onFormItemChange', this.startValue)
        }
      } else {
        if (isArray(newVal)) {
          if (newVal[0] > newVal[1]) {
            if (process.env.NODE_ENV !== 'production') {
              throw Error('[MarketUI]value[0] should be smaller than value[1].')
              return
            }
          }
          this.startValue = withinNum(newVal[0], this.min, this.max)
          this.endValue = withinNum(newVal[1], this.min, this.max)

          // 如果值发生了变化，触发change事件
          // immediate时不需要触发form验证
          if (oldVal !== undefined && isArray(oldVal)) {
            const isChange = newVal.every((e, i) => e === oldVal[i])
            if (!isChange) {
              const curVal = [this.startValue, this.endValue]
              this.emitEvent('change', curVal)
              this.dispatch('MkuFormItem', 'onFormItemChange', curVal)
            }
          }
        } else {
          if (process.env.NODE_ENV !== 'production') {
            throw TypeError("[MarketUI]'value' expect Array")
          }
        }
      }
    },
    /**
     * @method watchStartValueChange
     * @description 监听startValue变化
     * - startValue大于endValue时需要将endValue更新到和startValue一样
     *   即在左drag-button右拖超过右边drag-button时，右drag-button同步右移
     * - 同步更新父组件value值
     */
    watchStartValueChange (newVal) {
      if (!this.range) {
        this.$emit('input', newVal)
      } else {
        if (newVal > this.endValue) {
          this.endValue = newVal
        }
        this.$emit('input', [newVal, this.endValue])
      }
    },
    /**
     * @method watchEndValueChange
     * @description 监听endValue变化
     * - endValue小于startValue时需要将startValue更新到和endValue一样
     *   即在右drag-button左拖超过左边drag-button时，左drag-button同步右移
     * - 同步更新父组件value值
     */
    watchEndValueChange (newVal) {
      if (newVal < this.startValue) {
        this.startValue = newVal
      }
      this.$emit('input', [this.startValue, newVal])
    },
    /**
     * @method calcSliderSize
     * @description 计算slider的相关尺寸
     * - 距离可视区域左侧的距离
     * - slider自身长度
     */
    calcSliderSize () {
      const wrap = this.$refs.sliderWrap
      if (wrap) {
        this.sliderWidth = wrap.clientWidth
        this.startX = getRect(wrap).left
      }
    },
    /**
     * @method handleBarClick
     * @description 点击bar时也可以改变slider
     * - 判断移动 左drag-button or 右drag-button
     * - 间接触发watchValueChange监听，从而触发change事件
     * - 触发 click-change 事件
     */
    handleBarClick (event) {
      if (this.disabled) return

      this.calcSliderSize()

      let drag = null
      const targetOffset = event.clientX - this.startX
      const targetValue = (targetOffset / this.sliderWidth) * this.rangeDiff + this.min
      if (!this.range) {
        drag = 'startDrag'
      } else {
        const startDiffValue = Math.abs(targetValue - this.startValue)
        const endDiffValue = Math.abs(targetValue - this.endValue)
        drag = startDiffValue <= endDiffValue ? 'startDrag' : 'endDrag'
      }

      this.$refs[drag].updateValue(targetOffset)
      this.emitEvent('click-change', this.getEmitValue())
    },
    /**
     * @method cacheCurrentValue
     * @description 记录当前value时，用于后续对比value是否发生了变化
     */
    cacheCurrentValue () {
      this.oldParentValue = !this.range ? this.value : this.value.map(e => e)
    },
    /**
     * @method checkValueChange
     * @description 对比value是否发生了变化
     */
    checkValueChange () {
      if (!this.range) {
        return this.oldParentValue !== this.value
      }
      return !this.oldParentValue.every((e, i) => e === this.value[i])
    },
    /**
     * @method getEmitValue
     * @description 拼接emitEvent方法派发的值
     */
    getEmitValue () {
      const { range, startValue, endValue } = this
      return !range ? startValue : [ startValue, endValue ]
    },
    /**
     * @method emitEvent
     * @description 事件派发
     */
    emitEvent (eventName, ...arg) {
      this.$emit(eventName, ...arg)
    }
  }
}
</script>
