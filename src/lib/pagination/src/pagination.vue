<template>
  <div :class="paginationClasss">
    <!-- 总数 -->
    <span class="mku-pagination__total" v-if="showTotal">
      <slot name="total">共 {{this.total}} 条</slot>
    </span>

    <!-- pager部分 -->
    <ul class="mku-pagination__pager">
      <!-- 上一页 -->
      <li class="mku-pagination__item mku-pagination__btn-prev" @click="handlePrevClick">
        <slot name="prev">
          <i class="mku-icon mku-icon-arrow-left"></i>
        </slot>
      </li>
      <!-- pager -->
      <li
        v-for="(item, index) in pages"
        :key="index"
        :class="['mku-pagination__item ', {'mku-pagination__item--active': current === item}]"
        @click="handlePagerClick(item)"
      >
        <template v-if="item === 'prevDots' || item === 'nextDots'">
          <i class="mku-icon mku-icon-ellipsis"></i>
          <i class="mku-icon mku-pagination-arrow mku-icon-double-arrow-left" v-if="item === 'prevDots'"></i>
          <i class="mku-icon mku-pagination-arrow mku-icon-double-arrow-right" v-else-if="item === 'nextDots'"></i>
        </template>
        <template v-else>{{item}}</template>
      </li>
      <!-- 下一页 -->
      <li class="mku-pagination__item mku-pagination__btn-next" @click="handleNextClick">
        <slot name="next">
          <i class="mku-icon mku-icon-arrow-right"></i>
        </slot>
      </li>
    </ul>

    <!-- 快速跳转 -->
    <div class="mku-pagination__jumper" v-if="showJumper">
      <span class="mku-pagination__jumper-tip">跳转至</span>
      <input
        type="text"
        class="mku-pagination__jumper-input"
        v-model="jumper"
        @keyup.enter="handleKeyup"
        />
      <span class="mku-pagination__jumper-tip">页</span>
    </div>
  </div>
</template>

<script>
import { isNumber }from '../../../utils/assist'

const createArrs = num => {
  let res = []
  for (let i = 1; i <= num; i++) {
    res.push(i)
  }
  return res
}
const createArrsRight = (end, n) => {
  let res = []
  for (let i = end - n + 1; i <= end ; i++) {
    res.push(i)
  }
  return res
}
export default {
  name: 'MkuPagination',
  props: {
    // 当前页数
    currentPage: {
      type: Number,
      default: 1
    },
    // 总数
    total: {
      type: Number,
      default: 0,
      required: true
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 类型，有简约、默认、连体
    type: {
      type: String,
      default: 'default',
      validator: val => {
        return ['simple', 'default', 'conjoin'].includes(val)
      }
    },
    // 尺寸，有小中大
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return ['small', 'default', 'large'].includes(val)
      }
    },
    // 显示总数
    showTotal: {
      type: Boolean,
      default: false
    },
    // 显示快速跳转
    showJumper: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      current: this.currentPage,
      jumper: null
    }
  },
  watch: {
    currentPage: 'handleCurrentPageChange',
    current: 'handleCurrenChange'
  },
  computed: {
    // 拼接pagination的class name
    paginationClasss () {
      return ['mku-pagination', {
        'mku-pagination--simple': this.type === 'simple',
        'mku-pagination--conjoin': this.type === 'conjoin',
        'mku-pagination--small': this.size === 'small',
        'mku-pagination--large': this.size === 'large',
      }]
    },
    // 计算总页数
    totalPages () {
      return Math.ceil(this.total / this.pageSize)
    },
    /**
     * @description 计算最终展示出来的页面数据
     * - 1-6页时，默认全部展示
     * - 7-8页时，最多只展示一个省略号，前省略号或后省略号
     * - 9及以上，根据current选中项，展示前省略号、后省略号、或者前后都展示
     */
    pages () {
      const totalNums = this.totalPages
      const count = 5 // 期望展示的pager数量(...前 | ...后 | ...之间)
      const level1 = count + 2
      const level2 = count + 4
      const cur = this.current
      let arrs = []
      if (totalNums < level1) {
        return createArrs(totalNums)
      } else if (totalNums < level2) {
        const helf = Math.floor(totalNums / 2)
        if (cur <= helf) {
          arrs.push(...createArrs(count), 'nextDots', totalNums)
        } else {
          arrs.push(1, 'prevDots', ...createArrsRight(totalNums, 5))
        }
        return arrs
      } else {
        if (cur < count) {
          arrs.push(...createArrs(count), 'nextDots', totalNums)
        } else if (cur >= count && cur <= totalNums - (count - 1)) {
          arrs.push(
            1, 'prevDots',
            cur - 2, cur - 1, cur, cur + 1, cur + 2,
            'nextDots', totalNums
          )
        } else {
          arrs.push(1, 'prevDots', ...createArrsRight(totalNums, 5))
        }
        return arrs
      }
    }
  },
  created () {
    this.jumper = this.currentPage
  },
  methods: {
    /**
     * @method handleCurrentPageChange
     * @description 监听外部currentPage变化，更新组件current值
     */
    handleCurrentPageChange (newVal) {
      if (newVal === this.current) return
      this.updateStep(newVal, false)
    },
    /**
     * @method handleCurrenChange
     * @description 监听current变化，更新jumper
     * - 如果外部使用了.sync用法，双向更新外部currentPage值
     * - 暴露current-change事件
     */
    handleCurrenChange (newVal) {
      this.jumper = newVal
      this.$emit('update:currentPage', newVal)
      this.$emit('current-change', newVal)
    },
    /**
     * @method updateStep
     * @description 更新current值
     * @param { Number } step 更新的值
     * @param { Boolean } isAdd 判断是累加step or 直接更新到step
     */
    updateStep (step, isAdd = true) {
      let current = isAdd ? this.current + step : step
      current = current > this.totalPages ? this.totalPages : current
      current = current < 1 ? 1 : current
      this.current = current
    },
    /**
     * @method handlePagerClick
     * @description pager按钮的点击事件
     * - 如果是 >> 按钮，往后跳转3页
     * - 如果是 << 按钮，往前跳转3页
     * - 否则跳转到对应的pager
     */
    handlePagerClick (item) {
      if (item === 'nextDots') {
        this.updateStep(3)
        this.$emit('next-mutiple-click', this.current)
      } else if (item === 'prevDots') {
        this.updateStep(-3)
        this.$emit('prev-mutiple-click', this.current)
      } else {
        this.current = item
      }
    },
    // 前进一步
    handlePrevClick () {
      this.updateStep(-1)
      this.$emit('prev-click', this.current)
    },
    // 后退一步
    handleNextClick () {
      this.updateStep(1)
      this.$emit('next-click', this.current)
    },
    handleKeyup (event) {
      const step = isNumber(this.jumper) ? this.jumper : Math.max(+(this.jumper.replace(/[^\d]+/g, '')), 1)
      if (step === this.jumper) return
      this.updateStep(step - this.current)
    }
  }
}
</script>
