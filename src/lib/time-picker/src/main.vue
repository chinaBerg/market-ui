<template>
  <div class="mku-tpicker" ref="tpicker">
    <mku-input
      v-model="inputText"
      :placeholder="placeholder"
      :clearable="clearable && !readonly && !disabled"
      :readonly="readonly"
      :disabled="disabled"
      @click.native="handleInputClick"
      @enter="handleInputEnter"
    />

    <transition name="mku-tpicker">
      <mku-drop
        reference="tpicker"
        class-name="mku-tpicker__drop"
        v-if="visible"
        :placement="placement"
        @click.stop>
        <!-- 主体内容 -->
        <div class="mku-tpicker__row-content">
          <mku-picker
            ref="startPicker"
            :title="isRange ? '开始时间' : null"
            :value="startValue"
            @click="handlePickerClick('start', arguments)"
          />
          <mku-picker
            ref="endPicker"
            v-if="isRange"
            :title="isRange ? '结束时间' : null"
            :value="endValue"
            @click="handlePickerClick('end', arguments)"
          />
        </div>

        <!-- 底部 -->
        <div class="mku-tpicker__foot" v-if="isFoot">
          <div class="mku-tpicker__foot-left">
            <a
              class="mku-tpicker__foot-now"
              href="javascript:void(0)"
              v-if="!isRange"
              @click="handleClickNow">
              此刻
            </a>
          </div>
          <mku-button
            v-if="clearable"
            size="small"
            class="mku-tpicker__foot-clear"
            @click="handleClear">
            清空
          </mku-button>
          <mku-button
            type="primary"
            size="small"
            @click="handleConfirm">
            确认
          </mku-button>
        </div>
      </mku-drop>
    </transition>
  </div>
</template>

<script>
import MkuInput from '../../input'
import MkuButton from '../../button'
import MkuDrop from '../../_drop'
import MkuPicker from './picker'
import { isArray, isDate, isString, deepCopy } from '../../../utils/assist'
import { fillZero, withinNum, compareArrJoined } from '../../../utils/tools'
import { onEvent, offEvent, hasClass } from '../../../utils/dom'
import { parseDate } from '../../../utils/date'
import Emitter from '../../../utils/emitter'

