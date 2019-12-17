
/**
 * @method parseDate
 * @description 解析日期
 * @param { String, Date } time
 * @retrun { Object } 包含了所有日期值的对象
 */
export function parseDate (time) {
  const t = time ? new Date(time) : new Date()
  return {
    year: t.getFullYear(),
    month: t.getMonth(),
    day: t.getDay(),
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds()
  }
}
