import { isNumber } from './assist'

// 浅合并参数
export const merge = (target, ...args) => {
  args.forEach(arg => {
    for (let prop in arg) {
      if (arg.hasOwnProperty(prop)) {
        if (arg[prop] !== undefined && arg[prop] !== null) {
          target[prop] = arg[prop]
        }
      }
    }
  })
  return target
}

// 检测单位，如果是数字则自动加上px
export const formatSize = val => {
  return isNumber(val) ? val + 'px' : val
}

// TODO：简单使用，需要优化
export const isEqual = (a, b) => {
  if (typeof a !== typeof b) return false
  return a === b
}
