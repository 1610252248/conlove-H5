import Vue from 'vue'
import App from './App'
import $utils from 'common/utils.js';
import $http from 'common/zhouWei-request/requestConfig.js'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

Vue.prototype.$eventBus = new Vue();//注册全局事件对象

import uView from "uview-ui";
Vue.use(uView);

Vue.prototype.$http = $http;
Vue.prototype.$utils = $utils;
Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
	...App
})
app.$mount()