export default {
  name: 'MkuTimePicker',
  mixins: [Emitter],
  components: { MkuInput, MkuDrop, MkuButton, MkuPicker },
  props: {
    // 绑定的值
    value: {
      type: [Date, String, Array]
    },
    // 类型，单时间和时间范围选择
    type: {
      type: String,
      default: 'time',
      validator: val => {
        return ['time', 'timerange'].includes(val)
      }
    },
    // 展示的时间格式
    formatText: {
      type: String,
      default: 'HH:mm:ss'
    },
    // 绑定的输出值格式
    formatValue: {
      type: String,
      default: 'HH:mm:ss'
    },
    // 提示占位符
    placeholder: {
      type: String,
      default: ''
    },
    // 是否显示底部
    isFoot: {
      type: Boolean,
      default: true
    },
    // 开始和结束时间之间的分隔符
    separator: {
      type: String,
      default: ' - '
    },
    // 可清除
    clearable: {
      type: Boolean,
      default: true
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 面板位置
    placement: {
      type: String,
      default: 'bottom-start'
    }
  },
  data () {
    return {
      visible: false,
      startValue: [],
      endValue: [],
      inputText: ''
    }
  },
  watch: {
    value: {
      handler: 'updateCurrentValue',
      immediate: true
    },
    // inputText值的计算使用监听而不是计算属性，考虑到：
    // 当手动修改input值但是没有导致实质性的数字发生变化时，不会触发重新计算
    // 因为依赖没有发生变化，所有手动修改input时手动调用calcInputTetxt计算方法
    startValue: {
      handler: 'calcInputText',
      immediate: true
    },
    endValue: {
      handler: 'calcInputText',
      immediate: true
    },
    visible: {
      handler: 'watchVisibleChange',
      immediate: true
    }
  },
  computed: {
    // 范围选择
    isRange () {
      return this.type === 'timerange'
    }
  },
  mounted () {
    this.initWindowEvent()
  },
  methods: {
    /**
     * @method initWindowEvent
     * @description 初始化事件监听
     */
    initWindowEvent () {
      const onWinClick = () => this.visible = false
      onEvent(document, 'click', onWinClick)
      this.$once('hook:beforeDestroy', () => offEvent(document, 'click', onWinClick))
    },
    /**
     * @method updateCurrentValue
     * @description 更新startValue和endValue值
     * @param { String | Date | Array } newVal 待更新的值
     * - 选择的时间范围时：更新startValue和endValue值
     * - 选择的单个时间时：仅更新startValue
     */
    updateCurrentValue (newVal, oldVal) {
      // 选择时间范围
      if (this.isRange) {
        if (!isArray(newVal)) {
          throw TypeError("[Market-ui]type error: When type is 'timerange', 'value' expects 'Array'!")
          return
        }
        const first = this.getCorrectTime(newVal[0])
        const second = this.getCorrectTime(newVal[1])
        this.startValue = first
        this.endValue = second
      } else { // 单个时间选择
        if (newVal && !isDate(newVal) && !isString(newVal)) {
          throw Error("[Market-ui]type error: When type is time, 'value' expects 'String' or 'Date'!")
          return
        }
        this.startValue = this.getCorrectTime(newVal)
      }

      // 监测值发生变化，触发表单的验证
      if (this.checkIsChange(newVal, oldVal)) {
        this.dispatch('MkuFormItem', 'onFormItemChange', this.getEmitValue())
      }
    },
    checkIsChange (newVal, oldVal) {
      console.log('newVal', newVal, 'oldVal', oldVal)
      if (oldVal === undefined) return false
      if (newVal === oldVal) return false
      if (isArray(newVal) && isArray(oldVal)) {
        if (newVal.length !== oldVal.length) return true
        return newVal.some((e, i) => e !== oldVal[i])
      }
      return true
    },
    /**
     * @method getCorrectTime
     * @description 获取正确的时间
     * @param { String | Date } val 待格式化的时间
     * - 若val为空，返回空数组
     * - val为Date类型时，调用parseDate解析出对应的时分秒
     * - val为字符串时，正则匹配出所有的数字段，并控制在合法区域内
     */
    getCorrectTime (val) {
      // 当不传，或者为空时，返回空数组
      if (!val) return []
      // Date类型时
      if (isDate(val)) {
        const { hour, minute, second } = parseDate(val)
        return [hour, minute, second]
      }
      // 当传递的为字符串时
      if (isString(val)) return this.pickNumberInString(val).slice(0, 3)
    },
    /**
     * @method pickNumberInString
     * @description 提取字符串中的数字，并控制在合法区域内
     * @param { String } str 待提取的字符串
     * @returns 提取后的数组
     */
    pickNumberInString (str) {
      const timeString = str.replace(/[^\d]+/g, v => ',')
      return timeString.split(',')
        .filter(e => e !== '')
        // 去掉开头的0, 且值控制在合法区域内
        .map((e, i) => withinNum(parseInt(e), 0 , i === 0 ? 23 : 59))
    },
    /**
     * @method calcInputText
     * @description 计算inputText的值
     */
    calcInputText () {
      const startText = this.formatOutputValue(this.startValue, this.formatText)
      if (!this.isRange) {
        this.inputText = startText
        return
      }
      const endText = this.formatOutputValue(this.endValue, this.formatText)
      this.inputText = !startText && !endText ? '' : `${startText}${this.separator}${endText}`
    },
    /**
     * @method handleInputEnter
     * @description 输入框的回车事件
     * - 根据用户输入，提取字符串中的数字
     * - 提取合法值，更新startValue和endValue
     * - picker滚动到对应位置
     * - 重新计算inputText值
     */
    handleInputEnter (event, val) {
      let nums = this.pickNumberInString(val)
      for (let i = 0; i < 6; i++) nums[i] = nums[i] || 0

      const startVal = nums.slice(0, 3)
      const endVal = nums.slice(3, 6)
      this.startValue = startVal
      if (!this.isRange) {
        this.$nextTick(() => this.$refs.startPicker.resetScroll(startVal))
      } else {
        this.endValue = endVal
        this.$nextTick(() => {
          this.$refs.startPicker.resetScroll(startVal)
          this.$refs.endPicker.resetScroll(endVal)
        })
      }
      this.calcInputText()
    },
    /**
     * @method handlePickerClick
     * @description 点击picker到时间项的回调函数
     * - 根据type判断点击的开始时间or结束时间
     * - 计算对应的startValue和endValue值
     *    - 开始时间大于结束时间时，结束时间自动取开始时间值，并滚动到对应位置
     *    - 点击的结束时间项小于开始时间时，不允许点击
     * - 通过emit input事件同步修改v-model绑定值
     * - 由watch value对应的监听事件，同步修改startValue和endValue值
     */
    handlePickerClick (type, arg) {
      const RowColIdx = arg[0] === 'hour' ? 0 : (arg[0] === 'minute' ? 1 : 2)
      const getValue = val => this.formatOutputValue(val, this.formatValue)
      const fill = (arr) => {
        for (let i = 0; i < 3; i++) arr[i] = arr[i] || 0
        return arr
      }
      let emitVal = null
      // 点击开始时间项
      if (type === 'start') {
        let start = fill(deepCopy(this.startValue))
        start[RowColIdx] = arg[1]
        const startVal = getValue(start)
        if (this.isRange) {
          if (compareArrJoined(start, this.endValue)) {
            // 当切换开始值大于结束值时，结束值自动取开始值，且滚动到对应位置
            const endVal = deepCopy(startVal)
            emitVal = [startVal, endVal]
            this.$nextTick(() => this.$refs.endPicker.resetScroll(start))
          } else {
            emitVal = [startVal, getValue(this.endValue)]
          }
        } else {
          emitVal = startVal
        }
      } else { // 点击结束时间项
        // 结束时间项不能比开始时间小
        const start = fill(deepCopy(this.startValue))
        let end = fill(deepCopy(this.endValue))
        end[RowColIdx] = arg[1]
        if (compareArrJoined(start, end)) return

        emitVal = [getValue(start), getValue(end)]
      }
      // watch value的时间监听可以更新startValue和endValue值
      // 此处依旧手动更新，是为了支持value/v-model的非必选
      this.updateCurrentValue(emitVal)
      arg[2]()
      this.$emit('input', emitVal)
      this.$emit('change', emitVal)
    },
    /**
     * @method formatOutputValue
     * @description 格式化输出的值
     * @param { Array } val 值为时分秒的一个数组
     * @param { String } rule 格式化的规则，eg：'HH:mm:ss'
     * @return 格式化后的字符串，eg：'12:02:24'
     */
    formatOutputValue (val, rule) {
      if (!val || !val.length) return ''
      const houtAt12 = v => v >= 12 ? v - 12 : v
      const maps = {
        HH: fillZero(val[0]), // 24时制，2位展示
        H: val[0], // 24时制，1位展示
        hh: fillZero(houtAt12(val[0])), // 12时制，2位展示
        h: houtAt12(val[0]), // 12时制，1位展示
        mm: fillZero(val[1]), // 分钟，2位展示
        m: val[1], // 分钟，1位展示
        ss: fillZero(val[2]), // 秒，2位展示
        s: val[2] // 秒，2位展示
      }
      const reg = /(HH)|(H)|(hh)|(h)|(mm)|(m)|(ss)|(s)/g
      return rule.replace(reg, v => maps[v])
    },
    /**
     * @method handleToggleTpicker
     * @description 显示隐藏时间组件
     */
    handleToggleTpicker (bool) {
      this.visible = bool
    },
    /**
     * @method getEmitValue
     * @description 计算触发emit事件的应该派发的值
     */
    getEmitValue () {
      const getValue = val => this.formatOutputValue(val, this.formatValue)
      return this.isRange ? [getValue(this.startValue), getValue(this.endValue)] : getValue(this.startValue)
    },
    /**
     * @method handleConfirm
     * @description 点击确认按钮触发
     * - 对外暴露confirm自定义事件
     */
    handleConfirm () {
      const emitVal = this.getEmitValue()
      this.$emit('input', emitVal)
      this.$emit('confirm',emitVal )
      this.handleToggleTpicker(false)
    },
    /**
     * @method handleConfirm
     * @description 点击此刻按钮触发
     * - 对外暴露click-now自定义事件
     */
    handleClickNow () {
      this.updateCurrentValue(new Date())
      const emitVal = this.getEmitValue()
      this.$emit('input', emitVal)
      this.$emit('click-now', emitVal)
      this.handleToggleTpicker(false)
    },
    /**
     * @method handleClear
     * @description 清除
     * - 对外暴露clear自定义事件
     */
    handleClear () {
      if (!this.clearable) return
      const val = this.isRange ? [] : ''
      this.updateCurrentValue(val) // 传入第二个参数是为了触发验证
      this.$emit('input', val)
      this.$emit('clear')
      this.handleToggleTpicker(false)
    },
    /**
     * @method handleInputClick
     * @description 点击输入框
     * - 未点击clear按钮则显示下拉面板
     * - 若点击的clear按钮则隐藏下拉面板
     */
    handleInputClick (event) {
      if (this.disabled) return
      const isClearBtn = hasClass(event.target, 'mku-input__clear')
      isClearBtn ? this.handleClear() : this.handleToggleTpicker(true)
      event.stopPropagation()
    },
    watchVisibleChange (newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.startPicker.resetScroll(null, 10)
          if (this.isRange) this.$refs.endPicker.resetScroll(null, 10)
        })
      }
    }
  }
}
</script>
