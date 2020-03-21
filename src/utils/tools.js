import { isNumber } from './assist';

// 浅合并参数
export const merge = (target, ...args) => {
  args.forEach((arg) => {
    for (const prop in arg) {
      if (arg.hasOwnProperty(prop)) {
        if (arg[prop] !== undefined && arg[prop] !== null) {
          target[prop] = arg[prop];
        }
      }
    }
  });
  return target;
};

// 检测单位，如果是数字则自动加上px
export const formatSize = (val) => (isNumber(val) ? `${val}px` : val);

// TODO：简单使用，需要优化
export const isEqual = (a, b) => {
  if (typeof a !== typeof b) return false;
  return a === b;
};

// 数字小于10时自动前面补0
export const fillZero = (num) => {
  if (!num && num !== 0) return '';
  if (num < 10) return `0${num}`;
  return num;
};

// 大于max时取max，小于min时取min，否则取自身
export const withinNum = (origin, min, max) => Math.min(Math.max(origin, min), max);

// 向下取整
export const floor = (num) => Math.floor(num);

/**
 * @method pickNumberInString
 * @description 提取字符串中的数字
 * @param { String } str 待提取的字符串
 * @returns 提取后的数组
 */
export const pickNumberInString = (str) => {
  const timeString = str.replace(/[^\d]+/g, () => ',');
  return timeString.split(',')
    .filter((e) => e !== '')
    // 去掉开头的0, 且值控制在合法区域内
    .map((e) => parseInt(e, 10));
  // .map((e, i) => withinNum(parseInt(e), 0, i === 0 ? 23 : 59))
};

/**
 * @method compareArrJoined
 * @description 将2个数组分别join后，对比数值大小，eg：[1, 2, 3] => 123，[4,5,6] => 456, 123 < 456
 * @returns arr1 > arr2的结果
 */
export const compareArrJoined = (arr1, arr2) => {
  const reg = /[^\d]+/g;
  const remove = (str) => str.replace(reg, () => '');
  const startNum = parseInt(remove(arr1.join('')), 10) || 0;
  const endNum = parseInt(remove(arr2.join('')), 10) || 0;
  return startNum > endNum;
};

export const fullArray = (arr, len, val) => {
  const res = [];
  for (let i = 0; i < len; i++) res[i] = arr[i] !== undefined ? arr[i] : val;
  return res;
};
