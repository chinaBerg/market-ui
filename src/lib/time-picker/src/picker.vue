<template>
  <div class="mku-tpicker__row">
    <div class="mku-tpicker__col" ref="hourCol">
      <ul class="mku-tpicker__list mku-tpicker__list--short">
        <li
          v-for="(item, index) in hours"
          :key="index"
          :class="pickerClasss(value[0], item)"
          @click="handleClick('hour', item)">
          {{item | formatNumber}}
        </li>
      </ul>
    </div>
    <div class="mku-tpicker__col" ref="minuteCol">
      <ul class="mku-tpicker__list mku-tpicker__list--long">
        <li
          v-for="(item, index) in minutes"
          :key="index"
          :class="pickerClasss(value[1], item)"
          @click="handleClick('minute', item, index)">
          {{item | formatNumber}}
        </li>
      </ul>
    </div>
    <div class="mku-tpicker__col" ref="secondCol">
      <ul class="mku-tpicker__list mku-tpicker__list--long">
        <li
          v-for="(item, index) in seconds"
          :key="index"
          :class="pickerClasss(value[2], item)"
          @click="handleClick('second', item, index)">
          {{item | formatNumber}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import kute from 'kute.js'
import { fillZero } from '../../../utils/tools'
import { findComponentUpward } from '../../../utils/assist'

// 生成0开始的叠加数组
const genIncreaseArray = n => {
  let res = []
  for (let i = 0; i < n; i++) res.push(i)
  return res
}

export default {
  props: [
    'value',
    'isVisible'
  ],
  data () {
    return {
      hours: genIncreaseArray(24),
      minutes: genIncreaseArray(60),
      seconds: genIncreaseArray(60)
    }
  },
  filters: {
    formatNumber (num) {
      return fillZero(num)
    }
  },
  watch: {
    isVisible: {
      handler: 'watchVisibleChange',
      immediate: true
    }
  },
  computed: {
    pickerClasss () {
      return (val1, val2) => {
        return ['mku-tpicker__col-item', {
        'mku-tpicker__col-item--active': parseInt(val1) === parseInt(val2)
      }]}
    }
  },
  methods: {
    watchVisibleChange (newVal) {
      if (!newVal) return
      this.$nextTick(() => this.reScrollTo(this.value, 10))
    },
    reScrollTo (arr, duration) {
      ['hourCol', 'minuteCol', 'secondCol'].forEach((item, index) => {
        this.scrollTo(this.$refs[item], arr[index], duration)
      })
    },
    // 点击时间项
    handleClick (type, item) {
      const targetMaps = {
        hour: this.$refs.hourCol,
        minute: this.$refs.minuteCol,
        second: this.$refs.secondCol
      }
      const target = targetMaps[type]
      const scroll = () => {
        target && this.scrollTo(target, item)
      }
      this.$emit('click', type, item, scroll)
    },
    // 滚动到具体位置
    scrollTo (target, index, duration = 250) {
      const firstItemHeight = target.querySelector('.mku-tpicker__col-item').clientHeight
      kute.to(target, {
        scroll: index * firstItemHeight
      }, {
        duration
      }).start()
    }
  }
}
</script>
