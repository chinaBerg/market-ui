(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 296);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(11);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(26);
var hide = __webpack_require__(6);
var has = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(14);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(39);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findComponentUpward; });
/* unused harmony export findComponentsUpward */
/* unused harmony export findComponentDownward */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findComponentsDownward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return findSiblingsComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObject; });
/* unused harmony export isNull */
/* unused harmony export isUndefined */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isFunction; });
/* unused harmony export isBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return singlePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createULID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObjectEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ulid__ = __webpack_require__(60);




// 向上查找单个组件
var findComponentUpward = function findComponentUpward(context, targetComponentName) {
  var parent = context.$parent;
  var name = parent.$options.name;
  while (parent && (!name || targetComponentName !== name)) {
    parent = parent.$parent;
    parent && (name = parent.$options.name);
  }
  return parent;
};

// 向上查找所有符合条件的组件
var findComponentsUpward = function findComponentsUpward(context, targetComponentName) {
  var parent = context.$parent;
  var targets = [];
  while (parent) {
    parent.$options.name === targetComponentName && targets.push(parent);
    parent = parent.$parent;
  }
  return targets;
};

// 向下找到符合条件的子组件
var findComponentDownward = function findComponentDownward(context, targetComponentName) {
  var children = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(context.$children));
  var targetComponent = null;
  while (children.length) {
    var current = children.shift();
    if (current.$options.name === targetComponentName) {
      targetComponent = current;
      children = [];
    } else {
      var _children;

      current.$children.length && (_children = children).push.apply(_children, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(current.$children));
    }
  }
  return targetComponent;
};

// 向下找到所有符合条件的子组件
var findComponentsDownward = function findComponentsDownward(context, targetComponentName) {
  var children = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(context.$children));
  var targetComponents = [];
  while (children.length) {
    var current = children.shift();
    current.$options.name === targetComponentName && targetComponents.push(current);
    current.$children.length && children.push.apply(children, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(current.$children));
  }
  return targetComponents;
};

// 找到所有兄弟组件
var findSiblingsComponents = function findSiblingsComponents(context, targetComponentName) {
  var exceptSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var parent = context.$parent;
  return parent.$children.filter(function (component) {
    return component.$options.name === targetComponentName && (!exceptSelf || context._uid !== component._uid);
  });
};

// 类型检查的工厂函数
var createTypeOf = function createTypeOf(type) {
  return function (val) {
    var valueType = Object.prototype.toString.call(val).slice(8, -1);
    return valueType === type;
  };
};

var isArray = createTypeOf('Array');
var isString = createTypeOf('String');
var isObject = createTypeOf('Object');
var isNull = createTypeOf('Null');
var isUndefined = createTypeOf('Undefined');
var isFunction = createTypeOf('Function');
var isBoolean = createTypeOf('Boolean');
var isNumber = createTypeOf('Number');
var isDate = createTypeOf('Date');

/**
 * 简易深拷贝
 * TODO：暂未处理日期、正则、环
 */
var deepCopy = function deepCopy(val) {
  if (isArray(val)) {
    var res = [];
    var len = val.length;
    for (var i = 0; i < len; i++) {
      res.push(deepCopy(val[i]));
    }return res;
  }
  if (isObject(val)) {
    var _res = {};
    for (var prop in val) {
      _res[prop] = deepCopy(val[prop]);
    }
    return _res;
  }
  return val;
};

// 去除两头空格
var trim = function trim(str) {
  if (!str) return '';
  if (str.trim) return str.trim();
  return str.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

// 单例模式
var singlePattern = function singlePattern(fn) {
  var instance = void 0;
  return function () {
    return instance || (instance = fn.apply(this, arguments));
  };
};

// 生成ULID
var createULID = function createULID() {
  return Object(__WEBPACK_IMPORTED_MODULE_2_ulid__["a" /* ulid */])();
};

// 判断两个对象的每个属性值是否相等
var isObjectEqual = function isObjectEqual(o1, o2) {
  if (!o1 || !o2) return false;
  if (!isObject(o1) || !isObject(o2)) return false;
  if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(o1).length !== __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(o2).length) return false;
  var isEqual = true;
  for (var prop in o1) {
    if (o1[prop] !== o2[prop]) {
      isEqual = false;
    }
  }
  return isEqual;
};



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(42);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(40)(false);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(44)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(37);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(45);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(48);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(46);
var enumBugKeys = __webpack_require__(24);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(47).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(41);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(49);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var defined = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(12);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(26);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(12);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var toLength = __webpack_require__(29);
var createProperty = __webpack_require__(52);
var getIterFn = __webpack_require__(53);

$export($export.S + $export.F * !__webpack_require__(55)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(11);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(54);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(1);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(12);
var $keys = __webpack_require__(19);

__webpack_require__(57)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export replaceCharAt */
/* unused harmony export incrementBase32 */
/* unused harmony export randomChar */
/* unused harmony export encodeTime */
/* unused harmony export encodeRandom */
/* unused harmony export decodeTime */
/* unused harmony export detectPrng */
/* unused harmony export factory */
/* unused harmony export monotonicFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ulid; });
function createError(message) {
    var err = new Error(message);
    err.source = "ulid";
    return err;
}
// These values should NEVER change. If
// they do, we're no longer making ulids!
var ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford's Base32
var ENCODING_LEN = ENCODING.length;
var TIME_MAX = Math.pow(2, 48) - 1;
var TIME_LEN = 10;
var RANDOM_LEN = 16;
function replaceCharAt(str, index, char) {
    if (index > str.length - 1) {
        return str;
    }
    return str.substr(0, index) + char + str.substr(index + 1);
}
function incrementBase32(str) {
    var done = undefined;
    var index = str.length;
    var char = void 0;
    var charIndex = void 0;
    var maxCharIndex = ENCODING_LEN - 1;
    while (!done && index-- >= 0) {
        char = str[index];
        charIndex = ENCODING.indexOf(char);
        if (charIndex === -1) {
            throw createError("incorrectly encoded string");
        }
        if (charIndex === maxCharIndex) {
            str = replaceCharAt(str, index, ENCODING[0]);
            continue;
        }
        done = replaceCharAt(str, index, ENCODING[charIndex + 1]);
    }
    if (typeof done === "string") {
        return done;
    }
    throw createError("cannot increment this string");
}
function randomChar(prng) {
    var rand = Math.floor(prng() * ENCODING_LEN);
    if (rand === ENCODING_LEN) {
        rand = ENCODING_LEN - 1;
    }
    return ENCODING.charAt(rand);
}
function encodeTime(now, len) {
    if (isNaN(now)) {
        throw new Error(now + " must be a number");
    }
    if (now > TIME_MAX) {
        throw createError("cannot encode time greater than " + TIME_MAX);
    }
    if (now < 0) {
        throw createError("time must be positive");
    }
    if (Number.isInteger(now) === false) {
        throw createError("time must be an integer");
    }
    var mod = void 0;
    var str = "";
    for (; len > 0; len--) {
        mod = now % ENCODING_LEN;
        str = ENCODING.charAt(mod) + str;
        now = (now - mod) / ENCODING_LEN;
    }
    return str;
}
function encodeRandom(len, prng) {
    var str = "";
    for (; len > 0; len--) {
        str = randomChar(prng) + str;
    }
    return str;
}
function decodeTime(id) {
    if (id.length !== TIME_LEN + RANDOM_LEN) {
        throw createError("malformed ulid");
    }
    var time = id.substr(0, TIME_LEN).split("").reverse().reduce(function (carry, char, index) {
        var encodingIndex = ENCODING.indexOf(char);
        if (encodingIndex === -1) {
            throw createError("invalid character found: " + char);
        }
        return carry += encodingIndex * Math.pow(ENCODING_LEN, index);
    }, 0);
    if (time > TIME_MAX) {
        throw createError("malformed ulid, timestamp too large");
    }
    return time;
}
function detectPrng() {
    var allowInsecure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var root = arguments[1];

    if (!root) {
        root = typeof window !== "undefined" ? window : null;
    }
    var browserCrypto = root && (root.crypto || root.msCrypto);
    if (browserCrypto) {
        return function () {
            var buffer = new Uint8Array(1);
            browserCrypto.getRandomValues(buffer);
            return buffer[0] / 0xff;
        };
    } else {
        try {
            var nodeCrypto = __webpack_require__(61);
            return function () {
                return nodeCrypto.randomBytes(1).readUInt8() / 0xff;
            };
        } catch (e) {}
    }
    if (allowInsecure) {
        try {
            console.error("secure crypto unusable, falling back to insecure Math.random()!");
        } catch (e) {}
        return function () {
            return Math.random();
        };
    }
    throw createError("secure crypto unusable, insecure Math.random not allowed");
}
function factory(currPrng) {
    if (!currPrng) {
        currPrng = detectPrng();
    }
    return function ulid(seedTime) {
        if (isNaN(seedTime)) {
            seedTime = Date.now();
        }
        return encodeTime(seedTime, TIME_LEN) + encodeRandom(RANDOM_LEN, currPrng);
    };
}
function monotonicFactory(currPrng) {
    if (!currPrng) {
        currPrng = detectPrng();
    }
    var lastTime = 0;
    var lastRandom = void 0;
    return function ulid(seedTime) {
        if (isNaN(seedTime)) {
            seedTime = Date.now();
        }
        if (seedTime <= lastTime) {
            var incrementedRandom = lastRandom = incrementBase32(lastRandom);
            return encodeTime(lastTime, TIME_LEN) + incrementedRandom;
        }
        lastTime = seedTime;
        var newRandom = lastRandom = encodeRandom(RANDOM_LEN, currPrng);
        return encodeTime(seedTime, TIME_LEN) + newRandom;
    };
}
var ulid = factory();




/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(71);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fillZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return withinNum; });
/* unused harmony export floor */
/* unused harmony export pickNumberInString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareArrJoined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fullArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assist__ = __webpack_require__(28);



// 浅合并参数
var merge = function merge(target) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (arg) {
    for (var prop in arg) {
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
var formatSize = function formatSize(val) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__assist__["i" /* isNumber */])(val) ? val + 'px' : val;
};

