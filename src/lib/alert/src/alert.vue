<template>
  <mku-collapse-transition animte="ease" :duration=".3">
    <div :class="alertClassNames" v-if="isShow">
      <div class="mku-alert-wrapper">
        <mku-icon
          class-name="mku-alert__icon"
          size="26px"
          v-if="showIcon"
          :type="iconName"
        />
        <div class="mku-alert__content">
          <h3 class="mku-alert__title mku-global-ellipsis">
            {{title}}
          </h3>
          <p class="mku-alert__desc" v-if="content" :style="contentStyle">
            {{content}}
          </p>
        </div>
        <mku-icon
          class-name="mku-alert__close"
          type="close"
          size="20px"
          v-if="closeable"
          @click="handleClose"
        />
      </div>
    </div>
  </mku-collapse-transition>
</template>

<script>
import MkuCollapseTransition from '../../collapse-transition'
import MkuIcon from '../../icon'
const ALERT = 'mku-alert'

export default {
  name: 'MkuAlert',
  components: {
    MkuCollapseTransition,
    MkuIcon
  },
  props: {
    type: {
      type: String,
      default: 'info',
      validator: val => {
        return ['info', 'success', 'error', 'warning'].includes(val)
      }
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ''
    },
    contentLine: {
      type: Number,
      default: 0
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    alertClassNames () {
      return [
        ALERT,
        {
          [`${ALERT}--info`]: this.type === 'info',
          [`${ALERT}--success`]: this.type === 'success',
          [`${ALERT}--error`]: this.type === 'error',
          [`${ALERT}--warning`]: this.type === 'warning'
        }
      ]
    },
    iconName () {
      const iconMaps = {
        info: 'tip',
        success: 'success-circle',
        error: 'error-circle',
        warning: 'warning'
      }
      return iconMaps[this.type]
    },
    contentStyle () {
      if (!this.contentLine) return {}
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': this.contentLine,
        '-webkit-box-orient': 'vertical'
      }
    }
  },
  methods: {
    handleClose () {
      this.isShow = false
      this.$emit('close')
    }
  }
}
</script>
