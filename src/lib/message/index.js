import MkuTip from '../_tip'
import { singlePattern } from '../../utils/assist'

const messageSingle = singlePattern(MkuTip.init)
const message = messageSingle({
  type: 'message'
})

function createMessage (type, config) {
  const current = message.add(type, config)
  function close () {
    message.remove(current)
  }
  return {
    close
  }
}

export default {
  name: 'MkuMessage',

  message (type, config) {
    if (typeof config === 'string') {
      config = {
        title: config
      }
    }
    const defaultCb = function () {}
    const defaultConfig = {
      title: '',
      render: null,
      duration: 1500,
      closeable: false,
      onShow: defaultCb,
      onClose: defaultCb
    }
    const params = Object.assign(defaultConfig, config)
    return createMessage(type, params)
  },

  info (config) {
    return this.message('info', config)
  },

  success (config) {
    return this.message('success', config)
  },

  error (config) {
    return this.message('error', config)
  },

  warning (config) {
    return this.message('warning', config)
  }
}