// TODO：简单使用，需要优化
var isEqual = function isEqual(a, b) {
  if ((typeof a === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(a)) !== (typeof b === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(b))) return false;
  return a === b;
};

// 数字小于10时自动前面补0
var fillZero = function fillZero(num) {
  if (!num && num !== 0) return '';
  if (num < 10) return '0' + num;
  return num;
};

// 大于max时取max，小于min时取min，否则取自身
var withinNum = function withinNum(origin, min, max) {
  return Math.min(Math.max(origin, min), max);
};

// 向下取整
var floor = function floor(num) {
  return Math.floor(num);
};

/**
 * @method pickNumberInString
 * @description 提取字符串中的数字
 * @param { String } str 待提取的字符串
 * @returns 提取后的数组
 */
var pickNumberInString = function pickNumberInString(str) {
  var timeString = str.replace(/[^\d]+/g, function (v) {
    return ',';
  });
  return timeString.split(',').filter(function (e) {
    return e !== '';
  })
  // 去掉开头的0, 且值控制在合法区域内
  .map(function (e, i) {
    return parseInt(e);
  });
  // .map((e, i) => withinNum(parseInt(e), 0, i === 0 ? 23 : 59))
};

/**
 * @method compareArrJoined
 * @description 将2个数组分别join后，对比数值大小，eg：[1, 2, 3] => 123，[4,5,6] => 456, 123 < 456
 * @returns arr1 > arr2的结果
 */
var compareArrJoined = function compareArrJoined(arr1, arr2) {
  var reg = /[^\d]+/g;
  var remove = function remove(str) {
    return str.replace(reg, function (e) {
      return '';
    });
  };
  var startNum = parseInt(remove(arr1.join(''))) || 0;
  var endNum = parseInt(remove(arr2.join(''))) || 0;
  return startNum > endNum;
};

