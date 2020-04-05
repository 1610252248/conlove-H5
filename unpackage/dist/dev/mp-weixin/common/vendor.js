(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {return;}var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*****************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/pages.json ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26820200330001","_inBundle":false,"_integrity":"sha512-Qzo5LcBl+abS7DvpyTXBYW2VVYHVcHBewduQecjn/gbzAn9e90aOVn02/2VZ82wV6TBiDXbGyloXojOY3InzWA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26820200330001.tgz","_shasum":"880c5c5a4920bb35e9cf691eeb7427a7bf67ffd7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"57ef7f7b5b6164a74ec425ff12f9fe0a1147841a","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26820200330001"};

/***/ }),
/* 7 */
/*!**********************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/pages.json?{"type":"style"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/home/home": { "navigationBarTitleText": "缘来", "enablePullDownRefresh": true, "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/square/post": { "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/square/square": { "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/square/treeHole": { "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/user/user": { "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/release/release": { "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/message/message": { "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/home/homeDetail": { "navigationBarTitleText": "帖子详情", "usingComponents": {}, "usingAutoImportComponents": {} } }, "globalStyle": { "navigationBarTextStyle": "black", "navigationBarTitleText": "缘来是你", "navigationBarBackgroundColor": "#FFFFFF", "backgroundColor": "#FFFFFF" } };exports.default = _default;

/***/ }),
/* 8 */
/*!*********************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/pages.json?{"type":"stat"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__9023E73" };exports.default = _default;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!**********************************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/common/zhouWei-request/requestConfig.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var baseUrl = "https://www.conlove.cn/api";
//可以new多个request来支持多个域名请求
var $http = new _request.default({
  //接口请求地址
  baseUrl: baseUrl,
  //服务器本地上传文件地址
  fileUrl: baseUrl,
  //设置请求头
  headers: {
    'content-type': 'application/json;charset=UTF-8' },

  //以下是默认值可不写
  //是否提示--默认提示
  isPrompt: true,
  //是否显示请求动画
  load: false,
  //是否使用处理数据模板
  isFactory: false,
  //列表接口是否有加载判断
  loadMore: false });

//当前接口请求数
var requestNum = 0;
//请求开始拦截器
$http.requestStart = function (options) {
  if (requestNum <= 0) {
    uni.showNavigationBarLoading();
    if (options.load) {
      //打开加载动画
      uni.showLoading({
        title: '加载中',
        mask: true });

    }
  }
  requestNum += 1;
  //请求前加入token
  // options.headers['token'] = "1234568";
  // console.log("请求开始前", options);
  return options;
};
//请求结束
$http.requestEnd = function (options, resolve) {
  //判断当前接口是否需要加载动画
  requestNum = requestNum - 1;
  if (requestNum <= 0) {
    uni.hideLoading();
    uni.hideNavigationBarLoading();
  }
  if (resolve.errMsg && (resolve.errMsg != "request:ok" || resolve.statusCode && resolve.statusCode != 200)) {
    uni.showToast({
      title: "网络错误，请检查一下网络",
      icon: "none" });

  }
};
//登录弹窗次数
var loginPopupNum = 0;
//所有接口数据处理（可在接口里设置不调用此方法）
$http.dataFactory = function (options, resolve) {
  console.log("接口返回结果", resolve);
  //设置回调默认值
  var callback = {
    //success数据是否请求成功状态
    success: false,
    //这里返回的数据就是调用请求方法收到的数据
    result: "" };

  //判断数据是否请求成功
  if (resolve.data.success) {
    callback.success = true;
    callback.result = resolve.data.data;
  } else if (resolve.data.code == "1000" || resolve.data.code == "1001") {
    //未登录或登录已失效
    if (loginPopupNum <= 0) {
      loginPopupNum++;
      uni.showModal({
        title: '温馨提示',
        content: '此时此刻需要您登录喔~',
        confirmText: "去登录",
        cancelText: "再逛会",
        success: function success(res) {
          loginPopupNum--;
          if (res.confirm) {
            uni.navigateTo({
              url: "'/pages/login" });

          }
        } });

    }
  } else {//其他错误提示
    //设置可以提示的时候
    if (options.isPrompt) {
      setTimeout(function () {
        //提示后台接口抛出的错误信息
        uni.showToast({
          title: resolve.data.info,
          icon: "none",
          duration: 3000 });

      }, 500);
    }
    callback.result = resolve.data;
  }
  return callback;
};var _default =
$http;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!****************************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/common/zhouWei-request/request.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var request = /*#__PURE__*/function () {
  function request(options) {_classCallCheck(this, request);
    //请求公共地址
    this.baseUrl = options.baseUrl || "";
    //公共文件上传请求地址
    this.fileUrl = options.fileUrl || "";
    //默认请求头
    this.headers = options.headers || {};
    //默认配置
    //是否提示--默认提示
    this.isPrompt = options.isPrompt || false;
    //是否显示请求动画
    this.load = options.load || false;
    //是否使用处理数据模板
    this.isFactory = options.isFactory || false;
    //列表接口是否有加载判断
    this.loadMore = options.loadMore || false;
  }
  // 获取默认信息
  _createClass(request, [{ key: "getDefault", value: function getDefault(url, options, type) {
      //判断url是不是链接
      var urlType = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~/])+$/.test(url);
      var httpUrl;
      if (type == "file") {
        httpUrl = urlType ? url : this.fileUrl + url;
      } else {
        httpUrl = urlType ? url : this.baseUrl + url;
      }
      var config = Object.assign({
        isPrompt: this.isPrompt,
        load: this.load,
        isFactory: this.isFactory,
        loadMore: this.loadMore },
      options);
      //请求地址
      config.httpUrl = httpUrl;
      //请求头
      config.headers = Object.assign(this.headers, options.headers);
      return config;
    }

    //post请求
  }, { key: "post", value: function post() {var _this2 = this;var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var requestInfo = this.getDefault(url, options, "data");
      requestInfo.data = data;
      return new Promise(function (resolve, reject) {
        _this2.getRequest("POST", requestInfo, function (state, response) {
          //是否用外部的数据处理方法
          if (state && requestInfo.isFactory && _this2.dataFactory) {
            //数据处理
            var factoryInfo = _this2.dataFactory(requestInfo, response);
            factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
          } else {
            state ? resolve(response) : reject(response);
          }
        });
      });
    }
    //get请求
  }, { key: "get", value: function get() {var _this3 = this;var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var requestInfo = this.getDefault(url, options, "data");
      requestInfo.data = data;
      return new Promise(function (resolve, reject) {
        _this3.getRequest("GET", requestInfo, function (state, response) {
          //是否用外部的数据处理方法
          if (state && requestInfo.isFactory && _this3.dataFactory) {
            //数据处理
            var factoryInfo = _this3.dataFactory(requestInfo, response);
            factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
          } else {
            state ? resolve(response) : reject(response);
          }
        });
      });
    }
    //put请求
  }, { key: "put", value: function put() {var _this4 = this;var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var requestInfo = this.getDefault(url, options, "data");
      requestInfo.data = data;
      return new Promise(function (resolve, reject) {
        _this4.getRequest("PUT", requestInfo, function (state, response) {
          //是否用外部的数据处理方法
          if (state && requestInfo.isFactory && _this4.dataFactory) {
            //数据处理
            var factoryInfo = _this4.dataFactory(requestInfo, response);
            factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
          } else {
            state ? resolve(response) : reject(response);
          }
        });
      });
    }
    //delete请求
  }, { key: "delete", value: function _delete() {var _this5 = this;var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var requestInfo = this.getDefault(url, options, "data");
      requestInfo.data = data;
      return new Promise(function (resolve, reject) {
        _this5.getRequest("DELETE", requestInfo, function (state, response) {
          //是否用外部的数据处理方法
          if (state && requestInfo.isFactory && _this5.dataFactory) {
            //数据处理
            var factoryInfo = _this5.dataFactory(requestInfo, response);
            factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
          } else {
            state ? resolve(response) : reject(response);
          }
        });
      });
    }

    //接口请求方法
  }, { key: "getRequest", value: function getRequest(ajaxType, options, callback) {var _this6 = this;
      //请求前回调
      if (this.requestStart) {
        options.method = ajaxType;
        var requestStart = this.requestStart(options);
        if (typeof requestStart == "object") {
          options.data = requestStart.data;
          options.headers = requestStart.headers;
          options.isPrompt = requestStart.isPrompt;
          options.load = requestStart.load;
          options.isFactory = requestStart.isFactory;
        } else {
          callback(false, "请求开始拦截器未通过");
          return;
        }
      }
      uni.request({
        url: options.httpUrl,
        data: options.data,
        method: ajaxType, //请求类型
        header: options.headers, //加入请求头
        success: function success(res) {
          //请求完成回调
          _this6.requestEnd && _this6.requestEnd(options, res);
          callback(true, res);
        },
        fail: function fail(err) {
          //请求完成回调
          _this6.requestEnd && _this6.requestEnd(options, err);
          callback(false, err);
        } });

    }
    //jsonp请求(只限于H5使用)
  }, { key: "jsonp", value: function jsonp() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var requestInfo = this.getDefault(url, options, "data");
      var dataStr = '';
      Object.keys(data).forEach(function (key) {
        dataStr += key + '=' + data[key] + '&';
      });
      //匹配最后一个&并去除
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      }
      requestInfo.httpUrl = requestInfo.httpUrl + '?' + dataStr;
      var _this = this;
      return new Promise(function (resolve, reject) {
        var callbackName = "callback" + Math.ceil(Math.random() * 1000000);
        if (_this.requestStart) {
          requestInfo.data = data;
          var requestStart = _this.requestStart(requestInfo);
          if (typeof requestStart == "object") {
            requestInfo.data = requestStart.data;
            requestInfo.headers = requestStart.headers;
            requestInfo.isPrompt = requestStart.isPrompt;
            requestInfo.load = requestStart.load;
            requestInfo.isFactory = requestStart.isFactory;
          } else {
            reject("请求开始拦截器未通过");
            return;
          }
        }
        window[callbackName] = function (data) {
          resolve(data);
        };
        var script = document.createElement("script");
        script.src = requestInfo.httpUrl + "&callback=" + callbackName;
        document.head.appendChild(script);
        // 及时删除，防止加载过多的JS
        document.head.removeChild(script);
        //请求完成回调
        _this.requestEnd && _this.requestEnd(requestInfo, {});
      });
    }

    //本地服务器图片上传
  }, { key: "urlImgUpload", value: function urlImgUpload() {var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var requestInfo = this.getDefault(url, options, "file");
      requestInfo.data = data;
      var _this = this;
      return new Promise(function (resolve, reject) {
        uni.chooseImage({
          count: data.count || 9, //默认9
          sizeType: data.sizeType || ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: data.sourceType || ['album', 'camera'], //从相册选择
          success: function success(res) {
            _this.urlFileUpload(requestInfo, res.tempFiles, function (state, response) {
              state ? resolve(response) : reject(response);
            });
          } });

      });
    }
    //本地服务器文件上传方法
  }, { key: "urlFileUpload", value: function urlFileUpload(options, files, callback) {
      var _this = this;
      //请求前回调
      if (this.requestStart) {
        options.method = "FILE";
        var requestStart = this.requestStart(options);
        if (typeof requestStart == "object") {
          if (typeof requestStart == "object") {
            options.data = requestStart.data;
            options.headers = requestStart.headers;
            options.isPrompt = requestStart.isPrompt;
            options.load = requestStart.load;
            options.isFactory = requestStart.isFactory;
          } else {
            callback(false, "请求开始拦截器未通过");
            return;
          }
        }
      }
      var len = files.length - 1;
      var fileList = new Array();
      fileUpload(0);
      function fileUpload(i) {
        var config = {
          url: options.httpUrl,
          filePath: files[i].path,
          header: options.headers, //加入请求头
          name: options.name || "file",
          success: function success(response) {
            response.data = JSON.parse(response.data);
            //请求完成回调
            _this.requestEnd && _this.requestEnd(options, response);
            //是否用外部的数据处理方法
            if (options.isFactory && _this.dataFactory) {
              //数据处理
              var factoryInfo = _this.dataFactory(options, response);
              if (factoryInfo.success) {
                fileList.push(factoryInfo.result);
                if (len <= i) {
                  callback(true, fileList);
                } else {
                  fileUpload(i + 1);
                }
              } else {
                callback(false, factoryInfo.result);
              }
            } else {
              fileList.push(response.data);
              if (len <= i) {
                callback(true, fileList);
              } else {
                fileUpload(i + 1);
              }
            }
          },
          fail: function fail(err) {
            //请求完成回调
            _this.requestEnd && _this.requestEnd(options, err);
            callback(false, err);
          } };

        if (options.data) {
          config.formData = options.data;
        }
        uni.uploadFile(config);
      }
    } }]);return request;}();exports.default = request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 17 */
