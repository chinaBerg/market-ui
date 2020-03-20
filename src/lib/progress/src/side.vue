<script>
import { isFunction } from '../../../utils/assist'
import { isEqual } from '../../../utils/tools'

export default {
  name: 'MkuProgressSlide',
  computed: {
    status () {
      return this.$parent.calcStatus
    },
    sideClasss () {
      const prefix = 'mku-progress__side'
      const eq = v => isEqual(this.$parent.textPlacement, v)
      return [prefix, {
        [`${prefix}--start`]: eq('start'),
        [`${prefix}--end`]: eq('end'),
        [`${prefix}--start-inside`]: eq('start-inside'),
        [`${prefix}--end-inside`]: eq('end-inside'),
        [`${prefix}--top-follow`]: eq('top-follow')
      }]
    },
    // 拼接icon的class name
    iconClasss () {
      const prefix = 'mku-icon'
      const eq = v => isEqual(this.status, v)
      return [prefix, 'mku-progress__icon', {
        [`${prefix}-success`]: eq('success'),
        [`${prefix}-error-circle`]: eq('error'),
        [`${prefix}-warning`]: eq('warning')
      }]
    }
  },
  render (h) {
    const { textRender, calcPercent } = this.$parent
    if (textRender && isFunction(textRender)) {
      return textRender(h, calcPercent)
    }
    const Icon = h('i', { class: this.iconClasss })
    return h('div',
      { class: this.sideClasss },
      [ this.status === 'active' ? `${calcPercent}%` : Icon]
    )
  }
}
</script>
