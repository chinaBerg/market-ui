
import { trim } from './assist';

/**
 * @method onEvent
 * @description 事件监听，vue项目不做ie8到profill
 * @param { NodeObject } dom dom对象
 * @param { String } event 事件名称
 * @param { Function } cb 回调函数
 */
export function onEvent(dom, event, cb) {
  if (!dom) return;
  dom.addEventListener(event, cb, false);
}

/**
 * @method offEvent
 * @description 取消事件监听
 */
export function offEvent(dom, event, cb) {
  if (!dom) return;
  dom.removeEventListener(event, cb, false);
}

/**
 * @method hasClass
 * @description 判断dom是否包含某个class
 * @param { NodeObject } dom 待检测的单个DOM对象
 * @param { String } className 待查询的className
 * @returns { Boolean } 判断结果
 */
export function hasClass(dom, className) {
  if (!dom || !className) return false;
  if (dom.classList) return dom.classList.contains(className);
  const regexp = `\\b${className}\\b`;
  return new RegExp(regexp, 'g').test(dom.className);
}

/**
 * @method addClass
 * @description 添加className
 * @param { NodeObject } dom 待添加className的单个DOM对象
 * @param { Array } className 待添加的className数组
 */
export function addClass(dom, ...classsNames) {
  if (!dom) return;
  classsNames.forEach((className) => {
    if (dom.classList) {
      dom.classList.add(className);
    } else if (!hasClass(dom, className)) {
      dom.className += ` ${className}`;
    }
  });
}

/**
 * @method removeClass
 * @description 移除dom的className
 * @param { NodeObject } dom 待移除className的单个DOM对象
 * @param { String } className 待移除的className数组
 */
export function removeClass(dom, ...classsNames) {
  if (!dom || !classsNames.length) return;
  if (dom.classList) {
    classsNames.forEach((classsName) => dom.classList.remove(classsName));
    return;
  }
  classsNames.forEach((classsName) => {
    if (hasClass(dom, classsName)) {
      const regexp = `\\b${classsName}\\b`;
      dom.className = trim( // 去除两头的空格
        dom.className
          .replace(new RegExp(regexp, 'g'), '') // 移除class
          .replace(/\s+/g, ' '), // 移除中间部分冗余的空格
      );
    }
  });
}

/**
 * @method inlineStyle
 * @description 设置内联样式
 * @param { NodeObject } dom 待设置样式的单个DOM对象
 * @param { Object } styles 待设置的样式
*/
export function inlineStyle(dom, styles = {}) {
  if (!dom) return;
  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      dom.style[key] = styles[key];
    }
  }
}

/**
 * @method attrs
 * @description 获取/设置html属性
 * @param { Node } dom 元素节点
 * @param { String } ...props 传入一个参数时，获取属性，2个参数设置属性
 */
export function attrs(dom, ...props) {
  if (!dom) return false;
  if (props.length === 1) return dom.getAttribute(props[0]);
  if (props.length === 2) return dom.setAttribute(props[0], props[1]);
  return false;
}

/**
 * @method getStyle
 * @description 获取计算后的css属性
 * @param { Node } obj 元素节点
 * @return { Object } 返回一个样式对象
 */
export function getStyle(obj) {
  if (obj.currentStyle) return obj.currentStyle;
  return obj.currentStyle || getComputedStyle(obj);
}

/**
 * @method getWindowWidth
 * @description 计算窗口的宽高
 * @return { Object } 返回一个保护宽高的对象，无单位
 */
export function getWindowWidth() {
  if (document.body.clientWidth) {
    return {
      clientWidth: document.body.clientWidth,
      clientHeight: document.body.clientHeight,
    };
  }
  return {
    clientWidth: document.documentElement.clientWidth,
    clientHeight: document.documentElement.clientHeight,
  };
}

// 计算dom样式：宽、高、距离视口的上下左右值
export const getRect = (dom) => {
  if (!dom) return false;
  return dom.getBoundingClientRect();
};
