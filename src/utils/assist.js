import { ulid } from 'ulid';

// 向上查找单个组件
const findComponentUpward = (context, targetComponentName) => {
  let parent = context.$parent;
  let { name } = parent.$options;
  while (parent && (!name || targetComponentName !== name)) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.name;
    }
  }
  return parent;
};

// 向上查找所有符合条件的组件
const findComponentsUpward = (context, targetComponentName) => {
  let parent = context.$parent;
  const targets = [];
  while (parent) {
    if (parent.$options.name === targetComponentName) {
      targets.push(parent);
    }
    parent = parent.$parent;
  }
  return targets;
};

// 向下找到符合条件的子组件
const findComponentDownward = (context, targetComponentName) => {
  let children = [...context.$children];
  let targetComponent = null;
  while (children.length) {
    const current = children.shift();
    if (current.$options.name === targetComponentName) {
      targetComponent = current;
      children = [];
    } else if (current.$children.length) {
      children.push(...current.$children);
    }
  }
  return targetComponent;
};

// 向下找到所有符合条件的子组件
const findComponentsDownward = (context, targetComponentName) => {
  const children = [...context.$children];
  const targetComponents = [];
  while (children.length) {
    const current = children.shift();
    if (current.$options.name === targetComponentName) {
      targetComponents.push(current);
    }
    if (current.$children.length) {
      children.push(...current.$children);
    }
  }
  return targetComponents;
};

// 找到所有兄弟组件
const findSiblingsComponents = (context, targetComponentName, exceptSelf = true) => {
  const parent = context.$parent;
  return parent.$children.filter((component) => component.$options.name === targetComponentName
      && (!exceptSelf || context._uid !== component._uid));
};

// 类型检查的工厂函数
const createTypeOf = (type) => function (val) {
  const valueType = Object.prototype.toString.call(val).slice(8, -1);
  return valueType === type;
};

const isArray = createTypeOf('Array');
const isString = createTypeOf('String');
const isObject = createTypeOf('Object');
const isNull = createTypeOf('Null');
const isUndefined = createTypeOf('Undefined');
const isFunction = createTypeOf('Function');
const isBoolean = createTypeOf('Boolean');
const isNumber = createTypeOf('Number');
const isDate = createTypeOf('Date');

/**
 * 简易深拷贝
 * TODO：暂未处理日期、正则、环
 */
const deepCopy = (val) => {
  if (isArray(val)) {
    const res = [];
    const len = val.length;
    for (let i = 0; i < len; i++) res.push(deepCopy(val[i]));
    return res;
  }
  if (isObject(val)) {
    const res = {};
    for (const prop in val) {
      res[prop] = deepCopy(val[prop]);
    }
    return res;
  }
  return val;
};

// 去除两头空格
const trim = (str) => {
  if (!str) return '';
  if (str.trim) return str.trim();
  return str.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

// 单例模式
const singlePattern = (fn) => {
  let instance;
  return function (...arg) {
    if (instance) return instance;
    return (instance || (instance = fn.apply(this, arg)));
  };
};

// 生成ULID
const createULID = () => ulid();

// 判断两个对象的每个属性值是否相等
const isObjectEqual = (o1, o2) => {
  if (!o1 || !o2) return false;
  if (!isObject(o1) || !isObject(o2)) return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  let isEqual = true;
  for (const prop in o1) {
    if (o1[prop] !== o2[prop]) {
      isEqual = false;
    }
  }
  return isEqual;
};

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findSiblingsComponents,
  isArray,
  isString,
  isObject,
  isNull,
  isUndefined,
  isFunction,
  isBoolean,
  isNumber,
  isDate,
  deepCopy,
  trim,
  singlePattern,
  createULID,
  isObjectEqual,
};