var fullArray = function fullArray(arr, len, val) {
  var res = [];
  for (var i = 0; i < len; i++) {
    res[i] = arr[i] !== undefined ? arr[i] : val;
  }return res;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(5);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(87);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(93);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(89);
module.exports = __webpack_require__(71).f('iterator');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(91);
var step = __webpack_require__(92);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(37);
var META = __webpack_require__(83).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(23);
var setToStringTag = __webpack_require__(25);
var uid = __webpack_require__(21);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(71);
var wksDefine = __webpack_require__(72);
var enumKeys = __webpack_require__(96);
var isArray = __webpack_require__(97);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(10);
var toObject = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(11);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(98);
var $GOPD = __webpack_require__(99);
var $GOPS = __webpack_require__(63);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(19);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(62).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(63);
var pIE = __webpack_require__(62);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(78).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(62);
var createDesc = __webpack_require__(11);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {



/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('asyncIterator');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('observable');


/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* KUTE.js - The Light Tweening Engine
 * by dnp_theme
 * Licensed under MIT-License
 */
(function (root,factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD. Register as an anonymous module.
  } else if (typeof exports == 'object') {
    module.exports = factory(); // Node, not strict CommonJS
  } else {
    root.KUTE = factory();
  }
}(this, function () {
  "use strict";

  // set a custom scope for KUTE.js
  var g = typeof global !== 'undefined' ? global : window, time = g.performance,
    body = document.body, tweens = [], tick = null, // tick must be null!!

    // strings
    length = 'length',
    split = 'split',
    indexOf = 'indexOf',
    replace = 'replace',

    offsetWidth = 'offsetWidth',
    offsetHeight = 'offsetHeight',

    options = 'options',
    valuesStart = 'valuesStart',
    valuesEnd = 'valuesEnd',
    valuesRepeat = 'valuesRepeat',

    element = 'element',
    playing = 'playing',

    duration = 'duration',
    delay = 'delay',
    offset = 'offset',
    repeat = 'repeat',
    repeatDelay = 'repeatDelay',
    yoyo = 'yoyo',
    easing = 'easing',
    chain = 'chain',
    keepHex = 'keepHex',

    style = 'style',
    dataTweening = 'data-tweening',
    getElementsByTagName = 'getElementsByTagName',
    addEventListener = 'addEventListener',
    removeEventListener = 'removeEventListener';


  //supported properties
  var colorProps = ['color', 'backgroundColor'], // 'hex', 'rgb', 'rgba' '#fff' 'rgb(0,0,0)' / 'rgba(0,0,0,0)' 'red' (IE9+)
    boxModelProps  = ['top', 'left', 'width', 'height'], 
    transformFunctions  = ['translate3d', 'translateX', 'translateY', 'translateZ', 'rotate', 'translate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'scale'],
    scrollProp  = ['scroll'], // has no default value, it's calculated on tween start
    opacityProp  = ['opacity'], // opacity
    coreProps = colorProps.concat( opacityProp, boxModelProps, transformFunctions),
    defaultPropsValues = {}; 

  //populate default values object
  for ( var propertyIndex=0, allCorePropLength = coreProps[length], coreProp; propertyIndex < allCorePropLength; propertyIndex++ ){
    coreProp = coreProps[propertyIndex];
    if (colorProps[indexOf](coreProp) !== -1){
      defaultPropsValues[coreProp] = 'rgba(0,0,0,0)'; // defaultPropsValues[coreProp] = {r:0,g:0,b:0,a:1};
    } else if ( boxModelProps[indexOf](coreProp) !== -1 ) {
      defaultPropsValues[coreProp] = 0;
    } else if ( coreProp === 'translate3d' ){ // px
      defaultPropsValues[coreProp] = [0,0,0];
    } else if ( coreProp === 'translate' ){ // px
      defaultPropsValues[coreProp] = [0,0];
    } else if ( coreProp === 'rotate' || /X|Y|Z/.test(coreProp) ){ // deg
      defaultPropsValues[coreProp] = 0;
    } else if ( coreProp === 'scale' || coreProp === 'opacity' ){ // unitless
      defaultPropsValues[coreProp] = 1;
    }
  }

  // default tween options, since 1.6.1
  var defaultOptions = {
      duration: 700,
      delay: 0,
      offset: 0,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      easing: 'linear',
      keepHex: false,
    },
    // tools / utils
    getPrefix = function() { //returns browser prefix
      var prefixes = ['Moz', 'moz', 'Webkit', 'webkit', 'O', 'o', 'Ms', 'ms'], thePrefix;
      for (var pIndex = 0, pfl = prefixes[length]; pIndex < pfl; pIndex++) { 
        if (prefixes[pIndex]+'Transform' in body[style]) { thePrefix = prefixes[pIndex]; break; }  
      }
      return thePrefix;
    },
    property = function(propertyToPrefix){ // returns prefixed property | property
      var prefixRequired = (!(propertyToPrefix in body[style])) ? true : false, prefix = getPrefix(); // is prefix required for property | prefix
      return prefixRequired ? prefix + (propertyToPrefix.charAt(0).toUpperCase() + propertyToPrefix.slice(1)) : propertyToPrefix;
    },
    selector = function(el,multi){ // a public selector utility
      var requestedElem;
      if (multi){
        requestedElem = el instanceof Object || typeof el === 'object' ? el : document.querySelectorAll(el);
      } else {
        requestedElem = typeof el === 'object' ? el : document.querySelector(el);
      }
      if (requestedElem === null && el !== 'window') throw new TypeError('Element not found or incorrect selector: '+el);
      return requestedElem;
    },
    radToDeg = function(a) { return a*180/Math.PI; },
    trueDimension = function (dimValue,isAngle) { //true dimension returns { v = value, u = unit }
      var intValue = parseInt(dimValue) || 0, mUnits = ['px','%','deg','rad','em','rem','vh','vw'], theUnit;
      for (var mIndex=0; mIndex<mUnits[length]; mIndex++) { 
        if ( typeof dimValue === 'string' && dimValue[indexOf](mUnits[mIndex]) !== -1 ) { 
          theUnit = mUnits[mIndex]; break; 
        } 
      }
      theUnit = theUnit !== undefined ? theUnit : (isAngle ? 'deg' : 'px');
      return { v: intValue, u: theUnit };
    },
    trueColor = function (colorString) { // replace transparent and transform any color to rgba()/rgb()
      if (/rgb|rgba/.test(colorString)) { // first check if it's a rgb string
        var vrgb = colorString[replace](/\s|\)/,'')[split]('(')[1][split](','), colorAlpha = vrgb[3] ? vrgb[3] : null;
        if (!colorAlpha) {
          return { r: parseInt(vrgb[0]), g: parseInt(vrgb[1]), b: parseInt(vrgb[2]) };
        } else {
          return { r: parseInt(vrgb[0]), g: parseInt(vrgb[1]), b: parseInt(vrgb[2]), a: parseFloat(colorAlpha) };
        }
      } else if (/^#/.test(colorString)) {
        var fromHex = hexToRGB(colorString); return { r: fromHex.r, g: fromHex.g, b: fromHex.b };
      } else if (/transparent|none|initial|inherit/.test(colorString)) {
        return { r: 0, g: 0, b: 0, a: 0 };
      } else if (!/^#|^rgb/.test(colorString) ) { // maybe we can check for web safe colors
        var siteHead = document[getElementsByTagName]('head')[0]; siteHead[style].color = colorString;
        var webColor = g.getComputedStyle(siteHead,null).color; webColor = /rgb/.test(webColor) ? webColor[replace](/[^\d,]/g, '')[split](',') : [0,0,0];
        siteHead[style].color = ''; return { r: parseInt(webColor[0]), g: parseInt(webColor[1]), b: parseInt(webColor[2]) };
      }
    },
    rgbToHex = function (r, g, b) { // transform rgb to hex or vice-versa | webkit browsers ignore HEX, always use RGB/RGBA
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    hexToRGB = function (hex) {
      var hexShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      hex = hex[replace](hexShorthand, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    getInlineStyle = function(el) { // get transform style for element from cssText for .to() method
      if (!el) return; // if the scroll applies to `window` it returns as it has no styling
      var css = el[style].cssText[replace](/\s/g,'')[split](';'), transformObject = {}; // the cssText | the resulting transform object

      // if we have any inline style in the cssText attribute, usually it has higher priority
      for ( var i=0, csl = css[length]; i<csl; i++ ){
        if ( /transform/i.test(css[i])) {
          var tps = css[i][split](':')[1][split](')'); //all transform properties
          for ( var k=0, tpl = tps[length]-1; k< tpl; k++){
            var tpv = tps[k][split]('('), tp = tpv[0], tv = tpv[1]; // each transform property, the sp is for transform property
            if ( transformFunctions[indexOf](tp) !== -1 ){
              transformObject[tp] = /translate3d/.test(tp) ? tv[split](',') : tv;
            }
          }
        }
      }
      return transformObject;
    },
    getCurrentStyle = function (elem,propertyName) { // get computed style property for element for .to() method
      var styleAttribute = elem[style], computedStyle = g.getComputedStyle(elem,null) || elem.currentStyle, 
        prefixedProp = property(propertyName), //the computed style | prefixed property
        styleValue = styleAttribute[propertyName] && !/auto|initial|none|unset/.test(styleAttribute[propertyName]) ? styleAttribute[propertyName] : computedStyle[prefixedProp];
      if ( propertyName !== 'transform' && (prefixedProp in computedStyle || prefixedProp in styleAttribute) ) {
        if ( styleValue ){
          if (prefixedProp === 'filter') { // handle IE8 opacity
            var filterValue = parseInt(styleValue[split]('=')[1][replace](')',''));
            return parseFloat(filterValue/100);
          } else {
            return styleValue;
          }
        } else {
          return defaultPropsValues[propertyName];
        }
      }
    },

    //more internals
    getAll = function () { return tweens; },
    removeAll = function () { tweens = []; },
    add = function (tw) { tweens.push(tw); },
    remove = function (tw) { var i = tweens[indexOf](tw); if (i !== -1) { tweens.splice(i, 1); }},
    stop = function () { 
      setTimeout(function(){ // re-added for #81
        if (!tweens[length] && tick) { _cancelAnimationFrame(tick); tick = null; } 
      },64)
    },

    canTouch = ('ontouchstart' in g || navigator && navigator.msMaxTouchPoints) || false, // support Touch?
    touchOrWheel = canTouch ? 'touchstart' : 'mousewheel', mouseEnter = 'mouseenter', //events to prevent on scroll
    _requestAnimationFrame = g.requestAnimationFrame || g.webkitRequestAnimationFrame || function (c) { return setTimeout(c, 16) },
    _cancelAnimationFrame = g.cancelAnimationFrame || g.webkitCancelRequestAnimationFrame || function (c) { return clearTimeout(c) },
    transformProperty = property('transform'),

    // true scroll container
    html = document[getElementsByTagName]('HTML')[0],
    scrollContainer = navigator && /(EDGE|Mac)/i.test(navigator.userAgent) ? body : html,
    // scrollContainer = navigator && /webkit/i.test(navigator.userAgent) || document.compatMode == 'BackCompat' ? body : html,
    // scrollContainer = document.compatMode == 'BackCompat' ? body : html, // webkit browsers are now srolling the HTML

    // browser detection
    isIE = navigator && (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null) ? parseFloat( RegExp.$1 ) : false,
    isIE8 = isIE === 8, // check IE8/IE


    // KUTE.js INTERPOLATORS
    interpolate = g.Interpolate = {},
    number = interpolate.number = function(a,b,v) { // number1, number2, progress
      a = +a; b -= a; return a + b * v;
    },
    unit = interpolate.unit = function(a,b,u,v) { // number1, number2, unit, progress
      a = +a; b -= a; return ( a + b * v ) + u;
    },
    color = interpolate.color = function(a,b,v,toHex){ // rgba1, rgba2, progress, convertToHex(true/false)
      var _c = {}, c, ep = ')', cm =',', rgb = 'rgb(', rgba = 'rgba(';
      for (c in b) { _c[c] = c !== 'a' ? (number(a[c],b[c],v)>>0 || 0) : (a[c] && b[c]) ? (number(a[c],b[c],v) * 100 >> 0 )/100 : null; }
      return toHex ? rgbToHex( _c.r, _c.g, _c.b ) : !_c.a ? rgb + _c.r + cm + _c.g + cm + _c.b + ep : rgba + _c.r + cm + _c.g + cm + _c.b + cm + _c.a + ep;
    },
    translate = interpolate.translate = function (a,b,u,v){
      var translation = {};
      for (var ax in b){
        translation[ax] = ( a[ax]===b[ax] ? b[ax] : ( (a[ax] + ( b[ax] - a[ax] ) * v ) * 1000 >> 0 ) / 1000 ) + u;
      }
      return translation.x||translation.y ? 'translate(' + translation.x + ',' + translation.y + ')' :
        'translate3d(' + translation.translateX + ',' + translation.translateY + ',' + translation.translateZ + ')';
    },
    rotate = interpolate.rotate = function (a,b,u,v){
      var rotation = {};
      for ( var rx in b ){
        rotation[rx] = rx === 'z' ? ('rotate('+ (((a[rx] + (b[rx] - a[rx]) * v) * 1000 >> 0 ) / 1000) + u + ')')
                                  : (rx + '(' + (((a[rx] + (b[rx] - a[rx]) * v) * 1000 >> 0 ) / 1000) + u + ')');
      }
      return rotation.z ? rotation.z : (rotation.rotateX||'') + (rotation.rotateY||'') + (rotation.rotateZ||'');
    },
    skew = interpolate.skew = function (a,b,u,v){
      var skewProp = {};
      for ( var sx in b ){
        skewProp[sx] = sx + '(' + (((a[sx] + (b[sx] - a[sx]) * v) * 1000 >> 0) / 1000) + u + ')';
      }
      return (skewProp.skewX||'') + (skewProp.skewY||'');
    },
    scale = interpolate.scale = function(a,b,v){
      return 'scale(' + (((a + (b - a) * v) * 1000 >> 0 ) / 1000) + ')';
    },

    // KUTE.js DOM update functions
    DOM = {},
    ticker = function(t) {
      var i = 0;
      while ( i < tweens[length] ) {
        if ( update.call(tweens[i],t) ) {
          i++;
        } else {
          tweens.splice(i, 1);
        }
      }
      tick = _requestAnimationFrame(ticker);
    },
    update = function(t) {
      t = t || time.now();
      if ( t < this._startTime && this[playing] ) { return true; }

      var elapsed = Math.min(( t - this._startTime ) / this[options][duration], 1), progress = this[options][easing](elapsed); // calculate progress

      for (var tweenProp in this[valuesEnd]){ // render the DOM update
        DOM[tweenProp](this[element],tweenProp,this[valuesStart][tweenProp],this[valuesEnd][tweenProp],progress,this[options]); 
      }

      if (this[options].update) { this[options].update.call(this); } // fire the updateCallback

      if (elapsed === 1) {
        if (this[options][repeat] > 0) {
          if ( isFinite(this[options][repeat] ) ) { this[options][repeat]--; }

          if (this[options][yoyo]) { // handle yoyo
            this.reversed = !this.reversed;
            reverse.call(this);
          }

          this._startTime = (this[options][yoyo] && !this.reversed) ? t + this[options][repeatDelay] : t; //set the right time for delay
          return true;
        } else {

          if (this[options].complete) { this[options].complete.call(this); } // fire the complete callback

          scrollOut.call(this); // unbind preventing scroll when scroll tween finished

          for (var i = 0, ctl = this[options][chain][length]; i < ctl; i++) { // start animating chained tweens
            this[options][chain][i].start();
          }

          //stop ticking when finished
          close.call(this);
        }
        return false;
      }
      return true;
    },

    // applies the transform origin and perspective
    perspective = function () {
      var el = this[element], ops = this[options];
      if ( ops.perspective !== undefined && transformProperty in this[valuesEnd] ) { // element perspective
        this[valuesStart][transformProperty]['perspective'] = this[valuesEnd][transformProperty]['perspective']; 
      }
      // element transform origin / we filter it out for svgTransform to fix the Firefox transformOrigin bug https://bugzilla.mozilla.org/show_bug.cgi?id=923193
      if ( ops.transformOrigin !== undefined && (!('svgTransform' in this[valuesEnd])) ) { el[style][property('transformOrigin')] = ops.transformOrigin; } // set transformOrigin for CSS3 transforms only
      if ( ops.perspectiveOrigin !== undefined ) { el[style][property('perspectiveOrigin')] = ops.perspectiveOrigin; } // element perspective origin
      if ( ops.parentPerspective !== undefined ) { el.parentNode[style][property('perspective')] = ops.parentPerspective + 'px'; } // parent perspective
      if ( ops.parentPerspectiveOrigin !== undefined ) { el.parentNode[style][property('perspectiveOrigin')] = ops.parentPerspectiveOrigin; } // parent perspective origin
    },

    // plugin connector objects
    prepareStart = {}, // check current property value when .to() method is used
    crossCheck = {}, // checks for differences between start and end value, try to make sure start unit and end unit are same as well as consistent, stack transforms, process SVG paths

    // parse properties object
    // string parsing and property specific value processing
    parseProperty = { // we already start working on core supported properties
      boxModel : function(tweenProp,inputValue){
        if (!(tweenProp in DOM)){
          DOM[tweenProp] = function(elem,tweenProp,a,b,v){
            elem[style][tweenProp] = ( v > 0.99 || v < 0.01 ? ((number(a,b,v)*10)>>0)/10 : (number(a,b,v) ) >> 0 ) + 'px';
          }
        }
        var boxValue = trueDimension(inputValue), offsetProp = tweenProp === 'height' ? offsetHeight : offsetWidth;
        return boxValue.u === '%' ? boxValue.v * this[element][offsetProp] / 100 : boxValue.v;
      },
      transform : function(tweenProp,inputValue) {
        if (!(transformProperty in DOM)) {
          DOM[transformProperty] = function(elem,tweenProp,a,b,v,o){
            elem[style][tweenProp] = (a.perspective||'')
              + ('translate' in a ? translate(a.translate,b.translate,'px',v):'')
              + ('rotate' in a ? rotate(a.rotate,b.rotate,'deg',v):'')
              + ('skew' in a ? skew(a.skew,b.skew,'deg',v):'')
              + ('scale' in a ? scale(a.scale,b.scale,v):'');
          }
        }

        // process each transform property
        if (/translate/.test(tweenProp)) {
          if (tweenProp === 'translate3d') {
            var t3d = inputValue[split](','), t3d0 = trueDimension(t3d[0]), t3d1 = trueDimension(t3d[1], t3d2 = trueDimension(t3d[2]));
            return {
              translateX : t3d0.u === '%' ? (t3d0.v * this[element][offsetWidth] / 100) : t3d0.v,
              translateY : t3d1.u === '%' ? (t3d1.v * this[element][offsetHeight] / 100) : t3d1.v,
              translateZ : t3d2.u === '%' ? (t3d2.v * (this[element][offsetHeight] + this[element][offsetWidth]) / 200) : t3d2.v // to be changed with something like element and/or parent perspective
            };
          } else if (/^translate(?:[XYZ])$/.test(tweenProp)) {
            var t1d = trueDimension(inputValue), percentOffset = /X/.test(tweenProp) ? this[element][offsetWidth] / 100 : /Y/.test(tweenProp) ? this[element][offsetHeight] / 100 : (this[element][offsetWidth]+this[element][offsetHeight]) / 200;

            return t1d.u === '%' ? (t1d.v * percentOffset) : t1d.v;
          } else if (tweenProp === 'translate') {
            var tv = typeof inputValue === 'string' ? inputValue[split](',') : inputValue, t2d = {}, t2dv,
              t2d0 = trueDimension(tv[0]), t2d1 = tv[length] ? trueDimension(tv[1]) : {v: 0, u: 'px'};
            if (tv instanceof Array) {
              t2d.x = t2d0.u === '%' ? (t2d0.v * this[element][offsetWidth] / 100) : t2d0.v,
              t2d.y = t2d1.u === '%' ? (t2d1.v * this[element][offsetHeight] / 100) : t2d1.v
            } else {
              t2dv = trueDimension(tv);
              t2d.x = t2dv.u === '%' ? (t2dv.v * this[element][offsetWidth] / 100) : t2dv.v,
              t2d.y = 0
            }

            return t2d;
          }
        } else if (/rotate|skew/.test(tweenProp)) {
          if (/^rotate(?:[XYZ])$|skew(?:[XY])$/.test(tweenProp)) {
            var r3d = trueDimension(inputValue,true);
            return r3d.u === 'rad' ? radToDeg(r3d.v) : r3d.v;
          } else if (tweenProp === 'rotate') {
            var r2d = {}, r2dv = trueDimension(inputValue,true);
            r2d.z = r2dv.u === 'rad' ? radToDeg(r2dv.v) : r2dv.v;
            return r2d;
          }
        } else if (tweenProp === 'scale') {
          return parseFloat(inputValue); // this must be parseFloat(v)
        }
      },
      unitless : function(tweenProp,inputValue){  // scroll | opacity
        if (/scroll/.test(tweenProp) && !(tweenProp in DOM) ){
          DOM[tweenProp] = function(elem,tweenProp,a,b,v) {
            elem.scrollTop = (number(a,b,v))>>0;
          };
        } else if (tweenProp === 'opacity') {
          if (!(tweenProp in DOM)) {
            if (isIE8) {
              DOM[tweenProp] = function(elem,tweenProp,a,b,v) {
                var st = "alpha(opacity=", ep = ')';
                elem[style].filter = st + ((number(a,b,v) * 100)>>0) + ep;
              };
            } else {
              DOM[tweenProp] = function(elem,tweenProp,a,b,v) {
                elem[style].opacity = ((number(a,b,v) * 100)>>0)/100;
              };
            }
          }
        }
        return parseFloat(inputValue);
      },
      colors : function(tweenProp,inputValue){ // colors
        if (!(tweenProp in DOM)) {
          DOM[tweenProp] = function(elem,tweenProp,a,b,v,o) {
            elem[style][tweenProp] = color(a,b,v,o[keepHex]);
          };
        }
        return trueColor(inputValue);
      }
    },

    // process properties for endValues and startValues or one of them
    preparePropertiesObject = function(obj, fn) { // this, props object, type: start/end
      var propertiesObject = fn === 'start' ? this[valuesStart] : this[valuesEnd],
        skewObject = {}, rotateObject = {}, translateObject = {}, transformObject = {};

      for (var x in obj) {
        if (transformFunctions[indexOf](x) !== -1) { // transform object gets built here
          var prepAxis = ['X', 'Y', 'Z']; //coordinates //   translate[x] = pp(x, obj[x]);
          if ( /^translate(?:[XYZ]|3d)$/.test(x) ) { //process translate3d

            for (var fnIndex = 0; fnIndex < 3; fnIndex++) {
              var translateAxis = prepAxis[fnIndex];
              if ( /3d/.test(x) ) {
                translateObject['translate' + translateAxis] = parseProperty.transform.call(this,'translate' + translateAxis, obj[x][fnIndex]);
              } else {
                translateObject['translate' + translateAxis] = ('translate' + translateAxis in obj) ? parseProperty.transform.call(this,'translate' + translateAxis, obj['translate' + translateAxis]) : 0;
              }
            }
            transformObject['translate'] = translateObject;
          } else if ( /^rotate(?:[XYZ])$|^skew(?:[XY])$/.test(x) ) { //process rotation/skew
            var objectName = /rotate/.test(x) ? 'rotate' : 'skew',
              rotationOrSkew = objectName === 'rotate' ? rotateObject : skewObject;
            for (var rIndex = 0; rIndex < 3; rIndex++) {
              var oneAxis = prepAxis[rIndex];
              if ( obj[objectName+oneAxis] !== undefined && x !== 'skewZ' ) {
                rotationOrSkew[objectName+oneAxis] = parseProperty.transform.call(this,objectName+oneAxis, obj[objectName+oneAxis]);
              }
            }
            transformObject[objectName] = rotationOrSkew;
          } else if ( /(rotate|translate|scale)$/.test(x) ) { //process 2d translation / rotation
            transformObject[x] = parseProperty.transform.call(this, x, obj[x]);
          }
          propertiesObject[transformProperty] = transformObject;
        } else {
          if ( boxModelProps[indexOf](x) !== -1 ) {
            propertiesObject[x] = parseProperty.boxModel.call(this,x,obj[x]);
          } else if (opacityProp[indexOf](x) !== -1 || x === 'scroll') {
            propertiesObject[x] = parseProperty.unitless.call(this,x,obj[x]);
          } else if (colorProps[indexOf](x) !== -1) {
            propertiesObject[x] = parseProperty.colors.call(this,x,obj[x]);
          } else if (x in parseProperty) {  // or any other property from css/ attr / svg / third party plugins
            propertiesObject[x] = parseProperty[x].call(this,x,obj[x]);
          }
        }
      }
    },
    reverse = function () {
      if (this[options][yoyo]) {
        for (var reverseProp in this[valuesEnd]) {
          var tmp = this[valuesRepeat][reverseProp];
          this[valuesRepeat][reverseProp] = this[valuesEnd][reverseProp];
          this[valuesEnd][reverseProp] = tmp;
          this[valuesStart][reverseProp] = this[valuesRepeat][reverseProp];
        }
      }
    },
    close = function () { //  when animation is finished reset repeat, yoyo&reversed tweens
      if (this[repeat] > 0) { this[options][repeat] = this[repeat]; }
      if (this[options][yoyo] && this.reversed===true) { reverse.call(this); this.reversed = false; }
      this[playing] = false;

      stop();  // when all animations are finished, stop ticking after ~3 frames
    },
    preventScroll = function (eventObj) { // prevent mousewheel or touch events while tweening scroll
      var data = body.getAttribute(dataTweening);
      if (data && data === 'scroll') { eventObj.preventDefault(); }
    },
    scrollOut = function(){ //prevent scroll when tweening scroll
      if ( 'scroll' in this[valuesEnd] && body.getAttribute(dataTweening)) {
        body.removeAttribute(dataTweening);
      }
    },
    scrollIn = function(){
      if ( 'scroll' in this[valuesEnd] && !body.getAttribute(dataTweening)) {
        body.setAttribute(dataTweening, 'scroll');
      }
    },
    processEasing = function (fn) {
      if ( typeof fn === 'function') {
        return fn;
      } else if ( typeof fn === 'string' ) {
        return easingFn[fn]; // regular Robert Penner Easing Functions
      }
    },
    getStartValues = function () { // stack transform props for .to() chains
      var startValues = {}, currentStyle = getInlineStyle(this[element]),
        degreeProps = ['rotate','skew'], startAxis = ['X','Y','Z'];

      for (var tweenProperty in this[valuesStart]){
        if ( transformFunctions[indexOf](tweenProperty) !== -1 ) {
          var r2d = (/(rotate|translate|scale)$/.test(tweenProperty));
          if ( /translate/.test(tweenProperty) && tweenProperty !== 'translate' ) {
            startValues['translate3d'] = currentStyle['translate3d'] || defaultPropsValues[tweenProperty];
          } else if ( r2d ) { // 2d transforms
            startValues[tweenProperty] = currentStyle[tweenProperty] || defaultPropsValues[tweenProperty];
          } else if ( !r2d && /rotate|skew/.test(tweenProperty) ) { // all angles
            for (var degIndex=0; degIndex<2; degIndex++) {
              for (var axisIndex = 0; axisIndex<3; axisIndex++) {
                var s = degreeProps[degIndex]+startAxis[axisIndex];
                if (transformFunctions[indexOf](s) !== -1 && (s in this[valuesStart]) ) { startValues[s] = currentStyle[s] || defaultPropsValues[s]; }
              }
            }
          }
        } else {
          if ( tweenProperty !== 'scroll' ) {
            if (tweenProperty === 'opacity' && isIE8 ) { // handle IE8 opacity
              var currentOpacity = getCurrentStyle(this[element],'filter');
              startValues['opacity'] = typeof currentOpacity === 'number' ? currentOpacity : defaultPropsValues['opacity'];
            } else {
              if ( coreProps[indexOf](tweenProperty) !== -1 ) {
                startValues[tweenProperty] = getCurrentStyle(this[element],tweenProperty) || d[tweenProperty];
              } else { // plugins register here
                startValues[tweenProperty] = tweenProperty in prepareStart ? prepareStart[tweenProperty].call(this,tweenProperty,this[valuesStart][tweenProperty]) : 0;
              }
            }
          } else {
            startValues[tweenProperty] = this[element] === scrollContainer ? (g.pageYOffset || scrollContainer.scrollTop) : this[element].scrollTop;
          }
        }
      }
      for ( var currentProperty in currentStyle ){ // also add to startValues values from previous tweens
        if ( transformFunctions[indexOf](currentProperty) !== -1 && (!( currentProperty in this[valuesStart] )) ) {
          startValues[currentProperty] = currentStyle[currentProperty] || defaultPropsValues[currentProperty];
        }
      }

      this[valuesStart] = {};
      preparePropertiesObject.call(this,startValues,'start');

      if ( transformProperty in this[valuesEnd] ) { // let's stack transform
        for ( var sp in this[valuesStart][transformProperty]) { // sp is the object corresponding to the transform function objects translate / rotate / skew / scale
          if ( sp !== 'perspective') {
            if ( typeof this[valuesStart][transformProperty][sp] === 'object' ) {
              for ( var spp in this[valuesStart][transformProperty][sp] ) { // 3rd level
                if ( typeof this[valuesEnd][transformProperty][sp] === 'undefined' ) { this[valuesEnd][transformProperty][sp] = {}; }
                if ( typeof this[valuesStart][transformProperty][sp][spp] === 'number' && typeof this[valuesEnd][transformProperty][sp][spp] === 'undefined' ) {
                  this[valuesEnd][transformProperty][sp][spp] = this[valuesStart][transformProperty][sp][spp];
                }
              }
            } else if ( typeof this[valuesStart][transformProperty][sp] === 'number' ) {
              if ( typeof this[valuesEnd][transformProperty][sp] === 'undefined' ) { // scale
                this[valuesEnd][transformProperty][sp] = this[valuesStart][transformProperty][sp];
              }
            }
          }
        }
      }
    };

  // core easing functions
  var easingFn = g.Easing = {};
  easingFn.linear = function (t) { return t; };
  easingFn.easingSinusoidalIn = function(t) { return -Math.cos(t * Math.PI / 2) + 1; };
  easingFn.easingSinusoidalOut = function(t) { return Math.sin(t * Math.PI / 2); };
  easingFn.easingSinusoidalInOut = function(t) { return -0.5 * (Math.cos(Math.PI * t) - 1); };
  easingFn.easingQuadraticIn = function (t) { return t*t; };
  easingFn.easingQuadraticOut = function (t) { return t*(2-t); };
  easingFn.easingQuadraticInOut = function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t; };
  easingFn.easingCubicIn = function (t) { return t*t*t; };
  easingFn.easingCubicOut = function (t) { return (--t)*t*t+1; };
  easingFn.easingCubicInOut = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; };
  easingFn.easingQuarticIn = function (t) { return t*t*t*t; };
  easingFn.easingQuarticOut = function (t) { return 1-(--t)*t*t*t; };
  easingFn.easingQuarticInOut = function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; };
  easingFn.easingQuinticIn = function (t) { return t*t*t*t*t; };
  easingFn.easingQuinticOut = function (t) { return 1+(--t)*t*t*t*t; };
  easingFn.easingQuinticInOut = function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; };
  easingFn.easingCircularIn = function(t) { return -(Math.sqrt(1 - (t * t)) - 1); };
  easingFn.easingCircularOut = function(t) { return Math.sqrt(1 - (t = t - 1) * t); };
  easingFn.easingCircularInOut = function(t) {  return ((t*=2) < 1) ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1); };
  easingFn.easingExponentialIn = function(t) { return Math.pow(2, 10 * (t - 1)) - 0.001; };
  easingFn.easingExponentialOut = function(t) { return 1 - Math.pow(2, -10 * t); };
  easingFn.easingExponentialInOut = function(t) { return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))); };
  easingFn.easingBackIn = function(t) { var s = 1.70158; return t * t * ((s + 1) * t - s); };
  easingFn.easingBackOut = function(t) { var s = 1.70158; return --t * t * ((s + 1) * t + s) + 1; };
  easingFn.easingBackInOut = function(t) { var s = 1.70158 * 1.525;  if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2); };
  easingFn.easingElasticIn = function(t) {
    var s, _kea = 0.1, _kep = 0.4;
    if ( t === 0 ) return 0; if ( t === 1 ) return 1;
    if ( !_kea || _kea < 1 ) { _kea = 1; s = _kep / 4; } else s = _kep * Math.asin( 1 / _kea ) / Math.PI * 2;
    return - ( _kea * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t - s ) * Math.PI * 2 / _kep ) );
  };
  easingFn.easingElasticOut = function(t) {
    var s, _kea = 0.1, _kep = 0.4;
    if ( t === 0 ) return 0; if ( t === 1 ) return 1;
    if ( !_kea || _kea < 1 ) { _kea = 1; s = _kep / 4; } else s = _kep * Math.asin( 1 / _kea ) / Math.PI * 2 ;
    return ( _kea * Math.pow( 2, - 10 * t) * Math.sin( ( t - s ) * Math.PI * 2  / _kep ) + 1 );
  };
  easingFn.easingElasticInOut = function(t) {
    var s, _kea = 0.1, _kep = 0.4;
    if ( t === 0 ) return 0; if ( t === 1 ) return 1;
    if ( !_kea || _kea < 1 ) { _kea = 1; s = _kep / 4; } else s = _kep * Math.asin( 1 / _kea ) / Math.PI * 2 ;
    if ( ( t *= 2 ) < 1 ) return - 0.5 * ( _kea * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t - s ) * Math.PI * 2  / _kep ) );
    return _kea * Math.pow( 2, -10 * ( t -= 1 ) ) * Math.sin( ( t - s ) * Math.PI * 2  / _kep ) * 0.5 + 1;
  };
  easingFn.easingBounceIn = function(t) { return 1 - easingFn.easingBounceOut( 1 - t ); };
  easingFn.easingBounceOut = function(t) {
    if ( t < ( 1 / 2.75 ) ) { return 7.5625 * t * t; }
    else if ( t < ( 2 / 2.75 ) ) { return 7.5625 * ( t -= ( 1.5 / 2.75 ) ) * t + 0.75; }
    else if ( t < ( 2.5 / 2.75 ) ) { return 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + 0.9375; }
    else {return 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + 0.984375; }
  };
  easingFn.easingBounceInOut = function(t) { if ( t < 0.5 ) return easingFn.easingBounceIn( t * 2 ) * 0.5; return easingFn.easingBounceOut( t * 2 - 1 ) * 0.5 + 0.5;};

  // single Tween object construct
  var Tween = function (targetElement, startObject, endObject, optionsObj) {
      this[element] = 'scroll' in endObject && (targetElement === undefined || targetElement === null) ? scrollContainer : targetElement; // element animation is applied to

      this[playing] = false;
      this.reversed = false;
      this.paused = false;

      this._startTime = null;
      this._pauseTime = null;

      this._startFired = false;
      this[options] = {}; for (var o in optionsObj) { this[options][o] = optionsObj[o]; }
      this[options].rpr = optionsObj.rpr || false; // internal option to process inline/computed style at start instead of init true/false

      this[valuesRepeat] = {}; // internal valuesRepeat
      this[valuesEnd] = {}; // valuesEnd
      this[valuesStart] = {}; // valuesStart

      preparePropertiesObject.call(this,endObject,'end'); // valuesEnd
      if ( this[options].rpr ) { this[valuesStart] = startObject; } else { preparePropertiesObject.call(this,startObject,'start'); } // valuesStart

      if ( this[options].perspective !== undefined && transformProperty in this[valuesEnd] ) { // element transform perspective
        var perspectiveString = 'perspective('+parseInt(this[options].perspective)+'px)';
        this[valuesEnd][transformProperty].perspective = perspectiveString;
      }

      for ( var repeatProp in this[valuesEnd] ) {
        if (repeatProp in crossCheck && !this[options].rpr) crossCheck[repeatProp].call(this); // this is where we do the valuesStart and valuesEnd check for fromTo() method
      }

      this[options][chain] = []; // chained Tweens
      this[options][easing] = processEasing(optionsObj[easing]) || easingFn[defaultOptions[easing]] || easingFn['linear']; // you can only set a core easing function as default
      this[options][repeat] = optionsObj[repeat] || defaultOptions[repeat];
      this[options][repeatDelay] = optionsObj[repeatDelay] || defaultOptions[repeatDelay];
      this[options][yoyo] = optionsObj[yoyo] || defaultOptions[yoyo];
      this[options][duration] = optionsObj[duration] || defaultOptions[duration]; // duration option | default
      this[options][delay] = optionsObj[delay] || defaultOptions[delay]; // delay option | default

      this[repeat] = this[options][repeat]; // we cache the number of repeats to be able to put it back after all cycles finish
    },
    // tween control and chain
    TweenProto = Tween.prototype = {
      // queue tween object to main frame update
      start : function (t) { // move functions that use the ticker outside the prototype to be in the same scope with it
        scrollIn.call(this);

        if ( this[options].rpr ) { getStartValues.apply(this); } // on start we reprocess the valuesStart for TO() method
        perspective.apply(this); // apply the perspective and transform origin

        for ( var endProp in this[valuesEnd] ) {
          if (endProp in crossCheck && this[options].rpr) crossCheck[endProp].call(this); // this is where we do the valuesStart and valuesEnd check for to() method
          this[valuesRepeat][endProp] = this[valuesStart][endProp];
        }

        // now it's a good time to start
        tweens.push(this);
        this[playing] = true;
        this.paused = false;
        this._startFired = false;
        this._startTime = t || time.now();
        this._startTime += this[options][delay];

        if (!this._startFired) {
          if (this[options].start) { this[options].start.call(this); }
          this._startFired = true;
        }
        !tick && ticker();
        return this;
      },
      play : function () {
        if (this.paused && this[playing]) {
          this.paused = false;
          if (this[options].resume) { this[options].resume.call(this); }
          this._startTime += time.now()  - this._pauseTime;
          add(this);
          !tick && ticker();  // restart ticking if stopped
        }
        return this;
      },
      resume : function () { return this.play(); },
      pause : function() {
        if (!this.paused && this[playing]) {
          remove(this);
          this.paused = true;
          this._pauseTime = time.now();
          if (this[options].pause) { this[options].pause.call(this); }
        }
        return this;
      },
      stop : function () {
        if (!this.paused && this[playing]) {
          remove(this);
          this[playing] = false;
          this.paused = false;
          scrollOut.call(this);

          if (this[options].stop) { this[options].stop.call(this); }
          this.stopChainedTweens();
          close.call(this);
        }
        return this;
      },
      chain : function() { this[options][chain] = arguments; return this; },
      stopChainedTweens : function () {
        for (var i = 0, ctl = this[options][chain][length]; i < ctl; i++) {
          this[options][chain][i].stop();
        }
      }
    },

    // the multi elements Tween constructs
    TweensTO = function (els, vE, o) { // .to
      this.tweens = []; var optionsObj = [];
      for ( var i = 0, tl = els[length]; i < tl; i++ ) {
        optionsObj[i] = o || {}; o[delay] = o[delay] || defaultOptions[delay];
        optionsObj[i][delay] = i>0 ? o[delay] + (o[offset]||defaultOptions[offset]) : o[delay];
        this.tweens.push( to(els[i], vE, optionsObj[i]) );
      }
    },
    TweensFT = function (els, vS, vE, o) { // .fromTo
      this.tweens = []; var optionsObj = [];
      for ( var i = 0, l = els[length]; i < l; i++ ) {
        optionsObj[i] = o || {}; o[delay] = o[delay] || defaultOptions[delay];
        optionsObj[i][delay] = i>0 ? o[delay] + (o[offset]||defaultOptions[offset]) : o[delay];
        this.tweens.push( fromTo(els[i], vS, vE, optionsObj[i]) );
      }
    },
    ws = TweensTO.prototype = TweensFT.prototype = {
      start : function(t){
        t = t || time.now();
        for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) {
          this.tweens[i].start(t);
        }
        return this;
      },
      stop : function(){ for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) { this.tweens[i].stop(); } return this; },
      pause : function(){ for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) { this.tweens[i].pause(); } return this; },
      chain : function(){ this.tweens[this.tweens[length]-1][options][chain] = arguments; return this; },
      play : function(){ for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) { this.tweens[i].play(); } return this; },
      resume : function() {return this.play()}
    },

    // main methods
    to = function (element, endObject, optionsObj) {
      optionsObj = optionsObj || {}; optionsObj.rpr = true;
      return new Tween(selector(element), endObject, endObject, optionsObj);
    },
    fromTo = function (element, startObject, endObject, optionsObj) {
      optionsObj = optionsObj || {};
      return new Tween(selector(element), startObject, endObject, optionsObj);
    },

    // multiple elements tweening
    allTo = function (elements, endObject, optionsObj) {
      return new TweensTO(selector(elements,true), endObject, optionsObj);
    },
    allFromTo = function (elements, startObject, endObject, optionsObj) {
      return new TweensFT(selector(elements,true), startObject, endObject, optionsObj);
    };

  document[addEventListener](touchOrWheel, preventScroll, false);
  document[addEventListener](mouseEnter, preventScroll, false);

  return { // export core methods to public for plugins
    property: property, getPrefix: getPrefix, selector: selector, processEasing : processEasing, // utils
    defaultOptions : defaultOptions, // default tween options since 1.6.1
    to: to, fromTo: fromTo, allTo: allTo, allFromTo: allFromTo, // main methods
    ticker : ticker, tick : tick, tweens : tweens, update: update, dom : DOM, // update
    parseProperty: parseProperty, prepareStart: prepareStart, crossCheck : crossCheck, Tween : Tween, // property parsing & preparation | Tween | crossCheck
    truD: trueDimension, truC: trueColor, rth: rgbToHex, htr: hexToRGB, getCurrentStyle: getCurrentStyle, // property parsing
  };
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)))

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kute_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kute_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_kute_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_assist__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_tools__ = __webpack_require__(77);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MkuSwiper',
  props: {
    value: {
      type: Number,
      default: 0
    },
    // 宽度
    width: {
      type: [String, Number],
      default: '100%'
    },
    // 高度
    height: {
      type: [String, Number],
      default: 'auto'
    },
    // 是否循环
    loop: {
      type: Boolean,
      default: true
    },
    // 自动轮播
    autoplay: {
      type: Boolean,
      default: true
    },
    // 自动轮播的时间间隔
    duration: {
      type: Number,
      default: 3000
    },
    // 用户操作后是否禁止轮播
    disableOnInteraction: {
      type: Boolean,
      default: false
    },
    // 轮播的动画速度
    speed: {
      type: Number,
      default: 300
    },
    // 左右按钮显示方式
    arrow: {
      type: String,
      default: 'hover',
      validator: function validator(val) {
        return ['hover', 'always', 'never'].includes(val);
      }
    },
    // 分页器触发方式
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(val) {
        return ['hover', 'click'].includes(val);
      }
    }
  },
  provide: function provide() {
    return {
      root: this
    };
  },
  data: function data() {
    return {
      items: [],
      swiperWidth: 0,
      totalWidth: 0,
      current: null,
      isAtSwiper: false
    };
  },

  watch: {
    value: {
      handler: 'watchValueChange',
      immediate: true
    },
    currentIndex: 'watchCurIdxChange',
    autoplay: 'watchAutoplay'
  },
  computed: {
    // 拼接swiper的宽高样式
    swiperStyle: function swiperStyle() {
      var width = Object(__WEBPACK_IMPORTED_MODULE_2__utils_tools__["c" /* formatSize */])(this.width);
      var height = Object(__WEBPACK_IMPORTED_MODULE_2__utils_tools__["c" /* formatSize */])(this.height);
      return { width: width, height: height };
    },

    // 拼接wrap容器的宽度
    wrapStyle: function wrapStyle() {
      var width = this.swiperWidth * (this.items.length + 1) + 'px';
      return { width: width };
    },

    // 拼接分页器的class name
    dotsClasss: function dotsClasss() {
      var _this = this;

      return function (index) {
        return ['mku-swiper__dot', {
          'mku-swiper__dot--active': _this.currentIndex === index
        }];
      };
    },

    // 当前的下标，指当前所应该展示的下标（不考虑是否拼接的占位）
    currentIndex: function currentIndex() {
      if (this.current < 0) return this.items.length;
      if (this.current >= this.items.length) return 0;
      return this.current;
    }
  },
  mounted: function mounted() {
    this.initDoms();
  },

  methods: {
    /**
     * @method updateItems
     * @description 由子组件调用，初始化items和dom
     */
    updateItems: function updateItems() {
      var childs = Object(__WEBPACK_IMPORTED_MODULE_1__utils_assist__["d" /* findComponentsDownward */])(this, 'MkuSwiperItem');
      this.items = childs || [];
      this.initDoms();
    },

    /**
     * @method initDoms
     * @description 初始化dom
     * - 拷贝第一个元素的dom插入到最后进行无缝滚动轮播的占位
     */
    initDoms: function initDoms() {
      this.swiperWidth = this.$refs.swiper.clientWidth;
      if (this.items && this.items.length) {
        var wrap = this.$refs.wrap;
        wrap.innerHTML = '';

        var fragment = document.createDocumentFragment();
        this.items.forEach(function (item) {
          fragment.appendChild(item.$el);
        });

        // 将第一个节点复制插入最后
        var firstNodeClone = this.items[0].$el.cloneNode(true);
        firstNodeClone.style.width = this.swiperWidth + 'px';
        fragment.appendChild(firstNodeClone);
        wrap.appendChild(fragment);
        this.resetTranslate();
        this.startAutoplay();
      }
    },

    // 自动轮播
    startAutoplay: function startAutoplay() {
      var _this2 = this;

      if (this.autoplay) {
        this.stopAutoplay();
        this.timer = setInterval(function () {
          _this2.handleNext();
        }, this.duration);
      }
    },

    // 停止自动轮播
    stopAutoplay: function stopAutoplay() {
      if (this.timer) clearInterval(this.timer);
    },

    /**
     * @method animate
     * @description 轮播切换动画
     */
    animate: function animate(cb) {
      var _this3 = this;

      this.$emit('animate-begin', this.current);
      var wrap = this.$refs.wrap;
      if (!wrap) return;
      var toState = {
        translateX: -this.current * this.swiperWidth + 'px'
      };
      var config = {
        duration: this.speed,
        complete: function complete() {
          _this3.$emit('animate-finish', _this3.current);
        }
      };
      __WEBPACK_IMPORTED_MODULE_0_kute_js___default.a.to(wrap, toState, config).start();
    },

    /**
     * @method resetTranslate
     * @description 根据current，将wrap瞬间移动到指定位置
     * 主要用于极限值的瞬间切换、value变化的瞬间切换
     */
    resetTranslate: function resetTranslate() {
      var wrap = this.$refs.wrap;
      if (wrap) {
        var offset = '-' + this.current * this.swiperWidth + 'px, 0, 0';
        wrap.style.transform = 'translate3d(' + offset + ')';
      }
    },

    /**
     * @method handlePrev
     * @description 点击prev-button，切换swiper
     * - 极限值是0
     * - 判断是否循环轮播
     */
    handlePrev: function handlePrev() {
      if (!this.items.length) return;
      var curRecord = this.current;
      if (this.loop) {
        if (this.current <= 0) {
          this.current = this.items.length;
          this.resetTranslate();
        }
        this.current--;
      } else {
        if (this.current <= 0) return;
        this.current--;
      }
      this.$emit('prev-click', this.current, curRecord);
      this.animate();
    },

    /**
     * @method handleNext
     * @description 点击next-button，切换swiper
     * - 极限值是轮播图的长度
     * - 判断是否循环轮播
     */
    handleNext: function handleNext() {
      if (!this.items.length) return;
      var curRecord = this.current;
      if (this.loop) {
        if (this.current >= this.items.length) {
          this.current = 0;
          this.resetTranslate();
        }
        this.current++;
      } else {
        if (this.current >= this.items.length - 1) return;
        this.current++;
      }
      this.$emit('next-click', this.current, curRecord);
      this.animate();
    },

    /**
     * @method handleDotsClick
     * @description 点击指示器，切换swiper
     * - 仅指示器触发方式为click时生效
     */
    handleDotsClick: function handleDotsClick(index) {
      if (this.trigger !== 'click') return;
      this.current = index;
      this.animate();
    },

    /**
     * @method handleDotsHover
     * @description 鼠标滑过指示器，切换swiper
     * - 仅指示器触发方式为click时生效
     */
    handleDotsHover: function handleDotsHover(index) {
      if (this.trigger !== 'hover') return;
      this.current = index;
      this.animate();
    },

    /**
     * @method handleHoverSwiper
     * @description 鼠标滑过swiper
     * - 是否禁止自动轮播
     * - 是否显示左右按钮
     */
    handleHoverSwiper: function handleHoverSwiper(type) {
      if (!this.disableOnInteraction) {
        type === 'enter' ? this.stopAutoplay() : this.startAutoplay();
      }
      if (this.arrow === 'hover') {
        this.isAtSwiper = type === 'enter';
      }
    },

    /**
     * @method watchValueChange
     * @description 监听value变化，更新current，将组件位移到对应位置
     */
    watchValueChange: function watchValueChange(newVal, oldVal) {
      this.current = newVal;
      this.resetTranslate();
      this.startAutoplay();
    },

    /**
     * @method watchCurIdxChange
     * @description 监听currentIndex变化，对外暴露change事件
     * @return 返回当前下标和上一张下标
     */
    watchCurIdxChange: function watchCurIdxChange(newVal, oldVal) {
      if (newVal === oldVal) return;
      this.$emit('change', newVal, oldVal);
    },

    /**
     * @method watchAutoplay
     * @description 监听watchAutoplay变化，停止/开启自动轮播
     */
    watchAutoplay: function watchAutoplay(newVal, oldVal) {
      newVal ? this.startAutoplay() : this.stopAutoplay();
    },

    /**
     * @method swipeTo
     * @description 对外暴露方法，切换到对应的索引位置
     */
    swipeTo: function swipeTo(index) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_assist__["i" /* isNumber */])(index)) {
        var max = this.items.length - 1;
        this.current = index > max ? max : index <= 0 ? 0 : index;
        this.animate();
      }
    },

    /**
     * @method prev
     * @description 对外暴露方法，切换到上一张
     */
    prev: function prev() {
      this.handlePrev();
    },

    /**
     * @method next
     * @description 对外暴露方法，切换到下一张
     */
    next: function next() {
      this.handleNext();
    }
  }
});

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_swiper__ = __webpack_require__(297);


