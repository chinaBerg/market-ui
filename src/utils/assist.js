// 向上查找单个组件
const findComponentUpward = (context, targetComponentName) => {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || targetComponentName !== name)) {
    parent = parent.$parent
    parent && (name = parent.$options.name)
  }
  return parent
}

// 向上查找所有符合条件的组件
const findComponentsUpward = (context, targetComponentName) => {
  let parent = context.$parent
  let targets = []
  while (parent) {
    parent.$options.name === targetComponentName && targets.push(parent)
    parent = parent.$parent
  }
  return targets
}

// 向下找到符合条件的子组件
const findComponentDownward = (context, targetComponentName) => {
  let children = [...context.$children]
  let targetComponent = null
  while (children.length) {
    const current = children.shift()
    if (current.$options.name === targetComponentName) {
      targetComponent = current
      children = []
    } else {
      current.$children.length && children.push(...current.$children)
    }
  }
  return targetComponent
}

// 向下找到所有符合条件的子组件
const findComponentsDownward = (context, targetComponentName) => {
  let children = [...context.$children]
  let targetComponents = []
  while (children.length) {
    const current = children.shift()
    current.$options.name === targetComponentName && targetComponents.push(current)
    current.$children.length && children.push(...current.$children)
  }
  return targetComponents
}

// 找到所有兄弟组件
const findSiblingsComponents = (context, targetComponentName, exceptSelf = true) => {
  const parent = context.$parent
  return parent.$children.filter(component => {
    return component.$options.name === targetComponentName &&
      (!exceptSelf || context._uid !== component._uid)
  })
}

const createTypeOf = (type) => {
  return function (val) {
    const valueType = Object.prototype.toString.call(val).slice(8, -1)
    return valueType === type
  }
}

const isArray = createTypeOf('Array')
const isObject = createTypeOf('Object')
const isNull = createTypeOf('Null')
const isUndefined = createTypeOf('Undefined')
const isFunction = createTypeOf('Function')

// 深拷贝
const deepCopy = val => {
  let res
  if (isArray(val)) {
    res = []
    let i = 0
    let current
    for (; current = val[i++];) {
      res.push(deepCopy(current))
    }
    return res
  }
  if (isObject(val)) {
    res = {}
    for (let prop in val) {
      res[prop] = deepCopy(val[prop])
    }
    return res
  }
  return val
}

// 去除两头空格
const trim = (str) => {
  if (!str) return ''
  if (str.trim) return str.trim()
  return str.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findSiblingsComponents,
  isArray,
  isObject,
  isNull,
  isUndefined,
  isFunction,
  deepCopy,
  trim
}
