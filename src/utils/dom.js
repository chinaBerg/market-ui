
import { trim } from './assist'

/**
 * @method hasClass
 * @description 判断dom是否包含某个class
 * @param { NodeObject } dom 待检测的单个DOM对象
 * @param { String } className 待查询的className
 * @returns { Boolean } 判断结果
 */
export function hasClass (dom, className) {
  if (!dom || !className) return false
  if (dom.classList) return dom.classList.contains(className)
  const regexp = `\\b${className}\\b`
  return new RegExp(regexp, 'g').test(dom.className)
}

/**
 * @method addClass
 * @description 添加className
 * @param { NodeObject } dom 待添加className的单个DOM对象
 * @param { Array } className 待添加的className数组
 */
export function addClass (dom, ...classsNames) {
  if (!dom) return
  classsNames.forEach(className => {
    if (dom.classList) {
      dom.classList.add(className)
    } else {
      if (!hasClass(dom, className)) {
        dom.className += ` ${className}`
      }
    }
  })
}

/**
 * @method removeClass
 * @description 移除dom的className
 * @param { NodeObject } dom 待移除className的单个DOM对象
 * @param { String } className 待移除的className数组
 */
export function removeClass (dom, ...classsNames) {
  if (!dom || !classsNames.length) return
  if (dom.classList) {
    classsNames.forEach(classsName => dom.classList.remove(classsName))
    return
  }
  classsNames.forEach(classsName => {
    if (hasClass(dom, classsName)) {
      const regexp = `\\b${classsName}\\b`
      dom.className = trim( // 去除两头的空格
        dom.className
          .replace(new RegExp(regexp, 'g'), '') // 移除class
          .replace(/\s+/g, ' ') // 移除中间部分冗余的空格
      )
    }
  })
}

/**
 * @method inlineStyle
 * @description 设置内联样式
 * @param { NodeObject } dom 待设置样式的单个DOM对象
 * @param { Object } styles 待设置的样式
*/
export function inlineStyle (dom, styles = {}) {
  if (!dom) return
  for (let key in styles) {
    if (styles.hasOwnProperty(key)) {
      dom.style[key] = styles[key]
    }
  }
}
