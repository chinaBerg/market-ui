<template>
  <div :class="stepClasss">
    <div class="mku-step__head">
      <i :class="lineClasss"></i>
      <span class="mku-step__icon">
        <template v-if="isShowIcon">
          <i :class="iconClasss"></i>
        </template>
        <template v-else>{{index + 1}}</template>
      </span>
    </div>

    <div class="mku-step__content">
      <div class="mku-step__title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="mku-step__desc">
        <slot name="content">{{content}}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MkuStep',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String
    }
  },
  inject: [ 'MkuSteps' ],
  data () {
    return {
      index: -1
    }
  },
  computed: {
    stepClasss () {
      const prefix = 'mku-step'
      const isCur = this.isCurrent
      const status = this.MkuSteps.currentStatus
      const isHor = this.MkuSteps.direction === 'horizontal'
      return [prefix, {
        [`${prefix}--center`]: this.MkuSteps.center && isHor,
        [`${prefix}--start`]: !this.MkuSteps.center && isHor,
        [`${prefix}--wait`]: isCur && status === 'wait',
        [`${prefix}--process`]: (isCur && (status === 'process' || status === 'finish')) || this.index < this.current,
        [`${prefix}--error`]: isCur && status === 'error'
      }]
    },
    iconClasss () {
      const status = this.MkuSteps.currentStatus
      const isError = this.isCurrent && status === 'error'
      return ['mku-icon', {
        'mku-icon-yes': !isError,
        'mku-icon-error': isError
      }]
    },
    lineClasss () {
      const status = this.MkuSteps.currentStatus
      let isShow
      if (status === 'process' || status === 'finish') {
        isShow = this.index < this.current
      } else {
        isShow = this.index < this.current - 1
      }
      return ['mku-step__line', {
        'mku-step__line--success': isShow,
        'mku-step__line--error': this.current - 1 === this.index && status === 'error'
      }]
    },
    current () {
      return (this.MkuSteps && this.MkuSteps.current) || 0
    },
    isCurrent () {
      return this.current === this.index
    },
    isShowIcon () {
      if (this.index < this.current && this.MkuSteps.showIcon) return true
      const status = this.MkuSteps.currentStatus
      if (this.isCurrent && (status === 'finish' || status === 'error')) return true
      return false
    }
  },
  created () {
    this.MkuSteps && this.MkuSteps.steps.push(this)
    this.index = this.MkuSteps.steps.indexOf(this)
  }
}
</script>