__WEBPACK_IMPORTED_MODULE_0__src_swiper__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_swiper__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_swiper__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_swiper__["a" /* default */]);

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(195);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2baf3432_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(298);
var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2baf3432_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/lib/swiper/src/swiper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2baf3432", Component.options)
  } else {
    hotAPI.reload("data-v-2baf3432", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "swiper",
      staticClass: "mku-swiper",
      style: _vm.swiperStyle,
      on: {
        mouseenter: function($event) {
          return _vm.handleHoverSwiper("enter")
        },
        mouseleave: function($event) {
          return _vm.handleHoverSwiper("leave")
        }
      }
    },
    [
      _c(
        "div",
        {
          ref: "wrap",
          staticClass: "mku-swiper__wrap mku-global-clear",
          style: _vm.wrapStyle
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.arrow !== "never"
        ? [
            _c("transition", { attrs: { name: "mku-swiper-animation-btn" } }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.arrow === "always" || _vm.isAtSwiper,
                      expression: "arrow === 'always' || isAtSwiper"
                    }
                  ],
                  staticClass: "mku-swiper__btn mku-swiper__btn--left",
                  on: { click: _vm.handlePrev }
                },
                [
                  _vm._t("prev", [
                    _c("i", {
                      staticClass: "mku-icon mku-icon-double-arrow-left"
                    })
                  ])
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("transition", { attrs: { name: "mku-swiper-animation-btn" } }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.arrow === "always" || _vm.isAtSwiper,
                      expression: "arrow === 'always' || isAtSwiper"
                    }
                  ],
                  staticClass: "mku-swiper__btn mku-swiper__btn--right",
                  on: { click: _vm.handleNext }
                },
                [
                  _vm._t("next", [
                    _c("i", {
                      staticClass: "mku-icon mku-icon-double-arrow-right"
                    })
                  ])
                ],
                2
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "mku-swiper__dots" },
        _vm._l(_vm.items, function(item, index) {
          return _c("li", {
            key: index,
            class: _vm.dotsClasss(index),
            on: {
              click: function($event) {
                return _vm.handleDotsClick(index)
              },
              mouseover: function($event) {
                return _vm.handleDotsHover(index)
              }
            }
          })
        }),
        0
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-2baf3432", esExports)
  }
}

/***/ })
/******/ ]);
});