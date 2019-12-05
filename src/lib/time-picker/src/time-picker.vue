<template>
  <div class="mku-tpicker">
    <div @click.stop="handleToggleTpicker">
    <mku-input ref="tpickerInput"/>
    </div>
    <transition name="mku-tpicker">
      <mku-drop
        reference="tpickerInput"
        class-name="mku-tpicker__row-wrap"
        v-if="isVisible">

        <!-- 主体内容 -->
        <div class="mku-tpicker__content">
          <div class="mku-tpicker__slides">
            <span><i class="mku-icon mku-icon-arrow-up"></i></span>
            <span><i class="mku-icon mku-icon-arrow-up"></i></span>
            <span><i class="mku-icon mku-icon-arrow-up"></i></span>
          </div>

          <div class="mku-tpicker__row" @click.stop>
            <div class="mku-tpicker__col" ref="hourCol">
              <ul class="mku-tpicker__list mku-tpicker__list--short">
                <li
                  :class="['mku-tpicker__col-item', {'mku-tpicker__col-item--active': hourIndex === index}]"
                  v-for="(item, index) in 24"
                  :key="index"
                  @click="handleColItemClick('hour', item, index)">
                  {{item - 1 | formatNumber}}
                </li>
              </ul>
            </div>
            <div class="mku-tpicker__col" ref="minuteCol">
              <ul class="mku-tpicker__list mku-tpicker__list--long">
                <li
                  :class="['mku-tpicker__col-item', {'mku-tpicker__col-item--active': minuteIndex === index}]"
                  v-for="(item, index) in 60"
                  :key="index"
                  @click="handleColItemClick('minute', item, index)">
                  {{item - 1 | formatNumber}}
                </li>
              </ul>
            </div>
            <div class="mku-tpicker__col" ref="secondCol">
              <ul class="mku-tpicker__list mku-tpicker__list--long">
                <li
                  :class="['mku-tpicker__col-item', {'mku-tpicker__col-item--active': secondIndex === index}]"
                  v-for="(item, index) in 60"
                  :key="index"
                  @click="handleColItemClick('second', item, index)">
                  {{item - 1 | formatNumber}}
                </li>
              </ul>
            </div>
          </div>

          <div class="mku-tpicker__slides">
            <span><i class="mku-icon mku-icon-arrow-down"></i></span>
            <span><i class="mku-icon mku-icon-arrow-down"></i></span>
            <span><i class="mku-icon mku-icon-arrow-down"></i></span>
          </div>

          <div class="mku-tpicker__mark">
            <div class="mku-tpicker__mark-babel"></div>
          </div>
        </div>

        <!-- 底部 -->
        <div class="mku-tpicker__foot">
          <div class="mku-tpicker__foot-left">
            <a href="">此刻</a>
          </div>
          <mku-button size="small" class="mku-tpicker__foot-clear">清空</mku-button>
          <mku-button type="primary" size="small">确认</mku-button>
        </div>
      </mku-drop>
    </transition>
  </div>
</template>

<script>
import kute from 'kute.js'
// import { onEvent, offEvent } from '../../../utils/dom'
// import { isString } from '../../../utils/assist'
import MkuInput from '../../input'
import MkuButton from '../../button'
import MkuDrop from '../../_drop'
import { fillZero } from '../../../utils/tools'
import { onEvent, offEvent } from '../../../utils/dom'

export default {
  name: 'MkuTimePicker',
  components: { MkuInput, MkuDrop, MkuButton },
  props: {
    // 绑定的值
    value: {
      type: Date
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
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    },
    // 提示占位符
    placeholder: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 可清除
    clearable: {
      type: Boolean,
      default: true
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isVisible: false,
      hourIndex: 0,
      minuteIndex: 0,
      secondIndex: 0
    }
  },
  watch: {
    isVisible: 'watchVisibleChange'
  },
  computed: {
  },
  filters: {
    formatNumber (num) {
      return fillZero(num)
    }
  },
  mounted () {
    const onWinClick = () => {
      this.isVisible = false
    }
    onEvent(document, 'click', onWinClick)
    this.$once('hook:beforeDestroy', () => {
      offEvent(document, 'click', onWinClick)
    })
  },
  methods: {
    /**
     * @method initTarget
     * @description 初始化容器，并计算初始化时容器的滚动高度
     */
    handleToggleTpicker () {
      this.isVisible = !this.isVisible
    },
    watchVisibleChange () {
      this.$nextTick(() => {
        this.scrollTo(this.$refs.hourCol, this.hourIndex, 10)
        this.scrollTo(this.$refs.minuteCol, this.minuteIndex, 10)
        this.scrollTo(this.$refs.secondCol, this.secondIndex, 10)
      })
    },
    handleColItemClick (type, item, index) {
      let target = null
      if (type === 'hour') {
        this.hourIndex = index
        target = this.$refs.hourCol
      } else if (type === 'minute') {
        this.minuteIndex = index
        target = this.$refs.minuteCol
      } else {
        this.secondIndex = index
        target = this.$refs.secondCol
      }
      this.scrollTo(target, index)
    },
    scrollTo (target, index, duration = 250) {
      kute.to(target, {
        scroll: index * 28
      }, {
        duration
      }).start()
    }
  }
}
</script>
