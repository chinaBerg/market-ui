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
