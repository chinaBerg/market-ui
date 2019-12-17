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

// 数字小于10时自动前面补0
export const fillZero = num => {
  if (!num && num !== 0) return ''
  if (num < 10) return `0${num}`
  return num
}

// 大于max时取max，小于min时取min，否则取自身
export const withinNum = (origin, min, max) => {
  return Math.min(Math.max(origin, min), max)
}

// 向下取整
export const floor = (num) => {
  return Math.floor(num)
}

/**
 * @method pickNumberInString
 * @description 提取字符串中的数字
 * @param { String } str 待提取的字符串
 * @returns 提取后的数组
 */
export const pickNumberInString = str => {
  const timeString = str.replace(/[^\d]+/g, v => ',')
  return timeString.split(',')
    .filter(e => e !== '')
    // 去掉开头的0, 且值控制在合法区域内
    .map((e, i) => parseInt(e))
    // .map((e, i) => withinNum(parseInt(e), 0, i === 0 ? 23 : 59))
}
