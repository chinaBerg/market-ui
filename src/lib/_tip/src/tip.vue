<template>
  <div class="mku-tips-wrapper">
    <ul class="mku-tips__content mku-tips__message">
      <transition-group name="mku-tips-transition">
        <li
          v-for="item in tips"
          :key="item._ulid"
          :class="tipItemClassName(item)">
          <div class="mku-tips__item-warp">
            <mku-icon
              class-name="mku-tips__icon-type"
              :type="item.icon"
              v-if="item.icon"
            />
            <div class="mku-tips__title" v-if="item.render" v-html="item.render"></div>
            <div class="mku-tips__title" v-else v-text="item.content"></div>
            <mku-icon
              type="close"
              class-name="mku-tips__icon-close"
              v-if="item.closeable"
              @click="remove(item)"
            />
          </div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import MkuIcon from '../../icon'
import { baseType2Icons } from '../../../utils/maps'
import { createULID } from '../../../utils/assist'

const TIPS = 'mku-tips'

export default {
  name: 'MkuTip',
  data () {
    return {
      tips: []
    }
  },
  components: {
    MkuIcon
  },
  methods: {
    // 生成class name
    tipItemClassName (item) {
      return [
        `${TIPS}__item`,
        {
          [`${TIPS}--info`]: item.type === 'info',
          [`${TIPS}--error`]: item.type === 'error',
          [`${TIPS}--success`]: item.type === 'success',
          [`${TIPS}--warning`]: item.type === 'warning'
        }
      ]
    },
    // 创建一个tip
    add (type, config = {}) {
      config.type = type
      config.icon = baseType2Icons[type]
      config._ulid = createULID()

      // 创建
      this.tips.push(config)
      config.onShow()

      // 关闭
      if (config.duration > 0) {
        setTimeout(() => {
          this.remove(config)
        }, config.duration)
      }

      return config
    },
    // 移除一个tip
    remove (config) {
      this.tips = this.tips.filter(tip => tip._ulid !== config._ulid)
      config.onClose()
      this.$emit('closed')
    }
  }
}
</script>