/*!**********************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/common/utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) { /*
               * strBirthday: 2010.9.8
               * 由生日获取岁数
               */
function getAge(strBirthday) {
  var returnAge;
  var strBirthdayArr = strBirthday.split("-");
  var birthYear = strBirthdayArr[0];
  var birthMonth = strBirthdayArr[1];
  var birthDay = strBirthdayArr[2];

  var now = new Date();
  var nowYear = now.getFullYear();
  var nowMonth = now.getMonth() + 1;
  var nowDay = now.getDate();

  if (nowYear == birthYear) {
    returnAge = 0; //同年 则为0岁
  } else {
    var ageDiff = nowYear - birthYear; //年之差
    if (ageDiff > 0) {
      if (nowMonth == birthMonth) {
        var dayDiff = nowDay - birthDay; //日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      } else {
        var monthDiff = nowMonth - birthMonth; //月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      }
    } else {
      returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
    }
  }

  return returnAge; //返回周岁年龄
}

// function fromNow(date) {
// 	var dur = new Date() - new Date(date);
// 	return (
// 		dur < 10 * 1000 && '刚刚' ||
// 		dur < 30 * 60 * 1000 && '半小时前' ||
// 		dur < 60 * 60 * 1000 && '一小时前' ||
// 		dur < 12 * 60 * 60 * 1000 && '半天前' ||
// 		dur < 24 * 60 * 60 * 1000 && '一天前' ||
// 		dur < 3 * 24 * 60 * 60 * 1000 && '三天前' ||
// 		dur < 7 * 24 * 60 * 60 * 1000 && '一周前' ||
// 		dur < 14 * 24 * 60 * 60 * 1000 && '两周前' ||
// 		dur < 30 * 24 * 60 * 60 * 1000 && '一个月前' || '很久以前'
// 	)
// }

// 一级登录验证
function needLogin() {
  uni.showToast({
    title: '请登录后操作',
    icon: "none",
    duration: 2000,
    success: function success() {
      uni.navigateTo({
        url: '/pages/index/login' });

    } });

}

module.exports = {
  getAge: getAge,
  // fromNow: fromNow,
  needLogin: needLogin };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/*!*********************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/static/image sync ^\.\/.*$ ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./avatar-default.png": 25,
	"./female.png": 26,
	"./male.png": 27,
	"./top.png": 28
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 24;

/***/ }),
/* 25 */
/*!**************************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/static/image/avatar-default.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 26 */
/*!******************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/static/image/female.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 27 */
/*!****************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/static/image/male.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 28 */
/*!***************************************************************************!*\
  !*** C:/Users/Li/Documents/HBuilderProjects/conlove/static/image/top.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map