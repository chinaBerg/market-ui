import { inlineStyle } from '../../utils/dom'

const transition = config => {
  let style = {
    transition: `all ${config.duration}s ${config.animate}`,
    overflow: 'hidden'
  }
  const transition = {
    beforeEnter (el) {
      el.dataset.paddingTop = el.style.paddingTop
      el.dataset.paddingBottom = el.style.paddingBottom
      inlineStyle(
        el,
        Object.assign(style, { height: 0 })
      )
    },
    enter (el) {
      setTimeout(() => {
        inlineStyle(el, {
          height: `${el.scrollHeight}px`,
          paddingTop: el.dataset.paddingTop,
          paddingBottom: el.dataset.paddingBottom
        })
      }, 0)
    },
    afterEnter (el) {
      inlineStyle(el, { height: '', overflow: '' })
    },
    beforeLeave (el) {
      inlineStyle(el, Object.assign(style, {
        height: `${el.scrollHeight}px`,
        overflow: ''
      }))
    },
    leave (el) {
      setTimeout(() => {
        inlineStyle(el, { height: 0, overflow: 'hidden' })
      }, 0)
    },
    afterLeave (el) {
      inlineStyle(el, { height: 0, overflow: 'hidden' })
    }
  }
  return transition
}

export default {
  name: 'MkuCollspseTransition',
  functional: true,
  props: {
    duration: {
      type: [Number],
      default: 0.5
    },
    animate: {
      type: String,
      default: 'ease'
    }
  },
  render (h, { children, props }) {
    return h(
      'transition',
      {
        on: transition(props)
      },
      children
    )
  }
}
