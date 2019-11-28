<template>
  <div
    class="mku-backtop"
    v-show="isShow"
    :style="backtopStyle"
    @click="backToTop">
    <slot>
      <div class="mku-backtop__wrap">
        <i class="mku-icon mku-icon-backtop mku-backtop__icon"></i>
      </div>
    </slot>
  </div>
</template>

<script>
import kute from 'kute.js'
import { onEvent, offEvent } from '../../../utils/dom'
import { isString } from '../../../utils/assist'

export default {
  name: 'MkuBacktop',
  props: {
    // 滚动目标
    target: {
      type: [String, Object]
    },
    // 滚动到的位置
    scroll: {
      type: Number,
      default: 0
    },
    // 滚动时间
    duration: {
      type: Number,
      default: 300
    },
    // 滚动到此处显示btn
    height: {
      type: Number,
      default: 200
    },
    // 是否固定
    fixed: {
      type: Boolean,
      default: true
    },
    // 固定参数
    fixedConfig: {
      type: Object,
      default: () => {
        return {
          right: '40px', bottom: '50px'
        }
      }
    }
  },
  data () {
    return {
      targetDom: null,
      scrollTop: 0
    }
  },
  computed: {
    isShow () {
      return this.scrollTop >= this.height
    },
    backtopStyle () {
      if (!this.fixed) return {}
      return {
        position: 'fixed',
        zIndex: 20191128,
        ...this.fixedConfig
      }
    }
  },
  mounted () {
    this.initTarget()
    onEvent(this.targetDom, 'scroll', this.onTargetScroll)
    this.$once('hook:beforeDestroy', () => {
      offEvent(this.targetDom, 'scroll', this.onTargetScroll)
    })
  },
  methods: {
    /**
     * @method initTarget
     * @description 初始化容器，并计算初始化时容器的滚动高度
     */
    initTarget () {
      this.targetDom = this.target ? (
        isString(this.target) ? document.querySelector(this.target) : this.target
      ) : document.querySelector('body')
      this.scrollTop = this.targetDom.scrollTop
    },
    /**
     * @method onTargetScroll
     * @description 监听目标容器滚动
     */
    onTargetScroll (event) {
      const scrollTop = event.target.scrollTop
      this.scrollTop = scrollTop
      this.$emit('scroll', scrollTop)
    },
    /**
     * @method backToTop
     * @description 滚动方法
     */
    backToTop () {
      kute.to(this.targetDom, {
        // scroll: this.scroll
        scroll: this.scroll
      }, {
        duration: this.duration,
        complete: () => {
          this.$emit('scroll-finish')
        }
      }).start()
    }
  }
}
</script>
