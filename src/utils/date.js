import { isFunction } from './assist';
import { fillZero } from './tools';
/**
 * @method parseDate
 * @description 解析日期
 * @param { String, Date } time
 * @retrun { Object } 包含了所有日期值的对象
 */
export function parseDate(time) {
  const t = time ? new Date(time) : new Date(Date.now());
  return {
    year: t.getFullYear(),
    month: t.getMonth(),
    date: t.getDate(),
    day: t.getDay(),
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds(),
    timeStamp: t.getTime(),
  };
}

/**
 * @method pickNumInStr
 * @description 从字符串中提取数字
 * @param { String } str 待提取的字符串
 * @param { Function } iterate 迭代函数，迭代提取后的数组，并使用其返回值
 * @retrun { Array } 提取后的数字数组
 */
export function pickNumInStr(str, iterate) {
  const timeString = str.replace(/[^\d]+/g, () => ',');
  const nums = timeString.split(',')
    .filter((e) => e !== '')
    .map((e) => parseInt(e, 10));
  return isFunction(iterate) ? nums.map(iterate) : nums;
}

/**
 * @method generateFormatedTime
 * @description 生成格式化后的数字
 * @param { String } str 待提取的字符串
 * @param { Function } iterate 迭代函数，迭代提取后的数组，并使用其返回值
 * @retrun { Array } 提取后的数字数组
 */
export function generateFormatedTime(time, rule) {
  const houtAt12 = (v) => (v >= 12 ? v - 12 : v);
  const t = parseDate(time);
  const maps = {
    YYYY: t.year, // 年，eg：2019
    MM: fillZero(t.month + 1), // 月, 2位，eg：03
    M: t.month + 1, // 月, 1位，eg：3
    DD: fillZero(t.date), // 日, 2位，eg：03
    D: t.date, // 日, 1位，eg：03
    HH: fillZero(t.hour), // 24时制，2位展示
    H: t.hour, // 24时制，1位展示
    hh: fillZero(houtAt12(t.hour)), // 12时制，2位展示
    h: houtAt12(t.hour), // 12时制，1位展示
    mm: fillZero(t.minute), // 分钟，2位展示
    m: t.minute, // 分钟，1位展示
    ss: fillZero(t.second), // 秒，2位展示
    s: t.second, // 秒，2位展示
  };
  const regStr = Object.keys(maps).map((e) => `(${e})`).join('|');
  const reg = new RegExp(regStr, 'g');
  return rule.replace(reg, (v) => maps[v]);
}

// 获取时间戳
export function getTime(...arg) {
  return new Date(...arg).getTime();
}
