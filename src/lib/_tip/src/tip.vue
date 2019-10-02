<template>
  <div :class="['mku-tips-wrapper', {'mku-tips-notice': isNotice}]">
    <transition-group class="mku-tips__content" tag="ul" name="mku-tips-transition">
      <li
        v-for="item in tips"
        :key="item._ulid"
        :class="tipItemClassName(item)">
        <div class="mku-tips__item-wrap">
          <div class="mku-tips__item-content">
            <mku-icon
              class-name="mku-tips__icon-type"
              :type="item.icon"
              v-if="item.icon"
            />
            <div class="mku-tips__info">
              <div :class="['mku-tips__title', {'mku--isBold': item.content || item.render}]" >
                <template v-if="item.render && type === 'message'">
                  <p v-html="item.render"></p>
                </template>
                <template v-else>{{item.title}}</template>
              </div>
              <div class="mku-tips__desc" v-if="type === 'notice' && (item.content || item.render)">
                <template v-if="item.render">
                  <p v-html="item.render"></p>
                </template>
                <template v-else>{{item.content}}</template>
              </div>
            </div>
            <mku-icon
              type="close"
              class-name="mku-tips__icon-close"
              v-if="item.closeable"
              @click="remove(item)"
            />
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import MkuIcon from '../../icon'
import { baseType2Icons } from '../../../utils/maps'
import { createULID, isFunction } from '../../../utils/assist'

const TIPS = 'mku-tips'

export default {
  name: 'MkuTip',
  components: {
    MkuIcon
  },
  props: {
    // 标识tip的类型
    type: {
      type: String,
      required: true,
      validator: val => {
        return ['message', 'notice'].includes(val)
      }
    }
  },
  data () {
    return {
      tips: []
    }
  },
  computed: {
    isNotice () {
      return this.type === 'notice'
    }
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
      isFunction(config.onShow) && config.onShow()

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
      isFunction(config.onClose) && config.onClose()
      this.$emit('closed')
    }
  }
}
</script>
